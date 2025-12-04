# Bilanzveränderungen - Infoblatt

## Was ist eine Bilanzveränderung?

Jeder Geschäftsvorfall in einem Unternehmen verändert die Bilanz. Die Bilanz besteht aus zwei Seiten:

- **AKTIVA** (linke Seite): Zeigt, *wie* das Kapital im Unternehmen verwendet wird (Vermögen)
- **PASSIVA** (rechte Seite): Zeigt, *woher* das Kapital stammt (Kapitalquellen)

**Grundregel:** Aktiva = Passiva (Die Bilanz ist immer ausgeglichen!)

```mermaid
graph LR
    A[Bilanz] --> B[AKTIVA<br/>Vermögen]
    A --> C[PASSIVA<br/>Kapital]
    B --> D[Wie wird Kapital verwendet?]
    C --> E[Woher kommt Kapital?]
    style B fill:#3b82f6,color:#fff
    style C fill:#a855f7,color:#fff
```

---

## Die 4 Arten von Bilanzveränderungen

```mermaid
mindmap
  root((Bilanz­veränderungen))
    Aktiv-Tausch
      Nur Aktiva betroffen
      Ein Posten +, ein Posten -
      Bilanzsumme gleich
    Passiv-Tausch
      Nur Passiva betroffen
      Ein Posten +, ein Posten -
      Bilanzsumme gleich
    Bilanzverlängerung
      Beide Seiten betroffen
      Aktiva + und Passiva +
      Bilanzsumme steigt
    Bilanzverkürzung
      Beide Seiten betroffen
      Aktiva - und Passiva -
      Bilanzsumme sinkt
```

---

### 1. 🔵 Aktiv-Tausch

**Definition:** Nur die Aktiv-Seite verändert sich  
**Effekt:** Ein Aktivposten steigt (+), ein anderer sinkt (-)  
**Bilanzsumme:** Bleibt gleich

#### Beispiele:
- Maschinenkauf bar (50.000 €): ✅ +Maschinen, ❌ -Bank
- Kunde zahlt Rechnung (20.000 €): ✅ +Bank, ❌ -Forderungen
- Geld von Bank abheben (10.000 €): ✅ +Kasse, ❌ -Bank

```mermaid
graph TD
    A[Maschinenkauf 50.000 € bar] --> B[AKTIVA]
    B --> C[Maschinen +50.000 €]
    B --> D[Bank -50.000 €]
    C --> E[Nur AKTIVA verändert]
    D --> E
    E --> F[Bilanzsumme = gleich]
    style C fill:#22c55e,color:#fff
    style D fill:#ef4444,color:#fff
    style F fill:#3b82f6,color:#fff
```

**Merkregel:** *„Tausch auf der Haben-Seite"* – nur Vermögenswerte tauschen sich aus

---

### 2. 🟣 Passiv-Tausch

**Definition:** Nur die Passiv-Seite verändert sich  
**Effekt:** Ein Passivposten steigt (+), ein anderer sinkt (-)  
**Bilanzsumme:** Bleibt gleich

#### Beispiele:
- Gewinn in Rücklage einstellen (30.000 €): ✅ +Gewinnrücklage, ❌ -Jahresüberschuss
- Kredit umschulden (25.000 €): ✅ +Bankkredit, ❌ -Verbindlichkeiten
- Rücklage auflösen (10.000 €): ✅ +Stammkapital, ❌ -Gewinnrücklage

```mermaid
graph TD
    A[Gewinn 30.000 € in Rücklage] --> B[PASSIVA]
    B --> C[Gewinnrücklage +30.000 €]
    B --> D[Jahresüberschuss -30.000 €]
    C --> E[Nur PASSIVA verändert]
    D --> E
    E --> F[Bilanzsumme = gleich]
    style C fill:#22c55e,color:#fff
    style D fill:#ef4444,color:#fff
    style F fill:#a855f7,color:#fff
```

**Merkregel:** *„Tausch auf der Soll-Seite"* – nur Kapitalquellen tauschen sich aus

---

### 3. 🟢 Bilanzverlängerung (Aktiv-Passiv-Mehrung)

**Definition:** Beide Seiten steigen  
**Effekt:** Aktiva steigt (+) UND Passiva steigt (+)  
**Bilanzsumme:** Steigt

#### Beispiele:
- Wareneinkauf auf Rechnung (40.000 €): ✅ +Vorräte (A), ✅ +Verbindlichkeiten (P)
- Maschinenkauf mit Kredit (60.000 €): ✅ +Maschinen (A), ✅ +Bankkredit (P)
- Kapitaleinlage (50.000 €): ✅ +Bank (A), ✅ +Stammkapital (P)

```mermaid
graph TD
    A[Wareneinkauf auf Rechnung 40.000 €] --> B[AKTIVA]
    A --> C[PASSIVA]
    B --> D[Vorräte +40.000 €]
    C --> E[Verbindlichkeiten +40.000 €]
    D --> F[Beide Seiten steigen]
    E --> F
    F --> G[Bilanzsumme steigt ↑]
    style D fill:#22c55e,color:#fff
    style E fill:#22c55e,color:#fff
    style G fill:#22c55e,color:#fff
```

