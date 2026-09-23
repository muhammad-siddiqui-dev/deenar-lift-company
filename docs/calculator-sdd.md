# Deenar Lift Company — Pricing Calculator Software Design Document (SDD)

**Status**: Implementation-ready specification (documentation only).
**Scope**: Design of the redesigned lift pricing calculator / quote flow.
**Authority**: Completed owner (Dad) decisions of 2026 plus verified business facts; supersedes any conflicting earlier draft treatment.
**Documentation-only**: No source code, components, styles, routes, data files, or existing documentation are modified by this task.
**Related docs (read-only references)**: `docs/calculator-pricing-model.md`, `docs/calculator-decision-analysis.md`, `docs/dad-pricing-verification.md`, `docs/pricing-evidence-research.md`, `docs/decision-9-structure-evidence.md`, `docs/quotation-pricing-analysis.md`, `docs/quotation-extraction.md`, `docs/business-truth.md`.

---

## 1. Product Scope (calculator / quote flow)

### 1.1 Offered products that appear in the calculator/quote flow

| Product | Calculator role | Evidence status |
|---|---|---|
| **Passenger — Steel (630 kg)** | **Online estimate (banded)** | `[CURRENT VERIFIED — Dad 2026]` |
| **Passenger — Glass (630 kg)** | **Online estimate (banded, same band as steel)** | `[CURRENT VERIFIED — Dad 2026]` |
| **Cargo / Freight** | Collect requirements; show **broad reference range only**; formal quotation for a configured figure | `[CURRENT VERIFIED — Dad 2026]` overall range only |
| **Home / Villa** | **Quote-only** (offered; no verified price) | `[CURRENT VERIFIED — Dad 2026]` (offered) |
| **Hospital** | **Quote-only** (offered; no verified price) | `[CURRENT VERIFIED — Dad 2026]` (offered) |
| **Imported complete lift** | **Quote-only** (collect requirements/sizes/weight) | `[CURRENT VERIFIED — Dad 2026]` |
| **Passenger — 1000 kg (and any other capacity)** | **Quote-only** (may be collected as a requirement; no price shown) | `[UNRESOLVED]` — no verified formula |

### 1.2 Confirmed NOT offered — must NOT appear as calculator products or active product offerings

- **Hoist** — `[CONFIRMED NOT OFFERED]`
- **Panoramic** — `[CONFIRMED NOT OFFERED]`
- **Escalators / Walkways** — `[CONFIRMED NOT OFFERED]`

These three are removed from the product selector, from the pricing engine, and from any active offer copy. (Removal from the marketing product catalogue pages is a separate content task outside this calculator SDD, tracked separately for consistency.)

---

## 2. Verified Pricing Rules (single source of truth)

Only these numbers may ever appear as online pricing. No midpoint, no percentage factors, no synthetic ranges.

| # | Rule | Verified value | Scope / inclusion |
|---|---|---|---|
| R1 | Passenger Steel 630 kg | **PKR 2,800,000 – 4,500,000** | Complete lift + installation + commissioning + testing + 1-year warranty |
| R2 | Passenger Glass 630 kg | **PKR 2,800,000 – 4,500,000** (SAME as steel) | Same inclusion as R1; **no glass premium** |
| R3 | Structure (20–50 ft) | **PKR 600,000 – 1,000,000** | Complete structure material; **normally supplied by Deenar**; priced per height/width/depth (do NOT implement an H×W×D formula) |
| R4 | Cargo / freight overall reference | **PKR 4,000,000 – 15,000,000** | **Reference band, NOT a configured estimate** — see §5 |
| R5 | Payment schedule | **40% / 20% / 20% / 20%** | Display only |
| R6 | Discount | **up to 5%** | Ceiling / information only; **never auto-applied** |
| R7 | Delivery / installation | **approximately 2–3 months** | Display only |
| R8 | Warranty | **1 year** | Display only |
| R9 | Free maintenance | **1 year** | Display only |
| R10 | AMC after warranty | **PKR 10,000 / month** | Display only (not inside the initial estimate) |
| R11 | Imported cabin | **up to 50% above a local cabin** | **Ceiling statement**, never a fixed +50% adder |
| R12 | Extra floor / stop | **up to PKR 300,000** | **Ceiling statement**, never a fixed per-stop adder |

