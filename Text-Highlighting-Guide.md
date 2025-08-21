# CopyCleanse Text Highlighting Guide

## Overview
This guide defines how to visually highlight AI artifacts and problematic characters in text before cleaning. The highlighting system helps users understand what will be removed or normalized by CopyCleanse.

---

## Highlighting Categories

### 1. Smart Quotes
**Visual Style**: Yellow highlighting
```css
.ai-smart-quote {
  @apply bg-yellow-500/20 text-yellow-300 px-0.5 rounded border border-yellow-500/30;
  box-shadow: 0 0 4px rgba(234, 179, 8, 0.2);
}
```

**Characters to Highlight**:
- Left double quote: `"`
- Right double quote: `"`
- Left single quote: `'`
- Right single quote: `'`

**Example Usage**:
```html
Here's some <span class="ai-smart-quote">"</span>AI-generated<span class="ai-smart-quote">"</span> text
```

### 2. Em Dashes & En Dashes
**Visual Style**: Red highlighting
```css
.ai-em-dash {
  @apply bg-red-500/20 text-red-300 px-0.5 rounded border border-red-500/30;
  box-shadow: 0 0 4px rgba(239, 68, 68, 0.2);
}
```

**Characters to Highlight**:
- Em dash: `—` (U+2014)
- En dash: `–` (U+2013)

**Example Usage**:
```html
Text with em dash <span class="ai-em-dash">—</span> like this one <span class="ai-em-dash">—</span> stands out
```

### 3. Soft Hyphens
**Visual Style**: Purple highlighting
```css
.ai-soft-hyphen {
  @apply bg-purple-500/20 text-purple-300 px-0.5 rounded border border-purple-500/30;
  box-shadow: 0 0 4px rgba(168, 85, 247, 0.2);
}
```

**Characters to Highlight**:
- Soft hyphen: `­` (U+00AD) - invisible character used for word breaking

**Example Usage**:
```html
Words with soft<span class="ai-soft-hyphen">­</span>hyphens hidden inside
```

### 4. Unicode Ellipses
**Visual Style**: Blue highlighting
```css
.ai-ellipsis {
  @apply bg-blue-500/20 text-blue-300 px-0.5 rounded border border-blue-500/30;
  box-shadow: 0 0 4px rgba(59, 130, 246, 0.2);
}
```

**Characters to Highlight**:
- Horizontal ellipsis: `…` (U+2026)

**Example Usage**:
```html
Text that trails off<span class="ai-ellipsis">…</span>
```

### 5. URL Tracking Parameters
**Visual Style**: Orange highlighting
```css
.ai-tracking-param {
  @apply bg-orange-500/20 text-orange-300 px-1 rounded border border-orange-500/30;
  box-shadow: 0 0 4px rgba(249, 115, 22, 0.2);
}
```

**Parameters to Highlight**:
- UTM parameters: `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`
- AI tracking: `utm_source=chatgpt`, `utm_source=claude`, etc.
- Social media: `fbclid`, `gclid`, `msclkid`

**Example Usage**:
```html
https://example.com/page?<span class="ai-tracking-param">utm_source=chatgpt</span>
```

---

## Implementation Patterns

### Complete Demo Text Example
```html
<div class="h-48 sm:h-40 overflow-hidden rounded-md bg-gradient-to-br from-slate-800 to-slate-900 p-3 text-slate-200 text-sm leading-relaxed flex flex-col justify-between">
  <p>
    Here's some <span class="ai-smart-quote">"</span>AI-generated<span class="ai-smart-quote">"</span> text <span class="ai-em-dash">—</span> it looks fine at first glance, but actually hides issues<span class="ai-ellipsis">…</span>
  </p>
  <p>
    Zero-width characters like soft<span class="ai-soft-hyphen">­</span>hyphens can be hard to spot.
  </p>
  <p>
    Smart quotes <span class="ai-smart-quote">'</span>like these<span class="ai-smart-quote">'</span> can be a giveaway.
  </p>
  <p>
    Even links can betray you: https://site.com/page?<span class="ai-tracking-param">utm_source=chatgpt</span>
  </p>
</div>
```

### Detection Logic Patterns

#### JavaScript Regex Patterns for Detection
```javascript
const AI_ARTIFACTS = {
  smartQuotes: /[""'']/g,
  emDashes: /[—–]/g,
  softHyphens: /\u00AD/g,
  unicodeEllipses: /…/g,
  trackingParams: /[?&](utm_[^=]*=[^&]*|fbclid=[^&]*|gclid=[^&]*|msclkid=[^&]*)/g
};
```

