---
name: Toyota Supra — Reference Site
description: A premium editorial showcase for the Toyota Supra. Cinematic, bold, refined.
colors:
  scarlet: "#dc2626"
  scarlet-deep: "#b91c1c"
  ink: "#111110"
  ink-muted: "#6f6f6e"
  surface: "#ffffff"
  canvas: "#f9f9f8"
  border: "#e4e4e3"
  dark-canvas: "#0c0c0c"
  dark-surface: "#161616"
  dark-ink: "#eeeeec"
  dark-ink-muted: "#888886"
  dark-border: "#252525"
typography:
  display:
    fontFamily: "Cormorant Garant, Georgia, serif"
    fontSize: "clamp(3.5rem, 9vw, 7.5rem)"
    fontWeight: 600
    lineHeight: 1.0
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "0.1em"
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.76rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.09em"
rounded:
  xs: "4px"
  sm: "6px"
  md: "8px"
  lg: "10px"
spacing:
  xs: "0.4rem"
  sm: "0.75rem"
  md: "1.25rem"
  lg: "2rem"
  xl: "3.5rem"
components:
  button-primary:
    backgroundColor: "{colors.scarlet}"
    textColor: "#ffffff"
    rounded: "{rounded.sm}"
    padding: "0.65rem 1.25rem"
  button-primary-hover:
    backgroundColor: "{colors.scarlet-deep}"
    textColor: "#ffffff"
    rounded: "{rounded.sm}"
    padding: "0.65rem 1.25rem"
  input-default:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "0.65rem 0.9rem"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "{spacing.md}"
---

# Design System: Toyota Supra — Reference Site

## 1. Overview

**Creative North Star: "The Precision Machine"**

Every pixel earns its place. This system is engineered like the 2JZ engine it celebrates — overbuilt, exact, and purposeful. Nothing is decorative. Nothing is accidental. The restraint is the craft. Where other automotive sites lean on chrome gradients and aggressive angles, this system finds its power in whitespace, scale, and typographic confidence.

The palette is near-monochromatic with a single, deliberate injection of scarlet. The type sets hierarchy through scale and weight contrast, not through decorative flourishes. Motion is mechanical — smooth and inevitable, never playful. The overall effect should feel like a high-end printed catalog for a car that doesn't need to shout.

This system explicitly rejects: cluttered car-forum energy, Fast & Furious neon-and-flame aesthetics, the warm beige AI-default, and corporate brochure stiffness. It is none of those things. It is the car at 155 mph — everything unnecessary has been stripped away.

**Key Characteristics:**
- Near-monochromatic base with a single scarlet signature
- Display serif (Cormorant Garant) reserved for hero moments only
- Inter for all functional text — no exceptions
- Layered depth through shadow vocabulary, not tonal ramps
- Dark/light theme parity — both modes are first-class
- Scale does the work type weight can't

## 2. Colors: The Scarlet and Graphite Palette

A near-black-and-white system punctuated by one deliberate color. The neutrals are cool-leaning to avoid the warm AI-default trap; the scarlet is the car's identity.

### Primary
- **Racing Scarlet** (`#dc2626` / hover `#b91c1c`): The brand signature. Used on all CTAs, active tab indicators, section accent marks, and any element that signals "take action" or "this matters." Its rarity is maintained by the monochromatic base around it.

### Neutral

**Light mode:**
- **Near-Black Ink** (`#111110`): All primary text. Kept fractionally warm (not pure `#000`) to avoid harshness against the canvas.
- **Warm Mid-Grey** (`#6f6f6e`): Secondary text, labels, metadata, placeholder text. Must maintain 4.5:1 contrast against all surfaces it appears on.
- **Pure Surface** (`#ffffff`): Card and component backgrounds. Distinct from the canvas to create separation without shadow.
- **Off-White Canvas** (`#f9f9f8`): Page body background. Fractionally warm but not cream — the difference matters. Input backgrounds and response areas.
- **Feather Grey** (`#e4e4e3`): All borders and dividers. Quiet enough to be invisible at rest, present enough to provide structure.

**Dark mode:**
- **Engine Block** (`#0c0c0c`): Page body. As close to black as a display can render without true black artifacts.
- **Carbon Surface** (`#161616`): Cards, inputs, elevated components.
- **Ghost White** (`#eeeeec`): Primary text in dark mode. Not pure white — slightly warm to reduce eye strain.
- **Dark Muted** (`#888886`): Secondary text in dark mode.
- **Carbon Border** (`#252525`): Dark mode borders.

