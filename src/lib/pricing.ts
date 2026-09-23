/**
 * Deenar Lift Company — pricing calculator data layer.
 *
 * Authority: docs/calculator-sdd.md (SDD). This module is the single source of
 * truth for every number the calculator may render (SDD §12). Adding a number
 * means adding a verified rule here; nothing else may render pricing figures.
 *
 * Evidence labels below (SDD §15) are INTERNAL ONLY — they must never be shown
 * to customers (SDD §13.7).
 */

export type VerifiedRuleScope =
  | "estimate" // rendered as a verified online band
  | "reference" // business reference only, never a configured estimate
  | "display"; // display-only business terms / ceilings

export interface PricingRule {
  id: string;
  label: string;
  scope: VerifiedRuleScope;
  valueLow?: number;
  valueHigh?: number;
  unit: string;
  verified: boolean;
  evidenceSourceKey: string;
  /** "up to" statement — informational only, never arithmetic (SDD §2, §17). */
  isCeiling?: boolean;
  /** Exact customer-facing display string for display-only / ceiling rules. */
  display?: string;
}

export const EVIDENCE_SOURCES = {
  dadVerified: "Dad 2026 (verified)",
  deenarHistorical: "Deenar historical (Q001–Q061)",
  externalMarket: "External market (2024–2026)",
} as const;

/** Single verified rule table — SDD §2 / §12 / §15. */
export const pricingRules: Record<string, PricingRule> = {
  R1: {
    id: "R1",
    label: "Passenger Steel 630 kg",
    scope: "estimate",
    valueLow: 2_800_000,
    valueHigh: 4_500_000,
    unit: "PKR",
    verified: true,
    evidenceSourceKey: EVIDENCE_SOURCES.dadVerified,
  },
  R2: {
    id: "R2",
    label: "Passenger Glass 630 kg",
    scope: "estimate",
    valueLow: 2_800_000,
    valueHigh: 4_500_000,
    unit: "PKR",
    verified: true,
    evidenceSourceKey: EVIDENCE_SOURCES.dadVerified,
  },
  R3: {
    id: "R3",
    label: "Structure (20–50 ft)",
    scope: "estimate",
    valueLow: 600_000,
    valueHigh: 1_000_000,
    unit: "PKR",
    verified: true,
    evidenceSourceKey: EVIDENCE_SOURCES.dadVerified,
  },
  R4: {
    id: "R4",
    label: "Cargo / freight overall reference",
    scope: "reference",
    valueLow: 4_000_000,
    valueHigh: 15_000_000,
    unit: "PKR",
    verified: true,
    evidenceSourceKey: EVIDENCE_SOURCES.dadVerified,
  },
  R5: {
    id: "R5",
    label: "Payment schedule",
    scope: "display",
    display: "40% / 20% / 20% / 20%",
    unit: "",
    verified: true,
    evidenceSourceKey: EVIDENCE_SOURCES.dadVerified,
  },
  R6: {
    id: "R6",
    label: "Discount",
    scope: "display",
    display: "up to 5%, negotiable",
    isCeiling: true,
    unit: "",
    verified: true,
    evidenceSourceKey: EVIDENCE_SOURCES.dadVerified,
  },
  R7: {
    id: "R7",
    label: "Delivery / installation",
    scope: "display",
    display: "approximately 2–3 months",
    unit: "",
    verified: true,
    evidenceSourceKey: EVIDENCE_SOURCES.dadVerified,
  },
  R8: {
    id: "R8",
    label: "Warranty",
    scope: "display",
    display: "1 year",
    unit: "",
    verified: true,
    evidenceSourceKey: EVIDENCE_SOURCES.dadVerified,
  },
  R9: {
    id: "R9",
    label: "Free maintenance",
    scope: "display",
    display: "1 year",
    unit: "",
    verified: true,
    evidenceSourceKey: EVIDENCE_SOURCES.dadVerified,
  },
  R10: {
    id: "R10",
    label: "AMC after warranty",
    scope: "display",
    display: "PKR 10,000 / month",
    unit: "PKR",
    verified: true,
    evidenceSourceKey: EVIDENCE_SOURCES.dadVerified,
  },
  R11: {
    id: "R11",
    label: "Imported cabin",
    scope: "display",
    display: "up to 50% above a local cabin",
    isCeiling: true,
    unit: "",
    verified: true,
    evidenceSourceKey: EVIDENCE_SOURCES.dadVerified,
  },
  R12: {
    id: "R12",
    label: "Extra floor / stop",
    scope: "display",
    display: "up to PKR 300,000",
    isCeiling: true,
    unit: "PKR",
    verified: true,
    evidenceSourceKey: EVIDENCE_SOURCES.dadVerified,
  },
};

