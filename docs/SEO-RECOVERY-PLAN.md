# SEO recovery and migration plan

Based on the Search Console summary of 20 Nov 2026 (baseline: **1,216 clicks, 1.91% CTR, position 14.7**) plus a
read-only inspection of the live site on the same date (sitemaps, robots.txt, headers, page markup, WordPress API).
Facts marked **verified** were checked on the live site; the rest comes from the Search Console report.

## 1. What the live site tells us

| Finding | Evidence | Why it matters |
| --- | --- | --- |
| Canonical host is **`btreesystems.com` (no www)** | Verified: `https://www` returns 301 to apex; canonical and og:url use apex | The new site must use the same host. (It was set to www; fixed 20 Nov.) |
| **64 live course pages** under `/course/<name>-in-chennai/` (singular) | Verified: `course-sitemap.xml` | Google ranks URLs. The new site serves 21 courses at different URLs. Unmapped, they all start from zero. |
| Mid-October drop is **not explained by a content edit** | Verified: course sitemap last changed 14 Apr; the only pages edited that week were `/aws-devops/` (21 Oct) and `/privacy-policy/` (22 Oct) | Look outside page content: Google update, speed, server, plugins, crawl errors (section 3). |
| 13 "page" URLs duplicate a course page's topic | Verified: `/data-analytics/` and `/ui-ux-course/` are separate indexable pages beside the course pages | Pages compete for the same query (cannibalisation), which can pin both on page two. |
| Course pages show **review stars** from `Product` + `AggregateRating` markup | Verified on Data Analytics, UI/UX and AWS pages | 78% of impressions show stars. The new site currently emits none. |
| That markup claims **5.0 from about 38,000 to 43,000 reviews** per course | Verified: 43,412 / 38,642 / 41,673 | See section 4: this needs checking before it is copied anywhere. |
| Live `robots.txt` lists **4 sitemaps, 2 of them on www and 1 dead** | Verified: `/blog/sitemap_index.xml` returns 404 | Mixed-host signals feed the "www duplicate" problem. |
| Blog is a separate install at `/blog/`; WordPress shows **0 posts** in its main API | Verified | Likely source of many of the 61 "not found" URLs. |
| Course pages load **16 scripts, 50+ images, ~400 KB HTML**, plus a third-party script (`flow.rayy.in`) | Verified | Explains the 7.4 s mobile load. The new site must allow only what you keep (CSP). |
| Course content is **not in the WordPress API** (custom type) | Verified: `/wp-json/wp/v2/course` 404 | Content must be crawled or exported (WP admin export), not pulled by API. |

## 2. Fix order

### A. Before launch (do not launch without these)

1. **Keep the live URLs.** Serve each migrated course at its current `/course/<live-slug>/` address (the `path`
   field in `src/data/courses.ts` supports this) and 301 everything else. Map in section 5.
2. **Cover the pages that rank today.** Snowflake, Databricks, Selenium, DevOps, UI/UX (Tamil), RPA, Kubernetes,
   Terraform, Tableau and others have no page in the new site yet (section 5).
3. **Keep review stars, honestly.** Section 4.
4. **One host everywhere.** Done in code (non-www canonical, www 301). Also: fix the live robots.txt sitemap lines,
   submit only `https://btreesystems.com/sitemap.xml`, create a **Domain property** in Search Console, and update
   the website field on Google Business Profile, LinkedIn, YouTube and directories to the non-www address.
5. **Subdomains.** `hrms.btreesystems.com` and `syllabus.btreesystems.com` are indexed. Put the HR system behind a
   login and add `X-Robots-Tag: noindex` on both (their own servers; not part of this repo).
6. **Parameter URL.** `/?taxonomy&term` now 301s to `/` (done in `src/proxy.ts`).

### B. This week, on the current live site

1. **Find the cause of the drop** (section 3).
2. In Search Console, export the **61 "Not found"** URLs and the 21 redirects; add redirects for those with
   backlinks or past clicks, then click **Validate fix**.
3. Fix the redirect chain `http://www` to `https://www` to apex (two hops; should be one).

### C. Weeks 2 to 4: more clicks from the same rankings

1. **Rewrite titles and descriptions** for pages already on page one with near-zero CTR (UI/UX 5.3, Snowflake 3.9,
   Azure 5.1 to 6.5, AWS DevOps 2.0, Azure Data Engineering 7.5). Formula in section 6.
2. **Show fees on the page.** "ui ux design course fees in chennai" ranks 3.9 with no clicks. The course template
   should get a visible fees block (fee, discount, EMI, what is included), not only an FAQ line.
3. **Resolve the 13 duplicate pages** (section 5, table C).

### D. Months 1 to 3: page two to page one

