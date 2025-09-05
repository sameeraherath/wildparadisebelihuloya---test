export interface Package {
  persons: string;
  price: string;
}

export interface PackageCategory {
  title: string;
  description: string;
  packages: Package[];
}

export const localPackages: Record<string, PackageCategory> = {
  fullBoard: {
    title: "Full Board",
    description:
      "Complete experience with all meals, activities, and accommodations",
    packages: [
      { persons: "1 Pax", price: "LKR 12,000" },
      { persons: "2 Pax", price: "LKR 22,000" },
      { persons: "3 Pax", price: "LKR 30,000" },
      { persons: "4 Pax", price: "LKR 40,000" },
      { persons: "Above 10 people (per pax)", price: "LKR 9,000" },
      { persons: "Above 20 people (per pax)", price: "LKR 8,500" },
    ],
  },
  halfBoard: {
    title: "Half Board",
    description: "Includes breakfast and dinner with accommodations",
    packages: [
      { persons: "1 Pax", price: "LKR 11,000" },
      { persons: "2 Pax", price: "LKR 20,000" },
      { persons: "3 Pax", price: "LKR 27,000" },
      { persons: "4 Pax", price: "LKR 36,000" },
      { persons: "Above 10 people (per pax)", price: "LKR 8,000" },
      { persons: "Above 20 people (per pax)", price: "LKR 7,500" },
    ],
  },
  bedAndBreakfast: {
    title: "Bed & Breakfast",
    description: "Basic package with overnight stay and morning meal",
    packages: [
      { persons: "1 Pax", price: "LKR 10,000" },
      { persons: "2 Pax", price: "LKR 18,000" },
      { persons: "3 Pax", price: "LKR 24,000" },
      { persons: "4 Pax", price: "LKR 32,000" },
      { persons: "Above 10 people (per pax)", price: "LKR 7,500" },
      { persons: "Above 20 people (per pax)", price: "LKR 7,000" },
    ],
  },
};

export const foreignPackages: Record<string, PackageCategory> = {
  fullBoard: {
    title: "Full Board ",
    description:
      "Complete experience with all meals, activities, and accommodations",
    packages: [
      { persons: "1 Pax", price: "USD 70" },
      { persons: "2 Pax", price: "USD 120" },
      { persons: "3 Pax", price: "USD 150" },
      { persons: "4 Pax", price: "USD 200" },
      { persons: "Above 10 people (per pax)", price: "USD 45" },
      { persons: "Above 20 people (per pax)", price: "USD 40" },
    ],
  },
  halfBoard: {
    title: "Half Board",
    description: "Includes breakfast and dinner with accommodations",
    packages: [
      { persons: "1 Pax", price: "USD 60" },
      { persons: "2 Pax", price: "USD 110" },
      { persons: "3 Pax", price: "USD 140" },
      { persons: "4 Pax", price: "USD 190" },
      { persons: "Above 10 people (per pax)", price: "USD 40" },
      { persons: "Above 20 people (per pax)", price: "USD 35" },
    ],
  },
  bedAndBreakfast: {
    title: "Bed & Breakfast",
    description: "Basic package with overnight stay and morning meal",
    packages: [
      { persons: "1 Pax", price: "USD 60" },
      { persons: "2 Pax", price: "USD 110" },
      { persons: "3 Pax", price: "USD 140" },
      { persons: "4 Pax", price: "USD 190" },
      { persons: "Above 10 people (per pax)", price: "USD 40" },
      { persons: "Above 20 people (per pax)", price: "USD 35" },
    ],
  },
};

export const packageIncludes = [
  "Bonfire experience",
  "BBQ facilities",
  "Nature walks",
  "Kayaking",
  "Electricity from 6:00 p.m. to 10:00 p.m.",
  "24/7 security",
];
