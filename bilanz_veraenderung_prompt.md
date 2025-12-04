# Prompt für interaktives Bilanzveränderungs-Spiel

## Aufgabe
Erstelle ein interaktives Lernspiel als React-Komponente, bei dem Schüler die **4 Arten von Bilanzveränderungen** durch animierte, visuelle Darstellungen verstehen lernen. Das Spiel zeigt Geschäftsvorfälle und visualisiert **Schritt-für-Schritt** und **kausal**, wie sich die Bilanz verändert.

## Kontext
Dies ist für eine Berufsschulklasse, die bereits die Grundlagen der Bilanz kennt (Aktiva/Passiva) und nun verstehen soll, wie Geschäftsvorfälle die Bilanz verändern. Das Spiel soll auf einem Beamer/Smartboard gezeigt werden und die **kausalen Zusammenhänge** durch Animationen verdeutlichen.

## Die 4 Arten von Bilanzveränderungen

### 1. Aktiv-Tausch
- **Definition:** Nur die Aktiv-Seite verändert sich
- **Effekt:** Ein Aktivposten steigt (+), ein anderer sinkt (-)
- **Bilanzsumme:** Bleibt gleich
- **Beispiele:**
  - Maschinenkauf bar: +Maschinen, -Bankguthaben
  - Kunde zahlt Rechnung: +Bankguthaben, -Forderungen
  - Geld von Bank abheben: +Kasse, -Bankguthaben

### 2. Passiv-Tausch
- **Definition:** Nur die Passiv-Seite verändert sich
- **Effekt:** Ein Passivposten steigt (+), ein anderer sinkt (-)
- **Bilanzsumme:** Bleibt gleich
- **Beispiele:**
  - Gewinn in Rücklage einstellen: +Gewinnrücklage, -Jahresüberschuss
  - Kredit umschulden: +Bankkredit, -Lieferantenverbindlichkeiten
  - Darlehen durch Kredit ablösen: +Verbindlichkeit A, -Verbindlichkeit B

### 3. Bilanzverlängerung (Aktiv-Passiv-Mehrung)
- **Definition:** Beide Seiten steigen
- **Effekt:** Aktiva steigt (+), Passiva steigt (+)
- **Bilanzsumme:** Steigt
- **Beispiele:**
  - Wareneinkauf auf Rechnung: +Vorräte (A), +Verbindlichkeiten Lieferanten (P)
  - Maschinenkauf mit Kredit: +Maschinen (A), +Bankkredit (P)
  - Gesellschafter zahlt Kapital ein: +Bankguthaben (A), +Stammkapital (P)

### 4. Bilanzverkürzung (Aktiv-Passiv-Minderung)
- **Definition:** Beide Seiten sinken
- **Effekt:** Aktiva sinkt (-), Passiva sinkt (-)
- **Bilanzsumme:** Sinkt
- **Beispiele:**
  - Kredittilgung bar: -Bankguthaben (A), -Bankkredit (P)
  - Lieferantenrechnung bar bezahlen: -Bankguthaben (A), -Verbindlichkeiten Lieferanten (P)
  - Privatentnahme: -Kasse (A), -Eigenkapital (P)

## Design-Anforderungen

