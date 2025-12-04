# Bilanzspiel Projekt

## Projektbeschreibung

Eine interaktive Lern-Webanwendung zum Verstehen von Bilanzveränderungen in der Buchhaltung. Die Plattform bietet mehrere didaktisch aufbereitete Spiele und Visualisierungen für unterschiedliche Lernziele:

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
Interaktives Spiel zum Erstellen und Verstehen von Bilanzen:
- Praktische Übungen zur Bilanzstruktur
- Zuordnung von Geschäftsvorfällen
- Visuelle Darstellung von Bilanzpositionen

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

## Technologie-Stack

- **Framework**: React + Vite
- **Styling**: Tailwind CSS
- **Sprache**: JavaScript (JSX)

## Projektstruktur

```
spiel/
├── src/                    # React-Komponenten
│   ├── App.jsx            # Hauptkomponente
│   ├── BilanzVeraenderungSpiel.jsx
│   ├── BilanzenSpiel.jsx
│   ├── BilanzQuizSpiel.jsx
│   ├── ReichGeldSpiel.jsx
│   ├── main.jsx           # Entry Point
│   └── index.css          # Global Styles
├── docs/                   # Dokumentation
├── index.html             # HTML Entry Point
├── package.json           # Dependencies
├── vite.config.js         # Vite Konfiguration
└── tailwind.config.js     # Tailwind Konfiguration
```

## Entwicklung starten

### Voraussetzungen
- Node.js installiert
- npm installiert

### Server starten

```powershell
cd C:\Users\asdfK\OneDrive\Desktop\Apps\spiel
npm run dev
```

Der Development-Server läuft dann auf: **http://localhost:5173/**

### Alternative Befehle

```powershell
# Dependencies installieren (falls node_modules fehlt)
npm install

# Production Build erstellen
npm run build

# Production Build lokal testen
npm run preview
```

## Für AI Agents

**Um dieses Projekt zu starten:**
1. Navigiere zu: `C:\Users\asdfK\OneDrive\Desktop\Apps\spiel`
2. Führe aus: `npm run dev`
3. Der Server ist erreichbar unter: `http://localhost:5173/`

**Wichtig**: Der Befehl `npm run dev` ist ein Background-Prozess und sollte mit `isBackground: true` ausgeführt werden.
