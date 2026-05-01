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
const bestFor = "Campaign vendors, party committees, consultants, fundraisers, PACs, advocacy groups, pollsters, PR teams, election-tech vendors, lobbyists, journalists, and compliance sellers buy this list to find public political organizations, campaigns, offices, committees, spend signals, and service gaps.";

const fieldTemplates = {
  party: "Organization name, party, city, county, state, district or chapter, chair or public contact name where available, website, public email, phone, social links, meeting or events page, donation page, source URL, notes.",
  electionOffice: "Office or agency name, jurisdiction, city, county, state, election official name, role, public email, phone, website, voter information URL, candidate filing URL, RFP or procurement URL where available, source URL, notes.",
  candidate: "Candidate name, office, jurisdiction, district, party if public, filing status, incumbent or challenger status, website, campaign email, donation link, social links, election date, source URL, notes.",
  campaignGap: "Campaign name, candidate, office, jurisdiction, website, contact email, donation page status, volunteer form status, SMS signup status, email capture status, merch store status, accessibility or language gap, urgency score, source URL, notes.",
  finance: "Committee or donor name, committee type, jurisdiction, treasurer or public contact, total raised, total spent, cash on hand, contribution amount or vendor spend where applicable, filing date, source filing URL, recency score, notes.",
  ad: "Advertiser, candidate or committee, platform, ad library profile, ad creative link, spend range where public, start date, end date, issue or topic, landing page, donation page, target region if public, source URL, notes.",
  ballot: "Measure name or number, jurisdiction, topic, support committee, opposition committee, treasurer or public contact, website, donation link, funding raised, major donors where public, election date, source URL, notes.",
  media: "Outlet or creator name, contact name, political beat or ideology if publicly stated, city, state, website, public email, social links, newsletter or podcast link, sponsorship or advertising page, recent political coverage URL, source URL, notes.",
  advocacy: "Organization name, issue area, city, state, website, public email, leadership names, endorsement page, events page, donation page, PAC or lobbying signal where public, social links, source URL, notes.",
  vendor: "Vendor or firm name, specialty, party or client type if publicly stated, city, state, website, public email, public clients, case studies, service category, social links, source URL, notes.",
  legislative: "Official or office name, chamber or body, district, party if public, committee, role, government email, phone, official website, staff contact where public, bill or agenda topic, source URL, notes."
};

