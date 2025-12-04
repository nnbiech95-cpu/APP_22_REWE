import React, { useState, useEffect, useCallback } from 'react';

// Geschäftsvorfälle Daten
const geschaeftsvorfaelle = {
  level1_aktivTausch: [
    {
      id: 'at1',
      vorfall: 'Kauf einer Maschine für 50.000 € in bar',
      icon: '🏭',
      typ: 'aktiv-tausch',
      changes: [
        { seite: 'aktiva', posten: 'maschinen', betrag: 50000, operation: 'add', order: 1, label: '+50.000 €' },
        { seite: 'aktiva', posten: 'kasse', betrag: 50000, operation: 'subtract', order: 2, label: '-50.000 €' }
      ],
      erklaerung: {
        kurz: 'Aktiv-Tausch: Nur die Aktiv-Seite ändert sich',
        detail: [
          '✓ Maschinen steigen um +50.000 €',
          '✓ Kasse sinkt um -50.000 €',
          '✓ Nur Aktiva betroffen',
          '✓ Bilanzsumme bleibt gleich'
        ]
      }
    },
    {
      id: 'at2',
      vorfall: 'Kunde zahlt Rechnung über 20.000 € per Überweisung',
      icon: '💶',
      typ: 'aktiv-tausch',
      changes: [
        { seite: 'aktiva', posten: 'bankguthaben', betrag: 20000, operation: 'add', order: 1, label: '+20.000 €' },
        { seite: 'aktiva', posten: 'forderungen', betrag: 20000, operation: 'subtract', order: 2, label: '-20.000 €' }
      ],
      erklaerung: {
        kurz: 'Aktiv-Tausch: Nur die Aktiv-Seite ändert sich',
        detail: [
          '✓ Bankguthaben steigt um +20.000 €',
          '✓ Forderungen sinken um -20.000 €',
          '✓ Nur Aktiva betroffen',
          '✓ Bilanzsumme bleibt gleich'
        ]
      }
    },
    {
      id: 'at3',
      vorfall: 'Geldabhebung von Bank: 10.000 € auf Kasse',
      icon: '💵',
      typ: 'aktiv-tausch',
      changes: [
        { seite: 'aktiva', posten: 'kasse', betrag: 10000, operation: 'add', order: 1, label: '+10.000 €' },
        { seite: 'aktiva', posten: 'bankguthaben', betrag: 10000, operation: 'subtract', order: 2, label: '-10.000 €' }
      ],
      erklaerung: {
        kurz: 'Aktiv-Tausch: Nur die Aktiv-Seite ändert sich',
        detail: [
          '✓ Kasse steigt um +10.000 €',
          '✓ Bankguthaben sinkt um -10.000 €',
          '✓ Nur Aktiva betroffen',
          '✓ Bilanzsumme bleibt gleich'
        ]
      }
    },
    {
      id: 'at4',
      vorfall: 'Kauf von Vorräten bar für 15.000 €',
      icon: '📦',
      typ: 'aktiv-tausch',
      changes: [
        { seite: 'aktiva', posten: 'vorraete', betrag: 15000, operation: 'add', order: 1, label: '+15.000 €' },
        { seite: 'aktiva', posten: 'kasse', betrag: 15000, operation: 'subtract', order: 2, label: '-15.000 €' }
      ],
      erklaerung: {
        kurz: 'Aktiv-Tausch: Nur die Aktiv-Seite ändert sich',
        detail: [
          '✓ Vorräte steigen um +15.000 €',
          '✓ Kasse sinkt um -15.000 €',
          '✓ Nur Aktiva betroffen',
          '✓ Bilanzsumme bleibt gleich'
        ]
      }
    }
    ,
    {
      id: 'at5',
      vorfall: 'Warenverkauf auf Ziel: 12.000 €',
      icon: '🧾',
      typ: 'aktiv-tausch',
      changes: [
        { seite: 'aktiva', posten: 'forderungen', betrag: 12000, operation: 'add', order: 1, label: '+12.000 €' },
        { seite: 'aktiva', posten: 'vorraete', betrag: 12000, operation: 'subtract', order: 2, label: '-12.000 €' }
      ],
      erklaerung: {
        kurz: 'Aktiv-Tausch: Nur die Aktiv-Seite ändert sich',
        detail: [
          '✓ Forderungen steigen um +12.000 € (Verkauf auf Ziel)',
          '✓ Vorräte sinken um -12.000 €',
          '✓ Nur Aktiva betroffen',
          '✓ Bilanzsumme bleibt gleich'
        ]
      }
    },
    {
      id: 'at6',
      vorfall: 'Kunde zahlt bar: 8.000 €',
      icon: '💵',
      typ: 'aktiv-tausch',
      changes: [
        { seite: 'aktiva', posten: 'kasse', betrag: 8000, operation: 'add', order: 1, label: '+8.000 €' },
        { seite: 'aktiva', posten: 'forderungen', betrag: 8000, operation: 'subtract', order: 2, label: '-8.000 €' }
      ],
      erklaerung: {
        kurz: 'Aktiv-Tausch: Nur die Aktiv-Seite ändert sich',
        detail: [
          '✓ Kasse steigt um +8.000 €',
          '✓ Forderungen sinken um -8.000 €',
          '✓ Nur Aktiva betroffen',
          '✓ Bilanzsumme bleibt gleich'
        ]
      }
    },
    {
      id: 'at7',
      vorfall: 'Bareinzahlung auf Bank: 5.000 €',
      icon: '🏦',
      typ: 'aktiv-tausch',
      changes: [
        { seite: 'aktiva', posten: 'bankguthaben', betrag: 5000, operation: 'add', order: 1, label: '+5.000 €' },
        { seite: 'aktiva', posten: 'kasse', betrag: 5000, operation: 'subtract', order: 2, label: '-5.000 €' }
      ],
      erklaerung: {
        kurz: 'Aktiv-Tausch: Nur die Aktiv-Seite ändert sich',
        detail: [
          '✓ Bankguthaben steigt um +5.000 €',
          '✓ Kasse sinkt um -5.000 €',
          '✓ Nur Aktiva betroffen',
          '✓ Bilanzsumme bleibt gleich'
        ]
      }
    },
    {
      id: 'at8',
      vorfall: 'Einkauf von Vorräten per Bank: 6.000 €',
      icon: '📦',
      typ: 'aktiv-tausch',
      changes: [
        { seite: 'aktiva', posten: 'vorraete', betrag: 6000, operation: 'add', order: 1, label: '+6.000 €' },
        { seite: 'aktiva', posten: 'bankguthaben', betrag: 6000, operation: 'subtract', order: 2, label: '-6.000 €' }
      ],
      erklaerung: {
        kurz: 'Aktiv-Tausch: Nur die Aktiv-Seite ändert sich',
        detail: [
          '✓ Vorräte steigen um +6.000 €',
          '✓ Bankguthaben sinkt um -6.000 €',
          '✓ Nur Aktiva betroffen',
          '✓ Bilanzsumme bleibt gleich'
        ]
      }
    },
    {
      id: 'at9',
      vorfall: 'Kunde überweist Restzahlung: 4.000 €',
      icon: '💶',
      typ: 'aktiv-tausch',
      changes: [
        { seite: 'aktiva', posten: 'bankguthaben', betrag: 4000, operation: 'add', order: 1, label: '+4.000 €' },
        { seite: 'aktiva', posten: 'forderungen', betrag: 4000, operation: 'subtract', order: 2, label: '-4.000 €' }
      ],
      erklaerung: {
        kurz: 'Aktiv-Tausch: Nur die Aktiv-Seite ändert sich',
        detail: [
          '✓ Bankguthaben steigt um +4.000 €',
          '✓ Forderungen sinken um -4.000 €',
          '✓ Nur Aktiva betroffen',
          '✓ Bilanzsumme bleibt gleich'
        ]
      }
    }
  ],
  level2_passivTausch: [
    {
      id: 'pt1',
      vorfall: 'Jahresüberschuss 30.000 € in Gewinnrücklage einstellen',
      icon: '📊',
      typ: 'passiv-tausch',
      changes: [
        { seite: 'passiva', posten: 'gewinnruecklage', betrag: 30000, operation: 'add', order: 1, label: '+30.000 €' },
        { seite: 'passiva', posten: 'jahresueberschuss', betrag: 30000, operation: 'subtract', order: 2, label: '-30.000 €' }
      ],
      erklaerung: {
        kurz: 'Passiv-Tausch: Nur die Passiv-Seite ändert sich',
        detail: [
          '✓ Gewinnrücklage steigt um +30.000 €',
          '✓ Jahresüberschuss sinkt um -30.000 €',
          '✓ Nur Passiva betroffen',
          '✓ Bilanzsumme bleibt gleich'
        ]
      }
    },
    {
      id: 'pt2',
      vorfall: 'Lieferantenverbindlichkeit 25.000 € durch Bankkredit ablösen',
      icon: '🏦',
      typ: 'passiv-tausch',
      changes: [
        { seite: 'passiva', posten: 'bankkredit', betrag: 25000, operation: 'add', order: 1, label: '+25.000 €' },
        { seite: 'passiva', posten: 'verbindlichkeiten', betrag: 25000, operation: 'subtract', order: 2, label: '-25.000 €' }
      ],
      erklaerung: {
        kurz: 'Passiv-Tausch: Nur die Passiv-Seite ändert sich',
        detail: [
          '✓ Bankkredit steigt um +25.000 €',
          '✓ Verbindlichkeiten sinken um -25.000 €',
          '✓ Nur Passiva betroffen',
          '✓ Bilanzsumme bleibt gleich'
        ]
      }
    },
    {
      id: 'pt3',
      vorfall: 'Bankkredit 15.000 € umschulden zu Lieferantenkredit',
      icon: '🔄',
      typ: 'passiv-tausch',
      changes: [
        { seite: 'passiva', posten: 'verbindlichkeiten', betrag: 15000, operation: 'add', order: 1, label: '+15.000 €' },
        { seite: 'passiva', posten: 'bankkredit', betrag: 15000, operation: 'subtract', order: 2, label: '-15.000 €' }
      ],
      erklaerung: {
        kurz: 'Passiv-Tausch: Nur die Passiv-Seite ändert sich',
        detail: [
          '✓ Verbindlichkeiten steigen um +15.000 €',
          '✓ Bankkredit sinkt um -15.000 €',
          '✓ Nur Passiva betroffen',
          '✓ Bilanzsumme bleibt gleich'
        ]
      }
    },
    {
      id: 'pt4',
      vorfall: 'Rücklage 10.000 € auflösen in Stammkapital',
      icon: '💼',
      typ: 'passiv-tausch',
      changes: [
        { seite: 'passiva', posten: 'stammkapital', betrag: 10000, operation: 'add', order: 1, label: '+10.000 €' },
        { seite: 'passiva', posten: 'gewinnruecklage', betrag: 10000, operation: 'subtract', order: 2, label: '-10.000 €' }
      ],
      erklaerung: {
        kurz: 'Passiv-Tausch: Nur die Passiv-Seite ändert sich',
        detail: [
          '✓ Stammkapital steigt um +10.000 €',
          '✓ Gewinnrücklage sinkt um -10.000 €',
          '✓ Nur Passiva betroffen',
          '✓ Bilanzsumme bleibt gleich'
        ]
      }
    }
    ,
    {
      id: 'pt5',
      vorfall: 'Umschuldung: 10.000 € Verbindlichkeiten in Bankkredit',
      icon: '🔁',
      typ: 'passiv-tausch',
      changes: [
        { seite: 'passiva', posten: 'bankkredit', betrag: 10000, operation: 'add', order: 1, label: '+10.000 €' },
        { seite: 'passiva', posten: 'verbindlichkeiten', betrag: 10000, operation: 'subtract', order: 2, label: '-10.000 €' }
      ],
      erklaerung: {
        kurz: 'Passiv-Tausch: Nur die Passiv-Seite ändert sich',
        detail: [
          '✓ Bankkredit steigt um +10.000 €',
          '✓ Verbindlichkeiten sinken um -10.000 €',
          '✓ Nur Passiva betroffen',
          '✓ Bilanzsumme bleibt gleich'
        ]
      }
    },
    {
      id: 'pt6',
      vorfall: 'Gewinnrücklage 8.000 € auflösen in Jahresüberschuss',
      icon: '📈',
      typ: 'passiv-tausch',
      changes: [
        { seite: 'passiva', posten: 'jahresueberschuss', betrag: 8000, operation: 'add', order: 1, label: '+8.000 €' },
        { seite: 'passiva', posten: 'gewinnruecklage', betrag: 8000, operation: 'subtract', order: 2, label: '-8.000 €' }
      ],
      erklaerung: {
        kurz: 'Passiv-Tausch: Nur die Passiv-Seite ändert sich',
        detail: [
          '✓ Jahresüberschuss steigt um +8.000 €',
          '✓ Gewinnrücklage sinkt um -8.000 €',
          '✓ Nur Passiva betroffen',
          '✓ Bilanzsumme bleibt gleich'
        ]
      }
    },
    {
      id: 'pt7',
      vorfall: 'Jahresüberschuss 8.000 € in Gewinnrücklage einstellen',
      icon: '📊',
      typ: 'passiv-tausch',
      changes: [
        { seite: 'passiva', posten: 'gewinnruecklage', betrag: 8000, operation: 'add', order: 1, label: '+8.000 €' },
        { seite: 'passiva', posten: 'jahresueberschuss', betrag: 8000, operation: 'subtract', order: 2, label: '-8.000 €' }
      ],
      erklaerung: {
        kurz: 'Passiv-Tausch: Nur die Passiv-Seite ändert sich',
        detail: [
          '✓ Gewinnrücklage steigt um +8.000 €',
          '✓ Jahresüberschuss sinkt um -8.000 €',
          '✓ Nur Passiva betroffen',
          '✓ Bilanzsumme bleibt gleich'
        ]
      }
    },
    {
      id: 'pt8',
      vorfall: 'Erhöhung Stammkapital aus Rücklage: 5.000 €',
      icon: '💼',
      typ: 'passiv-tausch',
      changes: [
        { seite: 'passiva', posten: 'stammkapital', betrag: 5000, operation: 'add', order: 1, label: '+5.000 €' },
        { seite: 'passiva', posten: 'gewinnruecklage', betrag: 5000, operation: 'subtract', order: 2, label: '-5.000 €' }
      ],
      erklaerung: {
        kurz: 'Passiv-Tausch: Nur die Passiv-Seite ändert sich',
        detail: [
          '✓ Stammkapital steigt um +5.000 €',
          '✓ Gewinnrücklage sinkt um -5.000 €',
          '✓ Nur Passiva betroffen',
          '✓ Bilanzsumme bleibt gleich'
        ]
      }
    },
    {
      id: 'pt9',
      vorfall: 'Umschuldung: 12.000 € Bankkredit in Verbindlichkeiten',
      icon: '🔄',
      typ: 'passiv-tausch',
      changes: [
        { seite: 'passiva', posten: 'verbindlichkeiten', betrag: 12000, operation: 'add', order: 1, label: '+12.000 €' },
        { seite: 'passiva', posten: 'bankkredit', betrag: 12000, operation: 'subtract', order: 2, label: '-12.000 €' }
      ],
      erklaerung: {
        kurz: 'Passiv-Tausch: Nur die Passiv-Seite ändert sich',
        detail: [
          '✓ Verbindlichkeiten steigen um +12.000 €',
          '✓ Bankkredit sinkt um -12.000 €',
          '✓ Nur Passiva betroffen',
          '✓ Bilanzsumme bleibt gleich'
        ]
      }
    }
  ],
  level3_verlaengerung: [
    {
      id: 'bv1',
      vorfall: 'Wareneinkauf auf Rechnung: 40.000 €',
      icon: '📦',
      typ: 'bilanzverlängerung',
      changes: [
        { seite: 'aktiva', posten: 'vorraete', betrag: 40000, operation: 'add', order: 1, label: '+40.000 €' },
        { seite: 'passiva', posten: 'verbindlichkeiten', betrag: 40000, operation: 'add', order: 2, label: '+40.000 €' }
      ],
      erklaerung: {
        kurz: 'Bilanzverlängerung: Beide Seiten steigen',
        detail: [
          '✓ Vorräte (Aktiva) steigen um +40.000 €',
          '✓ Verbindlichkeiten (Passiva) steigen um +40.000 €',
          '✓ Beide Seiten betroffen',
          '✓ Bilanzsumme steigt'
        ]
      }
    },
    {
      id: 'bv2',
      vorfall: 'Maschinenkauf mit Bankkredit: 60.000 €',
      icon: '🏭',
      typ: 'bilanzverlängerung',
      changes: [
        { seite: 'aktiva', posten: 'maschinen', betrag: 60000, operation: 'add', order: 1, label: '+60.000 €' },
        { seite: 'passiva', posten: 'bankkredit', betrag: 60000, operation: 'add', order: 2, label: '+60.000 €' }
      ],
      erklaerung: {
        kurz: 'Bilanzverlängerung: Beide Seiten steigen',
        detail: [
          '✓ Maschinen (Aktiva) steigen um +60.000 €',
          '✓ Bankkredit (Passiva) steigt um +60.000 €',
          '✓ Beide Seiten betroffen',
          '✓ Bilanzsumme steigt'
        ]
      }
    },
    {
      id: 'bv3',
      vorfall: 'Gesellschafter zahlt Stammkapital ein: 50.000 €',
      icon: '💰',
      typ: 'bilanzverlängerung',
      changes: [
        { seite: 'aktiva', posten: 'bankguthaben', betrag: 50000, operation: 'add', order: 1, label: '+50.000 €' },
        { seite: 'passiva', posten: 'stammkapital', betrag: 50000, operation: 'add', order: 2, label: '+50.000 €' }
      ],
      erklaerung: {
        kurz: 'Bilanzverlängerung: Beide Seiten steigen',
        detail: [
          '✓ Bankguthaben (Aktiva) steigt um +50.000 €',
          '✓ Stammkapital (Passiva) steigt um +50.000 €',
          '✓ Beide Seiten betroffen',
          '✓ Bilanzsumme steigt'
        ]
      }
    },
    {
      id: 'bv4',
      vorfall: 'Kauf von Geschäftsausstattung auf Kredit: 20.000 €',
      icon: '🪑',
      typ: 'bilanzverlängerung',
      changes: [
        { seite: 'aktiva', posten: 'geschaeftsausstattung', betrag: 20000, operation: 'add', order: 1, label: '+20.000 €' },
        { seite: 'passiva', posten: 'verbindlichkeiten', betrag: 20000, operation: 'add', order: 2, label: '+20.000 €' }
      ],
      erklaerung: {
        kurz: 'Bilanzverlängerung: Beide Seiten steigen',
        detail: [
          '✓ Geschäftsausstattung (Aktiva) steigt um +20.000 €',
          '✓ Verbindlichkeiten (Passiva) steigen um +20.000 €',
          '✓ Beide Seiten betroffen',
          '✓ Bilanzsumme steigt'
        ]
      }
    }
    ,
    {
      id: 'bv5',
      vorfall: 'Warenkauf auf Rechnung: 12.000 €',
      icon: '📦',
      typ: 'bilanzverlängerung',
      changes: [
        { seite: 'aktiva', posten: 'vorraete', betrag: 12000, operation: 'add', order: 1, label: '+12.000 €' },
        { seite: 'passiva', posten: 'verbindlichkeiten', betrag: 12000, operation: 'add', order: 2, label: '+12.000 €' }
      ],
      erklaerung: {
        kurz: 'Bilanzverlängerung: Beide Seiten steigen',
        detail: [
          '✓ Vorräte (Aktiva) steigen um +12.000 €',
          '✓ Verbindlichkeiten (Passiva) steigen um +12.000 €',
          '✓ Beide Seiten betroffen',
          '✓ Bilanzsumme steigt'
        ]
      }
    },
    {
      id: 'bv6',
      vorfall: 'Darlehen aufgenommen und auf Bank gutgeschrieben: 25.000 €',
      icon: '🏦',
      typ: 'bilanzverlängerung',
      changes: [
        { seite: 'aktiva', posten: 'bankguthaben', betrag: 25000, operation: 'add', order: 1, label: '+25.000 €' },
        { seite: 'passiva', posten: 'bankkredit', betrag: 25000, operation: 'add', order: 2, label: '+25.000 €' }
      ],
      erklaerung: {
        kurz: 'Bilanzverlängerung: Beide Seiten steigen',
        detail: [
          '✓ Bankguthaben (Aktiva) steigt um +25.000 €',
          '✓ Bankkredit (Passiva) steigt um +25.000 €',
          '✓ Beide Seiten betroffen',
          '✓ Bilanzsumme steigt'
        ]
      }
    },
    {
      id: 'bv7',
      vorfall: 'Geschäftsausstattung auf Ziel gekauft: 7.000 €',
      icon: '🪑',
      typ: 'bilanzverlängerung',
      changes: [
        { seite: 'aktiva', posten: 'geschaeftsausstattung', betrag: 7000, operation: 'add', order: 1, label: '+7.000 €' },
        { seite: 'passiva', posten: 'verbindlichkeiten', betrag: 7000, operation: 'add', order: 2, label: '+7.000 €' }
      ],
      erklaerung: {
        kurz: 'Bilanzverlängerung: Beide Seiten steigen',
        detail: [
          '✓ Geschäftsausstattung (Aktiva) steigt um +7.000 €',
          '✓ Verbindlichkeiten (Passiva) steigen um +7.000 €',
          '✓ Beide Seiten betroffen',
          '✓ Bilanzsumme steigt'
        ]
      }
    },
    {
      id: 'bv8',
      vorfall: 'Kundenanzahlung per Bank erhalten: 9.000 €',
      icon: '💳',
      typ: 'bilanzverlängerung',
      changes: [
        { seite: 'aktiva', posten: 'bankguthaben', betrag: 9000, operation: 'add', order: 1, label: '+9.000 €' },
        { seite: 'passiva', posten: 'verbindlichkeiten', betrag: 9000, operation: 'add', order: 2, label: '+9.000 €' }
      ],
      erklaerung: {
        kurz: 'Bilanzverlängerung: Beide Seiten steigen',
        detail: [
          '✓ Bankguthaben (Aktiva) steigt um +9.000 €',
          '✓ Verbindlichkeiten (Passiva) steigen um +9.000 € (erhaltene Anzahlungen)',
          '✓ Beide Seiten betroffen',
          '✓ Bilanzsumme steigt'
        ]
      }
    },
    {
      id: 'bv9',
      vorfall: 'Ausgabe neuer Anteile: Einzahlung 15.000 €',
      icon: '💰',
      typ: 'bilanzverlängerung',
      changes: [
        { seite: 'aktiva', posten: 'bankguthaben', betrag: 15000, operation: 'add', order: 1, label: '+15.000 €' },
        { seite: 'passiva', posten: 'stammkapital', betrag: 15000, operation: 'add', order: 2, label: '+15.000 €' }
      ],
      erklaerung: {
        kurz: 'Bilanzverlängerung: Beide Seiten steigen',
        detail: [
          '✓ Bankguthaben (Aktiva) steigt um +15.000 €',
          '✓ Stammkapital (Passiva) steigt um +15.000 €',
          '✓ Beide Seiten betroffen',
          '✓ Bilanzsumme steigt'
        ]
      }
    }
  ],
  level4_verkuerzung: [
    {
      id: 'bk1',
      vorfall: 'Kredittilgung bar: 30.000 €',
      icon: '💳',
      typ: 'bilanzverkürzung',
      changes: [
        { seite: 'aktiva', posten: 'kasse', betrag: 30000, operation: 'subtract', order: 1, label: '-30.000 €' },
        { seite: 'passiva', posten: 'bankkredit', betrag: 30000, operation: 'subtract', order: 2, label: '-30.000 €' }
      ],
      erklaerung: {
        kurz: 'Bilanzverkürzung: Beide Seiten sinken',
        detail: [
          '✓ Kasse (Aktiva) sinkt um -30.000 €',
          '✓ Bankkredit (Passiva) sinkt um -30.000 €',
          '✓ Beide Seiten betroffen',
          '✓ Bilanzsumme sinkt'
        ]
      }
    },
    {
      id: 'bk2',
      vorfall: 'Lieferantenrechnung bar bezahlen: 25.000 €',
      icon: '💸',
      typ: 'bilanzverkürzung',
      changes: [
        { seite: 'aktiva', posten: 'kasse', betrag: 25000, operation: 'subtract', order: 1, label: '-25.000 €' },
        { seite: 'passiva', posten: 'verbindlichkeiten', betrag: 25000, operation: 'subtract', order: 2, label: '-25.000 €' }
      ],
      erklaerung: {
        kurz: 'Bilanzverkürzung: Beide Seiten sinken',
        detail: [
          '✓ Kasse (Aktiva) sinkt um -25.000 €',
          '✓ Verbindlichkeiten (Passiva) sinken um -25.000 €',
          '✓ Beide Seiten betroffen',
          '✓ Bilanzsumme sinkt'
        ]
      }
    },
    {
      id: 'bk3',
      vorfall: 'Privatentnahme: 10.000 €',
      icon: '🏠',
      typ: 'bilanzverkürzung',
      changes: [
        { seite: 'aktiva', posten: 'kasse', betrag: 10000, operation: 'subtract', order: 1, label: '-10.000 €' },
        { seite: 'passiva', posten: 'stammkapital', betrag: 10000, operation: 'subtract', order: 2, label: '-10.000 €' }
      ],
      erklaerung: {
        kurz: 'Bilanzverkürzung: Beide Seiten sinken',
        detail: [
          '✓ Kasse (Aktiva) sinkt um -10.000 €',
          '✓ Stammkapital (Passiva) sinkt um -10.000 €',
          '✓ Beide Seiten betroffen',
          '✓ Bilanzsumme sinkt'
        ]
      }
    },
    {
      id: 'bk4',
      vorfall: 'Vorräte verkaufen und Kredit tilgen: 15.000 €',
      icon: '🔄',
      typ: 'bilanzverkürzung',
      changes: [
        { seite: 'aktiva', posten: 'vorraete', betrag: 15000, operation: 'subtract', order: 1, label: '-15.000 €' },
        { seite: 'passiva', posten: 'bankkredit', betrag: 15000, operation: 'subtract', order: 2, label: '-15.000 €' }
      ],
      erklaerung: {
        kurz: 'Bilanzverkürzung: Beide Seiten sinken',
        detail: [
          '✓ Vorräte (Aktiva) sinken um -15.000 €',
          '✓ Bankkredit (Passiva) sinkt um -15.000 €',
          '✓ Beide Seiten betroffen',
          '✓ Bilanzsumme sinkt'
        ]
      }
    }
    ,
    {
      id: 'bk5',
      vorfall: 'Lieferantenrechnung per Bank begleichen: 10.000 €',
      icon: '🏦',
      typ: 'bilanzverkürzung',
      changes: [
        { seite: 'aktiva', posten: 'bankguthaben', betrag: 10000, operation: 'subtract', order: 1, label: '-10.000 €' },
        { seite: 'passiva', posten: 'verbindlichkeiten', betrag: 10000, operation: 'subtract', order: 2, label: '-10.000 €' }
      ],
      erklaerung: {
        kurz: 'Bilanzverkürzung: Beide Seiten sinken',
        detail: [
          '✓ Bankguthaben (Aktiva) sinkt um -10.000 €',
          '✓ Verbindlichkeiten (Passiva) sinken um -10.000 €',
          '✓ Beide Seiten betroffen',
          '✓ Bilanzsumme sinkt'
        ]
      }
    },
    {
      id: 'bk6',
      vorfall: 'Kredittilgung per Bank: 12.000 €',
      icon: '💳',
      typ: 'bilanzverkürzung',
      changes: [
        { seite: 'aktiva', posten: 'bankguthaben', betrag: 12000, operation: 'subtract', order: 1, label: '-12.000 €' },
        { seite: 'passiva', posten: 'bankkredit', betrag: 12000, operation: 'subtract', order: 2, label: '-12.000 €' }
      ],
      erklaerung: {
        kurz: 'Bilanzverkürzung: Beide Seiten sinken',
        detail: [
          '✓ Bankguthaben (Aktiva) sinkt um -12.000 €',
          '✓ Bankkredit (Passiva) sinkt um -12.000 €',
          '✓ Beide Seiten betroffen',
          '✓ Bilanzsumme sinkt'
        ]
      }
    },
    {
      id: 'bk7',
      vorfall: 'Barentnahme: 4.000 €',
      icon: '🏠',
      typ: 'bilanzverkürzung',
      changes: [
        { seite: 'aktiva', posten: 'kasse', betrag: 4000, operation: 'subtract', order: 1, label: '-4.000 €' },
        { seite: 'passiva', posten: 'stammkapital', betrag: 4000, operation: 'subtract', order: 2, label: '-4.000 €' }
      ],
      erklaerung: {
        kurz: 'Bilanzverkürzung: Beide Seiten sinken',
        detail: [
          '✓ Kasse (Aktiva) sinkt um -4.000 €',
          '✓ Stammkapital (Passiva) sinkt um -4.000 €',
          '✓ Beide Seiten betroffen',
          '✓ Bilanzsumme sinkt'
        ]
      }
    },
    {
      id: 'bk8',
      vorfall: 'Ausschüttung an Gesellschafter per Bank: 6.000 €',
      icon: '💼',
      typ: 'bilanzverkürzung',
      changes: [
        { seite: 'aktiva', posten: 'bankguthaben', betrag: 6000, operation: 'subtract', order: 1, label: '-6.000 €' },
        { seite: 'passiva', posten: 'stammkapital', betrag: 6000, operation: 'subtract', order: 2, label: '-6.000 €' }
      ],
      erklaerung: {
        kurz: 'Bilanzverkürzung: Beide Seiten sinken',
        detail: [
          '✓ Bankguthaben (Aktiva) sinkt um -6.000 €',
          '✓ Stammkapital (Passiva) sinkt um -6.000 €',
          '✓ Beide Seiten betroffen',
          '✓ Bilanzsumme sinkt'
        ]
      }
    },
    {
      id: 'bk9',
      vorfall: 'Verbindlichkeiten bar bezahlt: 5.000 €',
      icon: '💸',
      typ: 'bilanzverkürzung',
      changes: [
        { seite: 'aktiva', posten: 'kasse', betrag: 5000, operation: 'subtract', order: 1, label: '-5.000 €' },
        { seite: 'passiva', posten: 'verbindlichkeiten', betrag: 5000, operation: 'subtract', order: 2, label: '-5.000 €' }
      ],
      erklaerung: {
        kurz: 'Bilanzverkürzung: Beide Seiten sinken',
        detail: [
          '✓ Kasse (Aktiva) sinkt um -5.000 €',
          '✓ Verbindlichkeiten (Passiva) sinken um -5.000 €',
          '✓ Beide Seiten betroffen',
          '✓ Bilanzsumme sinkt'
        ]
      }
    }
  ]
};

