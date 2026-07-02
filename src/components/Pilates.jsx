import { ArrowRight } from 'lucide-react'
import pilates1 from '../assets/pilates-1.webp'
import pilates2 from '../assets/pilates-2.webp'
import { whatsappLink } from '../data/business'

const PHOTOS = [
  {
    image: pilates1,
    alt: 'Sala de Pilates da Academia Bushido com aparelho Cadillac, reformer, bola suíça e colchonetes',
  },
  {
    image: pilates2,
    alt: 'Sala de Pilates da Academia Bushido com aparelho reformer, step e colchonetes de treino',
  },
]

export default function Pilates() {
  return (
    <section
      id="pilates"
      aria-labelledby="pilates-heading"
      className="bg-white py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold tracking-[0.2em] text-[#CD0E22] uppercase">
            Novo Espaço
          </p>
          <h2
            id="pilates-heading"
            className="mt-3 text-3xl font-extrabold text-black sm:text-4xl"
          >
            Pilates na Academia Bushido
          </h2>
          <p className="mt-4 text-lg text-black/65">
            Além das artes marciais e do Newseitai, contamos com um espaço
            completo de Pilates, com equipamentos profissionais para
            fortalecimento, flexibilidade e reabilitação postural.
          </p>

          <a
            href={whatsappLink(
              'Olá! Gostaria de saber mais sobre as aulas de Pilates na Academia Bushido.',
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[#CD0E22] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-[#8A0A17]/40 transition-all duration-200 hover:bg-[#8A0A17] hover:shadow-xl"
          >
            Conheça o Espaço de Pilates
            <ArrowRight
              size={20}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </a>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-2">
          {PHOTOS.map(({ image, alt }) => (
            <div
              key={image}
              className="aspect-[4/3] overflow-hidden rounded-2xl border border-black/10 shadow-lg"
            >
              <img src={image} alt={alt} className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
