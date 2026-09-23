# Deenar Lift Company — Business & Brand Truth

## 1. Confirmed Facts

Only facts directly supported by existing repository content or explicit existing business information.

| Fact | Source |
|------|--------|
| Company name: "Deenar Lift Company" | `src/lib/site.ts:2`, `src/components/Logo.tsx:30` |
| Short name used internally: "Deenar" | `src/lib/site.ts:3` |
| Tagline in metadata: "Engineering Vertical Mobility for Pakistan" | `src/lib/site.ts:4` |
| Phone number: 03132477205 | `src/lib/site.ts:7` (also in Navbar, Footer, Contact page) |
| WhatsApp number: 923132477205 | `src/lib/site.ts:9` |
| Email: msiddiqui78640@gmail.com | `src/lib/site.ts:12` |
| Address listed: "Karachi, Pakistan" | `src/lib/site.ts:13` |
| Business hours: "Mon - Sat: 9:00 AM - 7:00 PM" | `src/lib/site.ts:14` |
| Social links: Facebook, Instagram, LinkedIn (all deenarlifts) | `src/lib/site.ts:15-17` |
| Website built with Next.js 16, React 19, Tailwind CSS 4, TypeScript | `package.json` |
| Pricing calculator logic exists in code (base prices, factors, formulas) | `src/lib/pricing.ts` |
| 6 product families defined in code with specs, features, descriptions | `src/lib/products.ts:15-154` |
| 4 services defined: Installation, AMC, Modernization, Repair | `src/lib/products.ts:156-181` |
| 4 blog posts exist with structured content | `src/lib/blog.ts:17-173` |
| Contact form submits to WhatsApp + saves to local file via API | `src/components/ContactForm.tsx`, `src/app/api/contact/route.ts` |
| Brand color: cyan (#22d3ee) used throughout | `src/app/globals.css:6`, Tailwind config |
| Font: Space Grotesk (weights 300-700) | `src/app/layout.tsx:9-13` |
| Logo: Custom SVG "LiftMark" + "Deenar Lift Company" wordmark | `src/components/Logo.tsx` |
| Dark theme: background #08080a, text zinc scale | `src/app/globals.css:22-28` |

---

## 2. Current Brand Identity

### Brand Name
- **Deenar Lift Company** (full)
- **Deenar** (short, used in UI)

### Existing Taglines / Headlines
| Location | Text |
|----------|------|
| Site metadata | "Engineering Vertical Mobility for Pakistan" |
| Home hero | "Vertical mobility, **engineered** in Pakistan." |
| Home hero sub | "Lift Manufacturer — Karachi, Pakistan" |
| About page | "A manufacturer that stands behind every lift it builds" |
| About story | "A Karachi company with an engineer's obsession" |
| Products page | "Elevators & escalators for every building" |
| Pricing page | "Know your lift price in PKR — before you call" |
| Contact page | "Let's talk about your lift project" |

### Brand Colors
| Color | Hex | Usage |
|-------|-----|-------|
| Brand 500 (primary) | #22d3ee | CTAs, links, accents, focus rings, progress dots |
| Brand 400 | #67e8f9 | Gradients, hover states |
| Brand 300 | #a5f3fc | Subtle gradients |
| Brand 600 | #06b6d4 | Darker accents |
| Brand 700 | #0e7490 | Rarely used |
| Background | #08080a | Page background |
| Surface | #0b0b0e, #101013 | Cards, sections |
| Text primary | #a1a1aa (zinc-400) | Body text |
| Text heading | #fafafa / white | Headings |

### Visual Characteristics
- Dark industrial aesthetic (#08080a background)
- Engineering grid backdrop (`.bg-grid` utility)
- Cyan accent as "signal color" on dark
- Monospace font for numbers (PKR, specs, capacity)
- Rounded corners (md/lg), subtle borders (white/10)
- Scroll-reveal animations (`.reveal` + IntersectionObserver)
- Floating animation on hero illustration (`.animate-float-slow`)
- Consistent spacing scale (Tailwind defaults)

### Tone of Voice
- Professional, engineering-focused, direct
- Uses Pakistani context: "PKR", "Karachi", "load-shedding", "Assalam-o-Alaikum"
- Avoids marketing fluff; emphasizes "manufactured," "fabricated," "engineered"
- Second-person address ("your lift," "your building")
- Urdu greeting in WhatsApp messages: "Assalam-o-Alaikum!"

### Repeated Terminology
| Term | Frequency |
|------|-----------|
| "Manufactured" / "Manufacturing" | High (home, about, products, process) |
| "In-house" | 4+ occurrences |
| "Karachi" | 6+ occurrences |
| "PKR" / "Pakistani Rupees" | Pricing page, hero CTAs |
| "Turnkey" | Home capabilities, services |
| "Site survey" | Home, pricing, contact, blog |
| "Itemized quotation" | Home, pricing, about |
| "Genuine components" / "Genuine spare parts" | Why Deenar, services, blog |
| "Nationwide service" / "Across Pakistan" | Why Deenar, services, FAQ |
| "Certified technicians" / "Certified installation" | Process, services, about |
| "Load-tested" | Process, about |
| "Free site survey" | Home, pricing, contact, blog CTAs |

### Positioning Currently Communicated
1. **Local manufacturer** — "Built in Karachi," "Pakistani engineering"
2. **Full lifecycle** — Design, manufacture, install, maintain
3. **Transparent pricing** — PKR, itemized, calculator tool
4. **Direct accountability** — No middlemen, own technicians
5. **Safety-first** — International standards, load testing
6. **Pakistan-specific** — Designed for heat, power fluctuations, dense towers

### Obvious Brand Rules (Implicit from Code)
- Dark mode only (no light theme)
- Cyan (#22d3ee) = primary action color
- Space Grotesk for all text
- Monospace for numbers/specs
- Grid backdrop on major sections
- Scroll-reveal on section entries
- WhatsApp as primary conversion channel
- PKR formatting: "Rs X crore" / "Rs Y lakh"

---

## 3. Products & Services

### Product Families (from `src/lib/products.ts`)

#### 1. Passenger Lifts
- **Capacity:** 320–1,000 kg (6–16 persons)
- **Speed:** 0.5–2.0 m/s
- **Travel:** Up to 30 stops
- **Drive:** Geared / Gearless (VVVF)
- **Features listed:** VVVF gearless traction, microprocessor controllers, LED lighting with emergency backup, automatic sliding doors, destination dispatch option
- **Image:** Unsplash (photo-1486406146926-c627a92ad1ab)
- **Accent gradient:** Sky to blue
- **Missing/Uncertain:** Specific motor brands, controller models, door operator brands, safety certifications, actual models produced

#### 2. Home / Villa Lifts
- **Capacity:** 160–480 kg (2–6 persons)
- **Stops:** 2–5
- **Drive:** Hydraulic
- **Power:** Single-phase option
- **Features:** No machine room (MRL), compact pit/headroom, child-safe interlocks, battery-assisted emergency lowering, custom cabin interiors
- **Image:** Unsplash (photo-1600585154340-be6161a56a0c)
- **Accent gradient:** Emerald to teal
- **Missing/Uncertain:** Actual pit/headroom dimensions, hydraulic power unit specs, cabin size options, compliance standard (EN 81-41?)

#### 3. Freight / Goods Lifts
- **Capacity:** 1,000–3,000 kg
- **Drive:** Hydraulic / Traction
- **Doors:** Manual / Automatic
- **Operation:** Single or two-speed
- **Features:** Heavy-duty platform & gates, manual or automatic doors, two-speed floor levelling, waterproof/weatherproof options, custom platform sizes
- **Image:** Unsplash (photo-1553413077-190dd305871c)
- **Accent gradient:** Amber to orange
- **Missing/Uncertain:** Platform dimensions, door clear openings, duty cycle rating, guide rail specs, actual installations

#### 4. Hospital Lifts
- **Capacity:** 480–800 kg (6–10 persons)
- **Speed:** 0.63–1.0 m/s
- **Cabin depth:** 2,100 mm+
- **Safety:** EN / GB certified (claimed)
- **Features:** Stretcher-friendly wide cabins, anti-vibration levelling, emergency alarm & intercom, standby power readiness, fire-rated landing doors
- **Image:** Unsplash (photo-1586773860418-d37222d8fce3)
- **Accent gradient:** Rose to red
- **Missing/Uncertain:** Which EN/GB standards exactly, vibration specs, actual hospital references, cabin width options

#### 5. Panoramic Lifts
- **Capacity:** 480–1,040 kg (6–13 persons)
- **Speed:** 0.5–1.0 m/s
- **Cabin:** Structural glass
- **Drive:** Hydraulic / Traction
- **Features:** Tempered structural glass, 360° panoramic view, LED ambient cabin lighting, MRL/outdoor installation, custom circular/curved options
- **Image:** Unsplash (photo-1477959858617-67f85cf4f1df)
- **Accent gradient:** Violet to purple
- **Missing/Uncertain:** Glass thickness/specs, structural calculations, wind load ratings, actual projects

#### 6. Escalators & Walkways
- **Angle:** 30° / 35°
- **Speed:** 0.5 m/s
- **Capacity:** Up to 9,000 pax/hr
- **Width:** 600 / 800 / 1000 mm
- **Features:** Continuous heavy-duty operation, energy-saving VVVF drives, sensors & safety switches, anti-slip patterned steps, indoor & semi-outdoor models, heights up to 12m+
- **Image:** Unsplash (photo-1497366216548-37526070297c)
- **Accent gradient:** Cyan to sky
- **Missing/Uncertain:** Rise heights per model, truss specs, drive manufacturer, actual installations, compliance (EN 115?)

### Services (from `src/lib/products.ts:156-181`)

| Service | Description (Website Claims) |
|---------|------------------------------|
| Supply & Installation | End-to-end turnkey: shaft survey, civil works guidance, electrical integration, commissioning by certified engineers |
| Annual Maintenance Contracts (AMC) | Preventive + corrective maintenance, scheduled inspections, priority breakdown response, genuine spare parts |
| Modernization & Refurbishment | Upgrade ageing lifts: new VVVF drives, controllers, doors, cabins — boost performance, safety, efficiency |
| Repair & Breakdown Service | Fast emergency call-out for Karachi and all Sindh; technicians carry common spares |

**Missing/Uncertain for All Services:**
- Response time SLAs (website says "8-12 hours" in blog but not on services)
- Geographic coverage detail ("nationwide" vs "Karachi + Sindh")
- AMC pricing tiers
- Spare parts inventory locations
- Technician headcount per region
- Modernization portfolio/examples

### Pricing Calculator Parameters (from `src/lib/pricing.ts`)

| Parameter | Values | Notes |
|-----------|--------|-------|
| Elevator types | home, passenger, freight, hospital, panoramic | 5 types (escalators excluded) |
| Building types | residential, apartment, commercial, hotel, hospital, industrial | 7 types with multipliers |
| Finishes | standard, premium, luxury | 3 tiers with multipliers |
| Capacity options | Per type (e.g., passenger: 6,8,10,13,16 persons) | Defined per type |
| Stops range | Per type (e.g., passenger: 3–30) | Defined per type |

**Calculator Logic (Code-Confirmed):**
- Base price per type + per-stop adder
- Capacity multiplier per type
- Building type multiplier (1.0–1.18)
- Finish multiplier (1.0, 1.28, 1.58)
- ±10% / +15% range for low/high
- Breakdown: machine, shaft/doors, installation (12%), misc
- Timeline: base weeks + 0.5 weeks per extra stop
- Output rounded to nearest lakh (100,000 PKR)

**Sample Estimates (Code-Defined, Not Business-Verified):**
| Config | Range (PKR) |
|--------|-------------|
| Home Lift — Villa (4 persons, 3 stops, standard) | ~Rs 35–45 lakh |
| Passenger — Apartment Tower (8 persons, 10 stops, premium) | ~Rs 1.2–1.5 crore |
| Passenger — Office Building (13 persons, 20 stops, premium) | ~Rs 2–2.5 crore |
| Hospital Lift (8 persons, 8 stops, standard) | ~Rs 1–1.3 crore |
| Freight — Warehouse (2000 kg, 3 stops, standard) | ~Rs 1.5–2 crore |
| Panoramic — Hotel (8 persons, 6 stops, luxury) | ~Rs 1.8–2.3 crore |

---

## 4. Business Claims

Every meaningful claim currently made by the website, classified by verification status.

| Claim | Location(s) | Classification | Notes |
|-------|-------------|----------------|-------|
| **Manufacturing location: Korangi Industrial Area, Karachi** | Home page (Why Deenar card), About page | **UNVERIFIED** | Stated in UI badge: "Korangi Industrial Area, Karachi" — no photos, address, or proof |
| **In-house manufacturing / fabrication** | Home (Why Deenar #1), About (values, approach), Products, Services | **UNVERIFIED** | Repeated heavily; no factory photos, machinery list, capacity data |
| **Full control over quality, cost, delivery** | Home (Why Deenar #1) | **UNVERIFIED** | Implied by in-house claim |
| **Nationwide service / own technicians across Pakistan** | Home (Why Deenar #3), Services (AMC, Repair), Pricing FAQ, Blog | **UNVERIFIED** | "Our own technicians — not third-party contractors"; Repair says "Karachi and all of Sindh" — contradictory |
| **Transparent PKR pricing with no hidden charges** | Home (Why Deenar #4), Pricing page, Blog | **PARTIALLY CONFIRMED** | Calculator exists and shows PKR; "no hidden charges" unverified |
| **Itemized quotation in PKR within 48 hours** | Home hero CTA, Pricing page, Contact page, Blog | **UNVERIFIED** | Process claim; no SLA evidence |
| **Free site survey** | Home (Process #1), Pricing, Contact, Blog CTAs | **UNVERIFIED** | Offered repeatedly; no booking system evidence |
| **Safety-first engineering / international safety standards** | Home (Why Deenar #2), Hospital lift specs, Blog | **UNVERIFIED** | "Built to international safety standards" — which standards? EN 81-20/50? |
| **Genuine components / redundant safety systems** | Home (Why Deenar #2) | **UNVERIFIED** | No component brands listed |
| **Load testing before commissioning** | Home (Process #4), About (Approach #3), Blog | **UNVERIFIED** | Claimed in process; no test certificates shown |
| **Certified technicians install/commission** | Home (Process #4), Services, About | **UNVERIFIED** | Certification body not named |
| **Decades of maintenance / life-of-building support** | Home hero, Services (AMC), About (Promise), Footer | **UNVERIFIED** | Company age unknown; "decades" implies 20+ years |
| **3,000 kg max freight capacity** | Home capabilities bar | **UNVERIFIED** | Matches freight product spec; no project evidence |
| **2.0 m/s max passenger speed** | Home capabilities bar | **UNVERIFIED** | Matches passenger product spec |
| **30 max stops travelled** | Home capabilities bar | **UNVERIFIED** | Matches passenger product spec |
| **Turnkey: Supply · Install · Maintain** | Home capabilities bar, Services | **UNVERIFIED** | Service offering claim |
| **Founded on frustration with import vs. unreliable local options** | About story | **UNVERIFIED** | Origin story; no founding year, founder name |
| **Today manufacture complete range in Karachi facility** | About story | **UNVERIFIED** | "Our Karachi facility" — same as Korangi claim |
| **Designed for Pakistan's reality: summer heat, power fluctuations, dense towers** | About story | **UNVERIFIED** | Design claim; no technical evidence |
| **Promise: Build it, install it, stand behind it for life of building** | About story, About promise card | **UNVERIFIED** | Lifetime support claim |
| **Mission: Make safe vertical transport accessible to every building in Pakistan** | About (Mission card) | **UNVERIFIED** | Aspirational |
| **Vision: Pakistan's most trusted lift brand** | About (Vision card) | **UNVERIFIED** | Aspirational |
| **Deenar Promise: Free survey, itemized PKR quote, certified install, genuine parts, responsive breakdown support for life** | About (Promise card) | **UNVERIFIED** | Bundle of claims |
| **Values: Safety First, Quality Without Compromise, Accountability, Pakistani Engineering** | About (Values) | **UNVERIFIED** | Generic values; no proof points |
| **Approach: Survey & Design → Fabrication → Testing & Commissioning → Aftercare** | About (Approach), Home (Process) | **UNVERIFIED** | Process claim |
| **Every component sourced from certified suppliers** | About (Value: Safety First) | **UNVERIFIED** | No supplier names |
| **Every lift passes load testing before leaving facility** | About (Value: Safety First) | **UNVERIFIED** | No test records |
| **Build lifts "the way we would want them built for our own families"** | About (Value: Quality) | **UNVERIFIED** | Marketing language |
| **No middleman to blame — our name on every lift** | About (Value: Accountability) | **UNVERIFIED** | Accountability claim |
| **Proudly designed, fabricated, assembled in Karachi by team understanding Pakistan's buildings, power, budgets** | About (Value: Pakistani Engineering) | **UNVERIFIED** | Team claim |
| **Pricing calculator gives "instant budget estimate"** | Pricing page | **CONFIRMED (CODE)** | Calculator functions; estimates are algorithmic, not quoted |
| **Estimates include supply, installation, commissioning** | Pricing page, Calculator breakdown | **UNVERIFIED** | Calculator includes these line items; actual inclusions unverified |
| **Payment plans: 30% advance, 40% milestones, 30% before install** | Pricing FAQ | **UNVERIFIED** | Specific terms claimed; no contract evidence |
| **Installation: home lift 1–3 weeks, passenger/freight 3–8 weeks** | Pricing FAQ | **UNVERIFIED** | Timeline claims |
| **Service network covers all Pakistan with scheduled visits + priority breakdown for AMC** | Pricing FAQ | **UNVERIFIED** | Contradicts "Karachi and all of Sindh" on Repair service |
| **Annual maintenance 3–6% of installed value/year** | Blog (Maintenance guide) | **UNVERIFIED** | Industry rule of thumb; not Deenar-specific |
| **Well-maintained lifts use up to 15% less electricity** | Blog (Maintenance guide) | **UNVERIFIED** | Generic industry claim |
| **AMC red flags: exclude emergency call-outs, charge separately for spares, never visit on schedule** | Blog (Maintenance guide) | **UNVERIFIED** | Generic advice |
| **Traffic analysis: 1 lift per 40–50 floors, clear peak flow in 5 min** | Blog (Commercial guide) | **UNVERIFIED** | Generic engineering guideline |
| **Zoning: low/mid/high zones cut waiting times** | Blog (Commercial guide) | **UNVERIFIED** | Generic engineering guideline |
| **MRL saves rooftop space; conventional MR easier to maintain** | Blog (Commercial guide) | **UNVERIFIED** | Generic engineering guideline |

---

## 5. Proof Currently Available

### Evidence That Exists in Repository

| Asset | Location | Status |
|-------|----------|--------|
| **Logo (SVG)** | `src/components/Logo.tsx` | Custom LiftMark + wordmark — **CONFIRMED** |
| **Brand colors (CSS custom properties)** | `src/app/globals.css` | **CONFIRMED** |
| **Font (Space Grotesk)** | `src/app/layout.tsx` | **CONFIRMED** (via next/font) |
| **Product specifications (structured data)** | `src/lib/products.ts` | **CODE-DEFINED** — not business-verified |
| **Pricing algorithm (structured data)** | `src/lib/pricing.ts` | **CODE-DEFINED** — not business-verified |
| **Blog content (4 articles)** | `src/lib/blog.ts` | **CODE-DEFINED** — written in generic guide voice |
| **Contact information** | `src/lib/site.ts` | Phone, email, WhatsApp, address, hours — **UNVERIFIED** |
| **WhatsApp deep-link generator** | `src/lib/site.ts:29` | **CONFIRMED** (functional) |
| **Contact form → WhatsApp + API** | `src/components/ContactForm.tsx`, `src/app/api/contact/route.ts` | **CONFIRMED** (functional) |
| **Pricing calculator UI + logic** | `src/components/PricingCalculator.tsx`, `src/lib/pricing.ts` | **CONFIRMED** (functional) |
| **SVG HeroLift illustration** | `src/app/page.tsx:439-519` | Custom animated SVG — **CONFIRMED** |
| **Navigation structure** | `src/lib/site.ts:20-27` | 6 pages — **CONFIRMED** |

### Evidence Explicitly Missing

| Missing Evidence | Impact |
|------------------|--------|
| **Zero authentic photographs** — all images from Unsplash | Cannot prove manufacturing, projects, team, factory |
| **No factory/facility photos** | "Korangi facility" claim unsupported |
| **No team photos or bios** | "Our engineers/technicians" anonymous |
| **No project portfolio / case studies** | No evidence of completed installations |
| **No client names or testimonials** | Zero social proof |
| **No certifications displayed** | EN 81, ISO, PSQCA, PEC — all claimed/implied, none shown |
| **No type-test certificates** | Safety claims unverifiable |
| **No supplier/partner logos** | "Genuine components" — from whom? |
| **No technical drawings / datasheets** | Specifiers cannot evaluate |
| **No AMC sample contract or SLA** | Service terms opaque |
| **No warranty document** | "Warranty and after-sales support" claimed, not shown |
| **No company registration / incorporation docs** | Legal entity unverified |
| **No founder/leadership info** | "Engineer's obsession" — who? |
| **No manufacturing capacity data** | Units/year, factory size, crane capacity |
| **No service team headcount or locations** | "Nationwide" vs "Karachi+Sindh" contradiction |
| **No real pricing validation** | Calculator algorithmic; no recent real quotes to calibrate |
| **No Urdu language content** | Primary market Pakistan; English only |

---

## 6. Business Questions We Must Ask Deenar

Prioritized by impact on redesign.

### P0 — Must Know Before Redesign (Blockers)

1. **What is the exact factory address in Korangi? Can we shoot there?**
2. **What certifications does Deenar hold? (EN 81-20/50, ISO 9001, PSQCA, PEC, type-test certificates)**
3. **Who are the key people? (Founder, Chief Engineer, Project Manager, Service Head — names, photos, bios)**
4. **What are 8–12 real completed projects we can showcase? (Building name/type, location, lift specs, year, client reference permission)**
5. **What is the actual service network? (Cities with resident techs, response SLAs, spare parts depots, team size)**
6. **What are the real, current base prices for each product type? (To calibrate calculator)**
7. **What component brands are actually used? (Motors, controllers, doors, safety gear — specific manufacturers)**
8. **What is the company founding year and ownership structure?**

### P1 — Important for Content & Trust

9. **Can we get 5–10 client testimonials (named, with title/company, photo optional)?**
10. **What are the actual pit/headroom requirements for home lifts?**
11. **What are the exact cabin dimensions per product?**
12. **What is the warranty period and terms per product?**
13. **What does a standard AMC include/exclude? Response time SLA? Price range per lift type?**
14. **Are there any ongoing or recent modernization projects to feature?**
15. **What financing/payment partners exist? (Banks, leasing companies)**
16. **Is there Urdu content already prepared or a translator available?**
17. **What are the actual manufacturing capacity numbers? (Units/month, factory sq ft, crane tonnage)**

### P2 — Useful Later

18. **Any industry association memberships? (PLA, PEC, etc.)**
19. **Export history or international projects?**
20. **R&D capabilities or custom engineering examples?**
21. **Sustainability/energy efficiency data?**
22. **Apprenticeship/training programs?**
23. **Architect/consultant relationships for spec-in?**

---

## 7. Information We Must NOT Invent

The redesign must never fabricate or infer the following:

| Category | Specific Prohibitions |
|----------|----------------------|
| **Projects** | No fake project names, locations, specs, photos, or client quotes |
| **Certifications** | No certification badges unless verified originals provided |
| **Team** | No stock photos as "our engineers"; no invented names/titles |
| **Factory** | No generic factory imagery as "Korangi facility" |
| **Specifications** | No rounding up specs to industry standards; only published verified data |
| **Numbers** | No "1,000+ lifts installed," "20+ years experience," "50+ cities served" unless documented |
| **Testimonials** | No anonymous or fabricated testimonials |
| **Awards** | No award badges without verification |
| **Partnerships** | No partner logos without written permission |
| **Standards Compliance** | No "EN 81-20 certified" claims without certificate |
| **Service SLAs** | No "4-hour response" promises without operational capacity proof |
| **Pricing** | No "starting from Rs X" unless that is a real, recent quoted price |
| **Capacity Claims** | No "largest manufacturer in Pakistan" or similar superlatives |
| **History** | No founding year, milestone timeline, or origin story details without verification |

---

## 8. Brand Truth for the Redesign

Based **only** on confirmed information (code, repository content, functional features):

### Who Deenar Appears to Be
A Karachi-based lift company with a functioning website that emphasizes local manufacturing, transparent PKR pricing, and direct accountability. The brand presents as technically competent (detailed product specs, working pricing calculator, engineering-focused blog) and digitally mature (WhatsApp-first conversion, modern stack).

### What It Actually Offers (Per Website)
- 6 product families (Passenger, Home, Freight, Hospital, Panoramic, Escalators) with defined spec ranges
- 4 services (Installation, AMC, Modernization, Repair)
- An interactive pricing estimator that outputs PKR ranges with breakdown
- A contact form that opens pre-filled WhatsApp
- Educational blog content on pricing, selection, maintenance, commercial design

### Who It Appears to Serve
- Residential: Villa/home owners (home lifts)
- Developers: Apartment towers, commercial buildings (passenger lifts)
- Industrial: Warehouses, factories (freight lifts)
- Healthcare: Hospitals, clinics (hospital lifts)
- Hospitality/Retail: Hotels, malls, showrooms (panoramic, escalators)
- Building owners needing maintenance/modernization

### What Can Currently Differentiate It (Based on Evidence)
1. **Working PKR pricing calculator** — rare in Pakistan market; functional, detailed
2. **WhatsApp-native enquiry flow** — matches local behavior; low friction
3. **Dark industrial brand aesthetic** — distinctive vs. generic corporate sites
4. **Code-defined product/service data** — structured, not just marketing copy
5. **Engineering-focused content** — blog written with technical depth

### What Cannot Yet Be Claimed as Differentiation
- "In-house manufacturing" — no proof
- "Nationwide service" — contradictory claims, no network evidence
- "International safety standards" — no certificates
- "Genuine components" — no brands named
- "Decades of experience" — founding year unknown
- "Most trusted" — no testimonials, projects, references
- "Pakistan-specific engineering" — no technical evidence
- "Turnkey delivery" — no case studies showing full lifecycle

### Evidence Needed to Make Brand Story Credible
| Gap | Minimum Evidence Required |
|-----|---------------------------|
| Manufacturing | 10+ factory photos (exterior, fabrication, assembly, testing, paint, dispatch) |
| Projects | 8+ documented projects with photos, specs, client permission |
| Team | 4+ key person photos + bios (Founder, Chief Engineer, Service Head, PM) |
| Certifications | PDF/scans of EN 81-20/50, ISO 9001, PSQCA, PEC |
| Service Network | Map with technician locations, SLA doc, spare parts inventory list |
| Pricing Validation | 5+ recent anonymized quotations matching calculator outputs |
| Components | Supplier letters or spec sheets for motors, controllers, doors, safety gear |
| Voice | Urdu translations for hero, CTAs, key product names |

---

**Document Status:** Created from repository-only evidence. No external research, no business interviews, no assumptions. All claims classified by verification status. Ready for Story Architecture phase.