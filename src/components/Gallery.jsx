import { ArrowRight } from 'lucide-react'
import muayThai from '../assets/muay-thai.webp'
import jiuJitsu from '../assets/jiu-jitsu.webp'
import karate from '../assets/karate.webp'
import tatame from '../assets/tatame.jpg'
import { whatsappLink } from '../data/business'

const CLASSES = [
  {
    image: tatame,
    modality: 'Judô',
    alt: 'Turma de Judô da Academia Bushido reunida no tatame, vestindo judogis, representando alunos de todas as idades treinando juntos',
    fit: 'cover',
  },
  {
    image: muayThai,
    modality: 'Muay Thai',
    alt: 'Alunos e professor da Academia Bushido posando com as mãos enfaixadas ao final de uma aula de Muay Thai',
    fit: 'cover',
  },
  {
    image: jiuJitsu,
    modality: 'Jiu-Jítsu',
    alt: 'Turma de Jiu-Jítsu da Academia Bushido reunida no tatame, alunos com faixas branca, azul, roxa e preta',
    fit: 'cover',
    // This photo has a text banner above the group photo — crop from the bottom to keep the photo, not the text.
    position: 'object-bottom',
  },
  {
    image: karate,
    modality: 'Karatê',
    alt: 'Turma de Karatê da Academia Bushido enfileirada em frente aos quadros da tradição japonesa, com alunos e professores de faixas variadas',
    fit: 'cover',
  },
]

export default function Gallery() {
  return (
    <section
      id="turmas"
      aria-labelledby="turmas-heading"
      className="bg-black py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold tracking-[0.2em] text-[#CD0E22] uppercase">
            Nossa Comunidade
          </p>
          <h2
            id="turmas-heading"
            className="mt-3 text-3xl font-extrabold text-white sm:text-4xl"
          >
            Mais que uma academia, uma família no tatame
          </h2>
          <p className="mt-4 text-lg text-white/65">
            Na Academia Bushido, crianças, jovens e adultos treinam lado a
            lado, guiados pelos princípios do Bushido: respeito, disciplina e
            superação. Cada aula é um passo na formação do caráter, dentro e
            fora do tatame. Nosso ambiente é acolhedor e seguro, feito para
            que cada aluno evolua no seu próprio ritmo, cercado por uma
            verdadeira família marcial.
          </p>

          <a
            href={whatsappLink(
              'Olá! Gostaria de conhecer a comunidade da Academia Bushido.',
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[#CD0E22] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-[#8A0A17]/40 transition-all duration-200 hover:bg-[#8A0A17] hover:shadow-xl"
          >
            Venha Treinar com a Gente
            <ArrowRight
              size={20}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </a>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-2">
          {CLASSES.map(({ image, modality, alt, fit, position }) => (
            <figure
              key={modality}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <img
                src={image}
                alt={alt}
                className={`h-full w-full transition-transform duration-500 group-hover:scale-105 ${
                  fit === 'contain' ? 'object-contain' : 'object-cover'
                } ${position ?? ''}`}
              />
              {fit !== 'contain' && (
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"
                />
              )}
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-5 text-lg font-bold text-white">
                {modality}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
