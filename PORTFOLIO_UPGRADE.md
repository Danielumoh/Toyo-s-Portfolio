# Jesutoyosi Kayode Portfolio Upgrade

## Purpose

This document is the implementation source of truth for upgrading
Jesutoyosi Kayode's existing portfolio.

The current portfolio already has a visual direction that should be
preserved: a warm off-white background, muted purple/pink accent, thin
borders, generous whitespace, simple typography, and selective
highlighted cards.

The goal is **not to redesign the application from scratch**. The goal
is to evolve the existing portfolio into a stronger professional story
that clearly sells Jesutoyosi's value as a:

- Social Media Manager
- Content Creator
- Content Strategist
- Content Marketer
- Copywriter / Scriptwriter
- Community Manager
- On-camera creator

The central positioning is:

> **She can think about the content and make the content.**

The portfolio should communicate the journey:

**Brand objective → Strategy → Idea → Script → Creation → Publishing →
Community → Performance**

---

# 1. Non-Negotiable Engineering Rules

1.  Inspect the existing codebase before modifying anything.
2.  Identify the framework, routing approach, components, styling
    system, data structures, and current responsive behavior.
3.  Reuse existing components and styles where practical.
4.  Do not rewrite the application from scratch.
5.  Preserve the existing visual identity and overall
    minimalist/editorial feel.
6.  Do not invent professional achievements, dates, clients, statistics,
    campaign results, testimonials, or responsibilities.
7.  Unknown information must remain optional, be omitted from the
    rendered UI, or be marked as a developer TODO.
8.  Do not display fake placeholder metrics such as "120K views" in the
    production UI.
9.  Keep portfolio content separate from presentation where practical.
10. Prefer reusable components over duplicated markup.
11. Maintain and improve responsive behavior across mobile, tablet, and
    desktop.
12. Preserve accessibility: semantic HTML, keyboard navigation, focus
    states, sensible contrast, descriptive link labels, and image alt
    text.
13. Do not install new dependencies unless genuinely necessary. Explain
    why before doing so.
14. Do not break existing links or functionality.
15. Implement the upgrade in phases rather than making one uncontrolled
    rewrite.
16. Before each major phase, explain:
    - what currently exists,
    - what will change,
    - which files will change,
    - why the chosen approach fits the existing architecture.
17. After each phase, summarize what changed and identify anything
    requiring manual verification.
18. Do not overfill the interface with text. Preserve whitespace and use
    hierarchy, tags, media, metrics, labels, and typography to create
    richness.

---

# 2. First Task: Audit Only

Before writing code, inspect the repository and report:

- framework and language,
- project structure,
- routing,
- page components,
- shared components,
- styling solution,
- existing color tokens,
- typography,
- responsive breakpoints,
- data currently hardcoded into components,
- image/media handling,
- external links,
- obvious accessibility issues,
- obvious duplication,
- and the smallest sensible architecture for this upgrade.

**Do not modify files during this first audit.**

After the audit, propose an implementation order based on the actual
repository.

---

# 3. Desired Information Architecture

The existing navigation is:

- Home
- About
- What I Do
- Experience
- Content
- Contact

Preserve those core destinations.

Introduce **Selected Work** if it fits the existing architecture without
making navigation cluttered. It may be:

- a dedicated route,
- a section on the homepage,
- or a section between What I Do and Experience.

Choose based on the existing application after auditing it.

The narrative should feel like:

**Identity → Philosophy → Capabilities → Proof → Experience → Work →
Conversion**

---

# 4. Global Visual Direction

Preserve the current:

- warm/off-white canvas,
- muted purple/pink accent,
- subtle borders,
- large whitespace,
- simple typography,
- restrained card design.

Improve consistency in:

- maximum content widths,
- page gutters,
- vertical section spacing,
- heading scale,
- paragraph width,
- button styles,
- card padding,
- border radius,
- hover/focus states,
- tags/chips,
- media aspect ratios,
- footer alignment.

The purple/pink treatment should remain an **accent**, not become the
background of every component.

