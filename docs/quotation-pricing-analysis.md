# Quotation Pricing Analysis — Which Prices Are Actually Comparable (Deenar Lift Company)

Phase: M2.5 — Business Verification (deep comparability & pricing-pattern analysis of the 61-quotation dataset).
Status: ANALYSIS ONLY. **This document is not a pricing formula and does not claim these are current public prices.** It identifies which quotations can be meaningfully compared and which pricing patterns the raw evidence plausibly supports, so that a later design task can decide calculator logic. No averages, regressions, or "correct price" are computed.
Primary source: `docs/quotation-extraction.md` (raw evidence, Q001–Q061).
Secondary source: `docs/calculator-quotation-analysis.md` (calculator ↔ evidence gap analysis; conclusions referenced but not repeated at length here).
Scope rule: this task created/modified ONLY `docs/quotation-pricing-analysis.md`. No source files, no website code, no calculator code, and no other project documentation was touched.

Rules applied throughout:
- Every statement is traceable to specific Q-IDs.
- Quotations are not treated as independent comparables just because a file exists — duplicate families are merged before counting (see §1, §4).
- "Pattern" means "an observed, repeated relationship in the printed figures" — not proof of causation.
- No figure is created, implied, or converted that was not printed in a source quotation (including USD↔PKR).

---

## 1. Dataset Overview

| Metric | Count | Notes |
|---|---|---|
| Total quotation files | 61 (Q001–Q061) | 49 DOCX + 12 PDF; 4 PDFs partially garbled |
| Files printing a usable amount | 59 | All except Q043 and Q050 (marked Unclear — see below) |
| **Complete-lift files** (a single complete new lift, a pair, or a multi-unit set) | **48 files** | 46 with readable amounts + Q043/Q050 with unclear amounts. See §3/§4 |
| **Distinct complete-lift quotations** (after merging legitimate duplicates/revisions) | **≈32** | ~28 local PKR lifts + ~3 imported USD-supply tracks + 1 dumbwaiter (see §4 counting method) |
| Structure-only quotations | 3 files | Q023, Q024, Q052 |
| Component / works-only quotations | 5 files | Q008, Q031, Q032, Q033, Q044 |
| Modification / modernization / upgrade | 4 files | Q015, Q035/Q040 (same), Q058 — 3 distinct projects |
| Other scope (not a lift) | 1 file | Q061 (winch/girder arrangement) |
| Unclear amounts / partially extracted | 2 files | Q043 (imported supply; pricing section garbled), Q050 (repeat of Q017; words-vs-digits conflict) |
| Currency | 100% PKR/Rs in **57 files**; USD component present in **4 files** (Q020, Q041, Q054, Q055, all "CIF Karachi" supply with separate PKR installation) | Q043 unclear (same scope as Q020 per letterhead) |
| Date range | **2023-02-13 → 2026-07-01** | Earliest Q001; latest Q045/Q046. PKR conditions changed materially across this window (no adjustment made — see §9) |
| Suppliers represented | Excellent Elevator Engineering (dominant), Aayan Elevator (Q020 vs Q043 letterheads), FUJI/Sigma import lines | Effectively one company's quotation history, not a market sample |

**Counting method for "distinct complete-lift quotations" (§4 families):** start from the 48 complete-lift files, drop the 2 unclear-amount files (Q043, Q050), and collapse each duplicate/revision family to one quotation: passenger-steel 16 (Q001, Q006-fam, Q010-fishri-fam, Q014, Q017, Q018, Q025, Q027, Q036-fam, Q037-fam, Q039, Q045, Q046, Q049, Q051, Q059-fam) + passenger-glass 6 (Q002, Q019, Q021-fam, Q028, Q047, Q048) + cargo 5 (Q003-fam, Q004-fam, Q013, Q016, Q029-fam) + hoist 1 (Q034) + imported supply 3 (Q020, Q041-fam, Q055) + dumbwaiter 1 (Q042) = **32**.

---

## 2. Scope Classification (all 61 quotations)

Scope categories are drawn from the quotation wording itself. "Complete lift" = the document prices a full new lift (optionally with glass and/or structure). Where a document prints more than one amount for different scopes, each is listed.

