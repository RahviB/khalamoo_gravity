import { Product } from "@/types/product";

const MOCK_PRODUCTS: Product[] = [
    {
        id: "1",
        name: "Fleurs de Chanvre - Lasseube",
        slug: "fleurs-chanvre-lasseube",
        price: 25.00,
        description: "Fleurs de chanvre cultivées avec amour sur nos parcelles de Lasseube. Riches en arômes et terpènes naturels.",
        shortDescription: "Fleurs premium cultivées à Lasseube. Arômes intenses.",
        images: ["/images/IMG-20251110-WA0002.jpg"],
        origin: "Lasseube",
        category: "Fleurs",
        stock: 50,
        thcContent: 0.18,
        cbdContent: 14,
    },
    {
        id: "2",
        name: "Huile CBD Full Spectrum",
        slug: "huile-cbd-full-spectrum",
        price: 45.00,
        description: "Huile de CBD à spectre complet, extraite de nos fleurs de Gan. Idéale pour la détente et le bien-être quotidien.",
        shortDescription: "Huile 10% CBD. Extraction douce.",
        images: ["/images/IMG-20251110-WA0003.jpg"],
        origin: "Gan",
        category: "Bien-être",
        stock: 30,
        thcContent: 0.05,
        cbdContent: 10,
    },
    {
        id: "3",
        name: "Baume Apaisant",
        slug: "baume-apaisant",
        price: 18.50,
        description: "Baume nourrissant pour le corps, enrichi en huile de chanvre et huiles essentielles locales.",
        shortDescription: "Soin corps nourrissant et apaisant.",
        images: ["/images/IMG-20251110-WA0004.jpg"],
        origin: "Gan",
        category: "Cosmétique",
        stock: 100,
        thcContent: 0,
        cbdContent: 0,
    },
];

export async function getProducts(): Promise<Product[]> {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500));
    return MOCK_PRODUCTS;
}

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return MOCK_PRODUCTS.find((p) => p.slug === slug);
}
