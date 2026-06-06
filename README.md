# 김경률 포트폴리오

> 프론트엔드 개발자 김경률의 개인 포트폴리오 웹사이트

🔗 **[kgrportfolio.vercel.app/web](https://kgrportfolio.vercel.app/web)**

---

## 개발 이유

프론트 엔드 개발자로서 채용 과정에서 단순한 이력서보다 실제로 구현한 결과물을 직접 보여주는 것이 더 효과적이라고 판단했고,
그 자체가 기술력을 증명하는 프로젝트가 되도록 개발했습니다.

---

## 기술 스택

| 분류 | 기술 |
|------|------|
| Framework | Next.js 16, React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS v4, SCSS |
| Email | Resend |
| Deploy | Vercel |

---

## 주요 기능

- **About Me** — 타이핑 애니메이션으로 역할 소개, 코드 블록 스타일 UI 카드
- **기술 스택** — 보유 기술 태그 목록
- **경력** — 재직 기간 및 프로젝트별 담당 업무
- **개인 프로젝트** — 사이드 프로젝트 카드 목록
- **Contact** — Resend API 연동 이메일 문의 폼
- **SEO** — metadata, sitemap.xml, robots.txt 설정

---

## 만들면서 발전한 사항

### Next.js App Router 적응
회사에서는 Pages Router 기반으로 개발했지만, 이번 프로젝트를 통해 App Router의 레이아웃 구조, 서버/클라이언트 컴포넌트 분리, `metadata` API 활용 방식을 직접 익혔습니다.

### SEO 설정 직접 구성
`metadata` export, `sitemap.ts`, `robots.ts`를 직접 구성하며 검색엔진 최적화의 기본 흐름을 이해했습니다.

### 데이터와 UI 분리 패턴 정착
각 섹션마다 `support.tsx`에 데이터를 분리하는 구조를 적용해, 컴포넌트는 렌더링만 담당하도록 역할을 명확히 나눴습니다. 유지보수 시 데이터만 수정하면 되는 구조로 개선됐습니다.

### IntersectionObserver 활용
NavBar의 활성 항목을 스크롤 위치 기반으로 하이라이트하기 위해 `IntersectionObserver`를 직접 구현했습니다. `rootMargin` 조정으로 화면 중앙 진입 시점에 정확히 활성화되도록 튜닝했습니다.

---

## 프로젝트 구조

```
app/
├── layout.tsx              # 루트 레이아웃, metadata 설정
├── globals.css
├── sitemap.ts              # 사이트맵
├── robots.ts               # 크롤러 설정
└── web/
    ├── page.tsx            # 메인 페이지
    ├── layout/
    │   ├── navbar/         # 스크롤 감지 네비게이션
    │   └── footer/
    ├── components/
    │   ├── aboutMe/        # 타이핑 애니메이션 소개
    │   ├── skills/         # 기술 스택 태그
    │   ├── experience/     # 경력 카드
    │   ├── propject/       # 개인 프로젝트 카드
    │   └── contact/        # 이메일 문의 폼
    └── api/
        └── contact/        # Resend 이메일 API
```

---

## 로컬 실행

```bash
npm install
npm run dev
# http://localhost:3000/web
```
