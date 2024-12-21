import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ShoppingBag } from "lucide-react";

const Cart = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
      
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex flex-col items-center justify-center py-12">
          <ShoppingBag className="w-16 h-16 text-gray-400 mb-4" />
          <p className="text-gray-600 mb-4">Your cart is empty</p>
          <Button onClick={() => navigate("/")} className="flex items-center gap-2">
            Continue Shopping
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;