**Interpretation rules (non-negotiable):**
- R11/R12 are upper-bound statements. They are shown as notes/indicators; they are never arithmetic.
- R1/R2 low/high edges are shown **verbatim**. They are not re-derived, mid-pointed, or widened with factors.
- R3 is the only structure range; do not invent bands above 50 ft or between existing edges.
- R4 is a business scope reference, not a configured price (see §5.3).

---

## 3. Hybrid Model — Decision 4 (Estimate vs Quote)

Adopted: **HYBRID**. An online number is shown **only** when the configuration falls inside an approved evidence-backed pricing rule (R1–R3). Everything else routes to a formal quotation.

| Configuration state | Behaviour |
|---|---|
| Inside approved rule (passenger 630 kg steel/glass; structure 20–50 ft) | Show verified band estimate |
| Configured cargo/freight request | Show broad reference band (R4) **clearly labelled non-configured**, then quote |
| Quote-only product (home, hospital, imported, 1000 kg passenger, other capacity) | No price; collect requirements and request quotation |
| Out-of-evidence input (stops > 9, structure > 50 ft, unverified option/capacity) | No price; request quotation |

Never fabricate a price just because an option or configuration exists.

---

## 4. Estimate Rules (when an online band is shown)

An online **estimate** appears **only** when ALL of the following hold:

1. Category = **Passenger Steel 630 kg** or **Passenger Glass 630 kg**.
2. Capacity = **630 kg** (no other capacity estimates).
3. Stops = **1–9** (see §7).
4. Structure selection, if "Deenar supplies", is within the **20–50 ft** band; structure > 50 ft → structure is quoted, not estimated.
5. Reference configuration = 630 kg, default speed/spec only.

Estimated output content (single panel):
1. **Estimated budget range**: "PKR 28,00,000 – 45,00,000" (format via existing `formatPKRCompact`-style lakh/crore display). Low/high are **verbatim R1/R2 edges** — no midpoint and no ± factor anywhere.
2. **Configuration summary**: echo every input (category, capacity kg, stops, structure choice + height band, cabin source, door class, options for quote-scoping only).
3. **Included**: complete lift, installation, commissioning, testing, 1-year warranty (R1/R2 inclusion).
4. **Excluded / separate** — displayed as **verified-information notes only** and per §10: structure priced as a separate component (R3) when Deenar-supplied; civil/electrical/transport/taxes status per Dad's pending items (see §18 #8) — do not assert unverified exclusions.
5. **Assumptions line**: reference 630 kg; stops within 1–9; standard specification; PKR basis.
6. **Commercial info block** (§10): payment 40/20/20/20, delivery ~2–3 months, 1-yr warranty, 1-yr free maintenance, AMC PKR 10,000/month, discount up to 5%.
7. **CTA**: formal quotation (§13).

### 4.1 Structure band in the estimate
- "Deenar supplies structure" (default): show structure as a **separate labelled reference component** with R3 band for 20–50 ft.
- If the product wants a single combined line, compute it as **plain band-edge addition** (low+low … high+high of the *verified* R1/R2 and R3 edges when both apply) and label "combined budget reference (lift + Deenar-supplied structure, 20–50 ft) — not a quotation." No factor, no interpolation. **Default UI: keep lift band and structure band as separate lines** to avoid implying a single quoted price.

---

## 5. Quote-Only Behaviour & Triggers

### 5.1 Quote-only products
- **Home / Villa**: collect floors, cabin size, shaft availability, number of users → request quotation. No price anywhere.
- **Hospital**: collect bed/stretcher requirement, capacity, stops, corridor/shaft constraints → request quotation. No price anywhere.
- **Imported complete lift**: collect equipment requirements, sizes, weight, source country, optional USD/PKR indication label only → request quotation. **No assumed exchange rate, no fixed percentage, no USD→PKR conversion.**
- **Passenger 1000 kg (or any non-630 kg capacity)**: may be **collected as a requirement** but must never display a price (no invented formula/range).

