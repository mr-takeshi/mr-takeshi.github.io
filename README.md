# Scientific AI Blog

A modern, feature-rich Jekyll blog focused on machine learning research and reproducible experiments. Built with accessibility, performance, and user experience in mind.

## ✨ Features

### 🎨 Modern Design
- **Responsive layout** that works on all devices
- **Dark mode support** with automatic system preference detection
- **Clean typography** with optimized reading experience
- **Smooth animations** and hover effects
- **Print-friendly** styling

### 🔍 Enhanced Functionality
- **Client-side search** with real-time filtering and highlighting
- **Reading time estimates** for all posts
- **Social sharing** buttons (Twitter, LinkedIn, Facebook)
- **Reading progress indicator** for long articles
- **Keyboard shortcuts** (Ctrl/Cmd+K for search, Escape to clear)

### 📊 SEO & Performance
- **Open Graph** and Twitter Card meta tags
- **Structured data** for better search engine understanding
- **Optimized loading** with deferred JavaScript
- **MathJax integration** for mathematical notation
- **Sitemap generation** for search engines

### 🧪 Research-Focused
- **Reproducibility sections** in every post
- **Code repository links** and dataset citations
- **Methodology documentation** standards
- **Abstract and results** formatting
- **Reference management** with proper citations

## 🚀 Quick Start

### Prerequisites
- Ruby 2.7+ 
- Bundler gem
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/mr-takeshi/scientific-ai-blog.git
   cd scientific-ai-blog
   ```

2. **Install dependencies**
   ```bash
   bundle install
   ```

3. **Run locally**
   ```bash
   bundle exec jekyll serve
   ```

4. **Open in browser**
   ```
   http://localhost:4000
   ```

### Development

```bash
# Serve with live reload
bundle exec jekyll serve --livereload

# Build for production
bundle exec jekyll build

# Check for errors
bundle exec jekyll doctor
```

## 📝 Writing Posts

### Post Structure
Each post should include:

```yaml
---
layout: post
title: "Your Post Title"
date: 2025-01-15
tags: [tag1, tag2, tag3]
abstract: "Brief description of your research and key findings."
github_repo: "https://github.com/username/repo"
dataset: "https://dataset-url.com"
---
```

### Content Guidelines
- Use **Markdown** for content formatting
- Include **mathematical equations** using LaTeX syntax: `$inline$` or `$$display$$`
- Add **code blocks** with syntax highlighting
- Provide **reproducibility information** in every post
- Include **references** and citations

### Example Post
See `_posts/2025-09-09-Introduction.md` for a complete example.

## 🎨 Customization

### Colors and Theming
Edit CSS variables in `assets/css/style.css`:

```css
:root {
  --primary-color: #2563eb;
  --accent-color: #f59e0b;
  /* ... more variables */
}
```

### Site Configuration
Update `_config.yml` with your information:

```yaml
title: "Your Blog Title"
description: "Your blog description"
url: "https://yourusername.github.io"
author:
  name: "Your Name"
  email: "your.email@example.com"
  social:
    github: "yourusername"
    twitter: "yourhandle"
```

### Adding Pages
Create new pages in the root directory:

```yaml
---
layout: page
title: "Page Title"
permalink: /page-url/
description: "Page description for SEO"
---
```

## 📁 Project Structure

```
├── _config.yml          # Jekyll configuration
├── _data/               # Site data files
│   └── navigation.yml   # Navigation menu
├── _includes/           # Reusable components
│   └── sidebar.html     # Sidebar template
├── _layouts/            # Page templates
│   ├── default.html     # Default layout
│   └── post.html        # Post layout
├── _posts/              # Blog posts
├── assets/              # Static assets
│   ├── css/
│   │   └── style.css    # Main stylesheet
│   ├── js/
│   │   └── search.js    # Search functionality
│   └── images/          # Images and media
├── about.md             # About page
├── topics.md            # Topics page
└── blog/
    └── index.md         # Blog archive
```

## 🔧 Advanced Features

### Search Functionality
- **Client-side search** with instant results
- **Highlighting** of search terms
- **Keyboard shortcuts** for quick access
- **Fuzzy matching** for better results

### Social Sharing
- **One-click sharing** to major platforms
- **Copy link** functionality
- **Open Graph** optimization for rich previews

### Reading Experience
- **Reading time** estimates
- **Progress indicator** for long articles
- **Smooth scrolling** navigation
- **Print optimization**

## 🚀 Deployment

### GitHub Pages
1. Push to `main` branch
2. Enable GitHub Pages in repository settings
3. Select source branch (usually `main`)
4. Site will be available at `https://username.github.io/repository-name`

### Custom Domain
1. Add `CNAME` file with your domain
2. Configure DNS settings
3. Update `_config.yml` with your domain

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Jekyll** for the static site generator
- **GitHub Pages** for hosting
- **MathJax** for mathematical notation
- **Minima theme** as the foundation

---

*Built with ❤️ for the scientific community*
