import { ReactNode } from "react";

interface AuthPageLayoutProps {
  children: ReactNode; // 스크롤될 메인 컨텐츠 (예: AuthForm)
  footer: ReactNode; // 하단에 고정될 푸터 (예: Button + Link)
}

/**
 * 페이지 내에서 상단은 스크롤되고 하단은 고정되는 레이아웃을 만듭니다.
 * 이 컴포넌트는 Next.js의 app/layout.tsx와 함께 사용됩니다.
 * (부모 layout.tsx가 헤더와 전체 패딩을 제공한다고 가정합니다.)
 */
export default function AuthPageLayout({
  children,
  footer,
}: AuthPageLayoutProps) {
  return (
    // flex-col과 h-full을 사용해 부모(layout)가 물려준 공간을 채웁니다.
    // 'h-full'을 위해 부모 태그들에 높이 설정(예: h-screen)이 필요할 수 있습니다.
    // 여기서는 layout.tsx가 이미 화면 높이를 잡고 있다고 가정합니다.
    <div
      className="w-full flex flex-col"
      style={{ height: "calc(100vh - 60px)" }}
    >
      {/* 1. 중앙 스크롤 컨텐츠
        - flex-grow: 남은 공간을 모두 차지
        - overflow-y-auto: 컨텐츠가 길어지면 이 영역만 스크롤
        - pb-32: 하단 고정 푸터의 높이만큼 패딩을 주어 컨텐츠가 가려지지 않게 함
      */}
      <main className="flex-grow overflow-y-auto pb-32">{children}</main>

      {/* 2. 하단 고정 푸터
        - shrink-0: 푸터 영역이 줄어들지 않도록 함
        - 부모의 px-7을 상쇄하기 위해 mx-[-28px] (px-7의 음수값) 사용
        - 또는 부모인 layout.tsx에서 padding을 제거하고 여기서 px-7을 적용
        - 여기서는 부모 layout.tsx의 px-7을 존중하고, 푸터에만 배경과 패딩을 추가합니다.
      */}
      <footer className="absolute left-0 bottom-0 w-full px-7 pt-4 pb-8">
        {footer}
      </footer>
    </div>
  );
}
