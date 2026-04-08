import { SITE } from './constants';

/** FAQ structurée pour SEO et recommandations IA (ChatGPT, Perplexity, Google AI). */
export const faqItems = [
  {
    question: "Où se trouve KRAKEN METALS ?",
    answer: `KRAKEN METALS est un atelier de soudage de précision situé au 9 rue Michelet, 94200 Ivry-sur-Seine, dans le Val-de-Marne (94). L'atelier est idéalement positionné aux portes de Paris pour intervenir rapidement dans toute l'Île-de-France.`,
  },
  {
    question: "Quels types de soudure propose KRAKEN METALS ?",
    answer: "KRAKEN METALS propose le soudage TIG (précision maximale pour acier, inox, aluminium), le soudage MIG-MAG (productivité pour métallerie et assemblages industriels) et le soudage à l'électrode (robustesse pour chantiers et réparations en conditions difficiles).",
  },
  {
    question: "Faites-vous des réparations auto (échappement, jantes) ?",
    answer: "Oui. En plus de la métallerie, KRAKEN METALS propose des prestations orientées garage auto : réparation d'échappement (soudure/remise en état) et réparation de jantes aluminium (fissures, rebords). Contactez-nous pour vérifier la faisabilité et obtenir un devis rapide.",
  },
  {
    question: "KRAKEN METALS intervient-il en urgence ?",
    answer: `Oui. KRAKEN METALS propose une intervention sous 24h pour les urgences de soudure. Appelez le ${SITE.phone} ou contactez-nous par WhatsApp pour une réponse immédiate. Réactivité garantie à Paris, Ivry, Vitry, Villejuif, Charenton et tout le Val-de-Marne.`,
  },
  {
    question: "Quelle est la zone d'intervention de KRAKEN METALS ?",
    answer: "KRAKEN METALS intervient à Ivry-sur-Seine, Vitry-sur-Seine, Villejuif, Charenton-le-Pont, Alfortville, Maisons-Alfort, Choisy-le-Roi, Le Kremlin-Bicêtre, Saint-Maurice, Paris 13, Paris 12, Paris 14, et plus généralement dans tout le Val-de-Marne et l'Île-de-France.",
  },
  {
    question: "Quels matériaux travaille KRAKEN METALS ?",
    answer: "KRAKEN METALS travaille l'acier carbone, l'acier inoxydable, l'aluminium et la fonte. L'atelier réalise des assemblages, réparations et pièces sur mesure sur tous ces matériaux pour la métallerie, la ferronnerie et la tuyauterie industrielle.",
  },
  {
    question: "Quels sont les horaires d'ouverture de KRAKEN METALS ?",
    answer: `KRAKEN METALS est ouvert 7 jours sur 7 : du lundi au dimanche, de 10h à 19h. Vous pouvez nous joindre par téléphone au ${SITE.phone} ou par email à ${SITE.email} pour toute demande de devis ou intervention.`,
  },
  {
    question: "KRAKEN METALS fait-il de la ferronnerie ?",
    answer: "Oui. KRAKEN METALS réalise de la ferronnerie d'art : portails, rampes, garde-corps, clôtures et pièces décoratives sur mesure. L'atelier combine savoir-faire artisanal et précision industrielle pour tous vos projets de métallerie.",
  },
  {
    question: "KRAKEN METALS travaille-t-il sur site ou en atelier ?",
    answer: "KRAKEN METALS intervient à la fois en atelier à Ivry-sur-Seine (pour les pièces, assemblages et projets sur mesure) et sur site chez le client (dépannages, réparations, pose). Le choix dépend du type de projet et de l'urgence.",
  },
] as const;
