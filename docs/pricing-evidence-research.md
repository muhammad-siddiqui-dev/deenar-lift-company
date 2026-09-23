# Pricing Evidence & Research — Deenar Lift Company

**Status**: Evidence/research only. No product/calculator decision made for the owner.
**Purpose**: Determine whether the 61 historical quotations (Q001–Q061) plus current (2025–2026) external Pakistan market research are sufficient to build defensible pricing ranges for Deenar's actual product lines.
**Date compiled**: 2026-09

---

## 0. Evidence labels used throughout

| Label | Meaning |
|---|---|
| `[DEENAR CURRENT]` | Dad's verbal pricing, verified 2026 (see `docs/dad-pricing-verification.md`) |
| `[DEENAR HISTORICAL]` | One of the Q001–Q061 quotations (see `docs/quotation-extraction.md`, `docs/quotation-pricing-analysis.md`) |
| `[EXTERNAL PAKISTAN MARKET]` | Public, dated pricing from Pakistan lift suppliers / procurement (2024–2026) |
| `[INSUFFICIENT]` | No evidence or too weak/contradictory to support any range |

**Rule**: We never write "Deenar price = X" unless X is directly Deenar-supported (Dad 2026 or a usable historical quote). External prices are market *context*, never a Deenar price.

---

## 1. Per-category quotation evidence (Q001–Q061)

Rechecked from `docs/quotation-pricing-analysis.md`. Duplicate families and out-of-scope items removed.

### Passenger — steel / standard (630 kg core)
- Non-discounted 630 kg band: **PKR 3,025,000 – 3,700,000** (Group A).
- Q027 is a **discounted** outlier (~PKR 2.2M) — treat as discounted, not list.
- 1000 kg group (Q006/Q007, Q036/Q057, Q037/Q038): inconsistent, **PKR 3.1M – 4.5M**; weak (mixed scope, some semi-imported). `[DEENAR HISTORICAL]`

### Passenger — glass/capsule
- Core structure-excluded band: **PKR 3.45M – 4.6M** (Q002 includes structure ~4.1M; Q019, Q021/Q022, Q028, Q047, Q048).
- Q045/Q046 (swing-MS vs auto-SS doors) conflate two variables — not usable for glass premium. `[DEENAR HISTORICAL]`

### Cargo / freight
- Lift-only historical: **PKR 4.0M – 5.5M** (Q003/Q053 2000 kg 5.5M; Q004/Q005 1600 kg 4.9M; Q013 1000 kg 4-stop 4.0M; Q016 2000/3000 kg 3-stop 4.5M; Q029 family package 7.8M *incl. structure*).
- No per-capacity/quotation granularity; superseded by `[DEENAR CURRENT]` 4–15M. `[DEENAR HISTORICAL]`

### Imported complete lift (USD CIF + separate PKR install)
- Q020 Sigma: USD 16,000 / 19,000 + install PKR 1.8M / 2.0M.
- Q041/Q054 FUJI: USD 14,150 / 15,050 + install PKR 2.2M.
- Q055 FUJI revised: USD 13,800 / 14,500 + install PKR 2.8M.
- Scope: lift equipment `[DEENAR HISTORICAL]`, year-dependent FX — do not convert without explicit note. `[DEENAR HISTORICAL]`

### Structure / shaft (Group F)
- **PKR 400k (20 ft) → 450k (40 ft) → 600–700k (50 ft) → 1,150k (80 ft) → 1,800k (98 ft hoist) / 2,800k (98 ft cargo, Q052)**.
- Q026 (20 ft 400k), Q011 (40 ft 450k), Q009/Q047/Q023 (50 ft 600–700k), Q024 (80 ft 1,150k), Q034 (98 ft 1,800k hoist, out-of-scope product), Q052 (98 ft 2,800k cargo). `[DEENAR HISTORICAL]`

### Add-ons (thin pairs — provisional)
- ARD 150k (200k in Q051/Q058); generator 150k (Q037/Q038); VVVF door drive 200k (Q033); doors MS 85k / SS auto 120k (Q031/Q033); imported cabin +1,050k (~30%, Q028); per-floor +300k (Q021, single near-controlled pair 630 kg glass). `[DEENAR HISTORICAL]` — treat as directional only.

