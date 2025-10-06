# Favicon Design

## Current Design

The favicon combines your initials "AK" with software engineering elements:

### Elements
- **Code Brackets `< >`**: Represents coding/development
- **Initials "AK"**: Personal branding
- **Monospace Font**: Developer aesthetic (Consolas/Monaco/Courier)
- **Blinking Cursor**: Terminal/IDE feel with animation
- **Blue-Purple Gradient**: Matches portfolio color scheme

### Technical Details
- **Format**: SVG (scalable, crisp at any size)
- **Dimensions**: 128x128 viewBox
- **Colors**: 
  - Background: Blue gradient (#1e3a8a → #3b82f6 → #6366f1)
  - Brackets: Cyan to purple gradient (#06b6d4 → #8b5cf6)
  - Text: White (#ffffff)
  - Cursor: Cyan (#06b6d4) with blink animation
- **Border Radius**: 24px for modern rounded look

### Files
- `public/favicon.svg` - Main scalable favicon
- `public/favicon.ico` - Legacy ICO format (needs regeneration)

## Regenerating favicon.ico

The ICO file should be regenerated from the new SVG. Options:

### Option 1: Online Converter (Easiest)
1. Visit https://realfavicongenerator.net/
2. Upload `public/favicon.svg`
3. Generate all sizes
4. Download and extract to `public/`

### Option 2: Using ImageMagick
```bash
convert -density 300 -background none public/favicon.svg \
  -define icon:auto-resize=256,128,64,48,32,16 \
  public/favicon.ico
```

### Option 3: Using Inkscape
```bash
inkscape public/favicon.svg \
  --export-filename=public/favicon-32.png \
  --export-width=32 --export-height=32

# Then convert PNG to ICO
convert public/favicon-32.png public/favicon.ico
```

## Additional Favicon Sizes (Optional)

For comprehensive device support, consider generating:

```html
<!-- Add to BaseLayout.astro <head> -->
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
```

## Customization

To modify the design, edit `public/favicon.svg`:
- **Change colors**: Update gradient stop-color values
- **Adjust brackets**: Modify path d attributes
- **Change font**: Update font-family in text element
- **Remove cursor**: Delete the animated rect element
- **Different symbols**: Replace brackets with other code symbols (, {}, //, etc.)

---

Generated: October 5, 2025
