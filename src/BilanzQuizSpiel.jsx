import React, { useState, useEffect } from 'react';
import { HelpCircle, CheckCircle, XCircle, RotateCcw, Trophy, Brain, ArrowRight } from 'lucide-react';

const BilanzQuizSpiel = () => {
  // Alle Quiz-Fragen mit Multiple-Choice-Antworten
  const allQuestions = [
    {
      id: 1,
      question: "Wie bekommt ein Unternehmen Geld ins Eigenkapital?",
      category: "Eigenkapital",
      options: [
        { text: "Die Gründer zahlen Geld ein (Stammkapital)", correct: true, explanation: "✅ Richtig! Wenn Gründer Geld einzahlen, erhöht sich das Stammkapital (Eigenkapital) und das Bankguthaben (Aktiva)." },
        { text: "Das Unternehmen nimmt einen Bankkredit auf", correct: false, explanation: "❌ Nein! Ein Bankkredit ist Fremdkapital, nicht Eigenkapital. Das geliehene Geld muss zurückgezahlt werden." },
        { text: "Das Unternehmen kauft eine Maschine", correct: false, explanation: "❌ Nein! Der Kauf einer Maschine verändert nur die Aktivseite (Geld wird zu Maschine), aber nicht das Eigenkapital." },
        { text: "Das Unternehmen macht Gewinn", correct: true, explanation: "✅ Richtig! Gewinne (Jahresüberschuss) erhöhen das Eigenkapital. Erfolgreiche Geschäfte steigern das Eigenkapital." }
      ]
    },
    {
      id: 2,
      question: "Wie entsteht Fremdkapital in einem Unternehmen?",
      category: "Fremdkapital",
      options: [
        { text: "Das Unternehmen nimmt einen Kredit bei der Bank auf", correct: true, explanation: "✅ Richtig! Bankkredite sind Fremdkapital (Verbindlichkeiten). Das Geld muss mit Zinsen zurückgezahlt werden." },
        { text: "Die Gründer investieren ihr eigenes Geld", correct: false, explanation: "❌ Nein! Geld von Gründern ist Eigenkapital (Stammkapital), nicht Fremdkapital." },
        { text: "Das Unternehmen kauft Waren auf Rechnung (Lieferantenkredit)", correct: true, explanation: "✅ Richtig! Wenn wir Waren kaufen und später bezahlen, entstehen Verbindlichkeiten gegenüber Lieferanten (Fremdkapital)." },
        { text: "Das Unternehmen verkauft Produkte", correct: false, explanation: "❌ Nein! Beim Verkauf erhöhen wir unser Vermögen (z.B. Forderungen oder Kasse), aber nicht das Fremdkapital." }
      ]
    },
    {
      id: 3,
      question: "Wie kommen Vorräte (Material) ins Unternehmen?",
      category: "Vorräte",
      options: [
        { text: "Wir kaufen Rohstoffe und Materialien von Lieferanten", correct: true, explanation: "✅ Richtig! Eingekaufte Materialien werden als Vorräte auf der Aktivseite gebucht. Sie sind unser Vermögen." },
        { text: "Wir nehmen einen Kredit auf", correct: false, explanation: "❌ Nein! Ein Kredit gibt uns Geld, aber keine Vorräte. Mit dem Geld können wir dann Vorräte kaufen." },
        { text: "Kunden bestellen unsere Produkte", correct: false, explanation: "❌ Nein! Kundenbestellungen schaffen Forderungen, aber keine Vorräte. Vorräte sind die Materialien, die wir selbst haben." },
        { text: "Wir produzieren selbst Materialien", correct: true, explanation: "✅ Richtig! Wenn wir selbst produzieren, entstehen fertige oder halbfertige Erzeugnisse, die ebenfalls Vorräte sind." }
      ]
    },
    {
      id: 4,
      question: "Wie entstehen 'Fertige Erzeugnisse' in der Bilanz?",
      category: "Fertige Erzeugnisse",
      options: [
        { text: "Wir produzieren Produkte aus Rohstoffen/Material", correct: true, explanation: "✅ Richtig! Die Produktion verwandelt Vorräte (Material) in fertige Erzeugnisse. Beide sind Vermögen (Aktiva)." },
        { text: "Wir verkaufen Produkte an Kunden", correct: false, explanation: "❌ Nein! Beim Verkauf verschwinden die fertigen Erzeugnisse aus der Bilanz. Dafür bekommen wir Geld oder Forderungen." },
        { text: "Wir kaufen fertige Erzeugnisse von anderen", correct: true, explanation: "✅ Richtig! Wenn wir fertige Produkte zum Weiterverkauf kaufen, sind das auch fertige Erzeugnisse (Handelswaren)." },
        { text: "Die Bank gibt uns einen Kredit", correct: false, explanation: "❌ Nein! Ein Kredit gibt uns Geld, aber keine fertigen Erzeugnisse." }
      ]
    },
    {
      id: 5,
      question: "Wie entstehen 'Forderungen aus Lieferungen und Leistungen'?",
      category: "Forderungen",
      options: [
        { text: "Wir verkaufen Waren auf Rechnung (Kunden zahlen später)", correct: true, explanation: "✅ Richtig! Wenn Kunden jetzt kaufen und später zahlen, haben wir eine Forderung. Sie schulden uns Geld." },
        { text: "Wir kaufen Waren auf Rechnung", correct: false, explanation: "❌ Nein! Wenn WIR auf Rechnung kaufen, entsteht eine Verbindlichkeit (Passiva), keine Forderung." },
        { text: "Wir zahlen Geld bar", correct: false, explanation: "❌ Nein! Bei Barzahlung entsteht keine Forderung, sondern das Geld wechselt sofort den Besitzer." },
        { text: "Kunden bezahlen uns sofort bar", correct: false, explanation: "❌ Nein! Bei sofortiger Bezahlung entsteht keine Forderung. Das Geld ist direkt in der Kasse." }
      ]
    },
    {
      id: 6,
      question: "Wie erhöht sich der Kassenbestand?",
      category: "Kassenbestand",
      options: [
        { text: "Kunden bezahlen bar", correct: true, explanation: "✅ Richtig! Bareinzahlungen von Kunden erhöhen den Kassenbestand (liquide Mittel)." },
        { text: "Wir heben Geld vom Bankkonto ab", correct: true, explanation: "✅ Richtig! Geld von der Bank in die Kasse holen erhöht den Kassenbestand (Bankguthaben sinkt, Kasse steigt)." },
        { text: "Wir kaufen eine Maschine bar", correct: false, explanation: "❌ Nein! Beim Barkauf einer Maschine sinkt der Kassenbestand, weil wir Bargeld ausgeben." },
        { text: "Wir nehmen einen Kredit auf", correct: false, explanation: "❌ Nein! Ein Kredit geht normalerweise aufs Bankkonto, nicht direkt in die Kasse. Die Kasse erhöht sich nur, wenn wir das Geld von der Bank abheben." }
      ]
    },
    {
      id: 7,
      question: "Wie erhöht sich das Bankguthaben?",
      category: "Bankguthaben",
      options: [
        { text: "Wir zahlen Bargeld auf das Bankkonto ein", correct: true, explanation: "✅ Richtig! Einzahlungen von der Kasse auf die Bank erhöhen das Bankguthaben." },
        { text: "Kunden überweisen uns Geld", correct: true, explanation: "✅ Richtig! Überweisungen von Kunden (Zahlung von Forderungen) erhöhen das Bankguthaben." },
        { text: "Wir überweisen Geld an Lieferanten", correct: false, explanation: "❌ Nein! Wenn wir Geld überweisen, sinkt unser Bankguthaben." },
        { text: "Wir nehmen einen Bankkredit auf", correct: true, explanation: "✅ Richtig! Kredite werden meist aufs Bankkonto überwiesen und erhöhen das Bankguthaben (aber auch die Verbindlichkeiten!)." }
      ]
    },
    {
      id: 8,
      question: "Wie kommen 'Maschinen und Anlagen' ins Unternehmen?",
      category: "Maschinen",
      options: [
        { text: "Wir kaufen sie und bezahlen bar oder per Überweisung", correct: true, explanation: "✅ Richtig! Beim Kauf wird aus Geld (Kasse/Bank) eine Maschine. Beides ist Vermögen (Aktiva), nur die Form ändert sich." },
        { text: "Wir kaufen sie auf Kredit (Lieferantenkredit)", correct: true, explanation: "✅ Richtig! Kauf auf Kredit erhöht sowohl Maschinen (Aktiva) als auch Verbindlichkeiten (Passiva)." },
        { text: "Wir verkaufen Produkte", correct: false, explanation: "❌ Nein! Beim Produktverkauf bekommen wir Geld, aber keine Maschinen." },
        { text: "Die Gründer bringen Maschinen als Sacheinlage ein", correct: true, explanation: "✅ Richtig! Sacheinlagen erhöhen sowohl das Anlagevermögen (Maschinen) als auch das Eigenkapital." }
      ]
    },
    {
      id: 9,
      question: "Wie entsteht 'Geschäftsausstattung' in der Bilanz?",
      category: "Geschäftsausstattung",
      options: [
        { text: "Wir kaufen Büromöbel, Computer, Fahrzeuge etc.", correct: true, explanation: "✅ Richtig! Gekaufte Geschäftsausstattung ist Anlagevermögen und steht auf der Aktivseite." },
        { text: "Wir zahlen Miete für das Büro", correct: false, explanation: "❌ Nein! Miete ist ein Aufwand, kein Vermögensgegenstand. Gemietete Dinge gehören nicht uns und stehen nicht in der Bilanz." },
        { text: "Wir leasen ein Fahrzeug", correct: false, explanation: "❌ Komplex! Bei normalem Leasing gehört das Fahrzeug rechtlich dem Leasinggeber und steht nicht in unserer Bilanz. Nur bei bestimmten Leasingformen (z.B. Finanzierungsleasing) wird es bilanziert." },
        { text: "Wir kaufen Geschäftsausstattung auf Kredit", correct: true, explanation: "✅ Richtig! Auch bei Kauf auf Kredit (Ratenkauf) gehört die Ausstattung uns. In der Bilanz: Aktiva (Geschäftsausstattung) + Passiva (Verbindlichkeiten) steigen beide." }
      ]
    },
    {
      id: 10,
      question: "Wie entsteht eine 'Gewinnrücklage'?",
      category: "Gewinnrücklage",
      options: [
        { text: "Das Unternehmen macht Gewinn und behält ihn im Unternehmen (statt auszuzahlen)", correct: true, explanation: "✅ Richtig! Nicht ausgeschüttete Gewinne werden als Gewinnrücklage thesauriert und erhöhen das Eigenkapital." },
        { text: "Die Gründer zahlen mehr Geld ein", correct: false, explanation: "❌ Nein! Einzahlungen der Gründer erhöhen das Stammkapital, nicht die Gewinnrücklage." },
        { text: "Das Unternehmen nimmt einen Kredit auf", correct: false, explanation: "❌ Nein! Kredite sind Fremdkapital, keine Gewinnrücklagen (Eigenkapital)." },
        { text: "Das Unternehmen verkauft Maschinen", correct: false, explanation: "❌ Nein! Der Verkauf von Maschinen kann Gewinn bringen, aber erst dieser Gewinn wird zur Rücklage." }
      ]
    },
    {
      id: 11,
      question: "Wie entsteht ein 'Jahresüberschuss' (Gewinn)?",
      category: "Jahresüberschuss",
      options: [
        { text: "Die Erträge sind höher als die Aufwendungen", correct: true, explanation: "✅ Richtig! Gewinn = Erträge - Aufwendungen. Wenn wir mehr einnehmen als ausgeben, entsteht ein Jahresüberschuss." },
        { text: "Wir verkaufen Produkte teurer als sie kosten", correct: true, explanation: "✅ Richtig! Die Differenz zwischen Verkaufspreis und Kosten ist der Gewinn (vereinfacht gesagt)." },
        { text: "Wir nehmen einen Kredit auf", correct: false, explanation: "❌ Nein! Ein Kredit ist kein Gewinn. Wir müssen das Geld zurückzahlen (mit Zinsen)." },
        { text: "Die Gründer investieren Geld", correct: false, explanation: "❌ Nein! Einlagen der Gründer sind Stammkapital, kein Gewinn." }
      ]
    },
    {
      id: 12,
      question: "Wie entstehen 'Verbindlichkeiten gegenüber Lieferanten'?",
      category: "Verbindlichkeiten Lieferanten",
      options: [
        { text: "Wir kaufen Waren/Material auf Rechnung und zahlen später", correct: true, explanation: "✅ Richtig! Lieferantenkredite sind Verbindlichkeiten. Wir schulden den Lieferanten Geld." },
        { text: "Wir verkaufen Waren auf Rechnung", correct: false, explanation: "❌ Nein! Wenn wir verkaufen, entstehen Forderungen (Kunden schulden uns), keine Verbindlichkeiten." },
        { text: "Wir zahlen Lieferanten sofort bar", correct: false, explanation: "❌ Nein! Bei sofortiger Zahlung entsteht keine Verbindlichkeit. Die Schuld ist direkt beglichen." },
        { text: "Lieferanten liefern Waren, die wir noch nicht bestellt haben", correct: false, explanation: "❌ Nein! Ohne Bestellung keine Geschäftsbeziehung. Wir schulden nur, was wir bestellt und erhalten haben." }
      ]
    },
    {
      id: 13,
      question: "Wie entstehen 'Verbindlichkeiten gegenüber Kreditinstituten'?",
      category: "Verbindlichkeiten Bank",
      options: [
        { text: "Wir nehmen einen Kredit bei der Bank auf", correct: true, explanation: "✅ Richtig! Bankkredite sind Verbindlichkeiten gegenüber Kreditinstituten. Das ist Fremdkapital." },
        { text: "Wir überziehen unser Bankkonto (Kontokorrentkredit)", correct: true, explanation: "✅ Richtig! Ein überzogenes Konto ist auch ein Kredit und damit eine Verbindlichkeit gegenüber der Bank." },
        { text: "Wir zahlen Geld auf unser Bankkonto ein", correct: false, explanation: "❌ Nein! Einzahlungen erhöhen unser Guthaben, sie schaffen keine Verbindlichkeiten." },
        { text: "Die Bank zahlt uns Zinsen", correct: false, explanation: "❌ Nein! Wenn die Bank uns Zinsen zahlt, haben wir Guthaben bei ihr, keine Schulden." }
      ]
    },
    {
      id: 14,
      question: "Was passiert, wenn ein Kunde seine Rechnung bezahlt?",
      category: "Geschäftsvorfälle",
      options: [
        { text: "Forderungen sinken, Bankguthaben/Kasse steigt", correct: true, explanation: "✅ Richtig! Die Forderung wird in Geld umgewandelt. Beides ist Aktiva, nur die Form ändert sich." },
        { text: "Eigenkapital steigt", correct: false, explanation: "❌ Nein! Es ändert sich nur die Form des Vermögens (Forderung → Geld). Das Eigenkapital bleibt gleich." },
        { text: "Verbindlichkeiten sinken", correct: false, explanation: "❌ Nein! Wenn der Kunde zahlt, betrifft das unsere Forderungen (Aktiva), nicht unsere Verbindlichkeiten (Passiva)." },
        { text: "Vorräte sinken", correct: false, explanation: "❌ Nein! Die Vorräte sind schon beim Verkauf gesunken, nicht erst bei der Zahlung." }
      ]
    },
    {
      id: 15,
      question: "Was passiert, wenn wir eine Rechnung vom Lieferanten bezahlen?",
      category: "Geschäftsvorfälle",
      options: [
        { text: "Verbindlichkeiten sinken, Bankguthaben/Kasse sinkt", correct: true, explanation: "✅ Richtig! Wir tilgen unsere Schuld mit Geld. Beide Seiten der Bilanz sinken um den gleichen Betrag." },
        { text: "Eigenkapital sinkt", correct: false, explanation: "❌ Nein! Beim Bezahlen einer bereits bestehenden Verbindlichkeit ändert sich das Eigenkapital nicht." },
        { text: "Forderungen steigen", correct: false, explanation: "❌ Nein! Wir zahlen, also bekommen wir keine Forderung. Forderungen haben wir, wenn andere uns schulden." },
        { text: "Vorräte steigen", correct: false, explanation: "❌ Nein! Die Vorräte sind schon beim Wareneingang gestiegen, nicht erst bei der Zahlung." }
      ]
    }
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [quizFinished, setQuizFinished] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);

  useEffect(() => {
    startNewQuiz();
  }, []);

  const startNewQuiz = () => {
    const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
    setShuffledQuestions(shuffled);
    setCurrentQuestionIndex(0);
    setSelectedAnswers([]);
    setShowFeedback(false);
    setScore(0);
    setAnsweredQuestions([]);
    setQuizFinished(false);
  };

  const currentQuestion = shuffledQuestions[currentQuestionIndex];

  const handleAnswerSelect = (optionIndex) => {
    if (showFeedback) return; // Keine Änderung nach Bestätigung
    
    if (selectedAnswers.includes(optionIndex)) {
      setSelectedAnswers(selectedAnswers.filter(i => i !== optionIndex));
    } else {
      setSelectedAnswers([...selectedAnswers, optionIndex]);
    }
  };

  const handleSubmit = () => {
    if (selectedAnswers.length === 0) return;

    const correctAnswers = currentQuestion.options
      .map((opt, idx) => opt.correct ? idx : null)
      .filter(idx => idx !== null);

    const allCorrectSelected = correctAnswers.every(idx => selectedAnswers.includes(idx));
    const noIncorrectSelected = selectedAnswers.every(idx => correctAnswers.includes(idx));
    const isFullyCorrect = allCorrectSelected && noIncorrectSelected;

    if (isFullyCorrect) {
      setScore(score + 1);
    }

    setAnsweredQuestions([...answeredQuestions, {
      question: currentQuestion,
      selectedAnswers: selectedAnswers,
      isCorrect: isFullyCorrect
    }]);

    setShowFeedback(true);
  };

  const handleNext = () => {
    if (currentQuestionIndex < shuffledQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswers([]);
      setShowFeedback(false);
    } else {
      setQuizFinished(true);
    }
  };

  const getProgressPercentage = () => {
    return ((currentQuestionIndex + 1) / shuffledQuestions.length) * 100;
  };

  const getFinalMessage = () => {
    const percentage = (score / shuffledQuestions.length) * 100;
    if (percentage === 100) return "🎉 Perfekt! Du bist ein Bilanz-Profi!";
    if (percentage >= 80) return "🌟 Sehr gut! Du verstehst die Bilanzlogik!";
    if (percentage >= 60) return "👍 Gut gemacht! Du bist auf dem richtigen Weg!";
    if (percentage >= 40) return "💪 Weiter üben! Du machst Fortschritte!";
    return "📚 Noch etwas üben! Die Bilanz ist komplex, aber du schaffst das!";
  };

  if (shuffledQuestions.length === 0) {
    return <div className="flex items-center justify-center min-h-screen">Lädt...</div>;
  }

  if (quizFinished) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-4 md:p-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-2xl p-8">
            <div className="text-center mb-8">
              <Trophy className="w-20 h-20 text-yellow-500 mx-auto mb-4" />
              <h1 className="text-4xl font-bold text-gray-800 mb-4">Quiz beendet!</h1>
              <div className="text-6xl font-bold text-blue-600 mb-4">
                {score}/{shuffledQuestions.length}
              </div>
              <p className="text-2xl text-gray-700 font-semibold">
                {getFinalMessage()}
              </p>
            </div>

            {/* Zusammenfassung */}
            <div className="space-y-4 mb-8">
              <h2 className="text-2xl font-bold text-gray-800">Deine Antworten:</h2>
              {answeredQuestions.map((item, idx) => (
                <div key={idx} className={`p-4 rounded-lg border-2 ${
                  item.isCorrect ? 'bg-green-50 border-green-400' : 'bg-red-50 border-red-400'
                }`}>
                  <div className="flex items-start gap-2">
                    {item.isCorrect ? (
                      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    ) : (
                      <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                    )}
                    <div>
                      <p className="font-semibold text-gray-800">{item.question.question}</p>
                      <p className={`text-sm ${item.isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                        {item.isCorrect ? 'Richtig beantwortet!' : 'Nicht vollständig richtig'}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={startNewQuiz}
              className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xl font-bold shadow-lg transition-all hover:scale-105"
            >
              <RotateCcw className="w-6 h-6" />
              Neues Quiz starten
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Brain className="w-10 h-10 text-purple-600" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
              BILANZ-QUIZ
            </h1>
          </div>
          
          <div className="flex items-center justify-between text-lg mb-3">
            <div className="flex items-center gap-2">
              <Trophy className="w-6 h-6 text-yellow-500" />
              <span className="font-bold text-gray-700">
                Punkte: <span className="text-purple-600">{score}/{shuffledQuestions.length}</span>
              </span>
            </div>
            <span className="font-semibold text-gray-600">
              Frage {currentQuestionIndex + 1}/{shuffledQuestions.length}
            </span>
          </div>

          {/* Fortschrittsbalken */}
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-purple-500 to-blue-500 h-3 rounded-full transition-all duration-500"
              style={{ width: `${getProgressPercentage()}%` }}
            />
          </div>
        </div>

        {/* Frage Card */}
        <div className="bg-white rounded-lg shadow-xl p-8 mb-6">
          {/* Kategorie Badge */}
          <div className="inline-block bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            {currentQuestion.category}
          </div>

          {/* Frage */}
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            {currentQuestion.question}
          </h2>

          {/* Antwortoptionen */}
          <div className="space-y-4 mb-8">
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedAnswers.includes(index);
              const isCorrect = option.correct;
              const showCorrectness = showFeedback;

              let className = "w-full p-5 rounded-lg border-3 text-left text-lg font-medium transition-all ";
              
              if (!showFeedback) {
                className += isSelected 
                  ? "bg-blue-100 border-blue-500 border-3 scale-105 shadow-lg" 
                  : "bg-gray-50 border-gray-300 hover:bg-gray-100 hover:border-gray-400";
              } else {
                if (isCorrect) {
                  className += "bg-green-100 border-green-500 border-3";
                } else if (isSelected && !isCorrect) {
                  className += "bg-red-100 border-red-500 border-3";
                } else {
                  className += "bg-gray-50 border-gray-300";
                }
              }

              return (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showFeedback}
                  className={className}
                >
                  <div className="flex items-start gap-3">
                    <div className={`flex-shrink-0 w-6 h-6 rounded border-2 mt-1 ${
                      isSelected ? 'bg-blue-500 border-blue-500' : 'bg-white border-gray-400'
                    }`}>
                      {isSelected && <CheckCircle className="w-5 h-5 text-white" />}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <span className="text-gray-800">{option.text}</span>
                        {showFeedback && (
                          <>
                            {isCorrect && (
                              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                            )}
                            {isSelected && !isCorrect && (
                              <XCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                            )}
                          </>
                        )}
                      </div>
                      {showFeedback && (isCorrect || isSelected) && (
                        <p className={`mt-2 text-base ${
                          isCorrect ? 'text-green-700' : 'text-red-700'
                        }`}>
                          {option.explanation}
                        </p>
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Hinweis */}
          {!showFeedback && (
            <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-4 mb-6">
              <div className="flex items-start gap-2">
                <HelpCircle className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <p className="text-blue-800 font-medium">
                  Tipp: Manche Fragen haben mehrere richtige Antworten! Wähle alle zutreffenden aus.
                </p>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-4">
            {!showFeedback ? (
              <button
                onClick={handleSubmit}
                disabled={selectedAnswers.length === 0}
                className={`flex-1 px-8 py-4 rounded-lg text-xl font-bold shadow-lg transition-all ${
                  selectedAnswers.length === 0
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-green-600 hover:bg-green-700 text-white hover:scale-105'
                }`}
              >
                Antwort prüfen
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="flex-1 flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xl font-bold shadow-lg transition-all hover:scale-105"
              >
                {currentQuestionIndex < shuffledQuestions.length - 1 ? (
                  <>
                    Nächste Frage
                    <ArrowRight className="w-6 h-6" />
                  </>
                ) : (
                  'Ergebnis anzeigen'
                )}
              </button>
            )}
          </div>
        </div>

        {/* Info Box */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-3">💡 Lernziel</h3>
          <p className="text-gray-700 text-lg">
            Verstehe, wie verschiedene Geschäftsvorfälle die Bilanz beeinflussen. 
            Lerne, woher Vermögen (Aktiva) und Kapital (Passiva) kommen und wie sie sich verändern.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BilanzQuizSpiel;
