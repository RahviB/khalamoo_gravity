"use client";

import { Section } from "@/components/ui/Section";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Leaf, Users, Package, TrendingUp } from "lucide-react";

const stats = [
    {
        icon: Leaf,
        value: 25000,
        suffix: "+",
        label: "Usages possibles",
        description: "du chanvre",
    },
    {
        icon: Users,
        value: 100,
        suffix: "%",
        label: "Local & Bio",
        description: "Cultivé en Béarn",
    },
    {
        icon: Package,
        value: 0.5,
        suffix: " ha",
        label: "Surface",
        description: "En production",
    },
    {
        icon: TrendingUp,
        value: 0,
        suffix: "",
        label: "Pesticides",
        description: "Zéro chimie",
    },
];

function AnimatedCounter({ value, suffix = "", duration = 2 }: { value: number; suffix?: string; duration?: number }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView) return;

        let startTime: number;
        const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

            setCount(Math.floor(progress * value));

            if (progress < 1) {
                requestAnimationFrame(step);
            }
        };

        requestAnimationFrame(step);
    }, [isInView, value, duration]);

    return <span ref={ref}>{count}{suffix}</span>;
}

export function StatsSection() {
    return (
        <Section className="relative bg-secondary-dark text-white overflow-hidden py-32">
            {/* Parallax Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[url('/images/IMG-20251110-WA0106.jpg')] bg-cover bg-center opacity-10 blur-sm" />
                <div className="absolute inset-0 bg-gradient-to-b from-secondary-dark via-secondary-dark/95 to-secondary-dark" />
            </div>

            {/* Animated Mesh Gradient */}
            <div className="absolute inset-0 opacity-20">
                <motion.div
                    animate={{
                        background: [
                            "radial-gradient(circle at 20% 50%, rgba(74, 93, 66, 0.3) 0%, transparent 50%)",
                            "radial-gradient(circle at 80% 50%, rgba(156, 107, 68, 0.3) 0%, transparent 50%)",
                            "radial-gradient(circle at 20% 50%, rgba(74, 93, 66, 0.3) 0%, transparent 50%)",
                        ],
                    }}
                    transition={{ duration: 10, repeat: Infinity }}
                    className="w-full h-full"
                />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
                        Le chanvre en chiffres
                    </h2>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto">
                        Une plante aux possibilités infinies, cultivée avec passion et respect
                    </p>
                </motion.div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden">
                                {/* Glow Effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative z-10">
                                    {/* Icon */}
                                    <motion.div
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center mb-6"
                                    >
                                        <stat.icon className="w-7 h-7 text-beige-light" />
                                    </motion.div>

                                    {/* Value */}
                                    <div className="text-5xl md:text-6xl font-serif font-bold mb-2 text-beige-light">
                                        <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                                    </div>

                                    {/* Label */}
                                    <div className="text-lg font-bold text-white/90 mb-1">
                                        {stat.label}
                                    </div>

                                    {/* Description */}
                                    <div className="text-sm text-white/60">
                                        {stat.description}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
