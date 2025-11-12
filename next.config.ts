import type { NextConfig } from "next";

// 1. ❗ [가장 중요] process.env.NODE_ENV 로직을 제거하고,
// 저장소 이름을 "/twinkle-friend"로 하드코딩(고정)합니다.
const repoName = "/twinkle-friend";

const nextConfig: NextConfig = {
  // 2. ❗ [가장 중요] "out" 폴더를 생성하는 정적 내보내기(static export) 옵션입니다.
  output: "export",

  // 3. ❗ [중요] basePath와 assetPrefix를 동일하게 설정합니다.
  basePath: repoName,
  assetPrefix: repoName,

  // 4. [정확함] 정적 내보내기 시 Next.js Image 컴포넌트 최적화 비활성화
  images: {
    unoptimized: true,
  },

  // 5. [좋은 설정] URL 끝에 슬래시를 추가하여 정적 파일 경로 문제 방지
  trailingSlash: true,
};

export default nextConfig;
