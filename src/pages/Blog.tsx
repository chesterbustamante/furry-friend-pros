import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";
import dogTraining from "@/assets/dog-training.jpg";
import catGrooming from "@/assets/cat-grooming.jpg";
import petProducts from "@/assets/pet-products.jpg";

const Blog = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get("category") || "all";
  const [selectedCategory, setSelectedCategory] = useState(categoryParam);

  const articles = [
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
    {
      id: "puppy-nutrition-guide",
      title: "The Ultimate Puppy Nutrition Guide: What to Feed Your New Friend",
      excerpt: "Everything you need to know about feeding your puppy for optimal health and growth.",
      category: "Nutrition",
      date: "May 8, 2025",
      readTime: "12 min read",
      image: dogTraining,
    },
    {
      id: "cat-behavior-explained",
      title: "Understanding Cat Behavior: 15 Common Actions Decoded",
      excerpt: "Learn what your cat is really trying to tell you through their behaviors and body language.",
      category: "Cat Care",
      date: "May 5, 2025",
      readTime: "9 min read",
      image: catGrooming,
    },
    {
      id: "best-dog-harnesses",
      title: "Best Dog Harnesses of 2025: Tested and Reviewed",
      excerpt: "We tested 20+ harnesses to find the most comfortable and secure options for your dog.",
      category: "Product Reviews",
      date: "May 3, 2025",
      readTime: "11 min read",
      image: petProducts,
    },
  ];

  const categories = [
    { value: "all", label: "All Articles" },
    { value: "dog-training", label: "Dog Training" },
    { value: "cat-care", label: "Cat Care" },
    { value: "nutrition", label: "Nutrition" },
    { value: "product-reviews", label: "Product Reviews" },
  ];

  const filteredArticles = selectedCategory === "all" 
    ? articles 
    : articles.filter(article => 
        article.category.toLowerCase().replace(" ", "-") === selectedCategory
      );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
            <BookOpen className="h-8 w-8 text-primary" />
          </div>
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">Pet Care Blog</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Expert advice, training tips, and product reviews to help you become the best pet parent possible.
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category) => (
            <Button
              key={category.value}
              variant={selectedCategory === category.value ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.value)}
              className="rounded-full"
            >
              {category.label}
            </Button>
          ))}
        </div>
      </section>

      {/* Articles Grid */}
      <section className="container mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <BlogCard key={article.id} {...article} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
