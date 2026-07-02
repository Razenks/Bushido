import { Swords, Star, Users, Calendar } from 'lucide-react'

const STATS = [
  { icon: Calendar, value: '2024', label: 'Fundada em' },
  { icon: Users, value: '6+', label: 'Idades Atendidas' },
  { icon: Swords, value: '7+', label: 'Modalidades Oferecidas' },
  { icon: Star, value: '4.9/5', label: 'Avaliação dos Alunos' },
]

// Placeholder testimonials — replace with real reviews before publishing.
const TESTIMONIALS = [
  {
    name: 'Ricardo Almeida',
    role: 'Aluno de Judô',
    quote:
      'A disciplina que aprendi na Academia Bushido mudou minha rotina e minha postura no dia a dia. O ambiente é sério, mas acolhedor.',
  },
  {
    name: 'Mariana Souza',
    role: 'Paciente de Newseitai',
    quote:
      'As sessões de Newseitai aliviaram uma dor nas costas que eu carregava há anos. Uma técnica surpreendente e muito bem aplicada.',
  },
  {
    name: 'Fernando Costa',
    role: 'Pai de aluno mirim',
    quote:
      'Meu filho ganhou foco, respeito e autoconfiança treinando aqui. Os professores são atenciosos e muito profissionais.',
  },
]

export default function SocialProof() {
  return (
    <section
      id="depoimentos"
      aria-labelledby="depoimentos-heading"
      className="bg-black py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Impact numbers */}
        <div className="grid grid-cols-2 gap-8 border-b border-white/10 pb-16 lg:grid-cols-4">
          {STATS.map(({ icon: Icon, value, label }) => (
            <div key={label} className="text-center">
              <Icon
                size={28}
                className="mx-auto text-[#CD0E22]"
                aria-hidden="true"
              />
              <p className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
                {value}
              </p>
              <p className="mt-1 text-sm text-white/60">{label}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mx-auto mt-16 max-w-2xl text-center">
          <p className="text-sm font-semibold tracking-[0.2em] text-[#CD0E22] uppercase">
            Depoimentos
          </p>
          <h2
            id="depoimentos-heading"
            className="mt-3 text-3xl font-extrabold text-white sm:text-4xl"
          >
            Quem treina, recomenda
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {TESTIMONIALS.map(({ name, role, quote }) => (
            <article
              key={name}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-8"
            >
              <div
                className="flex gap-1 text-[#CD0E22]"
                role="img"
                aria-label="Avaliação de 5 de 5 estrelas"
              >
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} size={16} fill="currentColor" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-white/80">
                “{quote}”
              </blockquote>
              <footer className="mt-6">
                <cite className="block text-base not-italic font-semibold text-white">
                  {name}
                </cite>
                <span className="text-sm text-white/50">{role}</span>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
