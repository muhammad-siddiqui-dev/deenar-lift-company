# Project Context — Deenar Lift Company (M4.2)

Compact reference for future AI tasks. Source docs: business-truth.md, story.md, design-study.md, design-reference-study.md.

---

## Business Truth

### Confirmed
- Company: Deenar Lift Company (Karachi, Pakistan)
- Contact: 03132477205 / 923132477205 (WhatsApp) / msiddiqui78640@gmail.com
- Hours: Mon-Sat 9AM-7PM
- Brand: dark industrial (#08080a bg, cyan #22d3ee accent, Space Grotesk, monospace numbers)
- Assets: custom SVG logo (LiftMark), custom SVG hero lift illustration, working calculator, WhatsApp form, structured product/service data
- Stack: Next.js 16, React 19, Tailwind 4, TypeScript

### Unverified / TBD
- Manufacturing at Korangi Industrial Area — NO factory photos / proof
- "In-house manufacturing" — no machinery/capacity data
- Service coverage contradiction: "nationwide" vs "Karachi + Sindh"
- Certifications: "EN / GB certified" for hospital lifts — no standard version / document
- Team: zero photos / bios / qualifications (founder, chief engineer, service head)
- Projects: zero completed installations shown
- Pricing calculator values: algorithmic ONLY — NO real quotation calibration
- Client testimonials: zero
- Component brands: not named ("genuine components" unverified)
- Company age / founding year / ownership: unknown
- Warranty / AMC terms / SLA / spare parts inventory: not documented

### Prohibitions (DO NOT INVENT)
- No fake projects, clients, certifications, testimonials, statistics, team members, factory capabilities, history, pricing guarantees, service SLAs.
- No superlatives ("largest manufacturer," "most trusted").
- No rounding specs to industry norms; use code-defined values only.
- Calculator outputs must remain labeled ESTIMATES until M2.5 calibrates.

---

## Story (docs/story.md)

### Audience (6 groups)
- Residential developer / villa owner (home lift)
- Commercial / apartment developer (passenger lift)
- Industrial / warehouse manager (freight lift)
- Hospital / healthcare planner (hospital lift)
- Hospitality / retail developer (panoramic lift)
- Facility manager / existing owner (AMC / modernization / repair)

### Journey
SEE (hero identity) → UNDERSTAND (6 product families + 4 services) → TRUST (calculator transparency + evidence placeholders) → ACT (WhatsApp + survey/contact).

### Primary message
Deenar offers passenger, home, freight, hospital, panoramic lifts + escalators in Pakistan, with structured PKR pricing estimates and WhatsApp enquiry. Manufacturing claim UNVERIFIED — must not be primary message.

### Homepage sections (narrative order)
Hero (who/what) → Product range → Process (claimed lifecycle) → Pricing (calculator) → Services → Why Deenar / Values (rewritten with verification markers) → Statement band → CTA.

---

## Current Design (docs/design-study.md / design-reference-study.md)

### Existing identity
- Dark industrial (#08080a, cyan #22d3ee signal)
- Space Grotesk + monospace numbers
- Engineering grid backdrop (.bg-grid)
- Custom SVG logo + hero lift illustration
- Structured specs + working calculator
- WhatsApp-first conversion
- Generous spacing (py-20 / max-w-7xl)

### Preserve
- Dark industrial direction (add real evidence, not change base)
- Cyan as ONLY bright color (functional, not decorative)
- Typography pairing (Space Grotesk + monospace)
- Structured product/service data
- Calculator concept (with estimate disclaimers)
- WhatsApp conversion
- Restrained motion (float SVG, scroll reveal, reduced-motion respect)
- Clear hierarchy (SEE→UNDERSTAND→TRUST→ACT)

### Avoid
- Generic Unsplash hero / product / engineering / CTA photos
- Decorative gradient overlays on generic photos
- Repetitive bordered card patterns everywhere
- Unverified claims presented with same visual weight as confirmed facts
- Empty mission/vision/value boilerplate without real substance
- Excessive decorative animation

---

## Reference Lessons (M4.1)

### Schindler (premium manufacturing)
- Real photography dominates; manufacturing evidence (facility, sq ft, certifications) builds credibility
- Named modernization solutions (ReStore/ReNew/RePlace) make complex service understandable
- Project portfolio with real names/locations/dates
- Configurator for professional audience

### Otis (global manufacturing)
- Multi-level navigation by product + industry/application
- Technical resources categorized by audience (architects, contractors, owners, passengers)
- Multiple conversion paths (call, service contract, modernization, resources)
- Mobile preserves category structure
- REAL statistics only (verified)

### Arup (engineering consultancy)
- Team profiles with real names/roles/quotes (most prominent trust element)
- Project portfolio with named projects + locations
- Issue-based content demonstrates expertise through real challenges
- Clean layout without repetitive card patterns
- Minimal decorative effects; maximum content focus
- Company history stated clearly (requires verification for Deenar)

---

## Design Constraints

### Business-truth (unverified must stay unverified)
- All manufacturing/process/service/network/time/pricing claims remain unverified.
- Calculator output must show ESTIMATE, not QUOTATION.
- No statistics, awards, certifications, team names, client names, factory details, component brands invented.

### Story constraints
- Homepage maintains SEE→UNDERSTAND→TRUST→ACT order.
- Each major section has ONE clear purpose.
- Evidence placeholders must be built for M2.5 insertion without restructuring.

### Accessibility
- Skip link preserved.
- Focus-visible with cyan outline + 2px offset maintained.
- Reduced-motion (`prefers-reduced-motion`) must disable/reduce animations.
- Semantic HTML preserved.

### Anti-AI-Slop
- No generic hero stock photo presented as Deenar work.
- No decorative gradient-heavy design.
- No repetitive six-card grid everywhere.
- No glassmorphism / arbitrary shadows.
- No meaningless statistics.
- No fake testimonials / invented projects / fabricated certifications.
- No decorative animation without purpose.
- No generic "Mission / Vision / Values" blocks without real substance behind them.
- No visual decision made only because it is common in AI-generated websites.

---

## Design Decisions (Locked / M2.5-Dependent)

### Locked (can implement without M2.5)
1. Design personality: engineering credibility, industrial without cold, premium without luxury.
2. Typography: Space Grotesk (preserve) + monospace numbers (expand). No additional fonts.
3. Color roles: #08080a bg, #101013/#0b0b0e surfaces, cyan #22d3ee ONLY bright color (CTAs, links, focus, interactive states), zinc text, white headings.
4. Product structure: 6 families preserved with structured specs; imagery replaced with real photos when available (placeholder architecture when not).
5. Service presentation: 4 services clearly distinguishable; coverage contradiction flagged, not hidden.
6. Calculator preserved: budget-planning tool, not binding quote. Clear disclaimer required. Output shows range + breakdown + timeline.
7. WhatsApp remains primary conversion path.
8. Homepage narrative order preserved: Hero → Products → Process → Pricing → Services → Why Deenar → Statement → CTA.
9. Mobile: all sections must remain understandable; navigation collapses; calculator/form/CTAs visible.
10. Evidence-first imagery: no generic stock photos presented as Deenar evidence. HeroLift SVG preserved and prominent.
11. Component language: structured cards for specs, clean buttons with cyan signal, minimal borders (white/10), no glassmorphism, no decorative gradients.

### M2.5-Dependent (TBD — BUSINESS VERIFICATION REQUIRED)
- Manufacturing/factory: how to present factory/manufacturing evidence (photos, process, capacity, certifications)
- Project portfolio: format for 8–12 real installations (names, locations, specs, years, photos)
- Team: engineer/team profiles (names, roles, qualifications, photos)
- Certifications: EN 81-20/50, ISO, PSQCA — display format once verified
- Component brands: motor/controller/door/safety supplier names for spec documentation
- Service coverage: resolved geographic scope + response SLA + technician count
- Pricing calibration: real quotation validation of calculator base/per-stop/multiplier values
- Warranty / AMC terms: standard contract display
- Company history: founding year / milestones (affects credibility timeline)
- Technical specs: exact pit/headroom, platform dimensions, cabin sizes, glass specs, duty cycle ratings, rise heights

---

## Anti-Slop Rules (Concrete)
1. No generic Unsplash hero/product/engineering/statement/CTA photo presented as Deenar evidence.
2. No decorative gradient overlays on generic images.
3. No repetitive bordered card grids applied to all content types.
4. No unverified claim shown with same visual weight as confirmed specs.
5. No empty mission/vision/value block without verified substance.
6. No decorative motion (pure animation without hierarchy/feedback/story purpose).
7. No invented statistics, awards, certifications, clients, team members.
8. No calculator output labeled as official quotation.
9. No service coverage contradiction hidden; must be resolved before final design.
10. No visual choice made solely because it matches Schindler/Otis/Arup aesthetics.

---

## M2.5 Dependencies

P0 (blocks major design):
- Manufacturing/factory evidence
- Service coverage resolution
- Real project portfolio (8–12 minimum)
- Certification documents
- Key team identification

P1 (improves quality):
- Component/supplier brands
- Real pricing calibration (5+ anonymized quotes)
- Warranty/AMC terms
- Modernization portfolio
- Actual installation timelines
- Company founding year / milestones

P2 (useful later):
- Industry associations / memberships
- Export / international history
- Energy efficiency / sustainability data
- R&D / custom engineering examples
- Architect/consultant relationships
- Urdu content / translation

---

## Final Design Direction

Engineering credibility over luxury. Dark industrial base (#08080a + cyan #22d3ee) preserved but enhanced with real evidence. Technical typography (Space Grotesk + monospace) preserved. Structured data preserved. WhatsApp conversion preserved. Calculator preserved with estimate disclaimers.

The site must feel like a serious Karachi engineering company that is becoming more transparent — showing real lifts, real installations, real people, real specifications — not a marketing company becoming more impressive. Every design improvement must increase evidence visibility or conversion clarity.

Premium comes from precision (structured specs, original illustration, clean spacing, real photography) not luxury decoration (gradients, abstract imagery, decorative motion, luxury language).

---

## Self-Review Checklist

- [x] No invented business facts
- [x] Consistent with business-truth.md (manufacturing unverified, pricing unverified, service contradiction flagged, zero evidence acknowledged)
- [x] Consistent with story.md (SEE→UNDERSTAND→TRUST→ACT journey preserved; primary message avoids unverified manufacturing claim)
- [x] Consistent with design-study.md (preservation rules respected; avoidance rules applied)
- [x] Consistent with design-reference-study.md (principles extracted, not copied; anti-copy rules included)
- [x] No copied Schindler/Otis/Arup aesthetics (only transferable principles used)
- [x] Decisions concrete enough for implementation (specific rules for typography, color roles, layout, imagery, products, services, calculator, CTAs, components, motion, mobile, accessibility)
- [x] M2.5 dependencies clearly separated
- [x] Anti-AI-slop rules explicit (10 rules)
- [x] No source code/asset modification
- [x] No images created
- [x] No docs/design.md created yet
- [x] Document size appropriate (~5-8 KB expected)

---

File created: docs/design-decisions.md
Only docs/design-decisions.md created/modified.
No source files changed. No images created. No design.md created.
M4.2 ready for M4.3 design system creation once M2.5 completes.
