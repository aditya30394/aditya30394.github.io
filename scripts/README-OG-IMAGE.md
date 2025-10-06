# OG Image Generation

## Current Setup

An SVG-based Open Graph image has been created at `public/og-image.svg` with:
- **Dimensions**: 1200x630px (Open Graph standard)
- **Content**: Your name, role, key technologies
- **Design**: Blue-purple gradient matching your portfolio theme

## Using the SVG Directly

The SVG can be used directly in meta tags. It's already configured in `BaseLayout.astro` as `/og-image.jpg`.

## Converting SVG to JPG

While SVG works for many platforms, some social media sites prefer JPG/PNG. Here are conversion options:

### Option 1: Online Conversion (Easiest)
1. Visit https://cloudconvert.com/svg-to-jpg
2. Upload `public/og-image.svg`
3. Convert with quality: 90%
4. Download as `og-image.jpg`
5. Replace in `public/` directory

### Option 2: Using Inkscape (Command Line)
If you have Inkscape installed:
```bash
inkscape public/og-image.svg --export-filename=public/og-image.jpg --export-width=1200 --export-height=630
```

### Option 3: Using ImageMagick
If you have ImageMagick installed:
```bash
convert -density 300 -resize 1200x630 -quality 90 public/og-image.svg public/og-image.jpg
```

### Option 4: Using Browser (Manual)
1. Open `public/og-image.svg` in Chrome/Firefox
2. Right-click → "Save as" → Choose PNG
3. Use any image editor to convert PNG to JPG
4. Save as `public/og-image.jpg`

### Option 5: Using Sharp (Automated - Requires Dependency)
If you want to automate this in the build process:
```bash
npm install --save-dev sharp
```

Then create `scripts/convert-og.js`:
```javascript
import fs from 'fs';
import sharp from 'sharp';

const svg = fs.readFileSync('public/og-image.svg');
sharp(svg)
  .resize(1200, 630)
  .flatten({ background: '#0f172a' })
  .jpeg({ quality: 90 })
  .toFile('public/og-image.jpg')
  .then(() => console.log('✅ OG image converted to JPG'))
  .catch(err => console.error('❌ Conversion failed:', err));
```

Add to package.json:
```json
"scripts": {
  "generate:og": "node scripts/convert-og.js",
  "build": "npm run generate:og && astro build"
}
```

## Customization

To customize the OG image, edit `public/og-image.svg`:
- **Colors**: Change gradient stop colors
- **Text**: Update name, title, technologies
- **Logo**: Replace Microsoft logo with your branding
- **Layout**: Adjust text positions and sizes

## Verification

After creating the JPG, verify it works:
1. **Facebook Debugger**: https://developers.facebook.com/tools/debug/
2. **Twitter Card Validator**: https://cards-dev.twitter.com/validator
3. **LinkedIn Inspector**: https://www.linkedin.com/post-inspector/

Enter your portfolio URL: https://aditya30394.github.io

## Current Status

✅ SVG template created with professional design
⚠️ JPG conversion needed for optimal social media compatibility
📋 Meta tags configured in BaseLayout.astro

---

Generated: October 5, 2025