### Layout
```
┌─────────────────────────────────────────────────────────────┐
│  🎯 BILANZVERÄNDERUNGEN VERSTEHEN            [Zurück] [?]   │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  📊 Level 1: Aktiv-Tausch     [1/4 Geschäftsvorfälle]      │
│                                                              │
│  ┌────────────────────────────────────────────────────┐    │
│  │  Geschäftsvorfall:                                  │    │
│  │  🏭 Kauf einer Maschine für 50.000 € in bar       │    │
│  └────────────────────────────────────────────────────┘    │
│                                                              │
│  ❓ Was passiert mit der Bilanz?                            │
│     ○ Aktiv-Tausch                                          │
│     ○ Passiv-Tausch                                         │
│     ○ Bilanzverlängerung                                    │
│     ○ Bilanzverkürzung                                      │
│                                                              │
│     [Antwort überprüfen]                                    │
│                                                              │
├──────────────────────┬──────────────────────────────────────┤
│      AKTIVA          │         PASSIVA                      │
│   (Vermögen)         │        (Kapital)                     │
│                      │                                      │
│  Maschinen           │  Stammkapital                        │
│  ████████ 100.000 €  │  ████████████ 150.000 €             │
│                      │                                      │
│  Bankguthaben        │  Bankkredit                          │
│  ██████ 80.000 €     │  ████ 50.000 €                      │
│                      │                                      │
│  Vorräte             │                                      │
│  ████ 50.000 €       │                                      │
│                      │                                      │
│  Forderungen         │                                      │
│  ████ 20.000 €       │                                      │
│                      │                                      │
├──────────────────────┼──────────────────────────────────────┤
│  Summe: 250.000 €    │  Summe: 200.000 €                   │
└──────────────────────┴──────────────────────────────────────┘

Fortschritt: ████████░░░░ 8/12  |  [Animation: ⚡ Schnell ▼]
```

### Visuelle Elemente

#### 1. Bilanz-Darstellung
- **Zweispaltig:** Aktiva links | Passiva rechts
- **Balkendiagramm:** Jeder Bilanzposten als horizontaler Balken
- **Beträge:** Neben jedem Balken in Euro
- **Bilanzsummen:** Unten in beiden Spalten (groß, fett)
- **Responsive:** Mobile und Desktop optimiert

#### 2. Farbcodierung (für Animationen)
- 🔵 **Blau:** Neutral/Ausgangszustand (`bg-blue-500`)
- 🟢 **Grün:** Zunahme/Positiv (`bg-green-500`)
- 🔴 **Rot:** Abnahme/Negativ (`bg-red-500`)
- 🟡 **Gelb:** Pulsierend für Aufmerksamkeit (`animate-pulse`)

#### 3. Animations-Sequenz (Kausalität zeigen)

**Beispiel: Maschinenkauf für 50.000 € bar**

```
Schritt 0: Ausgangszustand
  → Alle Balken blau

Schritt 1: Geschäftsvorfall einblenden (1 Sekunde)
  → Großer Text-Banner: "Kauf einer Maschine für 50.000 € in bar"

Schritt 2: Betroffene Posten markieren (0.5 Sekunden)
  → "Maschinen" und "Bankguthaben" pulsieren gelb

Schritt 3: Erste Veränderung (+Maschinen)
  → Zahl "+50.000 €" fliegt zum Posten (0.5 Sekunden)
  → Balken "Maschinen" wächst von 100.000 auf 150.000 (1 Sekunde)
  → Balken wird grün
  → Neuer Betrag: 150.000 €

Schritt 4: Pause (0.5 Sekunden)
  → Schüler kann Veränderung verarbeiten

Schritt 5: Zweite Veränderung (-Bankguthaben)
  → Zahl "-50.000 €" fliegt zum Posten (0.5 Sekunden)
  → Balken "Bankguthaben" schrumpft von 80.000 auf 30.000 (1 Sekunden)
  → Balken wird rot
  → Neuer Betrag: 30.000 €

Schritt 6: Pause (0.5 Sekunden)

Schritt 7: Bilanzsumme aktualisieren
  → Aktiva-Summe blinkt (bleibt 250.000 €)
  → Passiva-Summe blinkt (bleibt 200.000 €)

Schritt 8: Typ-Badge einblenden (0.5 Sekunden)
  → Badge erscheint: "✅ AKTIV-TAUSCH" (grün)
  → Icon: ↔️

Schritt 9: Erklärung einblenden (2 Sekunden)
  → Box mit Text:
    "Richtig! Das war ein AKTIV-TAUSCH, weil:
     ✓ Nur die Aktiv-Seite verändert sich
     ✓ Maschinen steigen (+50.000 €)
     ✓ Bankguthaben sinkt (-50.000 €)
     ✓ Bilanzsumme bleibt gleich: 250.000 €"

Schritt 10: Balken zurück zu blau (0.5 Sekunden)
  → Vorbereitung für nächsten Vorfall
```

