"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Utensils, Heart, Shirt, Hammer } from "lucide-react";
import { cn } from "@/lib/utils";

const uses = [
    {
        id: "food",
        title: "Alimentation",
        icon: Utensils,
        description: "Graines, huile riche en oméga, farine et protéines.",
        details: "Une source végétale complète pour une cuisine saine et locale.",
        color: "bg-green-100 text-green-800",
    },
    {
        id: "wellness",
        title: "Bien-être",
        icon: Heart,
        description: "Huiles, baumes et soins naturels.",
        details: "Pensés pour le confort du corps et de l'esprit.",
        color: "bg-pink-100 text-pink-800",
    },
    {
        id: "textile",
        title: "Textile",
        icon: Shirt,
        description: "Fils, tissus, cordages résistants.",
        details: "Une fibre naturelle, durable et écologique.",
        color: "bg-blue-100 text-blue-800",
    },
    {
        id: "construction",
        title: "Construction",
        icon: Hammer,
        description: "Béton de chanvre, isolants biosourcés.",
        details: "Des solutions pour bâtir en limitant l'empreinte carbone.",
        color: "bg-orange-100 text-orange-800",
    },
];

export function UsesModule() {
    const [activeUse, setActiveUse] = useState(uses[0]);

    return (
        <section className="py-20 bg-beige-light">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-dark mb-4">
                        Une plante, 25 000 usages
                    </h2>
                    <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                        Le chanvre est une ressource incroyable. Découvrez ses multiples facettes.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Interactive List */}
                    <div className="space-y-4">
                        {uses.map((use) => (
                            <button
                                key={use.id}
                                onClick={() => setActiveUse(use)}
                                className={cn(
                                    "w-full text-left p-6 rounded-xl transition-all duration-300 flex items-center gap-6 border-2",
                                    activeUse.id === use.id
                                        ? "border-primary bg-white shadow-lg scale-105"
                                        : "border-transparent bg-white/50 hover:bg-white hover:shadow-md"
                                )}
                            >
                                <div className={cn("p-4 rounded-full", use.color)}>
                                    <use.icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-foreground">{use.title}</h3>
                                    <p className="text-foreground/60">{use.description}</p>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Display Area */}
                    <div className="relative h-[400px] bg-white rounded-2xl shadow-xl overflow-hidden p-8 flex items-center justify-center text-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeUse.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="space-y-6"
                            >
                                <div className={cn("w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-6", activeUse.color)}>
                                    <activeUse.icon className="w-12 h-12" />
                                </div>
                                <h3 className="text-3xl font-serif font-bold text-primary-dark">
                                    {activeUse.title}
                                </h3>
                                <p className="text-xl text-foreground/80 leading-relaxed">
                                    {activeUse.details}
                                </p>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
