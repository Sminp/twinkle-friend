import CheckIcon from "../ui/CheckIcon";

export type AgreementTag = "필수" | "선택";

interface AgreementItemProps {
  tag: AgreementTag;
  title: string;
  isChecked: boolean;
  onToggle: () => void;
  onShowDetails: () => void;
}

export default function AgreementItem({
  tag,
  title,
  isChecked,
  onToggle,
  onShowDetails,
}: AgreementItemProps) {
  const isRequired = tag === "필수";
  const tagColor = isRequired
    ? "text-[#6d81ff] border-[#6d81ff]"
    : "text-[#b6c6fd] border-[#b6c6fd]";

  return (
    <div className="flex justify-between items-center w-full">
      <div className="flex items-center gap-4">
        <div onClick={onToggle}>
          <CheckIcon isChecked={isChecked} />
        </div>
        <div className="flex items-center gap-2">
          <span
            className={`flex-shrink-0 text-xs font-medium text-center px-1 py-0.5 rounded-lg border ${tagColor}`}
          >
            {tag}
          </span>
          <p className="text-base text-left text-[#1c1c1c]">{title}</p>
        </div>
      </div>
      <svg
        onClick={onShowDetails}
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-grow-0 flex-shrink-0 w-6 h-6 relative cursor-pointer"
        preserveAspectRatio="none"
      >
        <path
          d="M9 18L15 12L9 6"
          stroke="#C6C6C6"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