Use visual hierarchy instead of walls of text. Appropriate devices
include:

- `01 / 06` style section numbering,
- small uppercase category labels,
- skill tags,
- real content thumbnails,
- large genuine metrics,
- company/project labels,
- short pull quotes,
- subtle oversized typography,
- selective highlighted cards.

Animations, if already used or easy to add without dependencies, should
be subtle and respect `prefers-reduced-motion`.

---

# 5. Global Content/Data Architecture

Where practical, move repeated portfolio information into structured
data rather than embedding everything directly in JSX/markup.

Exact file names should follow the existing repository conventions.

A possible conceptual model is:

```ts
type Experience = {
  company: string;
  role: string;
  summary: string;
  platforms?: string[];
  focus?: string[];
  contributions?: string[];
  metrics?: {
    value: string;
    label: string;
  }[];
  media?: {
    src: string;
    alt: string;
    href?: string;
  }[];
};

type PortfolioProject = {
  title: string;
  client?: string;
  category: string[];
  summary: string;
  brief?: string;
  role?: string[];
  approach?: string;
  outcome?: string;
  metrics?: {
    value: string;
    label: string;
  }[];
  media?: {
    src: string;
    alt: string;
    href?: string;
  }[];
};
```

These types are examples, not mandatory architecture. Adapt them to the
existing project.

Empty optional arrays/fields should not create empty UI blocks.

When Jesutoyosi later supplies verified results, the interface should
allow data such as:

```ts
metrics: [
  {
    value: "80K+",
    label: "Video views",
  },
];
```

to be added without redesigning the component.

---

# 6. HOME

## Goal

The hero must sell value before listing tasks.

The visitor should understand within seconds:

- who Jesutoyosi is,
- what kind of work she does,
- what differentiates her,
- and where to see evidence.

## Recommended Copy

### Eyebrow / optional small label

`SOCIAL MEDIA • CONTENT • STRATEGY`

### Main heading

**Hi, I'm Jesutoyosi Kayode.**

### Value statement

**I turn brand ideas into content people can understand, engage with,
and remember.**

### Supporting copy

I'm a Social Media Manager, Content Creator & Strategist helping brands
build stronger digital presence through thoughtful strategy,
storytelling and social-first content.

### Primary CTA

**Explore my work**

This should lead to Selected Work or Featured Content.

### Secondary CTA

**Let's work together →**

This should lead to Contact.

## Capability Strip

Add a restrained capability strip beneath the hero:

`SOCIAL STRATEGY`\
`CONTENT CREATION`\
`COPYWRITING`\
`COMMUNITY`\
`SHORT-FORM VIDEO`

This can wrap on smaller screens.

## Portrait

Preserve the existing portrait.

Improve presentation only if needed. A subtle accent treatment behind or
around the image is acceptable, but do not overpower the photograph.

---

# 7. ABOUT

## Goal

Home explains what she does. About should explain **who she is as a
creative professional and how she thinks**.

Remove all Lorem Ipsum.

## Recommended Copy

### Heading

**A little about me**

### Body

I'm a social media and content professional based in Lagos, passionate
about helping brands communicate with clarity, personality and purpose.

My work sits at the intersection of **strategy and creativity**. I enjoy
taking a brand's goals, audience and ideas and turning them into content
people actually want to consume --- whether that's a monthly content
strategy, a compelling caption, an engaging short-form video or an
on-camera story.

I've worked across social media management, content planning,
copywriting, community engagement and short-form content creation,
giving me experience on both sides of the process: **thinking about what
a brand should say and actually creating the content that says it.**

I'm particularly interested in storytelling, digital culture and
understanding what makes audiences stop, watch, engage and eventually
trust a brand.

## Education / Training

Do not leave these as one tiny sentence. Present them as small
structured items/cards/rows:

### B.Ed. Education & English Language

University of Lagos

### Virtual Assistant Programme

ALX Africa

### CRM Training

Great Learning

Do not invent dates.

---

# 8. WHAT I DO

