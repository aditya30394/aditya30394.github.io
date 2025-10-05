# Deployment Guide

## Deploying to GitHub Pages

### First-Time Setup

1. Push the code to GitHub:
```bash
cd /home/kumarad/work/aditya-portfolio-new
git init
git add .
git commit -m "Initial commit: Professional portfolio with Astro 4"
git branch -M main
git remote add origin https://github.com/aditya30394/aditya30394.github.io.git
git push -u origin main
```

2. Enable GitHub Pages:
- Go to repository Settings → Pages
- Source: GitHub Actions
- The workflow will automatically run

3. Site will be live at: https://aditya30394.github.io

### Subsequent Deployments

Every push to main automatically rebuilds and deploys:
```bash
git add .
git commit -m "Your message"
git push
```

## Local Testing

```bash
npm run dev      # Development server
npm run build    # Production build
npm run preview  # Preview production build
```

## Updating Content

- Blog posts: Add to src/content/blog/
- Projects: Add to src/content/projects/
- Timeline: Add to src/content/timeline/
- Resume: Replace public/Aditya_Kumar_Senior_Software_Engineer_Resume.pdf
