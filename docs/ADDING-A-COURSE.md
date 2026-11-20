# Adding a course page

Two ways in: **import it from the UI/UX design** (below, fastest) or **scaffold a blank page** (section 1).

## Import from the design

Download the design files (`Course-*.dc.html`) into a folder, then:

```bash
npm run course:import -- <design-folder> Course-Power-BI Course-Salesforce
npm run course:compare -- <design-folder> http://localhost:3001 Course-Power-BI Course-Salesforce
npm run course:check
```

- `course:import` writes `src/content/courses/<slug>.ts` and registers it. The slug for each design file comes from
  `scripts/design-routes.json` (add a line there for a new design file). It stops with a clear message if a page does not
  follow the course template. Use `--force` to overwrite an existing page.
- If the course is new, add a row for it in `src/data/courses.ts` (the importer tells you).
- `course:compare` checks, word for word, that the site shows everything the design shows.
- The byline (curriculum author, updated date) in the designs is intentionally not imported.

A course page is **content only**. You write one file; the shared template renders the whole page
(hero, enquiry form, batches, syllabus, projects, jobs table, reviews, FAQ, CTA) in the site theme,
and the page's title, canonical, Course + Breadcrumb + FAQ schema, sitemap entry and course-list card
are produced automatically.

## 1. Create it

```bash
npm run course:new -- kubernetes-admin "Kubernetes Administration" --cat cloud
```

- `kubernetes-admin` becomes the URL `/courses/kubernetes-admin` (lowercase words, hyphens).
- `--cat` is the track filter on `/courses`: `dev`, `cloud`, `data`, `test` or `design`.
  Add `--track "Networking"` to override the label shown on the page.

This creates:

| File | What it is |
| --- | --- |
| `src/content/courses/<slug>.ts` | The page content (fill this in) |
| `src/content/courses/index.ts` | Registry line (added for you) |
| `src/data/courses.ts` | The course-list card row (fix its code, outcome, duration, level) |

## 2. Fill it in

Open `src/content/courses/<slug>.ts`. Every value you still have to write is a `[bracketed placeholder]`.
The field types are documented in `src/content/course-types.ts`, and your editor flags anything missing
or misspelled. Text fields accept `**bold**` and `\n` for a line break.

Writing guide (it is what search and AI answer engines quote):

- `hero.lead` and `whatis.definition`: answer first, 40 to 60 words.
- FAQs: one direct sentence first, then detail. Keep 6 to 10.
- Use real numbers from the syllabus (hours, sessions, projects). Do not invent salaries or reviews.
- `related`: link to real routes; use `"#"` only until the target page exists.

## 3. Check it

```bash
npm run course:check        # structure, SEO lengths, links, duplicates
npm run check:placeholders  # lists every [placeholder] left, by file and line
```

Then open `http://localhost:3001/courses/<slug>`.

`npm run build` runs both checks first and stops while errors or placeholders remain.
For a preview-only build: `ALLOW_PLACEHOLDERS=1 npm run build`.

## 4. After launch

- Add the page to `public/llms.txt` (the course list there is generated from `src/data/courses.ts`).
- If the course existed on WordPress under a different URL, add a 301 in `src/data/redirects.ts`.
- Real images: drop files named as the on-page placeholders say into `public/images/`.

## Editing the layout for every course

The layout lives in one place: `src/components/course/CoursePageView.tsx`. Change it once and all
course pages update. To add a new kind of section, add the field to `course-types.ts`, render it in
the template, and `tsc` will point out every course file that needs the new field.
