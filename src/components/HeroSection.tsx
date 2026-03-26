import { Phone, MessageSquare, Clock, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-plumber.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="Professional plumber at work in Canberra" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 via-primary/85 to-primary/60" />
      </div>

      <div className="container relative z-10 py-20 md:py-28 lg:py-36">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm border border-secondary/30 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-secondary text-sm font-semibold">Available 24/7 — $0 Call-Out Fee</span>
          </div>

          <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-6">
            Same-Day Plumbing Services in{" "}
            <span className="text-secondary">Canberra</span>
          </h1>

          <p className="text-primary-foreground/85 text-lg md:text-xl mb-8 leading-relaxed max-w-xl">
            Fast, reliable & affordable plumbing — from blocked drains to emergency repairs. Licensed plumbers at your door today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button variant="cta" size="lg" className="text-base px-8 py-6" asChild>
              <a href="tel:0261234567">
                <Phone className="w-5 h-5" /> Call Now — Free Quote
              </a>
            </Button>
            <Button variant="outline-light" size="lg" className="text-base px-8 py-6" asChild>
              <a href="/contact">
                <MessageSquare className="w-5 h-5" /> Get a Free Quote
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: Clock, text: "Same-Day Service" },
              { icon: Zap, text: "Fast Response" },
              { icon: Shield, text: "Licensed & Insured" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-3 bg-primary-foreground/10 backdrop-blur-sm rounded-lg px-4 py-3">
                <Icon className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-primary-foreground text-sm font-medium">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
