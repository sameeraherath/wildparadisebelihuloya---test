/**
 * @fileoverview Booking Component - Production-ready camping package booking interface
 *
 * Features:
 * - Responsive design with mobile-first approach
 * - Optimized spacing and typography hierarchy
 * - Smooth animations with framer-motion
 * - Accessible components with ARIA labels
 * - Type-safe TypeScript implementation
 * - Performance optimized with React.memo
 * - Error handling for booking actions
 * - Analytics integration ready
 *
 * @author Wild Paradise Belihuloya
 * @version 2.0.0
 */

import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Users,
  Star,
  Phone,
  Tent,
  Utensils,
  Waves,
  Flame,
  Coffee,
  Leaf,
  Shield,
  LucideIcon,
} from "lucide-react";
import {
  localPackages,
  foreignPackages,
  type PackageCategory,
} from "@/data/packages";

// Global type extension for Google Analytics
declare global {
  interface Window {
    gtag?: (
      command: string,
      eventName: string,
      parameters?: Record<string, unknown>
    ) => void;
  }
}

// Animation variants for consistent motion across components
const ANIMATION_VARIANTS = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  },
  item: {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  },
  section: {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  },
  header: {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 },
    },
  },
} as const;

// Type definition for package features
type PackageFeature = {
  icon: LucideIcon;
  text: string;
};

// Package feature configuration
const PACKAGE_FEATURES = {
  base: [
    { icon: Tent, text: "Camping accommodation" },
    { icon: Flame, text: "Bonfire experience" },
    { icon: Utensils, text: "BBQ facilities" },
    { icon: Leaf, text: "Nature walks" },
    { icon: Waves, text: "Kayaking" },
    { icon: Shield, text: "24/7 security" },
    { icon: Coffee, text: "Electricity 6PM-10PM" },
  ] as PackageFeature[],
  fullBoard: [
    { icon: Utensils, text: "All meals included" },
  ] as PackageFeature[],
  halfBoard: [
    { icon: Utensils, text: "Breakfast & Dinner" },
  ] as PackageFeature[],
  bedBreakfast: [
    { icon: Coffee, text: "Breakfast included" },
  ] as PackageFeature[],
} as const;

/**
 * Get package features based on package title
 * @param title - Package title to determine specific features
 * @returns Array of feature objects with icon and text
 */
const getPackageFeatures = (title: string): PackageFeature[] => {
  const features: PackageFeature[] = [...PACKAGE_FEATURES.base];

  if (title.includes("Full Board")) {
    features.unshift(...PACKAGE_FEATURES.fullBoard);
  } else if (title.includes("Half Board")) {
    features.unshift(...PACKAGE_FEATURES.halfBoard);
  } else if (title.includes("Bed & Breakfast")) {
    features.unshift(...PACKAGE_FEATURES.bedBreakfast);
  }

  return features;
};

/**
 * Main Booking component featuring package selection and pricing
 * Optimized for performance with React.memo
 */
