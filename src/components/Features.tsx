import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Shield, Clock, FileText, MapPin, Users } from "lucide-react"

export const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Design",
      badge: "Core Feature",
      description: "Advanced AI analyzes your CAD files and automatically generates complete fire and security system layouts with optimal device placement and full code compliance.",
      highlights: ["Automated CAD analysis", "Intelligent device placement", "Code compliance verification"]
    },
    {
      icon: Shield,
      title: "Complete System Coverage",
      badge: "Comprehensive",
      description: "Design both fire safety systems (alarms, sprinklers, detectors) and security systems (cameras, access control, sensors) in one unified platform.",
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
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Powerful features built for the industry
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to automate fire and security system design, 
            from AI-powered analysis to full regulatory compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 border-border bg-card">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <Badge variant="secondary" className="text-xs">
                  {feature.badge}
                </Badge>
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {feature.description}
              </p>
              
              <ul className="space-y-2">
                {feature.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                    {highlight}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}