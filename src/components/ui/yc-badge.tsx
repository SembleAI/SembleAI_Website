import { FadeIn } from "@/components/ui/fade-in"

export const YCBadge = ({ variant = "default", className = "" }: { variant?: "default" | "footer" | "hero", className?: string }) => {
  const YCIcon = () => (
    <i className="fa-brands fa-y-combinator mr-2 text-[#FF6600]" style={{ fontSize: '16px' }}></i>
  )

  if (variant === "footer") {
    return (
      <div className={`inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors ${className}`}>
        <YCIcon />
        <span>Backed by Y Combinator</span>
      </div>
    )
  }

  if (variant === "hero") {
    return (
      <FadeIn delay={0.1}>
        <div className={`inline-flex items-center rounded-full border border-border/50 bg-background/90 backdrop-blur-sm px-3 py-1.5 text-xs text-muted-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-background ${className}`}>
          <YCIcon />
          <span className="font-medium">Backed by Y Combinator</span>
        </div>
      </FadeIn>
    )
  }

  // Default variant
  return (
    <div className={`inline-flex items-center rounded-lg border border-border/50 bg-background/80 backdrop-blur-sm px-3 py-2 text-sm text-muted-foreground shadow-sm hover:shadow-md transition-all duration-300 ${className}`}>
      <YCIcon />
      <span>Backed by Y Combinator</span>
    </div>
  )
}
