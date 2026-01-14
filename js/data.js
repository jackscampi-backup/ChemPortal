/**
 * ChemPortal - Dati incorporati
 * Per evitare problemi CORS con protocollo file://
 */

const CHAPTERS_DATA = {
  "chapters": [
    {
      "id": "01-02",
      "title": "Nozioni preliminari e La Materia",
      "file": "cap-01-02-nozioni-materia.html",
      "description": "Moli, stechiometria, bilanciamento redox, gas ideali, soluzioni",
      "topics": ["Moli e massa molare", "Bilanciamento redox", "Gas ideali (PV=nRT)", "Soluzioni e concentrazioni", "Reagente limitante"],
      "exerciseCount": 23,
      "icon": "🧪"
    },
    {
      "id": "03-04",
      "title": "Teoria Atomica e Periodicità",
      "file": "cap-03-04-teoria-periodicita.html",
      "description": "Modello atomico, numeri quantici, configurazioni elettroniche, proprietà periodiche",
      "topics": ["Modello di Bohr", "Numeri quantici", "Configurazioni elettroniche", "Effetto fotoelettrico", "Raggi atomici/ionici", "Potenziale di ionizzazione"],
      "exerciseCount": 6,
      "icon": "⚛️"
    },
    {
      "id": "05",
      "title": "Legami Chimici",
      "file": "cap-05-legami.html",
      "description": "Strutture di Lewis, teoria VSEPR, ibridizzazione, legami intermolecolari",
      "topics": ["Strutture di Lewis", "Geometria VSEPR", "Ibridizzazione sp, sp2, sp3", "Legame covalente", "Legame ionico", "Paramagnetismo"],
      "exerciseCount": 10,
      "icon": "🔗"
    },
    {
      "id": "06",
      "title": "Acidi e Basi",
      "file": "cap-06-acidi-basi.html",
      "description": "pH, Ka/Kb, soluzioni tampone, titolazioni, idrolisi",
      "topics": ["pH e pOH", "Acidi e basi deboli (Ka, Kb)", "Soluzioni tampone", "Idrolisi dei sali", "Titolazioni"],
      "exerciseCount": 10,
      "icon": "🧫"
    },
    {
      "id": "07-08",
      "title": "Termodinamica",
      "file": "cap-07-08-termodinamica.html",
      "description": "Entalpia, entropia, energia libera di Gibbs, equilibrio chimico",
      "topics": ["Entalpia (ΔH)", "Legge di Hess", "Entropia (ΔS)", "Energia libera (ΔG)", "Equilibrio chimico (Kp, Kc)", "Calorimetria"],
      "exerciseCount": 16,
      "icon": "🔥"
    },
    {
      "id": "09",
      "title": "Cinetica Chimica",
      "file": "cap-09-cinetica.html",
      "description": "Velocità di reazione, ordine, equazione di Arrhenius, tempo di dimezzamento",
      "topics": ["Velocità di reazione", "Ordine di reazione", "Equazione di Arrhenius", "Energia di attivazione", "Tempo di dimezzamento"],
      "exerciseCount": 7,
      "icon": "⏱️"
    },
    {
      "id": "10",
      "title": "Elettrochimica",
      "file": "cap-10-elettrochimica.html",
      "description": "Pile galvaniche, equazione di Nernst, elettrolisi, leggi di Faraday",
      "topics": ["Pile galvaniche", "Potenziale standard E°", "Equazione di Nernst", "Elettrolisi", "Leggi di Faraday", "K da E°"],
      "exerciseCount": 16,
      "icon": "⚡"
    },
    {
      "id": "00",
      "title": "Nomenclatura Chimica",
      "file": "cap-00-nomenclatura.html",
      "description": "Nomenclatura tradizionale e IUPAC dei composti inorganici",
      "topics": ["Numeri di ossidazione", "Ossidi", "Idrossidi", "Acidi", "Sali", "Nomenclatura IUPAC"],
      "exerciseCount": 0,
      "icon": "🏷️",
      "hasTrainer": true
    },
    {
      "id": "formulario",
      "title": "Formulario Commentato",
      "file": "formulario-commentato.html",
      "description": "Tutte le formule con spiegazioni dettagliate: cosa significano, quando usarle, esempi svolti",
      "topics": ["Teoria Atomica", "VSEPR", "Stechiometria", "Acidi e Basi", "Termodinamica", "Cinetica", "Elettrochimica", "Costanti"],
      "exerciseCount": 0,
      "icon": "📋",
      "isFormulario": true
    },
    {
      "id": "formulario-esame",
      "title": "Formulario per l'Esame",
      "file": "formulario-esame.html",
      "description": "Formulario compatto ottimizzato per la risoluzione rapida degli esercizi d'esame",
      "topics": ["Teoria Atomica", "VSEPR", "Stechiometria", "Gas", "Acidi e Basi", "Termodinamica", "Cinetica", "Elettrochimica", "Costanti", "Conversioni"],
      "exerciseCount": 0,
      "icon": "📝",
      "isFormulario": true
    },
    {
      "id": "formulario-operativo",
      "title": "Formulario Operativo",
      "file": "formulario-operativo.html",
      "description": "Guida pratica con procedure step-by-step per risolvere ogni tipo di esercizio d'esame",
      "topics": ["Redox", "Stechiometria", "Pile+Nernst", "Elettrolisi", "Equilibrio", "Termodinamica", "pH", "Tamponi", "Lewis+VSEPR", "Cinetica"],
      "exerciseCount": 0,
      "icon": "🎯",
      "isFormulario": true
    }
  ]
};