### 5.2 Quote-only triggers (input-level)
- Stops **> 9** (§7).
- Structure **> 50 ft** (no verified band).
- Any option/add-on that would require arithmetic beyond verified ceilings (§9).
- Any capacity outside the verified 630 kg passenger reference.

### 5.3 Cargo / freight — special handling (NOT an estimate)
- Selecting Cargo/Freight collects requirements (capacity kg, stops, platform size, site type).
- The UI shows: **"PKR 4,000,000 – 15,000,000 (business reference range)"** with an explicit distinction: *"This is Deenar's overall cargo reference range, not a configured estimate. Your exact figure depends on capacity, stops and site and is confirmed by formal quotation."*
- No capacity multipliers, no per-stop adders, no arbitrary percentages, no historical tail prices, no configured figure is ever computed for cargo.

### 5.4 Clear handoff
- Any quote-only state replaces the numeric answer with a **formal quotation panel**: why a quote is required (one short line), a pre-filled requirements summary, and the quotation CTA (§13). Never a guessed number.

---

## 6. Capacity Model

- Capacity is represented in **kg** only. Persons-based capacity is **removed** as a priced input.
- Approved online capacity: **630 kg** (passenger steel/glass only).
- All other capacities → quote-only (§5.1/§5.2).
- No `capFactor` tables (they were persons-based and/or fabricated — removed, §11).

---

## 7. Stops Model

- Stops slider range: **1–9** (historical evidence range; Dad gave no figure above 9).
- Stops **> 9** → formal quotation (no mechanical PKR 300,000 per stop).
- The verified ceiling note R12 ("each extra floor/stop: up to PKR 300,000") is shown as an **informational note** in the estimate panel — it never adds any amount to the band.
- No stop-based timeline arithmetic from the old model (§11).

---

## 8. Structure Component

| Element | Decision |
|---|---|
| Default | "Deenar supplies structure" (Dad verified: normally supplied by the lift company; includes complete material) |
| Option | "Owner civil works / client-supplied" remains selectable as a scoping choice |
| Height band | **Only 20–50 ft** is offered with R3 band. **Do not invent 80 ft / 98 ft / industrial bands** — no verified 2026 figure |
| Above 50 ft | Structure → formal quotation (no price) |
| Pricing model | Evidence-bound only. **Do NOT implement an H×W×D formula**; Dad's "as per height, width and depth" means a survey prices it — the calculator only exposes the verified 20–50 ft band and collects dimensions for the quote |
| Display | Separate reference component (§4.1) |

---

## 9. Options / Add-Ons Classification

| Class | Items | Calculator treatment |
|---|---|---|
| **A — Verified ceilings (notes only, no arithmetic)** | Imported cabin (R11 "up to 50%"); extra floor/stop (R12 "up to PKR 300,000") | Shown as upper-bound information; **never** a fixed adder/multiplier |
| **B — Quote-scoping fields (no online price)** | Door type; cabin material/finish; machine type; ARD; generator/power backup; VVVF door drive | Collected into the quote request to scope the job; **do not alter any online price**; do not publish historical option prices to customers |
| **C — Informational / spec or quote-only (no price basis)** | TFT/LCD/display; LED/false ceiling; stone/laminate interiors; glass thickness; speed; other specialised requirements | Shown as spec/notes or collected for the quote; **never priced** |

- Class A notes: copy uses exact "up to" phrasing; must remain upper-bound statements (§16 rule 2).
- Class B/C: zero PKR influence in the calculator. If selected, the formal quotation summary lists them for the sales team.

---

## 10. Verified Business Terms (display — without over-promising)

Display-only block (information, never a guarantee beyond the verified facts):

- Payment schedule: **40% / 20% / 20% / 20%** (replace the obsolete 30/40/30 claim wherever it still appears — currently `src/app/pricing/page.tsx:49` FAQ).
- Delivery / installation: **approximately 2–3 months** (replace fixed per-week estimates; the old `timelineWeeks` widget and "weeks" claims are removed).
- Warranty: **1 year**.
- Free maintenance: **1 year**.
- AMC after warranty: **PKR 10,000 / month**.
- Discount: **up to 5%, negotiable** — information only; never auto-applied.

Copy rules: present as verified company facts; do not imply automatic applicability (discount, AMC) or guaranteed dates. No invented service-level promises (e.g., any "response within N hours/days" is unverified and must not appear).

