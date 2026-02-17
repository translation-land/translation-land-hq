// Centralized pricing data for consistency across PricingTable, Calculator, and ServicesPreview

export type LanguageDirection = "en-to-fa" | "fa-to-en";

export interface QualityLevel {
  key: string;
  label: string;
  labelEn: string;
  rate: number; // toman per word
  features: { text: string; included: boolean }[];
  deliveryTime: string;
  badge?: string;
  popular?: boolean;
}

export interface FieldMultiplier {
  label: string;
  fields: string[];
  multiplier: number;
}

export const enToFaLevels: QualityLevel[] = [
  {
    key: "base",
    label: "پایه",
    labelEn: "Base",
    rate: 55,
    deliveryTime: "۷-۱۰ روز",
    features: [
      { text: "مترجم تازه‌کار", included: true },
      { text: "بازبینی ۱ مرحله", included: true },
      { text: "زمان تحویل: ۷-۱۰ روز", included: true },
      { text: "گارانتی ۳۰ روز", included: true },
      { text: "ویرایش رایگان ۱ بار", included: true },
      { text: "ویرایش نیتیو", included: false },
      { text: "مشاوره چاپ", included: false },
    ],
  },
  {
    key: "professional",
    label: "حرفه‌ای",
    labelEn: "Professional",
    rate: 120,
    deliveryTime: "۴-۶ روز",
    badge: "پرفروش‌ترین",
    popular: true,
    features: [
      { text: "مترجم با تجربه", included: true },
      { text: "بازبینی ۲ مرحله", included: true },
      { text: "زمان تحویل: ۴-۶ روز", included: true },
      { text: "گارانتی ۹۰ روز", included: true },
      { text: "ویرایش رایگان ۲ بار", included: true },
      { text: "چک سرقت علمی", included: true },
      { text: "ویرایش نیتیو", included: false },
    ],
  },
  {
    key: "premium",
    label: "پریمیوم",
    labelEn: "Premium",
    rate: 200,
    deliveryTime: "۲-۳ روز",
    badge: "پیشنهاد ویژه",
    features: [
      { text: "متخصص ۱۰+ سال", included: true },
      { text: "بازبینی ۳ مرحله", included: true },
      { text: "زمان تحویل: ۲-۳ روز", included: true },
      { text: "گارانتی تا زمان چاپ", included: true },
      { text: "ویرایش رایگان نامحدود", included: true },
      { text: "ویرایش نیتیو", included: true },
      { text: "مشاوره چاپ مقاله", included: true },
    ],
  },
];

export const faToEnLevels: QualityLevel[] = [
  {
    key: "professional",
    label: "حرفه‌ای",
    labelEn: "Professional",
    rate: 220,
    deliveryTime: "۵-۷ روز",
    popular: true,
    badge: "پرفروش‌ترین",
    features: [
      { text: "مترجم با تجربه", included: true },
      { text: "بازبینی ۲ مرحله", included: true },
      { text: "زمان تحویل: ۵-۷ روز", included: true },
      { text: "گارانتی ۹۰ روز", included: true },
      { text: "ویرایش رایگان ۲ بار", included: true },
      { text: "چک سرقت علمی", included: true },
      { text: "ویرایش نیتیو", included: false },
    ],
  },
  {
    key: "premium",
    label: "پریمیوم",
    labelEn: "Premium",
    rate: 380,
    deliveryTime: "۳-۵ روز",
    badge: "پیشنهاد ویژه",
    features: [
      { text: "متخصص ۱۰+ سال", included: true },
      { text: "بازبینی ۳ مرحله", included: true },
      { text: "زمان تحویل: ۳-۵ روز", included: true },
      { text: "گارانتی تا زمان چاپ", included: true },
      { text: "ویرایش رایگان نامحدود", included: true },
      { text: "ویرایش نیتیو رایگان", included: true },
      { text: "مشاوره چاپ مقاله", included: true },
    ],
  },
];

export const fieldMultipliers: FieldMultiplier[] = [
  { label: "عمومی", fields: ["عمومی"], multiplier: 1.0 },
  { label: "اقتصاد، معدن، صنایع، مکانیک، نفت و گاز", fields: ["اقتصاد", "معدن", "مهندسی صنایع", "مهندسی مکانیک", "نفت و گاز"], multiplier: 1.1 },
  { label: "برق، حسابداری، زیست‌شناسی، عمران، کامپیوتر، مدیریت، معماری", fields: ["مهندسی برق", "حسابداری", "زیست‌شناسی", "مهندسی عمران", "مهندسی کامپیوتر", "مدیریت", "معماری"], multiplier: 1.15 },
  { label: "پزشکی، شیمی، داروسازی", fields: ["پزشکی", "شیمی", "داروسازی"], multiplier: 1.2 },
  { label: "علوم سیاسی", fields: ["علوم سیاسی"], multiplier: 1.25 },
  { label: "ادبیات و زبان‌شناسی", fields: ["ادبیات", "زبان‌شناسی"], multiplier: 1.3 },
  { label: "حقوق، فلسفه", fields: ["حقوق", "فلسفه"], multiplier: 1.4 },
  { label: "علوم پایه (ریاضی، فیزیک)", fields: ["ریاضیات", "فیزیک"], multiplier: 1.5 },
];

export const extras = [
  { label: "ویرایش نیتیو", pricePerWord: 50, flatPrice: null },
  { label: "پارافریز", flatPrice: 20000, pricePerWord: null },
  { label: "تحویل فوری (۲۴-۴۸ ساعت)", flatPrice: 30000, pricePerWord: null },
];

export const nativeEditingRate = 50; // toman per word

export function calculatePrice(
  wordCount: number,
  direction: LanguageDirection,
  qualityIndex: number,
  fieldMultiplier: number,
  selectedExtras: boolean[]
): number {
  const levels = direction === "en-to-fa" ? enToFaLevels : faToEnLevels;
  const level = levels[qualityIndex];
  if (!level) return 0;

  const base = wordCount * level.rate * fieldMultiplier;
  const extrasTotal = selectedExtras.reduce((sum, sel, i) => {
    if (!sel) return sum;
    const ex = extras[i];
    if (ex.pricePerWord) return sum + wordCount * ex.pricePerWord;
    if (ex.flatPrice) return sum + ex.flatPrice;
    return sum;
  }, 0);

  return Math.round(base + extrasTotal);
}
