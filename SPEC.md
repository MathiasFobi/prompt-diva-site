# Prompt Diva™ — Content Universe Website

## Concept & Vision
A premium, presence-driven website for Prompt Diva™ — an AI-powered content strategy brand under Martekconsulting.ai. The site embodies a futuristic "Content Universe" aesthetic where Prompt Diva™ is the captain charting new courses for her clients. Visitors should feel like they're entering an immersive experience, not browsing a corporate site.

## Design Language

**Aesthetic:** Dark luxury meets futuristic AI — deep space vibes with gold accents. Think "command center of a content starship."

**Colors:**
- Primary Background: `#07090D` (deep space black)
- Secondary Background: `#0D1117` (dark navy-charcoal)
- Card Background: `#111827` (elevated surface)
- Gold Accent: `#D4AF37` (primary brand gold)
- Gold Light: `#F5D76E` (hover/highlight)
- Text Primary: `#F8F9FA` (near-white)
- Text Muted: `#8B95A5` (secondary text)
- Glow: `rgba(212, 175, 55, 0.15)` (ambient glow effects)

**Typography:**
- Headlines: Playfair Display (serif, premium, editorial)
- Body/UI: Inter (clean, modern, highly readable)
- Font sizes: 64px hero, 48px section titles, 18-20px body, 14px captions

**Spatial System:**
- Sections: Full viewport height (100vh) or close to it
- Container max-width: 1200px centered
- Section padding: 80px vertical on desktop, 48px on mobile
- Card padding: 32-40px
- Generous whitespace — luxury pacing

**Motion Philosophy:**
- Entrance: Elements fade-up on scroll (opacity 0→1, translateY 30px→0, 600ms ease-out)
- Stagger: 100-150ms delay between sequential elements
- Hover: Gold glow intensifies, subtle scale (1.02), border illumination
- Background: Subtle particle/star field effect, floating UI panels
- Scroll: Smooth scroll behavior

**Visual Assets:**
- Hero: Prompt Diva™ image with halo/crown effect, floating UI panels in background
- Icons: Custom SVG or Lucide icons, gold stroke style
- Decorative: Subtle grid patterns, glow orbs, gradient overlays

## Layout & Structure

### Pages
1. **Homepage** — 9 sections, single-page scroll experience
2. **About** — Full story, elevated design
3. **Services/Prompt Store** — Digital products and offerings
4. **Content Universe Hub** — Membership and community portal
5. **Contact/Footer** — Final CTA and links

### Homepage Sections (in order)
1. **Hero** — Split layout. Left: headline, subheadline, two CTAs. Right: Prompt Diva™ image with halo effect + floating UI panels. Unified dark background with star-field particles.
2. **The Problem** — Single-screen frustration section. Bold copy: "Because content isn't the problem. Structure is." Dark gradient background.
3. **Solution / Content Universe** — Introduces her as the captain. Visual of "content universe" with orbiting elements. Story-driven copy.
4. **About / Social Proof** — Authority section. Prompt Diva™ image with glow. Authority line. No text clutter.
5. **Services Overview** — Three service cards: 1:1 Sessions, Prompt Systems, Consulting. Clean grid, gold borders on hover.
6. **Signature Process** — Step-by-step journey (4-5 steps). Visual timeline or stepped cards.
7. **Ways to Work Together** — 4 offering tiles with icons and CTAs.
8. **Signature Philosophy** — Full-width quote block. "Good content isn't just about being correct... it's about being understood."
9. **Final CTA** — Two buttons: "Enter the Universe" + "Work With Prompt Diva™"
10. **Footer** — Logo, tagline "Where clarity meets execution", Martekconsulting.ai branding, social links.

### Responsive Strategy
- Desktop: Full layouts, side-by-side splits
- Tablet: Adjusted grids, stacked where needed
- Mobile: Single column, larger touch targets (min 48px), compressed hero

## Features & Interactions

**Navigation:**
- Sticky top nav on scroll (appears after hero)
- Logo left, nav links center, CTA button right
- Mobile: Hamburger menu with slide-in drawer

**Hero CTAs:**
- "Enter the Universe" → scrolls to signup/waitlist
- "Work With Prompt Diva™" → scrolls to contact/offerings

**Service Cards:**
- Hover: Gold border glow, subtle lift
- Click: Navigate to service detail or modal

**Process Steps:**
- Animated on scroll (sequential reveal)
- Icons/numbers for each step

**Form/Waitlist:**
- Email input with gold focus border
- Submit with loading state
- Success message on submission

**Scroll Animations:**
- Intersection Observer for all sections
- Elements animate once when entering viewport

## Component Inventory

**NavBar:**
- States: transparent (at top), solid (scrolled), mobile-open
- Logo, links (Home, About, Services, Universe, Contact), CTA button

**Hero Section:**
- Full viewport, split layout
- Background: star-field particles + gradient overlay
- Image: with halo/crown effect, soft edge blend

**Section Headers:**
- Label (small caps, gold), H2 (Playfair Display), optional subtext
- Centered or left-aligned depending on section

**Service Cards:**
- Icon, title, description, CTA link
- Dark background, gold border on hover

**Process Steps:**
- Number/icon, title, description
- Connected by line/dots

**Quote Block:**
- Large italic Playfair text, centered
- Subtle gold accent line above

**CTA Buttons:**
- Primary: Gold background, dark text, rounded-full
- Secondary: Transparent, gold border, gold text
- Hover: invert or glow

**Footer:**
- Multi-column: Logo/tagline, Quick Links, Services, Social
- Bottom bar: copyright + branding

## Technical Approach

**Stack:** Vanilla HTML/CSS/JS — no framework needed for this scope
**Hosting:** Vercel (GitHub repo: MathiasFobi/prompt-diva-site)
**Build:** Static files, deploy on push
**Animations:** CSS keyframes + Intersection Observer
**Fonts:** Google Fonts (Playfair Display + Inter)
**Images:** Extracted from docx, optimized

## Pages

### / (Homepage)
All 9 sections as described above.

### /about
- Hero: Full-width Prompt Diva™ portrait with glow
- Story section: "For Us, By Us" narrative
- Authority credentials: logos, testimonials, stats
- Final CTA

### /services
- Hero: "Your Content, Reimagined"
- Service cards with pricing
- Process overview
- FAQ accordion
- CTA

### /universe
- Hero: "Your Content Universe Awaits"
- Features/benefits grid
- Pricing tiers (monthly/annual)
- Testimonials
- CTA

### /contact
- Contact form (name, email, message)
- Social links
- Location/branding footer

## TODO
- [x] Extract images from docx
- [x] Create SPEC.md
- [ ] Build homepage (all 9 sections)
- [ ] Build About page
- [ ] Build Services/Prompt Store page
- [ ] Build Universe hub page
- [ ] Build Contact page
- [ ] Create shared CSS (styles.css)
- [ ] Create shared JS (main.js)
- [ ] GitHub repo + push
- [ ] Vercel deploy + custom domain
- [ ] Cron job for content updates