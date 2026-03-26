import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTABanner = () => {
  return (
    <section className="bg-hero-gradient py-16">
      <div className="container text-center">
        <h2 className="font-display font-bold text-3xl md:text-4xl text-primary-foreground mb-4">
          Need a Plumber Right Now?
        </h2>
        <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
          Don't wait — our licensed Canberra plumbers are ready 24/7. $0 call-out fee, same-day service guaranteed.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="cta" size="lg" className="text-base px-8 py-6" asChild>
            <a href="tel:0261234567">
              <Phone className="w-5 h-5" /> Call (02) 6123 4567
            </a>
          </Button>
          <Button variant="outline-light" size="lg" className="text-base px-8 py-6" asChild>
            <a href="/contact">
              Get a Free Quote <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
