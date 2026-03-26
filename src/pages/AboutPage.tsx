import StickyHeader from "@/components/StickyHeader";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import { Award, Users, Clock, MapPin } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <StickyHeader />
      <section className="bg-hero-gradient py-16 md:py-20">
        <div className="container text-center">
          <h1 className="font-display font-extrabold text-4xl md:text-5xl text-primary-foreground mb-4">About SameDay Plumbing</h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">Canberra's locally owned and operated plumbing service — delivering quality workmanship since day one.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-4xl">
          <div className="prose prose-lg max-w-none space-y-6">
            <h2 className="font-display font-bold text-2xl text-foreground">Your Local Canberra Plumbers</h2>
            <p className="text-muted-foreground leading-relaxed">
              SameDay Plumbing was founded with a simple mission: to provide Canberra residents and businesses with fast, reliable, and affordable plumbing services — when they need them most. As a locally owned business, we understand the unique plumbing challenges that Canberra properties face, from ageing infrastructure to extreme weather conditions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our team of fully licensed and experienced plumbers is committed to delivering the highest quality workmanship on every job, whether it's a simple tap repair or a complex drainage installation. We take pride in our transparent pricing, punctual service, and genuine care for our customers.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We believe that plumbing emergencies shouldn't cost a fortune or take days to fix. That's why we offer same-day service across all of Canberra, with a $0 call-out fee and 24/7 availability. When you call SameDay Plumbing, you get a real local plumber — not a call centre.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {[
              { icon: Clock, label: "24/7", sub: "Availability" },
              { icon: Award, label: "Licensed", sub: "ACT Plumbers" },
              { icon: Users, label: "500+", sub: "Happy Customers" },
              { icon: MapPin, label: "All Areas", sub: "Across Canberra" },
            ].map(({ icon: Icon, label, sub }) => (
              <div key={label} className="text-center bg-accent rounded-xl p-6">
                <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="font-display font-bold text-2xl text-foreground">{label}</div>
                <div className="text-sm text-muted-foreground">{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </div>
  );
};

export default AboutPage;
