export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  dateISO: string;
  author: string;
  image: string;
  keywords: string[];
  content: string;
  faq: { question: string; answer: string }[];
}

export const articles: Article[] = [
  {
    slug: 'facebook-ads-guide-malaysian-businesses-2026',
    title: 'The Complete Facebook Ads Guide for Malaysian Businesses in 2026',
    excerpt:
      'Everything you need to know about running profitable Facebook ad campaigns in Malaysia — from account setup to scaling winners.',
    category: 'Getting Started',
    readTime: '12 min read',
    date: 'April 2, 2026',
    dateISO: '2026-04-02',
    author: 'Aiman Rizq',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
    keywords: [
      'facebook ads malaysia',
      'facebook advertising guide',
      'meta ads malaysia 2026',
      'how to run facebook ads',
    ],
    content: `
## Why Facebook Ads Still Dominate in Malaysia

With over 26 million active Facebook users in Malaysia, the platform remains the single most effective paid advertising channel for local businesses. Despite the rise of TikTok and other platforms, META's advertising ecosystem — spanning Facebook, Instagram, Messenger, and the Audience Network — continues to deliver the best combination of reach, targeting precision, and cost efficiency.

In 2026, the average Malaysian spends 3.2 hours daily on META platforms. That's 3.2 hours of opportunity for your business to reach the right audience with the right message.

## Setting Up Your META Business Account

Before launching your first campaign, you need a properly configured business account:

1. **Create a META Business Suite account** at business.facebook.com
2. **Verify your business** — upload your SSM registration (Form 9 or Form 13)
3. **Set up your Facebook Pixel** — this is non-negotiable for tracking conversions
4. **Add your payment method** — Malaysian credit/debit cards and online banking are supported
5. **Create your first ad account** — set currency to MYR and timezone to Kuala Lumpur

### The Pixel: Your Most Important Asset

The META Pixel tracks visitor behaviour on your website. Without it, you're essentially flying blind. Install it on every page of your site, especially:

- Landing pages
- Product pages
- Cart and checkout pages
- Thank you / confirmation pages

Most Malaysian businesses skip pixel setup and wonder why their ads don't convert. Don't make this mistake.

## Campaign Structure: The Malaysian Approach

The most successful Malaysian advertisers follow a three-tier campaign structure:

### Tier 1: Awareness (Top of Funnel)
- **Objective:** Brand awareness or reach
- **Audience:** Broad targeting by location (state-level in Malaysia)
- **Budget:** 20% of total ad spend
- **Creative:** Video content showcasing your brand story

### Tier 2: Consideration (Middle of Funnel)
- **Objective:** Traffic, engagement, or lead generation
- **Audience:** Interest-based targeting + lookalike audiences
- **Budget:** 50% of total ad spend
- **Creative:** Carousel ads, testimonials, product demonstrations

### Tier 3: Conversion (Bottom of Funnel)
- **Objective:** Conversions, catalogue sales, or store traffic
- **Audience:** Retargeting (website visitors, engagers, cart abandoners)
- **Budget:** 30% of total ad spend
- **Creative:** Direct offers, urgency-driven copy, social proof

## Targeting Malaysian Audiences

Malaysia's multicultural market requires nuanced targeting. Here are the key considerations:

### Language Targeting
- **Bahasa Malaysia** — primary language for Malay-majority areas
- **English** — urban professionals, especially in KL, Penang, JB
- **Mandarin** — Chinese-majority demographics
- **Tamil** — Indian-majority demographics

Use separate ad sets for different language groups. A single ad in English won't resonate across all demographics.

### Geographic Targeting
Malaysia's states have vastly different purchasing behaviours:

- **KL/Selangor** — highest spending power, most competitive
- **Penang** — strong digital adoption, F&B and tourism heavy
- **Johor** — cross-border influence from Singapore
- **Sabah/Sarawak** — unique market, often overlooked but growing fast

### Interest-Based Targeting
Combine demographics with interests relevant to Malaysian consumers:

- Shopee and Lazada shoppers (e-commerce ready)
- Malaysian food enthusiasts (F&B businesses)
- Property seekers (real estate)
- Fitness and wellness (health industry)

## Budget Guidelines for Malaysian Businesses

How much should you spend? Here's a realistic breakdown:

| Business Type | Monthly Budget (MYR) | Expected Results |
|---|---|---|
| Small local business | RM500 – RM2,000 | 50-200 leads |
| E-commerce store | RM2,000 – RM10,000 | 3-8x ROAS |
| Service business | RM1,000 – RM5,000 | 30-100 qualified leads |
| Enterprise/franchise | RM10,000+ | Brand dominance + performance |

Start with RM30-50/day per ad set. This gives META's algorithm enough data to optimise.

## Common Mistakes Malaysian Advertisers Make

1. **Boosting posts instead of running proper campaigns** — Boost is the worst use of your ad budget
2. **Not installing the Pixel** — You lose all retargeting and optimisation ability
3. **Too narrow targeting** — Let META's AI find your audience; don't over-restrict
4. **One ad creative for all audiences** — Different demographics need different messages
5. **Ignoring mobile** — 95% of Malaysian Facebook users are on mobile. Design for mobile first.

## Getting Started Today

The best time to start Facebook advertising was yesterday. The second best time is now. Begin with a simple campaign structure, install your pixel, and commit to testing for at least 30 days before judging results.

Focus on creating valuable content, building a landing page that converts (tools like [Nexova](https://nexova.my), Carrd, or Unbounce can help), and systematically testing your targeting and creative.
    `,
    faq: [
      {
        question: 'How much do Facebook ads cost in Malaysia?',
        answer:
          'The average cost-per-click (CPC) in Malaysia ranges from RM0.30 to RM2.50 depending on your industry and targeting. Most small businesses start with RM500-RM2,000 per month.',
      },
      {
        question: 'Is Facebook advertising still effective in Malaysia in 2026?',
        answer:
          'Yes. With over 26 million users, Facebook remains the largest social platform in Malaysia. Combined with Instagram, META platforms offer the best reach-to-cost ratio for Malaysian advertisers.',
      },
      {
        question: 'Do I need a website to run Facebook ads?',
        answer:
          'While you can run ads without a website using lead forms, having a landing page significantly improves conversion rates. You can build one quickly using page builders like [Nexova](https://nexova.my), Carrd, or Unbounce.',
      },
    ],
  },

  {
    slug: 'instagram-reels-ads-malaysia-strategy',
    title: 'How to Create Instagram Reels Ads That Convert in Malaysia',
    excerpt:
      'Instagram Reels are the fastest-growing ad format in Malaysia. Learn how to create scroll-stopping Reels ads that drive real results.',
    category: 'Instagram',
    readTime: '8 min read',
    date: 'March 28, 2026',
    dateISO: '2026-03-28',
    author: 'Aiman Rizq',
    image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&h=600&fit=crop',
    keywords: [
      'instagram reels ads',
      'instagram advertising malaysia',
      'reels ad strategy',
      'short form video ads',
    ],
    content: `
## Why Reels Ads Are Dominating Malaysian Feeds

Instagram Reels ads now account for over 35% of total META ad impressions in Malaysia. The format delivers significantly lower CPMs compared to traditional feed and Stories placements, while generating higher engagement rates.

For Malaysian businesses, Reels ads offer an unmatched opportunity: you can reach massive audiences at a fraction of the cost of other placements.

## The Anatomy of a High-Performing Reel Ad

After analysing hundreds of successful Reels campaigns in Malaysia, these are the common elements:

### 1. Hook Within 0.5 Seconds
Your first half-second determines whether someone stops scrolling. Effective hooks for Malaysian audiences:

- **Visual shock** — unexpected visual transformation
- **Text overlay** — bold statement in BM or English
- **Face-to-camera** — a person speaking directly to viewer
- **Before/after** — immediate transformation preview

### 2. Native Feel
The best-performing Reels ads don't look like ads. They look like organic content. This means:

- **Vertical format** (9:16 aspect ratio)
- **No heavy branding** in the first 3 seconds
- **Use trending audio** when possible (check META's sound library)
- **Raw, authentic footage** outperforms polished production

### 3. Clear CTA in the Last 3 Seconds
Malaysian audiences respond best to direct, simple calls-to-action:

- "DM us now for pricing"
- "Link di bio"
- "Tap below to order"
- "WhatsApp kami sekarang"

## Reels Ad Creative Framework for Malaysia

### The Problem-Solution Format (Best for Services)
1. Show the problem (0-3s): "Penat manage social media sendiri?"
2. Agitate (3-6s): Show frustration, wasted time
3. Solution (6-12s): Introduce your service
4. Social proof (12-18s): Quick testimonial or result
5. CTA (18-20s): "DM for free consultation"

### The Demo Format (Best for Products)
1. Product reveal (0-2s): Eye-catching unboxing or display
2. Key features (2-8s): Show 2-3 benefits in action
3. Price anchor (8-12s): "Only RM49" or "Now 50% off"
4. Urgency (12-15s): "Limited stock" or "This week only"

### The Transformation Format (Best for Beauty/Fitness)
1. Before state (0-3s)
2. Process montage (3-10s)
3. After reveal (10-13s)
4. Offer (13-15s)

## Technical Specs That Matter

- **Resolution:** 1080 x 1920 pixels minimum
- **Duration:** 15-30 seconds (sweet spot for ads)
- **File size:** Under 30MB for optimal delivery
- **Captions:** Always add — 60% of Malaysians watch without sound
- **Safe zones:** Keep text and key visuals away from edges (META overlays UI elements)

## Budgeting for Reels Ads in Malaysia

Reels typically deliver 30-50% lower CPMs than feed ads. Expected benchmarks:

| Metric | Average (Malaysia) |
|---|---|
| CPM | RM8 – RM25 |
| CPC | RM0.20 – RM1.50 |
| CTR | 1.2% – 3.5% |
| Video view cost | RM0.01 – RM0.05 |

Start with RM50/day and test 3-4 creative variations. Scale the winners after 72 hours.

## Common Reels Ad Mistakes

1. **Using landscape video** — instantly signals "ad" and gets skipped
2. **No captions** — you lose the majority who watch muted
3. **Too long** — keep it under 30 seconds for ads
4. **Over-produced content** — authentic outperforms polished
5. **Ignoring trending audio** — use META's commercial music library
    `,
    faq: [
      {
        question: 'What is the ideal length for Instagram Reels ads?',
        answer:
          'For ads, keep Reels between 15-30 seconds. This is the sweet spot for engagement and completion rates in Malaysia.',
      },
      {
        question: 'Can I use any music in Reels ads?',
        answer:
          'No. For ads, you must use royalty-free music or tracks from META\'s commercial sound library. Using copyrighted music will get your ad rejected.',
      },
    ],
  },

  {
    slug: 'facebook-ads-targeting-malaysian-demographics',
    title: 'Facebook Ads Targeting: Reaching the Right Malaysians',
    excerpt:
      'Master audience targeting for Malaysia\'s diverse multicultural market. Learn to segment by language, location, behaviour, and more.',
    category: 'Targeting',
    readTime: '10 min read',
    date: 'March 21, 2026',
    dateISO: '2026-03-21',
    author: 'Aiman Rizq',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop',
    keywords: [
      'facebook audience targeting malaysia',
      'facebook ads targeting tips',
      'malaysian audience segmentation',
      'meta ads targeting 2026',
    ],
    content: `
## Understanding Malaysia's Unique Audience Landscape

Malaysia's diversity is its defining characteristic — and the reason why one-size-fits-all targeting fails. With three major ethnic groups (Malay, Chinese, Indian), multiple languages, and vastly different purchasing behaviours by state, your targeting strategy needs to be surgical.

## The Four Pillars of Malaysian Audience Targeting

### 1. Demographic Targeting

**Age distribution matters:**
- 18-24: Heavy social media users, impulse buyers, price-sensitive
- 25-34: Highest spending power online, career-focused
- 35-44: Family-oriented spending, property and education
- 45+: Growing digital adoption, health and lifestyle

**Gender considerations:**
Women make up 55% of Malaysian Facebook shoppers, but men have higher average order values in categories like electronics and automotive.

### 2. Language-Based Segmentation

This is where most advertisers fail in Malaysia. You need separate campaigns for:

**Bahasa Malaysia campaigns:**
- Target: Malay-majority states (Kedah, Kelantan, Terengganu, Pahang)
- Ad copy: Written in natural BM (not formal Bahasa Melayu)
- Creative: Feature Malay-centric imagery and cultural references
- Timing: Consider prayer times (avoid Subuh and Maghrib slots)

**English campaigns:**
- Target: Urban centers (KL, PJ, Subang, Penang Georgetown)
- Ad copy: Casual, conversational English
- Creative: Modern, urban lifestyle imagery
- Timing: Peak engagement 8-10pm weeknights

**Mandarin campaigns:**
- Target: Penang, KL Chinatown area, Ipoh, JB
- Ad copy: Simplified Chinese characters
- Creative: Must be culturally appropriate
- Consider: Festival-specific campaigns (CNY, Mooncake Festival)

### 3. Geographic Targeting

Don't target "Malaysia" as a whole. Break it down:

**Klang Valley (KL + Selangor)**
- Population: ~8 million
- Characteristics: Highest digital spending, most competitive
- Strategy: Need higher budgets, focus on differentiation
- Average CPC: RM1.50 – RM3.00

**Northern Region (Penang, Kedah, Perlis)**
- Characteristics: Tech-savvy, food culture, tourism
- Strategy: F&B and lifestyle businesses thrive here
- Average CPC: RM0.80 – RM1.80

**Southern Region (Johor, Melaka, NS)**
- Characteristics: Singapore-influenced, cross-border shopping
- Strategy: Price-competitive offers work well (SGD comparison)
- Average CPC: RM0.60 – RM1.50

**East Malaysia (Sabah, Sarawak)**
- Characteristics: Often overlooked, less competitive, loyal customers
- Strategy: Lower budgets needed, higher engagement rates
- Average CPC: RM0.30 – RM1.00

**East Coast (Kelantan, Terengganu, Pahang)**
- Characteristics: BM-dominant, value-conscious, community-oriented
- Strategy: Trust-building content first, then conversion
- Average CPC: RM0.40 – RM1.20

### 4. Behavioural & Interest Targeting

Layer interests on top of demographics for precision:

**E-commerce ready audience:**
- Shopee shoppers
- Lazada shoppers
- Online shopping enthusiasts
- Mobile payment users (Touch 'n Go eWallet, GrabPay)

**Industry-specific interests:**
- F&B: Foodie, restaurant reviewers, cooking enthusiasts
- Beauty: Skincare, makeup, K-beauty fans
- Fitness: Gym members, running groups, CrossFit
- Property: Property investment, home decor, renovation

## Advanced Targeting: Lookalike Audiences

Once you have conversion data (minimum 100 conversions), create lookalike audiences:

1. **1% Lookalike** — most similar to your converters (best for conversion campaigns)
2. **3% Lookalike** — broader reach with good similarity (best for prospecting)
3. **5% Lookalike** — widest reach (best for awareness)

Pro tip: Create source audiences from your highest-value customers, not just all customers.

## Retargeting Strategy for Malaysia

Set up these retargeting audiences:

- **Website visitors (7 days)** — hottest audience, highest intent
- **Website visitors (30 days)** — warm audience
- **Instagram/Facebook engagers (90 days)** — showed interest
- **Video viewers (50%+ watched)** — content consumers
- **Cart abandoners** — ready to buy, just need a push

## The Targeting Mistake That Wastes Budget

The biggest mistake? Over-targeting. META's algorithm is incredibly smart. If you narrow your audience too much (under 100,000 people), the algorithm can't optimise effectively.

**Rule of thumb:** Keep audience sizes between 500,000 and 5,000,000 for prospecting campaigns. Let META's AI do the heavy lifting with Advantage+ audiences.
    `,
    faq: [
      {
        question: 'What is the minimum audience size for Facebook ads in Malaysia?',
        answer:
          'While you can target audiences as small as 1,000, we recommend a minimum of 500,000 for prospecting campaigns to give META\'s algorithm enough room to optimise.',
      },
      {
        question: 'Should I create separate campaigns for different languages?',
        answer:
          'Yes, absolutely. Malaysian audiences respond much better to ads in their preferred language. Create separate ad sets for BM, English, and Mandarin audiences.',
      },
      {
        question: 'How do I target specific states in Malaysia?',
        answer:
          'In META Ads Manager, use the Location targeting option and select specific states, cities, or even postcodes. You can also exclude areas you don\'t serve.',
      },
    ],
  },

  {
    slug: 'meta-ads-budget-optimization-roas',
    title: 'How to Optimise Your META Ads Budget for Maximum ROAS',
    excerpt:
      'Stop wasting money on underperforming ads. Learn budget allocation, bidding strategies, and optimisation techniques for Malaysian businesses.',
    category: 'Budget & ROAS',
    readTime: '9 min read',
    date: 'March 15, 2026',
    dateISO: '2026-03-15',
    author: 'Aiman Rizq',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop',
    keywords: [
      'meta ads budget optimization',
      'facebook ads roas malaysia',
      'ad spend optimization',
      'reduce facebook ads cost',
    ],
    content: `
## The ROAS Framework for Malaysian Businesses

Return on Ad Spend (ROAS) is the single most important metric for any Malaysian business running META ads. A 3x ROAS means for every RM1 spent, you get RM3 back in revenue.

Here's what "good" ROAS looks like by industry in Malaysia:

| Industry | Minimum ROAS | Good ROAS | Excellent ROAS |
|---|---|---|---|
| E-commerce (fashion) | 2x | 4x | 8x+ |
| E-commerce (electronics) | 1.5x | 3x | 5x+ |
| F&B (delivery) | 2x | 5x | 10x+ |
| Services (B2B) | 3x | 7x | 15x+ |
| Education/courses | 3x | 8x | 20x+ |

## Budget Allocation Strategy

### The 70-20-10 Rule
- **70% — Proven winners:** Campaigns that have demonstrated positive ROAS
- **20% — Testing:** New audiences, creatives, and offers
- **10% — Experimental:** New platforms, formats, or strategies

### Daily Budget vs Lifetime Budget
For Malaysian businesses, we recommend:

- **Daily budgets** for ongoing campaigns — easier to control and scale
- **Lifetime budgets** for promotional campaigns with fixed end dates (Hari Raya, CNY sales)

### Minimum Viable Budget
Don't run META ads with less than RM30/day per ad set. Below this threshold, the algorithm doesn't get enough data to optimise. You'll waste money on the learning phase without ever seeing results.

## Campaign Budget Optimization (CBO) vs Ad Set Budget

**Use CBO (Campaign Budget) when:**
- You have 3+ ad sets that target similar-quality audiences
- You want META to allocate budget to the best-performing ad set automatically
- You're running broad targeting with Advantage+ audiences

**Use Ad Set Budget (ABO) when:**
- You need strict budget control per audience
- You're testing new audiences and want equal spending
- You have very different audience sizes per ad set

## Bidding Strategies Explained

### Lowest Cost (Recommended for Beginners)
META automatically bids to get you the most results at the lowest cost. Best for:
- New campaigns still in learning phase
- Businesses without clear CPA targets

### Cost Cap
Set a maximum cost per result. META will try to stay under this cap. Best for:
- Businesses with known customer acquisition cost targets
- Scaling campaigns while maintaining profitability
- Example: "I want each lead to cost no more than RM15"

### Bid Cap
Set a maximum bid for each auction. Most aggressive control. Best for:
- Advanced advertisers with extensive data
- Competitive industries where costs fluctuate

### ROAS Goal (Minimum ROAS)
Tell META your minimum acceptable ROAS. Best for:
- E-commerce businesses with clear margin targets
- Catalogue campaigns with varying product prices

## Optimisation Techniques That Work in Malaysia

### 1. The Surfing Strategy
Instead of fighting high CPMs during peak seasons (Raya, CNY, year-end), ride the wave:
- **Increase budgets 2 weeks before** major shopping events
- **Prepare creative in advance** — don't rush production during the event
- **Accept higher CPMs** during peak — conversion rates also increase

### 2. Dayparting for Malaysian Audiences
Not all hours are equal. Optimise by running ads during peak conversion windows:
- **B2C:** 8pm-11pm (after work browsing)
- **B2B:** 10am-12pm and 2pm-4pm (office hours)
- **F&B:** 11am-1pm (lunch decisions) and 5pm-7pm (dinner decisions)
- **E-commerce:** Thursday-Sunday (pay-week patterns)

### 3. Creative Refresh Cycle
Malaysian audiences experience ad fatigue faster than global averages:
- Refresh creative every **7-14 days** for small audiences
- Refresh every **21-30 days** for broad audiences
- Monitor frequency — if it exceeds 3.0, your creative is stale

### 4. The Scaling Playbook
When you find a winning ad:
1. **Don't increase budget more than 20% per day** — this resets the learning phase
2. **Duplicate the ad set** with higher budget instead
3. **Expand the audience** gradually (add similar interests or go broader)
4. **Add new creative variations** to the winning ad set

## Tracking ROAS Accurately

### The Attribution Window Problem
META's default attribution is 7-day click, 1-day view. For Malaysian businesses:
- **E-commerce:** 7-day click is usually accurate
- **High-ticket services:** Consider 28-day click (customers take longer to decide)
- **Lead generation:** Track offline conversions (sales team follow-up)

### UTM Parameters
Always use UTM parameters to cross-reference META data with your analytics:
\`?utm_source=facebook&utm_medium=paid&utm_campaign=campaign_name\`

This lets you verify ROAS in Google Analytics or your own tracking system, not just trust META's reporting.
    `,
    faq: [
      {
        question: 'What is a good ROAS for Facebook ads in Malaysia?',
        answer:
          'A good ROAS varies by industry. E-commerce should aim for 4x+, services for 7x+, and education for 8x+. At minimum, your ROAS should exceed your break-even point after accounting for product costs and overhead.',
      },
      {
        question: 'How much should I spend on Facebook ads per month?',
        answer:
          'Start with a minimum of RM900/month (RM30/day) per ad set. Most Malaysian SMBs see meaningful results with RM2,000-RM5,000/month. Scale only after proving positive ROAS.',
      },
    ],
  },

  {
    slug: 'facebook-lead-generation-ads-malaysia',
    title: 'Facebook Lead Generation Ads: A Complete Guide for Malaysian SMBs',
    excerpt:
      'Generate high-quality leads using Facebook\'s native lead forms and Instant Forms. Includes templates and follow-up strategies for the Malaysian market.',
    category: 'Lead Generation',
    readTime: '10 min read',
    date: 'March 8, 2026',
    dateISO: '2026-03-08',
    author: 'Aiman Rizq',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    keywords: [
      'facebook lead generation malaysia',
      'facebook lead form ads',
      'lead generation strategy',
      'meta instant forms',
    ],
    content: `
## Why Lead Ads Work So Well in Malaysia

Facebook Lead Ads remove the biggest friction point in lead generation: sending users to an external website. Instead, the form opens directly within Facebook, pre-filled with the user's information. For Malaysian audiences — who are often on slow mobile connections — this makes a massive difference.

Average lead costs in Malaysia using Instant Forms are 40-60% lower than landing page-based campaigns.

## Setting Up Your First Lead Campaign

### Step 1: Choose the Right Campaign Objective
In META Ads Manager, select **Leads** as your campaign objective. Then choose between:

- **Instant Forms** — form within Facebook (recommended for most businesses)
- **Website** — directs to your own landing page
- **Messenger** — opens a conversation in Messenger
- **Instagram** — leads via Instagram DMs

### Step 2: Design Your Instant Form

A well-designed form is the difference between quality leads and junk data:

**Form Type: More Volume vs Higher Intent**
- **More Volume:** Faster form, fewer fields, pre-filled data — generates more leads but lower quality
- **Higher Intent:** Adds a review screen before submission — fewer leads but much higher quality

For service businesses in Malaysia, always choose **Higher Intent**.

**Essential Fields:**
1. Full name (pre-filled)
2. Email (pre-filled)
3. Phone number (pre-filled) — critical for Malaysian businesses who follow up via WhatsApp
4. One qualifying question (custom)

**Custom Qualifying Questions Examples:**
- "What is your monthly budget for [service]?"
  - Below RM1,000 / RM1,000-RM5,000 / RM5,000-RM10,000 / Above RM10,000
- "When do you need this service?"
  - Immediately / Within 1 month / Within 3 months / Just exploring
- "What is your company size?"
  - Solo / 2-10 / 11-50 / 50+

### Step 3: Create a Compelling Lead Magnet

Malaysian audiences are more likely to submit their info when they receive something valuable. Top-performing lead magnets:

- Free consultation call (service businesses)
- Free quotation (contractors, agencies)
- Downloadable guide or checklist (education, B2B)
- Discount code or voucher (e-commerce, F&B)
- Free sample or trial (products, SaaS)

## Lead Ad Creative That Converts in Malaysia

### Headline Formulas
- "Get a Free [Benefit] — Limited Slots"
- "[Number] Malaysian Businesses Trust Us For [Service]"
- "Free [Lead Magnet] for [Target Audience]"

### Ad Copy Framework
**Line 1:** Call out your audience ("Malaysian business owners, this is for you")
**Line 2-3:** Present the problem and agitate
**Line 4-5:** Present your solution
**Line 6:** Social proof (clients served, years of experience)
**Line 7:** CTA ("Fill the form below — takes 30 seconds")

### Image/Video Best Practices
- Use faces — ads with people perform 30% better
- Show results or outcomes
- Include text overlay with the offer (keep under 20% of image)
- Testimonial screenshots work exceptionally well in Malaysia

## Lead Follow-Up Strategy (Critical for Malaysia)

Here's the truth: the speed of your follow-up determines your ROI more than your ad creative.

### The 5-Minute Rule
Leads contacted within 5 minutes are **9x more likely** to convert. Malaysian consumers expect fast responses, especially via WhatsApp.

### Follow-Up Sequence
1. **Immediately (0-5 min):** WhatsApp message — "Hi [Name], terima kasih for your enquiry! I'm [Your Name] from [Company]..."
2. **1 hour later:** If no response, send a follow-up WhatsApp with more info
3. **Next day:** Call the lead directly
4. **Day 3:** Email with additional value (case study, testimonial)
5. **Day 7:** Final follow-up with a special offer

### WhatsApp Integration
Connect your lead forms to WhatsApp using:
- **META's built-in CRM** (free but basic)
- **Zapier** — automate leads to WhatsApp Business API
- **Make.com** — more affordable alternative to Zapier

## Measuring Lead Quality

Don't just track cost per lead (CPL). Track these metrics:

| Metric | Formula | Target |
|---|---|---|
| CPL | Ad spend ÷ total leads | RM5 – RM50 |
| Lead-to-appointment rate | Appointments ÷ leads | 30%+ |
| Appointment-to-sale rate | Sales ÷ appointments | 20%+ |
| Cost per acquisition (CPA) | Ad spend ÷ sales | Varies |
| Customer lifetime value (LTV) | Total revenue per customer | LTV > 3x CPA |

## Common Lead Ad Mistakes

1. **Too many form fields** — every additional field reduces submissions by 10%
2. **No follow-up system** — leads go cold within hours
3. **Wrong form type** — using "More Volume" when you need quality leads
4. **No qualifying questions** — you attract everyone instead of your ideal customer
5. **Ignoring lead scoring** — not all leads are equal; prioritise hot ones
    `,
    faq: [
      {
        question: 'What is the average cost per lead on Facebook in Malaysia?',
        answer:
          'The average CPL in Malaysia ranges from RM5 to RM50 depending on your industry and targeting. Service businesses typically see RM15-RM30, while e-commerce can achieve RM5-RM15.',
      },
      {
        question: 'Should I use Facebook lead forms or send traffic to my website?',
        answer:
          'For most Malaysian businesses, Facebook Instant Forms generate more leads at lower cost. However, if you need highly qualified leads and have a well-optimised landing page, website traffic can deliver better quality.',
      },
    ],
  },

  {
    slug: 'facebook-ads-for-ecommerce-malaysia',
    title: 'Facebook Ads for E-Commerce: How Malaysian Online Stores Scale',
    excerpt:
      'From catalogue ads to dynamic retargeting — the complete playbook for scaling your Malaysian e-commerce business with META ads.',
    category: 'E-Commerce',
    readTime: '11 min read',
    date: 'March 1, 2026',
    dateISO: '2026-03-01',
    author: 'Aiman Rizq',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    keywords: [
      'facebook ads ecommerce malaysia',
      'shopee to own store facebook ads',
      'dynamic retargeting facebook',
      'catalogue ads meta',
    ],
    content: `
## The E-Commerce Ad Landscape in Malaysia

Malaysia's e-commerce market hit RM52 billion in 2025, and META ads remain the primary acquisition channel for direct-to-consumer (DTC) brands. While many Malaysian sellers start on Shopee or Lazada, the smart ones build their own stores and drive traffic with Facebook and Instagram ads.

Why? Control. On marketplaces, you compete on price. With your own store + paid ads, you compete on brand, experience, and value.

## The E-Commerce Campaign Blueprint

### Campaign 1: Prospecting (New Customers)

**Objective:** Sales or Conversions
**Audience:** Broad or interest-based, 1-5% lookalikes
**Budget:** 60% of total ad spend

**Ad formats that work:**
- **Advantage+ Shopping Campaigns (ASC)** — META's AI-driven campaign that automatically tests creative and audiences. This is now the #1 format for e-commerce.
- **Carousel ads** — showcase 3-5 products in one ad
- **Collection ads** — immersive mobile experience with product catalogue

### Campaign 2: Retargeting (Warm Audiences)

**Objective:** Sales
**Audience:** Website visitors (7-30 days), cart abandoners, product viewers
**Budget:** 30% of total ad spend

**Ad formats:**
- **Dynamic Product Ads (DPA)** — automatically shows products people viewed
- **Single image/video** — specific offer or testimonial
- **Carousel** — "You left these behind" style

### Campaign 3: Retention (Existing Customers)

**Objective:** Sales
**Audience:** Past purchasers, email list, high-value customers
**Budget:** 10% of total ad spend

**Ad formats:**
- New product announcements
- Cross-sell / upsell offers
- Loyalty rewards

## Setting Up Your Product Catalogue

For dynamic ads, you need a product catalogue in META Commerce Manager:

1. Create a catalogue in Commerce Manager
2. Upload your products via data feed (CSV), manual entry, or pixel integration
3. Required fields: id, title, description, availability, condition, price, link, image_link
4. Set up catalogue sets for different product categories

**Pro tip:** Your product images are your ads. Invest in clean, lifestyle product photography. Malaysian shoppers are visual — blurry or cluttered images kill conversion rates.

## Conversion Tracking Setup

For e-commerce, you need more than just the base pixel. Set up these events:

- **ViewContent** — fires on product pages
- **AddToCart** — fires when item is added to cart
- **InitiateCheckout** — fires on checkout page
- **Purchase** — fires on thank you page (include value and currency: MYR)

Use META's Conversions API (CAPI) alongside the pixel for accurate tracking. With iOS privacy changes, server-side tracking captures conversions the pixel misses.

## Creative Strategy for Malaysian E-Commerce

### What Works in Malaysia

1. **User-generated content (UGC)** — real customers using your product
2. **Unboxing videos** — builds anticipation and trust
3. **Before/after** — especially for beauty, skincare, home products
4. **Price-focused ads** — Malaysians are price-conscious; show value clearly
5. **Comparison ads** — "Why choose us vs. Shopee sellers"

### Malaysian Shopping Triggers
- **Free shipping** — the #1 conversion driver in Malaysia
- **Cash on delivery (COD)** — still important for certain demographics
- **Instalment plans** — "Only RM33/month" (Atome, ShopBack PayLater)
- **Limited stock** — urgency works across all demographics
- **Festival deals** — Raya, CNY, Deepavali, Merdeka sales

## Scaling from RM1K to RM50K/month Ad Spend

### Phase 1: RM1,000-RM5,000/month
- Run 1-2 campaigns max
- Test 3-4 ad creatives
- Focus on finding winning products
- Target: break-even ROAS (1.5x-2x)

### Phase 2: RM5,000-RM15,000/month
- Add dynamic retargeting
- Scale winning campaigns by 20%/day
- Create lookalike audiences from purchasers
- Target: profitable ROAS (3x-5x)

### Phase 3: RM15,000-RM50,000/month
- Implement Advantage+ Shopping Campaigns
- Add catalogue campaigns for full product range
- Expand to Instagram Reels and Stories
- Build retention campaigns
- Target: consistent ROAS (4x+) at scale

## Landing Pages for E-Commerce Ads

Your ad is only half the equation. If your product page doesn't convert, you're burning money.

Essential elements of a converting product page:
- High-quality product images (multiple angles + lifestyle)
- Clear pricing in MYR with any discounts highlighted
- Trust badges (SSL, money-back guarantee, Shopee/Lazada reviews)
- Customer reviews and ratings
- Simple checkout process (one-page checkout)
- Mobile-optimised design (95% of Malaysian shoppers are on mobile)

Tools like [Nexova](https://nexova.my), Shopify, or WooCommerce let you build product pages quickly without coding.
    `,
    faq: [
      {
        question: 'Can I use Facebook ads to drive sales for my Shopee store?',
        answer:
          'Yes, but it is not ideal. Shopee\'s terms restrict some external advertising. More importantly, you lose retargeting ability. Building your own store and using Facebook ads gives you full control over the customer journey.',
      },
      {
        question: 'What ROAS should I expect for e-commerce Facebook ads in Malaysia?',
        answer:
          'A healthy e-commerce ROAS in Malaysia is 3x-5x. This means for every RM1 spent on ads, you get RM3-RM5 in revenue. New stores may start at 1.5x-2x and improve as they gather data.',
      },
    ],
  },

  {
    slug: 'facebook-ads-creative-testing-framework',
    title: 'The Ultimate Ad Creative Testing Framework for META Ads',
    excerpt:
      'Stop guessing which ads work. This systematic creative testing framework has been proven across 100+ Malaysian campaigns.',
    category: 'Creative',
    readTime: '8 min read',
    date: 'February 22, 2026',
    dateISO: '2026-02-22',
    author: 'Aiman Rizq',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
    keywords: [
      'facebook ad creative testing',
      'meta ads a/b testing',
      'ad creative strategy',
      'facebook ad design tips',
    ],
    content: `
## Why Creative Is the New Targeting

With META's targeting becoming increasingly automated (Advantage+ audiences, broad targeting), the single biggest lever you have is **creative**. Your ad creative now does the targeting — it attracts the right audience by resonating with them.

The advertisers winning in Malaysia right now are the ones testing the most creative variations, not the ones with the most complex targeting.

## The Creative Testing Framework

### Level 1: Concept Testing (Week 1)
Test fundamentally different creative approaches:

- **Format A:** Static image with text overlay
- **Format B:** Short video (15s)
- **Format C:** Carousel (3-5 images)
- **Format D:** UGC-style testimonial

Run each as a separate ad within one ad set. Budget: RM20/day per ad. After 72 hours, identify the winning format.

### Level 2: Hook Testing (Week 2)
Take the winning format and test different hooks (first 3 seconds for video, headline for static):

- **Hook A:** Problem statement — "Tired of low ROAS?"
- **Hook B:** Result statement — "We generated RM500K in 30 days"
- **Hook C:** Question — "Is your ad spend actually profitable?"
- **Hook D:** Shocking stat — "94% of Malaysian businesses waste their ad budget"

### Level 3: Body Testing (Week 3)
With the winning hook, test different message bodies:

- **Body A:** Feature-focused (what you offer)
- **Body B:** Benefit-focused (what they get)
- **Body C:** Story-driven (customer journey)
- **Body D:** Comparison (before vs after using your product)

### Level 4: CTA Testing (Week 4)
Test different calls-to-action:

- **CTA A:** "Shop Now"
- **CTA B:** "Learn More"
- **CTA C:** "Get Started"
- **CTA D:** "WhatsApp Us"

## Creative Templates That Work in Malaysia

### The Problem-Agitate-Solve (PAS) Template
**Headline:** "[Problem] making you lose customers?"
**Body:** "Every day, [audience] struggles with [problem]. But [number] Malaysian businesses have already solved this with [solution]. Join them today."
**CTA:** Learn More

### The Social Proof Template
**Headline:** "[Number] Malaysians already trust [Brand]"
**Body:** Display customer testimonials, reviews, or results
**Visual:** Screenshot of reviews or customer photos

### The FOMO Template
**Headline:** "[Deal] — Ends [Date]"
**Body:** Limited time offer with countdown urgency
**Visual:** Product with price crossed out + sale price

### The Educational Template
**Headline:** "[Number] Tips to [Desired Outcome]"
**Body:** Quick value-packed tips that position you as an expert
**Visual:** Carousel with each tip on a separate card

## Creative Production on a Budget

You don't need a professional studio. Malaysian audiences actually respond better to authentic content:

- **Smartphone + natural light** — good enough for 80% of content
- **Canva** — for static designs and carousels (free plan works)
- **CapCut** — for video editing (free, powerful, mobile-friendly)
- **META's built-in creative tools** — templates within Ads Manager

### The Content Calendar
Aim to produce 4-8 new creative pieces per week:
- Monday: Shoot raw content (photos + video clips)
- Tuesday: Edit and design variations
- Wednesday: Upload and launch
- Thursday-Sunday: Monitor performance
- Following Monday: Kill losers, scale winners, shoot new content

## Measuring Creative Performance

Track these metrics for each creative:

| Metric | What It Tells You | Good Benchmark |
|---|---|---|
| CTR (Click-through rate) | Is the ad compelling? | > 1.5% |
| Hook rate (3s video views ÷ impressions) | Does the hook grab attention? | > 25% |
| Hold rate (ThruPlays ÷ 3s views) | Is the content engaging? | > 15% |
| Conversion rate | Does it drive action? | > 2% |
| CPR (Cost per result) | Is it cost-effective? | Below target CPA |
| Frequency | Are people seeing it too often? | < 3.0 |

## When to Kill an Ad

Stop an ad when:
- CTR drops below 0.8% for 3 consecutive days
- Frequency exceeds 3.5
- CPR is 2x above your target for 5+ days
- It's been running for 14+ days without improvement
    `,
    faq: [
      {
        question: 'How many ad creatives should I test at once?',
        answer:
          'Start with 3-4 creative variations per ad set. This gives META enough options to optimise while keeping your budget focused. Test one variable at a time for clear results.',
      },
      {
        question: 'How long should I test an ad before deciding if it works?',
        answer:
          'Give each ad at least 72 hours and 1,000+ impressions before judging. The META algorithm needs time to optimise delivery. If it is still underperforming after 5-7 days, it is time to kill it.',
      },
    ],
  },

  {
    slug: 'facebook-pixel-setup-guide-malaysia',
    title: 'Facebook Pixel Setup: The Complete Guide for Malaysian Websites',
    excerpt:
      'Step-by-step guide to installing the META Pixel, setting up conversion events, and using the Conversions API for accurate tracking.',
    category: 'Technical',
    readTime: '7 min read',
    date: 'February 15, 2026',
    dateISO: '2026-02-15',
    author: 'Aiman Rizq',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop',
    keywords: [
      'facebook pixel setup',
      'meta pixel installation guide',
      'conversion tracking facebook',
      'conversions api malaysia',
    ],
    content: `
## What Is the META Pixel and Why It Matters

The META Pixel is a small piece of JavaScript code that you add to your website. It does three critical things:

1. **Tracks conversions** — knows when someone takes an action (purchase, sign up, contact)
2. **Enables retargeting** — lets you show ads to people who visited your site
3. **Feeds the algorithm** — gives META data to find more people like your converters

Without a pixel, you're running ads blind. It's the foundation of profitable advertising.

## Step-by-Step Pixel Installation

### Step 1: Create Your Pixel
1. Go to META Events Manager (business.facebook.com/events_manager)
2. Click "Connect Data Sources" → "Web"
3. Name your pixel (e.g., "My Business - Website Pixel")
4. Enter your website URL
5. Copy your Pixel ID (a 15-16 digit number)

### Step 2: Install the Base Code

**Option A: Manual Installation**
Add this code to the \`<head>\` section of every page on your website:

\`\`\`html
<!-- META Pixel Code -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'YOUR_PIXEL_ID');
  fbq('track', 'PageView');
</script>
<!-- End META Pixel Code -->
\`\`\`

**Option B: Google Tag Manager (Recommended)**
1. Create a new tag → Custom HTML
2. Paste the pixel code above
3. Trigger: All Pages
4. Publish

**Option C: Platform-Specific**
Most platforms have built-in pixel integration:
- Shopify: Settings → Customer Events
- WordPress: Use "PixelYourSite" plugin
- Wix: Settings → Integrations → Facebook Pixel
- Page builders like [Nexova](https://nexova.my), Carrd: Settings → Tracking Code

### Step 3: Verify Installation
Use the **META Pixel Helper** Chrome extension to verify your pixel is firing correctly:
1. Install the extension from Chrome Web Store
2. Visit your website
3. Click the extension icon — it should show your pixel ID and "PageView" event

## Setting Up Conversion Events

Beyond PageView, set up these standard events:

### For E-Commerce:
\`\`\`javascript
// Product page viewed
fbq('track', 'ViewContent', {
  content_name: 'Product Name',
  content_ids: ['SKU123'],
  content_type: 'product',
  value: 49.90,
  currency: 'MYR'
});

// Added to cart
fbq('track', 'AddToCart', {
  content_ids: ['SKU123'],
  content_type: 'product',
  value: 49.90,
  currency: 'MYR'
});

// Purchase completed
fbq('track', 'Purchase', {
  content_ids: ['SKU123'],
  content_type: 'product',
  value: 49.90,
  currency: 'MYR'
});
\`\`\`

### For Lead Generation:
\`\`\`javascript
// Form submitted
fbq('track', 'Lead', {
  content_name: 'Contact Form',
  value: 0,
  currency: 'MYR'
});

// Consultation booked
fbq('track', 'Schedule', {
  content_name: 'Free Consultation'
});
\`\`\`

### For Content/Blog:
\`\`\`javascript
// Article read (fire after scroll depth)
fbq('track', 'ViewContent', {
  content_name: 'Article Title',
  content_category: 'Blog'
});
\`\`\`

## The Conversions API (CAPI)

The pixel alone only captures 60-80% of conversions due to browser privacy features and ad blockers. The Conversions API sends event data directly from your server to META.

### Why CAPI Matters for Malaysian Businesses
- iOS users (30%+ of Malaysian mobile users) have limited pixel tracking
- Ad blockers are growing in usage
- CAPI + Pixel together capture 95%+ of conversions

### Setting Up CAPI
For most Malaysian businesses, the easiest way is through your platform:
- **Shopify:** Automatic CAPI integration in Facebook channel app
- **WordPress/WooCommerce:** Use PixelYourSite Pro (RM200 one-time)
- **Custom websites:** Use META's CAPI Gateway or server-side GTM

## Testing Your Pixel Setup

### Test Events Tool
1. Go to Events Manager → Test Events
2. Enter your website URL
3. Perform actions (view product, add to cart, purchase)
4. Verify events appear in real-time

### Event Match Quality
Check your Event Match Quality score in Events Manager. Aim for:
- 6.0+ Good
- 8.0+ Excellent

Improve match quality by sending additional parameters: email, phone, city, state.

## Common Pixel Mistakes

1. **Pixel fires multiple times** on one page load — check for duplicate code
2. **Wrong currency** — make sure you're using 'MYR' not 'USD'
3. **Not using CAPI** — you're losing 20-40% of conversion data
4. **Not testing events** — always verify in Events Manager before launching campaigns
5. **Pixel on wrong pages** — ensure it's on ALL pages, not just the homepage
    `,
    faq: [
      {
        question: 'Do I need the Facebook Pixel if I use Instagram ads only?',
        answer:
          'Yes. The META Pixel works across all META platforms (Facebook, Instagram, Messenger, Audience Network). It is essential for tracking conversions regardless of which platform your ads run on.',
      },
      {
        question: 'Is the Facebook Pixel free?',
        answer: 'Yes, the META Pixel is completely free. There is no cost to create, install, or use it.',
      },
    ],
  },

  {
    slug: 'facebook-ads-vs-google-ads-malaysia',
    title: 'Facebook Ads vs Google Ads: Which Is Better for Malaysian Businesses?',
    excerpt:
      'A data-driven comparison of META and Google advertising for the Malaysian market. When to use each platform and how to allocate your budget.',
    category: 'Strategy',
    readTime: '9 min read',
    date: 'February 8, 2026',
    dateISO: '2026-02-08',
    author: 'Aiman Rizq',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&h=600&fit=crop',
    keywords: [
      'facebook ads vs google ads',
      'meta vs google advertising',
      'digital advertising malaysia',
      'which ads platform to choose',
    ],
    content: `
## The Fundamental Difference

Understanding when to use each platform comes down to one concept: **intent vs. discovery**.

- **Google Ads** captures existing demand — people searching for solutions
- **Facebook Ads** creates new demand — people discovering products/services they didn't know they needed

Both are powerful. But they serve different purposes.

## Head-to-Head Comparison for Malaysia

| Factor | Facebook Ads | Google Ads |
|---|---|---|
| Best for | Awareness + discovery | High-intent capture |
| Malaysian users | 26M+ (Facebook + IG) | 29M+ (Google Search) |
| Average CPC | RM0.30 – RM2.50 | RM1.00 – RM15.00 |
| Average CPM | RM8 – RM30 | RM15 – RM80 |
| Learning curve | Moderate | Steep |
| Visual creative | Essential | Optional (search) |
| Targeting | Demographics + interests + behaviour | Keywords + intent |
| Retargeting | Excellent | Good |
| Mobile reach | Outstanding | Good |
| Setup time | 1-2 hours | 3-5 hours |

## When Facebook Ads Win

### 1. Brand Awareness
When no one is searching for your product yet (new brands, innovative products), Facebook creates demand by putting your product in front of the right people.

### 2. Visual Products
Products that sell through visuals — fashion, beauty, food, home decor — perform exceptionally on Facebook and Instagram. The visual-first platform naturally showcases these products.

### 3. Impulse Purchases Under RM200
Low-consideration purchases where the buyer doesn't need to research extensively. They see it, they want it, they buy it.

### 4. Local Businesses
Restaurants, salons, gyms, and local services benefit from Facebook's geographic targeting and community-building features. A restaurant can target food lovers within 5km and show mouth-watering photos.

### 5. Lead Generation for Services
Facebook's Instant Forms generate leads at significantly lower costs than Google Ads landing pages for most service businesses in Malaysia.

## When Google Ads Win

### 1. High-Intent Services
When someone searches "plumber near me" or "divorce lawyer KL," they need the service NOW. Google captures this intent; Facebook can't.

### 2. B2B with Long Sales Cycles
Enterprise software, industrial equipment, professional services — these buyers research extensively on Google before making decisions.

### 3. High-Ticket Products (RM1,000+)
Expensive purchases like electronics, furniture, and property require research. Google captures the research phase.

### 4. Competitive Industries with Clear Search Volume
If people are actively Googling your service (e.g., "accounting firm Petaling Jaya"), Google Ads puts you at the top of results immediately.

### 5. Emergency Services
Locksmith, towing, emergency plumbing — urgency-driven searches where the buyer converts immediately.

## The Malaysian Market Reality

In Malaysia specifically, here's what the data shows:

**Facebook Ads tend to outperform for:**
- F&B businesses (restaurants, cafes, food delivery)
- Beauty and personal care
- Fashion and apparel
- Education and courses
- Event promotion
- Real estate lead generation

**Google Ads tend to outperform for:**
- Professional services (legal, accounting, consulting)
- Healthcare (clinics, dental, specialist)
- Home services (renovation, air-con, pest control)
- Automotive (workshops, spare parts)
- B2B services
- Travel and hospitality (hotel bookings)

## The Ideal Budget Split

For most Malaysian SMBs, the optimal split depends on your business stage:

**Early Stage (Brand Building):**
- Facebook: 70% | Google: 30%
- Focus on awareness and audience building on META
- Use Google for high-intent keywords only

**Growth Stage (Scaling Revenue):**
- Facebook: 50% | Google: 50%
- Full-funnel Facebook (awareness → retargeting)
- Expanded Google (search + display + YouTube)

**Mature Stage (Market Dominance):**
- Facebook: 40% | Google: 40% | Others: 20%
- Retention and LTV focus on both platforms
- Explore TikTok, LinkedIn, or programmatic for the remaining 20%

## Using Both Platforms Together

The real power comes from using Facebook and Google together:

1. **Facebook for awareness** → Google for capture
   - Run brand awareness on META → people search your brand on Google → you capture them with branded search ads

2. **Google for data** → Facebook for scaling
   - Use Google Search data to identify what people are looking for → create Facebook campaigns targeting those interests at lower CPMs

3. **Cross-platform retargeting**
   - Someone clicks a Google ad but doesn't convert → retarget them on Facebook with social proof and testimonials

## The Bottom Line

Don't think of it as Facebook vs. Google. Think of it as Facebook AND Google, each playing a different role in your customer journey. Start with whichever platform better suits your immediate business needs, then expand to the other once you're profitable.
    `,
    faq: [
      {
        question: 'Which is cheaper — Facebook Ads or Google Ads in Malaysia?',
        answer:
          'Facebook Ads generally have lower CPCs (RM0.30-RM2.50) compared to Google Ads (RM1.00-RM15.00). However, Google Ads often deliver higher-intent traffic that converts better. The true comparison is cost per conversion, not cost per click.',
      },
      {
        question: 'Can I run both Facebook and Google ads at the same time?',
        answer:
          'Yes, and you should. Using both platforms together creates a full-funnel strategy where Facebook builds awareness and Google captures high-intent searches. This combination typically outperforms either platform alone.',
      },
    ],
  },

  {
    slug: 'facebook-ads-f-and-b-restaurant-malaysia',
    title: 'Facebook Ads for Malaysian Restaurants & F&B Businesses',
    excerpt:
      'Drive more dine-in customers, delivery orders, and catering enquiries with proven META advertising strategies for F&B in Malaysia.',
    category: 'Industry',
    readTime: '9 min read',
    date: 'February 1, 2026',
    dateISO: '2026-02-01',
    author: 'Aiman Rizq',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop',
    keywords: [
      'facebook ads restaurant malaysia',
      'f&b advertising',
      'restaurant marketing malaysia',
      'food business facebook ads',
    ],
    content: `
## Why Facebook Ads Are Perfect for Malaysian F&B

Food is deeply embedded in Malaysian culture. We don't just eat — we photograph, share, review, and debate food constantly on social media. This makes META platforms the ideal advertising channel for F&B businesses.

Key stats:
- 73% of Malaysians discover new restaurants through social media
- Food-related content gets 3x more engagement than other categories in Malaysia
- Average CPC for F&B ads in Malaysia is just RM0.40-RM1.20

## The Three Campaigns Every Restaurant Needs

### Campaign 1: Reach & Awareness (Always On)

**Objective:** Reach
**Targeting:** 5-15km radius around your restaurant location
**Budget:** RM15-30/day
**Creative:** Mouthwatering food photography or short video of cooking process

This campaign ensures local residents consistently see your restaurant in their feed. Treat it as digital signage — always running, always visible to your neighbourhood.

### Campaign 2: Promotion Campaigns (Seasonal)

**Objective:** Traffic or Conversions
**Targeting:** Local radius + interests (foodies, restaurant goers, cuisine-specific)
**Budget:** RM50-100/day during promotions
**Creative:** Clear offer with urgency

Run these for specific promotions:
- Ramadan buffet packages
- CNY reunion dinner sets
- Weekday lunch deals
- New menu launches
- Opening specials

### Campaign 3: Delivery & Online Orders

**Objective:** Conversions
**Targeting:** Wider radius (up to 20km) + food delivery app users
**Budget:** RM20-50/day
**Creative:** Product-focused with pricing and ordering CTA

## Food Photography That Converts

Your food photos are your ads. Here's how to shoot them:

### Smartphone Photography Tips
1. **Natural light only** — shoot near windows, never use flash
2. **Overhead angle (flat lay)** — best for platted dishes, nasi campur, multi-dish spreads
3. **45-degree angle** — best for burgers, noodle soups, drinks with height
4. **Props matter** — use chopsticks, banana leaves, sambal belacan, traditional elements
5. **Steam and sizzle** — shoot hot food immediately, capture the steam

### Video Content Ideas
- **Cooking process** — 15-second "from kitchen to table" (perfect for Reels)
- **Plating montage** — satisfying close-ups of food being arranged
- **Customer reactions** — genuine first-bite reactions
- **Behind the scenes** — chef at work, morning market sourcing
- **Food ASMR** — sizzling satay, crunchy ayam goreng

## Ad Copy Templates for Malaysian F&B

### Dine-In Promotion
"[Dish Name] yang you cari ada dekat [Restaurant Name]!
Freshly made every day, using [special ingredient/method].
[Location]
Open [hours]
Book your table: [link/WhatsApp]"

### Delivery Promotion
"Lapar tapi malas keluar?
Order [Dish Name] terus ke rumah anda.
Free delivery untuk area [Location]
Ready dalam 30 minit
Order sekarang: [link]"

### Ramadan Special
"Berbuka puasa jangan lupa [Restaurant Name]!
Kami ada special Ramadan buffet: [Price]
- [Menu highlight 1]
- [Menu highlight 2]
- [Menu highlight 3]
[Location]
Booking: [link] — tempat terhad!"

## Local Targeting Strategies

### Radius Targeting
- **Dine-in:** 5-10km radius (walking/short drive distance)
- **Delivery:** 10-20km radius (delivery coverage area)
- **Catering:** State-wide or multi-state

### Time-of-Day Targeting
- **Breakfast spots:** 6am-10am
- **Lunch promotions:** 10am-1pm
- **Tea time / snacks:** 2pm-5pm
- **Dinner:** 4pm-8pm
- **Supper (mamak):** 9pm-2am

### Weather-Based Strategy
Rainy days = more delivery orders. Have a "rainy day special" campaign ready to activate during monsoon season (November-March for West Malaysia).

## Measuring F&B Ad Performance

Track these F&B-specific metrics:

| Metric | How to Track | Target |
|---|---|---|
| Store visits | META's store visit tracking | 50+ per week |
| WhatsApp messages | CTA clicks | 10+ per day |
| Website orders | Pixel purchase event | Varies |
| Table bookings | Lead form / website | 5+ per day |
| Cost per store visit | Ad spend ÷ visits | < RM5 |

## Common F&B Advertising Mistakes

1. **Using menu photos as ads** — menus are not designed for social media; they look terrible in feeds
2. **No clear CTA** — every ad must tell people what to do (order, book, visit)
3. **Ignoring reviews** — negative Google/Facebook reviews kill ad performance. Fix reviews first, then advertise
4. **Running the same ad for months** — food content needs constant refreshing
5. **Not tracking offline conversions** — use coupon codes or "mention this ad" to track dine-in from ads
    `,
    faq: [
      {
        question: 'How much should a restaurant spend on Facebook ads in Malaysia?',
        answer:
          'Most Malaysian restaurants get good results with RM1,500-RM3,000 per month. Start with RM500/month for a small café. Larger restaurant chains should budget RM5,000+.',
      },
      {
        question: 'What type of food content performs best on Facebook?',
        answer:
          'Short cooking videos (15-30 seconds) consistently outperform static photos. Close-up shots of food with steam, sizzling sounds, and vibrant colours get the highest engagement with Malaysian audiences.',
      },
    ],
  },

  {
    slug: 'meta-advantage-plus-campaigns-explained',
    title: 'META Advantage+ Campaigns: How AI Is Changing Facebook Ads',
    excerpt:
      'Understanding META\'s AI-powered Advantage+ features and how Malaysian businesses can use them for better results with less manual work.',
    category: 'Strategy',
    readTime: '7 min read',
    date: 'January 25, 2026',
    dateISO: '2026-01-25',
    author: 'Aiman Rizq',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
    keywords: [
      'advantage plus campaigns',
      'meta ai advertising',
      'facebook automated ads',
      'advantage+ shopping malaysia',
    ],
    content: `
## What Is Advantage+?

Advantage+ is META's suite of AI-powered advertising tools that automate campaign creation, targeting, and optimisation. Instead of manually selecting audiences and placements, Advantage+ uses machine learning to find the best combination for your goals.

Think of it as META saying: "Give us your creative and budget, and we'll figure out the rest."

## The Advantage+ Suite

### Advantage+ Shopping Campaigns (ASC)
The headline feature for e-commerce. ASC replaces the traditional campaign structure with a single, AI-driven campaign that:

- Tests up to 150 creative combinations automatically
- Finds audiences across all of META's platforms
- Optimises for purchases without manual audience targeting
- Splits budget between prospecting and retargeting automatically

**Results in Malaysia:**
Malaysian e-commerce businesses using ASC report 15-30% lower cost per acquisition compared to manually targeted campaigns.

### Advantage+ Audience
Available for all campaign objectives. Instead of defining custom audiences, you provide "audience suggestions" and META expands or contracts targeting based on performance.

**How it works:**
1. You provide initial targeting suggestions (interests, demographics)
2. META uses these as a starting point
3. The AI expands beyond your suggestions to find additional converters
4. Over time, the algorithm learns who converts best for your business

### Advantage+ Placements
Automatically allocates your budget across all available placements:
- Facebook Feed, Stories, Reels
- Instagram Feed, Stories, Reels, Explore
- Messenger Inbox, Stories
- Audience Network

**Should you use it?** Yes, for most campaigns. META's data shows that Advantage+ Placements delivers 10-15% lower cost per result compared to manual placement selection.

### Advantage+ Creative
Enhances your ad creative automatically:
- Adjusts aspect ratios for different placements
- Adds music to static images
- Creates text variations
- Enhances image brightness and contrast
- Adds relevant labels to products

## When to Use Advantage+ (and When Not To)

### Use Advantage+ When:
- You have at least 50+ conversions per week (more data = better AI)
- Your pixel or CAPI is properly installed
- You have multiple creative assets to test
- You want to scale beyond your current audiences

### Don't Use Advantage+ When:
- Brand new ad account with no conversion data
- You need strict audience control (e.g., geographic restrictions for local businesses)
- You're testing specific audiences and need clear segmentation
- You have very limited budget (under RM30/day)

## Setting Up Your First Advantage+ Campaign

### For E-Commerce (ASC):
1. Select Sales objective → Advantage+ Shopping Campaign
2. Set your country (Malaysia) and daily budget
3. Upload 5-10 creative variations (mix of images, videos, carousels)
4. Set your attribution window (7-day click recommended)
5. Launch and wait at least 7 days before judging

### For Lead Generation:
1. Select Leads objective
2. At audience level, switch to Advantage+ Audience
3. Add your suggestions (e.g., small business owners, Klang Valley)
4. Create 3-4 ad variations
5. Enable Advantage+ Creative enhancements

## Optimising Advantage+ Campaigns

### The 3-7-14 Rule
- **Day 3:** Check for any red flags (very high CPC, zero conversions)
- **Day 7:** First meaningful performance review
- **Day 14:** Make major decisions (scale, adjust, or kill)

### What You Control:
- **Creative quality** — still the #1 performance lever
- **Budget** — increase by max 20% per day when scaling
- **Product catalogue** — for ASC, ensure your catalogue is up-to-date
- **Landing page experience** — AI can't fix a bad website

### What You Don't Control:
- Audience selection (AI decides)
- Placement distribution (AI decides)
- Budget allocation between prospecting/retargeting (AI decides)
- Bid amounts (AI decides)

## The Future of Facebook Ads

META is clearly moving toward full automation. Within 2-3 years, expect:
- Manual targeting options to shrink further
- Creative and messaging to become the primary differentiator
- AI-generated ad copy and creative at scale
- Cross-platform optimisation (Facebook + Instagram + Threads + WhatsApp)

The advertisers who will thrive are those who master creative strategy, build strong brand narratives, and provide the AI with the best possible inputs. The days of winning through targeting hacks are over.
    `,
    faq: [
      {
        question: 'Is Advantage+ better than manual campaigns?',
        answer:
          'For most Malaysian businesses with sufficient conversion data (50+ per week), Advantage+ delivers 15-30% better results. However, new advertisers with limited data may get better results from manual campaigns initially.',
      },
      {
        question: 'Can I still target specific audiences with Advantage+?',
        answer:
          'With Advantage+ Audience, you provide "suggestions" but META can go beyond them. If you need strict audience control, use the original manual targeting options instead.',
      },
    ],
  },

  {
    slug: 'facebook-ads-raya-sales-campaign-malaysia',
    title: 'How to Plan a Hari Raya Sales Campaign on Facebook Ads',
    excerpt:
      'Step-by-step guide to planning, launching, and optimising your Raya advertising campaign for maximum sales in Malaysia.',
    category: 'Seasonal',
    readTime: '8 min read',
    date: 'January 18, 2026',
    dateISO: '2026-01-18',
    author: 'Aiman Rizq',
    image: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=800&h=600&fit=crop',
    keywords: [
      'hari raya facebook ads',
      'raya campaign facebook',
      'ramadan advertising malaysia',
      'festive season ads malaysia',
    ],
    content: `
## The Raya Advertising Calendar

Hari Raya Aidilfitri is the biggest shopping season in Malaysia. Online spending during the Raya period exceeds even 11.11 and 12.12 sales. Planning your campaign early is essential.

### Timeline:

**8 Weeks Before Ramadan: Planning Phase**
- Finalise offers and promotions
- Plan ad creative (photoshoots, video production)
- Build or update your landing pages
- Set up tracking and conversion events

**4 Weeks Before Ramadan: Pre-Ramadan Awareness**
- Launch teaser campaigns
- Build anticipation with "coming soon" content
- Start growing your retargeting audiences
- Budget: 20% of total Raya ad spend

**Ramadan Month: Active Selling**
- Full promotional campaigns live
- Peak spending is during the last 2 weeks of Ramadan
- Daily budget increases as Raya approaches
- Budget: 60% of total Raya ad spend

**1 Week After Raya: Post-Raya Extension**
- "Extended Raya Sale" campaigns
- Target those who missed the sale
- Clearance offers for remaining stock
- Budget: 20% of total Raya ad spend

## Ramadan-Specific Ad Strategies

### Timing Your Ads During Ramadan

**Best ad delivery times during Ramadan:**
- 3pm-6pm (pre-iftar browsing — people are resting and scrolling)
- 8pm-11pm (post-iftar — peak social media usage)
- 2am-4am (sahur period — surprisingly high engagement)

**Avoid:**
- 12pm-2pm (lowest engagement, people conserving energy)
- 7pm-8pm (iftar — everyone is eating, not browsing)

### Creative Themes That Resonate

**Emotional themes:**
- Family reunion ("Balik kampung, jumpa keluarga")
- Gratitude and reflection
- Generosity and giving (zakat, charity)
- New beginnings (baju baru, rumah bersih)

**Shopping themes:**
- Baju Raya (clothing and fashion)
- Home decoration (curtains, furniture, tableware)
- Food preparation (kuih, rendang, ketupat materials)
- Gifting (hampers, duit Raya packets)
- Travel (balik kampung, road trips)

### Creative Do's and Don'ts

**Do:**
- Use green, gold, and purple colour schemes
- Include Islamic patterns and motifs sensitively
- Show multi-generational family scenes
- Use Bahasa Malaysia for wider reach
- Include a sense of warmth and togetherness

**Don't:**
- Use religious imagery in promotional ads
- Show inappropriate content during holy month
- Be overly commercial — balance promotion with respect for the season
- Use countdown timers during Ramadan (can feel insensitive)

## Campaign Structure for Raya

### Campaign 1: Raya Collection Showcase
**Objective:** Traffic or Sales
**Format:** Carousel or Collection ad
**Message:** "Koleksi Raya 2026 — [Brand]. Baju Raya untuk sekeluarga."
**Audience:** Broad females 18-55 (for fashion) or interest-based

### Campaign 2: Flash Sales (Last 2 Weeks of Ramadan)
**Objective:** Sales
**Format:** Single image with clear offer
**Message:** "RAYA SALE — Sehingga 50% OFF. Limited time only."
**Audience:** Website visitors + lookalikes + broad

### Campaign 3: Last Minute Shoppers
**Objective:** Sales
**Format:** Reels or Stories (urgency-driven)
**Message:** "Belum shopping Raya lagi? Tak terlambat! Fast delivery guaranteed."
**Audience:** Cart abandoners + engaged users
**Timing:** Final week before Raya

### Campaign 4: Post-Raya Clearance
**Objective:** Sales
**Format:** Dynamic Product Ads
**Message:** "Extended Raya deals. Final markdowns on everything."
**Audience:** Past visitors + past purchasers

## Budget Guide for Raya Campaigns

| Business Size | Total Raya Budget | Recommendation |
|---|---|---|
| Small (solo/micro) | RM1,000-RM3,000 | Focus on Campaigns 1 & 3 |
| Medium (SMB) | RM3,000-RM15,000 | Run all 4 campaigns |
| Large (enterprise) | RM15,000-RM100,000+ | Full-funnel with video production |

### Daily Budget Distribution:
- Pre-Ramadan (4 weeks): RM30-50/day
- Early Ramadan (2 weeks): RM50-100/day
- Peak Ramadan (2 weeks): RM100-300/day
- Raya week: RM200-500/day (highest competition, highest conversions)
- Post-Raya (1 week): RM50-100/day

## Measuring Raya Campaign Success

Compare these metrics year-over-year:
- Total revenue attributed to ads
- ROAS (target 3x minimum)
- New customer acquisition rate
- Average order value (usually higher during Raya)
- Email/WhatsApp list growth

## Pro Tips for Malaysian Advertisers

1. **Start early** — the best CPMs are 6-8 weeks before Raya. Costs spike in the final 2 weeks.
2. **Stock your catalogue** — ensure products are available before promoting. Nothing kills a Raya campaign like "out of stock."
3. **Prepare for COD** — many Raya shoppers, especially in rural areas, prefer cash on delivery.
4. **Plan for logistics** — factor in delivery delays during Raya week. Communicate clearly in your ads.
5. **Build your list** — use Raya as an opportunity to collect emails and WhatsApp contacts for year-round marketing.
    `,
    faq: [
      {
        question: 'When should I start my Hari Raya Facebook ad campaign?',
        answer:
          'Start planning 8 weeks before Ramadan, and launch awareness campaigns 4 weeks before Ramadan begins. The most active selling period is during Ramadan itself, with peak spending in the final 2 weeks.',
      },
      {
        question: 'What is the best time to run Facebook ads during Ramadan?',
        answer:
          'The best times are 3pm-6pm (pre-iftar browsing), 8pm-11pm (post-iftar peak), and 2am-4am (sahur browsing). Avoid 7pm-8pm when most people are breaking fast.',
      },
    ],
  },

  {
    slug: 'shopee-seller-facebook-ads-own-store',
    title: 'From Shopee to Your Own Store: Using Facebook Ads to Break Free',
    excerpt:
      'Why Malaysian Shopee sellers should build their own online store and use Facebook ads to drive direct sales for higher margins.',
    category: 'E-Commerce',
    readTime: '10 min read',
    date: 'January 10, 2026',
    dateISO: '2026-01-10',
    author: 'Aiman Rizq',
    image: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800&h=600&fit=crop',
    keywords: [
      'shopee to own store',
      'build online store malaysia',
      'leave shopee start own website',
      'facebook ads for own store',
    ],
    content: `
## The Shopee Trap

Let's be honest: Shopee is a great starting point for Malaysian sellers. Easy setup, built-in traffic, trusted payment systems. But as your business grows, Shopee becomes a trap:

- **Commission fees:** 3-6% per transaction (eating your margins)
- **Advertising costs:** Shopee Ads getting more expensive every year
- **No customer data:** You don't own your customer list
- **Race to the bottom:** Competing purely on price with identical products
- **Algorithm dependency:** One algorithm change can destroy your sales overnight
- **No brand building:** Customers remember Shopee, not your brand

## The Math That Changes Everything

Let's compare a RM100 product:

### Selling on Shopee:
- Selling price: RM100
- Commission fee (5%): -RM5
- Transaction fee (2%): -RM2
- Shipping voucher subsidy: -RM3
- Shopee Ads (to stay visible): -RM10
- **Net per sale: RM80**
- Plus: You don't get customer email/phone for remarketing

### Selling on Your Own Store via Facebook Ads:
- Selling price: RM100
- Facebook ad cost per acquisition: -RM15
- Payment gateway fee (1.5%): -RM1.50
- **Net per sale: RM83.50**
- Plus: You own the customer data and can remarket for free

The margins look similar, but the long-term value is incomparable. With your own store, every customer becomes a repeat purchase opportunity through email, WhatsApp, and retargeting — at zero additional acquisition cost.

## Building Your Own Store (The Quick Way)

You don't need to hire a developer or spend months building a website. Here are the fastest options for Malaysian sellers:

### For Single Product/Service:
- **Landing page builders** — [Nexova](https://nexova.my), Carrd, or Leadpages
- Best for: Testing a product before committing to a full store
- Setup time: 1-2 hours
- Cost: Free to RM50/month

### For Small Catalogue (5-50 Products):
- **Shopify** — most popular, extensive app ecosystem
- Setup time: 1-2 days
- Cost: RM100-300/month

### For Large Catalogue (50+ Products):
- **WooCommerce** (WordPress) — most flexible, lower recurring costs
- Setup time: 3-7 days
- Cost: RM50-150/month + hosting

## The Transition Strategy

Don't abandon Shopee overnight. Here's a smart transition plan:

### Phase 1: Build (Week 1-2)
1. Set up your own store with your best-selling products
2. Install META Pixel on your store
3. Set up a Malaysian payment gateway (Billplz, Revenue Monster, Stripe)
4. Create a simple brand identity (logo, colours, packaging)

### Phase 2: Test (Week 3-6)
1. Run Facebook ads to your own store for just 2-3 top products
2. Start with RM30-50/day
3. Compare conversion rates and margins vs. Shopee
4. Collect customer emails and WhatsApp numbers

### Phase 3: Scale (Week 7-12)
1. Add more products to your store
2. Build email and WhatsApp marketing sequences
3. Increase ad budget on winning products
4. Start reducing Shopee ad spend on products performing well on your store

### Phase 4: Optimise (Month 4+)
1. Launch retargeting campaigns (website visitors, cart abandoners)
2. Create lookalike audiences from your buyers
3. Add upsells, bundles, and subscription options (not possible on Shopee)
4. Consider stopping Shopee for products with strong direct sales

## Facebook Ad Campaigns for Your New Store

### Campaign 1: Best-Seller Push
Take your top 3 Shopee products and run conversion campaigns:
- Use your existing Shopee reviews as social proof
- Competitive pricing (match or beat Shopee price)
- Free shipping (crucial for Malaysian shoppers)
- WhatsApp as secondary CTA for questions

### Campaign 2: Exclusives
Create products or bundles exclusive to your own store:
- "Only available on our website"
- Bundle deals not possible on Shopee (e.g., buy 2 get 1 free)
- Personalisation options (engraving, custom messages)
- Subscription offers (monthly boxes, refills)

### Campaign 3: Retargeting
Once you have pixel data, retarget:
- Product viewers who didn't buy
- Cart abandoners (with discount incentive)
- Past buyers (new products, cross-sells)

## Handling Customer Objections

Malaysian shoppers may hesitate to buy from an unknown website. Address these concerns:

**"Is it safe?"**
- Display SSL certificate badge
- Show payment gateway logos (Visa, Mastercard, FPX)
- Add a money-back guarantee

**"How do I know it's legit?"**
- Link to your Shopee store as social proof
- Display customer reviews and ratings
- Show number of orders fulfilled

**"What about shipping?"**
- Offer free shipping above RM50
- Partner with reliable couriers (J&T, Pos Laju, DHL eCommerce)
- Provide tracking for every order

**"Can I pay with [preferred method]?"**
- Support FPX (online banking) — most popular in Malaysia
- Credit/debit cards
- eWallet (Touch 'n Go, Boost, GrabPay)
- Cash on delivery (for certain products/areas)

## The Long-Term Advantage

In 12 months, here's what you'll have that Shopee sellers don't:

1. **Customer database** — email and WhatsApp list of buyers
2. **Brand equity** — customers know YOUR brand, not just "a Shopee seller"
3. **Retargeting audiences** — pixel data for profitable ad campaigns
4. **Higher margins** — no marketplace commissions
5. **Full control** — your pricing, your rules, your customer experience
6. **Sellable asset** — an independent e-commerce brand is worth more than a Shopee account

The transition isn't easy, but every successful Malaysian DTC brand started by making this exact move.
    `,
    faq: [
      {
        question: 'Should I completely stop selling on Shopee?',
        answer:
          'Not immediately. Use Shopee as a complementary channel while building your own store. Gradually shift your best-performing products to your own store as your direct sales grow. Many successful Malaysian brands maintain both channels.',
      },
      {
        question: 'How much does it cost to build my own online store?',
        answer:
          'You can start with a free or low-cost landing page ([Nexova](https://nexova.my), Carrd) for RM0-50/month. A full Shopify store costs RM100-300/month. WooCommerce is RM50-150/month plus hosting. Most Malaysian sellers start profitable within the first month.',
      },
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export const categories = [...new Set(articles.map((a) => a.category))];
