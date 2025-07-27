import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, TrendingUp, Users, CheckCircle, Zap } from "lucide-react"

export const Benefits = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Increase Project Capacity",
      description: "Handle 10x more projects with the same engineering team. Free up experts for high-value work while AI handles routine design tasks.",
      metric: "1000%",
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
    <section id="benefits" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
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
            <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 border-border bg-gradient-to-br from-card to-muted/20">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-primary/10 flex-shrink-0">
                  <benefit.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-foreground">
                      {benefit.title}
                    </h3>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">{benefit.metric}</div>
                      <div className="text-xs text-muted-foreground">{benefit.metricLabel}</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* ROI Section */}
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            See ROI in the first month
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            With engineering time savings of 90%, most customers see a complete return 
            on investment within 30 days of implementation.
          </p>
          <div className="bg-muted/50 border border-border rounded-lg px-6 py-3 inline-block">
            <p className="text-foreground font-medium">
              Coming Soon - Early access available
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}