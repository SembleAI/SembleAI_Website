import { Linkedin } from "lucide-react"
import ethanPhoto from "../assets/ethan.png"
import jonathanPhoto from "../assets/jonathan.png"

export const Team = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Meet the <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The engineers and innovators behind CADence's AI-powered design automation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Ethan Boyers */}
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
              Ethan, co-founder and CTO of CADence, became obsessed with building tools that fix broken 
              technical workflows while researching AI safety and infrastructure at Stanford's AI Lab. He realized 
              how AI could be applied to everyday bottlenecks that slow down engineers. At CADence, he's focused on bringing AI-powered structure and 
              intelligence to CAD conversion, helping engineers spend less time fixing files and more 
              time solving real design problems.
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

          {/* Jonathan Tyshler */}
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
              Jonathan, co-founder and CEO of CADence, spent two years working at an 
              aviation engineering firm where he saw firsthand how much time and money
              were lost due to broken CAD conversions between suppliers and OEMs. Watching 
              engineers manually fix models and rebuild parts just to meet formatting or 
              compliance requirements sparked the idea for a better solution. At CADence, 
              he's building the platform he wishes his team had.
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
        </div>
      </div>
    </section>
  )
} 