import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Thanks! We'll get back to you shortly.");
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input placeholder="Your Name" required maxLength={100} className="bg-card" />
        <Input type="tel" placeholder="Phone Number" required maxLength={20} className="bg-card" />
      </div>
      <Input type="email" placeholder="Email Address" required maxLength={255} className="bg-card" />
      <Input placeholder="Suburb (e.g., Belconnen)" maxLength={100} className="bg-card" />
      <Textarea placeholder="Describe your plumbing issue..." required maxLength={1000} rows={4} className="bg-card" />
      <Button type="submit" variant="cta" size="lg" className="w-full" disabled={loading}>
        {loading ? "Sending..." : "Get a Free Quote"}
      </Button>
    </form>
  );
};

export default ContactForm;
