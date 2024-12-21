import { Facebook, Instagram, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-white shadow-md mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About FreshMart</h3>
            <p className="text-gray-600">
              Your one-stop shop for fresh groceries and daily essentials.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-600 hover:text-primary">About Us</a></li>
              <li><a href="/contact" className="text-gray-600 hover:text-primary">Contact</a></li>
              <li><a href="/faq" className="text-gray-600 hover:text-primary">FAQ</a></li>
              <li><a href="/privacy" className="text-gray-600 hover:text-primary">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Email: support@freshmart.com</li>
              <li>Phone: +91 1234567890</li>
              <li>Address: 123 Grocery Street, Mumbai</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center text-gray-600">
          <p>&copy; 2024 FreshMart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};