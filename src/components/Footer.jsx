import { MapPin, Phone, Clock } from 'lucide-react'
import logo from '../assets/logo.jpg'
import { business } from '../data/business'

// lucide-react no longer ships brand/logo icons, so social icons use inline SVGs (Heroicons-style paths).
function InstagramIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37a4 4 0 1 1-7.914 1.174A4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

const QUICK_LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Turmas', href: '#turmas' },
  { label: 'Pilates', href: '#pilates' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-black text-white/70">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt={`Logo da ${business.name}`}
                className="h-10 w-10 rounded-full object-cover"
              />
              <span className="text-lg font-bold text-white">
                {business.name}
              </span>
            </div>
            <p className="mt-4 text-sm">
              Tradição, disciplina e equilíbrio em artes marciais e Newseitai
              (quiropraxia japonesa) no coração de Campo Grande - MS.
            </p>
            <a
              href={business.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Seguir ${business.name} no Instagram: ${business.instagramHandle}`}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#CD0E22] px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-[#8A0A17]/40 transition-all duration-200 hover:bg-[#8A0A17] hover:shadow-lg"
            >
              <InstagramIcon width={20} height={20} />
              {business.instagramHandle}
            </a>
          </div>

          <nav aria-label="Links rápidos">
            <h3 className="text-sm font-semibold tracking-wide text-white uppercase">
              Links Rápidos
            </h3>
            <ul className="mt-4 space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors duration-200 hover:text-[#CD0E22]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-sm font-semibold tracking-wide text-white uppercase">
              Contato
            </h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-[#CD0E22]" aria-hidden="true" />
                <span className="text-sm">{business.fullAddress}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="mt-0.5 shrink-0 text-[#CD0E22]" aria-hidden="true" />
                <a
                  href={`tel:${business.phoneE164}`}
                  className="text-sm transition-colors duration-200 hover:text-[#CD0E22]"
                >
                  {business.phoneDisplay}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide text-white uppercase">
              Horário de Funcionamento
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Clock size={18} className="mt-0.5 shrink-0 text-[#CD0E22]" aria-hidden="true" />
                <span>{business.hoursDisplay}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm">
          <p>
            &copy; {year} {business.name}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
