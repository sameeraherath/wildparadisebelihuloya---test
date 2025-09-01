import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Baby, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { providedEquipment, facilities } from "@/data";

const EquipmentFacilities = () => {
  return (
    <section id="equipment" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Badge variant="secondary" className="mb-4 text-sm font-medium">
            Everything Provided
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground font-playfair">
            Equipment &
            <span className="block text-river-medium">Facilities</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive facilities and equipment for comfortable camping
            experiences. Specially designed for families with children and
            corporate teams.
          </p>
        </motion.div>

        <Tabs defaultValue="provided" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="provided">Provided Equipment</TabsTrigger>
            <TabsTrigger value="facilities">Facilities</TabsTrigger>
          </TabsList>

          <TabsContent value="provided">
            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              {providedEquipment.map((item, index) => (
                <Card
                  key={item.title}
                  className="border-0 shadow-forest hover:shadow-river transition-shadow duration-300"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-forest rounded-lg flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      {item.description}
                    </p>
                    <div className="flex items-center gap-1 justify-center">
                      <Baby className="w-4 h-4 text-blue-500" />
                      <span className="text-xs text-blue-600">
                        {item.familyNote}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="facilities">
            <motion.div
              className="grid md:grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              {facilities.map((facility, index) => (
                <Card key={facility.title} className="border-0 shadow-forest">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-nature rounded-lg flex items-center justify-center flex-shrink-0">
                        <facility.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2 text-foreground">
                          {facility.title}
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          {facility.description}
                        </p>
                        <ul className="space-y-1">
                          {facility.features.map((feature, featureIndex) => (
                            <li
                              key={featureIndex}
                              className="flex items-center gap-2"
                            >
                              <Shield className="w-3 h-3 text-forest-medium" />
                              <span className="text-sm text-muted-foreground">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default EquipmentFacilities;