| Q-ID | Scope Category | Total Amount | Currency | Key Reason |
|---|---|---|---|---|
| Q001 | Complete lift (passenger, steel) | Rs 3,700,000 | PKR | Lift only; structure "Not specified" |
| Q002 | Lift + structure + glass (passenger glass) | PKR 4,100,000 | PKR | Printed as one combined "structure + lift + glass" amount |
| Q003 | Complete lift (cargo) | PKR 5,500,000 | PKR | Lift only; structure not included |
| Q004 | Complete lift (cargo) | PKR 4,900,000 | PKR | Lift only; structure not included |
| Q005 | Complete lift (cargo) | PKR 4,900,000 | PKR | Identical to Q004 |
| Q006 | Complete lift (passenger, usage field "CARGO") | PKR 4,500,000 | PKR | Lift only; printed usage internally inconsistent |
| Q007 | Complete lift (as Q006) | PKR 4,500,000 | PKR | Identical to Q006 |
| Q008 | Component/works only (electrical) | Rs 1,150,000 | PKR | Electrical-works scope; no lift/machine/cabin |
| Q009 | Lift + structure (passenger) | PKR 3,800,000 | PKR | Lift 3,200,000 + structure 600,000 (printed) |
| Q010 | Complete lift (passenger) | PKR 3,200,000 | PKR | Lift only; structure covering by owner (Fishri family) |
| Q011 | Lift + structure (passenger) | Rs 2,900,000 + 450,000 | PKR | Old-version structure line (~40 ft) |
| Q012 | Complete lift (passenger) | PKR 3,200,000 | PKR | Revised lift-only (Fishri family) |
| Q013 | Complete lift (cargo; capacity 1000 kg heading vs "100 kg" body = Unclear) | Rs 4,000,000 | PKR | Lift only; structure/channels by client |
| Q014 | Complete lift (passenger) | Rs 2,100,000 | PKR | Lift only |
| Q015 | Modification/upgrade (2 passenger lifts) | PKR 4,400,000 (2,200,000 × 2) | PKR | M&E upgrade works for EFS; not new lifts |
| Q016 | Complete lift (cargo; 3000/2000 kg = Unclear) | Rs 4,500,000 | PKR | Lift only |
| Q017 | Complete lift (passenger; capacity Not specified) | PKR 1,950,000 | PKR | Lift only |
| Q018 | Complete lift (passenger) | PKR 3,150,000 | PKR | Lift only |
| Q019 | Complete lift (passenger glass) | PKR 4,300,000 | PKR | Lift with glass doors; structure Not specified |
| Q020 | Imported supply + installation (Sigma) | USD 35,000 + PKR 3,800,000 | USD+PKR | Supply USD CIF Karachi; installation PKR; structure/glass not included |
| Q021 | Complete lift ×2 (passenger glass, G+3 & G+2) | PKR 4,300,000 + 4,000,000 | PKR | Two lifts, identical template, priced separately |
| Q022 | As Q021 | As Q021 | PKR | Identical to Q021 |
| Q023 | Structure only | PKR 700,000 | PKR | Structure quotation (~50 ft); no lift scope |
| Q024 | Structure only | PKR 1,150,000 | PKR | Structure quotation (~80 ft); no lift scope |
| Q025 | Complete lift (passenger; capacity Not specified) | PKR 3,550,000 | PKR | Lift only |
| Q026 | Lift + structure (passenger 450 kg, 1 stop) | Rs 2,250,000 + 400,000 | PKR | Small lift + structure line |
| Q027 | Complete lift (passenger, discounted) | PKR 2,205,000 | PKR | 2,400,000 − 225,000 discount + 30,000 branch (printed) |
| Q028 | Complete lift (passenger glass), two cabin options | Rs 3,550,000 (local) / 4,600,000 (imported) | PKR | Same lift quoted at two finish prices |
| Q029 | Lift + structure (cargo) | PKR 7,800,000 | PKR | Lift 5,500,000 − 500,000 + structure 2,800,000 (printed) |
| Q030 | As Q029 | As Q029 | PKR | Identical to Q029 |
| Q031 | Component + installation | PKR 2,010,000 + 2,200,000 | PKR | MS doors + cabin component; separate install of 2 lifts |
| Q032 | Component + installation | PKR 1,800,000 + 1,200,000 | PKR | Doors+cabin (after discount); separate cargo install |
| Q033 | Component + installation | PKR 2,000,000 + 1,000,000 | PKR | Doors+drive+cabin (after discount); separate install |
| Q034 | Lift + structure (hoist) | PKR 4,700,000 | PKR | Hoist 2,900,000 + structure 1,800,000 |
| Q035 | Modification/repair (existing lift) | PKR 4,000,000 | PKR | Replace machine/roping/controls/doors/buttons/cabin |
| Q036 | Complete lift (passenger) | Rs 3,400,000 | PKR | Lift only; "without any kind of tax" |
| Q037 | Complete lift (passenger) + extra | PKR 3,100,000 + 150,000 | PKR | Lift + generator/fuel/branch line |
| Q038 | As Q037 | As Q037 | PKR | Identical to Q037 |
| Q039 | Complete lift (passenger) | PKR 3,500,000 | PKR | Lift only |
| Q040 | Modification/repair (existing lift) | PKR 4,000,000 | PKR | Identical scope to Q035 |
| Q041 | Imported supply + install + component (FUJI) | USD 29,200 + PKR 2,200,000 + PKR 510,000 | USD+PKR | Supply USD CIF; install PKR; local cargo doors PKR |
| Q042 | Complete lift (dumbwaiter) | PKR 800,000 | PKR | 150 kg, 2 stops; unique category |
| Q043 | Imported supply (as Q020 scope) | Unclear | Unclear | PDF pricing/garbled → not usable |
| Q044 | Component/works only (itemized) | Rs 1,068,000 | PKR | Itemized electrical + misc works |
| Q045 | Complete lift (passenger, automatic SS) | PKR 3,200,000 | PKR | Lift only |
| Q046 | Complete lift (passenger, swing door, MS) | PKR 2,500,000 | PKR | Lift only |
| Q047 | Lift + structure (passenger glass) | PKR 2,900,000 + 600,000 | PKR | Lift + separate structure line |
| Q048 | Complete lift (passenger glass) | PKR 3,450,000 | PKR | Lift only (companion structure doc = Q024) |
| Q049 | Complete lift (passenger) + optional ARD | Rs 3,025,000 + 150,000 | PKR | Lift only; ARD charged separately |
| Q050 | Complete lift (passenger; amount Unclear) | PKR 1,950,000 (words inconsistent) | PKR | Same quote as Q017; words = 4.3m vs digits 1.95m |
| Q051 | Complete lift ×4 (passenger) | Rs 3,375,000 × 4 = 13,500,000 | PKR | Per-unit × quantity deal |
| Q052 | Structure only | PKR 2,800,000 | PKR | Industrial structure for 2000 kg cargo, 98 ft |
| Q053 | Complete lift (cargo) | PKR 5,500,000 | PKR | Same scope/price as Q003 (same client, date, capacity) |
| Q054 | Imported supply (FUJI passenger variant) | USD 29,200 (in words) | USD+PKR | Variant of Q041; install payment 60/30/10 |
| Q055 | Imported supply + installation (FUJI revised) | USD 29,800 + PKR 2,800,000 | USD+PKR | Revised 7/7/7 pricing; partial PDF extraction |
| Q056 | As Q029 | As Q029 | PKR | Identical to Q029/Q030 |
| Q057 | Complete lift (passenger) | Rs 3,400,000 | PKR | Identical to Q036 + warranty/parts terms |
| Q058 | Modification/repair (duplex conversion) | PKR 650,000 (+ 200,000 ARD) | PKR | Modernization works scope; no new lift |
| Q059 | Complete lift (passenger, contract) | Rs 3,500,000 | PKR | Contract rendering of 630 kg lift |
| Q060 | Complete lift (passenger, quotation) | Rs 3,500,000 | PKR | Same quote as Q059 (quotation rendering) |
| Q061 | Other (winch/girder arrangement) | Rs 2,150,000 | PKR | Not a lift; excluded from lift comparisons |

---

## 3. Comparable Groups

Members are listed with their most important differences called out. **Sharing one variable does not make two quotes comparable**; these groups were chosen because type + scope + supply basis are aligned, so that the remaining differences (stops, date, finish, discount) become the things an analysis like §6 can examine.

### Group A — Local 630 kg passenger, steel cabin, lift-only, all-in PKR (structure excluded)
Members: **Q001, Q018, Q027, Q039, Q045, Q049, Q051, Q059/Q060** (8 distinct quotes; 7 distinct projects).
Why comparable: same lift type, same capacity (630 kg), same scope (structure never included; all pricing is supply + installation in PKR), same speed (1 m/s), comparable automatic doors.
Important differences within group:
- Stops: 5 (Q027, Q045) → 6 (Q001, Q039) → 7 (Q018, Q049, Q059/Q060) → 9 (Q051).
- Dates: 2023 (Q001, Q049, Q051) → 2024 (Q027, Q059/Q060) → 2025/26 (Q018, Q039, Q045).
- Discount/extra accounting: Q027 (225k discount + 30k branch), Q049 (+150k optional ARD).
- Door finish: SS + glass panel (Q001), hairline SS 800 mm NBOL (Q027, Q059/Q060), 700 mm NBOL (Q018), 600–800 mm (Q045).
- Document type: contract/agreement (Q001, Q049, Q059) vs quotation (Q018, Q027, Q039, Q045, Q051, Q060).
Companion members (capacity Not specified, otherwise same template), usable as context but NOT core members: **Q017, Q025**.

### Group B — Local 1000 kg passenger, steel-ish, lift-only, all-in PKR
Members: **Q006/Q007, Q036/Q057, Q037/Q038** (3 distinct projects).
Why comparable: same capacity and (mostly) passenger type.
Important differences: Q006/Q007 prints usage "CARGO" (may be cargo-built → different product); Q036/Q057 states "without any kind of tax"; Q037/Q038 add a 150k generator/branch extra; dates 2024–2026; **this is a small and internally inconsistent group** — see §8.

