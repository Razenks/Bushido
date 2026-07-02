import { MapPin, Phone, Clock, ArrowRight } from 'lucide-react'
import { business, whatsappLink } from '../data/business'

const INFO_ITEMS = [
  {
    icon: MapPin,
    label: 'Endereço',
    value: business.fullAddress,
  },
  {
    icon: Phone,
    label: 'Telefone / WhatsApp',
    value: business.phoneDisplay,
  },
  {
    icon: Clock,
    label: 'Horário de Funcionamento',
    value: business.hoursDisplay,
  },
]

export default function Contact() {
  return (
    <section
      id="contato"
      aria-labelledby="contato-heading"
      className="bg-white py-20 sm:py-28"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="text-sm font-semibold tracking-[0.2em] text-[#CD0E22] uppercase">
            Venha nos Conhecer
          </p>
          <h2
            id="contato-heading"
            className="mt-3 text-3xl font-extrabold text-black sm:text-4xl"
          >
            Visite a Academia Bushido em Campo Grande
          </h2>
          <p className="mt-4 text-lg text-black/65">
            Estamos prontos para receber você e apresentar nossas modalidades
            de artes marciais e Newseitai de perto.
          </p>

          <ul className="mt-10 space-y-6">
            {INFO_ITEMS.map(({ icon: Icon, label, value }) => (
              <li key={label} className="flex items-start gap-4">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#CD0E22]/10 text-[#CD0E22]">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-black/50">
                    {label}
                  </p>
                  <p className="text-base font-medium text-black">{value}</p>
                </div>
              </li>
            ))}
          </ul>

          <a
            href={whatsappLink(
              'Olá! Gostaria de mais informações sobre a Academia Bushido.',
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-10 inline-flex items-center gap-2 rounded-full bg-[#CD0E22] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-[#8A0A17]/40 transition-all duration-200 hover:bg-[#8A0A17] hover:shadow-xl"
          >
            Falar no WhatsApp
            <ArrowRight
              size={20}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </a>
        </div>

        <div className="h-80 overflow-hidden rounded-2xl border border-black/10 shadow-lg sm:h-96 lg:h-full">
          <iframe
            title={`Mapa de localização da ${business.name}`}
            src="https://www.google.com/maps?q=Av.+Fernando+Corr%C3%AAa+da+Costa,+1043+-+Centro,+Campo+Grande+-+MS,+79002-820&output=embed"
            className="h-full w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}
