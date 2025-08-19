import { Linkedin } from "lucide-react"
import ethanPhoto from "../assets/ethan.png"
import jonathanPhoto from "../assets/jonathan.png"
import { FadeIn } from "@/components/ui/fade-in"

export const Team = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Meet the <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The engineers and innovators behind Cadlit's AI-powered design automation.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Ethan Boyers */}
          <FadeIn delay={0.2} direction="left">
            <div className="bg-background/80 backdrop-blur-sm border border-border rounded-lg p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="text-center mb-6">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary/20">
                  <img 
                    src={ethanPhoto} 
                    alt="Ethan Boyers" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-1">Ethan Boyers</h3>
                <p className="text-primary font-semibold">CTO</p>
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                Ethan, co-founder and CTO of Cadlit, leads the technical development of our AI platform. 
                With a background in math and AI research at Stanford, he's passionate about applying 
                machine learning to solve complex engineering challenges. At Cadlit, he's focused on 
                developing AI systems that automate fire and life-safety system design processes, helping engineers 
                reduce project time from hundreds of hours to minutes while ensuring full code compliance.
              </p>
              
              <a 
                href="https://www.linkedin.com/in/ethan-boyers/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-primary hover:text-accent transition-colors duration-200 font-medium"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </FadeIn>

          {/* Jonathan Tyshler */}
          <FadeIn delay={0.4} direction="right">
            <div className="bg-background/80 backdrop-blur-sm border border-border rounded-lg p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="text-center mb-6">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary/20">
                  <img 
                    src={jonathanPhoto} 
                    alt="Jonathan Tyshler" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-1">Jonathan Tyshler</h3>
                <p className="text-primary font-semibold">CEO</p>
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                After identifying critical inefficiencies in the fire and life-safety system integration workflow, Jonathan, 
                co-founder and CEO of Cadlit, joined a leading systems integrator to immerse himself in the industry.
                After witnessing teams spend hundreds of hours on manual design processes that could be automated, he founded 
                Cadlit to revolutionize the industry. Jonathan now leads the company's mission to transform 
                fire and life-safety system design through AI-powered automation and regulatory compliance.
              </p>
              
              <a 
                href="https://www.linkedin.com/in/jonathan-tyshler/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-primary hover:text-accent transition-colors duration-200 font-medium"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
} 