import { MetadataRoute } from 'next';

const BASE_URL = 'https://kgrportfolio.vercel.app';

// 검색 엔진 크롤링 허용
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