/* ----------------------------------------------------------------------- */
/* Product scope — SDD §1. Hoist / Panoramic / Escalators are NOT offered.  */
/* ----------------------------------------------------------------------- */

export type ProductId =
  | "passenger"
  | "cargo"
  | "home"
  | "hospital"
  | "imported";

export interface CalculatorProduct {
  id: ProductId;
  name: string;
  description: string;
  role: "estimate" | "reference" | "quote-only";
  roleLabel: string;
}

export const products: CalculatorProduct[] = [
  {
    id: "passenger",
    name: "Passenger Lift",
    description:
      "Steel or glass passenger lifts. A verified 2026 band estimate is available for the 630 kg reference configuration.",
    role: "estimate",
    roleLabel: "Online estimate (630 kg)",
  },
  {
    id: "cargo",
    name: "Cargo / Freight Lift",
    description:
      "Heavy-duty goods lifts. A broad business reference range is shown; exact pricing is confirmed by formal quotation.",
    role: "reference",
    roleLabel: "Reference range + quotation",
  },
  {
    id: "home",
    name: "Home / Villa Lift",
    description:
      "Compact residential lifts sized to the property. Quoted individually from site details.",
    role: "quote-only",
    roleLabel: "Formal quotation",
  },
  {
    id: "hospital",
    name: "Hospital Lift",
    description:
      "Medical-grade lifts for beds and stretchers. Quoted individually from requirements and site constraints.",
    role: "quote-only",
    roleLabel: "Formal quotation",
  },
  {
    id: "imported",
    name: "Imported Complete Lift",
    description:
      "Fully imported lifts specified by requirement, size and weight. Quoted individually.",
    role: "quote-only",
    roleLabel: "Formal quotation",
  },
];

/* ----------------------------------------------------------------------- */
/* Capacity / stops / structure reference model — SDD §6-§8                 */
/* ----------------------------------------------------------------------- */

export const PASSENGER_REFERENCE_CAPACITY_KG = 630;
export const MAX_ESTIMATE_STOPS = 9;
export const STRUCTURE_BAND_TOP_FT = 50;

export class PassengerConfig {
  constructor(
    public readonly capacityKg: number,
    public readonly stops: number,
    public readonly overNineStops: boolean,
    public readonly structureSupplier: "deenar" | "owner",
    public readonly structureHeight: "20-50ft" | "over50ft"
  ) {}
}

/* ----------------------------------------------------------------------- */
/* Options / add-ons — quote-scoping only, zero price influence (SDD §9).   */
/* ----------------------------------------------------------------------- */

export type DoorClass = "Automatic SS" | "Swing / MS" | "Book-type";

export const doorClasses: DoorClass[] = [
  "Automatic SS",
  "Swing / MS",
  "Book-type",
];

export type CabinSource = "Local SS" | "Imported cabin";

export const cabinSources: CabinSource[] = ["Local SS", "Imported cabin"];

export interface AddOnOption {
  id: "ard" | "generator" | "vvvf";
  label: string;
}

export const addOnOptions: AddOnOption[] = [
  { id: "ard", label: "ARD (Automatic Rescue Device)" },
  { id: "generator", label: "Generator / power backup" },
  { id: "vvvf", label: "VVVF door drive" },
];

/** Class C informational / quote-only specs — never priced (SDD §9). */
export const informationalSpecs = [
  "TFT / LCD display",
  "LED / false ceiling",
  "Stone / laminate interiors",
  "Glass thickness",
  "Speed",
  "Other specialised requirements",
] as const;

