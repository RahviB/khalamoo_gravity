import { Hero } from "@/components/home/Hero";
import { MissionSection } from "@/components/home/MissionSection";
import { UsesModule } from "@/components/home/UsesModule";
import { Roadmap } from "@/components/home/Roadmap";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <MissionSection />
      <UsesModule />
      <Roadmap />
    </div>
  );
}
