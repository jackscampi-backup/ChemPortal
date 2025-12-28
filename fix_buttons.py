#!/usr/bin/env python3
"""Fix: aggiunge bottoni Fatto/Da rivedere alla fine"""

from pathlib import Path

SOLUZIONI_DIR = Path(__file__).parent / "content" / "soluzioni"

# Nuovo script JS con bottoni Fatto/Da rivedere
OLD_SCRIPT_START = '''<script>
    let currentStep = 0;
    let totalSteps = 0;'''

NEW_SCRIPT = '''<script>
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
        const doneButtons = document.getElementById('done-buttons');

        if (currentStep >= totalSteps) {
            if (nextBtn) nextBtn.style.display = 'none';
            if (allBtn) allBtn.style.display = 'none';
            if (doneButtons) doneButtons.style.display = 'flex';
        } else {
            if (nextBtn) nextBtn.style.display = 'block';
            if (allBtn) allBtn.style.display = 'block';
            if (doneButtons) doneButtons.style.display = 'none';
        }
    }

    function markExercise(status) {
        // Salva in localStorage
        const exerciseId = window.location.pathname.split('/').pop().replace('.html', '');
        let progress = JSON.parse(localStorage.getItem('chemportal_progress') || '{}');
        if (!progress.exercises) progress.exercises = {};
        progress.exercises[exerciseId] = status;
        localStorage.setItem('chemportal_progress', JSON.stringify(progress));

        // Feedback visivo
        const btn = status === 'done' ? document.getElementById('mark-done') : document.getElementById('mark-review');
        const otherBtn = status === 'done' ? document.getElementById('mark-review') : document.getElementById('mark-done');

        btn.classList.add('selected');
        otherBtn.classList.remove('selected');

        // Notifica parent
        if (window.parent !== window) {
            window.parent.postMessage({type: 'exerciseMarked', status: status, id: exerciseId}, '*');
        }
    }

    function resetExercise() {
        hideAllSteps();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Messaggi dal parent
    window.addEventListener('message', function(e) {
        if (e.data.type === 'showNext') showNextStep();
        else if (e.data.type === 'showAll') showAllSteps();
        else if (e.data.type === 'hideAll') hideAllSteps();
    });
</script>'''

# Nuovo HTML per i controlli
OLD_CONTROLS_HTML = '''<div class="controls">
        <button id="next-btn" class="show-next-btn" onclick="showNextStep()">
            Mostra prossimo passaggio
        </button>
        <button id="all-btn" class="show-next-btn show-all-btn" onclick="showAllSteps()">
            Mostra tutta la soluzione
        </button>
    </div>'''

NEW_CONTROLS_HTML = '''<div class="controls">
        <button id="next-btn" class="show-next-btn" onclick="showNextStep()">
            ▶ Prossimo passaggio
        </button>
        <button id="all-btn" class="show-next-btn show-all-btn" onclick="showAllSteps()">
            ⏩ Mostra tutto
        </button>
        <div id="done-buttons" class="done-buttons" style="display: none;">
            <button id="mark-done" class="mark-btn mark-done" onclick="markExercise('done')">
                ✓ Fatto
            </button>
            <button id="mark-review" class="mark-btn mark-review" onclick="markExercise('review')">
                ⚠ Da rivedere
            </button>
            <button class="mark-btn mark-reset" onclick="resetExercise()">
                ↺ Ricomincia
            </button>
        </div>
    </div>'''

# CSS aggiuntivo per i nuovi bottoni
EXTRA_CSS = '''
    .done-buttons {
        display: flex;
        gap: 10px;
        align-items: center;
    }
    .mark-btn {
        padding: 12px 24px;
        font-size: 1em;
        font-weight: bold;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.3s ease;
    }
    .mark-done {
        background: linear-gradient(135deg, #28a745, #20c997);
        color: white;
    }
    .mark-done:hover, .mark-done.selected {
        background: linear-gradient(135deg, #1e7e34, #17a085);
        transform: scale(1.05);
    }
    .mark-review {
        background: linear-gradient(135deg, #ffc107, #fd7e14);
        color: white;
    }
    .mark-review:hover, .mark-review.selected {
        background: linear-gradient(135deg, #d39e00, #dc6502);
        transform: scale(1.05);
    }
    .mark-reset {
        background: #6c757d;
        color: white;
    }
    .mark-reset:hover {
        background: #545b62;
    }
    .mark-btn.selected {
        box-shadow: 0 0 0 3px rgba(0,0,0,0.2);
    }
</style>'''

count = 0
for subdir in SOLUZIONI_DIR.iterdir():
    if subdir.is_dir():
        for f in subdir.glob("*.html"):
            content = f.read_text()

            # Sostituisci lo script JS (trova e sostituisci tutto il blocco script)
            import re
            # Rimuovi il vecchio script
            content = re.sub(
                r'<script>\s*let currentStep = 0;.*?</script>',
                NEW_SCRIPT,
                content,
                flags=re.DOTALL
            )

            # Sostituisci i controlli HTML
            content = content.replace(OLD_CONTROLS_HTML, NEW_CONTROLS_HTML)

            # Aggiungi CSS extra (prima di </style>)
            if '.done-buttons' not in content:
                content = content.replace('</style>', EXTRA_CSS)

            f.write_text(content)
            count += 1

print(f"Aggiornati {count} file con bottoni Fatto/Da rivedere")
