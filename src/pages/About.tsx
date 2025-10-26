import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Heart, Award, Users, Target } from "lucide-react";
import heroImage from "@/assets/hero-pets.jpg";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Pet-First Philosophy",
      description: "Every recommendation we make is guided by what's truly best for your pet's health and happiness.",
    },
    {
      icon: Award,
      title: "Expert Reviews",
      description: "Our team of certified trainers and veterinary professionals rigorously test and review every product.",
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "We listen to our 100k+ pet parent community to understand real needs and challenges.",
    },
    {
      icon: Target,
      title: "Honest & Transparent",
      description: "We clearly disclose affiliate relationships and only recommend products we truly believe in.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">About PawfectCompanion</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your trusted partner in providing expert pet care advice and honest product recommendations since 2020.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-heading text-4xl font-bold">Our Mission</h2>
            <p className="text-lg text-muted-foreground">
              At PawfectCompanion, we believe every pet deserves the best care possible. Our mission is to 
              empower pet parents with expert knowledge, practical training tips, and honest product reviews 
              that make pet care easier and more rewarding.
            </p>
            <p className="text-lg text-muted-foreground">
              We're not just another pet blog – we're a community of passionate pet lovers, certified trainers, 
              and veterinary professionals dedicated to improving the lives of pets and their families.
            </p>
          </div>
          <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
            <img src={heroImage} alt="Happy pets" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold mb-4">What We Stand For</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These core values guide everything we do at PawfectCompanion
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-xl mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl font-bold mb-4">Meet Our Expert Team</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our diverse team of pet care professionals brings together decades of experience
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {["Sarah Johnson - Lead Trainer", "Dr. Mike Chen - Veterinary Advisor", "Emma Williams - Product Reviewer"].map((member, index) => (
            <Card key={index} className="p-6 text-center">
              <div className="w-24 h-24 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-12 w-12 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-lg mb-2">{member}</h3>
              <p className="text-sm text-muted-foreground">
                Passionate pet care specialist with years of experience helping pet parents.
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* Affiliate Disclosure */}
      <section className="bg-accent/10 py-16">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="font-heading text-2xl font-bold mb-4">Transparency & Disclosure</h2>
          <p className="text-muted-foreground">
            PawfectCompanion participates in affiliate programs, which means we may earn commissions 
            from qualifying purchases through our product links. This comes at no extra cost to you and 
            helps us continue providing free, high-quality content. We only recommend products we've 
            personally tested and truly believe will benefit you and your pets.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
