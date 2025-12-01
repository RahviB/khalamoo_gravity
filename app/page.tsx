import { Hero } from "@/components/home/Hero";
import { MissionSection } from "@/components/home/MissionSection";
import { UsesModule } from "@/components/home/UsesModule";
import { StatsSection } from "@/components/home/StatsSection";
import { Roadmap } from "@/components/home/Roadmap";
import { ProductCarousel } from "@/components/home/ProductCarousel";
import { getProducts } from "@/lib/api";

export default async function Home() {
  const products = await getProducts();

  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <ProductCarousel products={products} />
      <MissionSection />
      <UsesModule />
      <StatsSection />
      <Roadmap />
    </div>
  );
}
