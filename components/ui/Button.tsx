// import Link from "next/link"; // 미리보기 환경에서는 Next.js Link를 사용할 수 없으므로 주석 처리
import type { ReactNode } from "react";

/**
 * 미리보기용 Mock Link 컴포넌트
 * (실제 Link 컴포넌트 대신 <a> 태그를 사용)
 */
const Link: React.FC<{
  href: string;
  className?: string;
  children: ReactNode;
}> = ({ href, className, children }) => (
  <a href={href} className={className}>
    {children}
  </a>
);

interface ButtonProps {
  src?: string; // Link일 때만 필요하므로 optional
  bgColor: string;
  textColor: string;
  children: ReactNode;
  onClick?: () => void; // button일 때만 필요하므로 optional
  disabled?: boolean; // button일 때만 필요하므로 optional
  className?: string; // 상위에서 추가 스타일(예: mt-4)을 받을 수 있도록
}

export default function Button({
  src,
  bgColor,
  textColor,
  children,
  onClick,
  disabled,
  className = "",
}: ButtonProps) {
  // 1. 공통 스타일 정의 (Canvas의 MockButton 스타일과 일치시킴)
  // (w-full을 사용해 부모 컨테이너 너비에 맞춤)
  const baseStyles = `w-full h-14 px-6 py-3 my-2 ${bgColor} rounded-lg inline-flex justify-center items-center font-semibold transition-opacity hover:opacity-80 disabled:opacity-50 disabled:cursor-not-allowed`;

  // 2. 텍스트/자식 컨테이너 스타일 정의
  const textStyles = `flex flex-row gap-2.5 text-center justify-center items-center ${textColor} text-base leading-snug`;

  // 3. 전달받은 className과 기본 스타일을 결합
  const combinedClassName = `${baseStyles} ${className}`;

  // 4. onClick이나 disabled prop이 있으면 <button> 렌더링
  // (Agree 페이지에서 이 버튼을 사용하게 됩니다)
  if (onClick || disabled) {
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={combinedClassName}
        type="button" // type을 명시하는 것이 좋습니다
      >
        <div className={textStyles}>{children}</div>
      </button>
    );
  }

  // 5. onClick이 없고 src prop이 있으면 <Link> (여기서는 <a>) 렌더링
  // (Login, Signup 페이지에서 이 버튼을 사용하게 됩니다)
  if (src) {
    return (
      <Link href={src} className={combinedClassName}>
        <div className={textStyles}>{children}</div>
      </Link>
    );
  }

  // 6. (Fallback) src나 onClick이 없는 경우 - 기본 비활성화 버튼 렌더링
  // (Props가 잘못 전달되었을 때를 대비)
  return (
    <button disabled className={combinedClassName} type="button">
      <div className={textStyles}>{children}</div>
    </button>
  );
}
