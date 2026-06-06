import { MetadataRoute } from 'next';

const BASE_URL = 'https://kgrportfolio.vercel.app';

// 검색 엔진 사이트 구조 쉽게 파악할수있도록 하는 파일
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
