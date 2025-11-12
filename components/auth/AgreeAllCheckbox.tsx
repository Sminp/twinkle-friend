import CheckIcon from "../ui/CheckIcon";

interface AgreeAllCheckboxProps {
  isChecked: boolean;
  onToggle: () => void;
}

export default function AgreeAllCheckbox({
  isChecked,
  onToggle,
}: AgreeAllCheckboxProps) {
  return (
    <div
      className="flex justify-start items-center w-full p-4 rounded-xl bg-white border border-[#c6c6c6] cursor-pointer"
      onClick={onToggle}
    >
      <div className="flex items-center gap-3">
        <CheckIcon isChecked={isChecked} />
        <p className="text-lg font-semibold text-left text-[#1c1c1c]">
          약관 전체동의
        </p>
      </div>
    </div>
  );
}
