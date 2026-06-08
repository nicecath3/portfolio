# 🧑‍💻 김경률 포트폴리오

프론트엔드 개발자 김경률의 개인 포트폴리오 웹사이트

배포 주소: [kgrportfolio.vercel.app/web](https://kgrportfolio.vercel.app/web)

---

## 💡 개발 동기

채용 과정에서 단순한 이력서보다 실제로 구현한 결과물을 직접 보여주는 것이 더 효과적이라고 판단했습니다.
포트폴리오 사이트 자체가 기술력을 증명하는 프로젝트가 되도록, 애니메이션 · SEO · 이메일 폼 연동까지 직접 구현했습니다.

---

## ⚡ 주요 기능

- **About Me** — 타이핑 애니메이션으로 역할 소개, 코드 블록 스타일 UI 카드
- **기술 스택** — 보유 기술 태그 목록
- **경력** — 재직 기간 및 프로젝트별 담당 업무 카드
- **개인 프로젝트** — 사이드 프로젝트 카드 목록
- **Contact** — Resend API 연동 이메일 문의 폼
- **SEO** — metadata, sitemap.xml, robots.txt 설정
- **NavBar** — 스크롤 위치 기반 활성 섹션 하이라이트

---

## 🛠 기술 스택

| 분류 | 기술 |
|------|------|
| 프레임워크 | Next.js 16 (App Router), React 19 |
| 언어 | TypeScript |
| 스타일 | Tailwind CSS v4, SCSS |
| 이메일 | Resend |
| 배포 | Vercel |

---

## 📁 프로젝트 구조

```
app/
├── layout.tsx              # 루트 레이아웃, metadata 설정
├── sitemap.ts              # 사이트맵 자동 생성
├── robots.ts               # 크롤러 접근 설정
├── middleware.ts           # 라우팅 미들웨어
└── web/
    ├── page.tsx            # 메인 페이지
    ├── layout/
    │   ├── navbar/         # 스크롤 감지 네비게이션
    │   └── footer/
    ├── components/
    │   ├── aboutMe/        # 타이핑 애니메이션 소개
    │   ├── skills/         # 기술 스택 태그
    │   ├── experience/     # 경력 카드
    │   ├── project/        # 개인 프로젝트 카드
    │   ├── contact/        # 이메일 문의 폼
    │   └── sectionHeader/  # 공통 섹션 헤더
    └── api/contact/        # Resend 이메일 전송 API Route
```

> 각 컴포넌트 폴더 내 `support.tsx`에 데이터를 분리해, 컴포넌트는 렌더링만 담당하는 구조로 설계했습니다.

---

## 🚀 시작하기

### 1. 의존성 설치

```bash
npm install
```

### 2. 환경 변수 설정

`.env.local` 파일 생성 후 아래 값을 입력하세요.

```env
RESEND_API_KEY=your_resend_api_key
```

#### Resend API 키 발급
1. [Resend](https://resend.com) 회원가입
2. API Keys → Create API Key
3. 발급된 키를 `RESEND_API_KEY`에 입력

### 3. 개발 서버 실행

```bash
npm run dev
```

→ [http://localhost:3000/web](http://localhost:3000/web) 접속

---

## 🔧 개발하면서 해결한 문제들

### 1. App Router 전환 적응

회사에서는 Pages Router 기반으로 개발했지만, 이번 프로젝트에서 App Router를 처음 적용했습니다.
서버 컴포넌트와 클라이언트 컴포넌트의 역할 분리, `layout.tsx` 중첩 구조, `metadata` API 활용 방식을 직접 익히며 적용했습니다.

---

### 2. 스크롤 기반 NavBar 활성화 구현

스크롤 위치에 따라 현재 보이는 섹션을 NavBar에서 하이라이트해야 했는데, `scroll` 이벤트로 직접 좌표를 계산하는 방식은 성능 부담이 있었습니다.

`IntersectionObserver`를 활용해 각 섹션이 뷰포트에 진입할 때 감지하도록 구현했고, `rootMargin` 조정으로 화면 중앙 진입 시점에 정확히 활성화되도록 튜닝했습니다.

---

### 3. 데이터와 UI 분리 구조 설계

컴포넌트 안에 텍스트·링크 등 데이터가 섞이면 내용 수정 시 컴포넌트 전체를 열어봐야 하는 불편함이 있었습니다.

각 섹션마다 `support.tsx`에 데이터를 별도로 관리하고, 컴포넌트는 렌더링만 담당하도록 역할을 분리했습니다. 이후 경력이나 프로젝트 내용을 추가할 때 `support.tsx`만 수정하면 되는 구조가 되었습니다.

---

### 4. SEO 직접 구성

Next.js App Router의 `metadata` export, `sitemap.ts`, `robots.ts`를 직접 작성하며 검색엔진 최적화 설정을 처음부터 구성해봤습니다. 빌드 시 자동으로 `sitemap.xml`과 `robots.txt`가 생성되는 방식을 이해하고 적용했습니다.