#### HTML Wrapping Function Example
```javascript
function highlightArtifacts(text) {
  return text
    .replace(AI_ARTIFACTS.smartQuotes, '<span class="ai-smart-quote">$&</span>')
    .replace(AI_ARTIFACTS.emDashes, '<span class="ai-em-dash">$&</span>')
    .replace(AI_ARTIFACTS.softHyphens, '<span class="ai-soft-hyphen">$&</span>')
    .replace(AI_ARTIFACTS.unicodeEllipses, '<span class="ai-ellipsis">$&</span>')
    .replace(AI_ARTIFACTS.trackingParams, '<span class="ai-tracking-param">$&</span>');
}
```

---

## Container Styling

### Preview Container
The highlighted text should be displayed in a dark container with appropriate contrast:

```html
<div class="rounded-lg bg-slate-950 p-3 ring-1 ring-white/10">
  <div class="h-48 sm:h-40 overflow-hidden rounded-md bg-gradient-to-br from-slate-800 to-slate-900 p-3 text-slate-200 text-sm leading-relaxed">
    <!-- Highlighted text content here -->
  </div>
</div>
```

### Status Indicators
After highlighting, show what was found:

```html
<div class="mt-3 flex items-center justify-between">
  <div class="text-xs text-slate-400">Example output (static demo)</div>
  <div class="inline-flex items-center gap-2 rounded-lg bg-emerald-500/10 px-2 py-1 text-emerald-300 ring-1 ring-emerald-400/30">
    <Icon name="clipboard-check" class="h-4 w-4" /> Cleaned
  </div>
</div>
```

---

## Usage Guidelines

### When to Highlight
1. **Before Cleaning**: Show original text with all artifacts highlighted
2. **Comparison Mode**: Side-by-side original vs cleaned
3. **Educational Purpose**: Help users understand what gets removed

### Visual Hierarchy
1. **Most Problematic** (Red): Em dashes - highly visible AI artifacts
2. **Moderately Problematic** (Orange): URL tracking - privacy concerns  
3. **Formatting Issues** (Yellow): Smart quotes - typography artifacts
4. **Hidden Characters** (Purple): Soft hyphens - invisible problems
5. **Text Flow** (Blue): Ellipses - stylistic inconsistencies

### Accessibility Considerations
- Each highlight color has sufficient contrast (3:1 minimum)
- Borders provide additional visual distinction beyond color
- Glow effects enhance visibility without relying on color alone
- Screen readers can identify the highlighted content

---

## Statistical Display

### Cleaning Summary Format
```html
<div class="mt-4 flex flex-wrap items-center gap-2 text-xs">
  <span class="inline-flex items-center gap-2 rounded-lg bg-emerald-500/10 px-2 py-1 text-emerald-300 ring-1 ring-emerald-400/30">
    <Icon name="check-circle" class="h-4 w-4" /> Cleaned
  </span>
  <span class="inline-flex items-center gap-2 rounded-lg bg-indigo-500/10 px-2 py-1 text-indigo-300 ring-1 ring-indigo-400/30">
    <Icon name="clipboard-check" class="h-4 w-4" /> Copied to clipboard
  </span>
  <span class="text-slate-400">•</span>
  <span class="text-slate-300">0 hidden chars removed • 2 quotes • 1 dash • 2 params</span>
</div>
```

### Count Display Pattern
- **Format**: `{count} {type} {action}`
- **Examples**: "2 quotes normalized", "1 dash replaced", "3 params removed"
- **Zero state**: "0 hidden chars removed"

---

## Interactive Behavior

### Real-time Highlighting
- Highlight artifacts as user types or pastes
- Update counts dynamically
- Show cleaning preview immediately

### Copy Confirmation
- Visual feedback when text is copied
- Temporary state changes (button text, colors)
- Success indicators with icons

### Keyboard Shortcuts
- Display shortcuts in `<kbd>` elements: `<kbd class="rounded border border-white/20 bg-white/5 px-1">Esc</kbd>`
- Common shortcuts: Ctrl/Cmd+V (paste), Ctrl/Cmd+C (copy), Esc (clear)

---

## Best Practices

1. **Progressive Disclosure**: Show highlights on demand, not overwhelmingly
2. **Contextual Information**: Explain what each color means
3. **Performance**: Use CSS-only highlights when possible
4. **Batch Processing**: Highlight all artifacts in single pass
5. **Graceful Degradation**: Ensure text remains readable without highlighting

---

## Technical Implementation

### Required Dependencies
- **Tailwind CSS 4.x** for utility classes
- **Astro Icon** for status icons (NOT Lucide)
- **Custom CSS** for glow effects and specialized highlighting

### Browser Support
- Modern browsers supporting CSS backdrop-filter
- Fallback backgrounds for older browsers
- Touch-friendly interaction targets (minimum 44px)
