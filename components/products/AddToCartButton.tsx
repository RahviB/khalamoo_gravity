"use client";

import { useCart } from "@/contexts/CartContext";
import { Product } from "@/types/product";
import { ShoppingBag } from "lucide-react";

interface AddToCartButtonProps {
    product: Product;
}

export function AddToCartButton({ product }: AddToCartButtonProps) {
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart({
            productId: product.id,
            name: product.name,
            price: product.price,
            image: product.images[0],
            slug: product.slug,
        });
    };

    return (
        <button
            onClick={handleAddToCart}
            disabled={product.stock === 0}
            className="w-full bg-primary hover:bg-primary-dark disabled:bg-foreground/20 disabled:cursor-not-allowed text-white font-bold py-4 px-8 rounded-full transition-colors flex items-center justify-center gap-3 text-lg"
        >
            <ShoppingBag className="w-6 h-6" />
            {product.stock > 0 ? "Ajouter au panier" : "Rupture de stock"}
        </button>
    );
}
