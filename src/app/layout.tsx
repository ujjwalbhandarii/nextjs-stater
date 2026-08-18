import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import '@/styles/globals.css';
import { META } from '@/utils/constant/meta.constant';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = META.MAIN;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    'name': 'Vibe Ready Startup Template',
    'operatingSystem': 'Cross-platform',
    'applicationCategory': 'DeveloperApplication',
    'description':
      'Enterprise-grade Next.js 16 & Bun starter pack built for modern AI pair-programming, lightning performance, and production scale.',
    'offers': {
      '@type': 'Offer',
      'price': '0',
      'priceCurrency': 'USD',
    },
    'author': {
      '@type': 'Organization',
      'name': 'Vibe Ready',
      'url': 'https://github.com/ujjwalbhandarii/nextjs-stater',
    },
  };

  return (
    <html
      lang='en'
      suppressHydrationWarning
    >
      <head>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
