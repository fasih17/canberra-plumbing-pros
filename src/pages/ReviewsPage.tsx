import StickyHeader from "@/components/StickyHeader";
import Footer from "@/components/Footer";
import { Star } from "lucide-react";
import { testimonials } from "@/components/TestimonialsSection";
import CTABanner from "@/components/CTABanner";

const ReviewsPage = () => {
  return (
    <div className="min-h-screen">
      <StickyHeader />
      <section className="bg-hero-gradient py-16 md:py-20">
        <div className="container text-center">
          <h1 className="font-display font-extrabold text-4xl md:text-5xl text-primary-foreground mb-4">Customer Reviews</h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">See what Canberra homeowners and businesses say about our plumbing services.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-4xl space-y-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-card rounded-xl p-8 shadow-sm border border-border/50">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-foreground text-lg leading-relaxed mb-4">"{t.text}"</p>
              <div>
                <span className="font-display font-semibold text-foreground">{t.name}</span>
                <span className="text-muted-foreground"> — {t.suburb}, Canberra</span>
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

export default ReviewsPage;
