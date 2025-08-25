import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import { FadeIn } from "@/components/ui/fade-in"
import { InteractiveOrb, AnimatedGrid, SpringCounter } from "@/components/ui/visual-effects"
import Typewriter from 'typewriter-effect'

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Interactive mouse-following orb */}
      <InteractiveOrb />
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/floor-plan-bg.jpg)',
            transform: 'scale(1.05)', // Slight zoom for better positioning
          }}
        />
        {/* Animated grid overlay */}
        <AnimatedGrid className="text-primary" />
        
        {/* Lighter overlay layers to show more of the floor plan */}
        <div className="absolute inset-0 bg-background/50" /> {/* Reduced opacity */}
        <div className="absolute inset-0 bg-gradient-to-br from-background/40 via-background/60 to-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center">
          {/* Badge */}
          <FadeIn delay={0.2}>
            <div className="inline-flex items-center rounded-full border border-border/50 bg-background/80 backdrop-blur-sm px-4 py-2 text-sm text-muted-foreground mb-8 shadow-lg">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mr-2"></span>
              Transforming Fire and Life-Safety Systems with AI
            </div>
          </FadeIn>

          {/* Main Headline */}
          <FadeIn delay={0.4}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-snug mb-8 drop-shadow-sm bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent max-w-5xl mx-auto">
              <Typewriter
                options={{
                  strings: ['With SembleAI, fire and life-safety system design is automated'],
                  autoStart: true,
                  loop: false,
                  delay: 75,
                  deleteSpeed: Infinity,
                  cursor: '',
                }}
              />
            </h1>
          </FadeIn>

          {/* Subheading */}
          <FadeIn delay={0.6}>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed drop-shadow-sm">
              Your AI-powered fire and life-safety system engineer. 
              Transform 300-hour engineering projects into 30-minute automated workflows 
              with full code compliance and regulatory approval.
            </p>
          </FadeIn>

          {/* Stats with Spring Counters */}
          <FadeIn delay={0.8}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center bg-background/70 backdrop-blur-sm rounded-lg p-6 border border-border/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                <div className="text-3xl font-bold text-primary mb-2 drop-shadow-sm">
                  <SpringCounter value={90} suffix="%" duration={2500} />
                </div>
                <div className="text-muted-foreground group-hover:text-foreground transition-colors">Time Reduction</div>
              </div>
              <div className="text-center bg-background/70 backdrop-blur-sm rounded-lg p-6 border border-border/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                <div className="text-3xl font-bold text-primary mb-2 drop-shadow-sm">Weeks → Minutes</div>
                <div className="text-muted-foreground group-hover:text-foreground transition-colors">Design Speed</div>
              </div>
              <div className="text-center bg-background/70 backdrop-blur-sm rounded-lg p-6 border border-border/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                <div className="text-3xl font-bold text-primary mb-2 drop-shadow-sm">
                  <SpringCounter value={100} suffix="%" duration={2000} />
                </div>
                <div className="text-muted-foreground group-hover:text-foreground transition-colors">Code Compliance</div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Bottom fade effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  )
}