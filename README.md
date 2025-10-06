# Aditya Kumar - Portfolio Website

A modern, professional portfolio website built with Astro 4, Tailwind CSS, and TypeScript. Features a blog, project showcase, and timeline of professional experience.

🚀 **Live Site**: [https://aditya30394.github.io](https://aditya30394.github.io)

## ✨ Features

- **Zero JavaScript by Default**: Lightning-fast performance with Astro's island architecture
- **Content Collections**: Type-safe content management for blog posts, projects, and timeline
- **Responsive Design**: Mobile-first design that looks great on all devices
- **SEO Optimized**: Proper meta tags, Open Graph, and Twitter Card support
- **Dark Mode**: Fully functional dark mode toggle with localStorage persistence
- **Blog System**: Full-featured blog with tags, draft support, carousel display, and date sorting
- **Project Showcase**: Categorized project cards with carousel navigation, GitHub and external links
- **Experience Timeline**: Visual timeline of work experience and education
- **Skills Section**: Comprehensive technical expertise showcase with categorized skills
- **Easy Deployment**: Automated GitHub Pages deployment via GitHub Actions

## 🛠️ Tech Stack

- **[Astro 4](https://astro.build)** - Static site generator
- **[Tailwind CSS](https://tailwindcss.com)** - Utility-first CSS framework
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development
- **Content Collections** - Astro's Content Layer API for type-safe content
- **GitHub Actions** - Automated deployment to GitHub Pages

## 📦 Project Structure

```
/
├── public/
│   ├── images/              # Project images, company logos, etc.
│   └── Aditya_Kumar_Senior_Software_Engineer_Resume.pdf
├── src/
│   ├── components/          # Reusable Astro components
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── ExperienceTimeline.astro
│   │   ├── FeaturedProjects.astro
│   │   ├── ProjectCard.astro
│   │   ├── Skills.astro
│   │   └── Contact.astro
│   ├── content/             # Content collections
│   │   ├── blog/            # Blog posts (Markdown)
│   │   ├── projects/        # Project entries (Markdown)
│   │   ├── timeline/        # Experience entries (Markdown)
│   │   └── config.ts        # Content collection schemas
│   ├── layouts/
│   │   └── BaseLayout.astro # Main page layout
│   ├── pages/               # File-based routing
│   │   ├── index.astro      # Homepage
│   │   ├── blog/
│   │   │   ├── index.astro  # Blog list
│   │   │   └── [...id].astro # Blog post detail
│   │   └── projects/
│   │       └── index.astro  # All projects
│   └── styles/
│       └── global.css       # Global styles & Tailwind directives
├── astro.config.mjs         # Astro configuration
├── tailwind.config.mjs      # Tailwind configuration
└── tsconfig.json            # TypeScript configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.19.1 or higher
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/aditya30394/aditya30394.github.io.git
   cd aditya30394.github.io
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:4321`

## 📝 Content Management

This portfolio uses Astro's Content Collections for type-safe content management. All content is stored in Markdown files with frontmatter metadata.

### Adding a Blog Post

Blog posts are stored in `src/content/blog/` directory.

**Step 1:** Create a new Markdown file with a descriptive name:
```bash
touch src/content/blog/my-new-post.md
```

**Step 2:** Add frontmatter and content:
```markdown
---
title: "Your Post Title"
description: "A brief, SEO-friendly description of your post (150-160 characters)"
pubDate: 2025-01-15
tags: ["typescript", "web-development", "tutorial"]
draft: false  # Set to true to hide from production
---

## Introduction

Your blog content here using Markdown...

### Subheading

You can use:
- **Bold** and *italic* text
- [Links](https://example.com)
- Code blocks with syntax highlighting
- Images: `![Alt text](/images/my-image.jpg)`

```javascript
// Code example
const greeting = "Hello World";
```
```

**Step 3:** Add images (if needed):
- Place images in `public/images/blog/`
- Reference them as `/images/blog/my-image.jpg`

**Tips:**
- Use descriptive filenames (e.g., `solid-principles-explained.md`)
- Keep `pubDate` in YYYY-MM-DD format
- Choose relevant, searchable tags
- Set `draft: true` to work on posts without publishing
- Blog posts automatically appear on homepage (latest 3) and `/blog` page

---

### Adding a Project

Projects are stored in `src/content/projects/` directory.

**Step 1:** Prepare project assets:
- Add project thumbnail to `public/images/projects/`
- Recommended size: 1200x630px (16:9 ratio)
- Use descriptive names: `project-name-thumbnail.jpg`

**Step 2:** Create project file:
```bash
touch src/content/projects/my-awesome-project.md
```

**Step 3:** Add project details:
```markdown
---
title: "Project Name"
category: "Machine Learning"  # Used for grouping
description: "A concise description that appears on the project card"
tags: ["Python", "TensorFlow", "Docker", "AWS"]
thumbnail: "/images/projects/my-project.jpg"
githubUrl: "https://github.com/username/repo"  # Optional
externalUrl: "https://live-demo.com"  # Optional
featured: true  # Shows in Featured Projects carousel on homepage
order: 1  # Lower numbers appear first
---

## Overview

Detailed project description using Markdown.

## Key Features

- Feature 1
- Feature 2

## Technical Stack

- Technology 1
- Technology 2

## Challenges & Solutions

Describe interesting problems you solved...

## Results

Quantifiable outcomes, metrics, or impact.
```

**Tips:**
- Set `featured: true` for your 3-5 best projects
- Use `order` to control display sequence (1, 2, 3...)
- Include both `githubUrl` and `externalUrl` when available
- Choose a relevant `category` (e.g., "Web Development", "Cloud Computing", "Machine Learning")
- Use specific, technical tags for better discovery

---

### Adding a Timeline Entry (Work/Education)

Timeline entries are stored in `src/content/timeline/` directory.

**Step 1:** Prepare organization logo:
- Add logo to `public/images/timeline/`
- Square format (512x512px recommended)
- Use company/university official logos

**Step 2:** Create timeline entry:
```bash
touch src/content/timeline/company-name-position.md
```

**Step 3:** Add entry details:
```markdown
---
title: "Senior Software Engineer"
organization: "Microsoft"
type: "work"  # "work" or "education"
startDate: "January 2021"
endDate: "Present"  # Use "Present" for current role
location: "Redmond, WA"
logo: "/images/timeline/microsoft-logo.jpg"
order: 1  # Lower numbers appear first (reverse chronological)
---

Brief role description followed by achievements:

- Led development of X feature, resulting in Y% improvement
- Architected Z system handling N requests/sec
- Mentored team of M engineers
- Reduced infrastructure costs by $X through optimization
```

**For Education:**
```markdown
---
title: "Master of Computer Science"
organization: "Texas A&M University"
type: "education"
startDate: "August 2018"
endDate: "December 2020"
location: "College Station, TX"
logo: "/images/timeline/tamu-logo.jpg"
order: 2
---

- **GPA**: 4.0/4.0
- **Relevant Coursework**: Distributed Systems, Machine Learning, Cloud Computing
- **Thesis**: [Title of thesis if applicable]
- **Activities**: Teaching Assistant, Research Assistant
```

**Tips:**
- Use `order` to sort entries (lower = more recent)
- Work entries show briefcase icon (💼), Education shows graduation cap (🎓)
- Write achievements in action-result format
- Include quantifiable metrics when possible
- Use consistent date format (e.g., "Month Year")

---

### Content File Naming Conventions

**Blog Posts:**
- Format: `descriptive-post-title.md`
- Example: `solid-principles-explained.md`
- Use lowercase, hyphens for spaces
- Be descriptive for SEO

**Projects:**
- Format: `project-name.md`
- Example: `sentiment-analysis-nlp.md`
- Match your repository name when possible

**Timeline:**
- Format: `organization-role.md` or `organization-degree.md`
- Example: `microsoft-senior-engineer.md`
- Example: `tamu-masters-cs.md`

---

### Content Workflow

**Development Process:**
1. Create content file with `draft: true`
2. Write and review content locally (`npm run dev`)
3. Add/optimize images
4. Set `draft: false` when ready
5. Commit and push to trigger deployment

**Content Organization:**
```bash
src/content/
├── blog/
│   ├── post-1.md
│   ├── post-2.md
│   └── images/  # (optional, for blog-specific images)
├── projects/
│   ├── project-1.md
│   └── project-2.md
└── timeline/
    ├── job-1.md
    ├── job-2.md
    └── education-1.md

public/
├── images/
│   ├── blog/        # Blog post images
│   ├── projects/    # Project thumbnails
│   └── timeline/    # Company/university logos
└── Aditya_Kumar_Resume.pdf  # Update your resume here
```

---

### Updating Your Resume

Replace the file at:
```
public/Aditya_Kumar_Senior_Software_Engineer_Resume.pdf
```

**Requirements:**
- PDF format only
- Keep filename consistent or update link in `Hero.astro`
- Recommended: Use same filename pattern for version control
- Max size: 2MB for optimal loading

---

### Markdown Tips & Tricks

**Syntax Highlighting:**
```markdown
```javascript
const example = "code";
```
```

**Images with captions:**
```markdown
![Dashboard Screenshot](/images/project-dashboard.jpg)
*Figure 1: Main dashboard interface*
```

**Callouts/Alerts:**
```markdown
> **Note:** This is important information!

> ⚠️ **Warning:** Be careful with this approach.

> ✅ **Success:** Configuration complete!
```

**Tables:**
```markdown
| Technology | Purpose | Proficiency |
|-----------|---------|-------------|
| Python    | Backend | Expert      |
| React     | Frontend| Advanced    |
```

**Task Lists:**
```markdown
- [x] Completed task
- [ ] Pending task
- [ ] Future task
```

---

### Content Validation

Before publishing, check:
- [ ] All frontmatter fields are complete
- [ ] Images exist in `public/` directory
- [ ] Links are valid (no broken links)
- [ ] Tags are lowercase and consistent
- [ ] Dates follow correct format
- [ ] `draft: false` when ready to publish
- [ ] Preview locally with `npm run dev`
- [ ] Build succeeds with `npm run build`

## 🎨 Customization

### Colors

Edit `tailwind.config.mjs` to change the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      primary: { /* your colors */ },
      accent: { /* your colors */ },
    }
  }
}
```

### Fonts

Current fonts are loaded from Google Fonts in `BaseLayout.astro`. To change:

1. Update the Google Fonts link
2. Modify `tailwind.config.mjs` font family settings

### Site Configuration

Update `astro.config.mjs`:

```javascript
export default defineConfig({
  site: 'https://yourusername.github.io',
  // other options...
});
```

## 🚢 Deployment

The site automatically deploys to GitHub Pages when you push to the `main` branch.

### Manual Deployment

1. Build the site:
   ```bash
   npm run build
   ```

2. Preview the build:
   ```bash
   npm run preview
   ```

3. The built site is in the `dist/` directory

## 📋 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run astro` - Run Astro CLI commands

