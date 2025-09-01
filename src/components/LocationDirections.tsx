import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Car,
  Bus,
  Clock,
  Navigation,
  Phone,
  Users,
  Heart,
} from "lucide-react";
import { motion } from "framer-motion";

const LocationDirections = () => {
  const routes = [
    {
      from: "Colombo",
      distance: "120 km",
      duration: "3.5 hours",
      route: "A4 Highway → Ratnapura → Belihuloya",
      details: "Take A4 towards Ratnapura, then follow B36 to Belihuloya",
    },
    {
      from: "Kandy",
      distance: "85 km",
      duration: "2.5 hours",
      route: "A26 → Balangoda → Belihuloya",
      details: "Via Balangoda route through scenic hill country",
    },
    {
      from: "Galle",
      distance: "140 km",
      duration: "4 hours",
      route: "A2 → Matara → A17 → Belihuloya",
      details: "Coastal route via Matara, then inland to Belihuloya",
    },
  ];

  // ...existing code...

  const nearbyPlaces = [
    "Samanalawewa Reservoir",
    "Pahanthudawa Waterfall",
    "Horton Plains National Park",
    "Bambarakanda Falls",
    "Hawagala Mountain",
    "Baker's Bend",
    "Nonpareil Estate Bungalow",
  ];

  return (
    <section id="location" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Badge variant="secondary" className="mb-4 text-sm font-medium">
            Find Your Way
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground font-playfair">
            Location &
            <span className="block text-river-medium">Directions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Located in the heart of Sabaragamuwa province, easily accessible for
            both family getaways and corporate team retreats from major Sri
            Lankan cities.
          </p>
        </motion.div>

        {/* Location Overview */}
        <motion.div
          className="grid lg:grid-cols-2 gap-12 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div>
            <h3 className="text-2xl font-bold mb-6 text-foreground">
              Our Location
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-forest-medium mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">
                    Wild Paradise Belihuloya
                  </p>
                  <p className="text-muted-foreground">
                    Kinchigune, samanalawawe, Belihuloya
                    <br />
                    Near Samanalawewa Reservoir
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-6 h-6 text-forest-medium mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">
                    Contact for Directions
                  </p>
                  <p className="text-muted-foreground">
                    0762756333
                    <br />
                    Available 24/7 for assistance
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Button
                className="w-full sm:w-auto"
                onClick={() =>
                  window.open(
                    "https://maps.google.com/?q=6.7167,80.7833",
                    "_blank"
                  )
                }
              >
                <Navigation className="w-4 h-4 mr-2" />
                Open in Google Maps
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-foreground">
              Nearby Attractions
            </h3>
            <div className="space-y-3">
              {nearbyPlaces.map((place, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 bg-card rounded-lg"
                >
                  <MapPin className="w-4 h-4 text-river-medium flex-shrink-0" />
                  <span className="text-muted-foreground">{place}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Interactive Map */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center text-foreground">
            Find Us on the Map
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-card rounded-lg overflow-hidden shadow-forest">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57378.939716885!2d80.7754525!3d6.6640011999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3f52f629b778b%3A0xc32d73885770e176!2sSamanalawewa%20Reservoir!5e1!3m2!1sen!2slk!4v1756703636472!5m2!1sen!2slk"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
                title="Wild Paradise Belihuloya Location Map"
              />
            </div>
            <div className="mt-4 text-center">
              <p className="text-sm text-muted-foreground">
                Our camping site is located near the beautiful Samanalawewa
                Reservoir in Belihuloya
              </p>
            </div>
          </div>
        </motion.div>

        {/* Driving Directions */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center text-foreground">
            Driving Directions from Major Cities
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {routes.map((route, index) => (
              <Card
                key={route.from}
                className="border-0 shadow-forest hover:shadow-river transition-shadow duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Car className="w-6 h-6 text-forest-medium" />
                    <h4 className="text-xl font-bold text-foreground">
                      From {route.from}
                    </h4>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Navigation className="w-4 h-4 text-river-medium" />
                      <span className="text-sm text-muted-foreground">
                        {route.distance}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-river-medium" />
                      <span className="text-sm text-muted-foreground">
                        {route.duration}
                      </span>
                    </div>

                    <div className="mt-4">
                      <p className="font-semibold text-foreground text-sm mb-2">
                        Route:
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {route.route}
                      </p>
                    </div>

                    <div className="mt-3 p-3 bg-muted/50 rounded-lg">
                      <p className="text-xs text-muted-foreground">
                        {route.details}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Transportation Options section removed as requested */}

        {/* Contact for Assistance */}
        <motion.div
          className="text-center mt-12 p-6 bg-gradient-sunset rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h4 className="text-xl font-bold text-forest-dark mb-2">
            Need Help Finding Us?
          </h4>
          <p className="text-forest-dark/80 mb-4">
            Our team is available 24/7 to provide directions and assistance for
            both families and corporate groups.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              className="border-forest-dark text-forest-dark hover:bg-forest-dark hover:text-white"
              onClick={() => window.open("tel:0762756333", "_self")}
            >
              <Phone className="w-4 h-4 mr-2" />
              Call for Directions
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationDirections;
