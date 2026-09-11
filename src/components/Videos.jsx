import { useState } from 'react'
import karate from '../assets/karate.webp'
import tatame from '../assets/tatame.jpg'
import senseiIltonPoster from '../assets/sensei-ilton-poster.jpg'
import muayThaiSparring from '../assets/muay-thai-sparring.jpg'

// Vídeo longo (6 min) hospedado no Instagram: o site não carrega NADA do Instagram
// até a pessoa clicar no play — só então o iframe entra. O arquivo não pesa no deploy.
// `code` é o id do reel, sem o "?stkn=..." (token de compartilhamento).
const FEATURED_REEL = {
  code: 'DdHo7Jssu9N',
  poster: muayThaiSparring,
  title: 'Treino de Muay Thai na Academia Bushido',
  description:
    'Sparring de Muay Thai no tatame da Bushido: técnica, ritmo e controle sob orientação do professor.',
}

function FeaturedReel() {
  const [playing, setPlaying] = useState(false)

  return (
    <figure className="mx-auto mt-16 max-w-[380px] overflow-hidden rounded-2xl border border-white/10 bg-white/5">
      <div
        className={`relative overflow-hidden bg-black ${playing ? 'h-[560px]' : 'aspect-square'}`}
      >
        {playing ? (
          <iframe
            className="absolute inset-x-0 top-0 h-[560px] w-full"
            src={`https://www.instagram.com/reel/${FEATURED_REEL.code}/embed/`}
            title={FEATURED_REEL.title}
            loading="lazy"
            scrolling="no"
            allow="encrypted-media"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="group absolute inset-0 h-full w-full cursor-pointer"
            aria-label={`Assistir ao vídeo: ${FEATURED_REEL.title}`}
          >
            <img
              src={FEATURED_REEL.poster}
              alt={FEATURED_REEL.title}
              className="h-full w-full object-cover opacity-70 transition group-hover:opacity-90"
            />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#CD0E22] shadow-lg transition group-hover:scale-110">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="ml-1 h-7 w-7 text-white"
                  aria-hidden="true"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </span>
          </button>
        )}
      </div>
      <figcaption className="p-5">
        <p className="text-xs font-semibold tracking-[0.2em] text-[#CD0E22] uppercase">
          Vídeo em destaque
        </p>
        <h3 className="mt-2 text-lg font-bold text-white">
          {FEATURED_REEL.title}
        </h3>
        <p className="mt-1 text-sm text-white/60">{FEATURED_REEL.description}</p>
      </figcaption>
    </figure>
  )
}

// Videos live in /public/videos and are served as static files (see README / deploy notes).
const VIDEOS = [
  {
    src: '/videos/falando-sobre-o-judo.mp4',
    poster: tatame,
    title: 'Falando sobre o Judô',
    description:
      'O professor apresenta os fundamentos e os valores do Judô praticado na Academia Bushido.',
  },
  {
    src: '/videos/falando-sobre-o-karate.mp4',
    poster: karate,
    title: 'Falando sobre o Karatê',
    description:
      'Um panorama do Karatê na Academia Bushido: tradição, disciplina e evolução técnica.',
  },
  {
    src: '/videos/sensei-ilton-aulas-de-personal.mp4',
    poster: senseiIltonPoster,
    title: 'Aulas de Personal com o Sensei Ilton',
    description:
      'Sensei Ilton apresenta as aulas particulares (personal) de lutas, abertas para todos os públicos.',
  },
]

export default function Videos() {
  return (
    <section
      id="videos"
      aria-labelledby="videos-heading"
      className="bg-black py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold tracking-[0.2em] text-[#CD0E22] uppercase">
            Em Vídeo
          </p>
          <h2
            id="videos-heading"
            className="mt-3 text-3xl font-extrabold text-white sm:text-4xl"
          >
            Conheça nossas modalidades
          </h2>
          <p className="mt-4 text-lg text-white/65">
            Nossos professores falam sobre a prática das artes marciais na
            Academia Bushido.
          </p>
        </div>

        <FeaturedReel />

        <div className="mx-auto mt-8 grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-2">
          {VIDEOS.map(({ src, poster, title, description }) => (
            <figure
              key={src}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <video
                className="aspect-video w-full bg-black"
                src={src}
                poster={poster}
                controls
                preload="metadata"
                playsInline
              >
                Seu navegador não suporta a reprodução de vídeo.
              </video>
              <figcaption className="p-5">
                <h3 className="text-lg font-bold text-white">{title}</h3>
                <p className="mt-1 text-sm text-white/60">{description}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
