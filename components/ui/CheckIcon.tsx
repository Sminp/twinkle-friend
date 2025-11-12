interface CheckIconProps {
  isChecked: boolean;
}

export default function CheckIcon({ isChecked }: CheckIconProps) {
  return (
    <svg
      width={22}
      height={22}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-grow-0 flex-shrink-0 w-[22px] h-[22px] relative cursor-pointer"
      preserveAspectRatio="none"
    >
      <g clipPath="url(#clip0_7_5373)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.5 0C2.46243 0 0 2.46243 0 5.5V16.5C0 19.5376 2.46243 22 5.5 22H16.5C19.5376 22 22 19.5376 22 16.5V5.5C22 2.46243 19.5376 0 16.5 0H5.5ZM16.5044 8.20053C16.9109 7.69225 16.8286 6.9506 16.3202 6.54398C15.812 6.13736 15.0703 6.21976 14.6637 6.72804L9.09161 13.6932L6.8626 12.0214C6.34188 11.6309 5.60315 11.7364 5.2126 12.2571C4.82207 12.7779 4.92759 13.5166 5.44832 13.9071L8.59117 16.2643C9.10044 16.6463 9.82097 16.5547 10.2186 16.0576L16.5044 8.20053Z"
          fill={isChecked ? "#6D81FF" : "#C6C6C6"} // 체크 상태에 따라 색상 변경
        />
      </g>
      <defs>
        <clipPath id="clip0_7_5373">
          <rect width={22} height={22} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
