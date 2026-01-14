# ChemPortal - Portale di Studio Chimica Generale

Portale web interattivo per preparare l'esame di Chimica Generale del Politecnico di Milano.

**LIVE:** https://jackscampi-backup.github.io/ChemPortal/

---

## Contenuti

| Risorsa | Quantità | Descrizione |
|---------|----------|-------------|
| Capitoli teoria | **8** | Manuale completo con esempi |
| Formulario Commentato | **1** | Tutte le formule spiegate |
| Esercizi risolti | **88** | Quiz Mode step-by-step |
| Flashcard formule | **35+** | Per categoria |
| Composti nomenclatura | **70+** | Trainer interattivo |
| Simulazioni esame | **7** | Con timer 2 ore |

---

## Come usare

1. **Online**: https://jackscampi-backup.github.io/ChemPortal/
2. **Locale**: Apri `index.html` nel browser

---

## Funzionalità

### Homepage (`index.html`)
- Panoramica del corso
- Barre di progresso (capitoli, esercizi, simulazioni)
- Card di accesso rapido alle sezioni
- Statistiche argomenti più frequenti all'esame

### Manuale (`manuale.html`)
- Viewer dei **9 contenuti** (8 capitoli + Formulario Commentato)
- Sidebar navigabile con icone
- Navigazione prev/next tra capitoli
- Bottone "Segna completato"
- Bottone "Esercizi correlati" - link diretto agli esercizi del capitolo

### Formulario Commentato
- **Tutte le formule** del corso in un unico documento
- Per ogni formula:
  - Tabella simboli con unità e valori
  - **Cosa significa**: spiegazione fisica del concetto
  - **Quando si usa**: tipi di esercizi
  - **Esempio**: calcolo svolto
- Organizzato per argomento (Teoria Atomica → Elettrochimica)

### Esercizi (`esercizi.html`)
- 88 esercizi organizzati per argomento (7 categorie)
- Filtri: ricerca testuale, argomento, stato
- Statistiche in tempo reale
- Navigazione Precedente/Successivo

### Quiz Mode (negli 88 esercizi)
- Domanda sempre visibile
- Soluzione divisa in passaggi (2-16 step)
- Bottone "Prossimo passaggio" - rivela uno step alla volta
- Bottone "Mostra tutto" - rivela tutta la soluzione
- Barra di progresso (Passaggio X di Y)
- Bottoni finali: "Fatto" / "Da rivedere" / "Ricomincia"

### Simulazione Esame (`simulazione.html`)
- 7 esami disponibili (56 domande totali)
- Ogni domanda mostra: testo completo, argomento, link alla soluzione
- Timer opzionale (2 ore) con pausa
- Modale per visualizzare le soluzioni

### Flashcard Formule (`flashcard.html`)
- 35+ formule organizzate per argomento
- Interfaccia flip card (clicca per girare)
- Filtri per categoria
- Funzione "Mescola le card"

### Nomenclatura (`nomenclatura.html`)
- Capitolo teorico con regole tradizionale + IUPAC
- **Trainer interattivo** con 70+ composti
- Due modalità: Formula→Nome e Nome→Formula
- Statistiche e streak

### Ricerca Globale
- Barra di ricerca nell'header di tutte le pagine
- Cerca in capitoli ed esercizi
- Risultati in tempo reale con highlight

### Progress Tracker
- Salvataggio automatico in localStorage
- Traccia: capitoli, esercizi (fatto/da rivedere), esami
- Persistente tra sessioni
- Nessun login richiesto

---

## Capitoli del Manuale

| # | Titolo | Argomenti |
|---|--------|-----------|
| 00 | Nomenclatura | Ossidi, idrossidi, acidi, sali, IUPAC |
| 01-02 | Nozioni e Materia | Moli, redox, gas, soluzioni |
| 03-04 | Teoria Atomica | Bohr, numeri quantici, fotoelettrico |
| 05 | Legami | Lewis, VSEPR, ibridizzazione |
| 06 | Acidi e Basi | pH, Ka/Kb, tamponi, idrolisi |
| 07-08 | Termodinamica | ΔH, ΔS, ΔG, Hess, equilibrio |
| 09 | Cinetica | Arrhenius, ordini, t½ |
| 10 | Elettrochimica | Pile, Nernst, Faraday |
| - | **Formulario Commentato** | Tutte le formule spiegate |

---

## Argomenti più frequenti agli esami

| Argomento | N° esercizi | Tipi principali |
|-----------|-------------|-----------------|
| **Stechiometria** | 23 | Bilanciamento redox, gas, reagente limitante |
| **Elettrochimica** | 16 | Pile + Nernst, elettrolisi/Faraday |
| **Termodinamica** | 16 | Equilibrio Kp/Kc, Hess, calorimetria |
| **Acidi/Basi** | 10 | pH acidi deboli, tamponi |
| **Legami** | 10 | Lewis + VSEPR, ibridizzazione |
| **Cinetica** | 7 | Arrhenius, ordine, t½ |
| **Teoria atomica** | 6 | Ioni isoelettronici, fotoelettrico |

---

## Struttura del progetto

```
ChemPortal/
├── index.html              # Homepage
├── manuale.html            # Viewer capitoli
├── esercizi.html           # Browser esercizi
├── simulazione.html        # Simulazione esame
├── flashcard.html          # Flashcard formule
├── nomenclatura.html       # Trainer nomenclatura
├── css/
│   └── style.css           # Stili custom
├── js/
│   ├── data.js             # Dati (capitoli, esercizi, esami)
│   ├── app.js              # Logica principale
│   ├── progress.js         # Progress tracker
│   └── search.js           # Ricerca globale
└── content/
    ├── manuale/            # 8 capitoli + formulario (9 file HTML)
    └── soluzioni/          # 88 esercizi HTML (Quiz Mode)
        ├── lez01-02-nozioni-materia/    (23)
        ├── lez03-04-teoria-periodicita/ (6)
        ├── lez05-legami/                (10)
        ├── lez06-acidi-basi/            (10)
        ├── lez07-08-termodinamica/      (16)
        ├── lez09-cinetica/              (7)
        └── lez10-elettrochimica/        (16)
```

---

## Tecnologie

- **HTML5** - Struttura semantica
- **Tailwind CSS** - Styling via CDN
- **JavaScript vanilla** - Nessun framework
- **localStorage** - Persistenza (no backend)
- **GitHub Pages** - Hosting

---

## Note tecniche

- **Tutto client-side**: funziona offline dopo il primo caricamento
- **Dati in JS**: `data.js` invece di JSON per evitare problemi CORS con `file://`
- **postMessage**: comunicazione iframe ↔ parent per sincronizzare stato Quiz Mode
- **localStorage key**: `chemportal_progress`

---

## Crediti

- **Contenuti**: Lezioni del Prof. Sebastiano, Politecnico di Milano
- **Formulario originale**: Filippo Paolo Arculeo
- **Sviluppo**: Claude Code

---

## Suggerimenti per lo studio

1. **Inizia dal Formulario Commentato** per capire le formule
2. **Leggi i capitoli** con carta e penna
3. **Fai gli esercizi** in Quiz Mode senza sbirciare
4. **Simula gli esami** con il timer per abituarti ai tempi
5. **Usa le flashcard** per ripassare prima dell'esame
