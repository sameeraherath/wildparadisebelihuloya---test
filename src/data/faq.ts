interface FAQ {
  question: string;
  answer: string;
  category?:
    | "general"
    | "booking"
    | "activities"
    | "safety"
    | "family"
    | "corporate";
}

interface Highlight {
  title: string;
  description: string;
  category: "family" | "corporate";
}

export const faqData: FAQ[] = [
  {
    question: "What's included in the camping package?",
    answer:
      "Our full board package includes accommodation, all meals (breakfast, lunch, dinner), kayaking adventure, guided nature walk, bonfire experience, BBQ dinner, and electricity supply from 6:00 PM to 10:00 PM. Perfect for both families and corporate teams.",
    category: "general",
  },
  {
    question: "Is Wild Paradise suitable for families with children?",
    answer:
      "Absolutely! We welcome families and have activities suitable for all ages. Children can enjoy safe swimming areas, nature walks, bird watching, and storytelling around the campfire. Our experienced guides ensure everyone has a memorable and safe experience.",
    category: "family",
  },
  {
    question: "Can corporate teams book for team building activities?",
    answer:
      "Yes! We specialize in corporate retreats and team building experiences. Our activities like kayaking, group challenges, and outdoor cooking sessions are perfect for strengthening team bonds. We offer special group rates for 10+ people.",
    category: "corporate",
  },
  {
    question: "What should I bring for the camping trip?",
    answer:
      "Bring comfortable clothing, swimwear, hiking shoes, personal toiletries, sunscreen, insect repellent, and a camera. We provide all camping equipment, bedding, and meals. A detailed packing list will be sent upon booking confirmation.",
    category: "general",
  },
  {
    question: "How do I get to Wild Paradise Belihuloya?",
    answer:
      "We're located 3.5 hours from Colombo by car. Take the A4 highway towards Ratnapura, then follow signs to Belihuloya. Detailed directions and GPS coordinates will be provided upon booking. We can also arrange transportation for groups.",
    category: "general",
  },
  {
    question: "What's the cancellation policy?",
    answer:
      "Cancellations made 7+ days before arrival receive a full refund. 3-6 days before: 50% refund. Less than 3 days: no refund. Weather-related cancellations are handled case by case with flexible rescheduling options.",
    category: "booking",
  },
  {
    question: "Are there age restrictions?",
    answer:
      "No specific age restrictions, but children under 12 must be supervised by adults during water activities. We recommend our experience for ages 5 and above for maximum enjoyment of outdoor activities.",
    category: "family",
  },
  {
    question: "What about dietary requirements?",
    answer:
      "We accommodate vegetarian, vegan, and special dietary needs. Please inform us during booking about any allergies or dietary restrictions. Our chefs prepare fresh, local cuisine using organic ingredients from nearby farms.",
    category: "general",
  },
  {
    question: "Is the location safe for overnight camping?",
    answer:
      "Yes, safety is our top priority. We have 24/7 on-site staff, first aid facilities, emergency communication systems, and well-maintained safety equipment. Our guides are trained in wilderness safety and emergency procedures.",
    category: "safety",
  },
  {
    question: "What's the best time to visit?",
    answer:
      "Year-round destination! Dry season (December-April) is ideal for outdoor activities. Monsoon season (May-September) offers lush green scenery and fewer crowds. Each season has its unique charm for both families and team groups.",
    category: "general",
  },
];

export const faqHighlights: Highlight[] = [
  {
    title: "Perfect for Teams",
    description:
      "Corporate retreats and team building activities with group discounts",
    category: "corporate",
  },
  {
    title: "Family Friendly",
    description:
      "Safe activities and experiences suitable for all family members",
    category: "family",
  },
];

export const contactInfo = {
  phone: "076 275 6333",
  supportMessage: "Still have questions? We're here to help!",
  callToAction: "Call Us",
};

// Helper functions for filtering FAQs
export const getFAQsByCategory = (category: FAQ["category"]) => {
  return faqData.filter((faq) => faq.category === category);
};

export const getFamilyFAQs = () => getFAQsByCategory("family");
export const getCorporateFAQs = () => getFAQsByCategory("corporate");
export const getGeneralFAQs = () => getFAQsByCategory("general");
export const getBookingFAQs = () => getFAQsByCategory("booking");
export const getSafetyFAQs = () => getFAQsByCategory("safety");
export const getActivityFAQs = () => getFAQsByCategory("activities");
