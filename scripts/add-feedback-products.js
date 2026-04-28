#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const rootDir = path.resolve(__dirname, "..");
const mainJsPath = path.join(rootDir, "assets", "main.js");
const envPath = path.join(rootDir, ".env");

function readEnv(filePath) {
  const env = {};
  if (!fs.existsSync(filePath)) return env;

  for (const line of fs.readFileSync(filePath, "utf8").split(/\r?\n/)) {
    const match = line.match(/^([A-Z0-9_]+)=(.*)$/);
    if (match) env[match[1]] = match[2];
  }
  return env;
}

function extractProducts() {
  const source = fs.readFileSync(mainJsPath, "utf8");
  const sandbox = {
    document: { querySelector() { return null; } },
    console
  };
  vm.createContext(sandbox);
  vm.runInContext(source + "\nthis.__products = products;", sandbox, { filename: mainJsPath });
  return sandbox.__products;
}

function slugify(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function titleFocus(title) {
  return title.toLowerCase().replace(/\s+-\s+/g, " ");
}

const categoryContent = {
  "Agent Stats": {
    description: (title) => "A premium Agent Stats CSV combining website gap, booking or intake gap, ad spend or activity signal, and contactability notes. This product focuses on " + titleFocus(title) + " and is delivered as a CSV download link by email once available.",
    fields: "Business or creator name, website or profile URL, city, state or market, category, website gap, booking or intake gap, ad spend or activity signal, public contact path, phone where available, source URLs, Agent Stats score, notes.",
    bestFor: "Agencies, SaaS teams, AI automation sellers, appointment platforms, ad teams, local service vendors, and partnership teams buy this list when they want both who to contact and why now."
  },
  "Recently Active": {
    description: (title) => "A recently-active CSV focused on businesses and creators showing motion through recent posts, hiring, updates, campaigns, events, or public operating signals. This product focuses on " + titleFocus(title) + " and is delivered as a CSV download link by email once available.",
    fields: "Business or creator name, website or profile URL, city, state or market, category, recent activity signal, activity date or recency window, opportunity gap, public contact path, source URL, notes.",
    bestFor: "Sales teams, agencies, SaaS companies, local vendors, sponsorship teams, and outbound operators buy this list to prioritize prospects that look active right now."
  },
  "High-Review Website Gap": {
    description: (title) => "A high-review website-gap CSV focused on businesses that appear commercially healthy but underpowered online. This product focuses on " + titleFocus(title) + " and is delivered as a CSV download link by email once available.",
    fields: "Business name, website or source profile, city, state, category, review count, rating signal, website gap, booking or conversion gap, contact page, phone, public email where available, source URL, notes.",
    bestFor: "Web agencies, SEO consultants, booking tools, review platforms, restaurant tech, med spa marketers, home-service SaaS teams, and local sales teams buy this list to find good businesses with fixable digital gaps."
  },
  "AI Automation Opportunity": {
    description: (title) => "An AI automation opportunity CSV focused on businesses still using manual, form-heavy, or under-automated customer intake and lead capture workflows. This product focuses on " + titleFocus(title) + " and is delivered as a CSV download link by email once available.",
    fields: "Business name, website, city, state, automation gap, intake or lead-capture signal, contact page, phone, public email where available, source URL, notes.",
    bestFor: "AI automation agencies, workflow consultants, CRM vendors, chatbot builders, form automation tools, and SaaS teams buy this list to find businesses with clear manual-process gaps."
  },
  "Local Sponsorship": {
    description: (title) => "A local sponsorship CSV focused on organizations, events, media properties, and community groups with public sponsor, vendor, advertiser, or partnership paths. This product focuses on " + titleFocus(title) + " and is delivered as a CSV download link by email once available.",
    fields: "Organization name, website, city, state, sponsorship type, sponsor page or media kit, contact page, public email where available, phone, audience or event signal, source URL, notes.",
    bestFor: "Local businesses, banks, dentists, med spas, restaurants, CPG brands, agencies, venues, and community advertisers buy this list to find reachable local sponsorship inventory."
  },
  "Platform Migration": {
    description: (title) => "A platform-migration CSV focused on businesses using outdated, weak, or migration-ready web, booking, ecommerce, ordering, or content platforms. This product focuses on " + titleFocus(title) + " and is delivered as a CSV download link by email once available.",
    fields: "Business name, website, city, state, current platform signal, migration opportunity, conversion or SEO gap, contact page, phone, public email where available, source URL, notes.",
    bestFor: "SaaS companies, ecommerce agencies, web designers, maintenance agencies, SEO teams, booking platforms, restaurant tech vendors, and migration consultants buy this list to find accounts ready for a better system."
  },
  "Professional Services": {
    description: (title) => "A high-ticket professional-services CSV focused on firms, clinics, consultants, facilities, and specialized providers with clear commercial value. This product focuses on " + titleFocus(title) + " and is delivered as a CSV download link by email once available.",
    fields: "Company name, website, city, state, service type, lead value signal, conversion gap where visible, phone, public email where available, contact page, source URL, notes.",
    bestFor: "B2B SaaS teams, agencies, lead generation companies, legal and medical marketers, recruiters, consultants, and sales teams buy this list to reach higher-value professional buyers."
  },
  "Creator Intelligence": {
    description: (title) => "A Creator Intelligence CSV focused on reachable sponsorship, PR, affiliate, and partnership opportunities. This product focuses on " + titleFocus(title) + " and is delivered as a CSV download link by email once available.",
    fields: "Creator or publisher name, platform, profile or website URL, niche, location where public, follower or traffic signal, engagement or audience signal, recent activity signal, public email or contact page, sponsor or affiliate signal, source URL, notes.",
    bestFor: "Brands, PR agencies, affiliate managers, creator partnership teams, local marketers, SaaS companies, and sponsorship teams buy this list to find creators and publishers with reachable contact paths."
  }
};

const newProducts = [
  ["500 Plumbers - Agent Stats Edition", "Agent Stats", "$149", "500 records"],
  ["500 Dentists - Agent Stats Edition", "Agent Stats", "$149", "500 records"],
  ["500 Med Spas - Agent Stats Edition", "Agent Stats", "$149", "500 records"],
  ["500 Restaurants - Agent Stats Edition", "Agent Stats", "$149", "500 records"],
  ["500 Law Firms - Agent Stats Edition", "Agent Stats", "$149", "500 records"],
  ["500 Wedding Venues - Agent Stats Edition", "Agent Stats", "$149", "500 records"],
  ["500 Property Managers - Agent Stats Edition", "Agent Stats", "$149", "500 records"],
  ["500 Churches - Agent Stats Edition", "Agent Stats", "$149", "500 records"],
  ["500 Gyms/Fitness Studios - Agent Stats Edition", "Agent Stats", "$149", "500 records"],
  ["500 Creators - Agent Stats Edition", "Agent Stats", "$199", "500 records"],
  ["500 Businesses Running Google Ads With Bad Landing Pages - Agent Stats", "Agent Stats", "$199", "500 records"],
  ["500 Law Firms With Google Ads But Weak Intake Pages - Agent Stats", "Agent Stats", "$199", "500 records"],
  ["500 Businesses That Posted on Instagram in the Last 30 Days", "Recently Active", "$99", "500 records"],
  ["500 Businesses Hiring Right Now", "Recently Active", "$99", "500 records"],
  ["500 Businesses Running Google Ads But With Weak Landing Pages", "Recently Active", "$99", "500 records"],
  ["500 Restaurants With Recent Menu Updates But No Online Ordering", "Recently Active", "$99", "500 records"],
  ["500 Contractors With Recent Project Photos But No Quote Form", "Recently Active", "$99", "500 records"],
  ["500 Churches With Recent Events But Outdated Donation Pages", "Recently Active", "$99", "500 records"],
  ["500 Creators Posting Weekly With Sponsor Emails", "Recently Active", "$149", "500 records"],
  ["500 Businesses With 4.5+ Reviews But Outdated Websites", "High-Review Website Gap", "$99", "500 records"],
  ["500 Businesses With High Reviews But No Online Booking", "High-Review Website Gap", "$99", "500 records"],
  ["500 Businesses With Lots of Google Reviews But No Email Capture", "High-Review Website Gap", "$99", "500 records"],
  ["500 Restaurants With Strong Reviews But No Catering Page", "High-Review Website Gap", "$99", "500 records"],
  ["500 Restaurants With Strong Reviews But No Online Ordering", "High-Review Website Gap", "$99", "500 records"],
  ["500 Med Spas With Instagram Activity But Weak Websites", "High-Review Website Gap", "$99", "500 records"],
  ["500 Contractors With Strong Reviews But No Quote Form", "High-Review Website Gap", "$99", "500 records"],
  ["500 Businesses With No Chatbot or Live Chat", "AI Automation Opportunity", "$79", "500 records"],
  ["500 Clinics With No Online Intake Automation", "AI Automation Opportunity", "$79", "500 records"],
  ["500 Law Firms With No AI Receptionist or Contact Flow", "AI Automation Opportunity", "$79", "500 records"],
  ["500 Home Service Companies Missing Quote Automation", "AI Automation Opportunity", "$79", "500 records"],
  ["500 Real Estate Agents With No Lead Capture Form", "AI Automation Opportunity", "$79", "500 records"],
  ["500 Med Spas With No Consultation Booking Flow", "AI Automation Opportunity", "$79", "500 records"],
  ["500 Restaurants With No SMS or Email Capture", "AI Automation Opportunity", "$79", "500 records"],
  ["500 Gyms With No Trial-Class Automation", "AI Automation Opportunity", "$79", "500 records"],
  ["500 Youth Sports Leagues Accepting Sponsors", "Local Sponsorship", "$99", "500 records"],
  ["500 School Booster Clubs With Sponsor Pages", "Local Sponsorship", "$99", "500 records"],
  ["500 Local Podcasts With Sponsor Contact Pages", "Local Sponsorship", "$99", "500 records"],
  ["500 Community Newsletters Accepting Sponsors", "Local Sponsorship", "$99", "500 records"],
  ["500 Event Calendars With Sponsorship Contacts", "Local Sponsorship", "$99", "500 records"],
  ["500 Charity Events With Sponsor Pages", "Local Sponsorship", "$99", "500 records"],
  ["500 Farmers Markets With Vendor or Sponsor Pages", "Local Sponsorship", "$99", "500 records"],
  ["500 Restaurants Using Outdated Ordering Platforms", "Platform Migration", "$79", "500 records"],
  ["500 Salons Using Old Booking Links", "Platform Migration", "$79", "500 records"],
  ["500 Stores Using Old Shopify Themes", "Platform Migration", "$79", "500 records"],
  ["500 WordPress Sites With Old Plugin or Theme Signals", "Platform Migration", "$79", "500 records"],
  ["500 Squarespace Businesses Needing Conversion Upgrades", "Platform Migration", "$79", "500 records"],
  ["500 Wix Businesses With No SEO Metadata", "Platform Migration", "$79", "500 records"],
  ["500 Businesses Still Using PDF Menus", "Platform Migration", "$79", "500 records"],
  ["500 Businesses Using Facebook as Their Only Website", "Platform Migration", "$79", "500 records"],
  ["500 Plastic Surgeons With Weak Landing Pages", "Professional Services", "$149", "500 records"],
  ["500 Orthodontists Without Online Consultation Booking", "Professional Services", "$149", "500 records"],
  ["500 Chiropractors Running Ads", "Professional Services", "$149", "500 records"],
  ["500 Fertility Clinics With Weak Lead Capture", "Professional Services", "$149", "500 records"],
  ["500 Senior Care Facilities With Outdated Websites", "Professional Services", "$149", "500 records"],
  ["500 Private Tutors and Test Prep Centers", "Professional Services", "$149", "500 records"],
  ["500 Immigration Consultants", "Professional Services", "$149", "500 records"],
  ["500 Tax Resolution Firms", "Professional Services", "$149", "500 records"],
  ["500 Business Brokers", "Professional Services", "$149", "500 records"],
  ["500 Franchise Consultants", "Professional Services", "$149", "500 records"],
  ["500 Creators With Sponsor Emails + Engagement Scores", "Creator Intelligence", "$299", "500 records"],
  ["500 Creators With Media Kits", "Creator Intelligence", "$199", "500 records"],
  ["500 Creators With Affiliate Pages", "Creator Intelligence", "$199", "500 records"],
  ["500 Creators With Newsletters + Sponsor Pages", "Creator Intelligence", "$299", "500 records"],
  ["500 YouTubers With Low Sponsor Saturation", "Creator Intelligence", "$299", "500 records"],
  ["500 TikTok Creators With Email in Bio", "Creator Intelligence", "$199", "500 records"],
  ["500 Local Food Creators by City", "Creator Intelligence", "$299", "500 records"],
  ["500 Wedding Creators by Region", "Creator Intelligence", "$299", "500 records"],
  ["500 Real Estate YouTubers by Market", "Creator Intelligence", "$299", "500 records"],
  ["500 AI Tool Reviewers", "Creator Intelligence", "$299", "500 records"],
  ["500 Small Business YouTubers", "Creator Intelligence", "$299", "500 records"],
  ["500 Med Spas With Active Instagram But Weak Booking Flow - Agent Stats", "Agent Stats", "$199", "500 records"],
  ["500 Churches With Recent Events But No Donation Automation - Agent Stats", "Agent Stats", "$149", "500 records"],
  ["500 Wedding Venues With Inquiry Gaps - Agent Stats", "Agent Stats", "$149", "500 records"],
  ["500 Property Managers With No Maintenance Request Portal - Agent Stats", "Agent Stats", "$149", "500 records"]
];

async function stripeRequest(pathname, form) {
  const body = new URLSearchParams(form);
  const response = await fetch("https://api.stripe.com/v1/" + pathname, {
    method: "POST",
    headers: {
      Authorization: "Bearer " + process.env.STRIPE_API_KEY,
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body
  });
  const json = await response.json();
  if (!response.ok) {
    throw new Error(json.error ? json.error.message : JSON.stringify(json));
  }
  return json;
}

async function createPaymentLink(product) {
  const amount = Number(product.price.replace(/[^0-9]/g, "")) * 100;
  const slug = slugify(product.title);
  const stripeProduct = await stripeRequest("products", {
    name: product.title,
    description: product.description,
    "metadata[catalog_slug]": slug,
    "metadata[category]": product.category,
    "metadata[records]": product.records
  });
  const price = await stripeRequest("prices", {
    currency: "usd",
    unit_amount: String(amount),
    product: stripeProduct.id,
    "metadata[catalog_slug]": slug
  });
  const link = await stripeRequest("payment_links", {
    "line_items[0][price]": price.id,
    "line_items[0][quantity]": "1",
    "metadata[catalog_slug]": slug,
    "metadata[category]": product.category
  });
  return link.url;
}

function renderAppendBlock(products) {
  const categories = Array.from(new Set(products.map((product) => product.category))).sort();
  const contentEntries = categories.map((category) => {
    const content = categoryContent[category];
    return [
      `  ${JSON.stringify(category)}: {`,
      `    description: ${content.description.toString()},`,
      `    fields: ${JSON.stringify(content.fields)},`,
      `    bestFor: ${JSON.stringify(content.bestFor)}`,
      "  }"
    ].join("\n");
  }).join(",\n");
  const entries = products.map((product) => {
    return "  " + JSON.stringify([
      product.title,
      product.category,
      product.price,
      product.records,
      product.paymentLink
    ]);
  }).join(",\n");

  return `

const buyerIntentProductContent = {
${contentEntries}
};

[
${entries}
].forEach(([title, category, price, records, paymentLink]) => {
  const content = buyerIntentProductContent[category];
  products.push({
    title,
    category,
    price,
    records,
    description: content.description(title),
    fields: content.fields,
    bestFor: content.bestFor,
    paymentLink
  });
});
`;
}

async function main() {
  const env = readEnv(envPath);
  process.env.STRIPE_API_KEY = process.env.STRIPE_API_KEY || env.STRIPE_API_KEY;
  if (!process.env.STRIPE_API_KEY) {
    throw new Error("Missing STRIPE_API_KEY");
  }

  const existingTitles = new Set(extractProducts().map((product) => product.title));
  const productsToCreate = newProducts
    .filter(([title]) => !existingTitles.has(title))
    .map(([title, category, price, records]) => {
      const content = categoryContent[category];
      return {
        title,
        category,
        price,
        records,
        description: content.description(title),
        fields: content.fields,
        bestFor: content.bestFor
      };
    });

  if (!productsToCreate.length) {
    console.log("No new products to create.");
    return;
  }

  for (let index = 0; index < productsToCreate.length; index += 1) {
    const product = productsToCreate[index];
    product.paymentLink = await createPaymentLink(product);
    console.log(`${index + 1}/${productsToCreate.length} ${product.title}`);
  }

  const source = fs.readFileSync(mainJsPath, "utf8");
  const marker = "\nconst productGrid = document.querySelector(\"[data-product-grid]\");";
  if (!source.includes(marker)) {
    throw new Error("Could not find product grid marker in assets/main.js");
  }
  const nextSource = source.replace(marker, renderAppendBlock(productsToCreate) + marker);
  fs.writeFileSync(mainJsPath, nextSource);
  console.log(`Added ${productsToCreate.length} products to ${path.relative(rootDir, mainJsPath)}.`);
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
