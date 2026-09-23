# Deenar Website Story Architecture

Phase: M3 — Complete (Sections 1–15)
Status: Story framework complete; all sections established. M2.5 verification pending.
Source authority: docs/business-truth.md (repository-only evidence).
No business-owner interview conducted yet (M2.5 postponed).

---

## 1. Story Objective

What the website needs to accomplish:

For the visitor (potential buyer, developer, architect, facility manager):
- Quickly determine whether Deenar is a credible lift supplier/manufacturer in Pakistan.
- Understand what types of lifts and services are available.
- See enough technical detail to evaluate suitability for their building/project.
- Reach a clear, low-friction way to request information or start a conversation.

For Deenar (the company):
- Communicate its positioning (Karachi-based lift manufacturer, full lifecycle: design → manufacture → install → maintain) without inventing proof that does not yet exist.
- Preserve the strong existing elements: the interactive pricing calculator concept, WhatsApp-first conversion, structured product data, engineering-focused content.
- Create a pathway where missing evidence (projects, factory photos, certifications, team bios, real pricing) can later be added without restructuring the story.

Key constraint from M2:
Many of Deenar's core claims — in-house manufacturing at Korangi, nationwide service network, certified installation, life-of-building support, decades of experience — are currently UNVERIFIED or CONTRADICTORY in the repository. The story must not treat these as confirmed facts.

---

## 2. Primary Audiences

Based only on the product families (Passenger, Home, Freight, Hospital, Panoramic, Escalators), the service categories (Installation, AMC, Modernization, Repair), the blog content, and the pricing calculator inputs.

### Audience A: Residential Developer / Villa Owner (Home Lift Buyer)
- Trying to accomplish: Understand whether a compact lift fits their villa, what it costs, what installation requires.
- Needs to know: Capacity (2–6 persons), stops (2–5), hydraulic drive, pit/headroom requirements, installation timeline, price range in PKR.
- Concerns: Will it fit an existing structure? Is there real installation experience in residential settings? What is the actual warranty?
- Note: Actual pit/headroom dimensions, warranty terms, and residential project examples are MISSING from repository. [TBD - BUSINESS VERIFICATION REQUIRED]

### Audience B: Commercial / Apartment Developer (Passenger Lift Buyer)
- Trying to accomplish: Compare lift specifications for a multi-floor building, understand total cost, evaluate service/maintenance options.
- Needs to know: Capacity (6–16 persons), speed (0.5–2.0 m/s), travel (up to 30 stops), drive types (geared/gearless VVVF), automatic doors, destination dispatch option.
- Concerns: Are there completed apartment tower installations? What certifications apply? What is actual delivery and installation time?
- Note: Real completed projects, certification details, and actual installation timelines are UNVERIFIED. [TBD - BUSINESS VERIFICATION REQUIRED]

### Audience C: Industrial / Warehouse Manager (Freight Lift Buyer)
- Trying to accomplish: Find a heavy-duty lift for goods/pallets, confirm load capacity and durability.
- Needs to know: Capacity (1,000–3,000 kg), hydraulic or traction drive, manual or automatic doors, waterproof/weatherproof options, platform customization.
- Concerns: Load testing proof, duty cycle, actual installations in warehouses.
- Note: No freight lift project evidence exists in repository. [TBD - BUSINESS VERIFICATION REQUIRED]

### Audience D: Hospital / Healthcare Facility Planner (Hospital Lift Buyer)
- Trying to accomplish: Confirm stretcher-friendly cabin specs, precise levelling, fire-rated doors, emergency systems.
- Needs to know: Capacity (480–800 kg / 6–10 persons), cabin depth (2,100 mm+), anti-vibration levelling, emergency alarm/intercom, standby power readiness, fire-rated landing doors.
- Concerns: Which EN/GB standard applies? Are there actual hospital installations? Is the manufacturer certified for medical-grade equipment?
- Note: The site claims "EN / GB certified" but no certificate number or standard version is specified. [TBD - BUSINESS VERIFICATION REQUIRED]

### Audience E: Hospitality / Retail Developer (Panoramic / Glass Lift Buyer)
- Trying to accomplish: Find a visually impressive glass lift for an atrium, showroom, or luxury retail space.
- Needs to know: Capacity (480–1,040 kg / 6–13 persons), structural glass cabin, 360° view, MRL or outdoor installation options, custom shapes.
- Concerns: Structural calculations, wind load ratings, glass specifications, actual luxury installations.
- Note: No panoramic lift evidence exists. [TBD - BUSINESS VERIFICATION REQUIRED]

### Audience F: Facility Manager / Existing Building Owner (AMC / Modernization / Repair Buyer)
- Trying to accomplish: Understand maintenance contracts, modernization options, breakdown response.
- Needs to know: AMC coverage (scheduled inspections, priority breakdown, genuine spare parts), modernization services (new drives, controllers, doors), repair response times.
- Concerns: Response time SLAs, geographic coverage (contradiction: "nationwide" in some places vs "Karachi and all of Sindh" in Repair description), spare parts inventory, technician qualifications.
- Note: The repository contains a contradiction in service coverage. This must be resolved with the business before the service story is finalized. [TBD - BUSINESS VERIFICATION REQUIRED]

---

## 3. Visitor Journey

