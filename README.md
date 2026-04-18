# EmailMind Landing Page

A premium landing page for EmailMind — a SaaS that connects to your email inbox and lets you ask questions in natural language to extract hidden business opportunities from your conversations.

## ✨ Features

- **Interactive Hero** with animated chat interface showing fictional Q&A examples
- **Problem Section** highlighting daily email overload pain points
- **Visual Solution** with 3-step horizontal flow (Connect → Ask → Act)
- **6 Use Case Cards** demonstrating practical business questions
- **4 Feature Cards** with icons and concise descriptions
- **3 Testimonials** with realistic social proof
- **3-Tier Pricing** (Free / Pro €29/mo / Team €79/mo)
- **Full-width CTA Banner** and minimal Footer
- Smooth animations with Framer Motion throughout

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Utilities**: clsx, tailwind-merge, class-variance-authority

## 🚀 Quick Start

### Prerequisites

- **Node.js 18+** — [Download here](https://nodejs.org/)
- **A code editor** — We recommend [VS Code](https://code.visualstudio.com/) with the Tailwind CSS IntelliSense extension
- **Git** — [Install guide](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/my-app.git
cd my-app
```

> 💡 **Where to find the URL**: Go to your GitHub repo, click the green "Code" button, and copy the HTTPS URL.

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

No environment variables are required for this landing page. You can start immediately:

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

> 💡 **VS Code tip**: Open the integrated terminal with `Ctrl+`` (Windows/Linux) or `Cmd+`` (Mac)

## 📁 Project Structure

| Folder | Description |
|--------|-------------|
| `src/app` | Next.js App Router pages and global styles |
| `src/components/layout` | Layout components (Navbar) |
| `src/components/sections` | Page sections (Hero, Pricing, Footer, etc.) |
| `src/components/ui` | Reusable UI components (AnimatedCanopy) |
| `src/lib` | Utility functions and static data |

## 🚀 Deploy to Vercel

The fastest way to deploy this landing page:

### One-click deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Step by step

1. **Import your GitHub repo**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Click "Import Git Repository"
   - Select your `my-app` repo

2. **Configure project**
   - Vercel auto-detects Next.js — no build command needed
   - Root directory: `./`
   - No environment variables required for this landing page

3. **Deploy**
   - Click "Deploy"
   - Your site will be live at `https://your-project.vercel.app` within seconds

## 📝 License

MIT — free to use, modify, and distribute.