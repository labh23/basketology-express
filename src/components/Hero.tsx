import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative bg-primary py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-white mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Fresh Groceries Delivered to Your Doorstep
            </h1>
            <p className="text-lg mb-6">
              Shop from our wide selection of fresh fruits, vegetables, and daily essentials.
              Get them delivered right to your home!
            </p>
            <Button
              onClick={() => navigate("/products")}
              size="lg"
              className="bg-white text-primary hover:bg-gray-100"
            >
              Shop Now
            </Button>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1542838132-92c53300491e"
              alt="Fresh vegetables"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};