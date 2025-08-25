import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import logoSvg from "../assets/NEW_LOGO.png"

export const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={logoSvg} 
              alt="SembleAI Logo" 
              className="h-8 w-8 rounded-full object-cover mr-3 bg-background" 
            />
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              SembleAI
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {isHomePage ? (
              <>
                <a href="#features" className="text-foreground hover:text-primary transition-colors">
                  Features
                </a>
                <a href="#benefits" className="text-foreground hover:text-primary transition-colors">
                  Benefits
                </a>
                <a href="#solutions" className="text-foreground hover:text-primary transition-colors">
                  Solutions
                </a>
                <a href="#contact" className="text-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </>
            ) : (
              <>
                <Link to="/#features" className="text-foreground hover:text-primary transition-colors">
                  Features
                </Link>
                <Link to="/#benefits" className="text-foreground hover:text-primary transition-colors">
                  Benefits
                </Link>
                <Link to="/#solutions" className="text-foreground hover:text-primary transition-colors">
                  Solutions
                </Link>
                <Link to="/#contact" className="text-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </>
            )}
            <Link to="/about" className="text-foreground hover:text-primary transition-colors">
              About
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {isHomePage ? (
                <>
                  <a href="#features" className="text-foreground hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
                    Features
                  </a>
                  <a href="#benefits" className="text-foreground hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
                    Benefits
                  </a>
                  <a href="#solutions" className="text-foreground hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
                    Solutions
                  </a>
                  <a href="#contact" className="text-foreground hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
                    Contact
                  </a>
                </>
              ) : (
                <>
                  <Link to="/#features" className="text-foreground hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
                    Features
                  </Link>
                  <Link to="/#benefits" className="text-foreground hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
                    Benefits
                  </Link>
                  <Link to="/#solutions" className="text-foreground hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
                    Solutions
                  </Link>
                  <Link to="/#contact" className="text-foreground hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
                    Contact
                  </Link>
                </>
              )}
              <Link to="/about" className="text-foreground hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
                About
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}