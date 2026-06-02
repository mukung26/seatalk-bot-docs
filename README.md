# SeaTalk Bot Developer Documentation

**This is only a SeaTalk bot docs for easier access and for development concern.**

This repository contains the developer documentation for creating SeaTalk bots. It is designed to be fully searchable, developer-friendly, and optimized for search engine/AI indexability.

## Features

- **Component-Driven Layout**: A sleek, modern sidebar-driven UI built with React, Vite, and Tailwind CSS.
- **Native Markdown Support**: Documentation files are written purely in `.md` format and automatically compiled. 
- **Searchable by AIs & GitHub**: Storing files directly in the `/docs` folder means GitHub search and web scrapers (like AI bots) can index the raw `.md` content natively.
- **In-App Search**: Features a fully functioning quick-search modal (press \`⌘+K\`) that searches both titles and content of your guides.
- **SEO Ready**: Configured with a `robots.txt`, `sitemap.xml`, and appropriate Open Graph meta tags.

## Editing the Docs

1. Open the `/docs` directory.
2. Edit or create any `.md` file. 
3. **Frontmatter is required** at the top of your `.md` files to organize them correctly:
   \`\`\`yaml
   ---
   id: your-page-id
   title: Your Page Title
   category: Core Concepts
   ---
   \`\`\`

*(Note: Ensure your `category` matches one of the values listed in `src/data/docs.ts` or add a new category there).*

## Legal & Disclaimer

**Disclaimer:** This is an unofficial, community-driven documentation project. This repository and website are not officially affiliated with, authorized, maintained, sponsored, or endorsed by SeaTalk. 

"SeaTalk" and all related product names, logos, and brands are property of their respective owners. Any use of these trademarks within this documentation is for identification and reference purposes only.

For the official SeaTalk Open Platform documentation, please visit [open.seatalk.io](https://open.seatalk.io/).
