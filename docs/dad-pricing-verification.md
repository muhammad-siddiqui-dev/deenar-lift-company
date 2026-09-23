# Dad — Pricing Calculator Verification Sheet (Deenar Lift Company)

Purpose: a 1-hour practical interview/checklist to verify the pricing calculator with the business owner (Dad). This is a QUESTION SHEET, not an analysis.
Related docs (read-only, do not modify): `docs/calculator-pricing-model.md` (the model spec — §13 is the source of the MUST/NICE lists), `docs/quotation-pricing-analysis.md`, `docs/calculator-quotation-analysis.md`, `docs/business-truth.md`.
Prepared from: the 61-quotation evidence trail (Q001–Q061) and the current calculator code (`src/lib/pricing.ts`, `src/components/PricingCalculator.tsx`).

## ⚠️ CRITICAL RULE — READ FIRST

This interview is for **business verification**. Dad's answers should be recorded as **business knowledge/evidence**, not automatically treated as website claims. Any public claim or pricing rule still needs to be evaluated against the rest of the project's business truth and evidence.

Concretely, this means:
- An answer is a **data point from the business owner**, not an approved website statement.
- Historical quotation prices are **NOT** current prices — never ask Dad to "confirm" a 2023–2026 figure as if it were today's.
- Every answer worth using later should carry an **evidence source** (recent quotation, supplier price, completed project, business experience — §7).
- Nothing from this sheet becomes public copy or a calculator number on its own. Final numbers still pass through the project's business-truth gates before they are published.

## 📋 Sheet status
Interview **completed** — answers recorded below, verbatim where possible, from `Downloads/Lift Pricing Questions.txt` (business owner, 2026). Sources are **EXP — Dad's business experience (verbal)**, unless stated otherwise; no recent quotation, supplier sheet, or project document was supplied. Unanswered/skipped items are explicitly flagged; they are **not** filled with assumptions.

How to read each answer:
- **[VERIFIED]** = directly verified business fact from Dad (2026).
- **[HISTORICAL]** = quotation evidence Q001–Q061 only; NOT current.
- **[OUR DECISION]** = a decision the project team must make.
- **[NOT ANSWERED]** = Dad skipped it; reason noted (unresolved / calculator-design).

---

## 1. Priority Questions (MUST VERIFY — blockers)

The 9 MUST-VERIFY items from `docs/calculator-pricing-model.md` §13, in priority order. The calculator must not ship public numbers until these are answered.

### P1 — Current price bands (most important, ask first)
- **Question:** For each category — Passenger (Steel), Passenger (Glass), Cargo/Freight, Hoist — what is Deenar's realistic all-in local price range TODAY (2026, PKR)?
- **Why we need to know:** These bands are the foundation of every estimate; nothing can be published without them.
- **What evidence we already have:** [HISTORICAL] 630 kg passenger steel ≈ 2.2m–3.7m (non-discount ≈ 3.0m–3.7m); glass ≈ 3.45m–4.6m; cargo 1600–2000 kg ≈ 4.9m–5.5m; hoist 2000 kg ≈ 2.9m (Q034). These span 2023–2026 and are NOT current prices.
- **Answer (2026, PKR):**
  - Passenger (steel) 630 kg: **2,800,000 – 4,500,000** [VERIFIED]
  - Passenger (glass) 630 kg: **same** (as steel) [VERIFIED]
  - Cargo/freight: **4,000,000 – 15,000,000** [VERIFIED]
  - Hoist: **[NOT ANSWERED]** — no hoist-specific figure given
- **Source/evidence provided by Dad:** EXP — verbal (2026). No document.

