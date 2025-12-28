#!/usr/bin/env python3
"""Fix: rende i controlli fissi in basso alla pagina"""

import re
from pathlib import Path

SOLUZIONI_DIR = Path(__file__).parent / "content" / "soluzioni"

OLD_CONTROLS = '''.controls {
        position: sticky;
        bottom: 0;
        background: white;
        padding: 15px;
        border-top: 2px solid #dee2e6;
        margin: 0 -20px -20px;
    }'''

NEW_CONTROLS = '''.controls {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background: white;
        padding: 15px 20px;
        border-top: 2px solid #dee2e6;
        box-shadow: 0 -4px 12px rgba(0,0,0,0.1);
        z-index: 1000;
        display: flex;
        gap: 10px;
        justify-content: center;
    }
    .quiz-container {
        padding-bottom: 100px;
    }
    .show-next-btn {
        width: auto;
        margin: 0;
    }'''

count = 0
for subdir in SOLUZIONI_DIR.iterdir():
    if subdir.is_dir():
        for f in subdir.glob("*.html"):
            content = f.read_text()
            if '.controls {' in content and 'position: sticky' in content:
                content = content.replace(OLD_CONTROLS, NEW_CONTROLS)
                # Anche fix per padding-bottom del container
                content = content.replace(
                    'padding: 20px;\n    }',
                    'padding: 20px;\n        padding-bottom: 120px;\n    }'
                )
                f.write_text(content)
                count += 1
                print(f"Fixed: {f.name}")

print(f"\nTotale: {count} file aggiornati")