## Goal

The section should describe **solutions and capabilities**, not merely
repeat job duties.

Use the existing six-card concept, but strengthen the hierarchy.

Each card may contain:

- service name,
- one-line value proposition,
- short explanation,
- optional skill tags.

## Card 1 --- Social Media Management

### Value line

**Keeping brands active, consistent and intentional online.**

### Description

I manage content publishing across Instagram, TikTok, Facebook and X
while maintaining a consistent brand voice, content rhythm and audience
experience.

### Tags

`Publishing` `Scheduling` `Brand Voice` `Platform Management`

---

## Card 2 --- Content Planning & Strategy

### Value line

**Turning business goals into content worth publishing.**

### Description

I develop content pillars, monthly calendars and campaign ideas built
around a brand's audience, services and objectives --- creating
direction instead of posting for the sake of posting.

### Tags

`Content Calendars` `Ideation` `Content Pillars` `Campaign Planning`

---

## Card 3 --- Copywriting & Scriptwriting

### Value line

**Finding the words that make the idea land.**

### Description

From social captions and calls-to-action to short-form video scripts, I
create copy that communicates clearly while maintaining the personality
of the brand.

### Tags

`Captions` `CTAs` `Scripts` `Storytelling`

---

## Card 4 --- Short-Form & On-Camera Content

### Value line

**Taking ideas from concept to camera.**

### Description

I create social-first videos for TikTok, Instagram and Facebook,
contributing to ideation, scripting, creative direction and on-camera
delivery.

### Tags

`Reels` `TikTok` `Scripting` `On-camera`

---

## Card 5 --- Community Engagement

### Value line

**Turning an audience into a community.**

### Description

I support audience relationships through thoughtful interactions,
comment engagement and timely responses that help brands remain
approachable and connected.

### Tags

`Community` `Audience Engagement` `Brand Voice`

---

## Card 6 --- Virtual Assistant Support

### Value line

**Keeping the work behind the content organised.**

### Description

I support digital workflows through research, organisation,
communication and administrative coordination --- helping projects move
from idea to execution.

### Tags

`Research` `Organisation` `Communication` `Coordination`

---

# 9. SELECTED WORK --- NEW PROOF LAYER

## Goal

Create a bridge between claimed capabilities and professional
experience.

This section should contain 2--3 selected projects/case-study previews
based only on currently known facts.

Do not invent outcomes.

## Project 1

### Title

**Building a consistent content presence for AJIOOR**

### Categories

`Social Media Strategy` `Copywriting` `Content Management`

### Summary

A look at how I managed multi-platform communication across Instagram,
TikTok, Facebook and X.

### CTA

**Explore case study →**

If there is not enough material to create a full case-study route yet,
the CTA may lead to the relevant Experience entry or remain hidden until
media is available.

---

## Project 2

### Title

**Turning client projects into stories for Asteroid Ideas**

### Categories

`Content Strategy` `Storytelling` `Copywriting`

### Summary

Creating monthly content direction and storytelling-led social copy
designed to communicate the value behind the agency's work.

### CTA

**Explore case study →**

---

## Project 3

### Title

**Creating \~50 short-form videos for Buy & Use**

### Categories

`Content Creation` `Scripting` `On-camera`

### Summary

From concepts and scripts to appearing on camera --- producing
social-first content across TikTok, Instagram and Facebook.

### CTA

**Watch the work →**

The "\~50" figure comes from currently supplied portfolio information.
Keep wording approximate unless later verified more precisely.

## Future Case Study Structure

The architecture should be ready to support:

- The Brief
- The Goal
- My Role
- The Approach
- Selected Media
- Results / Outcomes
- Skills Used

Do not render empty sections.

---

# 10. EXPERIENCE

## Goal

Experience must prove application of the skills shown in What I Do.

Avoid making it look like a CV copied into cards.

Each experience should communicate:

**Context → Responsibility → Contribution → Evidence**

Where useful, include:

- company,
- role,
- platform tags,
- short role summary,
- contributions,
- selected media,
- genuine metrics when later available.

