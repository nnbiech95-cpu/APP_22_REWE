import React, { useState } from 'react';
import BilanzenSpiel from './BilanzenSpiel';
import BilanzQuizSpiel from './BilanzQuizSpiel';
import ReichGeldSpiel from './ReichGeldSpiel';
import BilanzVeraenderungSpiel from './BilanzVeraenderungSpiel';
import { Target, Brain, Home, TrendingUp, BarChart3 } from 'lucide-react';

const App = () => {
  const [currentGame, setCurrentGame] = useState(null);

  if (currentGame === 'sort') {
    return (
      <div>
        <button
          onClick={() => setCurrentGame(null)}
          className="fixed top-4 left-4 z-50 flex items-center gap-2 px-4 py-2 bg-white hover:bg-gray-100 text-gray-800 rounded-lg shadow-lg font-semibold transition-all"
        >
          <Home className="w-5 h-5" />
          Zurück zur Auswahl
        </button>
        <BilanzenSpiel />
      </div>
    );
  }

  if (currentGame === 'quiz') {
    return (
      <div>
        <button
          onClick={() => setCurrentGame(null)}
          className="fixed top-4 left-4 z-50 flex items-center gap-2 px-4 py-2 bg-white hover:bg-gray-100 text-gray-800 rounded-lg shadow-lg font-semibold transition-all"
        >
          <Home className="w-5 h-5" />
          Zurück zur Auswahl
        </button>
        <BilanzQuizSpiel />
      </div>
    );
  }

  if (currentGame === 'reich') {
    return (
      <div>
        <button
          onClick={() => setCurrentGame(null)}
          className="fixed top-4 left-4 z-50 flex items-center gap-2 px-4 py-2 bg-white hover:bg-gray-100 text-gray-800 rounded-lg shadow-lg font-semibold transition-all"
        >
          <Home className="w-5 h-5" />
          Zurück zur Auswahl
        </button>
        <ReichGeldSpiel />
      </div>
    );
  }

  if (currentGame === 'veraenderung') {
    return (
      <div>
        <BilanzVeraenderungSpiel />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-green-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
            🎯 BILANZ LERNEN
          </h1>
          <p className="text-2xl text-gray-600">
            Wähle ein Spiel und lerne die Bilanzlogik spielerisch!
          </p>
        </div>

        {/* Game Selection */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Sortierspiel */}
          <div 
            onClick={() => setCurrentGame('sort')}
            className="bg-white rounded-xl shadow-2xl p-8 cursor-pointer transition-all hover:scale-105 hover:shadow-3xl border-4 border-blue-200 hover:border-blue-400"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-blue-100 p-6 rounded-full">
                <Target className="w-20 h-20 text-blue-600" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
              Bilanz-Sortierspiel
            </h2>
            <p className="text-lg text-gray-600 mb-6 text-center">
              Sortiere 12 Begriffe per Drag & Drop oder Klick der richtigen Bilanzseite zu.
            </p>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>Aktiva vs. Passiva verstehen</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>Drag & Drop oder Klick-Steuerung</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>Sofortiges Feedback</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>Hilfestellungen bei jedem Begriff</span>
              </li>
            </ul>
            <button className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xl font-bold transition-all">
              Spiel starten →
            </button>
          </div>

          {/* Quiz-Spiel */}
          <div 
            onClick={() => setCurrentGame('quiz')}
            className="bg-white rounded-xl shadow-2xl p-8 cursor-pointer transition-all hover:scale-105 hover:shadow-3xl border-4 border-purple-200 hover:border-purple-400"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-purple-100 p-6 rounded-full">
                <Brain className="w-20 h-20 text-purple-600" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
              Bilanz-Quiz
            </h2>
            <p className="text-lg text-gray-600 mb-6 text-center">
              Beantworte Multiple-Choice-Fragen zu Geschäftsvorfällen und Bilanzbegriffen.
            </p>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-purple-600 font-bold">✓</span>
                <span>15 Fragen zu allen Bilanz-Begriffen</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 font-bold">✓</span>
                <span>Verstehe Geschäftsvorfälle</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 font-bold">✓</span>
                <span>Multiple-Choice mit Erklärungen</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 font-bold">✓</span>
                <span>Detaillierte Auswertung</span>
              </li>
            </ul>
            <button className="w-full py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-xl font-bold transition-all">
              Quiz starten →
            </button>
          </div>

          {/* Reich-Geld-Spiel */}
          <div 
            onClick={() => setCurrentGame('reich')}
            className="bg-white rounded-xl shadow-2xl p-8 cursor-pointer transition-all hover:scale-105 hover:shadow-3xl border-4 border-yellow-200 hover:border-yellow-400"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-yellow-100 p-6 rounded-full">
                <TrendingUp className="w-20 h-20 text-yellow-600" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
              Wie Reiche Geld beschaffen
            </h2>
            <p className="text-lg text-gray-600 mb-6 text-center">
              Verstehe den Unterschied: Eigenkapital vs. Fremdkapital - Wie Elon Musk es macht!
            </p>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-yellow-600 font-bold">✓</span>
                <span>Problem: 100.000 € benötigt</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-600 font-bold">✓</span>
                <span>2 Wege: Normal vs. "Elon Musk"</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-600 font-bold">✓</span>
                <span>Doppelbesteuerung verstehen</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-600 font-bold">✓</span>
                <span>Lombardkredit & Hypotheken</span>
              </li>
            </ul>
            <button className="w-full py-4 bg-yellow-600 hover:bg-yellow-700 text-white rounded-lg text-xl font-bold transition-all">
              Modul starten →
            </button>
          </div>

          {/* Bilanzveränderung-Spiel */}
          <div 
            onClick={() => setCurrentGame('veraenderung')}
            className="bg-white rounded-xl shadow-2xl p-8 cursor-pointer transition-all hover:scale-105 hover:shadow-3xl border-4 border-green-200 hover:border-green-400"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-green-100 p-6 rounded-full">
                <BarChart3 className="w-20 h-20 text-green-600" />
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 text-center break-words">
              Bilanzveränderungen
            </h2>
            <p className="text-base md:text-lg text-gray-600 mb-6 text-center">
              Lerne die 4 Arten von Bilanzveränderungen durch animierte Visualisierungen!
            </p>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Aktiv-Tausch & Passiv-Tausch</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Bilanzverlängerung & -verkürzung</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Schritt-für-Schritt Animationen</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>5 Level + Quiz-Modus</span>
              </li>
            </ul>
            <button className="w-full py-4 bg-green-600 hover:bg-green-700 text-white rounded-lg text-xl font-bold transition-all">
              Spiel starten →
            </button>
          </div>
        </div>

        {/* Info */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-3">📚 Empfehlung</h3>
          <p className="text-lg text-gray-700">
            <strong>Für Einsteiger:</strong> Starte mit dem <span className="text-blue-600 font-semibold">Sortierspiel</span>, um die Grundlagen zu lernen.
            <br />
            <strong>Für Fortgeschrittene:</strong> Teste dein Wissen im <span className="text-purple-600 font-semibold">Quiz</span> und verstehe die Geschäftsvorfälle dahinter.
            <br />
            <strong>Für Dynamik:</strong> Lerne im <span className="text-green-600 font-semibold">Bilanzveränderungen</span> Spiel, wie sich Geschäftsvorfälle auf die Bilanz auswirken!
            <br />
            <strong>Für Finanz-Interessierte:</strong> Lerne im <span className="text-yellow-600 font-semibold">"Wie Reiche Geld beschaffen"</span> Modul, wie man Eigenkapital vs. Fremdkapital strategisch nutzt!
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
