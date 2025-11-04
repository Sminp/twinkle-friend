import { ChevronDown, Pencil } from "lucide-react";

interface PetInfoCardProps {
  petName: string;
  age: string;
  breed: string;
  image: string;
}

/**
 * 메인 페이지 반려동물 정보 카드
 */
export default function PetInfoCard({
  petName,
  age,
  breed,
  image,
}: PetInfoCardProps) {
  return (
    <section className="flex flex-col gap-3.5 px-6">
      <div className="flex items-center gap-1.5">
        <p className="text-base font-semibold text-black">내 반려동물</p>
        <ChevronDown size={20} color="black" />
      </div>
      <div className="flex items-center gap-4 p-4 rounded-xl bg-[#d1deff]/60">
        <img
          src={image}
          alt={petName}
          className="w-[58px] h-[58px] rounded-full object-cover bg-white"
        />
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <p className="text-[15px] font-semibold text-black">{petName}</p>
            <Pencil size={12} className="text-[#C6C6C6]" />
          </div>
          <div className="flex items-center gap-2 divide-x divide-[#717171]">
            <p className="text-xs text-left text-[#717171]">{age}</p>
            <p className="text-xs text-left text-[#717171] pl-2">{breed}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
