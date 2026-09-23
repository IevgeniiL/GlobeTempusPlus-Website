# Site review — September 2026

Review of `index.html` and `sw.js`, rendered at 1440×900 (desktop) and 390×844 (mobile).

Overall: the dark canvas, orange accent and real app screenshots feel premium and on-brand. The biggest problem is that the page never links to the App Store, so nobody can download the app from it.

## 🔴 Fix first

1. **No App Store link anywhere.** Every download button either jumps within the page (`#download`) or goes nowhere (`href="#"` on the CTA badge).
2. **Check the "4.8★ App Store rating" in the CTA.** If it isn't the app's live rating, it's a trust and App Store guidelines risk. Remove it unless it can be backed up.
3. **Support email may be a typo.** The footer says `support@carryapp.com`; the domain is `carryapps.com`.
4. **Duplicate screenshots.** `hero-phone.png` is byte-for-byte the same as `4_4_iPhoneX_Active_Hours.png`, so the hero and the Availability section show the same image. The Edit List screenshot is also used twice. The Calendar, Context Menu, Compact/Standard and Add Location screenshots are unused.

## 🟠 UX and visual design

5. **Hero is visually busy.** Seven background layers (gradient, grid, dot field, 16 parallax dots, 3 drifting orbs, glow, vignette), plus a floating phone and a "breathing" badge next to the main button. Keep the gradient and one orb; make the phone still.
6. **Hero phone is cut off at the fold** on 1440×900. The bottom timeline (the overlap feature the headline promises) is hidden. Cap the phone height at about `min(400px, 78vh)`.
7. **The time picker screenshot looks faded.** It's a modal over a dimmed screen, so it reads as disabled. Crop it or use another screen.
8. **The showcase side phones are at 70% opacity** and look washed out. Scale them down instead of fading.
9. **All three feature sections use the same formula** (three-line headline, orange last word, three pills). Vary one, or merge "Time Picker" into the feature grid.
10. **Uneven menu labels.** "Screens / Availability / Features" puts one feature on the same level as all features. Suggest "Features / How it works / Download".
11. **The mobile page is about 11,000px long** because the showcase stacks three full phones. Use a horizontal swipe row instead.
12. **Inconsistent app name.** The hero image's alt text says "TEMPUS+ splash screen", but the page says GlobeTempus+, and the image isn't a splash screen.

## 🟡 Technical

- **`sw.js` is never registered**, so the caching script does nothing.
- **No Open Graph or Twitter tags, no favicon or home-screen icon, no `apple-itunes-app` tag** (the Safari banner that offers the app).
- **Images have no `width`/`height` or `loading="lazy"`**, so the layout jumps and all images load up front.
- **Duplicated CSS.** `.eyebrow`, `.feat-icon`, `.feat-card:hover` and the badge animation are each declared twice, and there are three separate `prefers-reduced-motion` blocks.
- **The App Store badge SVG is inlined three times** (about 30KB of repeated markup).

## Suggested order

Items 1–4, then 5–6, then the technical items.
