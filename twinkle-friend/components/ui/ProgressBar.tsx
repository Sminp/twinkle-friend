interface ProgressBarProps {
  step: number;
  totalSteps: number;
}

export default function ProgressBar({ step, totalSteps }: ProgressBarProps) {
  const progressPercent = (step / totalSteps) * 100;
  return (
    <div className="w-full h-1 bg-[#D4D7DE] rounded-full overflow-hidden">
      <div
        className="h-1 bg-[#6D81FF] rounded-full transition-all duration-300"
        style={{ width: `${progressPercent}%` }}
      ></div>
    </div>
  );
}