**Merkregel:** *„Bilanz wird länger"* – beide Seiten wachsen

---

### 4. 🔴 Bilanzverkürzung (Aktiv-Passiv-Minderung)

**Definition:** Beide Seiten sinken  
**Effekt:** Aktiva sinkt (-) UND Passiva sinkt (-)  
**Bilanzsumme:** Sinkt

#### Beispiele:
- Kredittilgung bar (30.000 €): ❌ -Bank (A), ❌ -Bankkredit (P)
- Rechnung bar bezahlen (25.000 €): ❌ -Kasse (A), ❌ -Verbindlichkeiten (P)
- Privatentnahme (10.000 €): ❌ -Kasse (A), ❌ -Eigenkapital (P)

```mermaid
graph TD
    A[Kredittilgung bar 30.000 €] --> B[AKTIVA]
    A --> C[PASSIVA]
    B --> D[Bank -30.000 €]
    C --> E[Bankkredit -30.000 €]
    D --> F[Beide Seiten sinken]
    E --> F
    F --> G[Bilanzsumme sinkt ↓]
    style D fill:#ef4444,color:#fff
    style E fill:#ef4444,color:#fff
    style G fill:#ef4444,color:#fff
```

**Merkregel:** *„Bilanz wird kürzer"* – beide Seiten schrumpfen

---

## Übersicht: Die 4 Typen auf einen Blick

| Typ | Aktiva | Passiva | Bilanzsumme |
|-----|--------|---------|-------------|
| **Aktiv-Tausch** | ✅ + ❌ - | --- | = |
| **Passiv-Tausch** | --- | ✅ + ❌ - | = |
| **Bilanzverlängerung** | ✅ + | ✅ + | ↑ |
| **Bilanzverkürzung** | ❌ - | ❌ - | ↓ |

---

## Entscheidungsbaum: Welcher Typ?

```mermaid
graph TD
    Start[Geschäftsvorfall] --> Q1{Welche Seite<br/>betroffen?}
    Q1 -->|Nur AKTIVA| Q2{Steigt oder sinkt?}
    Q1 -->|Nur PASSIVA| Q3{Steigt oder sinkt?}
    Q1 -->|BEIDE| Q4{Steigen oder sinken?}
    
    Q2 -->|Beide: + und -| AT[🔵 AKTIV-TAUSCH]
    Q3 -->|Beide: + und -| PT[🟣 PASSIV-TAUSCH]
    Q4 -->|Beide steigen +| BV[🟢 BILANZVERLÄNGERUNG]
    Q4 -->|Beide sinken -| BK[🔴 BILANZVERKÜRZUNG]
    
    style AT fill:#3b82f6,color:#fff
    style PT fill:#a855f7,color:#fff
    style BV fill:#22c55e,color:#fff
    style BK fill:#ef4444,color:#fff
```

---

## Wichtige Hinweise

- **Doppelte Buchführung:** Jeder Geschäftsvorfall berührt **mindestens 2 Bilanzposten**
- **Bilanzgleichung:** Aktiva = Passiva gilt **immer** (auch nach Veränderungen!)
- **Keine Mischformen:** Jeder Geschäftsvorfall gehört zu genau einem der 4 Typen
- **Reihenfolge in der Bilanz (§ 266 HGB):**
  - **Aktiva:** Nach *Liquidität* (von schwer zu leicht liquidierbar)
  - **Passiva:** Nach *Fälligkeit* (von langfristig zu kurzfristig)

---

## Praxis-Tipp

Um den Typ einer Bilanzveränderung zu bestimmen, frage dich:

1. Welche Bilanzseite(n) sind betroffen? (Aktiva, Passiva, beide?)
2. Steigen oder sinken die Posten? (+/-)
3. Verändert sich die Bilanzsumme?

**Beispiel:** „Wir kaufen eine Maschine für 50.000 € und bezahlen bar"

- ✓ Betroffen: Maschinen (A) und Kasse (A) → nur Aktiva
- ✓ Maschinen steigen (+50.000 €), Kasse sinkt (-50.000 €)
- ✓ Bilanzsumme bleibt gleich
- **→ 🔵 Aktiv-Tausch!**

---

## Visualisierung: Vorher/Nachher

```mermaid
%%{init: {'theme':'base'}}%%
graph LR
    subgraph Vorher
        A1[Maschinen: 100.000 €]
        A2[Bank: 80.000 €]
        A3[Summe: 180.000 €]
    end
    
    subgraph "Geschäftsvorfall: Maschinenkauf 50.000 € bar"
        B[⚡]
    end
    
    subgraph Nachher
        C1[Maschinen: 150.000 €]
        C2[Bank: 30.000 €]
        C3[Summe: 180.000 €]
    end
    
    Vorher --> B
    B --> Nachher
    
    style C1 fill:#22c55e,color:#fff
    style C2 fill:#ef4444,color:#fff
    style C3 fill:#3b82f6,color:#fff
```

---

**Nutze das interaktive Lernspiel, um die Geschäftsvorfälle animiert zu sehen! 🎮**
