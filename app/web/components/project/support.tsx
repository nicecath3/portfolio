export interface projectType {
  id: string;
  title: string;
  description: string[];
  stack: string[];
  github: string;
  live: string;
  inDevelopment: boolean;
  lines: string;
}

export const projects: projectType[] = [
  {
    id: '01',
    title: '포트폴리오 웹사이트',
    description: ['나만의 포트폴리오를 위한 웹사이트 개발'],
    stack: [
      'Next.js',
      'Tailwind CSS',
      'SCSS',
      'Fetch API',
      'ReSend',
      'GitHub',
      'vercel',
    ],
    github: 'https://github.com/nicecath3/portfolio',
    live: 'https://kgrportfolio.vercel.app/web',
    inDevelopment: true,
    lines: '0',
  },
  // {
  //   id: '02',
  //   title: 'Dev Blog Platform',
  //   description:
  //     'MDX 기반의 개발 블로그 플랫폼. 코드 하이라이팅, 다크모드, SEO 최적화를 지원합니다.',
  //   stack: ['Next.js', 'MDX', 'Prisma', 'PostgreSQL', 'Vercel'],
  //   github: 'https://github.com',
  //   live: 'https://example.com',
  //   inDevelopment: true,
  //   lines: '8,200',
  // },
];
