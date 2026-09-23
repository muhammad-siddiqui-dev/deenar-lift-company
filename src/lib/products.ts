export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  specs: { label: string; value: string }[];
  accent: string;
  image: string;
}

const u = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=80`;

export const products: Product[] = [
  {
    id: "passenger",
    name: "Passenger Lifts",
    tagline: "Smooth, fast and quiet movement for every building",
    description:
      "From 6 to 16 persons, our geared and gearless passenger lifts use VVVF drives and advanced controllers for a quiet, accurate ride in residential towers, offices and commercial buildings.",
    features: [
      "VVVF gearless traction drives",
      "Micro-processor based controllers",
      "LED lighting with emergency backup",
      "Automatic sliding doors",
      "Destination dispatch option",
      "Capacity: 6 - 16 persons",
    ],
    specs: [
      { label: "Capacity", value: "320 - 1,000 kg" },
      { label: "Speed", value: "0.5 - 2.0 m/s" },
      { label: "Travel", value: "Up to 30 stops" },
      { label: "Drive", value: "Geared / Gearless" },
    ],
    accent: "from-sky-500 to-blue-700",
    image: u("photo-1486406146926-c627a92ad1ab"),
  },
  {
    id: "home",
    name: "Home / Villa Lifts",
    tagline: "Elegant mobility for your family and guests",
    description:
      "Compact hydraulic home lifts designed to fit existing structures with minimal shaft work. Quiet, safe and stylish — ideal for villas and multi-storey residences across Karachi.",
    features: [
      "No machine room required (MRL)",
      "Compact pit & headroom requirements",
      "Child-safe interlocks",
      "Battery-assisted emergency lowering",
      "Custom cabin interiors",
      "Capacity: 2 - 6 persons",
    ],
    specs: [
      { label: "Capacity", value: "160 - 480 kg" },
      { label: "Stops", value: "2 - 5 stops" },
      { label: "Drive", value: "Hydraulic" },
      { label: "Power", value: "Single phase option" },
    ],
    accent: "from-emerald-500 to-teal-700",
    image: u("photo-1600585154340-be6161a56a0c"),
  },
  {
    id: "freight",
    name: "Freight / Goods Lifts",
    tagline: "Heavy-duty lifting for industry and commerce",
    description:
      "Built to move goods, pallets and vehicles with capacities up to 3,000 kg. Robust double-leaf doors, heavy-duty guides and hydraulic or traction drive systems.",
    features: [
      "Load capacities up to 3,000 kg",
      "Heavy-duty platform & gates",
      "Manual or automatic doors",
      "Two-speed floor levelling",
      "Waterproof / weatherproof options",
      "Custom platform sizes",
    ],
    specs: [
      { label: "Capacity", value: "1,000 - 3,000 kg" },
      { label: "Drive", value: "Hydraulic / Traction" },
      { label: "Doors", value: "Manual / Automatic" },
      { label: "Operation", value: "Single or two speed" },
    ],
    accent: "from-amber-500 to-orange-700",
    image: u("photo-1553413077-190dd305871c"),
  },
  {
    id: "hospital",
    name: "Hospital Lifts",
    tagline: "Precision, comfort and care for medical facilities",
    description:
      "Wide-bed lifts with stretcher cabins, vibration-free travel and precise levelling so trolleys and beds move without a hitch. Designed for hospitals, clinics and laboratories.",
    features: [
      "Stretcher-friendly wide cabins",
      "Anti-vibration levelling",
      "Emergency alarm & intercom",
      "Standby power readiness",
      "Fire-rated landing doors",
      "Capacity: 6 - 10 persons",
    ],
    specs: [
      { label: "Capacity", value: "480 - 800 kg" },
      { label: "Speed", value: "0.63 - 1.0 m/s" },
      { label: "Cabin depth", value: "2,100 mm+" },
      { label: "Safety", value: "EN / GB certified" },
    ],
    accent: "from-rose-500 to-red-700",
    image: u("photo-1586773860418-d37222d8fce3"),
  },
];

export const services = [
  {
    id: "installation",
    name: "Supply & Installation",
    description:
      "End-to-end turnkey installation including shaft survey, civil works guidance, electrical integration and commissioning by our own certified engineers.",
  },
  {
    id: "amc",
    name: "Annual Maintenance Contracts",
    description:
      "Preventive and corrective maintenance plans with scheduled inspections, priority breakdown response and genuine spare parts for years of trouble-free service.",
  },
  {
    id: "modernization",
    name: "Modernization & Refurbishment",
    description:
      "Upgrade ageing lifts with new VVVF drives, controllers, doors and cabins to boost performance, safety and energy efficiency at a fraction of replacement cost.",
  },
  {
    id: "repair",
    name: "Repair & Breakdown Service",
    description:
      "Fast emergency call-out for Karachi and all of Sindh. Our technicians carry common spares on board to get your lift moving again quickly.",
  },
];

export const images = {
  engineering: u("photo-1581091226825-a6a2a5aee158"),
  skyline: u("photo-1486406146926-c627a92ad1ab"),
};
