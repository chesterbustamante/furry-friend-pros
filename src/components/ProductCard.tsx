import { ExternalLink, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  title: string;
  price: string;
  rating: number;
  reviews: number;
  image: string;
  category: string;
  affiliate?: boolean;
}

const ProductCard = ({ title, price, rating, reviews, image, category, affiliate = true }: ProductCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img src={image} alt={title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
        {affiliate && (
          <Badge className="absolute top-3 right-3 bg-accent text-accent-foreground">
            Affiliate
          </Badge>
        )}
        <Badge className="absolute top-3 left-3 bg-secondary text-secondary-foreground">
          {category}
        </Badge>
      </div>
      <CardContent className="p-4">
        <h3 className="font-heading font-semibold text-lg mb-2 line-clamp-2">{title}</h3>
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`h-4 w-4 ${i < rating ? "fill-primary text-primary" : "text-muted"}`} />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">({reviews})</span>
        </div>
        <p className="font-heading font-bold text-2xl text-primary">{price}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full bg-primary text-primary-foreground hover:opacity-90">
          View on Amazon <ExternalLink className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
