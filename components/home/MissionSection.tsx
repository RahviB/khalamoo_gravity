"use client";

import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";
import { Sprout, Sun, Users, Zap } from "lucide-react";

const missions = [
    {
        icon: Sprout,
        title: "Réintroduire le chanvre",
        description: "Une culture d'avenir, résiliente et adaptée au changement climatique en Béarn.",
    },
    {
        icon: Sun,
        title: "Transition écologique",
        description: "Cultiver sans chimie, en nourrissant les sols plutôt que de les épuiser.",
    },
    {
        icon: Users,
        title: "Redynamiser les campagnes",
        description: "Créer des emplois et du lien grâce aux nombreux débouchés de la filière.",
    },
    {
        icon: Zap,
        title: "Haut potentiel",
        description: "Fibres, graines, huiles, matériaux... Une seule plante, mille ressources.",
    },
];

export function MissionSection() {
    return (
        <Section className="bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-primary font-bold uppercase tracking-widest mb-4 text-sm">Notre Mission</h2>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-8 leading-tight">
                        Un nouvel opérateur agroécologique en Béarn
                    </h3>
                    <div className="prose prose-lg text-foreground/70 mb-8">
                        <p>
                            KHALAMOO est une jeune ferme chanvrière installée entre Lasseube et les Hauts de Gan.
                            Notre vocation : réhabiliter la culture du chanvre sur notre territoire.
                        </p>
                        <blockquote className="border-l-4 border-primary pl-4 italic text-foreground/90 my-6">
                            « Que les liens du chanvre, réputés durables et inusables, puissent s'appliquer au sein de notre activité ! »
                        </blockquote>
                    </div>
                </motion.div>

                {/* Grid of Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {missions.map((mission, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-beige-light p-6 rounded-2xl border border-border/50 hover:border-primary/30 transition-colors"
                        >
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm text-primary">
                                <mission.icon className="w-6 h-6" />
                            </div>
                            <h4 className="font-serif font-bold text-lg mb-2 text-foreground">{mission.title}</h4>
                            <p className="text-sm text-foreground/70 leading-relaxed">
                                {mission.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
