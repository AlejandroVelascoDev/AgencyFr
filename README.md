# Agentic Next.js App

A modern Next.js 15 application built with TypeScript, Tailwind CSS, Framer Motion, and GSAP.
Inspired in https://agentic.framer.website/

## Features

- **Next.js 15** - Latest version with App Router and Server Components
- **TypeScript** - Full type safety and better developer experience
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **Framer Motion** - Production-ready motion library for React
- **GSAP** - Professional-grade animation library
- **ESLint** - Code linting and formatting
- **Dark Mode** - Built-in dark/light theme support

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd agentic-next-app
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint to check for code issues

## Project Structure

```
agentic-next-app/
├── app/                 # App Router directory (Next.js 13+)
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout component
│   └── page.tsx        # Home page
├── components/         # Reusable UI components
├── lib/               # Utility functions and configurations
├── public/            # Static assets
└── utils/             # Helper functions
```

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [GSAP](https://greensock.com/gsap/) - Animation library
- [ESLint](https://eslint.org/) - Code linting



The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
