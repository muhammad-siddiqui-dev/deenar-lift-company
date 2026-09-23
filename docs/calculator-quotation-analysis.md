# Calculator vs Real Quotations — Evidence Analysis (Deenar Lift Company)

Phase: M2.5 — Business Verification (calculator ↔ quotation evidence gap analysis).
Status: ANALYSIS ONLY. Nothing in this document is a price recommendation, a pricing formula, or a claim that any historical quotation price represents a current public price.
Primary source: `docs/quotation-extraction.md` (61 quotations, Q001–Q061, raw evidence; no averages/formulas therein).
Secondary source (read-only): current calculator implementation —
- `src/lib/pricing.ts` (the pricing model),
- `src/components/PricingCalculator.tsx` (the interactive UI),
- `src/app/pricing/page.tsx` (sample-estimate table and pricing FAQ).
Scope rule: this task created/modified ONLY `docs/calculator-quotation-analysis.md`. No website code, no calculator code, and no other project documentation was touched.

Cross-reference: `docs/business-truth.md` P1 (real pricing calibration) remains PENDING — this document is the feeder analysis that should resolve that item, not the resolution itself.

---

## 1. Current Calculator Inventory

The calculator is a 5-input estimate tool. All constants live in `src/lib/pricing.ts`; the UI is `src/components/PricingCalculator.tsx`; the samples table and FAQ are in `src/app/pricing/page.tsx`.

### 1.1 Input — Elevator type (`typeId`)

| Type | Options | What the calculator does with it | Quotation evidence exists? |
|---|---|---|---|
| Home / Villa Lift (`home`) | n/a (one type) | Base PKR 3,200,000; per-stop PKR 210,000; stops 2–5; capacity unit "persons" (2/3/4/6) | No — no dedicated home/villa lift quotation in the dataset |
| Passenger Lift (`passenger`) | n/a (one type) | Base PKR 8,500,000; per-stop PKR 420,000; stops 3–30; persons (6/8/10/13/16) | Yes — majority of the dataset |
| Freight / Goods Lift (`freight`) | n/a (one type) | Base PKR 14,500,000; per-stop PKR 680,000; stops 2–10; kg (1,000/2,000/3,000) | Yes — as "cargo lift" (the dataset uses "Cargo", never "freight") |
| Hospital Lift (`hospital`) | n/a (one type) | Base PKR 9,800,000; per-stop PKR 470,000; stops 2–15; persons (6/8/10) | No — no hospital/medical quotation in the dataset |
| Panoramic / Glass Lift (`panoramic`) | n/a (one type) | Base PKR 10,200,000; per-stop PKR 460,000; stops 2–15; persons (6/8/10/13) | Yes — 7 glass-lift quotations (see §2) |

### 1.2 Input — Building type (`buildingId`)

| Option | Factor | Purpose | Quotation evidence exists? |
|---|---|---|---|
| Private Residence / Villa (`residential`) | 1.00 | adjusts subtotal | Indirect only — several clients are private individuals, but no document records "building type" as a priced variable |
| Apartment Building (`apartment`) | 1.06 | adjusts subtotal | No direct evidence |
| Commercial Building (`commercial`) | 1.09 | adjusts subtotal | Indirect only (DHA/office clients) |
| Hotel (`hotel`) | 1.06 | adjusts subtotal | No — no hotel quotation |
| Hospital (`hospital`) | 1.10 | adjusts subtotal | No — no hospital quotation |
| Industrial / Warehouse (`industrial`) | 1.18 | adjusts subtotal | Indirect only (KEPZ / EPZA / M/s Sunpo Industries sites) |

No quotation prints a building-type multiplier. The factor table appears to be an internal assumption, not derived from quotations.

### 1.3 Input — Capacity (`capacity`)

Per-type dropdown (persons for home/passenger/hospital/panoramic; kg for freight). A `capFactor` multiplies the base:
- home: 2→1.00, 3→1.06, 4→1.12, 6→1.24
- passenger: 6→1.00, 8→1.14, 10→1.28, 13→1.45, 16→1.62
- freight (kg): 1,000→1.00, 2,000→1.35, 3,000→1.70
- hospital: 6→1.00, 8→1.15, 10→1.30
- panoramic: 6→1.00, 8→1.12, 10→1.25, 13→1.40

Evidence exists for kg (strong) and for persons on passenger lifts (partial, with inconsistencies — see §2). No evidence for the home/hospital/passenger >13-person ranges.

### 1.4 Input — Number of stops (`stops`)

Slider from `minStops` to `maxStops` per type. Shaft cost = `perStop × (stops − minStops)`. Ranges: home 2–5, passenger 3–30, freight 2–10, hospital 2–15, panoramic 2–15.

Evidence exists for stops 1–9 in the quotations; nothing in the dataset supports stop counts above 9.

### 1.5 Input — Finish & technology (`finishId`)

