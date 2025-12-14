import React from "react";
import {
  Smile,
  Dumbbell,
  Wallet,
  Sparkles,
  Utensils,
  Activity,
  Milk,
  Pill,
  Zap,
} from "lucide-react";

export type ProductTier = "essential" | "advanced" | "optional";

export interface Product {
  id: number;
  category: string;
  subcategory: string;
  name: string;
  reason: string;
  frequency: string;
  sideEffect?: string;
  note?: string;
  icon: React.ReactNode;
  color: string;
  bg: string;
  price: string;
  appleLink?: string;
  androidLink?: string;
  link?: string;
  hideButton?: boolean;
  buttonText?: string;
  tier?: ProductTier;
}

export interface Bundle {
  id: string;
  name: string;
  description: string;
  productIds: number[];
  icon: React.ReactNode;
  color: string;
  bg: string;
}

export const products: Product[] = [
  // Oral
  {
    id: 1,
    category: "Health",
    subcategory: "Oral",
    name: "Oral B iO10 Electric Toothbrush",
    reason:
      "Manual brushing fails to break up biofilm. Sonic vibrations (62k/min) force fluid between teeth.",
    frequency: "2x Daily (Morning & Night)",
    icon: <Smile className="w-6 h-6" />,
    color: "text-cyan-500",
    bg: "bg-cyan-50 dark:bg-cyan-900/20",
    price: "$$$",
    link: "https://shop.oralb.co.uk/p/oral-b-io-10-black-electric-toothbrush-designed-by-braun/17370615/",
  },
  {
    id: 2,
    category: "Health",
    subcategory: "Oral",
    name: "Crest Pro-Health Advanced Gum Protection",
    reason:
      "Contains Stannous Fluoride which is more effective against gingivitis and plaque than sodium fluoride.",
    frequency: "2x Daily",
    icon: <Smile className="w-6 h-6" />,
    color: "text-cyan-500",
    bg: "bg-cyan-50 dark:bg-cyan-900/20",
    price: "$",
    link: "https://crest.com/en-us/oral-care-products/toothpaste/pro-health-advanced-gum-protection/?srsltid=AfmBOooR5PxvqrVqueutPM-87Sdg60Buk44BNU_JFR3JhszyFqllSpEG",
  },
  {
    id: 3,
    category: "Health",
    subcategory: "Oral",
    name: "Crest Pro-Health Multi-Protection",
    reason:
      "Contains CPC (Cetylpyridinium Chloride) which is a proven antigingivitis and antiplaque agent.",
    frequency: "1x Daily (Before brushing)",
    icon: <Smile className="w-6 h-6" />,
    color: "text-cyan-500",
    bg: "bg-cyan-50 dark:bg-cyan-900/20",
    price: "$",
    link: "https://crest.com/en-us/oral-care-products/mouthwash/pro-health-advanced-extra-whitening-mouthwash",
  },
  {
    id: 4,
    category: "Health",
    subcategory: "Oral",
    name: "Copper Tongue Scraper",
    reason:
      "90% of bad breath originates from the back of the tongue. Copper is naturally antimicrobial.",
    frequency: "1x Daily (First thing AM)",
    icon: <Smile className="w-6 h-6" />,
    color: "text-cyan-500",
    bg: "bg-cyan-50 dark:bg-cyan-900/20",
    price: "$",
  },
  {
    id: 33,
    category: "Health",
    subcategory: "Oral",
    name: "TePe® Interdental Brush Original Mixed Pack",
    reason:
      "Cleans between teeth where regular brushes miss. Essential for gum health.",
    frequency: "Daily",
    icon: <Smile className="w-6 h-6" />,
    color: "text-cyan-500",
    bg: "bg-cyan-50 dark:bg-cyan-900/20",
    price: "$",
    link: "https://www.tepe.com/uk/Products/interdental-brushes/tepe-interdental-brush-original-mixed-pack",
  },

  // FITNESS
  {
    id: 5,
    category: "Health",
    subcategory: "Fitness",
    name: "Insanity",
    reason:
      "High Intensity Interval Training improves VO2 max and metabolic rate more efficiently than steady state.",
    frequency: "Daily (30-60 mins)",
    icon: <Activity className="w-6 h-6" />,
    color: "text-orange-500",
    bg: "bg-orange-50 dark:bg-orange-900/20",
    price: "$$",
    link: "https://www.beachbodyondemand.com/programs/insanity/start-here?locale=en_GB",
    buttonText: "View Program",
  },
  {
    id: 6,
    category: "Health",
    subcategory: "Fitness",
    name: "P90X",
    reason:
      "Resistance training is the only natural way to maintain bone density and muscle mass as you age.",
    frequency: "4x Week (Split Routine)",
    icon: <Dumbbell className="w-6 h-6" />,
    color: "text-orange-500",
    bg: "bg-orange-50 dark:bg-orange-900/20",
    price: "$$",
    link: "https://www.beachbodyondemand.com/programs/p90x/start-here",
    buttonText: "View Program",
  },
  {
    id: 7,
    category: "Health",
    subcategory: "Supplements",
    name: "Optimum Nutrition Micronised Creatine Powder",
    reason:
      "The most researched supplement. Boosts ATP for strength and improves cognitive function.",
    frequency: "Daily (5g scoop)",
    icon: <Zap className="w-6 h-6" />,
    color: "text-orange-500",
    bg: "bg-orange-50 dark:bg-orange-900/20",
    price: "$",
    link: "https://www.optimumnutrition.com/en-gb/products/micronised-creatine-powder",
  },
  {
    id: 13,
    category: "Health",
    subcategory: "Supplements",
    name: "Multivitamin",
    reason:
      "Fills nutritional gaps in modern diets. Ensures baseline micronutrient sufficiency.",
    frequency: "Daily (Morning)",
    icon: <Pill className="w-6 h-6" />,
    color: "text-orange-500",
    bg: "bg-orange-50 dark:bg-orange-900/20",
    price: "$$",
  },
  {
    id: 28,
    category: "Health",
    subcategory: "Supplements",
    name: "Platinum Hydrowhey Hydrolysed Whey Protein Powder",
    reason: "Easy on stomach and pre-digested whey for faster absorption.",
    frequency: "Post-Workout",
    icon: <Milk className="w-6 h-6" />,
    color: "text-orange-500",
    bg: "bg-orange-50 dark:bg-orange-900/20",
    price: "$$",
    link: "https://www.optimumnutrition.com/en-gb/products/platinum-hydrowhey-hydrolysed-whey-protein-powder-eu?gad_campaignid=19632621789&gad_source=1&gbraid=0AAAAACY5u4s_OmIRcOjO-YINx4jBuanxB&gclid=CjwKCAiA0eTJBhBaEiwA-Pa-hWqUWOSSTLdYaW8kalFJc4-hppJRdVg32nnF6Kt3Yp9414AFEu3zpBoCV8AQAvD_BwE&gclsrc=aw.ds",
  },
  {
    id: 29,
    category: "Health",
    subcategory: "Supplements",
    name: "Gold Standard 100% Casein Protein Powder",
    reason: "Slow-digesting protein prevents muscle breakdown during sleep.",
    frequency: "Daily (Before Bed)",
    icon: <Milk className="w-6 h-6" />,
    color: "text-orange-500",
    bg: "bg-orange-50 dark:bg-orange-900/20",
    price: "$$",
    link: "https://www.optimumnutrition.com/en-gb/products/gold-standard-100-casein-protein-powder-eu",
  },
  {
    id: 30,
    category: "Health",
    subcategory: "Supplements",
    name: "Optimum Nutrition Electrolyte Powder",
    reason:
      "Replenishes minerals lost during training to maintain performance and hydration.",
    frequency: "Intra-Workout",
    icon: <Zap className="w-6 h-6" />,
    color: "text-orange-500",
    bg: "bg-orange-50 dark:bg-orange-900/20",
    price: "$",
    link: "https://www.optimumnutrition.com/en-gb/products/electrolyte-powder?_pos=1&_psq=Electro&_ss=e&_v=1.0",
  },

  // NUTRITION
  {
    id: 8,
    category: "Health",
    subcategory: "Nutrition",
    name: "MyFitnessPal",
    reason:
      "Large database for tracking calories. Essential for understanding portion sizes and macro composition.",
    frequency: "Daily (Every meal)",
    note: "Application",
    icon: <Utensils className="w-6 h-6" />,
    color: "text-green-500",
    bg: "bg-green-50 dark:bg-green-900/20",
    price: "Free/$$",
    appleLink:
      "https://apps.apple.com/us/app/myfitnesspal-calorie-counter/id341232718",
    androidLink:
      "https://play.google.com/store/apps/details?id=com.myfitnesspal.android&rdid=com.myfitnesspal.android&pli=1",
  },
  {
    id: 22,
    category: "Health",
    subcategory: "Nutrition",
    name: "MacroFactor",
    reason:
      "Adherence-neutral calorie tracker that adapts to your metabolism dynamically.",
    frequency: "Daily (Every meal)",
    note: "Application",
    icon: <Utensils className="w-6 h-6" />,
    color: "text-green-500",
    bg: "bg-green-50 dark:bg-green-900/20",
    price: "$$",
    appleLink:
      "https://apps.apple.com/us/app/macrofactor-macro-tracker/id1553503471",
    androidLink:
      "https://play.google.com/store/apps/details?id=com.sbs.diet&hl=en_GB",
  },

  // FINANCE
  {
    id: 9,
    category: "Wealth",
    subcategory: "Finance",
    name: "YNAB (You Need A Budget)",
    reason:
      "Shifts mindset from tracking past spending to allocating future money. Stops lifestyle creep.",
    frequency: "Weekly Reconciliation",
    icon: <Wallet className="w-6 h-6" />,
    color: "text-emerald-500",
    bg: "bg-emerald-50 dark:bg-emerald-900/20",
    price: "$$/yr",
  },
  {
    id: 10,
    category: "Wealth",
    subcategory: "Finance",
    name: "S&P 500 ETF (VOO)",
    reason:
      "The math-based approach to wealth. Low expense ratio, historical compound growth.",
    frequency: "Monthly (Automated)",
    icon: <Wallet className="w-6 h-6" />,
    color: "text-emerald-500",
    bg: "bg-emerald-50 dark:bg-emerald-900/20",
    price: "$$$",
    hideButton: true,
  },
  {
    id: 23,
    category: "Wealth",
    subcategory: "Finance",
    name: "High Yield Savings Account",
    reason: "Risk-free return. Inflation hedge for liquidity.",
    frequency: "Monthly (Automated)",
    note: "Liquid",
    icon: <Wallet className="w-6 h-6" />,
    color: "text-emerald-500",
    bg: "bg-emerald-50 dark:bg-emerald-900/20",
    price: "Free",
    hideButton: true,
  },
  {
    id: 24,
    category: "Wealth",
    subcategory: "Finance",
    name: "Real Estate / Property",
    reason:
      "Appreciating hard asset. Provides leverage and potential cash flow.",
    frequency: "Long-term",
    note: "Asset",
    icon: <Wallet className="w-6 h-6" />,
    color: "text-emerald-500",
    bg: "bg-emerald-50 dark:bg-emerald-900/20",
    price: "$$$$",
    hideButton: true,
  },
  {
    id: 31,
    category: "Wealth",
    subcategory: "Finance",
    name: "Workplace Pension",
    reason:
      "Contributed by the worker then either matched percentage or lower by the employer. Essential tax-efficient saving.",
    frequency: "Monthly (Automated)",
    note: "Matched",
    icon: <Wallet className="w-6 h-6" />,
    color: "text-emerald-500",
    bg: "bg-emerald-50 dark:bg-emerald-900/20",
    price: "%",
    hideButton: true,
  },

  // LIFESTYLE
  {
    id: 25,
    category: "Lifestyle",
    subcategory: "Fashion",
    name: "White Leather Sneakers (Common Projects / Koio)",
    reason: "Versatile foundation for almost any outfit.",
    frequency: "Daily",
    note: "Essential",
    icon: <Sparkles className="w-6 h-6" />,
    color: "text-pink-500",
    bg: "bg-pink-50 dark:bg-pink-900/20",
    price: "$$",
  },
  {
    id: 26,
    category: "Lifestyle",
    subcategory: "Fashion",
    name: "Tailored Navy Suit",
    reason: "The standard for formal competence. Fit is everything.",
    frequency: "As needed",
    note: "Essential",
    icon: <Sparkles className="w-6 h-6" />,
    color: "text-pink-500",
    bg: "bg-pink-50 dark:bg-pink-900/20",
    price: "$$$",
  },
  {
    id: 27,
    category: "Lifestyle",
    subcategory: "Fashion",
    name: "Merino Wool Tee",
    reason: "Technical fabric performance with natural aesthetics.",
    frequency: "Daily",
    note: "Daily",
    icon: <Sparkles className="w-6 h-6" />,
    color: "text-pink-500",
    bg: "bg-pink-50 dark:bg-pink-900/20",
    price: "$",
  },

  // SKIN
  {
    id: 11,
    category: "Aesthetics",
    subcategory: "Skin",
    name: "Cerave PM Moisturizer",
    reason:
      "Contains Niacinamide to reduce redness. Oil-free, so it won't cause breakouts.",
    frequency: "2x Daily (AM/PM)",
    icon: <Sparkles className="w-6 h-6" />,
    color: "text-purple-500",
    bg: "bg-purple-50 dark:bg-purple-900/20",
    price: "$",
  },
  {
    id: 15,
    category: "Aesthetics",
    subcategory: "Skin",
    name: "Wellman Anti-Ageing Moisturiser",
    reason:
      "Specifically formulated for men's skin with Retinol and antioxidants to reduce wrinkles.",
    frequency: "Daily (PM)",
    icon: <Sparkles className="w-6 h-6" />,
    color: "text-purple-500",
    bg: "bg-purple-50 dark:bg-purple-900/20",
    price: "$$",
    link: "https://www.vitabiotics.com/products/wellman-anti-ageing-moisturiser?srsltid=AfmBOoohqKUJvA6fupCxU_-OrWyvAS16Tr6eW1AdX7DlX0yknb31AXvp",
  },
  {
    id: 16,
    category: "Aesthetics",
    subcategory: "Skin",
    name: "SPF 50+ Sunscreen (La Roche-Posay)",
    reason:
      "UV radiation is responsible for 80% of visible skin aging. Daily protection is non-negotiable.",
    frequency: "Daily (AM)",
    icon: <Sparkles className="w-6 h-6" />,
    color: "text-purple-500",
    bg: "bg-purple-50 dark:bg-purple-900/20",
    price: "$$",
  },

  // GROOMING
  {
    id: 12,
    category: "Aesthetics",
    subcategory: "Grooming",
    name: "Philips Beardtrimmer 9000 Prestige",
    reason: "Ultimate steel precision for beard styling and trimming.",
    frequency: "As needed",
    icon: <Sparkles className="w-6 h-6" />,
    color: "text-purple-500",
    bg: "bg-purple-50 dark:bg-purple-900/20",
    price: "$$$",
    link: "https://www.philips.co.uk/c-p/BT9810_13/beard-trimmer-9000-prestige-beard-trimmer",
  },
  {
    id: 18,
    category: "Aesthetics",
    subcategory: "Grooming",
    name: "Philips Shaver S9000 Prestige",
    reason: "Long-lasting close shave, intelligent skin comfort.",
    frequency: "Daily/As needed",
    icon: <Sparkles className="w-6 h-6" />,
    color: "text-purple-500",
    bg: "bg-purple-50 dark:bg-purple-900/20",
    price: "$$$",
    link: "https://www.philips.co.uk/c-m-pe/face-shavers/latest?utm_id=20866219588&origin=7_9164824656_20866219588_156586002653_295615961976&gclsrc=aw.ds&gad_source=1&gad_campaignid=20866219588&gbraid=0AAAAAD9m5bD6Kie5I6hlUipmsLFxvQeOG&gclid=CjwKCAiA0eTJBhBaEiwA-Pa-haD7DlsXruA9b0IcTWFBP3vD1eB2H_UfsXvclQUod4ZflQUlfb0PjBoCq2EQAvD_BwE#availability=instock&filters=FK_MG_23_SERIES",
  },
  {
    id: 34,
    category: "Aesthetics",
    subcategory: "Grooming",
    name: "Phillips Head Shaver Pro 9000 Series",
    reason: "Essential shaver with comfortcut.",
    frequency: "As needed",
    icon: <Sparkles className="w-6 h-6" />,
    color: "text-purple-500",
    bg: "bg-purple-50 dark:bg-purple-900/20",
    price: "$$$",
    link: "https://www.philips.co.uk/c-p/HS5980_15/head-shaver-pro-5000-series-essential-shaver-with-comfortcut",
  },

  // HAIR
  {
    id: 14,
    category: "Aesthetics",
    subcategory: "Hair",
    name: "Propecia / Avodart (Finasteride / Dutasteride)",
    reason:
      "5-alpha reductase inhibitors are the only clinically proven way to stop the hormonal cause of hair loss (DHT).",
    frequency: "Daily (Prescription)",
    sideEffect:
      "Potential sexual side effects (1-2%), brain fog, or mood changes. Consult a doctor.",
    note: "Genetic",
    icon: <Sparkles className="w-6 h-6" />,
    color: "text-purple-500",
    bg: "bg-purple-50 dark:bg-purple-900/20",
    price: "$$",
    hideButton: true,
  },
  {
    id: 17,
    category: "Aesthetics",
    subcategory: "Hair",
    name: "Rogaine (Minoxidil)",
    reason:
      "Vasodilator that extends the anagen growth phase of hair follicles. Works best in combination with 5AR inhibitors.",
    frequency: "2x Daily (Topical)",
    note: "Genetic",
    icon: <Sparkles className="w-6 h-6" />,
    color: "text-purple-500",
    bg: "bg-purple-50 dark:bg-purple-900/20",
    price: "$",
    hideButton: true,
  },
  {
    id: 19,
    category: "Aesthetics",
    subcategory: "Hair",
    name: "Pyrilutimide (KX-826)",
    reason:
      "Topical Androgen Receptor antagonist that prevents DHT binding in the scalp.",
    frequency: "1-2x Daily (Topical)",
    sideEffect: "Limited long-term safety data. Consult a doctor.",
    note: "Genetic",
    icon: <Sparkles className="w-6 h-6" />,
    color: "text-purple-500",
    bg: "bg-purple-50 dark:bg-purple-900/20",
    price: "$$$",
    hideButton: true,
  },

  // ACNE / SKIN
  {
    id: 20,
    category: "Aesthetics",
    subcategory: "Skin",
    name: "Accutane / Roaccutane (Isotretinoin)",
    reason:
      "The only drug that permanently alters oil production and cures severe nodular acne.",
    frequency: "Daily (Prescription Course)",
    sideEffect:
      "Extreme dryness, potential mood changes, birth defects (teratogenic). Strict medical supervision required.",
    note: "Genetic",
    icon: <Sparkles className="w-6 h-6" />,
    color: "text-purple-500",
    bg: "bg-purple-50 dark:bg-purple-900/20",
    price: "$$$",
    hideButton: true,
  },
  {
    id: 21,
    category: "Aesthetics",
    subcategory: "Skin",
    name: "Retin-A (Tretinoin)",
    reason:
      "Increases cell turnover to prevent pore clogging. Gold standard for acne and anti-aging.",
    frequency: "Daily (PM)",
    sideEffect: "Purging phase, dryness, sun sensitivity.",
    note: "Genetic",
    icon: <Sparkles className="w-6 h-6" />,
    color: "text-purple-500",
    bg: "bg-purple-50 dark:bg-purple-900/20",
    price: "$",
    hideButton: true,
  },
  {
    id: 32,
    category: "Aesthetics",
    subcategory: "Teeth",
    name: "Crest 3D Whitestrips",
    reason:
      "Effective teeth whitening. Adjust levels based on tolerance, if sensitive use Crest 3DWhitestrips Sensitive.",
    frequency: "As needed",
    icon: <Smile className="w-6 h-6" />,
    color: "text-purple-500",
    bg: "bg-purple-50 dark:bg-purple-900/20",
    price: "$$",
    link: "https://crest.com/en-us/oral-care-products/3d-whitestrips-glamorous-white",
  },
];

