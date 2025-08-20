import { Card } from "@/components/ui/card"
import { TrendingUp, Users, CheckCircle, Zap, ArrowRight, Sparkles } from "lucide-react"
import { FadeIn } from "@/components/ui/fade-in"
import { ParallaxElement, SpringCounter } from "@/components/ui/visual-effects"
import { motion } from "framer-motion"

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
      metric: "95%",
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
    <section id="benefits" className="relative py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Seamless flowing background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/90" />
        <motion.div 
          className="absolute inset-0 opacity-20"
          animate={{ 
            background: [
              'radial-gradient(ellipse 800px 400px at 50% 0%, hsl(var(--primary) / 0.1) 0%, transparent 60%)',
              'radial-gradient(ellipse 600px 600px at 20% 50%, hsl(var(--accent) / 0.08) 0%, transparent 70%)',
              'radial-gradient(ellipse 900px 300px at 80% 100%, hsl(var(--primary) / 0.12) 0%, transparent 65%)',
              'radial-gradient(ellipse 800px 400px at 50% 0%, hsl(var(--primary) / 0.1) 0%, transparent 60%)'
            ]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary mb-4"
            >
              <Sparkles className="w-4 h-4" />
              AI-Powered Transformation
            </motion.div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Transform your business with AI
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Join integrators revolutionizing operations through intelligent automation
            </p>
          </div>
        </FadeIn>

        {/* Compact Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="group"
            >
              <div className="relative p-4 bg-background/40 backdrop-blur-md border border-border/30 rounded-xl hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:bg-background/60">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative space-y-2">
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <benefit.icon className="w-4 h-4 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="text-xs text-muted-foreground px-2 py-1 bg-muted/50 rounded-full">
                      {benefit.metricLabel}
                    </div>
                  </div>
                  
                  <div className="text-2xl font-bold text-primary">
                    {benefit.metric.includes('%') ? (
                      <SpringCounter 
                        value={parseInt(benefit.metric)} 
                        suffix="%" 
                        duration={1500 + index * 200}
                      />
                    ) : (
                      benefit.metric
                    )}
                  </div>
                  
                  <h3 className="text-sm font-semibold text-foreground leading-tight">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-xs text-muted-foreground leading-tight">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Condensed ROI Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="relative"
        >
          <div className="bg-gradient-to-r from-background/50 to-background/40 backdrop-blur-md border border-border/30 rounded-2xl p-6 text-center overflow-hidden hover:bg-gradient-to-r hover:from-background/60 hover:to-background/50 transition-all duration-300">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <pattern id="grid-pattern" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid-pattern)" />
              </svg>
            </div>
            
            <div className="relative">
              <div className="flex items-center justify-center gap-3 mb-3">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center"
                >
                  <Sparkles className="w-4 h-4 text-primary" />
                </motion.div>
                <h3 className="text-lg font-bold text-foreground">
                  See ROI in the first month
                </h3>
              </div>
              
              <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span><span className="font-bold text-primary">90%</span> time savings</span>
                </div>
                <ArrowRight className="w-4 h-4 text-primary" />
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  <span>ROI within <span className="font-bold text-primary">30 days</span></span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating elements that bridge sections */}
      <div className="absolute inset-0 z-15 pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            initial={{ 
              x: `${20 + i * 30}%`, 
              y: "60%"
            }}
            animate={{
              x: `${25 + i * 30}%`,
              y: ["60%", "80%", "120%"],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              repeatType: "loop",
              delay: i * 1.5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Flowing connector to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 z-20">
        <svg
          className="absolute bottom-0 w-full h-24"
          viewBox="0 0 1200 100"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,100 C300,20 600,80 900,30 C1050,5 1150,40 1200,20 L1200,100 L0,100 Z"
            fill="hsl(var(--background) / 0.95)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1 }}
          />
          <motion.path
            d="M0,100 C350,10 650,90 950,20 C1100,0 1150,30 1200,15 L1200,100 L0,100 Z"
            fill="hsl(var(--background) / 0.8)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.5, delay: 1.2 }}
            opacity={0.6}
          />
        </svg>
      </div>
    </section>
  )
}