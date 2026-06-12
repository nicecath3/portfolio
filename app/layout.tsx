import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Metadata } from 'next';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: '김경률',
  url: 'https://kgrportfolio.vercel.app',
  jobTitle: 'Frontend Developer',
  knowsAbout: ['React', 'Next.js', 'TypeScript', 'Frontend Development'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

const BASE_URL = 'https://kgrportfolio.vercel.app';

export const metadata: Metadata = {
  title: '김경률 | Frontend Developer',
  description:
    'React와 Next.js로 사용자 경험을 중심으로 한 인터랙티브 웹 애플리케이션을 개발하는 프론트엔드 개발자 김경률의 포트폴리오입니다.',
  keywords: [
    'Frontend Developer',
    '프론트엔드 개발자',
    'React',
    'Next.js',
    '김경률',
    'portfolio',
    '포트폴리오',
  ],
  authors: [{ name: '김경률' }],
  creator: '김경률',
  metadataBase: new URL(BASE_URL),
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    title: '김경률 | Frontend Developer',
    description:
      'React와 Next.js로 사용자 경험을 중심으로 한 인터랙티브 웹 애플리케이션을 개발하는 프론트엔드 개발자입니다.',
    url: BASE_URL,
    siteName: '김경률 포트폴리오',
  },
  twitter: {
    card: 'summary_large_image',
    title: '김경률 | Frontend Developer',
    description:
      'React와 Next.js로 사용자 경험을 중심으로 한 인터랙티브 웹 애플리케이션을 개발하는 프론트엔드 개발자입니다.',
  },
};
