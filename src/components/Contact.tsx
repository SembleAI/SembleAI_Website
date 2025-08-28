import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { useState, useRef } from "react"
import { FadeIn } from "@/components/ui/fade-in"

export const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(null);

    const form = new FormData(e.currentTarget);
    const payload = {
      firstName: form.get("firstName"),
      lastName: form.get("lastName"),
      email: form.get("email"),
      company: form.get("company"),
      subject: form.get("subject"),
      message: form.get("message"),
    };

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const ct = res.headers.get("content-type") || "";
      const body = ct.includes("application/json")
        ? await res.json()
        : { ok: false, error: await res.text() || "Unexpected response" };

      if (!res.ok || body.ok === false) {
        throw new Error(body.error || `Email failed (${res.status})`);
      }

      setSuccess("Message sent. We'll get back to you shortly.");
      
      // Safe form reset - check if form exists before resetting
      if (formRef.current) {
        formRef.current.reset();
      }
    } catch (err: any) {
      console.error('Email error:', err);
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80"
          style={{
            backgroundImage: 'url(/house-plan-bg.png)',
            transform: 'scale(1.02)',
          }}
        />
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 bg-gradient-to-br from-background/50 via-background/60 to-background/70" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 drop-shadow-sm">
              Ready to Transform Your Design Process?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto drop-shadow-sm">
              Get in touch to learn more about Semble AI and how we can help automate your fire and life-safety system designs.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6 drop-shadow-sm">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 bg-background/60 backdrop-blur-sm p-4 rounded-lg border border-border/30">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="text-foreground font-medium">founders@sembleai.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 bg-background/60 backdrop-blur-sm p-4 rounded-lg border border-border/30">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="text-foreground font-medium">Coming Soon</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 bg-background/60 backdrop-blur-sm p-4 rounded-lg border border-border/30">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="text-foreground font-medium">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-background/60 backdrop-blur-sm border border-border rounded-lg p-6 shadow-lg">
              <h4 className="text-lg font-semibold text-foreground mb-3">Why Choose Semble AI?</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span>90% reduction in design time</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span>100% code compliance guaranteed</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span>AI-powered automation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span>Full regulatory approval</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-background/80 backdrop-blur-sm border border-border rounded-lg p-8 shadow-xl">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                    First Name *
                  </label>
                  <Input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                    Last Name *
                  </label>
                  <Input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address *
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                  Company
                </label>
                <Input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject *
                </label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full"
                  placeholder="Interested in Semble AI"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full"
                  placeholder="Tell us about your fire and life-safety system design needs..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                variant="hero"
                size="lg"
                className="w-full"
              >
                {isSubmitting ? (
                  "Sending…"
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>

            {/* Success Message */}
            {success && (
              <div className="mt-4 p-4 rounded-lg bg-green-50 border border-green-200 text-green-800 dark:bg-green-900/30 dark:border-green-700 dark:text-green-300">
                {success}
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="mt-4 p-4 rounded-lg bg-red-50 border border-red-200 text-red-800 dark:bg-red-900/30 dark:border-red-700 dark:text-red-300">
                {error}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}