export const mainCategories = [
  "All",
  "Health",
  "Wealth",
  "Aesthetics",
  "Lifestyle",
];

export const hierarchy: Record<string, string[]> = {
  Health: ["All", "Oral", "Fitness", "Nutrition", "Supplements"],
  Wealth: ["All", "Finance"],
  Aesthetics: ["All", "Grooming", "Hair", "Skin", "Teeth"],
  Lifestyle: ["All", "Fashion"],
};

// Protocol Bundles - Curated stacks for specific goals
export const bundles: Bundle[] = [
  {
    id: "oral-health",
    name: "Complete Oral Health Protocol",
    description:
      "Everything you need for optimal dental hygiene. Prevents cavities, gum disease, and bad breath.",
    productIds: [1, 2, 3, 4, 33],
    icon: <Smile className="w-6 h-6" />,
    color: "text-cyan-500",
    bg: "bg-gradient-to-br from-cyan-50 to-blue-100 dark:from-cyan-900/20 dark:to-blue-900/20",
  },
  {
    id: "anti-aging",
    name: "Anti-Aging Skin Stack",
    description:
      "Science-backed products to slow visible aging. Protect, repair, and renew your skin daily.",
    productIds: [11, 15, 16, 21],
    icon: <Sparkles className="w-6 h-6" />,
    color: "text-blue-500",
    bg: "bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20",
  },
  {
    id: "fitness-essentials",
    name: "Fitness Essentials",
    description:
      "The foundation for any training program. Build muscle, recover faster, and track progress.",
    productIds: [5, 6, 7, 28, 30],
    icon: <Dumbbell className="w-6 h-6" />,
    color: "text-orange-500",
    bg: "bg-gradient-to-br from-orange-50 to-amber-100 dark:from-orange-900/20 dark:to-amber-900/20",
  },
  {
    id: "wealth-building",
    name: "Wealth Building Fundamentals",
    description:
      "The proven path to financial independence. Budget, invest, and grow your net worth systematically.",
    productIds: [9, 10, 23, 31],
    icon: <Wallet className="w-6 h-6" />,
    color: "text-emerald-500",
    bg: "bg-gradient-to-br from-emerald-50 to-teal-100 dark:from-emerald-900/20 dark:to-teal-900/20",
  },
];

