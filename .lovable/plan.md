

## Plan: Add Founder Section to Homepage

Based on the screenshot, I'll create a new component showing the founder's profile card and place it on the homepage.

### Steps

1. **Copy the uploaded image** to `src/assets/founder.png`

2. **Create `src/components/home/Founder.tsx`** — A section with:
   - Circular profile photo on the left
   - Name: محمدامین رضایی
   - Title: مؤسس و سرپرست تیم ترجمه
   - Bio paragraphs (from the screenshot)
   - "وب‌سایت شخصی" button linking to `https://maminrezaie.github.io`
   - RTL layout, card-elevated styling, Framer Motion fade-in animation

3. **Update `src/pages/Index.tsx`** — Import and add `<Founder />` between `<Testimonials />` and `<FAQ />` (or similar logical placement)

