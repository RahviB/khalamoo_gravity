"use client";
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShoppingBag, ArrowUpRight } from "lucide-react";
import { Product } from "@/types/product";
import { cn } from "@/lib/utils";
import { useCart } from "@/contexts/CartContext";

interface ProductCardProps {
    product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    const { addToCart } = useCart();

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

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
        >
            {/* Origin Stamp */}
            <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-primary border border-primary/20 shadow-sm">
                {product.origin}
            </div>

            {/* Image Container */}
            <div className="relative aspect-[4/5] overflow-hidden bg-beige-light">
                <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay Actions */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <button
                        onClick={handleAddToCart}
                        className="bg-white text-primary p-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-primary hover:text-white shadow-lg"
                    >
                        <ShoppingBag className="w-5 h-5" />
                    </button>
                    <Link
                        href={`/produits/${product.slug}`}
                        className="bg-white text-primary p-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75 hover:bg-primary hover:text-white shadow-lg"
                    >
                        <ArrowUpRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="font-serif font-bold text-lg text-foreground group-hover:text-primary transition-colors line-clamp-1">
                        {product.name}
                    </h3>
                    <span className="font-medium text-primary-dark">
                        {product.price.toFixed(2)}€
                    </span>
                </div>

                <p className="text-sm text-foreground/60 mb-4 line-clamp-2 min-h-[2.5em]">
                    {product.shortDescription}
                </p>

                {/* Specs */}
                <div className="flex gap-3 text-xs font-medium text-foreground/50 border-t border-border/40 pt-4">
                    {product.cbdContent > 0 && (
                        <span className="bg-primary/5 px-2 py-1 rounded text-primary-dark">
                            CBD {product.cbdContent}%
                        </span>
                    )}
                    {product.thcContent > 0 && (
                        <span className="bg-secondary/5 px-2 py-1 rounded text-secondary-dark">
                            THC &lt;{product.thcContent}%
                        </span>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
