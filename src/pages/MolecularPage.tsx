import { TISCPA_CASCADE } from '../data/tiscpa'

export default function MolecularPage() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">Молекулярный патогенез TISCPA</h1>
        <p className="text-xl text-slate-600 mb-12">
          Интерактивный каскад от травмы через DAMPs и сигнализацию к транскрипции генов цитокинов
        </p>

        <div className="space-y-6">
          {TISCPA_CASCADE.map((step, index) => (
            <div key={step.step} className="card border-l-4" style={{borderLeftColor: step.color}}>
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white" style={{backgroundColor: step.color}}>
                    {step.step}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                  <p className="text-slate-600 mb-4">{step.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {step.molecules.map((mol, i) => (
                      <span key={i} className="badge bg-blue-100 text-blue-800">
                        {mol}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              {index < TISCPA_CASCADE.length - 1 && (
                <div className="flex justify-center mt-6">
                  <div className="text-3xl text-slate-300">↓</div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-blue-50 rounded-lg">
          <h3 className="text-xl font-bold mb-4">Ключевые моменты</h3>
          <ul className="space-y-2 text-slate-700">
            <li>✓ Каскад активируется травмой или инфекцией через повреждение ткани</li>
            <li>✓ DAMPs (HMGB1, HSP70) высвобождаются из мертвых клеток</li>
            <li>✓ TLRs распознают PAMPs/DAMPs и инициируют сигнализацию</li>
            <li>✓ NF-κB является главным регулятором про-воспалительного ответа</li>
            <li>✓ IL-6, TNF-α, IL-1β являются основными выходными цитокинами</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
