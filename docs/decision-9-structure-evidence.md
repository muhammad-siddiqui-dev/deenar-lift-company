# Decision 9 — Structure Inclusion Evidence

Status: EVIDENCE ONLY — decision input for the calculator's structure handling (flagged as unresolved in `docs/calculator-sdd.md` §17 #7 and §18 #9). This document quotes and classifies evidence only; it does not set policy and creates/modifies nothing but itself.

Evidence labels used: **[DEENAR CURRENT]** = Dad's verified 2026 facts (`docs/dad-pricing-verification.md`); **[DEENAR HISTORICAL]** = quotation evidence Q001–Q061 (`docs/quotation-extraction.md`, `docs/quotation-pricing-analysis.md`); **[INSUFFICIENT]** = cannot be decided from evidence.

---

## Question

Does the current verified Passenger (630 kg) price band **PKR 2,800,000 – 4,500,000** [DEENAR CURRENT] include the lift structure, or is the structure a **separate priced component** that is added/estimated alongside the lift band?

This determines how the calculator presents structure: (A) hidden inside the band, (B) a separate verified component (R3, 20–50 ft), or (C) no online estimate until confirmed.

---

## Evidence Reviewed

- All 61 quotation files (Q001–Q061), read via `docs/quotation-extraction.md` (raw, verbatim) and `docs/quotation-pricing-analysis.md` (comparability Groups A–F). The original quotation files are NOT in this repo (folder holds only `business-evidence/quotations/README.md`; originals referenced at `C:\Users\DELL\Documents\Sajjad Naseem\Quotations\`), so this review is document-based.
- Directly inspected for this decision:
  - **630 kg passenger quotations** — Q001, Q002 (glass), Q018, Q021/Q022 (glass pair), Q027, Q039, Q045, Q047 (glass), Q049, Q051, Q059/Q060 (11 files → 9 distinct after merging Q021/Q022 and Q059/Q060 duplicate families).
  - **Structure-line references that inform format** — Q009 (550 kg, +600,000), Q011 (550 kg, +450,000), Q026 (450 kg, +400,000), Q029-family (cargo, +2,800,000), Q034 (hoist, +1,800,000), and standalone structure docs Q023 (700,000), Q024 (1,150,000), Q052 (2,800,000).
  - **Lift-only quotes stating structure exclusion** — Q003/Q053, Q010, Q013, Q048.
- Owner record: `docs/dad-pricing-verification.md` P4, P6, §2.4, §3 (scope table), §§ Verified Facts 4 / 7–10.
- Current model treatment being tested: `docs/calculator-pricing-model.md` §4 input row "Structure", §5 facts 7–10, §8 (Structure Pricing — Separate Component).

---

## Explicit Structure-Inclusive Evidence

Evidence where the printed amount **positively includes** the structure:

1. **Q002** [DEENAR HISTORICAL] — the **only quotation in the dataset that prints structure + lift + glass as one combined total**: PKR 4,100,000. Its structure field carries a spec (4"×4" pipe 4 mm + 2"×4" channel) but no separate structure price, so the structure is inside the single figure. It is a 630 kg passenger-glass lift, 4 stops, dated 18/11/2025. Source: `quotation-pricing-analysis.md` §2/Q002 and §7 Table C note; `quotation-extraction.md` Q002.
2. **No Dad statement** says the 2,800,000–4,500,000 band includes structure. Dad's §3 scope table marks "Structure / shaft steel work — **Included by Deenar**" [DEENAR CURRENT], which is an **ownership/supply statement** ("lift company supplies; complete material", P6), not a statement that the band's figure covers it. When asked what the price includes, Dad enumerated: **"complete lift including installation, commissioning, testing and one year warranty"** — *structure is not on that list* [DEENAR CURRENT, dad-pricing-verification §3 Q5 / Fact 4].

**Net: exactly one quotation (Q002) is explicitly structure-inclusive; no explicit owner statement that the band includes structure.**

---

## Explicit Structure-Separate Evidence

Where structure is a distinct priced line or expressly excluded from the lift amount:

1. **Separate structure line inside a lift quotation** [DEENAR HISTORICAL]:
   - Q009 — 550 kg passenger: lift PKR 3,200,000 + structure PKR 600,000 (4"×4" pipe 4 mm + 4"×2" channel).
   - Q011 — 550 kg passenger: lift Rs 2,900,000 + structure Rs 450,000 (~40 ft).
   - Q026 — 450 kg passenger: lift Rs 2,250,000 + structure Rs 400,000 (~20 ft).
   - Q047 — **630 kg passenger-glass**: lift PKR 2,900,000 + structure PKR 600,000 (~50 ft).
   - Q029/Q030/Q056 — cargo: lift 5,500,000 − 500,000 + structure 2,800,000 (98 ft industrial).
   - Q034 — hoist: hoist 2,900,000 + structure 1,800,000 (98 ft).
   In every one of these, the lift/hoist amount stands WITHOUT structure and structure is added as a separate line with its own spec and (often) 100% advance payment terms.
2. **Standalone structure documents** (no lift content at all) [DEENAR HISTORICAL]: Q023 (PKR 700,000, ~50 ft), Q024 (PKR 1,150,000, ~80 ft), Q052 (PKR 2,800,000, 98 ft industrial 2000 kg).
3. **Lift-only documents explicitly placing structure outside the price** [DEENAR HISTORICAL]: Q003/Q053 (structure "Not included"), Q010 (structure "covering by owner" — Fishri family), Q013 (structure/channels by client), Q048 (companion structure document = Q024).
4. **Company quotation format**: when structure was part of a job, the company's own format consistently priced it as its own line. The 630 kg Group A quotations (Q001, Q018, Q027, Q039, Q045, Q049, Q051, Q059/Q060) print structure as "Not specified" — they are lift supply-and-installation figures with no structure content — and `quotation-pricing-analysis.md` §3/Group A classifies that scope as lift-only. [DEENAR HISTORICAL]
5. **Dad's own separate structure band** [DEENAR CURRENT]: Dad provided structure as its **own** current price band — 20–50 ft: PKR 600,000 – 1,000,000, "as per height and width and depth", normally supplied by the lift company. A component the owner prices separately from the lift band (P4, fact 7–10).

**Net: the company's quotation format (6 in-quotation structure lines + 3 standalone docs) and Dad's separate structure band both treat structure as a distinct priced item. Only Q002 deviates.**

---

## Comparable Quotation Evidence

- **630 kg passenger steel, structure-absent figures** [DEENAR HISTORICAL]: Q001 3,700,000 · Q018 3,150,000 · Q027 2,205,000 (discount-adjusted; strict range excludes it) · Q039 3,500,000 · Q045 3,200,000 · Q049 3,025,000 · Q051 3,375,000 · Q059/Q060 3,500,000. Strict non-discount range ≈ **3,025,000 – 3,700,000**. These figures — with NO structure component — already sit **inside** Dad's current band (2,800,000–4,500,000).
- **630 kg passenger glass, all three scope treatments** [DEENAR HISTORICAL]: structure-excluded Q021/Q022 = 4,000,000 (G+2) / 4,300,000 (G+3); structure-separate Q047 = 2,900,000 + 600,000; structure-inclusive Q002 = 4,100,000 (combined). Each of these also lands inside the band.
- **Paired revision within one lift family (Fishri, same lift)** [DEENAR HISTORICAL]: Q010/Q012 print the identical lift at **3,200,000 WITHOUT structure** (owner covering), while Q009 prints the same lift at **3,200,000 + 600,000 structure** new-structure line. This is the cleanest same-lift comparable: the lift price does NOT absorb the structure when structure is in scope — it is added on top. Q047 (630 kg glass, 2,900,000 lift) repeats the pattern at the 630 kg passenger reference.
- **Band arithmetic check** [derived from the figures above — inference, not a printed fact]: Group A's strict lift-only range (≈3,025,000–3,700,000) already fills the lower-to-mid band. If today's verified structure band (600,000–1,000,000) were added to 630 kg passenger totals, combined values would reach ≈3,600,000–4,700,000 — pressing the TOP edge above the 4,500,000 ceiling. That is inconsistent with comfortably reading the band as structure-inclusive; it is consistent with reading the band as lift-only.
- **Contrary point** [DEENAR HISTORICAL]: Q002 (4,100,000 including structure) also fits inside the band, so the band's width can host at least one structure-inclusive 630 kg total. A structure-inclusive reading cannot be ruled out numerically at the top of the range based on figures alone.

---

## What We Can Defensibly Conclude

- **Confirmed**:
  - Structure exists as its own priced product under Deenar's current practice — current verified band 600,000–1,000,000 for 20–50 ft, "as per height width depth", normally supplied by the lift company [DEENAR CURRENT].
  - Deenar's own quotation format prices structure as a separate line whenever it is part of a job (6 in-quotation lines + 3 standalone structure docs) [DEENAR HISTORICAL].
- **Strongly supported** (but inferential, not literally printed):
  - Dad's passenger 2,800,000–4,500,000 band behaves like a **lift-only / structure-excluded** figure: the historical structure-absent Group A figures (≈3,025,000–3,700,000) already sit inside it, and structure is added separately by the company when in scope. The Fishri same-lift revision (Q009 vs Q010/Q012) and Q047 demonstrate the "lift price does not include its own structure" pattern in the 550/630 kg passenger class.
- **Ambiguous**:
  - Q002 — a single 630 kg glass quotation with one combined total that does include the structure — sits inside the band.
  - Dad's §3 mark "Structure — Included by Deenar" (supply responsibility) can be misread as "included in the price"; the section-3 inclusion list does not mention structure at all.
  - No direct owner statement either way: nobody has confirmed or denied that the 2,800,000–4,500,000 covers a typical structure.
- **Not supported**:
  - Any explicit statement that "the 2,800,000–4,500,000 includes the structure" — there is no such quotation wording or Dad statement.
  - Conversely, it is also **not explicitly stated** that the band excludes structure; the separation conclusion is inferred from quotation format plus where the historical figures land. Label each use of that inference accordingly.

---

## Decision Options

### Option A — Treat the band as structure-INCLUSIVE
- **What it means:** the passenger steel/glass 630 kg estimate = the 2,800,000–4,500,000 band, structure implied inside; no separate structure component is added for passenger estimates regardless of the structure toggle.
- **Evidence for:** Q002 (the only explicitly combined-total quotation) sits inside the band; Dad's §3 marks structure "Included by Deenar"; simplest customer message ("this price includes the lift and its structure").
- **Evidence against:** every other quotation the company issued prices structure separately (Q009/Q011/Q026/Q047 + Q029-family/Q034, plus standalone Q023/Q024/Q052); Group A's lift-only figures already fill the band; Dad's standalone 600k–1M structure band becomes meaningless; no owner statement confirms inclusiveness.
- **Risk: HIGH.** At the low end, 2,800,000 presented as structure-inclusive is below the historical lift-only range (≈3,025,000) while also implicitly claiming to cover a 600k–1M structure. Not defensible from the quotation record.

### Option B — Treat the band as structure-EXCLUDED; structure is a separate verified component (RECOMMENDED default pending owner confirmation)
- **What it means:** 2,800,000–4,500,000 = the lift: complete lift incl. installation, commissioning, testing, 1-yr warranty (Dad Fact 4). Structure is its own verified component: 600,000–1,000,000 for 20–50 ft; toggle default "Deenar supplies structure"; choosing "Owner civil works" removes the structure component; structure > 50 ft → quote request. No structure figure is added into the lift band and none is implied by it.
- **Evidence for:** consistent company quotation format (structure always separate when in scope); Group A lift-only figures sitting inside the band; Fishri same-lift revision (Q009 vs Q010/Q012); Q047 at 630 kg; Dad's separate current structure band; Dad's price-inclusion list (structure absent).
- **Evidence against:** Q002 combined total; §3 "Included by Deenar" supply mark; no explicit owner statement that the band excludes structure.
- **Risk: LOW–MODERATE.** The estimate then surfaces two numbers when Deenar supplies structure (lift 2.8–4.5M + structure 0.6–1.0M; combined top ≈5.5M), and the combined top exceeds the highest historical 630 kg package (Q002 4.1M). Mitigation: label the components and keep them non-doubled — lift band shown as "lift", structure shown under its own heading only when "Deenar supplies" is selected (consistent with `calculator-pricing-model.md` §4/§8 and SDD R1/R2/R3).

### Option C — Quote-only / uncertain (do NOT estimate passenger 630 kg until confirmed)
- **What it means:** hold the whole passenger estimate behind "Request a quotation" because the inclusion question is unresolved.
- **Evidence for:** the ambiguity is real (Q002 + §3 marks vs quotation format); the SDD already routes uncertain scope to quotation.
- **Evidence against:** Dad gave an explicit verified band for passenger 630 kg; discarding it removes the calculator's only priceable core, contradicts SDD R1/R2 (verbatim band), and is disproportionate to an ambiguity about a sub-scope, not about the band itself.
- **Risk: LOW to the customer, HIGH to the product** (loses the calculator's core estimate entirely).

---

## Recommended Temporary Treatment

Until the owner confirms the inclusion question, do **not claim** in estimate wording that the band includes or excludes structure. Concretely:

1. Render the passenger 630 kg steel/glass estimate as the verified **lift band (2,800,000–4,500,000)**, scope labelled per Dad Fact 4 (complete lift incl. installation, commissioning, testing, 1-yr warranty) — structure not mentioned inside that sentence.
2. Keep structure as the **separate verified component (R3)**: 600,000–1,000,000 for 20–50 ft, default "Deenar supplies structure"; "Owner civil works" removes the component; above 50 ft → quote request. Matches `calculator-pricing-model.md` §4/§8 and SDD R3.
3. In the estimate's inclusion list, show structure under its **own heading** ("Structure (when supplied by Deenar) — estimated separately: PKR 600,000 – 1,000,000 for 20–50 ft"), never inside the lift-inclusion sentence. This avoids double counting and avoids implying a structure figure in the lift number.
4. Re-ask the owner (one question): **"Does your PKR 2,800,000–4,500,000 for a 630 kg passenger lift include the steel structure, or is the structure quoted separately as in the 600k–1M figure?"** A "separate" answer confirms Option B. A "band covers a typical structure" answer reopens A-with-caveats or B-with-notes.

---

## Final Owner Decision Required

- [ ] **Owner confirmation (Decision 9):** Is the PKR 2,800,000 – 4,500,000 passenger 630 kg price **structure-inclusive** or **structure-excluded (separate component)**?
- Proposed default if the owner does not answer: **structure-excluded (Option B)** per the evidence above, with structure shown as a separate verified component — to be locked before the SDD §4.1 / R3 copy and the estimate's inclusion/exclusion wording are finalised.