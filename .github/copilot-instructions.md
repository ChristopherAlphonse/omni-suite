# 🧠 GitHub Copilot Instructions

This project uses **Next.js 15** with **TypeScript**. Below are guidelines to help GitHub Copilot generate helpful and consistent code suggestions.

---

## 📦 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS (optional, but common)
- **Routing**: App Router (`/app` directory)
- **State Management**: React Context or useState/useReducer
- **Testing**: Jest, React Testing Library (if applicable)

---

## 📁 Project Structure

```plaintext
.editorconfig
.github
   |-- CODEOWNERS
   |-- CONTRIBUTING.md
   |-- dependabot.yaml
   |-- pull_request_template.md
   |-- workflows
   |   |-- ci.yml
   |   |-- coderabit.yml
.gitignore
.nvmrc
.prettierignore
.prettierrc.json
.vscode
   |-- launch.json
   |-- settings.json
README.md
eslint.config.mjs
next.config.ts
package.json
postcss.config.mjs
public
   |-- logo
   |   |-- apple-icon.png
   |   |-- icon-192x192.png
   |   |-- icon-32x32.png
   |   |-- icon-500x500.png
   |   |-- icon-512x512.png
   |   |-- icon-96x96.png
   |   |-- icon0.svg
renovate.json
src
   |-- app
   |   |-- error.tsx
   |   |-- favicon.ico
   |   |-- global-error.tsx
   |   |-- globals.css
   |   |-- layout.tsx
   |   |-- layout
   |   |   |-- base-layout.tsx
   |   |   |-- centered-layout.tsx
   |   |   |-- index.ts
   |   |-- manifest.ts
   |   |-- opengraph-image.tsx
   |   |-- page.tsx
   |   |-- robots.ts
   |   |-- sitemap.ts
   |-- data
   |   |-- htmlData.tsx
   |   |-- siteMetadata.ts
   |-- lib
   |   |-- mongodb.ts
   |-- utils
   |   |-- helpers.ts
tsconfig.json
turbo.json
yarn.lock
```
