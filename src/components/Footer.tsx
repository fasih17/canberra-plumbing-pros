import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground/80 pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-hero-gradient flex items-center justify-center">
                <span className="text-primary-foreground font-bold font-display">S</span>
              </div>
              <span className="font-display font-bold text-primary-foreground text-lg">SameDay Plumbing</span>
            </div>
            <p className="text-sm leading-relaxed">
              Canberra's trusted same-day plumbing service. Licensed, insured, and available 24/7 for all your plumbing needs.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-primary-foreground mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              {["Blocked Drains", "Emergency Plumbing", "Hot Water Systems", "Gas Fitting", "Leak Detection", "Drainage Solutions"].map(s => (
                <li key={s}><Link to="/services" className="hover:text-primary-foreground transition-colors">{s}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-primary-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-primary-foreground transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-primary-foreground transition-colors">About Us</Link></li>
              <li><Link to="/reviews" className="hover:text-primary-foreground transition-colors">Reviews</Link></li>
              <li><Link to="/contact" className="hover:text-primary-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-primary-foreground mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-secondary" /> <a href="tel:0261234567" className="hover:text-primary-foreground">(02) 6123 4567</a></li>
              <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-secondary" /> info@samedayplumbing.com.au</li>
              <li className="flex items-start gap-2"><MapPin className="w-4 h-4 text-secondary mt-0.5" /> Servicing all of Canberra, ACT</li>
              <li className="flex items-center gap-2"><Clock className="w-4 h-4 text-secondary" /> 24/7 — 365 days</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 text-center text-xs text-primary-foreground/50">
          © {new Date().getFullYear()} SameDay Plumbing Canberra. All rights reserved. | Licensed ACT Plumbers
        </div>
      </div>
    </footer>
  );
};

export default Footer;