Intended journey for a first-time visitor landing on the homepage:

### SEE (First 3–8 seconds)
- The homepage must immediately communicate: "This is a lift manufacturer in Pakistan, based in Karachi, offering passenger/home/freight/hospital/panoramic lifts and escalators."
- The hero section should NOT rely only on a generic Unsplash photo of a modern building (current state). It should either show real Deenar work (if available after M2.5) or a clear, authentic representation of what Deenar does (e.g., the custom HeroLift SVG, which is confirmed in code).
- The navigation must make it easy to jump to products, pricing (calculator), or contact.

### UNDERSTAND (First 30 seconds to 2 minutes)
- The visitor should understand the range of products (6 families) and services (4 categories) without confusion.
- The pricing calculator concept should be visible and understandable: "Select lift type, building type, capacity, stops, finish — get a budget estimate in PKR."
- Key message: Deenar claims to handle design, manufacture, installation, and maintenance — but this claim requires verification before it can be presented as proven.
- Technical depth should be visible: specs in structured format, not just marketing copy.

### TRUST (As the visitor explores deeper)
- Currently, the site has very little evidence to build trust: zero factory photos, zero real project photos, zero team bios, zero certification displays, zero client testimonials.
- Trust-building elements that DO exist: working calculator (functional proof of competence), structured product data (shows organization), engineering tone, WhatsApp conversion (practical), custom logo and design system.
- The story should create clear placeholders for future evidence (project gallery, certification badges, team section, factory images) without inventing any.

### ACT (Conversion)
- The primary conversion action: start a WhatsApp conversation (pre-filled with enquiry details).
- Secondary conversion: use the pricing calculator to generate an estimate, then click through to WhatsApp or contact form.
- The contact form and WhatsApp button are confirmed working. They should remain central to the conversion strategy.

---

## 4. Core Message Hierarchy

### Primary Message (What the site should make unmistakably clear)
Deenar Lift Company offers passenger, home, freight, hospital, panoramic lifts, and escalators for buildings in Pakistan, with structured pricing estimates available in PKR and a WhatsApp-based enquiry pathway.

Note: The claim "manufactured in Karachi" is currently unverified. It should not be the primary message until M2.5 confirms factory capability and provides evidence.

### Secondary Messages (What should be supported but not over-promised)
1. The company provides installation, annual maintenance, modernization, and repair services.
2. A pricing calculator provides budget estimates in PKR for different lift configurations.
3. The company claims a full lifecycle approach (design → manufacture → install → maintain), but manufacturing evidence is unverified.

### Supporting Messages (Useful context, lower priority)
- Technical specifications are structured and accessible.
- The blog provides practical guidance on lift selection, pricing, maintenance, and commercial building design.
- Contact is direct (phone, WhatsApp, email) with clear business hours.

### Evidence Needed to Support These Messages

| Message Level | Message | Evidence Currently Available | Evidence Missing / Needs M2.5 |
|---------------|---------|----------------------------|-------------------------------|
| Primary | Lift range in Pakistan | Confirmed: 6 product families in code | None (structure sufficient) |
| Primary | PKR pricing estimates | Confirmed: calculator algorithm | Real quotations to calibrate output |
| Primary | WhatsApp enquiry path | Confirmed: form + deep-link | None (functional) |
| Secondary | Full lifecycle (design→install→maintain) | Code-structured services | Manufacturing photos, project portfolio, team bios |
| Secondary | Service coverage | Service descriptions exist | Confirmed geographic coverage, SLA docs, technician count |
| Secondary | Pricing transparency | Calculator breakdown exists | Real quote calibration, warranty terms, payment terms |
| Supporting | Technical specs | Confirmed: structured product data | Component brand details, compliance certificates |
| Supporting | Blog guidance | Confirmed: 4 articles exist | Author attribution, real case studies |

### Claims That Must Remain Unverified Until M2.5
- [TBD - BUSINESS VERIFICATION REQUIRED] "In-house manufacturing in Korangi Industrial Area, Karachi."
- [TBD - BUSINESS VERIFICATION REQUIRED] "Own technicians — not third-party contractors — across Pakistan."
- [TBD - BUSINESS VERIFICATION REQUIRED] "Every lift is load-tested before leaving our facility."
- [TBD - BUSINESS VERIFICATION REQUIRED] "Certified installation by certified technicians."
- [TBD - BUSINESS VERIFICATION REQUIRED] "Free site survey available."
- [TBD - BUSINESS VERIFICATION REQUIRED] "Itemized quotation within 48 hours."
- [TBD - BUSINESS VERIFICATION REQUIRED] "Genuine components / certified suppliers."
- [TBD - BUSINESS VERIFICATION REQUIRED] "International safety standards / EN / GB certified."
- [TBD - BUSINESS VERIFICATION REQUIRED] "Founded on engineer's frustration with imports; decades of experience."
- [TBD - BUSINESS VERIFICATION REQUIRED] "Most trusted lift brand in Pakistan."

---

## 5. Homepage Narrative

The homepage should tell a single, deliberate story rather than being a collection of unrelated sections. Below is the proposed narrative sequence, with purpose and justification for each section's placement.

