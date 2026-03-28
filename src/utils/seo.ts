import { SITE_URL } from "./constants";

export const seo = ({
  title,
  description,
  keywords,
  image,
  path,
}: {
  title: string;
  description?: string;
  image?: string;
  keywords?: string;
  path?: string;
}) => {
  const canonicalUrl = path ? `${SITE_URL}${path}` : undefined;

  const tags = [
    { title },
    { name: "description", content: description },
    ...(keywords ? [{ name: "keywords", content: keywords }] : []),
    { property: "og:type", content: "website" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    ...(canonicalUrl
      ? [{ property: "og:url", content: canonicalUrl }]
      : []),
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    ...(image
      ? [
          { property: "og:image", content: image },
          { name: "twitter:image", content: image },
          { name: "twitter:card", content: "summary_large_image" },
        ]
      : [{ name: "twitter:card", content: "summary" }]),
  ];

  return tags;
};

export const seoLinks = (path?: string) => {
  if (!path) return [];
  return [{ rel: "canonical", href: `${SITE_URL}${path}` }];
};
