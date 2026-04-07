# Design System Document

## 1. Overview & Creative North Star

The Creative North Star for this design system is **"The Technical Editor."**

This is not a standard portfolio; it is a high-end digital publication that frames frontend engineering as a craft of precision and aesthetic discipline. The system moves beyond the "grid-of-boxes" layout by utilizing intentional asymmetry, massive typographic scales, and deep tonal layering.

We reject the "template" look. By leveraging generous negative space and overlapping elements, we create an experience that feels curated rather than generated. For Adam Johnson, the UI must reflect his code: clean, performant, and structurally sophisticated.

## 2. Colors

This system uses a monochromatic foundation punctuated by a high-energy "Deep Sky Blue" accent to guide the eye toward interactive elements.

- **Primary (#8FD6FF / #00BFFF):** To be used sparingly for high-impact CTAs and critical status indicators.

- **Surface Hierarchy:** We utilize the `surface-container` tiers to create a sense of physical architecture.

- `surface-container-lowest (#0E0E0E)`: Used for background "voids" or deep code blocks.

- `surface-container (#20201F)`: The standard canvas for content.

- `surface-container-highest (#353535)`: Used for floating elements or active states.

### The "No-Line" Rule

**Explicit Instruction:** Traditional 1px solid borders are prohibited for sectioning. Boundaries must be defined solely through background color shifts or subtle tonal transitions. For example, a project card should be distinguished from the background by moving from `surface-dim` to `surface-container-low`, not by a gray outline.

### The "Glass & Gradient" Rule

To add visual "soul" to the developer aesthetic, use Glassmorphism for floating navigation and overlays. Combine `surface-container` with a `backdrop-blur` (20px-40px) at 70% opacity. For primary actions, use a subtle linear gradient transitioning from `primary` to `primary_container` to provide a sense of depth that flat hex codes cannot achieve.

## 3. Typography

The typography strategy relies on the tension between the geometric precision of **Space Grotesk** and the functional clarity of **Inter**.

- **Display & Headlines (Space Grotesk):** These are the "Editorial" voice. Use `display-lg` (3.5rem) with tight letter-spacing (-0.02em) to create authoritative, poster-like headings.

- **Body & Titles (Inter):** These are the "Functional" voice. Inter provides the readability required for technical descriptions.

- **Hierarchy as Identity:** By using a dramatic scale difference between a `display-lg` headline and a `label-sm` technical tag, we create a rhythmic visual flow that feels modern and bespoke.

## 4. Elevation & Depth

Depth in this design system is achieved through **Tonal Layering** rather than structural lines or heavy shadows.

- **The Layering Principle:** Stack surfaces like sheets of dark glass. An inner container should always be one "tier" higher or lower than its parent.

- _Layout Example:_ A `surface-container-lowest` code snippet sitting inside a `surface-container-high` card.

- **Ambient Shadows:** If an element must float (e.g., a modal), use an "Ambient Shadow." The shadow color should be a tinted version of `on-surface` (e.g., #E5E2E1 at 5% opacity) with a blur radius of at least 32px. Avoid harsh, dark gray drop shadows.

- **The "Ghost Border" Fallback:** If accessibility requires a container definition, use a "Ghost Border": the `outline-variant` token at 15% opacity. Never use 100% opaque borders.

## 5. Components

### Buttons

- **Primary:** Filled with `primary_container`. No border. Large horizontal padding (2rem). Use `label-md` in all-caps for the text.

- **Secondary:** Ghost style. No background, no border. Use a subtle `primary` underline that expands on hover.

- **States:** On hover, primary buttons should emit a soft glow using a 20px blur of the `primary` color at 20% opacity.

### Cards & Lists

- **Rule:** Forbid divider lines. Use vertical white space from the spacing scale (e.g., 48px or 64px) to separate items.

- **Interaction:** Cards should subtly shift from `surface-container-low` to `surface-container-high` on hover.

### Inputs & Fields

- **Style:** Minimalist underline or "Block" style.

- **Focus:** When an input is active, the label should shift to `primary` color, and the background should transition to `surface-container-highest`.

### Signature Component: The "Technical Trace"

For Adam's experience timeline, do not use a vertical line. Use a series of `surface-container-high` blocks with overlapping `display-sm` year markers, creating a sense of momentum through layout rather than iconography.

## 6. Do's and Don'ts

### Do

- **Embrace Negative Space:** If a section feels "empty," leave it. Space is a premium design element.

- **Intentional Asymmetry:** Offset text blocks from the center to create an editorial, non-linear reading path.

- **High Contrast:** Ensure `on-surface` text is always crisp against `surface` backgrounds for maximum readability.

### Don't

- **Don't Use Dividers:** Never use a `

` or a 1px line to separate content. Use space or color shifts.

- **Don't Center Everything:** Avoid the "bootstrap" look where every element is centered in a container. Align to a sophisticated, multi-column grid.

- **Don't Overuse the Accent:** The Deep Sky Blue is a scalpel, not a brush. Use it only for focus points.
