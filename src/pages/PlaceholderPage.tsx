import { Lock } from 'lucide-react'

interface PlaceholderPageProps {
  title: string
}

export default function PlaceholderPage({ title }: PlaceholderPageProps) {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <Lock size={64} className="mx-auto text-slate-300 mb-6" />
        <h1 className="text-4xl font-bold mb-4 text-slate-900">{title}</h1>
        <p className="text-xl text-slate-600 mb-8">
          Этот раздел находится в разработке. Возвращайтесь позже!
        </p>
        <a href="/#/" className="btn-primary text-lg inline-block">
          Вернуться на главную
        </a>
      </div>
    </div>
  )
}