---

## AJIOOR Sports Intelligence

### Role

**Social Media Manager**

### Platforms

`Instagram` `TikTok` `Facebook` `X`

### Summary

Managed the brand's social presence across four platforms, helping
translate sports-focused ideas into consistent, audience-facing content.

### Contributions

- Managed and published content across Instagram, TikTok, Facebook and
  X.
- Developed captions and calls-to-action for different content
  formats.
- Adapted communication for multiple social platforms while
  maintaining brand consistency.

### Focus

`Multi-platform Publishing` `Audience Engagement` `Brand Voice`
`Content Planning`

Do not add performance results until verified.

---

---

## Avaleads

### Role

**Social Media Manager & Content Creator**

### Summary

Jesutoyosi has experience working with Avaleads as a Social Media
Manager and Content Creator.

Detailed responsibilities, platforms, content types, campaigns and
performance results have not yet been confirmed.

### Current Verified Positioning

`Social Media Management` `Content Creation`

### Implementation Notes

- Include Avaleads as a full experience entry alongside AJIOOR Sports
  Intelligence, Asteroid Ideas and Buy & Use (Suprotech).
- Do not invent responsibilities, platforms, metrics, campaigns or
  achievements.
- The component must support incomplete experience data gracefully.
- Do not display empty headings or placeholder text to portfolio visitors.
- Structure the data so additional Avaleads information can be added
  later without redesigning the card.
- If the Experience UI depends on detailed descriptions, use only the
  verified role information until additional details are confirmed.

## Asteroid Ideas

### Role

**Social Media Manager**

### Summary

Planned monthly content around the brand's services, projects and
communication goals, helping create a more structured approach to social
publishing.

### Contributions

- Planned monthly content calendars around the brand's services and
  projects.
- Developed storytelling-led captions designed to communicate the
  value of client work.
- Translated business and project information into social content
  ideas.

### Focus

`Content Calendars` `Brand Storytelling` `Copywriting`
`Content Ideation`

Do not add performance results until verified.

---

## Buy & Use (Suprotech)

### Role

**Content Creator**

### Platforms

`TikTok` `Instagram` `Facebook`

### Summary

Created approximately 50 short-form videos and served as an on-camera
face of the brand across TikTok, Instagram and Facebook.

### Contributions

- Contributed to content ideation.
- Wrote or developed short-form scripts.
- Participated in creative direction.
- Delivered content on camera.
- Helped create a consistent stream of social-first video content.

### Focus

`Ideation` `Scripting` `Creative Direction` `On-camera`
`Short-form Content`

## Special Visual Treatment

This experience may receive stronger visual emphasis because the current
information includes a concrete output.

Consider a restrained metric block:

**\~50**\
Short-form videos created

Do not invent views, reach, engagement or conversion metrics.

A process line can be used:

**IDEATION → SCRIPTING → CREATIVE DIRECTION → ON-CAMERA → CONTENT**

---

# 11. FEATURED CONTENT

## Goal

This should become one of the most visual areas of the portfolio.

The existing generic:

- Content Reel 1
- Content Reel 2
- Content Reel 3
- Watch on Drive

presentation should be upgraded.

## Content Card Structure

Each content item should support:

- thumbnail/poster,
- project/client,
- content title,
- content type,
- Jesutoyosi's role,
- short context,
- skill tags,
- external video/Drive link,
- accessible CTA.

Example conceptual data:

```ts
{
  title: "Product Reel",
  client: "Buy & Use",
  thumbnail: null,
  type: "Short-form Video",
  roles: ["Scripting", "On-camera"],
  description: "Short-form social content created for the brand.",
  href: "EXISTING_REAL_LINK"
}
```

Do not fabricate thumbnails or links.

If the current project already contains valid Drive links, preserve
them.

If no thumbnail exists, create a tasteful neutral placeholder in the
site's visual language rather than pretending it is real content.

## Visual Direction

Where actual thumbnails are available, prefer
vertical/social-media-friendly cards.

