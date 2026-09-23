# Deenar Lift Company — Design Decisions (M4.2)

Phase: M4 — Design & Taste (Decision Pass)
Status: Full M4.2 specification reconstructed from source docs (business-truth.md, story.md, design-study.md, design-reference-study.md, project-context.md).
Source authority: Repository-only evidence. M2.5 business verification still postponed.
No source files modified. No images created. `docs/design.md` remains for M4.3.

---

## 1. Design Personality

**Decision:** Engineering credibility over luxury. Industrial without cold. Premium without luxury.

**Implementation rules:**
- The site must read as a serious Karachi engineering company that is becoming more transparent — showing real lifts, real installations, real people, real specifications — not a marketing company becoming more impressive.
- Every design improvement must increase evidence visibility or conversion clarity. If a visual element does not support evidence or conversion, it must not be added.
- Premium is achieved through precision (structured specs, original illustration, clean spacing, real photography — when available), not luxury decoration (gradients, abstract imagery, decorative motion, luxury language).
- The tone remains direct and technical: structured specs, direct language, respect for the visitor's intelligence.
- No generic corporate brochure feel; no luxury showroom feel; no AI-generated corporate template feel.

---

## 2. Visual Hierarchy

**Decision:** Hierarchy serves the visitor journey SEE → UNDERSTAND → TRUST → ACT (source: story.md).

**Implementation rules:**
- **Primary message** (hero identity): company name, lift-product range, Karachi–Pakistan location, and the WhatsApp conversion path. Must be unobstructed and immediately readable. Manufacturing claims must NOT be the primary message until M2.5 verifies them.
- **Supporting information** (product range, process, services): structured, scannable, secondary in visual weight to the hero.
- **Evidence** (real photos, specs, documentation, team, certifications — when available): must dominate visual hierarchy over decoration. Evidence appears after identity is established (reference-study hypothesis 3: manufacturing evidence after product identity; project evidence after pricing/process; team evidence after services).
- **Technical data** (specs, calculator outputs, process steps): monospace numbers, structured lists — readable at a glance, never buried under decorative elements.
- **Pricing** (calculator): labeled as ESTIMATE; breakdown structure visible; clearly distinct from verified quotations.
- **CTA** (WhatsApp primary): consistently reachable, but must not compete with content hierarchy. One dominant idea per screen; each major section has ONE clear purpose.

---

## 3. Typography

**Decision:** Preserve Space Grotesk for all text; expand monospace for numbers/data. No additional fonts.

**Implementation rules:**
- **Space Grotesk** (weights 300–700, loaded via next/font): the only proportional font. Used for headings, subheadings, body, labels, buttons.
- **Monospace data type:** numbers, PKR values, capacities, specs, calculator outputs, technical identifiers. Expands from current usage to spec tables, calculator outputs, and any future technical documentation.
- **Heading hierarchy:** large bold headings with tracking-tight; medium subheadings; small uppercase labels with tracking-wider for eyebrow text (existing scale preserved).
- **Body text:** readable size (current default), zinc scale color, comfortable line length.
- **Labels:** uppercase, tracking-wider, small — used for section eyebrows and field labels.
- **Technical information:** structured lists with clear headings, not dense paragraphs.
- **Numbers/prices:** monospace always. PKR formatting with lakh/crore (existing convention).
- **Readability rules:** hierarchy clear at a glance; technical detail scannable; no decorative typography (no huge script/display fonts, no text as decoration).

---

## 4. Color System

**Decision:** Preserve the dark industrial base and cyan signal color. Cyan is the ONLY bright color. Do not invent a large palette.

