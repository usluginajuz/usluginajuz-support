# Timelly Support Site — Frontend Design

Guidelines for UI design on the Timelly landing/support website.

## Design Philosophy: "Porsche 911"

Timelly's design follows the Porsche 911 principle: **timeless, purposeful, refined**. Every element exists for a reason. Nothing decorative, nothing wasted — but the result feels premium and considered.

Core qualities:
- **Trust & safety** — the user must feel secure from the first screen. Clean layouts, predictable patterns, clear hierarchy.
- **Intuitive guidance** — every screen leads the user by the hand. The next action is always obvious. No dead ends, no confusion.
- **Professional warmth** — not cold corporate, not childish. Confident and approachable, like a well-dressed person who smiles.
- **Purposeful minimalism** — fewer elements, each one better. White space is a feature, not empty space.

Design inspirations:
- **Revolut** — clean information density, trust through clarity, smooth transitions between states
- **Claude.ai** — calm spaciousness, refined typography, understated elegance
- **Porsche 911** — iconic silhouette from restraint not addition. If a detail doesn't serve the user, remove it.

**Anti-patterns to avoid:**
- Generic "AI slop": purple gradients, Inter/Roboto fonts, predictable card grids, gratuitous shadows
- Overdesign: decorative illustrations, unnecessary animations, busy backgrounds
- Emoji as UI elements: never use emoji in user-facing text or interfaces — they look cheap and unprofessional. Use proper icons (FontAwesome6) or plain text instead.
- Feature dumping: showing everything at once instead of progressive disclosure
- Visual noise: too many colors, competing font sizes, inconsistent spacing

## Color System

**Always use semantic tokens via `useTheme()` from `@/theme/ThemeProvider`. Never hardcode hex values.**

The site supports both light and dark mode (auto-detected from browser). All components must use `colors.` tokens.

### Semantic tokens (from `ThemeColors` in `theme/colors.ts`):

**Branding:**
- `colors.primary` — main brand color (`#1b1b38` in light, `#6FA8D0` in dark)
- `colors.secondary` — accent color (`#6FA8D0` in light, `#1b1b38` in dark)

**Backgrounds:**
- `colors.background` — main page background (`#FFFFFF` / `#111827`)
- `colors.backgroundSecondary` — cards, alternating sections (`#F9FAFB` / `#1F2937`)

**Text:**
- `colors.text` — headings, primary body text
- `colors.textSecondary` — descriptions, secondary info

**Borders:**
- `colors.border` — standard borders

### Usage pattern:
```typescript
import { useTheme } from '@/theme/ThemeProvider';

const { colors } = useTheme();

// Correct
<View style={{ backgroundColor: colors.background }}>
  <Text style={{ color: colors.text }}>Title</Text>
</View>

// Wrong — never hardcode
<View style={{ backgroundColor: '#FFFFFF' }}>
  <Text style={{ color: '#1b1b38' }}>Title</Text>
</View>
```

### Color rules:
- `colors.primary` is the dominant brand color — use for headers, primary buttons, icon accents.
- `colors.secondary` — interactive elements, hover states.
- Cards use `colors.background` surface on `colors.backgroundSecondary` sections, or vice versa.
- For icon backgrounds, use `colors.primary + '15'` (15% opacity) — established pattern across the site.
- Avoid introducing new colors. Work within the palette.

## Typography

This project uses **inline font styles** (no shared typography object). Follow consistent sizes:

| Use | Size | Weight | Line Height |
|-----|------|--------|-------------|
| Section titles | 28px | 800 | — |
| Card titles | 17-20px | 700-800 | — |
| Body text | 14-15px | 400 | 20-22 |
| Subtitles / descriptions | 15px | 400 | 22 |
| Labels (uppercase) | 12px | 600 | — |
| Copyright / fine print | 12px | 400 | — |

### Font family:
System defaults. Do NOT hardcode any font family.

## Spacing & Layout

This project uses **inline numeric values** (no shared spacing object). Follow consistent values:

| Use | Value |
|-----|-------|
| Page horizontal padding | 24px |
| Section vertical padding | 48px |
| Card padding | 24-28px |
| Card gap | 16-20px |
| Card max width | 300-320px |
| Content max width | 500-700px |
| Border radius (cards) | 16px |
| Border radius (icon wraps) | 12-14px |
| Icon wrap size | 48-52px |

## Component Patterns

### Page layout
Every page follows the same structure:
```tsx
<View style={{ flex: 1, backgroundColor: colors.background }}>
  <Header />
  <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
    {/* Page content */}
    <View style={{ width: '100%' }}>
      <Footer />
    </View>
  </ScrollView>
</View>
```

### Section pattern
Alternating background sections:
```tsx
// Normal section
<View style={{ paddingHorizontal: 24, paddingVertical: 48, alignItems: 'center' }}>

// Alt section (different background)
<View style={{ paddingHorizontal: 24, paddingVertical: 48, alignItems: 'center', backgroundColor: colors.backgroundSecondary }}>
```

### Cards
Standard pattern with border + subtle shadow:
```tsx
<View style={{
  backgroundColor: colors.background,
  borderRadius: 16,
  padding: 24,
  width: 300,
  borderWidth: 1,
  borderColor: colors.border,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.06,
  shadowRadius: 8,
}}>
```

### Icon accent wraps
Consistent icon container pattern:
```tsx
<View style={{
  width: 48,
  height: 48,
  borderRadius: 12,
  backgroundColor: colors.primary + '15',
  alignItems: 'center',
  justifyContent: 'center',
}}>
  <FontAwesome6 name="icon-name" size={22} color={colors.primary} />
</View>
```

### Grid layouts
Use flexbox wrapping for card grids:
```tsx
<View style={{
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: 16,
  maxWidth: 700,
}}>
```

## Icons

**Always use FontAwesome6** via `@expo/vector-icons/FontAwesome6`. Standard sizes: 11-24px depending on context.

## Implementation Rules

1. **Styles in `StyleSheet.create()`** — either at component level or inside the component with theme colors.
2. **Colors from `useTheme()`** — always `const { colors } = useTheme()`. Never import hex values directly.
3. **Consistent spacing** — follow established values from existing pages.
4. **Polish text** — all user-facing strings in Polish. Human language: "Coś poszło nie tak" > "Wystąpił błąd".
5. **Dark mode compatibility** — every page must work in both light and dark mode.
6. **Web-first** — this is a web-only site. Optimize for desktop and mobile browser viewports.
7. **Responsive** — cards should wrap naturally using flexWrap. Content max-width prevents overly wide layouts.

## Quality Checklist

Before considering a page done:

- [ ] Does it feel trustworthy and professional?
- [ ] Are ALL colors from `useTheme()` — zero hardcoded hex values?
- [ ] Does it work in both light and dark mode?
- [ ] Does it look good on mobile (375px) and desktop?
- [ ] Is Polish text natural and human, not robotic?
- [ ] Does it follow the Header → Content → Footer structure?
- [ ] Does it feel like a Porsche 911 — refined, purposeful, nothing wasted?