**The One Voice Rule.** Racing Scarlet appears on ≤15% of any given screen. If more than one element per viewport is scarlet, one of them doesn't need to be. Never gradient the scarlet. Never pair it with another saturated color. It is the only voice that isn't neutral; let it be heard.

**The Contrast Floor Rule.** Muted grey on near-white is the single biggest contrast failure. `#6f6f6e` on `#f9f9f8` clears 4.5:1; do not lighten either value. The warmth of the neutrals is not an invitation to reduce contrast.

## 3. Typography

**Display Font:** Cormorant Garant (600 weight, serif, with Georgia fallback)
**Body / UI Font:** Inter (system-ui fallback stack)

**Character:** An authority pairing. Cormorant Garant is cinematic and editorial — high stroke contrast, slight italic lean — used only at display scale where it can breathe. Inter is invisible in the best sense: legible, neutral, exact. The two fonts never compete because they never appear at similar sizes.

### Hierarchy
- **Display** (600 weight, `clamp(3.5rem, 9vw, 7.5rem)`, line-height 1.0, tracking `-0.01em`): Hero heading only. Never used below 3rem. Cormorant Garant exclusive.
- **Headline** (Inter 700, `1rem`, line-height 1.3, tracking `0.1em`, ALL CAPS): Section headers, tab labels, card titles. The uppercase + wide tracking creates structure without requiring size.
- **Body** (Inter 400, `0.95rem`, line-height 1.7): All prose content. Capped at `65ch` line length. Color: `--muted`.
- **Label** (Inter 600, `0.76rem`, line-height 1.2, tracking `0.09em`, ALL CAPS): Form labels, metadata tags, years, spec table headers. The smallest text in the system.

**The Cormorant Ceiling Rule.** Cormorant Garant appears exactly once per page: the hero H1. If a second element needs visual weight, solve it with Inter size and weight contrast, not a second serif instance. Two serifs on one screen dilutes both.

**The Uppercase Contract.** Uppercase text signals structure, not decoration. Headlines and labels may be uppercase. Running prose, button text, and error messages are never uppercase. `letter-spacing` only on uppercase text — never on mixed-case prose (it makes it unreadable).

## 4. Elevation

Layered and atmospheric. This system uses a defined shadow vocabulary to create the feeling of depth — like looking into a car cockpit where panels overlap and recede. Surfaces are not flat; they exist at Z-levels that the shadows make tangible.

Shadows are always warmer and darker than their background (not generic rgba grey) to feel grounded, not floaty. Dark mode shadows are deeper and more opaque because the ambient light contrast is inverted.

### Shadow Vocabulary
- **Ambient** (`0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)`): Cards and inputs at rest. Barely perceptible — just enough to lift the surface off the canvas.
- **Lifted** (`0 4px 6px rgba(0,0,0,0.05), 0 2px 4px rgba(0,0,0,0.04)`): Cards on hover. The surface responds to attention.
- **Focus Ring** (`0 0 0 3px color-mix(in srgb, #dc2626 12%, transparent)`): Inputs and interactive elements on focus. Scarlet-tinted, not grey — the focus state is on-brand.

**The State Shadow Rule.** Shadows communicate state, not decoration. Cards are flat at rest (ambient only) and gain lift on hover. A card that has the same shadow at rest and on hover is not responding to the user.

**The Dark Mode Inversion Rule.** In dark mode, the shadow multipliers increase — `rgba(0,0,0,0.3)` ambient, `rgba(0,0,0,0.3)` lifted. The same shadow value that reads as subtle on white reads as invisible on near-black. Always test elevation in both modes.

## 5. Components

### Buttons
Tactile and confident. Buttons press down — not just visually highlight — so the user feels the interaction.

- **Shape:** Gently squared (6px radius). Not pill, not sharp. Confident without being aggressive.
- **Primary:** Racing Scarlet background (`#dc2626`), white text, `0.65rem 1.25rem` padding, `0.88rem` font size, Inter 600, `0.02em` tracking.
- **Hover:** Background steps to Scarlet Deep (`#b91c1c`). `150ms ease-out` transition on background only — not `all`.
- **Active (press):** `transform: scale(0.97)`, `160ms` transition. The button physically depresses. Non-negotiable.
- **Disabled:** 45% opacity. Cursor not-allowed. No transform or hover change.
- **No secondary button exists yet.** If one is needed, use a `1px border` at `--border` color with transparent background. Never gradient. Never shadow on a button.

### Inputs / Fields
Clean and recessed. Inputs sit slightly below the surface, not above it.