| Option | Multiplier | Note shown to user | Quotation evidence exists? |
|---|---|---|---|
| Standard | 1.00 | "Laminate / PVC interior, durable finish" | Partial — PVC flooring appears on FUJI passenger cabin; laminate does not appear |
| Premium | 1.28 | "Stainless steel cabin, LED lighting, VVVF drive" | Partial — SS-304 cabins, LED lighting and VVVF drives are well attested; the 1.28 multiplier itself is not evidenced |
| Luxury | 1.58 | "Full stainless / stone finish, panoramic glass, destination dispatch" | Weak — stone finish and destination dispatch never appear; panoramic glass appears (as "passenger glass lift"), but not with a luxury multiplier |

### 1.6 What the calculator does with the inputs (outputs)

In `calculateEstimate` (`src/lib/pricing.ts:167`):
- `machine = base × capFactor`
- `shaft = perStop × (stops − minStops)`
- `subtotal = (machine + shaft) × finishMultiplier × buildingFactor`
- rounded to the nearest lakh (Rs 100,000): `mid`, `low = mid × 0.9`, `high = mid × 1.15`
- breakdown panel: `machineCost`, `shaftAndDoors`, `installation = 12% × mid`, `misc = remainder`
- `timelineWeeks = baseWeeks + (stops − minStops) × 0.5` (baseWeeks: home 10, passenger 16, freight 20, hospital 18, panoramic 18)

Default state: passenger / commercial / 8 persons / 8 stops / premium.

The page also states in copy that every figure "includes supply, installation and commissioning" and the FAQ claims "30% advance, 40% on manufacturing milestones and 30% before installation completes" and installation times of "1–3 weeks (home)" / "3–8 weeks (passenger/freight)". These copy claims carry implicit assumptions (installation share, payment schedule, timeline) which the quotation evidence can check but currently does not define.

---

## 2. Quotation Evidence Coverage

Coverage classes: Strong / Partial / Weak / No evidence. Every statement below is tied to specific quotations; where data is thin, that is said explicitly.

### 2.1 Elevator type

Coverage: **Partial**.

- Passenger (non-glass): Strong. ~25 complete-lift quotation files — e.g. Q001, Q009–Q012, Q014, Q017, Q018, Q025–Q027, Q036/Q057, Q037/Q038, Q039, Q045, Q046, Q049, Q051, Q059/Q060.
- Panoramic / glass: Partial→Strong at the level of "does the product exist". 7 files (Q002, Q019, Q021/Q022, Q028, Q047, Q048). They are titled "Passenger Glass Lift", so the calculator's separate "panoramic" identity is a product-naming gap, not an evidence gap.
- Freight / cargo: Strong. Q003, Q004/Q005, Q013, Q016, Q029/Q030/Q056, Q053, plus hoist (Q034) and dumbwaiter (Q042).
- Home / villa: No evidence. No quotation is offered as a "home lift". Closest is Q026 (passenger, 450 kg, 1 stop, swing door, geared reconditioned machine — a very simple residential-style lift).
- Hospital: No evidence. No medical/stretcher-lift quotation exists.

### 2.2 Building type

Coverage: **No evidence** (as a priced variable).
- No document records "residential/apartment/commercial/hotel/hospital/industrial" as a field or a multiplier.
- Site names only imply context: DHA / Phase-8 (predominantly residential/commercial), KEPZ / EPZA (industrial — Q003, Q004, Q029, Q052, Q053, Q020), M/s SAK Timber (industrial-ish — Q024, Q048), M/s Sunpo Industries (industrial — most of the P.O series).
- Because building type never changes price inside a quotation and never appears across otherwise-identical quotes, the 1.00–1.18 factor set cannot be confirmed or refuted by this dataset.

### 2.3 Capacity

Coverage: **Strong (kg) / Partial (persons, for passenger types)**.
- Kg is printed almost everywhere it matters. Passenger clusters: 450 (Q014, Q026), 500 (Q046), 550 (Q009–Q012), 630 (Q001, Q002, Q018, Q021/Q022, Q027, Q039, Q045, Q047, Q049, Q051, Q059/Q060), 1000 (Q006/Q007, Q019, Q028, Q036/Q057, Q037/Q038, Q048). Cargo: 1000 (Q013), 1600 (Q004/Q005, Q020/Q043, Q031–Q033 install scope), 2000 (Q003, Q029/Q030/Q053/Q056, Q034 hoist, Q020/Q043), 3000/2000 conflicting (Q016). Dumbwaiter 150 (Q042).
- Persons vs kg is inconsistent: 630 kg ≈ 7 persons in most passenger quotes but 8 persons in Q021/Q022; 1000 kg ≈ 10 persons in Q019 but 13 persons in Q048.
- The calculator asks passenger capacity in "persons" (6–16). Person labels in the dataset cover roughly 5–13; no dataset evidence for 16 persons, and no evidence for the home 2–4-person options' existence as a distinct product.

### 2.4 Number of stops

Coverage: **Strong within 1–9; No evidence beyond 9**.
- Passenger quotes span 1 stop (Q026) to 9 stops (Q051). Cargo/hoist span 3–6. FUJI imported 6–7 (type string 6/6/6, spec table 7/7 — Q041/Q054/Q055 mark this "Unclear").
- The calculator's passenger slider runs to 30 stops and hospital to 15; no quotation in the dataset exceeds 9 stops, so the upper ranges are unsupported by local evidence.

