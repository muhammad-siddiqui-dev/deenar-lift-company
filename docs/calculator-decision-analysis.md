# Calculator Pricing — Decision Analysis

Status: **Draft for project-owner decision — no decisions are made in this document.**

This document analyses the unresolved pricing-model decisions listed in
[`docs/calculator-pricing-model.md`](./calculator-pricing-model.md) §19 ("Still Unresolved
Before Implementation"). It presents the evidence, what each side of the evidence supports and
does not support, and a set of possible approaches for each decision. Choosing between the
approaches is **the project owner's call**, and only the project owner may decide.

It is intended to be read alongside:

- [`docs/dad-pricing-verification.md`](./dad-pricing-verification.md) — Dad's recorded 2026 answers
- [`docs/quotation-pricing-analysis.md`](./quotation-pricing-analysis.md) — quotation comparability + price groups
- [`docs/calculator-quotation-analysis.md`](./calculator-quotation-analysis.md) — evidence gaps in the current calculator
- [`docs/quotation-extraction.md`](./quotation-extraction.md) — raw Q001–Q061 evidence
- [`docs/business-truth.md`](./business-truth.md) — confirmed business facts and pending calibration (P1)

---

## How to read this document

### Scope and constraints

- **Documentation and analysis only.** No website source code, no pricing model code, no copy
  changes are recommended or required to implement these decisions yet.
- **No decisions are finalised here.** Every decision below ends with
  **"Decision required from project owner."**
- **No data is invented.** Pricing figures, customer requirements, business policies and
  product capabilities are only used where they appear in the evidence documents above.
- **No `[UNRESOLVED]` item is silently resolved.** Each is explicitly carried forward.

### Source priority (from the pricing model spec)

1. **Dad 2026 (verified, verbal)** — strongest; supersedes conflicting quotation data.
2. **Recent quotations, consistent with Dad** — useful support.
3. **Older quotations / prior assumptions** — weaker; historical only.

### Evidence labels used below

- `[CURRENT VERIFIED — Dad 2026]` — stated by Dad, cross-checked in the 2026 pricing session.
- `[HISTORICAL]` — from the Q001–Q061 quotation dataset; may be stale or single-sample.
- `[UNRESOLVED]` — no verified data exists; a decision is required before implementation.

### Product catalog referenced

From `src/lib/products.ts` (read-only inspection): **Passenger** (steel + glass cabin lines),
**Home / Villa**, **Freight / Goods**, **Hospital**, **Panoramic**, **Escalators & Walkways**.
"Imported complete lift" appears in Dad's answers and the quotation record as a sales route,
not as a separate product page. A **hoist** appears only as a historical quotation line (Q034),
not in the catalog.

---

## Decision 1 — Which products should get an online price estimate?

### What we know

- `[CURRENT VERIFIED — Dad 2026]` Passenger steel lift (honouring a 630 kg reference): **PKR 2,800,000 – 4,500,000** incl. complete lift + installation + commissioning + testing + 1 yr warranty.
- `[CURRENT VERIFIED — Dad 2026]` Passenger **glass** cabin: **same as steel** — glass does not add a premium.
- `[CURRENT VERIFIED — Dad 2026]` Cargo/freight overall: **PKR 4,000,000 – 15,000,000** — a deliberately broad range, no segmentation given (see Decision 6).
- `[CURRENT VERIFIED — Dad 2026]` Home lifts: **offered** — no prices given. Hospital lifts: **offered** — no prices given.
- `[CURRENT VERIFIED — Dad 2026]` Imported complete lift: "depends on requirements, sizes, weight" — **quote only**.
- `[HISTORICAL]` Freight lift-only ~ PKR 4.9–5.5M for 1,600–2,000 kg / 6 stops, 2025–2026.
- `[HISTORICAL]` Hoist: single quotation Q034 at PKR 2,900,000 (alone in its class, no current figure).
- No current, verified 2026 figures exist for home, hospital, panoramic, hoist, or escalators.
- **Current calculator behaviour** (read-only inspection of `src/lib/pricing.ts`): exposes five
  types — home, passenger, freight, hospital, panoramic — and currently prints figures for all of
  them using base prices, per-stop adders, capacity and finish multipliers that are **not
  evidenced** (e.g. passenger base 8,500,000, freight 14,500,000, panoramic 10,200,000). This
  contradicts Dad's verified bands and will be reworked regardless of this decision.

### What the evidence supports

- **Passenger** (steel **and** glass) is the only product line with a current, verified, cross-checked
  price range for a defined reference configuration. It is the natural candidate for an online estimate.
- Glass cabin = *same as steel* is a verified business rule; a glass passenger estimate can use the
  same band without penalty.
- Treating **escalators** (no data at all) and **hoists** (single historical line, no current figure)
  as non-estimate products is clearly supported: there is nothing to estimate from.

### What the evidence does NOT support

- Producing an estimate for **home** or **hospital** lifts — Dad explicitly said "offered" without
  prices. "Offered" ≠ "priceable".
- Producing an estimate for **panoramic** using the current un-evidenced base price.
- Producing an estimate for **imported complete lifts** — Dad said this depends on requirements.
- Assuming glass adds a premium anywhere (it does not, per Dad 2026).

### Possible approaches

#### Option A — Estimate passenger only (steel + glass), everything else routed to a quote

- **Advantage:** every figure printed is backed by a verified 2026 price. Lowest risk of printing a wrong price publicly.
- **Disadvantage:** narrowest coverage; most product lines send users to a quote form.
- **Business risk:** minimal — no wrong numbers on the site; some visitors may not find a price for the product they wanted.
- **Customer UX impact:** clear, consistent; users of other products experience a short quote flow instead.
- **Implementation complexity:** low — one estimate path, one quote path.

#### Option B — Estimate passenger + cargo/freight as a broad, clearly-disclaimed band

- **Advantage:** covers the second-largest product line with a real (if wide) business range.
- **Disadvantage:** the 4–15M band risks confusing visitors; needs the Decision 6 handling to be defensible.
- **Business risk:** low-to-moderate; a wide band is honest but may look unhelpful next to passenger figures.
- **Customer UX impact:** mixed — freight buyers get *a* number, but a very wide one.
- **Implementation complexity:** low-to-medium (depends on Decision 6).

#### Option C — Estimate home/hospital too, using unverified or historical figures

- **Advantage:** full catalog coverage and a "sophisticated" look.
- **Disadvantage:** prints prices that are either made up or 1–5 years old with no current basis.
- **Business risk:** high — the site would publish numbers that Dad did not confirm, and quoted
  customers would see figures a survey cannot honour.
- **Customer UX impact:** misleading; erodes trust when the survey price differs sharply.
- **Implementation complexity:** low to ship, high to justify.
- **Not supported by the evidence.** Listed only to document that it is a *possible* route — not a defensible one under this project's constraints.

### Your recommendation

> Decision required from project owner.

We need to decide which product lines appear in the online estimator (Option A = passenger only,
Option B = passenger + disclaimed cargo/freight, or another combination), and which lines are
excluded from estimating for the time being.

---

## Decision 2 — Which products should be "Request a Quote" only?

### What we know

- `[CURRENT VERIFIED — Dad 2026]` Imported complete lifts: quote only ("depends on requirements, sizes, weight").
- `[CURRENT VERIFIED — Dad 2026]` Home and hospital lifts: offered, but **no prices** were provided.
- `[HISTORICAL]` Hoist: a single quotation (Q034); escalators: none; freight: figures exist but only
  broad/segment-unresolved (Decision 6).
- **Current calculator behaviour:** estimates exist for home, passenger, freight, hospital and
  panoramic. There is no "request a quote" product path today; the pricing page ends each estimate
  with a generic CTA.

### What the evidence supports

- Quote-only is the fully supported treatment for: **home/villa, hospital, hoist, escalators &
  walkways, and imported complete lifts**, given the complete absence of current verified prices.
- Quote-only is also supported for **panoramic** unless/until a verified figure exists (no Dad answer;
  `[UNRESOLVED]`).

### What the evidence does NOT support

- Pushing **passenger steel/glass** to quote-only — a verified price exists; hiding it would waste the
  strongest evidence we have.
- Sending every product to a quote form "so the sales team handles everything" — that would discard
  the verified passenger data and defeat the estimator's purpose.

### Possible approaches

#### Option A — Quote-only list: Home, Hospital, Panoramic, Hoist, Escalators, Imported complete lifts; Estimate list: Passenger

- **Advantage:** clean split, fully evidence-backed.
- **Disadvantage:** none significant; relies on a working quote/lead form for the excluded items.
- **Business risk:** minimal.
- **Customer UX impact:** predictable — visitors clearly see what is estimable.
- **Implementation complexity:** low.

#### Option B — Quote-only for the list above **plus** freight/cargo until Decision 6 resolves segmentation

- **Advantage:** avoids printing the unresolved 4–15M band.
- **Disadvantage:** cargo buyers get no number at all.
- **Business risk:** none added.
- **Customer UX impact:** fewer on-page prices for that line.
- **Implementation complexity:** low.

#### Option C — Quote-only list plus a "we answer within 2 business days" promise

- **Advantage:** sets expectations and may improve lead conversion.
- **Disadvantage:** the 48-hour response commitment is **not verified** by Dad or any evidence; publishing it would invent a business policy.
- **Business risk:** reputational if the promise is not met.
- **Customer UX impact:** improved expectation-setting if true.
- **Implementation complexity:** low, but requires confirming the promise is real.
- **Not supported by current evidence.** Listed as a possible variant only with prior confirmation.

### Your recommendation

> Decision required from project owner.

We need to decide the exact quote-only list (Option A, B, or a custom split), whether the quote
flow needs to collect specific information first (see Decision 5), and whether any service-level
promise (e.g. response time) is a genuine business policy that may be published.

---

## Decision 3 — How wide should the displayed price range be?

### What we know

- `[CURRENT VERIFIED — Dad 2026]` Passenger 630 kg reference: **PKR 2,800,000 – 4,500,000** (span ~1.7M, ratio ~1.6:1).
- `[HISTORICAL]` Group A (steel 630 kg) full set incl. discounts: ~2,205,000 – 3,700,000; non-discounted core: ~3,025,000 – 3,700,000.
- Dad gave a **single** range for passenger with no per-configuration splitting; range width guidance was
  one of the four questions left **blank** in the pricing session (Q29) — `[UNRESOLVED]`.
- **Current calculator behaviour:** computes a (fabricated) mid price and prints **low = 0.9×mid,
  high = 1.15×mid** (from `src/lib/pricing.ts` `LOW_FACTOR`/`HIGH_FACTOR`). Neither the mid nor the
  ±factors are evidenced.

### What the evidence supports

- The displayed low–high for passenger should be **consistent with the verified band** for the
  reference configuration (nothing narrower than evidence allows).
- Range components should derive from real sources of spread: discount (up to 5% `[CURRENT
  VERIFIED]`), site-specific shaft/civil conditions, option choices, structure scope. A range that
  ignores these is narrower than the truth.

### What the evidence does NOT support

- Choosing "±10% / +15%" (or any specific factor) **as if it were evidenced** — there is no basis for any particular factor.
- Printing a computed **midpoint** as the "price" — there is no verified base/mid value for each config.
- Assuming narrower ranges are "more accurate" — accuracy comes from verified band edges, not from squeezing the window.

### Possible approaches

#### Option A — Show the verified band directly (passenger: 2.8M–4.5M for the reference config); widen only where a verified factor adds genuine spread (e.g. imported-cabin note)

- **Advantage:** fully honest; every edge traceable to evidence.
- **Disadvantage:** a 1.6:1 spread looks wide to visitors who expect a point price.
- **Business risk:** low; the survey will usually land inside the band.
- **Customer UX impact:** honesty over precision — requires copy explaining *why* the range is wide.
- **Implementation complexity:** low.

#### Option B — Parameterised band engine: low/high anchor to the verified band and to *only* verified adjustment factors, with factors stored in one tunable table

- **Advantage:** flexible; edges stay evidence-anchored but the implementation can absorb future verified data (e.g. per-capacity bands) without a code change.
- **Disadvantage:** slightly more machinery; same wide display as Option A until new evidence arrives.
- **Business risk:** low.
- **Customer UX impact:** same as A.
- **Implementation complexity:** medium.

#### Option C — Keep a narrow, fixed-width band for visual appeal (e.g. ±10/15%)

- **Advantage:** looks tidy and precise.
- **Disadvantage:** fabricates precision the business cannot honour; misleading.
- **Business risk:** high — survey prices will routinely fall outside the printed narrow band.
- **Customer UX impact:** confident-looking but wrong.
- **Implementation complexity:** low.
- **Not supported by the evidence.** Listed to document the "sophisticated-looking" trap explicitly.

### Your recommendation

> Decision required from project owner.

We need to decide whether ranges are displayed verbatim from the verified band (Option A),
anchored via a parameter table with only verified factors (Option B), or some custom policy — and
to confirm no unverified midpoint/fixed-width approach will be used.

---

## Decision 4 — When should the calculator stop estimating and force a formal quotation?

### What we know

- `[CURRENT VERIFIED — Dad 2026]` Extra floor/stop pricing is "up to PKR 300,000"; the stop-count
  question **> 9 stops was left blank** — no verified figure beyond 9 stops (`[UNRESOLVED]`).
- `[CURRENT VERIFIED — Dad 2026]` Imported complete lifts: quote only.
- `[HISTORICAL]` Quotation evidence exists for up to 9 stops (Q051). No quotation in the dataset exceeds 9 stops.
- Home, hospital, panoramic, hoist, escalators, imported lifts: no verified prices (Decisions 1–2).
- Freight: only an unresolved broad range (Decision 6).

### What the evidence supports

- A forced-quote boundary at **stops > 9**, enforced from verified data bounds.
- Forcing a quote whenever the configuration enters a product line with no verified price
  (home, hospital, panoramic, hoist, escalators, imported lifts).
- Forcing a quote on configurations whose **capacity** steps outside verified reference facts
  (e.g. passenger beyond the 630 kg reference) — capacity steps were not priced by Dad (`[UNRESOLVED]`).

### What the evidence does NOT support

- Inventing thresholds such as "quote if estimate > PKR X" — no verified ceiling exists.
- Continuing to estimate into 10+ stop territory using made-up per-stop adders.
- Silently switching to a guess when an input is out of range instead of a clear handoff.

### Possible approaches

#### Option A — Hard stop: any out-of-evidence configuration hides the number and shows a quote request

- **Advantage:** never prints an unsupported figure.
- **Disadvantage:** abrupt; no budget hint at all.
- **Business risk:** minimal.
- **Customer UX impact:** clear but blunt; needs good copy explaining why.
- **Implementation complexity:** low.

#### Option B — Soft stop: show the estimate with a prominent "out of range — needs formal quotation" banner and a quote prompt

- **Advantage:** users still get orientation while the official figure is a quote.
- **Disadvantage:** the banner must be explicit to avoid it being read as final.
- **Business risk:** low-to-moderate.
- **Customer UX impact:** more helpful than A, provided the caveat is prominent.
- **Implementation complexity:** low-to-medium.

#### Option C — Hybrid: estimate where evidence exists, soft-stop the rest, and *also* start a lead-capture quote form pre-filled with the user's selections

- **Advantage:** turns the boundary into a conversion step.
- **Disadvantage:** needs the quote form (Decision 5) and any data-retention considerations.
- **Business risk:** low.
- **Customer UX impact:** smooth handoff.
- **Implementation complexity:** medium.

### Your recommendation

> Decision required from project owner.

We need to decide the exact stop conditions and the behaviour at the boundary (Option A hard stop,
Option B soft stop with banner, Option C hybrid with lead capture) — including confirmation that
stops > 9, unverified capacities, and all quote-only product lines always route to a quotation.

---

## Decision 5 — What information should the customer be asked for?

### What we know

- `[CURRENT VERIFIED — Dad 2026]` Pricing is scope-dependent on: lift type, capacity/weight
  (630 kg passenger reference), number of stops, shaft/structure (height × width × depth), and
  option choices (imported cabin up to +50%, extra stops up to 300k each).
- `[CURRENT VERIFIED — Dad 2026]` Business terms a customer may need to know: payment 40/20/20/20,
  delivery ~2–3 months, free maintenance 1 yr, warranty 1 yr, AMC PKR 10,000/month after warranty,
  discount up to 5%.
- **Current calculator behaviour:** asks for **type, building type, capacity (persons), stops,
  finish** (from `src/components/PricingCalculator.tsx`). Building type and "finish" (standard /
  premium / luxury tiers) have **no evidence**; capacity-as-persons conflicts with the kg-based
  reference; and person-capacities are not tied to verified price steps.

### What the evidence supports

- **Genuinely price-relevant inputs** (each moves a verified or historical price driver):
  lift product line; capacity (kg, not persons); number of stops; structure height/size; option
  choices (imported vs local cabin, extra stops).
- Communicating verified **business terms** (payment plan, delivery, warranty, maintenance, AMC)
  as static, evidence-backed copy.

### What the evidence does NOT support

- Asking for **building type** (residential/apartment/commercial/industrial/hospital multipliers
  1.0–1.18 in code) — no evidence these multipliers exist.
- Asking for **finish tier** as a priced input (1.0/1.28/1.58 multipliers in code) — no evidence.
- Asking for **speed** or **travel height** as priced inputs — no verified price effect; these are
  product/spec characteristics, while travel height (stops) is already captured.
- Presenting **persons-based** capacity as if it were a price step (the kg reference is 630 kg).

### Possible approaches

#### Option A — Minimal, evidence-driven inputs: product line, capacity (kg), stops, structure height — plus a free-text quote form behind the scenes

- **Advantage:** every field maps to a real price driver; nothing misleading on the form.
- **Disadvantage:** omits prettier-but-unverified fields (building type, finish).
- **Business risk:** minimal.
- **Customer UX impact:** a shorter, plainer form; lower friction.
- **Implementation complexity:** low.

#### Option B — The above **plus** option checkboxes (imported cabin, door type, generator, ARD, VVVF door drive) treated as "affects quote, shown as notes" rather than as priced inputs

- **Advantage:** richer context for the sales team and the user.
- **Disadvantage:** option pricing is historical only (Decision 8); must not be presented as final numbers.
- **Business risk:** low if options stay as quote-scoping fields.
- **Customer UX impact:** slightly longer form but feels product-real.
- **Implementation complexity:** medium.

#### Option C — Full current-style form (building type + finish tiers + persons) with hidden "best-guess" multipliers so it looks detailed

- **Advantage:** "sophisticated" impression.
- **Disadvantage:** prints numbers derived from unverified multipliers.
- **Business risk:** high.
- **Customer UX impact:** misleading.
- **Implementation complexity:** low to ship, high to justify.
- **Not supported by the evidence.**

### Your recommendation

> Decision required from project owner.

We need to decide the final input set (Option A minimal, Option B + option scoping fields, or a
custom list) and confirm that building-type/finish-tier/persons-based inputs will not be used as
priced factors.

---

## Decision 6 — How should the cargo/freight PKR 4M–15M range be handled?

### What we know

- `[CURRENT VERIFIED — Dad 2026]` Cargo/freight: **PKR 4,000,000 – 15,000,000** overall; Dad did
  **not** segment by capacity/stops (`[UNRESOLVED]` — segmentation is the core of this decision).
- `[HISTORICAL]` Freight quotations: ~4.0M–5.5M for 1,000–2,000 kg, 3–6 stops (Q013 family, Q004,
  Q003), lift-only, structure often excluded. These sit at the *low end* of Dad's overall range.
- `[HISTORICAL]` Component evidence for heavy freight (Q033-Q034): machine, door units, structure
  for 2,000 kg at 98 ft ≈ 2.8M — the top end of Dad's range likely reflects heavy capacity,
  tall/large shafts, and imported components.
- **Current calculator behaviour:** freight base 14,500,000 + 680,000/stop with capacity up to
  3,000 kg via factor table — un-evidenced (see Decision 1).

### What the evidence supports

- The 4–15M range is **genuinely the business's overall cargo range** and must not be shrunk or
  made to look precise.
- The historical quotations cluster at the **lower end** (1,000–2,000 kg-ish, few stops), while
  the upper end reflects heavier/bigger/specialised configurations.
- Presenting a **single mid number** for cargo would be false precision.

### What the evidence does NOT support

- Building a cargo **formula** (e.g. base + per-kg × stops) — no verified math exists to derive one.
- Printing "PKR 4M–15M" as if it were a usable estimate for a specific request — it is a business
  range, not a configured estimate.
- Combining the historical cargo figures with current data as if current — they are `[HISTORICAL]`.

### Possible approaches

#### Option A — Cargo → Request a Quote only (no band printed)

- **Advantage:** zero risk of printing a misleading freight figure.
- **Disadvantage:** freight buyers get no number.
- **Business risk:** minimal.
- **Customer UX impact:** cleanest but emptiest.
- **Implementation complexity:** low.

#### Option B — Print the band (4M–15M) only as a coarse "budget range" with a strong disclaimer that freight is heavily scope-dependent and requires a quotation

- **Advantage:** uses the one verified cargo fact.
- **Disadvantage:** band is ~3.75:1 wide; some users may treat it as a real estimate.
- **Business risk:** low-to-moderate with an explicit caveat.
- **Customer UX impact:** honest but wide.
- **Implementation complexity:** low.

#### Option C — Print the band, and when the user enters capacity/stops within the historical cluster (say 1–2,000 kg, ≤6 stops), surface a labelled **historical reference** sub-range (≈4.5–5.5M) while still routing to a quote

- **Advantage:** guidance without claiming currency; uses `[HISTORICAL]` data transparently.
- **Disadvantage:** risk that a clearly-labelled historical figure is still read as current; needs
  precise copy; Dad's segmentation remains unresolved.
- **Business risk:** moderate unless the label is unmistakable.
- **Customer UX impact:** more useful, but only if the historical label is prominent.
- **Implementation complexity:** medium.

### Your recommendation

> Decision required from project owner.

We need to decide how cargo/freight is surfaced (Option A quote-only, Option B coarse disclaimed
band, Option C band + labelled historical sub-range), and confirm no cargo price **formula** will
be implemented until Dad provides per-capacity/stops data.

---

## Decision 7 — How should "extra floor/stop — up to PKR 300,000" be handled?

### What we know

- `[CURRENT VERIFIED — Dad 2026]` Extra floor/stop: **"up to PKR 300,000"** — a ceiling, not a fixed per-stop price.
- `[HISTORICAL]` Q021 controlled pair (same lift family, glass, 630 kg): G+2 = 4.0M vs G+3 = 4.3M → +300,000/floor. This is the **only** near-controlled per-stop data point and it confirms the "up to 300k" magnitude.
- `[HISTORICAL]` Group A family (5/6/7/9 stops) does **not** show a clean linear per-stop trend — price differences there are confounded by discounts and dates.
- **Current calculator behaviour:** treats per-stop as a **hard, fixed adder** in the price math (passenger 420,000/stop, freight 680,000/stop, home 210,000/stop). These fixed adders are not evidenced.

### What the evidence supports

- Stops **do** move price in the same direction (more stops → higher price).
- The magnitude is **"up to ~300,000"** per additional floor/stop — best single anchor.
- The per-stop effect is bounded and should be handled as a ceiling, not a mechanical addition on top of an already-verified band.

### What the evidence does NOT support

- Making "PKR 300,000" a **fixed mandatory adder** applied per stop in the math.
- Applying the phrase mechanically beyond verified bounds (e.g. > 9 stops, Decision 4).
- Assuming the Group A family's scatter implies any other per-stop rate.

### Possible approaches

#### Option A — Do not add per-stop charges at all; the verified band already spans a range of configurations; show "up to PKR 300,000 per extra floor/stop" as an informational note only

- **Advantage:** simplest; aligned with Dad giving one band rather than a floor-rate.
- **Disadvantage:** stops shown as informational only; no arithmetic response to stop count.
- **Business risk:** low as long as the note is visible.
- **Customer UX impact:** the number doesn't tick up with stops, which may disappoint — mitigated by the note and wide band.
- **Implementation complexity:** low.

#### Option B — Keep an **optional, bounded, labelled** per-stop note: when the user selects extra stops, show "may add up to ~300,000 per floor" as an *upper-bound indicator*, not a line item

- **Advantage:** communicates headroom honestly; prevents over-reliance on the wide band.
- **Disadvantage:** risks being read as a guaranteed adder if copy is weak.
- **Business risk:** low with explicit "up to / ceiling" wording.
- **Customer UX impact:** more informative than A.
- **Implementation complexity:** low.

#### Option C — Implement a parameterised per-stop factor in the config table with the value set to 0 (enabled later when Dad verifies a real rate) so the engine is future-proof

- **Advantage:** technical flexibility; no wrong number printed today.
- **Disadvantage:** a silent 0 is indistinguishable from Option A; the parameter is tempting to fill with guesses.
- **Business risk:** none today; requires discipline not to populate with unverified rates.
- **Customer UX impact:** same as A.
- **Implementation complexity:** medium.

### Your recommendation

> Decision required from project owner.

We need to decide whether extra stops enter the arithmetic at all (Option A note-only, Option B
bounded indicator, Option C 0-valued parameter for future), and confirm that **"up to 300,000" is
a ceiling — never a fixed on-top adder in the calculation**.

---

## Decision 8 — How should options / add-ons (door type, cabin/finish, imported cabin, machine type, ARD, generator, VVVF door drive, TFT/display) be handled?

### What we know

- `[CURRENT VERIFIED — Dad 2026]` Imported cabin: **"up to 50% above local"** — a ceiling.
- `[HISTORICAL]` Imported-cabin delta on a matched pair (Q028): ~+1,050,000 ≈ +30%; consistent with the "up to 50%" ceiling.
- `[HISTORICAL]` ARD: ~150,000 (Q049, Q051; Q058 shows 200,000). Generator + fuel + branch: ~150,000 (Q037/Q038). VVVF door drive: 200,000 (Q033). Door units: MS book ~85,000 / SS auto ~120,000 (Q031/Q033). Swing (MS) vs automatic sliding (SS) pairing differs by ~700,000 (Q045 vs Q046 — but door, finish and finish-spec change together, so the delta is **conflated**, not a clean option price).
- `[HISTORICAL]` Machine type (geared vs gearless): no clean matched pair; tasteful as class context only (freight Q034 vs cargo-family traction).
- TFT/display, LED/false-ceiling items appear in quotation **descriptions only** — never priced separately.
- Dad left current *option price* questions (ARD, generator, VVVF door drive) **blank** in the pricing session — `[UNRESOLVED]`. The only *current* option figures are the two ceilings: imported cabin (up to +50%) and extra stop (up to 300k).

### What the evidence supports — proposed A/B/C classification

**A. Defensibly presentable today (as ceilings / notes, not arithmetic):**
- **Imported cabin** — "up to 50% above local" `[CURRENT VERIFIED]`, with the historical ~+30% pair as supporting context `[HISTORICAL]`.
- **Extra floor/stop** — "up to PKR 300,000" `[CURRENT VERIFIED]` (Decision 7).

**B. Known products, but pricing insufficient for a reliable current adjustment:**
- Door type (manual MS vs automatic sliding SS), cabin finish/material (MS powder-coat vs SS-304),
  machine type (geared vs gearless), ARD, generator/power backup, VVVF door drive. Each has
  historical values (n ≤ 3) that are dated and/or conflated; **no current verified option prices**.
- These may appear in the quote request as scoping questions, **not** as online-priced line items.

**C. Quote-request only / informational (no price basis at all):**
- TFT/LCD/LED displays, false ceilings, destination dispatch, stone/laminate interiors, glass
  thickness choices, speed selection, imported complete lift — appear as descriptions, never priced;
  no verified or usable historical price exists.

### What the evidence does NOT support

- Printing any **B/C option with a PKR number** derived from historical tail values.
- Treating the conflated Q045/Q046 pair (−700k) as a clean "doors cost difference".
- Introducing the current calculator's **finish tiers** (standard/premium/luxury 1.0/1.28/1.58)
  or building-type multipliers as option pricing.
- Encoding "up to 50%" as a fixed +50% line item (it is a ceiling "up to").

### Possible approaches

#### Option A — Publish only the two verified ceilings as notes (imported cabin, extra stop); collect B/C options as quote-request scoping fields with zero on-page pricing

- **Advantage:** truthful; complete separation of verified notes vs quoted options.
- **Disadvantage:** on-page option detail is thin.
- **Business risk:** minimal.
- **Customer UX impact:** clean; many choices deferred to the quote.
- **Implementation complexity:** low.

#### Option B — A shows verified ceilings; B options are shown labelled **[HISTORICAL reference]** with explicit "confirm on quote" wording (e.g. doors, machine, ARD, generator, drive)

- **Advantage:** gives the sales team and buyer historical order-of-magnitude context.
- **Disadvantage:** historical labels can still be misread as current; requires strong copy discipline.
- **Business risk:** moderate — only safe with unambiguous labelling.
- **Customer UX impact:** richer.
- **Implementation complexity:** medium.

#### Option C — Fully itemised online option pricing by numericising historical tails into a current table

- **Advantage:** looks sophisticated and detailed.
- **Disadvantage:** fabricates current prices from stale/conflated samples.
- **Business risk:** high — published numbers Dad did not verify.
- **Customer UX impact:** misleading.
- **Implementation complexity:** low to ship, high to justify.
- **Not supported by the evidence.**

### Your recommendation

> Decision required from project owner.

We need to decide the classification (proposal: A = the two verified ceilings as notes; B = known
options as quote-scoping fields only; C = informational only), whether any historical option figures
appear on-page at all (Option A vs B), and confirm that no option line item with a current PKR price
is published without verified supporting data.

---

## Decision Checklist

| # | Decision | Evidence status | What we need to decide |
|---|----------|-----------------|------------------------|
| 1 | Which products get an online estimate | **Strong** for passenger (steel+glass); **Insufficient** for home/hospital/panoramic/hoist/escalators; **Moderate** for cargo | Which product lines estimate vs quote (Option A/B) |
| 2 | Which products are Request-a-Quote only | **Strong** | Quote-only list and whether a response-time promise is publishable |
| 3 | Width of displayed price range | **Moderate** (verified band exists; width policy `[UNRESOLVED]`) | Verbatim band vs parameter table vs custom policy; no unverified midpoint/±factor |
| 4 | When to stop estimating and force a quote | **Moderate** (boundary facts verified; exact triggers `[UNRESOLVED]`) | Stop conditions + hard-stop/soft-stop/hybrid behaviour |
| 5 | What customer inputs to collect | **Strong** for price drivers (type, capacity-kg, stops, structure, options); **Insufficient** for building type / finish tiers | Final input set; drop unverified inputs |
| 6 | Cargo/freight 4M–15M handling | **Weak-to-Moderate** (one verified overall band; no segmentation) | Quote-only vs disclaimed band vs labelled historical sub-range; no formula |
| 7 | Extra floor/stop "up to 300,000" | **Moderate** (verified ceiling + one controlled pair) | Note vs bounded indicator vs 0-valued parameter; ceiling never fixed adder |
| 8 | Options/add-ons handling | **Strong** for the two ceilings (imported cabin, extra stop); **Weak** for door/cabin/machine/ARD/generator/drive; **Insufficient** for TFT/display items | Confirm A/B/C classes; whether historical option figures appear on-page |

---

## Facts We Must Not Invent

Applied wherever the calculator is built; repeated here to be unambiguous:

1. **Passenger (steel and glass, 630 kg reference) band stays PKR 2,800,000 – 4,500,000**
   `[CURRENT VERIFIED — Dad 2026]`. Glass adds **no** premium.
2. **Cargo/freight overall band PKR 4,000,000 – 15,000,000** `[CURRENT VERIFIED — Dad 2026]`.
   No cargo price formula, no per-kg/per-stop math, until Dad supplies segmentation.
3. **"Up to PKR 300,000"** per extra floor/stop is a **ceiling** — never a fixed per-stop adder.
4. **"Up to 50%"** on imported cabin is a **ceiling** — never a forced +50% line item.
5. **Payment 40/20/20/20**, **delivery ~2–3 months**, **free maintenance 1 yr**, **warranty 1 yr**,
   **AMC PKR 10,000/month after warranty**, **discount up to 5%** — current verified terms only.
6. **Home, hospital, panoramic, hoist, escalators, imported complete lifts**: no current prices —
   estimate/quote decisions only (Decisions 1–2, 4).
7. **Historical figures are labelled `[HISTORICAL]`** wherever used (structures ~400k→2.8M by
   height, freight ~4.9–5.5M, option deltas) and never presented as current.
8. **No building-type multipliers** (1.0–1.18), **no finish-tier multipliers** (1.28/1.58),
   **no ±%/mid price factors** (0.9/1.15), **no persons-based capacity steps** — all unverified and
   removed from any future math.
9. **No response-time/service-level promises** on the page unless Dad confirms them as business policy.
10. **Nothing that is "offered" is assumed "priceable."** Offering a product ≠ being able to quote it online.
11. **No `[UNRESOLVED]` item is resolved in code or content** until the project owner decides and the
    decision is recorded here and in `calculator-pricing-model.md`.

---

## Reporting constraints satisfied

- **File created:** `docs/calculator-decision-analysis.md` (this file).
- **Files modified:** none other than this new file.
- **Files inspected (read-only, not modified):** `docs/calculator-pricing-model.md`,
  `docs/dad-pricing-verification.md`, `docs/quotation-pricing-analysis.md`,
  `docs/calculator-quotation-analysis.md`, `docs/quotation-extraction.md`,
  `docs/business-truth.md`, `src/lib/pricing.ts`, `src/components/PricingCalculator.tsx`,
  `src/app/pricing/page.tsx`, `src/lib/products.ts`.
- **Source code changed:** **no.**
- **Final calculator decisions made:** **none.** Every decision above is explicitly deferred to the
  project owner via **"Decision required from project owner."**