export interface experienceType {
  id: string;
  company: string;
  period: string;
  type: string;
  note?: string;
}

export interface experienceProjectType {
  id: string;
  name: string;
  tasks: string[];
  stack: string[];
}

export const experiences: experienceType[] = [
  {
    id: '01',
    company: '더존비앤에프. Frontend Developer',
    period: '2023.01.16 — 2026.04.30',
    type: '정규직',
    note: '필요 시 사이트 이미지파일 제공 가능',
  },
];

export const experienceProject: experienceProjectType[] = [
  {
    id: '01',
    name: '더포터존_이커머스 플랫폼',
    tasks: [
      '공통 컴포넌트 개선을 통한 개발 생산성 향상',
      '장바구니, 결제UX 개선을 통한 이탈률 감소',
      '카카오페이 기능 도입을 통한 결제 방식 지원_25~26년도 전체 주문건의 39%(오피스케어 주문 건 포함)',
      '모바일 디바이스 대응 전용 페이지 구축으로 사용자 이용 편의성 향상',
      '장바구니 ~ 주문/결제 프로세스 관련 페이지 담당',
    ],
    stack: [
      'Next.js',
      'TypeScript',
      'Jotai',
      'React Query',
      'Emotion',
      'Axios',
      'GA',
    ],
  },
  {
    id: '01',
    name: '오피스케어_이커머스 플랫폼',
    tasks: [
      '‘아마란스’ 내 ‘오피스케어’ 이커머스 구축을 통해 사용자 접근성 개선 및 매출 증대 기여_ 25~26년도 전체 주문건의 45%',
      '장바구니 ~ 주문/결제 프로세스 관련 페이지 담당',
    ],
    stack: [
      'Next.js',
      'TypeScript',
      'Jotai',
      'React Query',
      'Emotion',
      'Axios',
      'GA',
    ],
  },
  {
    id: '01',
    name: '운영사/공급사 백오피스',
    tasks: [
      '메인 페이지 주문현황/클레임 현황 개선으로 사용자의 편의성 개선',
      '주문상세 내 데이터 제공/클레임 진행을 한번에 할 수 있도록 개선함으로써 편의성 개선 ',
      '주문/결제, 클레임 프로세스 관련 페이지 담당',
    ],
    stack: ['React', 'JavaScript', 'MobX', 'Emotion', 'Axios'],
  },
  {
    id: '01',
    name: '아마란스_통합 업무 플랫폼',
    tasks: ['포털 메인 페이지 포틀릿 설정/포틀릿 서비스 제공'],
    stack: ['React', 'JavaScript', 'Redux', 'Axios'],
  },
];