### Non-products / excluded
- Hoist (Q034), Panoramic, Escalators/Walkways → **OUT OF SCOPE** (confirmed not offered by Dad). Remove from product scope; drop Q034 from pricing.
- Q035 modification (4.0M), Q036 semi-imported 1000 kg (2024), Q050 garbled (1.95M 5-stops, 2026) — excluded from usable sets.
- Q026 (450 kg 1-stop swing door) — **NOT** a home-lift sample; not usable for Home/Villa pricing.

### Empty categories: `[INSUFFICIENT]`
- **Home / Villa lifts**: zero dedicated quotations.
- **Hospital / patient lifts**: zero dedicated quotations.

---

## 2. Dad's current evidence (2026, verified) `[DEENAR CURRENT]`

| Item | Dad's figure | Notes |
|---|---|---|
| Passenger steel 630 kg | **PKR 2.8M – 4.5M** | Verified band |
| Passenger glass | **Same band** as steel (2.8M – 4.5M) | No separate premium per Dad |
| Cargo / freight | **PKR 4M – 15M** | Overall only; no per-capacity breakdown |
| Home / villa lift | Offered | **No price given** → needs Dad |
| Hospital / patient lift | Offered | **No price given** → needs Dad |
| Imported complete lift | Quote-dependent (USD) | Depends on requirements/sizes/weight |
| Structure 20–50 ft | **PKR 600k – 1M** | |
| Imported cabin | Up to +50% above local | Ceiling only — not a fixed adder |
| Extra floor/stop | Up to +300k | Ceiling only — **not** a fixed adder |
| Payment | 40 / 20 / 20 / 20 | |
| Discount | Up to 5% | |
| Delivery | 2–3 months | |
| Maintenance | 1-yr free; AMC PKR 10,000/mo | |
| In the price | Complete lift + installation + commissioning + testing + 1-yr warranty | Scope anchor |

**Unresolved (Q27–Q30 of Dad session)**: which products to quote, whether to show ranges, how wide, and stop-estimating defaults — `[UNRESOLVED]` design decisions, out of scope here.

---

## 3. External Pakistan market research (2024–2026)

All prices PKR unless noted. All from public marketing/procurement sources. Scope is **typically supply + installation**, "indicative, no civil/tax" unless stated; some are equipment-only. Treat as market context only.

