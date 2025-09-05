import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tent, TreePine, Utensils, Shield } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Tent,
      title: "Village Stay",
      description: "Experience warm hospitality and the charm of village life.",
      highlight: "Village",
    },
    {
      icon: TreePine,
      title: "Forest Trails",
      description: "Join guided walks and discover local wildlife.",
      highlight: "Adventure",
    },
    {
      icon: Utensils,
      title: "Gourmet Dining",
      description: "Savor fresh local cuisine prepared by expert chefs.",
      highlight: "Culinary",
    },
    {
      icon: Shield,
      title: "24/7 Support",
      description: "Our on-site team is always available for your needs.",
      highlight: "Safety",
    },
  ];

  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-sm font-medium">
            Camp Features
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground font-playfair">
            Everything You Need for the
            <span className="block text-river-medium">Perfect Escape</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our thoughtfully designed camp combines luxury amenities with
            authentic forest experiences, ensuring your stay is both comfortable
            and memorable.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-river">
              <img
                src="https://i.ibb.co/3mQT0R8K/7.png"
                alt="Luxury camping amenities at Emerald River Forest Camp"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/30 to-transparent" />
            </div>
          </div>

          {/* Features Grid */}
          <div className="order-1 lg:order-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature) => (
              <Card
                key={feature.title}
                className="border-0 shadow-sm hover:shadow-forest transition-shadow duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-gradient-forest rounded-lg flex items-center justify-center">
                        <feature.icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold text-foreground">
                          {feature.title}
                        </h3>
                        <Badge
                          variant="outline"
                          className="text-xs px-2 py-0.5"
                        >
                          {feature.highlight}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
