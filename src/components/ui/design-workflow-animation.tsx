import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import React from "react"
import { Upload, Brain, Zap, Download, FileText, Eye, MousePointer2 } from "lucide-react"
import floorPlanImage from "@/assets/floor-plan-eg.jpeg"

export const DesignWorkflowAnimation = ({ className = "" }: { className?: string }) => {
  const [currentStep, setCurrentStep] = useState(0)
  const [isZoomed, setIsZoomed] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        const next = (prev + 1) % 4
        // Reset zoom when starting new cycle
        if (next === 0) {
          setIsZoomed(false)
        }
        // Trigger zoom effect on step 2 (Generate Design)
        if (next === 2) {
          setTimeout(() => setIsZoomed(true), 800)
        }
        return next
      })
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const steps = [
    { 
      title: "Upload CAD", 
      color: "text-blue-500",
      description: "Import your floor plan",
      icon: Upload
    },
    { 
      title: "AI Analysis", 
      color: "text-purple-500",
      description: "AI processes building layout",
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
      description: "Download and implement",
      icon: Download
    }
  ]

  return (
    <div className={`relative w-full h-96 bg-muted/20 rounded-lg overflow-hidden ${className}`}>
      {/* Main Visual Area */}
      <div className="relative w-full h-full">
        
        {/* Step 0: Upload CAD */}
        <AnimatePresence>
          {currentStep === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="relative">
                {/* CAD File Preview */}
                <motion.div
                  className="w-72 h-48 bg-background border-2 border-dashed border-primary/50 rounded-lg relative overflow-hidden"
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-25"
                    style={{ backgroundImage: `url(${floorPlanImage})` }}
                  />
                  <div className="relative z-10 h-full flex flex-col items-center justify-center p-6">
                    <motion.div
                      className="bg-primary/10 p-3 rounded-full mb-3"
                      initial={{ rotate: 0 }}
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ delay: 1, duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    >
                      <FileText className="w-12 h-12 text-primary" />
                    </motion.div>
                    <div className="text-center bg-background/80 backdrop-blur-sm rounded-lg p-3">
                      <div className="text-sm font-semibold mb-1">Floor Plan.dwg</div>
                      <div className="text-xs text-muted-foreground">2.4 MB • Ready for upload</div>
                    </div>
                  </div>
                  
                  {/* Upload progress indicator */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-primary/20"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 2, duration: 1.5 }}
                  />
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Step 1: AI Analysis */}
        <AnimatePresence>
          {currentStep === 1 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="relative">
                {/* Background CAD with analysis overlay */}
                <div className="w-72 h-48 bg-background rounded-lg border border-border relative overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-20"
                    style={{ backgroundImage: `url(${floorPlanImage})` }}
                  />
                  
                  {/* Analysis scanning lines */}
                  <motion.div
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        className="absolute h-0.5 w-full bg-gradient-to-r from-transparent via-primary to-transparent"
                        style={{ top: `${25 + i * 25}%` }}
                        initial={{ x: '-100%' }}
                        animate={{ x: '100%' }}
                        transition={{ 
                          duration: 2, 
                          delay: i * 0.3, 
                          repeat: Infinity,
                          repeatType: "loop"
                        }}
                      />
                    ))}
                  </motion.div>

                  {/* AI Logo in center */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center backdrop-blur-sm"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    >
                      <img 
                        src="/logo.png" 
                        alt="Semble AI" 
                        className="w-8 h-8 rounded-full object-cover"
                      />
                    </motion.div>
                  </div>

                  {/* Processing indicators */}
                  <div className="absolute bottom-2 left-2 right-2">
                    <motion.div
                      className="h-1 bg-primary/30 rounded-full overflow-hidden"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8 }}
                    >
                      <motion.div
                        className="h-full bg-primary"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 2.5, delay: 0.8 }}
                      />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Step 2: Generate Design */}
        <AnimatePresence>
          {currentStep === 2 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="relative">
                {/* Main floor plan view */}
                <motion.div
                  className="w-72 h-48 bg-background rounded-lg border border-border relative overflow-hidden"
                  animate={isZoomed ? { scale: 1.3, x: -30, y: -20 } : { scale: 1, x: 0, y: 0 }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                >
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-40"
                    style={{ backgroundImage: `url(${floorPlanImage})` }}
                  />
                  
                  {/* Device overlays that appear during zoom */}
                  <AnimatePresence>
                    {isZoomed && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="absolute inset-0"
                      >
                        {/* Fire detectors */}
                        {[
                          { x: 20, y: 30 },
                          { x: 60, y: 25 },
                          { x: 45, y: 60 },
                          { x: 80, y: 55 }
                        ].map((pos, i) => (
                          <motion.div
                            key={`detector-${i}`}
                            className="absolute w-3 h-3 bg-red-500 rounded-full"
                            style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.8 + i * 0.2, duration: 0.4 }}
                          >
                            <motion.div
                              className="absolute inset-0 bg-red-500/50 rounded-full"
                              animate={{ scale: [1, 2, 1] }}
                              transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                            />
                          </motion.div>
                        ))}
                        
                        {/* Sprinkler heads */}
                        {[
                          { x: 35, y: 40 },
                          { x: 70, y: 35 },
                          { x: 25, y: 70 }
                        ].map((pos, i) => (
                          <motion.div
                            key={`sprinkler-${i}`}
                            className="absolute w-2 h-2 bg-blue-500 rounded-full"
                            style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 1.2 + i * 0.15, duration: 0.4 }}
                          />
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Generation effect */}
                <motion.div
                  className="absolute -inset-4 border-2 border-primary/50 rounded-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  <motion.div
                    className="absolute inset-0 border-2 border-primary rounded-lg"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Step 3: Export & Ship */}
        <AnimatePresence>
          {currentStep === 3 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="relative">
                {/* Export interface */}
                <motion.div
                  className="w-72 h-48 bg-background rounded-lg border border-border relative overflow-visible p-6"
                  initial={{ y: 20 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  {/* Document preview - made larger */}
                  <div className="w-full h-28 bg-muted rounded border border-border/50 mb-4 relative overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center opacity-40"
                      style={{ backgroundImage: `url(${floorPlanImage})` }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <FileText className="w-10 h-10 text-primary" />
                    </div>
                    {/* Design overlay indicators */}
                    <div className="absolute top-2 right-2 flex space-x-1">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    </div>
                  </div>

                  {/* Export button - improved sizing */}
                  <motion.div
                    className="w-full bg-primary text-primary-foreground py-3 px-4 rounded-md flex items-center justify-center cursor-pointer relative overflow-hidden font-medium"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Download className="w-5 h-5 mr-2" />
                    <span className="text-sm">Export Design</span>
                    
                    {/* Click effect */}
                    <motion.div
                      className="absolute inset-0 bg-white/20"
                      initial={{ x: '-100%' }}
                      animate={{ x: '100%' }}
                      transition={{ delay: 1.5, duration: 0.6 }}
                    />
                  </motion.div>
                  
                  {/* Success checkmark - positioned better */}
                  <motion.div
                    className="absolute -top-3 -right-3 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 2, duration: 0.4 }}
                  >
                    <motion.div
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ delay: 2.2, duration: 0.6 }}
                    >
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <motion.path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ delay: 2.2, duration: 0.6 }}
                        />
                      </svg>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Step Indicators */}
      <div className="absolute top-4 left-4 space-y-2 z-10">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className={`flex items-center space-x-3 px-3 py-2 rounded-lg backdrop-blur-sm transition-all duration-300 ${
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

      {/* Progress Bar */}
      <div className="absolute bottom-4 left-4 right-4 z-10">
        <div className="bg-background/60 backdrop-blur-sm rounded-full h-2 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-primary to-accent"
            initial={{ width: "0%" }}
            animate={{ width: `${((currentStep + 1) / 4) * 100}%` }}
            transition={{ duration: 0.8 }}
          />
        </div>
        <div className="text-xs text-muted-foreground mt-2 text-center backdrop-blur-sm">
          {steps[currentStep].description}
        </div>
      </div>
    </div>
  )
}