const Booking: React.FC = React.memo(() => {
  return (
    <section
      id="booking"
      className="py-16 lg:py-24 bg-gradient-to-b from-muted/30 to-background"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 lg:mb-20"
          variants={ANIMATION_VARIANTS.header}
          initial="hidden"
          animate="visible"
        >
          <Badge
            variant="secondary"
            className="mb-6 text-sm font-medium tracking-wide"
          >
            Reserve Your Adventure
          </Badge>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground font-playfair leading-tight">
            Choose Your Perfect
            <span className="block text-forest-medium mt-2">
              Adventure Package
            </span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            All packages include nature experiences and premium camping
            facilities. Pick the one that fits your adventure style and group
            size.
          </p>
        </motion.div>

        {/* Package Selection Tabs */}
        <Tabs defaultValue="local" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-muted/50 rounded-xl p-1.5 mb-12">
            <TabsTrigger
              value="local"
              className="flex items-center gap-2 text-sm font-medium transition-all duration-200"
            >
              <Users className="w-4 h-4" />
              Local Packages
            </TabsTrigger>
            <TabsTrigger
              value="foreign"
              className="flex items-center gap-2 text-sm font-medium transition-all duration-200"
            >
              <Tent className="w-4 h-4" />
              Foreign Packages
            </TabsTrigger>
          </TabsList>

          {/* Local Packages Tab */}
          <TabsContent value="local" className="mt-0">
            <motion.div
              variants={ANIMATION_VARIANTS.section}
              initial="hidden"
              animate="visible"
            >
              <Card className="border-0 shadow-lg">
                <CardHeader className="text-center px-6 lg:px-8 py-8">
                  <CardTitle className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                    Local Packages
                    <span className="block text-lg lg:text-xl font-normal text-muted-foreground mt-2">
                      per night
                    </span>
                  </CardTitle>
                  <CardDescription className="text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
                    Perfect for Sri Lankan adventurers seeking authentic
                    wilderness experiences with local hospitality.
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-6 lg:px-8 pb-8">
                  <motion.div
                    variants={ANIMATION_VARIANTS.container}
                    initial="hidden"
                    animate="visible"
                    className="space-y-8 lg:space-y-12"
                  >
                    {Object.entries(localPackages).map(([key, category]) => (
                      <motion.div key={key} variants={ANIMATION_VARIANTS.item}>
                        <PackageSection
                          category={category}
                          features={getPackageFeatures(category.title)}
                          isRecommended={key === "fullBoard"}
                        />
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          {/* Foreign Packages Tab */}
          <TabsContent value="foreign" className="mt-0">
            <motion.div
              variants={ANIMATION_VARIANTS.section}
              initial="hidden"
              animate="visible"
            >
              <Card className="border-0 shadow-lg">
                <CardHeader className="text-center px-6 lg:px-8 py-8">
                  <CardTitle className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                    Foreign Packages
                    <span className="block text-lg lg:text-xl font-normal text-muted-foreground mt-2">
                      per night
                    </span>
                  </CardTitle>
                  <CardDescription className="text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
                    Premium international packages with exceptional service and
                    comfort for overseas visitors.
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-6 lg:px-8 pb-8">
                  <motion.div
                    variants={ANIMATION_VARIANTS.container}
                    initial="hidden"
                    animate="visible"
                    className="space-y-8 lg:space-y-12"
                  >
                    {Object.entries(foreignPackages).map(([key, category]) => (
                      <motion.div key={key} variants={ANIMATION_VARIANTS.item}>
                        <PackageSection
                          category={category}
                          features={getPackageFeatures(category.title)}
                          isRecommended={key === "fullBoard"}
                        />
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>
        </Tabs>

        {/* Contact Call-to-Action */}
        <motion.div
          className="text-center mt-16 lg:mt-20 p-8 lg:p-12 bg-gradient-sunset rounded-2xl shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-forest-dark mb-4">
            Ready to Book Your Adventure?
          </h3>
          <p className="text-forest-dark/80 mb-8 max-w-2xl mx-auto text-base lg:text-lg leading-relaxed">
            Contact our team to reserve your spot or customize your perfect
            camping experience. We're here to make your wilderness dreams come
            true.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center items-center">
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-forest-dark text-forest-dark hover:bg-forest-dark hover:text-white transition-all duration-300 font-medium"
              onClick={() => window.open("tel:0762756333", "_self")}
              aria-label="Call us at 0762756333 to book your adventure"
            >
              <Phone className="w-5 h-5 mr-2" aria-hidden="true" />
              Contact Us Now
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-forest-dark text-forest-dark hover:bg-forest-dark hover:text-white transition-all duration-300 font-medium"
              onClick={() => {
                const element = document.getElementById("day-functions");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              aria-label="View day function packages and pricing"
            >
              <Utensils className="w-5 h-5 mr-2" aria-hidden="true" />
              View Day Functions
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

// Add display name for debugging
Booking.displayName = "Booking";

/**
 * Package section component displaying individual package details
 */
interface PackageSectionProps {
  category: PackageCategory;
  features: PackageFeature[];
  isRecommended?: boolean;
}

const PackageSection: React.FC<PackageSectionProps> = ({
  category,
  features,
  isRecommended = false,
}) => {
  // Get the appropriate icon based on package type
  const getPackageIcon = (title: string): LucideIcon => {
    if (title.includes("Full Board")) return Waves;
    if (title.includes("Half Board")) return Utensils;
    if (title.includes("Bed & Breakfast")) return Tent;
    return Tent;
  };

  const PackageIcon = getPackageIcon(category.title);

  return (
    <div className="relative">
      {/* Recommended Badge */}
      {isRecommended && (
        <div className="absolute -top-4 left-6 z-10">
          <Badge className="bg-gradient-sunset text-forest-dark font-bold px-4 py-2 shadow-lg">
            <Star className="w-4 h-4 mr-2 fill-current" />
            Most Popular
          </Badge>
        </div>
      )}

      <Card
        className={`border-0 shadow-md hover:shadow-lg transition-all duration-300 ${
          isRecommended ? "ring-2 ring-forest-medium/30 ring-offset-2" : ""
        }`}
      >
        <CardHeader className="pb-4">
          <CardTitle className="text-xl lg:text-2xl font-bold text-foreground flex items-center gap-3">
            <PackageIcon className="w-6 h-6 lg:w-7 lg:h-7 text-forest-medium flex-shrink-0" />
            <span className="leading-tight">{category.title}</span>
          </CardTitle>
          <CardDescription className="text-base lg:text-lg mt-3 leading-relaxed">
            {category.description}
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Features Section */}
          <div className="p-6 bg-muted/40 rounded-xl border border-muted">
            <h4 className="text-sm lg:text-base font-semibold text-foreground mb-4 flex items-center gap-2">
              <Shield className="w-4 h-4 text-forest-medium" />
              What's Included:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <feature.icon className="w-4 h-4 lg:w-5 lg:h-5 text-forest-medium flex-shrink-0" />
                  <span className="text-sm lg:text-base text-muted-foreground">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Package Grid */}
          <PackageGrid data={category.packages} />
        </CardContent>
      </Card>
    </div>
  );
};

/**
 * Package grid component displaying pricing options
 */
interface PackageGridProps {
  data: { persons: string; price: string }[];
}

const PackageGrid: React.FC<PackageGridProps> = ({ data }) => {
  const handleBooking = (persons: string, price: string) => {
    try {
      const message = `Hi! I'd like to book the ${persons} package for ${price} per night. Could you please provide more details?`;

      // For production: You might want to integrate with a booking system
      // For now, we'll use phone call as the primary CTA
      window.open("tel:0762756333", "_self");

      // Optional: Track booking intent for analytics
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "booking_intent", {
          package_type: persons,
          package_price: price,
        });
      }
    } catch (error) {
      console.error("Error initiating booking:", error);
      // Fallback: copy phone number to clipboard
      if (navigator.clipboard) {
        navigator.clipboard.writeText("0762756333");
        alert("Phone number copied to clipboard: 0762756333");
      }
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6">
      {data.map((item, index) => (
        <motion.div
          key={`${item.persons}-${index}`}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            delay: index * 0.1,
            ease: "easeOut",
          }}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.2 },
          }}
        >
          <Card className="border border-muted/60 hover:border-forest-medium/40 transition-all duration-300 hover:shadow-md group">
            <CardContent className="p-6 lg:p-8">
              <div className="text-center space-y-4 lg:space-y-6">
                {/* Person Count */}
                <div className="flex items-center justify-center gap-3 text-forest-medium">
                  <Users className="w-5 h-5 lg:w-6 lg:h-6" aria-hidden="true" />
                  <span className="font-semibold text-foreground text-base lg:text-lg">
                    {item.persons}
                  </span>
                </div>

                {/* Price */}
                <div className="space-y-1">
                  <div className="text-2xl lg:text-3xl font-bold text-forest-medium">
                    {item.price}
                  </div>
                  <div className="text-xs lg:text-sm text-muted-foreground">
                    per night
                  </div>
                </div>

                {/* Book Button */}
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-forest-medium/40 text-forest-medium hover:bg-forest-medium hover:text-white transition-all duration-300 font-medium group-hover:border-forest-medium"
                  onClick={() => handleBooking(item.persons, item.price)}
                  aria-label={`Book package for ${item.persons} at ${item.price} per night`}
                >
                  Book This Package
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default Booking;
