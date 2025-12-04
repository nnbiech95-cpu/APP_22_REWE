// Bilanz-Daten für jeden Schritt (sortiert nach Liquidität und Fälligkeit)
const bilanzData = [
    // Schritt 0: Start
    {
        aktiva: {
            'Bank': 50000
        },
        passiva: {
            'Eigenkapital': 50000
        },
        explanation: {
            type: 'Start',
            title: 'Startbilanz',
            text: 'Lena beginnt mit 50.000 € auf ihrem Geschäftskonto. Dies ist ihr Eigenkapital.',
            changes: []
        }
    },
    // Schritt 1: Espressomaschine (Aktiv-Tausch)
    {
        aktiva: {
            'Maschinen': 8000,
            'Bank': 42000
        },
        passiva: {
            'Eigenkapital': 50000
        },
        explanation: {
            type: 'Aktiv-Tausch',
            title: '🔄 Aktiv-Tausch',
            text: 'Die Bank sinkt um 8.000 €, dafür steigen die Maschinen um 8.000 €. Nur die Aktivseite verändert sich – Geld wird zu Maschine.',
            changes: [
                '➖ Bank: 50.000 € → 42.000 € (-8.000 €)',
                '➕ Maschinen: 0 € → 8.000 € (+8.000 €)',
                '✅ Bilanzsumme bleibt bei 50.000 €'
            ]
        }
    },
    // Schritt 2: Kredit (Bilanzverlängerung)
    {
        aktiva: {
            'Maschinen': 8000,
            'Bank': 72000
        },
        passiva: {
            'Eigenkapital': 50000,
            'Bankkredit': 30000
        },
        explanation: {
            type: 'Bilanzverlängerung',
            title: '📈 Bilanzverlängerung',
            text: 'Die Bank steigt um 30.000 €, der Bankkredit steigt ebenfalls um 30.000 €. Beide Seiten der Bilanz werden größer.',
            changes: [
                '➕ Bank: 42.000 € → 72.000 € (+30.000 €)',
                '➕ Bankkredit: 0 € → 30.000 € (+30.000 €)',
                '📈 Bilanzsumme: 50.000 € → 80.000 €'
            ]
        }
    },
    // Schritt 3: Kaffeebohnen auf Rechnung (Bilanzverlängerung)
    {
        aktiva: {
            'Maschinen': 8000,
            'Waren': 5000,
            'Bank': 72000
        },
        passiva: {
            'Eigenkapital': 50000,
            'Bankkredit': 30000,
            'Verbindlichkeiten': 5000
        },
        explanation: {
            type: 'Bilanzverlängerung',
            title: '📈 Bilanzverlängerung',
            text: 'Waren steigen um 5.000 €, Verbindlichkeiten steigen ebenfalls um 5.000 €. Lena hat mehr Vermögen, aber auch mehr Schulden.',
            changes: [
                '➕ Waren: 0 € → 5.000 € (+5.000 €)',
                '➕ Verbindlichkeiten: 0 € → 5.000 € (+5.000 €)',
                '📈 Bilanzsumme: 80.000 € → 85.000 €'
            ]
        }
    },
    // Schritt 4: Rechnung bezahlen (Bilanzverkürzung)
    {
        aktiva: {
            'Maschinen': 8000,
            'Waren': 5000,
            'Bank': 67000
        },
        passiva: {
            'Eigenkapital': 50000,
            'Bankkredit': 30000
        },
        explanation: {
            type: 'Bilanzverkürzung',
            title: '📉 Bilanzverkürzung',
            text: 'Die Bank sinkt um 5.000 €, die Verbindlichkeiten sinken ebenfalls um 5.000 €. Beide Seiten der Bilanz werden kleiner.',
            changes: [
                '➖ Bank: 72.000 € → 67.000 € (-5.000 €)',
                '➖ Verbindlichkeiten: 5.000 € → 0 € (-5.000 €)',
                '📉 Bilanzsumme: 85.000 € → 80.000 €'
            ]
        }
    },
    // Schritt 5: Kredit zurückzahlen (Bilanzverkürzung)
    {
        aktiva: {
            'Maschinen': 8000,
            'Waren': 5000,
            'Bank': 57000
        },
        passiva: {
            'Eigenkapital': 50000,
            'Bankkredit': 20000
        },
        explanation: {
            type: 'Bilanzverkürzung',
            title: '📉 Bilanzverkürzung',
            text: 'Die Bank sinkt um 10.000 €, der Bankkredit sinkt ebenfalls um 10.000 €. Weniger Geld, aber auch weniger Schulden.',
            changes: [
                '➖ Bank: 67.000 € → 57.000 € (-10.000 €)',
                '➖ Bankkredit: 30.000 € → 20.000 € (-10.000 €)',
                '📉 Bilanzsumme: 80.000 € → 70.000 €'
            ]
        }
    },
    // Schritt 6: Neuer Lieferant (Bilanzverlängerung)
    {
        aktiva: {
            'Maschinen': 8000,
            'Waren': 7000,
            'Bank': 57000
        },
        passiva: {
            'Eigenkapital': 50000,
            'Bankkredit': 20000,
            'Verbindlichkeiten': 2000
        },
        explanation: {
            type: 'Bilanzverlängerung',
            title: '📈 Bilanzverlängerung',
            text: 'Waren steigen um 2.000 €, Verbindlichkeiten steigen ebenfalls um 2.000 €. Beide Seiten wachsen.',
            changes: [
                '➕ Waren: 5.000 € → 7.000 € (+2.000 €)',
                '➕ Verbindlichkeiten: 0 € → 2.000 € (+2.000 €)',
                '📈 Bilanzsumme: 70.000 € → 72.000 €'
            ]
        }
    },
    // Schritt 7: Mobiliar (Aktiv-Tausch - keine sichtbare Änderung)
    {
        aktiva: {
            'Maschinen': 8000,
            'Waren': 7000,
            'Bank': 57000
        },
        passiva: {
            'Eigenkapital': 50000,
            'Bankkredit': 20000,
            'Verbindlichkeiten': 2000
        },
        explanation: {
            type: 'Aktiv-Tausch',
            title: '🔄 Aktiv-Tausch',
            text: 'Theoretisch werden alte Möbel gegen neue getauscht. In der Praxis würden beide unter "Mobiliar" geführt, daher bleibt die Bilanz optisch gleich. Es ist trotzdem ein Aktiv-Tausch innerhalb der gleichen Bilanzposition.',
            changes: [
                '🔄 Mobiliar (alt) → Mobiliar (neu): 3.000 €',
                '✅ Bilanzsumme bleibt bei 72.000 €',
                'ℹ️ In der Realität: Gleicher Wert, andere Gegenstände'
            ]
        }
    },
    // Schritt 8: Umschuldung (Passiv-Tausch)
    {
        aktiva: {
            'Maschinen': 8000,
            'Waren': 7000,
            'Bank': 57000
        },
        passiva: {
            'Eigenkapital': 50000,
            'Langfr. Verbindl.': 5000,
            'Bankkredit': 15000,
            'Verbindlichkeiten': 2000
        },
        explanation: {
            type: 'Passiv-Tausch',
            title: '🔄 Passiv-Tausch',
            text: 'Der kurzfristige Bankkredit sinkt um 5.000 €, dafür steigen die langfristigen Verbindlichkeiten um 5.000 €. Nur die Passivseite verändert sich intern.',
            changes: [
                '➖ Bankkredit: 20.000 € → 15.000 € (-5.000 €)',
                '➕ Langfristige Verbindl.: 0 € → 5.000 € (+5.000 €)',
                '✅ Bilanzsumme bleibt bei 72.000 €'
            ]
        }
    }
];

