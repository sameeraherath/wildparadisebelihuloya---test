interface MealPlan {
  title: string;
  description: string;
  items: string[];
  familyFriendly: boolean;
  teamSuitable: boolean;
  category: "traditional" | "bbq" | "bonfire" | "special";
}

interface MealSchedule {
  time: string;
  meal: string;
  description: string;
  category: "breakfast" | "lunch" | "teatime" | "dinner";
}

export const mealPlans: MealPlan[] = [
  {
    title: "Traditional Sri Lankan",
    description: "Authentic local dishes with fresh ingredients",
    items: ["Rice & Curry", "Fish Curry", "Coconut Sambol", "Fresh Fruits"],
    familyFriendly: true,
    teamSuitable: true,
    category: "traditional",
  },
  {
    title: "BBQ Experience",
    description: "Grilled specialties perfect for group dining",
    items: ["Grilled Fish", "Chicken BBQ", "Vegetable Skewers", "Garlic Bread"],
    familyFriendly: true,
    teamSuitable: true,
    category: "bbq",
  },
  {
    title: "Bonfire Cooking",
    description: "Interactive cooking experience around the fire",
    items: ["Campfire Stew", "Roasted Corn", "Marshmallows", "Hot Chocolate"],
    familyFriendly: true,
    teamSuitable: true,
    category: "bonfire",
  },
];

export const mealSchedule: MealSchedule[] = [
  {
    time: "7:00 AM",
    meal: "Breakfast",
    description: "Fresh fruits, local bread, tea/coffee",
    category: "breakfast",
  },
  {
    time: "12:30 PM",
    meal: "Lunch",
    description: "Traditional rice & curry or light meals",
    category: "lunch",
  },
  {
    time: "4:00 PM",
    meal: "Tea Time",
    description: "Local snacks and refreshments",
    category: "teatime",
  },
  {
    time: "7:30 PM",
    meal: "Dinner",
    description: "BBQ, bonfire cooking, or full course meal",
    category: "dinner",
  },
];

// Helper functions for filtering and managing food data
export const getMealsByCategory = (category: MealPlan["category"]) => {
  return mealPlans.filter((meal) => meal.category === category);
};

export const getFamilyFriendlyMeals = () => {
  return mealPlans.filter((meal) => meal.familyFriendly);
};

export const getTeamSuitableMeals = () => {
  return mealPlans.filter((meal) => meal.teamSuitable);
};

export const getMealByTime = (category: MealSchedule["category"]) => {
  return mealSchedule.find((meal) => meal.category === category);
};

export const updateMealTime = (
  category: MealSchedule["category"],
  newTime: string
) => {
  const meal = getMealByTime(category);
  if (meal) {
    meal.time = newTime;
  }
};

// Common food-related content
export const foodDiningContent = {
  sectionTitle: "Food &",
  sectionSubtitle: "Dining",
  badge: "Culinary Adventures",
  description:
    "Savor authentic Sri Lankan cuisine and outdoor cooking experiences. Perfect for family meals and corporate team dining with bonfire and BBQ options.",
  tabLabels: {
    meals: "Meal Plans",
    schedule: "Schedule",
  },
};
