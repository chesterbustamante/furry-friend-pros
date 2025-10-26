import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SocialShare from "@/components/SocialShare";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Calendar, Clock, User, ExternalLink } from "lucide-react";
import dogTraining from "@/assets/dog-training.jpg";
import DOMPurify from "dompurify";

const BlogPost = () => {
  const { id } = useParams();

  // This would normally fetch from a CMS or database
  const post = {
    title: "10 Essential Dog Training Commands Every Owner Should Know",
    category: "Dog Training",
    date: "May 15, 2025",
    readTime: "8 min read",
    author: "Sarah Johnson",
    image: dogTraining,
    content: `
      <p>Training your dog is one of the most important responsibilities of pet ownership. Not only does it create a well-behaved companion, but it also strengthens the bond between you and your furry friend.</p>

      <h2>Why Training Matters</h2>
      <p>Proper training ensures your dog's safety, makes daily life easier, and helps prevent behavioral problems. These 10 essential commands form the foundation of good dog training.</p>

      <h2>1. Sit</h2>
      <p>The "sit" command is often the first command taught and is fundamental for controlling your dog in various situations. It's also the foundation for many other commands.</p>

      <h2>2. Stay</h2>
      <p>Teaching your dog to stay prevents them from running into dangerous situations and helps maintain control in busy environments.</p>

      <h2>3. Come</h2>
      <p>A reliable recall command can literally save your dog's life. This command ensures your dog returns to you when called, even with distractions present.</p>

      <h2>Recommended Training Tools</h2>
      <p>To help you succeed with training, we recommend these top-rated products:</p>
    `,
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <Badge className="mb-4 bg-secondary text-secondary-foreground">{post.category}</Badge>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
          
          <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{post.readTime}</span>
            </div>
          </div>

          <SocialShare 
            url={window.location.href} 
            title={post.title}
          />
        </div>

        {/* Featured Image */}
        <div className="aspect-video overflow-hidden rounded-3xl mb-12">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        </div>

        {/* Content */}
        <div 
          className="prose prose-lg max-w-none mb-12"
          dangerouslySetInnerHTML={{ 
            __html: DOMPurify.sanitize(post.content, {
              ALLOWED_TAGS: ['p', 'h2', 'h3', 'h4', 'h5', 'h6', 'strong', 'em', 'ul', 'ol', 'li', 'a', 'br'],
              ALLOWED_ATTR: ['href', 'target', 'rel']
            })
          }}
        />

        {/* Affiliate Products Section */}
        <Card className="p-6 bg-accent/10 border-accent mb-12">
          <h3 className="font-heading text-2xl font-bold mb-4">Recommended Training Products</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 bg-card rounded-lg">
              <div className="flex-1">
                <h4 className="font-semibold mb-1">Premium Dog Training Clicker Set</h4>
                <p className="text-sm text-muted-foreground mb-2">Professional clicker training kit with wrist strap</p>
                <p className="font-bold text-primary">$14.99</p>
              </div>
              <Button className="bg-primary text-primary-foreground">
                View Deal <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="flex items-start gap-4 p-4 bg-card rounded-lg">
              <div className="flex-1">
                <h4 className="font-semibold mb-1">Training Treat Pouch with Belt Clip</h4>
                <p className="text-sm text-muted-foreground mb-2">Hands-free treat storage for training sessions</p>
                <p className="font-bold text-primary">$19.99</p>
              </div>
              <Button className="bg-primary text-primary-foreground">
                View Deal <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4">
            As an Amazon Associate, we earn from qualifying purchases at no extra cost to you.
          </p>
        </Card>

        <Separator className="my-12" />

        {/* Comment Section Placeholder */}
        <div className="mb-12">
          <h3 className="font-heading text-2xl font-bold mb-6">Comments</h3>
          <Card className="p-8 text-center">
            <p className="text-muted-foreground">
              Comment system coming soon! Share your thoughts on social media using the share buttons above.
            </p>
          </Card>
        </div>

        <Separator className="my-12" />

        {/* Author Bio */}
        <Card className="p-6">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <User className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-lg mb-2">{post.author}</h4>
              <p className="text-muted-foreground">
                Certified dog trainer and pet care specialist with over 10 years of experience. 
                Passionate about helping pet parents build strong, positive relationships with their furry companions.
              </p>
            </div>
          </div>
        </Card>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;
