import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { useEffect, useState } from "react"

// Floating particles background effect
export const FloatingParticles = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary/20 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          transition={{
            duration: Math.random() * 20 + 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
        />
      ))}
    </div>
  )
}

// Gradient orb that follows mouse
export const InteractiveOrb = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <motion.div
      className="fixed w-96 h-96 rounded-full pointer-events-none z-0"
      style={{
        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
        filter: 'blur(40px)',
      }}
      animate={{
        x: mousePosition.x - 192,
        y: mousePosition.y - 192,
      }}
      transition={{
        type: "spring",
        damping: 30,
        stiffness: 200,
        mass: 0.8,
      }}
    />
  )
}

// Animated grid background
export const AnimatedGrid = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`absolute inset-0 ${className}`}>
      <svg
        className="w-full h-full opacity-10"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern
            id="grid"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
          >
            <motion.path
              d="M 10 0 L 0 0 0 10"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, delay: Math.random() * 2 }}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  )
}

// Scroll progress indicator
export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent z-50 origin-left"
      style={{ scaleX }}
    />
  )
}

// Typing animation effect
export const TypewriterText = ({ 
  text, 
  className = "",
  delay = 0 
}: { 
  text: string
  className?: string
  delay?: number
}) => {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayedText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }
    }, delay + currentIndex * 100)

    return () => clearTimeout(timer)
  }, [currentIndex, text, delay])

  return (
    <span className={className}>
      {displayedText}
      <motion.span
        className="inline-block w-0.5 h-6 bg-primary ml-1"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
      />
    </span>
  )
}

// Staggered reveal animation
export const StaggeredReveal = ({ 
  children, 
  className = "",
  stagger = 0.1 
}: { 
  children: React.ReactNode[]
  className?: string
  stagger?: number
}) => {
  return (
    <div className={className}>
      {children.map((child, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ 
            duration: 0.6, 
            delay: index * stagger,
            ease: "easeOut"
          }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  )
}

// Parallax scroll effect
export const ParallaxElement = ({ 
  children, 
  speed = 0.5, 
  className = "" 
}: { 
  children: React.ReactNode
  speed?: number
  className?: string
}) => {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 1000], [0, -1000 * speed])

  return (
    <motion.div className={className} style={{ y }}>
      {children}
    </motion.div>
  )
}

// Glowing border effect
export const GlowingBorder = ({ 
  children, 
  className = "",
  glowColor = "primary" 
}: { 
  children: React.ReactNode
  className?: string
  glowColor?: string
}) => {
  return (
    <motion.div
      className={`relative ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className={`absolute -inset-0.5 bg-gradient-to-r from-${glowColor} to-accent rounded-lg opacity-0 blur-sm`}
        whileHover={{ opacity: 0.7 }}
        transition={{ duration: 0.3 }}
      />
      <div className="relative bg-background rounded-lg">
        {children}
      </div>
    </motion.div>
  )
}

// Number counter with spring animation
export const SpringCounter = ({ 
  value, 
  suffix = "", 
  className = "",
  duration = 2000 
}: { 
  value: number
  suffix?: string
  className?: string
  duration?: number
}) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const startTime = Date.now()
    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easeProgress = 1 - Math.pow(1 - progress, 3)
      const currentValue = Math.round(easeProgress * value)
      
      setCount(currentValue)
      
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animate()
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById(`counter-${value}`)
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [value, duration])

  return (
    <span id={`counter-${value}`} className={className}>
      {count}{suffix}
    </span>
  )
}