---

## 11. Old Calculator Logic to Remove (explicit)

These are **prohibited**; implementers must ensure none of them survives in the redesigned engine or UI. Line references are to the current code for auditability.

| # | Prohibited element | Origin (current code / copy) |
|---|---|---|
| 1 | Building-type pricing multipliers (residential 1.0 … industrial 1.18) | `src/lib/pricing.ts:105-116` |
| 2 | Persons-based capacity factors (passenger 1.0–1.62; home/hospital/panoramic capFactor) | `src/lib/pricing.ts` `capFactor` maps |
| 3 | Standard/Premium/Luxury finish multipliers (1.0 / 1.28 / 1.58) | `src/lib/pricing.ts:118-142` |
| 4 | Arbitrary 0.9 / 1.15 low/high range factors and computed `mid` price | `src/lib/pricing.ts:186-188` |
| 5 | Fixed per-stop adders: passenger 420,000; freight 680,000; home 210,000; hospital 470,000; panoramic 460,000 | `src/lib/pricing.ts` `elevatorTypes` `perStop` |
| 6 | Unsupported fixed base prices: home 3,200,000; passenger 8,500,000; freight 14,500,000; hospital 9,800,000; panoramic 10,200,000 | `src/lib/pricing.ts` `base` |
| 7 | Installation "12%" line-item and machine/shaft/install/misc breakdown | `src/lib/pricing.ts:190-193` |
| 8 | Per-stop timeline arithmetic (`baseWeeks + 0.5/stop`) and weekly deliverable widget | `src/lib/pricing.ts:195`; `PricingCalculator.tsx:205-209` |
| 9 | Home / hospital / panoramic pricing formulas (unsupported) | `src/lib/pricing.ts` elevator type entries |
| 10 | Panoramic / hoist / escalator pricing anywhere in the calculator | `src/lib/pricing.ts`; `src/app/pricing/page.tsx` samples |
| 11 | Building type & finish pickers in the UI | `src/components/PricingCalculator.tsx:92-103, 146-171` |
| 12 | 30/40/30 payment copy | `src/app/pricing/page.tsx:49` |
| 13 | Legacy "sample estimates" table computed from the old model (stops up to 20, panoramic, hospital rows) | `src/app/pricing/page.tsx:14-28, 101-120` |
| 14 | Unverified public copy: "civil works … quoted separately" asserted as fact, per-week install durations, "Max stops travelled 30" stat if displayed as a pricing claim | `src/app/pricing/page.tsx:52-53`; homepage marketing (see §18 cross-check) |
| 15 | Any fabricated price ceiling/floor anywhere in code or copy | — |

Note: item 14's exclusion wording ("civil works … quoted separately") is **not verified** by Dad (he left transport/civil/electrical/tax unconfirmed). It must be re-worded as a scoping question or removed — not asserted (see §18 #8).

---

## 12. Pricing Engine / Data Configuration (centralised, auditable)

- **Single configuration source** for every allowed rule (`R1–R4`, ceilings, bands, terms). No business number may live scattered in component code.
- Every priced rule stores: `valueLow`, `valueHigh`, `unit` (PKR), `scope` (estimate vs reference vs quote), `evidenceSourceKey` (see §15), and a **verified flag**.
- **Only rules with `verified === true` may render a number** in the calculator. Everything else yields `quote-only` by default.
- A rule never renders if it is not in this table. Adding a number = adding a verified rule (enforced by §16).
- `"up to"` fields store the ceiling as a **ceiling note object** (`{ label, note, isCeiling: true }`) — structurally incapable of being used as an adder/multiplier.
- Keep `formatPKR` / `formatPKRCompact` helpers (from `src/lib/pricing.ts`) as the shared number formatters; move rule data out of `elevatorTypes`/`buildingTypes`/`finishes` into the new verified-rule table.
- Existing conversion hooks (`src/lib/site.ts` `whatsappLink`, `/contact` route) are preserved (see §14 and §17 regression item).

---

## 13. Customer Experience (UX)

