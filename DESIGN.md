---
name: Samuel Alexander
description: A navy, slate, and mint engineering portfolio informed by Brittany Chiang v4.
colors:
  bg: "#0a192f"
  surface: "#112240"
  raised: "#172b46"
  selected: "#173c47"
  line: "#263a55"
  text: "#d5def5"
  muted: "#a4afcb"
  accent: "#64ffda"
  button-text: "#0a192f"
  light-bg: "#f4f7fb"
  light-surface: "#ffffff"
  light-raised: "#e8eef5"
  light-selected: "#e0f3ee"
  light-line: "#c7d2e1"
  light-text: "#182f49"
  light-muted: "#53677f"
  light-accent: "#087662"
  light-button-text: "#ffffff"
typography:
  display:
    fontFamily: "'Public Sans Variable', sans-serif"
    fontSize: "clamp(48px,5.6vw,76px)"
    fontWeight: 720
    lineHeight: 1.12
    letterSpacing: "-.035em"
  statement:
    fontFamily: "'Public Sans Variable', sans-serif"
    fontSize: "clamp(42px,5.6vw,76px)"
    fontWeight: 720
    lineHeight: 1.15
    letterSpacing: "-.035em"
  section:
    fontFamily: "'Public Sans Variable', sans-serif"
    fontSize: "28px"
    fontWeight: 650
    lineHeight: 1.2
    letterSpacing: "-.02em"
  body:
    fontFamily: "'Public Sans Variable', sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.65
  code:
    fontFamily: "Consolas, monospace"
    fontSize: "12px"
    lineHeight: 1.75
rounded:
  control: "4px"
  project: "5px"
  flow-step: "8px"
  panel: "12px"
  circle: "50%"
spacing:
  compact: "12px"
  control: "24px"
  panel: "35px"
  columns: "65px"
  showcases: "105px"
  major: "130px"
components:
  outline-link:
    textColor: "{colors.accent}"
    rounded: "{rounded.control}"
    padding: "17px 24px"
  outline-link-hover:
    textColor: "{colors.accent}"
    backgroundColor: "{colors.selected}"
    rounded: "{rounded.control}"
  theme-toggle:
    textColor: "{colors.muted}"
    rounded: "{rounded.circle}"
    width: "36px"
    height: "36px"
  project-description:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.project}"
    padding: "23px 25px"
  system-overview:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.panel}"
    padding: "35px"
  flow-step-selected:
    backgroundColor: "{colors.raised}"
    rounded: "{rounded.flow-step}"
    padding: "24px 12px"
---

# Design System: Samuel Alexander

## Overview

**Creative North Star: "Reliable Systems, Personally Presented"**

