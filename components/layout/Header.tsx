"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { CartDrawer } from "@/components/cart/CartDrawer";

const navLinks = [
    { href: "/", label: "Accueil" },
    { href: "/a-propos", label: "À propos" },
    { href: "/produits", label: "Produits" },
    { href: "/projet", label: "Le Projet" },
    { href: "/contact", label: "Contact" },
];

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { cart, openCart } = useCart();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-white"
                    }`}
            >
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <Link href="/" className="text-2xl font-serif font-bold text-primary hover:text-primary-dark transition-colors">
                            KHALAMOO
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-foreground/80 hover:text-primary font-medium transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>

                        {/* Cart & Mobile Menu Toggle */}
                        <div className="flex items-center gap-4">
                            {/* Cart Button */}
                            <button
                                onClick={openCart}
                                className="relative p-2 hover:bg-beige-light rounded-full transition-colors"
                            >
                                <ShoppingBag className="w-6 h-6 text-foreground" />
                                {cart.itemCount > 0 && (
                                    <span className="absolute -top-1 -right-1 bg-primary text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                                        {cart.itemCount}
                                    </span>
                                )}
                            </button>

                            {/* Mobile Menu Toggle */}
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="md:hidden p-2 hover:bg-beige-light rounded-full transition-colors"
                            >
                                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Navigation */}
                    {isMenuOpen && (
                        <nav className="md:hidden py-4 border-t border-border/50">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="block py-3 text-foreground/80 hover:text-primary font-medium transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    )}
                </div>
            </header>

            {/* Cart Drawer */}
            <CartDrawer />
        </>
    );
}
