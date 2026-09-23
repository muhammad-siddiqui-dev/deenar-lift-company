# Deenar Lift Company — Design System (M4.3)

Phase: M4 — Design & Taste (Design System Foundation)
Status: Foundation complete; implementation not started.
Primary authority: docs/design-decisions.md (M4.2). Supporting: docs/business-truth.md, docs/story.md, docs/design-study.md, docs/design-reference-study.md, docs/project-context.md.
M2.5 business verification: PENDING. Quotations and owner information not yet transferred.
No source files modified. No images created.

---

## 1. Design Purpose

This design system translates the M4.2 design decisions into concrete, implementation-ready rules for the Deenar Lift Company website (Next.js 16, React 19, Tailwind 4, TypeScript).

It exists to serve three goals:

1. **Represent the business truth honestly.** The site presents what Deenar actually offers and what it can prove — never inventing manufacturing capability, projects, certifications, team, coverage, pricing, or history that are unverified.
2. **Drive a single story.** Every page must progress the M3 visitor journey SEE → UNDERSTAND → TRUST → ACT. No visual element exists apart from this journey.
3. **Become a durable framework.** Evidence that arrives after M2.5 (factory photos, project portfolio, team bios, certifications, calibrated pricing) must slot into pre-built placeholders without restructuring the site.

The system is written for a coding agent: rules are specific, named, and testable — not editorial. Where a fact is unverified, the rule instructs the agent to keep the marker `[TBD - BUSINESS VERIFICATION REQUIRED]` in place rather than filling the gap.

---

## 2. Design Personality

The site must read as **a serious Karachi engineering company that is becoming more transparent** — not a marketing company becoming more impressive.

Operational rules:

- **Engineering credibility first.** Typefaces, colors, spacing, and components reinforce the engineered/manufactured identity. Nothing should look like a SaaS landing page or a start-up pitch.
- **Industrial without cold.** The dark palette and technical density are balanced by direct language, structured data, and (when available) real people/photography. Avoid sterile, anonymous, UI-framework-only styling.
- **Premium without luxury.** Premium comes from precision: structured specs, original SVG illustration, careful spacing, clean typography, real evidence. Luxury decoration — gradients, glassmorphism, abstract imagery, oversized whitespace, showroom language — is prohibited.
- **One voice, one mood.** No section should look like it belongs to a different company. Components, spacing, and color stay consistent across every page.

**Visual mood anchors:** dark near-black base, cyan as a restrained signal light, engineering grid backdrop on key sections, monospace numbers, confident headings, real-structure layout. The mood is workshop + drawing office, not showroom.

---

## 3. Core Design Principles

Every page and component must satisfy these principles. A design decision is rejected if it violates any of them.

1. **Evidence over decoration.** Real content (photos, specs, documentation, people) carries visual weight. Decoration only guides attention or reinforces identity — it never competes with or substitutes for evidence.
2. **Technical clarity.** Specifications, calculations, process steps, and service details are presented as structured data — never buried in prose or obscured by decorative chrome.
3. **Industrial without cold.** Dark industrial character balanced with clarity, warmth through real human evidence (when available), and transparent explanations. Never sterile, never hostile to a non-technical buyer.
4. **Premium without luxury.** Precision over decoration; structured information over empty aesthetics; original assets over stock imagery.
5. **One clear idea per section.** Each section states exactly one message. No section mixes identity + products + pricing + testimonials.
6. **Mobile-first.** Small screens define the base layout. Desktop extends, never repairs. A component that cannot work on mobile is not built.
7. **Purposeful motion.** Animation draws attention (hero), reveals content in sequence (scroll), or signals interactivity. Motion without communicative purpose is removed.
8. **Business-truth compliance.** Every claim on the site is either confirmed (code/lib-defined facts) or labeled `[TBD - BUSINESS VERIFICATION REQUIRED]`. No invented capability is ever visualized, implied, or framed as fact.

---

## 4. Visual Hierarchy

Hierarchy follows the journey order.** Each stage maps to specific page regions:

