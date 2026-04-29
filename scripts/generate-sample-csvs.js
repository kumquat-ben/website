#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const rootDir = path.resolve(__dirname, "..");
const productsPath = path.join(rootDir, "assets", "products.json");
const samplesDir = path.join(rootDir, "assets", "samples");

function sampleSlug(title) {
  return String(title)
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 90);
}

function csvEscape(value) {
  const text = String(value ?? "");
  if (/[",\n\r]/.test(text)) {
    return '"' + text.replace(/"/g, '""') + '"';
  }
  return text;
}

function normalizeField(field) {
  return String(field)
    .trim()
    .replace(/\.$/, "")
    .replace(/\s+if present$/i, "")
    .replace(/\s+where available$/i, "")
    .replace(/\s+or\s+/gi, " ")
    .replace(/[^a-z0-9]+/gi, "_")
    .replace(/^_+|_+$/g, "")
    .toLowerCase();
}

function fieldsFor(product) {
  const fields = String(product.fields)
    .split(",")
    .map(normalizeField)
    .filter(Boolean);
  return [...new Set(fields.length ? fields : ["business_name", "website", "city", "state", "category", "source_url", "notes"])];
}

function niche(product) {
  return String(product.title)
    .replace(/^\d+\s+/, "")
    .replace(/\s+-\s+Agent Stats Edition$/i, "")
    .replace(/\b(with|without|missing|no|in|for|from|running|using|that|who|near|after|before)\b.*$/i, "")
    .trim() || product.category;
}

function sampleValue(field, index, product) {
  const n = index + 1;
  const city = ["Los Angeles", "San Diego", "San Jose", "Austin", "Denver", "Phoenix", "Chicago", "Seattle", "Atlanta", "Miami"][index % 10];
  const state = ["CA", "CA", "CA", "TX", "CO", "AZ", "IL", "WA", "GA", "FL"][index % 10];
  const business = `${niche(product)} Sample ${String(n).padStart(2, "0")}`;
  const domain = `${sampleSlug(business)}.example`;

  if (/^(name|business_name|company|company_name|organization|brand_name)$/.test(field)) return business;
  if (/website|claimed_website|domain|landing_page/.test(field)) return `https://${domain}`;
  if (/city|market/.test(field)) return city;
  if (/state|region/.test(field)) return state;
  if (/category|industry|vertical/.test(field)) return product.category;
  if (/phone/.test(field)) return `(555) 01${index}-10${index}`;
  if (/email/.test(field)) return `hello${n}@${domain}`;
  if (/contact_page|contact_path/.test(field)) return `https://${domain}/contact`;
  if (/booking|reservation|quote|order|donation|payment|status|gap|issue|signal/.test(field)) return signalFor(product, index);
  if (/instagram|social|creator_platform|platform/.test(field)) return `https://www.instagram.com/${sampleSlug(business)}`;
  if (/source_url|source_profile|raw_source|source/.test(field)) return `https://example.com/source/${sampleSlug(product.title)}/${n}`;
  if (/followers/.test(field)) return String(4200 + index * 730);
  if (/views/.test(field)) return String(1800 + index * 410);
  if (/score|rating/.test(field)) return (78 + (index % 18)).toString();
  if (/reviews/.test(field)) return String(35 + index * 12);
  if (/date|activity|acquired|posted|updated/.test(field)) return `2026-04-${String(10 + index).padStart(2, "0")}`;
  if (/notes|reason|angle|prompt/.test(field)) return `Sample row for ${product.title}; replace with verified production data before outreach.`;
  return `${field.replace(/_/g, " ")} sample ${n}`;
}

function signalFor(product, index) {
  const title = String(product.title).toLowerCase();
  if (title.includes("outdated")) return "Outdated site signals visible in public web review";
  if (title.includes("without online") || title.includes("no online")) return "No obvious online workflow found";
  if (title.includes("missing")) return "Expected conversion path appears missing";
  if (title.includes("slow")) return "Slow page experience flagged";
  if (title.includes("ads")) return "Paid traffic signal with weak conversion path";
  if (title.includes("hiring")) return "Recent hiring intent signal";
  if (title.includes("reviews")) return "Review/reputation follow-up opportunity";
  return `Relevant ${product.category.toLowerCase()} opportunity signal ${index + 1}`;
}

function renderSample(product) {
  const headers = fieldsFor(product);
  const rows = Array.from({ length: 10 }, (_, index) => headers.map((field) => sampleValue(field, index, product)));
  return [headers, ...rows].map((row) => row.map(csvEscape).join(",")).join("\n") + "\n";
}

function renderRealPreview(product) {
  if (!product.downloadLink) return null;
  const sourcePath = path.join(rootDir, product.downloadLink);
  if (!fs.existsSync(sourcePath)) return null;
  return fs.readFileSync(sourcePath, "utf8").split(/\r?\n/).slice(0, 11).join("\n") + "\n";
}

function main() {
  const data = JSON.parse(fs.readFileSync(productsPath, "utf8"));
  fs.mkdirSync(samplesDir, { recursive: true });

  for (const product of data.products) {
    const filename = `${sampleSlug(product.title)}-sample.csv`;
    const csv = renderRealPreview(product) || renderSample(product);
    fs.writeFileSync(path.join(samplesDir, filename), csv);
  }

  console.log(`Wrote ${data.products.length} sample CSV files to ${path.relative(rootDir, samplesDir)}.`);
}

main();
