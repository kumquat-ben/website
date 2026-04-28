#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const rootDir = path.resolve(__dirname, "..");
const productsPath = path.join(rootDir, "assets", "products.json");

const pages = [
  {
    slug: "website-opportunity-lists",
    title: "Website Opportunity Lists",
    eyebrow: "Website gaps",
    description: "Bad websites, no website, broken forms, missing booking, no online ordering, outdated donation pages, slow sites, broken SSL, old WordPress signals, and urgent reputation gaps.",
    categories: ["Website Opportunity", "High-Review Website Gap", "Platform Migration", "Reputation Signal"],
    include: /(website|websites|wordpress|ssl|slow|broken|contact form|booking|online ordering|ordering|donation|pdf menu|facebook as their only website|landing page|bad reviews|reputation)/i
  },
  {
    slug: "ad-spend-signal-lists",
    title: "Ad Spend Signal Lists",
    eyebrow: "Paid search intent",
    description: "Plumbers, HVAC, roofers, lawyers, med spas, dentists, and other competitive markets where prospects appear to be running Google Ads or paying for demand.",
    categories: ["Ad Spend Signal", "Agent Stats", "Recently Active"],
    include: /(google ads|running ads|ad spend|bad landing pages|weak landing pages|weak intake pages)/i
  },
  {
    slug: "creator-lists",
    title: "Creator Lists",
    eyebrow: "Creator intelligence",
    description: "Influencers, YouTubers, streamers, bloggers, podcasters, newsletter operators, and creators with business emails, contact pages, sponsor signals, or engagement scores.",
    categories: ["Creator Intelligence"],
    include: /(creator|creators|youtube|youtuber|youtubers|blogger|bloggers|streamer|streamers|podcast|newsletter|influencer|influencers|business emails|sponsor|affiliate|media kit)/i
  },
  {
    slug: "professional-services-lists",
    title: "Professional Services Lists",
    eyebrow: "High-ticket services",
    description: "Lawyers, CPAs, accountants, insurance agencies, mortgage brokers, consultants, clinics, and other professional buyers with high lead value.",
    categories: ["Professional Services"],
    include: /(law|lawyer|lawyers|law firm|law firms|cpa|cpas|accountant|accounting|insurance|mortgage|consultant|consultants|clinic|dentist|orthodontist|plastic surgeon|fertility|tax)/i
  },
  {
    slug: "local-service-lists",
    title: "Local Service Lists",
    eyebrow: "Local operators",
    description: "Dentists, vets, salons, gyms, auto repair shops, tattoo shops, HVAC companies, roofers, plumbers, contractors, and other local service businesses.",
    categories: ["Website Opportunity", "Software Gap", "Ad Spend Signal", "AI Automation Opportunity", "High-Review Website Gap", "Platform Migration", "Agent Stats", "Local Service"],
    include: /(dentist|dentists|vet|vets|salon|salons|gym|gyms|fitness|auto repair|auto shop|auto shops|tattoo|hvac|roofer|roofers|plumber|plumbers|contractor|contractors|home service|med spa|med spas|barber|barbers|chiropractor|repair)/i
  },
  {
    slug: "agent-stats-lists",
    title: "Agent Stats Lists",
    eyebrow: "Premium buyer intent",
    description: "Premium versions of high-intent lists with lead score, outreach angle, AI prompt, opportunity reason, website gap, booking gap, and ad spend or activity signal.",
    categories: ["Agent Stats"],
    include: /agent stats/i
  }
];

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[char]);
}

function priceNumber(price) {
  const value = String(price).replace(/[^0-9]/g, "");
  return value || "0";
}

function productMatches(product, page) {
  return page.categories.includes(product.category) && page.include.test([
    product.title,
    product.category,
    product.description,
    product.fields,
    product.bestFor
  ].join(" "));
}

function nav(prefix) {
  return `
  <header class="site-header">
    <nav class="nav container" aria-label="Main navigation">
      <a class="brand" href="${prefix}index.html" aria-label="Kumquat home"><span class="brand-mark" aria-hidden="true"><i class="fa-solid fa-lemon"></i></span><span>Kumquat</span></a>
      <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="nav-menu">Menu</button>
      <div class="nav-menu" id="nav-menu">
        <a href="${prefix}index.html">Home</a>
        <a href="${prefix}lists.html">Lists</a>
        <a href="${prefix}custom-list.html">Custom List</a>
        <a href="${prefix}compliance.html">Compliance</a>
        <a href="${prefix}skills.html">AI Skills</a>
        <a href="${prefix}contact.html">Contact</a>
        <a class="button button-small" href="${prefix}lists.html">Browse Lists</a>
      </div>
    </nav>
  </header>`;
}

function footer(prefix) {
  return `
  <footer class="footer">
    <div class="container footer-grid">
      <div><a class="brand" href="${prefix}index.html"><span class="brand-mark" aria-hidden="true"><i class="fa-solid fa-lemon"></i></span><span>Kumquat</span></a><p>Fresh leads. Picked by niche.</p></div>
      <div class="footer-links"><a href="${prefix}index.html">Home</a><a href="${prefix}lists.html">Lists</a><a href="${prefix}custom-list.html">Custom List</a><a href="${prefix}compliance.html">Compliance</a><a href="${prefix}skills.html">AI Skills</a><a href="${prefix}contact.html">Contact</a></div>
    </div>
    <div class="container footer-bottom">
      <p>Powered by Athena Live LLC, USA.</p>
      <p>&copy; 2026 Kumquat. All rights reserved.</p>
    </div>
  </footer>`;
}