### Section 1: Hero — Who and What (SEE)
- Purpose: Immediately establish identity: lift company, Karachi-based, serving buildings in Pakistan, offering both products and estimates.
- Main understanding: "This is Deenar — a lift company with real products, real specs, and a real way to get a price estimate."
- Important content/evidence: 
  - Confirmed: Company name, product categories, custom HeroLift SVG illustration.
  - Unverified: Manufacturing location claim (should be held as [TBD] until M2.5 confirms with evidence).
- Why first: Visitors decide within seconds whether to stay. The hero must be unambiguous.
- CTA: Link to pricing calculator + contact/WhatsApp.

### Section 2: Product Overview — Range and Relevance (UNDERSTAND — Part 1)
- Purpose: Show the six product families quickly, with key specs visible at a glance, so a developer or architect can see whether Deenar covers their need.
- Main understanding: "They have passenger, home, freight, hospital, panoramic, and escalator lifts — with structured specs."
- Important content/evidence: Confirmed product data from `src/lib/products.ts`.
- Why second: After identity is established, the visitor needs to know "do you have what I need?"
- Design note (not UI detail): Avoid generic gradient-overlay cards without real product images. Use real imagery when available; otherwise, use clean spec-focused cards.

### Section 3: The Process / Approach — How It Works (UNDERSTAND — Part 2)
- Purpose: Communicate the claimed lifecycle: survey → design → manufacturing → installation → maintenance.
- Main understanding: "This company describes a full lifecycle — but manufacturing and installation claims require verification."
- Important content/evidence: Process steps exist in code (`process` array in `src/app/page.tsx`). The 4-step process (Free Site Survey → Design & Proposal → Manufacturing → Installation & Handover) is structured.
- Why third: Once the visitor knows what products exist, they need to understand how engagement works — especially if the claim is "turnkey."
- Critical story decision: The manufacturing step should be presented as CLAIMED, not PROVEN, until M2.5 provides factory evidence. The section can remain, but its language must not overstate verification.

### Section 4: Pricing / Calculator — Transparency and Control (TRUST — Part 1)
- Purpose: Give the visitor a practical, self-service way to get a budget estimate in PKR, building confidence through transparency.
- Main understanding: "I can get an estimated price right now — in PKR — for my specific lift configuration."
- Important content/evidence: Confirmed calculator (`PricingCalculator.tsx`, `pricing.ts`). The algorithm is defined in code. The output format (PKR, lakh/crore, low/mid/high ranges, timeline) is confirmed.
- Why fourth: After understanding products and process, the visitor's next logical question is "what will it cost?" Offering this before asking for contact reduces friction.
- Critical note: The numerical pricing is NOT business-verified. The calculator must present outputs as ESTIMATES based on algorithmic modeling, not confirmed quotations. A clear disclaimer is required.

### Section 5: Services — Lifecycle Continuity (TRUST — Part 2)
- Purpose: Show that the company claims to support lifts after installation — AMC, modernization, repair.
- Main understanding: "Installation is not the end — maintenance, repair, and modernization are available."
- Important content/evidence: Confirmed 4 service categories (`services` array). Repair coverage claim is contradictory in repository ("nationwide" vs "Karachi and all of Sindh"). This contradiction must be resolved before finalizing service story.
- Why fifth: After pricing and process, the visitor needs to know whether long-term support exists.

### Section 6: Why Deenar / Values — Positioning with Caution (TRUST — Part 3)
- Purpose: Communicate the intended positioning (local manufacturer, direct accountability, safety focus) WITHOUT inventing evidence.
- Main understanding: "This company positions itself as a Karachi manufacturer that handles full lifecycle — but key claims remain unverified."
- Important content/evidence: Values and "Why Deenar" sections exist in code (`whyUs` array, mission/vision/promise cards, values array). All are unverified claims.
- Why sixth: Values and origin story work best after the visitor understands products, process, pricing, and services. Placing this too early risks sounding generic.
- Critical story decision: This section must be rewritten for M4 to separate CLAIMED positioning from EVIDENCE. It should not present unverified claims as proven facts. The section can stay in the architecture but must be redesigned to include verification markers.

### Section 7: Statement / Standard — Voice and Identity (TRUST — Part 4)
- Purpose: Reinforce brand identity with a concise statement about engineering philosophy.
- Main understanding: "This company sees lifts as infrastructure, not commodities."
- Important content/evidence: Existing statement band exists ("Lifts are infrastructure. They should be built like it."). This is a tone/positioning claim, not a factual claim requiring verification.
- Why here: Provides emotional/philosophical reinforcement before the final conversion request.

### Section 8: Final CTA — Action (ACT)
- Purpose: Give the visitor a clear, single action: contact via WhatsApp or request a quote/survey.
- Main understanding: "I can start the conversation now."
- Important content/evidence: Confirmed WhatsApp deep-link, contact page, form functionality.
- CTA design principle: The primary action should be WhatsApp (low friction, confirmed working). A secondary action should be the pricing calculator or site survey request.

---

## 6. Key Story Decisions

Based on the M1 audit, M2 business truth analysis, and repository inspection:

1. **Do not make "manufactured in Karachi" the primary message until M2.5 verifies it with factory evidence.** The site currently claims this repeatedly but has zero photographic or documentary proof.
2. **Preserve the pricing calculator concept but clearly label outputs as estimates.** The algorithm is defined in code, but no real quotations have been used to calibrate it. The site must not present algorithmic ranges as guaranteed prices.
3. **Keep WhatsApp as the primary conversion path.** The form, deep-link generator, and mobile FAB are all confirmed working. This matches Pakistani market behavior.
4. **Use the confirmed product/service structure as the backbone of the site story.** Six products, four services — this is well-organized. Do not invent new categories or merge existing ones without business confirmation.
5. **Create explicit evidence placeholders in the story architecture.** Sections for project gallery, factory evidence, team bios, certification badges, and testimonials should be designed into the site structure — but must remain clearly labeled as "to be completed after M2.5."
6. **Resolve the service-coverage contradiction before finalizing service content.** The repository says both "nationwide service" and "Karachi and all of Sindh." The business must clarify.
7. **Rewrite the "About" story to separate confirmed structure from unverified claims.** The 4-step approach (survey, fabrication, testing, aftercare) is well-structured but relies on unverified manufacturing claims. The section should reflect this clearly.
8. **Keep the engineering/technical tone.** The dark aesthetic, monospace specs, structured data, and direct language are confirmed strengths. Do not replace them with generic corporate marketing copy.
9. **Do not use Unsplash images as evidence in the redesign.** Every major image (hero, products, engineering team, statement band, CTA backgrounds) uses generic stock photography. These sections require either real Deenar evidence or redesigned presentations that do not rely on false imagery.
10. **Mark the homepage hero as a story-critical decision point.** The current hero relies on a generic Unsplash photo plus a custom SVG lift illustration. The story architecture recommends keeping the SVG (confirmed original asset) and replacing the generic photo with either real evidence or an honest, non-deceptive representation.

---

File created: docs/story.md (First Pass — Sections 1–6 only)
Only `docs/story.md` was created or modified. No source files changed.
No design decisions made. No business facts invented.
Next phase: Complete M3 sections 7–15 after M2.5 (business verification) or as directed.

---

## 7. Product Story

### What a visitor needs before choosing a lift
A buyer must match their building type (residential, commercial, industrial, hospital, hospitality, public transit) to a lift family, then evaluate capacity, stops, speed, drive type, cabin dimensions, and installation requirements. They also need to understand whether the manufacturer can actually supply, install, and maintain that specific lift in their location.

### How the six families should be presented
The confirmed structure (`src/lib/products.ts`) is well-organized. Each family should be presented with:

- A clear, non-generic product identifier (name + short description).
- Confirmed spec ranges (capacity, speed, travel, drive, doors, operation) exactly as defined in code.
- Feature list with brief explanations for non-technical buyers.
- A visual representation. Currently, all product images are Unsplash stock photos. [TBD - BUSINESS VERIFICATION REQUIRED] Real product or installation photography should eventually replace these.
- A link to the pricing calculator, so the visitor can model a budget estimate for this family.

### What technical information is missing
For every product family, critical details are missing:

- **Passenger:** Motor/controller brand names, door operator brand, exact cabin dimensions per capacity, safety gear certification number, load-test documentation.
- **Home:** Exact pit/headroom dimensions, hydraulic unit specs, single-phase electrical requirements, cabin interior options, compliance standard (EN 81-41 or equivalent).
- **Freight:** Platform dimensions per capacity, door opening widths, duty cycle rating, guide rail specs, waterproof/weatherproof ratings.
- **Hospital:** Which EN/GB standard applies (standard number, year/version), exact cabin width/depth for stretcher accommodation, vibration specs, emergency alarm/intercom brand.
- **Panoramic:** Glass thickness/specification, structural engineering calculations, wind load ratings, outdoor installation conditions, custom shape capabilities.
- **Escalators:** Rise height options per model, truss specifications, motor/drive manufacturer, exact compliance standard (EN 115 or equivalent).

These gaps must be filled with real manufacturer documentation or verified technical datasheets — not inferred from industry norms — before the site can serve as a credible specification resource for engineers and architects.

### Where real project evidence would help
For each family, the site should eventually show:
- At least one completed installation with location, year, building type, and basic specs.
- A photograph showing the actual lift installed (not a generic stock building).
- For hospital lifts: evidence of medical-grade installation.
- For panoramic lifts: evidence of glass/cabin quality in a real atrium.
- For freight: evidence of heavy-load operation.

Without this evidence, the site remains a structured catalog rather than a credible portfolio.

---

## 8. Service Story

### Supply & Installation
- **Customer question:** "Can Deenar install this lift in my building, and what does the process involve?"
- **What the site should communicate:** The 4-step process (survey, design/proposal, manufacturing, installation/handover) exists in code. The site should explain each step clearly and indicate what the customer receives at each stage.
- **Evidence that would build confidence:** Photos of site surveys in progress, design drawings (even anonymized), installation timelines verified by real projects, certified technician identification.
- **Missing:** No installation portfolio, no survey booking system evidence, no certified technician details. [TBD - BUSINESS VERIFICATION REQUIRED]