A card should make it obvious:

- what the viewer is about to watch,
- which brand/project it belongs to,
- what Jesutoyosi did,
- and how to open it.

Possible CTA:

**Watch content ↗**

Open external content safely (`target="_blank"` with appropriate `rel`
when applicable).

---

# 12. CONTACT

## Goal

Move from generic contact information to a clear conversion section.

## Heading

**Have a brand, campaign or story worth talking about?**

## Supporting Copy

I'm open to social media management, content strategy, content creation
and creative collaborations.

If you're looking for someone who can help figure out **what to say, how
to say it and turn the idea into content**, let's talk.

## Contact Cards

### Email

**For projects, collaborations and opportunities.**

Preserve the existing real email address.

### WhatsApp

**Have something in mind? Let's talk.**

Preserve the existing real WhatsApp link/number.

### LinkedIn

**Connect professionally and explore my experience.**

Preserve the existing real LinkedIn URL.

### Social Profiles

**See more of my work and what I'm creating.**

Preserve existing real social links.

## Closing CTA

### **Let's create something worth stopping for.**

CTA:

**Start a conversation →**

Use the most appropriate existing contact route.

---

# 13. Reusable Components to Consider

Do not create these blindly. First inspect what already exists.

Potential reusable components include:

- `SectionHeader`
- `Button`
- `Tag` / `Chip`
- `ServiceCard`
- `ExperienceCard`
- `ProjectCard`
- `ContentCard`
- `Metric`
- `QualificationCard`
- `ContactCard`

Reuse existing equivalents where available.

Avoid premature abstraction. A component should exist because it reduces
duplication or creates consistent behavior.

---

# 14. Responsive Requirements

Verify at minimum:

### Mobile

- navigation remains usable,
- hero stacks cleanly,
- portrait remains prominent without dominating,
- buttons remain easy to tap,
- capability strip wraps naturally,
- service cards become one column where needed,
- long paragraphs remain readable,
- project/content cards do not overflow,
- contact information remains usable.

### Tablet

- use one or two columns based on available width,
- maintain comfortable gutters,
- avoid oversized empty gaps.

### Desktop

- preserve generous whitespace,
- use restrained maximum widths,
- avoid stretching text lines too wide,
- keep visual rhythm between text and media.

Do not optimize only for the current laptop viewport.

---

# 15. Accessibility Requirements

- Use semantic headings in logical order.
- Every meaningful image requires useful alt text.
- Decorative images should use empty alt text where appropriate.
- Interactive cards must not rely on hover alone.
- Visible keyboard focus states are required.
- Buttons should be buttons; links should be links.
- External link behavior should be clear.
- Ensure text/accent contrast is readable.
- Do not encode meaning solely through the purple highlight.
- Respect reduced-motion preferences if animations are introduced.

---

# 16. Performance Requirements

- Do not load unnecessarily large images.
- Use the framework's existing image strategy where available.
- Lazy-load below-the-fold media where appropriate.
- Avoid adding large UI/animation libraries solely for small effects.
- Avoid unnecessary re-renders or complicated state for static
  portfolio content.
- Preserve fast initial load.

---

# 17. SEO / Metadata

If the current stack supports metadata, ensure the site has sensible:

- page title,
- description,
- social preview metadata where practical,
- favicon if already available,
- descriptive page headings.

Suggested site description:

> Portfolio of Jesutoyosi Kayode, a social media manager, content
> creator and strategist focused on social-first storytelling, content
> planning and digital brand communication.

Do not add claims that cannot be verified.

---

# 18. Missing Information --- Do Not Invent

The following may require Jesutoyosi's confirmation later:

- exact employment dates,
- verified performance metrics,
- reach,
- impressions,
- engagement rates,
- follower growth,
- leads/conversions,
- exact campaign names,
- campaign objectives,
- testimonials,
- best-performing posts,
- exact personal contribution where work was collaborative,
- additional tools/software used,
- additional brands/clients,
- exact social/profile links if not already present,
- project screenshots,
- video thumbnails,
- additional qualifications.

