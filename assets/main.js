const toggle = document.querySelector(".nav-toggle");
const menu = document.querySelector("#nav-menu");

if (toggle && menu) {
  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const paymentLink = "https://buy.athena.live/b/aFaaEQ0Ie54Td4Q1p6gA801";

const productPaymentLinks = {
  "Restaurants in Los Angeles with email, phone, website, and Instagram": "https://buy.athena.live/b/fZu9AMdv02WLgh2aZGgA805",
  "Coffee shops in Southern California with owner/contact page": "https://buy.athena.live/b/cNi4gs8aGeFt5CoffWgA802",
  "Barbershops in California with website and booking link": "https://buy.athena.live/b/bJe5kw62y8h58OA4BigA804",
  "Nail salons in LA County with phone and Instagram": "https://buy.athena.live/b/eVq9AM8aGapd2qc3xegA803",
  "Med spas in Beverly Hills with website and email": "https://buy.athena.live/b/bJe9AMbmS2WL9SE8RygA806",
  "Gyms and fitness studios in San Diego": "https://buy.athena.live/b/dRmaEQ0Ie7d19SEebSgA807",
  "Yoga studios in California with contact emails": "https://buy.athena.live/b/bJeeV676C1SH9SEgk0gA808",
  "Tattoo shops in major U.S. cities": "https://buy.athena.live/b/cNi9AMgHceFt9SE3xegA809",
  "Auto repair shops in Texas with website and phone": "https://buy.athena.live/b/28EbIUcqW0ODfcYebSgA80a",
  "Car washes in Los Angeles with manager/contact info": "https://buy.athena.live/b/cNi4gsaiO7d18OAebSgA80b",
  "Dental offices in Orange County": "https://buy.athena.live/b/dRm5kw8aG0ODc0MaZGgA80c",
  "Chiropractors in California": "https://buy.athena.live/b/28EcMY1Mi2WL9SE3xegA80d",
  "Private clinics with outdated websites": "https://buy.athena.live/b/4gM8wI62ygNB7Kw6JqgA80e",
  "Independent pharmacies by state": "https://buy.athena.live/b/14A28kcqW54Td4Q9VCgA80f",
  "Veterinarians in Southern California": "https://buy.athena.live/b/14A00cbmS7d1fcYc3KgA80h",
  "Pet groomers in Los Angeles": "https://buy.athena.live/b/4gM28kdv054Te8U6JqgA80g",
  "Moving companies in California": "https://buy.athena.live/b/4gMbIUez468X9SE5FmgA80i",
  "HVAC companies in Texas": "https://buy.athena.live/b/7sYdR2bmS68X6Gsc3KgA80j",
  "Plumbers in Arizona": "https://buy.athena.live/b/7sY8wIaiO2WLfcYaZGgA80l",
  "Electricians in Nevada": "https://buy.athena.live/b/4gM28k3Uq68X8OA7NugA80k",
  "Roofing companies in Florida": "https://buy.athena.live/b/00w00c9eKapdc0M1p6gA80m",
  "Pool cleaning companies in Southern California": "https://buy.athena.live/b/4gM3co3Uqcxl9SEebSgA80p",
  "Home cleaning businesses in LA": "https://buy.athena.live/b/28EaEQ3Uq40PaWI0l2gA80n",
  "Landscaping companies by ZIP code": "https://buy.athena.live/b/28EcMYbmS1SH8OAc3KgA80o",
  "Pest control companies in California": "https://buy.athena.live/b/14A00c1MifJx6Gs6JqgA80q",
  "Wedding venues in Southern California with emails": "https://buy.athena.live/b/dRm00cbmS0OD0i49VCgA80t",
  "Event promoters in Los Angeles": "https://buy.athena.live/b/00w6oA4Yu68X0i43xegA80s",
  "Nightclubs in LA with booking contacts": "https://buy.athena.live/b/14A14g3Uqbthgh22tagA80r",
  "Bars that host live music": "https://buy.athena.live/b/7sY7sEez4cxlgh26JqgA80u",
  "Independent music venues in California": "https://buy.athena.live/b/28E8wI1Miapd8OA4BigA80v",
  "Artist websites with booking emails": "https://buy.athena.live/b/28E9AM3Uqbth3ug9VCgA80w",
  "DJs in Los Angeles with Instagram and booking contact": "https://buy.athena.live/b/5kQ3co9eK68X0i4c3KgA80x",
  "Event photographers in Southern California": "https://buy.athena.live/b/00w8wIaiOfJx4ykaZGgA80y",
  "Videographers for weddings and events": "https://buy.athena.live/b/9B63co0Ie2WL4ykc3KgA80z",
  "Party rental companies in California": "https://buy.athena.live/b/cNi00cfD82WLaWI6JqgA80A",
  "Catering companies in Los Angeles": "https://buy.athena.live/b/cNi28k3Uq9l9e8U0l2gA80B",
  "Food truck operators by city": "https://buy.athena.live/b/eVq8wI4Yu1SHaWI2tagA80C",
  "Comedy clubs in the United States": "https://buy.athena.live/b/3cI6oA2QmdBp2qc5FmgA80D",
  "Open mic venues in major cities": "https://buy.athena.live/b/14A00c0Ie2WL1m84BigA80E",
  "Festival organizers with contact pages": "https://buy.athena.live/b/9B614gcqW2WLgh25FmgA80F",
  "Conference venues with sales emails": "https://buy.athena.live/b/8x228k9eKfJxd4Q9VCgA80H",
  "Corporate event planners in California": "https://buy.athena.live/b/cNi3co2Qmapd4yk4BigA80G",
  "Kids party businesses in LA": "https://buy.athena.live/b/5kQfZa9eKgNBfcY0l2gA80I",
  "Bounce house rental companies": "https://buy.athena.live/b/bJe6oA2QmgNBd4Q5FmgA80J",
  "Florists that serve weddings": "https://buy.athena.live/b/5kQaEQ3UqgNBgh25FmgA80K",
  "Personal injury law firms in California": "https://buy.athena.live/b/fZu8wI9eK1SHe8U1p6gA80L",
  "Immigration lawyers in Los Angeles": "https://buy.athena.live/b/28EaEQcqWbth3ugebSgA80M",
  "Criminal defense attorneys by city": "https://buy.athena.live/b/bJedR2dv068XaWI5FmgA80N",
  "Family law firms in Southern California": "https://buy.athena.live/b/28E6oAcqW8h5fcY4BigA80O",
  "Estate planning attorneys in California": "https://buy.athena.live/b/aFa8wIgHcapdfcYffWgA80P",
  "CPAs in Los Angeles with websites": "https://buy.athena.live/b/7sY14g1Mi9l96Gs5FmgA80Q",
  "Bookkeeping firms for small businesses": "https://buy.athena.live/b/eVqcMY9eK1SH5Co1p6gA80T",
  "Insurance agencies by state": "https://buy.athena.live/b/5kQaEQ0Ie7d1e8U8RygA80R",
  "Real estate agents in Beverly Hills": "https://buy.athena.live/b/6oU00cgHcgNB4ykc3KgA80S",
  "Mortgage brokers in California": "https://buy.athena.live/b/dRm7sE62y7d11m86JqgA80U",
  "Property managers in Los Angeles": "https://buy.athena.live/b/14A5kw8aG1SH4ykaZGgA80V",
  "Business consultants in the United States": "https://buy.athena.live/b/3cI9AM1Mi7d13ug4BigA80W",
  "Marketing agencies in California": "https://buy.athena.live/b/dRmeV61MieFtd4Q4BigA80X",
  "Web design agencies serving local businesses": "https://buy.athena.live/b/dRmbIUbmSfJxd4Q8RygA80Y",
  "IT service providers for small businesses": "https://buy.athena.live/b/cNi7sEaiO40PfcY7NugA810",
  "Cybersecurity consultants by city": "https://buy.athena.live/b/4gM3coez4eFtaWI9VCgA80Z",
  "Recruiting agencies in California": "https://buy.athena.live/b/9B66oAaiO1SHfcY6JqgA811",
  "Staffing companies in Los Angeles": "https://buy.athena.live/b/28EaEQ4Yu68X9SE1p6gA812",
  "HR consultants for small businesses": "https://buy.athena.live/b/3cI7sEgHccxle8U4BigA813",
  "Businesses with no website": "https://buy.athena.live/b/6oU6oAbmS8h51m8aZGgA815",
  "Businesses with outdated websites": "https://buy.athena.live/b/eVq9AM9eK0OD3ug1p6gA814",
  "Businesses using only Facebook pages": "https://buy.athena.live/b/6oUeV6ez4bth8OA4BigA816",
  "Restaurants without online ordering": "https://buy.athena.live/b/aFa9AMbmS7d14ykffWgA817",
  "Law firms with slow websites": "https://buy.athena.live/b/6oU28k8aG9l92qc8RygA818",
  "Contractors without quote forms": "https://buy.athena.live/b/00wdR21Mibthd4Qgk0gA819",
  "Med spas without booking links": "https://buy.athena.live/b/00w9AM8aG54Te8U7NugA81a",
  "Salons without online scheduling": "https://buy.athena.live/b/6oU5kw9eK8h59SEc3KgA81c",
  "Gyms without membership signup pages": "https://buy.athena.live/b/8x228k1MigNB6GsaZGgA81b",
  "Event venues without inquiry forms": "https://buy.athena.live/b/eVqaEQez4fJx0i40l2gA81d",
  "Churches with outdated websites": "https://buy.athena.live/b/4gM4gsez48h5d4Q2tagA81e",
  "Nonprofits with broken donation pages": "https://buy.athena.live/b/28EcMY3UqdBp9SEebSgA81f",
  "Local businesses without SSL": "https://buy.athena.live/b/28E00c9eKbth0i42tagA81g",
  "Businesses with broken contact forms": "https://buy.athena.live/b/5kQeV62Qmbth7Kw0l2gA81h",
  "Businesses with missing Google Business websites": "https://buy.athena.live/b/00waEQaiO2WL0i41p6gA81i",
  "Businesses with old Wix/Squarespace sites": "https://buy.athena.live/b/8x2bIUgHc2WL3ugaZGgA81j",
  "Businesses without mobile-friendly websites": "https://buy.athena.live/b/fZu00cbmS54T2qc8RygA81k",
  "Businesses currently running Google Ads": "https://buy.athena.live/b/00w14g9eK40Pd4QebSgA81l",
  "Local businesses running Meta ads": "https://buy.athena.live/b/4gM00caiOgNB3ug2tagA81m",
  "Companies hiring salespeople": "https://buy.athena.live/b/bJe00c2Qmapd2qc7NugA81o",
  "Companies hiring web developers": "https://buy.athena.live/b/28E4gs62y68X6GsffWgA81n",
  "Businesses hiring marketing managers": "https://buy.athena.live/b/9B6cMY4Yu2WL1m82tagA81p",
  "Startups that recently raised funding": "https://buy.athena.live/b/5kQ6oA8aG40P8OA5FmgA81q",
  "New businesses registered in California": "https://buy.athena.live/b/fZuaEQ2QmdBp4yk2tagA81s",
  "Recently opened restaurants": "https://buy.athena.live/b/28EaEQ2QmdBpe8U8RygA81r",
  "Businesses with new locations": "https://buy.athena.live/b/9B69AM0Iecxl7Kw5FmgA81t",
  "Businesses with recent bad reviews": "https://buy.athena.live/b/4gM4gsez4bthgh2d7OgA81u",
  "Businesses with many reviews but poor websites": "https://buy.athena.live/b/14A8wI76C7d1aWI5FmgA81w",
  "Companies using outdated software": "https://buy.athena.live/b/28E9AMcqWeFtaWI0l2gA81v",
  "Shopify stores in a niche": "https://buy.athena.live/b/5kQaEQdv0dBp2qcd7OgA81x",
  "WooCommerce stores in a niche": "https://buy.athena.live/b/eVqcMYaiOcxlaWI3xegA81y",
  "Businesses using Calendly": "https://buy.athena.live/b/5kQbIU62y0ODc0M3xegA81z",
  "Businesses using HubSpot": "https://buy.athena.live/b/8x2dR2fD840P4yk7NugA81A",
  "Businesses using Stripe checkout": "https://buy.athena.live/b/aFa00c9eKapd0i4ebSgA81B",
  "Businesses with abandoned blogs": "https://buy.athena.live/b/fZu00caiObthgh2aZGgA81C",
  "Businesses with active newsletters": "https://buy.athena.live/b/bJe14g9eKgNB7Kw3xegA81D",
  "Cannabis dispensaries by state": "https://buy.athena.live/b/aFadR2ez4cxl9SEaZGgA81E",
  "Smoke shops in California": "https://buy.athena.live/b/4gM3cobmS40P7Kw3xegA81F",
  "Armenian-owned businesses in Los Angeles": "https://buy.athena.live/b/dRm00c0Ie1SHd4Q7NugA81G",
  "Kosher restaurants in California": "https://buy.athena.live/b/5kQbIU2Qm68XfcY1p6gA81H",
  "Vegan restaurants in Los Angeles": "https://buy.athena.live/b/4gM6oAcqW40P4ykaZGgA81I",
  "Luxury car dealerships in California": "https://buy.athena.live/b/3cIbIU4Yu0OD1m88RygA81J",
  "Boat dealers in coastal states": "https://buy.athena.live/b/dRm8wIez440PfcY9VCgA81L",
  "Private schools in Southern California": "https://buy.athena.live/b/4gM14g0Ie0OD1m86JqgA81K",
  "Daycares in Los Angeles": "https://buy.athena.live/b/5kQ5kwaiOdBpgh24BigA81M",
  "Tutoring centers in California": "https://buy.athena.live/b/bJebIUcqWdBp6Gs8RygA81N",
  "Trade schools in the United States": "https://buy.athena.live/b/00wbIUgHcbth1m88RygA81O",
  "Churches by denomination and city": "https://buy.athena.live/b/bJeeV62Qm9l9aWIc3KgA81P",
  "Mosques by city": "https://buy.athena.live/b/8x214ggHc54Tc0M9VCgA81R",
  "Synagogues by city": "https://buy.athena.live/b/8x2aEQcqWbthe8Ugk0gA81Q",
  "Nonprofits by cause and location": "https://buy.athena.live/b/00w6oAdv08h51m8ebSgA81S",
  "Charities with donation pages": "https://buy.athena.live/b/3cI14gdv09l9aWId7OgA81T",
  "Senior care facilities in California": "https://buy.athena.live/b/7sY6oA1Mi1SH7Kw5FmgA81U",
  "Assisted living facilities by city": "https://buy.athena.live/b/4gM9AM76C54T5Cogk0gA81V",
  "Addiction treatment centers by state": "https://buy.athena.live/b/aFa9AMcqW8h50i42tagA81X",
  "Mental health clinics with websites": "https://buy.athena.live/b/aFaeV6fD868X8OAgk0gA81W",
  "Physical therapy clinics": "https://buy.athena.live/b/fZubIU4YudBp7Kw1p6gA81Y",
  "Dermatology clinics": "https://buy.athena.live/b/dRm3coaiO2WL0i47NugA81Z",
  "Plastic surgery offices": "https://buy.athena.live/b/8x2bIUdv09l9aWI5FmgA820",
  "Dental implant clinics": "https://buy.athena.live/b/eVq6oA62y7d16Gs6JqgA821",
  "Urgent care centers": "https://buy.athena.live/b/9B69AMaiO2WLfcY5FmgA823",
  "Specialty medical practices": "https://buy.athena.live/b/00w3co3Uq2WL3ug0l2gA822",
  "YouTubers in a niche with business emails": "https://buy.athena.live/b/6oU00c9eKgNBd4Q7NugA825",
  "Podcasters with sponsorship contact info": "https://buy.athena.live/b/7sY28k9eKapdfcYgk0gA824",
  "Newsletter creators by category": "https://buy.athena.live/b/14AaEQ76Ccxl4yk1p6gA826",
  "Bloggers in a niche": "https://buy.athena.live/b/14A6oAdv02WL2qcd7OgA827",
  "Substack writers by topic": "https://buy.athena.live/b/3cI7sEaiOgNB7Kw8RygA82a",
  "TikTok creators with emails": "https://buy.athena.live/b/5kQ14g4Yu9l96Gs2tagA828",
  "Instagram creators in Los Angeles": "https://buy.athena.live/b/7sY00c1Mi54T0i43xegA82b",
  "Independent artists with websites": "https://buy.athena.live/b/7sYaEQ2Qm1SH4yk4BigA829",
  "Musicians with tour dates": "https://buy.athena.live/b/3cIdR276CeFtc0M9VCgA82c",
  "Fashion brands on Shopify": "https://buy.athena.live/b/7sY7sEgHcfJx0i4c3KgA82d",
  "Small ecommerce brands by niche": "https://buy.athena.live/b/cNi8wI0IegNBgh23xegA82e",
  "Etsy sellers with external websites": "https://buy.athena.live/b/9B64gs4Yu9l9gh2gk0gA82f",
  "Amazon sellers with brand websites": "https://buy.athena.live/b/9B614g9eK68X8OAffWgA82g",
  "DTC brands in skincare": "https://buy.athena.live/b/fZu5kwbmSbthc0M1p6gA82h",
  "DTC brands in supplements": "https://buy.athena.live/b/cNiaEQ76Ccxlgh26JqgA82i",
  "DTC brands in pet products": "https://buy.athena.live/b/6oUcMYfD8gNBd4Qd7OgA82k",
  "Indie software companies": "https://buy.athena.live/b/4gMaEQaiO0ODe8U3xegA82j",
  "SaaS startups by category": "https://buy.athena.live/b/9B6dR28aGcxlfcY3xegA82l",
  "AI startups with contact emails": "https://buy.athena.live/b/cNi9AMaiO0OD9SE9VCgA82m",
  "City vendors by category": "https://buy.athena.live/b/cNi14gaiObthc0Md7OgA82n",
  "Government contractors by state": "https://buy.athena.live/b/14A9AMez48h5aWI6JqgA82o",
  "Public school districts with contacts": "https://buy.athena.live/b/bJebIUcqW0ODc0Mc3KgA82p",
  "County offices by department": "https://buy.athena.live/b/dRmcMYgHccxle8U1p6gA82q",
  "City planning departments": "https://buy.athena.live/b/9B614gfD87d14yk9VCgA82r",
  "Public works departments": "https://buy.athena.live/b/3cI8wI1Mi54TaWI1p6gA82s",
  "Parks and recreation departments": "https://buy.athena.live/b/bJe14g76CbthaWI4BigA82t",
  "Chamber of commerce member lists": "https://buy.athena.live/b/dRm28k1Mi0ODd4Qd7OgA82u",
  "Business license records by city": "https://buy.athena.live/b/00w8wIbmSapdfcYffWgA82w",
  "Public procurement contacts": "https://buy.athena.live/b/5kQ28k0IeeFtaWId7OgA82v",
  "Municipal event calendars": "https://buy.athena.live/b/dRm6oAbmS7d15CoebSgA82x",
  "Local government software vendors": "https://buy.athena.live/b/28E9AMaiO54T0i48RygA82y",
  "Public agencies using outdated websites": "https://buy.athena.live/b/00wbIUez42WLgh2ebSgA82z",
  "Apartment buildings in Los Angeles": "https://buy.athena.live/b/6oU14gez454T9SE0l2gA82A",
  "Property management companies": "https://buy.athena.live/b/4gMeV6ez41SH9SE1p6gA82C",
  "Commercial real estate brokers": "https://buy.athena.live/b/5kQ8wI76Ccxl3ug4BigA82B",
  "Real estate developers in California": "https://buy.athena.live/b/4gMdR23Uq40P9SE8RygA82D",
  "Construction companies by city": "https://buy.athena.live/b/eVqeV6cqW7d1e8UffWgA82E",
  "General contractors in Southern California": "https://buy.athena.live/b/eVq5kw1Mi2WL8OAd7OgA82G",
  "Architects in Los Angeles": "https://buy.athena.live/b/4gM14g76C8h55Co9VCgA82F",
  "Interior designers in California": "https://buy.athena.live/b/8x2dR2aiO7d10i45FmgA82H",
  "Home builders by state": "https://buy.athena.live/b/7sY7sEgHccxl9SE6JqgA82I",
  "HOA management companies": "https://buy.athena.live/b/9B6fZa9eKgNB0i4c3KgA82L",
  "Storage facilities by city": "https://buy.athena.live/b/dRm6oA1Mi54Tc0Md7OgA82J",
  "Mobile home parks by state": "https://buy.athena.live/b/dRm5kwaiO2WLfcY5FmgA82K",
  "Hotels and motels by city": "https://buy.athena.live/b/28EdR2cqWbth4ykc3KgA82M",
  "Airbnb property managers": "https://buy.athena.live/b/fZu6oA76C9l93uggk0gA82N",
  "Coworking spaces in major cities": "https://buy.athena.live/b/cNibIU0Ie0OD6Gs9VCgA82O"
};

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
    fields: group.fields,
    paymentLink: productPaymentLinks[title] || paymentLink
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
      <a class="button button-full" href="${product.paymentLink}" target="_blank" rel="noreferrer">Buy CSV</a>
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