#### 4. Interaktive Elemente

**Vor der Animation: Vorhersage**
- Multiple-Choice-Frage: "Was passiert mit der Bilanz?"
- 4 Radio-Buttons für die 4 Typen
- Button "Antwort überprüfen"
- Bei Falschantwort: Erklärung + trotzdem Animation zeigen
- Bei Richtigantwort: Lob + Animation zeigen

**Während der Animation:**
- **Pause-Button:** Animation anhalten
- **Geschwindigkeit:** Dropdown (Langsam/Normal/Schnell)
  - Langsam: Alle Timings × 1.5
  - Normal: Standard
  - Schnell: Alle Timings × 0.5

**Nach der Animation:**
- **Replay-Button:** Animation nochmal abspielen
- **Weiter-Button:** Nächster Geschäftsvorfall
- **Vorher/Nachher:** Toggle-Button für Vergleichs-View

#### 5. Vorher/Nachher-Vergleich

```
┌─────────────────────────────────────────────┐
│  VORHER              │  NACHHER             │
├──────────────────────┼──────────────────────┤
│  Maschinen           │  Maschinen           │
│  ████ 100.000 €      │  ██████ 150.000 € 📈 │
│                      │  +50.000 €           │
│                      │                      │
│  Bankguthaben        │  Bankguthaben        │
│  ████ 80.000 €       │  ██ 30.000 € 📉      │
│                      │  -50.000 €           │
│                      │                      │
│  Summe: 250.000 €    │  Summe: 250.000 € ✅ │
└──────────────────────┴──────────────────────┘
```

## Level-Struktur

### Level 1: Aktiv-Tausch (4 Geschäftsvorfälle)
1. Maschinenkauf für 50.000 € bar
2. Kunde zahlt Rechnung über 20.000 €
3. Geldabhebung von Bank: 10.000 € auf Kasse
4. Kauf von Vorräten bar für 15.000 €

### Level 2: Passiv-Tausch (4 Geschäftsvorfälle)
1. Jahresüberschuss 30.000 € in Gewinnrücklage einstellen
2. Lieferantenverbindlichkeit 25.000 € durch Bankkredit ablösen
3. Bankkredit 15.000 € umschulden zu Lieferantenkredit
4. Rücklage 10.000 € auflösen in Stammkapital

### Level 3: Bilanzverlängerung (4 Geschäftsvorfälle)
1. Wareneinkauf auf Rechnung: 40.000 €
2. Maschinenkauf mit Bankkredit: 60.000 €
3. Gesellschafter zahlt Stammkapital ein: 50.000 €
4. Kauf von Geschäftsausstattung auf Kredit: 20.000 €

### Level 4: Bilanzverkürzung (4 Geschäftsvorfälle)
1. Kredittilgung bar: 30.000 €
2. Lieferantenrechnung bar bezahlen: 25.000 €
3. Privatentnahme: 10.000 €
4. Bankkredit durch Verkauf von Vorräten tilgen: 15.000 €

### Level 5: Gemischt (Quiz-Modus, 8 zufällige Vorfälle)
- Alle 4 Typen gemischt
- Zufällige Reihenfolge
- Punkte-System: +2 für richtige Vorhersage, +1 für Ansehen

## Funktionen

### 1. Lernmodus (Level 1-4)
- **Systematisch:** Ein Typ nach dem anderen
- **Vorhersage:** Schüler rät vor Animation
- **Animation:** Schritt-für-Schritt-Visualisierung
- **Erklärung:** Detailliertes Feedback nach jedem Vorfall
- **Replay:** Jede Animation wiederholbar

