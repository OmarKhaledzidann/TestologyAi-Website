import { SITE_URL } from "./constants";

export function safeJsonLd(data: object): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export const jsonLd = {
  organization: () => ({
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "TestologyAI",
    url: SITE_URL,
    logo: `${SITE_URL}/favicon-logo.png`,
    description:
      "Free IT certification practice exams and study tools for AWS, Azure, CompTIA, and more.",
  }),

  course: (cert: { id: string; title: string; description: string }) => ({
    "@context": "https://schema.org",
    "@type": "Course",
    name: cert.title,
    description: cert.description,
    provider: {
      "@type": "Organization",
      name: "TestologyAI",
      url: SITE_URL,
    },
    url: `${SITE_URL}/certificates/${cert.id}`,
    isAccessibleForFree: true,
    educationalLevel: "Beginner",
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "online",
      courseWorkload: "PT1H",
    },
  }),

  breadcrumb: (
    items: { name: string; path: string }[],
  ) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  }),
};
