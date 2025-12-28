#!/usr/bin/env python3
"""
Aggiunge bottoni di navigazione ai file Quiz Mode
"""

import os
from pathlib import Path

SOLUZIONI_DIR = Path("content/soluzioni")

def add_navigation_to_file(filepath):
    """Aggiunge navigazione a un file Quiz Mode"""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Skip se già ha il bottone Chiudi
    if 'onclick="closeExercise()"' in content:
        print(f"  Skipping {filepath.name} (già modificato)")
        return False

    # 1. Aggiungi bottone "Chiudi" dentro done-buttons
    old_reset = '''            <button class="mark-btn mark-reset" onclick="resetExercise()">
                ↺ Ricomincia
            </button>
        </div>
    </div>'''

    new_reset = '''            <button class="mark-btn mark-reset" onclick="resetExercise()">
                ↺ Ricomincia
            </button>
            <button class="mark-btn" style="background: #17a2b8;" onclick="closeExercise()">
                ✕ Chiudi
            </button>
        </div>
    </div>'''

    if old_reset in content:
        content = content.replace(old_reset, new_reset)
    else:
        # Prova pattern alternativo
        old_reset2 = '''<button class="mark-btn mark-reset" onclick="resetExercise()">
                ↺ Ricomincia
            </button>
        </div>
    </div>

    <div id="steps-wrapper">'''

        new_reset2 = '''<button class="mark-btn mark-reset" onclick="resetExercise()">
                ↺ Ricomincia
            </button>
            <button class="mark-btn" style="background: #17a2b8;" onclick="closeExercise()">
                ✕ Chiudi
            </button>
        </div>
    </div>

    <div id="steps-wrapper">'''

        if old_reset2 in content:
            content = content.replace(old_reset2, new_reset2)

    # 2. Aggiungi funzione closeExercise prima di </script>
    close_function = '''
    function closeExercise() {
        if (window.parent !== window) {
            // Siamo in iframe, chiedi al parent di chiudere
            window.parent.postMessage({type: 'closeModal'}, '*');
        } else {
            // Standalone: torna alla pagina esercizi
            const path = window.location.pathname;
            if (path.includes('/content/soluzioni/')) {
                window.location.href = '../../esercizi.html';
            } else {
                window.history.back();
            }
        }
    }
</script>'''

    content = content.replace('</script>\n</body>', close_function + '\n</body>')
    content = content.replace('</script></body>', close_function + '</body>')

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f"  ✓ {filepath.name}")
    return True

def main():
    print("Aggiungendo navigazione ai Quiz Mode...\n")

    modified = 0
    for category_dir in SOLUZIONI_DIR.iterdir():
        if category_dir.is_dir():
            print(f"\n{category_dir.name}/")
            for html_file in sorted(category_dir.glob("*.html")):
                if add_navigation_to_file(html_file):
                    modified += 1

    print(f"\n\nModificati {modified} file")

if __name__ == "__main__":
    main()
