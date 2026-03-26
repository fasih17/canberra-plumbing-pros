import { Clock, DollarSign, Award, ThumbsUp, Truck, ShieldCheck } from "lucide-react";

const benefits = [
  { icon: Clock, title: "Same-Day Service", desc: "We arrive when you need us — often within hours of your call." },
  { icon: DollarSign, title: "$0 Call-Out Fee", desc: "No hidden charges. You only pay for the work we do." },
  { icon: ShieldCheck, title: "Licensed & Insured", desc: "Fully licensed ACT plumbers with comprehensive insurance." },
  { icon: Truck, title: "24/7 Availability", desc: "Emergencies don't wait — neither do we. Call us anytime." },
  { icon: Award, title: "Quality Guaranteed", desc: "All work backed by our workmanship guarantee." },
  { icon: ThumbsUp, title: "5-Star Rated", desc: "Trusted by hundreds of Canberra homeowners and businesses." },
];

const BenefitsSection = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-14">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Why Choose Us</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mt-2 mb-4">
            Canberra's Most Trusted Plumbers
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground mb-1">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
