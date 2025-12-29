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

### Da fare
- [ ] Acidi e Basi (lez06-acidi-basi/) - ~10 file
- [ ] Termodinamica (lez07-08-termodinamica/) - ~16 file
- [ ] Cinetica (lez09-cinetica/) - ~7 file
- [ ] Elettrochimica (lez10-elettrochimica/) - ~16 file
- [ ] Teoria Atomica (lez03-04-teoria-periodicita/) - ~6 file
- [ ] Stechiometria restanti (lez01-02-nozioni-materia/) - ~12 file

## Comandi utili

Trovare file con "Risolvi l'esercizio seguente":
```bash
grep -r "Risolvi l'esercizio seguente" ChemPortal/content/soluzioni/
```

Cercare la domanda nel primo step:
```bash
grep -A5 "QUESITO\|TESTO" file.html
```
