import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, TrendingUp, Users, CheckCircle, Zap } from "lucide-react"

export const Benefits = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Increase Project Capacity",
      description: "Handle 5x more projects with the same engineering team. Free up experts for high-value work while AI handles routine design tasks.",
      metric: "500%",
      metricLabel: "More Projects"
    },
    {
      icon: CheckCircle,
      title: "First-Time Approval",
      description: "Eliminate costly revision cycles with AHJ authorities. AI ensures code compliance from the start, reducing permit review time from months to days.",
      metric: "95%",
      metricLabel: "First-Time Pass Rate"
    },
    {
      icon: Users,
      title: "Scale Your Expertise",
      description: "Junior engineers can now produce expert-level designs. Lower the barrier to entry and expand into new markets without hiring local specialists.",
      metric: "75%",
      metricLabel: "Training Time Reduced"
    },
    {
      icon: Zap,
      title: "Instant Competitive Edge",
      description: "Deliver quotes faster, reduce project timelines, and win more bids with dramatically improved efficiency and accuracy.",
      metric: "60%",
      metricLabel: "Faster Proposals"
    }
  ]

  return (
    <section id="benefits" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/cad-tool-bg.jpg)',
            transform: 'scale(1.10)', // Slight zoom for better positioning
          }}
        />
        {/* Overlay layers to ensure text readability */}
        <div className="absolute inset-0 bg-background/50" />
        <div className="absolute inset-0 bg-gradient-to-br from-background/70 via-background/75 to-background/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Transform your business with AI automation
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join forward-thinking integrators who are revolutionizing their operations 
            and gaining competitive advantages through intelligent automation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 border-border bg-background/80 backdrop-blur-sm">
              <div className="flex flex-col items-center text-center mb-4">
                <div className="p-3 rounded-xl bg-primary/10 mb-3">
                  <benefit.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <div className="mb-3">
                  <div className="text-3xl font-bold text-primary">{benefit.metric}</div>
                  <div className="text-xs text-muted-foreground">{benefit.metricLabel}</div>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed text-center">
                {benefit.description}
              </p>
            </Card>
          ))}
        </div>

        {/* ROI Section */}
        <div className="bg-background/70 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12 text-center shadow-xl">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            See ROI in the first month
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            With engineering time savings of 90%, most customers see a complete return 
            on investment within 30 days of implementation.
          </p>
        </div>
      </div>
    </section>
  )
}