const products = [
  ["State Democratic Party Committee Directory", "$299", "500 records", "party", "state Democratic party committees, public contacts, websites, donation pages, events pages, and chapter signals"],
  ["State Republican Party Committee Directory", "$299", "500 records", "party", "state Republican party committees, public contacts, websites, donation pages, events pages, and chapter signals"],
  ["County Democratic Party Contact List", "$399", "1,000 records", "party", "county Democratic party organizations, chairs where public, public emails, meeting pages, events, social links, and donation pages"],
  ["County Republican Party Contact List", "$399", "1,000 records", "party", "county Republican party organizations, chairs where public, public emails, meeting pages, events, social links, and donation pages"],
  ["Local Party Club Directory", "$299", "500 records", "party", "local political clubs, chapter pages, public contacts, events, social links, donation links, and meeting information"],
  ["Precinct Chair and Committee Member Public Directory", "$399", "1,000 records", "party", "public precinct chairs, committee members, district organizers, party roles, public contact paths, and local party source links"],
  ["College Democrats and Young Democrats Chapter List", "$249", "500 records", "party", "College Democrats, Young Democrats, campus chapters, local chapters, event pages, contacts, and social links"],
  ["College Republicans and Young Republicans Chapter List", "$249", "500 records", "party", "College Republicans, Young Republicans, campus chapters, local chapters, event pages, contacts, and social links"],
  ["Libertarian Party Local Affiliate Directory", "$249", "500 records", "party", "Libertarian state and local affiliates, public contacts, event pages, social links, and donation pages"],
  ["Green Party Local Affiliate Directory", "$249", "500 records", "party", "Green Party state and local affiliates, public contacts, event pages, social links, and donation pages"],
  ["County Election Office Directory", "$349", "1,000 records", "electionOffice", "county election offices, election administrators, public emails, phone numbers, candidate filing pages, and election source links"],
  ["State Election Officials Directory", "$299", "500 records", "electionOffice", "state election offices, public officials, election division contacts, candidate filing resources, and source links"],
  ["Election Vendor RFP Tracker", "$499", "500 records", "electionOffice", "election-office RFPs, procurement pages, voting technology opportunities, deadlines, buyer contacts, and source documents"],
  ["Campaign Treasurer Directory", "$349", "500 records", "finance", "campaign treasurers, committees, public filing contacts, jurisdictions, filing records, and compliance source links"],
  ["Campaign Compliance Consultant Directory", "$349", "500 records", "vendor", "campaign compliance consultants, filing specialists, political accounting firms, public clients, and contact paths"],
  ["Election Law Firm Prospect List", "$399", "500 records", "vendor", "law firms and attorneys with election-law, campaign-finance, recount, ballot-access, or political compliance signals"],
  ["Political Texting Vendor Prospect List", "$349", "500 records", "vendor", "SMS, peer-to-peer texting, robocall, and voter-contact vendors serving campaigns, PACs, parties, and advocacy organizations"],
  ["Political Direct Mail Vendor Directory", "$349", "500 records", "vendor", "direct mail shops, printers, mail consultants, public campaign clients, specialties, and contact paths"],
  ["Political Fundraising Consultant Directory", "$399", "500 records", "vendor", "fundraising consultants, call-time firms, finance directors, event fundraising vendors, and public campaign client signals"],
  ["Political Polling Firm Directory", "$399", "500 records", "vendor", "pollsters, survey research firms, public political clients, specialties, locations, and public contact paths"],
  ["Campaigns With No Volunteer Signup", "$249", "500 records", "campaignGap", "campaign websites that appear active but lack a clear volunteer signup path"],
  ["Campaigns With Weak Email Capture", "$249", "500 records", "campaignGap", "campaign websites with no obvious newsletter, email signup, supporter capture, or CRM intake path"],
  ["Campaigns With No SMS Signup", "$249", "500 records", "campaignGap", "campaign websites with no clear SMS opt-in, texting program, or mobile supporter capture path"],
  ["Campaigns With No Spanish-Language Page", "$249", "500 records", "campaignGap", "campaign websites in relevant markets that appear to lack Spanish-language voter or supporter pages"],
  ["Campaigns With No Merch Store", "$249", "500 records", "campaignGap", "campaign websites that appear to lack a merchandise store or supporter commerce funnel"],
  ["Campaigns With Active Meta Political Ads", "$499", "500 records", "ad", "campaigns and committees with public Meta political or issue ad signals, ad creative links, landing pages, and spend ranges where available"],
  ["Campaigns With Active Google Political Ads", "$499", "500 records", "ad", "campaigns and committees with public Google political ad signals, advertiser pages, creatives, landing pages, and spend ranges where available"],
  ["Issue Advocacy Advertiser List", "$499", "500 records", "ad", "issue advocacy advertisers visible in public ad libraries, including topic, landing page, spend range where public, and sponsor signals"],
  ["PACs With High Cash on Hand", "$499", "500 records", "finance", "PACs and committees with high cash-on-hand signals, treasurer records, filing jurisdictions, spend context, and source filings"],
  ["PACs Spending on Digital Vendors", "$499", "500 records", "finance", "PACs and committees with public disbursements to digital advertising, website, email, texting, or campaign-technology vendors"],
  ["PACs Spending on Direct Mail Vendors", "$499", "500 records", "finance", "PACs and committees with public disbursements to mail shops, printers, design firms, and direct-mail consultants"],
  ["PACs Spending on Fundraising Consultants", "$499", "500 records", "finance", "PACs and committees with public disbursements to fundraising consultants, donor data vendors, events teams, and finance firms"],
  ["Leadership PAC Contact List", "$399", "500 records", "finance", "leadership PACs, treasurers, committee profiles, public contact paths, fundraising totals, spending totals, and source filings"],
  ["Super PAC Contact List", "$499", "500 records", "finance", "Super PACs, independent expenditure committees, treasurers, public contact paths, spending totals, donors, and filing source links"],
  ["State PAC and Committee Contact List", "$499", "1,000 records", "finance", "state-level PACs and political committees, treasurers, filing jurisdictions, public contact paths, totals, and source filings"],
  ["New Candidate Filing Alert List", "$399", "500 records", "candidate", "newly filed candidates, filing status changes, office, district, campaign website, public contact paths, and election dates"],
  ["Upcoming Local Election Candidate List", "$399", "500 records", "candidate", "candidates in upcoming local elections, offices, jurisdictions, campaign sites, public contacts, and election timing"],
  ["Open Seat Candidate Opportunity List", "$399", "500 records", "candidate", "candidates running for open seats, office type, district, filing status, campaign site, public contact path, and election date"],
  ["Primary Challenger Candidate List", "$399", "500 records", "candidate", "primary challengers, party if public, incumbent target, office, district, campaign site, public contact path, and election timing"],
  ["Incumbent Reelection Campaign List", "$399", "500 records", "candidate", "incumbents running for reelection, office, district, party if public, campaign website, public contacts, and election date"],
  ["City Council Candidate Contact List", "$349", "500 records", "candidate", "city council candidates, districts, public campaign contacts, donation links, websites, social links, and election dates"],
  ["County Supervisor Candidate Contact List", "$349", "500 records", "candidate", "county supervisor, county commissioner, and county board candidates with public campaign contacts and election timing"],
  ["Mayor Candidate Contact List", "$349", "500 records", "candidate", "mayoral candidates, city, public campaign contacts, websites, donation links, social links, and election dates"],
  ["State Legislature Candidate Contact List", "$399", "500 records", "candidate", "state house and state senate candidates, districts, parties if public, campaign contacts, websites, and election dates"],
  ["Judicial Candidate Contact List", "$399", "500 records", "candidate", "judicial candidates, court or seat, public campaign contacts, websites, donation links, social links, and election dates"],
  ["Sheriff Candidate Contact List", "$349", "500 records", "candidate", "sheriff candidates, county, public campaign contacts, websites, donation links, social links, and election timing"],
  ["District Attorney Candidate Contact List", "$349", "500 records", "candidate", "district attorney, prosecutor, and county attorney candidates with public campaign contact and election signals"],
  ["School Bond and Parcel Tax Measure List", "$399", "500 records", "ballot", "school bond measures, parcel tax campaigns, support/opposition committees, funding, donation pages, and election dates"],
  ["Housing Ballot Measure Campaign List", "$399", "500 records", "ballot", "housing, zoning, rent, development, and land-use ballot measure campaigns with committees, funding, and public contacts"],
  ["Labor Ballot Measure Campaign List", "$399", "500 records", "ballot", "labor, minimum wage, union, worker classification, and workplace ballot measure campaigns with committee and funding signals"],
  ["Cannabis Ballot Measure Campaign List", "$399", "500 records", "ballot", "cannabis legalization, tax, zoning, licensing, and local measure campaigns with committee, donor, and website signals"],
  ["Climate and Energy Ballot Measure Campaign List", "$399", "500 records", "ballot", "climate, energy, utility, environmental, and infrastructure ballot measure campaigns with committee and funding signals"],
  ["Police and Public Safety Ballot Measure Campaign List", "$399", "500 records", "ballot", "police, sheriff, jail, public safety, emergency services, and crime-related ballot measure campaigns"],
  ["Political Podcast Sponsorship List", "$299", "500 records", "media", "political podcasts, hosts, public emails, sponsorship pages, audience or topic signals, and recent episode links"],
  ["Political Newsletter Sponsorship List", "$299", "500 records", "media", "political newsletters, Substacks, outlet newsletters, public contacts, sponsor pages, beats, and recent issue links"],
  ["Conservative Media Contact List", "$299", "500 records", "media", "conservative local, state, and issue media contacts, newsletters, podcasts, public emails, and sponsorship pages"],
  ["Progressive Media Contact List", "$299", "500 records", "media", "progressive local, state, and issue media contacts, newsletters, podcasts, public emails, and sponsorship pages"],
  ["Local Political Facebook Group Admin Contact List", "$299", "500 records", "media", "public local political Facebook groups, admin contact paths where public, geography, topics, and social source links"],
  ["High-Dollar Political Donor List", "$599", "1,000 records", "finance", "public high-dollar donor records, employer and occupation fields where disclosed, candidate or committee recipient, totals, and recency scores"],
  ["Candidate Endorsement Page Tracker", "$299", "500 records", "advocacy", "candidate endorsement pages, endorsing organizations, public contacts, source links, issue categories, and election timing"],
  ["Newspaper Editorial Board Political Contact List", "$299", "500 records", "media", "newspaper editorial boards, opinion editors, political editors, public contact paths, endorsement pages, and recent election coverage"]
].map(([title, price, records, type, focus]) => ({
  title,
  category,
  price,
  records,
  description: `A public-source political CSV focused on ${focus}. Delivered as a CSV download link by email once available.`,
  fields: fieldTemplates[type],
  bestFor
}));

function renderAppendBlock(productsToAppend) {
  const entries = productsToAppend.map((product) => "  " + JSON.stringify([
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
  const productsToCreate = products.filter((product) => !existingTitles.has(product.title));
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
