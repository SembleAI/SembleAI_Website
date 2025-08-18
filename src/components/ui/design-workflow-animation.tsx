import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import React from "react"
import { Upload, Brain, Zap, Download } from "lucide-react"

export const DesignWorkflowAnimation = ({ className = "" }: { className?: string }) => {
  const [currentStep, setCurrentStep] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % 4)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const steps = [
    { 
      title: "Upload CAD", 
      color: "text-blue-500",
      description: "Import floor plans",
      icon: Upload
    },
    { 
      title: "AI Analysis", 
      color: "text-purple-500",
      description: "Analyze building layout",
      icon: Brain
    },
    { 
      title: "Generate Design", 
      color: "text-orange-500",
      description: "Create fire and life-safety system",
      icon: Zap
    },
    { 
      title: "Export & Ship", 
      color: "text-green-500",
      description: "Ready for implementation",
      icon: Download
    }
  ]

  return (
    <div className={`relative w-full h-96 ${className}`}>
      {/* Background Building Outline */}
      <svg
        viewBox="0 0 400 300"
        className="absolute inset-0 w-full h-full opacity-20"
      >
        <motion.rect
          x="50"
          y="50"
          width="300"
          height="200"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="5,5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
        />
        
        {/* Room divisions */}
        <motion.line
          x1="200"
          y1="50"
          x2="200"
          y2="250"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="3,3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.5, repeat: Infinity, repeatType: "loop" }}
        />
        <motion.line
          x1="50"
          y1="150"
          x2="350"
          y2="150"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="3,3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.7, repeat: Infinity, repeatType: "loop" }}
        />
      </svg>

      {/* Central Progress Circle */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          {/* Outer rotating ring */}
          <motion.div
            className="w-32 h-32 rounded-full border-4 border-primary/30 border-t-primary"
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Inner content */}
          <div className="absolute inset-2 flex flex-col items-center justify-center bg-background/90 rounded-full">
            <motion.div
              key={currentStep}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center text-center"
            >
              {/* Fire and life-safety relevant icon */}
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-2">
                {React.createElement(steps[currentStep].icon, { 
                  className: "w-6 h-6 text-primary" 
                })}
              </div>
              <div className={`text-sm font-semibold ${steps[currentStep].color}`}>
                {steps[currentStep].title}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Corner Step Indicators */}
      <div className="absolute top-4 left-4 space-y-2">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-300 ${
              currentStep === index 
                ? 'bg-primary/20 border border-primary/40' 
                : 'bg-background/60 border border-border/30'
            }`}
            animate={{
              scale: currentStep === index ? 1.05 : 1,
              opacity: currentStep === index ? 1 : 0.7
            }}
          >
            <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
              currentStep === index ? 'bg-primary/20' : 'bg-muted-foreground/20'
            }`}>
              {React.createElement(step.icon, { 
                className: `w-3 h-3 ${
                  currentStep === index ? 'text-primary' : 'text-muted-foreground'
                }` 
              })}
            </div>
            <div className="text-xs font-medium">{step.title}</div>
          </motion.div>
        ))}
      </div>

      {/* Floating Elements */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-primary/30 rounded-full"
          style={{
            left: `${20 + (i * 10)}%`,
            top: `${30 + (i % 3) * 20}%`,
          }}
          animate={{
            y: [-10, 10, -10],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 2 + i * 0.2,
            repeat: Infinity,
            repeatType: "reverse",
            delay: i * 0.3,
          }}
        />
      ))}

      {/* Progress Bar at Bottom */}
      <div className="absolute bottom-4 left-4 right-4">
        <div className="bg-background/60 rounded-full h-2 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-primary to-accent"
            initial={{ width: "0%" }}
            animate={{ width: `${((currentStep + 1) / 4) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <div className="text-xs text-muted-foreground mt-2 text-center">
          {steps[currentStep].description}
        </div>
      </div>
    </div>
  )
}
