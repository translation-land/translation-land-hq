

# SEO Optimization + Competitor Pricing Structure

## Overview
Optimize all pages for the 8 target keywords and restructure pricing based on Tarjomano's competitor data (per-word pricing with field-specific multipliers).

---

## Competitor Pricing Data (Tarjomano)

Scraped from tarjomano.com:

### English to Persian (per word)
| Level | Original | Discounted |
|-------|----------|-----------|
| Average | 80 | 64 toman |
| Good | 150 | 135 toman |
| Excellent | 250 | 224 toman |

### Persian to English (per word)
| Level | Original | Discounted |
|-------|----------|-----------|
| Good | 280 | 245 toman |
| Excellent | 500 | 425 toman |

### Native Editing: 350 -> 325 toman/word

### Field Multipliers
| Field | Multiplier |
|-------|-----------|
| Economics, Mining, Industrial, Mechanical, Oil & Gas | 1.1x |
| Electrical, Accounting, Biology, Civil, CS, Management, Architecture | 1.15x |
| Medical, Chemistry, Pharmacy | 1.2x |
| Political Science | 1.25x |
| Literature & Linguistics | 1.3x |
| Law, Philosophy | 1.4x |
| Pure Sciences (Algebra, Physics) | 1.5x |

---

## SEO Keyword Injection Plan

### Target Keywords
1. "ترجمه انگلیسی به فارسی"
2. "سایت ترجمه مقاله"
3. "ترجمه فارسی به انگلیسی"
4. "مقاله انگلیسی"
5. "ترجمه رسمی"
6. "خدمات ترجمه"
7. "هوش مصنوعی برای ترجمه مقاله"

### Changes Per File

**1. `index.html`** -- Update meta description to include more keywords

**2. `src/pages/Index.tsx`** -- Add keywords to SEO component; update orgSchema and faqSchema with richer keyword-laden answers; add new FAQ items about AI translation and official translation

**3. `src/components/home/Hero.tsx`** -- Weave keywords into H1/H2 subtitles and stat labels (e.g., "بهترین سایت ترجمه مقاله")

**4. `src/components/home/ServicesPreview.tsx`** -- Add "ترجمه رسمی" as a 4th service card; enrich descriptions with target keywords like "مقاله انگلیسی"

**5. `src/components/home/WhyUs.tsx`** -- Add keyword-rich subtitle mentioning "خدمات ترجمه" and "هوش مصنوعی"

**6. `src/components/home/FAQ.tsx`** -- Add 3 new FAQ items targeting: "هوش مصنوعی برای ترجمه مقاله", "ترجمه رسمی", "سایت ترجمه مقاله"

**7. `src/components/home/PricingTable.tsx`** -- Restructure to per-word pricing matching competitor structure:
  - Split into two tables: "English to Persian" and "Persian to English"
  - 3 quality tiers each with competitive per-word pricing
  - Add field-specific multiplier table below
  - Keep prices slightly below Tarjomano for competitive advantage

**8. `src/pages/Pricing.tsx`** -- Update calculator to use per-word rates instead of per-1000-word flat rates; add language direction toggle; add field multiplier selector; update the pricing table reference

**9. `src/pages/Services.tsx`** -- Add "ترجمه رسمی" service; add "هوش مصنوعی" assisted translation section; enrich meta title and description with keywords; add a new section about AI-powered quality assurance

**10. `src/pages/About.tsx`** -- Add keywords to meta description; mention "سایت ترجمه مقاله" and "خدمات ترجمه" in story text

**11. `src/pages/Blog.tsx`** -- Add blog posts targeting "هوش مصنوعی برای ترجمه مقاله" and "مقاله انگلیسی"; update meta keywords

**12. `src/pages/Contact.tsx`** -- Add keywords to meta description

**13. `src/components/layout/Footer.tsx`** -- Add "ترجمه رسمی" and "سایت ترجمه مقاله" to footer service links; make them actual links to services page

**14. `src/components/SEO.tsx`** -- Support array of schemas (already done)

---

## New Pricing Structure

Competitive rates (undercut Tarjomano by ~10%):

### English to Persian (per word)
| Level | Price |
|-------|-------|
| Base (پایه) | 55 toman |
| Professional (حرفه‌ای) | 120 toman |
| Premium (پریمیوم) | 200 toman |

### Persian to English (per word)
| Level | Price |
|-------|-------|
| Professional (حرفه‌ای) | 220 toman |
| Premium (پریمیوم) | 380 toman |

### Calculator Updates
- Input: word count, language direction, quality level, field (with multiplier), extras
- Live calculation: `words x rate x field_multiplier + extras`

---

## Technical Details

- All pricing data will be centralized in a shared constants file `src/lib/pricing.ts` for consistency between PricingTable, calculator, and ServicesPreview
- Field multipliers table will be a new visual component shown on both Pricing page and PricingTable
- SEO component already supports `keywords` prop -- will add keyword strings to all pages
- New FAQ items will be added to the faqSchema JSON-LD on Index page
- No new dependencies required