### 2.5 Finish

Coverage: **Partial**.
- Supported sub-variables: stainless steel (SS-304) wall/panel vs MS powder-coated wall (Q045 vs Q046); local-made cabin vs imported cabin (Q028: Rs 3,550,000 local vs Rs 4,600,000 imported); glass doors (Q002, Q019, Q028, Q047, Q048); LED lighting (Q041/Q054/Q055); TFT/LCD displays (many); false ceiling (Q018, Q027, Q036); tiles vs checker plate (passenger vs cargo).
- Unsupported sub-variables: "laminate" interiors, "stone finish", "destination dispatch". The premium/luxury multipliers (1.28/1.58) have no quotation basis.

### 2.6 Cost-of-money assumptions inherited by the page copy

Coverage: **Partial** (see §2.5 and §5) — installation share (12%), payment schedule (30/40/30), and timeline (weeks) are calculator assumptions with only indirect quotation support:
- Installation/commissioning is priced separately in 6 files (see §3 "Installation").
- Payment schedules in the quotes never match 30/40/30 (see §3 "Payment terms").
- Delivery is quoted in days (45, 60, 70, 90; FUJI 40 working days for supply), never in the calculator's baseWeeks scheme.

---

## 3. Variables Found in Quotations But Missing From Calculator

These recur in the quotations with usable data and are not asked by the current calculator.

| Variable | Recurrence in dataset | Representative quotations | Notes |
|---|---|---|---|
| Stops / floors (as its own explicit spec, incl. travel height) | Very high | Q001–Q003, Q018, Q021 (G+3 vs G+2 priced separately), Q036, Q051 | Stops already drive the calculator, but floors often come with roof + basement conventions (G+1+2+Roof, B+G+…) that the calculator does not capture; travel height in feet also appears (Q018 70 ft, Q029/Q034/Q052 98 ft, Q011 40 ft, Q023/Q047 50 ft, Q024 80 ft, Q026 ~20 ft) |
| Door type | High | Q001, Q002, Q026 (swing), Q045 (automatic) vs Q046 (swing), Q003/Q004 (manual book-type cargo), Q034 (no doors), Q041/Q054/Q055 (2-panel center opening 800×2100 mm) | Customers must choose; automatic center-opening dominates passenger, manual book-type dominates cargo |
| Cabin material / build source | High | Q028 (local vs imported cabin), Q045 (SS-304) vs Q046 (MS powder coat), Q001–Q004, Q036, Q048 | Strong evidence this moves price (see §5) |
| Machine / drive type (gearless vs geared vs hoist; kW) | High | Q001, Q002 (gearless 4.2 kW), Q003/Q029 (geared 11 kW), Q013 (gearless 6.4 kW), Q016 (geared 11 kW), Q034 (hoist), Q046 (geared reconditioned 5.5 kW), Q036 (TorinDrive), Q041 (FUJI) | Geared/reconditioned vs gearless is a real option split in the market evidence |
| Structure (included vs separate cost) | High | Separate lines: Q009 (600,000), Q011 (450,000), Q023 (700,000), Q024 (1,150,000), Q026 (400,000), Q029/Q030/Q052/Q056 (2,800,000), Q034 (1,800,000), Q047 (600,000). Combined single total incl. structure: Q002 | Some quotes are structure-only documents (Q023, Q024, Q052). Height/load appear to influence it (40 ft ≈ 450k … 98 ft 2000 kg ≈ 2,800k) — a relationship to investigate, not asserted here |
| Glass (tempered, thickness) | Medium | Q002, Q019, Q028, Q047, Q048 (6 mm door / 8 mm cabin) | Directly relevant to the "panoramic" product line |
| Imported vs local / semi-import supply split | High | Q020/Q043 (Sigma — USD CIF), Q041/Q054/Q055 (FUJI — USD CIF), Q028 (imported vs local cabin), Q014/Q018/Q027/Q036/Q059 (all "semi-import") | Changes currency and scope of a price; the calculator has no notion of imported supply + separate installation |
| Installation & commissioning (separate line) | Medium | Q020 (PKR 3,800,000 two lifts), Q031 (2,200,000), Q032 (1,200,000), Q033 (1,000,000), Q041 (2,200,000), Q055 (2,800,000) | Calculator uses a fixed 12% of mid; quotes price installation as an explicit item |
| Payment terms | Very high | Q026 (60/25/10/final), Q027 (PKR tranches), Q029 (50/35/15 lift, 100% structure), Q041 (40/60 T/T, then 60/30/10 install), Q008/Q044/Q023/Q061 (100% advance) | Calculator copy claims 30/40/30 — unmatched by any quotation |
| Free maintenance period | Very high | 2 months (Q045, Q046), 6 months (majority), 12 months (Q013, Q016, Q018, Q031–Q033, Q041, Q054, Q055); monthly post-warranty charges 5,000 (Q036/Q057) and 10,000 (Q041/Q054/Q055) | Public-facing commercial variable not surfaced by calculator |
| Speed | Very high as a constant | 1 m/s in nearly all complete lifts | No variation in the dataset → cannot be used as a price driver yet, but should be surfaced as a spec field |
| Shaft dimensions | Medium | Q004/Q031/Q032 (8×8 ft), Q006/Q007/Q033 (8×6 ft), Q016 (13×8 ft) — cabin sizes "max to avail"; FUJI shaft W1800×D2400 mm | Related to structure/cabin sizing |
| ARD / emergency rescue device (add-on) | Medium | Q012, Q018, Q028, Q036, Q049, Q051, Q058, Q014 (added by revision) | Recurring optional add-on; Q049/Q051 price it at Rs 150,000 separately |
| Extras (generator, branch, tax note) | Low-Medium | Q037/Q038 (generator + fuel + branch 150,000), Q027 (branch 30,000), Q036/Q057 ("without any kind of tax") | Type of items users ask about; appear as add-ons or exclusions |

