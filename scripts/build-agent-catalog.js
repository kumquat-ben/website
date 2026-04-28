#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const rootDir = path.resolve(__dirname, "..");
const mainJsPath = path.join(rootDir, "assets", "main.js");
const jsonPath = path.join(rootDir, "assets", "products.json");
const htmlPath = path.join(rootDir, "agent-catalog.html");

function extractProducts() {
  const source = fs.readFileSync(mainJsPath, "utf8");
  const sandbox = {
    document: {
      querySelector() {
        return null;
      }
    },
    console
  };

  vm.createContext(sandbox);
  vm.runInContext(source + "\nthis.__kumquatProducts = products;", sandbox, {
    filename: "assets/main.js"
  });

  return sandbox.__kumquatProducts;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[char]);
}

function renderProduct(product, index) {
  const urlLabel = product.downloadLink ? "Download URL" : "Checkout URL";
  const url = product.downloadLink ? product.downloadLink : product.paymentLink;
  const preview = product.previewLink ? `      <p><strong>Preview URL:</strong> <a href="${escapeHtml(product.previewLink)}">${escapeHtml(product.previewLink)}</a></p>` : "";

  return [
    '    <article class="agent-product">',
    `      <h2>${index + 1}. ${escapeHtml(product.title)}</h2>`,
    `      <p><strong>Category:</strong> ${escapeHtml(product.category)}</p>`,
    `      <p><strong>Price:</strong> ${escapeHtml(product.price)}</p>`,
    `      <p><strong>Records:</strong> ${escapeHtml(product.records)}</p>`,
    `      <p><strong>Description:</strong> ${escapeHtml(product.description)}</p>`,
    `      <p><strong>Expected fields:</strong> ${escapeHtml(product.fields)}</p>`,
    `      <p><strong>Who buys this:</strong> ${escapeHtml(product.bestFor)}</p>`,
    `      <p><strong>${urlLabel}:</strong> <a href="${escapeHtml(url)}">${escapeHtml(url)}</a></p>`,
    preview,
    "    </article>"
  ].filter(Boolean).join("\n");
}

function renderHtml(products) {
  const generatedAt = new Date().toISOString();

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Static no-JavaScript Kumquat product catalog for AI agents and curl-only clients.">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="https://kumquat.info/agent-catalog.html">
  <title>Kumquat Agent Catalog</title>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.55; margin: 0; color: #20140d; background: #fffaf4; }
    main { max-width: 960px; margin: 0 auto; padding: 32px 20px; }
    h1 { font-size: 2rem; margin-bottom: 0.25rem; }
    .summary { border-bottom: 1px solid #e7d8c8; margin-bottom: 24px; padding-bottom: 20px; }
    .agent-product { background: #fff; border: 1px solid #e7d8c8; border-radius: 8px; margin: 0 0 16px; padding: 18px; }
    .agent-product h2 { font-size: 1.15rem; margin: 0 0 12px; }
    .agent-product p { margin: 8px 0; }
    code { background: #f3eadf; border-radius: 4px; padding: 2px 5px; }
    a { color: #9c3f08; overflow-wrap: anywhere; }
  </style>
</head>
<body>
  <main>
    <section class="summary">
      <h1>Kumquat Agent Catalog</h1>
      <p>This static page contains the full Kumquat product catalog without requiring JavaScript. It is generated at design time from <code>assets/main.js</code>.</p>
      <p><strong>Total products:</strong> ${products.length}</p>
      <p><strong>Generated:</strong> ${escapeHtml(generatedAt)}</p>
      <p><strong>JSON endpoint:</strong> <a href="assets/products.json">https://kumquat.info/assets/products.json</a></p>
      <p><strong>Curl:</strong> <code>curl -L --fail https://kumquat.info/assets/products.json</code></p>
    </section>
${products.map(renderProduct).join("\n")}
  </main>
</body>
</html>
`;
}

function main() {
  const products = extractProducts();

  fs.writeFileSync(jsonPath, JSON.stringify({
    generatedAt: new Date().toISOString(),
    source: "https://kumquat.info/assets/main.js",
    count: products.length,
    products
  }, null, 2) + "\n");

  fs.writeFileSync(htmlPath, renderHtml(products));
  console.log(`Wrote ${path.relative(rootDir, jsonPath)} and ${path.relative(rootDir, htmlPath)} with ${products.length} products.`);
}

main();