const EXERCISES_DATA = {
  "categories": [
    {
      "id": "lez01-02-nozioni-materia",
      "title": "Stechiometria e Materia",
      "icon": "🧪",
      "color": "blue",
      "exercises": [
        {"id": "lez01-02-bilanciamento-redox", "title": "Redox: Rame e Acido Nitrico", "tags": ["redox", "bilanciamento", "rame"]},
        {"id": "lez01-02-bilanciamento-redox-1", "title": "Redox: Manganese e Clorato", "tags": ["redox", "bilanciamento", "manganese"]},
        {"id": "lez01-02-bilanciamento-redox-2", "title": "Redox: Cloro in ambiente basico", "tags": ["redox", "bilanciamento", "cloro", "basico"]},
        {"id": "lez01-02-bilanciamento-redox-3", "title": "Redox: Alluminio in ambiente basico", "tags": ["redox", "bilanciamento", "alluminio", "basico"]},
        {"id": "lez01-02-bilanciamento-redox-4", "title": "Redox: Manganese e Clorato (2)", "tags": ["redox", "bilanciamento", "manganese"]},
        {"id": "lez01-02-bilanciamento-redox-5", "title": "Redox: Dismutazione del Cloro", "tags": ["redox", "bilanciamento", "cloro", "dismutazione"]},
        {"id": "lez01-02-bilanciamento-redox-6", "title": "Redox: Argento e Perossido", "tags": ["redox", "bilanciamento", "argento"]},
        {"id": "lez01-02-bilanciamento-redox-7", "title": "Redox: Dicromato e Solfuro", "tags": ["redox", "bilanciamento", "cromo"]},
        {"id": "lez01-02-bilanciamento-Cu-HNO3", "title": "Redox: Rame e Acido Nitrico (2)", "tags": ["redox", "rame", "acido nitrico"]},
        {"id": "lez01-02-bilanciamento-redox-KMnO4", "title": "Redox: Permanganato e Ossalato", "tags": ["redox", "permanganato"]},
        {"id": "lez01-02-numeri-ossidazione", "title": "Numeri di Ossidazione", "tags": ["ossidazione"]},
        {"id": "lez01-02-numeri-ossidazione-1", "title": "Numeri di Ossidazione (2)", "tags": ["ossidazione"]},
        {"id": "lez01-02-stechiometria-gas", "title": "Stechiometria Gas", "tags": ["gas", "stechiometria"]},
        {"id": "lez01-02-stechiometria-precipitazione", "title": "Precipitazione", "tags": ["precipitazione"]},
        {"id": "lez01-02-stechiometria-SO2", "title": "Stechiometria SO2", "tags": ["stechiometria"]},
        {"id": "lez01-02-stechiometria-HNO3", "title": "Stechiometria HNO3", "tags": ["stechiometria", "acido nitrico"]},
        {"id": "lez01-02-stechiometria-pirite", "title": "Stechiometria Pirite", "tags": ["stechiometria", "pirite"]},
        {"id": "lez01-02-stechiometria-PCl3-Cl2", "title": "PCl3 + Cl2", "tags": ["stechiometria"]},
        {"id": "lez01-02-moli-atomi-ferro", "title": "Moli e Atomi Ferro", "tags": ["moli", "ferro"]},
        {"id": "lez01-02-reagente-limitante-titanio", "title": "Reagente Limitante Ti", "tags": ["reagente limitante", "titanio"]},
        {"id": "lez01-02-precipitazione-BaSO4", "title": "Precipitazione BaSO4", "tags": ["precipitazione", "solfato"]},
        {"id": "lez01-02-formula-molecolare", "title": "Formula Molecolare", "tags": ["formula"]},
        {"id": "lez01-02-combustione-etanolo", "title": "Combustione Etanolo", "tags": ["combustione"]}
      ]
    },
    {
      "id": "lez03-04-teoria-periodicita",
      "title": "Teoria Atomica e Periodicità",
      "icon": "⚛️",
      "color": "purple",
      "exercises": [
        {"id": "lez03-04-ioni-isoelettronici", "title": "Ioni Isoelettronici", "tags": ["isoelettronici", "ioni"]},
        {"id": "lez03-04-ioni-isoelettronici-1", "title": "Ioni Isoelettronici (2)", "tags": ["isoelettronici", "ioni"]},
        {"id": "lez03-04-potenziale-ionizzazione", "title": "Potenziale di Ionizzazione", "tags": ["ionizzazione"]},
        {"id": "lez03-04-potenziale-ionizzazione-Li", "title": "Potenziale Ionizzazione Li", "tags": ["ionizzazione", "litio"]},
        {"id": "lez03-04-configurazioni-raggi-ionici", "title": "Configurazioni e Raggi Ionici", "tags": ["configurazioni", "raggi"]},
        {"id": "lez03-effetto-fotoelettrico", "title": "Effetto Fotoelettrico", "tags": ["fotoelettrico", "fotoni"]}
      ]
    },
    {
      "id": "lez05-legami",
      "title": "Legami Chimici",
      "icon": "🔗",
      "color": "green",
      "exercises": [
        {"id": "lez05-lewis-geometria", "title": "Lewis e Geometria VSEPR", "tags": ["lewis", "vsepr"]},
        {"id": "lez05-lewis-geometria-1", "title": "Lewis e Geometria (2)", "tags": ["lewis", "vsepr"]},
        {"id": "lez05-lewis-geometria-2", "title": "Lewis e Geometria (3)", "tags": ["lewis", "vsepr"]},
        {"id": "lez05-lewis-geometria-3", "title": "Lewis e Geometria (4)", "tags": ["lewis", "vsepr"]},
        {"id": "lez05-lewis-geometria-4", "title": "Lewis e Geometria (5)", "tags": ["lewis", "vsepr"]},
        {"id": "lez05-lewis-geometria-BrF3-H2SO4-BaCl2-O3", "title": "Lewis BrF3, H2SO4, BaCl2, O3", "tags": ["lewis", "vsepr"]},
        {"id": "lez05-lewis-ibridizzazione", "title": "Lewis e Ibridizzazione", "tags": ["lewis", "ibridizzazione"]},
        {"id": "lez05-lewis-composti-carbonio", "title": "Composti del Carbonio", "tags": ["lewis", "carbonio"]},
        {"id": "lez05-lewis-O3-H2SO4-KClO4-HCO3-BeCl2", "title": "O3, H2SO4, KClO4, HCO3-, BeCl2", "tags": ["lewis", "vsepr"]},
        {"id": "lez05-paramagnetismo-O2", "title": "Paramagnetismo O2", "tags": ["paramagnetismo", "ossigeno"]}
      ]
    },
    {
      "id": "lez06-acidi-basi",
      "title": "Acidi e Basi",
      "icon": "🧫",
      "color": "yellow",
      "exercises": [
        {"id": "lez06-pH-acido-base", "title": "pH Acido-Base", "tags": ["pH"]},
        {"id": "lez06-pH-acido-acetico", "title": "pH Acido Acetico", "tags": ["pH", "acetico"]},
        {"id": "lez06-pH-acido-acetico-1", "title": "pH Acido Acetico (2)", "tags": ["pH", "acetico"]},
        {"id": "lez06-pH-acido-acetico-2", "title": "pH Acido Acetico (3)", "tags": ["pH", "acetico"]},
        {"id": "lez06-pH-ammoniaca", "title": "pH Ammoniaca", "tags": ["pH", "ammoniaca"]},
        {"id": "lez06-pH-ammoniaca-1", "title": "pH Ammoniaca (2)", "tags": ["pH", "ammoniaca"]},
        {"id": "lez06-pH-eccesso-acido", "title": "pH Eccesso Acido", "tags": ["pH"]},
        {"id": "lez06-pH-acido-debole-tampone", "title": "Acido Debole e Tampone", "tags": ["pH", "tampone"]},
        {"id": "lez06-pH-NaOH-HBr", "title": "pH NaOH + HBr", "tags": ["pH", "titolazione"]},
        {"id": "lez06-pH-tampone-acetico", "title": "Tampone Acetico", "tags": ["tampone", "acetico"]}
      ]
    },
    {
      "id": "lez07-08-termodinamica",
      "title": "Termodinamica",
      "icon": "🔥",
      "color": "orange",
      "exercises": [
        {"id": "lez07-08-entropia", "title": "Entropia", "tags": ["entropia"]},
        {"id": "lez07-08-equilibrio-chimico", "title": "Equilibrio Chimico", "tags": ["equilibrio"]},
        {"id": "lez07-08-termodinamica-Kp", "title": "Termodinamica Kp", "tags": ["Kp", "equilibrio"]},
        {"id": "lez07-08-equilibrio-Kp", "title": "Equilibrio Kp", "tags": ["Kp", "equilibrio"]},
        {"id": "lez07-08-calore-combustione", "title": "Calore di Combustione", "tags": ["combustione", "entalpia"]},
        {"id": "lez07-08-entalpia-idrogenazione", "title": "Entalpia Idrogenazione", "tags": ["entalpia", "idrogenazione"]},
        {"id": "lez07-termodinamica-hess", "title": "Legge di Hess", "tags": ["hess", "entalpia"]},
        {"id": "lez07-calorimetria", "title": "Calorimetria", "tags": ["calorimetria"]},
        {"id": "lez07-calorimetria-etilene", "title": "Calorimetria Etilene", "tags": ["calorimetria", "etilene"]},
        {"id": "lez07-08-termodinamica-Kp-acetone", "title": "Kp Acetone", "tags": ["Kp", "acetone"]},
        {"id": "lez07-08-termodinamica-Kp-acetone-1", "title": "Kp Acetone (2)", "tags": ["Kp", "acetone"]},
        {"id": "lez07-termodinamica-TNT", "title": "Termodinamica TNT", "tags": ["entalpia", "esplosivi"]},
        {"id": "lez07-termodinamica-TNT-1", "title": "Termodinamica TNT (2)", "tags": ["entalpia", "esplosivi"]},
        {"id": "lez07-08-Keq-termodinamica-ammoniaca", "title": "Keq Ammoniaca", "tags": ["equilibrio", "ammoniaca"]},
        {"id": "lez07-08-equilibrio-SO2Cl2", "title": "Equilibrio SO2Cl2", "tags": ["equilibrio"]},
        {"id": "lez07-08-Keq-N2O4-NO2", "title": "Keq N2O4/NO2", "tags": ["equilibrio"]}
      ]
    },
    {
      "id": "lez09-cinetica",
      "title": "Cinetica Chimica",
      "icon": "⏱️",
      "color": "teal",
      "exercises": [
        {"id": "lez09-cinetica", "title": "Cinetica Base", "tags": ["cinetica"]},
        {"id": "lez09-cinetica-decomposizione", "title": "Decomposizione", "tags": ["cinetica", "decomposizione"]},
        {"id": "lez09-cinetica-2ordine", "title": "Cinetica 2° Ordine", "tags": ["cinetica", "ordine"]},
        {"id": "lez09-cinetica-secondo-ordine", "title": "Secondo Ordine", "tags": ["cinetica", "ordine"]},
        {"id": "lez09-cinetica-ordine-reazione", "title": "Ordine di Reazione", "tags": ["cinetica", "ordine"]},
        {"id": "lez09-stechiometria-cinetica-NH3", "title": "Stechiometria Cinetica NH3", "tags": ["cinetica", "ammoniaca"]},
        {"id": "lez09-arrhenius-temperatura", "title": "Arrhenius e Temperatura", "tags": ["arrhenius", "temperatura"]}
      ]
    },
    {
      "id": "lez10-elettrochimica",
      "title": "Elettrochimica",
      "icon": "⚡",
      "color": "red",
      "exercises": [
        {"id": "lez10-elettrolisi", "title": "Elettrolisi", "tags": ["elettrolisi"]},
        {"id": "lez10-elettrolisi-1", "title": "Elettrolisi (2)", "tags": ["elettrolisi"]},
        {"id": "lez10-elettrolisi-alluminio", "title": "Elettrolisi Alluminio", "tags": ["elettrolisi", "alluminio"]},
        {"id": "lez10-elettrolisi-cromo", "title": "Elettrolisi Cromo", "tags": ["elettrolisi", "cromo"]},
        {"id": "lez10-elettrolisi-calcio", "title": "Elettrolisi Calcio", "tags": ["elettrolisi", "calcio"]},
        {"id": "lez10-pila-Ag-Cu", "title": "Pila Ag/Cu", "tags": ["pila", "nernst"]},
        {"id": "lez10-pila-Pb-Zn-nernst", "title": "Pila Pb/Zn + Nernst", "tags": ["pila", "nernst"]},
        {"id": "lez10-pila-H2-Ag", "title": "Pila H2/Ag", "tags": ["pila", "idrogeno"]},
        {"id": "lez10-pila-concentrazione", "title": "Pila a Concentrazione", "tags": ["pila", "concentrazione"]},
        {"id": "lez10-pila-concentrazione-1", "title": "Pila Concentrazione (2)", "tags": ["pila", "concentrazione"]},
        {"id": "lez10-pila-concentrazione-Fe", "title": "Pila Concentrazione Fe", "tags": ["pila", "ferro"]},
        {"id": "lez10-pila-concentrazione-MnO4", "title": "Pila MnO4-", "tags": ["pila", "permanganato"]},
        {"id": "lez10-pila-concentrazione-MnO4-basico", "title": "MnO4- Ambiente Basico", "tags": ["pila", "basico"]},
        {"id": "lez10-Keq-elettrochimica", "title": "Keq da Elettrochimica", "tags": ["equilibrio", "potenziale"]},
        {"id": "lez10-redox-metalli-acido", "title": "Redox Metalli-Acido", "tags": ["redox", "metalli"]},
        {"id": "lez10-elettrochimica-Kps-argento", "title": "Kps Argento", "tags": ["Kps", "argento"]}
      ]
    }
  ]
};

