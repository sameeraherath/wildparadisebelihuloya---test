import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  Users,
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle,
  Star,
} from "lucide-react";
import { allPackages, calculatePrice } from "@/data/packages";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Booking = () => {
  const [days, setDays] = useState("");
  const [members, setMembers] = useState("");
  const [isLocal, setIsLocal] = useState(true);
  interface DisplayPackage {
    name: string;
    duration: string;
    price: string;
    priceNote: string;
    features: string[];
    recommended?: boolean;
    reason?: string;
  }

  const [filteredPackages, setFilteredPackages] = useState<DisplayPackage[]>(
    []
  );
  const [showPackages, setShowPackages] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const findPackages = () => {
    const numDays = parseInt(days, 10);
    const numMembers = parseInt(members, 10);

    if (
      isNaN(numDays) ||
      isNaN(numMembers) ||
      numDays <= 0 ||
      numMembers <= 0
    ) {
      setError("Please enter a valid number of days and members.");
      setShowPackages(false);
      setFilteredPackages([]);
      return;
    }
    setError("");
    setIsLoading(true);
    setShowPackages(false);

    setTimeout(() => {
      const pricing = calculatePrice(numMembers, isLocal);
      const pkg = allPackages[0];

      const displayPackage: DisplayPackage = {
        name: pkg.name,
        duration: `${numDays} ${numDays === 1 ? "Night" : "Nights"}`,
        price:
          pricing.currency === "LKR"
            ? `Rs. ${pricing.price.toLocaleString()}`
            : `$${pricing.price}`,
        priceNote: pricing.note,
        features: pkg.features,
        recommended: true,
        reason:
          numDays === 1
            ? "Perfect for experiencing our full board package with all activities included."
            : `Ideal ${numDays}-day adventure with ${numMembers} ${
                numMembers === 1 ? "person" : "people"
              }.`,
      };

      setFilteredPackages([displayPackage]);
      setIsLoading(false);
      setShowPackages(true);
    }, 1500);
  };

  return (
    <section
      id="booking"
      className="py-20 bg-gradient-to-b from-muted/30 to-background"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-sm font-medium">
            Reserve Your Spot
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground font-playfair">
            Choose Your
            <span className="block text-river-medium">Adventure Package</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            All packages include accommodation, meals, and access to our
            stunning location. Choose the experience that best fits your
            adventure style.
          </p>
        </div>

        <Card className="max-w-2xl mx-auto mb-16 shadow-lg border-0 bg-muted/50">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-center mb-6 text-foreground font-playfair">
              Find Your Perfect Package
            </h3>
            <div className="space-y-6 mb-6">
              <div className="flex justify-center mb-4">
                <div className="flex bg-muted rounded-lg p-1">
                  <button
                    type="button"
                    onClick={() => setIsLocal(true)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      isLocal
                        ? "bg-background text-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Local Rates (LKR)
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsLocal(false)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      !isLocal
                        ? "bg-background text-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Foreign Rates (USD)
                  </button>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="days">How many nights?</Label>
                  <Input
                    id="days"
                    type="number"
                    value={days}
                    onChange={(e) => setDays(e.target.value)}
                    placeholder="e.g., 1"
                    min="1"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="members">How many people?</Label>
                  <Input
                    id="members"
                    type="number"
                    value={members}
                    onChange={(e) => setMembers(e.target.value)}
                    placeholder="e.g., 2"
                    min="1"
                  />
                </div>
              </div>
            </div>
            {error && (
              <p className="text-red-500 text-sm text-center mb-4">{error}</p>
            )}
            <Button onClick={findPackages} className="w-full" variant="hero">
              <span className="text-base px-6 py-3">Find Packages</span>
            </Button>
          </CardContent>
        </Card>

        {isLoading && (
          <div className="w-full flex flex-col items-center justify-center text-center mb-16 animate-fade-in">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-forest-medium"></div>
            <p className="text-lg text-muted-foreground mt-4">
              Finding the best adventures for you...
            </p>
          </div>
        )}

        {/* Package Cards */}
        {showPackages && !isLoading && filteredPackages.length > 0 && (
          <div className="flex justify-center">
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {filteredPackages.map((pkg, index) => (
                <Card
                  key={pkg.name}
                  className={`relative border-0 transition-all duration-300 hover:scale-105 animate-fade-in-up ${
                    pkg.recommended
                      ? "shadow-forest ring-2 ring-forest-medium/20"
                      : "shadow-sm hover:shadow-river"
                  }`}
                  style={{
                    animationDelay: `${index * 200}ms`,
                    animationFillMode: "backwards",
                  }}
                >
                  {pkg.recommended && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-gradient-sunset text-forest-dark font-bold px-4 py-1">
                        <Star className="w-3 h-3 mr-1 fill-current" />
                        Most Popular
                      </Badge>
                    </div>
                  )}

                  <CardContent className="p-8 flex flex-col h-full">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {pkg.name}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {pkg.duration}
                      </p>
                      <div className="mb-4">
                        <span className="text-4xl font-bold text-forest-medium">
                          {pkg.price}
                        </span>
                        <span className="text-muted-foreground ml-1">
                          / {pkg.priceNote}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-3 mb-8">
                      {pkg.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-forest-medium flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-auto">
                      <div className="mt-6 p-4 bg-forest-light/20 rounded-lg mb-8">
                        <p className="font-bold text-forest-dark text-sm">
                          Why we recommend this:
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {pkg.reason}
                        </p>
                      </div>

                      <Button
                        variant={pkg.recommended ? "hero" : "outline"}
                        className="w-full px-6 py-3 text-base"
                      >
                        Book This Package
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
        {showPackages && filteredPackages.length === 0 && !error && (
          <div className="text-center mb-16 animate-fade-in">
            <p className="text-lg text-muted-foreground">
              No packages found for your criteria. Please adjust your search.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Booking;
