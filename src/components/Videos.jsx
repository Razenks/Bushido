import karate from '../assets/karate.webp'
import tatame from '../assets/tatame.jpg'
import muayThai from '../assets/muay-thai.webp'

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
    poster: muayThai,
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

        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-2">
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