### Annual Maintenance Contracts (AMC)
- **Customer question:** "What does maintenance include, how quickly will you respond, and what does it cost?"
- **What the site should communicate:** Preventive and corrective maintenance, scheduled inspections, priority breakdown response, genuine spare parts.
- **Evidence that would build confidence:** Sample AMC contract terms, response-time SLA in writing, spare parts inventory evidence, technician team size and geographic coverage, maintenance cost ranges.
- **Missing:** The repository contains a contradiction: AMC claims "nationwide service" while Repair says "Karachi and all of Sindh." [TBD - BUSINESS VERIFICATION REQUIRED] Actual service area, technician headcount, spare parts depot locations, AMC pricing tiers, and contract terms must be verified before finalizing.

### Modernization & Refurbishment
- **Customer question:** "Can Deenar upgrade an older lift without full replacement?"
- **What the site should communicate:** Upgrade options (new VVVF drives, controllers, doors, cabins), energy efficiency improvements, safety upgrades.
- **Evidence that would build confidence:** Before/after photos of modernized lifts, specific upgrade case studies, energy savings data, cost comparison (modernization vs replacement).
- **Missing:** Zero modernization examples exist in repository. [TBD - BUSINESS VERIFICATION REQUIRED]

### Repair & Breakdown Service
- **Customer question:** "If my lift breaks, how quickly will someone fix it?"
- **What the site should communicate:** Emergency call-out, technician response, spare parts availability.
- **Evidence that would build confidence:** Average response time data, geographic coverage map, spare parts inventory list, emergency contact pathway.
- **Missing:** No response-time statistics, no geographic coverage confirmation, no spare parts documentation. The claim "Karachi and all of Sindh" conflicts with "nationwide service." [TBD - BUSINESS VERIFICATION REQUIRED]

---

## 9. Pricing Story

### Why the calculator concept should be preserved
The existing calculator (`PricingCalculator.tsx`, `pricing.ts`) is a genuine functional asset. It allows a visitor to select:
- Elevator type (5 options),
- Building type (7 options with multipliers),
- Capacity (per type),
- Number of stops (slider with type-specific ranges),
- Finish tier (standard, premium, luxury with multipliers).

The output includes a budget range (low/mid/high in PKR, formatted with lakh/crore), a line-item breakdown (machine, shaft/doors, installation, misc), an estimated delivery timeline (weeks), and a WhatsApp message pre-filled with the configuration. This creates transparency and lowers the barrier to enquiry.

### What role it should play
The calculator should serve as a **budget-planning tool**, not a **binding quotation system**. Its role in the visitor journey:
- After understanding products and process (Sections 2–3 of homepage), the visitor asks: "What will this cost?"
- The calculator provides an algorithmic estimate, giving the visitor a reason to stay engaged.
- The output must clearly state: "This is an indicative estimate based on standard parameters. Final pricing requires a site survey and confirmation of specifications."
- After viewing the estimate, the visitor should be guided to the WhatsApp enquiry or site survey request.

### What inputs/results are useful
The current inputs are appropriate for a first estimate. The output format (PKR with lakh/crore formatting, breakdown, timeline) is well-designed. What is missing:
- A clear explanation of what drives the price range (e.g., why a passenger lift in a commercial building costs more than a home lift in a residence).
- A note about what is NOT included (civil works, electrical supply upgrade, shaft preparation, post-installation maintenance contract).
- A link to real, verified sample estimates that match actual recent quotations.

### How estimates should be communicated honestly
Every calculator output and pricing-related page must include a visible disclaimer:
- "These figures are algorithmic budget estimates for planning purposes only."
- "Final quotations depend on site survey results, shaft dimensions, civil conditions, component selection, and current import/component costs."
- "No price guarantee is implied until a formal, itemized quotation is issued after survey."

The current pricing data (`pricing.ts`) defines base prices, per-stop costs, capacity factors, building multipliers, and finish multipliers. These are NOT verified against real business quotations. Before the redesigned site is launched, the business must provide:
- Recent, anonymized real quotations for calibration,
- Confirmation that the algorithm reflects actual cost structures,
- Clarification on whether installation costs (12% of subtotal in current algorithm) match real project economics.

### What must be calibrated using real quotations
[TBD - BUSINESS VERIFICATION REQUIRED]
Before finalizing the pricing story for public launch:
- Confirm base prices for each elevator type.
- Confirm capacity multiplier factors.
- Confirm building type multipliers.
- Confirm finish tier multipliers.
- Confirm installation cost percentage.
- Confirm delivery timeline calculations.
- Confirm whether pricing should include taxes, import duties, or other fees.

---

## 10. Trust & Proof Architecture

The current site has almost zero evidence-based trust elements. The future design must create structured spaces for evidence, clearly distinguishing what exists from what must be added after M2.5.

### Real completed projects (Strategic priority: HIGH)
- What doubt it addresses: "Has Deenar actually built anything like my project?"
- Current status: Zero real project evidence exists.
- Required after M2.5: 8–12 completed installations with building type, location, lift specs, year, basic description, and at least one photo.
- Where it should appear: Products page (per-family examples), dedicated portfolio/project page, homepage evidence section.

### Authentic project photography (Strategic priority: HIGH)
- What doubt it addresses: "Can I see the actual quality of installation and finish?"
- Current status: All images are Unsplash stock photos.
- Required after M2.5: Factory photos, installation photos, completed lift photos (interior and exterior), cabin interior photos.
- Where it should appear: Product cards (replacing stock photos), hero section, about/manufacturing section, service section.

