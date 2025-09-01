import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Heart, Shield, Award } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const highlights = [
    {
      icon: Leaf,
      title: "Eco-Friendly",
      description: "Caring for nature and wildlife in Sri Lanka",
    },
    {
      icon: Heart,
      title: "Relax & Refresh",
      description: "Enjoy calm places and fresh air",
    },
    {
      icon: Shield,
      title: "Safe & Secure",
      description: "Friendly support to keep you safe",
    },
    {
      icon: Award,
      title: "Top Rated",
      description: "Sri Lanka's eco-friendly places",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-background to-muted/50"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Badge variant="secondary" className="mb-4 text-sm font-medium">
              About Our Paradise
            </Badge>
          </motion.div>
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 text-foreground font-playfair"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            Adventure and
            <span className="block text-river-medium">Peace Together</span>
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            Wild Paradise is a special camping site in Belihuloya, Sabaragamuwa
            province, near the beautiful Samanalawewa reservoir. It’s the
            perfect place to relax, enjoy nature, and have a memorable adventure
            in Sri Lanka.
          </motion.p>
        </motion.div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground font-playfair">
              Our Story
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Welcome to Wild Paradise, a quiet camping spot in Belihuloya, in
                the Sabaragamuwa province. Enjoy the fresh air, green hills, and
                peaceful rivers of this beautiful area.
              </p>
              <p>
                Our campsite is near the Samanalawewa reservoir, a great place
                for spotting wildlife, kayaking, and taking beautiful nature
                walks. Explore the lovely forest trails and enjoy the calm
                surroundings.
              </p>
              <p>
                We work with local communities to protect the environment. Your
                visit helps preserve this beautiful place for everyone to enjoy.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.18,
                },
              },
            }}
          >
            {highlights.map((item, idx) => (
              <motion.div
                key={item.title}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <Card className="border-0 shadow-forest">
                  <CardContent className="p-6 text-center">
                    <item.icon className="w-8 h-8 text-forest-medium mx-auto mb-3" />
                    <h4 className="font-semibold mb-2 text-foreground">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