// Animations-Timings
const timings = {
  slow: { vorfallEinblenden: 1500, postenMarkieren: 750, zahlFliegen: 750, balkenWachsen: 1500, pause: 750, badgeEinblenden: 750, erklaerung: 3000 },
  normal: { vorfallEinblenden: 1000, postenMarkieren: 500, zahlFliegen: 500, balkenWachsen: 1000, pause: 500, badgeEinblenden: 500, erklaerung: 2000 },
  fast: { vorfallEinblenden: 500, postenMarkieren: 250, zahlFliegen: 250, balkenWachsen: 500, pause: 250, badgeEinblenden: 250, erklaerung: 1000 }
};

// Initial-Bilanz (nach § 266 HGB - Aktiva nach Liquidität, Passiva nach Fälligkeit)
const initialBilanzData = {
  aktiva: {
    // Anlagevermögen (langfristig gebunden)
    maschinen: 100000,
    geschaeftsausstattung: 20000,
    // Umlaufvermögen (nach steigender Liquidität)
    vorraete: 50000,
    forderungen: 20000,
    bankguthaben: 80000,
    kasse: 30000
  },
  passiva: {
    // Eigenkapital (langfristig)
    stammkapital: 150000,
    gewinnruecklage: 30000,
    jahresueberschuss: 30000,
    // Fremdkapital (nach Fälligkeit)
    bankkredit: 50000,
    verbindlichkeiten: 40000
  }
};

