import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const svgPath = path.join(__dirname, '..', 'public', 'favicon.svg');
const icoPath = path.join(__dirname, '..', 'public', 'favicon.ico');

// Read the SVG file
const svgBuffer = fs.readFileSync(svgPath);

// Generate ICO file with multiple sizes (16x16, 32x32, 48x48)
async function generateIco() {
  try {
    // Sharp doesn't support ICO directly, so we'll create PNG files first
    const sizes = [16, 32, 48];
    
    console.log('Generating favicon images...');
    
    for (const size of sizes) {
      await sharp(svgBuffer)
        .resize(size, size)
        .png()
        .toFile(path.join(__dirname, '..', 'public', `favicon-${size}x${size}.png`));
      console.log(`✓ Generated favicon-${size}x${size}.png`);
    }
    
    console.log('\n⚠️  Note: ICO format requires additional conversion.');
    console.log('Please use one of these methods:');
    console.log('1. Online converter: https://convertio.co/png-ico/');
    console.log('2. Upload favicon-32x32.png or use RealFaviconGenerator.net');
    console.log('\nFor now, we\'ll copy the 32x32 PNG as a fallback.');
    
    // As a fallback, we'll create a simple PNG-based ICO
    // (Modern browsers support this)
    await sharp(svgBuffer)
      .resize(32, 32)
      .png()
      .toFile(icoPath);
    
    console.log('✓ Created favicon.ico (32x32 PNG format)');
    console.log('  Note: This is a PNG-based ICO, which works in modern browsers.');
    
  } catch (error) {
    console.error('Error generating favicon:', error);
    process.exit(1);
  }
}

generateIco();
