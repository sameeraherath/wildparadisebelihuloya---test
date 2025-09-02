import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Utensils, TreePine, Home, Shield, Heart, Users } from "lucide-react";

const Showcase = () => {
  const showcaseItems = [
    {
      icon: <Utensils className="w-8 h-8 text-forest-medium" />,
      title: "Delicious Local Cuisine",
      description:
        "Savor authentic Sri Lankan flavors with fresh, locally-sourced ingredients prepared in our clean, family-friendly kitchen facilities.",
      features: [
        "Fresh seafood",
        "Traditional rice & curry",
        "BBQ facilities",
        "Vegetarian options",
      ],
      image: "/images/features/1.png",
    },
    {
      icon: <TreePine className="w-8 h-8 text-forest-medium" />,
      title: "Rich Wildlife Experience",
      description:
        "Discover the diverse flora and fauna of Belihuloya in a safe, guided environment perfect for families with children.",
      features: [
        "Bird watching",
        "Nature trails",
        "Butterfly gardens",
        "Safe wildlife viewing",
      ],
      image: "/images/features/2.png",
    },
    {
      icon: <Home className="w-8 h-8 text-forest-medium" />,
      title: "Comfortable Accommodation",
      description:
        "Rest easy in our well-maintained, secure camping facilities designed with families in mind, ensuring comfort and safety.",
      features: [
        "Clean restrooms",
        "Secure camping areas",
        "Family tents available",
        "24/7 security",
      ],
      image: "/images/features/3.png",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Badge
              variant="secondary"
              className="bg-river-deep/10 text-river-deep hover:bg-river-deep/20"
            >
              Family Safe Experience
            </Badge>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground font-playfair">
            Experience Wild
            <span className="block text-river-medium">Paradise</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the perfect blend of adventure and comfort in our
            family-friendly camping paradise, where delicious food, amazing
            wildlife, and secure accommodation create unforgettable memories.
          </p>
        </div>

        {/* Showcase Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {showcaseItems.map((item, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg"
            >
              <CardContent className="p-0">
                {/* Image */}
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                    {item.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {item.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-2"
                      >
                        <div className="w-2 h-2 bg-river-medium rounded-full"></div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
