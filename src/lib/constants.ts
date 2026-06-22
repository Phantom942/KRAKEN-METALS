export const SITE = {
  name: 'KRAKEN METALS',
  url: 'https://www.kraken-metals.fr',
  phone: '06 48 74 56 68',
  phoneHref: 'tel:+33648745668',
  address: '9 rue Michelet',
  city: '94200 Ivry-sur-Seine',
  /** Lien vers la carte (geo: pour "Ouvrir avec" Waze / Google Maps / Plan sur mobile) */
  mapsUrl: 'geo:0,0?q=9+rue+Michelet,+94200+Ivry-sur-Seine,+France',
  /** URL Google Maps pour desktop */
  mapsUrlWeb: 'https://www.google.com/maps/search/?api=1&query=9+rue+Michelet,+94200+Ivry-sur-Seine,+France',
  email: 'contact@kraken-metals.fr',
  hours: {
    weekdays: '10h - 19h',
    saturday: '10h - 19h',
    sunday: '10h - 19h',
  },
} as const;

/** Mettre active: false pour réouvrir le site (bandeau + horaires). */
export const CLOSURE = {
  active: true,
  headline: 'Fermeture temporaire',
  message: 'Notre atelier est momentanément fermé — reprise du service très bientôt.',
  contactNote: 'Vous pouvez nous laisser un message par WhatsApp ou email, nous vous recontacterons dès la réouverture.',
  hoursLabel: 'Fermeture temporaire',
  hoursDetail: 'Réouverture prochainement',
} as const;

export function getPublicHours() {
  if (CLOSURE.active) {
    return { label: CLOSURE.hoursLabel, detail: CLOSURE.hoursDetail };
  }
  return { label: 'Ouvert 7j/7', detail: `Lun - Dim : ${SITE.hours.weekdays}` };
}

/** Emplacement publicitaire garage — modifier ici pour changer la pub. */
export const GARAGE_AD = {
  active: true,
  showCompactInFooter: true,
  /** RED-K MOTORS reste ouvert pendant la fermeture soudure Kraken Metals */
  openDuringClosure: true,
  badge: 'Garage partenaire',
  name: 'RED-K MOTORS',
  title: 'RED-K MOTORS',
  subtitle: 'Garage multimarque à Ivry-sur-Seine (94)',
  url: 'https://redk-motors.me',
  urlLabel: 'redk-motors.me',
  logo: '/redk-motors-logo.png',
  logoAlt: 'Logo RED-K MOTORS — garage automobile Ivry-sur-Seine',
  description:
    'Mécanique, diagnostic électronique, carrosserie, entretien, freins et pneus. Devis gratuit — diagnostic expliqué avant toute réparation. Lun–sam 9h–19h.',
  messageDuringClosure:
    'La soudure Kraken Metals est fermée temporairement — RED-K MOTORS reste ouvert au 9 rue Michelet : mécanique, diagnostic, carrosserie et entretien.',
  services: [
    'Mécanique & diagnostic',
    'Carrosserie & peinture',
    'Entretien & révision',
    'Freins & pneumatiques',
  ],
  phone: '06 48 74 56 68',
  phoneHref: 'tel:+33648745668',
  whatsappText: 'Bonjour, je contacte RED-K MOTORS pour mon véhicule.',
  ctaLabel: 'Appeler RED-K MOTORS',
  secondaryCtaLabel: 'RDV sur redk-motors.me',
  secondaryCtaHref: 'https://redk-motors.me/contact/',
  links: [
    { label: 'Garage Ivry →', href: 'https://redk-motors.me/garage-ivry-sur-seine/' },
    { label: 'Diagnostic auto →', href: 'https://redk-motors.me/diagnostic/' },
    { label: 'Tarifs →', href: 'https://redk-motors.me/tarifs/' },
  ],
} as const;
