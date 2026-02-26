import {
  Flame,
  Layers,
  CircleDot,
  Hexagon,
  Cog,
  Hammer,
  Fuel,
  Building2,
} from 'lucide-react';
import FadeIn from './FadeIn';

const services = [
  { icon: Flame, title: 'Soudage TIG', description: "Précision maximale pour acier, inox et aluminium. Idéal pour la ferronnerie d'art et les pièces fines." },
  { icon: Layers, title: 'Soudage MIG-MAG', description: 'Productivité et qualité pour les travaux de métallerie et assemblages industriels.' },
  { icon: CircleDot, title: "Soudage à l'électrode", description: 'Robustesse et versatilité pour les chantiers et réparations en conditions difficiles.' },
  { icon: Hexagon, title: 'Acier & Inox', description: 'Travail sur acier carbone et acier inoxydable pour tous vos projets structurels et alimentaires.' },
  { icon: Cog, title: 'Aluminium & Fonte', description: 'Expertise sur matériaux délicats : assemblage aluminium et réparation de fonte.' },
  { icon: Hammer, title: "Ferronnerie d'art", description: 'Portails, rampes, garde-corps et pièces décoratives sur mesure.' },
  { icon: Fuel, title: 'Tuyauterie industrielle', description: 'Conformité et qualité pour vos installations de tuyauterie et canalisations.' },
  { icon: Building2, title: 'Projets complexes', description: 'De la conception à la réalisation : pièces uniques et prototypes techniques.' },
];

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <FadeIn className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-slate-100">
            Nos spécialités en soudage de précision
          </h2>
          <p className="mt-4 sm:mt-6 text-slate-400 text-base sm:text-lg">
            Polyvalence totale : de la ferronnerie d&apos;art à la tuyauterie industrielle.
            Notre atelier couvre Paris, la Petite Couronne et le Grand Paris pour tous vos projets de métallerie en Île-de-France.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service, i) => (
            <FadeIn key={service.title} delay={i * 50}>
              <div className="group p-5 sm:p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/5 touch-manipulation h-full">
                <div className="w-14 h-14 rounded-xl bg-slate-800 flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-colors">
                  <service.icon className="w-7 h-7 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-slate-100 mb-2">{service.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
