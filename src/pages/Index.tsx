import { Navigation } from "@/components/Navigation"
import { Hero } from "@/components/Hero"
import { Features } from "@/components/Features"
import { Benefits } from "@/components/Benefits"
import { Solutions } from "@/components/Solutions"
import { Team } from "@/components/Team"
import { Contact } from "@/components/Contact"
import { Footer } from "@/components/Footer"

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Features />
      <Benefits />
      <Solutions />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
