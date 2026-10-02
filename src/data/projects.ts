export type PortfolioProject = {
  id: string;
  experienceId: string;
  title: string;
  categories: string[];
  summary: string;
  brief?: string;
  goal?: string;
  role?: string[];
  approach?: string;
  outcome?: string;
  metrics?: { value: string; label: string }[];
  media?: {
    kind: "image" | "video";
    src: string;
    alt: string;
    poster?: string;
  }[];
  contentLink?: { href: string; label: string };
};

// Source: PORTFOLIO_UPGRADE.md. Add evidence only after verification.
// Optional case-study fields are reserved for future detail pages.
export const projects: PortfolioProject[] = [
  {
    id: "ajioor-content-presence",
    experienceId: "ajioor",
    title: "Building a consistent content presence for AJIOOR",
    categories: ["Social Media Strategy", "Copywriting", "Content Management"],
    summary:
      "A look at how I managed multi-platform communication across Instagram, TikTok, Facebook and X.",
  },
  {
    id: "asteroid-project-stories",
    experienceId: "asteroid-ideas",
    title: "Turning client projects into stories for Asteroid Ideas",
    categories: ["Content Strategy", "Storytelling", "Copywriting"],
    summary:
      "Creating monthly content direction and storytelling-led social copy designed to communicate the value behind the agency's work.",
  },
  {
    id: "buy-and-use-short-form",
    experienceId: "buy-and-use",
    title: "Creating ~50 short-form videos for Buy & Use",
    categories: ["Content Creation", "Scripting", "On-camera"],
    summary:
      "From concepts and scripts to appearing on camera — producing social-first content across TikTok, Instagram and Facebook.",
  },
];
