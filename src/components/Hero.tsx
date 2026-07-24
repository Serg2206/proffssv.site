import { useState } from 'react'
import { AlertCircle } from 'lucide-react'

export default function Hero() {
  const [qsofa, setQsofa] = useState({ mental: false, sbp: false, rr: false })

  const score = Object.values(qsofa).filter(Boolean).length
  const risk = score >= 2 ? 'Высокий риск сепсиса' : 'Низкий риск'
  const riskColor = score >= 2 ? 'text-red-600' : 'text-green-600'

  return (
    <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-4">
              CDSS Острый Живот 2026
            </h1>
            <p className="text-xl text-blue-100 mb-6">
              Клинический справочник с молекулярной основой для экстренной хирургии
            </p>
            <div className="flex gap-4">
              <button className="bg-white text-blue-600 font-bold px-6 py-3 rounded-lg hover:bg-blue-50">
                Начать
              </button>
              <button className="border-2 border-white text-white font-bold px-6 py-3 rounded-lg hover:bg-blue-700">
                Узнать больше
              </button>
            </div>
          </div>

          {/* Quick qSOFA */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <AlertCircle size={24} /> Быстрая оценка qSOFA
            </h3>
            <div className="space-y-3">
              {[
                { key: 'mental', label: 'Измененное сознание?' },
                { key: 'sbp', label: 'SBP ≤100 mmHg?' },
                { key: 'rr', label: 'ЧД ≥22/мин?' }
              ].map(item => (
                <label key={item.key} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={qsofa[item.key as keyof typeof qsofa]}
                    onChange={(e) => setQsofa({...qsofa, [item.key]: e.target.checked})}
                    className="w-5 h-5"
                  />
                  {item.label}
                </label>
              ))}
            </div>
            <div className="mt-6 p-4 bg-white/20 rounded-lg">
              <p className="text-sm opacity-75">Сумма баллов</p>
              <p className={`text-4xl font-bold ${riskColor}`}>{score}</p>
              <p className={`text-lg font-semibold mt-2 ${riskColor}`}>{risk}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
