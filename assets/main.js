const toggle = document.querySelector(".nav-toggle");
const menu = document.querySelector("#nav-menu");

if (toggle && menu) {
  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const paymentLink = "https://buy.athena.live/b/aFaaEQ0Ie54Td4Q1p6gA801";

const productGroups = [
  {
    category: "Local Business",
    price: "$79",
    records: "500+ records",
    fields: "Business name, website, city, state, phone, public email, contact page, social link, source URL, notes.",
    description: "A curated local-business CSV built for agencies, consultants, sales teams, and operators who need targeted business prospects without manual research.",
    products: [
      "Restaurants in Los Angeles with email, phone, website, and Instagram",
      "Coffee shops in Southern California with owner/contact page",
      "Barbershops in California with website and booking link",
      "Nail salons in LA County with phone and Instagram",
      "Med spas in Beverly Hills with website and email",
      "Gyms and fitness studios in San Diego",
      "Yoga studios in California with contact emails",
      "Tattoo shops in major U.S. cities",
      "Auto repair shops in Texas with website and phone",
      "Car washes in Los Angeles with manager/contact info",
      "Dental offices in Orange County",
      "Chiropractors in California",
      "Private clinics with outdated websites",
      "Independent pharmacies by state",
      "Veterinarians in Southern California",
      "Pet groomers in Los Angeles",
      "Moving companies in California",
      "HVAC companies in Texas",
      "Plumbers in Arizona",
      "Electricians in Nevada",
      "Roofing companies in Florida",
      "Pool cleaning companies in Southern California",
      "Home cleaning businesses in LA",
      "Landscaping companies by ZIP code",
      "Pest control companies in California"
    ]
  },
  {
    category: "Events",
    price: "$99",
    records: "300+ records",
    fields: "Business or contact name, website, city, category, booking page, public email, phone, Instagram, source URL, notes.",
    description: "A niche event and entertainment CSV for outreach to venues, promoters, vendors, artists, and event-service buyers.",
    products: [
      "Wedding venues in Southern California with emails",
      "Event promoters in Los Angeles",
      "Nightclubs in LA with booking contacts",
      "Bars that host live music",
      "Independent music venues in California",
      "Artist websites with booking emails",
      "DJs in Los Angeles with Instagram and booking contact",
      "Event photographers in Southern California",
      "Videographers for weddings and events",
      "Party rental companies in California",
      "Catering companies in Los Angeles",
      "Food truck operators by city",
      "Comedy clubs in the United States",
      "Open mic venues in major cities",
      "Festival organizers with contact pages",
      "Conference venues with sales emails",
      "Corporate event planners in California",
      "Kids party businesses in LA",
      "Bounce house rental companies",
      "Florists that serve weddings"
    ]
  },
  {
    category: "Professional Services",
    price: "$149",
    records: "500+ records",
    fields: "Company name, website, city, state, service type, phone, public email, contact page, source URL, notes.",
    description: "A professional-services CSV for B2B sellers targeting firms, consultants, agencies, and specialized service providers.",
    products: [
      "Personal injury law firms in California",
      "Immigration lawyers in Los Angeles",
      "Criminal defense attorneys by city",
      "Family law firms in Southern California",
      "Estate planning attorneys in California",
      "CPAs in Los Angeles with websites",
      "Bookkeeping firms for small businesses",
      "Insurance agencies by state",
      "Real estate agents in Beverly Hills",
      "Mortgage brokers in California",
      "Property managers in Los Angeles",
      "Business consultants in the United States",
      "Marketing agencies in California",
      "Web design agencies serving local businesses",
      "IT service providers for small businesses",
      "Cybersecurity consultants by city",
      "Recruiting agencies in California",
      "Staffing companies in Los Angeles",
      "HR consultants for small businesses"
    ]
  },
  {
    category: "Needs Better Website",
    price: "$49",
    records: "250+ records",
    fields: "Business name, website, city, category, issue spotted, phone, contact page, source URL, notes.",
    description: "A website-opportunity CSV for web designers, SEO agencies, software companies, and consultants selling digital improvements.",
    products: [
      "Businesses with no website",
      "Businesses with outdated websites",
      "Businesses using only Facebook pages",
      "Restaurants without online ordering",
      "Law firms with slow websites",
      "Contractors without quote forms",
      "Med spas without booking links",
      "Salons without online scheduling",
      "Gyms without membership signup pages",
      "Event venues without inquiry forms",
      "Churches with outdated websites",
      "Nonprofits with broken donation pages",
      "Local businesses without SSL",
      "Businesses with broken contact forms",
      "Businesses with missing Google Business websites",
      "Businesses with old Wix/Squarespace sites",
      "Businesses without mobile-friendly websites"
    ]
  },
  {
    category: "High-Intent Sales",
    price: "$129",
    records: "250+ records",
    fields: "Company name, website, trigger signal, city, state, source URL, public contact link, notes, last checked.",
    description: "A trigger-based sales CSV for teams that want prospects showing buying signals, growth signals, hiring activity, or platform usage.",
    products: [
      "Businesses currently running Google Ads",
      "Local businesses running Meta ads",
      "Companies hiring salespeople",
      "Companies hiring web developers",
      "Businesses hiring marketing managers",
      "Startups that recently raised funding",
      "New businesses registered in California",
      "Recently opened restaurants",
      "Businesses with new locations",
      "Businesses with recent bad reviews",
      "Businesses with many reviews but poor websites",
      "Companies using outdated software",
      "Shopify stores in a niche",
      "WooCommerce stores in a niche",
      "Businesses using Calendly",
      "Businesses using HubSpot",
      "Businesses using Stripe checkout",
      "Businesses with abandoned blogs",
      "Businesses with active newsletters"
    ]
  },
  {
    category: "Niche Industry",
    price: "$99",
    records: "500+ records",
    fields: "Organization name, website, city, state, niche, phone, public email, contact page, source URL, notes.",
    description: "A niche-industry CSV for market research, partnerships, sales outreach, and vertical-specific campaign building.",
    products: [
      "Cannabis dispensaries by state",
      "Smoke shops in California",
      "Armenian-owned businesses in Los Angeles",
      "Kosher restaurants in California",
      "Vegan restaurants in Los Angeles",
      "Luxury car dealerships in California",
      "Boat dealers in coastal states",
      "Private schools in Southern California",
      "Daycares in Los Angeles",
      "Tutoring centers in California",
      "Trade schools in the United States",
      "Churches by denomination and city",
      "Mosques by city",
      "Synagogues by city",
      "Nonprofits by cause and location",
      "Charities with donation pages",
      "Senior care facilities in California",
      "Assisted living facilities by city",
      "Addiction treatment centers by state",
      "Mental health clinics with websites",
      "Physical therapy clinics",
      "Dermatology clinics",
      "Plastic surgery offices",
      "Dental implant clinics",
      "Urgent care centers",
      "Specialty medical practices"
    ]
  },
  {
    category: "Creator / Internet Business",
    price: "$99",
    records: "300+ records",
    fields: "Creator or brand name, website, platform, niche, public email, contact page, social link, source URL, notes.",
    description: "A creator and internet-business CSV for sponsorship, partnerships, influencer outreach, SaaS sales, and ecommerce prospecting.",
    products: [
      "YouTubers in a niche with business emails",
      "Podcasters with sponsorship contact info",
      "Newsletter creators by category",
      "Bloggers in a niche",
      "Substack writers by topic",
      "TikTok creators with emails",
      "Instagram creators in Los Angeles",
      "Independent artists with websites",
      "Musicians with tour dates",
      "Fashion brands on Shopify",
      "Small ecommerce brands by niche",
      "Etsy sellers with external websites",
      "Amazon sellers with brand websites",
      "DTC brands in skincare",
      "DTC brands in supplements",
      "DTC brands in pet products",
      "Indie software companies",
      "SaaS startups by category",
      "AI startups with contact emails"
    ]
  },
  {
    category: "Government / Public Data",
    price: "$149",
    records: "500+ records",
    fields: "Agency or organization, department, website, city, state, public contact page, source URL, category, notes.",
    description: "A public-data CSV for vendors, researchers, consultants, and operators working with government, municipal, and civic markets.",
    products: [
      "City vendors by category",
      "Government contractors by state",
      "Public school districts with contacts",
      "County offices by department",
      "City planning departments",
      "Public works departments",
      "Parks and recreation departments",
      "Chamber of commerce member lists",
      "Business license records by city",
      "Public procurement contacts",
      "Municipal event calendars",
      "Local government software vendors",
      "Public agencies using outdated websites"
    ]
  },
  {
    category: "Real Estate / Property",
    price: "$99",
    records: "500+ records",
    fields: "Company or property name, website, city, state, property type, phone, contact page, source URL, notes.",
    description: "A real-estate and property CSV for vendors, agencies, consultants, software companies, and service providers selling into property markets.",
    products: [
      "Apartment buildings in Los Angeles",
      "Property management companies",
      "Commercial real estate brokers",
      "Real estate developers in California",
      "Construction companies by city",
      "General contractors in Southern California",
      "Architects in Los Angeles",
      "Interior designers in California",
      "Home builders by state",
      "HOA management companies",
      "Storage facilities by city",
      "Mobile home parks by state",
      "Hotels and motels by city",
      "Airbnb property managers",
      "Coworking spaces in major cities"
    ]
  }
];

const productGrid = document.querySelector("[data-product-grid]");
const productCount = document.querySelector("[data-product-count]");
const filterWrap = document.querySelector("[data-catalog-filters]");

const products = productGroups.flatMap((group) =>
  group.products.map((title) => ({
    title,
    category: group.category,
    price: group.price,
    records: group.records,
    description: `${group.description} This list focuses on ${title.toLowerCase()} and is delivered as a clean downloadable CSV.`,
    fields: group.fields
  }))
);

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[char]);
}

function renderProducts(filter = "All") {
  if (!productGrid) return;

  const visibleProducts = filter === "All"
    ? products
    : products.filter((product) => product.category === filter);

  productGrid.innerHTML = visibleProducts.map((product) => `
    <article class="product-card">
      <div class="product-meta"><span>${escapeHtml(product.records)}</span><span>${escapeHtml(product.price)}</span></div>
      <span class="category-pill">${escapeHtml(product.category)}</span>
      <h3>${escapeHtml(product.title)}</h3>
      <p>${escapeHtml(product.description)}</p>
      <p class="best-for"><strong>Fields:</strong> ${escapeHtml(product.fields)}</p>
      <a class="button button-full" href="${paymentLink}" target="_blank" rel="noreferrer">Buy CSV</a>
    </article>
  `).join("");

  if (productCount) {
    productCount.textContent = String(visibleProducts.length);
  }
}

if (filterWrap) {
  filterWrap.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-filter]");
    if (!button) return;

    filterWrap.querySelectorAll("button").forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    renderProducts(button.dataset.filter);
  });
}

renderProducts();