1. Data Analytics first (6,284 impressions at position 15.6), then Selenium, DevOps, Cyber Security, AWS, Salesforce,
   Playwright, RPA and Power BI (all positions 9 to 18, 300 to 1,000 impressions each). Work each page: deeper
   syllabus, projects, fees, placement record, FAQs, internal links from the home page and sibling courses.
2. Mobile speed (mobile gets 2.4x the CTR). Section 7.

## 3. Diagnosing the October drop

The page-content evidence says **nothing relevant changed in the pages**. Things that do not show up in page
modified dates, in the order to check them:

1. **Search Console, Crawl stats** (Settings): response time, crawl errors, host problems around 17 to 25 Oct.
2. **Search Console, Core Web Vitals** (mobile): did the pass rate fall? A slow site loses ground even with unchanged pages.
3. **Search Console, Pages**, 13 Sep to 17 Oct against 18 Oct to 14 Nov: which URLs lost the most position. If
   the loss is across every course, suspect a sitewide cause (update, speed, server). If concentrated, suspect those pages.
4. **Google's Search Status Dashboard**: was a core update rolling out then? I cannot confirm this from here.
5. **Hosting and plugins:** WordPress, theme or plugin updates, a CDN or firewall change, a robots or noindex
   plugin setting, or an expired certificate. Ask whoever hosts the site.
6. **Competitors:** check the top 3 for "data analytics course in chennai" for new pages.

The slide began **before** the migration, so the new site did not cause it and will not by itself reverse it.
Launching adds its own short-term volatility, so launch only with the redirect map ready and watch 4 to 8 weeks.

## 4. Review stars (the biggest asset: 413 clicks from 49,740 impressions)

Google shows stars only for ratings that come from genuine reviews, are visible on the page, and describe that item.
Fabricated or inflated markup can trigger a **manual action** that removes stars from the whole site, which would
cost far more than any other fix here.

- The live markup reports roughly 40,000 reviews per course, for an institute that elsewhere reports 3,750+ students.
  I cannot tell where the figure comes from (a plugin default, a count of something else, or real). **Find out and
  fix it before it is copied to the new site.**
- Plan: show real reviews on each course page (the design already has the section: names, companies, batch) and
  emit `Product` + `AggregateRating` from **that same data**, with the true count and average. Never from a constant.
- Build rule: no `aggregateRating` markup unless the page shows at least that many real reviews. The guard in
  `scripts/check-placeholders.mjs` already blocks launch while review text is still a placeholder.
- Until real data exists, ship Course + FAQ markup only and accept the star loss on day one (it returns once real
  reviews are published and recrawled), rather than ship numbers you cannot defend.

## 5. URL map

### A. Live course pages that already have a new page (keep the live URL)

| Live URL (`/course/...`) | New page today (`/courses/...`) |
| --- | --- |
| python-full-stack-developer-training-in-chennai | python-full-stack |
| java-full-stack-developer-course-in-chennai | java-full-stack |
| mern-stack-training-in-chennai | mern-stack |
| aws-training-in-chennai | aws-training-chennai |
| aws-devops-training-in-chennai | aws-devops-course-chennai |
| azure-training-in-chennai | microsoft-azure |
| azure-devops-training-in-chennai | azure-devops |
| azure-data-engineering-training-in-chennai | azure-data-engineering |
| aws-data-engineering-training-in-chennai | aws-data-engineering |
| google-cloud-data-engineering-course | gcp-data-engineering |
| cyber-security-training-in-chennai | cyber-security |
| data-analytics-course-in-chennai | data-analytics |
| datascience-training-in-chennai | data-science-machine-learning |
| generative-ai-course-training-in-chennai | generative-ai |
| playwright-training-in-chennai | playwright-automation |
| power-automate-training-in-chennai | power-automate |
| powerbi-training-in-chennai | power-bi |
| salesforce-training-in-chennai | salesforce |
| ui-ux-designer-course-in-chennai | ui-ux-design |

New course with no live page: CCNA and CCNP.

### B. Live course pages with NO new page yet (decide: build, merge, or 301)

Priority 1, ranks today (clicks or impressions in the report):
`snowflake-training-in-chennai` (28 clicks, position 7.2), `databricks-training-in-chennai` (24 clicks, 3.4% CTR),
`selenium-training-in-chennai` (1,371 impressions, no clicks), `devops-course-training-in-chennai`,
`ui-ux-designer-course-in-tamil` (34 clicks, position 6.7), `uipath`, `blue-prism`, `automation-anywhere`
(RPA queries total ~370+ impressions), `kubernetes-course-in-chennai`, `terraform-training-in-chennai`,
`tableau-training-in-chennai`, `react-js`, `node-js`, `linux`, `pyspark`, `digital-marketing`,
`dot-net-full-stack-developer`.

