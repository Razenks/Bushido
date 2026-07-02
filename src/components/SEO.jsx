import { Helmet } from 'react-helmet-async'
import { business } from '../data/business'

// LocalBusiness structured data (Schema.org / JSON-LD).
// Replace placeholder fields (url, image, geo, priceRange) with real production values before launch.
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'SportsActivityLocation',
  name: business.name,
  description:
    'Academia de artes marciais e Newseitai (quiropraxia japonesa) em Campo Grande - MS.',
  image: 'https://www.exemplo.com.br/logo.jpg', // TODO: substituir pela URL de produção da logo
  url: 'https://www.exemplo.com.br', // TODO: substituir pela URL de produção do site
  telephone: business.phoneE164,
  priceRange: '$$', // TODO: ajustar conforme tabela de planos
  address: {
    '@type': 'PostalAddress',
    streetAddress: business.street,
    addressLocality: business.city,
    addressRegion: business.state,
    postalCode: business.zipCode,
    addressCountry: 'BR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '-20.4697', // TODO: confirmar coordenadas exatas
    longitude: '-54.6201', // TODO: confirmar coordenadas exatas
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ], // TODO: confirmar dias de funcionamento com o cliente
    opens: '07:00',
    closes: '21:30',
  },
  sameAs: [business.instagramUrl],
}

export default function SEO() {
  return (
    <Helmet>
      <title>
        Academia Bushido em Campo Grande - MS | Artes Marciais e Newseitai
      </title>
      <meta
        name="description"
        content="Academia Bushido: referência em artes marciais e Newseitai (quiropraxia japonesa) em Campo Grande - MS. Fortaleça corpo e mente com aulas para todas as idades. Agende sua aula experimental!"
      />
      <meta
        name="keywords"
        content="academia de lutas Campo Grande, artes marciais Campo Grande MS, newseitai, quiropraxia japonesa, Academia Bushido"
      />
      <link rel="canonical" href="https://www.exemplo.com.br" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="Academia Bushido em Campo Grande - MS | Artes Marciais e Newseitai"
      />
      <meta
        property="og:description"
        content="Referência em artes marciais e Newseitai (quiropraxia japonesa) em Campo Grande - MS. Agende sua aula experimental."
      />
      <meta property="og:image" content="/logo.jpg" />
      <meta property="og:locale" content="pt_BR" />

      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
    </Helmet>
  )
}