- **Style:** `1px solid --border`, background `--canvas` (not `--surface`), 6px radius, `0.65rem 0.9rem` padding.
- **Focus:** Border steps to Racing Scarlet (`#dc2626`). Scarlet-tinted focus ring (`box-shadow: 0 0 0 3px` at 12% opacity). `150ms ease-out` on `border-color` and `box-shadow` only.
- **Placeholder:** `--muted` color. Must maintain 4.5:1 against `--canvas` — test both modes.
- **No error state designed yet.** When added: border stays scarlet (error reuses the same color as focus; the error message text below carries the meaning).

### Cards / Containers
Precise and elevated. Cards are the primary content container.

- **Corner Style:** Gently rounded (8–10px). Never exceed 12px — the impeccable absolute ban on over-rounding applies.
- **Background:** `--surface` (white in light, Carbon Surface in dark). Distinct from `--canvas` (page bg) to create the lift without relying solely on shadow.
- **Shadow Strategy:** Ambient at rest; Lifted on hover (see Elevation). Never both simultaneously.
- **Border:** `1px solid --border`. The border and shadow are paired at rest — remove one when the other is sufficient. On hover, keep border + add Lifted shadow.
- **Internal Padding:** `1.25–2rem` (md to lg spacing scale).

### Navigation / Tabs
Minimal and structural. The tab nav is the page's primary navigation surface.

- **Tab buttons:** Inter 700, `0.82rem`, uppercase, tracking `0.08em`, `--muted` color at rest. No background, no border.
- **Active state:** `--text` color, 2px Racing Scarlet bottom border (flush with nav bottom border via -1px margin offset). No background.
- **Hover:** `--text` color only. No background change — the hover is typographic, not spatial.
- **Press:** `scale(0.97)` active transform. Tabs are buttons; they press.
- **Tab panel transitions:** Opacity + `translateY(6px)` to `translateY(0)`, 220ms ease-out. Not instant — the content slides into place.

### Hero
The one cinematic exception. The hero is where Cormorant Garant earns its place.

- **Background:** Full-viewport image with `linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.65) 100%)` overlay + a vignette radial gradient. Text must be readable over any image.
- **Eyebrow:** Inter 600, `0.7rem`, tracking `0.22em`, uppercase, `rgba(255,255,255,0.55)`. Quiet preface.
- **H1:** Cormorant Garant 600, display scale. White. The `em` element in italics + Scarlet — the one moment Scarlet and the serif meet.
- **Subtext:** Inter 400, `1rem`, `rgba(255,255,255,0.6)`. Restrained.
- **Minimum height:** `88vh`. The car needs room.

## 6. Do's and Don'ts

### Do:
- **Do** use Racing Scarlet exclusively for interactive elements and active states. One accent, used sparingly.
- **Do** reserve Cormorant Garant for the hero H1 only. One serif instance per page.
- **Do** apply `scale(0.97)` on `:active` to every pressable element — buttons, tabs, theme toggle. The UI must feel responsive to touch.
- **Do** use `color-mix(in srgb, #dc2626 12%, transparent)` for focus rings. Focus is on-brand.
- **Do** test contrast in both light and dark mode. `--muted` on `--canvas` must clear 4.5:1.
- **Do** specify exact CSS properties in transitions (never `transition: all`).
- **Do** gate hover animations behind `@media (hover: hover) and (pointer: fine)` — touch devices get stuck hover states.
- **Do** let photographs and scale carry the visual weight. The design's job is to get out of the way.

### Don't:
- **Don't** use a generic car forum aesthetic — cluttered layout, inline borders, zero visual hierarchy.
- **Don't** use neon colors, flame graphics, or over-the-top tuner energy (the Supra is beyond Fast & Furious).
- **Don't** use warm beige, sand, cream, parchment, or any warm-neutral body background. The canvas is `#f9f9f8` — slightly cool, not warm.
- **Don't** use a corporate brochure layout — stiff columns, centered everything, stock-photo formality.
- **Don't** exceed 12px border-radius on cards or containers. 10px is the ceiling.
- **Don't** use `transition: all`. Always specify exact properties.
- **Don't** apply Cormorant Garant to body text, section headers, or card titles. It exists at exactly one scale.
- **Don't** use uppercase on body text, button labels, or error messages. Uppercase is for structure (headlines, labels), never prose.
- **Don't** add a second saturated color. The scarlet has no peers.
- **Don't** pair `border: 1px solid` with `box-shadow` blur ≥16px on the same element. Pick one structural signal; don't stack them decoratively.
- **Don't** use `border-left` greater than 1px as a colored accent stripe on cards or callouts.
- **Don't** use gradient text (`background-clip: text`). Color emphasis via weight and size only.
