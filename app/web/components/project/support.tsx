export interface projectType {
  id: string;
  title: string;
  description: string[];
  stack: string[];
  github: string;
  live: string;
  inDevelopment: boolean;
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
      'Vercel',
    ],
    github: 'https://github.com/nicecath3/portfolio',
    live: 'https://kgrportfolio.vercel.app/web',
    inDevelopment: false,
  },
  {
    id: '02',
    title: 'PriceHunt — 스마트 가격 비교 서비스',
    description: [
      '네이버 쇼핑 API 기반 실시간 상품 가격 비교 서비스',
      '무한 스크롤, 카테고리 필터, 정렬, 가격 추이 차트 구현',
      '목표가 알림 등록 및 헤더 드롭다운으로 내역 관리',
    ],
    stack: [
      'Next.js',
      'TypeScript',
      'SCSS',
      'React Query',
      'Jotai',
      'Chart.js',
      'GitHub',
      'Vercel',
    ],
    github: 'https://github.com/nicecath3/pricehunt',
    live: 'https://kgrpricehunt.vercel.app',
    inDevelopment: false,
  },
];
