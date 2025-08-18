import { Navigation } from "@/components/Navigation"
import { Hero } from "@/components/Hero"
import { Features } from "@/components/Features"
import { Benefits } from "@/components/Benefits"
import { Solutions } from "@/components/Solutions"
import { Contact } from "@/components/Contact"
import { Footer } from "@/components/Footer"
import { ScrollProgress } from "@/components/ui/visual-effects"

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Navigation />
      <Hero />
      <Features />
      <Benefits />
      <Solutions />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
