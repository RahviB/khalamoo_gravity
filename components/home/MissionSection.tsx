"use client";

import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";
import { Sprout, Sun, Users, Zap } from "lucide-react";

const missions = [
    {
        icon: Sprout,
        title: "Réintroduire le chanvre",
        description: "Une culture d'avenir, résiliente et adaptée au changement climatique en Béarn.",
        size: "large", // For bento grid
        gradient: "from-green-500/10 to-emerald-500/10",
    },
    {
        icon: Sun,
        title: "Transition écologique",
        description: "Cultiver sans chimie, en nourrissant les sols plutôt que de les épuiser.",
        size: "medium",
        gradient: "from-yellow-500/10 to-orange-500/10",
    },
    {
        icon: Users,
        title: "Redynamiser les campagnes",
        description: "Créer des emplois et du lien grâce aux nombreux débouchés de la filière.",
        size: "medium",
        gradient: "from-blue-500/10 to-cyan-500/10",
    },
    {
        icon: Zap,
        title: "Haut potentiel",
        description: "Fibres, graines, huiles, matériaux... Une seule plante, mille ressources.",
        size: "small",
        gradient: "from-purple-500/10 to-pink-500/10",
    },
];

export function MissionSection() {
    return (
        <Section className="bg-gradient-to-b from-white via-beige-light/30 to-white relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl" />
            </div>

            <div className="relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-primary font-bold uppercase tracking-widest mb-4 text-sm">Notre Mission</h2>
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 leading-tight max-w-4xl mx-auto">
                        Un nouvel opérateur agroécologique en Béarn
                    </h3>
                    <div className="max-w-3xl mx-auto">
                        <p className="text-lg text-foreground/70 mb-6">
                            KHALAMOO est une jeune ferme chanvrière installée entre Lasseube et les Hauts de Gan.
                            Notre vocation : réhabiliter la culture du chanvre sur notre territoire.
                        </p>
                        <blockquote className="border-l-4 border-primary pl-6 italic text-foreground/90 text-xl font-light">
                            « Que les liens du chanvre, réputés durables et inusables, puissent s'appliquer au sein de notre activité ! »
                        </blockquote>
                    </div>
                </motion.div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                    {missions.map((mission, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`group relative overflow-hidden rounded-3xl border border-border/50 hover:border-primary/30 transition-all duration-500 ${mission.size === "large" ? "md:col-span-2 lg:row-span-2" :
                                    mission.size === "medium" ? "lg:col-span-1" :
                                        "lg:col-span-1"
                                }`}
                        >
                            {/* Gradient Background */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${mission.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                            {/* Card Content */}
                            <div className={`relative bg-white/80 backdrop-blur-sm p-8 h-full flex flex-col ${mission.size === "large" ? "lg:p-12" : "p-8"
                                }`}>
                                {/* Icon */}
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                    className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-shadow"
                                >
                                    <mission.icon className="w-8 h-8 text-primary" />
                                </motion.div>

                                {/* Content */}
                                <h4 className={`font-serif font-bold mb-4 text-foreground group-hover:text-primary transition-colors ${mission.size === "large" ? "text-3xl lg:text-4xl" : "text-2xl"
                                    }`}>
                                    {mission.title}
                                </h4>
                                <p className={`text-foreground/70 leading-relaxed ${mission.size === "large" ? "text-lg" : "text-base"
                                    }`}>
                                    {mission.description}
                                </p>

                                {/* Decorative Element */}
                                <div className="mt-auto pt-6">
                                    <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