function card(product) {
  const action = product.downloadLink ? [
    '<div class="product-actions">',
    '<a class="button button-full" href="' + escapeHtml("../" + product.downloadLink) + '" download>Download CSV</a>',
    product.previewLink ? '<a class="button button-secondary button-full" href="' + escapeHtml("../" + product.previewLink) + '">Preview Data</a>' : '',
    '</div>'
  ].join("\n") : '<a class="button button-full" href="' + escapeHtml(product.paymentLink) + '" target="_blank" rel="noreferrer">Buy CSV</a>';

  return [
    '<article class="product-card">',
    '<div class="product-meta"><span>' + escapeHtml(product.records) + '</span><span>' + escapeHtml(product.price) + '</span></div>',
    '<span class="category-pill">' + escapeHtml(product.category) + '</span>',
    '<h3>' + escapeHtml(product.title) + '</h3>',
    '<p>' + escapeHtml(product.description) + '</p>',
    '<p class="best-for"><strong>Who buys this:</strong> ' + escapeHtml(product.bestFor) + '</p>',
    '<p class="best-for"><strong>Expected fields:</strong> ' + escapeHtml(product.fields) + '</p>',
    action,
    '</article>'
  ].join("\n");
}

function schema(page, products) {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `https://kumquat.info/${page.slug}/#webpage`,
        url: `https://kumquat.info/${page.slug}/`,
        name: `${page.title} - Kumquat`,
        description: page.description,
        isPartOf: { "@id": "https://kumquat.info/#website" }
      },
      {
        "@type": "ItemList",
        "@id": `https://kumquat.info/${page.slug}/#products`,
        name: page.title,
        numberOfItems: products.length,
        itemListElement: products.slice(0, 20).map((product, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "Product",
            name: product.title,
            description: product.description,
            offers: {
              "@type": "Offer",
              price: priceNumber(product.price),
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
              url: product.downloadLink ? `https://kumquat.info/${product.downloadLink}` : product.paymentLink
            }
          }
        }))
      }
    ]
  }, null, 2);
}

function renderPage(page, products) {
  const prefix = "../";
  const related = pages.filter((item) => item.slug !== page.slug);
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="${escapeHtml(page.description)}">
  <meta name="robots" content="index, follow">
  <meta name="theme-color" content="#f47b20">
  <link rel="canonical" href="https://kumquat.info/${page.slug}/">
  <title>${escapeHtml(page.title)} - Kumquat</title>
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="Kumquat">
  <meta property="og:title" content="${escapeHtml(page.title)} - Kumquat">
  <meta property="og:description" content="${escapeHtml(page.description)}">
  <meta property="og:url" content="https://kumquat.info/${page.slug}/">
  <meta name="twitter:card" content="summary">
  <meta name="twitter:title" content="${escapeHtml(page.title)} - Kumquat">
  <meta name="twitter:description" content="${escapeHtml(page.description)}">
  <script type="application/ld+json">
${schema(page, products)}
  </script>
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-9CSN4VQC4H"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag("js", new Date());
    gtag("config", "G-9CSN4VQC4H");
  </script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
  <link rel="stylesheet" href="${prefix}assets/style.css">
</head>
<body>
${nav(prefix)}
  <main>
    <section class="page-hero">
      <div class="container">
        <p class="eyebrow">${escapeHtml(page.eyebrow)}</p>
        <h1>${escapeHtml(page.title)}</h1>
        <p>${escapeHtml(page.description)}</p>
        <div class="hero-actions">
          <a class="button" href="#products">Browse ${products.length} Lists</a>
          <a class="button button-secondary" href="${prefix}custom-list.html">Request Custom List</a>
        </div>
      </div>
    </section>

    <section class="section section-soft" id="products">
      <div class="container">
        <div class="catalog-summary">
          <p><strong>${products.length}</strong> matching CSV products, each with buyer context, expected fields, and a dedicated checkout or download.</p>
          <p class="summary-detail">These category pages group products by buyer intent so a prospect can quickly see why the lead should be contacted now.</p>
        </div>
        <div class="product-grid catalog-grid">
${products.map(card).join("\n")}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-heading">
          <p class="eyebrow">More categories</p>
          <h2>Browse by sales motion.</h2>
        </div>
        <div class="request-grid">
${related.map((item) => `          <div><a href="${prefix}${item.slug}/">${escapeHtml(item.title)}</a></div>`).join("\n")}
        </div>
      </div>
    </section>
  </main>
${footer(prefix)}
  <script src="${prefix}assets/main.js?v=20260428-products-362"></script>
</body>
</html>
`;
}

function main() {
  const data = JSON.parse(fs.readFileSync(productsPath, "utf8"));
  for (const page of pages) {
    const products = data.products.filter((product) => productMatches(product, page));
    const dir = path.join(rootDir, page.slug);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, "index.html"), renderPage(page, products));
    console.log(`Wrote ${page.slug}/index.html with ${products.length} products.`);
  }
}

main();
