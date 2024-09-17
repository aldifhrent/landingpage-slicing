import Features from "@/components/features";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import HighlightCTA from "@/components/highlight-cta";
import Integrations from "@/components/integrations";
import Projects from "@/components/projects";
import Team from "@/components/team";
import Testimonials from "@/components/testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <Hero />
      <Features />
      <Projects />
      <Testimonials />
      <Team />
      <Integrations />
      <HighlightCTA />
      <Footer />
    </main>
  );
}
