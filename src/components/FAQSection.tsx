import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "How quickly can you get to me?", a: "We offer same-day service across Canberra. For emergencies, we typically arrive within 30–60 minutes depending on your location and current demand." },
  { q: "Is there really a $0 call-out fee?", a: "Yes! We never charge a call-out fee. You only pay for the work we perform. We'll always provide a clear quote before starting any job." },
  { q: "Do you work on weekends and public holidays?", a: "Absolutely. We operate 24 hours a day, 7 days a week, including public holidays. Emergency plumbing doesn't take days off, and neither do we." },
  { q: "What areas do you service?", a: "We cover all of Canberra and surrounding areas including Belconnen, Gungahlin, Tuggeranong, Woden, Fyshwick, and Queanbeyan." },
  { q: "Are your plumbers licensed?", a: "All our plumbers are fully licensed in the ACT, with years of experience in residential and commercial plumbing. We carry comprehensive insurance for your peace of mind." },
  { q: "How much does a plumber cost in Canberra?", a: "Costs vary depending on the job. We offer competitive, transparent pricing with no hidden fees. Contact us for a free, no-obligation quote." },
];

const FAQSection = () => {
  return (
    <section className="py-20">
      <div className="container max-w-3xl">
        <div className="text-center mb-14">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">FAQ</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mt-2 mb-4">
            Frequently Asked Questions
          </h2>
        </div>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-xl border border-border/50 px-6 shadow-sm">
              <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:no-underline py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
