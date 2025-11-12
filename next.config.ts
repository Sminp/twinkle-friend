import type { NextConfig } from "next";

// 1. ❗ [중요] NODE_ENV 대신 REPO_NAME을 읽도록 변경합니다.
// 로컬 개발 시에는 "" (빈 문자열),
// GitHub Actions에서는 "/twinkle-friend"가 됩니다.
const repoName = process.env.REPO_NAME || "";

const nextConfig: NextConfig = {
  // 2. ❗ [가장 중요] "out" 폴더를 생성하는 정적 내보내기(static export) 옵션입니다.
  output: "export",

  // 3. ❗ [중요] basePath와 assetPrefix를 동일하게 설정합니다.
  basePath: repoName,
  assetPrefix: repoName,

  // ... 나머지 (images, trailingSlash) ...
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
