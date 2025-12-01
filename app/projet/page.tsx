import { Section } from "@/components/ui/Section";
import { Roadmap } from "@/components/home/Roadmap";
import { Handshake, Users, Building } from "lucide-react";
import { PartnershipForm } from "@/components/project/PartnershipForm";

export default function ProjectPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <Section className="bg-secondary text-white pt-32 pb-20">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
                        Le Projet Collaboratif
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 font-light">
                        Plus qu'une ferme, un écosystème. Ensemble, construisons la filière chanvre de demain.
                    </p>
                </div>
            </Section>

            {/* Intro */}
            <Section>
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-secondary font-bold uppercase tracking-widest mb-4 text-sm">Esprit Collectif</h2>
                    <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                        Khalamoo se veut être un moteur pour le territoire. Nous ne travaillons pas seuls, mais en synergie avec les agriculteurs, les artisans, les entreprises et les collectivités locales.
                    </p>
                </div>
            </Section>

            {/* Pillars */}
            <Section className="bg-beige-light">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
                        <div className="w-16 h-16 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                            <Users className="w-8 h-8" />
                        </div>
                        <h3 className="font-serif font-bold text-xl mb-4">Partenariats Agricoles</h3>
                        <p className="text-foreground/70">
                            Accompagner d'autres agriculteurs dans la diversification de leurs cultures avec le chanvre.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
                        <div className="w-16 h-16 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                            <Handshake className="w-8 h-8" />
                        </div>
                        <h3 className="font-serif font-bold text-xl mb-4">Artisans Locaux</h3>
                        <p className="text-foreground/70">
                            Fournir une matière première de qualité pour les transformateurs locaux (textile, bâtiment, alimentaire).
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
                        <div className="w-16 h-16 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                            <Building className="w-8 h-8" />
                        </div>
                        <h3 className="font-serif font-bold text-xl mb-4">Territoire</h3>
                        <p className="text-foreground/70">
                            Participer au dynamisme économique et écologique du Béarn et de la Nouvelle-Aquitaine.
                        </p>
                    </div>
                </div>
            </Section>

            {/* Roadmap */}
            <div className="bg-white">
                <Roadmap />
            </div>

            {/* Partnership Form */}
            <Section className="bg-beige-light/50" id="contact">
                <PartnershipForm />
            </Section>
        </div>
    );
}
