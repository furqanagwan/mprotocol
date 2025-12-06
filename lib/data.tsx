import React from 'react';
import {
    Smile,
    Dumbbell,
    Wallet,
    Sparkles,
    Utensils,
} from 'lucide-react';

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
}

export const products: Product[] = [
    // Oral
    {
        id: 1,
        category: 'Health',
        subcategory: 'Oral',
        name: 'Sonicare DiamondClean',
        reason: 'Manual brushing fails to break up biofilm. Sonic vibrations (62k/min) force fluid between teeth.',
        frequency: '2x Daily (Morning & Night)',
        icon: <Smile className="w-6 h-6" />,
        color: 'text-cyan-500',
        bg: 'bg-cyan-50 dark:bg-cyan-900/20',
        price: '$$$'
    },
    {
        id: 2,
        category: 'Health',
        subcategory: 'Oral',
        name: 'Crest Pro-Health Advanced Gum Protection',
        reason: 'Contains Stannous Fluoride which is more effective against gingivitis and plaque than sodium fluoride.',
        frequency: '2x Daily',
        icon: <Smile className="w-6 h-6" />,
        color: 'text-cyan-500',
        bg: 'bg-cyan-50 dark:bg-cyan-900/20',
        price: '$'
    },
    {
        id: 3,
        category: 'Health',
        subcategory: 'Oral',
        name: 'Crest Pro-Health Multi-Protection',
        reason: 'Contains CPC (Cetylpyridinium Chloride) which is a proven antigingivitis and antiplaque agent.',
        frequency: '1x Daily (Before brushing)',
        icon: <Smile className="w-6 h-6" />,
        color: 'text-cyan-500',
        bg: 'bg-cyan-50 dark:bg-cyan-900/20',
        price: '$'
    },
    {
        id: 4,
        category: 'Health',
        subcategory: 'Oral',
        name: 'Copper Tongue Scraper',
        reason: '90% of bad breath originates from the back of the tongue. Copper is naturally antimicrobial.',
        frequency: '1x Daily (First thing AM)',
        icon: <Smile className="w-6 h-6" />,
        color: 'text-cyan-500',
        bg: 'bg-cyan-50 dark:bg-cyan-900/20',
        price: '$'
    },

    // FITNESS
    {
        id: 5,
        category: 'Health',
        subcategory: 'Fitness',
        name: 'HIIT Cardio',
        reason: 'High Intensity Interval Training improves VO2 max and metabolic rate more efficiently than steady state.',
        frequency: 'Daily (30-60 mins)',
        icon: <Dumbbell className="w-6 h-6" />,
        color: 'text-orange-500',
        bg: 'bg-orange-50 dark:bg-orange-900/20',
        price: 'Free'
    },
    {
        id: 6,
        category: 'Health',
        subcategory: 'Fitness',
        name: 'Weight Lifting Protocol',
        reason: 'Resistance training is the only natural way to maintain bone density and muscle mass as you age.',
        frequency: '4x Week (Split Routine)',
        icon: <Dumbbell className="w-6 h-6" />,
        color: 'text-orange-500',
        bg: 'bg-orange-50 dark:bg-orange-900/20',
        price: '$$'
    },
    {
        id: 7,
        category: 'Health',
        subcategory: 'Supplements',
        name: 'Creatine Monohydrate',
        reason: 'The most researched supplement. Boosts ATP for strength and improves cognitive function.',
        frequency: 'Daily (5g scoop)',
        icon: <Dumbbell className="w-6 h-6" />,
        color: 'text-orange-500',
        bg: 'bg-orange-50 dark:bg-orange-900/20',
        price: '$'
    },
    {
        id: 13,
        category: 'Health',
        subcategory: 'Supplements',
        name: 'Multivitamin',
        reason: 'Fills nutritional gaps in modern diets. Ensures baseline micronutrient sufficiency.',
        frequency: 'Daily (Morning)',
        icon: <Dumbbell className="w-6 h-6" />,
        color: 'text-orange-500',
        bg: 'bg-orange-50 dark:bg-orange-900/20',
        price: '$$'
    },

    // NUTRITION
    {
        id: 8,
        category: 'Health',
        subcategory: 'Nutrition',
        name: 'MyFitnessPal',
        reason: 'Large database for tracking calories. Essential for understanding portion sizes and macro composition.',
        frequency: 'Daily (Every meal)',
        note: 'APP, iOS & Android',
        icon: <Utensils className="w-6 h-6" />,
        color: 'text-green-500',
        bg: 'bg-green-50 dark:bg-green-900/20',
        price: 'Free/$$'
    },
    {
        id: 22,
        category: 'Health',
        subcategory: 'Nutrition',
        name: 'MacroFactor',
        reason: 'Adherence-neutral calorie tracker that adapts to your metabolism dynamically.',
        frequency: 'Daily (Every meal)',
        note: 'APP, iOS & Android',
        icon: <Utensils className="w-6 h-6" />,
        color: 'text-green-500',
        bg: 'bg-green-50 dark:bg-green-900/20',
        price: '$$'
    },

    // FINANCE
    {
        id: 9,
        category: 'Wealth',
        subcategory: 'Finance',
        name: 'YNAB (You Need A Budget)',
        reason: 'Shifts mindset from tracking past spending to allocating future money. Stops lifestyle creep.',
        frequency: 'Weekly Reconciliation',
        icon: <Wallet className="w-6 h-6" />,
        color: 'text-emerald-500',
        bg: 'bg-emerald-50 dark:bg-emerald-900/20',
        price: '$$/yr'
    },
    {
        id: 10,
        category: 'Wealth',
        subcategory: 'Finance',
        name: 'S&P 500 ETF (VOO)',
        reason: 'The math-based approach to wealth. Low expense ratio, historical compound growth.',
        frequency: 'Monthly (Automated)',
        icon: <Wallet className="w-6 h-6" />,
        color: 'text-emerald-500',
        bg: 'bg-emerald-50 dark:bg-emerald-900/20',
        price: '$$$'
    },
    {
        id: 23,
        category: 'Wealth',
        subcategory: 'Finance',
        name: 'High Yield Savings Account',
        reason: 'Risk-free return. Inflation hedge for liquidity.',
        frequency: 'Monthly (Automated)',
        note: 'Liquid',
        icon: <Wallet className="w-6 h-6" />,
        color: 'text-emerald-500',
        bg: 'bg-emerald-50 dark:bg-emerald-900/20',
        price: 'Free'
    },
    {
        id: 24,
        category: 'Wealth',
        subcategory: 'Finance',
        name: 'Real Estate / Property',
        reason: 'Appreciating hard asset. Provides leverage and potential cash flow.',
        frequency: 'Long-term',
        note: 'Asset',
        icon: <Wallet className="w-6 h-6" />,
        color: 'text-emerald-500',
        bg: 'bg-emerald-50 dark:bg-emerald-900/20',
        price: '$$$$'
    },

    // LIFESTYLE
    {
        id: 25,
        category: 'Lifestyle',
        subcategory: 'Fashion',
        name: 'White Leather Sneakers (Common Projects / Koio)',
        reason: 'Versatile foundation for almost any outfit.',
        frequency: 'Daily',
        note: 'Essential',
        icon: <Sparkles className="w-6 h-6" />,
        color: 'text-pink-500',
        bg: 'bg-pink-50 dark:bg-pink-900/20',
        price: '$$'
    },
    {
        id: 26,
        category: 'Lifestyle',
        subcategory: 'Fashion',
        name: 'Tailored Navy Suit',
        reason: 'The standard for formal competence. Fit is everything.',
        frequency: 'As needed',
        note: 'Essential',
        icon: <Sparkles className="w-6 h-6" />,
        color: 'text-pink-500',
        bg: 'bg-pink-50 dark:bg-pink-900/20',
        price: '$$$'
    },
    {
        id: 27,
        category: 'Lifestyle',
        subcategory: 'Fashion',
        name: 'Merino Wool Tee',
        reason: 'Technical fabric performance with natural aesthetics.',
        frequency: 'Daily',
        note: 'Daily',
        icon: <Sparkles className="w-6 h-6" />,
        color: 'text-pink-500',
        bg: 'bg-pink-50 dark:bg-pink-900/20',
        price: '$'
    },

    // SKIN
    {
        id: 11,
        category: 'Aesthetics',
        subcategory: 'Skin',
        name: 'Cerave PM Moisturizer',
        reason: 'Contains Niacinamide to reduce redness. Oil-free, so it won\'t cause breakouts.',
        frequency: '2x Daily (AM/PM)',
        icon: <Sparkles className="w-6 h-6" />,
        color: 'text-purple-500',
        bg: 'bg-purple-50 dark:bg-purple-900/20',
        price: '$'
    },
    {
        id: 15,
        category: 'Aesthetics',
        subcategory: 'Skin',
        name: 'Wellman Anti-Ageing Moisturiser',
        reason: 'Specifically formulated for men\'s skin with Retinol and antioxidants to reduce wrinkles.',
        frequency: 'Daily (PM)',
        icon: <Sparkles className="w-6 h-6" />,
        color: 'text-purple-500',
        bg: 'bg-purple-50 dark:bg-purple-900/20',
        price: '$$'
    },
    {
        id: 16,
        category: 'Aesthetics',
        subcategory: 'Skin',
        name: 'SPF 50+ Sunscreen (La Roche-Posay)',
        reason: 'UV radiation is responsible for 80% of visible skin aging. Daily protection is non-negotiable.',
        frequency: 'Daily (AM)',
        icon: <Sparkles className="w-6 h-6" />,
        color: 'text-purple-500',
        bg: 'bg-purple-50 dark:bg-purple-900/20',
        price: '$$'
    },

    // GROOMING
    {
        id: 12,
        category: 'Aesthetics',
        subcategory: 'Grooming',
        name: 'Philips Beardtrimmer 9000 Prestige',
        reason: 'Ultimate steel precision for beard styling and trimming.',
        frequency: 'As needed',
        icon: <Sparkles className="w-6 h-6" />,
        color: 'text-purple-500',
        bg: 'bg-purple-50 dark:bg-purple-900/20',
        price: '$$$'
    },
    {
        id: 18,
        category: 'Aesthetics',
        subcategory: 'Grooming',
        name: 'Philips Shaver S9000 Prestige',
        reason: 'Long-lasting close shave, intelligent skin comfort.',
        frequency: 'Daily/As needed',
        icon: <Sparkles className="w-6 h-6" />,
        color: 'text-purple-500',
        bg: 'bg-purple-50 dark:bg-purple-900/20',
        price: '$$$'
    },

    // HAIR
    {
        id: 14,
        category: 'Aesthetics',
        subcategory: 'Hair',
        name: 'Propecia / Avodart (Finasteride / Dutasteride)',
        reason: '5-alpha reductase inhibitors are the only clinically proven way to stop the hormonal cause of hair loss (DHT).',
        frequency: 'Daily (Prescription)',
        sideEffect: 'Potential sexual side effects (1-2%), brain fog, or mood changes. Consult a doctor.',
        note: 'Genetic',
        icon: <Sparkles className="w-6 h-6" />,
        color: 'text-purple-500',
        bg: 'bg-purple-50 dark:bg-purple-900/20',
        price: '$$'
    },
    {
        id: 17,
        category: 'Aesthetics',
        subcategory: 'Hair',
        name: 'Rogaine (Minoxidil)',
        reason: 'Vasodilator that extends the anagen growth phase of hair follicles. Works best in combination with 5AR inhibitors.',
        frequency: '2x Daily (Topical)',
        note: 'Genetic',
        icon: <Sparkles className="w-6 h-6" />,
        color: 'text-purple-500',
        bg: 'bg-purple-50 dark:bg-purple-900/20',
        price: '$'
    },
    {
        id: 19,
        category: 'Aesthetics',
        subcategory: 'Hair',
        name: 'Pyrilutimide (KX-826)',
        reason: 'Topical Androgen Receptor antagonist that prevents DHT binding in the scalp.',
        frequency: '1-2x Daily (Topical)',
        sideEffect: 'Limited long-term safety data. Consult a doctor.',
        note: 'Genetic',
        icon: <Sparkles className="w-6 h-6" />,
        color: 'text-purple-500',
        bg: 'bg-purple-50 dark:bg-purple-900/20',
        price: '$$$'
    },

    // ACNE / SKIN
    {
        id: 20,
        category: 'Aesthetics',
        subcategory: 'Skin',
        name: 'Accutane / Roaccutane (Isotretinoin)',
        reason: 'The only drug that permanently alters oil production and cures severe nodular acne.',
        frequency: 'Daily (Prescription Course)',
        sideEffect: 'Extreme dryness, potential mood changes, birth defects (teratogenic). Strict medical supervision required.',
        note: 'Genetic',
        icon: <Sparkles className="w-6 h-6" />,
        color: 'text-purple-500',
        bg: 'bg-purple-50 dark:bg-purple-900/20',
        price: '$$$'
    },
    {
        id: 21,
        category: 'Aesthetics',
        subcategory: 'Skin',
        name: 'Retin-A (Tretinoin)',
        reason: 'Increases cell turnover to prevent pore clogging. Gold standard for acne and anti-aging.',
        frequency: 'Daily (PM)',
        sideEffect: 'Purging phase, dryness, sun sensitivity.',
        note: 'Genetic',
        icon: <Sparkles className="w-6 h-6" />,
        color: 'text-purple-500',
        bg: 'bg-purple-50 dark:bg-purple-900/20',
        price: '$'
    }
];

export const mainCategories = ['All', 'Health', 'Wealth', 'Aesthetics', 'Lifestyle'];

export const hierarchy: Record<string, string[]> = {
    'Health': ['All', 'Oral', 'Fitness', 'Nutrition', 'Supplements'],
    'Wealth': ['All', 'Finance'],
    'Aesthetics': ['All', 'Grooming', 'Hair', 'Skin'],
    'Lifestyle': ['All', 'Fashion']
};
