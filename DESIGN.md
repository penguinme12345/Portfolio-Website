---
name: "Jay Patel Portfolio"
description: "A calm matte desktop that presents multidisciplinary work as an approachable application browser."
colors:
  coral: "#e95141"
  coral-dark: "#c8382c"
  canvas-warm-gray: "#ededed"
  surface-matte-white: "#ffffff"
  sidebar-soft-gray: "#f3f3f3"
  surface-soft: "#f7f7f7"
  ink-black: "#111111"
  text-muted: "#6f6f77"
  line-gray: "#d4d4d7"
  signal-yellow: "#f2bd45"
  signal-green: "#67c759"
typography:
  display:
    fontFamily: "Figtree Variable, Avenir Next, sans-serif"
    fontSize: "clamp(2.75rem, 5vw, 4.8rem)"
    fontWeight: 850
    lineHeight: 0.98
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Figtree Variable, Avenir Next, sans-serif"
    fontSize: "clamp(2rem, 4vw, 3.65rem)"
    fontWeight: 830
    lineHeight: 1
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Figtree Variable, Avenir Next, sans-serif"
    fontSize: "clamp(1.25rem, 2vw, 1.7rem)"
    fontWeight: 780
    lineHeight: 1.12
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Figtree Variable, Avenir Next, sans-serif"
    fontSize: "1rem"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "normal"
  label:
    fontFamily: "Figtree Variable, Avenir Next, sans-serif"
    fontSize: "0.82rem"
    fontWeight: 760
    lineHeight: 1
    letterSpacing: "0.035em"
rounded:
  control: "0.65rem"
  input: "0.7rem"
  nav: "0.72rem"
  dock-control: "0.75rem"
  card: "0.875rem"
  menu: "1rem"
  shell: "1.125rem"
  mobile-dock: "1.45rem"
  pill: "999px"
spacing:
  xs: "0.35rem"
  sm: "0.65rem"
  md: "1rem"
  lg: "1.55rem"
  xl: "2.5rem"
components:
  window-shell:
    backgroundColor: "{colors.surface-matte-white}"
    textColor: "{colors.ink-black}"
    rounded: "{rounded.shell}"
    width: "auto"
  sidebar-nav-item:
    backgroundColor: "transparent"
    textColor: "{colors.ink-black}"
    typography: "{typography.body}"
    rounded: "{rounded.nav}"
    padding: "0.65rem 0.75rem"
    height: "3.25rem"
  sidebar-nav-item-active:
    backgroundColor: "{colors.surface-matte-white}"
    textColor: "{colors.ink-black}"
    typography: "{typography.body}"
    rounded: "{rounded.nav}"
    padding: "0.65rem 0.75rem"
    height: "3.25rem"
  button-secondary:
    backgroundColor: "{colors.surface-matte-white}"
    textColor: "{colors.ink-black}"
    typography: "{typography.body}"
    rounded: "{rounded.control}"
    padding: "0.62rem 0.9rem"
    height: "2.7rem"
  card-soft:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.ink-black}"
    rounded: "{rounded.card}"
    padding: "1.2rem 1.55rem"
  input:
    backgroundColor: "{colors.surface-matte-white}"
    textColor: "{colors.ink-black}"
    typography: "{typography.body}"
    rounded: "{rounded.input}"
    padding: "0.65rem 0.75rem"
    height: "2.8rem"
  dock-control:
    backgroundColor: "transparent"
    textColor: "{colors.ink-black}"
    rounded: "{rounded.dock-control}"
    size: "3.1rem"
---

# Design System: Jay Patel Portfolio

## Overview

**Creative North Star: "The Calm Application Desktop"**

This portfolio is an Experience surface: the visitor enters a quiet, matte workspace and explores Jay's work through familiar operating-system behavior. The visual language keeps the application metaphor while rejecting glossy imitation, skeuomorphic chrome, and the generic long-scroll portfolio. The interface should feel direct, grounded, and editorial enough that the work remains the loudest element.

Warm gray surrounds matte-white application surfaces. A soft sidebar, black geometric type, thin neutral rules, restrained coral signals, and one family of down-right shadows create hierarchy without spectacle. The About app opens by default; persistent launchers let recruiters and collaborators move quickly without losing the sense of place.

**Key Characteristics:**

- Matte, warm, and calm rather than glossy or nostalgic.
- One shared desktop shell across every portfolio application.
- Strong black Figtree hierarchy with Phosphor interface glyphs.
- Coral appears as a precise active-state and action signal.
- Portfolio content remains primary; operating-system chrome stays restrained.
- Desktop discovery becomes a focused, app-native mobile flow.

## Colors

The palette is a warm grayscale workspace with a single coral voice and small semantic status colors.

### Primary

- **Signal Coral** (`coral`): marks active icons, selected controls, focus outlines, checked toggles, progress, and the most important directional link.
- **Pressed Coral** (`coral-dark`): provides readable coral text and stronger hover/pressed emphasis on white.

