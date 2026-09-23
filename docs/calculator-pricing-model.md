# Calculator Pricing Model — Evidence-Based Specification (Deenar Lift Company)

Phase: M2.5 — Business Verification (calculator pricing model design).
Status: **SPECIFICATION ONLY.** Core 2026 business facts are now **verified by the business owner (Dad)** and incorporated below. Several calculator decisions remain **unresolved** (see §19) before implementation can begin. This document designs *how* the pricing calculator should be modelled; it does not implement code and does not state that every historical figure is today's public price.
Primary new source: `docs/dad-pricing-verification.md` (Dad's 2026 verified answers).
Primary historical source: `docs/quotation-pricing-analysis.md` (comparability + patterns, Q001–Q061).
Secondary sources: `docs/quotation-extraction.md` (raw evidence), `docs/calculator-quotation-analysis.md` (calculator ↔ evidence gap), `docs/business-truth.md` (code-confirmed calculator logic).
Scope rule: this task revised ONLY `docs/calculator-pricing-model.md`. No source files, no website code, no calculator code (`src/lib/pricing.ts`, `src/components/PricingCalculator.tsx`), and no other project documentation was touched.

## Source Priority (applied everywhere this document makes a claim)

When sources conflict, the following hierarchy governs:

1. **Directly verified current 2026 business facts from Dad** — the business owner's explicit answers (recorded in `docs/dad-pricing-verification.md`).
2. **Recent quotation evidence where it does NOT conflict with Dad** — usable to fill gaps and support structure.
3. **Older quotation evidence** — useful as historical anchors and relationships, never as current prices.
4. **Previous assumptions / proposed model decisions** — lowest authority; removed or re-flagged where Dad's answers contradict them.

**Two labels for every number below:**
- **[CURRENT VERIFIED — Dad 2026]** = directly verified business fact from the owner.
- **[HISTORICAL]** = quotation evidence (2023–2026), explicitly NOT a current price unless it also appears as a Dad-verified figure.

Design rules applied throughout (inherited from the pricing analysis + verification sheet):
- Every claim is traceable to a Q-ID and/or a Dad answer.
- Quotations are not independent "answers"; duplicate/revision families are merged.
- "Pattern" means a repeated relationship in printed figures — never proof of cause.
- No figure is invented or converted that was not printed in a quotation (including no USD↔PKR).
- **"up to" stays "up to"; "same" stays "same".** Neither is silently converted into a fixed multiplier in
  - "Up to PKR 300,000" per extra floor/stop is a verified upper bound, **not** an automatic +300,000.
  - "Up to 50% above" for imported cabins is a verified upper bound, **not** an automatic +50%.
  - "Same range" for glass is a verified equal pricing statement, **not** a hidden glass premium.
- Historical quotation data is **never** treated as more authoritative than Dad's current 2026 answers.
- Unverified unresolved items are flagged `[UNRESOLVED]` or `[TBD - BUSINESS VERIFICATION REQUIRED]`, matching `docs/design.md` convention.

---

## 1. Current Model vs Proposed Model

### 1.1 What the current calculator does (code-confirmed, `src/lib/pricing.ts`)

| Element | Current behaviour | Evidence status |
|---|---|---|
| Lift type input | 5 types: home, passenger, freight, hospital, panoramic | Home & hospital: offered [Dad 2026], but **zero pricing data**. Panoramic ≈ glass [HISTORICAL]. Freight ≈ cargo [HISTORICAL] |
| Building type | Residential, apartment, commercial, hotel, hospital, industrial — multiplier 1.0–1.18 | **Zero basis** — no quotation and no Dad statement |
| Finish | standard / premium / luxury — multipliers 1.0 / 1.28 / 1.58 | **No basis** for luxury/stone tiers; only SS-vs-MS and local-vs-imported cabin differences have support |
| Capacity | Persons-based dropdown (passenger: 6/8/10/13/16 persons) | Quotations price in **kg** and persons, never a persons-multiplier |
| Stops | 3–30 range per type | Evidence only 1–9 stops; Dad gave no >9 figure |
| Output | Single mid ± 10%/+15% low/high; breakdown incl. Installation 12% | Installation 12% unsupported; exact-mid precision unjustified |
| Timeline | Base weeks + 0.5 weeks per stop | Not quotation-backed; Dad: delivery **~2–3 months** [CURRENT VERIFIED] |
| Payment | FAQ claims 30/40/30 | **OBSOLETE.** Dad's normal schedule: **40%/20%/20%/20%** [CURRENT VERIFIED] |

### 1.2 What the proposed model does instead

| Element | Proposed behaviour | Why |
|---|---|---|
| Category input | passenger (steel) / passenger (glass) / cargo / hoist (hoist pricing unresolved) | These have usable evidence; home/hospital stay offered-but-unpriceable [Dad 2026] |
| Capacity | kg dropdown per category | Matches quotation practice; supports cargo ordering |
| Stops | slider 1–9 | Only evidenced + Dad-confirmed range; beyond 9 → quote request |
| Structure | separate optional component, **default "Deenar supplies"** | Dad: normally supplied by the lift company [CURRENT VERIFIED] |
| Finish/source | Local SS cabin / Imported cabin options | Imported cabin verified as **up to 50% above** — upper bound only [CURRENT VERIFIED] |
| Door class | Automatic SS / Swing-MS / Book-type (small delta) | Weak-moderate historical support; current deltas unresolved |
| Add-ons | ARD, generator, door drive (historical deltas, prospective) | Same-document deltas, n≤3; current values unverified |
| Output | **Range (low–high) only**, with config summary + inclusion/exclusion list + quote request | Dataset + Dad support bands, not point prices |
| Timeline | Show ~2–3 months as verified information | [CURRENT VERIFIED] |
| Payment | Show **40/20/20/20** | [CURRENT VERIFIED] — replaces obsolete 30/40/30 |
| Removed inputs | Building type, luxury finish tier, persons-multiplier | No basis anywhere |

**Net change:** from a deterministic "price generator" (base × factors) to an **evidence-traceable banded range estimator + formal-quotation handoff**. This remains the core decision of this document.

---

## 2. Design Philosophy Underlying the Proposed Model

### 2.1 Core principle: show bands, never single prices
- The quotations and Dad's answers yield **ranges**, not point prices. Discounts, taxes, dates, currencies, scope and options vary within every category. A single number would be false precision.
- Therefore the estimator returns a **low–high PKR range** for every configuration it can price at all.

### 2.2 Core principle: "offered" ≠ "priceable"
- **Dad says the business offers a product** is a YES/NO statement about availability.
- **We have enough pricing evidence to let the calculator estimate it** is a separate, higher bar.
- Home and hospital lifts (and escalators, imports, hoists) may be offered while still being **"request a quotation"** only. §3 and §19 make this distinction explicit.

### 2.3 Core principle: every factor must trace to evidence
- Each input earns its place only if Dad (2026) or quotations show it moving price.
- Factors with no basis (building type, luxury tier, glass premium) are **removed as price inputs** — they may remain as context or spec text, never as multipliers.

### 2.4 Core principle: use time-safe relationships over time-unsafe absolutes
- Same-document deltas (Q021 per-floor, Q028 imported-cabin, ARD/generator/door deltas) and between-category *orderings* age slower than absolute prices.
- Absolute PKR totals age fast (2023 → 2026 drift). Historical totals are used only as labeled historical anchors; today's numbers come from Dad where available.

### 2.5 Core principle: the estimator is a marketing + lead tool, not a contract
- Every estimate carries disclaimer framing (§12): budget guidance only; the real instrument is the site-survey → itemized quotation flow the business actually runs.

### 2.6 What this model explicitly rejects
- Precise regression / exact list price from this dataset (rejected in pricing-analysis §11).
- Un-evidenced multipliers (building-type 1.0–1.18, finish 1.28/1.58).
- Converting "up to" / "same" into fixed rules (see Design rules).
- Inventing home/hospital/hoist/cargo-segment prices out of thin air.
- Treating the broad cargo range (4m–15m) as a single meaningful calculator output without configuration detail.

---

## 3. Which Lift Categories the Calculator Should Support

| Category | Offered by Deenar [Dad 2026] | Pricing evidence | Calculator decision |
|---|---|---|---|
| **Passenger — steel** | Yes (implicit core product) | **Verified band 630 kg: 2,800,000–4,500,000** [Dad 2026] + strong historical group A | **PRICEABLE (banded)** — primary category |
| **Passenger — glass** | Yes | **Verified range = SAME as steel (630 kg)** [Dad 2026]; historical Group C | **PRICEABLE (banded)** — same range as steel, **no separate glass premium** |
| **Cargo / freight** | Yes | **Verified broad range 4,000,000–15,000,000** [Dad 2026] — one overall figure | **PRICEABLE only as a coarse band; needs segmentation (capacity/config) before a useful range can be shown — marked [UNRESOLVED]** |
| **Hoist** | Not stated / one historical instance | Single quote Q034 [HISTORICAL] | **[UNRESOLVED]** — no current figure from Dad |
| **Home / villa** | **YES** [Dad 2026] | **No current pricing given** | **OFFERED but NOT priceable** → quote request |
| **Hospital** | **YES** [Dad 2026] | **No current pricing given** | **OFFERED but NOT priceable** → quote request |
| **Imported complete lift (USD)** | **YES — "depends on lift requirements, sizes and weight"** [Dad 2026] | Historical USD CIF lines 13.8k–19k [HISTORICAL]; no FX/duty policy | **QUOTE-REQUEST ONLY** — no defensible online model without requirements |
| **Dumbwaiter** | Not stated | Single quote Q042 [HISTORICAL] | **[UNRESOLVED]** — likely quote request |
| **Escalator / walkway** | Not stated | None | **NOT in calculator** — quote request |

**Priceable categories today: Passenger (Steel) and Passenger (Glass) — same verified range.** Cargo is priceable only as a flagged coarse band pending segmentation. Everything else is **offered-but-unpriceable** and routes to formal quotation.

---

## 4. Proposed Input Table

| Input | Type | Evidence strength | Required / Derived | Pricing role | Evidence |
|---|---|---|---|---|:---:|---|
| **Lift category** | Select: Passenger (Steel) / Passenger (Glass) / Cargo | Strong (verified 630 kg ranges); cargo segmentation pending | **Required** | Sets the base band anchor | Dad 2026 (§5); historical Groups A–D |
| **Capacity (kg)** | Number/dropdown: passenger 630 (primary); cargo requires capacity | Moderate for passenger 630; unresolved for other capacities | **Required** | Small adjustment; cargo needs capacity to segment | Dad 2026 (630 kg only); historical cargo Q013→Q016→Q004→Q003; imports Q020/Q041/Q055 |
| **Stops (1–9)** | Slider 1–9 | Moderate (matters) / Weak (rate) | **Required** | "up to 300,000" per floor as an upper-bound note, NOT a fixed adder | Dad 2026 "up to 300,000"; historical Q021 (+300k) + family A 5→9 |
| **Structure** | Toggle: "Deenar supplies" (default) vs "Owner civil works" + height band **20–50 ft only** | **Verified 20–50 ft band 600,000–1,000,000**; taller bands unresolved | **Required** (must be chosen) | Separate component within verified 20–50 ft band; above → quote request | Dad 2026; historical Group F |
| **Cabin source / finish** | Select: Local SS / Imported cabin | Strong direction; exact method unresolved | **Required** | Imported cabin "up to 50% above" = upper-bound note, NOT +50% fixed | Dad 2026 (up to 50%); historical Q028 |
| **Door class** | Select: Automatic SS / Swing-MS / Book-type | Weak–Moderate [HISTORICAL] | Derived (default Automatic SS) | Small delta; current values unresolved | Q045 vs Q046; Q031/Q033 |
| **Optional add-ons** | Checkboxes: ARD, Generator set, Door drive | Weak (n≤3) [HISTORICAL only] | Optional | Historical deltas ≈150k/150k/200k — prospective only, **[UNRESOLVED]** | Q049/Q051/Q058 (ARD), Q037/Q038 (gen), Q033 (drive) |
| **Speed** | — | Insufficient | DISPLAY AS SPEC ONLY (1 m/s) | No price role | Constant 1 m/s in dataset |
| **Building type** | — | Insufficient (0) | **REMOVED** | No price role ever | No quotation; no Dad statement |
| **Finish tier** (premium/luxury) | — | Insufficient | **REMOVED** | Replaced by Cabin source above | Luxury/stone never in quotations |
| **Payment terms** | — | **Verified 40/20/20/20** | DISPLAY ONLY (not an input) | Shown as information | Dad 2026 |
| **Delivery timeline** | — | **Verified ~2–3 months** | DISPLAY/SPEC | Not an input; shown as information | Dad 2026; historical 45/60/70/90 days |
| **Warranty / maintenance** | — | **Verified 1-year warranty + 1-year free maintenance; AMC 10,000/month after warranty** | DISPLAY/SPEC | Not inside the initial estimate (AMC is after-warranty) | Dad 2026 |

Required inputs = category, capacity, stops, structure, cabin source. Everything else is derived defaults, optional add-ons, or display-only information.

---

## 5. Current 2026 Verified Pricing Inputs

This section contains **ONLY directly verified current facts from Dad** (from `docs/dad-pricing-verification.md`), with clear wording and no inferred formulas.

| # | Input | Verified 2026 fact (Dad) | Interpretation for the calculator |
|---|---|:---:|---|
| 1 | Passenger steel lift price (630 kg) | **PKR 2,800,000 – 4,500,000** | Base band anchor for passenger steel 630 kg |
| 2 | Passenger glass lift price (630 kg) | **SAME** range as passenger steel (PKR 2,800,000–4,500,000) | No separate glass premium |
| 3 | Cargo / freight lift price | **PKR 4,000,000 – 15,000,000** (one overall range) | Too broad for a single output; needs capacity/configuration segmentation — **[UNRESOLVED]** |
| 4 | What the quoted price includes | **Complete lift, installation, commissioning, testing, 1-year warranty** | The estimate's "included" list (no civil/electrical/transport confirmed) |
| 5 | Normal payment schedule | **40% / 20% / 20% / 20%** | Display-only; replaces obsolete 30/40/30 |
| 6 | Discount | **Up to 5%** | Do NOT auto-apply 5% in the calculator; disclose as a negotiable note |
| 7 | Structure pricing basis | **As per height, width and depth** | Structure is priced by three dimensions, not a simple per-foot formula |
| 8 | Structure price, 20–50 ft | **PKR 600,000 – 1,000,000** | Verified sub-band; taller (80 ft / 98 ft) bands **[UNRESOLVED]** — no invented numbers |
| 9 | Structure inclusions | **Complete material** | Structure = full material supply |
| 10 | Structure supply | **Normally supplied by the lift company** | Default the structure toggle to "Deenar supplies" |
| 11 | Imported cabin | **Available; up to 50% above a local cabin** | Upper-bound note; NOT a mandatory +50% formula |
| 12 | Complete imported lift (USD) | **Depends on lift requirements, sizes and weight** | Quote-request territory; no defensible online band |
| 13 | Home / villa lifts | **Offered: YES** | Offered product; **no current pricing** → NOT priceable online |
| 14 | Hospital lifts | **Offered: YES** | Offered product; **no current pricing** → NOT priceable online |
| 15 | Delivery / installation time | **Approximately 2–3 months** | Display-only information |
| 16 | Free maintenance | **1 year** | Business fact; part of after-sales info, not the initial price estimate |
| 17 | AMC after warranty | **PKR 10,000 / month** | Business fact; NOT inside the initial lift price estimate |
| 18 | Extra floor / stop | **Up to PKR 300,000** | Upper-bound fact; NOT an automatic +300,000 per floor |

---

## 6. Base Pricing Bands (Current vs Historical)

### 6.1 Current verified bands [CURRENT VERIFIED — Dad 2026]
| Category (typical config) | 2026 band (PKR) | Basis |
|---|---|---|
| Passenger steel 630 kg | **2,800,000 – 4,500,000** | Dad |
| Passenger glass 630 kg | **2,800,000 – 4,500,000 (SAME as steel)** | Dad |
| Cargo / freight (all capacities) | **4,000,000 – 15,000,000** | Dad — coarse, requires segmentation before use as calculator output |
| Hoist | **[UNRESOLVED]** — no current figure | — |

### 6.2 Historical anchors (for reference and structure only — NOT current prices) [HISTORICAL]
These remain useful to understand product structure and relationships, but **Dad's 2026 answers supersede them as prices**.

| Category | Historical anchor (PKR) | Based on |
|---|---|---|
| Passenger steel 630 kg | ≈ 2,205,000 – 3,700,000 (non-discount ≈ 3,025,000 – 3,700,000) | Group A (Q001–Q059 family) |
| Passenger steel 1000 kg | ≈ 3,100,000 – 4,500,000 *(weakly comparable)* | Group B |
| Passenger glass (structure excluded) | ≈ 3,450,000 – 4,600,000 | Group C core — **historical only; Dad says glass now priced SAME as steel** |
| Cargo 1600–2000 kg lift-only | ≈ 4,900,000 – 5,500,000 | Group D — historical; Dad's current broad range is wider |
| Hoist 2000 kg | ≈ 2,900,000 *(single quote)* | Q034 |
| Imported supply USD CIF per lift | ≈ 13,800 – 19,000 USD | Group E — quote-request only |
| Dumbwaiter 150 kg | ≈ 800,000 *(single quote)* | Q042 |
| ARD / generator / door drive | ≈ 150,000 / 150,000 / 200,000 | Q049/Q051/Q058; Q037/Q038; Q033 |
| Structure, by height | 400k (20 ft) → 1,150k (80 ft) → 1,800k–2,800k (98 ft) | Group F — historical; only the 20–50 ft band is Dad-verified for 2026 |

### 6.3 What must happen before any number appears publicly
- Passenger steel & glass 630 kg bands are Dad-verified and may be rendered (as ranges) after team sign-off on formatting.
- Cargo may NOT yet be rendered as a single generic output; it requires capacity/configuration segmentation **[UNRESOLVED]**.
- Historical anchors in §6.2 must remain labeled historical or be removed from public display.

---

## 7. Evidence-Backed Add-Ons / Option Notes

Only add-ons with same-document deltas or Dad statements are considered. All are **upper bounds or prospective deltas**, never fixed automatic charges.

| Add-on | Status | Figure / wording to use | Confidence |
|---|---|---|---|
| Imported cabin (vs local) | **[CURRENT VERIFIED — Dad 2026]** | "**up to 50%** above a local cabin" — as an upper-bound note, NOT a fixed +50% | High (verified); exact method unresolved |
| Additional floor / stop | **[CURRENT VERIFIED — Dad 2026]** | "**up to 300,000** per extra floor" — as an upper-bound note, NOT a fixed +300,000 | High (verified fact); exact method unresolved |
| ARD (automatic rescue device) | [HISTORICAL] n≤3 | ≈150,000 (Q058 shows 200,000) — historical; current value **[UNRESOLVED]** | Weak |
| Generator / fuel / branch | [HISTORICAL] n=1 | 150,000 (Q037/Q038) — historical; current value **[UNRESOLVED]** | Weak |
| Door drive (VVVF) | [HISTORICAL] n=1 | 200,000 (Q033) — historical; current value **[UNRESOLVED]** | Weak |
| SS automatic door unit (vs MS) | [HISTORICAL] | ~85k (MS) vs ~120k (SS) per unit (Q031/Q033) — current values **[UNRESOLVED]** | Weak–Moderate |
| Swing-MS vs automatic-SS lift | [HISTORICAL] | −700,000 direction (Q045 vs Q046, conflated) — current value **[UNRESOLVED]** | Weak–Moderate (direction) |

**Confidence rule for add-ons:** only the two Dad-verified upper bounds (imported cabin "up to 50%", extra floor "up to 300,000") may be surfaced, and strictly as **qualitative upper-bound notes**, never as automatic arithmetic. Historical deltas may inform a spec/info block but must be labeled historical.

---

## 8. Structure Pricing (Separate Component)

### 8.1 Verified current facts [CURRENT VERIFIED — Dad 2026]
- Structure is priced **"as per height and width and depth"** (three dimensions — no simple per-foot formula).
- **20–50 ft structure: PKR 600,000 – 1,000,000.**
- Structure includes **complete material**.
- Structure is **normally supplied by the lift company** (not the customer).

### 8.2 Model treatment
| Element | Decision |
|---|---|
| Scope | Separate optional/estimated component (structure can also be owner civil work, per historical practice, but default is now Deenar-supplied) |
| Default | "Deenar supplies structure" |
| Height bands | ONLY the verified **20–50 ft band (600k–1M)** may be offered. **Do NOT invent ~80 ft or 98 ft / industrial bands** — none verified for 2026 |
| Above 50 ft | Structure route → **request quotation** (no defensible 80 ft / 98 ft figure) |
| Driver model | Represent as dimension-based ("height, width and depth") — **do not assume a linear per-foot formula** |

### 8.3 Historical structure evidence (kept for reference, NOT current) [HISTORICAL]
~20 ft 400k (Q026) · ~40 ft 450k (Q011) · ~50 ft 600k–700k (Q009/Q047/Q023) · ~80 ft 1,150k (Q024) · 98 ft hoist 1,800k (Q034) · 98 ft cargo 2,800k (Q029-fam/Q052).
Note: these indicate ordering by height/duty, but only Dad's 20–50 ft figure is current-verified.

---

## 9. Glass, Cabin & Finish

### 9.1 Glass — NO separate premium
- **Dad: 630 kg passenger glass is priced the SAME as 630 kg passenger steel** [CURRENT VERIFIED — Dad 2026].
- The historical observation that glass sat at/above the top of the steel band (Group C ≈ 3.45m–4.6m) is **historical only** and is **not carried forward as a current rule**.
- Glass is a **category attribute** (Passenger — Glass uses the same verified band), not a priced component.
- Glass *thickness* (6 mm / 8 mm) remains **spec-only information** [HISTORICAL].

### 9.2 Cabin material / source (the real "finish" lever)
| Option | Status | Role |
|---|---|---|
| Local SS-304 cabin | Base option [CURRENT VERIFIED — Dad 2026 for the overall range] | Base |
| Imported cabin | **Up to 50% above** local [CURRENT VERIFIED — Dad 2026] | Upper-bound note; NOT fixed +50% |
| MS powder-coat (economy) | Direction only [HISTORICAL Q046] | Informational; current value **[UNRESOLVED]** |

The current **standard/premium/luxury tiers (1.0/1.28/1.58) are removed**. Cosmetic items (LED, TFT display, false ceiling, mirror edging) are **specification text**, not price multipliers [HISTORICAL].

---

## 10. Door, Machine & Speed

### 10.1 Door type — selectable option (weak-moderate, historical only)
- Automatic SS / Swing-MS / Book-type direction and unit prices exist [HISTORICAL: Q045 vs Q046; Q031 85k MS; Q033 120k SS + 200k drive].
- **Current door-class deltas are [UNRESOLVED]** — Dad did not provide them. Treat as a small delta inside the band at most, with current values pending.

### 10.2 Machine type / drive — category attribute + spec info
- Hoist vs traction ordering is historical (Q034 2,900,000 vs Q003/53 5,500,000); hoist current price **[UNRESOLVED]**.
- Geared vs gearless and kW ratings are **spec information** [HISTORICAL]; no standalone multiplier.

### 10.3 Speed — display-only
- 1 m/s is the observed value; constant inputs have **no pricing role**. Capability claims up to 2.0 m/s are unverified (business-truth §4). Display "1 m/s" as standard specification.

---

## 11. Output Design of the Proposed Calculator

### 11.1 Output content (in order)
1. **Estimated range (PKR)** — low and high, "Rs X lakh" / "Rs X crore". The range IS the answer. Note: *"Estimated budget range based on Deenar's 2026 business figures — not a quotation."*
2. **Configuration summary** — echo every input (category, kg, stops, structure choice + height band, cabin source, door class, add-ons).
3. **Included in this range** — per Dad: **complete lift, installation, commissioning, testing, 1-year warranty**.
4. **Excluded / separate** — structure if Owner-civil selected; civil works, electrical works, transport, taxes, negotiated discounts (scope items unconfirmed — **[UNRESOLVED]**); imported-cabin uplift shown as an upper-bound note when relevant.
5. **Assumptions line** — speed 1 m/s, stops within 1–9, 630 kg reference where used, PKR basis.
6. **Handoff CTA** — "Get an exact itemized quotation after a free site survey" → WhatsApp deep-link + survey request (primary conversion action).
7. **Specification / commercial info block** (collapsible, non-priced):
   - Delivery/installation **~2–3 months** [CURRENT VERIFIED]
   - Payment **40% / 20% / 20% / 20%** [CURRENT VERIFIED]
   - Free maintenance **1 year**; AMC **PKR 10,000/month after warranty** [CURRENT VERIFIED]
   - Discount: "up to 5% negotiable" — information, not auto-applied
   - Historical performance/hardware specs kept as labeled history only

### 11.2 Removal of false-precision UI elements
- No breakdown like "Machine Rs X, Shaft Rs Y, Installation 12%" (12% unsupported).
- No "Price exactly Rs N" anywhere.
- No timeline widget that guarantees weeks; deliver the verified "2–3 months" as information only.
- No auto-discount applied; no automatic per-floor addition; no automatic imported-cabin uplift.

---

## 12. Trust & Disclaimer Rules

1. **Always-on label:** "**Estimated budget range** — based on Deenar's 2026 business pricing, not a quotation or offer."
2. **"Why a range?"** tooltip: "Your exact price depends on site survey, shaft condition, structure dimensions, and finishing choices."
3. **Exclusions line:** "Excludes civil works, electrical works, transport, taxes and negotiated discounts where not otherwise stated."
4. **Invitation line:** "Free site survey → itemized PKR quotation." (The claimed 48-hour SLA remains unverified — `[TBD]`.)
5. **No hidden promises:** never render implied precision; range low/high must differ meaningfully.
6. **Itemized quotation always authoritative.**
7. **Spec numeric claims** (2.0 m/s, 3,000 kg, 30 stops, EN-81) stay OUT of calculator output unless marked "capability (unverified)" — business-truth §4 UNVERIFIED items.
8. Payment schedule shown as 40/20/20/20; maintenance shown as 1-year free + 10k/month AMC — all Dad-verified facts presented as information.

---

## 13. Anti-False-Precision Rules (enforced constraints)

1. **Range-only outputs.** Never a single price as the answer; low ≠ high in every cell.
2. **No un-evidenced multipliers.** Building-type factors (1.0–1.18), finish tiers (1.28/1.58), glass premium, speed- or persons-based multipliers — all forbidden.
3. **"Up to" is preserved.** "Up to 300,000" per floor and "up to 50%" for imported cabin are upper bounds, never automatic arithmetic.
4. **"Same" is preserved.** Glass uses the passenger steel band; no hidden glass premium.
5. **Cargo is not a single generic output.** The 4m–15m verified range is flagged; segment by capacity/configuration before showing a useful range — **[UNRESOLVED]**.
6. **No extrapolation beyond observed ranges.** Stops > 9, >1000 kg passenger, home, hospital, escalator, hoist, structure > 50 ft → "request a quotation", never invent a price.
7. **Structure inclusion state always explicit.** Default "Deenar supplies"; Owner-civil choice removes the structure component.
8. **Currency integrity.** PKR-only outputs; imported-USD track never converts to PKR (no FX basis) — quote-request only `[TBD policy]`.
9. **Historical ≠ current.** No 2023–2025 figure displayed as today's price; historical anchors only as labeled reference (§6.2).
10. **n≤3 deltas render as "(approx / historical)"**, inside a range, never as hard line items.
11. **Discounts/taxes never auto-computed.** Disclose "up to 5% discount negotiable"; exclude taxes.
12. **Show basis/source on output.** Footer: "Basis: Deenar 2026 verified pricing + quotation history (2023–2026)."
13. **Zero-delta inputs stay silent.** Speed, glass thickness, kW, travel height = spec text, not drivers.
14. **Terms never fabricated beyond verified facts.** Payment 40/20/20/20; delivery ~2–3 months; maintenance 1 year + AMC 10k/month — shown as verified info, nothing else invented.

---

## 14. Verification Status (was "Dad Verification Checklist")

Status of the MUST/NICE items from the previous model after the Dad interview (`docs/dad-pricing-verification.md`).

### Resolved by Dad [CURRENT VERIFIED]
| Item | Outcome |
|---|---|
| Current passenger steel & glass bands (630 kg) | **Answer: 2,800,000–4,500,000 (glass SAME)** |
| Payment schedule | **40% / 20% / 20% / 20%** — 30/40/30 obsolete |
| Discount policy | **Up to 5%** |
| Structure pricing basis + 20–50 ft band | **By height/width/depth; 600,000–1,000,000 (20–50 ft)** |
| Structure includes / who supplies | **Complete material; supplied by lift company** |
| Imported cabin / imported lift | **Cabin up to 50% above; imported lift depends on requirements/sizes/weight** |
| Home/villa + hospital | **Both offered — YES** (no pricing given) |
| Delivery time | **~2–3 months** |
| Free maintenance / AMC | **1 year free; 10,000/month after warranty** |
| Extra floor / stop | **Up to 300,000** |

### Still unresolved after interview (blockers / open questions)
| # | Question | Why it blocks | Status |
|---|---|---|---|
| 1 | Cargo segmentation (capacity/configuration → useful band) | 4m–15m is too broad for a single output | **[UNRESOLVED]** |
| 2 | Hoist current pricing | One historical quote only | **[UNRESOLVED]** |
| 3 | Home & hospital current pricing | Offered but no prices | **[UNRESOLVED]** |
| 4 | > 9 stops | No verification | **[UNRESOLVED]** |
| 5 | Per-floor / per-capacity rates ("up to 300k" is the only fact) | Exact adjustment method | **[UNRESOLVED]** |
| 6 | Option pricing (door, machine, ARD, generator, drive, TFT…) | No current values | **[UNRESOLVED]** |
| 7 | Structure bands above 50 ft | Not provided by Dad; do not invent | **[UNRESOLVED]** |
| 8 | Imported-cabin exact adjustment method | "up to 50%" is an upper bound | **[UNRESOLVED]** |
| 9 | USD / FX policy | No basis for PKR conversion | **[UNRESOLVED]** |
| 10 | Transport / civil / electrical / tax scope | Not confirmed | **[UNRESOLVED]** |
| 11 | Calculator vs Request-a-Quote boundaries per product | Team decision | **[UNRESOLVED]** |
| 12 | Displayed range width | Team decision | **[UNRESOLVED]** |
| 13 | When to force formal quotation | Team decision | **[UNRESOLVED]** |

---

## 15. Proposed Calculator Flow

```
1. CHOOSE CATEGORY            Passenger (Steel) | Passenger (Glass) | Cargo* | [Home · Hospital · Hoist · Imported(USD) → "Request quotation"]
                               *Cargo shown only with a "coarse range — needs configuration" flag until segmented
2. CAPACITY (kg)              dropdown; primary reference 630 kg passenger; cargo prompts capacity
3. STOPS (1–9)                slider [ >9 → "outside reference range — request quotation" ]
                              (+ note "each extra floor/stop: up to PKR 300,000" — info only)
4. STRUCTURE                  default "Deenar supplies structure"; height band 20–50 ft only (verified)
                              [ >50 ft → "structure quoted after survey" ]
5. CABIN SOURCE               Local SS  |  Imported cabin ("up to 50% above" — info note, no automatic add)
6. DOOR CLASS                 Automatic SS (default) | Swing / MS | Book-type  (value unresolved — minimal/no delta)
7. ADD-ONS                    [ ] ARD  [ ] Generator  [ ] VVVF door drive  (historical values flagged; current pending)
8. CALCULATE                  → banded range from verified category band ± structure (verified band)
                               → RANGE (low–high), rounded to lakh
9. OUTPUT PANEL               range + configuration summary + included/excluded + assumptions
                               + [Get exact quotation via survey → WhatsApp]
10. COMMERCIAL INFO (collapsible)  40/20/20/20 payment · ~2–3 months · 1-yr free maintenance · AMC 10k/month
```

Implementation notes for the build task (not performed here): keep all bands as **parameter data** gated by a single "verified" flag; render verified inputs (passenger steel/glass, structure 20–50 ft, payment, timeline, maintenance) as current; everything flagged `[UNRESOLVED]` must hand off to quotation rather than estimate.

---

## 16. Implementation Readiness Status

**Status: READY FOR DESIGN VALIDATION for passenger steel/glass bands; BLOCKED on [UNRESOLVED] items for the rest.**

| Criterion | Status |
|---|---|
| Passenger steel & glass 630 kg bands | ✔ VERIFIED [Dad 2026] |
| Inclusive list (complete lift + install + commissioning + testing + 1-yr warranty) | ✔ VERIFIED [Dad 2026] |
| Payment / delivery / maintenance / AMC facts | ✔ VERIFIED [Dad 2026] |
| Structure band 20–50 ft + default supply | ✔ VERIFIED [Dad 2026] |
| Imported-cabin & per-floor upper bounds | ✔ VERIFIED as notes [Dad 2026] |
| Cargo segmentation | ✖ [UNRESOLVED] |
| Hoist pricing | ✖ [UNRESOLVED] |
| Home/hospital pricing | ✖ [UNRESOLVED] |
| Option deltas (door/machine/ARD/generator/drive) | ✖ [UNRESOLVED] |
| Structure above 50 ft | ✖ [UNRESOLVED] |
| USD/FX policy | ✖ [UNRESOLVED] |
| Scope items (transport/civil/electrical/tax) | ✖ [UNRESOLVED] |
| Calculator boundaries, range width, stop-estimating conditions | ✖ [UNRESOLVED] — team decisions |

Consequences: a passenger steel/glass-only banded estimator could be built now, but the full product experience (cargo, home, hospital, hoist, imports, options) requires resolving §14's open items first.

---

## 17. Final Decision Matrix

| Element | Evidence | Proposed treatment | Confidence | Status |
|---|:---:|---|---|:---:|
| Passenger steel 630 kg band | Dad 2026 | band 2,800,000–4,500,000 | High (verified) | ✔ RESOLVED |
| Passenger glass 630 kg band | Dad 2026 "same" | same band; no premium | High (verified) | ✔ RESOLVED |
| Inclusions | Dad 2026 | complete lift + install + commissioning + testing + 1-yr warranty | High (verified) | ✔ RESOLVED |
| Payment schedule | Dad 2026 | 40/20/20/20 (display) | High (verified) | ✔ RESOLVED |
| Discount | Dad 2026 | up to 5%, disclosed, not auto-applied | High (verified) | ✔ RESOLVED |
| Structure (20–50 ft) | Dad 2026 | 600k–1M; by height/width/depth; Deenar default | High (verified) | ✔ RESOLVED |
| Imported cabin | Dad 2026 | "up to 50%" upper-bound note | High (fact) / method unresolved | ⚠ PARTIAL |
| Extra floor/stop | Dad 2026 | "up to 300,000" upper-bound note | High (fact) / method unresolved | ⚠ PARTIAL |
| Cargo | Dad 2026 | broad band only; segmentation needed | High (fact) / model unresolved | ⚠ PARTIAL |
| Home / hospital | Dad 2026 (offered) | quote-request; NOT priceable (no prices) | High (offered) | ⚠ PARTIAL |
| Hoist | — | not priced [HISTORICAL only] | — | ❌ UNRESOLVED |
| Stops > 9 | — | quote-request | — | ❌ UNRESOLVED |
| Option deltas | [HISTORICAL] | not priced yet | Weak | ❌ UNRESOLVED |
| USD import track | Dad 2026 (depends on requirements) | quote-request only | Moderate (scope) | ⚠ PARTIAL |
| Cargo per-capacity/config | — | needed before output | — | ❌ UNRESOLVED |
| Structure > 50 ft | — | quote-request (no verified band) | — | ❌ UNRESOLVED |
| Transport/civil/electrical/tax | — | not included/confirmed | — | ❌ UNRESOLVED |
| Range width / boundaries | — | team decision | — | ❌ UNRESOLVED |

---

## 18. Final Recommendation

### 18.1 The model
Build the calculator as a **banded range estimator** with a **formal-quotation handoff**. Start priceable for **Passenger (Steel) and Passenger (Glass) at the verified 630 kg band (2,800,000–4,500,000)**, with the verified inclusion list, the 20–50 ft structure component (600k–1M, height/width/depth, Deenar-supplied default), the verified commercial-info block (40/20/20/20 payment, ~2–3 months delivery, 1 year free maintenance, AMC 10k/month), and the two upper-bound notes ("up to 50%" imported cabin, "up to 300,000" extra floor). Route **everything else** (cargo until segmented, home, hospital, hoist, imports, >9 stops, structure >50 ft, unresolved options) to **request a quotation**.

### 18.2 What we now know (verified, traceable)
- Verified passenger steel/glass bands, inclusions, payment, discount bound, structure basis/band/ownership, imported-cabin bound, imported-lift scope, product availability, delivery, maintenance, per-floor bound — all in §5.
- The *relative* product orderings and same-document deltas from quotations remain useful as labeled history (§6.2, §7).

### 18.3 What we still do not know
Cargo segmentation, hoist pricing, home/hospital pricing, >9 stops, per-floor/per-capacity exact rates, most option deltas, structure above 50 ft, USD/FX policy, scope items, and the calculator-vs-quote / range-width decisions (§14, §19).

### 18.4 Bottom line
The verified 2026 facts are enough to design and eventually render a **passenger (steel + glass) banded estimator**. The model deliberately refuses to price what Dad has not priced (cargo segments, hoist, home, hospital, imports, options) and refuses to turn "up to"/"same" into fake formulas. **Next step: resolve §19's team decisions and gather the remaining data Dad did not provide — then implement the banded estimator with quote-request everywhere the evidence stops.**

---

## 19. Still Unresolved Before Implementation

Important calculator decisions and data gaps that remain before a full implementation:

1. **Home & hospital pricing** — products offered [Dad 2026], but no prices. Quotes only until figures are provided.
2. **Cargo segmentation** — the verified 4m–15m broad range must be broken into capacity/configuration bands before it can be a useful calculator output.
3. **Hoist pricing** — no current figure (single historical quote Q034). Quote request until supplied.
4. **> 9 stops** — no verification; keep slider at 1–9 with a quote-request above.
5. **Capacity / stop adjustments** — "up to 300,000" per floor is a bound, not a rate; exact per-floor and per-capacity adjustment method unresolved.
6. **Option pricing (door, machine, ARD, generator, drive, TFT, etc.)** — only historical deltas exist; current values required before they can price.
7. **Structure pricing beyond 20–50 ft** — do not invent ~80 ft / 98 ft / industrial bands; quote-request above 50 ft.
8. **Imported-cabin exact adjustment method** — "up to 50%" is a verified upper bound; decide the actual treatment (optional note vs option price) with Dad's controlled evidence.
9. **USD/FX policy** — no FX basis; imported complete lifts remain quote-request until a policy exists.
10. **Transport / civil / electrical / tax scope** — Dad confirmed the included list (complete lift, installation, commissioning, testing, warranty) but did not confirm whether transport/civil/electrical/taxes are in or out; resolve before writing public exclusion copy.
11. **Calculator vs Request-a-Quote boundaries** — which categories get a calculator vs a quote form (proposal: passenger steel/glass = calculator; cargo pending segmentation; all else = quote).
12. **Displayed range width** — decide low/high spread (e.g., ±10% / ±15% / ±20%) for the verified bands.
13. **Conditions that force a formal quotation** — define triggers (e.g., >9 stops, >1000 kg passenger, home/hospital/hoist/imported, structure >50 ft, unusual shaft/site).

---

## Consistency Audit — this revision

Checks performed against Dad's verified answers:
- ✔ No 30/40/30 remains — replaced by 40/20/20/20 (all §1.1, §5, §11, §12, §14).
- ✔ No glass premium remains — glass explicitly SAME as steel (§2.6, §5#2, §6.1, §9.1); historical glass band retained only as labeled history (§6.2).
- ✔ No "+30% imported cabin" rule remains — replaced with "up to 50%" upper-bound note (§5#11, §7, §9.2, §12).
- ✔ No unsupported structure bands — only verified 20–50 ft (600k–1M); 80 ft / 98 ft kept as labeled history or removed from current treatment; no invented bands (§5#8, §6.2, §8).
- ✔ No invented home/hospital prices — both explicitly "offered but not priceable" (§3, §5#13–14, §19.1).
- ✔ "Up to 300,000" never converted to a fixed +300,000 (§5#18, §7, §13.3).
- ✔ "Up to 50%" never converted to a fixed +50% (§5#11, §7, §13.3).
- ✔ No historical quotation figure presented as a current 2026 business price — every historical figure carries the [HISTORICAL] label (§6.2 and at point of use).
- ✔ Cargo broad range flagged as needing segmentation; not a single generic output (§5#3, §6.1, §13.5).
- ✔ Historical quotation evidence retained (not deleted) and labeled as historical wherever it appears.

---

## Quality Control — this task
- Revised ONLY `docs/calculator-pricing-model.md`. No source files, quotation files, website or calculator code, or other documentation modified.
- Every priced element is traceable to a Dad 2026 answer and/or a Q-ID.
- No invented prices: current numbers come only from Dad; historical numbers are labeled [HISTORICAL].
- No USD↔PKR conversion; the USD track stays quote-request-only.
- All unresolved items are explicitly flagged [UNRESOLVED] and listed in §19.
- Decision logic is reproducible from `docs/dad-pricing-verification.md` and the two analysis documents.