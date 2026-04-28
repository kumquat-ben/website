const toggle = document.querySelector(".nav-toggle");
const menu = document.querySelector("#nav-menu");

if (toggle && menu) {
  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const products = [
  {
    "title": "500 Restaurants in LA Without Online Ordering",
    "category": "Website Opportunity",
    "price": "$49",
    "records": "500 records",
    "description": "A website-opportunity CSV focused on businesses with missing, outdated, or underpowered web conversion paths. This product focuses on 500 restaurants in la without online ordering and is delivered as a CSV download link by email once available.",
    "fields": "Business name, website if present, city, state, category, issue spotted, contact page, phone, public email where available, source URL, notes.",
    "bestFor": "Web design agencies, SEO consultants, ordering platforms, donation tools, reservation systems, and local marketing teams buy this list to find businesses with visible website gaps they can fix.",
    "paymentLink": "https://buy.athena.live/b/4gMbIU0Ie7d16Gs5FmgA82U"
  },
  {
    "title": "Restaurants with outdated websites",
    "category": "Website Opportunity",
    "price": "$49",
    "records": "500 records",
    "description": "A website-opportunity CSV focused on businesses with missing, outdated, or underpowered web conversion paths. This product focuses on restaurants with outdated websites and is delivered as a CSV download link by email once available.",
    "fields": "Business name, website if present, city, state, category, issue spotted, contact page, phone, public email where available, source URL, notes.",
    "bestFor": "Web design agencies, SEO consultants, ordering platforms, donation tools, reservation systems, and local marketing teams buy this list to find businesses with visible website gaps they can fix.",
    "paymentLink": "https://buy.athena.live/b/3cI3co9eKgNB1m87NugA836"
  },
  {
    "title": "Restaurants with no catering page",
    "category": "Website Opportunity",
    "price": "$49",
    "records": "500 records",
    "description": "A website-opportunity CSV focused on businesses with missing, outdated, or underpowered web conversion paths. This product focuses on restaurants with no catering page and is delivered as a CSV download link by email once available.",
    "fields": "Business name, website if present, city, state, category, issue spotted, contact page, phone, public email where available, source URL, notes.",
    "bestFor": "Web design agencies, SEO consultants, ordering platforms, donation tools, reservation systems, and local marketing teams buy this list to find businesses with visible website gaps they can fix.",
    "paymentLink": "https://buy.athena.live/b/3cI9AM62ycxl2qcebSgA837"
  },
  {
    "title": "Restaurants with no online reservation link",
    "category": "Website Opportunity",
    "price": "$49",
    "records": "500 records",
    "description": "A website-opportunity CSV focused on businesses with missing, outdated, or underpowered web conversion paths. This product focuses on restaurants with no online reservation link and is delivered as a CSV download link by email once available.",
    "fields": "Business name, website if present, city, state, category, issue spotted, contact page, phone, public email where available, source URL, notes.",
    "bestFor": "Web design agencies, SEO consultants, ordering platforms, donation tools, reservation systems, and local marketing teams buy this list to find businesses with visible website gaps they can fix.",
    "paymentLink": "https://buy.athena.live/b/cNi8wI8aGeFt8OA4BigA838"
  },
  {
    "title": "500 Churches With Outdated Websites",
    "category": "Website Opportunity",
    "price": "$49",
    "records": "500 records",
    "description": "A website-opportunity CSV focused on businesses with missing, outdated, or underpowered web conversion paths. This product focuses on 500 churches with outdated websites and is delivered as a CSV download link by email once available.",
    "fields": "Business name, website if present, city, state, category, issue spotted, contact page, phone, public email where available, source URL, notes.",
    "bestFor": "Web design agencies, SEO consultants, ordering platforms, donation tools, reservation systems, and local marketing teams buy this list to find businesses with visible website gaps they can fix.",
    "paymentLink": "https://buy.athena.live/b/fZu8wI1Micxld4Qc3KgA82W"
  },
  {
    "title": "Churches with no donation/payment link",
    "category": "Website Opportunity",
    "price": "$49",
    "records": "500 records",
    "description": "A website-opportunity CSV focused on businesses with missing, outdated, or underpowered web conversion paths. This product focuses on churches with no donation/payment link and is delivered as a CSV download link by email once available.",
    "fields": "Business name, website if present, city, state, category, issue spotted, contact page, phone, public email where available, source URL, notes.",
    "bestFor": "Web design agencies, SEO consultants, ordering platforms, donation tools, reservation systems, and local marketing teams buy this list to find businesses with visible website gaps they can fix.",
    "paymentLink": "https://buy.athena.live/b/7sY3coaiO1SH5Cod7OgA839"
  },
  {
    "title": "Law firms with outdated websites",
    "category": "Website Opportunity",
    "price": "$49",
    "records": "500 records",
    "description": "A website-opportunity CSV focused on businesses with missing, outdated, or underpowered web conversion paths. This product focuses on law firms with outdated websites and is delivered as a CSV download link by email once available.",
    "fields": "Business name, website if present, city, state, category, issue spotted, contact page, phone, public email where available, source URL, notes.",
    "bestFor": "Web design agencies, SEO consultants, ordering platforms, donation tools, reservation systems, and local marketing teams buy this list to find businesses with visible website gaps they can fix.",
    "paymentLink": "https://buy.athena.live/b/5kQaEQ76C68XaWI9VCgA83a"
  },
  {
    "title": "Dentists with outdated websites",
    "category": "Website Opportunity",
    "price": "$49",
    "records": "500 records",
    "description": "A website-opportunity CSV focused on businesses with missing, outdated, or underpowered web conversion paths. This product focuses on dentists with outdated websites and is delivered as a CSV download link by email once available.",
    "fields": "Business name, website if present, city, state, category, issue spotted, contact page, phone, public email where available, source URL, notes.",
    "bestFor": "Web design agencies, SEO consultants, ordering platforms, donation tools, reservation systems, and local marketing teams buy this list to find businesses with visible website gaps they can fix.",
    "paymentLink": "https://buy.athena.live/b/14A4gs1Miapd6Gs2tagA83b"
  },
  {
    "title": "500 Med Spas in Southern California",
    "category": "Professional Services",
    "price": "$79",
    "records": "500 records",
    "description": "A local-business CSV of Southern California med spas for agencies, booking software teams, aesthetic vendors, consultants, and B2B sellers targeting clinics with public business contact signals. Delivered as a CSV download link by email once available.",
    "fields": "Business name, website, city, state, phone, public email where available, booking page, contact page, Instagram or social link, source URL, notes.",
    "bestFor": "Aesthetic marketing agencies, booking software vendors, med spa suppliers, SEO consultants, local ad teams, and B2B sales teams buy this list to reach med spas with clear commercial value.",
    "paymentLink": "https://buy.athena.live/b/eVqaEQgHcbth5Co6JqgA82Y"
  },
  {
    "title": "Auto shops with outdated websites",
    "category": "Website Opportunity",
    "price": "$49",
    "records": "500 records",
    "description": "A website-opportunity CSV focused on businesses with missing, outdated, or underpowered web conversion paths. This product focuses on auto shops with outdated websites and is delivered as a CSV download link by email once available.",
    "fields": "Business name, website if present, city, state, category, issue spotted, contact page, phone, public email where available, source URL, notes.",
    "bestFor": "Web design agencies, SEO consultants, ordering platforms, donation tools, reservation systems, and local marketing teams buy this list to find businesses with visible website gaps they can fix.",
    "paymentLink": "https://buy.athena.live/b/9B6bIUez42WL6Gsd7OgA83c"
  },
  {
    "title": "Contractors with outdated websites",
    "category": "Website Opportunity",
    "price": "$49",
    "records": "500 records",
    "description": "A website-opportunity CSV focused on businesses with missing, outdated, or underpowered web conversion paths. This product focuses on contractors with outdated websites and is delivered as a CSV download link by email once available.",
    "fields": "Business name, website if present, city, state, category, issue spotted, contact page, phone, public email where available, source URL, notes.",
    "bestFor": "Web design agencies, SEO consultants, ordering platforms, donation tools, reservation systems, and local marketing teams buy this list to find businesses with visible website gaps they can fix.",
    "paymentLink": "https://buy.athena.live/b/aFa9AM3Uq54T3ug1p6gA83d"
  },
  {
    "title": "Plumbers with outdated websites",
    "category": "Website Opportunity",
    "price": "$49",
    "records": "500 records",
    "description": "A website-opportunity CSV focused on businesses with missing, outdated, or underpowered web conversion paths. This product focuses on plumbers with outdated websites and is delivered as a CSV download link by email once available.",
    "fields": "Business name, website if present, city, state, category, issue spotted, contact page, phone, public email where available, source URL, notes.",
    "bestFor": "Web design agencies, SEO consultants, ordering platforms, donation tools, reservation systems, and local marketing teams buy this list to find businesses with visible website gaps they can fix.",
    "paymentLink": "https://buy.athena.live/b/14A6oAaiO1SH5Cogk0gA83e"
  },
  {
    "title": "HVAC companies with outdated websites",
    "category": "Website Opportunity",
    "price": "$49",
    "records": "500 records",
    "description": "A website-opportunity CSV focused on businesses with missing, outdated, or underpowered web conversion paths. This product focuses on hvac companies with outdated websites and is delivered as a CSV download link by email once available.",
    "fields": "Business name, website if present, city, state, category, issue spotted, contact page, phone, public email where available, source URL, notes.",
    "bestFor": "Web design agencies, SEO consultants, ordering platforms, donation tools, reservation systems, and local marketing teams buy this list to find businesses with visible website gaps they can fix.",
    "paymentLink": "https://buy.athena.live/b/3cI7sE62y40Pd4Q0l2gA83f"
  },
  {
    "title": "Electricians with outdated websites",
    "category": "Website Opportunity",
    "price": "$49",
    "records": "500 records",
    "description": "A website-opportunity CSV focused on businesses with missing, outdated, or underpowered web conversion paths. This product focuses on electricians with outdated websites and is delivered as a CSV download link by email once available.",
    "fields": "Business name, website if present, city, state, category, issue spotted, contact page, phone, public email where available, source URL, notes.",
    "bestFor": "Web design agencies, SEO consultants, ordering platforms, donation tools, reservation systems, and local marketing teams buy this list to find businesses with visible website gaps they can fix.",
    "paymentLink": "https://buy.athena.live/b/5kQ3co4Yu0OD2qcebSgA83g"
  },
  {
    "title": "Accountants with outdated websites",
    "category": "Website Opportunity",
    "price": "$49",
    "records": "500 records",
    "description": "A website-opportunity CSV focused on businesses with missing, outdated, or underpowered web conversion paths. This product focuses on accountants with outdated websites and is delivered as a CSV download link by email once available.",
    "fields": "Business name, website if present, city, state, category, issue spotted, contact page, phone, public email where available, source URL, notes.",
    "bestFor": "Web design agencies, SEO consultants, ordering platforms, donation tools, reservation systems, and local marketing teams buy this list to find businesses with visible website gaps they can fix.",
    "paymentLink": "https://buy.athena.live/b/4gMbIU62yapd5Co6JqgA83h"
  },
  {
    "title": "Therapists with outdated websites",
    "category": "Website Opportunity",
    "price": "$49",
    "records": "500 records",
    "description": "A website-opportunity CSV focused on businesses with missing, outdated, or underpowered web conversion paths. This product focuses on therapists with outdated websites and is delivered as a CSV download link by email once available.",
    "fields": "Business name, website if present, city, state, category, issue spotted, contact page, phone, public email where available, source URL, notes.",
    "bestFor": "Web design agencies, SEO consultants, ordering platforms, donation tools, reservation systems, and local marketing teams buy this list to find businesses with visible website gaps they can fix.",
    "paymentLink": "https://buy.athena.live/b/eVq00c4Yubthd4QebSgA83i"
  },
  {
    "title": "Private schools with outdated websites",
    "category": "Website Opportunity",
    "price": "$49",
    "records": "500 records",
    "description": "A website-opportunity CSV focused on businesses with missing, outdated, or underpowered web conversion paths. This product focuses on private schools with outdated websites and is delivered as a CSV download link by email once available.",
    "fields": "Business name, website if present, city, state, category, issue spotted, contact page, phone, public email where available, source URL, notes.",
    "bestFor": "Web design agencies, SEO consultants, ordering platforms, donation tools, reservation systems, and local marketing teams buy this list to find businesses with visible website gaps they can fix.",
    "paymentLink": "https://buy.athena.live/b/aFa28kfD8bthc0M3xegA83j"
  },
  {
    "title": "Nonprofits with outdated websites",
    "category": "Website Opportunity",
    "price": "$49",
    "records": "500 records",
    "description": "A website-opportunity CSV focused on businesses with missing, outdated, or underpowered web conversion paths. This product focuses on nonprofits with outdated websites and is delivered as a CSV download link by email once available.",
    "fields": "Business name, website if present, city, state, category, issue spotted, contact page, phone, public email where available, source URL, notes.",
    "bestFor": "Web design agencies, SEO consultants, ordering platforms, donation tools, reservation systems, and local marketing teams buy this list to find businesses with visible website gaps they can fix.",
    "paymentLink": "https://buy.athena.live/b/eVq3co76CcxlfcY7NugA83k"
  },
  {
    "title": "Real estate agents with outdated websites",
    "category": "Website Opportunity",
    "price": "$49",
    "records": "500 records",
    "description": "A website-opportunity CSV focused on businesses with missing, outdated, or underpowered web conversion paths. This product focuses on real estate agents with outdated websites and is delivered as a CSV download link by email once available.",
    "fields": "Business name, website if present, city, state, category, issue spotted, contact page, phone, public email where available, source URL, notes.",
    "bestFor": "Web design agencies, SEO consultants, ordering platforms, donation tools, reservation systems, and local marketing teams buy this list to find businesses with visible website gaps they can fix.",
    "paymentLink": "https://buy.athena.live/b/fZu6oA8aGbth4yk8RygA83l"
  },
  {
    "title": "500 Local Businesses With No Website",
    "category": "Website Opportunity",
    "price": "$49",
    "records": "500 records",
    "description": "A website-opportunity CSV focused on businesses with missing, outdated, or underpowered web conversion paths. This product focuses on 500 local businesses with no website and is delivered as a CSV download link by email once available.",
    "fields": "Business name, website if present, city, state, category, issue spotted, contact page, phone, public email where available, source URL, notes.",
    "bestFor": "Web design agencies, SEO consultants, ordering platforms, donation tools, reservation systems, and local marketing teams buy this list to find businesses with visible website gaps they can fix.",
    "paymentLink": "https://buy.athena.live/b/dRmcMY4Yu0OD5CoffWgA834"
  },
  {
    "title": "500 Contractors in California Without Online Booking",
    "category": "Software Gap",
    "price": "$79",
    "records": "500 records",
    "description": "A software-gap CSV focused on businesses that appear to lack booking, scheduling, intake, estimate, or inquiry systems. This product focuses on 500 contractors in california without online booking and is delivered as a CSV download link by email once available.",
    "fields": "Business name, website, city, state, software gap, booking or quote status, contact page, phone, public email where available, source URL, notes.",
    "bestFor": "SaaS companies, marketplaces, agencies, and automation consultants buy this list to find businesses missing booking, scheduling, intake, quote, or inquiry workflows.",
    "paymentLink": "https://buy.athena.live/b/cNieV6fD854TfcY2tagA82V"
  },
  {
    "title": "Salons without online booking",
    "category": "Software Gap",
    "price": "$79",
    "records": "500 records",
    "description": "A software-gap CSV focused on businesses that appear to lack booking, scheduling, intake, estimate, or inquiry systems. This product focuses on salons without online booking and is delivered as a CSV download link by email once available.",
    "fields": "Business name, website, city, state, software gap, booking or quote status, contact page, phone, public email where available, source URL, notes.",
    "bestFor": "SaaS companies, marketplaces, agencies, and automation consultants buy this list to find businesses missing booking, scheduling, intake, quote, or inquiry workflows.",
    "paymentLink": "https://buy.athena.live/b/28E4gsfD8apdfcYffWgA83m"
  },
  {
    "title": "Barbers without online booking",
    "category": "Software Gap",
    "price": "$79",
    "records": "500 records",
    "description": "A software-gap CSV focused on businesses that appear to lack booking, scheduling, intake, estimate, or inquiry systems. This product focuses on barbers without online booking and is delivered as a CSV download link by email once available.",
    "fields": "Business name, website, city, state, software gap, booking or quote status, contact page, phone, public email where available, source URL, notes.",
    "bestFor": "SaaS companies, marketplaces, agencies, and automation consultants buy this list to find businesses missing booking, scheduling, intake, quote, or inquiry workflows.",
    "paymentLink": "https://buy.athena.live/b/7sY3co2Qm40P4ykebSgA83n"
  },
  {
    "title": "Auto shops without appointment scheduling",
    "category": "Software Gap",
    "price": "$79",
    "records": "500 records",
    "description": "A software-gap CSV focused on businesses that appear to lack booking, scheduling, intake, estimate, or inquiry systems. This product focuses on auto shops without appointment scheduling and is delivered as a CSV download link by email once available.",
    "fields": "Business name, website, city, state, software gap, booking or quote status, contact page, phone, public email where available, source URL, notes.",
    "bestFor": "SaaS companies, marketplaces, agencies, and automation consultants buy this list to find businesses missing booking, scheduling, intake, quote, or inquiry workflows.",
    "paymentLink": "https://buy.athena.live/b/dRm9AM9eK9l98OAd7OgA83o"
  },
  {
    "title": "Clinics without online intake forms",
    "category": "Software Gap",
    "price": "$79",
    "records": "500 records",
    "description": "A software-gap CSV focused on businesses that appear to lack booking, scheduling, intake, estimate, or inquiry systems. This product focuses on clinics without online intake forms and is delivered as a CSV download link by email once available.",
    "fields": "Business name, website, city, state, software gap, booking or quote status, contact page, phone, public email where available, source URL, notes.",
    "bestFor": "SaaS companies, marketplaces, agencies, and automation consultants buy this list to find businesses missing booking, scheduling, intake, quote, or inquiry workflows.",
    "paymentLink": "https://buy.athena.live/b/eVq3co76C9l93ug8RygA83p"
  },
  {
    "title": "Dentists without online appointment booking",
    "category": "Software Gap",
    "price": "$79",
    "records": "500 records",
    "description": "A software-gap CSV focused on businesses that appear to lack booking, scheduling, intake, estimate, or inquiry systems. This product focuses on dentists without online appointment booking and is delivered as a CSV download link by email once available.",
    "fields": "Business name, website, city, state, software gap, booking or quote status, contact page, phone, public email where available, source URL, notes.",
    "bestFor": "SaaS companies, marketplaces, agencies, and automation consultants buy this list to find businesses missing booking, scheduling, intake, quote, or inquiry workflows.",
    "paymentLink": "https://buy.athena.live/b/5kQ5kw4Yu8h59SE5FmgA83q"
  },
  {
    "title": "Tutors without booking pages",
    "category": "Software Gap",
    "price": "$79",
    "records": "500 records",
    "description": "A software-gap CSV focused on businesses that appear to lack booking, scheduling, intake, estimate, or inquiry systems. This product focuses on tutors without booking pages and is delivered as a CSV download link by email once available.",
    "fields": "Business name, website, city, state, software gap, booking or quote status, contact page, phone, public email where available, source URL, notes.",
    "bestFor": "SaaS companies, marketplaces, agencies, and automation consultants buy this list to find businesses missing booking, scheduling, intake, quote, or inquiry workflows.",
    "paymentLink": "https://buy.athena.live/b/6oU5kwgHcapd9SE9VCgA83r"
  },
  {
    "title": "Music teachers without booking pages",
    "category": "Software Gap",
    "price": "$79",
    "records": "500 records",
    "description": "A software-gap CSV focused on businesses that appear to lack booking, scheduling, intake, estimate, or inquiry systems. This product focuses on music teachers without booking pages and is delivered as a CSV download link by email once available.",
    "fields": "Business name, website, city, state, software gap, booking or quote status, contact page, phone, public email where available, source URL, notes.",
    "bestFor": "SaaS companies, marketplaces, agencies, and automation consultants buy this list to find businesses missing booking, scheduling, intake, quote, or inquiry workflows.",
    "paymentLink": "https://buy.athena.live/b/bJedR29eKdBp6Gs7NugA83s"
  },
  {
    "title": "Gyms without class scheduling",
    "category": "Software Gap",
    "price": "$79",
    "records": "500 records",
    "description": "A software-gap CSV focused on businesses that appear to lack booking, scheduling, intake, estimate, or inquiry systems. This product focuses on gyms without class scheduling and is delivered as a CSV download link by email once available.",
    "fields": "Business name, website, city, state, software gap, booking or quote status, contact page, phone, public email where available, source URL, notes.",
    "bestFor": "SaaS companies, marketplaces, agencies, and automation consultants buy this list to find businesses missing booking, scheduling, intake, quote, or inquiry workflows.",
    "paymentLink": "https://buy.athena.live/b/00w8wI0Ie9l98OA5FmgA83t"
  },
  {
    "title": "Yoga studios without booking software",
    "category": "Software Gap",
    "price": "$79",
    "records": "500 records",
    "description": "A software-gap CSV focused on businesses that appear to lack booking, scheduling, intake, estimate, or inquiry systems. This product focuses on yoga studios without booking software and is delivered as a CSV download link by email once available.",
    "fields": "Business name, website, city, state, software gap, booking or quote status, contact page, phone, public email where available, source URL, notes.",
    "bestFor": "SaaS companies, marketplaces, agencies, and automation consultants buy this list to find businesses missing booking, scheduling, intake, quote, or inquiry workflows.",
    "paymentLink": "https://buy.athena.live/b/28E14g62y40PfcYc3KgA83u"
  },
  {
    "title": "Massage therapists without online booking",
    "category": "Software Gap",
    "price": "$79",
    "records": "500 records",
    "description": "A software-gap CSV focused on businesses that appear to lack booking, scheduling, intake, estimate, or inquiry systems. This product focuses on massage therapists without online booking and is delivered as a CSV download link by email once available.",
    "fields": "Business name, website, city, state, software gap, booking or quote status, contact page, phone, public email where available, source URL, notes.",
    "bestFor": "SaaS companies, marketplaces, agencies, and automation consultants buy this list to find businesses missing booking, scheduling, intake, quote, or inquiry workflows.",
    "paymentLink": "https://buy.athena.live/b/dRm28k1Mi7d1aWIc3KgA83v"
  },
  {
    "title": "Pet groomers without online booking",
    "category": "Software Gap",
    "price": "$79",
    "records": "500 records",
    "description": "A software-gap CSV focused on businesses that appear to lack booking, scheduling, intake, estimate, or inquiry systems. This product focuses on pet groomers without online booking and is delivered as a CSV download link by email once available.",
    "fields": "Business name, website, city, state, software gap, booking or quote status, contact page, phone, public email where available, source URL, notes.",
    "bestFor": "SaaS companies, marketplaces, agencies, and automation consultants buy this list to find businesses missing booking, scheduling, intake, quote, or inquiry workflows.",
    "paymentLink": "https://buy.athena.live/b/eVqcMYdv00OD5Co8RygA83w"
  },
  {
    "title": "Cleaning companies without booking forms",
    "category": "Software Gap",
    "price": "$79",
    "records": "500 records",
    "description": "A software-gap CSV focused on businesses that appear to lack booking, scheduling, intake, estimate, or inquiry systems. This product focuses on cleaning companies without booking forms and is delivered as a CSV download link by email once available.",
    "fields": "Business name, website, city, state, software gap, booking or quote status, contact page, phone, public email where available, source URL, notes.",
    "bestFor": "SaaS companies, marketplaces, agencies, and automation consultants buy this list to find businesses missing booking, scheduling, intake, quote, or inquiry workflows.",
    "paymentLink": "https://buy.athena.live/b/6oU28kdv0apd1m8ffWgA83x"
  },
  {
    "title": "Moving companies without quote forms",
    "category": "Software Gap",
    "price": "$79",
    "records": "500 records",
    "description": "A software-gap CSV focused on businesses that appear to lack booking, scheduling, intake, estimate, or inquiry systems. This product focuses on moving companies without quote forms and is delivered as a CSV download link by email once available.",
    "fields": "Business name, website, city, state, software gap, booking or quote status, contact page, phone, public email where available, source URL, notes.",
    "bestFor": "SaaS companies, marketplaces, agencies, and automation consultants buy this list to find businesses missing booking, scheduling, intake, quote, or inquiry workflows.",
    "paymentLink": "https://buy.athena.live/b/4gMdR28aG0ODaWIgk0gA83y"
  },
  {
    "title": "Landscapers without quote forms",
    "category": "Software Gap",
    "price": "$79",
    "records": "500 records",
    "description": "A software-gap CSV focused on businesses that appear to lack booking, scheduling, intake, estimate, or inquiry systems. This product focuses on landscapers without quote forms and is delivered as a CSV download link by email once available.",
    "fields": "Business name, website, city, state, software gap, booking or quote status, contact page, phone, public email where available, source URL, notes.",
    "bestFor": "SaaS companies, marketplaces, agencies, and automation consultants buy this list to find businesses missing booking, scheduling, intake, quote, or inquiry workflows.",
    "paymentLink": "https://buy.athena.live/b/4gM6oA2QmdBp1m8ebSgA83z"
  },
  {
    "title": "Roofers without estimate forms",
    "category": "Software Gap",
    "price": "$79",
    "records": "500 records",
    "description": "A software-gap CSV focused on businesses that appear to lack booking, scheduling, intake, estimate, or inquiry systems. This product focuses on roofers without estimate forms and is delivered as a CSV download link by email once available.",
    "fields": "Business name, website, city, state, software gap, booking or quote status, contact page, phone, public email where available, source URL, notes.",
    "bestFor": "SaaS companies, marketplaces, agencies, and automation consultants buy this list to find businesses missing booking, scheduling, intake, quote, or inquiry workflows.",
    "paymentLink": "https://buy.athena.live/b/28E8wI4YugNB4yk4BigA83A"
  },
  {
    "title": "Home inspectors without booking pages",
    "category": "Software Gap",
    "price": "$79",
    "records": "500 records",
    "description": "A software-gap CSV focused on businesses that appear to lack booking, scheduling, intake, estimate, or inquiry systems. This product focuses on home inspectors without booking pages and is delivered as a CSV download link by email once available.",
    "fields": "Business name, website, city, state, software gap, booking or quote status, contact page, phone, public email where available, source URL, notes.",
    "bestFor": "SaaS companies, marketplaces, agencies, and automation consultants buy this list to find businesses missing booking, scheduling, intake, quote, or inquiry workflows.",
    "paymentLink": "https://buy.athena.live/b/fZu6oAbmSeFtfcY4BigA83B"
  },
  {
    "title": "Wedding planners without inquiry forms",
    "category": "Software Gap",
    "price": "$79",
    "records": "500 records",
    "description": "A software-gap CSV focused on businesses that appear to lack booking, scheduling, intake, estimate, or inquiry systems. This product focuses on wedding planners without inquiry forms and is delivered as a CSV download link by email once available.",
    "fields": "Business name, website, city, state, software gap, booking or quote status, contact page, phone, public email where available, source URL, notes.",
    "bestFor": "SaaS companies, marketplaces, agencies, and automation consultants buy this list to find businesses missing booking, scheduling, intake, quote, or inquiry workflows.",
    "paymentLink": "https://buy.athena.live/b/00w14g4Yuapde8UffWgA83C"
  },
  {
    "title": "Photographers without booking pages",
    "category": "Software Gap",
    "price": "$79",
    "records": "500 records",
    "description": "A software-gap CSV focused on businesses that appear to lack booking, scheduling, intake, estimate, or inquiry systems. This product focuses on photographers without booking pages and is delivered as a CSV download link by email once available.",
    "fields": "Business name, website, city, state, software gap, booking or quote status, contact page, phone, public email where available, source URL, notes.",
    "bestFor": "SaaS companies, marketplaces, agencies, and automation consultants buy this list to find businesses missing booking, scheduling, intake, quote, or inquiry workflows.",
    "paymentLink": "https://buy.athena.live/b/7sYeV6cqW0OD7Kw9VCgA83D"
  },
  {
    "title": "Event venues without inquiry forms",
    "category": "Software Gap",
    "price": "$79",
    "records": "500 records",
    "description": "A software-gap CSV focused on businesses that appear to lack booking, scheduling, intake, estimate, or inquiry systems. This product focuses on event venues without inquiry forms and is delivered as a CSV download link by email once available.",
    "fields": "Business name, website, city, state, software gap, booking or quote status, contact page, phone, public email where available, source URL, notes.",
    "bestFor": "SaaS companies, marketplaces, agencies, and automation consultants buy this list to find businesses missing booking, scheduling, intake, quote, or inquiry workflows.",
    "paymentLink": "https://buy.athena.live/b/5kQ00cdv09l99SE6JqgA83E"
  },
  {
    "title": "500 Plumbers Running Google Ads",
    "category": "Ad Spend Signal",
    "price": "$129",
    "records": "500 records",
    "description": "An ad-spend signal CSV focused on businesses that appear to be running Google Ads in competitive local or professional-service markets. This product focuses on 500 plumbers running google ads and is delivered as a CSV download link by email once available.",
    "fields": "Business name, website, city, state, ad signal, keyword or market, phone, public email where available, landing page, source URL, notes.",
    "bestFor": "Marketing agencies, landing-page teams, call tracking companies, SEO firms, and competitive research teams buy this list because ad spend suggests urgency, budget, and active customer acquisition.",
    "paymentLink": "https://buy.athena.live/b/cNifZa62y0ODe8U9VCgA833"
  },
  {
    "title": "Personal injury lawyers running Google Ads",
    "category": "Ad Spend Signal",
    "price": "$129",
    "records": "500 records",
    "description": "An ad-spend signal CSV focused on businesses that appear to be running Google Ads in competitive local or professional-service markets. This product focuses on personal injury lawyers running google ads and is delivered as a CSV download link by email once available.",
    "fields": "Business name, website, city, state, ad signal, keyword or market, phone, public email where available, landing page, source URL, notes.",
    "bestFor": "Marketing agencies, landing-page teams, call tracking companies, SEO firms, and competitive research teams buy this list because ad spend suggests urgency, budget, and active customer acquisition.",
    "paymentLink": "https://buy.athena.live/b/7sYbIU3UqgNB4ykc3KgA83F"
  },
  {
    "title": "Dentists running Google Ads",
    "category": "Ad Spend Signal",
    "price": "$129",
    "records": "500 records",
    "description": "An ad-spend signal CSV focused on businesses that appear to be running Google Ads in competitive local or professional-service markets. This product focuses on dentists running google ads and is delivered as a CSV download link by email once available.",
    "fields": "Business name, website, city, state, ad signal, keyword or market, phone, public email where available, landing page, source URL, notes.",
    "bestFor": "Marketing agencies, landing-page teams, call tracking companies, SEO firms, and competitive research teams buy this list because ad spend suggests urgency, budget, and active customer acquisition.",
    "paymentLink": "https://buy.athena.live/b/aFafZa62y8h58OA4BigA83G"
  },
  {
    "title": "Med spas running Google Ads",
    "category": "Ad Spend Signal",
    "price": "$129",
    "records": "500 records",
    "description": "An ad-spend signal CSV focused on businesses that appear to be running Google Ads in competitive local or professional-service markets. This product focuses on med spas running google ads and is delivered as a CSV download link by email once available.",
    "fields": "Business name, website, city, state, ad signal, keyword or market, phone, public email where available, landing page, source URL, notes.",
    "bestFor": "Marketing agencies, landing-page teams, call tracking companies, SEO firms, and competitive research teams buy this list because ad spend suggests urgency, budget, and active customer acquisition.",
    "paymentLink": "https://buy.athena.live/b/dRm6oAbmS0ODaWI9VCgA83H"
  },
  {
    "title": "HVAC companies running Google Ads",
    "category": "Ad Spend Signal",
    "price": "$129",
    "records": "500 records",
    "description": "An ad-spend signal CSV focused on businesses that appear to be running Google Ads in competitive local or professional-service markets. This product focuses on hvac companies running google ads and is delivered as a CSV download link by email once available.",
    "fields": "Business name, website, city, state, ad signal, keyword or market, phone, public email where available, landing page, source URL, notes.",
    "bestFor": "Marketing agencies, landing-page teams, call tracking companies, SEO firms, and competitive research teams buy this list because ad spend suggests urgency, budget, and active customer acquisition.",
    "paymentLink": "https://buy.athena.live/b/28E9AM8aG9l96Gs9VCgA83I"
  },
  {
    "title": "Roofers running Google Ads",
    "category": "Ad Spend Signal",
    "price": "$129",
    "records": "500 records",
    "description": "An ad-spend signal CSV focused on businesses that appear to be running Google Ads in competitive local or professional-service markets. This product focuses on roofers running google ads and is delivered as a CSV download link by email once available.",
    "fields": "Business name, website, city, state, ad signal, keyword or market, phone, public email where available, landing page, source URL, notes.",
    "bestFor": "Marketing agencies, landing-page teams, call tracking companies, SEO firms, and competitive research teams buy this list because ad spend suggests urgency, budget, and active customer acquisition.",
    "paymentLink": "https://buy.athena.live/b/5kQ28k4Yuapd9SE2tagA83J"
  },
  {
    "title": "Addiction treatment centers running Google Ads",
    "category": "Ad Spend Signal",
    "price": "$129",
    "records": "500 records",
    "description": "An ad-spend signal CSV focused on businesses that appear to be running Google Ads in competitive local or professional-service markets. This product focuses on addiction treatment centers running google ads and is delivered as a CSV download link by email once available.",
    "fields": "Business name, website, city, state, ad signal, keyword or market, phone, public email where available, landing page, source URL, notes.",
    "bestFor": "Marketing agencies, landing-page teams, call tracking companies, SEO firms, and competitive research teams buy this list because ad spend suggests urgency, budget, and active customer acquisition.",
    "paymentLink": "https://buy.athena.live/b/aFa8wIcqW8h59SE6JqgA83K"
  },
  {
    "title": "Immigration lawyers running Google Ads",
    "category": "Ad Spend Signal",
    "price": "$129",
    "records": "500 records",
    "description": "An ad-spend signal CSV focused on businesses that appear to be running Google Ads in competitive local or professional-service markets. This product focuses on immigration lawyers running google ads and is delivered as a CSV download link by email once available.",
    "fields": "Business name, website, city, state, ad signal, keyword or market, phone, public email where available, landing page, source URL, notes.",
    "bestFor": "Marketing agencies, landing-page teams, call tracking companies, SEO firms, and competitive research teams buy this list because ad spend suggests urgency, budget, and active customer acquisition.",
    "paymentLink": "https://buy.athena.live/b/dRm9AM2Qmapde8U4BigA83L"
  },
  {
    "title": "Cosmetic surgeons running Google Ads",
    "category": "Ad Spend Signal",
    "price": "$129",
    "records": "500 records",
    "description": "An ad-spend signal CSV focused on businesses that appear to be running Google Ads in competitive local or professional-service markets. This product focuses on cosmetic surgeons running google ads and is delivered as a CSV download link by email once available.",
    "fields": "Business name, website, city, state, ad signal, keyword or market, phone, public email where available, landing page, source URL, notes.",
    "bestFor": "Marketing agencies, landing-page teams, call tracking companies, SEO firms, and competitive research teams buy this list because ad spend suggests urgency, budget, and active customer acquisition.",
    "paymentLink": "https://buy.athena.live/b/fZu9AM3Uq0OD2qcffWgA83M"
  },
  {
    "title": "Private schools running Google Ads",
    "category": "Ad Spend Signal",
    "price": "$129",
    "records": "500 records",
    "description": "An ad-spend signal CSV focused on businesses that appear to be running Google Ads in competitive local or professional-service markets. This product focuses on private schools running google ads and is delivered as a CSV download link by email once available.",
    "fields": "Business name, website, city, state, ad signal, keyword or market, phone, public email where available, landing page, source URL, notes.",
    "bestFor": "Marketing agencies, landing-page teams, call tracking companies, SEO firms, and competitive research teams buy this list because ad spend suggests urgency, budget, and active customer acquisition.",
    "paymentLink": "https://buy.athena.live/b/9B6aEQ3UqdBp6Gs8RygA83N"
  },
  {
    "title": "Chiropractors running Google Ads",
    "category": "Ad Spend Signal",
    "price": "$129",
    "records": "500 records",
    "description": "An ad-spend signal CSV focused on businesses that appear to be running Google Ads in competitive local or professional-service markets. This product focuses on chiropractors running google ads and is delivered as a CSV download link by email once available.",
    "fields": "Business name, website, city, state, ad signal, keyword or market, phone, public email where available, landing page, source URL, notes.",
    "bestFor": "Marketing agencies, landing-page teams, call tracking companies, SEO firms, and competitive research teams buy this list because ad spend suggests urgency, budget, and active customer acquisition.",
    "paymentLink": "https://buy.athena.live/b/cNicMY8aGgNB4yk4BigA83O"
  },
  {
    "title": "Real estate agents running Google Ads",
    "category": "Ad Spend Signal",
    "price": "$129",
    "records": "500 records",
    "description": "An ad-spend signal CSV focused on businesses that appear to be running Google Ads in competitive local or professional-service markets. This product focuses on real estate agents running google ads and is delivered as a CSV download link by email once available.",
    "fields": "Business name, website, city, state, ad signal, keyword or market, phone, public email where available, landing page, source URL, notes.",
    "bestFor": "Marketing agencies, landing-page teams, call tracking companies, SEO firms, and competitive research teams buy this list because ad spend suggests urgency, budget, and active customer acquisition.",
    "paymentLink": "https://buy.athena.live/b/dRm8wI62ycxlaWI3xegA83P"
  },
  {
    "title": "Mortgage brokers running Google Ads",
    "category": "Ad Spend Signal",
    "price": "$129",
    "records": "500 records",
    "description": "An ad-spend signal CSV focused on businesses that appear to be running Google Ads in competitive local or professional-service markets. This product focuses on mortgage brokers running google ads and is delivered as a CSV download link by email once available.",
    "fields": "Business name, website, city, state, ad signal, keyword or market, phone, public email where available, landing page, source URL, notes.",
    "bestFor": "Marketing agencies, landing-page teams, call tracking companies, SEO firms, and competitive research teams buy this list because ad spend suggests urgency, budget, and active customer acquisition.",
    "paymentLink": "https://buy.athena.live/b/28EfZa0Ie1SH8OA0l2gA83Q"
  },
  {
    "title": "Insurance agencies running Google Ads",
    "category": "Ad Spend Signal",
    "price": "$129",
    "records": "500 records",
    "description": "An ad-spend signal CSV focused on businesses that appear to be running Google Ads in competitive local or professional-service markets. This product focuses on insurance agencies running google ads and is delivered as a CSV download link by email once available.",
    "fields": "Business name, website, city, state, ad signal, keyword or market, phone, public email where available, landing page, source URL, notes.",
    "bestFor": "Marketing agencies, landing-page teams, call tracking companies, SEO firms, and competitive research teams buy this list because ad spend suggests urgency, budget, and active customer acquisition.",
    "paymentLink": "https://buy.athena.live/b/4gM5kwez40OD6Gs6JqgA83R"
  },
  {
    "title": "Solar companies running Google Ads",
    "category": "Ad Spend Signal",
    "price": "$129",
    "records": "500 records",
    "description": "An ad-spend signal CSV focused on businesses that appear to be running Google Ads in competitive local or professional-service markets. This product focuses on solar companies running google ads and is delivered as a CSV download link by email once available.",
    "fields": "Business name, website, city, state, ad signal, keyword or market, phone, public email where available, landing page, source URL, notes.",
    "bestFor": "Marketing agencies, landing-page teams, call tracking companies, SEO firms, and competitive research teams buy this list because ad spend suggests urgency, budget, and active customer acquisition.",
    "paymentLink": "https://buy.athena.live/b/8x228k4YueFtfcY0l2gA83S"
  },
  {
    "title": "Pest control companies running Google Ads",
    "category": "Ad Spend Signal",
    "price": "$129",
    "records": "500 records",
    "description": "An ad-spend signal CSV focused on businesses that appear to be running Google Ads in competitive local or professional-service markets. This product focuses on pest control companies running google ads and is delivered as a CSV download link by email once available.",
    "fields": "Business name, website, city, state, ad signal, keyword or market, phone, public email where available, landing page, source URL, notes.",
    "bestFor": "Marketing agencies, landing-page teams, call tracking companies, SEO firms, and competitive research teams buy this list because ad spend suggests urgency, budget, and active customer acquisition.",
    "paymentLink": "https://buy.athena.live/b/8x2dR2cqWgNB1m8c3KgA83T"
  },
  {
    "title": "Garage door repair companies running Google Ads",
    "category": "Ad Spend Signal",
    "price": "$129",
    "records": "500 records",
    "description": "An ad-spend signal CSV focused on businesses that appear to be running Google Ads in competitive local or professional-service markets. This product focuses on garage door repair companies running google ads and is delivered as a CSV download link by email once available.",
    "fields": "Business name, website, city, state, ad signal, keyword or market, phone, public email where available, landing page, source URL, notes.",
    "bestFor": "Marketing agencies, landing-page teams, call tracking companies, SEO firms, and competitive research teams buy this list because ad spend suggests urgency, budget, and active customer acquisition.",
    "paymentLink": "https://buy.athena.live/b/28E7sEbmS1SH2qc4BigA83U"
  },
  {
    "title": "Bail bond companies running Google Ads",
    "category": "Ad Spend Signal",
    "price": "$129",
    "records": "500 records",
    "description": "An ad-spend signal CSV focused on businesses that appear to be running Google Ads in competitive local or professional-service markets. This product focuses on bail bond companies running google ads and is delivered as a CSV download link by email once available.",
    "fields": "Business name, website, city, state, ad signal, keyword or market, phone, public email where available, landing page, source URL, notes.",
    "bestFor": "Marketing agencies, landing-page teams, call tracking companies, SEO firms, and competitive research teams buy this list because ad spend suggests urgency, budget, and active customer acquisition.",
    "paymentLink": "https://buy.athena.live/b/00w00cdv02WL1m87NugA83V"
  },
  {
    "title": "Funeral homes running Google Ads",
    "category": "Ad Spend Signal",
    "price": "$129",
    "records": "500 records",
    "description": "An ad-spend signal CSV focused on businesses that appear to be running Google Ads in competitive local or professional-service markets. This product focuses on funeral homes running google ads and is delivered as a CSV download link by email once available.",
    "fields": "Business name, website, city, state, ad signal, keyword or market, phone, public email where available, landing page, source URL, notes.",
    "bestFor": "Marketing agencies, landing-page teams, call tracking companies, SEO firms, and competitive research teams buy this list because ad spend suggests urgency, budget, and active customer acquisition.",
    "paymentLink": "https://buy.athena.live/b/8x228k9eKeFtd4Qc3KgA83W"
  },
  {
    "title": "Security companies running Google Ads",
    "category": "Ad Spend Signal",
    "price": "$129",
    "records": "500 records",
    "description": "An ad-spend signal CSV focused on businesses that appear to be running Google Ads in competitive local or professional-service markets. This product focuses on security companies running google ads and is delivered as a CSV download link by email once available.",
    "fields": "Business name, website, city, state, ad signal, keyword or market, phone, public email where available, landing page, source URL, notes.",
    "bestFor": "Marketing agencies, landing-page teams, call tracking companies, SEO firms, and competitive research teams buy this list because ad spend suggests urgency, budget, and active customer acquisition.",
    "paymentLink": "https://buy.athena.live/b/14A7sEfD8apdaWI4BigA83X"
  },
  {
    "title": "Independent music venues",
    "category": "Events and Venues",
    "price": "$99",
    "records": "500 records",
    "description": "An event and venue CSV focused on organizations and contacts connected to live events, bookings, venue rentals, and event production. This product focuses on independent music venues and is delivered as a CSV download link by email once available.",
    "fields": "Organization or venue name, website, city, state, event type, booking page, public email where available, phone, social link, source URL, notes.",
    "bestFor": "Photographers, DJs, caterers, ticketing tools, sponsors, venues, promoters, rental companies, and event software teams buy this list to reach people involved in booking or producing events.",
    "paymentLink": "https://buy.athena.live/b/eVq9AM2Qmapdgh29VCgA83Y"
  },
  {
    "title": "500 Wedding Venues With Emails",
    "category": "Events and Venues",
    "price": "$99",
    "records": "500 records",
    "description": "An event and venue CSV focused on organizations and contacts connected to live events, bookings, venue rentals, and event production. This product focuses on 500 wedding venues with emails and is delivered as a CSV download link by email once available.",
    "fields": "Organization or venue name, website, city, state, event type, booking page, public email where available, phone, social link, source URL, notes.",
    "bestFor": "Photographers, DJs, caterers, ticketing tools, sponsors, venues, promoters, rental companies, and event software teams buy this list to reach people involved in booking or producing events.",
    "paymentLink": "https://buy.athena.live/b/28EbIU9eK2WL6GsebSgA830"
  },
  {
    "title": "Banquet halls",
    "category": "Events and Venues",
    "price": "$99",
    "records": "500 records",
    "description": "An event and venue CSV focused on organizations and contacts connected to live events, bookings, venue rentals, and event production. This product focuses on banquet halls and is delivered as a CSV download link by email once available.",
    "fields": "Organization or venue name, website, city, state, event type, booking page, public email where available, phone, social link, source URL, notes.",
    "bestFor": "Photographers, DJs, caterers, ticketing tools, sponsors, venues, promoters, rental companies, and event software teams buy this list to reach people involved in booking or producing events.",
    "paymentLink": "https://buy.athena.live/b/fZucMYbmScxlaWI9VCgA83Z"
  },
  {
    "title": "Churches with rentable event halls",
    "category": "Events and Venues",
    "price": "$99",
    "records": "500 records",
    "description": "An event and venue CSV focused on organizations and contacts connected to live events, bookings, venue rentals, and event production. This product focuses on churches with rentable event halls and is delivered as a CSV download link by email once available.",
    "fields": "Organization or venue name, website, city, state, event type, booking page, public email where available, phone, social link, source URL, notes.",
    "bestFor": "Photographers, DJs, caterers, ticketing tools, sponsors, venues, promoters, rental companies, and event software teams buy this list to reach people involved in booking or producing events.",
    "paymentLink": "https://buy.athena.live/b/5kQ6oAdv07d14ykaZGgA840"
  },
  {
    "title": "Community centers with event spaces",
    "category": "Events and Venues",
    "price": "$99",
    "records": "500 records",
    "description": "An event and venue CSV focused on organizations and contacts connected to live events, bookings, venue rentals, and event production. This product focuses on community centers with event spaces and is delivered as a CSV download link by email once available.",
    "fields": "Organization or venue name, website, city, state, event type, booking page, public email where available, phone, social link, source URL, notes.",
    "bestFor": "Photographers, DJs, caterers, ticketing tools, sponsors, venues, promoters, rental companies, and event software teams buy this list to reach people involved in booking or producing events.",
    "paymentLink": "https://buy.athena.live/b/7sY7sE2Qm54Td4Q9VCgA841"
  },
  {
    "title": "Comedy clubs",
    "category": "Events and Venues",
    "price": "$99",
    "records": "500 records",
    "description": "An event and venue CSV focused on organizations and contacts connected to live events, bookings, venue rentals, and event production. This product focuses on comedy clubs and is delivered as a CSV download link by email once available.",
    "fields": "Organization or venue name, website, city, state, event type, booking page, public email where available, phone, social link, source URL, notes.",
    "bestFor": "Photographers, DJs, caterers, ticketing tools, sponsors, venues, promoters, rental companies, and event software teams buy this list to reach people involved in booking or producing events.",
    "paymentLink": "https://buy.athena.live/b/7sY28k2Qm40Pe8U8RygA842"
  },
  {
    "title": "Art galleries hosting events",
    "category": "Events and Venues",
    "price": "$99",
    "records": "500 records",
    "description": "An event and venue CSV focused on organizations and contacts connected to live events, bookings, venue rentals, and event production. This product focuses on art galleries hosting events and is delivered as a CSV download link by email once available.",
    "fields": "Organization or venue name, website, city, state, event type, booking page, public email where available, phone, social link, source URL, notes.",
    "bestFor": "Photographers, DJs, caterers, ticketing tools, sponsors, venues, promoters, rental companies, and event software teams buy this list to reach people involved in booking or producing events.",
    "paymentLink": "https://buy.athena.live/b/00wfZa76C68XaWI5FmgA843"
  },
  {
    "title": "Festival organizers",
    "category": "Events and Venues",
    "price": "$99",
    "records": "500 records",
    "description": "An event and venue CSV focused on organizations and contacts connected to live events, bookings, venue rentals, and event production. This product focuses on festival organizers and is delivered as a CSV download link by email once available.",
    "fields": "Organization or venue name, website, city, state, event type, booking page, public email where available, phone, social link, source URL, notes.",
    "bestFor": "Photographers, DJs, caterers, ticketing tools, sponsors, venues, promoters, rental companies, and event software teams buy this list to reach people involved in booking or producing events.",
    "paymentLink": "https://buy.athena.live/b/4gM8wI4YugNB5CoaZGgA844"
  },
  {
    "title": "Farmers market organizers",
    "category": "Events and Venues",
    "price": "$99",
    "records": "500 records",
    "description": "An event and venue CSV focused on organizations and contacts connected to live events, bookings, venue rentals, and event production. This product focuses on farmers market organizers and is delivered as a CSV download link by email once available.",
    "fields": "Organization or venue name, website, city, state, event type, booking page, public email where available, phone, social link, source URL, notes.",
    "bestFor": "Photographers, DJs, caterers, ticketing tools, sponsors, venues, promoters, rental companies, and event software teams buy this list to reach people involved in booking or producing events.",
    "paymentLink": "https://buy.athena.live/b/3cI4gs4Yu7d16GsffWgA845"
  },
  {
    "title": "Food truck event organizers",
    "category": "Events and Venues",
    "price": "$99",
    "records": "500 records",
    "description": "An event and venue CSV focused on organizations and contacts connected to live events, bookings, venue rentals, and event production. This product focuses on food truck event organizers and is delivered as a CSV download link by email once available.",
    "fields": "Organization or venue name, website, city, state, event type, booking page, public email where available, phone, social link, source URL, notes.",
    "bestFor": "Photographers, DJs, caterers, ticketing tools, sponsors, venues, promoters, rental companies, and event software teams buy this list to reach people involved in booking or producing events.",
    "paymentLink": "https://buy.athena.live/b/28EeV6aiO54T8OA1p6gA846"
  },
  {
    "title": "Pop-up market organizers",
    "category": "Events and Venues",
    "price": "$99",
    "records": "500 records",
    "description": "An event and venue CSV focused on organizations and contacts connected to live events, bookings, venue rentals, and event production. This product focuses on pop-up market organizers and is delivered as a CSV download link by email once available.",
    "fields": "Organization or venue name, website, city, state, event type, booking page, public email where available, phone, social link, source URL, notes.",
    "bestFor": "Photographers, DJs, caterers, ticketing tools, sponsors, venues, promoters, rental companies, and event software teams buy this list to reach people involved in booking or producing events.",
    "paymentLink": "https://buy.athena.live/b/eVq9AM4Yu68XaWIffWgA847"
  },
  {
    "title": "Nightclub promoters",
    "category": "Events and Venues",
    "price": "$99",
    "records": "500 records",
    "description": "An event and venue CSV focused on organizations and contacts connected to live events, bookings, venue rentals, and event production. This product focuses on nightclub promoters and is delivered as a CSV download link by email once available.",
    "fields": "Organization or venue name, website, city, state, event type, booking page, public email where available, phone, social link, source URL, notes.",
    "bestFor": "Photographers, DJs, caterers, ticketing tools, sponsors, venues, promoters, rental companies, and event software teams buy this list to reach people involved in booking or producing events.",
    "paymentLink": "https://buy.athena.live/b/4gM4gsdv0apd5Co7NugA900"
  },
  {
    "title": "1,000 Event Promoters and Venue Contacts",
    "category": "Events and Venues",
    "price": "$99",
    "records": "1,000 records",
    "description": "An event and venue CSV focused on organizations and contacts connected to live events, bookings, venue rentals, and event production. This product focuses on 1,000 event promoters and venue contacts and is delivered as a CSV download link by email once available.",
    "fields": "Organization or venue name, website, city, state, event type, booking page, public email where available, phone, social link, source URL, notes.",
    "bestFor": "Photographers, DJs, caterers, ticketing tools, sponsors, venues, promoters, rental companies, and event software teams buy this list to reach people involved in booking or producing events.",
    "paymentLink": "https://buy.athena.live/b/aFabIU0Ie40P3ugebSgA835"
  },
  {
    "title": "Corporate event planners",
    "category": "Events and Venues",
    "price": "$99",
    "records": "500 records",
    "description": "An event and venue CSV focused on organizations and contacts connected to live events, bookings, venue rentals, and event production. This product focuses on corporate event planners and is delivered as a CSV download link by email once available.",
    "fields": "Organization or venue name, website, city, state, event type, booking page, public email where available, phone, social link, source URL, notes.",
    "bestFor": "Photographers, DJs, caterers, ticketing tools, sponsors, venues, promoters, rental companies, and event software teams buy this list to reach people involved in booking or producing events.",
    "paymentLink": "https://buy.athena.live/b/dRmeV64YufJxaWI4BigA901"
  },
  {
    "title": "Wedding planners",
    "category": "Events and Venues",
    "price": "$99",
    "records": "500 records",
    "description": "An event and venue CSV focused on organizations and contacts connected to live events, bookings, venue rentals, and event production. This product focuses on wedding planners and is delivered as a CSV download link by email once available.",
    "fields": "Organization or venue name, website, city, state, event type, booking page, public email where available, phone, social link, source URL, notes.",
    "bestFor": "Photographers, DJs, caterers, ticketing tools, sponsors, venues, promoters, rental companies, and event software teams buy this list to reach people involved in booking or producing events.",
    "paymentLink": "https://buy.athena.live/b/9B628k62y68XfcYd7OgA902"
  },
  {
    "title": "AV production companies",
    "category": "Events and Venues",
    "price": "$99",
    "records": "500 records",
    "description": "An event and venue CSV focused on organizations and contacts connected to live events, bookings, venue rentals, and event production. This product focuses on av production companies and is delivered as a CSV download link by email once available.",
    "fields": "Organization or venue name, website, city, state, event type, booking page, public email where available, phone, social link, source URL, notes.",
    "bestFor": "Photographers, DJs, caterers, ticketing tools, sponsors, venues, promoters, rental companies, and event software teams buy this list to reach people involved in booking or producing events.",
    "paymentLink": "https://buy.athena.live/b/9B65kw4Yu9l9aWI9VCgA903"
  },
  {
    "title": "Event rental companies",
    "category": "Events and Venues",
    "price": "$99",
    "records": "500 records",
    "description": "An event and venue CSV focused on organizations and contacts connected to live events, bookings, venue rentals, and event production. This product focuses on event rental companies and is delivered as a CSV download link by email once available.",
    "fields": "Organization or venue name, website, city, state, event type, booking page, public email where available, phone, social link, source URL, notes.",
    "bestFor": "Photographers, DJs, caterers, ticketing tools, sponsors, venues, promoters, rental companies, and event software teams buy this list to reach people involved in booking or producing events.",
    "paymentLink": "https://buy.athena.live/b/4gMaEQbmS68Xe8UffWgA904"
  },
  {
    "title": "Party rental companies",
    "category": "Events and Venues",
    "price": "$99",
    "records": "500 records",
    "description": "An event and venue CSV focused on organizations and contacts connected to live events, bookings, venue rentals, and event production. This product focuses on party rental companies and is delivered as a CSV download link by email once available.",
    "fields": "Organization or venue name, website, city, state, event type, booking page, public email where available, phone, social link, source URL, notes.",
    "bestFor": "Photographers, DJs, caterers, ticketing tools, sponsors, venues, promoters, rental companies, and event software teams buy this list to reach people involved in booking or producing events.",
    "paymentLink": "https://buy.athena.live/b/dRm5kw3UqcxlaWI1p6gA905"
  },
  {
    "title": "DJs with booking contacts",
    "category": "Events and Venues",
    "price": "$99",
    "records": "500 records",
    "description": "An event and venue CSV focused on organizations and contacts connected to live events, bookings, venue rentals, and event production. This product focuses on djs with booking contacts and is delivered as a CSV download link by email once available.",
    "fields": "Organization or venue name, website, city, state, event type, booking page, public email where available, phone, social link, source URL, notes.",
    "bestFor": "Photographers, DJs, caterers, ticketing tools, sponsors, venues, promoters, rental companies, and event software teams buy this list to reach people involved in booking or producing events.",
    "paymentLink": "https://buy.athena.live/b/cNicMYfD8dBpd4Q5FmgA906"
  },
  {
    "title": "1,000 Independent Artist Websites With Booking Contacts",
    "category": "Events and Venues",
    "price": "$99",
    "records": "1,000 records",
    "description": "An event and venue CSV focused on organizations and contacts connected to live events, bookings, venue rentals, and event production. This product focuses on 1,000 independent artist websites with booking contacts and is delivered as a CSV download link by email once available.",
    "fields": "Organization or venue name, website, city, state, event type, booking page, public email where available, phone, social link, source URL, notes.",
    "bestFor": "Photographers, DJs, caterers, ticketing tools, sponsors, venues, promoters, rental companies, and event software teams buy this list to reach people involved in booking or producing events.",
    "paymentLink": "https://buy.athena.live/b/dRm5kw2Qm1SH6GsebSgA82Z"
  },
  {
    "title": "500 Personal Injury Law Firms in California",
    "category": "Professional Services",
    "price": "$149",
    "records": "500 records",
    "description": "A professional-services CSV focused on firms, advisors, brokers, and specialized service providers. This product focuses on 500 personal injury law firms in california and is delivered as a CSV download link by email once available.",
    "fields": "Company name, website, city, state, service type, phone, public email where available, contact page, source URL, notes.",
    "bestFor": "B2B SaaS teams, lead generation agencies, legal marketers, financial service vendors, recruiters, consultants, and sales teams buy this list to reach firms with clear commercial value.",
    "paymentLink": "https://buy.athena.live/b/4gM7sEez4bthe8UaZGgA82X"
  },
  {
    "title": "Immigration law firms",
    "category": "Professional Services",
    "price": "$149",
    "records": "500 records",
    "description": "A professional-services CSV focused on firms, advisors, brokers, and specialized service providers. This product focuses on immigration law firms and is delivered as a CSV download link by email once available.",
    "fields": "Company name, website, city, state, service type, phone, public email where available, contact page, source URL, notes.",
    "bestFor": "B2B SaaS teams, lead generation agencies, legal marketers, financial service vendors, recruiters, consultants, and sales teams buy this list to reach firms with clear commercial value.",
    "paymentLink": "https://buy.athena.live/b/eVq14g8aG9l95Co7NugA907"
  },
  {
    "title": "Bankruptcy law firms",
    "category": "Professional Services",
    "price": "$149",
    "records": "500 records",
    "description": "A professional-services CSV focused on firms, advisors, brokers, and specialized service providers. This product focuses on bankruptcy law firms and is delivered as a CSV download link by email once available.",
    "fields": "Company name, website, city, state, service type, phone, public email where available, contact page, source URL, notes.",
    "bestFor": "B2B SaaS teams, lead generation agencies, legal marketers, financial service vendors, recruiters, consultants, and sales teams buy this list to reach firms with clear commercial value.",
    "paymentLink": "https://buy.athena.live/b/fZu7sE4Yu40P8OA3xegA908"
  },
  {
    "title": "Family law firms",
    "category": "Professional Services",
    "price": "$149",
    "records": "500 records",
    "description": "A professional-services CSV focused on firms, advisors, brokers, and specialized service providers. This product focuses on family law firms and is delivered as a CSV download link by email once available.",
    "fields": "Company name, website, city, state, service type, phone, public email where available, contact page, source URL, notes.",
    "bestFor": "B2B SaaS teams, lead generation agencies, legal marketers, financial service vendors, recruiters, consultants, and sales teams buy this list to reach firms with clear commercial value.",
    "paymentLink": "https://buy.athena.live/b/aFa6oA8aG1SHfcY4BigA909"
  },
  {
    "title": "Estate planning law firms",
    "category": "Professional Services",
    "price": "$149",
    "records": "500 records",
    "description": "A professional-services CSV focused on firms, advisors, brokers, and specialized service providers. This product focuses on estate planning law firms and is delivered as a CSV download link by email once available.",
    "fields": "Company name, website, city, state, service type, phone, public email where available, contact page, source URL, notes.",
    "bestFor": "B2B SaaS teams, lead generation agencies, legal marketers, financial service vendors, recruiters, consultants, and sales teams buy this list to reach firms with clear commercial value.",
    "paymentLink": "https://buy.athena.live/b/28E5kw4YufJxd4Qc3KgA90a"
  },
  {
    "title": "Criminal defense law firms",
    "category": "Professional Services",
    "price": "$149",
    "records": "500 records",
    "description": "A professional-services CSV focused on firms, advisors, brokers, and specialized service providers. This product focuses on criminal defense law firms and is delivered as a CSV download link by email once available.",
    "fields": "Company name, website, city, state, service type, phone, public email where available, contact page, source URL, notes.",
    "bestFor": "B2B SaaS teams, lead generation agencies, legal marketers, financial service vendors, recruiters, consultants, and sales teams buy this list to reach firms with clear commercial value.",
    "paymentLink": "https://buy.athena.live/b/fZufZa3Uq1SH1m8aZGgA90b"
  },
  {
    "title": "Employment law firms",
    "category": "Professional Services",
    "price": "$149",
    "records": "500 records",
    "description": "A professional-services CSV focused on firms, advisors, brokers, and specialized service providers. This product focuses on employment law firms and is delivered as a CSV download link by email once available.",
    "fields": "Company name, website, city, state, service type, phone, public email where available, contact page, source URL, notes.",
    "bestFor": "B2B SaaS teams, lead generation agencies, legal marketers, financial service vendors, recruiters, consultants, and sales teams buy this list to reach firms with clear commercial value.",
    "paymentLink": "https://buy.athena.live/b/28EbIUdv0gNB4ykgk0gA90c"
  },
  {
    "title": "Tax attorneys",
    "category": "Professional Services",
    "price": "$149",
    "records": "500 records",
    "description": "A professional-services CSV focused on firms, advisors, brokers, and specialized service providers. This product focuses on tax attorneys and is delivered as a CSV download link by email once available.",
    "fields": "Company name, website, city, state, service type, phone, public email where available, contact page, source URL, notes.",
    "bestFor": "B2B SaaS teams, lead generation agencies, legal marketers, financial service vendors, recruiters, consultants, and sales teams buy this list to reach firms with clear commercial value.",
    "paymentLink": "https://buy.athena.live/b/bJecMY3UqfJxc0M9VCgA90d"
  },
  {
    "title": "CPA firms",
    "category": "Professional Services",
    "price": "$149",
    "records": "500 records",
    "description": "A professional-services CSV focused on firms, advisors, brokers, and specialized service providers. This product focuses on cpa firms and is delivered as a CSV download link by email once available.",
    "fields": "Company name, website, city, state, service type, phone, public email where available, contact page, source URL, notes.",
    "bestFor": "B2B SaaS teams, lead generation agencies, legal marketers, financial service vendors, recruiters, consultants, and sales teams buy this list to reach firms with clear commercial value.",
    "paymentLink": "https://buy.athena.live/b/4gMdR276C2WLfcY8RygA90e"
  },
  {
    "title": "Bookkeeping firms",
    "category": "Professional Services",
    "price": "$149",
    "records": "500 records",
    "description": "A professional-services CSV focused on firms, advisors, brokers, and specialized service providers. This product focuses on bookkeeping firms and is delivered as a CSV download link by email once available.",
    "fields": "Company name, website, city, state, service type, phone, public email where available, contact page, source URL, notes.",
    "bestFor": "B2B SaaS teams, lead generation agencies, legal marketers, financial service vendors, recruiters, consultants, and sales teams buy this list to reach firms with clear commercial value.",
    "paymentLink": "https://buy.athena.live/b/28E6oAez40OD6Gs0l2gA90f"
  },
  {
    "title": "Insurance agencies",
    "category": "Professional Services",
    "price": "$149",
    "records": "500 records",
    "description": "A professional-services CSV focused on firms, advisors, brokers, and specialized service providers. This product focuses on insurance agencies and is delivered as a CSV download link by email once available.",
    "fields": "Company name, website, city, state, service type, phone, public email where available, contact page, source URL, notes.",
    "bestFor": "B2B SaaS teams, lead generation agencies, legal marketers, financial service vendors, recruiters, consultants, and sales teams buy this list to reach firms with clear commercial value.",
    "paymentLink": "https://buy.athena.live/b/7sY5kw2Qm0ODe8U9VCgA90g"
  },
  {
    "title": "Mortgage brokers",
    "category": "Professional Services",
    "price": "$149",
    "records": "500 records",
    "description": "A professional-services CSV focused on firms, advisors, brokers, and specialized service providers. This product focuses on mortgage brokers and is delivered as a CSV download link by email once available.",
    "fields": "Company name, website, city, state, service type, phone, public email where available, contact page, source URL, notes.",
    "bestFor": "B2B SaaS teams, lead generation agencies, legal marketers, financial service vendors, recruiters, consultants, and sales teams buy this list to reach firms with clear commercial value.",
    "paymentLink": "https://buy.athena.live/b/7sYfZacqW8h5aWI6JqgA90h"
  },
  {
    "title": "Private lenders",
    "category": "Professional Services",
    "price": "$149",
    "records": "500 records",
    "description": "A professional-services CSV focused on firms, advisors, brokers, and specialized service providers. This product focuses on private lenders and is delivered as a CSV download link by email once available.",
    "fields": "Company name, website, city, state, service type, phone, public email where available, contact page, source URL, notes.",
    "bestFor": "B2B SaaS teams, lead generation agencies, legal marketers, financial service vendors, recruiters, consultants, and sales teams buy this list to reach firms with clear commercial value.",
    "paymentLink": "https://buy.athena.live/b/fZueV69eKcxl2qc7NugA90i"
  },
  {
    "title": "Business brokers",
    "category": "Professional Services",
    "price": "$149",
    "records": "500 records",
    "description": "A professional-services CSV focused on firms, advisors, brokers, and specialized service providers. This product focuses on business brokers and is delivered as a CSV download link by email once available.",
    "fields": "Company name, website, city, state, service type, phone, public email where available, contact page, source URL, notes.",
    "bestFor": "B2B SaaS teams, lead generation agencies, legal marketers, financial service vendors, recruiters, consultants, and sales teams buy this list to reach firms with clear commercial value.",
    "paymentLink": "https://buy.athena.live/b/9B66oA8aGeFtgh21p6gA90j"
  },
  {
    "title": "Financial advisors",
    "category": "Professional Services",
    "price": "$149",
    "records": "500 records",
    "description": "A professional-services CSV focused on firms, advisors, brokers, and specialized service providers. This product focuses on financial advisors and is delivered as a CSV download link by email once available.",
    "fields": "Company name, website, city, state, service type, phone, public email where available, contact page, source URL, notes.",
    "bestFor": "B2B SaaS teams, lead generation agencies, legal marketers, financial service vendors, recruiters, consultants, and sales teams buy this list to reach firms with clear commercial value.",
    "paymentLink": "https://buy.athena.live/b/bJedR21MieFt7Kwd7OgA90k"
  },
  {
    "title": "Wealth management firms",
    "category": "Professional Services",
    "price": "$149",
    "records": "500 records",
    "description": "A professional-services CSV focused on firms, advisors, brokers, and specialized service providers. This product focuses on wealth management firms and is delivered as a CSV download link by email once available.",
    "fields": "Company name, website, city, state, service type, phone, public email where available, contact page, source URL, notes.",
    "bestFor": "B2B SaaS teams, lead generation agencies, legal marketers, financial service vendors, recruiters, consultants, and sales teams buy this list to reach firms with clear commercial value.",
    "paymentLink": "https://buy.athena.live/b/bJe8wI76C1SH8OAebSgA90l"
  },
  {
    "title": "Real estate brokers",
    "category": "Professional Services",
    "price": "$149",
    "records": "500 records",
    "description": "A professional-services CSV focused on firms, advisors, brokers, and specialized service providers. This product focuses on real estate brokers and is delivered as a CSV download link by email once available.",
    "fields": "Company name, website, city, state, service type, phone, public email where available, contact page, source URL, notes.",
    "bestFor": "B2B SaaS teams, lead generation agencies, legal marketers, financial service vendors, recruiters, consultants, and sales teams buy this list to reach firms with clear commercial value.",
    "paymentLink": "https://buy.athena.live/b/7sY5kwdv0bthfcY5FmgA90m"
  },
  {
    "title": "Commercial real estate brokers",
    "category": "Professional Services",
    "price": "$149",
    "records": "500 records",
    "description": "A professional-services CSV focused on firms, advisors, brokers, and specialized service providers. This product focuses on commercial real estate brokers and is delivered as a CSV download link by email once available.",
    "fields": "Company name, website, city, state, service type, phone, public email where available, contact page, source URL, notes.",
    "bestFor": "B2B SaaS teams, lead generation agencies, legal marketers, financial service vendors, recruiters, consultants, and sales teams buy this list to reach firms with clear commercial value.",
    "paymentLink": "https://buy.athena.live/b/aFa6oAaiO7d17Kw6JqgA90n"
  },
  {
    "title": "500 Property Managers in California",
    "category": "Real Estate and Property",
    "price": "$99",
    "records": "500 records",
    "description": "A real estate and property CSV of California property managers for proptech, maintenance, insurance, lending, agency, and B2B vendor outreach. Delivered as a CSV download link by email once available.",
    "fields": "Company name, website, city, state, property management type, phone, public email where available, contact page, portfolio or service area, source URL, notes.",
    "bestFor": "Proptech companies, maintenance vendors, insurance teams, lenders, local agencies, and B2B sales teams buy this list to reach property managers and operators in California.",
    "paymentLink": "https://buy.athena.live/b/bJe6oAcqW68X9SEffWgA831"
  },
  {
    "title": "Consulting firms",
    "category": "Professional Services",
    "price": "$149",
    "records": "500 records",
    "description": "A professional-services CSV focused on firms, advisors, brokers, and specialized service providers. This product focuses on consulting firms and is delivered as a CSV download link by email once available.",
    "fields": "Company name, website, city, state, service type, phone, public email where available, contact page, source URL, notes.",
    "bestFor": "B2B SaaS teams, lead generation agencies, legal marketers, financial service vendors, recruiters, consultants, and sales teams buy this list to reach firms with clear commercial value.",
    "paymentLink": "https://buy.athena.live/b/7sYcMYfD8dBp5Co8RygA90o"
  },
  {
    "title": "Apartment buildings without websites",
    "category": "Real Estate and Property",
    "price": "$99",
    "records": "500 records",
    "description": "A real estate and property CSV focused on property operators, managers, owners, lodging businesses, and property-related organizations. This product focuses on apartment buildings without websites and is delivered as a CSV download link by email once available.",
    "fields": "Company or property name, website, city, state, property type, phone, public email where available, contact page, source URL, notes.",
    "bestFor": "Property service vendors, proptech companies, insurance teams, lenders, maintenance providers, agencies, and B2B sales teams buy this list to reach owners, operators, managers, and property businesses.",
    "paymentLink": "https://buy.athena.live/b/eVq28kaiOcxl7Kw9VCgA90p"
  },
  {
    "title": "Apartment buildings with outdated websites",
    "category": "Real Estate and Property",
    "price": "$99",
    "records": "500 records",
    "description": "A real estate and property CSV focused on property operators, managers, owners, lodging businesses, and property-related organizations. This product focuses on apartment buildings with outdated websites and is delivered as a CSV download link by email once available.",
    "fields": "Company or property name, website, city, state, property type, phone, public email where available, contact page, source URL, notes.",
    "bestFor": "Property service vendors, proptech companies, insurance teams, lenders, maintenance providers, agencies, and B2B sales teams buy this list to reach owners, operators, managers, and property businesses.",
    "paymentLink": "https://buy.athena.live/b/3cI8wI0Ie40Pgh2d7OgA90q"
  },
  {
    "title": "Property management companies",
    "category": "Real Estate and Property",
    "price": "$99",
    "records": "500 records",
    "description": "A real estate and property CSV focused on property operators, managers, owners, lodging businesses, and property-related organizations. This product focuses on property management companies and is delivered as a CSV download link by email once available.",
    "fields": "Company or property name, website, city, state, property type, phone, public email where available, contact page, source URL, notes.",
    "bestFor": "Property service vendors, proptech companies, insurance teams, lenders, maintenance providers, agencies, and B2B sales teams buy this list to reach owners, operators, managers, and property businesses.",
    "paymentLink": "https://buy.athena.live/b/4gMbIU4YugNBfcY3xegA90r"
  },
  {
    "title": "HOA management companies",
    "category": "Real Estate and Property",
    "price": "$99",
    "records": "500 records",
    "description": "A real estate and property CSV focused on property operators, managers, owners, lodging businesses, and property-related organizations. This product focuses on hoa management companies and is delivered as a CSV download link by email once available.",
    "fields": "Company or property name, website, city, state, property type, phone, public email where available, contact page, source URL, notes.",
    "bestFor": "Property service vendors, proptech companies, insurance teams, lenders, maintenance providers, agencies, and B2B sales teams buy this list to reach owners, operators, managers, and property businesses.",
    "paymentLink": "https://buy.athena.live/b/3cI00cdv0apd3ugd7OgA90s"
  },
  {
    "title": "Self-storage facilities",
    "category": "Real Estate and Property",
    "price": "$99",
    "records": "500 records",
    "description": "A real estate and property CSV focused on property operators, managers, owners, lodging businesses, and property-related organizations. This product focuses on self-storage facilities and is delivered as a CSV download link by email once available.",
    "fields": "Company or property name, website, city, state, property type, phone, public email where available, contact page, source URL, notes.",
    "bestFor": "Property service vendors, proptech companies, insurance teams, lenders, maintenance providers, agencies, and B2B sales teams buy this list to reach owners, operators, managers, and property businesses.",
    "paymentLink": "https://buy.athena.live/b/4gM28kgHceFtd4Q0l2gA90t"
  },
  {
    "title": "Mobile home parks",
    "category": "Real Estate and Property",
    "price": "$99",
    "records": "500 records",
    "description": "A real estate and property CSV focused on property operators, managers, owners, lodging businesses, and property-related organizations. This product focuses on mobile home parks and is delivered as a CSV download link by email once available.",
    "fields": "Company or property name, website, city, state, property type, phone, public email where available, contact page, source URL, notes.",
    "bestFor": "Property service vendors, proptech companies, insurance teams, lenders, maintenance providers, agencies, and B2B sales teams buy this list to reach owners, operators, managers, and property businesses.",
    "paymentLink": "https://buy.athena.live/b/6oU28k8aG7d12qc9VCgA90u"
  },
  {
    "title": "Senior living facilities",
    "category": "Real Estate and Property",
    "price": "$99",
    "records": "500 records",
    "description": "A real estate and property CSV focused on property operators, managers, owners, lodging businesses, and property-related organizations. This product focuses on senior living facilities and is delivered as a CSV download link by email once available.",
    "fields": "Company or property name, website, city, state, property type, phone, public email where available, contact page, source URL, notes.",
    "bestFor": "Property service vendors, proptech companies, insurance teams, lenders, maintenance providers, agencies, and B2B sales teams buy this list to reach owners, operators, managers, and property businesses.",
    "paymentLink": "https://buy.athena.live/b/9B64gsaiO0OD5Co9VCgA90v"
  },
  {
    "title": "Assisted living homes",
    "category": "Real Estate and Property",
    "price": "$99",
    "records": "500 records",
    "description": "A real estate and property CSV focused on property operators, managers, owners, lodging businesses, and property-related organizations. This product focuses on assisted living homes and is delivered as a CSV download link by email once available.",
    "fields": "Company or property name, website, city, state, property type, phone, public email where available, contact page, source URL, notes.",
    "bestFor": "Property service vendors, proptech companies, insurance teams, lenders, maintenance providers, agencies, and B2B sales teams buy this list to reach owners, operators, managers, and property businesses.",
    "paymentLink": "https://buy.athena.live/b/4gMeV6cqW54Tgh2d7OgA90w"
  },
  {
    "title": "Independent hotels",
    "category": "Real Estate and Property",
    "price": "$99",
    "records": "500 records",
    "description": "A real estate and property CSV focused on property operators, managers, owners, lodging businesses, and property-related organizations. This product focuses on independent hotels and is delivered as a CSV download link by email once available.",
    "fields": "Company or property name, website, city, state, property type, phone, public email where available, contact page, source URL, notes.",
    "bestFor": "Property service vendors, proptech companies, insurance teams, lenders, maintenance providers, agencies, and B2B sales teams buy this list to reach owners, operators, managers, and property businesses.",
    "paymentLink": "https://buy.athena.live/b/aFacMY62ybth4yk6JqgA90x"
  },
  {
    "title": "Boutique hotels",
    "category": "Real Estate and Property",
    "price": "$99",
    "records": "500 records",
    "description": "A real estate and property CSV focused on property operators, managers, owners, lodging businesses, and property-related organizations. This product focuses on boutique hotels and is delivered as a CSV download link by email once available.",
    "fields": "Company or property name, website, city, state, property type, phone, public email where available, contact page, source URL, notes.",
    "bestFor": "Property service vendors, proptech companies, insurance teams, lenders, maintenance providers, agencies, and B2B sales teams buy this list to reach owners, operators, managers, and property businesses.",
    "paymentLink": "https://buy.athena.live/b/cNibIU1Mi68XfcY6JqgA90y"
  },
  {
    "title": "Motels with outdated websites",
    "category": "Real Estate and Property",
    "price": "$99",
    "records": "500 records",
    "description": "A real estate and property CSV focused on property operators, managers, owners, lodging businesses, and property-related organizations. This product focuses on motels with outdated websites and is delivered as a CSV download link by email once available.",
    "fields": "Company or property name, website, city, state, property type, phone, public email where available, contact page, source URL, notes.",
    "bestFor": "Property service vendors, proptech companies, insurance teams, lenders, maintenance providers, agencies, and B2B sales teams buy this list to reach owners, operators, managers, and property businesses.",
    "paymentLink": "https://buy.athena.live/b/4gM7sEgHc8h52qc7NugA90z"
  },
  {
    "title": "Short-term rental property managers",
    "category": "Real Estate and Property",
    "price": "$99",
    "records": "500 records",
    "description": "A real estate and property CSV focused on property operators, managers, owners, lodging businesses, and property-related organizations. This product focuses on short-term rental property managers and is delivered as a CSV download link by email once available.",
    "fields": "Company or property name, website, city, state, property type, phone, public email where available, contact page, source URL, notes.",
    "bestFor": "Property service vendors, proptech companies, insurance teams, lenders, maintenance providers, agencies, and B2B sales teams buy this list to reach owners, operators, managers, and property businesses.",
    "paymentLink": "https://buy.athena.live/b/28EfZa8aG2WL9SE3xegA90A"
  },
  {
    "title": "Commercial property owners",
    "category": "Real Estate and Property",
    "price": "$99",
    "records": "500 records",
    "description": "A real estate and property CSV focused on property operators, managers, owners, lodging businesses, and property-related organizations. This product focuses on commercial property owners and is delivered as a CSV download link by email once available.",
    "fields": "Company or property name, website, city, state, property type, phone, public email where available, contact page, source URL, notes.",
    "bestFor": "Property service vendors, proptech companies, insurance teams, lenders, maintenance providers, agencies, and B2B sales teams buy this list to reach owners, operators, managers, and property businesses.",
    "paymentLink": "https://buy.athena.live/b/dRmcMYaiOapd7KwffWgA90B"
  },
  {
    "title": "Coworking spaces",
    "category": "Real Estate and Property",
    "price": "$99",
    "records": "500 records",
    "description": "A real estate and property CSV focused on property operators, managers, owners, lodging businesses, and property-related organizations. This product focuses on coworking spaces and is delivered as a CSV download link by email once available.",
    "fields": "Company or property name, website, city, state, property type, phone, public email where available, contact page, source URL, notes.",
    "bestFor": "Property service vendors, proptech companies, insurance teams, lenders, maintenance providers, agencies, and B2B sales teams buy this list to reach owners, operators, managers, and property businesses.",
    "paymentLink": "https://buy.athena.live/b/7sY4gs4Yu0OD7Kw5FmgA90C"
  },
  {
    "title": "Student housing properties",
    "category": "Real Estate and Property",
    "price": "$99",
    "records": "500 records",
    "description": "A real estate and property CSV focused on property operators, managers, owners, lodging businesses, and property-related organizations. This product focuses on student housing properties and is delivered as a CSV download link by email once available.",
    "fields": "Company or property name, website, city, state, property type, phone, public email where available, contact page, source URL, notes.",
    "bestFor": "Property service vendors, proptech companies, insurance teams, lenders, maintenance providers, agencies, and B2B sales teams buy this list to reach owners, operators, managers, and property businesses.",
    "paymentLink": "https://buy.athena.live/b/3cI28kgHc54T7KwffWgA90D"
  },
  {
    "title": "RV parks",
    "category": "Real Estate and Property",
    "price": "$99",
    "records": "500 records",
    "description": "A real estate and property CSV focused on property operators, managers, owners, lodging businesses, and property-related organizations. This product focuses on rv parks and is delivered as a CSV download link by email once available.",
    "fields": "Company or property name, website, city, state, property type, phone, public email where available, contact page, source URL, notes.",
    "bestFor": "Property service vendors, proptech companies, insurance teams, lenders, maintenance providers, agencies, and B2B sales teams buy this list to reach owners, operators, managers, and property businesses.",
    "paymentLink": "https://buy.athena.live/b/bJe8wI0Ie54T8OA4BigA90E"
  },
  {
    "title": "Campgrounds",
    "category": "Real Estate and Property",
    "price": "$99",
    "records": "500 records",
    "description": "A real estate and property CSV focused on property operators, managers, owners, lodging businesses, and property-related organizations. This product focuses on campgrounds and is delivered as a CSV download link by email once available.",
    "fields": "Company or property name, website, city, state, property type, phone, public email where available, contact page, source URL, notes.",
    "bestFor": "Property service vendors, proptech companies, insurance teams, lenders, maintenance providers, agencies, and B2B sales teams buy this list to reach owners, operators, managers, and property businesses.",
    "paymentLink": "https://buy.athena.live/b/28EeV676C54Te8Ugk0gA90F"
  },
  {
    "title": "Manufactured housing communities",
    "category": "Real Estate and Property",
    "price": "$99",
    "records": "500 records",
    "description": "A real estate and property CSV focused on property operators, managers, owners, lodging businesses, and property-related organizations. This product focuses on manufactured housing communities and is delivered as a CSV download link by email once available.",
    "fields": "Company or property name, website, city, state, property type, phone, public email where available, contact page, source URL, notes.",
    "bestFor": "Property service vendors, proptech companies, insurance teams, lenders, maintenance providers, agencies, and B2B sales teams buy this list to reach owners, operators, managers, and property businesses.",
    "paymentLink": "https://buy.athena.live/b/eVqeV6fD81SH1m8ebSgA90G"
  },
  {
    "title": "Real estate developers",
    "category": "Real Estate and Property",
    "price": "$99",
    "records": "500 records",
    "description": "A real estate and property CSV focused on property operators, managers, owners, lodging businesses, and property-related organizations. This product focuses on real estate developers and is delivered as a CSV download link by email once available.",
    "fields": "Company or property name, website, city, state, property type, phone, public email where available, contact page, source URL, notes.",
    "bestFor": "Property service vendors, proptech companies, insurance teams, lenders, maintenance providers, agencies, and B2B sales teams buy this list to reach owners, operators, managers, and property businesses.",
    "paymentLink": "https://buy.athena.live/b/cNi8wIfD8dBpc0M2tagA90H"
  },
  {
    "title": "Small landlords with public contact info",
    "category": "Real Estate and Property",
    "price": "$99",
    "records": "500 records",
    "description": "A real estate and property CSV focused on property operators, managers, owners, lodging businesses, and property-related organizations. This product focuses on small landlords with public contact info and is delivered as a CSV download link by email once available.",
    "fields": "Company or property name, website, city, state, property type, phone, public email where available, contact page, source URL, notes.",
    "bestFor": "Property service vendors, proptech companies, insurance teams, lenders, maintenance providers, agencies, and B2B sales teams buy this list to reach owners, operators, managers, and property businesses.",
    "paymentLink": "https://buy.athena.live/b/9B600c4Yu8h55Co1p6gA90I"
  },
  {
    "title": "YouTubers with business emails",
    "category": "Creator and Internet Business",
    "price": "$99",
    "records": "1,000 records",
    "description": "A creator and internet-business CSV focused on public creator, ecommerce, startup, and publisher contact opportunities. This product focuses on youtubers with business emails and is delivered as a CSV download link by email once available.",
    "fields": "Creator or company name, website, platform, niche, public email where available, contact page, social link, sponsor or booking page, source URL, notes.",
    "bestFor": "Sponsor sales teams, affiliate managers, SaaS companies, agencies, partnership teams, ecommerce vendors, and creator-economy operators buy this list to find monetizable creators and internet businesses.",
    "paymentLink": "https://buy.athena.live/b/8x2cMYbmSeFt3ug7NugA90J"
  },
  {
    "title": "Podcasters with sponsor contacts",
    "category": "Creator and Internet Business",
    "price": "$99",
    "records": "1,000 records",
    "description": "A creator and internet-business CSV focused on public creator, ecommerce, startup, and publisher contact opportunities. This product focuses on podcasters with sponsor contacts and is delivered as a CSV download link by email once available.",
    "fields": "Creator or company name, website, platform, niche, public email where available, contact page, social link, sponsor or booking page, source URL, notes.",
    "bestFor": "Sponsor sales teams, affiliate managers, SaaS companies, agencies, partnership teams, ecommerce vendors, and creator-economy operators buy this list to find monetizable creators and internet businesses.",
    "paymentLink": "https://buy.athena.live/b/cNi14g76C1SH2qc3xegA90K"
  },
  {
    "title": "Newsletter creators by niche",
    "category": "Creator and Internet Business",
    "price": "$99",
    "records": "1,000 records",
    "description": "A creator and internet-business CSV focused on public creator, ecommerce, startup, and publisher contact opportunities. This product focuses on newsletter creators by niche and is delivered as a CSV download link by email once available.",
    "fields": "Creator or company name, website, platform, niche, public email where available, contact page, social link, sponsor or booking page, source URL, notes.",
    "bestFor": "Sponsor sales teams, affiliate managers, SaaS companies, agencies, partnership teams, ecommerce vendors, and creator-economy operators buy this list to find monetizable creators and internet businesses.",
    "paymentLink": "https://buy.athena.live/b/28EfZa1Mi68X7KwebSgA90L"
  },
  {
    "title": "Substack writers by category",
    "category": "Creator and Internet Business",
    "price": "$99",
    "records": "1,000 records",
    "description": "A creator and internet-business CSV focused on public creator, ecommerce, startup, and publisher contact opportunities. This product focuses on substack writers by category and is delivered as a CSV download link by email once available.",
    "fields": "Creator or company name, website, platform, niche, public email where available, contact page, social link, sponsor or booking page, source URL, notes.",
    "bestFor": "Sponsor sales teams, affiliate managers, SaaS companies, agencies, partnership teams, ecommerce vendors, and creator-economy operators buy this list to find monetizable creators and internet businesses.",
    "paymentLink": "https://buy.athena.live/b/14A5kw0Ie7d13ug0l2gA90M"
  },
  {
    "title": "TikTok creators with public emails",
    "category": "Creator and Internet Business",
    "price": "$99",
    "records": "1,000 records",
    "description": "A creator and internet-business CSV focused on public creator, ecommerce, startup, and publisher contact opportunities. This product focuses on tiktok creators with public emails and is delivered as a CSV download link by email once available.",
    "fields": "Creator or company name, website, platform, niche, public email where available, contact page, social link, sponsor or booking page, source URL, notes.",
    "bestFor": "Sponsor sales teams, affiliate managers, SaaS companies, agencies, partnership teams, ecommerce vendors, and creator-economy operators buy this list to find monetizable creators and internet businesses.",
    "paymentLink": "https://buy.athena.live/b/7sY3co76CeFt3ugd7OgA90N"
  },
  {
    "title": "Instagram creators with public emails",
    "category": "Creator and Internet Business",
    "price": "$99",
    "records": "1,000 records",
    "description": "A creator and internet-business CSV focused on public creator, ecommerce, startup, and publisher contact opportunities. This product focuses on instagram creators with public emails and is delivered as a CSV download link by email once available.",
    "fields": "Creator or company name, website, platform, niche, public email where available, contact page, social link, sponsor or booking page, source URL, notes.",
    "bestFor": "Sponsor sales teams, affiliate managers, SaaS companies, agencies, partnership teams, ecommerce vendors, and creator-economy operators buy this list to find monetizable creators and internet businesses.",
    "paymentLink": "https://buy.athena.live/b/8x28wI3Uq68Xgh2ebSgA90O"
  },
  {
    "title": "Course creators",
    "category": "Creator and Internet Business",
    "price": "$99",
    "records": "1,000 records",
    "description": "A creator and internet-business CSV focused on public creator, ecommerce, startup, and publisher contact opportunities. This product focuses on course creators and is delivered as a CSV download link by email once available.",
    "fields": "Creator or company name, website, platform, niche, public email where available, contact page, social link, sponsor or booking page, source URL, notes.",
    "bestFor": "Sponsor sales teams, affiliate managers, SaaS companies, agencies, partnership teams, ecommerce vendors, and creator-economy operators buy this list to find monetizable creators and internet businesses.",
    "paymentLink": "https://buy.athena.live/b/9B628kbmSapde8U0l2gA90P"
  },
  {
    "title": "Coaches with booking pages",
    "category": "Creator and Internet Business",
    "price": "$99",
    "records": "1,000 records",
    "description": "A creator and internet-business CSV focused on public creator, ecommerce, startup, and publisher contact opportunities. This product focuses on coaches with booking pages and is delivered as a CSV download link by email once available.",
    "fields": "Creator or company name, website, platform, niche, public email where available, contact page, social link, sponsor or booking page, source URL, notes.",
    "bestFor": "Sponsor sales teams, affiliate managers, SaaS companies, agencies, partnership teams, ecommerce vendors, and creator-economy operators buy this list to find monetizable creators and internet businesses.",
    "paymentLink": "https://buy.athena.live/b/00w5kwcqWfJx6GsaZGgA90Q"
  },
  {
    "title": "Consultants with public contact forms",
    "category": "Creator and Internet Business",
    "price": "$99",
    "records": "1,000 records",
    "description": "A creator and internet-business CSV focused on public creator, ecommerce, startup, and publisher contact opportunities. This product focuses on consultants with public contact forms and is delivered as a CSV download link by email once available.",
    "fields": "Creator or company name, website, platform, niche, public email where available, contact page, social link, sponsor or booking page, source URL, notes.",
    "bestFor": "Sponsor sales teams, affiliate managers, SaaS companies, agencies, partnership teams, ecommerce vendors, and creator-economy operators buy this list to find monetizable creators and internet businesses.",
    "paymentLink": "https://buy.athena.live/b/4gMdR23Uq2WLe8UaZGgA90R"
  },
  {
    "title": "Shopify stores by niche",
    "category": "Creator and Internet Business",
    "price": "$99",
    "records": "1,000 records",
    "description": "A creator and internet-business CSV focused on public creator, ecommerce, startup, and publisher contact opportunities. This product focuses on shopify stores by niche and is delivered as a CSV download link by email once available.",
    "fields": "Creator or company name, website, platform, niche, public email where available, contact page, social link, sponsor or booking page, source URL, notes.",
    "bestFor": "Sponsor sales teams, affiliate managers, SaaS companies, agencies, partnership teams, ecommerce vendors, and creator-economy operators buy this list to find monetizable creators and internet businesses.",
    "paymentLink": "https://buy.athena.live/b/aFadR2cqWdBp2qc5FmgA90S"
  },
  {
    "title": "Etsy sellers with websites",
    "category": "Creator and Internet Business",
    "price": "$99",
    "records": "1,000 records",
    "description": "A creator and internet-business CSV focused on public creator, ecommerce, startup, and publisher contact opportunities. This product focuses on etsy sellers with websites and is delivered as a CSV download link by email once available.",
    "fields": "Creator or company name, website, platform, niche, public email where available, contact page, social link, sponsor or booking page, source URL, notes.",
    "bestFor": "Sponsor sales teams, affiliate managers, SaaS companies, agencies, partnership teams, ecommerce vendors, and creator-economy operators buy this list to find monetizable creators and internet businesses.",
    "paymentLink": "https://buy.athena.live/b/4gMeV62Qmapd6GsffWgA90T"
  },
  {
    "title": "Indie software founders",
    "category": "Creator and Internet Business",
    "price": "$99",
    "records": "1,000 records",
    "description": "A creator and internet-business CSV focused on public creator, ecommerce, startup, and publisher contact opportunities. This product focuses on indie software founders and is delivered as a CSV download link by email once available.",
    "fields": "Creator or company name, website, platform, niche, public email where available, contact page, social link, sponsor or booking page, source URL, notes.",
    "bestFor": "Sponsor sales teams, affiliate managers, SaaS companies, agencies, partnership teams, ecommerce vendors, and creator-economy operators buy this list to find monetizable creators and internet businesses.",
    "paymentLink": "https://buy.athena.live/b/14A7sEez40ODc0M3xegA90U"
  },
  {
    "title": "SaaS startups by niche",
    "category": "Creator and Internet Business",
    "price": "$99",
    "records": "1,000 records",
    "description": "A creator and internet-business CSV focused on public creator, ecommerce, startup, and publisher contact opportunities. This product focuses on saas startups by niche and is delivered as a CSV download link by email once available.",
    "fields": "Creator or company name, website, platform, niche, public email where available, contact page, social link, sponsor or booking page, source URL, notes.",
    "bestFor": "Sponsor sales teams, affiliate managers, SaaS companies, agencies, partnership teams, ecommerce vendors, and creator-economy operators buy this list to find monetizable creators and internet businesses.",
    "paymentLink": "https://buy.athena.live/b/aFa6oA2Qm7d13ugffWgA90V"
  },
  {
    "title": "AI tool directories",
    "category": "Creator and Internet Business",
    "price": "$99",
    "records": "1,000 records",
    "description": "A creator and internet-business CSV focused on public creator, ecommerce, startup, and publisher contact opportunities. This product focuses on ai tool directories and is delivered as a CSV download link by email once available.",
    "fields": "Creator or company name, website, platform, niche, public email where available, contact page, social link, sponsor or booking page, source URL, notes.",
    "bestFor": "Sponsor sales teams, affiliate managers, SaaS companies, agencies, partnership teams, ecommerce vendors, and creator-economy operators buy this list to find monetizable creators and internet businesses.",
    "paymentLink": "https://buy.athena.live/b/14AeV6gHc7d13ug0l2gA90W"
  },
  {
    "title": "Affiliate marketers by niche",
    "category": "Creator and Internet Business",
    "price": "$99",
    "records": "1,000 records",
    "description": "A creator and internet-business CSV focused on public creator, ecommerce, startup, and publisher contact opportunities. This product focuses on affiliate marketers by niche and is delivered as a CSV download link by email once available.",
    "fields": "Creator or company name, website, platform, niche, public email where available, contact page, social link, sponsor or booking page, source URL, notes.",
    "bestFor": "Sponsor sales teams, affiliate managers, SaaS companies, agencies, partnership teams, ecommerce vendors, and creator-economy operators buy this list to find monetizable creators and internet businesses.",
    "paymentLink": "https://buy.athena.live/b/28E5kw1Mi68X4ykd7OgA90X"
  },
  {
    "title": "Bloggers with contact pages",
    "category": "Creator and Internet Business",
    "price": "$99",
    "records": "1,000 records",
    "description": "A creator and internet-business CSV focused on public creator, ecommerce, startup, and publisher contact opportunities. This product focuses on bloggers with contact pages and is delivered as a CSV download link by email once available.",
    "fields": "Creator or company name, website, platform, niche, public email where available, contact page, social link, sponsor or booking page, source URL, notes.",
    "bestFor": "Sponsor sales teams, affiliate managers, SaaS companies, agencies, partnership teams, ecommerce vendors, and creator-economy operators buy this list to find monetizable creators and internet businesses.",
    "paymentLink": "https://buy.athena.live/b/cNi5kw1Mi9l91m84BigA90Y"
  },
  {
    "title": "Local influencers by city",
    "category": "Creator and Internet Business",
    "price": "$99",
    "records": "1,000 records",
    "description": "A creator and internet-business CSV focused on public creator, ecommerce, startup, and publisher contact opportunities. This product focuses on local influencers by city and is delivered as a CSV download link by email once available.",
    "fields": "Creator or company name, website, platform, niche, public email where available, contact page, social link, sponsor or booking page, source URL, notes.",
    "bestFor": "Sponsor sales teams, affiliate managers, SaaS companies, agencies, partnership teams, ecommerce vendors, and creator-economy operators buy this list to find monetizable creators and internet businesses.",
    "paymentLink": "https://buy.athena.live/b/4gM00c9eK9l90i4ffWgA90Z"
  },
  {
    "title": "Food bloggers by city",
    "category": "Creator and Internet Business",
    "price": "$99",
    "records": "1,000 records",
    "description": "A creator and internet-business CSV focused on public creator, ecommerce, startup, and publisher contact opportunities. This product focuses on food bloggers by city and is delivered as a CSV download link by email once available.",
    "fields": "Creator or company name, website, platform, niche, public email where available, contact page, social link, sponsor or booking page, source URL, notes.",
    "bestFor": "Sponsor sales teams, affiliate managers, SaaS companies, agencies, partnership teams, ecommerce vendors, and creator-economy operators buy this list to find monetizable creators and internet businesses.",
    "paymentLink": "https://buy.athena.live/b/eVq5kwfD8cxle8U7NugA910"
  },
  {
    "title": "Real estate YouTubers",
    "category": "Creator and Internet Business",
    "price": "$99",
    "records": "1,000 records",
    "description": "A creator and internet-business CSV focused on public creator, ecommerce, startup, and publisher contact opportunities. This product focuses on real estate youtubers and is delivered as a CSV download link by email once available.",
    "fields": "Creator or company name, website, platform, niche, public email where available, contact page, social link, sponsor or booking page, source URL, notes.",
    "bestFor": "Sponsor sales teams, affiliate managers, SaaS companies, agencies, partnership teams, ecommerce vendors, and creator-economy operators buy this list to find monetizable creators and internet businesses.",
    "paymentLink": "https://buy.athena.live/b/dRm8wI3Uq1SH9SE3xegA911"
  },
  {
    "title": "Finance creators with sponsor pages",
    "category": "Creator and Internet Business",
    "price": "$99",
    "records": "1,000 records",
    "description": "A creator and internet-business CSV focused on public creator, ecommerce, startup, and publisher contact opportunities. This product focuses on finance creators with sponsor pages and is delivered as a CSV download link by email once available.",
    "fields": "Creator or company name, website, platform, niche, public email where available, contact page, social link, sponsor or booking page, source URL, notes.",
    "bestFor": "Sponsor sales teams, affiliate managers, SaaS companies, agencies, partnership teams, ecommerce vendors, and creator-economy operators buy this list to find monetizable creators and internet businesses.",
    "paymentLink": "https://buy.athena.live/b/bJedR2bmS2WL4ykd7OgA912"
  },
  {
    "title": "City websites with outdated designs",
    "category": "Government and Public Organization",
    "price": "$149",
    "records": "500 records",
    "description": "A public-organization CSV focused on municipal, school, civic, and government-adjacent contacts. This product focuses on city websites with outdated designs and is delivered as a CSV download link by email once available.",
    "fields": "Agency or organization, department, website, city, state, public contact page, phone, public email where available, source URL, category, notes.",
    "bestFor": "Govtech vendors, consultants, civic software companies, procurement researchers, public-sector sales teams, and local service providers buy this list to reach public agencies and civic organizations.",
    "paymentLink": "https://buy.athena.live/b/bJe7sEcqW54TaWI8RygA913"
  },
  {
    "title": "Small cities without online payment portals",
    "category": "Government and Public Organization",
    "price": "$149",
    "records": "500 records",
    "description": "A public-organization CSV focused on municipal, school, civic, and government-adjacent contacts. This product focuses on small cities without online payment portals and is delivered as a CSV download link by email once available.",
    "fields": "Agency or organization, department, website, city, state, public contact page, phone, public email where available, source URL, category, notes.",
    "bestFor": "Govtech vendors, consultants, civic software companies, procurement researchers, public-sector sales teams, and local service providers buy this list to reach public agencies and civic organizations.",
    "paymentLink": "https://buy.athena.live/b/7sY28kfD8dBp8OA7NugA914"
  },
  {
    "title": "County departments with public contacts",
    "category": "Government and Public Organization",
    "price": "$149",
    "records": "500 records",
    "description": "A public-organization CSV focused on municipal, school, civic, and government-adjacent contacts. This product focuses on county departments with public contacts and is delivered as a CSV download link by email once available.",
    "fields": "Agency or organization, department, website, city, state, public contact page, phone, public email where available, source URL, category, notes.",
    "bestFor": "Govtech vendors, consultants, civic software companies, procurement researchers, public-sector sales teams, and local service providers buy this list to reach public agencies and civic organizations.",
    "paymentLink": "https://buy.athena.live/b/7sYaEQ3UqdBpc0M8RygA915"
  },
  {
    "title": "Public school districts",
    "category": "Government and Public Organization",
    "price": "$149",
    "records": "500 records",
    "description": "A public-organization CSV focused on municipal, school, civic, and government-adjacent contacts. This product focuses on public school districts and is delivered as a CSV download link by email once available.",
    "fields": "Agency or organization, department, website, city, state, public contact page, phone, public email where available, source URL, category, notes.",
    "bestFor": "Govtech vendors, consultants, civic software companies, procurement researchers, public-sector sales teams, and local service providers buy this list to reach public agencies and civic organizations.",
    "paymentLink": "https://buy.athena.live/b/00wbIUez4cxl1m83xegA916"
  },
  {
    "title": "Parks and recreation departments",
    "category": "Government and Public Organization",
    "price": "$149",
    "records": "500 records",
    "description": "A public-organization CSV focused on municipal, school, civic, and government-adjacent contacts. This product focuses on parks and recreation departments and is delivered as a CSV download link by email once available.",
    "fields": "Agency or organization, department, website, city, state, public contact page, phone, public email where available, source URL, category, notes.",
    "bestFor": "Govtech vendors, consultants, civic software companies, procurement researchers, public-sector sales teams, and local service providers buy this list to reach public agencies and civic organizations.",
    "paymentLink": "https://buy.athena.live/b/aFa4gs0Ie54T3ug8RygA917"
  },
  {
    "title": "Public libraries",
    "category": "Government and Public Organization",
    "price": "$149",
    "records": "500 records",
    "description": "A public-organization CSV focused on municipal, school, civic, and government-adjacent contacts. This product focuses on public libraries and is delivered as a CSV download link by email once available.",
    "fields": "Agency or organization, department, website, city, state, public contact page, phone, public email where available, source URL, category, notes.",
    "bestFor": "Govtech vendors, consultants, civic software companies, procurement researchers, public-sector sales teams, and local service providers buy this list to reach public agencies and civic organizations.",
    "paymentLink": "https://buy.athena.live/b/fZueV6gHc8h59SEaZGgA918"
  },
  {
    "title": "Chambers of commerce",
    "category": "Government and Public Organization",
    "price": "$149",
    "records": "500 records",
    "description": "A public-organization CSV focused on municipal, school, civic, and government-adjacent contacts. This product focuses on chambers of commerce and is delivered as a CSV download link by email once available.",
    "fields": "Agency or organization, department, website, city, state, public contact page, phone, public email where available, source URL, category, notes.",
    "bestFor": "Govtech vendors, consultants, civic software companies, procurement researchers, public-sector sales teams, and local service providers buy this list to reach public agencies and civic organizations.",
    "paymentLink": "https://buy.athena.live/b/8x2fZacqW68X3ugc3KgA919"
  },
  {
    "title": "Business improvement districts",
    "category": "Government and Public Organization",
    "price": "$149",
    "records": "500 records",
    "description": "A public-organization CSV focused on municipal, school, civic, and government-adjacent contacts. This product focuses on business improvement districts and is delivered as a CSV download link by email once available.",
    "fields": "Agency or organization, department, website, city, state, public contact page, phone, public email where available, source URL, category, notes.",
    "bestFor": "Govtech vendors, consultants, civic software companies, procurement researchers, public-sector sales teams, and local service providers buy this list to reach public agencies and civic organizations.",
    "paymentLink": "https://buy.athena.live/b/7sYeV69eKdBpfcYd7OgA91a"
  },
  {
    "title": "Tourism boards",
    "category": "Government and Public Organization",
    "price": "$149",
    "records": "500 records",
    "description": "A public-organization CSV focused on municipal, school, civic, and government-adjacent contacts. This product focuses on tourism boards and is delivered as a CSV download link by email once available.",
    "fields": "Agency or organization, department, website, city, state, public contact page, phone, public email where available, source URL, category, notes.",
    "bestFor": "Govtech vendors, consultants, civic software companies, procurement researchers, public-sector sales teams, and local service providers buy this list to reach public agencies and civic organizations.",
    "paymentLink": "https://buy.athena.live/b/cNi6oA9eKeFte8U6JqgA91b"
  },
  {
    "title": "City procurement pages",
    "category": "Government and Public Organization",
    "price": "$149",
    "records": "500 records",
    "description": "A public-organization CSV focused on municipal, school, civic, and government-adjacent contacts. This product focuses on city procurement pages and is delivered as a CSV download link by email once available.",
    "fields": "Agency or organization, department, website, city, state, public contact page, phone, public email where available, source URL, category, notes.",
    "bestFor": "Govtech vendors, consultants, civic software companies, procurement researchers, public-sector sales teams, and local service providers buy this list to reach public agencies and civic organizations.",
    "paymentLink": "https://buy.athena.live/b/7sYdR28aG2WL2qc1p6gA91c"
  },
  {
    "title": "Public works departments",
    "category": "Government and Public Organization",
    "price": "$149",
    "records": "500 records",
    "description": "A public-organization CSV focused on municipal, school, civic, and government-adjacent contacts. This product focuses on public works departments and is delivered as a CSV download link by email once available.",
    "fields": "Agency or organization, department, website, city, state, public contact page, phone, public email where available, source URL, category, notes.",
    "bestFor": "Govtech vendors, consultants, civic software companies, procurement researchers, public-sector sales teams, and local service providers buy this list to reach public agencies and civic organizations.",
    "paymentLink": "https://buy.athena.live/b/fZudR2cqW7d10i4gk0gA91d"
  },
  {
    "title": "Economic development departments",
    "category": "Government and Public Organization",
    "price": "$149",
    "records": "500 records",
    "description": "A public-organization CSV focused on municipal, school, civic, and government-adjacent contacts. This product focuses on economic development departments and is delivered as a CSV download link by email once available.",
    "fields": "Agency or organization, department, website, city, state, public contact page, phone, public email where available, source URL, category, notes.",
    "bestFor": "Govtech vendors, consultants, civic software companies, procurement researchers, public-sector sales teams, and local service providers buy this list to reach public agencies and civic organizations.",
    "paymentLink": "https://buy.athena.live/b/7sY9AM1MieFt2qc3xegA91e"
  },
  {
    "title": "Fire department public contacts",
    "category": "Government and Public Organization",
    "price": "$149",
    "records": "500 records",
    "description": "A public-organization CSV focused on municipal, school, civic, and government-adjacent contacts. This product focuses on fire department public contacts and is delivered as a CSV download link by email once available.",
    "fields": "Agency or organization, department, website, city, state, public contact page, phone, public email where available, source URL, category, notes.",
    "bestFor": "Govtech vendors, consultants, civic software companies, procurement researchers, public-sector sales teams, and local service providers buy this list to reach public agencies and civic organizations.",
    "paymentLink": "https://buy.athena.live/b/fZucMYfD88h58OAaZGgA91f"
  },
  {
    "title": "Police department public contacts",
    "category": "Government and Public Organization",
    "price": "$149",
    "records": "500 records",
    "description": "A public-organization CSV focused on municipal, school, civic, and government-adjacent contacts. This product focuses on police department public contacts and is delivered as a CSV download link by email once available.",
    "fields": "Agency or organization, department, website, city, state, public contact page, phone, public email where available, source URL, category, notes.",
    "bestFor": "Govtech vendors, consultants, civic software companies, procurement researchers, public-sector sales teams, and local service providers buy this list to reach public agencies and civic organizations.",
    "paymentLink": "https://buy.athena.live/b/28EeV60Ie40P9SE9VCgA91g"
  },
  {
    "title": "Local government vendor portals",
    "category": "Government and Public Organization",
    "price": "$149",
    "records": "500 records",
    "description": "A public-organization CSV focused on municipal, school, civic, and government-adjacent contacts. This product focuses on local government vendor portals and is delivered as a CSV download link by email once available.",
    "fields": "Agency or organization, department, website, city, state, public contact page, phone, public email where available, source URL, category, notes.",
    "bestFor": "Govtech vendors, consultants, civic software companies, procurement researchers, public-sector sales teams, and local service providers buy this list to reach public agencies and civic organizations.",
    "paymentLink": "https://buy.athena.live/b/3cIeV64Yu68Xgh25FmgA91h"
  },
  {
    "title": "Municipal job boards",
    "category": "Government and Public Organization",
    "price": "$149",
    "records": "500 records",
    "description": "A public-organization CSV focused on municipal, school, civic, and government-adjacent contacts. This product focuses on municipal job boards and is delivered as a CSV download link by email once available.",
    "fields": "Agency or organization, department, website, city, state, public contact page, phone, public email where available, source URL, category, notes.",
    "bestFor": "Govtech vendors, consultants, civic software companies, procurement researchers, public-sector sales teams, and local service providers buy this list to reach public agencies and civic organizations.",
    "paymentLink": "https://buy.athena.live/b/14A8wIbmS7d1aWI1p6gA91i"
  },
  {
    "title": "Public health departments",
    "category": "Government and Public Organization",
    "price": "$149",
    "records": "500 records",
    "description": "A public-organization CSV focused on municipal, school, civic, and government-adjacent contacts. This product focuses on public health departments and is delivered as a CSV download link by email once available.",
    "fields": "Agency or organization, department, website, city, state, public contact page, phone, public email where available, source URL, category, notes.",
    "bestFor": "Govtech vendors, consultants, civic software companies, procurement researchers, public-sector sales teams, and local service providers buy this list to reach public agencies and civic organizations.",
    "paymentLink": "https://buy.athena.live/b/dRm7sE3Uq7d1gh20l2gA91j"
  },
  {
    "title": "Transit agencies",
    "category": "Government and Public Organization",
    "price": "$149",
    "records": "500 records",
    "description": "A public-organization CSV focused on municipal, school, civic, and government-adjacent contacts. This product focuses on transit agencies and is delivered as a CSV download link by email once available.",
    "fields": "Agency or organization, department, website, city, state, public contact page, phone, public email where available, source URL, category, notes.",
    "bestFor": "Govtech vendors, consultants, civic software companies, procurement researchers, public-sector sales teams, and local service providers buy this list to reach public agencies and civic organizations.",
    "paymentLink": "https://buy.athena.live/b/6oU9AM62y9l9e8Uc3KgA91k"
  },
  {
    "title": "Water districts",
    "category": "Government and Public Organization",
    "price": "$149",
    "records": "500 records",
    "description": "A public-organization CSV focused on municipal, school, civic, and government-adjacent contacts. This product focuses on water districts and is delivered as a CSV download link by email once available.",
    "fields": "Agency or organization, department, website, city, state, public contact page, phone, public email where available, source URL, category, notes.",
    "bestFor": "Govtech vendors, consultants, civic software companies, procurement researchers, public-sector sales teams, and local service providers buy this list to reach public agencies and civic organizations.",
    "paymentLink": "https://buy.athena.live/b/fZueV6bmSdBp6Gs5FmgA91l"
  },
  {
    "title": "School board contact directories",
    "category": "Government and Public Organization",
    "price": "$149",
    "records": "500 records",
    "description": "A public-organization CSV focused on municipal, school, civic, and government-adjacent contacts. This product focuses on school board contact directories and is delivered as a CSV download link by email once available.",
    "fields": "Agency or organization, department, website, city, state, public contact page, phone, public email where available, source URL, category, notes.",
    "bestFor": "Govtech vendors, consultants, civic software companies, procurement researchers, public-sector sales teams, and local service providers buy this list to reach public agencies and civic organizations.",
    "paymentLink": "https://buy.athena.live/b/fZu3co0IeeFt8OA7NugA91m"
  },
  {
    "title": "Youth sports leagues",
    "category": "Local Sponsorship",
    "price": "$99",
    "records": "500 records",
    "description": "A local sponsorship CSV focused on community groups, local associations, cultural organizations, event organizers, and sponsorship contacts. This product focuses on youth sports leagues and is delivered as a CSV download link by email once available.",
    "fields": "Organization or contact name, website, city, state, group type, sponsorship or contact page, public email where available, phone, social link, source URL, notes.",
    "bestFor": "Brands, community marketers, local agencies, sponsors, nonprofits, and partnership teams buy this list to identify local organizations, events, groups, and community channels that can carry sponsorship or outreach.",
    "paymentLink": "https://buy.athena.live/b/5kQfZaez454T0i44BigA91n"
  },
  {
    "title": "School booster clubs",
    "category": "Local Sponsorship",
    "price": "$99",
    "records": "500 records",
    "description": "A local sponsorship CSV focused on community groups, local associations, cultural organizations, event organizers, and sponsorship contacts. This product focuses on school booster clubs and is delivered as a CSV download link by email once available.",
    "fields": "Organization or contact name, website, city, state, group type, sponsorship or contact page, public email where available, phone, social link, source URL, notes.",
    "bestFor": "Brands, community marketers, local agencies, sponsors, nonprofits, and partnership teams buy this list to identify local organizations, events, groups, and community channels that can carry sponsorship or outreach.",
    "paymentLink": "https://buy.athena.live/b/aFa6oA2Qm7d1aWI0l2gA91o"
  },
  {
    "title": "Local nonprofits",
    "category": "Local Sponsorship",
    "price": "$99",
    "records": "500 records",
    "description": "A local sponsorship CSV focused on community groups, local associations, cultural organizations, event organizers, and sponsorship contacts. This product focuses on local nonprofits and is delivered as a CSV download link by email once available.",
    "fields": "Organization or contact name, website, city, state, group type, sponsorship or contact page, public email where available, phone, social link, source URL, notes.",
    "bestFor": "Brands, community marketers, local agencies, sponsors, nonprofits, and partnership teams buy this list to identify local organizations, events, groups, and community channels that can carry sponsorship or outreach.",
    "paymentLink": "https://buy.athena.live/b/00w14g9eKcxl1m84BigA91p"
  },
  {
    "title": "Churches hosting community events",
    "category": "Local Sponsorship",
    "price": "$99",
    "records": "500 records",
    "description": "A local sponsorship CSV focused on community groups, local associations, cultural organizations, event organizers, and sponsorship contacts. This product focuses on churches hosting community events and is delivered as a CSV download link by email once available.",
    "fields": "Organization or contact name, website, city, state, group type, sponsorship or contact page, public email where available, phone, social link, source URL, notes.",
    "bestFor": "Brands, community marketers, local agencies, sponsors, nonprofits, and partnership teams buy this list to identify local organizations, events, groups, and community channels that can carry sponsorship or outreach.",
    "paymentLink": "https://buy.athena.live/b/9B614g1Mi7d10i4aZGgA91q"
  },
  {
    "title": "Cultural associations",
    "category": "Local Sponsorship",
    "price": "$99",
    "records": "500 records",
    "description": "A local sponsorship CSV focused on community groups, local associations, cultural organizations, event organizers, and sponsorship contacts. This product focuses on cultural associations and is delivered as a CSV download link by email once available.",
    "fields": "Organization or contact name, website, city, state, group type, sponsorship or contact page, public email where available, phone, social link, source URL, notes.",
    "bestFor": "Brands, community marketers, local agencies, sponsors, nonprofits, and partnership teams buy this list to identify local organizations, events, groups, and community channels that can carry sponsorship or outreach.",
    "paymentLink": "https://buy.athena.live/b/4gM7sEdv040P8OA0l2gA91r"
  },
  {
    "title": "Armenian-owned businesses in LA",
    "category": "Local Sponsorship",
    "price": "$99",
    "records": "500 records",
    "description": "A local sponsorship CSV focused on community groups, local associations, cultural organizations, event organizers, and sponsorship contacts. This product focuses on armenian-owned businesses in la and is delivered as a CSV download link by email once available.",
    "fields": "Organization or contact name, website, city, state, group type, sponsorship or contact page, public email where available, phone, social link, source URL, notes.",
    "bestFor": "Brands, community marketers, local agencies, sponsors, nonprofits, and partnership teams buy this list to identify local organizations, events, groups, and community channels that can carry sponsorship or outreach.",
    "paymentLink": "https://buy.athena.live/b/00waEQfD80OD8OAgk0gA91s"
  },
  {
    "title": "Indian-owned businesses in LA",
    "category": "Local Sponsorship",
    "price": "$99",
    "records": "500 records",
    "description": "A local sponsorship CSV focused on community groups, local associations, cultural organizations, event organizers, and sponsorship contacts. This product focuses on indian-owned businesses in la and is delivered as a CSV download link by email once available.",
    "fields": "Organization or contact name, website, city, state, group type, sponsorship or contact page, public email where available, phone, social link, source URL, notes.",
    "bestFor": "Brands, community marketers, local agencies, sponsors, nonprofits, and partnership teams buy this list to identify local organizations, events, groups, and community channels that can carry sponsorship or outreach.",
    "paymentLink": "https://buy.athena.live/b/8x29AM76C0OD2qcd7OgA91t"
  },
  {
    "title": "Latino business associations",
    "category": "Local Sponsorship",
    "price": "$99",
    "records": "500 records",
    "description": "A local sponsorship CSV focused on community groups, local associations, cultural organizations, event organizers, and sponsorship contacts. This product focuses on latino business associations and is delivered as a CSV download link by email once available.",
    "fields": "Organization or contact name, website, city, state, group type, sponsorship or contact page, public email where available, phone, social link, source URL, notes.",
    "bestFor": "Brands, community marketers, local agencies, sponsors, nonprofits, and partnership teams buy this list to identify local organizations, events, groups, and community channels that can carry sponsorship or outreach.",
    "paymentLink": "https://buy.athena.live/b/eVq9AM3Uqbthgh24BigA91u"
  },
  {
    "title": "Black-owned business directories",
    "category": "Local Sponsorship",
    "price": "$99",
    "records": "500 records",
    "description": "A local sponsorship CSV focused on community groups, local associations, cultural organizations, event organizers, and sponsorship contacts. This product focuses on black-owned business directories and is delivered as a CSV download link by email once available.",
    "fields": "Organization or contact name, website, city, state, group type, sponsorship or contact page, public email where available, phone, social link, source URL, notes.",
    "bestFor": "Brands, community marketers, local agencies, sponsors, nonprofits, and partnership teams buy this list to identify local organizations, events, groups, and community channels that can carry sponsorship or outreach.",
    "paymentLink": "https://buy.athena.live/b/3cIaEQ8aG54T0i40l2gA91v"
  },
  {
    "title": "Women-owned business directories",
    "category": "Local Sponsorship",
    "price": "$99",
    "records": "500 records",
    "description": "A local sponsorship CSV focused on community groups, local associations, cultural organizations, event organizers, and sponsorship contacts. This product focuses on women-owned business directories and is delivered as a CSV download link by email once available.",
    "fields": "Organization or contact name, website, city, state, group type, sponsorship or contact page, public email where available, phone, social link, source URL, notes.",
    "bestFor": "Brands, community marketers, local agencies, sponsors, nonprofits, and partnership teams buy this list to identify local organizations, events, groups, and community channels that can carry sponsorship or outreach.",
    "paymentLink": "https://buy.athena.live/b/bJeaEQfD80ODc0MffWgA91w"
  },
  {
    "title": "Local podcast hosts",
    "category": "Local Sponsorship",
    "price": "$99",
    "records": "500 records",
    "description": "A local sponsorship CSV focused on community groups, local associations, cultural organizations, event organizers, and sponsorship contacts. This product focuses on local podcast hosts and is delivered as a CSV download link by email once available.",
    "fields": "Organization or contact name, website, city, state, group type, sponsorship or contact page, public email where available, phone, social link, source URL, notes.",
    "bestFor": "Brands, community marketers, local agencies, sponsors, nonprofits, and partnership teams buy this list to identify local organizations, events, groups, and community channels that can carry sponsorship or outreach.",
    "paymentLink": "https://buy.athena.live/b/3cIeV6dv068XfcY9VCgA91x"
  },
  {
    "title": "Local newsletter operators",
    "category": "Local Sponsorship",
    "price": "$99",
    "records": "500 records",
    "description": "A local sponsorship CSV focused on community groups, local associations, cultural organizations, event organizers, and sponsorship contacts. This product focuses on local newsletter operators and is delivered as a CSV download link by email once available.",
    "fields": "Organization or contact name, website, city, state, group type, sponsorship or contact page, public email where available, phone, social link, source URL, notes.",
    "bestFor": "Brands, community marketers, local agencies, sponsors, nonprofits, and partnership teams buy this list to identify local organizations, events, groups, and community channels that can carry sponsorship or outreach.",
    "paymentLink": "https://buy.athena.live/b/00w7sE76Capd4yk9VCgA91y"
  },
  {
    "title": "Local Facebook group admins",
    "category": "Local Sponsorship",
    "price": "$99",
    "records": "500 records",
    "description": "A local sponsorship CSV focused on community groups, local associations, cultural organizations, event organizers, and sponsorship contacts. This product focuses on local facebook group admins and is delivered as a CSV download link by email once available.",
    "fields": "Organization or contact name, website, city, state, group type, sponsorship or contact page, public email where available, phone, social link, source URL, notes.",
    "bestFor": "Brands, community marketers, local agencies, sponsors, nonprofits, and partnership teams buy this list to identify local organizations, events, groups, and community channels that can carry sponsorship or outreach.",
    "paymentLink": "https://buy.athena.live/b/28E6oAgHceFt5Cod7OgA91z"
  },
  {
    "title": "Community event organizers",
    "category": "Local Sponsorship",
    "price": "$99",
    "records": "500 records",
    "description": "A local sponsorship CSV focused on community groups, local associations, cultural organizations, event organizers, and sponsorship contacts. This product focuses on community event organizers and is delivered as a CSV download link by email once available.",
    "fields": "Organization or contact name, website, city, state, group type, sponsorship or contact page, public email where available, phone, social link, source URL, notes.",
    "bestFor": "Brands, community marketers, local agencies, sponsors, nonprofits, and partnership teams buy this list to identify local organizations, events, groups, and community channels that can carry sponsorship or outreach.",
    "paymentLink": "https://buy.athena.live/b/aFaaEQ2Qm40P6Gs6JqgA91A"
  },
  {
    "title": "Charity event organizers",
    "category": "Local Sponsorship",
    "price": "$99",
    "records": "500 records",
    "description": "A local sponsorship CSV focused on community groups, local associations, cultural organizations, event organizers, and sponsorship contacts. This product focuses on charity event organizers and is delivered as a CSV download link by email once available.",
    "fields": "Organization or contact name, website, city, state, group type, sponsorship or contact page, public email where available, phone, social link, source URL, notes.",
    "bestFor": "Brands, community marketers, local agencies, sponsors, nonprofits, and partnership teams buy this list to identify local organizations, events, groups, and community channels that can carry sponsorship or outreach.",
    "paymentLink": "https://buy.athena.live/b/28EbIUez41SH3ug9VCgA91B"
  },
  {
    "title": "Marathon/race organizers",
    "category": "Local Sponsorship",
    "price": "$99",
    "records": "500 records",
    "description": "A local sponsorship CSV focused on community groups, local associations, cultural organizations, event organizers, and sponsorship contacts. This product focuses on marathon/race organizers and is delivered as a CSV download link by email once available.",
    "fields": "Organization or contact name, website, city, state, group type, sponsorship or contact page, public email where available, phone, social link, source URL, notes.",
    "bestFor": "Brands, community marketers, local agencies, sponsors, nonprofits, and partnership teams buy this list to identify local organizations, events, groups, and community channels that can carry sponsorship or outreach.",
    "paymentLink": "https://buy.athena.live/b/14AcMY3UqgNBc0M2tagA91C"
  },
  {
    "title": "Car show organizers",
    "category": "Local Sponsorship",
    "price": "$99",
    "records": "500 records",
    "description": "A local sponsorship CSV focused on community groups, local associations, cultural organizations, event organizers, and sponsorship contacts. This product focuses on car show organizers and is delivered as a CSV download link by email once available.",
    "fields": "Organization or contact name, website, city, state, group type, sponsorship or contact page, public email where available, phone, social link, source URL, notes.",
    "bestFor": "Brands, community marketers, local agencies, sponsors, nonprofits, and partnership teams buy this list to identify local organizations, events, groups, and community channels that can carry sponsorship or outreach.",
    "paymentLink": "https://buy.athena.live/b/8x23cobmSdBp7Kw3xegA91D"
  },
  {
    "title": "Food festival organizers",
    "category": "Local Sponsorship",
    "price": "$99",
    "records": "500 records",
    "description": "A local sponsorship CSV focused on community groups, local associations, cultural organizations, event organizers, and sponsorship contacts. This product focuses on food festival organizers and is delivered as a CSV download link by email once available.",
    "fields": "Organization or contact name, website, city, state, group type, sponsorship or contact page, public email where available, phone, social link, source URL, notes.",
    "bestFor": "Brands, community marketers, local agencies, sponsors, nonprofits, and partnership teams buy this list to identify local organizations, events, groups, and community channels that can carry sponsorship or outreach.",
    "paymentLink": "https://buy.athena.live/b/fZuaEQ3Uq40PfcYd7OgA91E"
  },
  {
    "title": "School fundraiser contacts",
    "category": "Local Sponsorship",
    "price": "$99",
    "records": "500 records",
    "description": "A local sponsorship CSV focused on community groups, local associations, cultural organizations, event organizers, and sponsorship contacts. This product focuses on school fundraiser contacts and is delivered as a CSV download link by email once available.",
    "fields": "Organization or contact name, website, city, state, group type, sponsorship or contact page, public email where available, phone, social link, source URL, notes.",
    "bestFor": "Brands, community marketers, local agencies, sponsors, nonprofits, and partnership teams buy this list to identify local organizations, events, groups, and community channels that can carry sponsorship or outreach.",
    "paymentLink": "https://buy.athena.live/b/7sYaEQ62yeFt0i4aZGgA91F"
  },
  {
    "title": "Local business associations",
    "category": "Local Sponsorship",
    "price": "$99",
    "records": "500 records",
    "description": "A local sponsorship CSV focused on community groups, local associations, cultural organizations, event organizers, and sponsorship contacts. This product focuses on local business associations and is delivered as a CSV download link by email once available.",
    "fields": "Organization or contact name, website, city, state, group type, sponsorship or contact page, public email where available, phone, social link, source URL, notes.",
    "bestFor": "Brands, community marketers, local agencies, sponsors, nonprofits, and partnership teams buy this list to identify local organizations, events, groups, and community channels that can carry sponsorship or outreach.",
    "paymentLink": "https://buy.athena.live/b/8x24gs3Uq68Xe8Ud7OgA91G"
  },
  {
    "title": "500 Businesses With Broken Contact Forms",
    "category": "High-Signal Opportunity",
    "price": "$49",
    "records": "500 records",
    "description": "A high-signal opportunity CSV focused on businesses with visible website, review, hiring, contact, payment, or growth triggers. This product focuses on 500 businesses with broken contact forms and is delivered as a CSV download link by email once available.",
    "fields": "Business name, website if present, city, state, opportunity signal, issue or trigger, phone, public email where available, contact page, source URL, notes.",
    "bestFor": "Agencies, SaaS teams, consultants, recruiters, sales teams, reputation managers, and local service vendors buy this list because each record has a visible trigger or business problem that can support targeted outreach.",
    "paymentLink": "https://buy.athena.live/b/8x2fZa0Iebth3ug9VCgA832"
  },
  {
    "title": "Businesses with expired SSL certificates",
    "category": "High-Signal Opportunity",
    "price": "$49",
    "records": "500 records",
    "description": "A high-signal opportunity CSV focused on businesses with visible website, review, hiring, contact, payment, or growth triggers. This product focuses on businesses with expired ssl certificates and is delivered as a CSV download link by email once available.",
    "fields": "Business name, website if present, city, state, opportunity signal, issue or trigger, phone, public email where available, contact page, source URL, notes.",
    "bestFor": "Agencies, SaaS teams, consultants, recruiters, sales teams, reputation managers, and local service vendors buy this list because each record has a visible trigger or business problem that can support targeted outreach.",
    "paymentLink": "https://buy.athena.live/b/7sY8wI9eK40P5Co5FmgA91H"
  },
  {
    "title": "Businesses with slow websites",
    "category": "High-Signal Opportunity",
    "price": "$49",
    "records": "500 records",
    "description": "A high-signal opportunity CSV focused on businesses with visible website, review, hiring, contact, payment, or growth triggers. This product focuses on businesses with slow websites and is delivered as a CSV download link by email once available.",
    "fields": "Business name, website if present, city, state, opportunity signal, issue or trigger, phone, public email where available, contact page, source URL, notes.",
    "bestFor": "Agencies, SaaS teams, consultants, recruiters, sales teams, reputation managers, and local service vendors buy this list because each record has a visible trigger or business problem that can support targeted outreach.",
    "paymentLink": "https://buy.athena.live/b/fZu4gs4YudBp5Co3xegA91I"
  },
  {
    "title": "Businesses with no mobile-friendly website",
    "category": "High-Signal Opportunity",
    "price": "$49",
    "records": "500 records",
    "description": "A high-signal opportunity CSV focused on businesses with visible website, review, hiring, contact, payment, or growth triggers. This product focuses on businesses with no mobile-friendly website and is delivered as a CSV download link by email once available.",
    "fields": "Business name, website if present, city, state, opportunity signal, issue or trigger, phone, public email where available, contact page, source URL, notes.",
    "bestFor": "Agencies, SaaS teams, consultants, recruiters, sales teams, reputation managers, and local service vendors buy this list because each record has a visible trigger or business problem that can support targeted outreach.",
    "paymentLink": "https://buy.athena.live/b/4gM4gs2QmfJxgh2ebSgA91J"
  },
  {
    "title": "Businesses with no Google Business Profile website link",
    "category": "High-Signal Opportunity",
    "price": "$49",
    "records": "500 records",
    "description": "A high-signal opportunity CSV focused on businesses with visible website, review, hiring, contact, payment, or growth triggers. This product focuses on businesses with no google business profile website link and is delivered as a CSV download link by email once available.",
    "fields": "Business name, website if present, city, state, opportunity signal, issue or trigger, phone, public email where available, contact page, source URL, notes.",
    "bestFor": "Agencies, SaaS teams, consultants, recruiters, sales teams, reputation managers, and local service vendors buy this list because each record has a visible trigger or business problem that can support targeted outreach.",
    "paymentLink": "https://buy.athena.live/b/aFa8wIgHcgNBgh23xegA91K"
  },
  {
    "title": "Businesses with bad recent reviews",
    "category": "High-Signal Opportunity",
    "price": "$49",
    "records": "500 records",
    "description": "A high-signal opportunity CSV focused on businesses with visible website, review, hiring, contact, payment, or growth triggers. This product focuses on businesses with bad recent reviews and is delivered as a CSV download link by email once available.",
    "fields": "Business name, website if present, city, state, opportunity signal, issue or trigger, phone, public email where available, contact page, source URL, notes.",
    "bestFor": "Agencies, SaaS teams, consultants, recruiters, sales teams, reputation managers, and local service vendors buy this list because each record has a visible trigger or business problem that can support targeted outreach.",
    "paymentLink": "https://buy.athena.live/b/14AaEQbmSgNBe8UffWgA91L"
  },
  {
    "title": "Businesses with no recent reviews",
    "category": "High-Signal Opportunity",
    "price": "$49",
    "records": "500 records",
    "description": "A high-signal opportunity CSV focused on businesses with visible website, review, hiring, contact, payment, or growth triggers. This product focuses on businesses with no recent reviews and is delivered as a CSV download link by email once available.",
    "fields": "Business name, website if present, city, state, opportunity signal, issue or trigger, phone, public email where available, contact page, source URL, notes.",
    "bestFor": "Agencies, SaaS teams, consultants, recruiters, sales teams, reputation managers, and local service vendors buy this list because each record has a visible trigger or business problem that can support targeted outreach.",
    "paymentLink": "https://buy.athena.live/b/9B65kwgHcfJx9SE6JqgA91M"
  },
  {
    "title": "Businesses with inactive Instagram accounts",
    "category": "High-Signal Opportunity",
    "price": "$49",
    "records": "500 records",
    "description": "A high-signal opportunity CSV focused on businesses with visible website, review, hiring, contact, payment, or growth triggers. This product focuses on businesses with inactive instagram accounts and is delivered as a CSV download link by email once available.",
    "fields": "Business name, website if present, city, state, opportunity signal, issue or trigger, phone, public email where available, contact page, source URL, notes.",
    "bestFor": "Agencies, SaaS teams, consultants, recruiters, sales teams, reputation managers, and local service vendors buy this list because each record has a visible trigger or business problem that can support targeted outreach.",
    "paymentLink": "https://buy.athena.live/b/8x2fZagHc2WLaWI4BigA91N"
  },
  {
    "title": "Businesses with inactive Facebook pages",
    "category": "High-Signal Opportunity",
    "price": "$49",
    "records": "500 records",
    "description": "A high-signal opportunity CSV focused on businesses with visible website, review, hiring, contact, payment, or growth triggers. This product focuses on businesses with inactive facebook pages and is delivered as a CSV download link by email once available.",
    "fields": "Business name, website if present, city, state, opportunity signal, issue or trigger, phone, public email where available, contact page, source URL, notes.",
    "bestFor": "Agencies, SaaS teams, consultants, recruiters, sales teams, reputation managers, and local service vendors buy this list because each record has a visible trigger or business problem that can support targeted outreach.",
    "paymentLink": "https://buy.athena.live/b/dRm28k1MigNB3ug9VCgA91O"
  },
  {
    "title": "Businesses missing email addresses on their website",
    "category": "High-Signal Opportunity",
    "price": "$49",
    "records": "500 records",
    "description": "A high-signal opportunity CSV focused on businesses with visible website, review, hiring, contact, payment, or growth triggers. This product focuses on businesses missing email addresses on their website and is delivered as a CSV download link by email once available.",
    "fields": "Business name, website if present, city, state, opportunity signal, issue or trigger, phone, public email where available, contact page, source URL, notes.",
    "bestFor": "Agencies, SaaS teams, consultants, recruiters, sales teams, reputation managers, and local service vendors buy this list because each record has a visible trigger or business problem that can support targeted outreach.",
    "paymentLink": "https://buy.athena.live/b/8x28wIaiO1SH1m87NugA91P"
  },
  {
    "title": "Businesses missing phone numbers on their website",
    "category": "High-Signal Opportunity",
    "price": "$49",
    "records": "500 records",
    "description": "A high-signal opportunity CSV focused on businesses with visible website, review, hiring, contact, payment, or growth triggers. This product focuses on businesses missing phone numbers on their website and is delivered as a CSV download link by email once available.",
    "fields": "Business name, website if present, city, state, opportunity signal, issue or trigger, phone, public email where available, contact page, source URL, notes.",
    "bestFor": "Agencies, SaaS teams, consultants, recruiters, sales teams, reputation managers, and local service vendors buy this list because each record has a visible trigger or business problem that can support targeted outreach.",
    "paymentLink": "https://buy.athena.live/b/9B6dR22Qm7d16Gs1p6gA91Q"
  },
  {
    "title": "Businesses with no quote form",
    "category": "High-Signal Opportunity",
    "price": "$49",
    "records": "500 records",
    "description": "A high-signal opportunity CSV focused on businesses with visible website, review, hiring, contact, payment, or growth triggers. This product focuses on businesses with no quote form and is delivered as a CSV download link by email once available.",
    "fields": "Business name, website if present, city, state, opportunity signal, issue or trigger, phone, public email where available, contact page, source URL, notes.",
    "bestFor": "Agencies, SaaS teams, consultants, recruiters, sales teams, reputation managers, and local service vendors buy this list because each record has a visible trigger or business problem that can support targeted outreach.",
    "paymentLink": "https://buy.athena.live/b/bJeaEQ3Uqapd6Gs9VCgA91R"
  },
  {
    "title": "Businesses with no newsletter signup",
    "category": "High-Signal Opportunity",
    "price": "$49",
    "records": "500 records",
    "description": "A high-signal opportunity CSV focused on businesses with visible website, review, hiring, contact, payment, or growth triggers. This product focuses on businesses with no newsletter signup and is delivered as a CSV download link by email once available.",
    "fields": "Business name, website if present, city, state, opportunity signal, issue or trigger, phone, public email where available, contact page, source URL, notes.",
    "bestFor": "Agencies, SaaS teams, consultants, recruiters, sales teams, reputation managers, and local service vendors buy this list because each record has a visible trigger or business problem that can support targeted outreach.",
    "paymentLink": "https://buy.athena.live/b/3cIfZa8aG0OD1m80l2gA91S"
  },
  {
    "title": "Businesses with no online payment link",
    "category": "High-Signal Opportunity",
    "price": "$49",
    "records": "500 records",
    "description": "A high-signal opportunity CSV focused on businesses with visible website, review, hiring, contact, payment, or growth triggers. This product focuses on businesses with no online payment link and is delivered as a CSV download link by email once available.",
    "fields": "Business name, website if present, city, state, opportunity signal, issue or trigger, phone, public email where available, contact page, source URL, notes.",
    "bestFor": "Agencies, SaaS teams, consultants, recruiters, sales teams, reputation managers, and local service vendors buy this list because each record has a visible trigger or business problem that can support targeted outreach.",
    "paymentLink": "https://buy.athena.live/b/fZu3co1MicxlfcY9VCgA91T"
  },
  {
    "title": "Businesses with no chatbot/live chat",
    "category": "High-Signal Opportunity",
    "price": "$49",
    "records": "500 records",
    "description": "A high-signal opportunity CSV focused on businesses with visible website, review, hiring, contact, payment, or growth triggers. This product focuses on businesses with no chatbot/live chat and is delivered as a CSV download link by email once available.",
    "fields": "Business name, website if present, city, state, opportunity signal, issue or trigger, phone, public email where available, contact page, source URL, notes.",
    "bestFor": "Agencies, SaaS teams, consultants, recruiters, sales teams, reputation managers, and local service vendors buy this list because each record has a visible trigger or business problem that can support targeted outreach.",
    "paymentLink": "https://buy.athena.live/b/eVqaEQ4Yucxld4Qd7OgA91U"
  },
  {
    "title": "Businesses hiring marketing roles",
    "category": "High-Signal Opportunity",
    "price": "$49",
    "records": "500 records",
    "description": "A high-signal opportunity CSV focused on businesses with visible website, review, hiring, contact, payment, or growth triggers. This product focuses on businesses hiring marketing roles and is delivered as a CSV download link by email once available.",
    "fields": "Business name, website if present, city, state, opportunity signal, issue or trigger, phone, public email where available, contact page, source URL, notes.",
    "bestFor": "Agencies, SaaS teams, consultants, recruiters, sales teams, reputation managers, and local service vendors buy this list because each record has a visible trigger or business problem that can support targeted outreach.",
    "paymentLink": "https://buy.athena.live/b/8x228k2Qm0OD7Kw3xegA91V"
  },
  {
    "title": "Businesses hiring sales reps",
    "category": "High-Signal Opportunity",
    "price": "$49",
    "records": "500 records",
    "description": "A high-signal opportunity CSV focused on businesses with visible website, review, hiring, contact, payment, or growth triggers. This product focuses on businesses hiring sales reps and is delivered as a CSV download link by email once available.",
    "fields": "Business name, website if present, city, state, opportunity signal, issue or trigger, phone, public email where available, contact page, source URL, notes.",
    "bestFor": "Agencies, SaaS teams, consultants, recruiters, sales teams, reputation managers, and local service vendors buy this list because each record has a visible trigger or business problem that can support targeted outreach.",
    "paymentLink": "https://buy.athena.live/b/9B6cMY9eK1SH4ykgk0gA91W"
  },
  {
    "title": "Businesses that recently opened",
    "category": "High-Signal Opportunity",
    "price": "$49",
    "records": "500 records",
    "description": "A high-signal opportunity CSV focused on businesses with visible website, review, hiring, contact, payment, or growth triggers. This product focuses on businesses that recently opened and is delivered as a CSV download link by email once available.",
    "fields": "Business name, website if present, city, state, opportunity signal, issue or trigger, phone, public email where available, contact page, source URL, notes.",
    "bestFor": "Agencies, SaaS teams, consultants, recruiters, sales teams, reputation managers, and local service vendors buy this list because each record has a visible trigger or business problem that can support targeted outreach.",
    "paymentLink": "https://buy.athena.live/b/aFa3coaiO54Td4Q4BigA91X"
  },
  {
    "title": "Businesses that recently changed address",
    "category": "High-Signal Opportunity",
    "price": "$49",
    "records": "500 records",
    "description": "A high-signal opportunity CSV focused on businesses with visible website, review, hiring, contact, payment, or growth triggers. This product focuses on businesses that recently changed address and is delivered as a CSV download link by email once available.",
    "fields": "Business name, website if present, city, state, opportunity signal, issue or trigger, phone, public email where available, contact page, source URL, notes.",
    "bestFor": "Agencies, SaaS teams, consultants, recruiters, sales teams, reputation managers, and local service vendors buy this list because each record has a visible trigger or business problem that can support targeted outreach.",
    "paymentLink": "https://buy.athena.live/b/6oU6oA0Ie2WL0i40l2gA91Y"
  },
  {
    "title": "Businesses with new locations",
    "category": "High-Signal Opportunity",
    "price": "$49",
    "records": "500 records",
    "description": "A high-signal opportunity CSV focused on businesses with visible website, review, hiring, contact, payment, or growth triggers. This product focuses on businesses with new locations and is delivered as a CSV download link by email once available.",
    "fields": "Business name, website if present, city, state, opportunity signal, issue or trigger, phone, public email where available, contact page, source URL, notes.",
    "bestFor": "Agencies, SaaS teams, consultants, recruiters, sales teams, reputation managers, and local service vendors buy this list because each record has a visible trigger or business problem that can support targeted outreach.",
    "paymentLink": "https://buy.athena.live/b/28E6oAfD868Xe8U9VCgA91Z"
  }
];

const creatorIntelligenceFields = {
  influencer: "Creator name, brand/account name, platform, profile URL, niche, location, language, follower range, average views or likes where available, engagement signal, public email, contact page, sponsor page, link-in-bio URL, recent activity, audience type, sponsor signals, activity_score, contactability_score, brand_fit_score, monetization_score, kumquat_score, source URL, last_verified.",
  blogger: "Blog name, website URL, blog niche, location or market, estimated traffic range, SEO strength indicator, contact email, contact page, sponsor page URL, affiliate links detected, Amazon affiliate signal, recent post date, active/inactive status, social links, best sponsorship fit, activity_score, contactability_score, monetization_score, kumquat_score, source URL, last_verified.",
  streamer: "Creator name, platform, channel URL, category or game, location where public, audience language, follower count, average viewers, stream frequency, recent stream date, Discord/community link, business email, sponsor/contact page, brand-safe score, engagement signal, activity_score, contactability_score, brand_fit_score, monetization_score, kumquat_score, source URL, last_verified."
};

const creatorIntelligenceBestFor = {
  influencer: "Restaurants, CPG brands, beauty brands, med spas, ecommerce teams, event promoters, real estate marketers, PR agencies, affiliate managers, and local businesses buy this to find micro-creators they can realistically sponsor.",
  blogger: "Affiliate managers, SEO teams, PR agencies, ecommerce brands, SaaS marketers, hotels, restaurants, lenders, real estate vendors, and product launch teams buy this to find publishers with contact paths, sponsor pages, and search traffic.",
  streamer: "Gaming brands, apps, SaaS tools, creator partnerships teams, Discord/community products, agencies, esports vendors, fintech and crypto marketers, music brands, and affiliate managers buy this to find streamers with reachable niche audiences."
};

function creatorDescription(title, type) {
  const typeLabel = type === "blogger" ? "publisher and blogger" : type === "streamer" ? "streamer" : "influencer";
  return "A Creator Intelligence CSV focused on " + typeLabel + " sponsorship opportunities a brand could actually reach. This product focuses on " + title.toLowerCase() + " and is delivered as a CSV download link by email once available.";
}

[
  ["500 LA Food Influencers With Emails + Engagement Signals", "influencer", "$299", "500 records", "https://buy.athena.live/b/14A7sE4Yuapd4yk1p6gA920"],
  ["1,000 Beauty & Skincare Influencers Accepting Brand Deals", "influencer", "$499", "1,000 records", "https://buy.athena.live/b/3cI8wIaiOeFt2qc7NugA921"],
  ["500 Fitness Micro-Influencers in California", "influencer", "$199", "500 records", "https://buy.athena.live/b/28E8wI62y68X6Gsd7OgA922"],
  ["500 Real Estate Influencers With Public Contact Info", "influencer", "$199", "500 records", "https://buy.athena.live/b/5kQ3co8aG0OD8OA1p6gA923"],
  ["1,000 Mom Influencers With Sponsor Signals", "influencer", "$499", "1,000 records", "https://buy.athena.live/b/fZu28kez4fJxfcYaZGgA924"],
  ["500 Wedding Influencers + Vendor Collaboration Contacts", "influencer", "$299", "500 records", "https://buy.athena.live/b/bJe6oA1Mi9l94yk9VCgA925"],
  ["500 Local Influencers Under 50k Followers", "influencer", "$199", "500 records", "https://buy.athena.live/b/3cIdR2fD87d19SE7NugA926"],
  ["1,000 TikTok Creators With Public Emails", "influencer", "$299", "1,000 records", "https://buy.athena.live/b/9B68wIbmS9l9d4Q9VCgA927"],
  ["500 Instagram Creators With Link-in-Bio Contact Paths", "influencer", "$199", "500 records", "https://buy.athena.live/b/14AbIUbmS9l98OA0l2gA928"],
  ["500 YouTube Creators With Business Emails", "influencer", "$199", "500 records", "https://buy.athena.live/b/3cI14g1MibthfcY2tagA929"],
  ["1,000 Food Bloggers With Contact Emails", "blogger", "$299", "1,000 records", "https://buy.athena.live/b/3cIbIUgHc40Pe8UffWgA92a"],
  ["500 Travel Bloggers With Sponsor Pages", "blogger", "$199", "500 records", "https://buy.athena.live/b/7sY8wI1Mi68X9SEaZGgA92b"],
  ["500 Finance Bloggers With Affiliate Signals", "blogger", "$299", "500 records", "https://buy.athena.live/b/5kQ00ccqWcxlgh26JqgA92c"],
  ["500 Mom Blogs With Brand Collaboration Pages", "blogger", "$199", "500 records", "https://buy.athena.live/b/fZu00caiO7d1fcY6JqgA92d"],
  ["500 Product Review Blogs Accepting PR", "blogger", "$199", "500 records", "https://buy.athena.live/b/4gMdR29eKgNBaWI6JqgA92e"],
  ["500 Wedding Blogs With Contributor/Sponsor Contacts", "blogger", "$199", "500 records", "https://buy.athena.live/b/14A28k8aG54T1m80l2gA92f"],
  ["500 Local City Blogs in the United States", "blogger", "$199", "500 records", "https://buy.athena.live/b/3cIcMY76C0ODd4Q6JqgA92g"],
  ["500 AI/Tech Bloggers With Contact Pages", "blogger", "$299", "500 records", "https://buy.athena.live/b/dRmeV63Uq7d19SEd7OgA92h"],
  ["500 Beauty Blogs With Affiliate Links", "blogger", "$199", "500 records", "https://buy.athena.live/b/eVqbIU9eKeFtgh29VCgA92i"],
  ["500 Home Improvement Blogs With SEO Metrics", "blogger", "$299", "500 records", "https://buy.athena.live/b/5kQ7sE1MidBp5Co6JqgA92j"],
  ["1,000 Twitch Streamers With Business Emails", "streamer", "$499", "1,000 records", "https://buy.athena.live/b/9B6aEQ4Yu9l9aWIebSgA92k"],
  ["500 Small Streamers With High Engagement", "streamer", "$299", "500 records", "https://buy.athena.live/b/bJecMY3Uq7d18OA9VCgA92l"],
  ["500 Gaming Streamers Accepting Sponsors", "streamer", "$299", "500 records", "https://buy.athena.live/b/dRmaEQez4dBpe8U9VCgA92m"],
  ["500 Just Chatting Streamers With Discord Links", "streamer", "$199", "500 records", "https://buy.athena.live/b/aFaaEQdv0cxl0i40l2gA92n"],
  ["500 YouTube Live Streamers With Sponsor Contacts", "streamer", "$299", "500 records", "https://buy.athena.live/b/28E3cogHc1SH0i49VCgA92o"],
  ["500 Coding Streamers", "streamer", "$199", "500 records", "https://buy.athena.live/b/3cI4gsaiObthc0M3xegA92p"],
  ["500 Chess Streamers", "streamer", "$199", "500 records", "https://buy.athena.live/b/00w3codv054T8OAffWgA92q"],
  ["500 Music Streamers", "streamer", "$199", "500 records", "https://buy.athena.live/b/14AbIUfD89l96GsebSgA92r"],
  ["500 Crypto Streamers", "streamer", "$299", "500 records", "https://buy.athena.live/b/aFa9AMaiOfJx4yk5FmgA92s"],
  ["500 Streamers With Active Communities", "streamer", "$299", "500 records", "https://buy.athena.live/b/00w28k4Yu40P0i4d7OgA92t"]
].forEach(([title, type, price, records, paymentLink]) => {
  products.push({
    title,
    category: "Creator Intelligence Lists",
    price,
    records,
    description: creatorDescription(title, type),
    fields: creatorIntelligenceFields[type],
    bestFor: creatorIntelligenceBestFor[type],
    paymentLink
  });
});

const productGrid = document.querySelector("[data-product-grid]");
const productCount = document.querySelector("[data-product-count]");
const filterWrap = document.querySelector("[data-catalog-filters]");
const productSearch = document.querySelector("[data-product-search]");
let activeFilter = "All";
let activeSearch = "";

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[char]);
}

