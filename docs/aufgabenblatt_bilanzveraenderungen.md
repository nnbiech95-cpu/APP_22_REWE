# Aufgabenblatt: Bilanzveränderungen

**Name:** __________________ **Datum:** __________________

> **Hinweis:** Nutze das interaktive Lernspiel, um die Geschäftsvorfälle zu visualisieren und zu verstehen!

---

## Aufgabe 1: Bilanzveränderungen erkennen (16 Punkte)

Bestimme für jeden Geschäftsvorfall die Art der Bilanzveränderung:

| Nr. | Geschäftsvorfall | AT | PT | BV | BK |
|-----|------------------|----|----|----|----|
| 1. | Kauf einer Maschine für 50.000 € bar | ☐ | ☐ | ☐ | ☐ |
| 2. | Kunde zahlt Rechnung über 20.000 € | ☐ | ☐ | ☐ | ☐ |
| 3. | Geldabhebung von Bank: 10.000 € auf Kasse | ☐ | ☐ | ☐ | ☐ |
| 4. | Jahresüberschuss 30.000 € in Gewinnrücklage | ☐ | ☐ | ☐ | ☐ |
| 5. | Wareneinkauf auf Rechnung: 40.000 € | ☐ | ☐ | ☐ | ☐ |
| 6. | Kredittilgung bar: 30.000 € | ☐ | ☐ | ☐ | ☐ |
| 7. | Lieferantenverb. durch Bankkredit ablösen: 25.000 € | ☐ | ☐ | ☐ | ☐ |
| 8. | Gesellschafter zahlt Stammkapital ein: 50.000 € | ☐ | ☐ | ☐ | ☐ |
| 9. | Lieferantenrechnung bar bezahlen: 25.000 € | ☐ | ☐ | ☐ | ☐ |
| 10. | Bankkredit umschulden: 15.000 € | ☐ | ☐ | ☐ | ☐ |
| 11. | Maschinenkauf mit Kredit: 60.000 € | ☐ | ☐ | ☐ | ☐ |
| 12. | Privatentnahme: 10.000 € | ☐ | ☐ | ☐ | ☐ |
| 13. | Kauf von Vorräten bar: 15.000 € | ☐ | ☐ | ☐ | ☐ |
| 14. | Rücklage in Stammkapital: 10.000 € | ☐ | ☐ | ☐ | ☐ |
| 15. | Kauf Geschäftsausstattung auf Kredit: 20.000 € | ☐ | ☐ | ☐ | ☐ |
| 16. | Vorräte verkaufen und Kredit tilgen: 15.000 € | ☐ | ☐ | ☐ | ☐ |

*Legende: AT = Aktiv-Tausch, PT = Passiv-Tausch, BV = Bilanzverlängerung, BK = Bilanzverkürzung*

---

## Aufgabe 2: Bilanzposten zuordnen (8 Punkte)

Ordne die Geschäftsvorfälle den betroffenen Bilanzposten zu und gib an, ob diese steigen (+) oder sinken (-):

### a) Maschinenkauf für 50.000 € in bar

```mermaid
graph LR
    A[Geschäftsvorfall] --> B[Posten 1: ________]
    A --> C[Posten 2: ________]
    B --> D[Veränderung: ____]
    C --> E[Veränderung: ____]
    style B fill:#e0e0e0
    style C fill:#e0e0e0
```

**Betroffene Posten (Aktiva):**
1. _________________ Veränderung: _______
2. _________________ Veränderung: _______

---

### b) Wareneinkauf auf Rechnung: 40.000 €

```mermaid
graph TD
    A[Geschäftsvorfall] --> B[AKTIVA]
    A --> C[PASSIVA]
    B --> D[Posten: ________]
    C --> E[Posten: ________]
    style D fill:#e0e0e0
    style E fill:#e0e0e0
```

**Betroffene Posten:**
1. _________________ (A/P) Veränderung: _______
2. _________________ (A/P) Veränderung: _______

---

### c) Kredittilgung bar: 30.000 €

**Betroffene Posten:**
1. _________________ (A/P) Veränderung: _______
2. _________________ (A/P) Veränderung: _______

---

### d) Jahresüberschuss 30.000 € in Gewinnrücklage einstellen

**Betroffene Posten (Passiva):**
1. _________________ Veränderung: _______
2. _________________ Veränderung: _______

---

## Aufgabe 3: Bilanzsumme berechnen (6 Punkte)

Gegeben ist folgende Ausgangsbilanz:

| AKTIVA | Betrag | PASSIVA | Betrag |
|--------|--------|---------|--------|
| Maschinen | 100.000 € | Stammkapital | 150.000 € |
| Geschäftsausstattung | 20.000 € | Gewinnrücklage | 30.000 € |
| Vorräte | 50.000 € | Bankkredit | 50.000 € |
| Forderungen | 20.000 € | Verbindlichkeiten | 40.000 € |
| Bankguthaben | 80.000 € | | |
| Kasse | 20.000 € | | |
| **Summe** | **290.000 €** | **Summe** | **270.000 €** |

