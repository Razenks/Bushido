// Central place for business data (NAP - Name, Address, Phone).
// Keeping this consistent everywhere (Header, Footer, JSON-LD) matters for Local SEO.
export const business = {
  name: 'Academia Bushido',
  claim: 'Artes Marciais e Newseitai (Quiropraxia Japonesa)',
  city: 'Campo Grande',
  state: 'MS',
  region: 'Campo Grande - MS',
  street: 'Av. Fernando Corrêa da Costa, 1043',
  neighborhood: 'Centro',
  zipCode: '79002-820',
  fullAddress: 'Av. Fernando Corrêa da Costa, 1043 - Centro, Campo Grande - MS, 79002-820',
  phoneDisplay: '(67) 99604-4540',
  phoneE164: '+5567996044540',
  whatsappNumber: '5567996044540',
  hoursDisplay: '07:00 – 21:30',
  // NOTE: days of operation were not specified by the client — confirm and adjust before publishing.
  hoursISO: 'Mo-Sa 07:00-21:30',
  instagramUrl: 'https://www.instagram.com/academiabushidocg/',
  instagramHandle: '@academiabushidocg',
}

export const whatsappLink = (message) =>
  `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(message)}`
