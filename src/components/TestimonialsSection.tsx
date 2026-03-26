import { Star } from "lucide-react";

const testimonials = [
  { name: "Sarah M.", suburb: "Belconnen", text: "Our hot water system died at 10pm on a Sunday. SameDay Plumbing had someone at our door within 45 minutes. Incredibly professional and fair pricing. Can't recommend them enough!", rating: 5 },
  { name: "James T.", suburb: "Gungahlin", text: "Called about a blocked drain on a Monday morning and they were out by lunchtime. Fixed it quickly and even gave us tips to prevent it happening again. Great service!", rating: 5 },
  { name: "Michelle K.", suburb: "Tuggeranong", text: "We've used SameDay Plumbing three times now — always prompt, always professional. The $0 call-out fee is genuine and their prices are very reasonable for Canberra.", rating: 5 },
  { name: "David R.", suburb: "Fyshwick", text: "Had a burst pipe flooding our shop floor. They arrived within 30 minutes and had everything sorted in under an hour. Absolute lifesavers for our business!", rating: 5 },
  { name: "Linda & Paul W.", suburb: "Woden", text: "From quoting to completion, the whole experience was seamless. They installed our new gas hot water system efficiently and cleaned up perfectly. True professionals.", rating: 5 },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-surface-gradient">
      <div className="container">
        <div className="text-center mb-14">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Reviews</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mt-2 mb-4">
            What Our Customers Say
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((t, i) => (
            <div key={i} className="bg-card rounded-xl p-6 shadow-sm border border-border/50">
              <div className="flex gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-foreground mb-4 leading-relaxed text-sm">"{t.text}"</p>
              <div className="text-sm">
                <span className="font-semibold text-foreground">{t.name}</span>
                <span className="text-muted-foreground"> — {t.suburb}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { testimonials };
export default TestimonialsSection;
