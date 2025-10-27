import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShoppingBag } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface Product {
  id: string;
  title: string;
  price: string;
  rating: number;
  reviews: number;
  image_url: string;
  category: string;
  affiliate: boolean;
}

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setProducts(data || []);
    } catch (error: any) {
      toast({
        title: "Error loading products",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

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
            {loading ? (
              <div className="text-center py-20">
                <p className="text-muted-foreground">Loading products...</p>
              </div>
            ) : products.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-muted-foreground">No products available yet. Check back soon!</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product) => (
                  <ProductCard 
                    key={product.id} 
                    title={product.title}
                    price={product.price}
                    rating={product.rating}
                    reviews={product.reviews}
                    image={product.image_url}
                    category={product.category}
                    affiliate={product.affiliate}
                  />
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="smart">
            {loading ? (
              <div className="text-center py-20">
                <p className="text-muted-foreground">Loading products...</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.filter(p => p.category.toLowerCase().includes("smart") || p.category.toLowerCase().includes("tech")).map((product) => (
                  <ProductCard 
                    key={product.id} 
                    title={product.title}
                    price={product.price}
                    rating={product.rating}
                    reviews={product.reviews}
                    image={product.image_url}
                    category={product.category}
                    affiliate={product.affiliate}
                  />
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="toys">
            {loading ? (
              <div className="text-center py-20">
                <p className="text-muted-foreground">Loading products...</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.filter(p => p.category.toLowerCase().includes("toy")).map((product) => (
                  <ProductCard 
                    key={product.id} 
                    title={product.title}
                    price={product.price}
                    rating={product.rating}
                    reviews={product.reviews}
                    image={product.image_url}
                    category={product.category}
                    affiliate={product.affiliate}
                  />
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="grooming">
            {loading ? (
              <div className="text-center py-20">
                <p className="text-muted-foreground">Loading products...</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.filter(p => p.category.toLowerCase().includes("groom")).map((product) => (
                  <ProductCard 
                    key={product.id} 
                    title={product.title}
                    price={product.price}
                    rating={product.rating}
                    reviews={product.reviews}
                    image={product.image_url}
                    category={product.category}
                    affiliate={product.affiliate}
                  />
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="food">
            {loading ? (
              <div className="text-center py-20">
                <p className="text-muted-foreground">Loading products...</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.filter(p => p.category.toLowerCase().includes("food") || p.category.toLowerCase().includes("treat")).map((product) => (
                  <ProductCard 
                    key={product.id} 
                    title={product.title}
                    price={product.price}
                    rating={product.rating}
                    reviews={product.reviews}
                    image={product.image_url}
                    category={product.category}
                    affiliate={product.affiliate}
                  />
                ))}
              </div>
            )}
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
