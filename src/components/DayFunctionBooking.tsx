import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Leaf,
  Waves,
  Flame,
  Coffee,
  Tent,
  Utensils,
  Star,
  Users,
  Phone,
} from "lucide-react";
import { motion } from "framer-motion";

const individualPackages = [
  {
    name: "Day Function – Lunch Only",
    price: 2500,
    features: [
      { icon: Utensils, text: "Lunch" },
      { icon: Waves, text: "Kayaking" },
      { icon: Leaf, text: "Nature walk" },
    ],
  },
  {
    name: "Day Function – Lunch & Dinner",
    price: 4500,
    features: [
      { icon: Utensils, text: "Lunch & Dinner" },
      { icon: Leaf, text: "Nature walk" },
      { icon: Waves, text: "Kayaking" },
      { icon: Coffee, text: "Evening herbal drink" },
      { icon: Flame, text: "Bonfire with Marshmallow burning" },
    ],
    recommended: true,
  },
  {
    name: "Day Function – Dinner Only",
    price: 3500,
    features: [
      { icon: Utensils, text: "BBQ Dinner" },
      { icon: Flame, text: "Bonfire with Marshmallow burning" },
      { icon: Coffee, text: "Evening herbal drink" },
      { icon: Leaf, text: "Nature walk" },
      { icon: Waves, text: "Kayaking" },
    ],
  },
  {
    name: "Tent Only ⛺",
    price: 6500,
    features: [
      { icon: Tent, text: "Tent stay" },
      { icon: Leaf, text: "Nature walk" },
      { icon: Waves, text: "Kayaking" },
      { icon: Coffee, text: "Evening herbal drink" },
      { icon: Coffee, text: "Bed tea" },
    ],
  },
];

const aLaCarteOptions = [
  { name: "Breakfast", price: 1500 },
  { name: "Lunch", price: 2000 },
  { name: "Dinner", price: 2500 },
];

const groupPackages = [
  { people: "20", price: 6000 },
  { people: "30", price: 5500 },
  { people: "Above 30", price: 5000 },
];

const Booking = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="day-functions"
      className="py-20 bg-gradient-to-b from-muted/30 to-background"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Badge variant="secondary" className="mb-4 text-sm font-medium">
            Reserve Your Spot
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground font-playfair">
            Plan Your Perfect Day Function
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Select a package for your event or customize your experience with
            our a la carte options.
          </p>
        </motion.div>

        {/* Individual Packages */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {individualPackages.map((pkg) => (
            <motion.div key={pkg.name} variants={itemVariants}>
              <Card
                className={`relative border-0 transition-all duration-300 h-full flex flex-col ${
                  pkg.recommended
                    ? "shadow-forest ring-2 ring-forest-medium/20"
                    : "shadow-sm hover:shadow-river"
                }`}
              >
                {pkg.recommended && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-sunset text-forest-dark font-bold px-4 py-1">
                      <Star className="w-3 h-3 mr-1 fill-current" />
                      Recommended
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold text-foreground">
                    {pkg.name}
                  </CardTitle>
                  <div className="text-4xl font-bold text-forest-medium pt-2">
                    Rs. {pkg.price.toLocaleString()}
                    <span className="text-base font-normal text-muted-foreground">
                      /person
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow">
                  <ul className="space-y-3 mb-8 flex-grow">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <feature.icon className="w-5 h-5 text-forest-medium flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant={pkg.recommended ? "hero" : "outline"}
                    className="w-full mt-auto"
                    onClick={() => (window.location.href = "tel:0762756333")}
                  >
                    Book This Package
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* A La Carte & Group Packages */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* A La Carte */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-center text-foreground font-playfair">
              Meal Price per Person
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {aLaCarteOptions.map((item) => (
                <Card
                  key={item.name}
                  className="border-0 shadow-sm hover:shadow-forest transition-shadow duration-300 text-center"
                >
                  <CardContent className="p-6">
                    <Utensils className="w-8 h-8 text-river-medium mx-auto mb-3" />
                    <p className="font-semibold text-foreground">{item.name}</p>
                    <p className="text-sm text-muted-foreground">
                      Rs. {item.price.toLocaleString()}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Group Packages */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-center text-foreground font-playfair">
              Group Packages (20+ people)
            </h3>
            <Card className="border-0 shadow-sm h-full">
              <CardContent className="p-4 flex flex-col justify-center h-full">
                <ul className="divide-y divide-muted">
                  {groupPackages.map((pkg) => (
                    <li
                      key={pkg.people}
                      className="flex justify-between items-center p-3"
                    >
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-forest-medium" />
                        <span className="font-medium text-foreground">
                          {pkg.people} people
                        </span>
                      </div>
                      <span className="font-bold text-forest-medium">
                        Rs. {pkg.price.toLocaleString()}
                        <span className="text-xs font-normal text-muted-foreground">
                          /person
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Contact CTA */}
        <motion.div
          className="text-center mt-16 lg:mt-20 p-8 lg:p-12 bg-gradient-sunset rounded-2xl shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-forest-dark mb-4">
            Have Questions or a Custom Request?
          </h3>
          <p className="text-forest-dark/80 mb-8 max-w-2xl mx-auto text-base lg:text-lg leading-relaxed">
            If you face any issues or need to plan a custom event, our team is
            here to help you create the perfect adventure.
          </p>
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-forest-dark text-forest-dark hover:bg-forest-dark hover:text-white transition-all duration-300 font-medium"
            onClick={() => (window.location.href = "tel:0762756333")}
          >
            <Phone className="w-5 h-5 mr-2" />
            Contact Us
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Booking;