A left-aligned identity and systems statement introduce Samuel, followed by compact About and Experience sections and three evidence-backed project showcases. Navy surfaces, slate typography, mint actions, and alternating image/text overlaps adapt the visual language of [Brittany Chiang v4](https://v4.brittanychiang.com/) to Samuel's work. The footer visibly credits this design reference. The reference repository is [bchiang7/v4](https://github.com/bchiang7/v4).

The user requested a well-regarded portfolio reference after rejecting both preceding directions. This implementation supersedes the old console and four-illustration gallery. `src/App.js`, `src/App.css`, and `src/index.css` are the current visual authority; historical mock and QA files do not define this layout.

**Key Characteristics:**

- Strong name and systems statement, with restrained supporting copy.
- Continuous document flow and generous section separation.
- Three alternating showcases with authentic source/project evidence.
- Public Sans throughout the interface, with monospace only for actual code.
- Mint outline actions and fine section rules against navy.

## Colors

### Primary

**Mint** (`accent`) identifies links, outline actions, the wordmark, experience marker, section details, and keyboard focus. **Selected Navy** (`selected`) supplies outline-action hover fill. Theme preference persists under `samuel-theme`; dark is the fallback when storage is unavailable.

### Neutral

**Navy Canvas** (`bg`), **Panel Navy** (`surface`), and **Raised Navy** (`raised`) provide canvas, overlapping descriptions/diagram surfaces, and control state. **Pale Slate** (`text`) establishes principal headings; **Supporting Slate** (`muted`) distinguishes statements, descriptions, and metadata. **Seam Navy** (`line`) provides section extensions, archive rules, and field borders. `button-text` supplies skip-link foreground; the identical `button` declaration in source is not a separate current component role.

Each `light-*` token replaces its corresponding role under `:root[data-theme='light']`. The light accent is a deeper green for readable links. Project screenshots retain their actual pixels; the fixed navy source excerpt keeps its code palette across themes.

**The Evidence Color Rule.** Theme semantic UI surfaces without recoloring authentic project evidence. Do not interpret screenshot confidence or highlighted segments as portfolio evaluation metrics.

## Typography

**Interface and display:** locally bundled Public Sans Variable, sans-serif fallback. **Source excerpt:** Consolas, monospace fallback. Archivo/Manrope are no longer the active fonts.

- **Name:** frontmatter `display`; **systems statement:** frontmatter `statement`, in muted ink. At (1000px) and below both become (60px). At (700px) and below the name uses `clamp(35px,8.4vw,53px)`, line height (1.15); statement uses `clamp(34px,8.4vw,52px)`, line height (1.2), maximum (14ch).
- **Section headings:** frontmatter `section`, reducing to (24px) on mobile. Each heading ends in a flexible seam, maximum length (300px).
- **Project titles:** (28px), weight (650), becoming (25px) at tablet and (24px) on mobile.
- **Body baseline:** frontmatter `body`. Hero supporting copy is (17px), line height (1.85), maximum (540px); mobile becomes (15px), line height (1.9).
- **Descriptions:** (14px), line height (1.85). Experience bullets use (14px), line height (1.9). Header links and project actions use (12px); project tools use (11px).
- **Case-study title:** `clamp(40px,6vw,76px)`; lead (21px), line height (1.8), maximum (65ch), becoming (17px) on mobile.
- **Source code:** frontmatter `code`, becoming (10px) on mobile. Preserve code as actual selectable text, not a screenshot of a fabricated editor.

## Layout

The page scrolls normally. Main width is `min(1000px, calc(100% - 160px))`; narrower reading sections use `min(800px, calc(100% - 160px))`. Header padding is (29px 48px). Its compact monogram sits left; section/resume links and theme control align right. The header is not fixed.

The hero has minimum height (640px), top padding (112px), and bottom padding (65px). Name, statement, paragraph, actions, and role/date form one left-aligned stack. About uses columns (1.45fr / 1fr), gap (65px). Experience uses a (120px) company marker and flexible content with a (32px) gap. Experience and work start with (130px) and (145px) top spacing respectively.

Project showcases use a twelve-column overlap grid, separated by (105px). Odd images occupy columns (1 / 8), with right-aligned copy at (6 / end). Even items reverse those placements and align copy left. Descriptions float above images on tonal panels; tool lists and project links remain outside. Screenshots have (340px) image height with top-left cover cropping. The archive is a closed native disclosure after the three projects.

- **At (1000px) and below:** both shared widths become `calc(100% - 120px)`, header horizontal padding becomes (30px), hero minimum height becomes (610px), and image height becomes (350px).
- **At (700px) and below:** both shared widths become `calc(100% - 44px)`; navigation wraps below the wordmark/theme row. About and Experience stack; the toolkit uses two columns. Project overlap becomes sequential image then left-aligned copy, with transparent unshadowed descriptions. Images become (230px) high, gallery gap (60px), and archive results one column. Search occupies its own row above two equal filters. Hero minimum height is (600px), top padding (80px).
- **Case studies:** article maximum (1000px), diagram padding (35px), contribution/decision gap (65px). Mobile uses one text column; diagram steps wrap into paired rows with a (20px) connector track and hidden connector between rows.

## Elevation & Depth

Depth is limited and purposeful. Project-description panels use `0 12px 32px rgb(0 0 0 / .13)` to separate overlapping copy from evidence. This shadow disappears on mobile when the overlap disappears. Outline-action hover uses `0 5px 16px rgb(0 0 0 / .12)` with selected-tone fill. Other depth comes from semantic navy layers and fine seams; there are no gradients or decorative glow.

**The Overlap Rule.** Use elevated description panels only where they cross project imagery; on mobile return them to open prose.

## Shapes

Controls and outline actions have compact corners (`control`); screenshots and overlap descriptions use `project`; diagram steps use `flow-step`; system overview uses `panel`. The theme toggle is circular. Authored icons have a (24 × 24) view box, no fill, round caps/joins, and stroke width (1.6). Experience bullets are small mint chevrons, not status indicators.

## Components

### Header and actions

The `sa.` wordmark has an accessible home label. About, Experience, Work, Contact, and outlined Resume links remain semantic destinations. The theme toggle has a dynamic accessible label. Outline actions have a mint border (1px), compact corners, and hover fill/shadow. Quiet links use muted ink with mint hover. The centered footer has a contact action, email, GitHub/resume, and visible Brittany Chiang design credit.

### Evidence-backed project showcases

Three linked projects present CRM source text, the actual Archetype dashboard image, and actual hand-annotation output. Screenshot figures carry captions and alternative text; images load lazily. Image hover applies brightness (1.08) over (.25s). Description overlays permit clicks to reach underlying images while retaining working links. The Archetype image captures the real review dashboard; the hand image is an actual MediaPipe overlay. On-image confidence is not evaluated accuracy. Do not restore the former generated-looking pipeline/chess/retrieval covers.

### Archive and search

The complete 33-project archive is closed initially through native `details`/`summary`. Its summary uses mint ink in both states. Search covers title, description, and technologies; native selects filter area and origin. Results include a live count and a clear-filters empty state. Rows are open text links separated by seams.

Search uses a transparent background, seam border, compact corners, padding (12px 14px), and `focus-within` outline (2px) with (3px) offset. Native selects use surface fill and padding (12px). Hidden labels preserve accessible names. General button/link/input/select focus uses a (2px) accent outline offset (4px). Native summaries retain browser focus behavior. The skip link appears on focus.

### Standalone case studies

The return link leads to selected work. Optional flow, contributions/notes, measured results, and stack sections depend on actual project data; simpler archive entries show a contribution paragraph. Stack is visible at all widths. Diagram buttons expose pressed state and update a polite live explanation. Active steps combine raised tone and mint border; there is no separate hover animation. Main content receives focus when a case opens; hash routes support browser history.

Smooth document scrolling is the default. Reduced-motion CSS disables transitions and forces auto scroll. Outline-link transitions cover background/shadow (.2s); screenshot hover uses filter (.25s). No entrance animation is imposed.

## Do's and Don'ts

### Do:

- **Do** preserve the navy/slate/mint hierarchy and Public Sans type system.
- **Do** retain the reference credit and Samuel's own identity, work, and prose.
- **Do** use authentic assets with provenance and legible captions.
- **Do** remove overlapping card treatment on mobile.
- **Do** keep archive disclosure, theme, focus, history, and reduced motion working.

### Don't:

- **Don't** describe the older console or four-cover directions as current.
- **Don't** invent dashboards, editor content, screenshots, or impact metrics.
- **Don't** treat screenshot detector confidence as benchmark accuracy.
- **Don't** add sidebars, fake terminals, decorative gradients, or glow.
- **Don't** copy the reference portfolio's personal identity or project claims.
