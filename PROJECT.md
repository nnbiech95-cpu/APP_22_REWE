# Bilanzspiel Projekt

## Projektbeschreibung

Eine umfassende interaktive Lern-Webanwendung zum Verstehen von Bilanzveränderungen in der Buchhaltung. Die Plattform bietet mehrere didaktisch aufbereitete Spiele und Visualisierungen für unterschiedliche Lernziele, geeignet für Berufsschüler und Auszubildende im kaufmännischen Bereich.

### Module

#### 🎯 BilanzVeraenderungSpiel
Animierte Visualisierungen der 4 Arten von Bilanzveränderungen:
- **Aktiv-Tausch**: Verschiebungen innerhalb der Aktivseite
- **Passiv-Tausch**: Verschiebungen innerhalb der Passivseite
- **Bilanzverlängerung**: Simultane Erhöhung von Aktiv- und Passivseite
- **Bilanzverkürzung**: Simultane Verringerung von Aktiv- und Passivseite

Features:
- 4 verschiedene Schwierigkeitslevel
- Schritt-für-Schritt Animationen mit Erklärungen
- Interaktive Übungsaufgaben mit direktem Feedback
- Progress-Tracking und Erfolgsstatistiken

#### 📊 BilanzenSpiel
Interaktives Drag & Drop Sortierspiel zur Bilanzstruktur:
- 12 Bilanz-Begriffe (Maschinen, Vorräte, Stammkapital, Verbindlichkeiten, etc.)
- Drag & Drop oder Klick-Zuordnung zu Aktiva/Passiva
- Sofortiges Feedback mit Erklärungen (✅/❌)
- Live-Punktestand und Fortschrittsbalken
- "Neue Runde" und "Lösung anzeigen" Funktionen
- Große, lesbare Schrift für Beamer-Präsentation im Klassenzimmer
- Hilfetexte bei jedem Begriff (Hover/Info-Button)

#### 📝 BilanzQuizSpiel
Quiz-basiertes Lernformat:
- Multiple-Choice Fragen zu Bilanzthemen
- Sofortiges Feedback zu Antworten
- Punktesystem zur Motivation

#### 💰 ReichGeldSpiel
Spielerisches Lernen von Vermögensaufbau-Konzepten:
- Simulation von Finanzentscheidungen
- Langfristige Auswirkungen verstehen
- Gamification-Elemente für erhöhte Motivation

#### ☕ Lenas Café (Standalone-App)
**Standalone interaktive Web-App** in `Spiel_fortsetzung/lenas-cafe/`:
- Geschichte von "Lenas Café" mit **8 Geschäftsvorfällen**
- Multiple-Choice Fragen nach jedem Geschäftsvorfall
- **Animierte Bilanzanzeige** mit farblichen Hervorhebungen
- Fortschrittsbalken, Punkte-System (8 Fragen), Zusammenfassung am Ende
- Keyboard-Navigation (→, ←, ESC)
- Modernes Gradient-Design in Lila-Tönen
- Responsive Layout für alle Geräte
- **Läuft separat** auf Port 8080 oder als standalone HTML

Alle 4 Bilanzveränderungstypen werden durch praktische Beispiele vermittelt:
- Espressomaschine kaufen (Aktiv-Tausch)
- Kredit aufnehmen (Bilanzverlängerung)
- Rechnung bezahlen (Bilanzverkürzung)
- Umschuldung (Passiv-Tausch)

## Technologie-Stack

### Hauptanwendung (React)
- **Framework**: React 18.2 + Vite 5.0
- **Styling**: Tailwind CSS 3.3
- **Icons**: Lucide React 0.294
- **Visualisierung**: Mermaid 10.9
- **Sprache**: JavaScript (JSX)

### Lenas Café (Vanilla)
- **Pure HTML5, CSS3, JavaScript**
- Keine Frameworks oder Dependencies
- Standalone-Lösung

## Projektstruktur

```
spiel/
├── src/                              # React-Komponenten (Hauptanwendung)
│   ├── App.jsx                      # Hauptkomponente mit Spiel-Auswahl
│   ├── BilanzVeraenderungSpiel.jsx  # Animierte 4 Bilanztypen
│   ├── BilanzenSpiel.jsx            # Drag & Drop Sortierspiel
│   ├── BilanzQuizSpiel.jsx          # Multiple-Choice Quiz
│   ├── ReichGeldSpiel.jsx           # Vermögensaufbau-Simulation
│   ├── main.jsx                     # Entry Point
│   └── index.css                    # Global Styles
├── Spiel_fortsetzung/               # Erweiterte Materialien
│   ├── lenas-cafe/                  # 🆕 Standalone Web-App
│   │   ├── index.html              # Interaktive Café-Geschichte
│   │   ├── script.js               # Game Logic + State Management
│   │   ├── styles.css              # Modernes Gradient-Design
│   │   └── README.md               # Ausführliche Dokumentation
│   ├── Einfuehrungsgeschichte_Bilanzveraenderungen.md
│   ├── Uebungsblatt_Bilanzveraenderungen.md/.tex
│   ├── Loesungen_Uebungsblatt_Bilanzveraenderungen.md
│   └── PROJECT.md                   # Duplikat der Hauptdokumentation
├── docs/                            # 🆕 Didaktische Materialien
│   ├── aufgabenblatt_bilanzveraenderungen.md/.html/.tex
│   ├── infoblatt_bilanzveraenderungen.md/.html/.tex
│   ├── visualisierungen_mermaid.md  # Mermaid-Diagramme
│   └── README.md                    # Docs-Übersicht
├── bilanz_spiel_prompt.md           # 🆕 Prompt für BilanzenSpiel
├── bilanz_veraenderung_prompt.md    # 🆕 Prompt für BilanzVeraenderungSpiel
├── index.html                       # HTML Entry Point
├── package.json                     # Dependencies
├── vite.config.js                   # Vite Konfiguration
├── tailwind.config.js               # Tailwind Konfiguration
└── postcss.config.js                # PostCSS Konfiguration
```

