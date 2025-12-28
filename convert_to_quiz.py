#!/usr/bin/env python3
"""
Script per convertire i file HTML delle soluzioni in formato Quiz Mode.
Divide la soluzione in passaggi rivelabili uno alla volta.
"""

import os
import re
from pathlib import Path

SOLUZIONI_DIR = Path(__file__).parent / "content" / "soluzioni"

QUIZ_STYLES = '''
<style>
    .quiz-container {
        max-width: 900px;
        margin: 0 auto;
        padding: 20px;
    }
    .question-section {
        background: linear-gradient(135deg, #e8f4f8 0%, #d4edda 100%);
        border: 2px solid #17a2b8;
        border-radius: 10px;
        padding: 25px;
        margin-bottom: 20px;
    }
    .question-section h2 {
        color: #0c5460;
        margin-top: 0;
        margin-bottom: 15px;
    }
    .show-next-btn {
        display: block;
        width: 100%;
        padding: 15px 30px;
        font-size: 1.1em;
        font-weight: bold;
        color: white;
        background: linear-gradient(135deg, #007bff, #0056b3);
        border: none;
        border-radius: 8px;
        cursor: pointer;
        margin: 15px 0;
        transition: all 0.3s ease;
    }
    .show-next-btn:hover {
        background: linear-gradient(135deg, #0056b3, #004094);
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 123, 255, 0.4);
    }
    .show-all-btn {
        background: linear-gradient(135deg, #28a745, #20c997);
        margin-top: 10px;
    }
    .show-all-btn:hover {
        background: linear-gradient(135deg, #218838, #1db385);
        box-shadow: 0 4px 12px rgba(40, 167, 69, 0.4);
    }
    .step-container {
        display: none;
        animation: fadeIn 0.5s ease;
        margin-bottom: 20px;
        border: 1px solid #dee2e6;
        border-radius: 10px;
        overflow: hidden;
    }
    .step-container.visible {
        display: block;
    }
    .step-header {
        background: linear-gradient(135deg, #6c757d, #495057);
        color: white;
        padding: 12px 20px;
        font-weight: bold;
        display: flex;
        align-items: center;
    }
    .step-number-badge {
        background: white;
        color: #495057;
        border-radius: 50%;
        width: 28px;
        height: 28px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        margin-right: 12px;
        font-weight: bold;
    }
    .step-content {
        padding: 20px;
        background: white;
    }
    .progress-bar {
        background: #e9ecef;
        border-radius: 10px;
        height: 8px;
        margin: 15px 0;
        overflow: hidden;
    }
    .progress-fill {
        background: linear-gradient(90deg, #28a745, #20c997);
        height: 100%;
        border-radius: 10px;
        transition: width 0.5s ease;
    }
    .progress-text {
        text-align: center;
        color: #6c757d;
        font-size: 0.9em;
        margin-bottom: 15px;
    }
    .controls {
        position: sticky;
        bottom: 0;
        background: white;
        padding: 15px;
        border-top: 2px solid #dee2e6;
        margin: 0 -20px -20px;
    }
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
    .final-answer {
        background: #d4edda;
        border: 2px solid #28a745;
        border-radius: 10px;
        padding: 20px;
        margin-top: 20px;
    }
    .final-answer h3 {
        color: #155724;
        margin-top: 0;
    }
</style>
'''