| Journey stage | Page content | Visual weight guidance |
|---|---|---|
| SEE | Hero identity (name, what, where, primary CTA) | Highest contrast; single dominant statement; unobstructed |
| UNDERSTAND | Product range, process/approach | Structured, scannable, consistent card/table grammar |
| TRUST | Calculator estimates, services, evidence sections | Data-dense, restrained; disclaimers visible but not alarming |
| ACT | WhatsApp / survey / contact CTAs | One clear action per context; cyan reserved for action |

Operational rules:

- **Primary message:** company name, lift-product range, Karachi–Pakistan location. The phrase "this is a lift company with real products, real specs, a real way to get an estimate" must be readable in the hero within seconds.
- **Manufacturing claim placement:** "manufactured in Karachi" must NOT be the primary or hero message until M2.5 confirms factory evidence. It appears only as a verified statement when evidence exists, or as a labeled TBD claim.
- **Supporting information** (products, process, services): secondary weight; consistent structure so the eye can skip or scan.
- **Evidence** (real photos, team, certifications — after M2.5): when present, the strongest non-hero visual element on the page; larger than decorative elements, always captioned.
- **Technical data:** monospace, structured, left-aligned; never set in decorative type.
- **Pricing:** always labeled ESTIMATE/indicative; never styled as a formal quotation.
- **CTA:** one dominant cyan action per screen when a conversion moment is present; supporting actions quieter.

---

## 5. Typography System

Two roles only. No additional fonts.

### Primary — Space Grotesk
- Sole proportional font. Weights 300–700 via `next/font` (existing `layout.tsx`).
- Used for: headings, subheadings, body, labels, buttons, nav, footer.
- Headings: bold, `tracking-tight`. Eyebrow labels: uppercase, `tracking-wider`, small (existing pattern preserved).

### Secondary — monospace (data/numbers)
- System monospace stack (already in use) for all numeric/technical values.
- Used for: PKR prices, capacities (kg, persons), speeds (m/s), stops, dimensions (mm), timeline weeks, calculator output, spec table values, technical identifiers, version/standard references.
- Numbers in headings (e.g., "1,000 kg") use monospace; numbers as prose (e.g., ordinal stops) use Space Grotesk.

