import Link from "next/link";
import { ShieldCheck, Truck, CreditCard } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-secondary-dark text-beige-light pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand & Mission */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-serif font-bold text-beige-light">KHALAMOO</h3>
                        <p className="text-beige-light/80 text-sm leading-relaxed">
                            Réhabiliter la culture du chanvre en Béarn. Une agriculture respectueuse des sols pour des produits sains et durables.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-serif font-semibold mb-4 text-primary">Navigation</h4>
                        <ul className="space-y-2">
                            <li><Link href="/a-propos" className="text-beige-light/80 hover:text-primary transition-colors">À propos</Link></li>
                            <li><Link href="/produits" className="text-beige-light/80 hover:text-primary transition-colors">Nos Produits</Link></li>
                            <li><Link href="/projet" className="text-beige-light/80 hover:text-primary transition-colors">Le Projet</Link></li>
                            <li><Link href="/contact" className="text-beige-light/80 hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="text-lg font-serif font-semibold mb-4 text-primary">Légal</h4>
                        <ul className="space-y-2">
                            <li><Link href="/mentions-legales" className="text-beige-light/80 hover:text-primary transition-colors">Mentions Légales</Link></li>
                            <li><Link href="/cgv" className="text-beige-light/80 hover:text-primary transition-colors">CGV</Link></li>
                            <li><Link href="/confidentialite" className="text-beige-light/80 hover:text-primary transition-colors">Politique de Confidentialité</Link></li>
                        </ul>
                    </div>

                    {/* Trust Signals */}
                    <div>
                        <h4 className="text-lg font-serif font-semibold mb-4 text-primary">Confiance</h4>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-beige-light/80">
                                <Truck className="w-5 h-5 text-primary" />
                                <span className="text-sm">Expédition depuis la France</span>
                            </li>
                            <li className="flex items-center gap-3 text-beige-light/80">
                                <ShieldCheck className="w-5 h-5 text-primary" />
                                <span className="text-sm">Produits 100% Légaux (&lt;0.3% THC)</span>
                            </li>
                            <li className="flex items-center gap-3 text-beige-light/80">
                                <CreditCard className="w-5 h-5 text-primary" />
                                <span className="text-sm">Paiement 100% Sécurisé</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-beige-light/10 pt-8 text-center text-sm text-beige-light/60">
                    <p>&copy; {new Date().getFullYear()} Khalamoo. Tous droits réservés. Fait avec amour en Béarn.</p>
                </div>
            </div>
        </footer>
    );
}
