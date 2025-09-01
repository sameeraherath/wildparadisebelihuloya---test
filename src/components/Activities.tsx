import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Mountain,
  Fish,
  TreePine,
  Camera,
  Flame,
  Waves,
  Star,
} from "lucide-react";
import activitiesImage from "@/assets/activities.webp";

const Activities = () => {
  const activities = [
    {
      icon: Waves,
      title: "Kayaking & River Fun",
      description:
        "Kayaking, swimming and relaxing by the river at Samanalawewa reservoir.",
      duration: "2-4 hours",
      difficulty: "Beginner",
    },
    {
      icon: TreePine,
      title: "Local Village Experience",
      description: "Guided walk through the village and meet local residents.",
      duration: "3-6 hours",
      difficulty: "Moderate",
    },
    {
      icon: Flame,
      title: "Campfire Evenings",
      description:
        "Traditional storytelling, local music, and stargazing sessions",
      duration: "2-3 hours",
      difficulty: "Easy",
    },
  ];

  return (
    <section id="activities" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-sm font-medium">
            Adventure Awaits
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground font-playfair">
            Unforgettable
            <span className="block text-river-medium">Experiences</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From serene river activities to thrilling forest adventures,
            discover the natural wonders of Sri Lanka through carefully curated
            experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Activities List */}
          <div className="space-y-6">
            {activities.map((activity, index) => (
              <Card
                key={activity.title}
                className="border-0 shadow-sm hover:shadow-river transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-nature rounded-xl flex items-center justify-center">
                        <activity.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-semibold text-foreground">
                          {activity.title}
                        </h3>
                        <span className="text-sm text-muted-foreground">
                          #{index + 1}
                        </span>
                      </div>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {activity.description}
                      </p>
                      {/* Duration removed as requested */}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Featured Image and CTA */}
          <div className="lg:sticky lg:top-8">
            <div className="relative rounded-2xl overflow-hidden shadow-forest mb-8">
              <img
                src={activitiesImage}
                alt="Adventure activities at Emerald River Forest Camp"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-2 mb-3">
                  <Star className="w-5 h-5 fill-sunset-golden text-sunset-golden" />
                  <span className="text-white font-medium">
                    Top Rated Activities
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Create Memories That Last a Lifetime
                </h3>
                <p className="text-white/90 text-sm mb-4">
                  Join expert guides for safe, educational, and thrilling
                  adventures in Sri Lanka's pristine wilderness.
                </p>
              </div>
            </div>

            <Card className="border-0 shadow-warm bg-gradient-sunset">
              <CardContent className="p-6 text-center">
                <h4 className="text-xl font-bold text-forest-dark mb-2">
                  Ready for Adventure?
                </h4>
                <p className="text-forest-dark/80 mb-4">
                  Book your stay and let us craft the perfect outdoor experience
                  for you.
                </p>
                <Button
                  variant="outline"
                  className="border-forest-dark text-forest-dark hover:bg-forest-dark hover:text-white"
                  onClick={() => {
                    const bookingSection = document.getElementById("booking");
                    if (bookingSection) {
                      bookingSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  Plan Your Adventure
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;
