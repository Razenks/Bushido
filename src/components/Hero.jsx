import { ArrowRight, PlayCircle } from 'lucide-react'
import logo from '../assets/logo.jpg'
import { whatsappLink } from '../data/business'

export default function Hero() {
  return (
    <section
      id="inicio"
      aria-label="Apresentação"
      className="relative overflow-hidden bg-black pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      {/* Decorative background glow, echoing the logo's red swirl */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-[-10%] h-[36rem] w-[36rem] -translate-y-1/2 rounded-full bg-gradient-to-br from-[#CD0E22] via-[#8A0A17] to-black opacity-40 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="text-center lg:text-left">
          <p className="text-sm font-semibold tracking-[0.2em] text-[#CD0E22] uppercase">
            Campo Grande - MS
          </p>

          <h1 className="mt-4 text-4xl leading-tight font-extrabold text-white sm:text-5xl lg:text-6xl">
            Academia Bushido em Campo Grande - MS: Artes Marciais e Newseitai
            (Quiropraxia Japonesa)
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg text-white/75 lg:mx-0">
            Corpo cansado, postura desalinhada e falta de disciplina? Una a
            força das artes marciais milenares ao equilíbrio da quiropraxia
            japonesa e transforme sua saúde física e mental em um só lugar.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href={whatsappLink(
                'Olá! Gostaria de agendar uma aula experimental na Academia Bushido.',
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-[#CD0E22] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-[#8A0A17]/50 transition-all duration-200 hover:bg-[#8A0A17] hover:shadow-xl"
            >
              Agende sua Aula Experimental Grátis
              <ArrowRight
                size={20}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </a>

            <a
              href="#servicos"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-8 py-4 text-base font-semibold text-white transition-colors duration-200 hover:border-white/60 hover:bg-white/5"
            >
              <PlayCircle size={20} />
              Conheça Nossos Serviços
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src={logo}
            alt="Logo da Academia Bushido: silhueta de um samurai e pássaros voando sobre um círculo vermelho em redemoinho, com os ideogramas japoneses 武士道 (Bushido)"
            className="h-64 w-64 rounded-full object-cover shadow-2xl shadow-[#8A0A17]/50 ring-4 ring-white/10 sm:h-80 sm:w-80 lg:h-96 lg:w-96"
          />
        </div>
      </div>
    </section>
  )
}
