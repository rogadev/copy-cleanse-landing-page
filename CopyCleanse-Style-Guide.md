# CopyCleanse Style Guide

## Overview
This style guide captures the design system used in the CopyCleanse landing page. It defines a modern, dark-themed interface with glassmorphism effects, subtle gradients, and accessible design patterns.

---

## Color Palette

### Background Colors
- **Primary Background**: `bg-gradient-to-b from-slate-900 via-slate-950 to-black`
- **Secondary Background**: `bg-slate-950/40`
- **Card Background**: `bg-white/5`
- **Input Background**: `bg-slate-950/70`
- **Glass Effect**: `backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/80`

### Text Colors
- **Primary Text**: `text-slate-100`
- **Secondary Text**: `text-slate-300`
- **Muted Text**: `text-slate-400`
- **White Text**: `text-white`

### Accent Colors
- **Primary Brand**: Indigo (`bg-indigo-500`, `text-indigo-300`, `ring-indigo-400`)
- **Secondary Brand**: Violet (`text-violet-400`)
- **Brand Gradient**: `bg-gradient-to-r from-indigo-400 to-violet-400`

### Status Colors
- **Success**: Emerald (`text-emerald-300`, `bg-emerald-500/10`, `ring-emerald-400/30`)
- **Primary Action**: Indigo (`bg-indigo-500`, `hover:bg-indigo-600`)
- **Background Glow**: `bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-violet-500`

### AI Artifact Highlighting (Special Use)
- **Smart Quotes**: `bg-yellow-500/20 text-yellow-300 border-yellow-500/30`
- **Em Dashes**: `bg-red-500/20 text-red-300 border-red-500/30`  
- **Soft Hyphens**: `bg-purple-500/20 text-purple-300 border-purple-500/30`
- **Ellipses**: `bg-blue-500/20 text-blue-300 border-blue-500/30`
- **Tracking Params**: `bg-orange-500/20 text-orange-300 border-orange-500/30`

---

## Typography

### Font Sizes
- **Hero**: `text-4xl sm:text-5xl`
- **Section Headers**: `text-2xl`
- **Card Titles**: `text-lg`
- **Body Text**: `text-sm`
- **Small Text**: `text-xs`

### Font Weights
- **Semibold**: `font-semibold` (headers, buttons)
- **Medium**: `font-medium` (secondary buttons, labels)
- **Regular**: Default weight for body text

### Font Features
- **Tight Tracking**: `tracking-tight` (for headings)
- **Leading**: `leading-relaxed` (for readable content blocks)

---

## Layout & Spacing

### Container Widths
- **Main Content**: `max-w-6xl`
- **Narrow Content**: `max-w-4xl`
- **Text Content**: `max-w-prose`

### Padding & Margins
- **Section Padding**: `py-10 sm:py-14` or `py-10 sm:py-16`
- **Container Padding**: `px-4`
- **Small Padding**: `p-3`, `p-4`, `p-5`
- **Button Padding**: `px-4 py-2.5` (primary), `px-4 py-2` (secondary)

### Grid Systems
- **Two Column**: `grid gap-8 lg:grid-cols-2 lg:items-center`
- **Three Column**: `grid gap-6 md:grid-cols-3`
- **Flexible**: `flex flex-wrap gap-2`

---

## Component Patterns

### Buttons

#### Primary Button
```html
<button class="inline-flex items-center gap-2 rounded-xl bg-indigo-500 px-4 py-2.5 text-sm font-semibold text-white shadow hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-slate-900">
```

#### Secondary Button
```html
<button class="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium text-slate-200 ring-1 ring-white/10 hover:bg-white/10">
```

#### Ghost Button
```html
<button class="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm font-medium text-white ring-1 ring-white/15 hover:bg-white/15">
```

### Cards

#### Standard Card
```html
<div class="rounded-2xl border border-white/10 bg-white/5 p-5 ring-1 ring-white/10">
```

#### Preview Card (with glow effect)
```html
<div class="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-2xl ring-1 ring-black/5">
  <!-- Card content -->
  <!-- Glow effect -->
  <div class="pointer-events-none absolute -inset-x-8 -bottom-8 -top-8 -z-10 blur-3xl opacity-30 bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-violet-500"></div>
</div>
```

