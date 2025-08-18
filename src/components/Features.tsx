import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Shield, Clock, FileText, MapPin, Users, CheckCircle } from "lucide-react"
import { FadeIn } from "@/components/ui/fade-in"
import { DesignWorkflowAnimation } from "@/components/ui/design-workflow-animation"

export const Features = () => {
  const keyFeatures = [
    {
      icon: Brain,
      title: "AI-Powered Design",
      description: "Advanced AI analyzes CAD files and generates complete fire and life-safety layouts with optimal device placement and full code compliance."
    },
    {
      icon: Clock,
      title: "90% Time Reduction",
      description: "Transform 300-hour projects into 30-minute workflows with instant design generation and real-time updates."
    },
    {
      icon: Shield,
      title: "Complete System Coverage",
      description: "Design all fire and life-safety systems (alarms, sprinklers, detectors) in one unified, integrated platform."
    },
    {
      icon: FileText,
      title: "Built-in Code Database",
      description: "Comprehensive, continuously updated database of NFPA standards, local codes, and building regulations."
    },
    {
      icon: MapPin,
      title: "Multi-Jurisdiction Support",
      description: "Automatically adapt designs to local regulations worldwide with location-based code compliance."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Centralized platform with version control, progress tracking, and coordination tools for entire teams."
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
              Everything you need to transform your fire and life-safety system design workflow
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Features List */}
          <FadeIn delay={0.2} direction="left">
            <div className="space-y-6">
              {keyFeatures.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={feature.title} className="flex items-start space-x-4 p-4 bg-background/60 backdrop-blur-sm rounded-lg border border-border/30 hover:bg-background/80 transition-all duration-300 hover:scale-105 group">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                        <Icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </FadeIn>

          {/* Right Side - Design Workflow Animation */}
          <FadeIn delay={0.4} direction="right">
            <div className="bg-background/60 backdrop-blur-sm rounded-lg border border-border/30 p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-semibold text-foreground mb-2">
                  How It Works
                </h3>
                <p className="text-muted-foreground">
                  Watch our AI transform your design process
                </p>
              </div>
              <DesignWorkflowAnimation className="text-primary" />
            </div>
          </FadeIn>
        </div>

        {/* Bottom Stats */}
        <FadeIn delay={0.6}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16 pt-12 border-t border-border/30">
            {[
              { number: "300+", label: "Hours Saved", icon: Clock },
              { number: "100%", label: "Code Compliant", icon: CheckCircle },
              { number: "50+", label: "Jurisdictions", icon: MapPin },
              { number: "24/7", label: "AI Availability", icon: Brain }
            ].map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={stat.label} className="text-center group">
                  <div className="flex items-center justify-center mb-3">
                    <Icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-1">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}