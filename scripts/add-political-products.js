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

const category = "Political Data";
const bestFor = "Political consultants, campaign vendors, fundraisers, PR firms, advocacy groups, lobbyists, media companies, compliance vendors, and campaign software teams buy this list to find public political organizations, campaigns, officials, committees, or opportunity signals they can lawfully research and contact.";

const newProducts = [
  {
    title: "Local Candidate Contact List",
    price: "$249",
    records: "500 records",
    fields: "Candidate name, office running for, city, county, state, district, party if public, website, donation link, campaign email, social links, filing status, incumbent or challenger status, election date, source URL, notes.",
    description: "A public-source political CSV focused on local candidates with campaign contact, website, donation, filing, district, and election-timing signals for campaign vendors and consultants."
  },
  {
    title: "Campaign Vendor Prospect List",
    price: "$249",
    records: "500 records",
    fields: "Candidate or campaign name, website quality score, has donation page, has email signup, has SMS signup, bad mobile site signal, missing social links signal, contact email, source URL, notes.",
    description: "A campaign vendor prospect CSV built around campaigns that appear to need websites, fundraising pages, email capture, SMS capture, mobile fixes, social cleanup, or other campaign services."
  },
  {
    title: "Political Donor Prospect List",
    price: "$499",
    records: "1,000 records",
    fields: "Donor name, city, state, employer, occupation, donation amount, donation date, candidate or committee donated to, issue or party category, total donated, recency score, source filing URL, notes.",
    description: "A public campaign-finance CSV focused on political donor prospects from FEC and state campaign-finance sources, prepared for fundraisers, campaigns, PACs, and research teams."
  },
  {
    title: "Local Elected Officials Directory",
    price: "$299",
    records: "500 records",
    fields: "Name, office, city, county, state, district, government email, phone, staff contacts where public, committees, meeting schedule, official website, social links, source URL, notes.",
    description: "A public officials directory CSV focused on local elected officials, offices, public contact paths, committee assignments, meeting schedules, and official source links."
  },
  {
    title: "School Board Officials List",
    price: "$249",
    records: "500 records",
    fields: "School board member name, district, email, phone, term end date, next election year, board meeting schedule, public bio, social links, source URL, notes.",
    description: "A school board politics CSV focused on public board member contacts, district details, term timing, meeting schedules, bios, and public source links."
  },
  {
    title: "Ballot Measure Campaign List",
    price: "$399",
    records: "500 records",
    fields: "Measure name or number, location, topic, support committee, opposition committee, committee contacts, treasurer, website, donation link, funding raised, major donors, election date, source URL, notes.",
    description: "A ballot-measure campaign CSV focused on measures, committees, treasurers, websites, donation links, funding signals, major donors, and election timing."
  },
  {
    title: "Political Ad Buyer List",
    price: "$499",
    records: "500 records",
    fields: "Candidate, PAC, or committee, ad platform, ad creative link, spend range, start date, end date, topic, landing page, donation page, target region if public, source URL, notes.",
    description: "A political ad buyer CSV focused on public political ad library signals that show who is spending money now, where ads are running, and what landing pages they use."
  },
  {
    title: "Campaign Website Opportunity List",
    price: "$249",
    records: "500 records",
    fields: "Campaign name, candidate, office, website, problem labels, no donation button signal, slow site signal, mobile friendly status, email capture status, volunteer form status, broken links signal, privacy policy status, Spanish page status, contact email, source URL, notes.",
    description: "A campaign website opportunity CSV focused on public campaign sites with visible conversion, mobile, donation, volunteer, email-capture, privacy, language, or broken-link gaps."
  },
  {
    title: "Campaigns Without Donation Pages",
    price: "$249",
    records: "500 records",
    fields: "Candidate, office, campaign website, has donation link, donation platform used, missing ActBlue, WinRed, Anedot, or other platform signal, contact email, election date, source URL, notes.",
    description: "A direct fundraising-opportunity CSV focused on public campaigns that appear active but do not have a clear donation funnel or obvious donation platform."
  },
  {
    title: "Political Consultant Directory",
    price: "$299",
    records: "500 records",
    fields: "Consultant name, firm, specialty, party or ideology if publicly stated, publicly listed clients, website, email, location, social links, source URL, notes.",
    description: "A political consultant directory CSV focused on consultants, firms, specialties, public client signals, websites, emails, locations, and social links."
  },
  {
    title: "PAC and Committee Contact List",
    price: "$399",
    records: "500 records",
    fields: "PAC or committee name, treasurer, address, website, email, filing jurisdiction, total raised, total spent, cash on hand, top vendors, top donors, source filing URL, notes.",
    description: "A PAC and committee contact CSV focused on public committee filings, treasurers, contact paths, fundraising totals, spending totals, vendors, donors, and filing jurisdictions."
  },
  {
    title: "Political Newsletter and Media List",
    price: "$249",
    records: "500 records",
    fields: "Reporter or newsletter name, outlet, beat, city, state, email, X or Twitter link, Substack or newsletter link, topics covered, recent political article links, source URL, notes.",
    description: "A political PR outreach CSV focused on reporters, newsletter operators, outlets, beats, public emails, social links, newsletter links, topics, and recent political coverage."
  },
  {
    title: "Local Advocacy Organization List",
    price: "$249",
    records: "500 records",
    fields: "Organization name, issue area, city, state, website, email, leadership names, endorsement page, events page, donation page, social links, source URL, notes.",
    description: "A local advocacy organization CSV focused on public nonprofits, unions, issue groups, endorsement pages, events pages, donation pages, leadership, and coalition signals."
  },
  {
    title: "Public Meeting Agenda Tracker",
    price: "$399",
    records: "500 records",
    fields: "City, county, or school board, meeting date, agenda item, topic, department, staff report link, vote result if available, related company or person, public comment deadline, source URL, notes.",
    description: "A public meeting agenda tracker CSV focused on local government agenda items, topics, staff reports, deadlines, vote results, and early-warning public decision signals."
  },
  {
    title: "Real Estate Development Political List",
    price: "$399",
    records: "500 records",
    fields: "Project name, developer, city, planning case number, hearing date, address, zoning change requested, council district, related donations if public, lobbyist if public, agenda links, source URL, notes.",
    description: "A real estate and development political CSV focused on public planning cases, hearings, zoning changes, council districts, agenda links, and related public political signals."
  },
  {
    title: "Union Endorsement Tracker",
    price: "$299",
    records: "500 records",
    fields: "Union or local name, endorsed candidate, office, election, date announced, endorsement link, contact email, leadership names, past endorsements, source URL, notes.",
    description: "A union endorsement tracker CSV focused on public union endorsements, candidate relationships, offices, election timing, leadership, contact paths, and past endorsement signals."
  },
  {
    title: "Campaign Event List",
    price: "$249",
    records: "500 records",
    fields: "Candidate, event name, event type, date, time, location, RSVP link, donation price, hosts, sponsors, source link, notes.",
    description: "A campaign event CSV focused on public fundraisers, rallies, town halls, debates, RSVP pages, donation prices, hosts, sponsors, and source links."
  },
  {
    title: "Election Opportunity List for Vendors",
    price: "$399",
    records: "500 records",
    fields: "Campaign name, office, election date, contact email, website, bad website signal, no donation page signal, no merch store signal, no volunteer form signal, no SMS signup signal, weak social media signal, likely budget level, urgency score, source URL, notes.",
    description: "A vendor-focused election opportunity CSV that scores public campaigns by practical service gaps, election urgency, likely budget level, and pitch-ready opportunity signals."
  },
  {
    title: "Lobbying Client List",
    price: "$499",
    records: "500 records",
    fields: "Company or client, lobbyist, issue area, government body, filing date, amount paid if public, bills or issues mentioned, contact info, source filing, notes.",
    description: "A lobbying client CSV focused on public lobbying filings, clients, lobbyists, issue areas, government bodies, filing dates, spend where public, and source filing links."
  },
  {
    title: "Political Technology Stack List",
    price: "$399",
    records: "500 records",
    fields: "Campaign website, donation platform, email tool, analytics pixels, CRM clues, SMS platform, hosting provider, ad pixels, missing tools, source URL, notes.",
    description: "A political technology-stack CSV focused on campaign websites, donation platforms, email tools, analytics pixels, CRM clues, SMS tools, hosting, ad pixels, and missing tool signals."
  }
].map((product) => ({ ...product, category, bestFor }));

function renderAppendBlock(products) {
  const entries = products.map((product) => "  " + JSON.stringify([
    product.title,
    product.price,
    product.records,
    product.description,
    product.fields,
    product.paymentLink
  ])).join(",\n");

  return `

[
${entries}
].forEach(([title, price, records, description, fields, paymentLink]) => {
  products.push({
    title,
    category: ${JSON.stringify(category)},
    price,
    records,
    description,
    fields,
    bestFor: ${JSON.stringify(bestFor)},
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
  const productsToCreate = newProducts.filter((product) => !existingTitles.has(product.title));
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
