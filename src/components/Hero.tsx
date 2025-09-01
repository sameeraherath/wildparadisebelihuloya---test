import { Button } from "@/components/ui/button";
import { MapPin, Star, Users } from "lucide-react";
import heroImage from "@/assets/hero-camping.webp";

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-16 md:pt-20 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-forest-dark/40 via-transparent to-forest-dark/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Rating and Location Badge */}
          <div className="flex items-center justify-center gap-4 mb-6 text-sm">
            <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
              <Star className="w-4 h-4 fill-sunset-golden text-sunset-golden" />
              <span className="font-medium">5/5 Rating</span>
            </div>
            <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
              <MapPin className="w-4 h-4" />
              <span>Belihuloya, Sri Lanka</span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight font-playfair">
            <span className="block">Wild Paradise</span>
            <span className="block bg-gradient-sunset bg-clip-text text-transparent">
              Belihuloya
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Escape to Wild Paradise, a special camping spot in Belihuloya, near
            Samanalawewa. Enjoy nature and adventure in the Sabaragamuwa
            province.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              variant="hero"
              size="lg"
              className="text-lg px-8 py-6"
              onClick={() => {
                const el = document.getElementById("booking");
                if (el) {
                  el.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Book Your Adventure
            </Button>
            <Button
              variant="outline-hero"
              size="lg"
              className="text-lg px-8 py-6"
              onClick={() => {
                window.location.href = "tel:0762756333";
              }}
            >
              Contact Us
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-white/80 pb-24 sm:pb-0">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span>Perfect for Groups</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-white/30" />
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>3.5 hours from Colombo</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/60">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
