import { Location } from "@/constants/image";
import Image from "next/image";

/**
 * 1. "최근 솔직 리뷰" 카드
 */
export const ReviewCard = ({
  hospitalName,
  location,
  images,
  reviewer,
  rating,
  visitDate,
  review,
}: {
  hospitalName: string;
  location: string;
  images: string[];
  reviewer: string;
  rating: number;
  visitDate: string;
  review: string;
}) => (
  <div
    className="flex-shrink-0 flex flex-col gap-3 w-[275px] p-3 rounded-[14px] bg-white"
    style={{ boxShadow: "0px 0px 6px 0 rgba(0,0,0,0.15)" }}
  >
    {/* 병원 정보 */}
    <div className="flex justify-between items-center p-3 rounded-md bg-[#f1f5ff]">
      <div className="flex items-center gap-3.5">
        <Image
          width={37}
          height={36}
          src="https://placehold.co/37x36/e0e7ff/6D81FF?text=H"
          alt="병원"
          className="w-[37px] h-9 rounded object-cover"
        />
        <div>
          <p className="text-[13px] font-medium text-black">{hospitalName}</p>
          <p className="text-[10px] text-[#555]">{location}</p>
        </div>
      </div>
      <ChevronRight width={16} className="text-[#8E8E8E]" />
    </div>
    {/* 리뷰 이미지 */}
    <div className="flex gap-2.5 w-full">
      <Image
        width={37}
        height={70}
        src={images[0]}
        className="w-1/2 h-[70px] rounded object-cover"
        alt="Review 1"
      />
      <Image
        width={37}
        height={70}
        src={images[1]}
        className="w-1/2 h-[70px] rounded object-cover"
        alt="Review 2"
      />
    </div>
    {/* 리뷰어 정보 */}
    <div className="flex gap-2">
      <Image
        width={37}
        height={37}
        src="https://placehold.co/20x20/E3E3E3/8E8E8E?text=U"
        className="w-5 h-5 rounded-full"
        alt="Reviewer 수정"
      />
      <div className="flex flex-col gap-1 w-full">
        <div className="flex justify-between items-Imaget">
          <div>
            <p className="text-[11px] font-semibold text-black">{reviewer}</p>
            <div className="flex items-center gap-1.5">
              <Image width={10} height={10} src={Location} alt="별" />
              <Image width={10} height={10} src={Location} alt="별" />
              <Image width={10} height={10} src={Location} alt="별" />
              <Image width={10} height={10} src={Location} alt="별" />
              <Image width={10} height={10} src={Location} alt="별" />
              <span className="text-[9px] text-[#555]">({rating})</span>
            </div>
          </div>
          <span className="text-[8px] text-[#717171]">{visitDate}</span>
        </div>
        <p className="text-[10px] font-medium text-black w-full break-words">
          {review}
        </p>
      </div>
    </div>
  </div>
);

/**
 * 2. "예방접종" / "많이 찾는 진료" 카드
 */
export const ClinicCard = ({
  hospitalName,
  location,
  avgPrice,
  rating,
  reviewCount,
  image,
}: {
  hospitalName: string;
  location: string;
  avgPrice: string;
  rating: number;
  reviewCount: number;
  image: string;
}) => (
  <div className="flex-shrink-0 flex flex-col gap-3 w-[111px]">
    <Image
      width={111}
      height={109}
      src={image}
      alt="image"
      className="w-full h-[109px] rounded object-cover"
    />
    <div className="flex flex-col gap-1.5">
      <div>
        <p className="text-sm font-medium text-black truncate">
          {hospitalName}
        </p>
        <p className="text-[11px] text-[#555]">{location}</p>
      </div>
      <div>
        <div className="flex items-center gap-1">
          <p className="text-[9px] font-semibold text-[#4cc4d4]">
            진료비 평균가
          </p>
          <Image
            src={Location}
            width={12}
            height={12}
            alt="정보"
            className="text-[#C6C6C6]"
          />
        </div>
        <p className="text-sm font-semibold text-black">{avgPrice}</p>
      </div>
      <div className="flex items-center gap-0.5">
        <Image width={11} height={11} src={Location} alt="몰라" />
        <p className="text-[10px] text-[#555]">
          {rating} ({reviewCount})
        </p>
      </div>
    </div>
  </div>
);

/**
 * 3. "추천 콘텐츠" 카드
 */
export const ContentCard = ({
  tag,
  title,
  subtitle,
  image,
}: {
  tag: string;
  title: string;
  subtitle: string;
  image: string;
}) => (
  <div className="flex-shrink-0 w-[182px] h-[230px] relative rounded-xl overflow-hidden">
    <Image
      src={image}
      className="w-full h-full object-cover"
      width={182}
      height={230}
      alt={title}
    />
    {/* 그라데이션 오버레이 */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
    {/* 텍스트 컨텐츠 */}
    <div className="absolute bottom-4 left-4 right-4 text-white">
      <span className="px-3 py-1 text-[7px] font-semibold bg-[#6d81ff] rounded-full">
        {tag}
      </span>
      <h3
        className="mt-2 text-sm font-bold whitespace-pre-line"
        style={{ lineHeight: "1.3" }}
      >
        {title}
      </h3>
      <p className="mt-1 text-[9px] font-semibold opacity-80">{subtitle}</p>
    </div>
  </div>
);

// --- 헬퍼 아이콘 ---
const ChevronRight = ({ width = 16, className = "" }) => (
  <svg
    width={width}
    height={width}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    preserveAspectRatio="none"
  >
    <path
      d="M9 18L15 12L9 6"
      stroke="#8E8E8E"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
