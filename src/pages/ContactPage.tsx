import StickyHeader from "@/components/StickyHeader";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Phone, Mail, MapPin, Clock, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

const areas = ["Canberra CBD", "Belconnen", "Gungahlin", "Tuggeranong", "Woden", "Fyshwick", "Queanbeyan", "Weston Creek", "Molonglo Valley", "Jerrabomberra"];

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <StickyHeader />
      <section className="bg-hero-gradient py-16 md:py-20">
        <div className="container text-center">
          <h1 className="font-display font-extrabold text-4xl md:text-5xl text-primary-foreground mb-4">Contact Us</h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">Get in touch for a free quote or call us now for emergency plumbing in Canberra.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-6 mb-8">
                <div className="flex items-center gap-3 mb-3">
                  <AlertTriangle className="w-6 h-6 text-destructive" />
                  <h3 className="font-display font-bold text-lg text-foreground">Plumbing Emergency?</h3>
                </div>
                <p className="text-muted-foreground mb-4">Don't wait — call us right now for immediate assistance. We're available 24/7.</p>
                <Button variant="cta" size="lg" className="w-full" asChild>
                  <a href="tel:0448745324"><Phone className="w-5 h-5" /> Call 0448 745 324 Now</a>
                </Button>
              </div>

              <h2 className="font-display font-bold text-2xl text-foreground mb-6">Get in Touch</h2>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3"><Phone className="w-5 h-5 text-primary" /> <a href="tel:0448745324" className="text-foreground font-medium">0448 745 324</a></li>
                <li className="flex items-center gap-3"><Mail className="w-5 h-5 text-primary" /> <span className="text-foreground">info@samedayplumbing.com.au</span></li>
                <li className="flex items-center gap-3"><Clock className="w-5 h-5 text-primary" /> <span className="text-foreground">Open 24/7 — 365 days a year</span></li>
                <li className="flex items-start gap-3"><MapPin className="w-5 h-5 text-primary mt-0.5" /> <span className="text-foreground">Servicing all of Canberra & surrounds</span></li>
              </ul>

              <h3 className="font-display font-semibold text-lg text-foreground mb-3">Service Areas</h3>
              <div className="flex flex-wrap gap-2">
                {areas.map(a => (
                  <span key={a} className="bg-accent text-accent-foreground text-sm px-3 py-1 rounded-full">{a}</span>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl text-foreground mb-6">Request a Free Quote</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
