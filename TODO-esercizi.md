# TODO: Sistemare testi esercizi mancanti

## Problema
Molti esercizi nel portale hanno il box "Testo dell'esercizio" con solo "Risolvi l'esercizio seguente." invece della domanda vera. La domanda si trova nel primo passaggio della soluzione.

## Cosa fare
Per ogni file:
1. Cercare la domanda nel primo step (cerca "QUESITO" o "TESTO")
2. Copiarla nel box `<div class="question-section">`
3. Rimuovere eventuali duplicati di `<h2>Testo dell'esercizio</h2>`

## Categorie da sistemare

### Completate
- [x] Redox (10 file) - testi + titoli in exercises.json e data.js
- [x] Lewis/Geometria (8 file)

### Completate (tutte!)
- [x] Acidi e Basi (lez06-acidi-basi/) - 10/10 file
- [x] Termodinamica (lez07-08-termodinamica/) - 15/16 file (1 già ok)
- [x] Cinetica (lez09-cinetica/) - 7/7 file
- [x] Elettrochimica (lez10-elettrochimica/) - 14/16 file (2 già ok)
- [x] Teoria Atomica (lez03-04-teoria-periodicita/) - 6/6 file
- [x] Stechiometria (lez01-02-nozioni-materia/) - 11/23 file (12 già ok)

## Comandi utili

Trovare file con "Risolvi l'esercizio seguente":
```bash
grep -r "Risolvi l'esercizio seguente" ChemPortal/content/soluzioni/
```

Cercare la domanda nel primo step:
```bash
grep -A5 "QUESITO\|TESTO" file.html
```
