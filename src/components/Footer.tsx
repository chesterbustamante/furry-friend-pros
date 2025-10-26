import { Link } from "react-router-dom";
import { PawPrint, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 font-heading font-bold text-lg text-primary mb-4">
              <PawPrint className="h-5 w-5" />
              <span>PawfectCompanion</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Your trusted source for expert pet care tips, training advice, and honest product reviews.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/shop" className="text-muted-foreground hover:text-primary transition-colors">Pet Gear Shop</Link></li>
              <li><Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/blog?category=dog-training" className="text-muted-foreground hover:text-primary transition-colors">Dog Training</Link></li>
              <li><Link to="/blog?category=cat-care" className="text-muted-foreground hover:text-primary transition-colors">Cat Care</Link></li>
              <li><Link to="/blog?category=nutrition" className="text-muted-foreground hover:text-primary transition-colors">Nutrition</Link></li>
              <li><Link to="/blog?category=product-reviews" className="text-muted-foreground hover:text-primary transition-colors">Product Reviews</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-4">Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Get top pet deals and expert tips delivered monthly!
            </p>
            <Link to="/" className="text-sm text-primary hover:underline font-medium">
              Subscribe to PawMail →
            </Link>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} PawfectCompanion. All rights reserved. | <Link to="/contact" className="hover:text-primary transition-colors">Partner With Us</Link></p>
          <p className="mt-2 text-xs">Affiliate Disclosure: We may earn commissions from qualifying purchases through our product links.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