// Korrekte Antworten für jeden Geschäftsvorfall
const correctAnswers = {
    1: 'aktiv',           // Espressomaschine
    2: 'verlaengerung',   // Kredit
    3: 'verlaengerung',   // Kaffeebohnen
    4: 'verkuerzung',     // Rechnung bezahlen
    5: 'verkuerzung',     // Kredit zurückzahlen
    6: 'verlaengerung',   // Neuer Lieferant
    7: 'aktiv',           // Mobiliar
    8: 'passiv'           // Umschuldung
};

// State Management
let currentStep = 0;
let correctCount = 0;
let answeredQuestions = new Set();

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    updateProgress();
    updateNavigation();
});

// Navigation Functions
function nextStep() {
    if (currentStep < 9) {
        document.getElementById(`section${currentStep}`).classList.remove('active');
        currentStep++;
        document.getElementById(`section${currentStep}`).classList.add('active');
        updateProgress();
        updateNavigation();
        window.scrollTo(0, 0);
    }
}

function prevStep() {
    if (currentStep > 0) {
        document.getElementById(`section${currentStep}`).classList.remove('active');
        currentStep--;
        document.getElementById(`section${currentStep}`).classList.add('active');
        updateProgress();
        updateNavigation();
        window.scrollTo(0, 0);
    }
}