### Neutral

- **Workspace Gray** (`canvas-warm-gray`): the desktop field outside the active application.
- **Matte White** (`surface-matte-white`): the primary window, dock, active navigation item, and control surface.
- **Soft Sidebar Gray** (`sidebar-soft-gray`): the fixed navigation sidebar and low-contrast header bands.
- **Quiet Surface** (`surface-soft`): cards, hover fills, toolbar bands, and secondary containers.
- **Near-Black Ink** (`ink-black`): headings, body copy, icons, and selected controls.
- **Muted Graphite** (`text-muted`): supporting copy, metadata, labels, and secondary context.
- **Hairline Gray** (`line-gray`): one-pixel rules, borders, and structural separators.

### Secondary

- **Window Yellow** (`signal-yellow`): the minimize control only.
- **Status Green** (`signal-green`): the third window control and positive availability/status only.

**The Coral Signal Rule.** Coral identifies selection, focus, progress, or a primary directional moment; it never becomes a large decorative field or competes with portfolio media.

## Typography

**Display Font:** Figtree Variable (with Avenir Next and sans-serif fallbacks)  
**Body Font:** Figtree Variable (with Avenir Next and sans-serif fallbacks)  
**Icon Font:** Phosphor Portfolio, used only for interface glyphs

**Character:** Figtree gives the desktop a clean geometric voice with enough warmth for a personal portfolio. Weight and scale create hierarchy; the system does not rely on multiple type families, novelty lettering, or all-caps body copy.

### Hierarchy

- **Display:** Dense, high-weight names and contact statements; use only when one idea deserves first attention.
- **Headline:** App-level project and section leads, kept compact with balanced wrapping.
- **Title:** Card titles, sidebar branding, and prominent facts.
- **Body:** Default reading text; keep narrative copy around 66-72 characters wide and use comfortable line height.
- **Label:** Short uppercase metadata and titlebar labels, never paragraph text.
- **Icons:** Phosphor glyphs inherit the adjacent text color and remain supplemental to visible labels or accessible names.

**The Weight-Before-Decoration Rule.** Build hierarchy with Figtree size, weight, spacing, and tone before introducing boxes, color, or ornament.

## Layout

The desktop composition has four reference layers. A fixed left **launch rail** exposes three large shortcuts: About, Projects, and Contact. A single **application window** occupies the central canvas using responsive outer insets, an 18px shell radius, a 4.6rem centered titlebar, and an approximately 72/28 content-to-navigation split. A fixed **soft sidebar** sits inside the window geometry and remains visible while any app is open. A centered **floating dock** overlaps the lower window edge and combines launchers, open-state indicators, and the system tray.

Content scrolls inside the application window, not on the desktop. The main content column clears the clamped 15-18.75rem sidebar and receives responsive padding. About uses a wide alpine image, large identity block, two concise fact panels, a readable summary, and quick links before secondary detail. Other apps inherit the same frame rather than inventing independent page shells.

At 1100px the window insets, sidebar, rail icons, controls, and dock tighten without changing the architecture. At 820px and below, the desktop rail and sidebar disappear, the active window becomes a borderless full-viewport surface, and the dock becomes a five-destination bottom bar for Apps, About, Projects, CAD, and Contact. Apps opens the complete launcher library, including Files, Docs, Finance, GitHub, Settings, AI Search, and the optional Bonus app. Content leaves room for the dock and the device safe area. At 480px, side padding and type scale tighten further, fact panels stack, and tab groups may scroll horizontally.

**The Shared Frame Rule.** Every preserved portfolio app opens inside the same window, titlebar, navigation state, and dock architecture; do not turn individual apps into disconnected landing pages.

**The Portable Metaphor Rule.** Preserve OS-like navigation on small screens, but remove desktop-only furniture and drag behavior instead of shrinking the desktop composition.

## Elevation & Depth

Depth is structural and sparse. The window, dock, and large desktop launch glyphs share one grounded down-right shadow direction; inner cards and tool panels stay flat and separate through tone and one-pixel rules. Active and inactive windows do not blur, fade, or accumulate competing elevation effects.

### Shadow Vocabulary

- **Window Grounding:** a broad warm shadow reserved for the main application shell and floating menus.
- **Dock Grounding:** a slightly tighter shadow that keeps the dock legible where it overlaps the window.
- **Shortcut Lift:** the lightest shadow; it rises subtly on hover and returns on press.

**The One Grounded Shadow Rule.** Cast depth down and right from major floating structures only; cards inside a window remain flat.

## Shapes

The form language is softly mechanical. Application shells use an 18px radius, portfolio media and reusable cards use 14px, and interactive controls use compact 10-12px corners. The desktop dock is fully pill-shaped; its mobile replacement uses a larger 23px container radius. Window controls are circular. Thin neutral borders define structure, while project rows and contact actions often stay square and rely on horizontal rules.

