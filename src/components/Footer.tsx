import { Github, Mail, Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-white py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">CDSS Острый Живот</h3>
            <p className="text-slate-300 text-sm">
              Клинический справочник для экстренной хирургии
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Разделы</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><a href="/#/molecular" className="hover:text-white">Молекулярный патогенез</a></li>
              <li><a href="/#/biomarkers" className="hover:text-white">Биомаркеры</a></li>
              <li><a href="/#/reference" className="hover:text-white">Справочник</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Скалы оценки</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>qSOFA</li>
              <li>Alvarado</li>
              <li>BISAP</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <div className="flex gap-4">
              <a href="mailto:ssvnauka@gmail.com" className="hover:text-blue-400">
                <Mail size={20} />
              </a>
              <a href="https://github.com/Serg2206" className="hover:text-blue-400">
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8 text-center text-sm text-slate-400">
          <p className="flex items-center justify-center gap-2">
            Сделано с <Heart size={16} className="text-red-500" /> для медиков
          </p>
          <p className="mt-2">
            © {currentYear} CDSS "Острый Живот 2026". Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  )
}
