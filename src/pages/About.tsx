import { Navigation } from "@/components/Navigation"
import { Team } from "@/components/Team"
import { Footer } from "@/components/Footer"
import { FadeIn } from "@/components/ui/fade-in"

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* About Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(/house-plan-bg.png)',
              transform: 'scale(1.05)',
            }}
          />
          <div className="absolute inset-0 bg-background/60" />
          <div className="absolute inset-0 bg-gradient-to-br from-background/50 via-background/70 to-background/80" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <FadeIn delay={0.2}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              About <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Semble AI</span>
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.4}>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              We're revolutionizing fire and life-safety system design through AI automation, 
              helping engineers transform months of work into minutes while ensuring 
              complete code compliance and regulatory approval.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
              Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Mission</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              After witnessing firsthand the inefficiencies in fire and life-safety system integration, 
              where teams spend hundreds of hours on manual design processes that could be automated, 
              we founded Semble AI to transform the industry.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our AI-powered platform doesn't just speed up the process – it ensures accuracy, 
              compliance, and consistency that human designers struggle to achieve under tight deadlines. 
              We're not replacing engineers; we're empowering them to focus on high-value design decisions 
              while AI handles the routine, error-prone tasks.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Team Section */}
      <Team />
      
      <Footer />
    </div>
  );
};

export default About;
