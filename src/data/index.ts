// Export all data modules from a central location
export * from "./faq";
export * from "./foodDining";
export * from "./Gallery";
export * from "./packages";
export * from "./equipmentFacilities";

// Re-export specific data with aliases for clarity
export { faqData as faqs, faqHighlights, contactInfo } from "./faq";

export {
  mealPlans,
  mealSchedule as dailyMealSchedule,
  foodDiningContent,
} from "./foodDining";

export { galleryImages } from "./Gallery";

export { allPackages as packages } from "./packages";

export {
  providedEquipment,
  facilities,
  equipmentCategories,
  facilityCategories,
  facilityHighlights,
} from "./equipmentFacilities";
