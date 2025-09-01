import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Utensils,
  Flame,
  Coffee,
  Leaf,
  Users,
  Baby,
  Clock,
  Star,
  ChefHat,
  Fish,
} from "lucide-react";
import { motion } from "framer-motion";
import { mealPlans, mealSchedule, foodDiningContent } from "@/data/foodDining";

const FoodDining = () => {
  return (
    <section id="food-dining" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Badge variant="secondary" className="mb-4 text-sm font-medium">
            {foodDiningContent.badge}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground font-playfair">
            {foodDiningContent.sectionTitle}
            <span className="block text-river-medium">
              {foodDiningContent.sectionSubtitle}
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {foodDiningContent.description}
          </p>
        </motion.div>

        <Tabs defaultValue="meals" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="meals">
              {foodDiningContent.tabLabels.meals}
            </TabsTrigger>
            <TabsTrigger value="schedule">
              {foodDiningContent.tabLabels.schedule}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="meals">
            <motion.div
              className="grid lg:grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              {mealPlans.map((plan, index) => (
                <Card key={plan.title} className="border-0 shadow-forest">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {plan.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {plan.description}
                      </p>
                    </div>
                    <ul className="space-y-2 mb-4">
                      {plan.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center gap-2">
                          <Utensils className="w-4 h-4 text-forest-medium" />
                          <span className="text-sm text-muted-foreground">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex gap-2">
                      {plan.familyFriendly && (
                        <Badge variant="outline" className="text-xs">
                          <Baby className="w-3 h-3 mr-1" />
                          Family Friendly
                        </Badge>
                      )}
                      {plan.teamSuitable && (
                        <Badge variant="outline" className="text-xs">
                          <Users className="w-3 h-3 mr-1" />
                          Team Suitable
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="schedule">
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="grid md:grid-cols-2 gap-6">
                {mealSchedule.map((meal, index) => (
                  <Card
                    key={meal.time}
                    className="border-0 shadow-sm hover:shadow-forest transition-shadow duration-300"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <Clock className="w-6 h-6 text-forest-medium" />
                        <div>
                          <h3 className="text-lg font-bold text-foreground">
                            {meal.meal}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {meal.time}
                          </p>
                        </div>
                      </div>
                      <p className="text-muted-foreground">
                        {meal.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default FoodDining;
