import { useState } from "react";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { z } from "zod";

const newsletterSchema = z.object({
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
});

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      newsletterSchema.parse({ email });
      toast({
        title: "Welcome to PawMail! 🐾",
        description: "You'll receive top pet deals and expert tips monthly.",
      });
      setEmail("");
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Invalid Email",
          description: error.errors[0].message,
          variant: "destructive",
        });
      }
    }
  };

  return (
    <section className="bg-gradient-to-r from-primary to-accent py-16 rounded-3xl">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
            <Mail className="h-8 w-8 text-white" />
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Join PawMail Newsletter
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Get exclusive pet care tips, top product deals, and expert advice delivered to your inbox every month.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white border-0 text-foreground"
              required
            />
            <Button type="submit" variant="secondary" size="lg" className="font-semibold">
              Subscribe
            </Button>
          </form>
          <p className="text-white/70 text-sm mt-4">
            No spam, unsubscribe anytime. We respect your privacy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
