export type BlogEntryKind = "post" | "external";

interface BlogEntryBase {
  kind: BlogEntryKind;
  title: string;
  description: string;
  category: string;
  publishedAt?: string;
  updatedAt?: string;
}

export interface ManualBlogPost extends BlogEntryBase {
  kind: "post";
  slug: string;
  content: string[];
}

export interface ExternalBlogLink extends BlogEntryBase {
  kind: "external";
  source: string;
  url: string;
}

export type BlogEntry = ManualBlogPost | ExternalBlogLink;

export const manualBlogPosts: ManualBlogPost[] = [];

export const externalBlogLinks: ExternalBlogLink[] = [];

export const blogEntries: BlogEntry[] = [
  ...manualBlogPosts,
  ...externalBlogLinks,
];

export function isManualBlogPost(entry: BlogEntry): entry is ManualBlogPost {
  return entry.kind === "post";
}

export function getManualBlogPost(slug: string): ManualBlogPost | undefined {
  return manualBlogPosts.find((post) => post.slug === slug);
}

export function getBlogEntryHref(entry: BlogEntry): string {
  return isManualBlogPost(entry) ? `/blog/${entry.slug}` : entry.url;
}