const postenLabels = {
  // Aktiva (nach § 266 HGB)
  maschinen: 'Maschinen',
  geschaeftsausstattung: 'Geschäftsausstattung',
  vorraete: 'Vorräte',
  forderungen: 'Forderungen',
  bankguthaben: 'Bankguthaben',
  kasse: 'Kasse',
  // Passiva (nach § 266 HGB)
  stammkapital: 'Stammkapital',
  gewinnruecklage: 'Gewinnrücklage',
  jahresueberschuss: 'Jahresüberschuss',
  bankkredit: 'Bankkredit',
  verbindlichkeiten: 'Verbindlichkeiten'
};

// Reihenfolge für die Anzeige (nach § 266 HGB)
const aktivaReihenfolge = ['maschinen', 'geschaeftsausstattung', 'vorraete', 'forderungen', 'bankguthaben', 'kasse'];
const passivaReihenfolge = ['stammkapital', 'gewinnruecklage', 'jahresueberschuss', 'bankkredit', 'verbindlichkeiten'];

// Komponente: BilanzPosten
const BilanzPosten = React.memo(({ name, betrag, maxBetrag, animState, label }) => {
  const breite = Math.max(0, (betrag / maxBetrag) * 100);
  
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="font-semibold text-sm">{label}</span>
        <span className="font-bold text-sm">{betrag.toLocaleString('de-DE')} €</span>
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
});