function updateProgress() {
    const progress = (currentStep / 9) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
    document.getElementById('currentStep').textContent = currentStep;
    
    // Update final score on last page
    if (currentStep === 9) {
        const percentage = Math.round((correctCount / 8) * 100);
        let emoji = '🎉';
        let message = 'Perfekt!';
        
        if (percentage < 50) {
            emoji = '📚';
            message = 'Weiter üben!';
        } else if (percentage < 80) {
            emoji = '👍';
            message = 'Gut gemacht!';
        }
        
        document.getElementById('finalScore').innerHTML = `
            ${emoji} Deine Punktzahl: ${correctCount} von 8 richtig (${percentage}%) ${emoji}
            <div style="margin-top: 10px; font-size: 0.9em;">${message}</div>
        `;
    }
}

function updateNavigation() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    prevBtn.disabled = currentStep === 0;
    nextBtn.disabled = currentStep === 9 || (currentStep > 0 && currentStep < 9 && !answeredQuestions.has(currentStep));
}

// Answer Checking
function checkAnswer(step, answer) {
    if (answeredQuestions.has(step)) return;
    
    const correct = correctAnswers[step] === answer;
    const buttons = document.querySelectorAll(`#section${step} .btn-answer`);
    const feedback = document.getElementById(`feedback${step}`);
    
    buttons.forEach(btn => {
        btn.disabled = true;
        const btnAnswer = btn.onclick.toString().match(/'([^']+)'/)[1];
        if (btnAnswer === correctAnswers[step]) {
            btn.classList.add('correct');
        } else if (btnAnswer === answer && !correct) {
            btn.classList.add('wrong');
        }
    });
    
    if (correct) {
        correctCount++;
        feedback.className = 'feedback show correct';
        feedback.innerHTML = '✅ <strong>Richtig!</strong> ' + getAnswerExplanation(step);
    } else {
        feedback.className = 'feedback show wrong';
        feedback.innerHTML = '❌ <strong>Das war leider nicht richtig.</strong> ' + getAnswerExplanation(step);
    }
    
    answeredQuestions.add(step);
    
    // Show bilanz button
    const showBilanzBtn = document.querySelector(`#section${step} .btn-show-bilanz`);
    if (showBilanzBtn) {
        showBilanzBtn.classList.add('show');
    }
    
    updateNavigation();
}

function getAnswerExplanation(step) {
    const explanations = {
        1: 'Ein Aktiv-Tausch liegt vor, weil nur die Aktivseite betroffen ist: Bank sinkt, Maschinen steigen.',
        2: 'Eine Bilanzverlängerung liegt vor, weil beide Seiten wachsen: Bank und Bankkredit steigen.',
        3: 'Eine Bilanzverlängerung liegt vor, weil beide Seiten wachsen: Waren und Verbindlichkeiten steigen.',
        4: 'Eine Bilanzverkürzung liegt vor, weil beide Seiten sinken: Bank und Verbindlichkeiten sinken.',
        5: 'Eine Bilanzverkürzung liegt vor, weil beide Seiten sinken: Bank und Bankkredit sinken.',
        6: 'Eine Bilanzverlängerung liegt vor, weil beide Seiten wachsen: Waren und Verbindlichkeiten steigen.',
        7: 'Ein Aktiv-Tausch liegt vor, weil nur die Aktivseite betroffen ist (auch wenn optisch keine Änderung sichtbar ist).',
        8: 'Ein Passiv-Tausch liegt vor, weil nur die Passivseite betroffen ist: Bankkredit sinkt, langfristige Verbindlichkeiten steigen.'
    };
    return explanations[step] || '';
}

