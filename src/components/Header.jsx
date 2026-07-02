import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import logo from '../assets/logo.jpg'
import { business, whatsappLink } from '../data/business'

const NAV_LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Turmas', href: '#turmas' },
  { label: 'Pilates', href: '#pilates' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/80 backdrop-blur-md shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <nav
        aria-label="Navegação principal"
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8"
      >
        <a
          href="#inicio"
          className="flex items-center gap-3"
          aria-label={`${business.name} - ir para o início`}
        >
          <img
            src={logo}
            alt={`Logo da ${business.name}: silhueta de samurai e pássaros sobre um círculo vermelho com os ideogramas japoneses 武士道`}
            className="h-11 w-11 rounded-full object-cover"
          />
          <span className="text-lg font-bold tracking-wide text-white sm:text-xl">
            {business.name}
          </span>
        </a>

        {/* Desktop navigation */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-white/85 transition-colors duration-200 hover:text-[#CD0E22]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={whatsappLink('Olá! Gostaria de agendar uma aula experimental na Academia Bushido.')}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full bg-[#CD0E22] px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-[#8A0A17]/40 transition-all duration-200 hover:bg-[#8A0A17] hover:shadow-lg md:inline-block"
        >
          Agende sua Aula
        </a>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="text-white md:hidden"
          aria-label={isMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="border-t border-white/10 bg-black/95 backdrop-blur-md md:hidden">
          <ul className="flex flex-col gap-1 px-4 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-base font-medium text-white/90 transition-colors duration-200 hover:bg-white/5 hover:text-[#CD0E22]"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href={whatsappLink('Olá! Gostaria de agendar uma aula experimental na Academia Bushido.')}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-full bg-[#CD0E22] px-4 py-3 text-center text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#8A0A17]"
              >
                Agende sua Aula
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
