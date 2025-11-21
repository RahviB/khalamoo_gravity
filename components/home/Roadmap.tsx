"use client";

import { motion } from "framer-motion";
import { Sprout, Building2, Leaf, Droplets } from "lucide-react";
import { cn } from "@/lib/utils";

const milestones = [
    {
        year: "Année 1",
        title: "Lancement & Ancrage",
        description: "Valoriser les premières récoltes et amorcer la transformation locale.",
        items: [
            { icon: Leaf, text: "Fleurs Premium (Infusions, Extraits)" },
            { icon: Droplets, text: "Cosmétiques Naturels (Baumes, Huiles)" },
            { icon: Sprout, text: "Culture sur 0.5 hectare" },
        ],
        color: "bg-primary",
    },
    {
        year: "Année 2",
        title: "Expansion & Diversification",
        description: "Augmenter la surface et toucher de nouvelles filières.",
        items: [
            { icon: Sprout, text: "Extension des cultures" },
            { icon: Leaf, text: "Alimentation (Graines, Farine)" },
            { icon: Building2, text: "Éco-construction (Béton de chanvre)" },
        ],
        color: "bg-secondary",
    },
];

export function Roadmap() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-dark mb-4">
                        Notre Feuille de Route
                    </h2>
                    <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                        Une vision à long terme pour installer durablement la filière chanvre en Béarn.
                    </p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Central Line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block" />

                    <div className="space-y-12 md:space-y-24">
                        {milestones.map((milestone, index) => (
                            <motion.div
                                key={milestone.year}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className={cn(
                                    "relative flex flex-col md:flex-row gap-8 items-center",
                                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                                )}
                            >
                                {/* Content */}
                                <div className="flex-1 w-full md:w-auto">
                                    <div className="bg-beige-light p-8 rounded-2xl shadow-sm border border-border/50 hover:shadow-md transition-shadow">
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className={cn("px-3 py-1 rounded-full text-white text-sm font-bold", milestone.color)}>
                                                {milestone.year}
                                            </span>
                                            <h3 className="text-xl font-serif font-bold text-primary-dark">
                                                {milestone.title}
                                            </h3>
                                        </div>
                                        <p className="text-foreground/70 mb-6">
                                            {milestone.description}
                                        </p>
                                        <ul className="space-y-3">
                                            {milestone.items.map((item, i) => (
                                                <li key={i} className="flex items-center gap-3 text-sm font-medium text-foreground/80">
                                                    <item.icon className="w-4 h-4 text-primary" />
                                                    {item.text}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Center Point */}
                                <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-white border-4 border-primary shadow-sm shrink-0">
                                    <div className="w-3 h-3 rounded-full bg-primary" />
                                </div>

                                {/* Spacer for opposite side */}
                                <div className="flex-1 hidden md:block" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
