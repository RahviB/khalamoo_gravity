"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ShoppingBag, ArrowUpRight, Sparkles } from "lucide-react";
import { Product } from "@/types/product";
import { useCart } from "@/contexts/CartContext";
import { useRef, MouseEvent } from "react";

interface ProductCardProps {
    product: Product;
    featured?: boolean;
}

export function ProductCard({ product, featured = false }: ProductCardProps) {
    const { addToCart } = useCart();
    const cardRef = useRef<HTMLDivElement>(null);

    // 3D Tilt Effect
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const handleAddToCart = (e: React.MouseEvent) => {
        e.preventDefault();
        addToCart({
            productId: product.id,
            name: product.name,
            price: product.price,
            image: product.images[0],
            slug: product.slug,
        });
    };

    const isOnSale = product.salePrice && product.regularPrice && product.salePrice < product.regularPrice;

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className={`group relative bg-white rounded-2xl overflow-hidden transition-all duration-500 ${featured
                    ? "shadow-2xl shadow-primary/20 ring-2 ring-primary/30"
                    : "shadow-md hover:shadow-2xl"
                }`}
        >
            {/* Featured Badge */}
            {featured && (
                <div className="absolute top-4 right-4 z-20">
                    <motion.div
                        animate={{
                            boxShadow: [
                                "0 0 20px rgba(255, 215, 0, 0.5)",
                                "0 0 40px rgba(255, 215, 0, 0.8)",
                                "0 0 20px rgba(255, 215, 0, 0.5)",
                            ],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2"
                    >
                        <Sparkles className="w-3 h-3" />
                        Coup de Cœur
                    </motion.div>
                </div>
            )}

            {/* Origin Stamp */}
            <div className="absolute top-4 left-4 z-20 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-primary border border-primary/20 shadow-lg">
                {product.origin}
            </div>

            {/* Sale Badge */}
            {isOnSale && (
                <div className="absolute top-16 right-4 z-20 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                    Promo
                </div>
            )}

            {/* Glassmorphism Shine Effect */}
            <div className="absolute inset-0 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 via-transparent to-transparent" />
            </div>

            {/* Image Container */}
            <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-beige-light to-beige-dark">
                <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    style={{ transform: "translateZ(20px)" }}
                />

                {/* Overlay Actions */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleAddToCart}
                        className="bg-white/90 backdrop-blur-sm text-primary p-4 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-primary hover:text-white shadow-xl"
                    >
                        <ShoppingBag className="w-5 h-5" />
                    </motion.button>
                    <Link
                        href={`/produits/${product.slug}`}
                        className="bg-white/90 backdrop-blur-sm text-primary p-4 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75 hover:bg-primary hover:text-white shadow-xl"
                    >
                        <ArrowUpRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>

            {/* Content */}
            <div className="p-6" style={{ transform: "translateZ(40px)" }}>
                <div className="flex justify-between items-start mb-3">
                    <h3 className="font-serif font-bold text-xl text-foreground group-hover:text-primary transition-colors line-clamp-1">
                        {product.name}
                    </h3>
                    <div className="flex flex-col items-end gap-1">
                        {isOnSale ? (
                            <>
                                <span className="text-xs text-foreground/40 line-through">
                                    {product.regularPrice!.toFixed(2)}€
                                </span>
                                <span className="font-bold text-xl text-red-600">
                                    {product.salePrice!.toFixed(2)}€
                                </span>
                            </>
                        ) : (
                            <span className="font-bold text-xl text-primary">
                                {product.price.toFixed(2)}€
                            </span>
                        )}
                    </div>
                </div>

                <p className="text-sm text-foreground/60 mb-4 line-clamp-2 min-h-[2.5em]">
                    {product.shortDescription}
                </p>

                {/* Specs */}
                <div className="flex gap-2 text-xs font-bold border-t border-border/40 pt-4">
                    {product.cbdContent > 0 && (
                        <span className="bg-gradient-to-r from-primary/10 to-primary/5 px-3 py-1.5 rounded-lg text-primary border border-primary/20">
                            CBD {product.cbdContent}%
                        </span>
                    )}
                    {product.thcContent > 0 && (
                        <span className="bg-gradient-to-r from-secondary/10 to-secondary/5 px-3 py-1.5 rounded-lg text-secondary border border-secondary/20">
                            THC &lt;{product.thcContent}%
                        </span>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