### Group C — Local passenger glass lifts (all capacities)
Members: **Q002, Q019, Q021/Q022, Q028, Q047, Q048** (6 distinct quotes).
Why comparable: all titled "Passenger Glass Lift"; all local PKR supply incl. installation; speeds 1 m/s.
Important differences:
- **Scope mismatch inside the group:** Q002 is a single combined structure+lift+glass total; Q047 has a separate structure line; the other four are lift-only (glass doors).
- Capacity: 630 kg (Q002, Q021/Q022, Q047) vs 1000 kg (Q019, Q028, Q048).
- Stops: 3 (Q019) → 4 (Q002, Q021, Q047) → 6 (Q028) → 7 (Q048).
- Q028 prints two prices (local vs imported cabin); it must be read as two options of one lift.
Comparable core (when structure is excluded): **Q019, Q021/Q022, Q028, Q048**.

### Group D — Local cargo lifts (various capacities), lift-only, all-in PKR
Members: **Q003/Q053, Q004/Q005, Q013, Q016, Q029/Q030/Q056** (cargo), plus **Q034** (hoist).
Why comparable: same company template, all local PKR, MS/SS heavy cabins, mostly book-type doors.
Important differences:
- Capacity: 1000 kg ambiguous (Q013: heading 1000 vs body "100 kg"), 1600 kg (Q004/Q005), 2000 kg (Q003/Q053, Q029/Q030/Q056), 2000/3000 ambiguous (Q016) — Q016 must be handled with care.
- Stops: 3 (Q016) → 4 (Q013) → 6 (Q003/Q053, Q004/Q005, Q029-fam).
- Structure: excluded from lift-only quotes (Q003, Q004, Q013, Q016, Q053) but Q029-fam adds structure 2,800,000 on a separate line.
- **Q034 is a hoist** (drum machine, no doors, relay control) — comparable to cargo only as "same client, same 2000 kg, same 6 stops"; its machine type is fundamentally cheaper.
Best comparable cargo core (2000 kg, 6 stops, lift-only, structure excluded): **Q003 = Q053 (identical price)**; expanded cautiously to Q004/Q005 (1600 kg) and Q016/Q013 (ambiguous-capacity documents, flagged).

### Group E — Imported supply, USD CIF Karachi + separate PKR installation
Members: **Q020** (Sigma), **Q041/Q054** (FUJI), **Q055** (FUJI revised). **Q043** is same scope but unusable (garbled).
Why comparable: same supplier-for-supplier basis (USD CIF, buyer pays customs/duties), same currency leg, similar type (1000 kg passenger + 1600 kg cargo), same dates (Aug 2025), installation quoted separately in PKR.
Important differences: brand (Sigma vs FUJI), per-lift unit prices differ between brands and between FUJI revisions (Q041/Q054 14,150+15,050 vs Q055 13,800+14,500), door scope (passenger only vs cargo "no doors"), validity (Q041: 30 days), and Q054 is a passenger-only-column variant of Q041.
**Comparable only on the USD supply lines; never on a PKR total**, because the PKR totals in this group are installation-only, not full-lift.

### Group F — Structure pricing (standalone documents + structure lines inside lift quotes)
Members: **Q023, Q024, Q052** (standalone) and structure lines in **Q009, Q011, Q026, Q029/Q030/Q056, Q034, Q047**.
Why comparable: same structure product (MS framework, channel/pipe spec, anti-rust primer where printed), mostly same company, PKR.
Key ordering variable: **stated height and design load** — ~20 ft light (Q026 400k) → ~40 ft (Q011 450k) → ~50 ft (Q009 600k, Q047 600k, Q023 700k) → ~80 ft (Q024 1,150k) → 98 ft industrial 2000 kg (Q034 1,800k hoist duty, Q029-fam/Q052 2,800k cargo duty).

### Group G — Non-lift / not-comparable scopes (context only)
Q008, Q015, Q031/Q032/Q033, Q035/Q040, Q044, Q058, Q061, and Q042 (dumbwaiter — complete lift but its own category). These are compared to nothing; their amounts belong to their own scope (§2).

---

## 4. Duplicate / Revision Handling

None of these files are deleted. For each family below, the recommended treatment for analysis is given.

| Group | Members | Nature | Treatment for analysis |
|---|---|---|---|
| Complete Cargo | Q004 / Q005 | Exact duplicate (PDF + DOCX) | One evidence point |
| Complete Passenger | Q006 / Q007 | Exact duplicate | One evidence point |
| P.O #01 cargo | Q029 / Q030 / Q056 | Exact triple (PDF + DOCX + DOCX) | One evidence point |
| AGP Pharma modification | Q035 / Q040 | Exact duplicate | One evidence point |
| Tabish 1000 kg | Q036 / Q057 | Near-exact (Q057 adds warranty/parts terms) | One evidence point (read Q057 for after-sales) |
| Qamar Mansha | Q037 / Q038 | Exact duplicate | One evidence point |
| Vijay Sukkur | Q059 / Q060 | Same quote, contract vs quotation rendering | One evidence point |
| Lahore glass (EFS) | Q021 / Q022 | Exact duplicate | One evidence point (two lifts inside) |
| Iqbal / Shahrukh passenger | Q017 / Q050 | Same quote, two formats; Q050 amount unreliable | One evidence point (use Q017 amounts; Q050 flagged) |
| P.O 02 doors+cabin | Q031 / Q032 | **Revised** (Q032 = "REVISED 22/01/2026" with discount, cargo-only install) | Two points for the SAME line-item "doors+cabin" service — treat as revision, use Q032 for later pricing, Q031 for context |
| FUJI Sunpo | Q041 / Q054 / Q055 | **Revision family**: Q041 full (1000+1600), Q054 passenger-only-column variant, Q055 revised 7/7/7 pricing (different unit prices, install changed) | Three revisions of one FUJI deal → one evidence family; compare unit prices as revision deltas, not independent quotes |
| Imported Sigma letterheads | Q020 / Q043 | Same scope on two letterheads; Q043 garbled | One evidence point (Q020); Q043 unusable |
| Sunpo 2000kg cargo lift-only | Q003 / Q053 | Same client, date (21/11/2025), scope, price (5,500,000) — effectively same quote/template | One evidence point |
| Fishri (Mr Younus) | Q009 / Q010 / Q011 / Q012 | **Same project, multiple revisions/scopes**: Q011 old (10/07/2025, lift 2.9m + old structure 450k), Q009 with NEW structure (rev 17/11/2025, lift 3.2m + structure 600k = 3.8m), Q010 & Q012 lift-only revised (rev 27/01/2026, 3.2m) | One project family; the lift-only latest (3,200,000) is the family's lift price; Q009/Q011 carry the structure snapshots. Treat as ONE evidence point for passenger pricing, TWO for structure-by-height |
| Q045 / Q046 (Qurban) | Q045 vs Q046 | **Same client/template/date, different specification** (automatic SS 630 kg vs swing MS 500 kg) | Two separate projects, but a **paired comparison** (ideal for §6 deltas) |

**Families to never count as independent points:** Q004/Q005, Q006/Q007, Q029/Q030/Q056, Q035/Q040, Q036/Q057, Q037/Q038, Q059/Q060, Q021/Q022, Q017/Q050, Q020/Q043, Q003/Q053, Q009–Q012, Q041/Q054/Q055, Q031/Q032.

