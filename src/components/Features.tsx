import { Beaker, Heart, BookOpen, BarChart3, Lightbulb, Award } from 'lucide-react'

const features = [
  {
    icon: Beaker,
    title: 'Молекулярный патогенез',
    description: 'Интерактивный каскад TISCPA от травмы через DAMPs до цитокинов',
    href: '/#/molecular'
  },
  {
    icon: BarChart3,
    title: 'Биомаркеры',
    description: '12 маркеров с пороговыми значениями и интерпретацией',
    href: '/#/biomarkers'
  },
  {
    icon: Heart,
    title: 'Клинические шкалы',
    description: 'qSOFA, Alvarado, BISAP, SIRS, APACHE II',
    href: '/#/reference'
  },
  {
    icon: BookOpen,
    title: 'Справочник',
    description: 'Полная база знаний по маскам острого живота',
    href: '/#/reference'
  },
  {
    icon: Lightbulb,
    title: 'AI-ассистент',
    description: 'Чат с ответами на вопросы по диагностике и лечению',
    href: '/'
  },
  {
    icon: Award,
    title: 'Тесты Pro',
    description: 'Практические тесты для самопроверки (требует подписку)',
    href: '/#/tests'
  }
]

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="section-title">6 Мощных Модулей</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <a
                key={index}
                href={feature.href}
                className="card group"
              >
                <Icon className="w-12 h-12 text-blue-600 mb-4 group-hover:scale-110 transition" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