| # | Company / Source | Date | Product | Capacity / Stops / Config | Price (PKR) | Scope note | URL |
|---|---|---|---|---|---|---|---|
| E1 | Star Elevator Global | 2025-05-28 | Passenger | 450–630 kg, 4–6 stops, 1.0 m/s | 2.2M – 3.2M | supply+install, indicative | starelevatorglobal.com/passenger-lift-price-in-pakistan/ |
| E1 | Star Elevator Global | 2025-05-28 | Basic residential | 320–400 kg, 2–4 stops | 1.5M – 2.2M | | |
| E1 | Star Elevator Global | 2025-05-28 | Commercial | 800–1000 kg, 6–10 stops | 3.5M – 4.8M | | |
| E2 | Star Elevator Global (general) | 2025-05-15 | Home | 250–400 kg, 2–5 stops | 0.95M – 1.8M | | starelevatorglobal.com/elevator-price-in-pakistan/ |
| E2 | Star | 2025-05-15 | Passenger | 450–1000 kg, 4–10 stops | 1.4M – 3.5M | | |
| E2 | Star | 2025-05-15 | Capsule | 630–1000 kg, 4–12 stops | 2.2M – 4.8M | | |
| E2 | Star | 2025-05-15 | Hospital | 1000–1600 kg, 2–8 stops | 2.8M – 5.5M | | |
| E2 | Star | 2025-05-15 | Freight | 1000–3000 kg, 1–6 stops | 2.0M – 6.0M | | |
| E3 | Milano Technologies | 2026-05-05 | Home hydraulic | 2–3 stops | 0.8M – 1.4M | no civil/tax | milanotechnologies.pk/home-elevator-for-villa-in-pakistan/ |
| E3 | Milano | 2026-05-05 | Home traction MRL | 3–4 stops | 1.4M – 2.5M | | |
| E3 | Milano | 2026-05-05 | Home pneumatic | 2–3 stops | 1.8M – 3.5M | | |
| E3 | Milano | 2026-05-05 | Home screw | — | 0.6M – 1.0M | | |
| E4 | Milano | 2026-08? | Medical basic | 1000–1250 kg | 3.5M – 6.0M | | milanotechnologies.pk/medical-elevator-in-pakistan/ |
| E4 | Milano | | Medical MRL | 1250–1600 kg, 3–12 stops | 5.0M – 8.5M | | |
| E4 | Milano | | Medical bed | 1600–2000 kg, 4–20 stops | 7.0M – 12.0M | | |
| E5 | Milano | 2026 | Freight light | 500–1000 kg | 1.5M – 3.5M | | milanotechnologies.pk/freight-elevator-in-pakistan/ |
| E5 | Milano | | Freight mid | 1000–3000 kg | 4.0M – 7.0M | | |
| E5 | Milano | | Freight heavy | 3000–6000 kg | 7.0M – 12.0M | | |
| E5 | Milano | | Freight extra-heavy | 6000–10000 kg | 12M+ | | |
| E6 | Liftech Global | n.d. | Home MRL | 250–400 kg, 2–4 stops | 2.4M – 3.6M | supply+install band | elevatorescalators.com/products/home-elevators |
| E7 | Pak Elevator (pakelevator) | 2024-03 | Passenger standard | — | 3.5M – 7.5M | | pakelevator.com/a-complete-guide-to-elevator-lift-prices-in-pakistan/ |
| E7 | pakelevator | 2024-03 | Traction high-rise | — | 4.5M – 8.5M | | |
| E7 | pakelevator | 2024-03 | MRL | — | 4.0M – 7.5M | | |
| E7 | pakelevator | 2024-03 | Freight | — | 7M+ | | |
| E8 | Access Technologies | 2025-05-09 | Home hydraulic | — | 0.5M – 1.5M | | access-pk.com/small-residential-lift-price-in-pakistan-get-a-free-quote/ |
| E8 | Access | 2025-05-09 | Home traction | — | 1.5M – 3.0M | | |
| E9 | Pak Elevator (Karachi) | 2025-05-11 | Small home | 1-person | from 0.85M | local-made | pakelevator.com/affordable-small-home-lifts-mobility-solutions-for-disabled-persons-made-in-karachi/ |
| E9 | | | Small home | 2–3 person | from 1.2M | | |
| E9 | | | Wheelchair cabin | | from 1.5M | | |
| E10 | Scribd public quote | n.d.–2024 | Passenger 430 kg | 3 stops, 1 m/s, partial import | 2.25M equip + 1.025M structure = 3.275M | genuine quotation sample | scribd.com/document/836073203/Structure-Lift |
| E11 | GKMC / MTI Swabi tender | 2025 (KPPRA Rules 2014) | Hospital bed capsule | 1600 kg (21 pers), 2 stops, ARD, VVF, AC; steel structure + temper glass; **PEC EE-04/ME-03**; call deposit Rs 200,000 | N/A (tender) | procurement spec anchor | gkmcs.edu.pk/gallery/tenders/1742878745.pdf |
| E12 | DUHS Karachi tender | ~2024–25 | Imported passenger (×2) | — | USD 39,100 + PKR 5.66M install | imported = USD equip + PKR install split | (procurement) |
| E13 | FUJI Made-in-China listing | n.d. | 630 kg passenger | FOB China, factory | USD ~12,000 | equipment-only floor data point | (marketplace listing) |

**Warnings (research QA)**:
- Sources E1–E9 are marketing tables from Chinese-import brands/distributors; ranges differ wildly (e.g., Star passenger 1.4–3.5M vs pakelevator 3.5–7.5M). They are corroboration of market *magnitude*, never a Deenar price. Confidence per source tagged when used below.
- E10 is a genuine quotation (partial-import 430 kg + steel structure) — useful structural-cost anchor; note 6-month warranty, MS square pipe 100/75 mm × 4 mm.
- E11–E12 are real procurement/tender documents (spec + scope anchors, not prices).
- Steel-structure pricing search produced a UK reference (SCI P103) — not applicable; Pakistani structure data comes from Q-Group-F and E10.

---

## 4. Normalization

Per category — convert each source to: **band (low/high), scope (equipment-only vs supply+install vs complete), currency, year, included/excluded (civil/structure/tax/duties), comparability verdict, sufficiency verdict.**

