import { useState } from "react";
import { Button } from "./ui/button";
import { ShoppingCart, Star } from "lucide-react";
import { useToast } from "./ui/use-toast";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  rating: number;
  description: string;
}

export const ProductCard = ({ id, name, price, image, rating, description }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { toast } = useToast();

  const handleAddToCart = () => {
    // TODO: Implement cart functionality
    toast({
      title: "Added to cart",
      description: `${name} has been added to your cart.`,
    });
  };

  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover transition-transform duration-300"
          style={{
            transform: isHovered ? "scale(1.05)" : "scale(1)",
          }}
        />
        <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-full shadow-sm">
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm font-medium">{rating}</span>
          </div>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold">₹{price}</span>
          <Button
            onClick={handleAddToCart}
            className="flex items-center space-x-2"
          >
            <ShoppingCart className="h-4 w-4" />
            <span>Add to Cart</span>
          </Button>
        </div>
      </div>
    </div>
  );
};