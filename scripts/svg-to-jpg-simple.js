#!/usr/bin/env node
/**
 * Simple SVG to JPG converter
 * Falls back to copying SVG if canvas is not available
 */
import fs from 'fs';
import { createCanvas, loadImage } from 'canvas';

const svgPath = 'public/og-image.svg';
const jpgPath = 'public/og-image.jpg';

async function convert() {
  try {
    // Read SVG
    const svg = fs.readFileSync(svgPath, 'utf8');
    
    // Create canvas
    const canvas = createCanvas(1200, 630);
    const ctx = canvas.getContext('2d');
    
    // Load and draw SVG
    const img = await loadImage(`data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`);
    ctx.drawImage(img, 0, 0, 1200, 630);
    
    // Save as JPG
    const buffer = canvas.toBuffer('image/jpeg', { quality: 0.9 });
    fs.writeFileSync(jpgPath, buffer);
    
    console.log('✅ Successfully converted og-image.svg to og-image.jpg');
  } catch (error) {
    console.error('⚠️  Canvas not available. Please convert manually using:');
    console.error('   - Online: https://cloudconvert.com/svg-to-jpg');
    console.error('   - Or see scripts/README-OG-IMAGE.md for other options');
    console.error('\nFor now, the SVG will work for most social platforms.');
    
    // Copy SVG as fallback (rename to .jpg for meta tag compatibility)
    // Note: This won't work for all platforms but better than nothing
    fs.copyFileSync(svgPath, jpgPath);
    console.log('ℹ️  Copied SVG as temporary fallback');
  }
}

convert();