### Factory/manufacturing evidence (Strategic priority: HIGH)
- What doubt it addresses: "Is Deenar really a manufacturer or just a reseller?"
- Current status: The site claims manufacturing at Korangi but provides zero proof.
- Required after M2.5: Factory exterior/interior photos, fabrication process images, assembly/test area, quality control documentation.
- Where it should appear: About/manufacturing section, dedicated "How We Build" or facility page.

### Engineers/team information (Strategic priority: MEDIUM-HIGH)
- What doubt it addresses: "Who are the people behind this company? Are they qualified?"
- Current status: Zero team photos, zero bios, zero engineer credentials.
- Required after M2.5: Key team members (Founder/MD, Chief Engineer, Project Manager, Service Head) with photos, brief bios, qualifications.
- Where it should appear: About section, dedicated team page, possibly footer or contact area.

### Certifications (Strategic priority: MEDIUM-HIGH)
- What doubt it addresses: "Are these lifts safe? Do they meet required standards?"
- Current status: The site claims "EN / GB certified" for hospital lifts but provides no certificate number, standard version, or document.
- Required after M2.5: Scanned certificates or certified copies of EN 81-20/50, EN 81-41, ISO 9001, PSQCA, PEC, or any other applicable standards. Component supplier certificates if relevant.
- Where it should appear: Product pages (per relevant family), dedicated certifications/trust page, footer badges.

### Technical documentation / datasheets (Strategic priority: MEDIUM)
- What doubt it addresses: "Can my architect or engineer evaluate this technically?"
- Current status: Structured specs exist (`products.ts`), but no downloadable PDFs, no technical drawings, no component specifications.
- Required after M2.5: Downloadable datasheets per product family, technical drawings where appropriate, component specification sheets.
- Where it should appear: Product pages, a dedicated resources/downloads section.

### Testimonials / client references (Strategic priority: MEDIUM-HIGH)
- What doubt it addresses: "Have other customers had a good experience?"
- Current status: Zero testimonials, zero named clients.
- Required after M2.5: 5–10 named references with title, company, brief quote, photo optional.
- Where it should appear: Homepage trust section, dedicated testimonials/references page, product pages (per-family references).

### Warranty and AMC information (Strategic priority: MEDIUM)
- What doubt it addresses: "What happens after installation? What is covered?"
- Current status: AMC and warranty are mentioned repeatedly but never detailed in writing.
- Required after M2.5: Standard AMC contract terms, warranty period per product, service response commitments, exclusion/inclusion lists.
- Where it should appear: Services section, dedicated service/AMC page, contact/survey confirmation.

### Service coverage (Strategic priority: MEDIUM)
- What doubt it addresses: "Can Deenar service my building if it's outside Karachi?"
- Current status: Contradictory claims in repository.
- Required after M2.5: Confirmed service area, technician locations, spare parts inventory locations, response time commitments.
- Where it should appear: Services page, contact/FAQ section, map or list of covered areas.

### Component / supplier information (Strategic priority: LOW-MEDIUM)
- What doubt it addresses: "What brands are used? Are they reliable?"
- Current status: "Genuine components" claimed, no brands named.
- Required after M2.5: Motor/drive manufacturer, controller brand, door operator brand, safety gear supplier.
- Where it should appear: Technical datasheets, about/manufacturing section, certification section.

---

## 11. CTA Strategy

### Primary CTA: WhatsApp Conversation
- What it is: The existing WhatsApp deep-link (`whatsappLink` in `site.ts`) opens a pre-filled message in WhatsApp Web or app. The form (`ContactForm.tsx`) also opens this link upon submission.
- Where it should appear: Every major page (homepage hero, pricing calculator sidebar, contact page, product cards, service sections, blog post CTAs, footer).
- What the visitor expects after clicking: A WhatsApp chat opens with their enquiry details already filled in. They press "Send" to reach the Deenar team.
- Why it works: Confirmed functional, low-friction, matches Pakistani business behavior, requires no account creation.
- Story principle: The WhatsApp path should remain the primary conversion mechanism. It should not be replaced with a generic email form or automated chatbot.

### Secondary CTA: Pricing Calculator / Site Survey Request
- What it is: The calculator (`PricingCalculator.tsx`) allows self-service budget estimation. A secondary path directs the visitor to request a formal site survey or quotation.
- Where it should appear: Prominently after the hero, in the pricing section, and as a follow-up after calculator use.
- What the visitor expects: After using the calculator, they receive an estimated range. The next logical step is to confirm details with a real survey — not to treat the algorithmic output as final.
- Story principle: The calculator should not stand alone as a conversion endpoint. It must always lead to the WhatsApp or survey request.

### Tertiary CTA: Direct Phone / Email
- What it is: Phone (`03132477205`), email (`msiddiqui78640@gmail.com`), and WhatsApp number (`923132477205`).
- Where it should appear: Navbar (top bar), footer, contact page cards.
- What the visitor expects: Direct access to contact information without navigating through forms.
- Story principle: These direct channels should remain visible but should support — not replace — the structured WhatsApp/form pathway.

---

## 12. Current Website Content Decisions

