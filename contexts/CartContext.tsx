"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { CartItem, Cart } from "@/types/cart";

interface CartContextType {
    cart: Cart;
    addToCart: (item: Omit<CartItem, "quantity">) => void;
    removeFromCart: (productId: string) => void;
    updateQuantity: (productId: string, quantity: number) => void;
    clearCart: () => void;
    isCartOpen: boolean;
    openCart: () => void;
    closeCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
    const [cart, setCart] = useState<Cart>({ items: [], total: 0, itemCount: 0 });
    const [isCartOpen, setIsCartOpen] = useState(false);

    // Load cart from localStorage on mount
    useEffect(() => {
        const savedCart = localStorage.getItem("khalamoo-cart");
        if (savedCart) {
            setCart(JSON.parse(savedCart));
        }
    }, []);

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem("khalamoo-cart", JSON.stringify(cart));
    }, [cart]);

    const calculateTotal = (items: CartItem[]) => {
        return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    };

    const calculateItemCount = (items: CartItem[]) => {
        return items.reduce((sum, item) => sum + item.quantity, 0);
    };

    const addToCart = (newItem: Omit<CartItem, "quantity">) => {
        setCart((prevCart) => {
            const existingItem = prevCart.items.find((item) => item.productId === newItem.productId);

            let updatedItems: CartItem[];
            if (existingItem) {
                updatedItems = prevCart.items.map((item) =>
                    item.productId === newItem.productId
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                updatedItems = [...prevCart.items, { ...newItem, quantity: 1 }];
            }

            return {
                items: updatedItems,
                total: calculateTotal(updatedItems),
                itemCount: calculateItemCount(updatedItems),
            };
        });
        setIsCartOpen(true);
    };

    const removeFromCart = (productId: string) => {
        setCart((prevCart) => {
            const updatedItems = prevCart.items.filter((item) => item.productId !== productId);
            return {
                items: updatedItems,
                total: calculateTotal(updatedItems),
                itemCount: calculateItemCount(updatedItems),
            };
        });
    };

    const updateQuantity = (productId: string, quantity: number) => {
        if (quantity <= 0) {
            removeFromCart(productId);
            return;
        }

        setCart((prevCart) => {
            const updatedItems = prevCart.items.map((item) =>
                item.productId === productId ? { ...item, quantity } : item
            );
            return {
                items: updatedItems,
                total: calculateTotal(updatedItems),
                itemCount: calculateItemCount(updatedItems),
            };
        });
    };

    const clearCart = () => {
        setCart({ items: [], total: 0, itemCount: 0 });
    };

    const openCart = () => setIsCartOpen(true);
    const closeCart = () => setIsCartOpen(false);

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                updateQuantity,
                clearCart,
                isCartOpen,
                openCart,
                closeCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}
