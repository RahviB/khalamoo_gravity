"use client";

import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Product } from "@/types/product";
import { ProductCard } from "@/components/products/ProductCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductCarouselProps {
    products: Product[];
    title?: string;
}

export function ProductCarousel({ products, title = "Nos Produits Phares" }: ProductCarouselProps) {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        align: "start",
        loop: false,
        skipSnaps: false,
        dragFree: true,
    });

    const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
    const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

    const onSelect = useCallback((emblaApi: any) => {
        setPrevBtnDisabled(!emblaApi.canScrollPrev());
        setNextBtnDisabled(!emblaApi.canScrollNext());
    }, []);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect(emblaApi);
        emblaApi.on("reInit", onSelect);
        emblaApi.on("select", onSelect);
    }, [emblaApi, onSelect]);

    return (
        <section className="py-24 bg-beige/30 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex items-end justify-between mb-12">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-dark">
                        {title}
                    </h2>

                    <div className="flex gap-2 hidden md:flex">
                        <button
                            onClick={scrollPrev}
                            disabled={prevBtnDisabled}
                            className={cn(
                                "p-3 rounded-full border border-primary/20 transition-all duration-300",
                                prevBtnDisabled
                                    ? "opacity-30 cursor-not-allowed"
                                    : "hover:bg-primary hover:text-white hover:border-primary"
                            )}
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={scrollNext}
                            disabled={nextBtnDisabled}
                            className={cn(
                                "p-3 rounded-full border border-primary/20 transition-all duration-300",
                                nextBtnDisabled
                                    ? "opacity-30 cursor-not-allowed"
                                    : "hover:bg-primary hover:text-white hover:border-primary"
                            )}
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                <div className="overflow-visible" ref={emblaRef}>
                    <div className="flex -ml-4 touch-pan-y">
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className="flex-[0_0_85%] md:flex-[0_0_45%] lg:flex-[0_0_30%] min-w-0 pl-4"
                            >
                                <ProductCard product={product} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