### P2 — Payment schedule to publish
- **Question:** What payment schedules does Deenar actually use today? Does the current website claim "30% advance, 40% milestones, 30% before install"?
- **Why we need to know:** The 30/40/30 claim is contradicted by every quotation; paying/terms copy must be corrected.
- **What evidence we already have:** [HISTORICAL] Observed tracks: 50/35/15, 50/30/20, 40/20/25/12/3, 40/20/20/15/5, 60/30/10 (install), 70/30 (imported supply), 100% advance (structures/works), tranches (Q026, Q027). None matches 30/40/30.
- **Answer:** Normal schedule today: **40% / 20% / 20% / 20%** [VERIFIED]. (Dad did not comment on the website's 30/40/30 claim.)
- **Source/evidence provided by Dad:** EXP — verbal (2026).

### P3 — Discount policy
- **Question:** Is discounting normal? How much is typically negotiable, and on what basis?
- **Why we need to know:** Discounts (up to ~10% historical) were applied in several quotes; anchors must be set on undiscounted or typical-final values, not both.
- **What evidence we already have:** [HISTORICAL] Q027 (225k discount), Q029-family (up to ~10% ≈ 500k), Q032/Q033 (10% ≈ 210k/220k); quotations print pre-discount totals.
- **Answer:** Normally **up to 5%** discount. [VERIFIED]
- **Source/evidence provided by Dad:** EXP — verbal (2026).

### P4 — Structure pricing
- **Question:** How is structure priced today — by height? by kg? a table? What are current rates?
- **Why we need to know:** Structure is a separate component with a huge historical range (400k–2.8m); the calculator needs a defensible current band.
- **What evidence we already have:** [HISTORICAL] 9 structure figures ordered by height/duty: ~20 ft 400k (Q026), ~40 ft 450k (Q011), ~50 ft 600k–700k (Q009/Q047/Q023), ~80 ft 1,150k (Q024), 98 ft industrial 1,800k–2,800k (Q034 / Q029-fam, Q052).
- **Answer:** Structure is priced **"as per height and width and depth"** [VERIFIED]. Current range for **20–50 ft: 600,000 – 1,000,000** [VERIFIED]. Taller (~80 ft) and industrial (98 ft) bands: **[NOT ANSWERED]**.
- **Source/evidence provided by Dad:** EXP — verbal (2026).

### P5 — Imported cabin vs standard cabin (+ imported lift channel)
- **Question:** Is the imported-cabin option still offered? What is today's price difference vs a locally-built cabin? Is there a full imported-lift (USD) channel aimed at website customers?
- **Why we need to know:** Cabin source is a default-on calculator input (+~30% historically); the USD channel changes currency/scope entirely.
- **What evidence we already have:** [HISTORICAL] Q028 same lift: local cabin 3,550,000 vs imported 4,600,000 (+~1,050,000 ≈ +30%). Imported supply lines: USD 13.8k–19k per lift (Q020, Q041/Q054, Q055) with separate PKR installation; customs/duties buyer-paid.
- **Answer:** Imported cabin — **yes, available**, and priced **up to 50% above** local [VERIFIED]. Complete imported lift (USD) — **yes, offered**; price **"depends on lift requirements, sizes and weight"** [VERIFIED].
- **Source/evidence provided by Dad:** EXP — verbal (2026).

### P6 — Structure: who normally provides it?
- **Question:** In a normal Deenar job, is the lift structure included in Deenar's scope or handled by the customer's civil work?
- **Why we need to know:** Sets the calculator's default (owner-civil vs Deenar-supplied) and how the estimate's exclusions are worded.
- **What evidence we already have:** [HISTORICAL] Mixed — standalone structure docs (Q023, Q024, Q052), separate structure lines (Q009, Q011, Q026, Q029-fam, Q034, Q047), one combined total (Q002), and many lift-only quotes (owner covers).
- **Answer:** The **lift company** supplies the structure (normally Deenar's scope). [VERIFIED] "Structure includes complete material." [VERIFIED]
- **Source/evidence provided by Dad:** EXP — verbal (2026).

### P7 — Stops above 9
- **Question:** Do real projects exceed 9 stops? Any recent >9-stop references?
- **Why we need to know:** Caps the stops slider at 9; beyond that the calculator must hand off to a quotation.
- **What evidence we already have:** [HISTORICAL] Quotations only span 1–9 stops (9 stops: Q051); no evidence beyond 9.
- **Answer:** **[NOT ANSWERED]** — Dad did not address high-stop projects.
- **Source/evidence provided by Dad:** —

### P8 — Currency / imported channel policy
- **Question:** Should the website show PKR only, or also USD-import pricing? If USD, how is the exchange rate and duty handled?
- **Why we need to know:** No in-dataset FX basis exists; the model refuses USD↔PKR conversion.
- **What evidence we already have:** [HISTORICAL] USD CIF lines in Q020, Q041/Q054, Q055; no quotation records an exchange rate.
- **Answer:** **[NOT ANSWERED / OUR DECISION]** Dad confirmed imported lifts exist and are "priced per requirements" (see P5), but did **not** state how the website should display USD, exchange, or duty. Remains a project decision.
- **Source/evidence provided by Dad:** EXP — verbal (partial, 2026).

### P9 — Home/villa and hospital lifts
- **Question:** Are home/villa and hospital lifts real, current Deenar products? Any recent quotations or done projects?
- **Why we need to know:** Zero evidence exists for either; the calculator currently prices both. If real, we need data; if not, they become "request quotation" only.
- **What evidence we already have:** [HISTORICAL] No dedicated home or hospital quotation in Q001–Q061. Closest: Q026 (simple 450 kg residential-style lift). Hospital product page specs exist but are unverified claims.
- **Answer:** Home/villa lifts — **yes** [VERIFIED]. Hospital lifts — **yes** [VERIFIED]. No pricing figures or example projects given.
- **Source/evidence provided by Dad:** EXP — verbal (2026).

---

## 2. Pricing Questions (current, today's numbers)

All answers here are "what would you roughly quote TODAY". Where Dad gave one overall range, it is recorded once and the per-config cells are marked **[NOT ANSWERED]**, not filled by assumption.

### 2.1 Passenger (steel)
| Config | Current range (PKR) | Notes |
|---|---|---|
| Standard steel passenger — 630 kg / 3–4 stops | 2,800,000 – 4,500,000 | [VERIFIED] Dad gave ONE overall 630 kg range; no per-stop breakdown |
| Standard steel passenger — 630 kg / 5–6 stops | — (same overall range) | per-stop breakdown [NOT ANSWERED] |
| Standard steel passenger — 630 kg / 7–9 stops | — (same overall range) | per-stop breakdown [NOT ANSWERED] |
| Steel passenger — 800 kg | [NOT ANSWERED] | |
| Steel passenger — 1000 kg / 5–6 stops | [NOT ANSWERED] | |
| Steel passenger — other common capacity | [NOT ANSWERED] | |
- Typical door/cabin/features assumed in the above: **[NOT ANSWERED]**
- Anything in the above range Dad would never price (because it's misleading to estimate): **[NOT ANSWERED]**

### 2.2 Passenger (glass / panoramic)
| Config | Current range (PKR) | Notes |
|---|---|---|
| Glass passenger — 630 kg / 3–4 stops | **same** as steel → 2,800,000 – 4,500,000 | [VERIFIED] "same" |
| Glass passenger — 630 kg / 5–6 stops | — (same overall range) | |
| Glass passenger — 1000 kg / 3–5 stops | [NOT ANSWERED] | |
| Glass passenger — other common config | [NOT ANSWERED] | |
- Does "glass" ever carry its own separate charge, or is it part of the lift price? **[NOT ANSWERED]** — Dad's "same" suggests no separate glass figure, but this was not explicitly stated.

### 2.3 Cargo / Freight
| Config | Current range (PKR) | Notes |
|---|---|---|
| Overall cargo/freight (all capacities) | **4,000,000 – 15,000,000** | [VERIFIED] ONE overall range; no per-capacity breakdown |
| Cargo — 1000 kg / 3–4 stops | [NOT ANSWERED] | within overall range |
| Cargo — 1600 kg / 5–6 stops | [NOT ANSWERED] | within overall range |
| Cargo — 2000 kg / 5–6 stops | [NOT ANSWERED] | within overall range |
| Cargo — 3000 kg | [NOT ANSWERED] | |
| Hoist — 2000 kg | [NOT ANSWERED] | |
- What is the most common cargo capacity and stop count sold? **[NOT ANSWERED]**
- Are cargo quotes usually "lift only" with structure and doors excluded? **[NOT ANSWERED]**

### 2.4 Structure
- How is structure normally priced? **"As per height and width and depth"** [VERIFIED] (not per kg/table).
- Does height or design load materially change the price? **Yes — height, width and depth drive it** [VERIFIED]; by how much (per-ft/units) was **[NOT ANSWERED]**.
- Typical current range: residential (~20–50 ft): **600,000 – 1,000,000** [VERIFIED]; tall (~80 ft): **[NOT ANSWERED]**; industrial 98 ft: **[NOT ANSWERED]**.
- What is normally included in that price? **"Complete material"** [VERIFIED].

### 2.5 Major options (do NOT assume every option has a separate charge)
| Option | Separate charge? | Current amount (if any) | Notes |
|---|---|---|---|
| Imported vs standard/local cabin | Yes [VERIFIED] | **up to 50% above** local | [VERIFIED] |
| Glass doors / glass cabin | [NOT ANSWERED] | — | |
| Door type (automatic SS vs swing/MS vs book-type) | [NOT ANSWERED] | — | |
| Machine type (gearless vs geared vs hoist) | [NOT ANSWERED] | — | |
| ARD (automatic rescue device) | [NOT ANSWERED] | — | |
| Generator / fuel / branch (working power) | [NOT ANSWERED] | — | |
| VVVF door drive | [NOT ANSWERED] | — | |
| TFT/LCD display, LED lighting, false ceiling, mirror edging | [NOT ANSWERED] | — | |
| Other common options | [NOT ANSWERED] | — | |

---

## 3. Scope / Inclusion Questions

For each item below mark: **Included by Deenar** / **Customer responsibility** / **Depends on project**. This drives the estimate's "included vs excluded" wording.

| Item | Included by Deenar | Customer responsibility | Depends on project | Notes |
|---|---|---|---|---:|---:|---:|---|
| Lift equipment (machine, controls, rails, ropes) | ☑ | ☐ | ☐ | [VERIFIED] part of "complete lift" |
| Cabin (walls, floor, ceiling, doors) | ☑ | ☐ | ☐ | [VERIFIED] part of "complete lift" |
| Lift doors + entrances | ☑ | ☐ | ☐ | [VERIFIED] part of "complete lift" |
| Structure / shaft steel work | ☑ | ☐ | ☐ | [VERIFIED] "lift company" supplies; complete material |
| Installation + commissioning | ☑ | ☐ | ☐ | [VERIFIED] quoted explicitly |
| Transportation / delivery of equipment | [NOT ANSWERED] | ☐ | ☐ | |
| Civil works (pit, housekeeping, shaft walls) | [NOT ANSWERED] | ☐ | ☐ | |
| Electrical works (power supply, wiring to machine) | [NOT ANSWERED] | ☐ | ☐ | |
| Taxes (GST etc.) | [NOT ANSWERED] | ☐ | ☐ | |
| Testing / load testing / certification | ☑ | ☐ | ☐ | [VERIFIED] "testing" included |
| Maintenance / warranty (free period months) | ☑ | ☐ | ☐ | [VERIFIED] 1-year warranty; 1-year free maintenance |
| Other: __________________ | ☐ | ☐ | ☐ | |

Source (Q5): Dad — prices include **"complete lift including installation, commissioning, testing and one year warranty"** [VERIFIED].

Follow-ups:
- What does a standard quotation document list as included vs excluded? **[NOT ANSWERED]**
- Which of these are usually priced as a separate line inside a quotation? **[NOT ANSWERED]** (historical: structure and installation were separate lines in several quotes)
- Typical free maintenance period today: **1 year** [VERIFIED]. Post-warranty AMC: **10,000 per month** [VERIFIED].

---

## 4. Calculator Category Verification

Which categories should Deenar actually let customers **estimate online**? Mark each.

> **Note:** Dad did **not** allocate categories to "calculator" vs "Request a Quote" (that question was left blank). Product existence is recorded where Dad answered it; the calculator/quote split is **[OUR DECISION]**.

| Category | Use calculator? | Quote request only? | Why / product status |
|---|---|---|---:|---:|---|
| Passenger steel | ☐ | ☐ | Product evidenced (Q001–Q061) [HISTORICAL]; price range given [VERIFIED §2.1] |
| Passenger glass / panoramic | ☐ | ☐ | Product evidenced (Group C) [HISTORICAL]; "same" as steel [VERIFIED §2.2] |
| Cargo / freight | ☐ | ☐ | Product evidenced (Group D) [HISTORICAL]; overall range given [VERIFIED §2.3] |
| Hoist | ☐ | ☐ | One quotation (Q034) [HISTORICAL]; current price [NOT ANSWERED] |
| Home / villa | ☐ | ☐ | **Current product — yes** [VERIFIED]; no pricing data |
| Hospital | ☐ | ☐ | **Current product — yes** [VERIFIED]; no pricing data |
| Escalator / walkway | ☐ | ☐ | [NOT ANSWERED] |
| Imported (USD supply) | ☐ | ☐ | Offered — "depends on requirements/sizes/weight" [VERIFIED]; display policy [OUR DECISION] |
| Dumbwaiter | ☐ | ☐ | [NOT ANSWERED] |
| Other: __________________ | ☐ | ☐ | |

---

## 5. Range / Estimate Philosophy

> All items below were left **blank by Dad** in the answer sheet → **[OUR DECISION / calculator-design]**.

- Should the website show an approximate PKR range at all? (☐ Yes — range ☐ Yes — single figure ☐ No estimator) — **[NOT ANSWERED — calculator/design decision]**
- How wide should a "reasonable estimate" range be? (e.g., low–high within ±10% / ±15% / ±20%) — **[NOT ANSWERED — calculator/design decision]**
- What configuration detail is necessary before estimating? (capacity? stops? structure? cabin?) — **[NOT ANSWERED — calculator/design decision]**
- When should the calculator STOP estimating and require a quotation? (e.g., >9 stops, imported, hospital, unusual shaft) — **[NOT ANSWERED — calculator/design decision]**
- Are there projects where a calculator estimate would be misleading or embarrassing? — **[NOT ANSWERED — calculator/design decision]**
- Does Deenar lose or win deals when a range is shown instead of a price? — **[NOT ANSWERED — calculator/design decision]**

---

## 6. Current vs Historical Prices

Explicitly separated — Dad gave TODAY's prices; they do **not** confirm historical figures.

| Category | From old quotations (2023–2026) | Typical price today (Dad, 2026) | Varies by supplier / import FX? | Varies by site conditions? |
|---|---|---|:---:|:---:|
| Passenger steel 630 kg | ≈ 2.2m–3.7m [HISTORICAL] | **2,800,000 – 4,500,000** [VERIFIED] | ☐ not stated | ☐ "per height/width/depth" for structure |
| Passenger glass | ≈ 3.45m–4.6m [HISTORICAL] | **same** (2,800,000 – 4,500,000) [VERIFIED] | ☐ not stated | ☐ not stated |
| Cargo 1600–2000 kg | ≈ 4.9m–5.5m [HISTORICAL] | **4,000,000 – 15,000,000** (overall) [VERIFIED] | ☐ not stated | ☐ not stated |
| Hoist 2000 kg | ≈ 2.9m [HISTORICAL] | [NOT ANSWERED] | ☐ | ☐ |
| Structure | 400k → 2.8m by height/duty [HISTORICAL] | **600,000 – 1,000,000** (20–50 ft); taller [NOT ANSWERED] [VERIFIED] | ☐ | ☑ per height/width/depth [VERIFIED] |
| Door units | 85k–120k + 200k drive [HISTORICAL] | [NOT ANSWERED] | ☐ | ☐ |

Also ask (record as notes):
- How much have prices moved since 2023–2024? **[NOT ANSWERED]**
- How much does the import exchange rate swing component pricing month to month? **[NOT ANSWERED]**
- What site conditions change a price most (shaft size, pit, roof access, building height)? **[NOT ANSWERED]** (structure: dimensions — [VERIFIED §2.4])
- Has Deenar changed supplier/brand strategy since the old quotations (e.g., moved away from FUJI/Sigma imports)? **[NOT ANSWERED]**

---

## 7. Evidence Collection

For every important answer, record the source type.

> **This whole interview:** all answers are **EXP — Dad's business experience (verbal, 2026)**. No recent quotation, supplier price sheet, or completed-project document was provided during this session. Section 8 N5/N6 (documents) remain **[NOT ANSWERED]**.

| Source type | Description | Recorded for this session |
|---|---|---|
| Recent quotation | A current quotation document (2026) | none provided |
| Supplier price | Current supplier price list / quote | none provided |
| Actual completed project | A project actually installed and billed | none provided |
| Dad's business experience | Owner expertise, no document | **ALL price answers** |
| Other | Contract, P.O, brochure | none provided |

Rule: prefer evidence types in this order — recent quotation > completed project > supplier price > experience. If Dad supplies a recent quotation later, note its Q-ID or filename so we can add it to the evidence set.

---

## 8. Nice-to-Verify (non-blocking — do NOT let these crowd out §1–§6)

From `docs/calculator-pricing-model.md` §13 (NICE list). Status shown per item.

| # | Question | Status / Answer |
|---|---|---|
| N1 | Typical free-maintenance period and post-warranty AMC? | ✅ **ANSWERED** — 1 year free maintenance; 10,000/month AMC [VERIFIED] |
| N2 | Current delivery times (45/60/70/90 days observed)? | ✅ **ANSWERED** — approximately **2–3 months** [VERIFIED] |
| N3 | Any per-floor adder rate from recent practice? (historical: +300k/floor on glass, Q021) | ✅ **ANSWERED** — **up to 300,000** per extra floor/stop [VERIFIED] |
| N4 | Current ARD / generator / door-drive accessory prices? (~150k / ~150k / ~200k historical) | ❌ **[NOT ANSWERED]** — unresolved |
| N5 | Can you provide current quotations on near-identical configs (±1 stop, ±1 capacity)? | ❌ **[NOT ANSWERED]** — unresolved |
| N6 | Settled/final billed amounts vs quoted amounts (discount reality)? | ❌ **[NOT ANSWERED]** — unresolved |

---

## 9. One-Hour Interview Order

Recommended sequence. Timing is approximate; the load-bearing items are 2→5. §1's priority questions are woven into the matching windows.

| Time | Focus | What to complete (link) |
|---|---|---|
| 0–5 min | Business scope & categories | §1 P9 (home/hospital/escalator), §4 entire table |
| 5–20 min | **Current passenger pricing** (the big block) | §1 P1 (passenger part), §2.1, §2.2, §6 row 1–2 |
| 20–30 min | Cargo/hoist pricing | §1 P1 (cargo/hoist part), §2.3 |
| 30–40 min | Structure + major options | §1 P4, P5, P6, §2.4, §2.5 |
| 40–50 min | Included/excluded scope | §1 P2, P3, P8, §3, §6 |
| 50–60 min | Calculator boundaries + unresolved | §1 P7, §5, §7 evidence sweep, §8 (if time) |

Adjustment note: the actual session covered passenger/cargo/options/scope/structure and the NICE items that map to §8 N1–N3. It left **[NOT ANSWERED]** (per above): hoist, >9 stops, per-capacity/per-stop breakdowns, glass separate charge, ~80 ft & industrial structure, all option deltas, website display/FX policy, all §5 range-philosophy items.

### Checklist for the hour
- [x] Priorities P1–P9 attempted — **P1(partial), P2, P3, P4(partial), P5, P6, P9 answered; P7 & P8-partial NOT answered**
- [x] §2 pricing tables filled (passenger at minimum) — filled for 630 kg / glass / cargo overall; per-config cells NOT answered
- [x] §3 scope table marked — equipment, cabin, doors, structure, install, testing, warranty confirmed included
- [ ] §4 category table marked — product existence confirmed for home/hospital; calculator-vs-quote split NOT answered
- [ ] §5 range philosophy answered — NOT answered (design decisions)
- [x] §7 evidence source recorded — all EXP (verbal)
- [x] §10 final table started — see §10

---

## 10. Final Recording Template

Compact master table — the most important answers as recorded. Confidence and Follow-up are deliberately left blank for the project team to assess during the model-review task.

| Question | Dad's Answer | Evidence/Source | Confidence (High/Med/Low) | Follow-up |
| -------- | ------------ | --------------- | ------------------------ | --------- |
| P1 — Passenger steel band (630 kg) | 2,800,000 – 4,500,000 | EXP verbal 2026 | | |
| P1 — Passenger glass band (630 kg) | same (as steel) | EXP verbal 2026 | | |
| P1 — Cargo/freight band | 4,000,000 – 15,000,000 (overall) | EXP verbal 2026 | | |
| P1 — Hoist band | [NOT ANSWERED] | — | | |
| P2 — Payment schedule | 40% / 20% / 20% / 20% | EXP verbal 2026 | | |
| P3 — Discount policy | up to 5% | EXP verbal 2026 | | |
| P4 — Structure pricing | as per height, width, depth; 20–50 ft: 600,000–1,000,000 | EXP verbal 2026 | | |
| P5 — Imported cabin | yes; up to 50% above local | EXP verbal 2026 | | |
| P5 — Complete imported lift (USD) | depends on requirements, sizes, weight | EXP verbal 2026 | | |
| P6 — Structure ownership | lift company supplies; complete material | EXP verbal 2026 | | |
| P7 — Stops > 9 | [NOT ANSWERED] | — | | |
| P8 — Currency/policy | [NOT ANSWERED / OUR DECISION] | — | | |
| P9 — Home/hospital products | yes / yes | EXP verbal 2026 | | |
| Included scope | complete lift incl. installation, commissioning, testing, 1-yr warranty | EXP verbal 2026 | | |
| Free maintenance | 1 year | EXP verbal 2026 | | |
| Post-warranty AMC | 10,000 per month | EXP verbal 2026 | | |
| Delivery time | approx 2–3 months | EXP verbal 2026 | | |
| Per-floor/stop adder | up to 300,000 | EXP verbal 2026 | | |
| Range width philosophy | [NOT ANSWERED] | — | | |
| When to stop estimating | [NOT ANSWERED] | — | | |
| Categories on calculator (§4) | [NOT ANSWERED] | — | | |
| Any recent quotation given | none | — | | |
| Anything else Dad volunteered | — | — | | |

---

## Verified Business Pricing Facts — 2026

Only facts directly provided by Dad (no interpretations):

1. 630 kg passenger steel lift price range: **PKR 2,800,000 – 4,500,000**.
2. 630 kg passenger glass lift price range: **same** as steel (PKR 2,800,000 – 4,500,000).
3. Cargo/freight lift price range: **PKR 4,000,000 – 15,000,000** (single overall range).
4. The above prices include **complete lift including installation, commissioning, testing and one year warranty**.
5. Payment schedule: **40% / 20% / 20% / 20%**.
6. Discount: **up to 5%**.
7. Structure is priced **as per height and width and depth**.
8. Structure range **20–50 ft: PKR 600,000 – 1,000,000**.
9. Structure includes **complete material**.
10. Structure is supplied by the **lift company**.
11. Imported cabin is **available** and priced **up to 50% above** a local cabin.
12. Complete imported lift (USD) is **offered**; price **depends on lift requirements, sizes and weight**.
13. Home/villa lifts: **yes**, provided.
14. Hospital lifts: **yes**, provided.
15. Delivery/installation time: **approximately 2–3 months**.
16. Free maintenance: **1 year**.
17. AMC after warranty: **PKR 10,000 per month**.
18. Extra floor/stop: **up to PKR 300,000**.

---

## Still Our Decisions

Questions Dad left for the project team (per §1 P8, §4, §5, and the unanswered section 8 items):

1. **Which products use the calculator vs Request a Quote** — Dad did not allocate categories (home/hospital/escalator/hoist/dumbwaiter/imported were not assigned).
2. **Whether/how to display estimated ranges publicly** — Dad did not say whether the website should show PKR ranges at all.
3. **How wide calculator ranges should be** — low–high spread (e.g., ±10% / ±15% / ±20%) is undecided.
4. **When the calculator should stop estimating and request a formal quotation** — no threshold decided (e.g., >9 stops, imported, hospital, unusual shaft).
5. **Website currency policy** — PKR-only vs USD-import pricing on the site; FX and duty handling (Dad confirmed imported lifts exist but not how to display them).
6. **Per-configuration granularity** — whether 630 kg passenger and overall cargo ranges are enough, or per-capacity/per-stop figures are needed.
7. **Hoist pricing** — whether hoist appears in the calculator (no current figure given).
8. **Glass as a separate price input** — Dad said "same" range, not whether glass has its own charge.
9. **Structure sub-bands** — ~80 ft and industrial 98 ft bands were not given; only 20–50 ft.
10. **Option deltas** — door type, machine type, ARD, generator, VVVF drive, TFT/LED: no current pricing (historical figures only).
11. **Discount policy use** — how "up to 5%" should be represented (listing vs estimate).
12. **Stops > 9** — whether to support beyond 9 stops (no answer).

---

## End of sheet

This sheet's answers are recorded as **business knowledge/evidence (EXP, verbal 2026)**, not as approved website claims. The next step is the deliberate model-review task: decide calculator structure using these verified facts plus the historical evidence, and reconcile §Still Our Decisions. Nothing here is a website claim.