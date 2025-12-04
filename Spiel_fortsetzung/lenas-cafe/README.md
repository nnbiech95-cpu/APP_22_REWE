# 📱 Lenas Café - Interaktive Bilanzveränderungs-App

## 🎯 Was ist das?

Eine vollständig interaktive Web-App, die die Geschichte von "Lenas Café" aus dem Handout visualisiert und interaktiv erlebbar macht.

## ✨ Features

### 🎮 Interaktive Lernelemente
- **8 Geschäftsvorfälle** zum Durchklicken
- **Multiple-Choice Fragen** nach jedem Vorfall
- **Sofortiges Feedback** mit Erklärungen
- **Animierte Bilanzanzeige** mit Hervorhebungen

### 📊 Bilanz-Visualisierung
- **Zweiseitige Darstellung** (Aktiva / Passiva)
- **Farbliche Hervorhebung** von Änderungen
  - 🟢 Neue Positionen (grün)
  - 🔵 Geänderte Beträge (blau)
  - 🟡 Relevante Positionen (gelb)
- **Detaillierte Erklärungen** zu jeder Veränderung

### 📈 Fortschritt & Motivation
- **Fortschrittsbalken** mit Schritt-Anzeige
- **Punkte-System** (8 Fragen)
- **Zusammenfassung** am Ende mit Prozentanzeige
- **Neustart-Funktion** zum Wiederholen

### 🎨 Modernes Design
- **Gradient-Design** in Lila-Tönen
- **Smooth Animationen** (Fade-In, Slide, Pulse)
- **Responsive Layout** (funktioniert auf allen Geräten)
- **Keyboard-Navigation** (Pfeiltasten, ESC)

## 🚀 Verwendung

### Im Browser öffnen
1. Öffne `index.html` in einem Browser
2. Oder nutze einen lokalen Server (bereits gestartet auf Port 8080)
3. Klicke dich durch die Geschichte

### Tastatur-Shortcuts
- **→** (Rechts): Nächster Schritt
- **←** (Links): Vorheriger Schritt
- **ESC**: Bilanz-Modal schließen

## 📖 Didaktische Verwendung

### Als Unterrichtsmaterial

#### Variante 1: Beamer-Präsentation
- Lehrer zeigt die App am Beamer
- Klasse diskutiert gemeinsam die Antworten
- Bilanz wird für alle visualisiert

#### Variante 2: Einzelarbeit
- Schüler arbeiten selbstständig durch
- Jeder in eigenem Tempo
- Automatisches Feedback hilft beim Lernen

#### Variante 3: Gruppenarbeit
- 2-3 Schüler pro Computer
- Gemeinsame Diskussion der Fragen
- Peer-Learning-Effekt

### Kombination mit Handout
1. **Handout lesen** (Einführungsgeschichte_Bilanzveränderungen.md)
2. **App zur Visualisierung** nutzen
3. **Handout als Referenz** und für Übungsaufgaben

## 📋 Alle 8 Geschäftsvorfälle

| GV | Thema | Bilanzveränderung | Schwierigkeit |
|----|-------|-------------------|---------------|
| 1 | Espressomaschine kaufen | Aktiv-Tausch | ⭐⭐ |
| 2 | Kredit aufnehmen | Bilanzverlängerung | ⭐⭐ |
| 3 | Kaffeebohnen auf Rechnung | Bilanzverlängerung | ⭐⭐⭐ |
| 4 | Rechnung bezahlen | Bilanzverkürzung | ⭐⭐⭐ |
| 5 | Kredit zurückzahlen | Bilanzverkürzung | ⭐⭐ |
| 6 | Neuer Lieferant | Bilanzverlängerung | ⭐⭐⭐ |
| 7 | Mobiliar umtauschen | Aktiv-Tausch | ⭐⭐⭐⭐ |
| 8 | Umschuldung | Passiv-Tausch | ⭐⭐⭐⭐ |

## 🎓 Lernziele

Nach der Nutzung dieser App können Schüler:
- ✅ Alle 4 Bilanzveränderungen erkennen
- ✅ Geschäftsvorfälle richtig zuordnen
- ✅ Auswirkungen auf Aktiva/Passiva verstehen
- ✅ Veränderungen der Bilanzsumme nachvollziehen

## 🔧 Technische Details

### Dateien
- `index.html` - HTML-Struktur mit allen 8 Geschäftsvorfällen
- `styles.css` - Vollständiges Styling mit Animationen
- `script.js` - Gesamte Logik, State-Management, Bilanz-Daten

### Features im Code
- **State Management** für Fortschritt und Antworten
- **Bilanz-Datenbank** mit allen Zuständen
- **Animation-System** für smooth UX
- **Responsive Grid-Layout** für alle Bildschirmgrößen
- **Accessibility** (Keyboard-Navigation)

## 🌟 Besonderheiten

### Intelligentes Feedback
- ✅ Richtige Antwort: Grüner Button + Erklärung
- ❌ Falsche Antwort: Roter Button + korrekte Lösung wird gezeigt
- 📖 Detaillierte Erklärung nach jeder Antwort

### Visuelle Hervorhebungen
- **Neue Positionen**: Grüner Rahmen in der Bilanz
- **Geänderte Beträge**: Blauer Rahmen in der Bilanz
- **Animationen**: Pulse-Effekte bei Änderungen

### Motivationselemente
- 🎉 Erfolgsmeldung bei richtiger Antwort
- 📊 Fortschrittsbalken zeigt Nähe zum Ziel
- 🏆 Finale Auswertung mit Prozenten
- 🔄 Neustart-Button zum Verbessern

## 💡 Erweiterungsideen (optional)

Für später könnten hinzugefügt werden:
- 🔊 Sound-Effekte bei richtigen/falschen Antworten
- 🏅 Achievements/Badges für besondere Leistungen
- 💾 LocalStorage für Fortschritt speichern
- 📱 PWA-Funktion für Offline-Nutzung
- 🌍 Mehrsprachigkeit (Englisch, etc.)
- 📊 Detaillierte Statistiken und Lernfortschritt
- 🎯 Zusätzliche Übungsmodi (Zeitdruck, etc.)

## 📅 Erstellt

**Datum:** 23. November 2025  
**Zweck:** Interaktive Visualisierung für Bilanzveränderungen  
**Zielgruppe:** Berufsschüler, Auszubildende im kaufmännischen Bereich  
**Fach:** Rechnungswesen / Buchführung

---

## 🚀 Jetzt starten!

Die App läuft bereits und ist im Browser geöffnet!
**URL:** http://localhost:8080

Viel Erfolg beim Lernen mit Lenas Café! ☕
