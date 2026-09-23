# Deenar Lift Company — Design Study

Phase: M4 — Design & Taste (Preparation Pass)
Status: Design framework established; no implementation changes made.
Source authority: docs/business-truth.md, docs/story.md, existing repository code/styles.
No source files modified. No images created. M2.5 business verification still postponed.

---

## 1. Current Deenar Visual Identity

### Overall visual mood
The site communicates a dark, industrial, engineering-focused identity. The background (#08080a) is almost black with very subtle warmth removed. The overall impression is serious, technical, and modern — not playful, not luxury, not generic corporate. It feels like it belongs to an engineering firm or industrial manufacturer, which aligns well with the company's claimed positioning.

### Color approach
- Primary brand color: cyan (#22d3ee) — used for CTAs, links, focus indicators, progress dots, gradient accents.
- Background: #08080a (near-black with minimal warmth).
- Surface/card colors: #0b0b0e, #101013 (slightly lighter dark surfaces).
- Text: zinc scale (#a1a1aa body, white headings).
- Selection color: cyan on #0a0a0a (high-contrast selection state).
- The cyan acts as a "signal color" — it draws the eye to interactive elements against the dark background. It is not decorative; it serves a navigation and conversion function.

### Typography
- Font family: Space Grotesk (variable weights 300–700, loaded via next/font).
- Sans-serif with geometric/square character — fits the engineering/industrial mood.
- Monospace font used specifically for numbers (PKR values, capacities, specs) — reinforces technical credibility.
- Scale appears consistent: large bold headings (tracking-tight), medium subheadings, small uppercase labels (tracking-wider for eyebrow text), body at readable size.

### Layout tendencies
- Sections are clearly separated by borders (white/10) or background color changes.
- Grid-based sections dominate: 4-column capabilities bar, 3-column product cards, 2-column content layouts, 12-column grid in larger sections.
- Max-width containers (`max-w-7xl`) keep content from stretching too wide on large screens.
- Padding is generous (`py-20`, `sm:py-28`) — the site breathes.

### Imagery
- Zero authentic photography. All images come from Unsplash.
- Hero: generic modern building photo + custom SVG lift illustration.
- Products: stock architecture/interior photos (no actual lifts shown).
- Engineering: generic team/office photo.
- Statement/CTA: generic cityscape photos.
- The custom HeroLift SVG (`HeroLift` component) is the only original visual asset. It is well-designed: geometric, cyan-accented, floating animation.

### Borders/cards
- Cards use `border-white/10` (subtle white border at 10% opacity) on dark surfaces.
- Rounded corners (`rounded-md` / `rounded-lg`) — moderate, not extreme.
- No heavy shadows; minimal elevation used only for interactive states (hover shadow on cards, shadow on WhatsApp FAB).

### Backgrounds
- Main background: solid dark (#08080a) with engineering grid overlay (`bg-grid` utility) in key sections.
- Gradient overlays used heavily on hero images and statement band to blend generic photos into the dark theme.
- Page sections separated by `border-b border-white/10` rather than full color changes.

### Iconography
- Logo: custom SVG (`LiftMark`) — geometric square with lift icon, cyan fill, dark background. Clean and original.
- Navigation icons: none (text-only links with underline animation).
- Social icons: standard SVG paths (Facebook, Instagram, LinkedIn) in footer.
- WhatsApp FAB: custom green circle with WhatsApp logo SVG.
- Arrow icons: simple SVG paths used in CTAs and navigation.

### Motion / animation
- `reveal` animation (`.reveal` class): opacity 0 → 1, translateY 26px → 0, with 0.8s ease transition. Used extensively across sections.
- `float-slow`: 7-second gentle vertical float on hero lift SVG.
- `pulse-dot`: 2.4s pulse on status indicator dot in hero eyebrow.
- `mobile-menu-enter`: quick 0.25s slide-in for mobile navigation.
- All animations respect `prefers-reduced-motion` (disabled/replaced with static states).

### Technical / industrial feeling
The site achieves this through:
- Monospace numbers.
- Engineering grid backdrop.
- Dark industrial color palette.
- Direct, non-fluffy copy.
- Technical terms (VVVF, gearless, MRL, destination dispatch) used without simplification.
- Structured data presentation (spec tables, calculator breakdowns).

### Overall density
Medium-high density in content sections. The site does not feel sparse — there is substantial text, structured data, and interactive elements. However, spacing is generous enough that nothing feels crowded. The balance works for a B2B/infrastructure audience that expects detail.

### Current strengths
1. **Distinctive dark industrial identity** — not generic corporate blue/white.
2. **Custom HeroLift SVG** — original, fits the brand, animated.
3. **Technical typography system** — monospace numbers + geometric sans creates engineering credibility.
4. **Structured data presentation** — product specs and calculator outputs are clear and organized.
5. **WhatsApp-first conversion** — practical, low-friction, culturally appropriate.
6. **Accessibility basics** — skip link, focus-visible indicators, reduced-motion support, semantic HTML.

### Current weaknesses
1. **Zero authentic imagery** — every photo is generic. This undermines all credibility claims (manufacturing, projects, team, factory).
2. **Gradient overlays on generic photos** — used to blend stock images into dark theme. The technique works visually but hides the fact that no real evidence exists.
3. **No visual differentiation between confirmed and unverified claims** — the site looks credible even where evidence is missing.
4. **No real team or leadership presence** — the engineering tone implies expertise but no people are shown.
5. **Product cards rely on decorative gradients** rather than real product imagery.
6. **Limited imagery diversity** — only dark backgrounds + cyan + generic photos. The site could benefit from real textures (metal, concrete, glass, machinery) without losing its identity.

---

## 2. What Should Be Preserved

### Dark industrial direction (PRESERVE — with modifications)
- **Why it works:** It creates an immediate impression of engineering seriousness. It distinguishes Deenar from generic white-background corporate lift websites.
- **What role:** Should remain the core visual mood. However, it should eventually include real textures and photography rather than relying entirely on dark surfaces + gradients.
- **Modification needed:** Replace generic Unsplash images with real evidence (factory, lifts, people) without changing the dark base.

### Cyan accent (#22d3ee) (PRESERVE)
- **Why it works:** It serves a clear functional purpose (CTAs, focus, interactive states) rather than being purely decorative. It has enough contrast against dark backgrounds to meet accessibility.
- **What role:** Continue as primary interactive/action color. Should remain the only bright color in the palette.

### Technical typography (PRESERVE)
- **Why it works:** Space Grotesk + monospace numbers creates engineering credibility. The hierarchy (large headings, uppercase eyebrow labels, structured specs) is clear.
- **What role:** Continue the same font pairing. The monospace for numbers should expand to include spec tables, calculator outputs, and any technical documentation.

### Structured product information (PRESERVE)
- **Why it works:** The product cards with specs, features, and CTAs create a credible catalog experience. The calculator provides transparency.
- **What role:** The layout structure (spec cards, comparison-ready data, calculator integration) should be maintained. Only the imagery and missing specs need updates.

### Calculator presentation (PRESERVE — with clarification)
- **Why it works:** The calculator is a genuine functional asset. Its breakdown (machine cost, shaft, installation, misc) provides useful transparency.
- **What role:** Keep the interactive calculator, the PKR formatting, and the breakdown structure. Add a visible disclaimer that outputs are estimates.

### WhatsApp conversion (PRESERVE)
- **Why it works:** Confirmed working, culturally appropriate, low-friction. It does not require account creation or complex forms.
- **What role:** Remain the primary conversion mechanism across all pages.

### Restrained motion (PRESERVE — with caution)
- **Why it works:** The float animation on the hero SVG, scroll-reveal animations, and pulse indicators add life without overwhelming. They respect reduced-motion preferences.
- **What role:** Keep motion minimal and purpose-driven (drawing attention to key elements, not decorating). Avoid adding motion purely for visual excitement.

### Strong hierarchy (PRESERVE)
- **Why it works:** The site uses consistent spacing, clear section separation, and logical content order (identity → range → process → pricing → services → trust → conversion).
- **What role:** The homepage narrative should maintain this order. No section should compete for attention.

---

## 3. What We Should Avoid

### Generic stock-photo hero sections (AVOID)
- The current hero uses a generic modern building photo. This undermines credibility because the site claims manufacturing capability but shows no real work.
- Replacement direction: Real factory or lift installation imagery when available; otherwise, use the custom HeroLift SVG or a clean, non-deceptive graphic representation.

### Excessive decorative gradients on product cards (AVOID)
- The current product cards use gradient overlays (`product.accent`) primarily for visual variety rather than to communicate product identity.
- Direction: If real product photos are unavailable, use clean cards with clear specs and minimal decorative elements — not decorative gradients that add no meaning.

### Repetitive card-container patterns (AVOID)
- The site uses many similar bordered cards with dark surfaces. This creates visual monotony.
- Direction: Vary the presentation of different content types (spec cards, process steps, services, evidence sections) rather than applying the same card style everywhere.

### Unverified manufacturing claims presented as facts (AVOID)
- The current site states manufacturing claims in the same visual language as confirmed facts (product specs, contact info). There is no visual distinction.
- Direction: Unverified sections should either be redesigned to include verification markers or presented with clear contextual language (not hidden, but clearly labeled).

### Generic AI-generated marketing language patterns (AVOID)
- Patterns like "Our Mission / Our Vision / Our Promise" (used in the current About page) are common AI-generated structures. They feel empty without real content.
- Direction: Replace these with specific, verifiable statements or redesign the section to focus on evidence rather than aspirational statements.

### Visual complexity without communication purpose (AVOID)
- The engineering grid backdrop is meaningful (technical identity). The float animation is meaningful (draws attention to hero illustration). But gradient overlays on generic photos serve no real purpose.
- Direction: Every visual element should either support the story, provide evidence, or guide conversion. Remove decorative elements that do neither.

---

## 4. Reference Study Criteria

### Brand — How identity is created
We should study how premium technical/industrial brands create identity without relying on generic stock imagery. We should look for sites that use original photography, custom illustrations, or structured typography as identity carriers.

### Story — Visual design supporting narrative
We should study how websites use imagery, layout, and hierarchy to guide the visitor through a deliberate journey — especially for complex B2B products that require explanation rather than impulse purchase.

### Typography — Scale, hierarchy, density, emphasis
We should study sites that handle dense technical information (specifications, pricing, process steps) without overwhelming the reader. We should look for effective use of monospace data, uppercase labels, and clear heading hierarchy.

### Layout — Avoiding predictable templates
We should study sites that break from standard "hero + 3 cards + features + testimonials + FAQ + CTA" patterns, particularly those serving engineering, construction, or manufacturing audiences.

### Media — Photography, diagrams, product imagery
We should study how premium industrial sites present products without generic stock photography. We should look for effective use of real installation photos, technical diagrams, process illustrations, and evidence documentation.

### Product presentation — Making complex products understandable
We should study how engineering/manufacturing companies present technical specifications in a way that is both credible to engineers and understandable to non-technical buyers (e.g., developers, hospital planners).

### Trust — Credibility through visual evidence
We should study how sites use real project documentation, team presence, certification display, and technical transparency to build trust — rather than relying on empty marketing language.

### Proof — Real projects, people, certifications, statistics
We should study how evidence is displayed: portfolio layouts, case study formats, certification badges, team presentations, and statistical displays.

### Interaction — Where motion helps
We should study sites that use animation purposefully — to draw attention to key elements, reveal content progressively, or reinforce identity — without decorative motion that adds no value.

### Conversion — CTAs integrated without feeling like sales funnels
We should study how premium B2B sites handle conversion: low-friction enquiry paths, calculator-to-contact flows, and direct messaging integration (WhatsApp, live chat, or direct call) rather than generic email forms.

### Mobile — Story adaptation to small screens
We should study how complex B2B stories and dense information work on mobile — particularly how navigation, product specs, pricing, and conversion paths adapt.

---

## 5. Reference Categories

### Premium industrial engineering / manufacturing (USEFUL)
- **Why useful:** Shows how serious technical companies build credibility without relying on generic marketing language. We need to see how these sites handle product specs, manufacturing evidence, and engineering tone.
- **What to look for:** Original photography of machinery, structured spec presentation, minimal decorative effects, serious typography, direct language.

### Architecture / construction (USEFUL)
- **Why useful:** These sites often serve similar audiences (developers, planners, facility managers) and must communicate complex technical information clearly. They also handle project portfolios well.
- **What to look for:** Project portfolio presentation, technical documentation display, professional but not corporate tone.

### Premium B2B technology / mobility products (USEFUL)
- **Why useful:** Shows how complex products (vehicles, machinery, equipment) are presented with both technical detail and accessibility. These sites often handle pricing transparency and configuration well.
- **What to look for:** Product configurators, spec presentation, trust elements (certifications, testing evidence), conversion integration.

### Technical consulting / engineering services (USEFUL)
- **Why useful:** Shows how expertise-based businesses present team credibility, service structure, and evidence of capability — all of which Deenar needs.
- **What to look for:** Team presentation, service description formats, evidence of expertise, professional but approachable tone.

---

## 6. Reference Selection Rules

A reference website should meet at least 3 of the following criteria:

1. **Distinctive visual identity.** It does not look like it could be any company in its industry. It uses original imagery, custom typography, or structured layout as identity carriers.
2. **Clear technical/product communication.** It presents complex products or services with structured data, clear specs, and understandable explanations — not just marketing copy.
3. **Evidence-based trust.** It uses real project photos, team presence, certification display, or technical documentation rather than stock imagery and generic claims.
4. **Story-driven layout.** The homepage or key pages have a deliberate narrative order rather than a generic template structure.
5. **Effective conversion integration.** The site guides the visitor toward a clear action (contact, quote request, calculator) without feeling like a sales funnel.
6. **Mobile adaptation.** The design maintains story clarity and information hierarchy on small screens, not just responsive scaling.
7. **Avoids AI-template patterns.** It does not rely on repetitive hero/3-cards/features/testimonials/FAQ/CTA structures without purpose.

References that do NOT qualify:
- Any site that uses only generic stock imagery for product/manufacturing sections.
- Any site that relies on empty mission/vision/value statements without evidence.
- Any site with excessive decorative animation or gradients that serve no communication purpose.
- Any site that treats manufacturing/service claims as purely marketing language without evidence.

---

## 7. Preliminary Design Direction

Based ONLY on the current truth: Deenar is a Karachi-based lift company with confirmed product structures, a working pricing calculator, a custom brand identity, engineering-focused content, and serious gaps in real-world evidence.

### Desired emotional impression
The redesigned site should feel like visiting a serious engineering firm's digital presence — confident, precise, and transparent. It should not feel like a luxury showroom or a generic corporate brochure. The impression should be: "These people understand lifts technically and will tell you exactly what you need to know — including what they can and cannot prove yet."

### Desired level of professionalism
High professional credibility without pretension. The site should feel like it belongs to a company that builds infrastructure, not a marketing agency creating brand stories. The tone should remain direct, technical where needed, and respectful of the visitor's intelligence.

### Desired level of technicality
The site should remain technically detailed — structured specs, calculator breakdowns, service descriptions — but should become more accessible where evidence is missing. Technical details should be presented with real context (photos, documentation) rather than abstract descriptions.

### Desired visual density
Medium-high density with clear hierarchy. The site should feel substantial — there is real information here — not sparse or minimalist for its own sake. However, density should not become clutter. Each section should have breathing room.

### Relationship between industrial character and human trust
The industrial identity (dark background, cyan signal, monospace data) provides credibility. Human trust should come from real evidence: actual installations, team members, factory images, certifications. The design should not rely on abstract "trust badges" or decorative elements to create credibility. Trust must be earned through transparency and evidence.

### Relationship between evidence and decoration
Evidence (real photos, specs, documentation, team, certifications) should dominate the visual hierarchy. Decoration (gradients, animations, decorative borders) should serve only to guide attention or reinforce identity. No decorative element should compete with or obscure real evidence.

### How premium/modern it should feel
Modern enough to feel current and credible (clean typography, structured data, interactive calculator, responsive design). Premium enough to justify significant investment (professional presentation, original assets, careful detail). Not luxury — the site should not pretend to be a high-end showroom or architectural firm. It should feel like a premium engineering company.

### What it should NOT feel like
- A generic AI-generated corporate website with stock photos and empty mission statements.
- A luxury brand pretending to sell design objects rather than infrastructure.
- A low-cost reseller using decorative effects to appear premium.
- A generic elevator company website interchangeable with any competitor.

---

## 8. Questions That Must Be Resolved Before Final Design

### [TBD - BUSINESS VERIFICATION REQUIRED] Manufacturing and factory
- Does a real facility exist at Korangi Industrial Area? Can it be photographed?
- What manufacturing equipment, capacity, or processes can be documented?
- What does the factory exterior/interior look like?

### [TBD - BUSINESS VERIFICATION REQUIRED] Product and installation evidence
- What are the 8–12 real completed installations?
- Can installation and completed lift photos be taken or provided?
- What actual cabin interiors, control panels, and installation details exist?

### [TBD - BUSINESS VERIFICATION REQUIRED] Certifications and compliance
- Which EN 81-20/50, EN 81-41, ISO 9001, PSQCA, or PEC certificates exist?
- Can certificate scans or certified copies be displayed?
- What component supplier documentation exists?

### [TBD - BUSINESS VERIFICATION REQUIRED] Team and leadership
- Who are the founder, chief engineer, project manager, and service lead?
- Can they be photographed? What are their qualifications?
- Is there any company incorporation or registration documentation?

### [TBD - BUSINESS VERIFICATION REQUIRED] Real pricing and service terms
- What are recent real quotations for calibration?
- What are standard AMC contract terms and warranty conditions?
- What is the actual service coverage and response-time commitment?

### [TBD - BUSINESS VERIFICATION REQUIRED] Company history and positioning
- When was Deenar founded? What are the key milestones?
- What is the actual service network (cities, technician count)?
- What makes Deenar genuinely different from competitors?

---

## 9. M4 Principles We Should Eventually Turn Into design.md

These are preliminary principles — they should guide design work but are not final implementation instructions.

1. **Distinctive over decorative.** The design should create a recognizable identity through original assets (logo, illustrations, real photography) rather than through decorative effects that could belong to any company.

2. **Evidence over stock imagery.** Real factory photos, completed installations, team members, certifications, and technical documentation should take visual priority over generic images or decorative illustrations.

3. **Technical clarity over visual noise.** Structured specifications, calculator outputs, service descriptions, and process steps should be presented clearly — not buried under decorative design elements.

4. **Real photography over generic imagery.** Where evidence exists, real photos must dominate. Where evidence does not yet exist, the design should use honest, non-deceptive representations rather than fake or misleading imagery.

5. **One strong visual idea per screen.** Each major section should communicate a single purpose clearly — identity, product range, process, pricing, services, trust, or conversion. No section should compete with multiple unrelated messages.

6. **Motion should communicate.** Any animation should draw attention to key elements (hero illustration float, scroll reveal, focus indicators) or support the engineering identity. No decorative motion that adds no information value.

7. **Design should support the story.** Every visual decision — layout, imagery, typography, spacing — should serve the visitor journey defined in M3 (SEE → UNDERSTAND → TRUST → ACT). No visual choice should exist independently of the story.

8. **Mobile is a primary experience.** The design must work for mobile users as well as desktop. The calculator, navigation, product specs, and conversion path must remain fully functional and understandable on small screens.

9. **Industrial without feeling cold.** The dark industrial palette and engineering tone should feel confident and professional — not sterile or unapproachable. Real team photos, clear language, and practical conversion paths help maintain warmth.

10. **Premium without pretending to be luxury.** The site should feel well-crafted and professional (clean typography, structured data, custom assets) without adopting the visual language of luxury brands (excessive whitespace, decorative effects, abstract photography).

11. **Transparency in pricing.** The calculator and any pricing-related sections must clearly distinguish estimates from verified quotations. Visual design should reinforce this distinction (clear labels, disclaimers, structured breakdowns) rather than making estimates look like final prices.

12. **Service coverage must be unambiguous.** The design should make geographic coverage and response commitments clear and verifiable — resolving the current contradiction rather than hiding it.

---

File created: docs/design-study.md
Only docs/design-study.md was created. No source files modified.
No images created. No implementation performed.
M4 design system (`docs/design.md`) remains for future phase after M2.5 and reference studies.
