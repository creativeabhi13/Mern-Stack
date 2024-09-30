import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

function ShoppingFooter() {
  return (
    <footer className="border-t bg-background py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-4">
          {/* Company Information */}
          <div>
            <h4 className="text-lg font-semibold">LaptopWala</h4>
            <p className="mt-2 text-sm text-muted-foreground">
              Your one-stop shop for all things laptops. Get the best deals on
              the latest models, with support you can trust.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <Link to="/shop/home" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop/listing" className="hover:underline">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/shop/contact-us" className="hover:underline">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/shop/account" className="hover:underline">
                  Account
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <ul className="mt-2 space-y-2 text-sm">
              <li className="flex items-center">
                <MapPin className="mr-2 h-4 w-4" />
               #13,Janakpuri West, New Delhi, India - 110058
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-4 w-4" />
                +1 (800) 123-4567
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-4 w-4" />
                support@laptopwala.com
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h4 className="text-lg font-semibold">Follow Us</h4>
            <div className="mt-2 flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-6 w-6 hover:text-primary" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-6 w-6 hover:text-primary" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-6 w-6 hover:text-primary" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-6 w-6 hover:text-primary" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 border-t pt-4 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} LaptopWala. All rights reserved.</p>
          <p className="mt-2">
            <Link to="/shop/terms" className="hover:underline">
              Terms of Service
            </Link>{" "}
            |{" "}
            <Link to="/shop/privacy" className="hover:underline">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default ShoppingFooter;