---

## 5. Price Comparability (per major group)

### Group A — 630 kg passenger steel, lift-only
Comparable for **budget bands**: all quotes are the same product scope, PKR, all-in. As printed, the band spans Rs 2,205,000 (Q027, after discount) → Rs 3,700,000 (Q001).
Unsafe to do: claim any single quote "is" the price, or average 2023 quotes with 2026 quotes as if time-neutral.
Specific hazards inside the band: (1) date drift 2023–2026 (PKR devaluation/inflation §9); (2) Q027's 225k discount and 30k branch fee; (3) Q049's optional ARD at 150k (excluded from its 3,025,000); (4) contract-vs-quotation document type (contracts may embed different terms); (5) door widths 600–800 mm and NBOL vs generic hardware.

### Group B — 1000 kg passenger steel, lift-only
**Weakly comparable.** Only 3 projects; Q006/Q007's usage field printed "CARGO" suggests a possibly different product; Q036/Q057 excludes tax; Q037/Q038 carries a generator extra. The 1000 kg "passenger" band spans Rs 3,100,000 → 4,500,000 and this spread is **not cleanly explained by the visible variables** (see §8). Treat as a placeholder band, not a pricing basis.

### Group C — passenger glass
Comparable **only after removing structure**: Q019 (3 stops) 4,300,000; Q021/Q022 (3-4 stops) 4,000,000–4,300,000; Q028 (6 stops) 3,550,000 local / 4,600,000 imported; Q048 (7 stops) 3,450,000. Q002 and Q047 are **not** directly comparable to these four because Q002 bundles structure+glass and Q047 prices structure separately.
Hazards: capacity 630 vs 1000 kg inside the group; Q028's dual finish price; Q047's separate 600k structure.

### Group D — cargo
Lift-only members ARE comparable among themselves by capacity/stops: 2000 kg / 6 stops = 5,500,000 (Q003/Q053 and Q029-fam lift line) ; 1600 kg / 6 stops = 4,900,000 (Q004/Q005); 1000 kg(?) / 4 stops = 4,000,000 (Q013); 2000/3000 kg(?) / 3 stops = 4,500,000 (Q016). Q029-fam's 2,800,000 structure is a separate line — the printed package total 7,800,000 must never be compared as "a 2000 kg cargo lift price". Q034 (hoist, 2,900,000 + 1,800,000 structure) is machine-type-different and is compared only with the hoist caveat.
Hazards: Q013 and Q016 ambiguous printed capacities; Q029's 500k discount line; hoist vs traction.

### Group E — imported supply
Comparable **only as USD CIF supply lines** (16,000+19,000 Sigma; 14,150+15,050 FUJI Q041/Q054; 13,800+14,500 FUJI Q055). PKR installation lines (1,000,000–2,000,000 per lift; Q020 total 3,800,000 / Q041 2,200,000 / Q055 2,800,000) are companions, not full-lift totals. No USD↔PKR conversion is performed anywhere.

### Group F — structure
Comparable **as "RS structure priced by height & duty"**: light/residential ~20–50 ft at 400k–700k; taller ~80 ft at 1,150k; industrial 98 ft at 1,800k (hoist duty) to 2,800k (2000 kg cargo duty). Hazards: only ~9 observations spanning 2023–2026; materials printed for some (4"×4" pipe vs 4"×2" channel vs 6"×3"/4"×2"/2"×2" MS) and not others; two quotes (Q009, Q047) give price without height, and Q026/Q011 have both.

### Groups G (and everything else)
Q008, Q015, Q031–Q033, Q035/Q040, Q044, Q058, Q061 and the dumbwaiter Q042 cannot be compared to lift prices. They carry **scope-appropriate information only** (§6/§10 use their add-on and component figures, not their totals).

**Global safety statement:** no two full-lift totals should be compared without first confirming the same (a) supply basis (local PKR all-in vs imported USD CIF), (b) structure inclusion, (c) glass inclusion, (d) discount/tax treatment, (e) date window, and (f) capacity/stops.

---

## 6. Pricing Patterns

For each variable: Evidence, Comparable quotations available, Observed pattern, Confidence, Limitations. "Confidence" is qualitative (Strong / Moderate / Weak / Insufficient). A pattern is reported because it *repeats in the printed figures* — never as a proven cause.

### 6.1 Lift type (passenger vs cargo vs glass vs hoist)
- **Evidence:** complete-lift amounts in §3 Groups A–D.
- **Comparable quotations available:** passenger steel 8 (A) + 3 (B) ≈ 11; glass 4 (C core) + 2 (C scope-variant); cargo 4–6 (D); hoist 1.
- **Observed pattern:** at similar stops and all-in local PKR, cargo (2000 kg) ≈ 5,500,000 exceeds passenger (630 kg) ≈ 2,200,000–3,700,000; passenger glass ≈ 3,450,000–4,600,000 sits above passenger steel; hoist is the cheapest heavy lift (2,900,000 at 2000 kg). Orders preserved in every like-for-like pairing within one document (Q020 passenger 1000 vs cargo 1600; Q045 vs Q046).
- **Confidence:** Moderate (direction), because most LFR comparisons also change capacity and machine.
- **Limitations:** type never varies alone in any quotation; capacity and machine type move with it.

### 6.2 Capacity
- **Evidence:** Q020 (1000 kg USD 16,000 vs 1600 kg USD 19,000, +3,000), Q041 (14,150 vs 15,050, +900), cargo set Q013/Q016/Q004/Q003 (4,000,000 / 4,500,000 / 4,900,000 / 5,500,000 as capacity is read 1000→1600→2000 kg).
- **Comparable quotations available:** ~12 pairings where capacity differs while other specs are held constant or nearly so.
- **Observed pattern:** *within cargo and imports*, price rises with capacity. *Within passenger*, capacity alone does not cleanly predict price — 1000 kg quotes (3,100,000–4,500,000) overlap 630 kg quotes (2,200,000–3,700,000).
- **Confidence:** Weak-to-Moderate (stronger for cargo/imports than for passenger).
- **Limitations:** capacity is confounded with door, machine size, and date; Q013/Q016 have ambiguous printed capacity; no controlled passenger capacity pair exists.

### 6.3 Floors / stops
- **Evidence:** clean within-quote pair Q021 (G+3 = 4 stops at 4,300,000 vs G+2 = 3 stops at 4,000,000 → **+300,000 per additional floor** on an identical 630 kg glass lift); cross-quote 630 kg family A: 5 stops (Q027 2,205,000 after discount; Q045 3,200,000) → 6 (Q001 3,700,000; Q039 3,500,000) → 7 (Q018 3,150,000; Q049 3,025,000; Q059 3,500,000) → 9 (Q051 3,375,000).
- **Comparable quotations available:** 1 controlled pair (Q021) + the 8-member family A.
- **Observed pattern:** stops are the single most repeated correlate, but family A does NOT show a monotone price-at-stops trend (2023–2026 confound and discounts overwhelm it). The controlled pair says +1 floor ≈ 300,000 at 630 kg glass; family A cannot confirm that rate for steel.
- **Confidence:** Moderate that stops matter; **Weak** on the exact rate.
- **Limitations:** only one controlled pair; dates/discounts confound the cross-quote trend; no stops-variation within cargo.

