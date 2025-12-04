# Visualisierungen: Bilanzveränderungen

Interaktive Mermaid-Diagramme zur Veranschaulichung der 4 Arten von Bilanzveränderungen.

---

## 1. Übersicht: Die 4 Typen im Vergleich

```mermaid
%%{init: {'theme':'base', 'themeVariables': { 'fontSize':'16px'}}}%%
graph TB
    subgraph "Bilanzveränderungen"
        A[Geschäftsvorfall]
    end
    
    A --> B[Aktiv-Tausch ↔️]
    A --> C[Passiv-Tausch ↔️]
    A --> D[Bilanzverlängerung 📈]
    A --> E[Bilanzverkürzung 📉]
    
    B --> B1["Nur AKTIVA<br/>+ und -<br/>Summe ="]
    C --> C1["Nur PASSIVA<br/>+ und -<br/>Summe ="]
    D --> D1["BEIDE<br/>+ und +<br/>Summe ↑"]
    E --> E1["BEIDE<br/>- und -<br/>Summe ↓"]
    
    style B fill:#3b82f6,stroke:#1e40af,color:#fff
    style C fill:#a855f7,stroke:#7e22ce,color:#fff
    style D fill:#22c55e,stroke:#15803d,color:#fff
    style E fill:#ef4444,stroke:#b91c1c,color:#fff
    
    style B1 fill:#dbeafe,stroke:#3b82f6
    style C1 fill:#f3e8ff,stroke:#a855f7
    style D1 fill:#dcfce7,stroke:#22c55e
    style E1 fill:#fee2e2,stroke:#ef4444
```

---

## 2. Aktiv-Tausch: Maschinenkauf bar (50.000 €)

### Vorher → Nachher

```mermaid
%%{init: {'theme':'base'}}%%
graph LR
    subgraph "VORHER"
        direction TB
        A1["🏭 Maschinen<br/>100.000 €"]
        A2["🏦 Bank<br/>80.000 €"]
        A3["📦 Vorräte<br/>50.000 €"]
        A4["═══════════<br/>Summe: 230.000 €"]
    end
    
    subgraph "Geschäftsvorfall"
        GV["🏭 Maschinenkauf<br/>50.000 € bar<br/>⚡"]
    end
    
    subgraph "NACHHER"
        direction TB
        B1["🏭 Maschinen<br/>150.000 €<br/>+50.000"]
        B2["🏦 Bank<br/>30.000 €<br/>-50.000"]
        B3["📦 Vorräte<br/>50.000 €"]
        B4["═══════════<br/>Summe: 230.000 €<br/>✅ gleich"]
    end
    
    VORHER --> GV
    GV --> NACHHER
    
    style A1 fill:#3b82f6,color:#fff
    style A2 fill:#3b82f6,color:#fff
    style A3 fill:#3b82f6,color:#fff
    style B1 fill:#22c55e,color:#fff
    style B2 fill:#ef4444,color:#fff
    style B3 fill:#3b82f6,color:#fff
    style GV fill:#fbbf24,color:#000
```

### Detaillierte Veränderung

```mermaid
sequenceDiagram
    participant M as Maschinen
    participant B as Bank
    participant S as Bilanzsumme
    
    Note over M,B: Ausgangszustand
    M->>M: 100.000 €
    B->>B: 80.000 €
    S->>S: 230.000 €
    
    Note over M,B: Maschinenkauf 50.000 € bar
    M->>M: +50.000 € ✅
    Note right of M: Neue Maschine<br/>gekauft
    B->>B: -50.000 € ❌
    Note right of B: Bezahlt mit<br/>Bankguthaben
    
    Note over M,B: Endzustand
    M->>M: 150.000 €
    B->>B: 30.000 €
    S->>S: 230.000 € (gleich!)
```

---

## 3. Passiv-Tausch: Gewinn in Rücklage (30.000 €)

