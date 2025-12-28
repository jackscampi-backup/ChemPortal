# ChemPortal - Portale di Studio Chimica Generale

Portale web interattivo per preparare l'esame di Chimica Generale.

**LIVE:** https://jackscampi-backup.github.io/ChemPortal/

## Contenuti

- **8 capitoli** di teoria (incluso Nomenclatura)
- **88 esercizi** d'esame risolti con Quiz Mode
- **35+ flashcard** formule
- **70+ composti** nel trainer nomenclatura
- **7 simulazioni** d'esame con timer

## Come usare

1. **Online**: https://jackscampi-backup.github.io/ChemPortal/
2. **Locale**: Apri `index.html` nel browser

## Funzionalità implementate ✅

### Homepage (`index.html`)
- Panoramica del corso
- Barre di progresso (capitoli, esercizi, simulazioni)
- Card di accesso rapido alle sezioni
- Statistiche argomenti più frequenti all'esame

### Manuale (`manuale.html`)
- Viewer dei 7 capitoli di teoria
- Sidebar navigabile
- Navigazione prev/next tra capitoli
- Bottone "Segna completato"
- **Bottone "Esercizi correlati"** - link diretto agli esercizi del capitolo
- Responsive con select per mobile

### Esercizi (`esercizi.html`)
- 88 esercizi organizzati per argomento (7 categorie)
- Filtri: ricerca testuale, argomento, stato (fatto/da rivedere/non fatto)
- Statistiche in tempo reale
- Modale con iframe per visualizzare l'esercizio
- Navigazione Precedente/Successivo tra esercizi
- Sincronizzazione automatica con Quiz Mode (postMessage)

### Quiz Mode (88 file HTML)
- Domanda sempre visibile
- Soluzione divisa in passaggi (2-16 step per esercizio)
- Bottone "Prossimo passaggio" - rivela uno step alla volta
- Bottone "Mostra tutto" - rivela tutta la soluzione
- Barra di progresso (Passaggio X di Y)
- **Bottoni finali**: "Fatto" / "Da rivedere" / "Ricomincia" / "Chiudi"
- Controlli fissi in basso (sempre visibili)
- Bottone "Chiudi" comunica con parent via postMessage

### Simulazione Esame (`simulazione.html`)
- 7 esami disponibili (1-1, 1-2, 2-1, 3-1, 4-1, 5-1, 6-1)
- **56 domande complete** estratte dai PDF (8 per esame)
- Ogni domanda mostra: testo completo, argomento, link alla soluzione
- Timer opzionale (2 ore) con pausa
- Modale per visualizzare le soluzioni (non apre nuova finestra)
- Navigazione fluida tra domande e soluzioni

### Progress Tracker (`js/progress.js`)
- Salvataggio in localStorage
- Traccia: capitoli completati, esercizi (fatto/da rivedere), esami
- Persistente tra sessioni

### Flashcard Formule (`flashcard.html`)
- 35+ formule organizzate per argomento
- Interfaccia flip card (clicca per girare)
- Filtri per categoria (stechiometria, gas, termodinamica, equilibrio, acidi/basi, cinetica, elettrochimica)
- Funzione "Mescola le card" per studio randomizzato

### Ricerca Globale
- Barra di ricerca nell'header di tutte le pagine
- Cerca in capitoli ed esercizi
- Risultati in tempo reale con highlight
- Navigazione diretta al contenuto trovato

### Nomenclatura (`cap-00-nomenclatura.html` + `nomenclatura.html`)
- **Capitolo teorico** con tutte le regole di nomenclatura tradizionale e IUPAC
- Tabelle numeri di ossidazione, suffissi, prefissi
- Esempi per ogni categoria: ossidi, idrossidi, acidi, sali
- **Trainer interattivo** con 70+ composti
- Due modalita: Formula→Nome e Nome→Formula
- Filtri per categoria, statistiche, streak

## Struttura file

```
ChemPortal/
├── index.html              # Homepage
├── manuale.html            # Viewer capitoli
├── esercizi.html           # Browser esercizi
├── simulazione.html        # Simulazione esame
├── css/
│   └── style.css           # Stili custom
├── js/
│   ├── data.js             # Dati (capitoli, 88 esercizi, 56 domande esami)
│   ├── app.js              # Logica principale
│   └── progress.js         # Progress tracker
├── content/
│   ├── manuale/            # 7 capitoli HTML
│   └── soluzioni/          # 88 esercizi HTML (Quiz Mode)
│       ├── lez01-02-nozioni-materia/   (23 esercizi)
│       ├── lez03-04-teoria-periodicita/ (6 esercizi)
│       ├── lez05-legami/               (10 esercizi)
│       ├── lez06-acidi-basi/           (10 esercizi)
│       ├── lez07-08-termodinamica/     (16 esercizi)
│       ├── lez09-cinetica/             (7 esercizi)
│       └── lez10-elettrochimica/       (16 esercizi)
└── *.py                    # Script di conversione
```

## Cosa rimane da fare

### Priorità alta
- [ ] **Quiz casuale misto**: modalità "Mettiti alla prova" con 10 domande random da tutti gli argomenti per testare la preparazione generale prima dell'esame

### Priorità media
- [ ] **Dark mode**: toggle per tema scuro
- [ ] **Migliorare mobile**: testare e ottimizzare per smartphone

### Nice to have
- [ ] **Esporta/Importa progressi**: bottoni per salvare/caricare un file JSON con i progressi
- [ ] **Statistiche avanzate**: tempo medio per esercizio, argomenti più difficili

## Bug noti

1. **CSS dei capitoli manuale**: i capitoli HTML hanno CSS proprio che potrebbe non integrarsi perfettamente con il viewer
2. **Timer simulazione**: se si chiude la pagina, il timer non persiste

## Completato in questa sessione (28/12/2024)

- [x] Sincronizzazione progress esercizi.html ↔ Quiz Mode (postMessage)
- [x] Simulazione esame: estratte 56 domande dai 7 PDF, aggiunte a data.js
- [x] Simulazione esame: modale per soluzioni invece di nuova finestra
- [x] Navigazione Quiz Mode: aggiunto bottone "Chiudi" a tutti 88 file
- [x] Rimossi bottoni duplicati dalla UI
- [x] Lista esami nella simulazione ora funziona correttamente

## Note tecniche

- **Niente backend**: tutto client-side, funziona offline
- **Dati in JS**: i dati sono in `data.js` invece che in JSON esterni per evitare problemi CORS con `file://`
- **Tailwind via CDN**: stili moderni senza build step
- **localStorage**: chiave `chemportal_progress` per tutti i dati di progresso
- **postMessage**: comunicazione iframe ↔ parent per sincronizzare stato

## Script di sviluppo

- `convert_to_quiz.py` - Converte gli HTML in formato Quiz Mode
- `fix_controls.py` - Fix per controlli sticky
- `fix_buttons.py` - Aggiunge bottoni Fatto/Da rivedere
- `add_navigation.py` - Aggiunge bottone Chiudi ai Quiz Mode

## Contenuti per argomento

| Argomento | Esercizi | Capitolo |
|-----------|----------|----------|
| Nomenclatura | - | cap-00 |
| Stechiometria e Materia | 23 | cap-01-02 |
| Teoria Atomica e Periodicità | 6 | cap-03-04 |
| Legami Chimici | 10 | cap-05 |
| Acidi e Basi | 10 | cap-06 |
| Termodinamica | 16 | cap-07-08 |
| Cinetica Chimica | 7 | cap-09 |
| Elettrochimica | 16 | cap-10 |
| **Totale** | **88** | **8** |
