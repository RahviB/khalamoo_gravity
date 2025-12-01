"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, Loader2 } from "lucide-react";

export function PartnershipForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSuccess(true);
    };

    if (isSuccess) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white p-8 rounded-2xl shadow-lg text-center max-w-lg mx-auto"
            >
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-primary-dark mb-4">Message Envoyé !</h3>
                <p className="text-foreground/70 mb-8">
                    Merci de votre intérêt pour le projet Khalamoo. Notre équipe vous recontactera très prochainement pour échanger sur les opportunités de collaboration.
                </p>
                <button
                    onClick={() => setIsSuccess(false)}
                    className="text-primary font-bold hover:underline"
                >
                    Envoyer un autre message
                </button>
            </motion.div>
        );
    }

    return (
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl max-w-2xl mx-auto">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-serif font-bold text-primary-dark mb-4">Devenir Partenaire</h2>
                <p className="text-foreground/70">
                    Remplissez ce formulaire pour initier le dialogue. Construisons ensemble l'avenir du chanvre en Béarn.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-bold text-foreground/80 uppercase tracking-wide">Nom Complet</label>
                        <input
                            type="text"
                            id="name"
                            required
                            className="w-full px-4 py-3 rounded-lg bg-beige-light/50 border border-transparent focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                            placeholder="Jean Dupont"
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-bold text-foreground/80 uppercase tracking-wide">Email</label>
                        <input
                            type="email"
                            id="email"
                            required
                            className="w-full px-4 py-3 rounded-lg bg-beige-light/50 border border-transparent focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                            placeholder="jean@exemple.fr"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="type" className="text-sm font-bold text-foreground/80 uppercase tracking-wide">Vous êtes</label>
                    <select
                        id="type"
                        className="w-full px-4 py-3 rounded-lg bg-beige-light/50 border border-transparent focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none"
                    >
                        <option value="farmer">Agriculteur / Producteur</option>
                        <option value="artisan">Artisan / Transformateur</option>
                        <option value="distributor">Distributeur / Commerçant</option>
                        <option value="other">Autre / Curieux</option>
                    </select>
                </div>

                <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-bold text-foreground/80 uppercase tracking-wide">Votre Message</label>
                    <textarea
                        id="message"
                        required
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg bg-beige-light/50 border border-transparent focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                        placeholder="Parlez-nous de votre projet ou de vos motivations..."
                    />
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-full transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Envoi en cours...
                        </>
                    ) : (
                        <>
                            <Send className="w-5 h-5" />
                            Envoyer ma demande
                        </>
                    )}
                </button>
            </form>
        </div>
    );
}