| Existing Element | Decision | Reason |
|------------------|----------|--------|
| Hero section (home) | CHANGE | Generic Unsplash photo provides no evidence. Keep custom HeroLift SVG. Replace generic photo with real evidence or redesigned non-deceptive presentation. Manufacturing claim must be marked unverified. |
| Capabilities bar (3,000 kg / 2.0 m/s / 30 stops / Turnkey) | KEEP (structure) / VERIFY (claims) | Numbers match product specs, which is good. But claims about manufacturing and service must remain marked as [TBD] until M2.5. |
| Services section (4 categories) | KEEP (structure) / VERIFY (content) | Well-organized. Repair coverage contradiction ("nationwide" vs "Karachi+Sindh") must be resolved before finalizing descriptions. |
| Products grid (6 families) | KEEP (structure) / CHANGE (imagery) | Excellent structured data. All images are Unsplash. Must be replaced with real product/installation imagery after M2.5. Spec details are confirmed from code. |
| Why Deenar / Values section | CHANGE | All claims unverified. Section must be rewritten to separate confirmed positioning from unverified claims. Should include verification markers rather than present claims as facts. |
| Process / 4-step approach | KEEP (structure) / CHANGE (language) | Well-structured. Manufacturing and installation steps must not be presented as proven until evidence exists. |
| Statement band ("Infrastructure...") | KEEP | Confirmed original content. This is a tone/positioning claim, not a factual claim requiring verification. Can remain. |
| CTA section (final) | KEEP (structure) / CHANGE (context) | Conversion mechanism works. Should maintain WhatsApp-first approach. Must include clear note that pricing estimates are not final quotes. |
| Pricing calculator | KEEP (concept) / VERIFY (data) | Functional asset. Must label outputs as algorithmic estimates, not verified quotations. Real quotation calibration required before launch. |
| Pricing sample estimates (table) | KEEP (structure) / VERIFY (data) | Well-formatted. Numbers come from unverified algorithm. Must be calibrated or clearly marked as estimates. |
| FAQ (pricing) | KEEP (structure) / CHANGE (content) | Useful format. Questions must not invent unverified claims. Answer text should reflect current verification status. |
| Blog (4 articles) | KEEP (structure) / CHANGE (content) | Engineering tone is a strength. Articles should be expanded with real project references, author attribution, and verified details. Generic industry advice should be separated from Deenar-specific claims. |
| Blog post pages | KEEP (structure) / CHANGE (related posts) | Related posts logic works. Should eventually link to verified case studies rather than only other generic guides. |
| Contact form | KEEP (function) / CHANGE (confirmation) | WhatsApp integration is confirmed working. The API save function (`api/contact/route.ts`) saves to a local file, which is not production-ready for lead management — this needs a proper CRM or database integration before launch, but the user-facing flow is sound. |
| WhatsApp button (FAB) | KEEP | Confirmed working. Should remain visible across all pages. |
| Footer | KEEP (structure) / CHANGE (links) | Product links all point to `/products` rather than individual anchors. Contact info should be verified against business reality. Social links exist but may not have active content. |
| Generic imagery (all Unsplash) | REMOVE / REPLACE | Every major image must be replaced with real evidence or redesigned to avoid false representation. No exceptions for hero, products, engineering, about, statement, or CTA sections. |
| Navigation (primary) | KEEP (structure) | 6 links work. Blog inclusion is fine even with only 4 posts — it establishes content authority. |
| Mobile menu | KEEP | Confirmed functional. Should maintain accessibility features (Escape key, overflow hidden, aria-expanded). |
| Logo / Brand mark | KEEP | Confirmed original SVG. Should remain the central brand asset. |
| Skip link / Focus indicators | KEEP | Confirmed accessible patterns. Must remain in redesign. |
| Metadata / SEO structure | KEEP | Confirmed working structure. Should be expanded with real descriptions once business facts are verified. |

---

## 13. Story Principles for M4 (Communication Principles, Not Visual Design)

These principles guide how the redesigned site should communicate — independent of fonts, colors, spacing, or animations.

1. **Evidence before claims.** Where Deenar claims manufacturing, service coverage, or certification, the site must either show evidence or clearly label the claim as unverified until M2.5 confirms it.
2. **Technical clarity over corporate fluff.** Use structured specs, clear ranges, and direct language. Avoid vague marketing phrases like "world-class," "unparalleled," or "most trusted" unless verified.
3. **Show real work where possible.** Every product family, service, and process step should eventually be supported by real photos, case studies, or technical documents — not generic illustrations.
4. **One dominant idea per screen.** Each major section should have a single, clear purpose (identity, range, process, pricing, trust, conversion) rather than combining unrelated messages.
5. **Clear conversion path at every stage.** A visitor should never reach a point where they don't know what to do next — whether that's use the calculator, read a spec, open WhatsApp, or request a survey.
6. **Authentic Pakistani business context.** Reference Karachi, PKR, load conditions, local building types, and Urdu-friendly communication naturally — not as decorative additions but as real operational context.
7. **Avoid generic AI-generated marketing language.** Do not use repetitive patterns like "Our mission is to..." / "Our vision is to..." / "We are committed to..." without real content behind them. Replace these with specific, verifiable statements about what Deenar does.
8. **Separate confirmed structure from unverified claims.** The site should make it easy for visitors to distinguish between what is documented (product specs, calculator logic, contact details) and what is aspirational or unverified (manufacturing capability, service network, experience claims).
9. **Preserve engineering credibility.** The existing technical tone (structured specs, calculator logic, engineering-focused blog) is a confirmed strength. The redesign should reinforce, not dilute, this identity.
10. **Design for verification, not for imagination.** Every section that relies on unverified claims should be built so that real evidence (photos, certificates, case studies, testimonials) can be inserted without restructuring the site.
11. **Transparency in pricing.** The calculator should always present outputs as estimates with clear disclaimers. No algorithmic range should ever be presented as a binding quotation.
12. **Service coverage must be unambiguous.** Before launch, the site must resolve the contradiction between "nationwide" and "Karachi + Sindh" claims and present only verified coverage.