// Bilanz Display mit Animation von VORHER zu NACHHER
function showBilanz(step) {
    const modal = document.getElementById('bilanzModal');
    const dataVorher = step > 0 ? bilanzData[step - 1] : bilanzData[0];
    const dataNachher = bilanzData[step];
    
    document.getElementById('modalStep').textContent = step;
    
    // Explanation
    const explanationDiv = document.getElementById('bilanzExplanation');
    explanationDiv.innerHTML = `
        <h4>${dataNachher.explanation.title}</h4>
        <p>${dataNachher.explanation.text}</p>
        <ul>
            ${dataNachher.explanation.changes.map(change => `<li>${change}</li>`).join('')}
        </ul>
    `;
    
    // Calculate max total for scaling
    let aktivaTotalVorher = Object.values(dataVorher.aktiva).reduce((a, b) => a + b, 0);
    let passivaTotalVorher = Object.values(dataVorher.passiva).reduce((a, b) => a + b, 0);
    let aktivaTotalNachher = Object.values(dataNachher.aktiva).reduce((a, b) => a + b, 0);
    let passivaTotalNachher = Object.values(dataNachher.passiva).reduce((a, b) => a + b, 0);
    
    const maxTotal = Math.max(aktivaTotalVorher, passivaTotalVorher, aktivaTotalNachher, passivaTotalNachher);
    
    // Get all keys from both states
    const allAktivaKeys = new Set([...Object.keys(dataVorher.aktiva), ...Object.keys(dataNachher.aktiva)]);
    const allPassivaKeys = new Set([...Object.keys(dataVorher.passiva), ...Object.keys(dataNachher.passiva)]);
    
    // Render AKTIVA (starting with VORHER state)
    const aktivaDiv = document.getElementById('aktivaItems');
    aktivaDiv.innerHTML = '';
    
    for (const key of allAktivaKeys) {
        const valueVorher = dataVorher.aktiva[key] || 0;
        const valueNachher = dataNachher.aktiva[key] || 0;
        
        if (valueVorher === 0 && valueNachher === 0) continue;
        
        const item = document.createElement('div');
        item.className = 'bilanz-item-bar';
        
        const percentageVorher = valueVorher > 0 ? (valueVorher / maxTotal) * 100 : 0;
        const percentageNachher = valueNachher > 0 ? (valueNachher / maxTotal) * 100 : 0;
        
        let statusClass = '';
        if (valueVorher === 0 && valueNachher > 0) {
            statusClass = 'new';
        } else if (valueVorher !== valueNachher) {
            statusClass = 'changed';
        }
        
        item.innerHTML = `
            <div class="bilanz-bar-label">
                <span class="bar-name">${key}</span>
                <span class="bar-value" data-value-vorher="${valueVorher}" data-value-nachher="${valueNachher}">${formatCurrency(valueVorher)}</span>
            </div>
            <div class="bilanz-bar-container">
                <div class="bilanz-bar aktiva-bar ${statusClass}" 
                     style="width: 0%" 
                     data-width-vorher="${percentageVorher}%" 
                     data-width-nachher="${percentageNachher}%"></div>
            </div>
        `;
        aktivaDiv.appendChild(item);
    }
    
    document.getElementById('aktivaTotal').textContent = formatCurrency(aktivaTotalVorher);
    document.getElementById('aktivaTotal').setAttribute('data-total-vorher', aktivaTotalVorher);
    document.getElementById('aktivaTotal').setAttribute('data-total-nachher', aktivaTotalNachher);
    
    // Render PASSIVA (starting with VORHER state)
    const passivaDiv = document.getElementById('passivaItems');
    passivaDiv.innerHTML = '';
    
    for (const key of allPassivaKeys) {
        const valueVorher = dataVorher.passiva[key] || 0;
        const valueNachher = dataNachher.passiva[key] || 0;
        
        if (valueVorher === 0 && valueNachher === 0) continue;
        
        const item = document.createElement('div');
        item.className = 'bilanz-item-bar';
        
        const percentageVorher = valueVorher > 0 ? (valueVorher / maxTotal) * 100 : 0;
        const percentageNachher = valueNachher > 0 ? (valueNachher / maxTotal) * 100 : 0;
        
        let statusClass = '';
        if (valueVorher === 0 && valueNachher > 0) {
            statusClass = 'new';
        } else if (valueVorher !== valueNachher) {
            statusClass = 'changed';
        }
        
        item.innerHTML = `
            <div class="bilanz-bar-label">
                <span class="bar-name">${key}</span>
                <span class="bar-value" data-value-vorher="${valueVorher}" data-value-nachher="${valueNachher}">${formatCurrency(valueVorher)}</span>
            </div>
            <div class="bilanz-bar-container">
                <div class="bilanz-bar passiva-bar ${statusClass}" 
                     style="width: 0%" 
                     data-width-vorher="${percentageVorher}%" 
                     data-width-nachher="${percentageNachher}%"></div>
            </div>
        `;
        passivaDiv.appendChild(item);
    }
    
    document.getElementById('passivaTotal').textContent = formatCurrency(passivaTotalVorher);
    document.getElementById('passivaTotal').setAttribute('data-total-vorher', passivaTotalVorher);
    document.getElementById('passivaTotal').setAttribute('data-total-nachher', passivaTotalNachher);
    
    modal.classList.add('show');
    
    // Step 1: Animate to VORHER state
    setTimeout(() => {
        document.querySelectorAll('.bilanz-bar').forEach(bar => {
            const widthVorher = bar.getAttribute('data-width-vorher');
            bar.style.width = widthVorher;
        });
    }, 100);
    
    // Step 2: Animate to NACHHER state after delay
    setTimeout(() => {
        animateToNachher();
    }, 1800);
}

