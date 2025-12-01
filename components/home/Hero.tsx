"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, MapPin, Sprout, Award } from "lucide-react";
import { TextReveal } from "@/components/ui/TextReveal";
import { useRef } from "react";
import { MagneticButton } from "@/components/ui/MagneticButton";

const stats = [
    { icon: MapPin, value: "Lasseube & Gan", label: "Origine Béarn" },
    { icon: Sprout, value: "0.5 ha", label: "Surface cultivée" },
    { icon: Award, value: "100%", label: "Agroécologie" },
];

export function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

    return (
        <section ref={ref} className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-secondary-dark">
            {/* Animated Grain Texture */}
            <div className="absolute inset-0 z-[1] opacity-[0.15] mix-blend-overlay pointer-events-none">
                <motion.div
                    animate={{
                        backgroundPosition: ["0% 0%", "100% 100%"],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "linear",
                    }}
                    className="w-full h-full"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                        backgroundSize: "200px 200px",
                    }}
                />
            </div>

            {/* Parallax Background */}
            <motion.div style={{ y, scale }} className="absolute inset-0 z-0">
                <Image
                    src="/images/IMG-20251110-WA0106.jpg"
                    alt="Champs de chanvre en Béarn"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-secondary-dark/60" />
            </motion.div>

            {/* Floating Stats Badges */}
            <div className="absolute inset-0 z-[2] pointer-events-none">
                {stats.map((stat, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2 + index * 0.2, duration: 0.8 }}
                        className={`absolute hidden lg:block ${index === 0 ? "top-32 left-20" :
                                index === 1 ? "top-48 right-24" :
                                    "bottom-32 left-32"
                            }`}
                    >
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-6 py-4 shadow-2xl"
                        >
                            <div className="flex items-center gap-3">
                                <div className="bg-primary/20 p-2 rounded-lg">
                                    <stat.icon className="w-5 h-5 text-beige-light" />
                                </div>
                                <div>
                                    <div className="text-beige-light font-bold text-lg">{stat.value}</div>
                                    <div className="text-beige-light/70 text-xs uppercase tracking-wider">{stat.label}</div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                ))}
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 relative z-10 text-center text-white">
                <div className="mb-8 overflow-hidden">
                    <TextReveal
                        text="Le Chanvre Renaît en Béarn"
                        className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-tight justify-center text-beige-light drop-shadow-2xl"
                    />
                </div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-xl md:text-2xl max-w-2xl mx-auto mb-12 text-beige-light/90 font-light tracking-wide"
                >
                    Du sol à l'âme. Une agriculture agroécologique pour des produits sains, locaux et durables.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                >
                    <Link href="/produits">
                        <MagneticButton className="px-8 py-4 text-lg flex items-center gap-2 bg-primary hover:bg-primary-dark shadow-xl shadow-primary/20">
                            Découvrir nos produits
                            <ArrowRight className="w-5 h-5" />
                        </MagneticButton>
                    </Link>
                    <Link href="/projet">
                        <MagneticButton className="bg-white/10 hover:bg-white/20 border border-white/30 px-8 py-4 text-lg backdrop-blur-md shadow-xl">
                            Le Projet
                        </MagneticButton>
                    </Link>
                </motion.div>
            </div>

            {/* Enhanced Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70 flex flex-col items-center gap-3 z-10"
            >
                <span className="text-xs uppercase tracking-widest font-medium">Découvrir</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex flex-col items-center"
                >
                    <Sprout className="w-5 h-5 mb-2" />
                    <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
                </motion.div>
            </motion.div>
        </section>
    );
}