```mermaid
%%{init: {'theme':'base'}}%%
graph LR
    subgraph "VORHER: PASSIVA"
        direction TB
        P1["💼 Stammkapital<br/>150.000 €"]
        P2["💰 Gewinnrücklage<br/>30.000 €"]
        P3["📊 Jahresüberschuss<br/>30.000 €"]
        P4["═══════════<br/>Summe: 210.000 €"]
    end
    
    subgraph "Geschäftsvorfall"
        GV["📊→💰 Gewinn<br/>30.000 € in<br/>Rücklage<br/>⚡"]
    end
    
    subgraph "NACHHER: PASSIVA"
        direction TB
        Q1["💼 Stammkapital<br/>150.000 €"]
        Q2["💰 Gewinnrücklage<br/>60.000 €<br/>+30.000"]
        Q3["📊 Jahresüberschuss<br/>0 €<br/>-30.000"]
        Q4["═══════════<br/>Summe: 210.000 €<br/>✅ gleich"]
    end
    
    VORHER --> GV
    GV --> NACHHER
    
    style P1 fill:#a855f7,color:#fff
    style P2 fill:#a855f7,color:#fff
    style P3 fill:#a855f7,color:#fff
    style Q1 fill:#a855f7,color:#fff
    style Q2 fill:#22c55e,color:#fff
    style Q3 fill:#ef4444,color:#fff
    style GV fill:#fbbf24,color:#000
```

---

## 4. Bilanzverlängerung: Wareneinkauf auf Rechnung (40.000 €)

```mermaid
%%{init: {'theme':'base'}}%%
graph TB
    subgraph "VORHER"
        direction LR
        subgraph "AKTIVA"
            A1["📦 Vorräte<br/>50.000 €"]
            A2["Summe A: 50.000 €"]
        end
        subgraph "PASSIVA"
            P1["🔴 Verbindlichkeiten<br/>40.000 €"]
            P2["Summe P: 40.000 €"]
        end
    end
    
    GV["⚡ Wareneinkauf<br/>40.000 € auf Rechnung"]
    
    subgraph "NACHHER"
        direction LR
        subgraph "AKTIVA2"
            A3["📦 Vorräte<br/>90.000 €<br/>+40.000 ✅"]
            A4["Summe A: 90.000 €<br/>📈"]
        end
        subgraph "PASSIVA2"
            P3["🔴 Verbindlichkeiten<br/>80.000 €<br/>+40.000 ✅"]
            P4["Summe P: 80.000 €<br/>📈"]
        end
    end
    
    VORHER --> GV
    GV --> NACHHER
    
    style A1 fill:#3b82f6,color:#fff
    style P1 fill:#a855f7,color:#fff
    style A3 fill:#22c55e,color:#fff
    style P3 fill:#22c55e,color:#fff
    style A4 fill:#22c55e,color:#fff
    style P4 fill:#22c55e,color:#fff
    style GV fill:#fbbf24,color:#000
```

### Bilanz wächst auf beiden Seiten

```mermaid
graph LR
    A["Vorher:<br/>Aktiva = Passiva<br/>50.000 = 40.000"] 
    B["+ Vorräte 40.000<br/>+ Verbindlichkeiten 40.000"]
    C["Nachher:<br/>Aktiva = Passiva<br/>90.000 = 80.000<br/>📈 Bilanz länger"]
    
    A --> B
    B --> C
    
    style A fill:#93c5fd
    style B fill:#fbbf24,color:#000
    style C fill:#22c55e,color:#fff
```

---

## 5. Bilanzverkürzung: Kredittilgung bar (30.000 €)

```mermaid
%%{init: {'theme':'base'}}%%
graph TB
    subgraph "VORHER"
        direction LR
        subgraph "AKTIVA"
            A1["🏦 Bank<br/>80.000 €"]
            A2["Summe A: 80.000 €"]
        end
        subgraph "PASSIVA"
            P1["💳 Bankkredit<br/>50.000 €"]
            P2["Summe P: 50.000 €"]
        end
    end
    
    GV["⚡ Kredittilgung<br/>30.000 € bar"]
    
    subgraph "NACHHER"
        direction LR
        subgraph "AKTIVA2"
            A3["🏦 Bank<br/>50.000 €<br/>-30.000 ❌"]
            A4["Summe A: 50.000 €<br/>📉"]
        end
        subgraph "PASSIVA2"
            P3["💳 Bankkredit<br/>20.000 €<br/>-30.000 ❌"]
            P4["Summe P: 20.000 €<br/>📉"]
        end
    end
    
    VORHER --> GV
    GV --> NACHHER
    
    style A1 fill:#3b82f6,color:#fff
    style P1 fill:#a855f7,color:#fff
    style A3 fill:#ef4444,color:#fff
    style P3 fill:#ef4444,color:#fff
    style A4 fill:#ef4444,color:#fff
    style P4 fill:#ef4444,color:#fff
    style GV fill:#fbbf24,color:#000
```

