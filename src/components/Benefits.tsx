import { Card } from "@/components/ui/card"
import { TrendingUp, Users, CheckCircle, Zap } from "lucide-react"
import { FadeIn } from "@/components/ui/fade-in"
import { ParallaxElement, SpringCounter } from "@/components/ui/visual-effects"

export const Benefits = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "5x More Projects",
      description: "Same team, more capacity",
      metric: "500%",
      metricLabel: "Increase"
    },
    {
      icon: CheckCircle,
      title: "First-Time Approval",
      description: "No costly revision cycles",
      metric: "90%",
      metricLabel: "Pass Rate"
    },
    {
      icon: Users,
      title: "Scale Expertise",
      description: "Junior engineers, expert results",
      metric: "75%",
      metricLabel: "Less Training"
    },
    {
      icon: Zap,
      title: "Win More Bids",
      description: "Faster quotes, better accuracy",
      metric: "60%",
      metricLabel: "Faster"
    }
  ]

  return (
    <section id="benefits" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <ParallaxElement speed={0.3}>
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(/cad-tool-bg.jpg)',
              transform: 'scale(1.10)', // Slight zoom for better positioning
            }}
          />
        </ParallaxElement>
        {/* Overlay layers to ensure text readability */}
        <div className="absolute inset-0 bg-background/50" />
        <div className="absolute inset-0 bg-gradient-to-br from-background/70 via-background/75 to-background/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Transform your business with AI
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join integrators revolutionizing their operations through intelligent automation
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <FadeIn key={index} delay={index * 0.2} direction="up">
              <Card className="p-8 hover:shadow-xl transition-all duration-300 border-border bg-background/80 backdrop-blur-sm hover:scale-105 group">
                <div className="flex flex-col items-center text-center mb-4">
                  <div className="p-3 rounded-xl bg-primary/10 mb-3 group-hover:bg-primary/20 transition-colors duration-300">
                    <benefit.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <div className="mb-3">
                    <div className="text-3xl font-bold text-primary">
                      {benefit.metric.includes('%') ? (
                        <SpringCounter 
                          value={parseInt(benefit.metric)} 
                          suffix="%" 
                          duration={2000 + index * 300}
                        />
                      ) : (
                        benefit.metric
                      )}
                    </div>
                    <div className="text-xs text-muted-foreground">{benefit.metricLabel}</div>
                  </div>
                </div>
                <p className="text-muted-foreground text-center text-sm">
                  {benefit.description}
                </p>
              </Card>
            </FadeIn>
          ))}
        </div>

        {/* ROI Section */}
        <FadeIn delay={0.6}>
          <div className="bg-background/70 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12 text-center shadow-xl hover:shadow-2xl transition-all duration-300">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              See ROI in the first month
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              With engineering time savings of <span className="font-bold text-primary">90%</span>, most customers see a complete return 
              on investment within <span className="font-bold text-primary">30</span> days of implementation.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}