Priority 2, little or no traffic (merge or 301 to the closest course):
`ab-initio`, `advanced-java`, `advanced-sas-programming`, `advanced-sql`, `amazon-redshift`, `android`, `angularjs`,
`azure-synapse`, `flutter`, `google-bigquery`, `google-cloud-training`, `ibm-db2`, `informatica`, `mean-stack`
(to MERN), `mobile-appium`, `oracle`, `r-programming`, `teradata`, `uft`.

### C. Duplicate topic pages (301 to the course page, or keep as an informational guide that links to it)

`/data-analytics/`, `/ui-ux-course/`, `/aws-devops/`, `/aws-solution-architect/`, `/azure-data-engineering/`,
`/cyber-security/`, `/data-science/`, `/digital-marketing/`, `/dot-net-full-stack/`, `/java-full-stack/`,
`/mern-stack/`, `/power-bi/`, `/python-full-stack/`. Check each for backlinks first. If one has real links,
301 it; if it is a useful "how to become" guide, keep it but retitle it so it targets a different query.

### D. City pages

`ui-ux-design-course-in-` ahmedabad, bangalore, delhi, hyderabad, mumbai, pune (positions 24 to 38, 2 to 4 clicks each),
coimbatore, madurai, and `aws-devops-training-in-bangalore`. Google treats near-identical city pages as thin
"doorway" content. Keep only cities where you teach or can show genuinely different content (Coimbatore and
Madurai are in Tamil Nadu); 301 the rest to the main course page, which should say "online across India".

### E. Other pages

| Live | New | Action |
| --- | --- | --- |
| `/` | `/` | same |
| `/about-us/`, `/become-an-instructor/`, `/placement-job-portal/`, `/terms-of-use/`, `/privacy-policy/`, `/disclaimer/` | same paths | keep as is. **Protect the job portal**: position 2.6, 68 clicks |
| `/contact-us/` (`/contact/` already 301s here) | `/contact` | 301 `/contact-us` to `/contact` (or keep `/contact-us`) |
| `/corporate-page/` | `/corporate-training` | 301 (already configured) |
| `/course/` | `/courses` | 301 |
| `/optime-hire/`, `/promotion-page/` | none | decide (likely ad landing pages: noindex or keep) |
| `/categories/*` (14 archives) | `/blog/category/*` | 301 to the matching blog track |
| Blog posts under `/blog/` | `/blog/...` | export from Search Console, map by hand; the design's example URLs 404 on the live site today |

Redirects are added in `src/data/redirects.ts`.

## 6. Title and description formula for pages already ranking

Pages at positions 2 to 8 normally earn well over 1% CTR; these earn 0 to 1%. The snippet has to answer
"why this one?" with facts a competitor cannot copy:

- **Title (60 characters or fewer):** `{Course} Course in Chennai | Fees ₹{fee} | Placement | BTree`
- **Description (150 to 160):** `{N}-month {course} course in Chennai: live projects, ₹{fee} (EMI from ₹{emi}/month),
  weekend batches, placement support. Free demo class.`
- Use only verified figures. Add the Google rating only when it is a real, displayed number.
- Drop the `Bestseller ⭐` style emoji titles; Google often rewrites them and they read as spam.
- The fee must also be visible on the page (a fees block), or the snippet over-promises.

## 7. Speed (mobile earns 3.2% CTR against 1.3% on desktop)

The new site is statically generated, so the server side is fast by design. What decides the score now:

- Real images: width and height set, modern formats (AVIF/WebP), the hero image with `priority`.
- Keep third-party scripts out of the first load. Anything you keep (`flow.rayy.in`, Google Tag Manager, Meta pixel)
  must load after the page is interactive and must be allowed in `src/lib/security-headers.ts`.
- One font family (already so), no layout shift from late-loading images.
- Measure on a mid-range phone with Lighthouse and the Search Console Core Web Vitals report. Target: LCP under 2.5 s.

## 8. Tamil pages and local search

- `ui-ux-designer-course-in-tamil` earns 34 clicks and "Translated results" brought 15. Keep a Tamil UI/UX page,
  written in Tamil (not machine-translated), with `lang="ta"` and `hreflang` links between the English and Tamil versions.
- 80% of query clicks are brand searches. Protect that: a complete Google Business Profile (same name, address and
  phone as the site), `sameAs` links in the Organization markup, and reviews.

## 9. Measuring

- Baseline: 1,216 clicks, 1.91% CTR, position 14.7, 102 indexed pages. Re-export monthly.
- Mark the launch date in Search Console (annotation) and compare 4 and 8 weeks later, per page, not just sitewide.
- Use the live (not third-party) numbers from now on, as the report says.