| Category | Deenar evidence (usable) | External range (context) | Scope mismatch to flag | Sufficiency |
|---|---|---|---|---|
| Passenger steel 630 kg | 3.025–3.7M hist; **2.8–4.5M Dad** | 2.2–3.2M (E1) / 3.5–7.5M (E7) | External = supply+install; civil/tax excluded | **SUFFICIENT** (Dad band primary) |
| Passenger 1000 kg | 3.1–4.5M (weak) | 3.5–4.8M (E1 commercial) | Mixed historical scope | **PARTIAL** |
| Passenger glass | 3.45–4.6M; Dad = same as steel | 2.2–4.8M (E2) / 4.0–6.5M (E1 glass) | Glass premium debated | **PARTIAL** |
| Home / Villa | (none) | 0.6–3.6M (E3/E6/E8/E9) | No Deenar home data at all | **INSUFFICIENT** (needs Dad) |
| Hospital | (none) | 2.8–12M (E2/E4); tender spec E11 (1600 kg, 2-stop) | Hospital ≠ passenger; PEC codes needed | **INSUFFICIENT** (needs Dad) |
| Cargo overall | 4–5.5M hist; **4–15M Dad** | 1.5–12M+ (E2/E5) | Dad band primary; per-capacity absent | **PARTIAL** (overall, not per-capacity) |
| Imported complete | USD 13.8–19k + PKR 1.8–2.8M install | USD 12k FOB (E13); USD 39.1k + 5.66M (E12) | FX/duties/year drift; scope USD-vs-PKR split | **PARTIAL** (needs current FX + Dad) |
| Structure | 400k (20 ft) → 2.8M (98 ft); Dad 600k–1M (20–50 ft) | 1.025M for 430 kg 3-stop (E10) | E10 inline with Group F | **SUFFICIENT** |
| Add-ons | ARD/gen/VVVF/doors/cabin (thin) | (none) | Directional only | **PARTIAL** |

**Currency / inflation note**: historical quotes span ~2019–2026. Use Dad's 2026 verbal for current pricing; treat historical as directional + validation of Dad, not as current list. Imported USD must be re-quoted at current rate/duties — never auto-convert.

---

## 5. Readiness classes

| Class | Meaning |
|---|---|
| **A — READY** | Deenar-verified band exists (Dad 2026) and agrees with adequate historical + external context. Can show a defensible Deenar range today. |
| **B — PROVISIONAL** | Some Deenar evidence exists but gaps/mismatches remain. Range possible only if disclosed as provisional and flagged for Dad validation. |
| **C — QUOTE ONLY** | No Deenar price evidence. Do not publish a Deenar range; quote per-project and mark `[INSUFFICIENT]`. |

---

## 6. Conceptual range model (evidence-based, no invented multipliers)

"Range model" here is **how evidence maps to a band**, not a pricing formula. No new multipliers are introduced.

- **Passenger steel 630 kg**: primary band = Dad `[DEENAR CURRENT]` **2.8–4.5M**; historical quotes 3.025–3.7M sit inside and validate; external 2.2–3.2M (E1) is consistent with a low end. → Class **A**.
- **Passenger glass**: Dad says same band → display **2.8–4.5M** like steel (Dad decision), with note that historical glass quotes (3.45–4.6M) are at the top of band. → Class **B** (historical glass premium unresolved).
- **Passenger 1000 kg**: Dad gave no 1000 kg figure. Historical weak. → Class **B**, range = historical 3.1–4.5M disclosed as provisional.
- **Cargo**: overall Dad band **4–15M** → Class **A** overall / **C** per-capacity (no breakdown).
- **Home, Hospital**: no Deenar price → Class **C** quote-only, `[INSUFFICIENT]`.
- **Imported**: Class **B** — historical USD+install structure; re-quote at current FX. Features: quote-dependent.
- **Structure**: Class **A** — Dad + Group F + E10.
- **Add-ons**: Class **B** — directional only.

---

## 7–11. Deep checks per category

### 7. Passenger (steel + glass + 1000 kg)
- Do **not** model per-kg linearly. Evidence supports a 630 kg anchor; 1000 kg must be its own data point (historical is weak/inconsistent — do not extrapolate 630→1000 by weight ratio).
- Glass vs steel: Dad says same band; historical glass quotes cluster near the top. Given Dad is authoritative for 2026, do not add an un-evidenced glass premium. If the owner wants one, that is a Dad validation item, not a researched fact.
- Duplicate-family check: exclude re-quotes (Q027 discounted; Q036 semi-imported; Q050 garbled; mixed-scope Q045/Q046).

