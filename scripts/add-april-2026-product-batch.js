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
  "AI Automation Opportunity": {
    description: (title) => "An AI automation opportunity CSV focused on businesses with visible lead-response, chat, booking, intake, receptionist, or AI SDR gaps. This product focuses on " + titleFocus(title) + " and is delivered as a CSV download link by email once available.",
    fields: "Business name, website, city, state, category, lead response or intake signal, chat or booking status, AI tool gap, contact page, phone, public email where available, source URL, suggested outreach angle, notes.",
    bestFor: "AI automation agencies, AI sales-agent builders, chatbot vendors, CRM consultants, booking platforms, appointment-setting teams, and outbound operators buy this list to find prospects with obvious automation gaps."
  },
  "AI Outbound Prospect": {
    description: (title) => "An AI outbound prospect CSV built for teams selling into agencies, SaaS companies, consultants, and operators already using outbound or automation workflows. This product focuses on " + titleFocus(title) + " and is delivered as a CSV download link by email once available.",
    fields: "Company name, website, niche, city or market where available, founder or public contact path, public email where available, outbound-relevance signal, tool or service signal, source URL, notes.",
    bestFor: "Cold email agencies, Clay and Smartlead operators, AI SDR teams, GoHighLevel agencies, automation consultants, SaaS founders, and growth teams buy this list for immediate outbound campaigns."
  },
  "Professional Services": {
    description: (title) => "A high-ticket professional-services CSV focused on clinics, firms, facilities, consultants, and specialized providers with clear commercial value. This product focuses on " + titleFocus(title) + " and is delivered as a CSV download link by email once available.",
    fields: "Company name, website, city, state, service type, lead value signal, booking or conversion gap where visible, phone, public email where available, contact page, source URL, notes.",
    bestFor: "B2B SaaS teams, agencies, healthcare marketers, legal marketers, recruiters, consultants, AI automation sellers, and sales teams buy this list to reach higher-value professional buyers."
  },
  "Local Service": {
    description: (title) => "A local-service CSV focused on reachable local operators with commercial buying intent, service demand, or visible website and conversion gaps. This product focuses on " + titleFocus(title) + " and is delivered as a CSV download link by email once available.",
    fields: "Business name, website, city, state, service category, local demand signal, website or conversion gap where visible, phone, public email where available, contact page, source URL, notes.",
    bestFor: "Local marketing agencies, SEO consultants, web designers, AI receptionist vendors, booking platforms, call tracking tools, and B2B sales teams buy this list to reach local operators."
  },
  "Ecommerce / Shopify Buyer": {
    description: (title) => "An ecommerce buyer CSV focused on Shopify, DTC, affiliate, SMS, live chat, page speed, ads, and lifecycle marketing signals. This product focuses on " + titleFocus(title) + " and is delivered as a CSV download link by email once available.",
    fields: "Brand name, website, ecommerce platform signal, category, country or market where available, marketing tech signal, conversion gap, affiliate or influencer page where available, contact page, public email where available, source URL, notes.",
    bestFor: "Email agencies, SMS platforms, CRO consultants, influencer agencies, affiliate managers, 3PLs, packaging vendors, AI support vendors, and ecommerce SaaS teams buy this list to reach active DTC buyers."
  },
  "Creator Intelligence": {
    description: (title) => "A Creator Intelligence CSV focused on reachable sponsorship, affiliate, UGC, consulting, PR, and partnership opportunities. This product focuses on " + titleFocus(title) + " and is delivered as a CSV download link by email once available.",
    fields: "Creator or publisher name, platform, profile or website URL, niche, location where public, audience or follower signal, sponsor or affiliate signal, public email or contact page, source URL, notes.",
    bestFor: "Brands, PR agencies, sponsorship teams, affiliate managers, creator partnership teams, ecommerce operators, local marketers, and SaaS companies buy this list to find reachable creators."
  },
  "Hiring Signal": {
    description: (title) => "A hiring-signal CSV focused on companies showing timely buyer intent through public roles, staffing needs, and operational expansion. This product focuses on " + titleFocus(title) + " and is delivered as a CSV download link by email once available.",
    fields: "Company name, website, city, state or market, role being hired, hiring signal URL, department or function, likely buying need, contact page, public email where available, phone where available, source URL, notes.",
    bestFor: "Recruiters, HR software teams, payroll vendors, training providers, agency sellers, AI automation consultants, scheduling tools, and sales teams buy this list to sell against active hiring intent."
  },
  "Reputation Signal": {
    description: (title) => "A reputation-signal CSV focused on businesses with review problems, response gaps, sentiment issues, or review-to-website conversion opportunities. This product focuses on " + titleFocus(title) + " and is delivered as a CSV download link by email once available.",
    fields: "Business name, website or source profile, city, state, category, rating signal, review count, review issue, recent review or response signal, contact page, phone, public email where available, source URL, notes.",
    bestFor: "Reputation management agencies, review software vendors, SEO agencies, local marketing consultants, CX platforms, and sales teams buy this list to find businesses with visible reputation urgency."
  },
  "Events and Venues": {
    description: (title) => "An event-economy CSV focused on venues, organizers, promoters, planners, event vendors, booking contacts, sponsorship paths, and meeting-space opportunities. This product focuses on " + titleFocus(title) + " and is delivered as a CSV download link by email once available.",
    fields: "Organization or venue name, website, city, state or market, event category, booking or sponsor signal, contact page, public email where available, phone, source URL, notes.",
    bestFor: "Event tech teams, sponsorship sellers, promoters, production vendors, AV companies, booking platforms, hospitality sellers, and partnership teams buy this list to reach event-economy buyers."
  },
  "Agent Stats": {
    description: (title) => "A premium Agent Stats CSV combining basic lead fields with lead score, contactability score, urgency score, tech gap, ad signal, suggested outreach angle, and a cold email prompt. This product focuses on " + titleFocus(title) + " and is delivered as a CSV download link by email once available.",
    fields: "Name, website, city, phone, public email, contact page, lead score, contactability score, urgency score, tech gap, ad signal, suggested outreach angle, cold email prompt, source URLs, notes.",
    bestFor: "AI sales-agent teams, outbound agencies, SDR teams, automation consultants, SaaS sellers, local marketing agencies, and RevOps teams buy this premium edition when they want both prospect records and ready-to-use outreach context."
  }
};