function animateToNachher() {
    // Animate bars
    document.querySelectorAll('.bilanz-bar').forEach(bar => {
        const widthNachher = bar.getAttribute('data-width-nachher');
        bar.style.transition = 'width 1.5s cubic-bezier(0.4, 0, 0.2, 1)';
        bar.style.width = widthNachher;
    });
    
    // Animate values
    document.querySelectorAll('.bar-value').forEach(valueSpan => {
        const valueVorher = parseFloat(valueSpan.getAttribute('data-value-vorher'));
        const valueNachher = parseFloat(valueSpan.getAttribute('data-value-nachher'));
        animateValue(valueSpan, valueVorher, valueNachher, 1500);
    });
    
    // Animate totals
    const aktivaTotal = document.getElementById('aktivaTotal');
    const passivaTotal = document.getElementById('passivaTotal');
    
    animateValue(
        aktivaTotal, 
        parseFloat(aktivaTotal.getAttribute('data-total-vorher')),
        parseFloat(aktivaTotal.getAttribute('data-total-nachher')),
        1500
    );
    
    animateValue(
        passivaTotal,
        parseFloat(passivaTotal.getAttribute('data-total-vorher')),
        parseFloat(passivaTotal.getAttribute('data-total-nachher')),
        1500
    );
}

function animateValue(element, start, end, duration) {
    const startTime = performance.now();
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function
        const easeProgress = progress < 0.5 
            ? 2 * progress * progress 
            : 1 - Math.pow(-2 * progress + 2, 2) / 2;
        
        const currentValue = start + (end - start) * easeProgress;
        element.textContent = formatCurrency(Math.round(currentValue));
        
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    
    requestAnimationFrame(update);
}

function closeBilanz() {
    document.getElementById('bilanzModal').classList.remove('show');
}

function nextStepFromBilanz() {
    closeBilanz();
    nextStep();
}

// Helper Functions
function formatCurrency(amount) {
    return new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'EUR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(amount);
}

function restart() {
    currentStep = 0;
    correctCount = 0;
    answeredQuestions.clear();
    
    // Reset all sections
    document.querySelectorAll('.story-section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById('section0').classList.add('active');
    
    // Reset all buttons and feedback
    document.querySelectorAll('.btn-answer').forEach(btn => {
        btn.disabled = false;
        btn.classList.remove('correct', 'wrong');
    });
    
    document.querySelectorAll('.feedback').forEach(feedback => {
        feedback.classList.remove('show', 'correct', 'wrong');
    });
    
    document.querySelectorAll('.btn-show-bilanz').forEach(btn => {
        btn.classList.remove('show');
    });
    
    updateProgress();
    updateNavigation();
    window.scrollTo(0, 0);
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('bilanzModal');
    if (event.target === modal) {
        closeBilanz();
    }
}

// Keyboard navigation
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowRight' && !document.getElementById('nextBtn').disabled) {
        nextStep();
    } else if (event.key === 'ArrowLeft' && !document.getElementById('prevBtn').disabled) {
        prevStep();
    } else if (event.key === 'Escape') {
        closeBilanz();
    }
});
