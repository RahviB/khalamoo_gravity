import { getProducts } from "@/lib/api";
import { ProductCard } from "@/components/products/ProductCard";
import { Section } from "@/components/ui/Section";

export default async function ProductsPage() {
    const products = await getProducts();

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <Section className="bg-primary-dark text-white pt-32 pb-20">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
                        Nos Univers
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 font-light max-w-2xl mx-auto">
                        Découvrez le meilleur du chanvre béarnais. Des produits sains, légaux et cultivés avec respect.
                    </p>
                </div>
            </Section>

            {/* Product Grid */}
            <Section>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </Section>
        </div>
    );
}
