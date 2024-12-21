import { ProductCard } from "./ProductCard";

const SAMPLE_PRODUCTS = [
  {
    id: "1",
    name: "Fresh Organic Tomatoes",
    price: 40,
    image: "https://images.unsplash.com/photo-1546027658-7aa750153465",
    rating: 4.5,
    description: "Locally sourced organic tomatoes, perfect for salads and cooking.",
  },
  {
    id: "2",
    name: "Premium Basmati Rice",
    price: 150,
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c",
    rating: 4.8,
    description: "Long-grain aromatic basmati rice, aged for perfect texture.",
  },
  {
    id: "3",
    name: "Farm Fresh Eggs",
    price: 80,
    image: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f",
    rating: 4.3,
    description: "Free-range eggs from healthy, happy chickens.",
  },
  {
    id: "4",
    name: "Organic Bananas",
    price: 60,
    image: "https://images.unsplash.com/photo-1603833665858-e61d17a86224",
    rating: 4.6,
    description: "Sweet and nutritious organic bananas, perfect for snacking.",
  },
  {
    id: "5",
    name: "Fresh Milk",
    price: 65,
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150",
    rating: 4.7,
    description: "Farm-fresh milk, pasteurized and packed with nutrients.",
  },
  {
    id: "6",
    name: "Whole Wheat Bread",
    price: 45,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff",
    rating: 4.4,
    description: "Freshly baked whole wheat bread, perfect for sandwiches.",
  },
];

export const ProductGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {SAMPLE_PRODUCTS.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};