// Tier assignments for key products (essential = must-have, advanced = optimization, optional = nice-to-have)
export const productTiers: Record<number, ProductTier> = {
  // Oral - essential basics
  1: "essential", // Electric toothbrush
  2: "essential", // Toothpaste
  3: "advanced", // Mouthwash
  4: "essential", // Tongue scraper
  33: "advanced", // Interdental brush

  // Fitness/Supplements
  5: "optional", // Insanity
  6: "optional", // P90X
  7: "essential", // Creatine
  13: "essential", // Multivitamin
  28: "advanced", // Hydrowhey
  29: "optional", // Casein
  30: "optional", // Electrolytes

  // Nutrition
  8: "essential", // MyFitnessPal
  22: "advanced", // MacroFactor

  // Finance
  9: "essential", // YNAB
  10: "essential", // S&P 500
  23: "essential", // HYSA
  24: "advanced", // Real Estate
  31: "essential", // Workplace pension

  // Skin
  11: "essential", // Cerave
  15: "advanced", // Wellman
  16: "essential", // Sunscreen
  20: "advanced", // Accutane
  21: "advanced", // Tretinoin

  // Grooming
  12: "optional", // Beardtrimmer
  18: "optional", // Shaver
  34: "optional", // Head shaver

  // Hair
  14: "advanced", // Finasteride
  17: "advanced", // Minoxidil
  19: "optional", // Pyrilutimide

  // Fashion
  25: "essential", // Sneakers
  26: "advanced", // Suit
  27: "optional", // Merino tee

  // Teeth
  32: "optional", // Whitestrips
};

// Helper to get tier for a product
export const getProductTier = (productId: number): ProductTier => {
  return productTiers[productId] || "optional";
};