function productMatchesSearch(product, query) {
  if (!query) return true;

  const searchable = [
    product.title,
    product.category,
    product.records,
    product.price,
    product.description,
    product.fields,
    product.bestFor
  ].join(" ").toLowerCase();

  return query.split(/\s+/).every((term) => searchable.includes(term));
}

function renderProducts() {
  if (!productGrid) return;

  const query = activeSearch.trim().toLowerCase();
  const visibleProducts = products.filter((product) => {
    const matchesFilter = activeFilter === "All" || product.category === activeFilter;
    return matchesFilter && productMatchesSearch(product, query);
  });

  productGrid.innerHTML = visibleProducts.length ? visibleProducts.map((product) => [
    '<article class="product-card">',
    '<div class="product-meta"><span>' + escapeHtml(product.records) + '</span><span>' + escapeHtml(product.price) + '</span></div>',
    '<span class="category-pill">' + escapeHtml(product.category) + '</span>',
    '<h3>' + escapeHtml(product.title) + '</h3>',
    '<p>' + escapeHtml(product.description) + '</p>',
    '<p class="best-for"><strong>Who buys this:</strong> ' + escapeHtml(product.bestFor) + '</p>',
    '<p class="best-for"><strong>Expected fields:</strong> ' + escapeHtml(product.fields) + '</p>',
    '<a class="button button-full" href="' + product.paymentLink + '" target="_blank" rel="noreferrer">Buy CSV</a>',
    '</article>'
  ].join('')) .join("") : [
    '<div class="empty-state">',
    '<h3>No matching lists found.</h3>',
    '<p>Try a broader search or request a custom list for the exact niche you need.</p>',
    '<a class="button" href="custom-list.html">Request Custom List</a>',
    '</div>'
  ].join('');

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
    activeFilter = button.dataset.filter;
    renderProducts();
  });
}

if (productSearch) {
  productSearch.addEventListener("input", () => {
    activeSearch = productSearch.value;
    renderProducts();
  });
}

renderProducts();
