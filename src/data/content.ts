export type ContentItem = {
  id: string;
  title: string;
  source: {
    kind: "external";
    href: string;
    label: string;
  };
  poster?: { src: string; alt: string };
};

// These complete URLs are authoritative. Do not reconstruct or transform them.
export const contentItems: ContentItem[] = [
  {
    id: "content-reel-1",
    title: "Content Reel 1",
    source: {
      kind: "external",
      href: "https://drive.google.com/file/d/1TkBP4HBrAWbm-j2mvmwqNKtatoyX-F5h/view",
      label: "Watch on Drive",
    },
  },
  {
    id: "content-reel-2",
    title: "Content Reel 2",
    source: {
      kind: "external",
      href: "https://drive.google.com/file/d/100VM-nxcp3N7wRAqlvASYr20Sp84ulX3/view",
      label: "Watch on Drive",
    },
  },
  {
    id: "content-reel-3",
    title: "Content Reel 3",
    source: {
      kind: "external",
      href: "https://drive.google.com/file/d/1BdN5tthEyKumfHBXlDfTYvOhFJdQIhKx/view",
      label: "Watch on Drive",
    },
  },
];
