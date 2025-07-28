import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/floor-plan-bg.jpg)',
            transform: 'scale(1.05)', // Slight zoom for better positioning
          }}
        />
        {/* Lighter overlay layers to show more of the floor plan */}
        <div className="absolute inset-0 bg-background/50" /> {/* Reduced opacity */}
        <div className="absolute inset-0 bg-gradient-to-br from-background/40 via-background/60 to-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full border border-border/50 bg-background/80 backdrop-blur-sm px-4 py-2 text-sm text-muted-foreground mb-8 shadow-lg">
            <span className="inline-block w-2 h-2 bg-primary rounded-full mr-2"></span>
            Transforming Fire & Security Systems with AI
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 drop-shadow-sm">
            With Cadence, fire and security 
            <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              system design is automated
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed drop-shadow-sm">
            AI-powered design automation for fire safety and security systems. 
            Transform 300-hour engineering projects into 30-minute automated workflows 
            with full code compliance and regulatory approval.
          </p>

          {/* Coming Soon Notice */}
          <div className="bg-background/85 backdrop-blur-sm border border-border/50 rounded-lg px-6 py-4 mb-16 max-w-lg mx-auto shadow-xl">
            <p className="text-foreground font-medium text-center">
              Coming Soon - Join our waitlist for early access
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center bg-background/70 backdrop-blur-sm rounded-lg p-6 border border-border/30 shadow-lg">
              <div className="text-3xl font-bold text-primary mb-2 drop-shadow-sm">90%</div>
              <div className="text-muted-foreground">Time Reduction</div>
            </div>
            <div className="text-center bg-background/70 backdrop-blur-sm rounded-lg p-6 border border-border/30 shadow-lg">
              <div className="text-3xl font-bold text-primary mb-2 drop-shadow-sm">300hrs → 30min</div>
              <div className="text-muted-foreground">Design Speed</div>
            </div>
            <div className="text-center bg-background/70 backdrop-blur-sm rounded-lg p-6 border border-border/30 shadow-lg">
              <div className="text-3xl font-bold text-primary mb-2 drop-shadow-sm">100%</div>
              <div className="text-muted-foreground">Code Compliance</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  )
}