import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShoppingBag } from "lucide-react";
import petProducts from "@/assets/pet-products.jpg";

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const products = [
    { title: "Premium Automatic Pet Feeder with Camera", price: "$89.99", rating: 5, reviews: 1247, image: petProducts, category: "Smart Tech" },
    { title: "Orthopedic Pet Bed with Memory Foam", price: "$64.99", rating: 5, reviews: 892, image: petProducts, category: "Comfort" },
    { title: "Interactive Puzzle Treat Dispenser", price: "$24.99", rating: 4, reviews: 2145, image: petProducts, category: "Toys" },
    { title: "Professional Pet Grooming Kit", price: "$39.99", rating: 5, reviews: 1563, image: petProducts, category: "Grooming" },
    { title: "GPS Pet Tracker Collar", price: "$49.99", rating: 4, reviews: 987, image: petProducts, category: "Smart Tech" },
    { title: "Premium Dog Training Clicker Set", price: "$14.99", rating: 5, reviews: 3421, image: petProducts, category: "Training" },
    { title: "Elevated Ceramic Pet Bowl Set", price: "$34.99", rating: 4, reviews: 756, image: petProducts, category: "Feeding" },
    { title: "Natural Organic Pet Treats Bundle", price: "$29.99", rating: 5, reviews: 2890, image: petProducts, category: "Food" },
    { title: "Portable Pet Water Bottle", price: "$19.99", rating: 4, reviews: 1432, image: petProducts, category: "Travel" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary/20 to-accent/20 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
            <ShoppingBag className="h-8 w-8 text-primary" />
          </div>
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">Pet Gear Shop</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Discover our curated selection of top-rated pet products. Every item is tested, reviewed, 
            and recommended by our expert team.
          </p>
          <div className="inline-flex items-center gap-2 bg-accent/20 text-accent-foreground px-6 py-3 rounded-full">
            <span className="font-medium">💰 Affiliate Disclosure:</span>
            <span>We earn from qualifying purchases at no extra cost to you</span>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="container mx-auto px-4 py-20">
        <Tabs defaultValue="all" className="w-full" onValueChange={setActiveCategory}>
          <div className="flex justify-center mb-12">
            <TabsList className="bg-muted p-1 rounded-full">
              <TabsTrigger value="all" className="rounded-full">All Products</TabsTrigger>
              <TabsTrigger value="smart" className="rounded-full">Smart Tech</TabsTrigger>
              <TabsTrigger value="toys" className="rounded-full">Toys</TabsTrigger>
              <TabsTrigger value="grooming" className="rounded-full">Grooming</TabsTrigger>
              <TabsTrigger value="food" className="rounded-full">Food & Treats</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="smart">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.filter(p => p.category === "Smart Tech").map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="toys">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.filter(p => p.category === "Toys").map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="grooming">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.filter(p => p.category === "Grooming").map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="food">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.filter(p => p.category === "Food").map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* CTA Banner */}
        <div className="mt-20 bg-gradient-to-r from-primary to-accent rounded-3xl p-12 text-center text-white">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Get Top Pet Deals in Your Inbox
          </h2>
          <p className="text-lg mb-6 text-white/90">
            Join PawMail for exclusive discounts and early access to new product reviews
          </p>
          <Button size="lg" variant="secondary">
            Subscribe to PawMail
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Shop;
