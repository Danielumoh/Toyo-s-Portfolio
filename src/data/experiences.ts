export type Experience = {
  id: string;
  company: string;
  role: string;
  summary?: string;
  platforms?: string[];
  contributions?: string[];
  focus?: string[];
  metrics?: { value: string; label: string }[];
  media?: { src: string; alt: string; href?: string }[];
};

// Source: PORTFOLIO_UPGRADE.md. Omit unconfirmed information.
export const experiences: Experience[] = [
  {
    id: "ajioor",
    company: "AJIOOR Sports Intelligence",
    role: "Social Media Manager",
    summary:
      "Managed the brand's social presence across four platforms, helping translate sports-focused ideas into consistent, audience-facing content.",
    platforms: ["Instagram", "TikTok", "Facebook", "X"],
    contributions: [
      "Managed and published content across Instagram, TikTok, Facebook and X.",
      "Developed captions and calls-to-action for different content formats.",
      "Adapted communication for multiple social platforms while maintaining brand consistency.",
    ],
    focus: ["Multi-platform Publishing", "Audience Engagement", "Brand Voice", "Content Planning"],
  },
  {
    id: "avaleads",
    company: "Avaleads",
    role: "Social Media Manager & Content Creator",
    focus: ["Social Media Management", "Content Creation"],
    // TODO: Add responsibilities, platforms, dates, media and results only after confirmation.
  },
  {
    id: "asteroid-ideas",
    company: "Asteroid Ideas",
    role: "Social Media Manager",
    summary:
      "Planned monthly content around the brand's services, projects and communication goals, helping create a more structured approach to social publishing.",
    contributions: [
      "Planned monthly content calendars around the brand's services and projects.",
      "Developed storytelling-led captions designed to communicate the value of client work.",
      "Translated business and project information into social content ideas.",
    ],
    focus: ["Content Calendars", "Brand Storytelling", "Copywriting", "Content Ideation"],
  },
  {
    id: "buy-and-use",
    company: "Buy & Use (Suprotech)",
    role: "Content Creator",
    summary:
      "Created approximately 50 short-form videos and served as an on-camera face of the brand across TikTok, Instagram and Facebook.",
    platforms: ["TikTok", "Instagram", "Facebook"],
    contributions: [
      "Contributed to content ideation.",
      "Wrote or developed short-form scripts.",
      "Participated in creative direction.",
      "Delivered content on camera.",
      "Helped create a consistent stream of social-first video content.",
    ],
    focus: ["Ideation", "Scripting", "Creative Direction", "On-camera", "Short-form Content"],
    metrics: [{ value: "~50", label: "Short-form videos created" }],
  },
];
