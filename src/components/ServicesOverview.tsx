import { Droplets, Flame, Wrench, Search, ShowerHead, Pipette, Waves } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  { icon: Droplets, title: "Blocked Drains", desc: "Fast drain clearing for homes and businesses across Canberra. CCTV inspections available.", keyword: "Blocked Drains Canberra" },
  { icon: Wrench, title: "Emergency Plumbing", desc: "24/7 emergency plumber on call. Burst pipes, overflows, and urgent repairs — we're there fast.", keyword: "Emergency Plumber Canberra" },
  { icon: Flame, title: "Hot Water Systems", desc: "Installation, repair & replacement of all hot water system brands. Gas, electric & solar.", keyword: "Hot Water Plumber Canberra" },
  { icon: Pipette, title: "Gas Fitting", desc: "Licensed gas fitters for installations, repairs, and compliance certificates.", keyword: "Gas Fitter Canberra" },
  { icon: Search, title: "Leak Detection", desc: "Advanced leak detection for taps, toilets, and hidden pipe leaks. Stop water waste today.", keyword: "Leak Detection Canberra" },
  { icon: Waves, title: "Drainage Solutions", desc: "Stormwater, sewer, and drainage installations and repairs for residential and commercial.", keyword: "Drainage Plumber Canberra" },
  { icon: ShowerHead, title: "Taps & Toilets", desc: "Repairs, replacements, and installations for all taps, toilets, and bathroom fixtures.", keyword: "Tap Repair Canberra" },
];

const ServicesOverview = () => {
  return (
    <section className="py-20 bg-surface-gradient">
      <div className="container">
        <div className="text-center mb-14">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">What We Do</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mt-2 mb-4">
            Our Plumbing Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From emergency repairs to planned installations, our licensed Canberra plumbers handle it all with same-day service.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <Link
              to="/services"
              key={title}
              className="group bg-card rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border/50"
            >
              <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-display font-semibold text-lg text-foreground mb-2">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
