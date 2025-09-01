import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Heart, HelpCircle } from "lucide-react";
import { motion } from "framer-motion";
import { faqData, faqHighlights, contactInfo } from "@/data/faq";

const FAQ = () => {
  const iconMap = {
    corporate: Users,
    family: Heart,
  };

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Badge variant="secondary" className="mb-4 text-sm font-medium">
            Got Questions?
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground font-playfair">
            Frequently Asked
            <span className="block text-river-medium">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Everything you need to know about your Wild Paradise adventure.
            Perfect for families seeking quality time and teams building
            stronger bonds.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {faqHighlights.map((highlight) => {
            const IconComponent = iconMap[highlight.category];
            return (
              <Card
                key={highlight.title}
                className="border-0 shadow-forest bg-gradient-to-r from-forest-light/10 to-river-light/10"
              >
                <CardContent className="p-6 text-center">
                  <IconComponent className="w-12 h-12 text-forest-medium mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-foreground">
                    {highlight.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-0 bg-card rounded-lg shadow-sm hover:shadow-river transition-shadow duration-300"
              >
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-forest-medium flex-shrink-0" />
                    <span className="font-semibold text-foreground">
                      {faq.question}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-muted-foreground mb-4">
            {contactInfo.supportMessage}
          </p>
          <div className="flex justify-center">
            <a
              href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center justify-center px-6 py-3 bg-forest-medium text-white rounded-lg hover:bg-forest-dark transition-colors"
            >
              {contactInfo.callToAction}: {contactInfo.phone}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