/* ----------------------------------------------------------------------- */
/* Flow resolution — hybrid estimate / quote model (SDD §3-§5).             */
/* ----------------------------------------------------------------------- */

export interface CalculatorSelection {
  productId: ProductId;
  cabin: "steel" | "glass";
  capacityKg: number;
  stops: number;
  overNineStops: boolean;
  structureSupplier: "deenar" | "owner";
  structureHeight: "20-50ft" | "over50ft";
  cabinSource: CabinSource;
  doorClass: DoorClass;
  addOns: AddOnOption["id"][];
  requirements: Record<string, string>;
}

export type FlowResult =
  | {
      mode: "estimate";
      liftRule: "R1" | "R2";
      structureBand?: { low: number; high: number };
    }
  | { mode: "reference"; rule: "R4" }
  | { mode: "quote-only"; reason: string };

export const QUOTE_REASONS: Record<string, string> = {
  home: "Home / villa lifts are quoted individually according to floors, cabin size, shaft availability and usage.",
  hospital:
    "Hospital lifts are quoted individually for bed/stretcher requirements, capacity and site constraints.",
  imported:
    "Imported complete lifts are quoted according to requirements, sizes, weight and source country.",
  capacity:
    "This capacity depends on your floors, dimensions/site space and exact requirements — it is confirmed in a formal quotation.",
  stops:
    "Installations above 9 stops depend on the complete lift configuration and site conditions — confirmed in a formal quotation.",
  structure:
    "Structure above 50 ft is quoted after site survey — height, width and depth determine the price.",
};

export function resolveFlow(sel: CalculatorSelection): FlowResult {
  if (sel.productId === "cargo") {
    return { mode: "reference", rule: "R4" };
  }
  if (sel.productId === "home") {
    return { mode: "quote-only", reason: QUOTE_REASONS.home };
  }
  if (sel.productId === "hospital") {
    return { mode: "quote-only", reason: QUOTE_REASONS.hospital };
  }
  if (sel.productId === "imported") {
    return { mode: "quote-only", reason: QUOTE_REASONS.imported };
  }

  // passenger
  if (sel.capacityKg !== PASSENGER_REFERENCE_CAPACITY_KG) {
    return { mode: "quote-only", reason: QUOTE_REASONS.capacity };
  }
  if (sel.overNineStops || sel.stops > MAX_ESTIMATE_STOPS) {
    return { mode: "quote-only", reason: QUOTE_REASONS.stops };
  }
  if (
    sel.structureSupplier === "deenar" &&
    sel.structureHeight === "over50ft"
  ) {
    return { mode: "quote-only", reason: QUOTE_REASONS.structure };
  }

  const structureBand =
    sel.structureSupplier === "deenar" &&
    sel.structureHeight === "20-50ft" &&
    pricingRules.R3.verified &&
    pricingRules.R3.valueLow !== undefined &&
    pricingRules.R3.valueHigh !== undefined
      ? { low: pricingRules.R3.valueLow, high: pricingRules.R3.valueHigh }
      : undefined;

  return {
    mode: "estimate",
    liftRule: sel.cabin === "glass" ? "R2" : "R1",
    structureBand,
  };
}

/* ----------------------------------------------------------------------- */
/* Formatters — retained from the legacy model as shared helpers (SDD §12). */
/* ----------------------------------------------------------------------- */

export function formatPKR(value: number): string {
  return new Intl.NumberFormat("en-PK", {
    style: "currency",
    currency: "PKR",
    maximumFractionDigits: 0,
  }).format(value);
}

const compactNumber = (value: number) => {
  const rounded = Math.round(value * 100) / 100;
  return Number.isInteger(rounded)
    ? String(rounded)
    : rounded.toFixed(2).replace(/\.?0+$/, "");
};

export function formatPKRCompact(value: number): string {
  const crore = 10000000;
  const lakh = 100000;
  if (value >= crore) {
    return `Rs ${compactNumber(value / crore)} crore`;
  }
  if (value >= lakh) {
    return `Rs ${compactNumber(value / lakh)} lakh`;
  }
  return `Rs ${new Intl.NumberFormat("en-PK").format(value)}`;
}