QUIZ_SCRIPT = '''
<script>
    let currentStep = 0;
    let totalSteps = 0;

    document.addEventListener('DOMContentLoaded', function() {
        totalSteps = document.querySelectorAll('.step-container').length;
        updateProgress();
        updateButtons();
    });

    function showNextStep() {
        if (currentStep < totalSteps) {
            const step = document.getElementById('step-' + currentStep);
            if (step) {
                step.classList.add('visible');
                step.scrollIntoView({ behavior: 'smooth', block: 'start' });
                currentStep++;
                updateProgress();
                updateButtons();

                // Notifica parent
                if (window.parent !== window) {
                    window.parent.postMessage({type: 'stepShown', step: currentStep, total: totalSteps}, '*');
                }
            }
        }
    }

    function showAllSteps() {
        document.querySelectorAll('.step-container').forEach(function(step) {
            step.classList.add('visible');
        });
        currentStep = totalSteps;
        updateProgress();
        updateButtons();

        if (window.parent !== window) {
            window.parent.postMessage({type: 'allStepsShown'}, '*');
        }
    }

    function hideAllSteps() {
        document.querySelectorAll('.step-container').forEach(function(step) {
            step.classList.remove('visible');
        });
        currentStep = 0;
        updateProgress();
        updateButtons();
    }

    function updateProgress() {
        const pct = totalSteps > 0 ? (currentStep / totalSteps) * 100 : 0;
        const fill = document.getElementById('progress-fill');
        const text = document.getElementById('progress-text');
        if (fill) fill.style.width = pct + '%';
        if (text) text.textContent = 'Passaggio ' + currentStep + ' di ' + totalSteps;
    }

    function updateButtons() {
        const nextBtn = document.getElementById('next-btn');
        const allBtn = document.getElementById('all-btn');

        if (currentStep >= totalSteps) {
            if (nextBtn) nextBtn.style.display = 'none';
            if (allBtn) allBtn.textContent = 'Soluzione completata!';
            if (allBtn) allBtn.disabled = true;
            if (allBtn) allBtn.style.opacity = '0.7';
        } else {
            if (nextBtn) nextBtn.style.display = 'block';
            if (allBtn) allBtn.textContent = 'Mostra tutta la soluzione';
            if (allBtn) allBtn.disabled = false;
            if (allBtn) allBtn.style.opacity = '1';
        }
    }

    // Messaggi dal parent
    window.addEventListener('message', function(e) {
        if (e.data.type === 'showNext') showNextStep();
        else if (e.data.type === 'showAll') showAllSteps();
        else if (e.data.type === 'hideAll') hideAllSteps();
    });
</script>
'''

def split_into_steps(html_content):
    """Divide il contenuto HTML in step basandosi su h2, h3 o div.step"""
    steps = []

    # Pattern per identificare i separatori di step
    # Cerca h2 con step-number, div.step, div.molecola-box, o semplici h2
    step_patterns = [
        r'(<h2[^>]*>.*?(?=<h2|<div class="molecola-box"|<div class="riassunto"|$))',
        r'(<div class="step">.*?</div>)',
        r'(<div class="molecola-box">.*?</div>(?=<div class="molecola-box"|$))',
    ]

    # Prima prova a dividere per h2
    h2_splits = re.split(r'(?=<h2[^>]*>)', html_content)
    h2_splits = [s.strip() for s in h2_splits if s.strip()]

    if len(h2_splits) > 1:
        # Primo blocco potrebbe essere intro, il resto sono step
        intro = ""
        for i, block in enumerate(h2_splits):
            if block.startswith('<h2'):
                steps.append(block)
            else:
                intro = block

        if intro and steps:
            steps[0] = intro + steps[0]
        elif intro and not steps:
            steps = [intro]

        return steps if len(steps) > 1 else [html_content]

    # Se non ci sono h2, prova con div.step
    step_divs = re.findall(r'<div class="step">(.*?)</div>', html_content, re.DOTALL)
    if len(step_divs) > 1:
        return step_divs

    # Fallback: tutto come un unico step
    return [html_content]

def extract_step_title(step_html):
    """Estrae il titolo dallo step (primo h2 o h3)"""
    # Cerca h2 con step-number
    match = re.search(r'<h2[^>]*>(?:<span[^>]*>\d+</span>)?\s*(.*?)</h2>', step_html, re.DOTALL)
    if match:
        title = re.sub(r'<[^>]+>', '', match.group(1)).strip()
        return title[:50] + '...' if len(title) > 50 else title

    # Cerca h3
    match = re.search(r'<h3[^>]*>(.*?)</h3>', step_html, re.DOTALL)
    if match:
        title = re.sub(r'<[^>]+>', '', match.group(1)).strip()
        return title[:50] + '...' if len(title) > 50 else title

    return "Passaggio"

def find_question(html_content):
    """Trova e estrae la domanda dal contenuto"""
    patterns = [
        r'<div class="testo-esercizio">(.*?)</div>',
        r'<div class="exercise-box">(.*?)</div>',
    ]

    for pattern in patterns:
        match = re.search(pattern, html_content, re.DOTALL)
        if match:
            return match.group(0), match.start(), match.end()

    return None, None, None