### 6.4 Glass
- **Evidence:** Glass group C amounts vs steel group A/B; Q002 explicitly bundles glass; Q048 prints 8 mm cabin + 6 mm door glass.
- **Comparable quotations available:** 6 glass quotes (C) vs 11 steel passenger (A+B).
- **Observed pattern:** glass-lift totals generally sit at/above the top of the comparable steel band (3,450,000–4,600,000 vs 2,200,000–3,700,000), but structure is bundled in Q002 and itemized in Q047, so the "glass premium" cannot be isolated.
- **Confidence:** Weak (a real product line, but no controlled same-lift glass-vs-steel comparison; scope contamination).
- **Limitations:** capacity and structure vary at the same time as glass.

### 6.5 Door type
- **Evidence:** paired Q045 (automatic SS-304, 630 kg, 3,200,000) vs Q046 (swing door MS powder-coat, 500 kg, 2,500,000) — same client, same template, same date; component unit prices Q033 (SS automatic door 120,000 ea + door drive 200,000) and Q031 (MS book-type door 85,000 ea); Q034 (no doors, hoist).
- **Comparable quotations available:** 1 true paired comparison + component lines.
- **Observed pattern:** automatic/SS configurations price above swing/MS configurations; component quotes confirm doors carry explicit per-unit prices (85k–120k) plus drive cost.
- **Confidence:** Weak-to-Moderate (direction real; magnitude conflated with capacity/finish/machine in the pairing).
- **Limitations:** the pairing changes 3 variables together; door unit prices come from component quotes (different market, doors-only client).

### 6.6 Cabin / finish material
- **Evidence:** Q028 — the SAME lift printed at Rs 3,550,000 (locally-made cabin) vs Rs 4,600,000 (imported cabin) → **+~1,050,000 (+~30%)**; Q045 (SS-304) vs Q046 (MS powder coat) reinforces direction; Q031/Q032 cabin line 1,500,000 and Q033 1,300,000 confirm cabin is a large single line item.
- **Comparable quotations available:** 1 clean same-lift pair (Q028) + 2 paired-confound quotes + 3 component cabin lines.
- **Observed pattern:** imported cabin > local cabin; SS-304 walls > MS powder-coat; cabin is a substantial standalone cost element.
- **Confidence:** Moderate (Q028 is a genuine same-lift experiment, but n=1 for magnitude).
- **Limitations:** import-cabin delta also embeds currency/import assumptions; component cabin prices are from a fixed-price doors+cabin service, not a full lift.

### 6.7 Machine type / drive
- **Evidence:** hoist (Q034 2,900,000, 2000 kg, 6 stops) vs cargo traction (Q003/Q053 5,500,000, same capacity/stops); geared reconditioned (Q046 5.5 kW) vs gearless (Q045 4.2 kW) pairing; kW tracks capacity (4.2 kW @630 kg, 6.2/6.4 kW @1000 kg, 11 kW @2000 kg).
- **Comparable quotations available:** few clean ones — the hoist-vs-cargo contrast and the Q045/Q046 pair; kW-vs-capacity pattern across ~20 quotes.
- **Observed pattern:** hoist machines are offered far below traction at the same load; power rating rises with capacity.
- **Confidence:** Weak-to-Moderate (hoist contrast is confounded by door presence and drive type; kW is descriptive).
- **Limitations:** no same-lift geared-vs-gearless quote; hoists and traction lifts are different products.

### 6.8 Structure
- **Evidence:** Group F (9 observations: 400k / 450k / 600k / 600k / 700k / 1,150k / 1,800k / 2,800k).
- **Comparable quotations available:** 8 priced structure lines/items with stated-or-implied height.
- **Observed pattern:** structure price rises with stated height and design load (light ~20–50 ft: 400k–700k; ~80 ft: ~1,150k; 98 ft industrial: 1,800k–2,800k). The 2000 kg (2,800k) prices above the hoist-duty variant (1,800k) at the same 98 ft.
- **Confidence:** Moderate (consistent ordering; two price points at the same 98 ft differ by design load).
- **Limitations:** few observations, some heights Not specified (Q009, Q047), spans 2023–2026, member spec detail varies.

### 6.9 Speed
- **Evidence:** 1 m/s in essentially every complete-lift quotation that states speed. No variation.
- **Comparable quotations available:** none (constant value).
- **Observed pattern:** none (single observed value).
- **Confidence:** Insufficient for any pricing use.
- **Limitations:** a constant cannot be a driver with this dataset.

### 6.10 Add-ons / optional equipment (used as evidence, not as comparisons)
- ARD (automatic rescue device): Rs 150,000 line each in Q049, Q051, Q058; included elsewhere by revision (Q014, Q018, Q036). Suggested value ~150k when charged explicitly.
- Generator/fuel/branch: 150,000 line in Q037/Q038.
- Cabin-import delta: +~1,050,000 (Q028).
- Door unit prices: MS book-type 85,000 (Q031); SS automatic 120,000 + VVVF door drive 200,000 (Q033).
- These are the only inputs that can be converted into option pricing with **any** confidence, because each is a same-project price delta — and even these are few (n=1–3).

---

## 7. Comparable Price Tables (strongest groups only)

Only fields actually printed are shown. Darker = unreliable/flag. These are NOT normalized values — everything is verbatim.

### Table A — Group A: 630 kg passenger steel, lift-only, local all-in PKR

| Q-ID | Capacity | Stops | Speed | Door | Cabin | Structure | Glass | Scope | Amount | Date |
|---|---|---:|---:|---|---|---|---|---|---|---:|---|
| Q001 | 630 kg | 6 | 1 m/s | Automatic SS-frame + glass panel | SS wall, mirror edging | Not included | Glass in door | Lift | Rs 3,700,000 | 2023-02 |
| Q018 | 630 kg | 7 | 1 m/s | Automatic hairline SS 700 mm (NBOL) | SS wall, TFT LCD, false ceiling | Not included | – | Lift | PKR 3,150,000 | 2025-05 (rev 2026-02) |
| Q027 | 630 kg | 5 | 1 m/s | Automatic hairline SS 800 mm (NBOL) | SS wall, TFT | Not included | – | Lift (discounted) | PKR 2,205,000 (list 2,400,000 − 225,000 + 30,000 branch) | 2024-05 |
| Q039 | 630 kg | 6 | 1 m/s | Automatic 700/800 SS-304 (TW) | SS-304, TFT, intercom | Not included | – | Lift | PKR 3,500,000 | 2025-06 |
| Q045 | 630 kg | 5 | 1 m/s | Automatic 600–800 SS-304 (TW) | SS-304, TFT, ~4×4 ft | Not included | – | Lift | PKR 3,200,000 | 2026-07 |
| Q049 | 630 kg | 7 | 1 m/s | Automatic SS center opening | SS wall, mirror edging, LCD | Not included | – | Lift (+optional ARD 150k) | Rs 3,025,000 | 2023-06 |
| Q051 | 630 kg | 9 | 1 m/s | Automatic SS center opening | SS wall, mirror edging, LCD | Not included | – | Lift ×4 (per unit) | Rs 3,375,000 × 4 | 2023-07 |
| Q059/Q060 | 630 kg | 7 | 1 m/s | Automatic hairline SS 800 mm (NBOL) | SS wall, TFT, false ceiling | Not included | – | Lift (contract & quote) | Rs 3,500,000 | 2024-02 |

