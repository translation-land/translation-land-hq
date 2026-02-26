

## Plan: Update Site Title, Favicon, Meta Tags & Push to GitHub

### Steps

1. **Copy favicon** — Copy `user-uploads://favicon.ico` to `public/favicon.ico` (overwrite existing)

2. **Update `index.html`**:
   - Change `<title>` to `ترجمه مقاله توسط کارشناس ارشد زبان`
   - Add `<link rel="icon" href="/favicon.ico" type="image/x-icon">`
   - Remove "Translation Land" / "Lovable" references from meta tags (author, og:title)
   - Update `og:title` to match the new title

3. **Push to GitHub** — Trigger GitHub sync after changes are applied