def convert_file(filepath):
    """Converte un file HTML al formato quiz con step"""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Skip se già convertito
    if 'quiz-container' in content:
        print(f"  [SKIP] {filepath.name}")
        return False

    # Trova </head>
    head_end = content.find('</head>')
    if head_end == -1:
        print(f"  [WARN] No </head>: {filepath.name}")
        return False

    # Trova body
    body_match = re.search(r'<body[^>]*>', content)
    if not body_match:
        print(f"  [WARN] No <body>: {filepath.name}")
        return False

    body_start = body_match.end()
    body_close = content.rfind('</body>')
    if body_close == -1:
        body_close = len(content)

    # Estrai parti
    before_head_end = content[:head_end]
    head_to_body = content[head_end:body_start]
    body_content = content[body_start:body_close]
    after_body = content[body_close:]

    # Trova titolo
    title_match = re.search(r'<h1[^>]*>(.*?)</h1>', body_content, re.DOTALL)
    title = re.sub(r'<[^>]+>', '', title_match.group(1)).strip() if title_match else "Esercizio"

    # Trova domanda
    question_html, q_start, q_end = find_question(body_content)

    if question_html:
        solution_content = body_content[q_end:]
        # Rimuovi il primo h1 dalla soluzione se presente
        solution_content = re.sub(r'^.*?<h1[^>]*>.*?</h1>', '', solution_content, flags=re.DOTALL)
    else:
        # Fallback: cerca dopo il primo h2
        first_h2 = re.search(r'<h2[^>]*>', body_content)
        if first_h2:
            question_html = f'<p>Risolvi l\'esercizio seguente.</p>'
            solution_content = body_content
        else:
            print(f"  [WARN] Struttura non riconosciuta: {filepath.name}")
            return False

    # Dividi la soluzione in step
    steps = split_into_steps(solution_content)

    # Se c'è solo uno step e non è troppo corto, prova a dividere ulteriormente per h3
    if len(steps) == 1 and len(steps[0]) > 2000:
        h3_splits = re.split(r'(?=<h3[^>]*>)', steps[0])
        h3_splits = [s.strip() for s in h3_splits if s.strip() and len(s) > 100]
        if len(h3_splits) > 1:
            steps = h3_splits

    # Costruisci HTML degli step
    steps_html = ""
    for i, step in enumerate(steps):
        step_title = extract_step_title(step)
        steps_html += f'''
        <div id="step-{i}" class="step-container">
            <div class="step-header">
                <span class="step-number-badge">{i+1}</span>
                {step_title}
            </div>
            <div class="step-content">
                {step}
            </div>
        </div>
        '''

    # Costruisci nuovo body
    new_body = f'''
<div class="quiz-container">
    <h1>{title}</h1>

    <div class="question-section">
        <h2>Testo dell'esercizio</h2>
        {question_html.replace('class="testo-esercizio"', 'class="question-text"').replace('class="exercise-box"', 'class="question-text"')}
    </div>

    <div class="progress-text" id="progress-text">Passaggio 0 di {len(steps)}</div>
    <div class="progress-bar">
        <div class="progress-fill" id="progress-fill" style="width: 0%"></div>
    </div>

    <div class="controls">
        <button id="next-btn" class="show-next-btn" onclick="showNextStep()">
            Mostra prossimo passaggio
        </button>
        <button id="all-btn" class="show-next-btn show-all-btn" onclick="showAllSteps()">
            Mostra tutta la soluzione
        </button>
    </div>

    <div id="steps-wrapper">
        {steps_html}
    </div>
</div>
'''

    # Assembla
    new_content = before_head_end + QUIZ_STYLES + head_to_body + new_body + QUIZ_SCRIPT + after_body

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)

    print(f"  [OK] {filepath.name} ({len(steps)} step)")
    return True

def main():
    print("=" * 60)
    print("Quiz Mode Converter - Divisione in passaggi")
    print("=" * 60)

    if not SOLUZIONI_DIR.exists():
        print(f"ERRORE: {SOLUZIONI_DIR} non trovata")
        return

    converted = 0
    skipped = 0
    errors = 0

    for subdir in sorted(SOLUZIONI_DIR.iterdir()):
        if subdir.is_dir():
            print(f"\n{subdir.name}/")
            for html_file in sorted(subdir.glob("*.html")):
                try:
                    if convert_file(html_file):
                        converted += 1
                    else:
                        skipped += 1
                except Exception as e:
                    print(f"  [ERR] {html_file.name}: {e}")
                    errors += 1

    print("\n" + "=" * 60)
    print(f"Fatto: {converted} convertiti, {skipped} saltati, {errors} errori")
    print("=" * 60)

if __name__ == "__main__":
    main()