## Entwicklung starten

### Voraussetzungen
- Node.js installiert
- npm installiert

### Hauptanwendung (React)

```powershell
cd C:\Users\asdfK\OneDrive\Desktop\Apps\spiel
npm run dev
```

Der Development-Server läuft dann auf: **http://localhost:5173/**

### Lenas Café (Standalone)

Die App kann auf zwei Arten gestartet werden:

**Option 1: Direkt im Browser**
```powershell
# Einfach index.html öffnen
start .\Spiel_fortsetzung\lenas-cafe\index.html
```

**Option 2: Mit lokalem Server (bereits konfiguriert)**
```powershell
# Falls bereits ein Server läuft:
# http://localhost:8080
```

### Alternative Befehle

```powershell
# Dependencies installieren (falls node_modules fehlt)
npm install

# Production Build erstellen
npm run build

# Production Build lokal testen
npm run preview
```

## Didaktische Verwendung

### Im Unterricht (Beamer/Smartboard)
- **BilanzenSpiel**: Klasse ordnet gemeinsam Begriffe zu
- **Lenas Café**: Lehrer klickt durch die Geschichte, Klasse diskutiert
- **BilanzVeraenderungSpiel**: Animierte Visualisierung am Beamer

### Einzelarbeit
- Schüler arbeiten selbstständig durch die Module
- Automatisches Feedback unterstützt selbstgesteuertes Lernen
- Jeder in eigenem Tempo

### Gruppenarbeit
- 2-3 Schüler pro Computer
- Gemeinsame Diskussion und Peer-Learning
- Kooperatives Problemlösen

### Mit Unterrichtsmaterialien kombinieren
1. **docs/infoblatt_bilanzveraenderungen.md** als theoretische Einführung
2. **Lenas Café** zur praktischen Visualisierung
3. **docs/aufgabenblatt_bilanzveraenderungen.md** für Übungen
4. **BilanzenSpiel** zur Vertiefung

## Lernziele

Nach Nutzung dieser Anwendungen können Schüler:
- ✅ Alle 4 Bilanzveränderungsarten erkennen und benennen
- ✅ Geschäftsvorfälle korrekt Aktiva/Passiva zuordnen
- ✅ Auswirkungen auf die Bilanzsumme verstehen
- ✅ Zusammenhang zwischen Geschäftsvorfall und Bilanzänderung nachvollziehen
- ✅ Bilanzlogik (Mittelverwendung vs. Mittelherkunft) verstehen

## 🆕 Neu im Projekt (Update Dezember 2025)

### Neue Features
- ☕ **Lenas Café**: Vollständige standalone Web-App mit 8 interaktiven Geschäftsvorfällen
- 📚 **docs/**: Didaktische Materialien (Infoblätter, Aufgabenblätter) in mehreren Formaten (.md, .html, .tex)
- 📝 **Prompt-Dokumentation**: Detaillierte Prompts für BilanzenSpiel und BilanzVeraenderungSpiel
- 🎨 **Mermaid-Visualisierungen**: Zusätzliche Diagramme für Bilanzveränderungen

### Verbesserte Dokumentation
- Ausführliche README in lenas-cafe/
- Erweiterte didaktische Hinweise
- Technische Details zu allen Modulen
- Kombinationsmöglichkeiten der verschiedenen Lerntools

## Für AI Agents

### Hauptanwendung starten
1. Navigiere zu: `C:\Users\asdfK\OneDrive\Desktop\Apps\spiel`
2. Führe aus: `npm run dev` (mit `isBackground: true`)
3. Server erreichbar unter: `http://localhost:5173/`

### Lenas Café starten
1. Navigiere zu: `C:\Users\asdfK\OneDrive\Desktop\Apps\spiel\Spiel_fortsetzung\lenas-cafe`
2. Öffne `index.html` direkt im Browser
3. ODER nutze lokalen Server auf Port 8080

### Dependencies
Alle React-Dependencies sind bereits installiert:
- react 18.2.0
- react-dom 18.2.0
- lucide-react 0.294.0
- mermaid 10.9.5
- vite 5.0.8
- tailwindcss 3.3.6