### 2. Quiz-Modus (Level 5)
- **Gemischt:** Alle 4 Typen durcheinander
- **Punkte:** Für richtige Vorhersagen
- **Timer:** Optional (30 Sekunden pro Frage)
- **Bestenliste:** Lokaler Highscore

### 3. Hilfe-System
- **Regeln-Übersicht:** Modal mit allen 4 Typen
- **Tooltips:** Bei jedem Bilanzposten (was ist das?)
- **Video-Erklärung:** Optional: Link zu Erklärvideo

### 4. Einstellungen
- **Animations-Geschwindigkeit:** Langsam/Normal/Schnell
- **Sound:** Ein/Aus (optional: Sound-Effekte bei Veränderungen)
- **Schwierigkeit:** Anfänger (mit Hints) / Fortgeschritten (ohne Hints)

## Technische Anforderungen

### Komponenten-Struktur
```
BilanzVeraenderungSpiel.jsx (Hauptkomponente)
├── LevelAuswahl.jsx (Level 1-5 wählen)
├── GeschaeftsvorfallCard.jsx (Vorfall anzeigen)
├── VorhersageQuiz.jsx (Multiple-Choice vor Animation)
├── AnimierteBilanz.jsx (Bilanz mit Animation-Logic)
│   ├── BilanzSpalte.jsx (Aktiva oder Passiva)
│   │   └── BilanzPosten.jsx (Einzelner Posten mit Balken)
│   └── AnimationsController.jsx (Sequenz-Steuerung)
├── TypeBadge.jsx (Aktiv-Tausch Badge etc.)
├── ErklärungBox.jsx (Feedback nach Animation)
├── VergleichsView.jsx (Vorher/Nachher nebeneinander)
└── ProgressBar.jsx (Fortschritt im Level)
```

### State-Management
```javascript
const [currentLevel, setCurrentLevel] = useState(1); // 1-5
const [currentVorfall, setCurrentVorfall] = useState(0); // Index im Level
const [bilanzData, setBilanzData] = useState({
  aktiva: {
    maschinen: 100000,
    bankguthaben: 80000,
    vorraete: 50000,
    forderungen: 20000
  },
  passiva: {
    stammkapital: 150000,
    bankkredit: 50000,
    gewinnruecklage: 30000,
    jahresueberschuss: 20000
  }
});
const [isAnimating, setIsAnimating] = useState(false);
const [animationSpeed, setAnimationSpeed] = useState('normal'); // slow/normal/fast
const [showVergleich, setShowVergleich] = useState(false);
const [userVorhersage, setUserVorhersage] = useState(null);
const [punkte, setPunkte] = useState(0);
```

### Datenstruktur für Geschäftsvorfälle
```javascript
const geschaeftsvorfaelle = {
  level1_aktivTausch: [
    {
      id: 'at1',
      vorfall: 'Kauf einer Maschine für 50.000 € in bar',
      icon: '🏭',
      typ: 'aktiv-tausch',
      changes: [
        { 
          seite: 'aktiva', 
          posten: 'maschinen', 
          betrag: 50000, 
          operation: 'add',
          order: 1,
          label: '+50.000 €',
          color: 'green'
        },
        { 
          seite: 'aktiva', 
          posten: 'bankguthaben', 
          betrag: -50000, 
          operation: 'subtract',
          order: 2,
          label: '-50.000 €',
          color: 'red'
        }
      ],
      erklaerung: {
        kurz: 'Aktiv-Tausch: Nur die Aktiv-Seite ändert sich',
        detail: [
          '✓ Maschinen steigen um +50.000 €',
          '✓ Bankguthaben sinkt um -50.000 €',
          '✓ Nur Aktiva betroffen',
          '✓ Bilanzsumme bleibt gleich'
        ]
      },
      bilanzsummeVorher: 250000,
      bilanzsummeNachher: 250000,
      regel: 'Bei einem Aktiv-Tausch tauschen sich zwei Vermögenswerte auf der Aktiv-Seite. Ein Posten steigt, ein anderer sinkt um den gleichen Betrag.'
    },
    // ... weitere Vorfälle
  ],
  // ... weitere Level
};
```