---

## 4. Pricing Evidence

### 4.1 Quotations with usable total prices

- **All 61 files print an amount of some kind** (total, per-unit, multi-line, or itemized), but the amounts are not all comparable.
- **~46 of 61 files** print an amount that represents a complete lift or a complete pair of lifts (includes combined lift+structure+glass totals like Q002, and per-unit multi-lift deals like Q051).
- After removing identical duplicates and near-duplicate revision variants (per the Q-C:Q-C group list in `docs/quotation-extraction.md` §6), this reduces to **~39 distinct complete-lift quotes/sets**.
- **13 files are component or works-only scopes**, not complete lifts: structure-only (Q023, Q024, Q052), electrical-works-only (Q008, Q044), modification/upgrade of existing lifts (Q035, Q040, Q058, Q015), doors + cabin supply with separate installation (Q031, Q032, Q033), and a winch/girder arrangement (Q061).
- **2 files have amounts flagged Unclear**: Q043 (pricing portion of the PDF garbled) and Q050 (numeric amount vs words-in-full conflict: PKR 1,950,000 vs "Four Million Three Hundred Thousand").
- **3 additional files** have flagged internal arithmetic/consistency issues on amounts (Q041/Q054 USD-total figures, Q055 printed arithmetic oddities, Q027 discount arithmetic) — their totals are legible but must be treated carefully.

### 4.2 Currency types

- **PKR** (printed as PKR, Rs, "Rupees") — the overwhelming majority.
- **USD, CIF Karachi** — Q020, Q041, Q054, Q055 (imported supply). In these, the *supply* price is USD and the *installation/commissioning* is separately quoted in PKR. No conversion is performed or implied anywhere in this analysis.
- **"Without any kind of tax"** is explicitly stated in Q036/Q057, and discounts appear in Q027 (PKR 225,000), Q029/Q030 (up to 10% ≈ 500,000), Q032 (10% ≈ 210,000), Q033 (10% ≈ 220,000) — so even the PKR totals are not on a single tax/discount basis.

### 4.3 What the prices include (scope mix)

| Scope shape | Examples | Hazard for comparison |
|---|---|---|
| Lift only, structure by owner | Q003, Q010, Q053 | Total excludes a major cost component |
| Lift + structure (separate lines) | Q009, Q011, Q026, Q029/Q030/Q056, Q034, Q047 | Total is only comparable if structure is added or removed |
| Lift + structure + glass, one combined total | Q002 | Cannot split glass/structure from lift |
| Imported supply (USD CIF) + separate PKR installation | Q020, Q041, Q054, Q055 | Two currencies, two payment tracks, customs/duties by buyer |
| Local all-in supply + installation | Q001, Q014, Q018, Q039, Q049, Q059, … | The default shape of the local quotes |
| Component supply + separate installation/commissioning | Q031, Q032, Q033 | Not a complete-lift price at all |
| Works/modification/upgrade scope | Q008, Q015, Q035, Q040, Q044, Q058 | Prices for changing or fixing an existing lift, not building one |
| Structure-only | Q023, Q024, Q052 | No lift content |
| Winch arrangement | Q061 | Not an elevator |

The practical consequence: **directly comparing two "totals" from this dataset is unsafe** unless lift type, capacity, stops, structure inclusion, glass inclusion, currency, tax/discount basis, and installation inclusion are first reconciled. This is the central reason the raw dataset must not be used to quote prices today.

### 4.4 Examples of materially different quotation structures

1. **Q002** — one PKR figure (4,100,000) for "structure + lift + glass" as a combined total; payment split by work-stage (35/15/15/15/20).
2. **Q029** — lift PKR 5,500,000 (with a 500,000 "up to 10%" discount) and structure PKR 2,800,000 shown as separate lines with a printed total of 7,800,000, but the lift is paid 50/35/15 while the structure demands 100% advance.
3. **Q020** — imported supply priced in **USD CIF Karachi** (16,000 + 19,000 = 35,000), installation separately in **PKR** (3,800,000), customs/duties on the buyer, 70/30 payment on supply, 90-day delivery.
4. **Q031 / Q032 / Q033** — component quotes (MS doors + cabin, or SS doors + drive + cabin), 100% advance, PLUS a separate installation/commissioning line per lift (FHSP 1600/1000 kg).
5. **Q008 / Q044** — electrical-works-only scopes for a passenger lift (Rs 1,150,000 / 1,068,000), 100% advance, no lift machine, cabin, or structure anywhere.
6. **Q035 / Q040** — modification of an existing lift (replace machine, glass doors, controls, cabin upgrade) for PKR 4,000,000 — a modernisation price, not a new-lift price.
7. **Q051** — a per-unit price (3,375,000) multiplied by 4 lifts = 13,500,000 printed total.
8. **Q037** — base lift 3,100,000 with a separate 150,000 line for "generator + fuel + branch" (working power).