```mermaid
graph LR
    subgraph AKTIVA
        A1[Maschinen: 100k]
        A2[Geschäftsausst.: 20k]
        A3[Vorräte: 50k]
        A4[Forderungen: 20k]
        A5[Bank: 80k]
        A6[Kasse: 20k]
    end
    subgraph PASSIVA
        P1[Stammkapital: 150k]
        P2[Gewinnrücklage: 30k]
        P3[Bankkredit: 50k]
        P4[Verbindlichkeiten: 40k]
    end
    style A1 fill:#3b82f6,color:#fff
    style A2 fill:#3b82f6,color:#fff
    style A3 fill:#3b82f6,color:#fff
    style A4 fill:#3b82f6,color:#fff
    style A5 fill:#3b82f6,color:#fff
    style A6 fill:#3b82f6,color:#fff
    style P1 fill:#a855f7,color:#fff
    style P2 fill:#a855f7,color:#fff
    style P3 fill:#a855f7,color:#fff
    style P4 fill:#a855f7,color:#fff
```

Berechne die neue Bilanzsumme nach folgenden Geschäftsvorfällen:

### a) Maschinenkauf für 50.000 € in bar

Art der Bilanzveränderung: _______________________

Neue Bilanzsumme: _______________________

---

### b) Wareneinkauf auf Rechnung: 40.000 €

Art der Bilanzveränderung: _______________________

Neue Bilanzsumme: _______________________

---

### c) Kredittilgung bar: 30.000 €

Art der Bilanzveränderung: _______________________

Neue Bilanzsumme: _______________________

---

## Aufgabe 4: Bilanz nach Geschäftsvorfällen (10 Punkte)

Erstelle die Schlussbilanz nach folgenden Geschäftsvorfällen (nutze die Ausgangsbilanz aus Aufgabe 3):

1. Kauf von Vorräten bar: 15.000 €
2. Kunde zahlt Rechnung: 20.000 €
3. Gesellschafter zahlt Stammkapital ein: 50.000 €

```mermaid
graph TD
    Start[Ausgangsbilanz] --> GV1[GV1: Vorräte bar +15k]
    GV1 --> GV2[GV2: Kunde zahlt +20k]
    GV2 --> GV3[GV3: Kapitaleinlage +50k]
    GV3 --> End[Schlussbilanz]
    
    style GV1 fill:#fbbf24
    style GV2 fill:#fbbf24
    style GV3 fill:#fbbf24
    style End fill:#22c55e,color:#fff
```

**Schlussbilanz:**

| AKTIVA | Betrag | PASSIVA | Betrag |
|--------|--------|---------|--------|
| Maschinen | _________ | Stammkapital | _________ |
| Geschäftsausstattung | _________ | Gewinnrücklage | _________ |
| Vorräte | _________ | Bankkredit | _________ |
| Forderungen | _________ | Verbindlichkeiten | _________ |
| Bankguthaben | _________ | | |
| Kasse | _________ | | |
| **Summe** | _________ | **Summe** | _________ |

---

## Aufgabe 5: Transferaufgabe (10 Punkte)

Erkläre in eigenen Worten, warum bei einem **Aktiv-Tausch** die Bilanzsumme gleich bleibt, während sie bei einer **Bilanzverlängerung** steigt.

```mermaid
graph LR
    subgraph "Aktiv-Tausch"
        A1[Aktiva: +50k / -50k] --> A2[Summe = gleich]
    end
    
    subgraph "Bilanzverlängerung"
        B1[Aktiva: +50k] --> B3[Summe steigt]
        B2[Passiva: +50k] --> B3
    end
    
    style A2 fill:#3b82f6,color:#fff
    style B3 fill:#22c55e,color:#fff
```

**Deine Erklärung:**

_______________________________________________________________________________

_______________________________________________________________________________

_______________________________________________________________________________

_______________________________________________________________________________

_______________________________________________________________________________

---

## Bewertung

**Punkte:** _____ / 50  
**Note:** _______

---

## Lösungshinweise (für Lehrer)

<details>
<summary>Aufgabe 1 - Lösungen anzeigen</summary>

1. AT | 2. AT | 3. AT | 4. PT | 5. BV | 6. BK | 7. PT | 8. BV | 9. BK | 10. PT | 11. BV | 12. BK | 13. AT | 14. PT | 15. BV | 16. BK

</details>

<details>
<summary>Aufgabe 3 - Lösungen anzeigen</summary>

a) Aktiv-Tausch, 290.000 €  
b) Bilanzverlängerung, 330.000 €  
c) Bilanzverkürzung, 260.000 €

</details>
