import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { ProductGrid } from "@/components/ProductGrid";
import { CustomerReviews } from "@/components/CustomerReviews";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <main className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
        <ProductGrid />
      </main>
      <CustomerReviews />
      <Footer />
    </div>
  );
};

export default Index;