const EXAMS_DATA = {
  "exams": [
    {
      "id": "1-1",
      "title": "Esame 1-1",
      "file": "1-1.pdf",
      "questions": [
        {
          "num": 1,
          "text": "Data la cella elettrochimica così costruita: Pt(s)| H₂(g) p = 1 atm, H₃O⁺, pH = 2 || Ag⁺ 0,2 M |Ag. Calcolare: a) la f.e.m.; b) la massa di argento depositato sull'elettrodo dopo che nella cella è passata una corrente di 1,2 A per 40 minuti.",
          "topic": "Elettrochimica",
          "solution": "lez10-pila-H2-Ag"
        },
        {
          "num": 2,
          "text": "Data la reazione: C₂H₅OH(l) + O₂(g) → CO₂(g) + H₂O(g), calcolare: a) il volume di CO₂ (misurato a 30°C e 0,98 atm) prodotto dalla combustione di 100 mL di etanolo (d = 0,789 g/mL); b) il lavoro di espansione prodotto dalla reazione a T = 1000°C.",
          "topic": "Stechiometria",
          "solution": "lez01-02-combustione-etanolo"
        },
        {
          "num": 3,
          "text": "Calcolare la costante di equilibrio a 298 K per la reazione N₂O₄(g) ⇌ 2NO₂(g) dai seguenti dati: ΔG°f(N₂O₄) = 99,8 kJ/mol, ΔG°f(NO₂) = 51,3 kJ/mol. Calcolare inoltre la pressione totale all'equilibrio sapendo che la pressione parziale di N₂O₄ è 0,50 atm.",
          "topic": "Termodinamica",
          "solution": "lez07-08-Keq-N2O4-NO2"
        },
        {
          "num": 4,
          "text": "L'energia di attivazione della reazione C₄H₉Br + H₂O → C₄H₉OH + HBr è 86,6 kJ/mol. Calcolare la temperatura alla quale la costante cinetica diventa il doppio di quella a 298 K.",
          "topic": "Cinetica",
          "solution": "lez09-arrhenius-temperatura"
        },
        {
          "num": 5,
          "text": "Bilanciare le seguenti equazioni di ossidoriduzione: a) KMnO₄ + H₂O₂ + H₂SO₄ → O₂ + MnSO₄ + H₂O + K₂SO₄; b) K₂C₂O₄ + KMnO₄ + H₂SO₄ → CO₂ + MnSO₄ + H₂O + K₂SO₄; c) Na₂S₂O₃ + I₂ → NaI + Na₂S₄O₆",
          "topic": "Redox",
          "solution": "lez01-02-bilanciamento-redox-KMnO4"
        },
        {
          "num": 6,
          "text": "Le percentuali in massa di un composto organico sono: C 63,57%, H 6,00%, N 9,27% e O 21,17%. La massa molare del composto è 151,2 g/mol; determinare la formula molecolare.",
          "topic": "Stechiometria",
          "solution": "lez01-02-formula-molecolare"
        },
        {
          "num": 7,
          "text": "A 100 mL di una soluzione acquosa di acido acetico 0,10 M (Ka = 1,8 × 10⁻⁵) vengono aggiunti 0,24 g di NaOH. Calcolare il pH della soluzione prima e dopo l'aggiunta.",
          "topic": "Acidi e Basi",
          "solution": "lez06-pH-acido-acetico"
        },
        {
          "num": 8,
          "text": "Scrivere le formule di struttura di O₃, H₂SO₄, KClO₄, HCO₃⁻, BeCl₂. Per ciascuna sostanza indicare il nome, l'ibridizzazione dell'atomo centrale, la geometria e gli angoli di legame.",
          "topic": "Legami",
          "solution": "lez05-lewis-O3-H2SO4-KClO4-HCO3-BeCl2"
        }
      ]
    },
    {
      "id": "1-2",
      "title": "Esame 1-2",
      "file": "1-2.pdf",
      "questions": [
        {
          "num": 1,
          "text": "Indicare quali elementi della tabella periodica presentano maggior potenziale di ionizzazione. Motivare.",
          "topic": "Periodicità",
          "solution": "lez03-04-potenziale-ionizzazione"
        },
        {
          "num": 2,
          "text": "Assegnare ad ogni atomo il numero di ossidazione nelle seguenti specie: a) C₃H₈; b) Na₂S₂O₈; c) Solfito di calcio; d) acetone; e) metanolo; f) acido trifluoroacetico.",
          "topic": "Redox",
          "solution": "lez01-02-numeri-ossidazione"
        },
        {
          "num": 3,
          "text": "Bilanciare le seguenti reazioni: a) Cu + HNO₃ → Cu(NO₃)₂ + NO + H₂O; b) Zn(NO₃)₂ → ZnO + NO₂ + O₂; c) H₂O₂ + SnCl₂ → H₂O + SnCl₄",
          "topic": "Redox",
          "solution": "lez01-02-bilanciamento-Cu-HNO3"
        },
        {
          "num": 4,
          "text": "A 50 mL di una soluzione di idrossido di magnesio 0,35 M si aggiungono 100 mL di una soluzione di acido formico 0,6 M. Calcolare il pH della soluzione risultante.",
          "topic": "Acidi e Basi",
          "solution": "lez06-pH-acido-base"
        },
        {
          "num": 5,
          "text": "Calcolare l'entropia standard di formazione dell'ossido di calcio. Commentare il valore ottenuto.",
          "topic": "Termodinamica",
          "solution": "lez07-08-entropia"
        },
        {
          "num": 6,
          "text": "Indicare i prodotti che si scaricano agli elettrodi per elettrolisi di una soluzione di solfato di sodio. Motivare.",
          "topic": "Elettrochimica",
          "solution": "lez10-elettrolisi"
        },
        {
          "num": 7,
          "text": "La Keq della reazione HI ⇌ H₂ + I₂ a 440°C vale 0,020. Calcolare la composizione della miscela all'equilibrio quando si introducono 15 g di acido iodidrico.",
          "topic": "Termodinamica",
          "solution": "lez07-08-equilibrio-chimico"
        },
        {
          "num": 8,
          "text": "Ricavare la formula della k cinetica di una reazione del 2° ordine monocomponente in funzione del tempo di dimezzamento.",
          "topic": "Cinetica",
          "solution": "lez09-cinetica-2ordine"
        }
      ]
    },
    {
      "id": "2-1",
      "title": "Esame 2-1",
      "file": "2-1.pdf",
      "questions": [
        {
          "num": 1,
          "text": "Si consideri l'idrogenazione dell'acetone (CH₃)₂CO a 2-propanolo. Alla temperatura di 452 K, Kp = 2,25. A questa T la reazione è spontanea in stato standard? Quanto vale ΔG a 452 K quando P(2-propanolo) = 22,5 atm, P(acetone) = 2 atm e P(H₂) = 5 atm?",
          "topic": "Termodinamica",
          "solution": "lez07-08-termodinamica-Kp-acetone"
        },
        {
          "num": 2,
          "text": "Si hanno due elettrodi: a) C(graf)/MnO₄⁻(0,05M), Mn²⁺(0,1M), H⁺(0,05M); b) C(graf)/MnO₄⁻(2M), Mn²⁺(1M), H⁺(2M). Stabilire di che tipo di pila si tratta e calcolarne la f.e.m.",
          "topic": "Elettrochimica",
          "solution": "lez10-pila-concentrazione-MnO4"
        },
        {
          "num": 3,
          "text": "Calcolare quanti litri di cloro misurati a c.n. (0°C e 1,0 bar) sono necessari per trasformare 50,5 g di PCl₃ in PCl₅.",
          "topic": "Stechiometria",
          "solution": "lez01-02-stechiometria-PCl3-Cl2"
        },
        {
          "num": 4,
          "text": "Completare e bilanciare: Cl₂ + OH⁻ → Cl⁻ + ClO₃⁻ + H₂O; Cu + HNO₃ → Cu(NO₃)₂ + NO + H₂O; MnO₂ + HCl → MnCl₂ + Cl₂ + H₂O",
          "topic": "Redox",
          "solution": "lez01-02-bilanciamento-redox"
        },
        {
          "num": 5,
          "text": "Quanto calcio è possibile ottenere dall'elettrolisi del CaCl₂ fuso considerando di utilizzare una corrente di 500 A per un tempo pari a 30 minuti?",
          "topic": "Elettrochimica",
          "solution": "lez10-elettrolisi-calcio"
        },
        {
          "num": 6,
          "text": "Mettete in ordine di dimensioni crescenti i seguenti ioni isoelettronici: S²⁻, Sc³⁺, Ca²⁺, P³⁻. Motivare.",
          "topic": "Periodicità",
          "solution": "lez03-04-ioni-isoelettronici"
        },
        {
          "num": 7,
          "text": "Delle seguenti sostanze, descrivere le strutture di Lewis, tipologia di legami, geometria molecolare, polarità e interazioni intermolecolari: BrF₃, H₂SO₄, BaCl₂.",
          "topic": "Legami",
          "solution": "lez05-lewis-geometria-BrF3-H2SO4-BaCl2-O3"
        },
        {
          "num": 8,
          "text": "Calcolare quanti grammi di acido acetico sono necessari per preparare 2,5 litri di soluzione acquosa a pH 3,2. (Ka = 1,8×10⁻⁵)",
          "topic": "Acidi e Basi",
          "solution": "lez06-pH-acido-acetico-1"
        }
      ]
    },
    {
      "id": "3-1",
      "title": "Esame 3-1",
      "file": "3-1.pdf",
      "questions": [
        {
          "num": 1,
          "text": "Calcolare il calore di combustione dell'etilene sapendo che 0,1 g di etilene bruciati in una bomba calorimetrica producono un innalzamento di 2°C di un calorimetro avente capacità termica di 600 cal/°C.",
          "topic": "Termodinamica",
          "solution": "lez07-calorimetria-etilene"
        },
        {
          "num": 2,
          "text": "Calcolare il potenziale della seguente pila: Pt| Fe²⁺(1M), Fe³⁺(0,1M) || Fe²⁺(0,1M), Fe³⁺(1M) |Pt",
          "topic": "Elettrochimica",
          "solution": "lez10-pila-concentrazione-Fe"
        },
        {
          "num": 3,
          "text": "Delle seguenti sostanze, descrivere le strutture di Lewis, la geometria molecolare e l'ibridizzazione: CO₂, ione bicarbonato, H₂CO, H₂CO₂, H₂CO₃, ozono.",
          "topic": "Legami",
          "solution": "lez05-lewis-composti-carbonio"
        },
        {
          "num": 4,
          "text": "Completare e bilanciare: Mn²⁺ + ClO₃⁻ → MnO₂ + ClO₂; KNO₃ + Al + KOH + H₂O → NH₃ + KAlO₂; Cr₂O₇²⁻ + C₂O₄²⁻ + H₃O⁺ → Cr³⁺ + CO₂ + H₂O",
          "topic": "Redox",
          "solution": "lez01-02-bilanciamento-redox-1"
        },
        {
          "num": 5,
          "text": "A 360 mL di una soluzione di bario idrossido 0,25 M si aggiungono 250 mL di una soluzione di acido solforico 0,1 M. Calcolare la quantità in grammi di solfato di bario che precipita.",
          "topic": "Stechiometria",
          "solution": "lez01-02-precipitazione-BaSO4"
        },
        {
          "num": 6,
          "text": "Calcolare quanti grammi e quanti mL misurati a c.n. di ammoniaca sono necessari per preparare 0,5 L di soluzione acquosa a pH 9,2.",
          "topic": "Acidi e Basi",
          "solution": "lez06-pH-ammoniaca"
        },
        {
          "num": 7,
          "text": "10 grammi di SO₂Cl₂ gassoso si caricano in un reattore da 1 L a 370 K. Sapendo che la Keq della decomposizione a SO₂ e Cl₂ vale 2,4 atm, calcolare la composizione della miscela all'equilibrio.",
          "topic": "Termodinamica",
          "solution": "lez07-08-equilibrio-SO2Cl2"
        },
        {
          "num": 8,
          "text": "Quanto alluminio è possibile ottenere dall'elettrolisi di Al₂O₃ fuso con purezza del 94% utilizzando una corrente di 600 A per 40 minuti?",
          "topic": "Elettrochimica",
          "solution": "lez10-elettrolisi-alluminio"
        }
      ]
    },
    {
      "id": "4-1",
      "title": "Esame 4-1",
      "file": "4-1.pdf",
      "questions": [
        {
          "num": 1,
          "text": "Calcolare il volume di anidride solforosa (a c.n., 0°C, 1 atm) che si produce dalla combustione completa di 2 grammi di zolfo.",
          "topic": "Stechiometria",
          "solution": "lez01-02-stechiometria-SO2"
        },
        {
          "num": 2,
          "text": "Calcolare il potenziale di una pila costituita da un elettrodo standard ad Ag⁺ ed un elettrodo standard a Cu²⁺. Calcolare inoltre la Keq della reazione in gioco.",
          "topic": "Elettrochimica",
          "solution": "lez10-pila-Ag-Cu"
        },
        {
          "num": 3,
          "text": "Delle seguenti sostanze, riportare le strutture di Lewis, la geometria molecolare e l'ibridizzazione: SO₂, HClO₄, HCOOH, P₂O₅, P₂O₃, NaN₃.",
          "topic": "Legami",
          "solution": "lez05-lewis-geometria"
        },
        {
          "num": 4,
          "text": "Completare e bilanciare: Mn²⁺ + ClO₃⁻ → MnO₂ + ClO₂; KNO₃ + Al + KOH + H₂O → NH₃ + KAlO₂; Cr₂O₇²⁻ + C₂O₄²⁻ + H₃O⁺ → Cr³⁺ + CO₂ + H₂O",
          "topic": "Redox",
          "solution": "lez01-02-bilanciamento-redox-2"
        },
        {
          "num": 5,
          "text": "Calcolare il ΔH° della reazione di idrogenazione dell'etilene a etano. (ΔH°comb etilene = -1285 kJ/mol; ΔH°comb etano = -1422 kJ/mol; ΔH°f H₂O = -286 kJ/mol)",
          "topic": "Termodinamica",
          "solution": "lez07-08-entalpia-idrogenazione"
        },
        {
          "num": 6,
          "text": "Calcolare il volume di una soluzione di acido nitrico 2,5 M necessario per portare in soluzione 1 g di rame metallico secondo: Cu + HNO₃ → Cu(NO₃)₂ + NO + H₂O",
          "topic": "Stechiometria",
          "solution": "lez01-02-bilanciamento-Cu-HNO3"
        },
        {
          "num": 7,
          "text": "Un grammo di carbonato di calcio viene aggiunto ad un litro di una soluzione di HCl 1,45 M. Calcolare il pH della soluzione finale.",
          "topic": "Acidi e Basi",
          "solution": "lez06-pH-eccesso-acido"
        },
        {
          "num": 8,
          "text": "In un reattore da 1 litro a 35°C si caricano 0,05 moli di N₂O₅. Sapendo che k = 1,12×10⁻⁴ s⁻¹, calcolare la composizione della miscela gassosa dopo un'ora.",
          "topic": "Cinetica",
          "solution": "lez09-cinetica-decomposizione"
        }
      ]
    },
    {
      "id": "5-1",
      "title": "Esame 5-1",
      "file": "5-1.pdf",
      "questions": [
        {
          "num": 1,
          "text": "Dati i seguenti calori di combustione molare, calcolare il calore di formazione molare dell'acetone CH₃COCH₃. (C+O₂→CO₂: 94,45 Kcal; H₂+½O₂→H₂O: 68,37 Kcal; CH₃COCH₃+4O₂→3CO₂+3H₂O: 426,8 Kcal)",
          "topic": "Termodinamica",
          "solution": "lez07-08-termodinamica-Kp-acetone-1"
        },
        {
          "num": 2,
          "text": "Calcolare la quantità di calore necessaria per trasformare 20 g di ghiaccio a 0°C in vapore a 100°C. (Calore latente fusione ghiaccio: 79 cal/g; calore di vaporizzazione acqua: 540 cal/g)",
          "topic": "Termodinamica",
          "solution": "lez07-calorimetria"
        },
        {
          "num": 3,
          "text": "Calcolare quanti grammi di Cromo e quanti litri di cloro (a c.n.) vengono prodotti facendo passare una corrente di 12 A per 40 minuti attraverso una soluzione di cloruro di cromo.",
          "topic": "Elettrochimica",
          "solution": "lez10-elettrolisi-cromo"
        },
        {
          "num": 4,
          "text": "Calcolare la f.e.m. della pila: Pb | Pb²⁺ 0,5 M || Zn²⁺ 0,01 M | Zn",
          "topic": "Elettrochimica",
          "solution": "lez10-pila-Pb-Zn-nernst"
        },
        {
          "num": 5,
          "text": "Calcolare la Costante di Equilibrio a 25°C per la reazione: Cl₂ + 2I⁻ → 2Cl⁻ + I₂",
          "topic": "Elettrochimica",
          "solution": "lez10-Keq-elettrochimica"
        },
        {
          "num": 6,
          "text": "Stabilire se è possibile produrre idrogeno aggiungendo ferro o rame metallici a una soluzione di acido cloridrico 1M. Scrivere e bilanciare le reazioni che si ritiene possano avvenire.",
          "topic": "Elettrochimica",
          "solution": "lez10-redox-metalli-acido"
        },
        {
          "num": 7,
          "text": "Calcolare il valore della Costante di Equilibrio a 25°C della reazione: N₂ + 3H₂ → 2NH₃. (ΔG°f NH₃ = -3,976 Kcal/mol)",
          "topic": "Termodinamica",
          "solution": "lez07-08-Keq-termodinamica-ammoniaca"
        },
        {
          "num": 8,
          "text": "In una reazione del secondo ordine un componente A, alla concentrazione iniziale 0,8 M, si riduce a 0,615 M dopo 7 minuti e 48 secondi. Calcolare la costante cinetica e il tempo necessario per portare il reagente a 0,1 mol/litro.",
          "topic": "Cinetica",
          "solution": "lez09-cinetica-secondo-ordine"
        }
      ]
    },
    {
      "id": "6-1",
      "title": "Esame 6-1",
      "file": "6-1.pdf",
      "questions": [
        {
          "num": 1,
          "text": "Il volume di un chiodo di ferro (d = 7,874 g/cm³) è di 0,34 cm³. Calcolare il numero di moli e il numero di atomi di ferro presenti.",
          "topic": "Stechiometria",
          "solution": "lez01-02-moli-atomi-ferro"
        },
        {
          "num": 2,
          "text": "Calcolare il numero di moli di zolfo contenute in 0,850 kg di pirite (FeS₂) al 95,0%. Calcolare la massa di acido solforico ottenibile da questa quantità di zolfo attraverso un processo al 78,0% di resa.",
          "topic": "Stechiometria",
          "solution": "lez01-02-stechiometria-pirite"
        },
        {
          "num": 3,
          "text": "Il titanio metallico si prepara per reazione del tetracloruro di titanio con magnesio. Scrivere e bilanciare la reazione. Calcolare la massa di titanio ottenibile dalla reazione di 250 g di TiCl₄ e 250 g di Mg.",
          "topic": "Stechiometria",
          "solution": "lez01-02-reagente-limitante-titanio"
        },
        {
          "num": 4,
          "text": "Scrivere le formule di struttura di SO₂, HNO₃, NH₄Cl, K₂SO₄, HPO₄²⁻, CO₂. Per ciascuna indicare nome, ibridizzazione, geometria e angoli di legame.",
          "topic": "Legami",
          "solution": "lez05-lewis-geometria-1"
        },
        {
          "num": 5,
          "text": "Scrivere le configurazioni elettroniche di: Cl⁻, Br⁻, Mg⁺, Mg²⁺. Tra le coppie a) Mg⁺/Mg²⁺ b) Cl⁻/Br⁻, quale ione ha raggio minore? Motivare.",
          "topic": "Periodicità",
          "solution": "lez03-04-configurazioni-raggi-ionici"
        },
        {
          "num": 6,
          "text": "La frequenza di soglia del cesio è 5,18 × 10¹⁴ s⁻¹. a) Determinare se luce arancio (λ = 620 nm) provoca emissione di elettroni; b) calcolare l'energia degli elettroni emessi con λ = 200 nm.",
          "topic": "Teoria Atomica",
          "solution": "lez03-effetto-fotoelettrico"
        },
        {
          "num": 7,
          "text": "Calcolare il volume di acido nitrico 3,69 M necessario per ossidare completamente 100 g di rame. Reazione: Cu + HNO₃ → Cu(NO₃)₂ + NO + H₂O",
          "topic": "Stechiometria",
          "solution": "lez01-02-stechiometria-HNO3"
        },
        {
          "num": 8,
          "text": "Calcolare il pH di una soluzione di acido benzoico (Ka = 6,45 × 10⁻⁵) 0,10 M e il grado di dissociazione. A 500 mL si aggiungono 0,050 moli di benzoato di sodio, calcolare il pH.",
          "topic": "Acidi e Basi",
          "solution": "lez06-pH-acido-debole-tampone"
        }
      ]
    }
  ]
};
