export interface projectType {
  id: string;
  title: string;
  description: string;
  stack: string[];
  github: string;
  live: string;
  inDevelopment: boolean;
  lines: string;
}

export const projects: projectType[] = [
  {
    id: '01',
    title: 'E-Commerce Dashboard',
    description:
      'React + TypeScript로 구축한 실시간 이커머스 대시보드. 차트 시각화, 상품 관리, 주문 트래킹 기능을 포함합니다.',
    stack: ['Next.js', 'TypeScript', 'Recharts', 'Zustand', 'Tailwind'],
    github: 'https://github.com',
    live: 'https://example.com',
    inDevelopment: true,
    lines: '12,400',
  },
  {
    id: '02',
    title: 'Dev Blog Platform',
    description:
      'MDX 기반의 개발 블로그 플랫폼. 코드 하이라이팅, 다크모드, SEO 최적화를 지원합니다.',
    stack: ['Next.js', 'MDX', 'Prisma', 'PostgreSQL', 'Vercel'],
    github: 'https://github.com',
    live: 'https://example.com',
    inDevelopment: true,
    lines: '8,200',
  },
  {
    id: '03',
    title: 'Task Management App',
    description:
      'Drag & Drop을 지원하는 칸반 보드 태스크 관리 앱. 팀 협업 기능과 실시간 업데이트를 제공합니다.',
    stack: ['React', 'TypeScript', 'dnd-kit', 'React Query', 'Socket.io'],
    github: 'https://github.com',
    live: 'https://example.com',
    inDevelopment: false,
    lines: '6,800',
  },
  {
    id: '04',
    title: '1231',
    description:
      'Open-Meteo API를 활용한 날씨 예보 앱. 애니메이션 효과와 반응형 디자인을 적용했습니다.',
    stack: ['React', 'Framer Motion', 'SWR', 'Tailwind CSS'],
    github: 'https://github.com',
    live: 'https://example.com',
    inDevelopment: false,
    lines: '3,200',
  },
];
