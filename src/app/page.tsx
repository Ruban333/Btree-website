import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import { COURSES, FAQS } from "@/data/home";
import { courseListSchema, faqSchema } from "@/lib/schema";
import Centre from "@/components/sections/Centre";
import CourseFinder from "@/components/sections/CourseFinder";
import CtaBand from "@/components/sections/CtaBand";
import Faq from "@/components/sections/Faq";
import Hero from "@/components/sections/Hero";
import KeywordCluster from "@/components/sections/KeywordCluster";
import Partners from "@/components/sections/Partners";
import PopularCourses from "@/components/sections/PopularCourses";
import Process from "@/components/sections/Process";
import Stats from "@/components/sections/Stats";
import Stories from "@/components/sections/Stories";
import WhatIs from "@/components/sections/WhatIs";

// Each page sets its own canonical; never inherit "/" from the layout.
export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function HomePage() {
  return (
    <main>
      <JsonLd data={[faqSchema(FAQS), courseListSchema(COURSES)]} />
      <Hero />
      <WhatIs />
      <Stats />
      <CourseFinder />
      <PopularCourses />
      <Process />
      <Centre />
      <Partners />
      <Stories />
      <Faq />
      <CtaBand />
      <KeywordCluster />
    </main>
  );
}