Range as printed: **Rs 2,205,000 (Q027, discounted) → Rs 3,700,000 (Q001)**; strict range of non-discounted quotes ≈ 3,025,000–3,700,000.

### Table B — Group D: local cargo, lift-only, all-in PKR

| Q-ID | Capacity | Stops | Speed | Door | Cabin | Structure | Scope | Amount | Date |
|---|---|---:|---:|---|---|---|---|---|---|---|
| Q003 / Q053 | 2000 kg | 6 | 1 m/s | MS book-type (local), 6 ft clear | MS heavy cabin, checker | Not included | Lift | PKR 5,500,000 | 2025-11 |
| Q004 / Q005 | 1600 kg | 6 | 1 m/s | MS book-type (local), 6 ft clear | SS-304 wall, checker base | Not included | Lift | PKR 4,900,000 | 2026-01 |
| Q013 | 1000 kg heading / "100 kg" body (Unclear) | 4 | 1 m/s | Automatic SS 900 mm | SS walls | By client | Lift | Rs 4,000,000 | 2026-03 |
| Q016 | 3000 kg body / 2000 kg heading (Unclear) | 3 | Not specified | Manual book-type | SS walls, mirror | Not included | Lift | Rs 4,500,000 | 2025-01 |
| Q029 / Q030 / Q056 | 2000 kg | 6 | 1 m/s | MS book-type, 6 ft clear | MS heavy cabin, checker | 2,800,000 (98 ft, 2000 kg) | Lift + structure | Lift 5,500,000 − 500,000; package 7,800,000 | 2025-11 |
| Q034 (hoist) | 2000 kg | 6 | Not specified | No doors | MS cabin + checker | 1,800,000 (98 ft, 2000 kg) | Hoist + structure | Hoist 2,900,000; package 4,700,000 | 2026-01 |

### Table C — Group C core: passenger glass, structure-excluded

| Q-ID | Capacity | Stops | Speed | Door | Cabin | Glass | Structure | Scope | Amount | Date |
|---|---|---:|---:|---|---|---|---|---|---|---|
| Q019 | 1000 kg | 3 | 1 m/s | Automatic 800 mm SS-304 TW + 6 mm | Not specified | 6 mm doors | Not included | Lift | PKR 4,300,000 | 2025-06 |
| Q021 / Q022 | 630 kg | 3–4 (two lifts) | 1 m/s | Automatic 800 mm SS-304 TW + 6 mm | SS walls, TFT | 6 mm doors | Not included | 2× Lift | G+3: 4,300,000; G+2: 4,000,000 | 2025-07 |
| Q028 | 1000 kg | 6 | 1 m/s | Automatic 800 mm + 6 mm | Local vs imported cabin | 6 mm doors | Not included | Lift (2 finishes) | Rs 3,550,000 / 4,600,000 | 2025-10 |
| Q048 | 1000 kg | 7 | 1 m/s | Automatic 800 mm SS-304 TW + 6 mm | 8 mm glass + SS-304 | 6 mm doors, 8 mm cabin | Not included (companion doc Q024) | Lift | PKR 3,450,000 | 2025-09 |

Scope-variant glass (shown for completeness, **NOT** grouped above): Q002 (combined structure+lift+glass, 4,100,000) and Q047 (lift 2,900,000 + structure 600,000).

### Table D — Group E: imported supply, USD CIF Karachi

| Q-ID | Brand | Lifts | Supply price (USD) | Installation (PKR, per lift) | Structure/Glass | Scope | Date |
|---|---|---|---|---|---|---|---|
| Q020 | Sigma Shanghai | Passenger 1000 kg + Cargo 1600 kg | 16,000 + 19,000 = 35,000 | 1,800,000 + 2,000,000 = 3,800,000 | Not included | Supply + install | 2025-08 |
| Q041 | FUJI | Passenger 1000 kg + Service 1600 kg | 14,150 + 15,050 = 29,200 | 1,000,000 + 1,200,000 = 2,200,000 | Not included (+ local cargo doors 510,000) | Supply + install + doors | 2025-08 |
| Q054 | FUJI | Passenger 1000 kg (variant) | 14,150 + 15,050 (total words: 29,200) | 60/30/10 terms (not itemized) | Not included | Supply (variant) | 2025-08 |
| Q055 | FUJI | Passenger 1000 kg + Service 1600 kg (revised) | 13,800 + 14,500 (printed total lines 14,300/15,500; words ≈ 29,800) | 1,300,000 + 1,500,000 = 2,800,000 | Not included | Supply + install | 2025-08 |

### Table E — Group F: structure cost vs height/duty

| Q-ID | Height | Duty / design load | Structure amount | Date |
|---|---|---|---|---|
| Q026 | ~20 ft | small residence (450 kg lift) | Rs 400,000 | 2023 |
| Q011 | ~40 ft | residence (550 kg lift) | Rs 450,000 | 2025 |
| Q009 | Not stated | residence (550 kg lift), new structure | PKR 600,000 | 2025 |
| Q047 | ~50 ft | residence (630 kg glass lift) | PKR 600,000 | 2025 |
| Q023 | ~50 ft | residential-style | PKR 700,000 | 2025 |
| Q024 | ~80 ft | residential-style | PKR 1,150,000 | 2025 |
| Q034 | 98 ft | 2000 kg hoist duty | PKR 1,800,000 | 2026 |
| Q029/Q030/Q052/Q056 | 98 ft | 2000 kg cargo duty (heavy 6"×3"/4"×2"/2"×2" MS) | PKR 2,800,000 | 2025 |

---

## 8. Outliers and Anomalies

Nothing is branded "wrong" for looking unusual — each anomaly is tied to an evident reason from the quotation itself.

