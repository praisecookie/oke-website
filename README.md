# Executive Portfolio & Digital Storefront

A minimalist, high-performance personal portfolio built for Oke Orhosere. Designed to serve as a digital storefront and routing hub for three distinct operational pillars: AI Automation, Fintech Consulting, and Venture Capital.

## 🏗 Architecture & Stack

This project is built with modern, server-rendered web technologies optimized for speed, SEO, and absolute stability.

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) (Custom monochrome "Old Money" theme)
- **Content Management:** Native Substack RSS Integration via `rss-parser`
- **Deployment:** [Vercel](https://vercel.com)

## 🗺 Site Topology (The "Mini-Sites")

Rather than a traditional single-page portfolio, this application acts as a routing hub for highly targeted conversion pages:

- **`/` (Hub):** The executive summary and primary navigation node.
- **`/ai-automation`:** Sales funnel for enterprise AI deployments (n8n, ClaudeBot) and the managed retainer model.
- **`/fintech`:** A digital storefront for purchasing operational SOPs, financial models, and requesting bespoke consulting.
- **`/ventures`:** The VC portal detailing investment thesis (DeFi, Web3, Infrastructure) and a direct pitch submission pipeline.
- **`/insights`:** A self-updating digital magazine that automatically fetches and displays the latest publications from Substack.
- **`/about`:** The Operator's narrative, detailing the trajectory from Mathematics to Fintech CEO and AI Architect.

## 💻 Local Development

To run this project locally on your machine:

1. **Navigate to the project directory:**
   ```bash
   cd ~/Desktop/Dev/oke-portfolio
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the development server:**
   ```bash
   npm run dev
   ```
4. **View the application:**
   Open http://localhost:3000 in your browser.

## Updating the Substack Feed

The /insights page automatically pulls the latest articles from Substack. To change the target Substack account:

- Open app/insights/page.tsx.

- Locate the parser.parseURL() function (around line 20).

- Replace the URL with the desired Substack RSS feed (e.g., https://[username].substack.com/feed).

## Deployment

This project is configured for seamless deployment on Vercel.

Any pushes to the main branch of the linked GitHub repository will automatically trigger a new production build.

```
git add .
git commit -m "Update message"
git push origin main
```

Designed and engineered for operational excellence.
