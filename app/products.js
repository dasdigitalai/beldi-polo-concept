// Sample catalogue for the concept shop. Names, prices and colours are placeholders.
const APPAREL = ["S", "M", "L", "XL", "XXL"];
const ONE = ["One size"];

const NAVY = { name: "Navy", fill: "#14283f", ink: "#e6c58f", logo: "mint" };
const IVORY = { name: "Ivory", fill: "#f6f0e4", ink: "#14283f", logo: "navy" };
const SAND = { name: "Sand", fill: "#d9c7a0", ink: "#14283f", logo: "navy" };
const CHARCOAL = { name: "Charcoal", fill: "#2b2f36", ink: "#e6c58f", logo: "mint" };
const HEATHER = { name: "Heather", fill: "#9aa0a8", ink: "#0d1b2e", logo: "navy" };
const EMBER = { name: "Sunset", fill: "#c8663f", ink: "#fff1dc", logo: "ivory" };
const BLACK = { name: "Black", fill: "#15171a", ink: "#e6c58f", logo: "mint" };
const NATURAL = { name: "Natural", fill: "#e8dcc0", ink: "#14283f", logo: "navy" };

export const PRODUCTS = [
  { id: "club-polo", type: "polo", name: "The Club Polo", blurb: "Performance piqué with the Beldi logo on the chest.", price: 98, sizes: APPAREL, colors: [NAVY, IVORY, SAND] },
  { id: "quarter-zip", type: "zip", name: "Stable Quarter-Zip", blurb: "A mid-weight pullover for early mornings at the barn.", price: 128, sizes: APPAREL, colors: [NAVY, HEATHER, IVORY] },
  { id: "sunset-tee", type: "tee", name: "Sunset Polo Tee", blurb: "Soft cotton with the golden-hour field printed on the chest.", price: 38, sizes: APPAREL, colors: [IVORY, NAVY, EMBER] },
  { id: "club-hoodie", type: "hoodie", name: "Sideline Hoodie", blurb: "Heavyweight fleece for cool evenings on the veranda.", price: 88, sizes: APPAREL, colors: [NAVY, CHARCOAL, SAND] },
  { id: "club-cap", type: "cap", name: "Beldi Cap", blurb: "Embroidered six-panel cap with an adjustable strap.", price: 42, sizes: ONE, colors: [NAVY, SAND, BLACK] },
  { id: "field-tote", type: "tote", name: "Field Tote", blurb: "Heavy canvas, roomy enough for boots, tack and a picnic.", price: 34, sizes: ONE, colors: [NATURAL, NAVY] },
];

export const money = (n) => `$${n.toFixed(2).replace(/\.00$/, "")}`;
