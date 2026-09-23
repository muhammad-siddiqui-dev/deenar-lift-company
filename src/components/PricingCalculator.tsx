"use client";

import { useMemo, useState } from "react";
import {
  MAX_ESTIMATE_STOPS,
  PASSENGER_REFERENCE_CAPACITY_KG,
  STRUCTURE_BAND_TOP_FT,
  addOnOptions,
  cabinSources,
  doorClasses,
  formatPKR,
  formatPKRCompact,
  informationalSpecs,
  pricingRules,
  products,
  resolveFlow,
  type AddOnOption,
  type CalculatorSelection,
  type CabinSource,
  type DoorClass,
  type ProductId,
} from "@/lib/pricing";
import { whatsappLink } from "@/lib/site";

const controlLabel =
  "text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-400";
const controlInput =
  "w-full rounded-md border border-white/10 bg-[#0b0b0e] px-3 py-2.5 text-sm text-zinc-100 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500/40";

interface RequirementField {
  key: string;
  label: string;
  placeholder?: string;
}

const requirementFields: Record<ProductId, RequirementField[]> = {
  home: [
    { key: "floors", label: "Number of floors", placeholder: "e.g., 3" },
    { key: "building", label: "Building type", placeholder: "e.g., house / villa / apartment" },
    { key: "cabinSize", label: "Preferred cabin size", placeholder: "e.g., 4–5 persons" },
  ],
  hospital: [
    { key: "capacity", label: "Capacity (kg)", placeholder: "e.g., 1000" },
    { key: "stretcher", label: "Bed / stretcher requirements", placeholder: "e.g., hospital bed 2000 x 900 mm" },
    { key: "floors", label: "Number of floors", placeholder: "e.g., 6" },
  ],
  cargo: [
    { key: "capacity", label: "Capacity (kg)", placeholder: "e.g., 2000" },
    { key: "platform", label: "Platform / goods size", placeholder: "e.g., 1400 x 1000 mm" },
    { key: "floors", label: "Number of floors", placeholder: "e.g., 4" },
    { key: "access", label: "Site access notes", placeholder: "Any constraints on delivery / installation" },
  ],
  imported: [
    { key: "equipment", label: "Equipment type", placeholder: "e.g., complete imported passenger lift" },
    { key: "sizes", label: "Sizes", placeholder: "e.g., 1600 x 1400 mm cabin" },
    { key: "weight", label: "Weight", placeholder: "e.g., 2500 kg" },
    { key: "source", label: "Source country", placeholder: "e.g., China / Italy / Germany" },
  ],
  passenger: [],
};

const passengerQuoteRequirements: RequirementField[] = [
  { key: "floors", label: "Number of floors / stops", placeholder: "e.g., 12" },
  { key: "shaftHeight", label: "Shaft height (ft)", placeholder: "e.g., 65" },
];

