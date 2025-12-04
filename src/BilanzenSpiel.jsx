import React, { useState, useEffect } from 'react';
import { Info, RotateCcw, Eye, Trophy, Target } from 'lucide-react';

const BilanzenSpiel = () => {
  // Alle Begriffe mit ihren Eigenschaften
  const allTerms = [
    {
      id: 1,
      name: "Maschinen und Anlagen",
      correctSide: "aktiva",
      correctCategory: "anlagevermoegen",
      hint: "Langfristig genutzt, Anlagevermögen → Aktiva",
      feedback: "Richtig! Maschinen sind Anlagevermögen, weil sie langfristig genutzt werden."
    },
    {
      id: 2,
      name: "Geschäftsausstattung",
      correctSide: "aktiva",
      correctCategory: "anlagevermoegen",
      hint: "Büromöbel, Computer etc. → langfristig genutzt → Anlagevermögen",
      feedback: "Richtig! Geschäftsausstattung ist Anlagevermögen, da sie mehrere Jahre genutzt wird."
    },
    {
      id: 3,
      name: "Vorräte (Material)",
      correctSide: "aktiva",
      correctCategory: "umlaufvermoegen",
      hint: "Rohstoffe werden verbraucht/verkauft → Umlaufvermögen",
      feedback: "Richtig! Vorräte sind Umlaufvermögen, weil sie für den Verbrauch/Verkauf bestimmt sind."
    },
    {
      id: 4,
      name: "Fertige Erzeugnisse",
      correctSide: "aktiva",
      correctCategory: "umlaufvermoegen",
      hint: "Zum Verkauf bestimmt → kurzfristig → Umlaufvermögen",
      feedback: "Richtig! Fertige Produkte sind Umlaufvermögen, da sie verkauft werden sollen."
    },
    {
      id: 5,
      name: "Forderungen aus Lieferungen und Leistungen",
      correctSide: "aktiva",
      correctCategory: "umlaufvermoegen",
      hint: "Kunden zahlen bald → kurzfristig → Umlaufvermögen",
      feedback: "Richtig! Forderungen sind Umlaufvermögen, da sie kurzfristig in Geld umgewandelt werden."
    },
    {
      id: 6,
      name: "Kassenbestand",
      correctSide: "aktiva",
      correctCategory: "umlaufvermoegen",
      hint: "Bargeld → sofort verfügbar → Umlaufvermögen",
      feedback: "Richtig! Bargeld ist Umlaufvermögen (liquide Mittel)."
    },
    {
      id: 7,
      name: "Bankguthaben",
      correctSide: "aktiva",
      correctCategory: "umlaufvermoegen",
      hint: "Geld auf Bank → sofort verfügbar → Umlaufvermögen",
      feedback: "Richtig! Bankguthaben ist Umlaufvermögen (liquide Mittel)."
    },
    {
      id: 8,
      name: "Stammkapital",
      correctSide: "passiva",
      correctCategory: "eigenkapital",
      hint: "Von Gründern eingebracht → gehört den Eigentümern → Eigenkapital",
      feedback: "Richtig! Stammkapital ist Eigenkapital, das von den Gründern eingebracht wurde."
    },
    {
      id: 9,
      name: "Gewinnrücklage",
      correctSide: "passiva",
      correctCategory: "eigenkapital",
      hint: "Einbehaltene Gewinne → gehört dem Unternehmen → Eigenkapital",
      feedback: "Richtig! Gewinnrücklagen sind Eigenkapital aus nicht ausgeschütteten Gewinnen."
    },
    {
      id: 10,
      name: "Jahresüberschuss",
      correctSide: "passiva",
      correctCategory: "eigenkapital",
      hint: "Gewinn des Jahres → erhöht Eigenkapital",
      feedback: "Richtig! Der Jahresüberschuss erhöht das Eigenkapital."
    },
    {
      id: 11,
      name: "Verbindlichkeiten gegenüber Lieferanten",
      correctSide: "passiva",
      correctCategory: "fremdkapital",
      hint: "Schulden bei Lieferanten → muss zurückgezahlt werden → Fremdkapital",
      feedback: "Richtig! Verbindlichkeiten sind Fremdkapital, das zurückgezahlt werden muss."
    },
    {
      id: 12,
      name: "Verbindlichkeiten gegenüber Kreditinstituten (Bankkredit)",
      correctSide: "passiva",
      correctCategory: "fremdkapital",
      hint: "Kredit von der Bank → Schulden → Fremdkapital",
      feedback: "Richtig! Bankkredite sind Fremdkapital, das mit Zinsen zurückgezahlt werden muss."
    }
  ];

  const [unsortedTerms, setUnsortedTerms] = useState([]);
  const [anlagevermoegenTerms, setAnlagevermoegenTerms] = useState([]);
  const [umlaufvermoegenTerms, setUmlaufvermoegenTerms] = useState([]);
  const [eigenkapitalTerms, setEigenkapitalTerms] = useState([]);
  const [fremdkapitalTerms, setFremdkapitalTerms] = useState([]);
  const [selectedTerm, setSelectedTerm] = useState(null);
  const [feedback, setFeedback] = useState({ show: false, message: '', isCorrect: false, termId: null });
  const [showHint, setShowHint] = useState(null);
  const [score, setScore] = useState(0);
  const [draggedTerm, setDraggedTerm] = useState(null);

  // Initialisierung und Shuffle
  useEffect(() => {
    shuffleTerms();
  }, []);

  const shuffleTerms = () => {
    const shuffled = [...allTerms].sort(() => Math.random() - 0.5);
    setUnsortedTerms(shuffled);
    setAnlagevermoegenTerms([]);
    setUmlaufvermoegenTerms([]);
    setEigenkapitalTerms([]);
    setFremdkapitalTerms([]);
    setSelectedTerm(null);
    setFeedback({ show: false, message: '', isCorrect: false, termId: null });
    setScore(0);
    setShowHint(null);
  };

  const handleTermClick = (term) => {
    if (isTermPlaced(term.id)) {
      return; // Bereits platziert
    }
    setSelectedTerm(term);
  };

  const handleCategoryClick = (category) => {
    if (!selectedTerm) return;

    const isCorrect = selectedTerm.correctCategory === category;
    
    if (isCorrect) {
      // Richtig platziert
      if (category === 'anlagevermoegen') {
        setAnlagevermoegenTerms([...anlagevermoegenTerms, selectedTerm]);
      } else if (category === 'umlaufvermoegen') {
        setUmlaufvermoegenTerms([...umlaufvermoegenTerms, selectedTerm]);
      } else if (category === 'eigenkapital') {
        setEigenkapitalTerms([...eigenkapitalTerms, selectedTerm]);
      } else if (category === 'fremdkapital') {
        setFremdkapitalTerms([...fremdkapitalTerms, selectedTerm]);
      }
      setUnsortedTerms(unsortedTerms.filter(t => t.id !== selectedTerm.id));
      setScore(score + 1);
      setFeedback({
        show: true,
        message: selectedTerm.feedback,
        isCorrect: true,
        termId: selectedTerm.id
      });
    } else {
      // Falsch platziert - detailliertes Feedback
      let wrongMessage = `❌ Fast! ${selectedTerm.name} gehört zu `;
      if (selectedTerm.correctCategory === 'anlagevermoegen') {
        wrongMessage += 'Anlagevermögen (Aktiva).';
      } else if (selectedTerm.correctCategory === 'umlaufvermoegen') {
        wrongMessage += 'Umlaufvermögen (Aktiva).';
      } else if (selectedTerm.correctCategory === 'eigenkapital') {
        wrongMessage += 'Eigenkapital (Passiva).';
      } else if (selectedTerm.correctCategory === 'fremdkapital') {
        wrongMessage += 'Fremdkapital (Passiva).';
      }
      
      setFeedback({
        show: true,
        message: wrongMessage,
        isCorrect: false,
        termId: selectedTerm.id
      });
    }

    setSelectedTerm(null);
    
    // Feedback nach 3 Sekunden ausblenden
    setTimeout(() => {
      setFeedback({ show: false, message: '', isCorrect: false, termId: null });
    }, 3000);
  };

  // Drag & Drop Handler
  const handleDragStart = (e, term) => {
    setDraggedTerm(term);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e, category) => {
    e.preventDefault();
    if (!draggedTerm) return;

    const isCorrect = draggedTerm.correctCategory === category;
    
    if (isCorrect) {
      if (category === 'anlagevermoegen') {
        setAnlagevermoegenTerms([...anlagevermoegenTerms, draggedTerm]);
      } else if (category === 'umlaufvermoegen') {
        setUmlaufvermoegenTerms([...umlaufvermoegenTerms, draggedTerm]);
      } else if (category === 'eigenkapital') {
        setEigenkapitalTerms([...eigenkapitalTerms, draggedTerm]);
      } else if (category === 'fremdkapital') {
        setFremdkapitalTerms([...fremdkapitalTerms, draggedTerm]);
      }
      setUnsortedTerms(unsortedTerms.filter(t => t.id !== draggedTerm.id));
      setScore(score + 1);
      setFeedback({
        show: true,
        message: draggedTerm.feedback,
        isCorrect: true,
        termId: draggedTerm.id
      });
    } else {
      let wrongMessage = `❌ Fast! ${draggedTerm.name} gehört zu `;
      if (draggedTerm.correctCategory === 'anlagevermoegen') {
        wrongMessage += 'Anlagevermögen (Aktiva).';
      } else if (draggedTerm.correctCategory === 'umlaufvermoegen') {
        wrongMessage += 'Umlaufvermögen (Aktiva).';
      } else if (draggedTerm.correctCategory === 'eigenkapital') {
        wrongMessage += 'Eigenkapital (Passiva).';
      } else if (draggedTerm.correctCategory === 'fremdkapital') {
        wrongMessage += 'Fremdkapital (Passiva).';
      }
      
      setFeedback({
        show: true,
        message: wrongMessage,
        isCorrect: false,
        termId: draggedTerm.id
      });
    }

    setDraggedTerm(null);
    
    setTimeout(() => {
      setFeedback({ show: false, message: '', isCorrect: false, termId: null });
    }, 3000);
  };

  const showSolution = () => {
    const anlagevermoegen = allTerms.filter(t => t.correctCategory === 'anlagevermoegen');
    const umlaufvermoegen = allTerms.filter(t => t.correctCategory === 'umlaufvermoegen');
    const eigenkapital = allTerms.filter(t => t.correctCategory === 'eigenkapital');
    const fremdkapital = allTerms.filter(t => t.correctCategory === 'fremdkapital');
    setAnlagevermoegenTerms(anlagevermoegen);
    setUmlaufvermoegenTerms(umlaufvermoegen);
    setEigenkapitalTerms(eigenkapital);
    setFremdkapitalTerms(fremdkapital);
    setUnsortedTerms([]);
    setScore(12);
    setFeedback({
      show: true,
      message: '✅ Lösung angezeigt! Alle Begriffe sind nun richtig zugeordnet.',
      isCorrect: true,
      termId: null
    });
  };

  const getMotivationalText = () => {
    if (score === 0) return "Los geht's! 🎯";
    if (score <= 4) return "Weiter so! 💪";
    if (score <= 8) return "Gut gemacht! 👍";
    if (score <= 11) return "Fast geschafft! 🌟";
    return "Perfekt! 🎉";
  };

  const isTermPlaced = (termId) => {
    return anlagevermoegenTerms.find(t => t.id === termId) || 
           umlaufvermoegenTerms.find(t => t.id === termId) ||
           eigenkapitalTerms.find(t => t.id === termId) ||
           fremdkapitalTerms.find(t => t.id === termId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Target className="w-10 h-10 text-blue-600" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
              BILANZ-SORTIERSPIEL
            </h1>
          </div>
          
          {/* Score und Motivation */}
          <div className="flex items-center justify-center gap-6 text-xl">
            <div className="flex items-center gap-2">
              <Trophy className="w-6 h-6 text-yellow-500" />
              <span className="font-bold text-gray-700">
                Punkte: <span className="text-blue-600">{score}/12</span>
              </span>
            </div>
            <span className="text-2xl font-bold text-green-600">
              {getMotivationalText()}
            </span>
          </div>

          {/* Fortschrittsbalken */}
          <div className="mt-4 w-full bg-gray-200 rounded-full h-4">
            <div 
              className="bg-gradient-to-r from-blue-500 to-green-500 h-4 rounded-full transition-all duration-500"
              style={{ width: `${(score / 12) * 100}%` }}
            />
          </div>
        </div>

        {/* Feedback Box */}
        {feedback.show && (
          <div className={`mb-6 p-4 rounded-lg shadow-lg text-lg font-semibold text-center transition-all ${
            feedback.isCorrect 
              ? 'bg-green-100 text-green-800 border-2 border-green-400' 
              : 'bg-red-100 text-red-800 border-2 border-red-400'
          }`}>
            {feedback.message}
          </div>
        )}

        {/* Erfolgs-Nachricht */}
        {score === 12 && unsortedTerms.length === 0 && (
          <div className="mb-6 p-6 bg-gradient-to-r from-yellow-100 to-green-100 rounded-lg shadow-lg text-center border-4 border-yellow-400">
            <div className="text-5xl mb-2">🎉</div>
            <div className="text-3xl font-bold text-green-700">
              Perfekt! Alle Begriffe richtig zugeordnet!
            </div>
          </div>
        )}

        {/* Zu sortierende Begriffe */}
        {unsortedTerms.length > 0 && (
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">
              Zu sortierende Begriffe:
            </h2>
            <div className="flex flex-wrap gap-3">
              {unsortedTerms.map(term => (
                <div key={term.id} className="relative">
                  <button
                    draggable
                    onDragStart={(e) => handleDragStart(e, term)}
                    onClick={() => handleTermClick(term)}
                    className={`px-4 py-3 rounded-lg text-lg font-medium transition-all cursor-move ${
                      selectedTerm?.id === term.id
                        ? 'bg-blue-500 text-white scale-105 shadow-lg'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                    }`}
                  >
                    {term.name}
                  </button>
                  <button
                    onClick={() => setShowHint(showHint === term.id ? null : term.id)}
                    className="absolute -top-2 -right-2 bg-blue-500 text-white rounded-full p-1 hover:bg-blue-600"
                  >
                    <Info className="w-4 h-4" />
                  </button>
                  {showHint === term.id && (
                    <div className="absolute z-10 top-full mt-2 left-0 bg-blue-50 border-2 border-blue-300 rounded-lg p-3 text-sm w-64 shadow-xl">
                      💡 {term.hint}
                    </div>
                  )}
                </div>
              ))}
            </div>
            {selectedTerm && (
              <div className="mt-4 p-3 bg-blue-50 border-2 border-blue-300 rounded-lg text-center text-lg">
                <strong>{selectedTerm.name}</strong> ausgewählt. Klicke auf die richtige Kategorie!
              </div>
            )}
          </div>
        )}

        {/* Bilanz mit 4 Kategorien */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* AKTIVA Seite */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg shadow-xl p-4 border-4 border-blue-300">
            <h2 className="text-4xl font-bold text-blue-800 text-center mb-2">
              AKTIVA
            </h2>
            <p className="text-lg text-blue-600 text-center mb-4">(Vermögen / Mittelverwendung)</p>
            
            {/* Anlagevermögen */}
            <div
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, 'anlagevermoegen')}
              onClick={() => handleCategoryClick('anlagevermoegen')}
              className={`bg-blue-100 rounded-lg p-4 mb-4 border-3 transition-all min-h-[250px] ${
                selectedTerm ? 'cursor-pointer hover:border-blue-600 hover:shadow-lg' : 'border-blue-400'
              }`}
            >
              <h3 className="text-2xl font-bold text-blue-900 mb-3">Anlagevermögen</h3>
              <p className="text-sm text-blue-700 mb-3 italic">(langfristig genutzt)</p>
              
              {anlagevermoegenTerms.length === 0 ? (
                <div className="border-3 border-dashed border-blue-400 rounded-lg p-4 text-center text-blue-600 text-base h-32 flex items-center justify-center">
                  Hier ablegen
                </div>
              ) : (
                <div className="space-y-2">
                  {anlagevermoegenTerms.map(term => (
                    <div
                      key={term.id}
                      className="bg-green-100 border-2 border-green-500 rounded-lg p-3 text-base font-medium text-green-800 shadow"
                    >
                      ✅ {term.name}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Umlaufvermögen */}
            <div
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, 'umlaufvermoegen')}
              onClick={() => handleCategoryClick('umlaufvermoegen')}
              className={`bg-blue-100 rounded-lg p-4 border-3 transition-all min-h-[250px] ${
                selectedTerm ? 'cursor-pointer hover:border-blue-600 hover:shadow-lg' : 'border-blue-400'
              }`}
            >
              <h3 className="text-2xl font-bold text-blue-900 mb-3">Umlaufvermögen</h3>
              <p className="text-sm text-blue-700 mb-3 italic">(kurzfristig, wird verbraucht/verkauft)</p>
              
              {umlaufvermoegenTerms.length === 0 ? (
                <div className="border-3 border-dashed border-blue-400 rounded-lg p-4 text-center text-blue-600 text-base h-32 flex items-center justify-center">
                  Hier ablegen
                </div>
              ) : (
                <div className="space-y-2">
                  {umlaufvermoegenTerms.map(term => (
                    <div
                      key={term.id}
                      className="bg-green-100 border-2 border-green-500 rounded-lg p-3 text-base font-medium text-green-800 shadow"
                    >
                      ✅ {term.name}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* PASSIVA Seite */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg shadow-xl p-4 border-4 border-green-300">
            <h2 className="text-4xl font-bold text-green-800 text-center mb-2">
              PASSIVA
            </h2>
            <p className="text-lg text-green-600 text-center mb-4">(Kapital / Mittelherkunft)</p>
            
            {/* Eigenkapital */}
            <div
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, 'eigenkapital')}
              onClick={() => handleCategoryClick('eigenkapital')}
              className={`bg-green-100 rounded-lg p-4 mb-4 border-3 transition-all min-h-[250px] ${
                selectedTerm ? 'cursor-pointer hover:border-green-600 hover:shadow-lg' : 'border-green-400'
              }`}
            >
              <h3 className="text-2xl font-bold text-green-900 mb-3">Eigenkapital</h3>
              <p className="text-sm text-green-700 mb-3 italic">(gehört den Eigentümern)</p>
              
              {eigenkapitalTerms.length === 0 ? (
                <div className="border-3 border-dashed border-green-400 rounded-lg p-4 text-center text-green-600 text-base h-32 flex items-center justify-center">
                  Hier ablegen
                </div>
              ) : (
                <div className="space-y-2">
                  {eigenkapitalTerms.map(term => (
                    <div
                      key={term.id}
                      className="bg-green-100 border-2 border-green-500 rounded-lg p-3 text-base font-medium text-green-800 shadow"
                    >
                      ✅ {term.name}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Fremdkapital */}
            <div
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, 'fremdkapital')}
              onClick={() => handleCategoryClick('fremdkapital')}
              className={`bg-green-100 rounded-lg p-4 border-3 transition-all min-h-[250px] ${
                selectedTerm ? 'cursor-pointer hover:border-green-600 hover:shadow-lg' : 'border-green-400'
              }`}
            >
              <h3 className="text-2xl font-bold text-green-900 mb-3">Fremdkapital</h3>
              <p className="text-sm text-green-700 mb-3 italic">(muss zurückgezahlt werden)</p>
              
              {fremdkapitalTerms.length === 0 ? (
                <div className="border-3 border-dashed border-green-400 rounded-lg p-4 text-center text-green-600 text-base h-32 flex items-center justify-center">
                  Hier ablegen
                </div>
              ) : (
                <div className="space-y-2">
                  {fremdkapitalTerms.map(term => (
                    <div
                      key={term.id}
                      className="bg-green-100 border-2 border-green-500 rounded-lg p-3 text-base font-medium text-green-800 shadow"
                    >
                      ✅ {term.name}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <button
            onClick={shuffleTerms}
            className="flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xl font-bold shadow-lg transition-all hover:scale-105"
          >
            <RotateCcw className="w-6 h-6" />
            Neue Runde
          </button>
          <button
            onClick={showSolution}
            className="flex items-center gap-2 px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-lg text-xl font-bold shadow-lg transition-all hover:scale-105"
          >
            <Eye className="w-6 h-6" />
            Lösung anzeigen
          </button>
        </div>

        {/* Anleitung */}
        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-3">📖 Anleitung</h3>
          <ul className="space-y-2 text-lg text-gray-700">
            <li>🖱️ <strong>Klick-Methode:</strong> Begriff anklicken, dann auf die richtige Kategorie klicken</li>
            <li>🎯 <strong>Drag & Drop:</strong> Begriff ziehen und in die richtige Kategorie ablegen</li>
            <li>💡 <strong>Hilfe:</strong> Auf das <Info className="inline w-5 h-5" />-Symbol klicken für Hinweise</li>
            <li>✅ Sofortiges Feedback nach jeder Zuordnung</li>
          </ul>
          <div className="mt-4 grid md:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-3 rounded-lg border-2 border-blue-300">
              <h4 className="font-bold text-blue-800 mb-2">AKTIVA (Vermögen)</h4>
              <p className="text-sm text-blue-700"><strong>Anlagevermögen:</strong> Langfristig genutzt (Maschinen, Gebäude)</p>
              <p className="text-sm text-blue-700"><strong>Umlaufvermögen:</strong> Kurzfristig (Vorräte, Geld, Forderungen)</p>
            </div>
            <div className="bg-green-50 p-3 rounded-lg border-2 border-green-300">
              <h4 className="font-bold text-green-800 mb-2">PASSIVA (Kapital)</h4>
              <p className="text-sm text-green-700"><strong>Eigenkapital:</strong> Gehört den Eigentümern (Stammkapital, Gewinne)</p>
              <p className="text-sm text-green-700"><strong>Fremdkapital:</strong> Schulden (Kredite, Verbindlichkeiten)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BilanzenSpiel;
