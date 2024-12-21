import { ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 
              onClick={() => navigate("/")} 
              className="text-2xl font-bold text-primary cursor-pointer"
            >
              FreshMart
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-600 hover:text-primary">Home</a>
            <a href="/products" className="text-gray-600 hover:text-primary">Products</a>
            <a href="/categories" className="text-gray-600 hover:text-primary">Categories</a>
            <a href="/about" className="text-gray-600 hover:text-primary">About</a>
            <Button 
              variant="ghost"
              onClick={() => navigate("/cart")}
              className="flex items-center"
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="ml-2">Cart</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              <a href="/" className="text-gray-600 hover:text-primary">Home</a>
              <a href="/products" className="text-gray-600 hover:text-primary">Products</a>
              <a href="/categories" className="text-gray-600 hover:text-primary">Categories</a>
              <a href="/about" className="text-gray-600 hover:text-primary">About</a>
              <Button 
                variant="ghost"
                onClick={() => navigate("/cart")}
                className="flex items-center justify-center"
              >
                <ShoppingCart className="h-5 w-5" />
                <span className="ml-2">Cart</span>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};