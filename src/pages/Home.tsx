import Hero from '../components/Hero'
import Features from '../components/Features'
import ChatWidget from '../components/ChatWidget'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <ChatWidget />

      {/* Stats Section */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600">12</div>
              <p className="text-slate-600 mt-2">Биомаркеров</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600">8</div>
              <p className="text-slate-600 mt-2">Этапов TISCPA</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600">5</div>
              <p className="text-slate-600 mt-2">Клинических шкал</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600">∞</div>
              <p className="text-slate-600 mt-2">Знаний в AI</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Готовы улучшить диагностику?</h2>
          <p className="text-lg text-slate-600 mb-8">
            Получите доступ к Pro версии с расширенным справочником и практическими тестами
          </p>
          <button className="btn-primary text-lg">
            Начать бесплатно (Pro на 7 дней)
          </button>
        </div>
      </section>
    </>
  )
}