// Hauptkomponente
export default function BilanzVeraenderungSpiel() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [currentLevel, setCurrentLevel] = useState(null);
  const [currentVorfallIndex, setCurrentVorfallIndex] = useState(0);
  const [bilanzData, setBilanzData] = useState(JSON.parse(JSON.stringify(initialBilanzData)));
  const [originalBilanzData, setOriginalBilanzData] = useState(null);
  const [userVorhersage, setUserVorhersage] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationSpeed, setAnimationSpeed] = useState('normal');
  const [animStates, setAnimStates] = useState({});
  const [showExplanation, setShowExplanation] = useState(false);
  const [showVergleich, setShowVergleich] = useState(false);
  const [punkte, setPunkte] = useState(0);
  const [richtigeVorhersagen, setRichtigeVorhersagen] = useState(0);
  const [showLevelComplete, setShowLevelComplete] = useState(false);

  const [quizVorfaelle, setQuizVorfaelle] = useState([]);

  const levelData = {
    1: { name: 'Aktiv-Tausch', vorfaelle: geschaeftsvorfaelle.level1_aktivTausch, color: 'blue' },
    2: { name: 'Passiv-Tausch', vorfaelle: geschaeftsvorfaelle.level2_passivTausch, color: 'purple' },
    3: { name: 'Bilanzverlängerung', vorfaelle: geschaeftsvorfaelle.level3_verlaengerung, color: 'green' },
    4: { name: 'Bilanzverkürzung', vorfaelle: geschaeftsvorfaelle.level4_verkuerzung, color: 'red' },
    5: { name: 'Quiz-Modus', vorfaelle: quizVorfaelle, color: 'yellow' }
  };

  const currentVorfaelle = currentLevel ? levelData[currentLevel].vorfaelle : [];
  const currentVorfall = currentVorfaelle[currentVorfallIndex];

  const startLevel = (level) => {
    // Level 5: Gemischte Vorfälle generieren
    if (level === 5) {
      const allVorfaelle = [
        ...geschaeftsvorfaelle.level1_aktivTausch,
        ...geschaeftsvorfaelle.level2_passivTausch,
        ...geschaeftsvorfaelle.level3_verlaengerung,
        ...geschaeftsvorfaelle.level4_verkuerzung
      ];
      const shuffled = [...allVorfaelle].sort(() => Math.random() - 0.5).slice(0, 8);
      setQuizVorfaelle(shuffled);
    }
    
    setCurrentLevel(level);
    setCurrentVorfallIndex(0);
    setBilanzData(JSON.parse(JSON.stringify(initialBilanzData)));
    setOriginalBilanzData(null);
    setUserVorhersage(null);
    setShowFeedback(false);
    setShowExplanation(false);
    setShowVergleich(false);
    setPunkte(0);
    setRichtigeVorhersagen(0);
    setShowLevelComplete(false);
    setShowWelcome(false);
  };

  const checkVorhersage = () => {
    if (!userVorhersage || !currentVorfall) return;
    
    const correct = userVorhersage === currentVorfall.typ;
    setIsCorrect(correct);
    setShowFeedback(true);
    
    if (correct) {
      setRichtigeVorhersagen(prev => prev + 1);
      setPunkte(prev => prev + 2);
    } else {
      setPunkte(prev => prev + 1);
    }
  };

  const startAnimation = useCallback(async () => {
    if (!currentVorfall || isAnimating) return;
    
    setIsAnimating(true);
    setOriginalBilanzData(JSON.parse(JSON.stringify(bilanzData)));
    setShowExplanation(false);
    
    const timing = timings[animationSpeed];
    const newBilanz = JSON.parse(JSON.stringify(bilanzData));
    
    // Animation durchführen
    for (const change of currentVorfall.changes.sort((a, b) => a.order - b.order)) {
      // Posten markieren
      setAnimStates({ [change.posten]: 'pulse' });
      await new Promise(resolve => setTimeout(resolve, timing.postenMarkieren));
      
      // Veränderung durchführen
      if (change.operation === 'add') {
        newBilanz[change.seite][change.posten] += change.betrag;
        setAnimStates({ [change.posten]: 'increase' });
      } else {
        newBilanz[change.seite][change.posten] -= change.betrag;
        setAnimStates({ [change.posten]: 'decrease' });
      }
      
      setBilanzData(newBilanz);
      await new Promise(resolve => setTimeout(resolve, timing.balkenWachsen));
      
      // Pause zwischen Änderungen
      setAnimStates({});
      await new Promise(resolve => setTimeout(resolve, timing.pause));
    }
    
    // Erklärung zeigen
    await new Promise(resolve => setTimeout(resolve, timing.badgeEinblenden));
    setShowExplanation(true);
    setIsAnimating(false);
  }, [currentVorfall, bilanzData, animationSpeed, isAnimating]);

  const nextVorfall = () => {
    if (currentVorfallIndex < currentVorfaelle.length - 1) {
      setCurrentVorfallIndex(prev => prev + 1);
      setUserVorhersage(null);
      setShowFeedback(false);
      setShowExplanation(false);
      setShowVergleich(false);
      setAnimStates({});
    } else {
      setShowLevelComplete(true);
    }
  };

  const replayAnimation = () => {
    setBilanzData(originalBilanzData || bilanzData);
    setShowExplanation(false);
    setAnimStates({});
    setTimeout(() => startAnimation(), 100);
  };

  const calculateSumme = (seite) => {
    return Object.values(bilanzData[seite]).reduce((sum, val) => sum + val, 0);
  };

  const maxBetrag = Math.max(
    ...Object.values(bilanzData.aktiva),
    ...Object.values(bilanzData.passiva)
  );

  const typBadgeColors = {
    'aktiv-tausch': 'bg-blue-100 border-blue-400 text-blue-800',
    'passiv-tausch': 'bg-purple-100 border-purple-400 text-purple-800',
    'bilanzverlängerung': 'bg-green-100 border-green-400 text-green-800',
    'bilanzverkürzung': 'bg-red-100 border-red-400 text-red-800'
  };

  const typIcons = {
    'aktiv-tausch': '↔️',
    'passiv-tausch': '↔️',
    'bilanzverlängerung': '📈',
    'bilanzverkürzung': '📉'
  };

  // Willkommensbildschirm
  if (showWelcome) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            <div className="flex justify-between items-center mb-8">
              <div className="flex-1"></div>
              <div className="flex-1 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                  🎯 Bilanzveränderungen verstehen
                </h1>
                <p className="text-xl text-gray-600">
                  Lerne die 4 Arten von Bilanzveränderungen durch animierte Visualisierungen
                </p>
              </div>
              <div className="flex-1 flex justify-end">
                <button
                  onClick={() => window.location.href = '/'}
                  className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors flex items-center gap-2"
                >
                  <span>🏠</span>
                  <span className="hidden sm:inline">Home</span>
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {[1, 2, 3, 4].map(level => (
                <button
                  key={level}
                  onClick={() => startLevel(level)}
                  className={`p-6 rounded-xl border-2 hover:shadow-lg transition-all ${
                    level === 1 ? 'border-blue-400 bg-blue-50 hover:bg-blue-100' :
                    level === 2 ? 'border-purple-400 bg-purple-50 hover:bg-purple-100' :
                    level === 3 ? 'border-green-400 bg-green-50 hover:bg-green-100' :
                    'border-red-400 bg-red-50 hover:bg-red-100'
                  }`}
                >
                  <div className="text-3xl mb-2">
                    {level === 1 ? '↔️' : level === 2 ? '↔️' : level === 3 ? '📈' : '📉'}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{levelData[level].name}</h3>
                  <p className="text-sm text-gray-600">
                    {level === 1 && 'Nur Aktiva verändert sich'}
                    {level === 2 && 'Nur Passiva verändert sich'}
                    {level === 3 && 'Beide Seiten steigen'}
                    {level === 4 && 'Beide Seiten sinken'}
                  </p>
                  <div className="mt-3 text-sm font-semibold">
                    {levelData[level].vorfaelle.length} Geschäftsvorfälle
                  </div>
                </button>
              ))}
            </div>

            <button
              onClick={() => startLevel(5)}
              className="w-full p-6 rounded-xl border-2 border-yellow-400 bg-yellow-50 hover:bg-yellow-100 hover:shadow-lg transition-all"
            >
              <div className="text-3xl mb-2">🏆</div>
              <h3 className="text-xl font-bold mb-2">Quiz-Modus</h3>
              <p className="text-sm text-gray-600">Alle 4 Typen gemischt - 8 Geschäftsvorfälle</p>
            </button>

            <div className="mt-8 p-6 bg-gray-50 rounded-xl">
              <h4 className="font-bold text-lg mb-3">📚 So funktioniert's:</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✓ Lies den Geschäftsvorfall</li>
                <li>✓ Sage vorher, welche Art von Bilanzveränderung passiert</li>
                <li>✓ Schaue die Animation an und lerne</li>
                <li>✓ Verstehe die Zusammenhänge</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Level-Complete-Screen
  if (showLevelComplete) {
    const prozent = Math.round((richtigeVorhersagen / currentVorfaelle.length) * 100);
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8 text-center">
            <div className="text-6xl mb-4">
              {prozent >= 75 ? '🏆' : prozent >= 50 ? '🎉' : '💪'}
            </div>
            <h2 className="text-3xl font-bold mb-4">Level abgeschlossen!</h2>
            <div className="text-5xl font-bold text-blue-600 mb-2">{prozent}%</div>
            <p className="text-xl text-gray-600 mb-6">
              {richtigeVorhersagen} von {currentVorfaelle.length} richtig vorhergesagt
            </p>
            
            {currentLevel === 5 && (
              <div className="mb-6 p-4 bg-yellow-50 rounded-lg">
                <div className="text-3xl font-bold text-yellow-600">{punkte} Punkte</div>
              </div>
            )}

            <div className="space-y-3">
              <button
                onClick={() => startLevel(currentLevel)}
                className="w-full py-3 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                🔄 Level wiederholen
              </button>
              
              {currentLevel < 5 && (
                <button
                  onClick={() => startLevel(currentLevel + 1)}
                  className="w-full py-3 px-6 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold"
                >
                  ➡️ Nächstes Level
                </button>
              )}
              
              <button
                onClick={() => {
                  setShowWelcome(true);
                  setCurrentLevel(null);
                }}
                className="w-full py-3 px-6 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-semibold"
              >
                🏠 Zurück zur Übersicht
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Hauptspiel
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-4 mb-6">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                🎯 {levelData[currentLevel]?.name}
              </h1>
              <p className="text-gray-600">
                Geschäftsvorfall {currentVorfallIndex + 1} von {currentVorfaelle.length}
              </p>
            </div>
            <div className="flex gap-2">
              <select
                value={animationSpeed}
                onChange={(e) => setAnimationSpeed(e.target.value)}
                className="px-3 py-2 border rounded-lg text-sm"
                disabled={isAnimating}
              >
                <option value="slow">⚡ Langsam</option>
                <option value="normal">⚡ Normal</option>
                <option value="fast">⚡ Schnell</option>
              </select>
              <button
                onClick={() => {
                  setShowWelcome(true);
                  setCurrentLevel(null);
                }}
                className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                Zurück
              </button>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-blue-600 h-3 rounded-full transition-all duration-500"
              style={{ width: `${((currentVorfallIndex + 1) / currentVorfaelle.length) * 100}%` }}
            />
          </div>
          
          {currentLevel === 5 && (
            <div className="mt-2 text-right text-lg font-bold text-blue-600">
              Punkte: {punkte}
            </div>
          )}
        </div>

        {/* Geschäftsvorfall Card */}
        {currentVorfall && (
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="text-4xl flex-shrink-0">{currentVorfall.icon}</div>
              <div className="flex-1 min-w-0">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Geschäftsvorfall:</h3>
                <p className="text-base md:text-lg text-gray-700 break-words">{currentVorfall.vorfall}</p>
              </div>
            </div>

            {/* Vorhersage-Quiz */}
            {!showFeedback && !showExplanation && (
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <h4 className="font-bold text-lg mb-3">❓ Was passiert mit der Bilanz?</h4>
                <div className="space-y-2">
                  {['aktiv-tausch', 'passiv-tausch', 'bilanzverlängerung', 'bilanzverkürzung'].map(typ => (
                    <label key={typ} className="flex items-center gap-3 p-3 border rounded-lg hover:bg-white cursor-pointer transition-colors">
                      <input
                        type="radio"
                        name="vorhersage"
                        value={typ}
                        checked={userVorhersage === typ}
                        onChange={(e) => setUserVorhersage(e.target.value)}
                        className="w-4 h-4"
                      />
                      <span className="font-semibold">
                        {typ === 'aktiv-tausch' && '↔️ Aktiv-Tausch'}
                        {typ === 'passiv-tausch' && '↔️ Passiv-Tausch'}
                        {typ === 'bilanzverlängerung' && '📈 Bilanzverlängerung'}
                        {typ === 'bilanzverkürzung' && '📉 Bilanzverkürzung'}
                      </span>
                    </label>
                  ))}
                </div>
                <button
                  onClick={checkVorhersage}
                  disabled={!userVorhersage}
                  className="mt-4 w-full py-3 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors font-semibold"
                >
                  Antwort überprüfen
                </button>
              </div>
            )}

            {/* Feedback */}
            {showFeedback && !showExplanation && (
              <div className={`mt-6 p-4 rounded-lg ${isCorrect ? 'bg-green-50 border-2 border-green-400' : 'bg-red-50 border-2 border-red-400'}`}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-3xl">{isCorrect ? '✅' : '❌'}</div>
                  <div>
                    <h4 className="font-bold text-lg">
                      {isCorrect ? 'Richtig!' : 'Nicht ganz richtig'}
                    </h4>
                    <p className="text-sm">
                      {isCorrect ? '+2 Punkte' : '+1 Punkt (für\'s Ansehen)'}
                    </p>
                  </div>
                </div>
                <button
                  onClick={startAnimation}
                  disabled={isAnimating}
                  className="w-full py-3 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 transition-colors font-semibold"
                >
                  {isAnimating ? '⏳ Animation läuft...' : '▶️ Animation ansehen'}
                </button>
              </div>
            )}

            {/* Erklärung nach Animation */}
            {showExplanation && (
              <div className={`mt-6 p-4 rounded-lg border-2 ${typBadgeColors[currentVorfall.typ]}`}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-3xl">{typIcons[currentVorfall.typ]}</div>
                  <h4 className="font-bold text-lg">{currentVorfall.erklaerung.kurz}</h4>
                </div>
                <ul className="space-y-1 mb-4">
                  {currentVorfall.erklaerung.detail.map((item, i) => (
                    <li key={i} className="text-sm">{item}</li>
                  ))}
                </ul>
                <div className="flex gap-2">
                  <button
                    onClick={replayAnimation}
                    className="flex-1 py-2 px-4 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    🔄 Wiederholen
                  </button>
                  <button
                    onClick={() => setShowVergleich(!showVergleich)}
                    className="flex-1 py-2 px-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    {showVergleich ? '📊 Nur Nachher' : '📊 Vorher/Nachher'}
                  </button>
                  <button
                    onClick={nextVorfall}
                    className="flex-1 py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold"
                  >
                    Weiter ➡️
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Bilanz */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          {showVergleich && originalBilanzData ? (
            // Vorher/Nachher-Vergleich
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold mb-4 text-center">VORHER</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-bold mb-4 text-blue-700">AKTIVA (Vermögen)</h4>
                    {aktivaReihenfolge.map(key => {
                      const value = originalBilanzData.aktiva[key];
                      return value > 0 && <BilanzPosten key={key} name={key} betrag={value} maxBetrag={maxBetrag} animState="" label={postenLabels[key]} />;
                    })}
                    <div className="pt-4 border-t-2 border-gray-300">
                      <div className="flex justify-between font-bold text-lg">
                        <span>Summe:</span>
                        <span>{Object.values(originalBilanzData.aktiva).reduce((a, b) => a + b, 0).toLocaleString('de-DE')} €</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-4 text-purple-700">PASSIVA (Kapital)</h4>
                    {passivaReihenfolge.map(key => {
                      const value = originalBilanzData.passiva[key];
                      return value > 0 && <BilanzPosten key={key} name={key} betrag={value} maxBetrag={maxBetrag} animState="" label={postenLabels[key]} />;
                    })}
                    <div className="pt-4 border-t-2 border-gray-300">
                      <div className="flex justify-between font-bold text-lg">
                        <span>Summe:</span>
                        <span>{Object.values(originalBilanzData.passiva).reduce((a, b) => a + b, 0).toLocaleString('de-DE')} €</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-center">NACHHER</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-bold mb-4 text-blue-700">AKTIVA (Vermögen)</h4>
                    {aktivaReihenfolge.map(key => {
                      const value = bilanzData.aktiva[key];
                      return value > 0 && <BilanzPosten key={key} name={key} betrag={value} maxBetrag={maxBetrag} animState={animStates[key]} label={postenLabels[key]} />;
                    })}
                    <div className="pt-4 border-t-2 border-gray-300">
                      <div className="flex justify-between font-bold text-lg">
                        <span>Summe:</span>
                        <span>{calculateSumme('aktiva').toLocaleString('de-DE')} €</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-4 text-purple-700">PASSIVA (Kapital)</h4>
                    {passivaReihenfolge.map(key => {
                      const value = bilanzData.passiva[key];
                      return value > 0 && <BilanzPosten key={key} name={key} betrag={value} maxBetrag={maxBetrag} animState={animStates[key]} label={postenLabels[key]} />;
                    })}
                    <div className="pt-4 border-t-2 border-gray-300">
                      <div className="flex justify-between font-bold text-lg">
                        <span>Summe:</span>
                        <span>{calculateSumme('passiva').toLocaleString('de-DE')} €</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            // Normale Bilanz-Ansicht
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold mb-4 text-blue-700">AKTIVA (Vermögen)</h3>
                {aktivaReihenfolge.map(key => {
                  const value = bilanzData.aktiva[key];
                  return value > 0 && <BilanzPosten key={key} name={key} betrag={value} maxBetrag={maxBetrag} animState={animStates[key]} label={postenLabels[key]} />;
                })}
                <div className="pt-4 border-t-2 border-gray-300">
                  <div className="flex justify-between font-bold text-lg">
                    <span>Summe:</span>
                    <span>{calculateSumme('aktiva').toLocaleString('de-DE')} €</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-purple-700">PASSIVA (Kapital)</h3>
                {passivaReihenfolge.map(key => {
                  const value = bilanzData.passiva[key];
                  return value > 0 && <BilanzPosten key={key} name={key} betrag={value} maxBetrag={maxBetrag} animState={animStates[key]} label={postenLabels[key]} />;
                })}
                <div className="pt-4 border-t-2 border-gray-300">
                  <div className="flex justify-between font-bold text-lg">
                    <span>Summe:</span>
                    <span>{calculateSumme('passiva').toLocaleString('de-DE')} €</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
