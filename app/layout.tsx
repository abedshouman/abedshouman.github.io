import type { Metadata } from 'next';
import './globals.css';
import { profile } from '@/lib/data';

export const metadata: Metadata = {
  metadataBase: new URL('https://abedshouman.github.io'),
  title: `${profile.name} — ${profile.title}`,
  description: profile.tagline,
  keywords: [
    'Backend Engineer',
    'Java',
    'Microservices',
    'Distributed Systems',
    'Quarkus',
    'Spring Boot',
    'Kafka',
    'AWS',
  ],
  authors: [{ name: profile.name }],
  openGraph: {
    title: `${profile.name} — ${profile.title}`,
    description: profile.tagline,
    type: 'website',
    url: 'https://abedshouman.github.io',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: `${profile.name} — ${profile.title}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${profile.name} — ${profile.title}`,
    description: profile.tagline,
    images: ['/og.png'],
  },
};

// Prevent a flash of the wrong theme before hydration.
const themeScript = `
  try {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (stored === 'dark' || (!stored && prefersDark)) {
      document.documentElement.classList.add('dark');
    }
  } catch (_) {}
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