### Animations-Timings
```javascript
const timings = {
  slow: {
    vorfallEinblenden: 1500,
    postenMarkieren: 750,
    zahlFliegen: 750,
    balkenWachsen: 1500,
    pause: 750,
    badgeEinblenden: 750,
    erklaerung: 3000
  },
  normal: {
    vorfallEinblenden: 1000,
    postenMarkieren: 500,
    zahlFliegen: 500,
    balkenWachsen: 1000,
    pause: 500,
    badgeEinblenden: 500,
    erklaerung: 2000
  },
  fast: {
    vorfallEinblenden: 500,
    postenMarkieren: 250,
    zahlFliegen: 250,
    balkenWachsen: 500,
    pause: 250,
    badgeEinblenden: 250,
    erklaerung: 1000
  }
};
```

### Animation mit React State + CSS Transitions
```javascript
// Beispiel: Balken-Animation
const BilanzPosten = ({ name, betrag, maxBetrag, animState }) => {
  const breite = (betrag / maxBetrag) * 100;
  
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="font-semibold">{name}</span>
        <span className="font-bold">{betrag.toLocaleString('de-DE')} €</span>
      </div>
      <div className="relative h-8 bg-gray-200 rounded-lg overflow-hidden">
        <div 
          className={`h-full rounded-lg transition-all duration-1000 ease-out ${
            animState === 'increase' ? 'bg-green-500' :
            animState === 'decrease' ? 'bg-red-500' :
            'bg-blue-500'
          }`}
          style={{ width: `${breite}%` }}
        />
        {animState === 'pulse' && (
          <div className="absolute inset-0 bg-yellow-400 animate-pulse opacity-50" />
        )}
      </div>
    </div>
  );
};
```

## Styling (Tailwind CSS)

### Farbschema
```css
/* Primärfarben */
bg-blue-600    /* Neutral/Aktiva */
bg-purple-600  /* Passiva */
bg-green-500   /* Zunahme/Positiv */
bg-red-500     /* Abnahme/Negativ */
bg-yellow-400  /* Aufmerksamkeit/Warnung */

/* Badges für Typen */
.badge-aktiv-tausch { bg-blue-100 border-blue-400 text-blue-800 }
.badge-passiv-tausch { bg-purple-100 border-purple-400 text-purple-800 }
.badge-verlaengerung { bg-green-100 border-green-400 text-green-800 }
.badge-verkuerzung { bg-red-100 border-red-400 text-red-800 }
```

### Responsive Design
- **Desktop (>1024px):** Bilanz zweispaltig nebeneinander
- **Tablet (768-1024px):** Bilanz zweispaltig, kompakter
- **Mobile (<768px):** Bilanz scrollbar, Spalten übereinander

## User-Flow

### Erstmaliger Besuch
1. **Willkommensbildschirm:**
   - "Lerne die 4 Arten von Bilanzveränderungen!"
   - Kurze Erklärung (2-3 Sätze)
   - Button: "Tutorial starten" oder "Direkt zu Level 1"

2. **Tutorial (optional):**
   - 1 Beispiel-Vorfall durchspielen
   - Alle Features erklären (Vorhersage, Animation, Replay)
   - Button: "Verstanden, weiter zu Level 1"

### Normaler Ablauf
1. **Level-Auswahl:** User wählt Level 1-5
2. **Geschäftsvorfall 1:** 
   - Vorfall lesen
   - Vorhersage abgeben
   - Animation ansehen
   - Erklärung lesen
   - "Weiter" klicken
3. **Geschäftsvorfall 2-4:** Wiederholen
4. **Level abgeschlossen:**
   - Zusammenfassung: "Du hast 3 von 4 richtig vorhergesagt!"
   - Badge vergeben: "Aktiv-Tausch Meister 🏆"
   - Button: "Nächstes Level" oder "Level wiederholen"

