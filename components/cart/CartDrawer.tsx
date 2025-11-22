"use client";

import { useCart } from "@/contexts/CartContext";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export function CartDrawer() {
    const { cart, isCartOpen, closeCart, updateQuantity, removeFromCart } = useCart();

    return (
        <AnimatePresence>
            {isCartOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeCart}
                        className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 30, stiffness: 300 }}
                        className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-border/50">
                            <div className="flex items-center gap-3">
                                <ShoppingBag className="w-6 h-6 text-primary" />
                                <h2 className="text-2xl font-serif font-bold">Panier</h2>
                            </div>
                            <button
                                onClick={closeCart}
                                className="p-2 hover:bg-beige-light rounded-full transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Cart Items */}
                        <div className="flex-1 overflow-y-auto p-6">
                            {cart.items.length === 0 ? (
                                <div className="flex flex-col items-center justify-center h-full text-center">
                                    <ShoppingBag className="w-16 h-16 text-foreground/20 mb-4" />
                                    <p className="text-lg text-foreground/60">Votre panier est vide</p>
                                    <button
                                        onClick={closeCart}
                                        className="mt-6 text-primary hover:text-primary-dark font-medium"
                                    >
                                        Continuer vos achats
                                    </button>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    {cart.items.map((item) => (
                                        <div
                                            key={item.productId}
                                            className="flex gap-4 bg-beige-light/50 p-4 rounded-xl"
                                        >
                                            {/* Image */}
                                            <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                                                <Image
                                                    src={item.image}
                                                    alt={item.name}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>

                                            {/* Details */}
                                            <div className="flex-1 min-w-0">
                                                <Link
                                                    href={`/produits/${item.slug}`}
                                                    onClick={closeCart}
                                                    className="font-serif font-bold text-foreground hover:text-primary line-clamp-1"
                                                >
                                                    {item.name}
                                                </Link>
                                                <p className="text-sm text-foreground/60 mt-1">
                                                    {item.price.toFixed(2)}€
                                                </p>

                                                {/* Quantity Controls */}
                                                <div className="flex items-center gap-3 mt-3">
                                                    <button
                                                        onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                                                        className="p-1 hover:bg-white rounded transition-colors"
                                                    >
                                                        <Minus className="w-4 h-4" />
                                                    </button>
                                                    <span className="font-medium w-8 text-center">{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                                                        className="p-1 hover:bg-white rounded transition-colors"
                                                    >
                                                        <Plus className="w-4 h-4" />
                                                    </button>
                                                    <button
                                                        onClick={() => removeFromCart(item.productId)}
                                                        className="ml-auto text-sm text-foreground/50 hover:text-red-600 transition-colors"
                                                    >
                                                        Retirer
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Footer */}
                        {cart.items.length > 0 && (
                            <div className="border-t border-border/50 p-6 bg-beige-light/30">
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
