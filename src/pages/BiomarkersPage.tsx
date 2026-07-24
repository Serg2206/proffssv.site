import { useState } from 'react'
import { BIOMARKERS } from '../data/biomarkers'
import { useProStatus } from '../hooks/useProStatus'

type CategoryFilter = 'all' | 'inflammatory' | 'infection' | 'barrier' | 'immune' | 'metabolism'

export default function BiomarkersPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all')
  const { isPro } = useProStatus()

  const categories = [
    { id: 'all' as const, label: 'Все' },
    { id: 'inflammatory' as const, label: '🔥 Воспаление' },
    { id: 'infection' as const, label: '🦠 Инфекция' },
    { id: 'barrier' as const, label: '🛡️ Барьер' },
    { id: 'immune' as const, label: '🛡️ Иммунитет' },
    { id: 'metabolism' as const, label: '⚡ Метаболизм' }
  ]

  const filtered = activeCategory === 'all'
    ? BIOMARKERS
    : BIOMARKERS.filter(b => b.category === activeCategory)

  return (
    <div className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">Калькулятор биомаркеров</h1>
        <p className="text-xl text-slate-600 mb-12">
          Полная база 12 маркеров воспаления, инфекции и барьерной функции кишечника
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-lg font-semibold transition ${
                activeCategory === cat.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Biomarkers Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-slate-100 border-b-2 border-slate-300">
                <th className="text-left px-4 py-3 font-bold">Маркер</th>
                <th className="text-left px-4 py-3 font-bold">Единица</th>
                <th className="text-left px-4 py-3 font-bold">Норма</th>
                <th className="text-left px-4 py-3 font-bold">Критическое</th>
                <th className="text-left px-4 py-3 font-bold">Категория</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((biomarker, index) => (
                <tr key={biomarker.id} className={`border-b ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                  <td className="px-4 py-4 font-semibold text-slate-900">{biomarker.name}</td>
                  <td className="px-4 py-4 text-slate-600">{biomarker.unit}</td>
                  <td className="px-4 py-4">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded">{biomarker.normal}</span>
                  </td>
                  <td className="px-4 py-4">
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded">{biomarker.critical}</span>
                  </td>
                  <td className="px-4 py-4">
                    <span className="text-sm text-slate-600">{biomarker.category}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Interactive Calculator */}
        <div className="mt-12 p-6 bg-blue-50 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">💡 Калькулятор (Pro функция)</h3>
          {!isPro ? (
            <p className="text-slate-600">
              Интерактивный калькулятор доступен в Pro версии. Введите значения маркеров и получите интерпретацию.
            </p>
          ) : (
            <p className="text-slate-600">
              ✨ У вас есть доступ к функции! Введите значения маркеров ниже.
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
