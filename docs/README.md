# Dokumentation: Bilanzveränderungen Lernmaterial

Dieser Ordner enthält umfassendes Lernmaterial zum Thema "Die 4 Arten von Bilanzveränderungen".

## 📚 Verfügbare Dokumente

### 1. **Infoblatt** (Theorie)
- `infoblatt_bilanzveraenderungen.md` - Interaktives Markdown mit Mermaid-Diagrammen
- `infoblatt_bilanzveraenderungen.tex` - LaTeX-Version für PDF-Export

**Inhalt:**
- Erklärung aller 4 Bilanzveränderungsarten
- Beispiele und Merkregeln
- Entscheidungsbaum zur Typ-Bestimmung
- Formale Vorgaben (§ 266 HGB)

### 2. **Aufgabenblatt** (Praxis)
- `aufgabenblatt_bilanzveraenderungen.md` - Interaktives Markdown
- `aufgabenblatt_bilanzveraenderungen.tex` - LaTeX-Version für Ausdruck

**Inhalt:**
- 5 Aufgaben mit 50 Punkten
- 16 Geschäftsvorfälle zum Üben
- Bilanzsummen-Berechnungen
- Transferaufgabe

### 3. **Visualisierungen** (Grafiken)
- `visualisierungen_mermaid.md` - Interaktive Mermaid-Diagramme

**Inhalt:**
- 8 verschiedene Diagramm-Typen:
  - Mindmap-Übersicht
  - Vorher/Nachher-Vergleiche
  - Sequenzdiagramme
  - Entscheidungsbaum
  - Flowcharts
  - Timeline
  - Gantt-Chart

## 🎯 Verwendung

### Für Schüler:
1. **Lernen:** `infoblatt_bilanzveraenderungen.md` durcharbeiten
2. **Visualisieren:** Interaktives Lernspiel nutzen (http://localhost:5173)
3. **Üben:** `aufgabenblatt_bilanzveraenderungen.md` bearbeiten
4. **Verstehen:** `visualisierungen_mermaid.md` für grafische Darstellung

### Für Lehrer:
1. **PDF erstellen:** LaTeX-Dateien mit `pdflatex` kompilieren
2. **Präsentation:** Markdown-Dateien mit Mermaid-Support zeigen (VS Code, GitHub)
3. **Beamer:** Interaktives Spiel auf Smartboard projizieren
4. **Hausaufgabe:** Aufgabenblatt ausdrucken und verteilen

## 🛠️ PDF-Erstellung (optional)

### Voraussetzung: LaTeX installieren
```powershell
# Windows (MiKTeX oder TeX Live)
winget install MiKTeX.MiKTeX
```

### PDFs kompilieren:
```powershell
cd docs
pdflatex infoblatt_bilanzveraenderungen.tex
pdflatex aufgabenblatt_bilanzveraenderungen.tex
```

## 🎨 Mermaid-Diagramme anzeigen

### In VS Code:
1. Extension installieren: "Markdown Preview Mermaid Support"
2. Markdown-Datei öffnen
3. Preview: `Ctrl+Shift+V`

### In Browser:
- GitHub/GitLab: Automatische Darstellung
- Mermaid Live Editor: https://mermaid.live

### In Präsentation:
- Marp: Markdown-basierte Präsentationen
- Reveal.js: HTML-Präsentationen

## 📊 Diagramm-Übersicht

| Diagramm-Typ | Zweck | Datei |
|--------------|-------|-------|
| **Mindmap** | Übersicht 4 Typen | `visualisierungen_mermaid.md` |
| **Flowchart** | Geschäftsvorfall-Ablauf | `visualisierungen_mermaid.md` |
| **Sequence** | Zeitliche Abfolge | `visualisierungen_mermaid.md` |
| **Graph LR/TD** | Vorher/Nachher | `visualisierungen_mermaid.md` |
| **Gantt** | Timeline | `visualisierungen_mermaid.md` |
| **Quadrant** | Matrix-Darstellung | `visualisierungen_mermaid.md` |

## ✅ Vorteile von Mermaid-Diagrammen

### Statt statischer PDFs:
- ✅ **Versionskontrolle:** Änderungen in Git nachvollziehbar
- ✅ **Kollaboration:** Team kann Text-basiert zusammenarbeiten
- ✅ **Responsiv:** Automatische Anpassung an Bildschirmgröße
- ✅ **Editierbar:** Kein Grafikprogramm nötig
- ✅ **Interaktiv:** Hover-Effekte, Zoom möglich
- ✅ **Konsistent:** Einheitlicher Stil durch Theme
- ✅ **Barrierefrei:** Screen-Reader kompatibel

### Nachteile:
- ⚠️ Benötigt Mermaid-Support im Viewer
- ⚠️ Komplexe Layouts eingeschränkt

## 🎓 Didaktischer Einsatz

### Unterrichtsablauf (90 Min):

**Phase 1: Input (20 Min)**
- Infoblatt durchgehen
- Mermaid-Diagramme zeigen
- Mindmap projizieren

**Phase 2: Exploration (30 Min)**
- Interaktives Spiel am Beamer
- Level 1-4 gemeinsam durchspielen
- Animationen analysieren

**Phase 3: Übung (30 Min)**
- Aufgabenblatt bearbeiten (Einzelarbeit/Partnerarbeit)
- Geschäftsvorfälle zuordnen
- Bilanzsummen berechnen

**Phase 4: Sicherung (10 Min)**
- Lösungen besprechen
- Transferaufgabe diskutieren
- Quiz-Modus (Level 5)

## 📁 Dateistruktur

```
docs/
├── README.md (diese Datei)
├── infoblatt_bilanzveraenderungen.md
├── infoblatt_bilanzveraenderungen.tex
├── aufgabenblatt_bilanzveraenderungen.md
├── aufgabenblatt_bilanzveraenderungen.tex
└── visualisierungen_mermaid.md
```

## 🔗 Links

- **Interaktives Spiel:** http://localhost:5173
- **Mermaid Dokumentation:** https://mermaid.js.org
- **§ 266 HGB:** Gliederung der Bilanz
- **Markdown Guide:** https://www.markdownguide.org

---

**Erstellt für:** Berufsschulklasse Rechnungswesen  
**Thema:** Die 4 Arten von Bilanzveränderungen  
**Niveau:** Grundlagen Bilanzierung  
