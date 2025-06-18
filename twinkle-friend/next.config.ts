// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages URL에 저장소 이름이 포함된다면 반드시 설정해야 합니다.
  // 예: https://<username>.github.io/<repository-name>
  // 저장소 이름이 'my-nextjs-app' 이라면 '/my-nextjs-app'으로 설정
  basePath: process.env.NODE_ENV === "production" ? "/twinkle-friend" : "",

  images: {
    unoptimized: true, // 정적 내보내기 시 Next.js Image 컴포넌트 최적화 비활성화
  },

  trailingSlash: true, // URL 끝에 슬래시를 추가하여 정적 파일 경로 문제 방지 (권장)
};

export default nextConfig;
