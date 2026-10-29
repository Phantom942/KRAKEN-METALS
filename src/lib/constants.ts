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
