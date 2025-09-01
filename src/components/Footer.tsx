import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  TreePine,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Heart,
  Leaf,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-forest-dark text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <TreePine className="w-8 h-8 text-sunset-golden" />
              <h3 className="text-2xl font-bold font-playfair">
                Wild Paradise Belihuloya
              </h3>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed max-w-md">
              Experience the perfect blend of luxury and nature in Sri Lanka's
              pristine forest. Where adventure meets tranquility, and memories
              are made to last a lifetime.
            </p>
            {/* Badges removed as requested */}
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-white/80">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-sunset-golden flex-shrink-0" />
                <span className="text-sm">
                  Kinchigune, Samanalawawe,
                  <br />
                  Belihuloya
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-sunset-golden" />
                <span className="text-sm">076 275 6333</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-3 text-white/80">
              <a
                href="#about"
                className="block text-sm hover:text-sunset-golden transition-colors"
              >
                About Us
              </a>
              <a
                href="#features"
                className="block text-sm hover:text-sunset-golden transition-colors"
              >
                Amenities
              </a>
              <a
                href="#activities"
                className="block text-sm hover:text-sunset-golden transition-colors"
              >
                Activities
              </a>
              <a
                href="#booking"
                className="block text-sm hover:text-sunset-golden transition-colors"
              >
                Book Now
              </a>
              <a
                href="#gallery"
                className="block text-sm hover:text-sunset-golden transition-colors"
              >
                Gallery
              </a>
              {/* Reviews link removed as requested */}
            </div>
          </div>
        </div>

        <Separator className="bg-white/20 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4 text-white/60 text-sm">
            <span>
              © {currentYear} Wild Paradise Belihuloya. All rights reserved.
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-white/60 text-sm">Follow us:</span>
            <div className="flex gap-2">
              <a
                href="#"
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-sunset-golden/20 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-sunset-golden/20 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-8 pt-8 border-t border-white/10">
          <p className="text-white/60 text-sm flex items-center justify-center gap-1">
            Proudly presented by{" "}
            <a
              href="https://auxilialabs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-sunset-golden"
            >
              AuxiliaLabs.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
