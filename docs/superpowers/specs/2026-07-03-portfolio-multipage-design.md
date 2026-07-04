# Multi-page Portfolio — Design

Date: 2026-07-03
Status: Approved for planning

## Goal

Turn the current single-page portfolio into a multi-page site with a top
navigation bar, animated transitions between pages, and a shared header/footer.
Add new pages for Awards, Education & Certifications, and an interactive Skill
Map. Keep the existing visual style, custom cursor, and interactive background.

## Decisions (locked)

- **Routing:** `react-router-dom` v6 with real URLs.
- **Header:** compact shared header (name + title + social links) on every page;
  the big `BUILD / CREATE / DELIVER` slogan appears only on the About page.
- **Skill Map:** force-directed graph via `d3-force`, rendered in SVG, draggable nodes.
- **Tests:** add Vitest for pure logic only (no UI/animation tests).
- **Experience tab:** built but **disabled** in the nav (visible, greyed, non-clickable).

## Navigation & routes

| URL | Nav label | Enabled | Content |
|---|---|---|---|
| `/` | — | — | redirect → `/about` |
| `/about` | About | yes | slogan + bio + core expertise + contact CTA |
| `/experience` | Experience | **no (disabled)** | existing `Projects` (5 roles) |
| `/skills` | Skill Map | yes | force-directed skill graph |
| `/awards` | Awards | yes | 3 ADPList awards |
| `/education` | Education & Certifications | yes | education block + 10 certifications |
| `*` | — | — | redirect → `/about` |

Nav order left→right: About · Experience (disabled) · Skill Map · Awards · Education & Certifications.

## Architecture

### Layout shell (persistent)

```
<InteractiveBackground />        // unchanged, fixed background
<CustomCursor />                 // unchanged
<Header>                         // compact hero + <NavBar>
<main>
  <AnimatePresence mode="wait">  // page transition
    <Routes location={location} key={location.pathname}>
      ...page routes...
    </Routes>
  </AnimatePresence>
</main>
<Footer />                       // unchanged, identical on every page
```

- `main.tsx` wraps `<App/>` in `<BrowserRouter>`.
- `App.tsx` renders the shell: background, cursor, `Header`, routed content, `Footer`.
- Only the routed page content animates on navigation; background/cursor/header/footer stay mounted.

### New components

- `src/components/Header.tsx` — compact hero row (name, title, location, `SocialLinks`) + `NavBar`.
- `src/components/NavBar.tsx` — tab links; active-tab indicator (a pill/underline)
  slides between tabs via framer-motion `layoutId`. Disabled items render as
  non-link greyed spans with `aria-disabled`.
- `src/components/PageTransition.tsx` — small wrapper: `motion.div` with
  in `{opacity:0, y:12}` → animate `{opacity:1, y:0}` → exit `{opacity:0, y:-12}`, ~0.3s ease.

### New pages (`src/pages/`)

- `About.tsx` — slogan (`HERO.slogan`) + existing `About` component + existing `Contact` component (CTA moves here).
- `Experience.tsx` — wraps existing `Projects` (route exists for the future; not linked while disabled).
- `SkillMap.tsx` — force-directed graph (see below).
- `Awards.tsx` — maps over `AWARDS` into cards.
- `Education.tsx` — `EDUCATION` block + grid of `CERTIFICATIONS` cards.

Each page body is wrapped by `PageTransition`.

### Reuse

- `Hero` slogan data (`HERO.slogan`) reused on About; the compact header does not
  render the slogan.
- `About`, `Projects`, `Contact`, `Footer`, `SocialLinks` reused as-is. `Contact`'s
  section CTA now lives on the About page rather than the home root.

## Skill Map (d3-force)

### Data model (`SKILL_GRAPH` in constants.ts)

```
SKILL_GRAPH = {
  categories: [
    { id: "frontend",     label: "Frontend",     skills: ["React", "Next.js", "TypeScript", ...] },
    { id: "backend",      label: "Backend",      skills: ["Node.js", "NestJS", "PostgreSQL", ...] },
    { id: "architecture", label: "Architecture", skills: ["Microservices", "Docker", "AWS", ...] },
    { id: "domains",      label: "Domains",      skills: ["E-commerce", "Media", "FinTech", ...] },
  ]
}
```
Skills seeded from the existing `SECTIONS.about.expertise.items` comma lists.