const newProducts = [
  ["500 Businesses With Slow Lead Response Signals", "AI Automation Opportunity", "$149", "500 records"],
  ["500 Service Businesses Missing Live Chat", "AI Automation Opportunity", "$99", "500 records"],
  ["500 Businesses With Contact Forms But No Booking Link", "AI Automation Opportunity", "$99", "500 records"],
  ["500 Companies Hiring Sales Reps But No AI SDR Tool Signal", "AI Automation Opportunity", "$199", "500 records"],
  ["500 Local Businesses With \"Request Quote\" Forms", "AI Automation Opportunity", "$99", "500 records"],
  ["500 Businesses Using Calendly/HubSpot/Formstack Signals", "AI Automation Opportunity", "$149", "500 records"],
  ["500 SMBs With Many Reviews But Weak Website Conversion", "AI Automation Opportunity", "$149", "500 records"],
  ["500 Home Service Businesses Needing AI Phone Receptionists", "AI Automation Opportunity", "$149", "500 records"],
  ["500 Clinics/Medspas With Missed-Call Risk Signals", "AI Automation Opportunity", "$149", "500 records"],
  ["500 Law Firms With Intake Form But No AI Chat/Intake Bot", "AI Automation Opportunity", "$199", "500 records"],
  ["1,000 B2B SaaS Companies With Public Founder Emails", "AI Outbound Prospect", "$299", "1,000 records"],
  ["1,000 Agencies Selling AI Automation Services", "AI Outbound Prospect", "$199", "1,000 records"],
  ["500 Cold Email Agencies by Niche", "AI Outbound Prospect", "$149", "500 records"],
  ["500 Appointment-Setting Agencies", "AI Outbound Prospect", "$149", "500 records"],
  ["500 Local SEO Agencies Selling to Contractors", "AI Outbound Prospect", "$149", "500 records"],
  ["500 Web Design Agencies Targeting Restaurants", "AI Outbound Prospect", "$149", "500 records"],
  ["500 Fractional CMOs / Growth Consultants", "AI Outbound Prospect", "$149", "500 records"],
  ["500 GoHighLevel Agencies by Niche", "AI Outbound Prospect", "$199", "500 records"],
  ["500 AI Consultant Websites With Contact Info", "AI Outbound Prospect", "$199", "500 records"],
  ["1,000 \"AI Automation Agency\" Websites", "AI Outbound Prospect", "$299", "1,000 records"],
  ["500 Urgent Care Clinics", "Professional Services", "$149", "500 records"],
  ["500 Physical Therapy Clinics", "Professional Services", "$149", "500 records"],
  ["500 Chiropractors Without Online Booking", "Professional Services", "$99", "500 records"],
  ["500 Veterinary Clinics Without Online Booking", "Professional Services", "$99", "500 records"],
  ["500 Assisted Living Facilities", "Professional Services", "$199", "500 records"],
  ["500 Addiction Treatment Centers", "Professional Services", "$249", "500 records"],
  ["500 Cosmetic Dentists", "Professional Services", "$149", "500 records"],
  ["500 Orthodontists", "Professional Services", "$149", "500 records"],
  ["500 Plastic Surgery Clinics", "Professional Services", "$199", "500 records"],
  ["500 Fertility Clinics", "Professional Services", "$249", "500 records"],
  ["500 Funeral Homes With Outdated Websites", "Local Service", "$99", "500 records"],
  ["500 Bail Bonds Companies", "Professional Services", "$149", "500 records"],
  ["500 Security Guard Companies", "Local Service", "$149", "500 records"],
  ["500 Private Investigation Firms", "Professional Services", "$149", "500 records"],
  ["500 Commercial Cleaning Companies", "Local Service", "$99", "500 records"],
  ["500 Pest Control Companies", "Local Service", "$99", "500 records"],
  ["500 Garage Door Companies", "Local Service", "$99", "500 records"],
  ["500 Pool Cleaning Companies", "Local Service", "$99", "500 records"],
  ["500 Solar Installers", "Local Service", "$149", "500 records"],
  ["500 Roofing Companies Running Ads", "Local Service", "$149", "500 records"],
  ["1,000 Shopify Stores With Klaviyo Signal", "Ecommerce / Shopify Buyer", "$299", "1,000 records"],
  ["1,000 Shopify Stores Without SMS Marketing Signal", "Ecommerce / Shopify Buyer", "$299", "1,000 records"],
  ["1,000 DTC Brands With Affiliate Program Pages", "Ecommerce / Shopify Buyer", "$299", "1,000 records"],
  ["500 Shopify Stores With Poor Page Speed", "Ecommerce / Shopify Buyer", "$149", "500 records"],
  ["500 Beauty Shopify Brands", "Ecommerce / Shopify Buyer", "$199", "500 records"],
  ["500 Pet Product Shopify Brands", "Ecommerce / Shopify Buyer", "$199", "500 records"],
  ["500 Supplements Brands With Public Contact Info", "Ecommerce / Shopify Buyer", "$199", "500 records"],
  ["500 Apparel Brands With Influencer/Affiliate Pages", "Ecommerce / Shopify Buyer", "$199", "500 records"],
  ["500 Shopify Stores Without Live Chat", "Ecommerce / Shopify Buyer", "$199", "500 records"],
  ["500 Shopify Stores Running Meta Ads", "Ecommerce / Shopify Buyer", "$299", "500 records"],
  ["500 YouTube Channels With Sponsor Email In Bio", "Creator Intelligence", "$299", "500 records"],
  ["500 Podcasts Accepting Sponsors", "Creator Intelligence", "$299", "500 records"],
  ["500 Newsletter Operators Accepting Sponsors", "Creator Intelligence", "$249", "500 records"],
  ["500 Local Event Creators With Sponsor Pages", "Creator Intelligence", "$199", "500 records"],
  ["500 TikTok Shop Affiliates by Niche", "Creator Intelligence", "$299", "500 records"],
  ["500 UGC Creators With Public Email", "Creator Intelligence", "$199", "500 records"],
  ["500 Amazon Influencers by Category", "Creator Intelligence", "$299", "500 records"],
  ["500 LinkedIn Creators Selling Consulting", "Creator Intelligence", "$199", "500 records"],
  ["500 Real Estate YouTubers With Public Contact Info", "Creator Intelligence", "$199", "500 records"],
  ["500 Finance Creators With Sponsor Signals", "Creator Intelligence", "$299", "500 records"],
  ["500 Companies Hiring SDRs", "Hiring Signal", "$199", "500 records"],
  ["500 Companies Hiring Appointment Setters", "Hiring Signal", "$199", "500 records"],
  ["500 Local Businesses Hiring Receptionists", "Hiring Signal", "$149", "500 records"],
  ["500 Clinics Hiring Front Desk Staff", "Hiring Signal", "$149", "500 records"],
  ["500 Restaurants Hiring Managers", "Hiring Signal", "$99", "500 records"],
  ["500 Contractors Hiring Estimators", "Hiring Signal", "$149", "500 records"],
  ["500 Companies Hiring Customer Support Reps", "Hiring Signal", "$199", "500 records"],
  ["500 Businesses Hiring Social Media Managers", "Hiring Signal", "$149", "500 records"],
  ["500 Small Businesses Hiring Bookkeepers", "Hiring Signal", "$149", "500 records"],
  ["500 Companies Hiring AI/Automation Roles", "Hiring Signal", "$249", "500 records"],
  ["500 Businesses With 3.5-Star Rating But High Review Count", "Reputation Signal", "$149", "500 records"],
  ["500 Restaurants With Bad Recent Reviews", "Reputation Signal", "$149", "500 records"],
  ["500 Medspas With Bad Recent Reviews", "Reputation Signal", "$199", "500 records"],
  ["500 Contractors With Poor Review Response Rate", "Reputation Signal", "$149", "500 records"],
  ["500 Dentists With Bad Review Signals", "Reputation Signal", "$199", "500 records"],
  ["500 Local Businesses With No Review Replies", "Reputation Signal", "$149", "500 records"],
  ["500 Businesses With Great Reviews But Weak Website", "Reputation Signal", "$149", "500 records"],
  ["500 Businesses With Many Reviews But No Booking Link", "Reputation Signal", "$149", "500 records"],
  ["500 Businesses With Bad Yelp But Good Google Reviews", "Reputation Signal", "$199", "500 records"],
  ["500 Reputation Management Prospects by City", "Reputation Signal", "$149", "500 records"],
  ["1,000 Music Venues With Booking Emails", "Events and Venues", "$299", "1,000 records"],
  ["500 Comedy Clubs With Booking Contacts", "Events and Venues", "$199", "500 records"],
  ["500 Nightclubs With Promoter Contacts", "Events and Venues", "$199", "500 records"],
  ["500 Festival Organizer Contacts", "Events and Venues", "$299", "500 records"],
  ["500 Event Production Companies", "Events and Venues", "$149", "500 records"],
  ["500 Audio/Visual Rental Companies", "Events and Venues", "$149", "500 records"],
  ["500 Wedding Planners With Vendor Pages", "Events and Venues", "$149", "500 records"],
  ["500 Corporate Event Planners", "Events and Venues", "$199", "500 records"],
  ["500 Churches With Event Rental Pages", "Events and Venues", "$149", "500 records"],
  ["500 Hotels With Event/Meeting Space Contacts", "Events and Venues", "$199", "500 records"],
  ["500 Restaurants Without Online Ordering - Agent Stats Edition", "Agent Stats", "$149", "500 records"],
  ["500 Contractors Without Booking - Agent Stats Edition", "Agent Stats", "$199", "500 records"],
  ["500 Law Firms With Slow Websites - Agent Stats Edition", "Agent Stats", "$249", "500 records"],
  ["500 Medspas With Weak Booking Pages - Agent Stats Edition", "Agent Stats", "$199", "500 records"],
  ["500 Shopify Stores Without Live Chat - Agent Stats Edition", "Agent Stats", "$299", "500 records"],
  ["500 Creators With Sponsor Signals - Agent Stats Edition", "Agent Stats", "$299", "500 records"]
];

async function stripeRequest(pathname, form) {
  const response = await fetch("https://api.stripe.com/v1/" + pathname, {
    method: "POST",
    headers: {
      Authorization: "Bearer " + process.env.STRIPE_API_KEY,
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: new URLSearchParams(form)
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
  const blockName = "april2026ProductContent";
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

const ${blockName} = {
${contentEntries}
};

[
${entries}
].forEach(([title, category, price, records, paymentLink]) => {
  const content = ${blockName}[category];
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
  fs.writeFileSync(mainJsPath, source.replace(marker, renderAppendBlock(productsToCreate) + marker));
  console.log(`Added ${productsToCreate.length} products to ${path.relative(rootDir, mainJsPath)}.`);
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
