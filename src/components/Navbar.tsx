import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useProStatus } from '../hooks/useProStatus'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { isPro, daysUntilExpiry } = useProStatus()

  const navLinks = [
    { label: 'Главная', href: '/#/' },
    { label: 'Молекулярный', href: '/#/molecular' },
    { label: 'Биомаркеры', href: '/#/biomarkers' },
    { label: 'Справочник', href: '/#/reference' },
    { label: 'Диагностика', href: '/#/diagnostics' },
    { label: 'Алгоритмы', href: '/#/algorithms' },
    { label: 'Тесты', href: '/#/tests' }
  ]

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">Ж</span>
            </div>
            <span className="font-bold text-lg hidden sm:block">CDSS</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-700 hover:text-blue-600 transition"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Pro Badge */}
          <div className="flex items-center gap-4">
            {isPro && (
              <div className="bg-yellow-50 px-3 py-1 rounded-full text-xs font-semibold text-yellow-800">
                ⭐ Pro {daysUntilExpiry() && `(${daysUntilExpiry()}d)`}
              </div>
            )}

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-100 rounded"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
