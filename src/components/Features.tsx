import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Shield, Clock, FileText, MapPin, Users } from "lucide-react"
import { FadeIn } from "@/components/ui/fade-in"

export const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Design",
      badge: "Core Feature",
      description: "Advanced AI analyzes your CAD files and automatically generates complete fire-safety system layouts with optimal device placement and full code compliance.",
      highlights: ["Automated CAD analysis", "Intelligent device placement", "Code compliance verification"]
    },
    {
      icon: Shield,
      title: "Complete System Coverage",
      badge: "Comprehensive",
      description: "Design fire-safety systems (alarms, sprinklers, detectors) in one unified platform.",
      highlights: ["Fire protection systems", "Security system design", "Integrated workflow"]
    },
    {
      icon: Clock,
      title: "Dramatic Time Savings",
      badge: "Proven Results",
      description: "Reduce engineering time from months to minutes. What used to take 300 hours can now be completed in 30 minutes with higher accuracy.",
      highlights: ["90% faster delivery", "Instant design generation", "Real-time updates"]
    },
    {
      icon: FileText,
      title: "Built-in Code Database",
      badge: "Always Updated",
      description: "Comprehensive database of fire codes, building regulations, and local amendments that's continuously updated to ensure compliance across all jurisdictions.",
      highlights: ["NFPA standards", "Local code variations", "Automatic updates"]
    },
    {
      icon: MapPin,
      title: "Multi-Jurisdiction Support",
      badge: "Global Ready",
      description: "Automatically adapt designs to local regulations whether you're working in Seattle, New York, or any other jurisdiction worldwide.",
      highlights: ["Location-based codes", "Regional compliance", "Global coverage"]
    },
    {
      icon: Users,
      title: "Collaborative Workflow",
      badge: "Team Ready",
      description: "Centralized platform for teams to collaborate, track revisions, and coordinate between sales, engineering, and installation subcontractors.",
      highlights: ["Version control", "Team collaboration", "Progress tracking"]
    }
  ]

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Powerful <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Features</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to transform your fire-safety system design workflow
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <FadeIn key={feature.title} delay={index * 0.1} direction="up">
                <Card className="p-6 h-full bg-background/60 backdrop-blur-sm border-border/50 hover:bg-background/80 transition-all duration-300 hover:shadow-xl hover:scale-105">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                        <Badge variant="secondary" className="text-xs">
                          {feature.badge}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {feature.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </Card>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}