### Scale and rhythm
- Preserve the existing scale: large bold headings → medium subheadings → uppercase eyebrows → body (readable size) → small labels.
- Body: comfortable line length (~60–75ch), zinc color (#a1a1aa), line-height comfortable for dense text.
- Do not create a decorative display scale. No script, no condensed, no ultra-light text in hero.

### Readability rules
- Technical values always in monospace, never decorative.
- Uppercase labels limited to short phrases (eyebrows, badges) — not sentences.
- All text meets contrast requirements (§18).
- No justified body text without hyphenation control; left-aligned preferred.

---

## 6. Color System

Preserve the existing dark industrial palette. Cyan is the ONLY bright accent. No new bright system.

| Role | Value | Usage |
|---|---|---|
| Background | `#08080a` | Page base; engineering grid backdrop (`.bg-grid`) on key sections | 
| Surface | `#0b0b0e`, `#101013` | Cards, panels, section surfaces |
| Border | `white/10` | Card/section boundaries, table rules, dividers |
| Text — body | zinc `#a1a1aa` | Paragraph and secondary text |
| Text — heading | `#fafafa` / white | Headings, strong emphasis |
| Text — muted | lower zinc steps | captions, metadata, footnotes, disclaimers |
| Accent — cyan | `#22d3ee` | CTAs, links, focus rings, progress dots, selection, interactive states ONLY |
| Semantic success | muted, low-saturation (e.g., dimmed green) | Confirmed/verified status, positive feedback |
| Semantic warning | muted, low-saturation (e.g., amber) | Estimate/unverified/attention labels |
| Semantic error | muted red | Form validation, errors |

### Cyan discipline
- Cyan is a signal light, not a decorative color. It marks actionable, interactive, or focus states.
- Never apply cyan to fulfilled/static content just for emphasis (e.g., not to a heading gradient, not as a card background).
- At most one dominant cyan action per screen context (§14).
- Cyan variants (400/300) only for hover/active states of cyan elements — not as free-floating gradients.

### Semantic states (muted, non-competing)
- Semantic colors are deliberately muted and low-saturation. They communicate status without introducing a second bright accent system.
- Prefer icons/words alongside color (e.g., warning label + amber dot, not amber text alone).
- Exact semantic hex values finalized at implementation; they must remain visually subordinate to cyan.
- Examples: "ESTIMATE" badge = neutral/muted with clear text; error message = muted red + icon; verified evidence badge = muted success + label.

### Gradients
- Decorative gradients are prohibited on imagery, cards, and backgrounds.
- Linear gradients only where functionally justified (e.g., subtle readability scrim). If uncertain, omit.
- The existing per-product accent gradients are removed. Product identity comes from content + structure, not color.

---

## 7. Layout & Spacing System

### Containers
- Preserve `max-w-7xl` as the content width.
- Narrower containers for reading or spec-dense sections where lines would be too long.
- Full-bleed backgrounds allowed for hero and statement sections, with constrained inner content.

### Section rhythm
- Preserve vertical padding `py-20` / `sm:py-28` between major sections.
- Section separation via border `white/10` or subtle surface change — not background gradients or heavy dividers.

### Density
- Medium-high density: information-rich, scannable, never cluttered.
- Generous inner spacing (comfortable gap inside cards/lists).
- Whitespace is a tool for hierarchy, not luxury emptiness.

### Grids
- Grids used where data benefits: capabilities bar, product family specs, calculator breakdown, evidence gallery (after M2.5).
- **Anti-monotony:** do not apply the same card grid to every content type. Vary presentation: one content type = table row list, another = 2-col spec panel, another = full-width feature block.
- Responsive breakpoints follow Tailwind defaults; behavior defined per section in §17.

### Alignment
- Left-aligned text throughout (English). Urdu/RTL only when/if added after M2.5 (P2).
- Consistent gutter and column alignment across all sections.

---

## 8. Imagery & Media Strategy

### Core rule
Generic stock imagery is NEVER presented as Deenar evidence. If an image claims "factory," "our team," "our installation," "our project," it must be real Deenar media captured/verified through M2.5. Otherwise the media slot shows an honest placeholder (structured representation) — never a deceptive photo.

### Media types and rules

| Media | When usable | Rules |
|---|---|---|
| Real product/installation photos | After M2.5 | Actual lifts, cabins, control panels, installations. Caption with context (site, location configured per evidence). |
| Project images | After M2.5 | Real completed installations; captions with verified project metadata only. `[TBD - BUSINESS VERIFICATION REQUIRED]` |
| Factory images | After M2.5 | Exterior/interior, fabrication, assembly, testing, paint, dispatch. `[TBD - BUSINESS VERIFICATION REQUIRED]` |
| Team images | After M2.5 | Real people with verified names/roles. `[TBD - BUSINESS VERIFICATION REQUIRED]` |
| Technical drawings / diagrams | After M2.5 | Datasheets, dimensioned drawings, component specs for specifier audiences. `[TBD - BUSINESS VERIFICATION REQUIRED]` |
| Video | After M2.5 only if provided | Real installation/factory footage. No decorative stock video. |
| HeroLift SVG | NOW (confirmed asset) | Preserved as the signature original visual. Prominent in hero. |
| Unavailable media | NOW | Honest placeholders: clean spec-focused panels, structured data, the SVG — never stock photos. |

### Photography acquisition
Acquiring real photography is itself M2.5-dependent (`[TBD - BUSINESS VERIFICATION REQUIRED]`): who shoots, what is approved for public use, what can be photographed (factory, sites, people permission). The design must not assume photography will arrive; it must work without it.

### Presentational versus evidence
- A photo used purely as ambient/atmospheric background (clearly decorative, not claiming evidence) is permitted only if it does not depict Deenar work as fact and does not contradict business truth. When in doubt, omit and use the grid/SVG.
- Evidence imagery must dominate: large, captioned, truthful.

---

## 9. Product Presentation

Six families preserved (from `src/lib/products.ts`): Passenger, Home/Villa, Freight/Goods, Hospital, Panoramic, Escalators & Walkways.

### Presentation grammar (same structure per family)
1. **Identity:** name + short non-generic description.
2. **Specs:** structured spec rows using only values defined in `src/lib/products.ts` (capacity, speed, travel/stops, drive, doors, features) — monospace values (§5).
3. **Features:** brief bullet explanations for non-technical buyers.
4. **Link:** "Get an estimate" → calculator preconfigured for this family.
5. **Media:** real photo when available; clean spec panel otherwise (§8).

### Verification status presentation
- Confirmed code-defined specs are displayed normally (they are the published product data).
- Any spec that requires verification is displayed with the canonical marker:
  `[TBD - BUSINESS VERIFICATION REQUIRED]`
- Inline marker for every unresolved item — not a blanket section note.

### Explicit TBD product items (canonical markers required)
- Passenger: motor/controller/door brands; exact cabin dimensions per capacity; safety gear certification; load-test documents. `[TBD - BUSINESS VERIFICATION REQUIRED]`
- Home/Villa: exact pit/headroom dimensions; hydraulic unit specs; single-phase electrical requirements; compliance standard (EN 81-41 or equivalent). `[TBD - BUSINESS VERIFICATION REQUIRED]`
- Freight: platform dimensions; door clear openings; duty-cycle rating; guide rail specs; waterproof/weatherproof ratings. `[TBD - BUSINESS VERIFICATION REQUIRED]`
- Hospital: verified EN/GB standard number+version; exact cabin width/depth; vibration specs; alarm/intercom brands. `[TBD - BUSINESS VERIFICATION REQUIRED]`
- Panoramic: glass thickness/spec; structural engineering calcs; wind-load ratings; outdoor installation conditions; custom shape capability. `[TBD - BUSINESS VERIFICATION REQUIRED]`
- Escalators: rise heights per model; truss specs; motor/drive supplier; compliance standard (EN 115 or equivalent). `[TBD - BUSINESS VERIFICATION REQUIRED]`

### Rules
- No invented specs. No rounding to industry norms. Show only what the code defines or what M2.5 verifies.
- No decorative gradient cards per product family.
- Present all six families consistently; do not prioritize one without justification.

---

## 10. Service Presentation

Four services preserved (from `src/lib/products.ts`): Supply & Installation, AMC, Modernization & Refurbishment, Repair & Breakdown.

### Presentation grammar
1. **Identity:** name + clear description of what the customer receives.
2. **What it includes:** structured list of inclusions (from code or verified data).
3. **Distinction:** products = equipment families; services = lifecycle support. Visually and in navigation these stay separate.
4. **CTA:** route to WhatsApp/survey with context pre-filled.

### Service coverage rule
- The repository contains a contradiction: "nationwide service / across Pakistan" versus "Karachi and all of Sindh" (Repair).
- The contradiction must NOT be hidden or silently corrected. It remains explicitly unresolved until M2.5 confirms: geographic scope, response SLA, technician count, spare-parts coverage. Mark accordingly:
  `[TBD - BUSINESS VERIFICATION REQUIRED]`
- Design must be able to express verified coverage once provided (e.g., list of covered cities, map or list block). Until then, no concrete coverage claim is visualized.

### AMC / warranty
- Display format designed (structured terms: period, inclusions, exclusions, response commitments, pricing tiers) but content is `[TBD - BUSINESS VERIFICATION REQUIRED]`.
- No invented response SLAs, coverage maps, technician counts, or pricing tiers.

### Modernization
- Principle transferred from reference: present modernization as clear, named upgrade paths.
- Deenar's own naming/content is `[TBD - BUSINESS VERIFICATION REQUIRED]`. Do not copy or echo reference-site names (e.g., not "ReStore/ReNew/RePlace" or similar).

---

## 11. Trust & Evidence System

Placeholders are defined now so M2.5 content can be inserted without restructuring. A placeholder must never imply the evidence already exists.

### Evidence slots (all `[TBD - BUSINESS VERIFICATION REQUIRED]` until filled)
1. **Projects (P0):** 8–12 real installations. Fields: building type, location, lift specs, year, description, photo. Format: name, location, year, brief description, photo, link to details.
2. **Clients/testimonials (P0):** 5–10 named references. Fields: name, title, company, quote (photo optional). No anonymous or invented testimonials.
3. **Team (P0):** Founder/MD, Chief Engineer, Project Manager, Service Head. Fields: photo, bio, qualifications.
4. **Factory/manufacturing (P0):** facility photos, fabrication/assembly/testing area, quality documentation, capacity data.
5. **Certifications (P0):** scanned/verified copies of applicable standards (e.g., EN 81-20/50, EN 81-41, ISO 9001, PSQCA, PEC) and component supplier certificates. Display format defined; content pending.
6. **Technical documents (P1):** downloadable datasheets per family, technical drawings, component spec sheets.

### Placeholder behavior
- A section with empty evidence shows its structural skeleton (headings, field labels, empty-state text such as "Evidence pending verification") — never a fake photo, invented quote, or fabricated stat.
- Unearned trust signals are prohibited: no decorative trust badges, no empty certification icons, no "trusted by ___" without names.

---

## 12. Pricing & Calculator Presentation

The calculator is preserved as a **budget-planning tool**, not a quotation system. Its numerical data remains algorithmic and unverified.

### Core rules
- Every output is visibly labeled ESTIMATE / indicative — never QUOTATION.
- Output shows: budget range + line-item breakdown (machine, shaft/doors, installation, misc) + estimated timeline (weeks).
- Range behavior follows `pricing.ts` logic (low/high) exactly as code-defined.
- **Never present algorithmic values as actual market/company pricing.** The tool says "indicative algorithmic estimate," not "our prices." This is a hard boundary.

### Assumptions & uncertainty (always visible)
- What drives the estimate: lift type, building type, capacity, stops, finish.
- What is NOT included: civil works, electrical supply upgrade, shaft preparation, post-installation maintenance contract.
- Disclaimer: final quotation depends on site survey, shaft dimensions, civil conditions, component selection, current import/component costs; no price guarantee until an itemized quotation is issued.

### Conversion handoff
- Estimate always leads to WhatsApp (pre-filled with configuration) or a site-survey request.
- The calculator is never a standalone conversion endpoint; it hands off to ACT.

### Calibration
- Real quotation validation (5+ anonymized quotes) pending M2.5:
  `[TBD - BUSINESS VERIFICATION REQUIRED]`
- The pricing sample-estimate table (homepage/pricing page) remains code-defined, clearly marked as estimates; FAQ answers must not invent payment plans, timelines, or coverage commitment.

---

## 13. Component & Surface Rules

### Buttons
- Primary: flat cyan fill, readable contrast, moderate radius (`rounded-md`), explicit hover/active states, visible focus.
- Secondary: surface/border style (no cyan fill), same radius/height.
- Minimal padding rules consistent across site; single dominant cyan button per context (§14).

### Cards
- Purpose: structured data (specs, products, process steps, calculator breakdown, evidence).
- Style: border `white/10`, surface `#0b0b0e`/`#101013`, moderate radius.
- **Do not apply one card grid to every content type.** Vary presentation: spec rows, 2-col panels, feature lists, etc.

### Borders & surfaces
- Subtle, consistent (`white/10`). Section separation via borders or subtle surface change.
- No decorative gradients, no arbitrary shadows/elevation without meaning.

### Forms
- Clear labels and field captions, visible focus, accessible names.
- Validation: inline messages with muted semantic colors + icon (§6); never color-only.

### Specification tables
- Monospace numeric values; clear row/column headers; structured layout.
- Preferred over dense prose for technical data.
- Responsive behavior per §17 (stack on mobile, avoid overflow).

### Badges
- Status labelers only: ESTIMATE, request status, verified/unverified markers, availability.
- Never decorative brand badges; never fake trust badges.

### Accordions
- FAQ + layered technical detail. Buttons/headers proper semantics, keyboard accessible, ARIA expanded/control.

### Alerts
- Muted, functional: estimate disclaimers, status messages, form errors. Icon + text. Not decorative.

### Image blocks
- Framed evidence blocks with captions (verified metadata) for real photos.
- Honest placeholder styling (structured panel + empty-state text) when media unavailable.

### Section headings
- Consistent pattern: eyebrow (uppercase, tracking-wider) + heading + optional lead, repeated across all sections.

### Anti-patterns (prohibited)
- Excessive rounded containers ("candy" look).
- Glassmorphism (frosted translucent surfaces).
- Decorative gradients (image overlays, card washes).
- Arbitrary shadows / elevation without meaning.
- Repetitive bordered card grids applied uniformly to all content types.
- AI-framework default styling (generic Tailwind/utility look without brand decisions).

---

## 14. CTA & Conversion Rules

### Conversion hierarchy
1. **Primary — WhatsApp.** Confirmed deep-link, pre-filled message. Appears where a conversion moment exists: hero, calculator sidebar/output, product cards, service sections, contact page, blog CTAs, footer. Highest urgency action on the page.
2. **Secondary — Calculator / site survey.** Self-service estimation, then guided handoff to WhatsApp or survey.
3. **Tertiary — phone/email.** `03132477205`, `msiddiqui78640@gmail.com`, `923132477205` visible in header/footer/contact but quieter than primary.

### CTA anti-slop (audit clarification)
- **Prohibition:** do not repeat one generic CTA template across every page/section.
- CTA treatment must match the section intent:
  - Hero → "Get an estimate" / "Chat on WhatsApp"
  - Calculator output → "Continue on WhatsApp with this configuration"
  - Product card → "Estimate this lift"
  - Service → "Ask about [service]"
  - Blog → contextual next step
- One dominant cyan action per screen context; secondary actions visually quieter. No button rows of equal weight.

### Button prominence
- Cyan = the single brightest action color, reserved for actionable intent.
- Full-width on mobile only where appropriate (§17).

---

## 15. Navigation

### Structure
- Preserve the existing 6-page structure (Home, Products, Pricing/Calculator, Services, About, Contact — per `src/lib/site.ts`). Do not add unsupported nav items.
- No multi-level dropdown expansion (reference lesson on depth NOT adopted for this scope).

### Desktop
- Sticky, scroll-aware navbar preserved. Text links with underline animation; cyan on active/hover/focus.

### Mobile
- Collapsing drawer preserved: Escape closes, body scroll lock, `aria-expanded`, smooth 0.25s slide.
- Nav order preserved on mobile; labels visible.

### Future evidence pages
- Projects/team/certifications/content intended for M2.5 are designed as placeholders WITHIN existing structure. A nav item is only added when M2.5 actually provides content for it.
- No link to a page/section that has no supported content.

---

## 16. Motion & Interaction

### Allowed motion (exhaustive)
- `.reveal` scroll reveal: opacity 0→1, translateY 26px→0, 0.8s ease. Section entries. Fire once.
- `.animate-float-slow`: 7s gentle vertical float — hero Lift SVG only (signature asset).
- `pulse-dot`: 2.4s pulse — status indicator dots only.
- `mobile-menu-enter`: 0.25s slide-in — mobile drawer.
- Interaction feedback: hover/active on buttons, links, cards; focus transitions.

### Purpose of motion
- Draw attention (hero float), reveal proportionally (scroll), signal interactivity (hover/focus), support navigation (drawer). Motion that does none of these is removed.

### Behavior rules
- Reveals fire once; no persistent looping; no staggered cinematic sequences.
- Interaction feedback instant and small-scale; no bouncy/elastic physics.
- **Reduced motion:** `prefers-reduced-motion` disables or replaces all animations with static states — mandatory, existing pattern preserved.

### Prohibited
- Decorative animation (spinners, confetti, parallax for effect, float on non-signature elements, marquees). No motion that exists only to look "alive."

---

## 17. Responsive / Mobile Rules

Mobile is a first-class experience, defined first. Each area below has explicit small-screen behavior.

| Area | Desktop | Mobile |
|---|---|---|
| Navigation | Sticky bar, inline links | Drawer (Escape, scroll lock, aria-expanded) |
| Hero | Statement left; Lift SVG right | Statement + primary CTA above the fold; SVG scales; hierarchy holds |
| Products | Grid/panels per family | Single-column; spec rows stack; tables become lists |
| Specifications | Structured tables | Tables to stacked rows/lists; no horizontal overflow |
| Calculator | Full funnel (type→building→capacity→stops→finish→result→WhatsApp) | Same funnel usable; result + disclaimer legible; breakdown visible; large touch targets |
| Forms | Inline | Single column; keyboard-friendly; ≥44px targets |
| CTAs | Inline prominence | FAB (WhatsApp) fixed and visible; primary buttons full-width where appropriate |
| Imagery | Evidence blocks | Scale well; captions readable; no opaque overlays |
| Footer | Multi-column | Contact + WhatsApp + nav links remain accessible |

**General rules:** no horizontal scroll on any breakpoint; touch targets ≥44px for primary controls; evidence/stat content must remain truthful and legible at all sizes.

---

## 18. Accessibility Rules

- **Contrast:** cyan `#22d3ee` text on dark surfaces meets target contrast; body zinc `#a1a1aa` on `#08080a` legible; headings white. Semantic states meet contrast; pair color with icon/label (never color-only).
- **Focus states:** `focus-visible` with cyan outline + 2px offset (existing) preserved everywhere; never removed. All interactive elements get visible focus.
- **Keyboard:** full site operable by keyboard; skip link preserved; logical tab order; Escape closes menus/modals; visible focus on arrival.
- **Touch targets:** ≥44px effective size for buttons, nav, FAB, form fields.
- **Text readability:** readable body size; reasonable line length; no justified text without hyphenation; uppercase limited to short labels.
- **Forms:** associated labels; visible focus; clear validation messages with icon + text; error identity (not color-only).
- **Semantic structure:** landmarks; one `h1` per page; ordered headings; semantic lists/tables; correct button vs link usage.
- **Reduced motion:** `prefers-reduced-motion` disables/reduces all animation (§16).
- **Live regions:** dynamic updates (calculator result, form feedback) announced via polite live regions.

---

## 19. Anti-AI-Slop Rules

Implementation checklist — a design fails if it exhibits any of these:

1. **Generic stock hero/product/engineering/statement/CTA photo** presented as Deenar evidence → prohibited (§8).
2. **Decorative gradient overlays** on images or cards → prohibited (§6, §13).
3. **Repetitive bordered card grids** across every content type → vary presentation (§7, §13).
4. **Unverified claim given the same visual weight as confirmed specs** → verified content normal; TBD content labeled (§4, §9, §11).
5. **Empty mission/vision/value block** without verified substance → rewrite or remove; never decorative boilerplate.
6. **Decorative motion** (no hierarchy/feedback/story purpose) → prohibited (§16).
7. **Invented statistics, awards, certifications, clients, team members** → prohibited (§11). No "1,000+ lifts," "20+ years," "most trusted" unless documented.
8. **Calculator output presented as an official quotation** → always ESTIMATE (§12).
9. **Service-coverage contradiction hidden** → flagged and resolved only with verified data (§10).
10. **Visual choice made only to match a reference site (Schindler/Otis/Arup)** → transfer principles, never aesthetics/layout/wording (§19 note).
11. **Generic CTA template repeated every page/section** → CTA matches section intent (§14).
12. **Glassmorphism, arbitrary shadows, AI-framework default styling** → prohibited (§13).

Also prohibited: generic "Our Mission / Our Vision / Our Promise" blocks; redundant trust-badge rows; any choice justified by "it's common in AI-generated sites."

---

## 20. M2.5 Dependencies

Everything below stays `[TBD - BUSINESS VERIFICATION REQUIRED]` until real quotations and owner verification are available. Do not fill these with assumptions.

### P0 — blocks major design/content
- Manufacturing/factory evidence (facility confirmation, photos, capacity, process)
- Service coverage resolution (nationwide vs Karachi + Sindh; technician count; spare-part locations)
- Real project portfolio (8–12 completed installations)
- Certification documents (EN 81-20/50, EN 81-41, ISO 9001, PSQCA, PEC, type-test)
- Key team identification (Founder/MD, Chief Engineer, Project Manager, Service Head)
- Photography/media acquisition plan (who shoots, approvals, permissions)

### P1 — improves quality
- Component/supplier brands (motors, controllers, doors, safety gear)
- Real pricing calibration (5+ anonymized quotations)
- Warranty / AMC terms (period, inclusions/exclusions, response SLA, pricing tiers)
- Modernization portfolio + named upgrade categories
- Actual installation timelines (home/passenger/freight)
- Company founding year / history / milestones

### P2 — useful later
- Industry associations/memberships (PLA, PEC)
- Export/international projects
- Sustainability/energy-efficiency data
- R&D / custom engineering examples
- Architect/consultant relationships
- Urdu content/translation

**Design system status with respect to M2.5:** the system is fully buildable without M2.5. M2.5 supplies CONTENT into prepared placeholders (evidence, specs, coverage, pricing calibration). Nothing in §1–§19 requires M2.5 to function.

---

## 21. Implementation Rules

Rules for any AI/code agent performing redesign work using this document:

1. **Follow this design system.** `docs/design.md` is the authority for design decisions; `docs/design-decisions.md` is the authority for rationale; do not deviate from locked decisions.
2. **Follow the story.** `docs/story.md` governs message order (SEE → UNDERSTAND → TRUST → ACT), audience, and homepage narrative.
3. **Follow business truth.** `docs/business-truth.md` governs what may be claimed. Never invent projects, clients, certifications, team, factory capability, pricing, coverage, warranty terms, or history.
4. **Never override this system with generic AI defaults.** If a styling instinct conflicts with a rule here, the rule wins. When in doubt, quote the rule that justifies a choice.
5. **Flag TBDs, don't fill them.** When required information is missing/marked `[TBD - BUSINESS VERIFICATION REQUIRED]`, keep the marker, surface the gap, and ask — do not fabricate plausible values.
6. **Prefer existing components** when they already satisfy the system; modify rather than duplicate.
7. **Preserve accessibility.** Run any change against §18; never regress focus, contrast, keyboard, or reduced-motion behavior.
8. **Implement placeholders honestly.** Empty evidence slots show structure + empty-state text (§11), never fake content.
9. **Keep referrals intact.** Do not rename, delete, or restructure without updating referring documents (site.ts, products.ts, pricing.ts, blog.ts, components).
10. **Verify before reporting.** Confirm sections/values against this document before considering a task complete.

---

## 22. Final Design Status

- **M4.3 Design System Foundation: COMPLETE.** `docs/design.md` created; 22 sections established.
- **Final business-dependent calibration: PENDING M2.5.** Quotations and owner verification not yet transferred; all business-dependent content remains `[TBD - BUSINESS VERIFICATION REQUIRED]`.
- **Implementation: NOT STARTED.** No source code, components, routes, assets, or configuration modified.
- **Hallmark audit: NOT RUN in this phase.** A separate visual/design critique may follow against this design direction; it must not override business truth, M2.5 requirements, the story architecture, or locked M4.2 decisions.
- **Next phases:** independent design critique (after this document); then M5 implementation per this system, after (or in parallel with) M2.5 verification as directed.

---

File created: docs/design.md
Only docs/design.md created. No source files modified. No images created.
No business facts invented. All unverified information carries the canonical marker.
M4.3 complete. M4.2 and M4.3 ready for independent Hallmark critique.