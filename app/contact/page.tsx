import { Section } from "@/components/ui/Section";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <Section className="bg-secondary text-white pt-32 pb-20">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
                        Contactez-nous
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 font-light">
                        Une question ? Un projet ? Nous sommes à votre écoute.
                    </p>
                </div>
            </Section>

            <Section>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <div>
                        <h2 className="text-secondary font-bold uppercase tracking-widest mb-8 text-sm">Nos Coordonnées</h2>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary flex-shrink-0">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-serif font-bold text-xl mb-2">Adresse</h3>
                                    <p className="text-foreground/70">
                                        Ferme Khalamoo<br />
                                        Chemin des Crêtes<br />
                                        64290 Lasseube, France
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary flex-shrink-0">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-serif font-bold text-xl mb-2">Email</h3>
                                    <p className="text-foreground/70">
                                        <a href="mailto:contact@khalamoo.fr" className="hover:text-secondary transition-colors">
                                            contact@khalamoo.fr
                                        </a>
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary flex-shrink-0">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-serif font-bold text-xl mb-2">Téléphone</h3>
                                    <p className="text-foreground/70">
                                        <a href="tel:+33600000000" className="hover:text-secondary transition-colors">
                                            06 00 00 00 00
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-border/50">
                        <h2 className="font-serif font-bold text-2xl mb-6">Envoyez-nous un message</h2>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="firstName" className="text-sm font-medium text-foreground/70">Prénom</label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        className="w-full px-4 py-3 rounded-lg bg-beige-light border-transparent focus:border-secondary focus:bg-white focus:ring-0 transition-colors"
                                        placeholder="Jean"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="lastName" className="text-sm font-medium text-foreground/70">Nom</label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        className="w-full px-4 py-3 rounded-lg bg-beige-light border-transparent focus:border-secondary focus:bg-white focus:ring-0 transition-colors"
                                        placeholder="Dupont"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-foreground/70">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-3 rounded-lg bg-beige-light border-transparent focus:border-secondary focus:bg-white focus:ring-0 transition-colors"
                                    placeholder="jean.dupont@example.com"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-foreground/70">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-lg bg-beige-light border-transparent focus:border-secondary focus:bg-white focus:ring-0 transition-colors resize-none"
                                    placeholder="Votre message..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-secondary hover:bg-secondary-dark text-white font-bold py-4 rounded-lg transition-colors"
                            >
                                Envoyer
                            </button>
                        </form>
                    </div>
                </div>
            </Section>
        </div>
    );
}
