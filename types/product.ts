export interface Product {
    id: string;
    name: string;
    slug: string;
    price: number;
    description: string;
    shortDescription: string;
    images: string[];
    origin: "Lasseube" | "Gan";
    category: string;
    stock: number;
    thcContent: number; // Percentage, e.g., 0.2
    cbdContent: number; // Percentage, e.g., 12
}