### Bilanz schrumpft auf beiden Seiten

```mermaid
graph LR
    A["Vorher:<br/>Aktiva = Passiva<br/>80.000 = 50.000"] 
    B["- Bank 30.000<br/>- Kredit 30.000"]
    C["Nachher:<br/>Aktiva = Passiva<br/>50.000 = 20.000<br/>📉 Bilanz kürzer"]
    
    A --> B
    B --> C
    
    style A fill:#93c5fd
    style B fill:#fbbf24,color:#000
    style C fill:#ef4444,color:#fff
```

---

## 6. Entscheidungsbaum: Typ bestimmen

```mermaid
graph TD
    Start["📝 Geschäftsvorfall<br/>analysieren"] --> Frage1{Welche Seite<br/>betroffen?}
    
    Frage1 -->|"Nur AKTIVA"| Frage2{"Beide + und -?"}
    Frage1 -->|"Nur PASSIVA"| Frage3{"Beide + und -?"}
    Frage1 -->|"BEIDE Seiten"| Frage4{"Steigen oder<br/>sinken?"}
    
    Frage2 -->|"Ja: + und -"| AT["🔵 AKTIV-TAUSCH<br/>───────────<br/>Beispiel:<br/>Maschinenkauf bar"]
    Frage2 -->|"Nein"| Error1["⚠️ Fehler"]
    
    Frage3 -->|"Ja: + und -"| PT["🟣 PASSIV-TAUSCH<br/>───────────<br/>Beispiel:<br/>Gewinn in Rücklage"]
    Frage3 -->|"Nein"| Error2["⚠️ Fehler"]
    
    Frage4 -->|"Beide steigen +"| BV["🟢 BILANZVERLÄNGERUNG<br/>───────────<br/>Beispiel:<br/>Warenkauf auf Rechnung"]
    Frage4 -->|"Beide sinken -"| BK["🔴 BILANZVERKÜRZUNG<br/>───────────<br/>Beispiel:<br/>Kredittilgung"]
    
    style Start fill:#fbbf24,color:#000
    style AT fill:#3b82f6,color:#fff
    style PT fill:#a855f7,color:#fff
    style BV fill:#22c55e,color:#fff
    style BK fill:#ef4444,color:#fff
    style Error1 fill:#ef4444,color:#fff
    style Error2 fill:#ef4444,color:#fff
```

---

## 7. Timeline: Mehrere Geschäftsvorfälle hintereinander

```mermaid
gantt
    title Bilanzveränderungen im Zeitverlauf
    dateFormat X
    axisFormat %s
    
    section Bilanzsumme
    Start 250.000 € :milestone, 0, 0
    
    section Geschäftsvorfälle
    AT: Maschinenkauf 50k bar :done, 1, 2
    BV: Warenkauf 40k Rechnung :active, 3, 4
    BK: Kredittilgung 30k bar :crit, 5, 6
    PT: Gewinn in Rücklage :done, 7, 8
    
    section Bilanzsumme
    250.000 € (AT) :milestone, 2, 2
    290.000 € (BV) :milestone, 4, 4
    260.000 € (BK) :milestone, 6, 6
    260.000 € (PT) :milestone, 8, 8
```

---

## 8. Kompakte Übersicht: 4x4 Matrix

```mermaid
%%{init: {'theme':'base', 'themeVariables': {'fontSize':'14px'}}}%%
quadrantChart
    title Bilanzveränderungen nach Seiten
    x-axis "Nur eine Seite" --> "Beide Seiten"
    y-axis "Summe sinkt/gleich" --> "Summe steigt"
    quadrant-1 Bilanzverlängerung
    quadrant-2 Bilanzverlängerung
    quadrant-3 Aktiv-Tausch / Passiv-Tausch
    quadrant-4 Bilanzverkürzung
    
    Aktiv-Tausch: [0.2, 0.5]
    Passiv-Tausch: [0.2, 0.5]
    Bilanzverlängerung: [0.8, 0.8]
    Bilanzverkürzung: [0.8, 0.2]
```

---

**Diese Diagramme können in Markdown-Viewern mit Mermaid-Support (GitHub, GitLab, VS Code, etc.) interaktiv dargestellt werden! 🎨**
