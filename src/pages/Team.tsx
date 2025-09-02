import { Navigation } from "@/components/Navigation"
import { Team } from "@/components/Team"
import { Footer } from "@/components/Footer"

const TeamPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Team />
      <Footer />
    </div>
  );
};

export default TeamPage;
