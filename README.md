# Aditya Kumar - Portfolio Website

A modern, professional portfolio website built with Astro 5, Tailwind CSS, and TypeScript. Features a blog, project showcase, and timeline of professional experience.

🚀 **Live Site**: [https://aditya30394.github.io](https://aditya30394.github.io)

## ✨ Features

- **Zero JavaScript by Default**: Lightning-fast performance with Astro's island architecture
- **Content Collections**: Type-safe content management for blog posts, projects, and timeline
- **Responsive Design**: Mobile-first design that looks great on all devices
- **SEO Optimized**: Proper meta tags, Open Graph, and Twitter Card support
- **Blog System**: Full-featured blog with tags, draft support, and date sorting
- **Project Showcase**: Categorized project cards with GitHub and external links
- **Experience Timeline**: Visual timeline of work experience and education
- **Dark Mode Ready**: Architecture prepared for dark mode implementation
- **Easy Deployment**: Automated GitHub Pages deployment via GitHub Actions

## 🛠️ Tech Stack

- **[Astro 5](https://astro.build)** - Static site generator
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

- Node.js 18.20.8 or higher
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

### Adding a Blog Post

Create a new Markdown file in `src/content/blog/`:

```markdown
---
title: "Your Post Title"
description: "Brief description"
pubDate: "2025-01-15"
tags: ["tag1", "tag2"]
draft: false
---

Your content here...
```

### Adding a Project

Create a new Markdown file in `src/content/projects/`:

```markdown
---
title: "Project Name"
category: "Category Name"
description: "Brief description"
tags: ["tag1", "tag2"]
thumbnail: "/images/project-thumbnail.jpg"
githubUrl: "https://github.com/username/repo"
externalUrl: "https://project-demo.com"
featured: true
order: 1
---

Detailed project description...
```

### Adding Timeline Entry

Create a new Markdown file in `src/content/timeline/`:

```markdown
---
title: "Job Title"
organization: "Company Name"
type: "work" # or "education"
startDate: "January 2020"
endDate: "Present"
location: "City, State"
logo: "/images/company-logo.jpg"
order: 1
---

- Achievement 1
- Achievement 2
```

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

## 🔮 Future Enhancements

- [ ] Dark mode toggle
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
