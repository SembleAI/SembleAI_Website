import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react"
import logoSvg from "../assets/logo.svg?url"

export const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t border-border">
      {/* CTA Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Interested in revolutionizing your design process?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our waitlist to be among the first to experience Cadence when we launch. 
            Get early access and help shape the future of fire and security system design.
          </p>
          <div className="flex flex-col items-center justify-center gap-6 mb-12">
            <Button variant="hero" size="xl" className="min-w-[250px]">
              <Mail className="mr-2 h-5 w-5" />
              Join the waitlist
            </Button>
            <p className="text-sm text-muted-foreground">
              Or reach out directly at <a href="mailto:hello@Cadence.ai" className="text-primary hover:underline font-medium">hello@Cadence.ai</a>
            </p>
          </div>
        </div>
      </section>

      {/* Footer Links */}
      <div className="border-t border-border py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center mb-4">
                <img 
                  src={logoSvg} 
                  alt="Cadence Logo" 
                  className="h-8 w-8 mr-3" 
                  style={{
                    filter: 'invert(1) brightness(0.8)' // Invert colors and adjust brightness for better contrast
                  }}
                />
                <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Cadence
                </div>
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                AI-powered fire and security system design automation for the modern integrator.
              </p>
            </div>

            {/* Product */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Product</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><a href="#features" className="hover:text-primary transition-colors">Features</a></li>
                <li><a href="#benefits" className="hover:text-primary transition-colors">Benefits</a></li>
                <li><a href="#solutions" className="hover:text-primary transition-colors">Solutions</a></li>
              </ul>
            </div>

            {/* Solutions */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Solutions</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Fire Protection</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Security Systems</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Code Compliance</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Multi-Jurisdiction</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Company</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-muted-foreground mb-4 md:mb-0">
              © 2024 Cadence. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}