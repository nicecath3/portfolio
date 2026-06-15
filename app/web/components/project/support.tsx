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
      'Tailwind',
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
  {
    id: '03',
    title: 'CryptoSim — 가상 코인 투자 시뮬레이터',
    description: [
      '업비트 실시간 WebSocket 기반 전 코인 시세 스트리밍',
      '시장가·지정가 주문, 수수료 계산, 체결내역, 보유 코인 수익률 관리',
      'SVG 캔들 차트 (7개 단위), 다크/라이트 테마, localStorage 가상 자산 관리',
    ],
    stack: ['Next.js', 'TypeScript', 'SCSS', 'WebSocket', 'GitHub', 'Vercel'],
    github: 'https://github.com/nicecath3/crypto-dashboard',
    live: 'https://kgrcrypto.vercel.app',
    inDevelopment: false,
  },
  {
    id: '04',
    title: 'RandomTrip — 랜덤 여행지 추천 서비스',
    description: [
      'SVG 지도 기반 2단계 룰렛으로 전국 시군구 랜덤 여행지 선택',
      '카카오 로컬 API로 관광지·맛집·카페 최대 45개 추천',
      'OpenWeather API 기반 선택 지역 날씨 및 5일 예보 제공',
    ],
    stack: [
      'Next.js',
      'TypeScript',
      'SCSS',
      'd3-geo',
      'topojson',
      'Kakao API',
      'OpenWeather API',
      'GitHub',
      'Vercel',
    ],
    github: 'https://github.com/nicecath3/random-trip',
    live: 'https://kgrrt.vercel.app',
    inDevelopment: false,
  },
  {
    id: '05',
    title: 'SkinQuiz — 피부타입 진단 & 화장품 추천 서비스',
    description: [
      '7가지 질문 기반 피부타입 분석 후 맞춤 화장품 추천',
      'Supabase Auth 이메일 로그인, 찜하기, 피부 기록 저장',
      '피부타입별 탭 탐색, 비로그인 퀴즈 이용 지원',
    ],
    stack: [
      'Next.js',
      'TypeScript',
      'Tailwind',
      'Framer Motion',
      'Supabase',
      'GitHub',
      'Vercel',
    ],
    github: 'https://github.com/nicecath3/skincare-quiz',
    live: 'https://kgrsq.vercel.app',
    inDevelopment: false,
  },
];