### 13.1 Selection order (what the user selects first)
1. **Lift type** (step 1): Passenger | Cargo/Freight | Home/Villa | Hospital | Imported Complete Lift. (NO Hoist/Panoramic/Escalators.)
   - Passenger shows a sub-choice: **Steel** (estimate) / **Glass** (estimate, same band).
2. **Capacity (kg)**: Passenger shows 630 (primary) + "other — formal quotation"; Cargo prompts capacity kg; others show capacity field as quote-scoping.
3. **Stops (1–9)**: slider with a visible ">9 requires formal quotation" boundary message.
4. **Structure**: default "Deenar supplies"; height band 20–50 ft; >50 ft triggers quote for structure.
5. **Cabin source / finish**: Local SS | Imported cabin (note only).
6. **Door class** (question in quote flow): Automatic SS (default) | Swing/MS | Book-type.
7. **Add-ons** (quote-scoping only): ARD, Generator/power backup, VVVF door drive — each labelled "affects your quotation".

### 13.2 Conditional field appearance
- Fields appear **only when relevant**: e.g., Cabin source/Door/Add-ons only for estimate-eligible passenger; capacity + platform size for cargo; floors/cabin size for home; bed/capacity/stretcher for hospital; equipment requirements/sizes/weight for imported.
- Quote-only products collapse immediately to requirement fields + quotation CTA (no pricing step).

### 13.3 When an estimate is available
- Immediate readout: verified band (§4) + configuration summary + included/excluded/assumptions + commercial info + CTA.

### 13.4 When quote-only is triggered
- Replace the number panel with: reason line ("formal quotation required for …"), pre-filled requirements summary, and the quotation CTA. No number.

### 13.5 Formal quotation CTA (unchanged conversion targets)
- **Primary**: "Get an Exact Quotation" → pre-filled WhatsApp deep link built with `whatsappLink(...)` (`src/lib/site.ts`), message containing the full configuration summary + requirement answers.
- **Secondary**: "Book a Free Site Survey" → existing `/contact` route (unchanged).
- Floating WhatsApp button (`WhatsAppButton.tsx`) and `/contact` remain untouched (regression requirement).

### 13.6 What is passed into the quote request
- Type, cabin material (steel/glass), capacity (kg), stops, structure choice + height band, cabin source, door class, add-ons selected, and all collected requirements per product; contact handled by WhatsApp/contact form.

### 13.7 Disclaimers (copy)
- Always-on label: *"Estimated budget range based on Deenar's verified 2026 pricing — not a quotation or offer."*
- "Why a range?": *"Your exact price depends on the site survey, shaft condition, structure dimensions and finishing choices."*
- Exclusions: *"Civil works, electrical works, transport, taxes and negotiated discounts are confirmed separately at survey."*
- Reference-band label (cargo): *"Business reference range — not a configured estimate."*
- Never expose internal labels such as `[DEENAR CURRENT]`/`[HISTORICAL]` to customers.

### 13.8 Verified terms (§10)
- Shown as a muted, collapsible "Commercial & after-sales" info block; exact verified wording; no performance/response promises.

---

## 14. Implementation Safety Rules

1. **No number without an approved evidence source.** Any figure in the calculator must key to a verified rule in the central table (§12).
2. **"Up to" stays "up to".** Ceilings render as upper-bound statements; the engine structure cannot apply them as arithmetic.
3. **Historical ≠ current.** Historical quotation values can never automatically become current prices; they may appear only as internal labelled reference (§15), never as rendered numbers.
4. **No evidence → quote-only.** Missing pricing evidence always yields a formal-quotation path, never a guessed formula.
5. **Centralised, auditable updates.** All pricing changes go through the verified-rule table; each change records a source key and date. Business updates require the owner's verified figure.
6. **No scope mixing.** Equipment-only vs supply+install vs complete; CIF vs installed; PKR vs USD are never blended. Imported/1000 kg/options stay quote-only — no conversions.
7. **No fabricated ceilings/floors.** Low/high are always real verified edges. No one-off "safe" pegging.
8. **Estimate ≠ contract.** Every estimate carries the §13.7 disclaimers; the formal itemised quotation after survey is always authoritative.

---

## 15. Evidence / Source Traceability

Every rendered number carries a source key. Three categories, never conflated:

| Source category | Label (internal, never customer-facing) | Allowed use |
|---|---|---|
| **Current verified business pricing** | `Dad 2026 (verified)` | Renderable estimate/reference bands (R1–R4) and terms (R5–R12) |
| **Deenar historical quotations** | `Deenar historical (Q001–Q061)` | Internal validation/labelling only; never rendered as a current price |
| **External Pakistan market research** | `External market (2024–2026)` | Context for internal reports only; **never** rendered as Deenar pricing |

Traceability table (kept in this document and mirrored in the config):

| Rule | Number | Source key |
|---|---|---|
| R1 | 2,800,000 – 4,500,000 | `Dad 2026 (verified)` — passenger steel 630 kg |
| R2 | 2,800,000 – 4,500,000 | `Dad 2026 (verified)` — passenger glass 630 kg (same) |
| R3 | 600,000 – 1,000,000 (20–50 ft) | `Dad 2026 (verified)` — structure, complete material |
| R4 | 4,000,000 – 15,000,000 | `Dad 2026 (verified)` — cargo overall reference |
| R5–R10 | 40/20/20/20; up to 5%; 2–3 months; 1 yr; 1 yr; 10,000/mo | `Dad 2026 (verified)` |
| R11 | up to 50% (ceiling) | `Dad 2026 (verified)` |
| R12 | up to 300,000 (ceiling) | `Dad 2026 (verified)` |

---

## 16. Acceptance Criteria (implementation checklist)

**Product scope**
- [ ] Calculator shows exactly: Passenger (Steel), Passenger (Glass), Cargo/Freight, Home/Villa, Hospital, Imported Complete Lift.
- [ ] Hoist, Panoramic, Escalators/Walkways appear nowhere in the calculator or active offer copy.

**630 kg price ranges**
- [ ] Passenger Steel 630 kg → 2,800,000–4,500,000 verbatim.
- [ ] Passenger Glass 630 kg → 2,800,000–4,500,000 verbatim.
- [ ] No midpoint, no ±factor, no percentage-based range anywhere.

**Quote-only behaviour**
- [ ] 1000 kg and all non-630 kg passenger capacities → collect requirement, no price.
- [ ] Home/Villa, Hospital, Imported complete lift → no price, full quote handoff.
- [ ] Cargo → reference band only, never a configured estimate; no multipliers/adders/percentages/historical tails.
- [ ] Stops > 9 → formal quotation. Structure > 50 ft → quote. Unverified options → no price.

**Structure**
- [ ] "Deenar supplies" default; 20–50 ft only (600,000–1,000,000); no H×W×D formula; >50 ft → quote.

**Options**
- [ ] "Up to 50%" imported cabin and "up to PKR 300,000" per stop render as ceiling notes only.
- [ ] Door type / cabin finish / machine / ARD / generator / VVVF drive / TFT / LED / stone / glass thickness / speed: zero price influence; passed to quote only. No historical option prices published.

**Business terms**
- [ ] 40/20/20/20 shown (and 30/40/30 claim removed — `src/app/pricing/page.tsx:49`).
- [ ] ~2–3 months replaces per-week timeline; 1-yr warranty; 1-yr free maintenance; AMC 10,000/mo; discount "up to 5%" as information only.

**Legacy removal**
- [ ] No building-type multipliers, no persons capFactors, no finish multipliers, no 0.9/1.15 factors, no mid price, no 420k/680k per-stop adders, no unsupported base prices, no 12% installation line, no home/hospital/panoramic/hoist/escalator formulas.
- [ ] Legacy "sample estimates" table removed/replaced with verified-band examples only.

**No invented pricing**
- [ ] Every rendered figure keys to the §12 verified-rule table. Price bands/ceilings shown are **R1–R4 and R11–R12**; R5–R10 render only as display-only business terms (§10) — never as pricing arithmetic.

**Formal quotation handoff**
- [ ] WhatsApp deep link pre-filled with configuration + requirements (`whatsappLink`, `src/lib/site.ts`).
- [ ] Free site survey CTA → `/contact` unchanged.