---

## 5. Pricing Variables

These variables have enough raw evidence to be worth *investigating* as pricing drivers. "May matter" here means "a price difference is observable in the dataset and the variable differs in the paired/quasi-paired quotes" — it is NOT the same as "proven to determine price", and no causal claim is made.

| Variable | Evidence / coverage | Why it may matter | Limitations / confounding factors |
|---|---|---|---|
| Capacity (kg) | Strong. Paired evidence within two documents: Q020 passenger 1,000 kg USD 16,000 vs cargo 1,600 kg USD 19,000; Q041 FUJI 1,000 kg 14,150 vs 1,600 kg 15,050 (USD). Cross-document cargo: Q003 2,000 kg 5,500,000 vs Q004/Q005 1,600 kg 4,900,000. | Capacity tracks machine size (4.2 kW @ 630 kg vs 6.2/6.4 kW @ 1,000 kg vs 11 kW @ 2,000 kg) and likely car size. | Same-kg prices differ heavily across documents (630 kg passenger spans ~2.2m–3.7m), so capacity alone explains little; door type, finish, stops, year and discounts differ at the same time. |
| Stops / floors | Strong for 1–9 stops. Within one document: Q021 prices the 4-stop (G+3) lift at 4,300,000 vs the 3-stop (G+2) at 4,000,000. Cross-document 630 kg family: Q027 5 stops (discounted total 2,205,000), Q018 7 stops 3,150,000, Q049 7 stops 3,025,000, Q059/Q060 7 stops 3,500,000, Q051 9 stops 3,375,000. | Stops drive travel height, doors count, wiring, rails, and (in Q021's case) a visible per-stop step. | Q021 is the only clean same-quote pair, and it is glass + structure-ish scope. The cross-document 630 kg family spans 2023–2026, mixes glass/steel, discounts, and ARD add-ons. |
| Machine type & drive | Partial. Q045 (gearless 4.2 kW, auto door, SS) 3,200,000 vs Q046 (geared reconditioned 5.5 kW, swing door, MS) 2,500,000 — same date, site, stops, payment terms. Cargo geared 11 kW vs hoist machine (Q034). | The market visibly offers gearless/geared/reconditioned at different price points; generator sizing in kW is a spec users see. | Q045/Q046 differ in door type and finish simultaneously — machine is not isolated. No equal-everything pair exists. |
| Cabin material & build source | Strong. Q028 quotes the same lift twice: local-made cabin Rs 3,550,000 vs imported cabin Rs 4,600,000 (+~1,050,000). Q045 (SS-304 wall) vs Q046 (MS powder coat) reinforce direction. | Cabin is a visible, customer-facing differentiator and is a large single line item (Q031/Q032: PKR 1,500,000; Q033: PKR 1,300,000). | Imported-cabin version in Q028 is the same lift but the delta also reflects import cost/exchange-rate risk; only one such paired observation. |
| Door type | Strong presence; Partial as isolated driver. Automatic center-opening (most passenger), swing (Q026, Q046), manual book-type (cargo), glass (7 quotes), none (Q034). Unit prices exist: Q031 local MS book-type door 85,000 each; Q033 local SS automatic door 120,000 each + door drive 200,000. | Door count/type is quoted per unit and drives cost in P.O component quotes; automatic vs manual is a large function gap. | Paired automatic-vs-swing evidence is Q045 vs Q046 (confounded with machine/finish). Cargo book-type doors are in a different price universe. |
| Structure | Strong presence as a separate priced item (9 quotes/lines, 400,000–2,800,000). | It is routinely a major add-on ("structure included vs owner's responsibility"), and two quotes (Q002; Q009) show it bundled or itemised next to the lift amount. | Different heights, loads, and member specs; Q029/Q052/Q034 are heavy 98-ft industrial structures while Q023/Q024 are residential-sized. Only height-vs-price is hinted, never controlled. |
| Glass (tempered) | Medium — 7 glass-lift quotes; 6 mm (door) and 8 mm (cabin/full glass) thicknesses appear. | Distinguishes the panoramic product line; appears inside combined totals (Q002) or as the reason a quote is "glass". | No paired steel-vs-glass quote of the same lift exists; glass is bundled with structure in Q002 and with the lift in others. |
| Imported vs local/semi-import supply | Partial. Imported lifts are quoted in USD CIF with buyer-paid duties and separate PKR installation (Q020, Q041, Q054, Q055); most local quotes are single PKR all-in. Q028 isolates "imported cabin" vs "local cabin". | Supply origin is a first-order scope/currency boundary; the price basis is structurally different, not just higher. | Comparing a USD-CIF line to a PKR all-in line requires exchange rate + duty + installation reconciliation that this dataset alone cannot honestly perform. |
| Speed | Weak as a driver — 1 m/s essentially everywhere it is stated. | Not yet usable as a driver; treat as a standard specification while waiting for more varied evidence. | One observed value → no pricing inference possible. |
| Installation / commissioning | Medium — separate figures exist (1,000,000–2,800,000 and the two-lift 3,800,000 in Q020). | The calculator currently books a fixed 12% of mid as installation; quotations treat installation as an explicitly negotiated item with its own payment track (60/30/10). | Installation amounts are tied to different lift sizes, floors, and two currencies' supply legs; no formula can be extracted reliably yet. |

Explicitly NOT listed (insufficient evidence to even investigate): building type factors (§2.2), premium/luxury finish multipliers (§2.5), stops > 9, hospital, home, destination dispatch, and any per-kg / per-floor unit price.

---

## 6. Current Calculator vs Real Quotations

Classification: KEEP / REVIEW / REMOVE / ADD. The human approves all final calls; evidence is given for each.

| Calculator element | Class | Evidence & reasoning |
|---|---|---|
| Elevator type — Passenger | **KEEP** | The dataset is dominated by passenger lifts; coverage strong across capacities 450–1,000 kg. |
| Elevator type — Freight/Cargo | **KEEP** | 9 complete cargo quotes + hoist + cargo door/cabin quotes. Note: the dataset says "cargo", so naming should be reconciled. |
| Elevator type — Panoramic/Glass | **REVIEW** | Product clearly exists (7 quotes) but is never called "panoramic"; pricing sits inside a glass "passenger" quote with combined scope. Either keep as glass-lift option with better evidence linkage, or drop the separate identity. |
| Elevator type — Home/Villa | **REMOVE or re-scope** | No home-lift quotation exists. If kept for demand reasons, it must be labeled "no in-house quotation evidence yet" and priced from a defensible source, not from this dataset. |
| Elevator type — Hospital | **REMOVE or re-scope** | No hospital quotation exists (see Home/Villa). |
| Building type (6 factors) | **REMOVE** | No quotation records building type as a priced variable; the factors appear invented. At most, "industrial/non-industrial" could be rebuilt later from site evidence (KEPZ/EPZA), never assigned a coefficient from this dataset. |
| Capacity | **KEEP (review units & range)** | Strong kg evidence. Convert the UI to kg league (or let users pick either) since quotations price in kg and person-ratings are inconsistent for the same kg (630 → 7 or 8; 1,000 → 10 or 13). Cap the person/stop ranges to what evidence covers; drop 16-person and >13-person passenger options until supported. |
| Stops | **KEEP (cap range)** | Strong evidence 1–9. Slider max of 30 (passenger) / 15 (hospital) exceeds every quotation. Consider a hard ceiling around 10–12 with a "more than this? ask us" note. |
| Finish (Standard/Premium/Luxury) | **REVIEW** | SS cabin / LED / VVVF and local-vs-imported cabin are evidenced; "laminate", "stone", "destination dispatch" and the 1.28/1.58 multipliers are not. Rebuild finish as evidenced options (e.g., MS powder-coat vs SS-304 local vs imported cabin) rather than invented tiers. |
| Installation = 12% of mid | **REVIEW** | Installation is real (6 separate quotes), but the 12% share and the bundled "everything included" copy are assumptions. Quotations price installation explicitly and pay it on a separate schedule. |
| Payment-terms copy (30/40/30) | **REVIEW** | No quotation uses 30/40/30. Real observed tracks: 50/35/15, 50/30/20, 40/20/25/12/3, 40/20/20/15/5, 60/30/10 (installation), 70/30 (imported supply), 100% advance (structures/works). |
| Timeline in weeks | **REVIEW** | Quotations state days: 45 (Q034), 60 (majority), 70 (Q018), 90 (Q020, Q029/Q030/Q056), 40 working days (FUJI supply). The pages' "3–8 weeks" / "1–3 weeks" claims should be reconciled to this evidence. |
| **ADD** — Door type | | Automatic center-opening / swing / manual book-type / glass / none. Strong recurring variable, unit-priced in P.O quotes. |
| **ADD** — Cabin material / build source | | MS powder-coat vs SS-304 vs imported cabin; strong, with a clean same-quote price difference (Q028). |
| **ADD** — Machine type | | Gearless / geared (new or reconditioned) / hoist; kW. Recurring and tied to capacity. |
| **ADD** — Structure (included / owner / costed) | | Recurring separate line item or explicit exclusion ("covering by owner"). |
| **ADD** — Glass (for the glass/panoramic line) | | 6 mm / 8 mm tempered, door vs cabin. |
| **ADD** — Supply type (local vs imported) | | Splits currency (PKR vs USD CIF) and scope (supply vs supply+install); needed to stop the calculator quoting an imported job on local all-in logic. |
| **ADD (spec field, not price driver yet)** — Speed, travel height, shaft dimensions | | Speed is 1 m/s everywhere; travel height and shaft size appear frequently. Surface as informative specs, not price inputs. |

---

## 7. Data Quality & Limitations

- **Partially extracted PDFs (4):** Q031, Q043, Q050, Q055 have garbled segments; affected fields are marked "Unclear" in the dataset. Q043 loses its pricing/payment section; Q050 loses words-vs-numeric coherence and delivery/maintenance; Q055 loses parts of the tail.
- **Missing fields:** capacity absent (Q017, Q025, Q050), floors/stops absent (Q008, Q015, Q035/Q040, Q044, Q058), speed absent (Q016, Q017, Q025, Q034, Q050), structure/history not stated in most quotes.
- **Duplicate / near-duplicate quotations:** identical pairs/triples (Q004/Q005, Q006/Q007, Q029/Q030/Q056, Q035/Q040, Q036/Q057, Q037/Q038, Q021/Q022, Q059/Q060, Q017/Q050) and revision variants (Q031 vs Q032; Q041 vs Q054 vs Q055). These inflate the raw file count and must be de-duplicated before any counting exercise.
- **Different quotation scopes:** complete lifts vs structure-only vs electrical-works vs component (doors/cabin) vs installation-only vs modification vs upgrade vs winch. Totals are not comparable across scopes.
- **Historical dates:** 2023–2026. PKR totals from 2023 (Q001, Q026, Q049, Q051, Q042? no — 2025) sit beside 2025–2026 figures; no inflation/rupee-devaluation normalization is possible without an explicit, separately-decided policy, and none is applied here.
- **Different currencies:** PKR and USD CIF Karachi (Q020, Q041, Q054, Q055). No conversions performed.
- **Modification/component quotes:** several "prices" are for upgrades (Q035/Q040 PKR 4,000,000), works (Q008, Q044), winch (Q061), structure-only (Q023, Q024, Q052) — none are new-lift prices.
- **Tax/discount heterogeneity:** "without tax" (Q036/Q057), discounts (Q027, Q029/Q030, Q032, Q033), add-ons (ARD 150,000; generator/fuel/branch 150,000), and printed-vs-word conflicts (Q050) prevent even the all-PKR totals forming a single basis.
- **Conflicting printed figures:** Q006 (usage field "CARGO" under a passenger subject), Q013/Q016 (capacity heading vs body), Q041/Q054 (6/6/6 type vs 7/7 spec), Q055 (arithmetic oddities). Recorded, not resolved.
- **Single suppliers dominate:** most quotes are Excellent Elevator Engineering (with a few Aayan differently-letterheaded versions, Q020/Q043). There is effectively one company's pricing history — not a market sample, and Q020/Q043 duplicate on two letterheads.
- **Persons-vs-kg mismatch** makes passenger capacity non-standard across documents.
- **Jointly-varying factors:** quotes change capacity, doors, finish, machine, stops, and date together; the dataset contains almost no controlled experiments (best: Q021 stops pair, Q028 cabin pair, Q045 vs Q046 pair) — this is why causal pricing claims are impossible from this data.
- **No home or hospital evidence** — absence of evidence is itself data (see §2, §6).

**Bottom line for reliability:** the dataset can support *budget-band sanity checks and product-structure design*, not *published exact prices*.

---

## 8. Recommended Next Analysis

Recommended sequence BEFORE any calculator change (none performed here — each needs as its own task):

1. **Build a comparable core set.** Filter to complete new-lift quotes only (exclude Q008, Q015, Q023, Q024, Q031, Q032, Q033, Q035, Q040, Q044, Q052, Q058, Q061; treat Q043/Q050's unclear figures as non-data). Keep only the passenger and cargo complete quotes (~40 files → ~30 distinct).
2. **De-duplicate.** Collapse the identical/revision groups (Q004/Q005, Q006/Q007, Q029/Q030/Q056, Q035/Q040, Q036/Q057, Q037/Q038, Q021/Q022, Q059/Q060, Q017/Q050, Q031/Q032, Q041/Q054/Q055, Q020/Q043) into single rows, picking one canonical rendering and recording the variants as metadata.
3. **Separate currency & scope buckets.** PKR-locals (supply + installation all-in) must never be pooled with USD-CIF imported supply (Q020, Q041, Q054, Q055); reconcile those imported quotes against their PKR installation legs separately if ever used.
4. **Segment passenger lifts by capacity** (450–550, 630, 1000 kg) and by cabin material (SS vs MS vs glass). The 630 kg family (Q001, Q002, Q018, Q021/Q022, Q027, Q039, Q045, Q047, Q049, Q051, Q059/Q060) is the only near-homogeneous group large enough for a first estimation exercise.
5. **Per-stop analysis from the controlled pair.** Extract the Q021 3-stop vs 4-stop delta and test it against the cross-document 630 kg family (5/7/9 stops); treat it as a hypothesis, not a formula.
6. **Structure analysis.** Correlate the 9 structure lines against stated height (~20–98 ft) and design load (450 kg residential … 2,000 kg industrial) to decide whether "structure" should be its own calculator toggle with its own band.
7. **Machine/door/finish deltas.** Formalise the Q045-vs-Q046 and Q028 pair deltas as bounded, labelled observations (with their confounds written down) to size machine-type, door-type, and cabin-source effects.
8. **Settle the currency/time question explicitly.** Decide whether the calculator will (a) quote 2026 PKR bands built up from normalised local evidence, or (b) state a survey-required disclaimer; never silently inflate 2023 figures.
9. **Decide the future of home/hospital/freight>9-stop ranges.** Either source external defensible baselines or remove them from the calculator until evidence exists.
10. **Rebuild payment/timeline/installation copy** from the observed terms (the 12% installation assumption and 30/40/30 claim should be replaced with the evidenced ranges before public use).

---

## 9. Final Decision Matrix

| Calculator Variable | Evidence Coverage | Pricing Evidence | Current Status | Notes |
|---|---|---|---|---|
| Elevator type — passenger | Strong (≈25 files) | Yes, across capacities | KEEP | Core of the evidence set |
| Elevator type — freight/cargo | Strong (9 complete + hoist) | Yes | KEEP | Rename/reconcile "cargo" terminology |
| Elevator type — panoramic/glass | Partial (7 files) | Yes, but bundled | REVIEW | Fits "passenger glass lift"; combined-scope totals only |
| Elevator type — home | No evidence | None | REMOVE | No quotation support; leave out or source externally |
| Elevator type — hospital | No evidence | None | REMOVE | No quotation support; leave out or source externally |
| Building type (6-factor table) | No evidence | None | REMOVE | Factor values appear invented; nothing in quotations supports them |
| Capacity | Strong (kg); Partial (persons) | Yes (paired: Q020, Q041; cargo family) | KEEP (review) | Switch to/allow kg; person labels inconsistent for same kg; cap range at evidenced values |
| Stops | Strong (1–9); none > 9 | Yes (Q021 pair; 630 kg family) | KEEP (cap) | Ceiling of the slider exceeds all evidence |
| Finish (standard/premium/luxury) | Partial | Yes for SS/LED/VVVF & local-import cabin; none for laminate/stone/destination dispatch/multipliers | REVIEW | Rebuild as evidenced options before tuning multipliers |
| Installation (12% of mid) | Partial | Yes as separate quotes (1.0–2.8m) | REVIEW | 12% share unsupported; quotes price it explicitly |
| Payment-terms copy (30/40/30) | Partial | Yes — but different schedules everywhere | REVIEW | Use evidenced tracks (50/35/15, 50/30/20, 40/20/25/12/3, 60/30/10, 100% advance, etc.) |
| Timeline (weeks) | Partial | Yes — 45–90 days | REVIEW | Reconcile weeks-copy with day-based evidence |
| Door type | Strong | Yes (Q046 vs Q045; unit prices Q031/Q033) | ADD | Automatic/swing/book-type/glass/none |
| Cabin material & build source | Strong | Yes (Q028 +1,050,000; Q045 vs Q046) | ADD | MS/SS-304 local/imported |
| Machine type (gearless/geared/hoist) | Strong | Yes (Q045 vs Q046; Q034) | ADD | Holds capacity-linked kW info |
| Structure (incl. vs separate) | Strong | Yes (9 lines, 400k–2.8m) | ADD | Height/load-driven; separate toggle |
| Glass (tempered) | Medium | Yes (bundled) | ADD | 6 mm/8 mm; door vs cabin |
| Supply type (local vs imported) | Strong | Yes (USD CIF + PKR install split) | ADD | Scope/currency boundary |
| Speed / travel height / shaft size | Strong as specs; Weak as drivers | None (speed constant at 1 m/s) | ADD as spec fields | Do not use as price inputs yet |

Legend — Current Status reflects the recommendation this document argues for; the human must approve before any calculator change. "Insufficient evidence" labels (home, hospital, >13 persons, >9 stops, stone/luxury finish, building-type factors, 12% installation, 30/40/30 payment, per-kg/per-floor unit prices) should be shown to users as such rather than hidden.

---

## Verification (this task)

- **All 61 quotations considered:** yes — the full Q001–Q061 dataset in `docs/quotation-extraction.md` (sections 3 and 4, 859 lines) was read and every quotation was classified by type, scope, currency, and usable-price status in the sections above.
- **Current calculator inspected:** yes — `src/lib/pricing.ts` (all constants and the model), `src/components/PricingCalculator.tsx` (all inputs/outputs), and `src/app/pricing/page.tsx` (sample table, included list, FAQ claims). Read-only.
- **No source files modified:** yes — git status before and after this task shows only the pre-existing `M skills-lock.json` and the untracked directories `docs/`, `business-evidence/`, `.agents/skills/hallmark/`. No `src/**` file changed.
- **No website code modified:** yes — calculator, pricing page, and all other website files untouched.
- **Only `docs/calculator-quotation-analysis.md` created/modified by this task:** yes — `docs/quotation-extraction.md` and all other existing documentation were read but not modified.