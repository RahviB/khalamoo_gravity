"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { TextReveal } from "@/components/ui/TextReveal";
import { useRef } from "react";

export function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section ref={ref} className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
            {/* Parallax Background */}
            <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
                <Image
                    src="/images/IMG-20251110-WA0106.jpg"
                    alt="Champs de chanvre en Béarn"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/30" /> {/* Darker Overlay for text pop */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60" /> {/* Vignette */}
            </motion.div>

            {/* Content */}
            <div className="container mx-auto px-4 relative z-10 text-center text-white">
                <div className="mb-8 overflow-hidden">
                    <TextReveal
                        text="Le Chanvre Renait en Béarn"
                        className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-tight justify-center text-beige-light drop-shadow-lg"
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
                    <Link
                        href="/produits"
                        className="group bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 flex items-center gap-2 hover:scale-105 shadow-lg hover:shadow-primary/25"
                    >
                        Découvrir nos produits
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                        href="/projet"
                        className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105"
                    >
                        Le Projet
                    </Link>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
            >
                <span className="text-xs uppercase tracking-widest">Découvrir</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
            </motion.div>
        </section>
    );
}
