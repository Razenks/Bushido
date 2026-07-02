import {
  Swords,
  HeartPulse,
  Dumbbell,
  Users,
  ShieldCheck,
  ClipboardCheck,
  PersonStanding,
} from 'lucide-react'

const SERVICES = [
  {
    icon: Swords,
    title: 'Artes Marciais Tradicionais',
    description:
      'Seis modalidades com professores experientes, unindo técnica, disciplina e respeito à tradição marcial.',
    tags: ['Judô', 'Karatê', 'Muay Thai', 'Taekwondo', 'Jiu-Jítsu', 'Sipalki'],
  },
  {
    icon: HeartPulse,
    title: 'Newseitai - Quiropraxia Japonesa',
    description:
      'Técnica milenar para alívio de dores, realinhamento postural e equilíbrio do corpo de forma natural e não invasiva.',
  },
  {
    icon: PersonStanding,
    title: 'Pilates',
    description:
      'Espaço completo com equipamentos profissionais para fortalecimento, flexibilidade e reabilitação postural.',
  },
  {
    icon: Dumbbell,
    title: 'Treinamento Físico e Condicionamento',
    description:
      'Preparação física completa aliada à disciplina marcial, para ganho de força, resistência e mobilidade.',
  },
  {
    icon: Users,
    title: 'Aulas para Todas as Idades',
    description:
      'Turmas infantis, juvenis e adultas com metodologia adaptada a cada fase e objetivo do aluno.',
  },
  {
    icon: ShieldCheck,
    title: 'Ambiente Profissional e Seguro',
    description:
      'Estrutura completa com tatames apropriados e equipamentos de qualidade para a prática segura das lutas.',
  },
  {
    icon: ClipboardCheck,
    title: 'Avaliação e Acompanhamento Individual',
    description:
      'Acompanhamento personalizado da evolução física e postural de cada aluno ao longo da jornada.',
  },
]

export default function Services() {
  return (
    <section
      id="servicos"
      aria-labelledby="servicos-heading"
      className="bg-white py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold tracking-[0.2em] text-[#CD0E22] uppercase">
            Nossos Diferenciais
          </p>
          <h2
            id="servicos-heading"
            className="mt-3 text-3xl font-extrabold text-black sm:text-4xl"
          >
            Soluções completas para corpo e mente
          </h2>
          <p className="mt-4 text-lg text-black/65">
            Da prática marcial ao cuidado terapêutico, a Academia Bushido
            oferece um caminho completo de evolução física e pessoal.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:[&>*:nth-child(7)]:col-start-2">
          {SERVICES.map(({ icon: Icon, title, description, tags }) => (
            <article
              key={title}
              className="group rounded-2xl border border-black/10 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#CD0E22]/30 hover:shadow-xl"
            >
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#CD0E22]/10 text-[#CD0E22] transition-colors duration-300 group-hover:bg-[#CD0E22] group-hover:text-white">
                <Icon size={28} aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-black">{title}</h3>
              <p className="mt-3 text-black/65">{description}</p>
              {tags && (
                <ul className="mt-4 flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full bg-[#CD0E22]/10 px-3 py-1 text-sm font-medium text-[#8A0A17]"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