| Q-ID | Observation vs genuine comparables | Evident reason(s) | Verdict |
|---|---|---|---|
| Q027 | Lowest 630 kg price (2,205,000) vs family 3,025,000–3,700,000 | Explicit 225,000 discount + 30,000 branch fee; 2024 date; door hardware budget | Explained by discount — do not use as a price point |
| Q017 / Q050 | 1,950,000 is the cheapest 5–6-stop passenger quote, well below family A | Capacity Not specified (likely smaller/cheaper lift); Q050 prints conflicting words vs digits | Unreliable for the 630 kg band; keep only for "unknown capacity" context |
| Q001 | Top of family A (3,700,000 at 6 stops) and the earliest date | 2023 contract/agreement; "with standard cabin"; earliest PKR conditions | Plausible for its date; not current price reference |
| Q006 / Q007 | 4,500,000 for a "1000 kg passenger, 6 stops" vs Q037/Q038 (3,100,000) same capacity/stops | Usage field printed "CARGO" (may be a cargo-built product); different template; 2026 vs 2025 date | Explanation is unresolved → **keeps Group B weak**; do not merge into one 1000 kg band blindly |
| Q047 | Glass 630 kg lift at 2,900,000 + 600,000 structure — below glass core (3,450,000+) | Structure priced on a separate line; different stop count (4); 2025 | Not anomalous once structure/scope is separated |
| Q029-fam | Package 7,800,000 — highest local package in the set | Includes 2,800,000 industrial structure (98 ft, 2000 kg); lift line itself 5,500,000 − 500,000 | Consistent with cargo lift + heavy structure; never compare the package total to other lift totals |
| Q034 | Hoist 2,900,000 vs cargo 2000 kg at 5,500,000 (same capacity/stops) | Drum/hoist machine, no doors, relay control — a cheaper product class | Not anomalous; machine-class difference |
| Q016 | 3 stops priced 4,500,000 vs 2000 kg 6 stops at 5,500,000 | Capacity printed 3000 kg (body) / 2000 kg (heading); fewer stops | Plausible; keep only with the Unclear-capacity flag |
| Q042 | 800,000 for a complete lift; out of any band | Dumbwaiter (150 kg, 2 stops) — separate product | Correctly its own category, not an outlier |
| Q051 | 13,500,000 total (×4 units) | Per-unit 3,375,000; volume deal | Use per-unit figure if needed; not a single-lift total |
| Q061 | 2,150,000 for a "quotation" | Winch/girder arrangement, not an elevator | Excluded from all lift comparisons |

---

## 9. Historical Pricing vs Current Pricing

- **What these quotations are:** an evidence trail of how Deenar/Excellent Elevator **priced jobs between Feb 2023 and Jul 2026** — including revisions (Q009–Q012, Q031/Q032, Q041/Q054/Q055), discounts (Q027, Q029, Q032, Q033), tax-exclusions (Q036/Q057), and 30-day validity on imports (Q041).
- **What they are not:** a current public price list. The website calculator's "2026 price bands" copy is a separate claim that this dataset does not, by itself, fulfil (that is exactly the pending `docs/business-truth.md` P1 calibration).
- **No inflation/market adjustment is performed anywhere in this document** because the quotation dataset contains no reliable in-dataset basis for conversion (no repeated list prices over time for an identical config; PKR/USD rates are not recorded in any quotation).
- **What carries forward reliably across time:** same-document price deltas (structure-by-height ordering, cabin-import delta Q028, ARD/generator 150k values, door unit prices, Q021 per-floor delta, hoist<cargo ordering, capacity ordering within cargo/imports). These are relationships, and relationships age more slowly than absolute prices.
- **What does not carry forward:** any absolute PKR total from 2023 as if it were today's price. Absolute figures here must be re-validated against the company's current (late-2026) quoting before public use.

---

## 10. Calculator Implications

Derived only from the evidence above. **No implementation.**

### Strong candidates for calculator inputs (enough comparable evidence to plausibly move an estimate)
1. **Lift category** — passenger (steel), passenger glass, cargo, hoist. Evidence: Group A/B/C/D ordering; distinct printed price levels.
2. **Capacity (kg)** — evidence: cargo 1000→2000 kg ordering and import deltas. Use kg (as printed); the current persons-based passenger dropdown does not match quotation practice.
3. **Stops (1–9)** — evidence: strong presence, controlled pair Q021 (+300k/floor at 630 kg glass), family A spreads.
4. **Structure toggle + height/load band** — evidence: Group F monotone ordering; structure is very frequently a separate line or an owner responsibility.
5. **Cabin source / finish** — local SS vs imported cabin (Q028 +~30%) and SS vs MS powder-coat direction (Q045/Q046).
6. **Door class** — automatic SS vs swing/MS vs book-type (component prices + paired direction).

### Possible inputs, but requiring verification before pricing use
- **Machine type (hoist vs traction; geared vs gearless)** — directional only; one pair + one class contrast.
- **Glass thickness (6 mm vs 8 mm)** — printed but never isolated; treat as spec until evidence exists.
- **ARD / optional equipment** — value suggested by n≤3 observations (150k). Likely an add-on dropdown, not a driver.
- **Imported-supply option (USD track)** — real product line with separate currency and duty structure; needs a defined exchange/duty policy before it can live in a PKR calculator.

### Should probably NOT drive price
- **Building type** — zero quotation basis for any factor (see `docs/calculator-quotation-analysis.md` §2.2).
- **Home and hospital types** — no quotations exist for either product.
- **Stops > 9** — no evidence beyond 9.
- **Passenger capacity > 13 persons / > 1000 kg** — no evidence.
- **Speed** — constant (1 m/s) in the dataset.
- **Luxury/stone/destination-dispatch finishes** — never appear in quotations.

### Display as specifications (not price inputs)
Speed (1 m/s), travel height (feet), shaft dimensions (8×8, 8×6, 13×8 ft; W1800×D2400 mm), machine kW, glass thickness, typical free-maintenance period (2/6/12 months), typical payment schedules, delivery in days (45/60/70/90), and "may include ARD/generator" notes.

---

## 11. Recommended Pricing Model Approach

The evidence is assessed against each candidate approach. **The final formula is NOT created here.**

| Approach | Evidence support | Assessment |
|---|---|---|
| Fixed base price by lift category | Moderate — distinct levels for passenger (≈3.0–3.5m), glass (≈3.5–4.3m), cargo (≈5.0–5.5m), hoist (≈2.9m). | Workable as a starting base, but bands within each category are wide (confounds) |
| Base + per-floor/stop adjustment | Weak-to-Moderate — only ONE controlled pair (Q021: 4,300,000 vs 4,000,000). Family A does not confirm a linear rate. | Use as a small adjustment with a wide error band; do not emit a "correct" rate |
| Base + capacity adjustment | Weak-to-Moderate — cargo/import ordering supports direction; passenger capacity does not predict. | Supportable only within cargo and imports; passenger capacity should not change price strongly |
| Option / add-on pricing | **Most defensible** — same-document deltas exist for: imported cabin (+~1,050,000, Q028), ARD (~150k, Q049/Q051/Q058), generator (150k, Q037/Q038), door drive (200k, Q033), door units (85k MS / 120k SS, Q031/Q033), per-floor (300k, Q021). | Build the estimate as BASE + measured add-ons, where each add-on has a documented delta |
| Separate structure / glass components | Strong — structure is priced independently (Group F, 9 observations); glass is a recognizable product element but never isolated. | Structure: separate toggle with height/load bands. Glass: include as a category attribute, not a priced component (no delta evidence) |
| Quote-request estimator rather than exact price | **Best fit for this dataset.** The evidence yields bands and deltas, not point prices; discounts, taxes, dates, currencies, and scope all vary. The safest, evidence-honest product is a range estimator that hands off to a survey/formal quotation (which is also how the business actually operates: every quote says "60 days, subject to civil work/approval"). | Recommended primary mode |
| Precise regression / exact list price | **Not supported.** Too few controlled observations, heavy confounds, one company, 2023–2026 PKR drift. | Explicitly rejected |

**Conclusion for §11:** the data can support a **banded estimator (category base + evidence-based add-ons + structure component, all returning a range) with a quote-request handoff** — it cannot support a precise figure-generating pricing formula.

---

## 12. Final Evidence Matrix

