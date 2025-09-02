import {
  Tent,
  Bed,
  Coffee,
  Bath,
  Zap,
  Wifi,
  Car,
  Baby,
  Shield,
  type LucideIcon,
} from "lucide-react";

interface ProvidedEquipment {
  icon: LucideIcon;
  title: string;
  description: string;
  familyNote: string;
  category: "accommodation" | "comfort" | "dining";
}

interface Facility {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  category: "essential" | "convenience" | "security";
  availability?: string;
}

interface EquipmentCategory {
  name: string;
  description: string;
  items: ProvidedEquipment[];
}

interface FacilityCategory {
  name: string;
  description: string;
  items: Facility[];
}

export const providedEquipment: ProvidedEquipment[] = [
  {
    icon: Tent,
    title: "Camping Tents",
    description: "Weather-resistant tents for 2-4 people",
    familyNote: "Family-sized tents available",
    category: "accommodation",
  },
  {
    icon: Bed,
    title: "Sleeping Gear",
    description: "Comfortable sleeping bags and mats",
    familyNote: "Child-sized sleeping bags provided",
    category: "comfort",
  },
  {
    icon: Coffee,
    title: "Dining Setup",
    description: "Tables, chairs, and serving equipment",
    familyNote: "Booster seats for children available",
    category: "dining",
  },
];

export const facilities: Facility[] = [
  {
    icon: Bath,
    title: "Bathroom Facilities",
    description: "Clean restrooms with hot water showers",
    features: [
      "24/7 water supply",
      "Eco-friendly toiletries",
      "Family-friendly design",
    ],
    category: "essential",
    availability: "24/7",
  },
  {
    icon: Zap,
    title: "Power Supply",
    description: "Electricity available 6:00 PM - 10:00 PM",
    features: [
      "Device charging stations",
      "LED lighting",
      "Emergency backup power",
    ],
    category: "convenience",
    availability: "6:00 PM - 10:00 PM",
  },

  {
    icon: Car,
    title: "Parking & Storage",
    description: "Secure parking and equipment storage",
    features: [
      "24/7 security",
      "Covered parking",
      "Luggage storage",
      "Vehicle wash facility",
    ],
    category: "security",
    availability: "24/7",
  },
];

export const equipmentCategories: EquipmentCategory[] = [
  {
    name: "Accommodation",
    description: "Essential camping accommodation equipment",
    items: providedEquipment.filter(
      (item) => item.category === "accommodation"
    ),
  },
  {
    name: "Comfort Items",
    description: "Equipment for comfortable camping experience",
    items: providedEquipment.filter((item) => item.category === "comfort"),
  },
  {
    name: "Dining Equipment",
    description: "Tables, chairs, and dining essentials",
    items: providedEquipment.filter((item) => item.category === "dining"),
  },
];

export const facilityCategories: FacilityCategory[] = [
  {
    name: "Essential Facilities",
    description: "Basic facilities for comfortable stay",
    items: facilities.filter((facility) => facility.category === "essential"),
  },
  {
    name: "Convenience Features",
    description: "Additional conveniences for modern needs",
    items: facilities.filter((facility) => facility.category === "convenience"),
  },
  {
    name: "Security & Safety",
    description: "Safety and security features",
    items: facilities.filter((facility) => facility.category === "security"),
  },
];

// Additional equipment for special requests
export const additionalEquipment: ProvidedEquipment[] = [
  {
    icon: Baby,
    title: "Child Safety Equipment",
    description: "Special equipment for families with young children",
    familyNote: "Baby-proofed camping gear available",
    category: "comfort",
  },
];

// Facility highlights for marketing
export const facilityHighlights = [
  {
    title: "Family-Friendly Design",
    description: "All facilities designed with families and children in mind",
    icon: Baby,
  },
  {
    title: "24/7 Security",
    description: "Round-the-clock security for peace of mind",
    icon: Shield,
  },
  {
    title: "Modern Amenities",
    description: "WiFi, power supply, and modern conveniences in nature",
    icon: Zap,
  },
];

// Export types for component usage
export type {
  ProvidedEquipment,
  Facility,
  EquipmentCategory,
  FacilityCategory,
};
