import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full border border-border bg-muted px-4 py-2 text-sm text-muted-foreground mb-8">
            <span className="inline-block w-2 h-2 bg-primary rounded-full mr-2"></span>
            Transforming Fire & Security Systems with AI
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            With CADence, fire and security 
            <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              system design is automated
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            AI-powered design automation for fire safety and security systems. 
            Transform 300-hour engineering projects into 30-minute automated workflows 
            with full code compliance and regulatory approval.
          </p>

          {/* Coming Soon Notice */}
          <div className="bg-muted/50 border border-border rounded-lg px-6 py-4 mb-16 max-w-lg mx-auto">
            <p className="text-foreground font-medium text-center">
              Coming Soon - Join our waitlist for early access
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">90%</div>
              <div className="text-muted-foreground">Time Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">300hrs → 30min</div>
              <div className="text-muted-foreground">Design Speed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Code Compliance</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}