### Badges & Status Indicators

#### Feature Badge
```html
<div class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
```

#### Status Badge
```html
<div class="inline-flex items-center gap-2 rounded-lg bg-emerald-500/10 px-2 py-1 text-emerald-300 ring-1 ring-emerald-400/30">
```

#### Step Number
```html
<div class="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-300 ring-1 ring-indigo-400/30">
```

### Form Elements

#### Text Input/Textarea
```html
<input class="w-full resize-y rounded-xl border border-white/10 bg-slate-950/70 p-4 text-sm text-slate-100 placeholder:text-slate-500 shadow-inner ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-400">
```

#### Label
```html
<label class="block text-sm font-medium text-slate-200">
```

---

## Interactive States

### Hover Effects
- **Background**: `hover:bg-white/10`, `hover:bg-indigo-600`
- **Text Color**: `hover:text-slate-200`
- **Transform**: `group-hover:scale-105`

### Focus States
- **Primary**: `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400`
- **With Offset**: `focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900`

### Transitions
- **Standard**: `transition` or `transition-colors`

---

## Icons

### Icon System
- **Library**: Astro Icon (preferred over Lucide)
- **Standard Sizes**: `h-3.5 w-3.5`, `h-4 w-4`, `h-9 w-9`

### Icon Usage
- **Actions**: `sparkles`, `clipboard-list`, `clipboard-check`
- **Status**: `check-circle`, `shield-check`
- **Information**: `info`
- **External**: `github`

---

## Visual Effects

### Glassmorphism
```html
<div class="backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/80">
```

### Gradient Overlays
```html
<div class="pointer-events-none absolute -inset-x-8 -bottom-8 -top-8 -z-10 blur-3xl opacity-30 bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-violet-500">
```

### Ring Borders
- **Subtle**: `ring-1 ring-white/10`
- **Strong**: `ring-1 ring-white/15`
- **Colored**: `ring-1 ring-indigo-400/30`

### Box Shadows
- **Standard**: `shadow`
- **Large**: `shadow-2xl`
- **Inner**: `shadow-inner`

---

## Layout Sections

### Header (Sticky Navigation)
- Sticky positioning with backdrop blur
- Logo with hover scale effect
- CTA button (hidden on small screens)

### Hero Section
- Two-column grid on large screens
- Badge with icon and text
- Large heading with gradient text
- Description paragraph with max-width
- Dual CTA buttons
- Privacy note in small text

### Content Sections
- Consistent border separators (`border-t border-white/5`)
- Section-specific background colors
- Three-column grid for steps/features

### Footer
- Minimal design with centered content
- Flex layout for responsive alignment

---

## Accessibility Guidelines

### Focus Management
- All interactive elements must have visible focus states
- Use `focus-visible` for keyboard-only focus indication
- Ring colors should contrast against dark backgrounds

### Color Contrast
- Primary text on dark backgrounds: minimum 4.5:1 ratio
- Ensure sufficient contrast for all text colors
- Status indicators should be distinguishable by more than color alone

### Semantic HTML
- Use proper heading hierarchy (h1, h2, h3)
- Include ARIA labels where needed
- Form labels must be properly associated

---

## Design Principles

1. **Dark-first Design**: All components designed for dark backgrounds
2. **Subtle Transparency**: Use opacity-based backgrounds for layering
3. **Consistent Spacing**: Maintain rhythm with Tailwind's spacing scale
4. **Accessible Interactions**: Clear hover/focus states for all interactive elements
5. **Progressive Enhancement**: Mobile-first responsive design
6. **Glassmorphism**: Subtle backdrop blur effects for depth
7. **Icon Consistency**: Use astro-icon library exclusively

---

## Implementation Notes

### CSS Framework
- **Tailwind CSS 4.x** with `@tailwindcss/vite`
- Custom AI artifact highlighting styles in global.css
- PostCSS configuration for advanced features

### Component Architecture
- Astro components for server-side rendering
- Utility-first approach with Tailwind classes
- Minimal custom CSS for special effects

### Performance Considerations
- Use CSS transforms for animations
- Leverage backdrop-filter with fallbacks
- Optimize for Core Web Vitals