**Mobile / responsive**
- [ ] Full flow usable at 320px; no horizontal overflow; type buttons and selects stack in a single column; sticky result panel collapses gracefully; touch targets ≥ 44×44 px.
- [ ] Stops slider and all controls usable with keyboard and touch; boundary messaging readable on mobile.

**Accessibility**
- [ ] All form fields have visible labels / `for`+`id` associations; radio-like groups use `fieldset`/`legend` or appropriate roles.
- [ ] Focus-visible outlines on all interactive elements (existing ring utilities preserved).
- [ ] Colour-contrast compliant for text on the dark panels (existing palette QA).
- [ ] Controls operable via keyboard (type buttons are `<button>`; selects/slider reachable and adjustable by keyboard).
- [ ] `prefers-reduced-motion` respected (no motion-only cues).
- [ ] Disclaimers and "why quote" text are plain, non-icon-only explanatory content.

**No regressions to WhatsApp/contact conversion**
- [ ] `WhatsAppButton.tsx` untouched; `/contact` route untouched; quote CTA builds on `whatsappLink`; e2e/manual pass on the flow (estimate → WhatsApp, quote-only → WhatsApp, survey CTA).

---

## 17. Cross-Check Against Source Documents (contradictions flagged)

Cross-checked: `calculator-pricing-model.md`, `calculator-decision-analysis.md`, `dad-pricing-verification.md`, `pricing-evidence-research.md`, `decision-9-structure-evidence.md` (plus read-only code `src/lib/pricing.ts`, `src/components/PricingCalculator.tsx`, `src/app/pricing/page.tsx`, `src/lib/products.ts`, `src/lib/site.ts`).