## 🎨 SEO & Social Media

### Open Graph Image

An SVG-based OG image has been created at `public/og-image.svg` featuring:
- Your name and title (Azure OpenAI Service)
- Key technologies and specializations
- Professional blue-purple gradient design
- 1200x630px (Open Graph standard)

**To convert SVG to JPG for optimal compatibility:**
1. **Easiest**: Visit https://cloudconvert.com/svg-to-jpg and upload `public/og-image.svg`
2. **Command line**: See `scripts/README-OG-IMAGE.md` for ImageMagick, Inkscape options
3. **Manual**: Open SVG in browser, screenshot, save as JPG

**To customize**: Edit `public/og-image.svg` to change colors, text, or layout.

**Current Status**: ✅ SVG created and ready. JPG conversion recommended for best social media compatibility.

## 🔮 Future Enhancements

- [x] Dark mode toggle
- [x] Blog carousel on homepage
- [x] Project carousel with navigation
- [x] Create custom OG image for social sharing (SVG created)
- [ ] Search functionality for blog posts
- [ ] RSS feed for blog
- [ ] Project filtering by category/tags
- [ ] Reading time estimates for blog posts
- [ ] View counter for blog posts
- [ ] Comments system
- [ ] Newsletter subscription

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

This is a personal portfolio, but suggestions and feedback are welcome! Feel free to open an issue if you notice any bugs or have ideas for improvements.

## 📧 Contact

- **Email**: [aditya30394@gmail.com](mailto:aditya30394@gmail.com)
- **LinkedIn**: [linkedin.com/in/aditya30394](https://www.linkedin.com/in/aditya30394/)
- **GitHub**: [github.com/aditya30394](https://github.com/aditya30394)

---

Built with ❤️ using [Astro](https://astro.build)