**The Nested-Radius Rule.** Large radii belong to the outer shell and primary media; inner controls step down in radius so containers never look like stacks of unrelated bubbles.

## Components

### Application Window

- **Character:** One calm, shared stage for every experience.
- **Structure:** Centered uppercase title in a matte titlebar, three traffic-light controls at left, soft sidebar below, and an independently scrolling content pane.
- **State:** Opening uses a short vertical clip reveal. Bringing a window forward updates active navigation and dock state without visual dimming.
- **Mobile:** The frame becomes full-screen and flat; controls remain visible, dragging is disabled, and content scrolls above the bottom dock.

### Desktop Launch Rail

- **Character:** Three high-confidence entry points rather than a field of tiny shortcuts.
- **Shape:** Large rounded-square white glyph tiles with centered labels; Projects is the coral exception.
- **State:** Hover lifts the glyph; press returns it toward the canvas. The whole control remains a semantic button.

### Sidebar Navigation

- **Character:** Persistent, quiet, and easy to scan.
- **Default:** Transparent row, black icon and label, minimum 3.25rem height.
- **Hover:** Translucent white fill and a slight rightward nudge.
- **Active:** Matte-white fill with a coral icon and `aria-current="page"`.

### Floating Dock

- **Character:** An overlapping utility shelf, not a decorative glass taskbar.
- **Desktop:** White pill, compact square launch buttons, active/open indicators, project count, clock, and settings access.
- **Mobile:** Five equal-width labeled destinations: Apps, About, Projects, CAD, and Contact. Apps exposes the complete preserved application library. The active destination receives a short coral underline; inactive labels remain AA-readable while icons stay near-black.

### Buttons

- **Shape:** Compact rounded rectangle with a minimum 2.7rem height.
- **Default:** Matte white, black type, and a one-pixel gray border.
- **Hover / Focus:** Hover shifts the border and text toward coral with a slight lift. Keyboard focus uses the global coral outline and visible offset.
- **Selected:** Near-black fill with white text; selection is never communicated by color alone when an accessible state attribute is available.

### Cards / Containers

- **Corner Style:** Soft 14px corners.
- **Background:** Quiet gray or matte white, chosen to create tonal separation from the parent surface.
- **Shadow Strategy:** Flat inside the application window.
- **Border:** One-pixel light gray when the edge needs definition.
- **Internal Padding:** Usually 1.2rem by 1.55rem for concise facts; larger content panels scale upward responsively.

### Inputs / Fields

- **Style:** White field, black text, 11px radius, one-pixel gray border, and minimum 2.8rem height.
- **Focus:** Coral border plus a soft translucent coral halo; the global focus-visible outline remains available.
- **Placeholder:** Muted graphite with full opacity for readable contrast.

### Preserved OS Applications

The interface keeps About, My PC/file exploration, Projects with its LoL demo, Finance Tracker, CAD & Design, GitHub/browser, Contact/mail, AI Search, the Word-style document editor, and Settings. The start menu, desktop context menu, lock screen, system tray, window controls, and optional Bonus app remain functional supporting utilities. These experiences may simplify their visual chrome to match the matte system, but their interaction and content capabilities are product truth and must not be removed.

**The Real Controls Rule.** OS-shaped elements are working controls with labels, keyboard behavior, state, and focus management; never use decorative window chrome that implies unavailable actions.

**The Return-to-Trigger Rule.** Opening an app moves focus into the relevant window or task; closing it returns focus to the connected launcher that opened it.

## Do's and Don'ts

### Do:

- **Do** keep the warm-gray canvas, matte-white surfaces, soft sidebar, black type, and coral signal roles stable across every app.
- **Do** preserve the rail/window/sidebar/dock relationship on desktop and the focused full-screen window/bottom-dock relationship on mobile.
- **Do** use semantic buttons, visible labels or accessible names, `aria-current` or `aria-pressed` for state, and polite live regions for dynamic feedback.
- **Do** keep interactive targets at least the implemented 2.7-3.25rem heights and make hover, press, focus, and active states distinct.
- **Do** honor `prefers-reduced-motion`, keep Escape dismissal and Ctrl/Cmd+K AI search, disable drag on touch/mobile, and prevent horizontal content overflow.
- **Do** retain all preserved OS applications and utilities while expressing them through the shared matte shell.

### Don't:

- **Don't** reintroduce glossy Vista-style gradients, glassmorphism, neon glow, wallpaper-led spectacle, or ornamental skeuomorphism.
- **Don't** spread coral across large backgrounds or use it for arbitrary decoration; its rarity makes state changes legible.
- **Don't** add shadows to nested cards, stack rounded cards inside rounded cards, or give each app a separate visual identity.
- **Don't** shrink the desktop rail and sidebar onto mobile; use the purpose-built five-destination dock.
- **Don't** hide focus outlines, depend on hover alone, remove accessible state attributes, or animate through a reduced-motion preference.
- **Don't** replace the application architecture with a generic scrolling portfolio or remove working apps in the name of visual simplification.
