import React, { useState } from 'react';
import { TrendingUp, AlertCircle, CheckCircle, XCircle, DollarSign, ArrowRight, Lightbulb, Crown, ArrowDown, Wallet, Building2, Coins, Landmark } from 'lucide-react';

const ReichGeldSpiel = () => {
  const [currentStep, setCurrentStep] = useState('problem');
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [showComparison, setShowComparison] = useState(false);

  const resetGame = () => {
    setCurrentStep('problem');
    setSelectedMethod(null);
    setShowComparison(false);
  };

  const handleMethodSelect = (method) => {
    setSelectedMethod(method);
    setCurrentStep('explanation');
  };

  // Flussdiagramm-Box Komponente
  const FlowBox = ({ icon: Icon, title, amount, color, children }) => (
    <div className={`bg-${color}-100 border-4 border-${color}-400 rounded-lg p-6 text-center`}>
      {Icon && <Icon className={`w-12 h-12 text-${color}-600 mx-auto mb-2`} />}
      <h4 className="text-xl font-bold text-gray-800 mb-2">{title}</h4>
      {amount && <p className="text-3xl font-bold text-gray-800 mb-2">{amount}</p>}
      {children}
    </div>
  );

  const Arrow = ({ color = "gray" }) => (
    <div className="flex justify-center">
      <ArrowDown className={`w-12 h-12 text-${color}-600`} />
    </div>
  );

  const renderProblem = () => (
    <div className="space-y-6">
      <div className="bg-red-50 border-4 border-red-300 rounded-lg p-8 text-center">
        <AlertCircle className="w-20 h-20 text-red-600 mx-auto mb-4" />
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Das Problem
        </h2>
        <p className="text-3xl font-bold text-red-600 mb-6">
          Du brauchst 100.000 € für dein Unternehmen!
        </p>
        <p className="text-xl text-gray-700">
          Wie beschaffst du das Geld? Es gibt zwei Wege...
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Methode 1: Die "dumme" Art */}
        <div 
          onClick={() => handleMethodSelect('dumm')}
          className="bg-white rounded-lg shadow-xl p-6 cursor-pointer transition-all hover:scale-105 border-4 border-orange-300 hover:border-orange-500"
        >
          <div className="text-center mb-4">
            <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-4xl">😰</span>
            </div>
            <h3 className="text-2xl font-bold text-orange-800 mb-2">
              Methode 1: "Die Normale"
            </h3>
            <p className="text-lg text-gray-600 italic">
              Wie die meisten Menschen es machen
            </p>
          </div>
          
          <div className="space-y-3 text-left">
            <div className="flex items-start gap-2">
              <span className="text-orange-600 font-bold text-xl">1.</span>
              <p className="text-gray-700">Geld verdienen und <strong className="text-red-600">Steuern zahlen</strong></p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-orange-600 font-bold text-xl">2.</span>
              <p className="text-gray-700">Eigenes (schon versteuertes) Geld ins Unternehmen einzahlen</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-orange-600 font-bold text-xl">3.</span>
              <p className="text-gray-700">Bei Entnahme: <strong className="text-red-600">Nochmal Steuern zahlen!</strong></p>
            </div>
          </div>

          <button className="w-full mt-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg text-xl font-bold">
            Diese Methode wählen →
          </button>
        </div>

        {/* Methode 2: Die "smarte" Art */}
        <div 
          onClick={() => handleMethodSelect('smart')}
          className="bg-white rounded-lg shadow-xl p-6 cursor-pointer transition-all hover:scale-105 border-4 border-green-300 hover:border-green-500"
        >
          <div className="text-center mb-4">
            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Crown className="w-12 h-12 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-green-800 mb-2">
              Methode 2: "Die Elon Musk"
            </h3>
            <p className="text-lg text-gray-600 italic">
              Wie Reiche es wirklich machen
            </p>
          </div>
          
          <div className="space-y-3 text-left">
            <div className="flex items-start gap-2">
              <span className="text-green-600 font-bold text-xl">1.</span>
              <p className="text-gray-700">Besitze wertvolle Assets (Aktien, Immobilien, Firma)</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-600 font-bold text-xl">2.</span>
              <p className="text-gray-700">Nimm Kredit mit Asset als Sicherheit (Hypothek/Lombardkredit)</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-600 font-bold text-xl">3.</span>
              <p className="text-gray-700"><strong className="text-green-600">Keine Steuern!</strong> Kredite sind nicht steuerpflichtig</p>
            </div>
          </div>

          <button className="w-full mt-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg text-xl font-bold">
            Diese Methode wählen →
          </button>
        </div>
      </div>
    </div>
  );

  const renderDummExplanation = () => (
    <div className="space-y-6">
      <div className="bg-orange-50 border-4 border-orange-300 rounded-lg p-8">
        <div className="text-center mb-8">
          <span className="text-6xl mb-4 block">😰</span>
          <h2 className="text-5xl font-bold text-orange-800 mb-2">
            Die "Normale" Methode
          </h2>
          <p className="text-2xl text-gray-600 font-semibold">Doppelt besteuert = Doppelt verloren!</p>
        </div>

        {/* VISUELLES FLUSSDIAGRAMM */}
        <div className="max-w-3xl mx-auto space-y-4">
          {/* START */}
          <div className="bg-blue-100 border-4 border-blue-500 rounded-lg p-8 text-center">
            <Wallet className="w-16 h-16 text-blue-600 mx-auto mb-3" />
            <h3 className="text-3xl font-bold text-gray-800 mb-2">START</h3>
            <p className="text-5xl font-bold text-blue-600">200.000 €</p>
            <p className="text-xl text-gray-600 mt-2">Brutto-Gehalt</p>
          </div>

          <ArrowDown className="w-16 h-16 text-red-600 mx-auto" />

          {/* STEUER 1 */}
          <div className="bg-red-100 border-4 border-red-500 rounded-lg p-8 text-center">
            <XCircle className="w-16 h-16 text-red-600 mx-auto mb-3" />
            <h3 className="text-3xl font-bold text-red-800 mb-2">❌ STEUER #1</h3>
            <p className="text-xl text-gray-700 mb-2">Einkommensteuer (42-45%)</p>
            <p className="text-5xl font-bold text-red-600">- 90.000 €</p>
            <div className="mt-4 pt-4 border-t-2 border-red-400">
              <p className="text-xl text-gray-600">Übrig:</p>
              <p className="text-4xl font-bold text-gray-800">110.000 €</p>
            </div>
          </div>

          <ArrowDown className="w-16 h-16 text-orange-600 mx-auto" />

          {/* INS UNTERNEHMEN */}
          <div className="bg-blue-100 border-4 border-blue-500 rounded-lg p-8 text-center">
            <Building2 className="w-16 h-16 text-blue-600 mx-auto mb-3" />
            <h3 className="text-3xl font-bold text-gray-800 mb-2">Ins Unternehmen</h3>
            <p className="text-5xl font-bold text-blue-600">100.000 €</p>
            <p className="text-xl text-gray-600 mt-2">als EIGENKAPITAL (Passiva)</p>
            <div className="mt-4 bg-yellow-50 p-3 rounded border-2 border-yellow-400">
              <p className="text-lg text-yellow-800 font-semibold">⚠️ Schon versteuert!</p>
            </div>
          </div>

          <div className="text-center py-4">
            <p className="text-3xl font-bold text-gray-600">⏳ Jahre später...</p>
          </div>

          <ArrowDown className="w-16 h-16 text-gray-600 mx-auto" />

          {/* ENTNAHME */}
          <div className="bg-gray-100 border-4 border-gray-500 rounded-lg p-8 text-center">
            <Coins className="w-16 h-16 text-gray-600 mx-auto mb-3" />
            <h3 className="text-3xl font-bold text-gray-800 mb-2">Geld entnehmen</h3>
            <p className="text-5xl font-bold text-gray-800">100.000 €</p>
            <p className="text-xl text-gray-600 mt-2">(Gewinnausschüttung)</p>
          </div>

          <ArrowDown className="w-16 h-16 text-red-600 mx-auto" />

          {/* STEUER 2 */}
          <div className="bg-red-100 border-4 border-red-500 rounded-lg p-8 text-center">
            <XCircle className="w-16 h-16 text-red-600 mx-auto mb-3" />
            <h3 className="text-3xl font-bold text-red-800 mb-2">❌ STEUER #2</h3>
            <p className="text-xl text-gray-700 mb-2">Kapitalertragsteuer (26,375%)</p>
            <p className="text-5xl font-bold text-red-600">- 26.375 €</p>
            <div className="mt-4 pt-4 border-t-2 border-red-400">
              <p className="text-xl text-gray-600">Netto erhalten:</p>
              <p className="text-4xl font-bold text-gray-800">73.625 €</p>
            </div>
          </div>

          <ArrowDown className="w-16 h-16 text-red-600 mx-auto" />

          {/* ENDERGEBNIS */}
          <div className="bg-red-200 border-4 border-red-600 rounded-lg p-8 text-center">
            <h3 className="text-4xl font-bold text-red-800 mb-4">� ENDERGEBNIS</h3>
            <div className="space-y-3 text-xl">
              <div className="flex justify-between px-8">
                <span>Gestartet mit:</span>
                <strong>200.000 €</strong>
              </div>
              <div className="flex justify-between px-8 text-red-700">
                <span>Steuer #1:</span>
                <strong>- 90.000 €</strong>
              </div>
              <div className="flex justify-between px-8 text-red-700">
                <span>Steuer #2:</span>
                <strong>- 26.375 €</strong>
              </div>
              <hr className="border-2 border-red-600" />
              <div className="flex justify-between px-8 text-3xl font-bold">
                <span>Am Ende:</span>
                <strong className="text-red-700">83.625 €</strong>
              </div>
            </div>
            <div className="mt-6 bg-red-300 p-4 rounded-lg">
              <p className="text-3xl font-bold text-red-900">
                ❌ VERLUST: 116.375 €
              </p>
              <p className="text-xl text-red-800 mt-2">
                Doppelt besteuert = Doppelt verloren!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <button
          onClick={() => setShowComparison(true)}
          className="flex-1 py-4 bg-green-600 hover:bg-green-700 text-white rounded-lg text-xl font-bold"
        >
          Vergleich mit der smarten Methode →
        </button>
        <button
          onClick={resetGame}
          className="py-4 px-6 bg-gray-400 hover:bg-gray-500 text-white rounded-lg text-xl font-bold"
        >
          Zurück
        </button>
      </div>
    </div>
  );

  const renderSmartExplanation = () => (
    <div className="space-y-6">
      <div className="bg-green-50 border-4 border-green-300 rounded-lg p-8">
        <div className="text-center mb-8">
          <Crown className="w-20 h-20 text-green-600 mx-auto mb-4" />
          <h2 className="text-5xl font-bold text-green-800 mb-2">
            Die "Elon Musk" Methode
          </h2>
          <p className="text-2xl text-gray-600 font-semibold">Nutze Assets statt Gehalt!</p>
        </div>

        {/* WICHTIGER HINWEIS */}
        <div className="max-w-3xl mx-auto mb-6 bg-yellow-50 border-4 border-yellow-400 rounded-lg p-6">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-8 h-8 text-yellow-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-2xl font-bold text-yellow-800 mb-2">⚠️ WICHTIG ZU VERSTEHEN!</h3>
              <p className="text-lg text-gray-800 mb-2">
                <strong>Aktien als Gehalt bekommen</strong> = ❌ Steuerpflichtig (wie normales Einkommen!)
              </p>
              <p className="text-lg text-gray-800 mb-2">
                <strong>Bereits besessene Aktien als Sicherheit nutzen</strong> = ✅ Nicht steuerpflichtig!
              </p>
              <p className="text-base text-gray-700 mt-3 bg-white p-3 rounded border-2 border-yellow-300">
                💡 <strong>Der Trick:</strong> Elon besitzt die Aktien SCHON (z.B. von der Firmengründung). 
                Beim <strong>Besitzen</strong> zahlt man keine Steuern. Nur beim <strong>Verkaufen</strong> oder wenn man sie als <strong>Gehalt erhält</strong>!
              </p>
            </div>
          </div>
        </div>

        {/* VISUELLES FLUSSDIAGRAMM */}
        <div className="max-w-3xl mx-auto space-y-4">
          {/* START - ASSETS */}
          <div className="bg-purple-100 border-4 border-purple-500 rounded-lg p-8 text-center">
            <Crown className="w-16 h-16 text-purple-600 mx-auto mb-3" />
            <h3 className="text-3xl font-bold text-gray-800 mb-2">START: Besitze Assets</h3>
            <p className="text-5xl font-bold text-purple-600">10.000.000 €</p>
            <p className="text-xl text-gray-600 mt-2">Tesla-Aktien (bereits im Besitz!)</p>
            <div className="mt-4 bg-purple-50 p-3 rounded border-2 border-purple-400">
              <p className="text-lg text-purple-800 font-semibold">✅ KEINE Steuern beim Besitzen!</p>
              <p className="text-sm text-purple-700 mt-1">(z.B. von Firmengründung oder Erbschaft)</p>
            </div>
          </div>

          <ArrowDown className="w-16 h-16 text-green-600 mx-auto" />

          {/* KREDIT VON BANK */}
          <div className="bg-green-100 border-4 border-green-500 rounded-lg p-8 text-center">
            <Landmark className="w-16 h-16 text-green-600 mx-auto mb-3" />
            <h3 className="text-3xl font-bold text-gray-800 mb-2">Kredit von Bank</h3>
            <p className="text-5xl font-bold text-green-600">100.000 €</p>
            <p className="text-xl text-gray-600 mt-2">Lombardkredit</p>
            <div className="mt-4 bg-blue-50 p-3 rounded border-2 border-blue-400">
              <p className="text-lg text-blue-800">Sicherheit: Aktien (10 Mio. €)</p>
              <p className="text-sm text-gray-600 mt-1">Zinsen: ~3% = 3.000€/Jahr</p>
            </div>
            <div className="mt-3 bg-green-50 p-3 rounded border-2 border-green-400">
              <p className="text-lg text-green-800 font-semibold">✅ Kredite sind NICHT steuerpflichtig!</p>
            </div>
          </div>

          <ArrowDown className="w-16 h-16 text-blue-600 mx-auto" />

          {/* INS UNTERNEHMEN ALS DARLEHEN */}
          <div className="bg-blue-100 border-4 border-blue-500 rounded-lg p-8 text-center">
            <Building2 className="w-16 h-16 text-blue-600 mx-auto mb-3" />
            <h3 className="text-3xl font-bold text-gray-800 mb-2">Ins Unternehmen</h3>
            <p className="text-5xl font-bold text-blue-600">100.000 €</p>
            <p className="text-xl text-gray-600 mt-2">als DARLEHEN (= FREMDKAPITAL)</p>
            <div className="mt-4 bg-green-50 p-3 rounded border-2 border-green-400">
              <p className="text-lg text-green-800 font-semibold">
                ✅ Passiva: Verbindlichkeiten (Fremdkapital!)
              </p>
            </div>
          </div>

          <div className="text-center py-4">
            <p className="text-3xl font-bold text-gray-600">⏳ Jahre später...</p>
          </div>

          <ArrowDown className="w-16 h-16 text-gray-600 mx-auto" />

          {/* RÜCKZAHLUNG STEUERFREI */}
          <div className="bg-green-100 border-4 border-green-500 rounded-lg p-8 text-center">
            <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-3" />
            <h3 className="text-3xl font-bold text-gray-800 mb-2">✅ Darlehen zurück</h3>
            <p className="text-5xl font-bold text-green-600">100.000 €</p>
            <p className="text-xl text-gray-600 mt-2">(Darlehensrückzahlung)</p>
            <div className="mt-4 bg-green-50 p-4 rounded border-3 border-green-500">
              <p className="text-2xl text-green-800 font-bold">
                ✅ STEUERFREI!
              </p>
              <p className="text-lg text-green-700 mt-2">
                Darlehen zurückzahlen = KEINE Steuer!
              </p>
            </div>
          </div>

          <ArrowDown className="w-16 h-16 text-blue-600 mx-auto" />

          {/* BANKKREDIT ZURÜCKZAHLEN */}
          <div className="bg-gray-100 border-4 border-gray-500 rounded-lg p-8 text-center">
            <Landmark className="w-16 h-16 text-gray-600 mx-auto mb-3" />
            <h3 className="text-3xl font-bold text-gray-800 mb-2">Bankkredit zurückzahlen</h3>
            <p className="text-4xl font-bold text-gray-800">100.000 €</p>
            <div className="mt-4 bg-yellow-50 p-3 rounded border-2 border-yellow-400">
              <p className="text-lg text-gray-700">Gezahlte Zinsen (5 Jahre): 15.000 €</p>
              <p className="text-lg text-green-600 font-semibold">Steuerersparnis: -6.000 €</p>
              <p className="text-xl font-bold text-gray-800 mt-2">Netto-Zinsen: 9.000 €</p>
            </div>
          </div>

          <ArrowDown className="w-16 h-16 text-green-600 mx-auto" />

          {/* ENDERGEBNIS */}
          <div className="bg-green-200 border-4 border-green-600 rounded-lg p-8 text-center">
            <Crown className="w-16 h-16 text-green-600 mx-auto mb-3" />
            <h3 className="text-4xl font-bold text-green-800 mb-4">💰 ENDERGEBNIS</h3>
            <div className="space-y-3 text-xl">
              <div className="flex justify-between px-8">
                <span>Gebrauchtes Geld:</span>
                <strong>100.000 €</strong>
              </div>
              <div className="flex justify-between px-8 text-yellow-700">
                <span>Gezahlte Zinsen:</span>
                <strong>- 9.000 €</strong>
              </div>
              <div className="flex justify-between px-8 text-green-700">
                <span>Steuern:</span>
                <strong>0 €</strong>
              </div>
              <hr className="border-2 border-green-600" />
              <div className="flex justify-between px-8 text-3xl font-bold">
                <span>Gesamtkosten:</span>
                <strong className="text-green-700">9.000 €</strong>
              </div>
            </div>
            <div className="mt-6 bg-green-300 p-4 rounded-lg">
              <p className="text-3xl font-bold text-green-900">
                ✅ BONUS: Aktien bleiben!
              </p>
              <p className="text-xl text-green-800 mt-2">
                10 Mio. € Aktien immer noch im Besitz!<br />
                Steigen weiter im Wert! 📈
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <button
          onClick={() => setShowComparison(true)}
          className="flex-1 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xl font-bold"
        >
          Direkter Vergleich ansehen →
        </button>
        <button
          onClick={resetGame}
          className="py-4 px-6 bg-gray-400 hover:bg-gray-500 text-white rounded-lg text-xl font-bold"
        >
          Zurück
        </button>
      </div>
    </div>
  );

  const renderComparison = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-orange-100 via-yellow-100 to-green-100 border-4 border-gray-400 rounded-lg p-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          ⚔️ Direkter Vergleich
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Methode 1 */}
          <div className="bg-white rounded-lg p-6 border-4 border-orange-400">
            <h3 className="text-2xl font-bold text-orange-800 mb-4 text-center">
              😰 "Normale" Methode
            </h3>
            <div className="space-y-3">
              <div className="bg-red-50 p-3 rounded">
                <p className="font-semibold text-red-700">Einkommensteuer: -90.000 €</p>
              </div>
              <div className="bg-red-50 p-3 rounded">
                <p className="font-semibold text-red-700">Kapitalertragsteuer: -26.375 €</p>
              </div>
              <div className="bg-gray-50 p-3 rounded">
                <p className="text-gray-700">Eigenes Geld aufgebraucht</p>
              </div>
              <hr className="border-2 border-orange-400" />
              <div className="bg-red-100 p-4 rounded-lg">
                <p className="text-xl font-bold text-red-700">
                  Gesamtverlust: 116.375 €
                </p>
                <p className="text-sm text-red-600 mt-1">
                  Von 200.000 € bleiben 83.625 €
                </p>
              </div>
            </div>
          </div>

          {/* Methode 2 */}
          <div className="bg-white rounded-lg p-6 border-4 border-green-400">
            <h3 className="text-2xl font-bold text-green-800 mb-4 text-center">
              👑 "Elon Musk" Methode
            </h3>
            <div className="space-y-3">
              <div className="bg-green-50 p-3 rounded">
                <p className="font-semibold text-green-700">Keine Einkommensteuer ✅</p>
              </div>
              <div className="bg-green-50 p-3 rounded">
                <p className="font-semibold text-green-700">Keine Kapitalertragsteuer ✅</p>
              </div>
              <div className="bg-yellow-50 p-3 rounded">
                <p className="text-gray-700">Zinsen: ~9.000 € (nach Steuerabzug)</p>
              </div>
              <hr className="border-2 border-green-400" />
              <div className="bg-green-100 p-4 rounded-lg">
                <p className="text-xl font-bold text-green-700">
                  Gesamtkosten: 9.000 €
                </p>
                <p className="text-sm text-green-600 mt-1">
                  Aktien (10 Mio. €) bleiben im Besitz!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Hauptvergleich */}
        <div className="bg-white rounded-lg p-8 border-4 border-blue-400">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-6">
            🎯 Das Ergebnis
          </h3>
          
          <div className="space-y-4 text-xl">
            <div className="flex justify-between items-center p-4 bg-orange-50 rounded-lg">
              <span className="font-semibold">Methode 1 - Gesamtkosten:</span>
              <span className="text-2xl font-bold text-red-600">116.375 €</span>
            </div>
            
            <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
              <span className="font-semibold">Methode 2 - Gesamtkosten:</span>
              <span className="text-2xl font-bold text-green-600">9.000 €</span>
            </div>

            <hr className="border-3 border-blue-400 my-4" />

            <div className="bg-gradient-to-r from-yellow-100 to-green-100 p-6 rounded-lg border-3 border-yellow-500">
              <p className="text-center text-3xl font-bold text-gray-800 mb-3">
                💰 Ersparnis: 107.375 €
              </p>
              <p className="text-center text-xl text-gray-700">
                Das sind über <strong className="text-green-600">1.000% weniger Kosten</strong>!
              </p>
            </div>
          </div>
        </div>

        {/* Zusätzliche Vorteile */}
        <div className="bg-white rounded-lg p-6 border-4 border-blue-300 mt-6">
          <h3 className="text-2xl font-bold text-blue-800 mb-4 flex items-center gap-2">
            <Lightbulb className="w-8 h-8" />
            Zusätzliche Vorteile der "Elon Musk" Methode
          </h3>
          <ul className="space-y-3 text-lg">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <span>Deine Aktien bleiben in deinem Besitz und steigen weiter im Wert</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <span>Du zahlst KEINE Steuern auf die 100.000 € (weder beim Holen noch beim Zurückzahlen)</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <span>Zinsen sind steuerlich absetzbar (senken deine Steuerlast)</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <span>Du behältst Liquidität für andere Investitionen</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <span>Wenn deine Aktien steigen, kannst du noch mehr Kredit aufnehmen</span>
            </li>
          </ul>
        </div>

        {/* Realbeispiel */}
        <div className="bg-purple-50 rounded-lg p-6 border-4 border-purple-300 mt-6">
          <h3 className="text-2xl font-bold text-purple-800 mb-4">
            💡 Real-Life Beispiel: Elon Musk
          </h3>
          <p className="text-lg text-gray-700 mb-3">
            Elon Musk besitzt Tesla-Aktien im Wert von über <strong>100 Milliarden Dollar</strong>.
          </p>
          <p className="text-lg text-gray-700 mb-3">
            Sein offizielles Gehalt bei Tesla: <strong>0 Dollar</strong> (zahlt also kaum Einkommensteuer!)
          </p>
          <p className="text-lg text-gray-700 mb-3">
            Stattdessen nimmt er <strong>Kredite gegen seine Aktien auf</strong> (Lombardkredite), um seinen Lebensstil und Investitionen zu finanzieren.
          </p>
          <p className="text-lg font-bold text-purple-700 mb-3">
            Ergebnis: Zugang zu Milliarden Dollar, <strong>ohne Einkommensteuer zu zahlen!</strong>
          </p>
          <div className="mt-4 bg-yellow-50 p-4 rounded-lg border-2 border-yellow-400">
            <p className="text-base text-yellow-900 font-semibold mb-2">
              ⚠️ Wichtig: Wie kam er zu den Aktien?
            </p>
            <p className="text-base text-gray-800">
              Elon bekam die Aktien als Gründer/Mitgründer von Tesla und PayPal. 
              <strong> Damals</strong> wurden sie als Gehalt versteuert (als sie noch wenig wert waren!). 
              Jetzt sind sie Milliarden wert, aber beim <strong>Besitzen</strong> zahlt man keine Steuern - 
              nur beim <strong>Verkaufen</strong> würde er Kapitalertragsteuer zahlen müssen. 
              Deshalb verkauft er nicht, sondern nimmt Kredite auf!
            </p>
          </div>
        </div>
      </div>

      <button
        onClick={resetGame}
        className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xl font-bold"
      >
        Noch einmal von vorne →
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-100 to-green-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex items-center justify-center gap-3">
            <TrendingUp className="w-12 h-12 text-purple-600" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
              WIE REICHE GELD BESCHAFFEN
            </h1>
          </div>
          <p className="text-center text-xl text-gray-600 mt-3">
            Eigenkapital vs. Fremdkapital - Der Unterschied zwischen Arm und Reich
          </p>
        </div>

        {/* Content */}
        {currentStep === 'problem' && renderProblem()}
        {currentStep === 'explanation' && selectedMethod === 'dumm' && !showComparison && renderDummExplanation()}
        {currentStep === 'explanation' && selectedMethod === 'smart' && !showComparison && renderSmartExplanation()}
        {showComparison && renderComparison()}
      </div>
    </div>
  );
};

export default ReichGeldSpiel;
