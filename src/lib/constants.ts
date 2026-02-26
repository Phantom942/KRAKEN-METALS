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
    weekdays: '9h - 20h',
    saturday: '9h - 20h',
    sunday: '9h - 20h',
  },
} as const;