### Explicit contradictions found (resolved in this SDD by owner decision — not silently chosen)
1. **Cargo rendering.** `calculator-pricing-model.md` §6.3 says cargo "may NOT yet be rendered as a single generic output" ([UNRESOLVED]). Owner decision: present R4 (4–15M) as a **labelled non-configured reference band** with a mandatory quotation handoff. Supersedes the earlier [UNRESOLVED]; the label constraint (§5.3) preserves the model doc's warning.
2. **1000 kg passenger.** `pricing-evidence-research.md` §12 lists 1000 kg as Class B provisional (historical 3.1–4.5M). Owner decision: **quote-only**, history not displayed. SDD follows the owner's stricter rule.
3. **Passenger glass class.** `pricing-evidence-research.md` §12/§6 classifies glass as Class B (historical top-of-band note). Owner decision and Dad's verified "same" statement make 630 kg glass an **approved online estimate**; no historical premium carried.
4. **Panoramic / Hoist / Escalators.** `calculator-decision-analysis.md` (Decisions 1–2) treated panoramic/hoist as quote-only/unresolved, and `dad-pricing-verification.md` §4 leaves escalators `[NOT ANSWERED]`. Later confirmation (recorded in `pricing-evidence-research.md` §1/§12) says **not offered** — this SDD removes all three entirely (stronger than quote-only).
5. **Payment & timeline copy on the pricing page.** `src/app/pricing/page.tsx` still carries the obsolete **30/40/30** FAQ (line 49) and **per-week** install durations (line 52-53) plus a legacy samples table with stops up to 20. All contradict verified R5/R7; removal required (§11, §16).
6. **Civil/electrical "quoted separately" claim.** `src/app/pricing/page.tsx:44-46` asserts civil works are quoted separately; Dad **did not confirm** out/in scope for civil/electrical/transport/taxes (`dad-pricing-verification.md` §3 blank). The SDD does not carry this as a fact; re-wording required (§11 item 14, §18 #8).
7. **Structure: inside or outside the passenger band?** `dad-pricing-verification.md` §3 marks structure "included by Deenar" (scope ownership), while `calculator-pricing-model.md` §5#4 / §8 treats structure as a **separate component** outside the 2.8–4.5M inclusion list. `decision-9-structure-evidence.md` concludes **Option B (structure-excluded, separate R3 component) is strongly supported** by the quotation record (company always prices structure as its own line; Fishri same-lift revision Q009 vs Q010/Q012; Group A lift-only figures already fill the band) and recommends it **pending owner confirmation**. SDD follows that recommendation (separate R3 component, never auto-added to the lift band) → **owner confirmation** in §18 #9.

### Alignments confirmed (no contradiction)
- Verified passenger steel/glass bands, glass = same, payment 40/20/20/20, discount up to 5%, structure 20–50 ft band + Deenar-supplied + complete material, imported cabin "up to 50%", per-stop "up to 300,000", delivery 2–3 months, warranty/maintenance/AMC terms, imported lift quote-dependent, home/hospital offered-but-unpriced — all consistent across the four docs.
- Range width policy (Decision 3) left [UNRESOLVED] in `calculator-decision-analysis.md` is now resolved by owner: verbatim verified band (§4), never ±10/15 or a midpoint — matching Option A/B of the analysis.
- "Offer ≠ priceable" principle (model §2.2, decision-analysis Facts #10) is obeyed throughout.

---

## 18. Remaining Business Decisions Required Before Implementation

1. Home/Villa base price (+ per-stop) — quote-only until Dad supplies figures.
2. Hospital base price — quote-only until Dad supplies figures.
3. Cargo per-capacity/segment breakdown — until then cargo remains reference-only (R4), never configured.
4. Imported complete lift: current USD band and PKR business policy (Dad said "depends on requirements/sizes/weight") — no FX/Duty policy exists; no online figure until then.
5. Exact per-stop cost (Dad gave only the "up to PKR 300,000" ceiling) — confirm whether a fixed/regulated per-stop rate is ever published.
6. Imported-cabin exact method (Dad gave only the "up to 50%" ceiling) — confirm the ceiling-note treatment is acceptable, or later supply a figure.
7. Range-width confirmation — verbatim-band display (Option A) is the adopted default; owner sign-off on copy and on whether a combined lift+structure reference line is shown (§4.1).
8. **Scope confirmation for civil / electrical / transport / taxes** — Dad left these unconfirmed; the estimate's excluded/separate wording must not assert unverified exclusions. Needed before final disclaimer copy.
9. **Structure in/out of the passenger band** (see §17 #7; authority `decision-9-structure-evidence.md` → **Option B recommended**) — confirm whether 2.8–4.5M includes the structure, or structure is always the separate R3 component. Until then, the SDD shows structure as a separate labelled component and never auto-adds R3 to the lift band (§4.1).
10. Option add-on prices (ARD, generator, VVVF door drive, door classes) — historical only; current values needed before any could ever price (stays quote-scoping until then).
11. Homepage / product-page marketing claims (e.g., "Max stops travelled 30", product specs 2.0 m/s / EN-81 / 3,000 kg in `src/lib/products.ts`) — outside this calculator SDD but recommended for a separate content-accuracy task.

---

## End Summary

1. **File created**: `docs/calculator-sdd.md` (this file).
2. **Sections included**: 18 sections — Product Scope; Verified Pricing Rules; Hybrid Estimate-vs-Quote Model; Estimate Rules; Quote-Only Behaviour & Triggers; Capacity Model; Stops Model; Structure Component; Options/Add-Ons Classification; Business Terms Display; Old Calculator Logic to Remove; Pricing Engine / Data Config; Customer Experience (UX); Implementation Safety; Evidence/Source Traceability; Acceptance Criteria; Cross-Check & Contradictions; Remaining Business Decisions.
3. **Contradictions found**: 7 explicit, all resolved by the owner's stated decisions (cargo reference rendering; 1000 kg quote-only; glass class; panoramic/hoist/escalators removal; 30/40/30 + per-week copy + legacy samples table; unverified civil/electrical exclusion wording; structure in/out of passenger band — the last flagged for confirm in §18 #9). No value was silently chosen.
4. **Remaining business decisions required before implementation**: no confirmed prices yet for Home, Hospital, cargo segmentation, imported complete-lift USD/PKR, per-stop rate, imported-cabin method, civil/electrical/transport/tax scope, structure-in-band vs separate, and option add-on prices (§18, items 1–10).
5. **Files modified**: none. Documentation only; no source code, components, styles, routes, data files, or existing docs changed.

*Base precedent: `docs/calculator-pricing-model.md` (spec), `docs/calculator-decision-analysis.md` (decision analysis), `docs/dad-pricing-verification.md` (verified facts), `docs/pricing-evidence-research.md` (evidence/research).*