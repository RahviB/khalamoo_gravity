import { Section } from "@/components/ui/Section";
import { TextReveal } from "@/components/ui/TextReveal";
import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <Section className="bg-primary text-white pt-32 pb-20">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
                        Notre Histoire
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 font-light">
                        Khalamoo, c'est l'histoire d'un retour à la terre, d'une volonté de cultiver autrement.
                    </p>
                </div>
            </Section>

            {/* Vision */}
            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-primary font-bold uppercase tracking-widest mb-4 text-sm">Notre Vision</h2>
                        <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-foreground">
                            Réhabiliter le chanvre en Béarn
                        </h3>
                        <div className="prose prose-lg text-foreground/70">
                            <p>
                                Le chanvre a longtemps fait partie du paysage agricole français. Oublié, il revient aujourd'hui comme une réponse aux défis écologiques et économiques de notre temps.
                            </p>
                            <p>
                                Chez Khalamoo, nous croyons en une agriculture qui régénère les sols, qui respecte la biodiversité et qui crée de la valeur locale.
                            </p>
                        </div>
                    </div>
                    <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                        <Image
                            src="/images/IMG-20251110-WA0106.jpg"
                            alt="Vision Khalamoo"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </Section>

            {/* Values */}
            <Section className="bg-beige-light">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-primary font-bold uppercase tracking-widest mb-4 text-sm">Nos Valeurs</h2>
                    <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
                        Authentique, Éducatif, Bienveillant, Local
                    </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        {
                            title: "Authentique",
                            description: "Pas de fausses promesses. Des produits bruts, naturels, et une transparence totale sur nos méthodes.",
                        },
                        {
                            title: "Éducatif",
                            description: "Nous voulons partager notre passion et nos connaissances sur cette plante aux mille vertus.",
                        },
                        {
                            title: "Bienveillant",
                            description: "Prendre soin de la terre, c'est aussi prendre soin de ceux qui la cultivent et de ceux qui consomment ses fruits.",
                        },
                        {
                            title: "Local",
                            description: "Ancrés en Béarn, nous privilégions les circuits courts et les partenariats avec les acteurs du territoire.",
                        },
                    ].map((value, i) => (
                        <div key={i} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <h4 className="font-serif font-bold text-xl mb-4 text-primary-dark">{value.title}</h4>
                            <p className="text-foreground/70">{value.description}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Commitments */}
            <Section>
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-primary font-bold uppercase tracking-widest mb-8 text-sm text-center">Nos Engagements</h2>

                    <div className="space-y-12">
                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-2xl">1</div>
                            <div>
                                <h3 className="text-2xl font-serif font-bold mb-2">Agriculture Biologique & Agroécologie</h3>
                                <p className="text-foreground/70 text-lg">
                                    Nous n'utilisons aucun pesticide ni engrais chimique. Nos parcelles sont cultivées en agroforesterie, favorisant la biodiversité et la santé des sols.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-2xl">2</div>
                            <div>
                                <h3 className="text-2xl font-serif font-bold mb-2">Transparence Totale</h3>
                                <p className="text-foreground/70 text-lg">
                                    De la graine au produit fini, vous savez tout. Nous affichons clairement l'origine, les méthodes de culture et les analyses de nos produits.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-2xl">3</div>
                            <div>
                                <h3 className="text-2xl font-serif font-bold mb-2">Qualité Premium</h3>
                                <p className="text-foreground/70 text-lg">
                                    Nous sélectionnons les meilleures variétés et apportons un soin méticuleux à la récolte et au séchage pour garantir des arômes exceptionnels.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
}