### 8. Home / Villa
- Zero dedicated quotations. Q026 is a 450 kg 1-stop swing-door office lift — **not** a home-lift sample.
- External home market is wide (0.6–3.6M) and contradictory across sources (hydraulic 0.5–1.5M vs MRL 1.4–3.6M) — cannot be turned into a Deenar price.
- **Action**: Dad must supply home base + per-stop. Until then Class C.

### 9. Hospital / patient lifts
- Zero dedicated quotations; Dad gave no price.
- Tender evidence (E11) anchors real hospital scope: 1600 kg bed capsule, 2 stops, ARD/VVF/AC, steel structure + glass cladding, PEC EE-04/ME-03, KPPRA two-envelope. E12 (institutional imported) shows USD-equipment + PKR-install structure.
- Must not substitute passenger band for hospital bed lifts — load/spec differ. **Action**: Dad to supply a hospital base. Until then Class C.

### 10. Cargo / freight
- Dad band 4–15M (overall). Historical 4–5.5M sits at the low end — plausible, since historical quotes were modest capacities/stops.
- 15M upper reflects heavy/extra-heavy + imported units per external E5 (7–12M heavy, 12M+ extra-heavy).
- **Do not invent per-capacity breakdown.** Per-capacity = Dad validation item.

### 11. Imported complete lifts, structure, add-ons
- **Imported**: historical = USD CIF (13.8–19k) + separate PKR install (1.8–2.8M). E12 shows the same split at institutional scale. FX/duty drift makes USD the honest anchor; PKR leg re-verified per quote. AMC/delivery/backup scope must be confirmed in writing (E4/E7 note install separate; Milano warns civil work usually excluded).
- **Structure**: Group F is coherent (400k@20ft → 2.8M@98ft); Dad 600k–1M@20–50ft overlaps; E10 (1.025M for a 430 kg 3-stop) matches mid-band. Class A. Flag: steel-structure quotes depend on shaft size, hatch, and retrofit vs new-build.
- **Add-ons**: ARD/generator/VVVF/doors/cabin adders are thin-pair evidence — directional only; validate with Dad before use as repeatable adders.

---

## 12. Final summary

### What we can potentially price (defensible today)
| Product | Class | Evidence-supported range (PKR) | Basis |
|---|---|---|---|
| Passenger steel 630 kg | **A** | **2.8M – 4.5M** | Dad 2026 + historical 3.025–3.7M + E1/E7 context |
| Passenger glass (same band) | **B** | 2.8M – 4.5M | Dad says same band; historical top-of-band |
| Passenger 1000 kg | **B** | 3.1M – 4.5M (provisional) | Historical only, weak |
| Cargo / freight (overall) | **A** (overall) | **4M – 15M** | Dad 2026 + historical low-end + E5 heavy context |
| Structure 20–50 ft | **A** | **600k – 1M** | Dad + Group F + E10 |
| Imported complete lift | **B** | USD equipment + PKR install (re-quote) | Historical USD/install split + E12/E13 |

### What still needs Dad validation
1. Home lift base + per-stop.
2. Hospital lift base.
3. Cargo per-capacity breakdown.
4. Per-stop/extra-floor cost (Dad gave ceiling 300k only).
5. Glass premium yes/no (Dad says no).
6. Imported complete lift current USD band.
7. Add-on prices as repeatable adders (ARD, generator, doors, imported cabin).

### What we must NOT do
- Invent Deenar prices, adders, or stop-costs with no Deenar evidence.
- Quote competitor/marketing prices (E1–E9) as Deenar prices.
- Use linear per-kg, per-stop, or glass-premium multipliers not supported by evidence.
- Mix scopes (equipment-only vs supply+install vs complete; CIF vs installed; PKR vs USD).
- Treat 2019–2024 historical figures as 2026 prices; auto-convert USD without current FX/duties.
- Price Hoist, Panoramic, Escalators/Walkways — **confirmed not offered by Dad (remove from product scope)**.
- Use Home/Hospital ranges before Dad supplies prices (Class C until then).

---

*Evidence sources: `docs/quotation-extraction.md`, `docs/quotation-pricing-analysis.md`, `docs/dad-pricing-verification.md`. External: Star Elevator Global (2025), Milano Technologies (2026), Liftech Global, Pak Elevator (2024–2025), Access Technologies (2025), Scribd quotation sample, GKMC/MTI Swabi KPPRA tender (2025), DUHS Karachi procurement, FUJI (Made-in-China).*