export default function PricingCalculator() {
  const [productId, setProductId] = useState<ProductId>("passenger");
  const [cabin, setCabin] = useState<"steel" | "glass">("steel");
  const [otherCapacity, setOtherCapacity] = useState(false);
  const [stops, setStops] = useState(8);
  const [overNineStops, setOverNineStops] = useState(false);
  const [structureSupplier, setStructureSupplier] = useState<"deenar" | "owner">("deenar");
  const [structureHeight, setStructureHeight] = useState<"20-50ft" | "over50ft">("20-50ft");
  const [cabinSource, setCabinSource] = useState<CabinSource>("Local SS");
  const [doorClass, setDoorClass] = useState<DoorClass>("Automatic SS");
  const [addOns, setAddOns] = useState<AddOnOption["id"][]>([]);
  const [requirements, setRequirements] = useState<Record<string, string>>({});

  const selectProduct = (id: ProductId) => {
    setProductId(id);
    setOtherCapacity(false);
    setStops(8);
    setOverNineStops(false);
    setStructureSupplier("deenar");
    setStructureHeight("20-50ft");
  };

  const toggleAddOn = (id: AddOnOption["id"]) => {
    setAddOns((prev) => (prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]));
  };

  const setReq = (key: string, value: string) => {
    setRequirements((prev) => ({ ...prev, [key]: value }));
  };

  const selection: CalculatorSelection = useMemo(
    () => ({
      productId,
      cabin,
      capacityKg:
        productId === "passenger"
          ? otherCapacity
            ? Number(requirements.capacityKg) || 1000
            : PASSENGER_REFERENCE_CAPACITY_KG
          : PASSENGER_REFERENCE_CAPACITY_KG,
      stops,
      overNineStops,
      structureSupplier,
      structureHeight,
      cabinSource,
      doorClass,
      addOns,
      requirements,
    }),
    [
      productId,
      cabin,
      otherCapacity,
      stops,
      overNineStops,
      structureSupplier,
      structureHeight,
      cabinSource,
      doorClass,
      addOns,
      requirements,
    ]
  );

  const flow = useMemo(() => resolveFlow(selection), [selection]);

  const product = products.find((p) => p.id === productId) ?? products[0];
  const isPassenger = productId === "passenger";

  const selLines = [
    `${product.name}`,
    isPassenger ? `Cabin: ${cabin === "steel" ? "Steel" : "Glass"}` : null,
    isPassenger
      ? `Capacity: ${
          otherCapacity
            ? `${Number(requirements.capacityKg) || "other"} kg`
            : `${PASSENGER_REFERENCE_CAPACITY_KG} kg`
        }`
      : null,
    `Stops: ${overNineStops ? "More than 9" : stops}`,
    isPassenger ? `Structure: ${structureSupplier === "deenar" ? `Deenar (${structureHeight})` : "Owner civil works"}` : null,
    `Cabin source: ${cabinSource}`,
    `Door class: ${doorClass}`,
    addOns.length ? `Add-ons: ${addOns.map((a) => addOnOptions.find((o) => o.id === a)?.label).join(", ")}` : null,
  ].filter(Boolean);

  const reqLines = Object.entries(requirements)
    .filter(([, v]) => v.trim().length > 0)
    .map(([k, v]) => `${k}: ${v}`);

  const waText = useMemo(() => {
    const header = "Assalam-o-Alaikum! I used the Deenar Lift pricing calculator.";
    if (flow.mode === "estimate") {
      const liftBand = `${formatPKRCompact(pricingRules[flow.liftRule].valueLow ?? 0)} — ${formatPKRCompact(
        pricingRules[flow.liftRule].valueHigh ?? 0
      )}`;
      const structureLine = flow.structureBand
        ? `\nStructure (${STRUCTURE_BAND_TOP_FT}): ${formatPKRCompact(flow.structureBand.low)} — ${formatPKRCompact(
            flow.structureBand.high
          )}`
        : "";
      return [header, ...selLines, `\nEstimated range: ${liftBand}`, structureLine, ...reqLines.map((l) => `\n${l}`), "\nPlease share an exact quotation."].join("\n");
    }
    if (flow.mode === "reference") {
      const refBand = `${formatPKRCompact(pricingRules[flow.rule].valueLow ?? 0)} — ${formatPKRCompact(
        pricingRules[flow.rule].valueHigh ?? 0
      )}`;
      return [
        header,
        ...selLines,
        `\nBusiness reference range: ${refBand} (not a configured estimate)`,
        ...reqLines.map((l) => `\n${l}`),
        "\nPlease share a formal quotation.",
      ].join("\n");
    }
    return [
      header,
      ...selLines,
      `\nRequires a formal quotation.\n${flow.reason}`,
      ...reqLines.map((l) => `\n${l}`),
      "\nPlease share a formal quotation.",
    ].join("\n");
  }, [flow, selLines, reqLines]);

  const renderRequirements = () => {
    const fields =
      productId === "passenger"
        ? overNineStops || (structureSupplier === "deenar" && structureHeight === "over50ft")
          ? passengerQuoteRequirements
          : []
        : requirementFields[productId];
    return (
      <div className="mt-7">
        <p className={controlLabel}>Tell us more for your {flow.mode === "estimate" ? "estimate" : "quotation"}</p>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {fields.map((f) => (
            <input
              key={f.key}
              type="text"
              value={requirements[f.key] ?? ""}
              onChange={(e) => setReq(f.key, e.target.value)}
              placeholder={f.placeholder}
              className={`${controlInput} ${fields.length === 1 ? "sm:col-span-2" : ""}`}
            />
          ))}
          <textarea
            value={requirements.notes ?? ""}
            onChange={(e) => setReq("notes", e.target.value)}
            placeholder="Any additional requirements or site details"
            rows={3}
            className={`${controlInput} resize-none ${fields.length === 0 ? "sm:col-span-2" : ""}`}
          />
        </div>
      </div>
    );
  };

  const resultPanel = () => {
    if (flow.mode === "estimate") {
      const liftRule = pricingRules[flow.liftRule];
      return (
        <>
          <div className="bg-brand-500 px-6 py-6 text-[#0a0a0a]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em]">Estimated budget range</p>
            <p className="mt-1 font-mono text-2xl font-bold tracking-tight">
              {formatPKRCompact(liftRule.valueLow ?? 0)} — {formatPKRCompact(liftRule.valueHigh ?? 0)}
            </p>
            <p className="mt-0.5 text-xs font-medium opacity-80">
              Passenger {cabin === "steel" ? "steel" : "glass"} lift · {isPassenger ? (otherCapacity ? `${Number(requirements.capacityKg) || "other"} kg` : `${PASSENGER_REFERENCE_CAPACITY_KG} kg`) : "630 kg"} · {overNineStops ? `${stops}+` : stops} stops ·
              includes supply, installation &amp; commissioning
            </p>
          </div>

          <div className="bg-[#101013] px-6 py-6">
            <div className="rounded-md border border-white/10 bg-[#0b0b0e] px-4 py-3 text-sm text-zinc-300">
              {selLines.join(" · ")}
            </div>

            {flow.structureBand && structureSupplier === "deenar" && (
              <div className="mt-4 rounded-md border border-brand-500/30 bg-brand-500/5 px-4 py-3">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-zinc-100">Structure ({STRUCTURE_BAND_TOP_FT} ft)</p>
                  <p className="font-mono font-semibold text-brand-500">
                    {formatPKRCompact(flow.structureBand.low)} — {formatPKRCompact(flow.structureBand.high)}
                  </p>
                </div>
                <p className="mt-1 text-xs leading-relaxed text-zinc-400">
                  Estimated separately from the lift. Depends on height, width and depth — confirmed at site survey.
                </p>
              </div>
            )}

            {structureSupplier === "owner" && (
              <p className="mt-4 rounded-md border border-white/10 bg-[#0b0b0e] px-4 py-3 text-xs leading-relaxed text-zinc-400">
                Structure is provided under owner civil works — it is not included in this estimate.
              </p>
            )}

            {cabinSource === "Imported cabin" && (
              <p className="mt-4 rounded-md border border-white/10 bg-[#0b0b0e] px-4 py-3 text-xs leading-relaxed text-zinc-400">
                Imported cabin: {pricingRules.R11.display}. This is informational — the exact impact is confirmed in the formal quotation.
              </p>
            )}

            <dl className="mt-5 space-y-3 text-sm">
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-400">
                  Commercial terms
                </dt>
                {([["R5", "Payment schedule"], ["R7", "Delivery / installation"], ["R8", "Warranty"], ["R9", "Free maintenance"], ["R10", "AMC after warranty"], ["R6", "Discount"]] as const).map(([id, label]) => (
                  <div key={id} className="mt-2 flex items-center justify-between">
                    <dt className="text-zinc-400">{label}</dt>
                    <dd className="font-semibold text-zinc-100">{pricingRules[id].display}</dd>
                  </div>
                ))}
              </div>
            </dl>

            <p className="mt-5 rounded-md border border-white/10 bg-[#0b0b0e] px-4 py-3 text-xs leading-relaxed text-zinc-400">
              Additional floors/stops may add up to {formatPKR(pricingRules.R12.valueHigh ?? 300000)} each. Actual pricing
              depends on the complete lift configuration and is confirmed in the formal quotation.
            </p>
            <p className="mt-3 text-xs leading-relaxed text-zinc-400">
              This is an indicative estimate in PKR for budgeting only. Final pricing is confirmed after a free site
              survey and depends on your shaft dimensions, civil works, power supply and choice of components. Civil
              works, electrical works, transport, taxes and negotiated discounts are confirmed separately at survey.
            </p>

            <div className="mt-6 space-y-2.5">
              <a
                href={whatsappLink(waText)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-md bg-[#25D366] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1fb857]"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Get Exact Quote on WhatsApp
              </a>
              <a
                href="/contact"
                className="flex w-full items-center justify-center rounded-md border border-white/15 px-4 py-3 text-sm font-semibold text-zinc-200 transition-colors hover:border-brand-500 hover:text-brand-500"
              >
                Book a Free Site Survey
              </a>
            </div>
          </div>
        </>
      );
    }

    if (flow.mode === "reference") {
      const refRule = pricingRules[flow.rule];
      return (
        <>
          <div className="bg-brand-500/15 px-6 py-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-500">
              Business reference range
            </p>
            <p className="mt-1 font-mono text-2xl font-bold tracking-tight text-zinc-100">
              {formatPKRCompact(refRule.valueLow ?? 0)} — {formatPKRCompact(refRule.valueHigh ?? 0)}
            </p>
            <p className="mt-0.5 text-xs font-medium text-zinc-300">
              Cargo / freight lifts — not a configured estimate. Broad reference band; exact pricing by formal quotation.
            </p>
          </div>
          <div className="bg-[#101013] px-6 py-6">
            <div className="rounded-md border border-white/10 bg-[#0b0b0e] px-4 py-3 text-sm text-zinc-300">
              {selLines.join(" · ")}
            </div>
            <p className="mt-5 rounded-md border border-white/10 bg-[#0b0b0e] px-4 py-3 text-xs leading-relaxed text-zinc-400">
              This is a wide business reference band, not a configured estimate. Exact pricing depends on capacity,
              platform and goods size, floors and site access — confirmed in a formal quotation.
            </p>
            <div className="mt-6 space-y-2.5">
              <a
                href={whatsappLink(waText)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-md bg-[#25D366] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1fb857]"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Get Exact Quote on WhatsApp
              </a>
              <a
                href="/contact"
                className="flex w-full items-center justify-center rounded-md border border-white/15 px-4 py-3 text-sm font-semibold text-zinc-200 transition-colors hover:border-brand-500 hover:text-brand-500"
              >
                Book a Free Site Survey
              </a>
            </div>
          </div>
        </>
      );
    }

    return (
      <>
        <div className="bg-brand-500 px-6 py-6 text-[#0a0a0a]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em]">Formal quotation required</p>
          <p className="mt-2 text-sm leading-relaxed font-medium">{flow.reason}</p>
        </div>
        <div className="bg-[#101013] px-6 py-6">
          <div className="rounded-md border border-white/10 bg-[#0b0b0e] px-4 py-3 text-sm text-zinc-300">
            {selLines.join(" · ")}
          </div>
          <p className="mt-5 rounded-md border border-white/10 bg-[#0b0b0e] px-4 py-3 text-xs leading-relaxed text-zinc-400">
            Share your requirements below and we will send a formal quotation after a free site survey.
          </p>
          <div className="mt-6 space-y-2.5">
            <a
              href={whatsappLink(waText)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-md bg-[#25D366] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1fb857]"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Request Formal Quotation
              </a>
              <a
                href="/contact"
                className="flex w-full items-center justify-center rounded-md border border-white/15 px-4 py-3 text-sm font-semibold text-zinc-200 transition-colors hover:border-brand-500 hover:text-brand-500"
              >
                Book a Free Site Survey
              </a>
            </div>
          </div>
        </>
    );
  };

  return (
    <div className="grid gap-6 lg:grid-cols-5">
      <div className="border border-white/10 bg-[#101013] p-6 sm:p-8 lg:col-span-3">
        <div>
          <p className={controlLabel}>Step 1 · Lift type</p>
          <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {products.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => selectProduct(p.id)}
                className={`rounded-md border px-4 py-3 text-left transition-colors ${
                  productId === p.id
                    ? "border-brand-500 bg-brand-500/10"
                    : "border-white/10 hover:border-white/25 hover:bg-white/[0.03]"
                }`}
              >
                <span
                  className={`block text-sm font-semibold ${
                    productId === p.id ? "text-white" : "text-zinc-200"
                  }`}
                >
                  {p.name}
                </span>
                <span className="mt-0.5 block text-xs text-zinc-400">{p.roleLabel}</span>
              </button>
            ))}
          </div>
        </div>

        {isPassenger && (
          <>
            <div className="mt-7">
              <p className={controlLabel}>Step 2 · Cabin construction</p>
              <div className="mt-3 grid grid-cols-2 gap-2">
                {(["steel", "glass"] as const).map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setCabin(c)}
                    className={`rounded-md border px-4 py-3 text-left transition-colors ${
                      cabin === c
                        ? "border-brand-500 bg-brand-500/10"
                        : "border-white/10 hover:border-white/25 hover:bg-white/[0.03]"
                    }`}
                  >
                    <span className={`block text-sm font-semibold ${cabin === c ? "text-white" : "text-zinc-300"}`}>
                      {c === "steel" ? "Steel" : "Glass"} cabin
                    </span>
                    <span className="mt-0.5 block text-xs text-zinc-400">
                      {c === "steel" ? "Verified 2026 band" : "Same verified 2026 band"}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-7">
              <p className={controlLabel}>Step 3 · Capacity</p>
              <div className="mt-3 grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setOtherCapacity(false)}
                  className={`rounded-md border px-4 py-3 text-left transition-colors ${
                    !otherCapacity
                      ? "border-brand-500 bg-brand-500/10"
                      : "border-white/10 hover:border-white/25 hover:bg-white/[0.03]"
                  }`}
                >
                  <span className={`block text-sm font-semibold ${!otherCapacity ? "text-white" : "text-zinc-300"}`}>
                    {PASSENGER_REFERENCE_CAPACITY_KG} kg
                  </span>
                  <span className="mt-0.5 block text-xs text-zinc-400">Verified online estimate</span>
                </button>
                <button
                  type="button"
                  onClick={() => setOtherCapacity(true)}
                  className={`rounded-md border px-4 py-3 text-left transition-colors ${
                    otherCapacity
                      ? "border-brand-500 bg-brand-500/10"
                      : "border-white/10 hover:border-white/25 hover:bg-white/[0.03]"
                  }`}
                >
                  <span className={`block text-sm font-semibold ${otherCapacity ? "text-white" : "text-zinc-300"}`}>
                    Other capacity
                  </span>
                  <span className="mt-0.5 block text-xs text-zinc-400">e.g., 1000 kg — formal quotation</span>
                </button>
              </div>
              {otherCapacity && (
                <input
                  type="number"
                  min={1}
                  value={requirements.capacityKg ?? ""}
                  onChange={(e) => setReq("capacityKg", e.target.value)}
                  placeholder="Capacity in kg, e.g., 1000"
                  className={`mt-3 ${controlInput}`}
                />
              )}
            </div>

            <div className="mt-7">
              <div className="flex items-baseline justify-between">
                <label htmlFor="stops-slider" className={controlLabel}>
                  Step 4 · Number of stops
                </label>
                <span className="text-lg font-bold text-white">
                  {overNineStops ? "9+" : stops}{" "}
                  <span className="text-sm font-medium text-zinc-400">stops</span>
                </span>
              </div>
              <input
                id="stops-slider"
                type="range"
                min={1}
                max={MAX_ESTIMATE_STOPS}
                value={Math.min(stops, MAX_ESTIMATE_STOPS)}
                onChange={(e) => setStops(Number(e.target.value))}
                className="mt-3 h-2 w-full cursor-pointer accent-brand-500"
              />
              <div className="flex justify-between text-xs text-zinc-400">
                <span>1 stop</span>
                <span>{MAX_ESTIMATE_STOPS} stops</span>
              </div>
              <label className="mt-3 flex cursor-pointer items-center gap-2 text-sm text-zinc-300">
                <input
                  type="checkbox"
                  checked={overNineStops}
                  onChange={(e) => setOverNineStops(e.target.checked)}
                  className="h-4 w-4 accent-brand-500"
                />
                More than 9 stops — formal quotation
              </label>
            </div>

            <div className="mt-7">
              <p className={controlLabel}>Step 5 · Lift structure</p>
              <div className="mt-3 grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setStructureSupplier("deenar")}
                  className={`rounded-md border px-4 py-3 text-left transition-colors ${
                    structureSupplier === "deenar"
                      ? "border-brand-500 bg-brand-500/10"
                      : "border-white/10 hover:border-white/25 hover:bg-white/[0.03]"
                  }`}
                >
                  <span
                    className={`block text-sm font-semibold ${structureSupplier === "deenar" ? "text-white" : "text-zinc-300"}`}
                  >
                    Deenar supplied
                  </span>
                  <span className="mt-0.5 block text-xs text-zinc-400">Estimated separately</span>
                </button>
                <button
                  type="button"
                  onClick={() => setStructureSupplier("owner")}
                  className={`rounded-md border px-4 py-3 text-left transition-colors ${
                    structureSupplier === "owner"
                      ? "border-brand-500 bg-brand-500/10"
                      : "border-white/10 hover:border-white/25 hover:bg-white/[0.03]"
                  }`}
                >
                  <span
                    className={`block text-sm font-semibold ${structureSupplier === "owner" ? "text-white" : "text-zinc-300"}`}
                  >
                    Owner civil works
                  </span>
                  <span className="mt-0.5 block text-xs text-zinc-400">Not included</span>
                </button>
              </div>
              {structureSupplier === "deenar" && (
                <div className="mt-3">
                  <div className="flex gap-2">
                    {(["20-50ft", "over50ft"] as const).map((h) => (
                      <button
                        key={h}
                        type="button"
                        onClick={() => setStructureHeight(h)}
                        className={`flex-1 rounded-md border px-4 py-2.5 text-center text-sm font-semibold transition-colors ${
                          structureHeight === h
                            ? "border-brand-500 bg-brand-500/10 text-white"
                            : "border-white/10 text-zinc-300 hover:border-white/25 hover:bg-white/[0.03]"
                        }`}
                      >
                        {h === "20-50ft" ? `${STRUCTURE_BAND_TOP_FT} ft and under` : "Above 50 ft"}
                      </button>
                    ))}
                  </div>
                  <p className="mt-2 text-xs text-zinc-400">
                    Height must be confirmed at survey — the range depends on height, width and depth.
                  </p>
                </div>
              )}
            </div>
          </>
        )}

        <div className="mt-7">
          <p className={controlLabel}>Step {isPassenger ? 6 : 2} · Options</p>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            <div>
              <label className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">Cabin source</label>
              <select
                value={cabinSource}
                onChange={(e) => setCabinSource(e.target.value as CabinSource)}
                className={`mt-2 ${controlInput}`}
              >
                {cabinSources.map((c) => (
                  <option key={c} value={c} className="bg-[#101013]">
                    {c}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">Door class</label>
              <select
                value={doorClass}
                onChange={(e) => setDoorClass(e.target.value as DoorClass)}
                className={`mt-2 ${controlInput}`}
              >
                {doorClasses.map((d) => (
                  <option key={d} value={d} className="bg-[#101013]">
                    {d}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <p className="mt-3 text-xs text-zinc-400">Options below influence the quotation and are confirmed with it.</p>
          <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-3">
            {addOnOptions.map((o) => (
              <button
                key={o.id}
                type="button"
                onClick={() => toggleAddOn(o.id)}
                className={`rounded-md border px-3 py-2.5 text-left text-sm transition-colors ${
                  addOns.includes(o.id)
                    ? "border-brand-500 bg-brand-500/10 text-white"
                    : "border-white/10 text-zinc-300 hover:border-white/25 hover:bg-white/[0.03]"
                }`}
              >
                {o.label}
              </button>
            ))}
          </div>
          <div className="mt-3">
            <p className="text-xs text-zinc-400">Informational — choose any, pricing is confirmed in the quotation:</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {informationalSpecs.map((s) => (
                <span key={s} className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-400">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        {renderRequirements()}
      </div>

      <div className="lg:col-span-2">
        <div className="sticky top-24 overflow-hidden border border-white/10">{resultPanel()}</div>
      </div>
    </div>
  );
}