### Quiz-Modus (Level 5)
1. **Start:** "8 gemischte Geschäftsvorfälle - Viel Erfolg!"
2. **Pro Vorfall:** Vorhersage → Animation → Punkte
3. **Ende:** Auswertung mit Prozent & Badge
4. **Highscore:** Optional speichern (localStorage)

## Erfolgs-Indikatoren

### Pädagogische Ziele
- ✅ Schüler können nach Spielende jeden Typ erkennen
- ✅ Schüler verstehen, warum Bilanzsumme gleich bleibt/steigt/sinkt
- ✅ Schüler können Geschäftsvorfälle in Bilanzveränderungen übersetzen

### Technische Ziele
- ✅ Animationen laufen flüssig (60 FPS)
- ✅ Keine Überlagerung von Animationen
- ✅ Mobile & Desktop optimiert
- ✅ Barrierefrei (Tastatur-Navigation möglich)

## Zusätzliche Features (Nice-to-have)

### 1. Freier Modus
- User kann eigene Geschäftsvorfälle eingeben
- System animiert automatisch die Veränderungen
- Für Lehrer: Vorbereitung von Klassenarbeiten

### 2. Lehrer-Dashboard
- Klassen-Fortschritt sehen
- Schwierige Typen identifizieren
- Export von Ergebnissen

### 3. Gamification
- Achievements: "10 Aktiv-Tausch richtig", "Alle Level abgeschlossen"
- Streak: "5 richtige Vorhersagen in Folge"
- Avatar/Level-System

### 4. Mehr Geschäftsvorfälle
- Pro Level 6-8 Vorfälle statt 4
- Schwierigkeitsgrade: Einfach/Mittel/Schwer
- Komplexere Szenarien (z.B. mit Umsatzsteuer)

## Technische Implementierung - Hinweise

### Performance
- **React.memo** für BilanzPosten (vermeidet unnötige Re-Renders)
- **useCallback** für Animation-Funktionen
- **CSS Transitions** statt JavaScript-Animationen (GPU-beschleunigt)

### Accessibility
- **ARIA-Labels** für alle interaktiven Elemente
- **Tastatur-Navigation:** Tab, Enter, Pfeiltasten
- **Screen-Reader-Ansagen:** Bei Animationen (live regions)
- **Kontraste:** WCAG AA-konform

### Testing
- **Unit-Tests:** Bilanz-Berechnungen korrekt
- **Integration-Tests:** Animationen triggern State-Updates
- **E2E-Tests:** User kann ein Level durchspielen

## Zusammenfassung für den Agent

**Kernaufgabe:** Erstelle ein React-Spiel, das Bilanzveränderungen durch **iterative, animierte Visualisierungen** erklärt.

**Kritische Features:**
1. ✅ **Sequenzielle Animationen** (eine nach der anderen, nicht parallel)
2. ✅ **Farbcodierung** (Grün = Zunahme, Rot = Abnahme)
3. ✅ **Balkendiagramme** für Bilanzposten (visuell einfach zu erfassen)
4. ✅ **Vorhersage-Quiz** vor jeder Animation (aktives Lernen)
5. ✅ **Vorher/Nachher-Vergleich** (kognitive Verankerung)
6. ✅ **5 Level** (4× spezialisiert, 1× gemischt)

**Didaktischer Fokus:** Jede Animation zeigt **Kausalität**: "Maschine gekauft → Maschinen steigt → Geld weg → Bankguthaben sinkt → Bilanzsumme bleibt gleich"

**Technologie:** React + Tailwind CSS (wie die anderen Spiele), State-Management mit useState, CSS Transitions für Animationen.

**Integration:** Muss in `App.jsx` als viertes Spiel eingebunden werden (nach Sort, Quiz, Reich-Geld).
