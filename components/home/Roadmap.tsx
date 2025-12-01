"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Sprout, Building2, Leaf, Droplets } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRef } from "react";

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
        gradient: "from-primary/20 to-primary/5",
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
        gradient: "from-secondary/20 to-secondary/5",
    },
];

export function Roadmap() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"],
    });

    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section ref={containerRef} className="py-24 bg-gradient-to-b from-white via-beige-light/20 to-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 10 L35 20 L45 22 L37 30 L39 40 L30 35 L21 40 L23 30 L15 22 L25 20 Z' fill='%234A5D42' fill-opacity='0.4'/%3E%3C/svg%3E")`,
                    backgroundSize: "60px 60px",
                }} />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-dark mb-6">
                            Notre Feuille de Route
                        </h2>
                        <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
                            Une vision à long terme pour installer durablement la filière chanvre en Béarn
                        </p>
                    </motion.div>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Animated Central Line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 hidden md:block">
                        <div className="absolute inset-0 bg-gradient-to-b from-border/30 via-border/50 to-border/30 rounded-full" />
                        <motion.div
                            style={{ height: lineHeight }}
                            className="absolute top-0 left-0 right-0 bg-gradient-to-b from-primary via-secondary to-primary rounded-full"
                        />
                    </div>

                    <div className="space-y-16 md:space-y-32">
                        {milestones.map((milestone, index) => (
                            <motion.div
                                key={milestone.year}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className={cn(
                                    "relative flex flex-col md:flex-row gap-8 items-center",
                                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                                )}
                            >
                                {/* Content Card */}
                                <div className="flex-1 w-full md:w-auto">
                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                        className={`relative bg-gradient-to-br ${milestone.gradient} backdrop-blur-sm p-8 md:p-10 rounded-3xl border-2 border-border/30 hover:border-primary/40 transition-all duration-500 shadow-lg hover:shadow-2xl overflow-hidden group`}
                                    >
                                        {/* Decorative Corner */}
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/20 to-transparent rounded-bl-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                        {/* Year Badge */}
                                        <div className="flex items-center gap-4 mb-6">
                                            <motion.span
                                                whileHover={{ scale: 1.1, rotate: 5 }}
                                                className={cn(
                                                    "px-5 py-2 rounded-full text-white text-sm font-bold uppercase tracking-wider shadow-lg",
                                                    milestone.color
                                                )}
                                            >
                                                {milestone.year}
                                            </motion.span>
                                            <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                                                {milestone.title}
                                            </h3>
                                        </div>

                                        <p className="text-foreground/70 text-lg mb-8 leading-relaxed">
                                            {milestone.description}
                                        </p>

                                        {/* Items List */}
                                        <ul className="space-y-4">
                                            {milestone.items.map((item, i) => (
                                                <motion.li
                                                    key={i}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: i * 0.1 }}
                                                    className="flex items-center gap-4 text-foreground/80 font-medium"
                                                >
                                                    <div className="bg-white/80 p-2 rounded-lg shadow-sm">
                                                        <item.icon className="w-5 h-5 text-primary" />
                                                    </div>
                                                    <span>{item.text}</span>
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                </div>

                                {/* Center Dot with Pulse */}
                                <div className="relative z-20 flex items-center justify-center shrink-0">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ type: "spring", stiffness: 200, delay: index * 0.2 }}
                                        className="relative"
                                    >
                                        {/* Pulsing Ring */}
                                        <motion.div
                                            animate={{
                                                scale: [1, 1.5, 1],
                                                opacity: [0.5, 0, 0.5],
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                delay: index * 0.5,
                                            }}
                                            className={cn(
                                                "absolute inset-0 rounded-full",
                                                milestone.color,
                                                "opacity-30"
                                            )}
                                        />

                                        {/* Main Dot */}
                                        <div className="relative w-16 h-16 rounded-full bg-white border-4 border-primary shadow-xl flex items-center justify-center">
                                            <div className={cn("w-6 h-6 rounded-full", milestone.color)} />
                                        </div>
                                    </motion.div>
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
