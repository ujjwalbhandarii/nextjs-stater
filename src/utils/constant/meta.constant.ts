import { Metadata } from 'next';

const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL || 'https://vibe-ready.vercel.app';
const SITE_NAME = 'Vibe Ready Startup Template';

const SEO_KEYWORDS = [
  // Primary Stack Keywords
  'Next.js 16',
  'Next.js starter template',
  'Next.js boilerplate',
  'Bun runtime Next.js',
  'Tailwind CSS v4 starter',
  'React 19 starter pack',
  'TypeScript 5 template',
  'Turbopack Next.js template',

  // SaaS & Enterprise Architecture Keywords
  'SaaS starter kit',
  'Enterprise Next.js architecture',
  'Feature based architecture',
  'Hook based state separation',
  'Bun test runner starter',
  'Husky pre push hook template',
  'Docker Next.js Alpine starter',
  'OKLCH design tokens',
  'Radix UI primitives',

  // Developer Intent & Vibe Coding Keywords
  'Vibe ready production starter',
  'Vibe coding Next.js template',
  'Fullstack Next.js 16 template',
  'Modern web development starter',
  'High performance Next.js starter',
  'Production ready Next.js boilerplate',
  'AI agent friendly codebase',
  'Clean code Next.js architecture',

  // Additional Industry Search Terms
  'Next.js App Router boilerplate',
  'Tailwind CSS dark mode starter',
  'Next.js open source template',
  'Next.js 16 Docker deployment',
];

const MAIN: Metadata = {
  metadataBase: new URL(APP_URL),
  title: {
    default: 'Vibe Ready - Enterprise Next.js 16 & Bun SaaS Startup Template',
    template: '%s | Vibe Ready',
  },
  description:
    'Production-ready Next.js 16, Bun, Tailwind CSS v4, and React 19 boilerplate engineered with strict feature module architecture, hook-based state management, unit testing, and automated Husky pre-push quality gates.',
  keywords: SEO_KEYWORDS,
  authors: [
    {
      name: 'Vibe Ready Team',
      url: 'https://github.com/ujjwalbhandarii/nextjs-stater',
    },
  ],
  creator: 'Vibe Ready',
  publisher: 'Vibe Ready',
  category: 'Software Development',

  // Open Graph Social Preview
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: APP_URL,
    siteName: SITE_NAME,
    title: 'Vibe Ready - Enterprise Next.js 16 & Bun SaaS Startup Template',
    description:
      'Production-ready Next.js 16 + Bun + Tailwind CSS v4 starter pack with feature-based encapsulation, custom hooks, unit testing, and automated Git verification.',
    images: [
      {
        url: '/images/vibe_ready_banner.png',
        width: 1200,
        height: 630,
        alt: 'Vibe Ready Starter Pack Preview',
      },
    ],
  },

  // Twitter Card Meta
  twitter: {
    card: 'summary_large_image',
    title: 'Vibe Ready - Enterprise Next.js 16 & Bun SaaS Startup Template',
    description:
      'Production-ready Next.js 16 + Bun + Tailwind CSS v4 starter pack with feature-based encapsulation, custom hooks, unit testing, and automated Git verification.',
    images: ['/images/vibe_ready_banner.png'],
    creator: '@vibeready',
  },

  // Robots Indexing Rules
  robots: {
    index: true,
    follow: true,
    googleBot: {
      'index': true,
      'follow': true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Icons & Manifest
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

export const META = {
  MAIN,
  SEO_KEYWORDS,
};
