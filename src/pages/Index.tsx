import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import BlogCard from "@/components/BlogCard";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, BookOpen, Star } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-pets.jpg";
import dogTraining from "@/assets/dog-training.jpg";
import catGrooming from "@/assets/cat-grooming.jpg";
import petProducts from "@/assets/pet-products.jpg";

const Index = () => {
  const featuredArticles = [
    {
      id: "dog-training-basics",
      title: "10 Essential Dog Training Commands Every Owner Should Know",
      excerpt: "Master these fundamental commands to build a strong foundation for your dog's training journey.",
      category: "Dog Training",
      date: "May 15, 2025",
      readTime: "8 min read",
      image: dogTraining,
    },
    {
      id: "cat-grooming-guide",
      title: "The Complete Guide to Cat Grooming at Home",
      excerpt: "Learn professional grooming techniques to keep your feline friend looking and feeling their best.",
      category: "Cat Care",
      date: "May 12, 2025",
      readTime: "6 min read",
      image: catGrooming,
    },
    {
      id: "best-pet-toys-2025",
      title: "Top 15 Interactive Pet Toys That Keep Pets Engaged",
      excerpt: "Our tested and reviewed selection of the best toys for mental stimulation and physical activity.",
      category: "Product Reviews",
      date: "May 10, 2025",
      readTime: "10 min read",
      image: petProducts,
    },
  ];

  const trendingProducts = [
    {
      title: "Premium Automatic Pet Feeder with Camera",
      price: "$89.99",
      rating: 5,
      reviews: 1247,
      image: petProducts,
      category: "Smart Tech",
    },
    {
      title: "Orthopedic Pet Bed with Memory Foam",
      price: "$64.99",
      rating: 5,
      reviews: 892,
      image: petProducts,
      category: "Comfort",
    },
    {
      title: "Interactive Puzzle Treat Dispenser",
      price: "$24.99",
      rating: 4,
      reviews: 2145,
      image: petProducts,
      category: "Toys",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10" />
        <div className="container mx-auto px-4 py-20 md:py-32 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Star className="h-4 w-4 fill-current" />
                <span>Trusted by 100k+ Pet Parents</span>
              </div>
              <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Your Pet's
                <span className="text-primary"> Pawfect </span>
                Life Starts Here
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Expert training tips, grooming advice, health guides, and honest product reviews 
                to help you give your furry friend the best life possible.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/blog">
                  <Button size="lg" className="bg-primary text-primary-foreground hover:opacity-90 w-full sm:w-auto">
                    Explore Articles <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/shop">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Shop Pet Gear
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img src={heroImage} alt="Happy pets" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="flex items-center justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 text-primary mb-2">
              <BookOpen className="h-5 w-5" />
              <span className="font-medium">Featured Content</span>
            </div>
            <h2 className="font-heading text-4xl font-bold">Latest Pet Care Guides</h2>
          </div>
          <Link to="/blog">
            <Button variant="outline">
              View All Articles <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredArticles.map((article) => (
            <BlogCard key={article.id} {...article} />
          ))}
        </div>
      </section>

      {/* Trending Products Section */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <div className="flex items-center gap-2 text-primary mb-2">
                <TrendingUp className="h-5 w-5" />
                <span className="font-medium">Top Picks This Month</span>
              </div>
              <h2 className="font-heading text-4xl font-bold">Trending Pet Products</h2>
            </div>
            <Link to="/shop">
              <Button variant="outline">
                Shop All <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trendingProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="container mx-auto px-4 py-20">
        <Newsletter />
      </section>

      <Footer />
    </div>
  );
};

export default Index;
