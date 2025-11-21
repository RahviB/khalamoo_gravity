import { getProductBySlug } from "@/lib/api";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { AddToCartButton } from "@/components/products/AddToCartButton";
import { Check } from "lucide-react";

export default async function ProductDetailPage({ params }: { params: { slug: string } }) {
    const product = await getProductBySlug(params.slug);

    if (!product) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-background pt-20">
            <Section>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Image */}
                    <div className="relative aspect-square rounded-2xl overflow-hidden bg-beige-light shadow-lg">
                        <Image
                            src={product.images[0]}
                            alt={product.name}
                            fill
                            className="object-cover"
                            priority
                        />
                        {/* Origin Stamp */}
                        <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold uppercase tracking-widest text-primary border border-primary/20 shadow-sm">
                            {product.origin}
                        </div>
                    </div>

                    {/* Details */}
                    <div className="flex flex-col">
                        <div className="mb-6">
                            <p className="text-sm text-secondary font-medium uppercase tracking-widest mb-2">
                                {product.category}
                            </p>
                            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
                                {product.name}
                            </h1>
                            <p className="text-3xl font-bold text-primary">
                                {product.price.toFixed(2)}€
                            </p>
                        </div>

                        {/* Description */}
                        <div className="prose prose-lg mb-8">
                            <p className="text-foreground/70">{product.description}</p>
                        </div>

                        {/* Specs */}
                        <div className="bg-beige-light p-6 rounded-xl mb-8">
                            <h3 className="font-serif font-bold text-lg mb-4">Caractéristiques</h3>
                            <div className="space-y-3">
                                {product.cbdContent > 0 && (
                                    <div className="flex items-center gap-3">
                                        <Check className="w-5 h-5 text-primary" />
                                        <span className="text-foreground/80">
                                            <strong>CBD:</strong> {product.cbdContent}%
                                        </span>
                                    </div>
                                )}
                                {product.thcContent > 0 && (
                                    <div className="flex items-center gap-3">
                                        <Check className="w-5 h-5 text-primary" />
                                        <span className="text-foreground/80">
                                            <strong>THC:</strong> &lt;{product.thcContent}%
                                        </span>
                                    </div>
                                )}
                                <div className="flex items-center gap-3">
                                    <Check className="w-5 h-5 text-primary" />
                                    <span className="text-foreground/80">
                                        <strong>Origine:</strong> {product.origin}, Béarn
                                    </span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Check className="w-5 h-5 text-primary" />
                                    <span className="text-foreground/80">
                                        <strong>Stock:</strong> {product.stock > 0 ? "Disponible" : "Rupture"}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Add to Cart */}
                        <AddToCartButton product={product} />

                        {/* Trust Signals */}
                        <div className="mt-8 pt-8 border-t border-border/50 space-y-2 text-sm text-foreground/60">
                            <p>✓ Cultivé en agroécologie dans le Béarn</p>
                            <p>✓ Semences certifiées UE</p>
                            <p>✓ &lt;0.3% THC - 100% Légal</p>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
}