---

## 14. M2.5 Dependencies (Business Verification Required Before Final Launch)

These decisions block important story improvements and must be resolved through direct discussion with the business owner.

### P0 — Blocks Major Story Decisions

1. **Factory/manufacturing verification.** Is there an operational facility in Korangi? Can it be photographed? What is the manufacturing capacity? [Blocks: manufacturing claims, factory evidence section, credibility of lifecycle story.]
2. **Service network clarification.** Is coverage truly nationwide, Karachi + Sindh, or another scope? How many technicians? Where are spare parts stored? What is the actual response-time SLA? [Blocks: service story, repair/AMC credibility.]
3. **Real completed projects (8–12 minimum).** Can project details be shared? Are clients willing to provide references or allow photos? [Blocks: portfolio, product evidence, testimonial section.]
4. **Certification evidence.** Which EN/ISO/PSQCA/PEC certificates exist? Can copies be provided for display? [Blocks: trust section, safety claims, hospital lift credibility.]
5. **Key team identification.** Who are the founder, chief engineer, project manager, and service lead? Can they be photographed and profiled? [Blocks: team section, accountability claims.]

### P1 — Improves Story Quality

6. **Component/supplier verification.** What motor/controller/door/safety gear brands are actually used? [Blocks: technical documentation, component credibility.]
7. **Real pricing calibration.** Can 5+ recent anonymized quotations be shared to calibrate the calculator? [Blocks: pricing story, estimate reliability.]
8. **Warranty and AMC contract details.** What are the standard terms, exclusions, response commitments, and pricing tiers? [Blocks: service section, post-sale credibility.]
9. **Modernization portfolio.** Are there completed modernization projects that can be documented? [Blocks: modernization service evidence.]
10. **Actual installation timelines.** What are verified installation timelines for home, passenger, and freight lifts? [Blocks: process/story timeline accuracy.]
11. **Founding year and company history.** When was Deenar founded? What are the key milestones? [Blocks: origin story, credibility timeline.]

### P2 — Useful But Not Urgent

12. **Industry association memberships.** Any PLA, PEC, or other memberships? [Blocks: additional credibility markers.]
13. **Export or international project history.** Any installations outside Pakistan? [Blocks: potential market expansion claims.]
14. **Sustainability or energy efficiency data.** Any documented energy savings from modern VVVF drives? [Blocks: green/efficiency messaging.]
15. **Architect or consultant relationships.** Any known partnerships or references from design professionals? [Blocks: spec-in credibility.]
16. **Urdu content availability.** Is there a translator or Urdu content plan? [Blocks: accessibility for primary market.]

---

## 15. Final Story Summary

The Deenar website should tell a single, deliberate story: a Karachi-based lift company offering six structured product families and four service categories to buildings across Pakistan, with a transparent pricing calculator and a direct WhatsApp conversion path. The story is built on confirmed repository facts — functional product data, a working calculator, structured services, engineering-focused content, and a custom brand identity — while clearly acknowledging that manufacturing evidence, project portfolios, team profiles, certifications, service network details, and pricing calibration remain unverified until M2.5.

The visitor journey starts with identity (who Deenar is), moves through range (what products exist), explains process (how engagement works), provides budget transparency (pricing calculator), confirms lifecycle continuity (services), and concludes with a clear WhatsApp action. Each step is designed to work without false evidence: generic images must be replaced, manufacturing claims must be verified, service contradictions must be resolved, and calculator outputs must remain labeled as estimates.

The design system for M4 should follow communication principles rather than decorative patterns: evidence before claims, technical clarity over marketing fluff, real work where possible, one dominant idea per screen, and an authentic Pakistani business context. The site architecture should be built so that missing evidence — projects, factory images, certifications, testimonials, team bios — can be inserted naturally once M2.5 provides them, without restructuring the entire story.

Until M2.5 is completed, the redesigned site should remain honest about what is confirmed (product structure, calculator function, brand identity, technical tone, contact pathways) and what requires verification (manufacturing, projects, certifications, service coverage, real pricing, experience claims). This approach preserves credibility, avoids AI-generated marketing language, and creates a durable framework that improves rather than degrades as real business evidence becomes available.

---

File updated: docs/story.md (Sections 7–15 added)
Only `docs/story.md` was modified. No source files changed.
No business facts invented. All unverified claims marked [TBD - BUSINESS VERIFICATION REQUIRED].
No design implementation decisions made. M4 principles are communication-focused, not visual.
