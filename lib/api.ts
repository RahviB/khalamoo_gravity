import { Product } from "@/types/product";
import { GET_PRODUCTS, GET_PRODUCT_BY_SLUG } from "./queries";

const WORDPRESS_API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || "";

// Helper function to execute GraphQL queries
async function fetchGraphQL(query: string, variables = {}) {
    if (!WORDPRESS_API_URL) {
        console.warn("WordPress API URL not configured, using mock data");
        return null;
    }

    try {
        const response = await fetch(WORDPRESS_API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                query,
                variables,
            }),
            next: { revalidate: 60 }, // Revalidate every 60 seconds
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const json = await response.json();

        if (json.errors) {
            console.error("GraphQL Errors:", json.errors);
            throw new Error("Failed to fetch data from WordPress");
        }

        return json.data;
    } catch (error) {
        console.error("Error fetching from WordPress:", error);
        return null;
    }
}

// Transform WooCommerce product to our Product type
function transformProduct(wooProduct: any): Product {
    // Get CBD and THC content from attributes
    const attributes = wooProduct.attributes?.nodes || [];
    const cbdAttr = attributes.find((attr: any) => attr.name.toLowerCase().includes("cbd"));
    const thcAttr = attributes.find((attr: any) => attr.name.toLowerCase().includes("thc"));
    const originAttr = attributes.find((attr: any) => attr.name.toLowerCase().includes("origin"));

    return {
        id: wooProduct.databaseId.toString(),
        name: wooProduct.name,
        slug: wooProduct.slug,
        price: parseFloat(wooProduct.price?.replace(/[^0-9.]/g, "") || "0"),
        description: wooProduct.description || "",
        shortDescription: wooProduct.shortDescription || "",
        images: [wooProduct.image?.sourceUrl || "/images/product-placeholder.jpg"],
        origin: originAttr?.options?.[0] || "Béarn",
        category: wooProduct.productCategories?.nodes?.[0]?.name || "Produits",
        stock: wooProduct.stockQuantity || 0,
        thcContent: parseFloat(thcAttr?.options?.[0] || "0"),
        cbdContent: parseFloat(cbdAttr?.options?.[0] || "0"),
    };
}

// Fetch all products
export async function getProducts(): Promise<Product[]> {
    const data = await fetchGraphQL(GET_PRODUCTS, { first: 50 });

    if (!data || !data.products) {
        // Return mock data if WordPress is not available
        return getMockProducts();
    }

    return data.products.nodes.map(transformProduct);
}

// Fetch single product by slug
export async function getProductBySlug(slug: string): Promise<Product | undefined> {
    const data = await fetchGraphQL(GET_PRODUCT_BY_SLUG, { slug });

    if (!data || !data.product) {
        // Return mock data if WordPress is not available
        const mockProducts = getMockProducts();
        return mockProducts.find((p) => p.slug === slug);
    }

    return transformProduct(data.product);
}

// Mock data fallback (same as before)
function getMockProducts(): Product[] {
    return [
        {
            id: "1",
            name: "Fleurs de Chanvre - Lasseube",
            slug: "fleurs-chanvre-lasseube",
            price: 25.0,
            description:
                "Fleurs de chanvre cultivées avec amour sur nos parcelles de Lasseube. Riches en arômes et terpènes naturels.",
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
            price: 45.0,
            description:
                "Huile de CBD à spectre complet, extraite de nos fleurs de Gan. Idéale pour la détente et le bien-être quotidien.",
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
            price: 18.5,
            description:
                "Baume nourrissant pour le corps, enrichi en huile de chanvre et huiles essentielles locales.",
            shortDescription: "Soin corps nourrissant et apaisant.",
            images: ["/images/IMG-20251110-WA0004.jpg"],
            origin: "Gan",
            category: "Cosmétique",
            stock: 100,
            thcContent: 0,
            cbdContent: 0,
        },
    ];
}
