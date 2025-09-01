interface PricingTier {
  people: number;
  localPrice: number;
  foreignPrice: number;
}

interface Package {
  name: string;
  duration: string;
  features: string[];
  recommended?: boolean;
  reason?: string;
  pricing: {
    local: PricingTier[];
    foreign: PricingTier[];
    groupDiscounts: {
      above10: { local: number; foreign: number };
      above20: { local: number; foreign: number };
    };
  };
}

export const allPackages: Package[] = [
  {
    name: "Wild Paradise Experience",
    duration: "1 Night Full Board",
    features: [
      "Full board accommodation",
      "Kayaking adventure",
      "Guided nature walk",
      "Bonfire experience",
      "BBQ dinner",
      "Electricity supply (6:00 PM - 10:00 PM)",
      "Stunning forest location",
    ],
    recommended: true,
    pricing: {
      local: [
        { people: 1, localPrice: 12000, foreignPrice: 0 },
        { people: 2, localPrice: 22000, foreignPrice: 0 },
        { people: 3, localPrice: 30000, foreignPrice: 0 },
        { people: 4, localPrice: 40000, foreignPrice: 0 },
      ],
      foreign: [
        { people: 1, localPrice: 0, foreignPrice: 70 },
        { people: 2, localPrice: 0, foreignPrice: 120 },
        { people: 3, localPrice: 0, foreignPrice: 150 },
        { people: 4, localPrice: 0, foreignPrice: 200 },
      ],
      groupDiscounts: {
        above10: { local: 9000, foreign: 45 },
        above20: { local: 8500, foreign: 40 },
      },
    },
  },
];

// Helper function to calculate pricing
export const calculatePrice = (
  people: number,
  isLocal: boolean = true
): { price: number; currency: string; note: string } => {
  const pkg = allPackages[0]; // Using the main package
  
  if (people >= 20) {
    return {
      price: people * (isLocal ? pkg.pricing.groupDiscounts.above20.local : pkg.pricing.groupDiscounts.above20.foreign),
      currency: isLocal ? "LKR" : "USD",
      note: `${people} people (20+ group rate)`
    };
  }
  
  if (people >= 10) {
    return {
      price: people * (isLocal ? pkg.pricing.groupDiscounts.above10.local : pkg.pricing.groupDiscounts.above10.foreign),
      currency: isLocal ? "LKR" : "USD",
      note: `${people} people (10+ group rate)`
    };
  }
  
  // Individual pricing for 1-4 people
  const pricingTiers = isLocal ? pkg.pricing.local : pkg.pricing.foreign;
  const tier = pricingTiers.find(t => t.people === people);
  
  if (tier) {
    return {
      price: isLocal ? tier.localPrice : tier.foreignPrice,
      currency: isLocal ? "LKR" : "USD",
      note: `${people} ${people === 1 ? 'person' : 'people'}`
    };
  }
  
  // For 5-9 people, calculate based on per person rate for 4 people
  const baseTier = pricingTiers.find(t => t.people === 4);
  if (baseTier) {
    const perPersonRate = isLocal ? baseTier.localPrice / 4 : baseTier.foreignPrice / 4;
    return {
      price: people * perPersonRate,
      currency: isLocal ? "LKR" : "USD",
      note: `${people} people (calculated rate)`
    };
  }
  
  return {
    price: 0,
    currency: isLocal ? "LKR" : "USD",
    note: "Contact for pricing"
  };
};