### Avaleads information to confirm later

- employment period
- platforms managed
- content types created
- social media management responsibilities
- content creation responsibilities
- campaigns/projects worked on
- quantity of content produced
- audience/community responsibilities
- performance metrics
- notable results
- screenshots/content samples
- tools used

The site should work elegantly without these fields.

Use code comments or a central TODO list for developer awareness. Do
**not** expose ugly "TODO" text to visitors.

---

# 19. Suggested Implementation Phases

## Phase 1 --- Repository Audit

No code changes.

## Phase 2 --- Content/Data Refactor

Move repeated portfolio content into maintainable structured data where
it benefits the current architecture.

## Phase 3 --- Global Design Consistency

Standardize layout, spacing, typography, buttons, tags, cards, focus
states and responsive behavior while preserving the existing visual
identity.

## Phase 4 --- Home

Upgrade hero positioning, CTA hierarchy and capability strip.

## Phase 5 --- About

Replace placeholder copy and restructure education/training.

## Phase 6 --- What I Do

Upgrade the six capability cards.

## Phase 7 --- Selected Work

Introduce proof-oriented project previews.

## Phase 8 --- Experience

Transform CV-like entries into richer professional evidence.

## Phase 9 --- Featured Content

Introduce visual content cards with thumbnail/media support.

## Phase 10 --- Contact

Strengthen conversion copy and CTA.

## Phase 11 --- Responsive + Accessibility + Performance

Audit the complete experience across viewport sizes and interaction
modes.

## Phase 12 --- Final QA

Check: - routes, - links, - spelling, - content accuracy, - visual
consistency, - mobile layout, - keyboard navigation, - console errors, -
build errors, - dead code, - unused imports, - production build.

---

# 20. Definition of Done

The upgrade is complete when:

1.  The portfolio immediately communicates Jesutoyosi's professional
    positioning.
2.  Strategy and execution are both visible.
3.  Skills are demonstrated through evidence rather than only claimed.
4.  Experience no longer reads like a copied CV.
5.  Featured Content is visually meaningful.
6.  Real metrics can be added later without redesigning the UI.
7.  No achievements or metrics have been fabricated.
8.  The existing visual identity remains recognizable.
9.  The site works well on mobile, tablet and desktop.
10. Navigation and external links work correctly.
11. The project builds without errors.
12. The code remains understandable and maintainable.

---

# 21. Instructions for Codex During This Learning Build

This project is also being used as a frontend/software-engineering
learning exercise.

When implementing a phase:

1.  Do not immediately dump a large rewrite.
2.  Explain the current implementation in plain language.
3.  Explain the proposed change.
4.  Identify the files involved.
5.  Explain any React/TypeScript/CSS concepts that are important to the
    change.
6.  Make the smallest coherent implementation.
7.  Summarize the diff afterward.
8.  Mention what should be manually tested.
9.  When there are multiple reasonable approaches, explain the trade-off
    briefly.
10. Prefer understandable code over clever code.

The goal is both to produce a strong portfolio and to ensure the
developer understands how it works.

---

# 22. First Prompt to Run With This Document

After placing this file in the repository root, give Codex this
instruction:

> Read `PORTFOLIO_UPGRADE.md` and inspect the existing repository.
> Perform **Phase 1 --- Repository Audit only**. Do not modify any files
> yet. Explain the current architecture, identify the
> files/components/styles involved in each portfolio section, point out
> reusable pieces and duplication, and propose the smallest
> implementation plan that satisfies the specification while preserving
> the existing visual direction. Do not implement anything until the
> audit is complete.

After reviewing the audit, proceed one phase at a time.

---

## Final Product Principle

The portfolio should not merely say:

> "I can manage social media."

It should leave the visitor thinking:

> **"She understands what a brand needs to communicate, can develop the
> content strategy, can turn that strategy into ideas and words, can get
> in front of the camera and create the content, and can manage how that
> content reaches and engages an audience."**

Every design and implementation decision should support that story.