**Implementation rules:**
- **Background:** #08080a (near-black), solid or with engineering grid backdrop (.bg-grid) on key sections.
- **Surfaces:** #0b0b0e, #101013 (existing card/section surfaces).
- **Borders:** white/10 (subtle white at 10% opacity) for section separation and card boundaries.
- **Primary text:** zinc scale (#a1a1aa body); white (#fafafa) headings.
- **Muted text:** lower zinc scale values for secondary/tertiary information.
- **Cyan signal (#22d3ee):** the ONLY bright color. Functional roles only: CTAs, links, focus indicators, interactive states, progress dots, selection color. Never decorative.
- **Success / warning / error:** functional semantic states used ONLY where the UI communicates status (form validation, estimate vs. verified labels, availability states). Keep muted — must not compete with cyan signal. Exact hexes defined at implementation; default to zinc/white-based semantic styling with cyan for positive action states until verified business needs demand otherwise.
- **Rule:** No decorative gradients on generic imagery. No color per product family (existing per-product accent gradients REMOVED — product identity comes from content and structure, not color).

---

## 5. Layout & Spacing

**Decision:** Medium-high density with clear hierarchy. Preserve existing max-width and generous vertical padding.

**Implementation rules:**
- **Containers:** `max-w-7xl` preserved as the content width limit. Narrower containers for spec-heavy or reading-heavy sections as needed.
- **Section widths:** full-bleed backgrounds for identity/statement sections; constrained content inside.
- **Spacing rhythm:** preserve generous vertical padding (`py-20`, `sm:py-28`). Consistent rhythm across sections.
- **Alignment:** left-aligned text (RTL/Urdu handled only after M2.5 — Urdu content is P2). Consistent gutter alignment across sections.
- **Density:** medium-high. Content-rich but never cluttered. Each section has breathing room.
- **Grids:** structured where data benefits (capabilities bar, product families with structured specs, calculator breakdown) — NOT the same card grid applied to every content type. Vary presentation by content type (reference-study lesson: no card-grid monotony).
- **Whitespace:** deliberate, supporting hierarchy. Whitespace is not decorative luxury whitespace.
- **Borders vs color changes:** section separation via borders (white/10) or subtle surface changes — not decorative backgrounds.

---

## 6. Imagery & Media Rules

**Decision:** Evidence-first imagery. Generic stock imagery is NEVER presented as Deenar evidence.

**Implementation rules:**
- **Real product images** (after M2.5): actual installed lifts, cabin interiors, control panels — replace all current Unsplash product photos.
- **Project images** (after M2.5): real installations with location/year/specs. [TBD - BUSINESS VERIFICATION REQUIRED]
- **Factory images** (after M2.5): exterior, fabrication, assembly, testing, paint, dispatch — for the manufacturing section. [TBD - BUSINESS VERIFICATION REQUIRED]
- **Team images** (after M2.5): real people with names/roles/qualifications. [TBD - BUSINESS VERIFICATION REQUIRED]
- **Technical drawings / diagrams** (after M2.5): datasheets, dimensioned drawings, component specs — used where specifiers need them.
- **Video** (after M2.5): real installation/factory footage only if provided. No decorative stock video.
- **Unavailable media:** when evidence does not exist, the design uses HONEST, non-deceptive representations — the custom HeroLift SVG, clean spec-focused cards, structured data. Evidence placeholders are built into the architecture so real media can be inserted without restructuring.
- **Explicit prohibition:** generic stock photography (building, team, engineering, cityscape, abstract) must never appear as though it documents Deenar's work, facility, team, or installations. Remove/replace all current Unsplash usage.

---

## 7. Product Presentation

**Decision:** Preserve the 6-family structure (Passenger, Home/Villa, Freight/Goods, Hospital, Panoramic, Escalators) with structured specs.

**Implementation rules:**
- Each family: clear non-generic name + short description, confirmed spec ranges exactly as defined in `src/lib/products.ts` (capacity, speed, travel/stops, drive, doors, features), feature list with brief explanations, link to pricing calculator.
- Imagery: real product/installation photos when M2.5 provides them; otherwise clean spec-focused cards — NOT gradient-overlay cards.
- Spec data shown is code-defined only. Where exact technical content is required but unverified, use `[TBD - BUSINESS VERIFICATION REQUIRED]`:
  - Passenger: motor/controller/door brands, exact cabin dimensions per capacity, safety gear certification, load-test docs.
  - Home: exact pit/headroom, hydraulic unit specs, single-phase requirements, compliance standard (EN 81-41 or equivalent).
  - Freight: platform dimensions, door clear openings, duty cycle, guide rail specs, waterproof/weatherproof ratings.
  - Hospital: which EN/GB standards verified, exact cabin width/depth, vibration specs, alarm/intercom brands.
  - Panoramic: glass thickness/spec, structural calculations, wind load ratings, outdoor conditions, custom shapes.
  - Escalators: rise heights per model, truss specs, motor/drive supplier, compliance standard (EN 115 or equivalent).
- No invented specs, no rounding to industry norms — code-defined values only.

---

## 8. Service Presentation

**Decision:** Preserve the 4-service structure (Supply & Installation, AMC, Modernization, Repair). Services must be clearly distinguishable. Coverage contradiction flagged, not hidden.

**Implementation rules:**
- Each service: clear description of what the customer receives, structured — not a generic card blob.
- Distinguish services from products visually and in navigation (products = equipment families; services = lifecycle support).
- **Service-coverage contradiction** ("nationwide" vs "Karachi and all of Sindh"): must NOT be hidden or glossed over. It remains unresolved until M2.5 confirms geographic scope, response SLA, technician count, and spare parts coverage. Design must be able to express verified coverage once provided. [TBD - BUSINESS VERIFICATION REQUIRED]
- AMC / warranty terms: standard contract display format designed, content pending M2.5. [TBD - BUSINESS VERIFICATION REQUIRED]
- Modernization: named upgrade categories are a proven reference pattern (Schindler ReStore/ReNew/RePlace) — the principle transfers (clear named paths), but Deenar naming/evidence pending M2.5. Do not copy the reference names.
- No invention of response SLAs, coverage maps, technician counts, or pricing tiers.

---

## 9. Trust & Evidence

**Decision:** Build structured architecture for verified evidence. Zero fabricated evidence.

**Implementation rules** — design the placeholders now, content after M2.5:
- **Projects:** 8–12 real installations — building type, location, lift specs, year, description, photo. Portfolio format: name, location, year, brief description, real photo, link to details (reference pattern). [TBD - BUSINESS VERIFICATION REQUIRED]
- **Clients:** named references/testimonials with title, company, quote (5–10). No anonymous or invented testimonials. [TBD - BUSINESS VERIFICATION REQUIRED]
- **Team:** key people (Founder/MD, Chief Engineer, Project Manager, Service Head) with photos, bios, qualifications. [TBD - BUSINESS VERIFICATION REQUIRED]
- **Factory/manufacturing evidence:** facility photos, fabrication/assembly/testing area, quality documentation, capacity data. [TBD - BUSINESS VERIFICATION REQUIRED]
- **Certifications:** scanned/verified copies of EN 81-20/50, EN 81-41, ISO 9001, PSQCA, PEC, or applicable standards; component supplier certificates. [TBD - BUSINESS VERIFICATION REQUIRED]
- **Technical documents:** downloadable datasheets per product family, technical drawings, component spec sheets. [TBD - BUSINESS VERIFICATION REQUIRED]
- **Testimonials:** presented only with real attribution; placeholders designed but content never fabricated.
- **Rule:** evidence placeholders are built in from day one so M2.5 content inserts without restructuring. Until then, sections show honest structure — never empty trust-badge decoration, never fake content.

---

## 10. Pricing & Calculator

**Decision:** Preserve the calculator as a budget-planning tool. Outputs are algorithmic ESTIMATES, never quotations. Current pricing remains unverified.

**Implementation rules:**
- **Estimate labeling:** every output must be visibly labeled ESTIMATE (not QUOTATION). Calculator outputs show budget range + line-item breakdown (machine, shaft/doors, installation, misc) + estimated timeline (weeks).
- **Ranges:** existing low/high range (±10% / +15% logic in `pricing.ts`) preserved.
- **Assumptions:** visible explanation of what drives the price (lift type, building type, capacity, stops, finish) and what is NOT included (civil works, electrical supply upgrades, shaft preparation, post-installation maintenance contract).
- **Uncertainty:** visible disclaimer — outputs are algorithmic budget estimates for planning only; final quotes require site survey, shaft dimensions, civil conditions, component selection, and current import/component costs; no price guarantee until an itemized quotation is issued.
- **Transition to contact:** the calculator always leads to WhatsApp (pre-filled with configuration) or a site-survey request. It is never a standalone conversion endpoint.
- **Calibration:** real quotation validation of base/per-stop/capacity/building/finish values and installation percentage pending M2.5 (5+ anonymized quotes). [TBD - BUSINESS VERIFICATION REQUIRED]
- **Other pricing content:** the pricing sample-estimate table remains as code-defined estimates, clearly marked; FAQ answers must not invent payment plans, timelines, or coverage. [TBD - BUSINESS VERIFICATION REQUIRED]

---

## 11. CTA & Conversion

**Decision:** WhatsApp is the primary conversion path. Calculator is the secondary path. Direct phone/email is tertiary.

**Implementation rules:**
- **Primary CTA — WhatsApp:** the confirmed deep-link (pre-filled message) everywhere relevant: hero, pricing calculator sidebar, contact page, product cards, service sections, blog CTAs, footer. Confirm functionality preserved. Is the highest-urgency action on the page when a conversion moment is present.
- **Secondary CTA — Calculator / site survey request:** self-service budget estimation, then a guided step to WhatsApp or survey request.
- **Contact actions:** phone (03132477205), email (msiddiqui78640@gmail.com), WhatsApp (923132477205) visible in header/footer/contact page but supporting — not replacing — the structured path.
- **CTA hierarchy:** one primary action per section at a time; no equal-weight competing buttons. Tertiary contact info is visually quieter.
- **Button prominence:** cyan = the single brightest action color; secondary buttons use surface/border styling; no more than one dominant cyan CTA per screen context.

---

## 12. Navigation

**Decision:** Preserve the existing 6-page structure. Do not add unsupported navigation items.

**Implementation rules:**
- **Desktop:** current primary nav (6 links, text-based, underline animation) preserved. Sticky, scroll-aware behavior maintained.
- **Mobile:** collapsing menu preserved (drawer with Escape, overflow-hidden, aria-expanded). Navigation must remain accessible and predictable.
- Product/service organization stays within existing pages (no new multi-level dropdown structure — the reference lesson on category depth is NOT adopted for Deenar's 6-page scope).
- Future sections (projects, team, certifications, downloads) are designed as evidence placeholders WITHIN existing structure — new nav items are only added when M2.5 actually provides that content.
- No link to a page/section that has no supported content.

---

## 13. Components & Surfaces

**Decision:** Structured cards for specs, clean buttons with cyan signal, minimal borders (white/10). No glassmorphism, no decorative gradients, no arbitrary shadows.

**Implementation rules:**
- **Buttons:** clean, flat, cyan primary fill with readable contrast; secondary = surface/border style; hover/focus states explicit. Rounded corners moderate (rounded-md).
- **Cards:** used for structured data (specs, products, process steps, calculator breakdown). Border white/10, dark surface #0b0b0e/#101013. NOT the same card grid applied to every content type — vary presentation.
- **Borders:** subtle, consistent (white/10). Section separation via borders or subtle surface change, not decorative backgrounds.
- **Forms:** contact/survey fields with clear labels, visible focus states, validation states (success/warning/error semantic styling), accessible names.
- **Specification tables:** monospace numbers, clear column/row headers, structured — replacement for dense prose.
- **Badges:** used for status labeling (e.g., ESTIMATE, availability, verified/unverified markers) — never as decorative trust badges.
- **Accordions:** for FAQ and layered technical detail; accessible (proper buttons/headers).
- **Alerts:** for estimates, disclaimers, and status messages; muted, functional, not decorative.
- **Image blocks:** framed evidence blocks with captions (location/year/spec) for real photos; honest placeholders meanwhile.
- **Section headings:** consistent eyebrow (uppercase, tracking-wider) + heading pattern across the site.
- **ANTI-PATTERNS (explicit prohibitions):** excessive rounded containers (candy look); glassmorphism (frosted translucent surfaces); decorative gradients (overlays on images or cards); arbitrary shadows / elevation without meaning; repetitive bordered card grids applied uniformly to all content types.

---

## 14. Motion

**Decision:** Purposeful motion only. No decorative animation.

**Implementation rules:**
- **Allowed motion:**
  - `.reveal` scroll-reveal (opacity 0→1, translateY 26px→0, 0.8s) for section entries.
  - `float-slow` (7s gentle vertical float) on the hero Lift SVG — the signature original asset.
  - `pulse-dot` (2.4s pulse) on status indicator dots.
  - `mobile-menu-enter` (0.25s slide-in) for the mobile drawer.
  - Interaction feedback: hover/active states on buttons, links, cards; focus-visible transitions.
- **Purpose of motion:** draw attention to key elements (hero), reveal content progressively (scroll), reinforce identity (float), support navigation (mobile drawer), signal interactivity (hover/focus).
- **Reveal behavior:** content reveals once, subtle, no persistent looping; stagger minimal.
- **Interaction feedback:** instant, small-scale; no bouncy/elastic effects.
- **Reduced motion:** `prefers-reduced-motion` disables or reduces all animations (existing pattern preserved); reveals become static states.
- **Prohibition:** no decorative animation without hierarchy/feedback/story purpose; no infinite spinning, no confetti, no parallax purely for effect, no float for non-signature elements.

---

## 15. Responsive / Mobile

**Decision:** Mobile is a primary experience, not a scaled-down afterthought.

**Implementation rules:**
- **Foundational rule:** every section must remain understandable on small screens; navigation collapses; the calculator, forms, CTAs, specs are fully usable.
- **Navigation:** mobile drawer preserved (Escape close, body scroll lock, aria-expanded).
- **Hero:** identity + primary CTA visible without scroll; Lift SVG scales; text hierarchy holds.
- **Products:** spec cards/rows reflow to single column; spec tables become readable lists or horizontally scrollable only when necessary.
- **Specifications:** structured data must not be cut off; use stacked rows / responsive tables.
- **Calculator:** full funnel (type → building → capacity → stops → finish → result → WhatsApp) usable on small screens; result and disclaimer legible; breakdown visible.
- **Forms:** comfortable touch targets, single-column layout, keyboard-friendly.
- **CTAs:** WhatsApp FAB remains fixed and visible; primary buttons full-width where appropriate.
- **Imagery:** evidence images scale well; captions remain readable; no image gets overwhelmed by overlays.
- **Tables:** avoid horizontal overflow; convert wide tables to stacked layout on small screens.
- **Footer:** contact info, WhatsApp, and nav links remain accessible; not visually abandoned.

---

## 16. Accessibility

**Decision:** Preserve and extend the confirmed accessibility baseline.

**Implementation rules:**
- **Contrast:** cyan #22d3ee on dark surfaces for text/links meets target contrast; body zinc text on #08080a legible; headings white. Semantic states also meet contrast (do not rely on color alone — pair with icons/labels).
- **Focus states:** focus-visible with cyan outline + 2px offset (current) preserved; never removed. All interactive elements get visible focus.
- **Keyboard navigation:** full site operable by keyboard; skip link preserved; logical tab order; Escape closes menus/modals.
- **Touch targets:** ≥44px effective touch area for primary controls (buttons, nav, FAB, form fields).
- **Text readability:** readable body size, reasonable line length, no justified text without hyphenation control, uppercase labels limited to short phrases.
- **Forms:** associated labels, visible focus, clear validation messages (not color-only), error identity.
- **Semantic structure:** landmark elements, one h1 per page, ordered headings, semantic lists/tables, buttons vs links used correctly.
- **Reduced motion:** respects `prefers-reduced-motion` (disables/reduces all animation).
- **Status announcements:** dynamic updates (calculator result, form feedback) announced via polite live regions.

---

## 17. Anti-AI-Slop Rules

**Decision:** Enforce the anti-AI-slop rules from project-context.md as implementation-level prohibitions.

**Implementation rules (prohibitions):**
1. No generic Unsplash hero/product/engineering/statement/CTA photo presented as Deenar evidence.
2. No decorative gradient overlays on generic images.
3. No repetitive bordered card grids applied to all content types.
4. No unverified claim shown with the same visual weight as confirmed specs.
5. No empty mission/vision/value block without verified substance.
6. No decorative motion (pure animation without hierarchy/feedback/story purpose).
7. No invented statistics, awards, certifications, clients, team members.
8. No calculator output labeled as an official quotation.
9. No service-coverage contradiction hidden; resolved before final design.
10. No visual choice made solely because it matches Schindler/Otis/Arup aesthetics.

**Also prohibited:** glassmorphism; arbitrary shadows; generic "Our Mission / Our Vision / Our Promise" blocks; any visual decision made only because it is common in AI-generated websites.

---

## 18. M2.5 Dependencies

Everything that must remain open until real quotations and owner verification are available. [TBD - BUSINESS VERIFICATION REQUIRED]

### P0 — Blocks major design
- Manufacturing/factory evidence (facility address confirm, photos, capacity, process)
- Service coverage resolution (nationwide vs Karachi + Sindh; technician count; spare parts depots)
- Real project portfolio (8–12 minimum completed installations)
- Certification documents (EN 81-20/50, EN 81-41, ISO 9001, PSQCA, PEC, type-test)
- Key team identification (Founder, Chief Engineer, Project Manager, Service Head)

### P1 — Improves quality
- Component/supplier brands (motors, controllers, doors, safety gear)
- Real pricing calibration (5+ anonymized quotes validating calculator)
- Warranty / AMC terms (period, inclusions/exclusions, response SLA, pricing tiers)
- Modernization portfolio (named upgrade categories + examples)
- Actual installation timelines (home/passenger/freight)
- Company founding year / history / milestones

### P2 — Useful later
- Industry associations/memberships (PLA, PEC)
- Export/international projects
- Sustainability/energy-efficiency data
- R&D / custom engineering examples
- Architect/consultant relationships
- Urdu content/translation

---

## 19. Decision Rationale

Each locked decision is justified by the documented truth (business-truth.md), story (story.md), study (design-study.md), and reference study (design-reference-study.md).

| Decision | Rationale |
|----------|-----------|
| Dark industrial base (#08080a + cyan #22d3ee) preserved | Confirmed existing identity; distinctive vs generic corporate sites; engineering tone aligns with brand. Modification: evidence replaces stock imagery — base unchanged (design-study §2). |
| Cyan as ONLY bright color, functional only | Confirmed signal color role (CTAs, links, focus, interactive); keeps hierarchy clear; anti-decorative-gradients (design-study §2, project-context anti-slop). |
| Space Grotesk + monospace expanded, no new fonts | Confirmed pairing; monospace numbers create engineering credibility; technical data must stay scannable (design-study §1–2). |
| Structured product/service data preserved | Confirmed strength; catalog experience + calculator transparency (business-truth §3; story §7–8). |
| WhatsApp-first conversion preserved | Confirmed functional; low-friction; matches Pakistani market behavior; calculator always leads to it (story §11). |
| Calculator preserved with ESTIMATE labeling | Functional asset; algorithmic outputs must never read as quotations; transparency is a differentiator only if honest (story §4,9). |
| Evidence-first imagery, no stock as evidence | Zero authentic photos now; any generic image presented as Deenar work is deceptive; placeholders created for real content (business-truth §5; design-study §3; reference-study §5). |
| HeroLift SVG preserved and prominent | The only original visual asset; one strong identity moment beats many decorative effects (design-study §1; reference-study §5). |
| Service-coverage contradiction flagged, not hidden | Verified contradiction in repository ("nationwide" vs "Karachi + Sindh"); honesty requires visible resolution path, not concealment (business-truth §4; story §8). |
| Homepage narrative order preserved | Hero → Products → Process → Pricing → Services → Why Deenar → Statement → CTA matches SEE→UNDERSTAND→TRUST→ACT (story §5). |
| Per-product decorative gradients removed | Ambiguous color variety without meaning; product identity comes from content/specs, not color (design-study §3 "avoid"). |
| Evidence placeholders built-in | M2.5 content must insert without restructuring; site stays credible before and after verification (story §13, reference-study hypothesis 11). |

---

## 20. Final Summary

### Locked Design Decisions
1. Design personality: engineering credibility; industrial without cold; premium without luxury.
2. Visual hierarchy follows SEE → UNDERSTAND → TRUST → ACT; one dominant idea per section.
3. Typography: Space Grotesk (all text) + monospace (numbers/data). No additional fonts.
4. Color roles: #08080a bg, #101013/#0b0b0e surfaces, white/10 borders, zinc text, white headings, cyan #22d3ee as the ONLY bright color (functional only). Success/warning/error as muted semantic states.
5. Layout: max-w-7xl containers, generous vertical padding, medium-high density, structured grids varied by content type.
6. Imagery: evidence-first; stock imagery never presented as Deenar evidence; HeroLift SVG preserved and prominent; honest placeholders for missing media.
7. Products: 6 families preserved with code-defined specs; imagery swaps to real photos when available; no invented specs.
8. Services: 4 services clearly distinguishable; coverage contradiction flagged, not hidden.
9. Trust: placeholder architecture for projects, clients, team, factory, certifications, technical documents, testimonials — content only after M2.5.
10. Calculator: budget-planning ESTIMATE tool with range + breakdown + timeline + disclaimers; always transitions to WhatsApp/survey.
11. CTA hierarchy: WhatsApp primary, calculator/survey secondary, phone/email tertiary; one dominant cyan action per context.
12. Navigation: existing 6 pages preserved; no unsupported additions; evidence sections integrate within existing structure.
13. Components: structured cards, clean buttons with cyan signal, minimal borders, no glassmorphism/gradients/arbitrary shadows.
14. Motion: reveal, hero float, pulse-dot, mobile drawer, interaction feedback only; reduced-motion respected.
15. Mobile: primary experience; calculator, specs, forms, CTAs, imagery, tables, footer all fully usable.
16. Accessibility: contrast, focus-visible (cyan + 2px offset), keyboard, touch targets ≥44px, semantic HTML, reduced motion, live regions.

### M2.5-Dependent Decisions [TBD - BUSINESS VERIFICATION REQUIRED]
- Real product specifications (pit/headroom, cabin dimensions, glass specs, duty cycle, rise heights)
- Real pricing calibration (base/per-stop/capacity/building/finish values; installation %; timeline)
- Component brands (motor, controller, doors, safety gear)
- Project evidence (8–12 real projects with photos/specs/years)
- Manufacturing/factory evidence (facility, capacity, process)
- Certifications (EN 81-20/50, EN 81-41, ISO 9001, PSQCA, PEC, type-test)
- Team (key people, bios, photos)
- Service coverage (nationwide vs Karachi + Sindh; SLA; technician count; spare parts)
- Warranty / AMC terms (coverage, exclusions, response commitments, pricing)
- Company history (founding year, milestones, ownership)

### Anti-Slop Rules (10)
1. No generic stock hero/product/engineering/statement/CTA photo as Deenar evidence.
2. No decorative gradient overlays on generic images.
3. No repetitive bordered card grids across all content types.
4. No unverified claim at equal visual weight with confirmed specs.
5. No empty mission/vision/value block without substance.
6. No decorative motion.
7. No invented statistics, awards, certifications, clients, team members.
8. No calculator output presented as an official quotation.
9. No service-coverage contradiction hidden.
10. No visual choice made only to match Schindler/Otis/Arup aesthetics.

### M4.2 Status
- M4.2 Design Decisions: **COMPLETE** (reconstructed from source docs).
- M2.5 business verification: **PENDING** (real quotations and owner information not yet transferred).
- Final business-dependent calibration: **PENDING M2.5**.
- `docs/design.md` (M4.3 design system): **NOT CREATED** — deferred until M2.5 or as directed.
- Source code: **UNCHANGED**. No images created.

---

File restored: docs/design-decisions.md (complete 20-section M4.2 specification).
Compact context preserved at: docs/project-context.md (byte-identical to the original design-decisions.md before this restoration).
Only docs/design-decisions.md and docs/project-context.md created/modified.
No source files changed. No images created. No docs/design.md created.