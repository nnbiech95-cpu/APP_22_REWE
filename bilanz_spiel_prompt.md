# Prompt für interaktives Bilanz-Sortierspiel

## Aufgabe
Erstelle ein interaktives Sortierspiel als React-Artifact, bei dem Schüler Bilanz-Begriffe per Drag & Drop oder Klick der richtigen Bilanzseite (Aktiva oder Passiva) zuordnen können.

## Kontext
Dies ist für eine Berufsschulklasse, die gerade das Thema "Bilanz" lernt. Das Spiel soll auf einem Beamer/Smartboard im Klassenraum gezeigt werden, sodass die Klasse gemeinsam die Begriffe zuordnen kann.

## Zu sortierende Begriffe (12 Stück)

### Aktiva-Begriffe (richtige Seite):
1. Maschinen und Anlagen
2. Geschäftsausstattung
3. Vorräte (Material)
4. Fertige Erzeugnisse
5. Forderungen aus Lieferungen und Leistungen
6. Kassenbestand
7. Bankguthaben

### Passiva-Begriffe (richtige Seite):
8. Stammkapital
9. Gewinnrücklage
10. Jahresüberschuss
11. Verbindlichkeiten gegenüber Lieferanten
12. Verbindlichkeiten gegenüber Kreditinstituten (Bankkredit)

## Design-Anforderungen

### Layout
```
┌─────────────────────────────────────────────────────┐
│         🎯 BILANZ-SORTIERSPIEL                      │
├─────────────────────────────────────────────────────┤
│                                                     │
│  Zu sortierende Begriffe:                          │
│  [Begriff 1] [Begriff 2] [Begriff 3] ...          │
│                                                     │
├──────────────────────┬──────────────────────────────┤
│      AKTIVA          │         PASSIVA              │
│   (Vermögen)         │        (Kapital)             │
│                      │                              │
│  [Hier ablegen]      │     [Hier ablegen]          │
│                      │                              │
└──────────────────────┴──────────────────────────────┘

Punkte: X/12    [Neue Runde] [Lösung anzeigen]
```

### Funktionen

1. **Begriffe anzeigen**: Alle 12 Begriffe oben in zufälliger Reihenfolge anzeigen
2. **Sortierung**: 
   - Per Klick: Begriff auswählen, dann auf Aktiva oder Passiva klicken
   - ODER per Drag & Drop (falls möglich)
3. **Sofortiges Feedback**:
   - ✅ Grün bei richtig
   - ❌ Rot bei falsch (mit kurzer Erklärung)
4. **Punktestand**: Live-Anzeige der richtig zugeordneten Begriffe
5. **Buttons**:
   - "Neue Runde" - Alle Begriffe zurücksetzen und neu mischen
   - "Lösung anzeigen" - Alle Begriffe automatisch richtig platzieren
6. **Abschluss**: Wenn alle richtig: "🎉 Perfekt! Alle Begriffe richtig zugeordnet!"

### Hilfetexte einblenden

Bei jedem Begriff optional einen kurzen Hinweis anzeigen (beim Hover oder Klick auf ℹ️):

- **Maschinen**: "Langfristig genutzt, Anlagevermögen → Aktiva"
- **Stammkapital**: "Von Gründern eingebracht → Eigenkapital → Passiva"
- **Forderungen**: "Kunden schulden UNS Geld → Aktiva"
- **Verbindlichkeiten**: "WIR schulden anderen Geld → Passiva"
- etc.

### Styling
- Große, lesbare Schrift (für Beamer geeignet)
- Klare Farbcodierung:
  - Aktiva-Seite: Blau-Töne
  - Passiva-Seite: Grün-Töne
  - Richtige Antwort: Hellgrün
  - Falsche Antwort: Hellrot
- Responsive Design
- Animationen bei Feedback

### Gamification-Elemente
- Fortschrittsbalken (X von 12 richtig)
- Motivierende Texte:
  - 0-4: "Weiter so!"
  - 5-8: "Gut gemacht!"
  - 9-11: "Fast geschafft!"
  - 12: "Perfekt! 🎉"

## Technische Anforderungen
- React-Komponente mit useState für Zustandsverwaltung
- Tailwind CSS für Styling
- Lucide-React Icons für visuelle Elemente
- Keine externen Bibliotheken außer den verfügbaren (React, Tailwind, Lucide)

## Beispiel-Feedback-Texte

**Bei richtigem Platzieren:**
- "✅ Richtig! Maschinen gehören zu Aktiva, weil sie Vermögen darstellen."

**Bei falschem Platzieren:**
- "❌ Fast! Stammkapital gehört zu Passiva (Mittelherkunft), nicht zu Aktiva."
- "❌ Nein! Verbindlichkeiten sind Schulden und gehören immer zu Passiva."

## Zusätzliche Features (optional)
- Timer für Speed-Runden
- Highscore speichern (localStorage)
- Schwierigkeitsstufen (mit mehr oder weniger Begriffen)
- Sound-Effekte bei richtig/falsch (optional)

---

**Ziel**: Ein unterhaltsames, pädagogisch wertvolles Tool, das die Klasse gemeinsam nutzen kann, um die Bilanzlogik zu verstehen und zu üben.
