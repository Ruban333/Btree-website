/**
 * Content contract for a course page.
 *
 * One file per course in `src/content/courses/<slug>.ts` fills this shape and the shared template
 * (`components/course/CoursePageView`) renders the whole page in the site theme.
 * Nothing here is layout: headings, lists, tables and FAQs only.
 *
 * Text fields support two small conveniences:
 *   **bold**   renders bold
 *   \n         renders a line break
 *
 * Anything in [square brackets] is a placeholder; `npm run build` refuses to ship while any remain.
 */

export type Item = { title: string; text: string };

/** One figure in "How long is the course": e.g. { name: "Duration", duration: "4 months" }. No batch timings. */
export type Batch = {
  /** e.g. "Duration" or "Hours of learning" */
  name: string;
  /** The figure, e.g. "4 months" or "160 hours" */
  duration: string;
  /** Optional extra lines under the figure */
  schedule?: string[];
  /** Optional short caption */
  note?: string;
};

export type PipeStep = {
  label: string;
  /** Tools used at this step, e.g. "Docker, Amazon ECR" */
  tools: string;
  /** Show this step in the brand colour (use for the last or key step) */
  highlight?: boolean;
};

export type Module = {
  title: string;
  /** e.g. "10 sessions" */
  sessions: string;
  /** Short paragraph. Use this OR `bullets`. */
  summary?: string;
  bullets?: string[];
};

export type Project = {
  title: string;
  /** Optional one-sentence description; the card shows only the title when absent */
  text?: string;
  /** Tools used, e.g. "Jenkins · Docker · ECR · EKS" (optional; the card is laid out without it when absent) */
  stack?: string;
  /** Alt text for the project image (also drives the image file name) */
  imageAlt: string;
};

/** salary = market average for 0 to 4 years; experienced = 5+ years (optional: shows a second column). */
export type JobRole = { role: string; salary: string; experienced?: string; employers: string };

export type CoursePage = {
  /** URL segment: /courses/<slug>. Must also exist in data/courses.ts. */
  slug: string;
  /** Short name used in headings and links, e.g. "AWS DevOps" */
  name: string;
  /** Track label for the tag and breadcrumb, e.g. "Cloud & DevOps" */
  track: string;

  seo: {
    /** Full <title>, include the "| BTree" suffix */
    title: string;
    /** Meta description, about 150 to 160 characters */
    description: string;
  };

  hero: {
    h1: string;
    /** Answer-first summary: what the course is, how long, what you get. Also used as the schema description. */
    lead: string;
    proof: { score: string; detail: string };
    /** Label of the syllabus download button */
    syllabusButton: string; // keep it short ("Download syllabus"): a long label breaks the hero buttons on phones
    /** Title above the enquiry form, e.g. "Talk to an AWS DevOps advisor" */
    formTitle: string;
    /** Sentence under the form title (default: free counselling and demo class, call back within the hour) */
    formNote?: string;
    /** Submit button label (default "Request a call back") */
    formButton?: string;
  };

  glance: {
    title: string;
    lead: string;
    batches: Batch[];
    /** Cards per row: 2 (default) or 3 */
    columns?: 2 | 3;
  };

  whatis: {
    title: string;
    /** Definition paragraph; bold the course name with **...** */
    definition: string;
    /** Why it matters for jobs (optional second paragraph) */
    why?: string;
    /** Right-hand visual: a pipeline diagram ... */
    pipeline?: { label: string; caption: string; steps: PipeStep[] };
    /** ... or an image. Use one of pipeline or image. */
    image?: { alt: string; caption?: string };
  };

  /** Use items (title + sentence cards) OR bullets (single-sentence checklist cards). */
  outcomes: { title: string; lead: string; items?: Item[]; bullets?: string[] };
  /** note: optional closing sentence under the cards (e.g. a prerequisite) */
  who: { title: string; items: { title: string; text?: string }[]; note?: string };
  /** Use modules (expandable, with sessions and topics) OR list (a numbered list of module titles). */
  curriculum: { title: string; lead: string; modules?: Module[]; list?: string[] };
  tools: { title: string; items: string[] };
  projects: { title: string; lead: string; items: Project[] };
  cert: { title: string; text: string; imageAlt: string; caption: string };

  jobs: { title: string; lead: string; roles: JobRole[]; note: string };
  /** Use items (title + sentence cards) OR bullets (a checklist of sentences). */
  why: { title: string; items?: Item[]; bullets?: string[] };

  reviews: {
    title: string;
    lead: string;
    videos: { name: string; meta: string }[];
    quotes: { text: string; name: string; placed: string }[];
    allLink: string;
  };

  faq: { title: string; lead: string; items: { q: string; a: string }[] };
  cta: { title: string; lead: string; button: string };

  /** Internal links (use real routes) or "#" until the target exists */
  related: { label: string; href: string }[];

  /**
   * Local-SEO line under the related links: areas of Chennai served and where classes run.
   * e.g. "**Power BI training across Chennai:** Adyar, Guindy, ... Classroom batches run at our Perungudi centre."
   */
  areas?: string;
};
