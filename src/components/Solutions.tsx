import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Building2, Hospital, ShoppingBag, GraduationCap, ArrowRight } from "lucide-react"

export const Solutions = () => {
  const solutions = [
    {
      icon: Building2,
      title: "Corporate Facilities",
      badge: "Most Popular",
      description: "Office buildings, data centers, and corporate campuses with complex security and fire safety requirements.",
      features: ["Multi-floor compliance", "Integrated access control", "Emergency egress planning"],
      caseStudy: "Reduced design time for 40-story office tower from 6 months to 2 weeks"
    },
    {
      icon: Hospital,
      title: "Healthcare Facilities",
      badge: "Specialized",
      description: "Hospitals, clinics, and medical facilities requiring specialized life safety and security protocols.",
      features: ["NFPA 99 compliance", "Patient safety zones", "Medical equipment integration"],
      caseStudy: "Automated NFPA 99 compliance for 300-bed hospital renovation"
    },
    {
      icon: ShoppingBag,
      title: "Retail & Hospitality",
      badge: "High Volume",
      description: "Shopping centers, hotels, restaurants, and entertainment venues with public safety focus.",
      features: ["Crowd management", "Public assembly codes", "Retail security optimization"],
      caseStudy: "Standardized security design across 50+ retail locations"
    },
    {
      icon: GraduationCap,
      title: "Educational Institutions",
      badge: "Safety First",
      description: "Schools, universities, and educational facilities with enhanced security and emergency protocols.",
      features: ["Lockdown procedures", "Campus-wide integration", "Student safety zones"],
      caseStudy: "Campus-wide security upgrade completed 80% faster"
    }
  ]

  return (
    <section id="solutions" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Solutions for every facility type
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cadence adapts to the unique requirements of different building types, 
            ensuring optimal safety and security design for any project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 border-border bg-card">
              <div className="flex items-start justify-between mb-6">
                <div className="p-4 rounded-xl bg-primary/10">
                  <solution.icon className="h-8 w-8 text-primary" />
                </div>
                <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                  {solution.badge}
                </Badge>
              </div>
              
              <h3 className="text-2xl font-semibold text-foreground mb-3">
                {solution.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {solution.description}
              </p>
              
              <div className="mb-6">
                <h4 className="font-medium text-foreground mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

            </Card>
          ))}
        </div>

        {/* Process Overview */}
        <div className="bg-card rounded-2xl border border-border p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
            How Cadence transforms your workflow
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Upload Plans", desc: "Import your CAD files and project details" },
              { step: "02", title: "AI Analysis", desc: "Our AI analyzes building layout and determines requirements" },
              { step: "03", title: "Auto Design", desc: "Complete system design with optimal device placement" },
              { step: "04", title: "Export & Install", desc: "Generate shop drawings and installation documentation" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary">{item.step}</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}