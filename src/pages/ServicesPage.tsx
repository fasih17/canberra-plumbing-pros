import StickyHeader from "@/components/StickyHeader";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import { Droplets, Flame, Wrench, Search, ShowerHead, Pipette, Waves, Droplet } from "lucide-react";

const services = [
  { icon: Droplets, title: "Blocked Drains", keyword: "Blocked Drains Canberra", desc: "Blocked drains are one of the most common plumbing issues in Canberra homes. Our team uses the latest CCTV drain cameras and high-pressure jet blasters to clear blockages fast. Whether it's a slow-draining sink, a blocked toilet, or a main sewer line issue, we'll diagnose and fix it same-day.", features: ["CCTV drain inspections", "High-pressure jet blasting", "Tree root removal", "Drain relining"] },
  { icon: Wrench, title: "Emergency Plumbing", keyword: "Emergency Plumber Canberra", desc: "When a plumbing emergency strikes, you need a plumber you can count on — fast. Burst pipes, overflowing toilets, gas leaks, and major water leaks can cause serious damage if not addressed immediately. Our emergency plumbers are on call 24/7, 365 days a year.", features: ["Burst pipe repairs", "Overflow & flooding response", "Gas leak detection", "After-hours availability"] },
  { icon: Flame, title: "Hot Water Systems", keyword: "Hot Water Plumber Canberra", desc: "No hot water? We install, repair, and replace all types of hot water systems including gas, electric, solar, and heat pump units. We work with all major brands and can often restore your hot water the same day you call.", features: ["Gas & electric systems", "Solar hot water", "Heat pump installations", "Same-day replacements"] },
  { icon: Pipette, title: "Gas Fitting", keyword: "Gas Fitter Canberra", desc: "Our licensed gas fitters handle everything from gas appliance installations to gas leak detection and compliance certificates. We ensure all gas work meets Australian standards and ACT regulations.", features: ["Gas appliance installation", "Gas leak detection & repair", "Compliance certificates", "Gas line extensions"] },
  { icon: Search, title: "Leak Detection & Repairs", keyword: "Leak Detection Canberra", desc: "Hidden leaks waste water and money. Our advanced leak detection technology pinpoints leaks without unnecessary damage to your property. We repair leaking taps, toilets, pipes, and water mains quickly and affordably.", features: ["Non-invasive detection", "Tap & toilet repairs", "Pipe replacements", "Water main repairs"] },
  { icon: Waves, title: "Drainage Solutions", keyword: "Drainage Plumber Canberra", desc: "From stormwater drainage to sewer connections, our drainage experts design and install complete drainage solutions for residential and commercial properties across Canberra.", features: ["Stormwater systems", "Sewer connections", "Drainage design", "Excavation & trenching"] },
  { icon: Droplet, title: "Tanks, Pumps & Irrigation", keyword: "Water Tank Plumber Canberra", desc: "We install and maintain water tanks, pumps, and irrigation systems to help Canberra properties make the most of their water supply. From rainwater harvesting to garden irrigation, we've got you covered.", features: ["Water tank installation", "Pump repairs & replacement", "Irrigation systems", "Rainwater harvesting"] },
  { icon: ShowerHead, title: "Taps, Toilets & Fixtures", keyword: "Tap Repair Canberra", desc: "Dripping taps, running toilets, and outdated fixtures? We repair and replace all types of bathroom and kitchen plumbing fixtures. Upgrade your home with quality fittings installed by licensed plumbers.", features: ["Tap repairs & replacement", "Toilet installations", "Bathroom renovations", "Kitchen plumbing"] },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <StickyHeader />
      <section className="bg-hero-gradient py-16 md:py-20">
        <div className="container text-center">
          <h1 className="font-display font-extrabold text-4xl md:text-5xl text-primary-foreground mb-4">Our Plumbing Services</h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">Licensed Canberra plumbers offering same-day service for all residential and commercial plumbing needs.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container space-y-16">
          {services.map(({ icon: Icon, title, keyword, desc, features }, i) => (
            <div key={title} id={title.toLowerCase().replace(/[^a-z]+/g, "-")} className={`flex flex-col lg:flex-row gap-8 items-start ${i % 2 ? "lg:flex-row-reverse" : ""}`}>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="font-display font-bold text-2xl text-foreground">{title}</h2>
                    <span className="text-xs text-muted-foreground">{keyword}</span>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">{desc}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 bg-accent rounded-xl p-8 lg:p-12 flex items-center justify-center w-full">
                <Icon className="w-24 h-24 text-primary/20" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTABanner />
      <Footer />
    </div>
  );
};

export default ServicesPage;