### Pure logic (tested)

`buildSkillGraph(skillGraph)` → `{ nodes, links }`:
- one `root` node (Paul),
- one `category` node per category (linked to root),
- one `skill` node per skill (linked to its category).
Each node carries `{ id, type: "root"|"category"|"skill", categoryId?, label }`.
This function is pure and unit-tested (node count, link count, types, category refs).

### Rendering / interaction

- `SkillMap.tsx` builds `{nodes, links}`, runs `d3.forceSimulation` with
  `forceLink`, `forceManyBody` (charge), `forceCenter`, `forceCollide`.
- On each tick, node positions are pushed to React state; SVG re-renders `<line>`
  edges + `<circle>`/`<text>` nodes.
- Nodes are **draggable**: pointer handlers set `fx/fy` and reheat the sim; release clears them.
- Category colour-coding; hover/tap a category highlights its branch and dims the rest.
- Simulation started/stopped in `useEffect`; cleaned up on unmount.
- Responsive: SVG `viewBox` scales to the container; on small screens reduce charge
  strength and clamp node radius; container gets `overflow: hidden`. Node labels
  hidden or shortened on very small widths.

### Deps

- `d3-force` (runtime) + `@types/d3-force` (dev).

## Content model (constants.ts additions)

```
NAV_ITEMS: { label, path, enabled }[]
EDUCATION: {
  institution, degree, field, period, activities?, description
}[]           // Odesa Maritime Academy — Nautical Science, Sep 2013–Aug 2016
AWARDS: {
  title, issuer, date, description, thumbnail?
}[]           // 3× ADPList "Top 10 Growth Hacking Mentor"
CERTIFICATIONS: {
  title, issuer, date, credentialId, credentialUrl?, description, skills?
}[]           // 10 items; credentialUrl left empty for now (added later)
SKILL_GRAPH: { categories: {...} }
```

### Awards content

1. Top 10 Growth Hacking Mentor — ADPList (Apr–Jun 2026) · issued Jun 2026
2. Top 10 Growth Hacking Mentor — ADPList (Jan–Mar 2026) · issued Mar 2026
3. Top 10 Growth Hacking Mentor — ADPList (Oct–Dec 2025) · issued Dec 2025

### Education content

- Maritime Vocational College named after O. I. Marineska, National University
  «Odesa Maritime Academy» — Associate's degree, Nautical Science, Sep 2013–Aug 2016.
  Activities: Sailing Club, Student Maritime Council. + description paragraph.

### Certifications content (10)

airSlate: Recognizing Phishing Attempts, Data Privacy, Cybersecurity (all Jul 2026,
credential IDs present, `credentialUrl` TBD). Andersen Lab: Intro to Information
Security (Oct 2023), GDPR 2.1 (Oct 2023), Investments (Jun 2023), Next.js & React —
The Complete Guide (Nov 2023, skills: Next.js), GraphQL Fundamentals (Nov 2023),
FinTech: Foundations, Payments, and Regulations (Jun 2023, skills: FinTech). Udemy:
Next.js Ecommerce 2025 – Shopping Platform (Oct 2025, skills: PostgreSQL, Resend +12,
`credentialUrl` TBD).

Credential URLs were not supplied; cards show the Credential ID as text with an
empty `credentialUrl` slot. When `credentialUrl` is set, a "Show credential" link renders.

## Deployment

Hosted on Vercel (Vite framework). Client-side routing needs an SPA rewrite so deep
links (`/awards` etc.) don't 404. Add `vercel.json`:

```
{ "rewrites": [{ "source": "/(.*)", "destination": "/" }] }
```

## Testing (Vitest, logic only)

Add `vitest` + `@testing-library/react` (dev) and a `test` script. Cover:

- `buildSkillGraph` — node/link counts, node types, category linkage.
- `NAV_ITEMS` config — Experience is `enabled: false`; all enabled paths have routes.
- Routing redirects — `/` and unknown paths resolve to `/about` (render `MemoryRouter`, assert About renders).

No tests for animations, cursor, or d3 simulation internals.

## Out of scope

- Real physics tuning beyond a sensible default.
- Filling real `credentialUrl`s (owner adds later).
- Enabling the Experience tab (stays disabled until decided).
- Per-page `<title>`/meta (single index.html meta kept; can be added later).