| Variable | Number of usable quotes | Comparable evidence | Pricing relationship | Confidence | Possible future calculator role |
|---|---:|---|---|---|---|
| Lift category (passenger / glass / cargo / hoist) | ~19 distinct local lifts (+3 import tracks) | Groups A–D, E | Distinct price levels per category (cargo > glass > passenger steel; hoist cheapest heavy) | Moderate (direction) | Primary category selector / base price |
| Capacity (kg) | ~30 distinct complete lifts with capacity | Cargo 1000/1600/2000 & import 1000/1600 pairs | Rises with capacity within cargo & imports; passenger inconclusive | Weak–Moderate | Capacity dropdown (kg): small adjustment |
| Stops / floors | ~30 distinct complete lifts; 1 controlled pair | Q021; family A (5–9 stops) | Stops correlate but rate not confirmed; +300k/floor from Q021 only | Moderate (matters) / Weak (rate) | Stops slider 1–9 with small per-stop delta + wide band |
| Glass | 6 distinct + Q028 option | Group C | Glass levels above steel passenger; not isolated | Weak | Category attribute (passenger glass), not priced component |
| Door type | ~28 distinct; 1 pair + component unit prices | Q045 vs Q046; Q031/Q033 | Automatic/SS above swing/MS; unit lines 85k/120k + drive 200k | Weak–Moderate | Door-class option |
| Cabin / finish | ~15 distinct + Q028 option pair | Q028; Q045 vs Q046; component lines | Imported cabin +~30% (Q028); SS > MS powder-coat | Moderate | Finish/source option (local vs imported; SS vs MS) |
| Machine type / drive | ~20 distinct (gearless/geared/hoist/reconditioned) | Q034 vs Q003/Q053; Q045 vs Q046; kW-vs-capacity | Hoist < traction; kW rises with capacity | Weak–Moderate | Machine/category attribute; not strongly priced alone |
| Structure | 9 priced lines/items (incl. 3 standalone docs) | Group F | Rises with height & design load (400k–2,800k) | Moderate | Separate structure toggle + height/load band |
| Speed | ~25 state 1 m/s; zero variation | none | None | Insufficient | Display spec only |
| Building type | 0 | none | None | Insufficient | Do NOT drive price |
| Home / hospital product | 0 | none | None | Insufficient | Do NOT model; omit or mark unsupported |
| Discounts / taxes | Q027, Q029, Q032, Q033, Q036/Q057 | printed deltas | Prices are quoted BEFORE negotiated discounts; Q036/Q057 exclude tax | Moderate (existence) | Not an input; include "-excludes discounts/taxes" disclaimer |

---

## 13. Final Recommendation

### What pricing information can we confidently use?
1. **Relative product levels** (ordering, not absolute values): cargo > passenger glass > passenger steel; hoist < cable lifts at equal load; imported cabin > local cabin; taller/heavier structure > lighter structure.
2. **Same-document price deltas** (time-safe): ~+1,050,000 imported cabin (Q028); +300,000 per extra floor (Q021); ARD ≈ 150,000 (Q049/Q051/Q058); generator ≈ 150,000 (Q037/Q038); door units 85,000–120,000 + 200,000 drive (Q031/Q033); structure band ~400,000 (light/50 ft) … ~2,800,000 (industrial 98 ft).
3. **Rough local all-in PKR bands** (with wide eyes): 630 kg passenger steel ≈ Rs 2.2m–3.7m (discount-adjusted family A); passenger glass (structure excluded) ≈ 3.5m–4.6m; 1600–2000 kg cargo lift-only ≈ 4.9m–5.5m; imported-supply USD CIF ≈ 13.8k–19k per lift.

### What remains uncertain?
- Exact per-floor and per-kg rates (only one controlled pair for stops; capacity confounded in passenger quotes).
- The 1000 kg passenger band (Q006 "CARGO" usage vs Q037/38 vs Q036/57 tax-excluded — 3,100,000–4,500,000 has no clean explanation).
- Any USD↔PKR equivalence, current exchange/duty handling, and whether 2023 prices still mean anything in 2026.
- Whether discounts (up to 10% in the P.O series, 225k in Q027) are policy or one-off.
- Home, hospital, >9-stop, >1000 kg passenger products — have zero evidence.

### What should we verify with Dad (the business owner) later?
- Current price bands for passenger / glass / cargo / hoist in late-2026 PKR.
- Whether imported cabins and the imported-supply (USD) channel are still offered, and at what current USD figures.
- How structure is priced today (by height? by kg? a table?), and current rates.
- The actual discount policy and typical final negotiated prices (quotation vs "what was actually billed").
- The payment schedule to publish (no quotation uses 30/40/30) and the maintenance terms (2/6/12 months; 5k/10k per month after warranty).
- Whether home/villa and hospital lifts are real products to keep on the site.

### What additional data would make the calculator substantially more reliable?
- A batch of **current (2026) quotations** across the main configurations, ideally controlled (same lift ± one stop, ± one capacity).
- **Settled/final invoice amounts** (quoted vs billed) — this dataset is quotes only.
- Current USD/PKR rates + duty/clearance figures for the import track.
- Structure pricing records broken out by height and kg.
- At least a handful of >9-stop and 1000 kg+ passenger references, plus home and hospital if offered.

### What should our next step be?
Design the calculator logic as a **banded estimator**: category base (passenger/glass/cargo/hoist) → stops (1–9) → capacity (kg) → structure toggle with height bands → finish option (local SS / imported cabin) → door option → measured add-ons (ARD, generator, door drive) → return a **range** (low–high) and hand off to a formal quotation via survey/WhatsApp. Remove building-type factors and home/hospital (or mark unsupported), convert passenger capacity to kg, cap stops at ~9, and relabel finish tiers to the evidenced options. Then run a **human calibration pass with Dad** to set the 2026 band values before any code changes and before the numbers are presented as anything more than historical-structure-based ranges.

**Bottom line:** the dataset is rich enough to design the *structure* of a calculator (categories, inputs, add-ons, splitting logic) and to state defensible budget ranges — it is NOT sufficient to mechanically derive a precise per-attribute price formula, and nothing in this document should be treated as today's price list.

---

## Quality Control — this task

- **Accounted for all 61 quotations:** each Q-ID appears in §2 (scope table). Every quotation is either in a comparable group (§3/§7), assigned to a duplicate family (§4), flagged Unclear (§1, §2), or explicitly listed as non-comparable scope (Group G / §5 / §8).
- **Not silently discarded:** non-comparable and unclear quotations (Q008, Q015, Q031/Q032/Q033, Q035/Q040, Q043, Q044, Q050, Q058, Q061) are named, classified, and their usable component/option data (door prices, ARD, generator, works totals) is still surfaced in §6.10 and §8.
- **Source files unmodified** (read-only; see primary source's SHA-256 record).
- **Project documentation unmodified** — no changes to `docs/design.md`, `docs/story.md`, `docs/business-truth.md`, `docs/design-decisions.md`, or `docs/quotation-extraction.md`, `docs/calculator-quotation-analysis.md`.
- **Website/calculator code unmodified** — `src/**` untouched.
- **Only `docs/quotation-pricing-analysis.md` was created by this task.**