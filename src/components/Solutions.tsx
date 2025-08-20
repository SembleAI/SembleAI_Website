import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Hospital, ShoppingBag, GraduationCap, ArrowRight, Sparkles, Star } from "lucide-react"
import { FadeIn } from "@/components/ui/fade-in"
import { motion } from "framer-motion"

export const Solutions = () => {
  const solutions = [
    {
      icon: Building2,
      title: "Corporate Facilities",
      badge: "Most Popular",
      description: "Office buildings, data centers, and corporate campuses with complex fire safety requirements.",
      features: ["Multi-floor compliance", "Integrated access control", "Emergency egress planning"],
      caseStudy: "Reduced design time for 40-story office tower from 6 months to 2 weeks"
    },
    {
      icon: Hospital,
      title: "Healthcare Facilities",
      badge: "Specialized",
      description: "Hospitals, clinics, and medical facilities requiring specialized life safety protocols.",
      features: ["NFPA 99 compliance", "Patient safety zones", "Medical equipment integration"],
      caseStudy: "Automated NFPA 99 compliance for 300-bed hospital renovation"
    },
    {
      icon: ShoppingBag,
      title: "Retail & Hospitality",
      badge: "High Volume",
      description: "Shopping centers, hotels, restaurants, and entertainment venues with public safety focus.",
      features: ["Crowd management", "Public assembly codes", "Retail fire and life-safety optimization"],
      caseStudy: "Standardized fire and life-safety design across 50+ retail locations"
    },
    {
      icon: GraduationCap,
      title: "Educational Institutions",
      badge: "Safety First",
      description: "Schools, universities, and educational facilities with enhanced fire and life-safety and emergency protocols.",
      features: ["Lockdown procedures", "Campus-wide integration", "Student safety zones"],
      caseStudy: "Campus-wide fire and life-safety upgrade completed 80% faster"
    }
  ]

  return (
    <section id="solutions" className="py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Seamlessly continuing background flow */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/98 to-background" />
        <motion.div 
          className="absolute inset-0 opacity-15"
          animate={{ 
            background: [
              'radial-gradient(ellipse 700px 500px at 80% 0%, hsl(var(--accent) / 0.1) 0%, transparent 65%)',
              'radial-gradient(ellipse 800px 400px at 30% 60%, hsl(var(--primary) / 0.08) 0%, transparent 70%)',
              'radial-gradient(ellipse 600px 600px at 70% 100%, hsl(var(--accent) / 0.12) 0%, transparent 60%)',
              'radial-gradient(ellipse 700px 500px at 80% 0%, hsl(var(--accent) / 0.1) 0%, transparent 65%)'
            ]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
        {/* Subtle connecting flow element */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background/80 to-transparent" />
      </div>

      {/* Receiving flow from previous section */}
      <div className="absolute top-0 left-0 right-0 h-16 z-10">
        <svg
          className="absolute top-0 w-full h-16"
          viewBox="0 0 1200 60"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,0 C300,40 600,10 900,35 C1050,50 1150,20 1200,40 L1200,0 L0,0 Z"
            fill="hsl(var(--background) / 0.9)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
          />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <FadeIn>
          <div className="text-center mb-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-sm font-medium text-accent mb-4"
            >
              <Star className="w-4 h-4" />
              Specialized Solutions
            </motion.div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
              Solutions for every facility type
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Cadlit adapts to unique building requirements, ensuring optimal fire and life-safety design
            </p>
          </div>
        </FadeIn>

        {/* Compact facility cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, rotateY: index % 2 === 0 ? 2 : -2 }}
              className="group"
            >
              <div className="relative p-5 bg-background/40 backdrop-blur-md border border-border/30 rounded-xl hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 overflow-hidden hover:bg-background/60">
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Floating badge */}
                <motion.div
                  initial={{ y: -5, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  className="absolute top-3 right-3"
                >
                  <Badge variant="outline" className={`text-xs px-2 py-1 ${
                    solution.badge === 'Most Popular' ? 'bg-primary/10 text-primary border-primary/20' :
                    solution.badge === 'Specialized' ? 'bg-accent/10 text-accent border-accent/20' :
                    solution.badge === 'High Volume' ? 'bg-orange-500/10 text-orange-500 border-orange-500/20' :
                    'bg-green-500/10 text-green-500 border-green-500/20'
                  }`}>
                    {solution.badge}
                  </Badge>
                </motion.div>
                
                <div className="relative">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300 group-hover:scale-110 transform">
                      <solution.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                        {solution.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {solution.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-1.5">
                    {solution.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + idx * 0.1 }}
                        className="flex items-center text-xs text-muted-foreground"
                      >
                        <div className="w-1 h-1 bg-primary rounded-full mr-2 group-hover:scale-150 transition-transform duration-300"></div>
                        {feature}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}