import Image from "next/image";

export default function Home() {
  return (
    <div className="w-96 h-[844px] relative bg-indigo-400 overflow-hidden">
      <div className="w-72 h-16 left-[48.94px] top-[506.06px] absolute text-center justify-center">
        <span className="text-white text-2xl font-normal font-['SB_Aggro'] leading-none tracking-wider">
          반
        </span>
        <span className="text-white text-xl font-normal font-['SB_Aggro'] leading-none tracking-wide">
          려동물
        </span>
        <span className="text-white text-xl font-normal font-['SB_Aggro'] leading-none tracking-wide">
          {" "}
        </span>
        <span className="text-white text-2xl font-normal font-['SB_Aggro'] leading-none tracking-wider">
          짝
        </span>
        <span className="text-white text-xl font-normal font-['SB_Aggro'] leading-none tracking-wide">
          꿍을 위한 플랫폼
        </span>
      </div>
      <div className="w-72 h-16 left-[48.94px] top-[265.37px] absolute text-center justify-center text-white text-6xl font-normal font-['SB_Aggro'] leading-none tracking-[3px]">
        반짝친구
      </div>
      <div className="w-3 h-3 left-[95.24px] top-[239.91px] absolute bg-white rounded-full" />
      <div className="w-3 h-3 left-[156.27px] top-[239.91px] absolute bg-white rounded-full" />
      <div className="w-96 left-0 top-[595px] absolute inline-flex flex-col justify-start items-start">
        <div className="self-stretch h-20 relative bg-white/0 overflow-hidden">
          <div className="w-80 h-14 px-6 py-3 left-[28px] top-[10px] absolute bg-yellow-400 rounded-lg inline-flex justify-center items-center gap-2.5">
            <div className="w-4 h-3.5 bg-black" />
            <div className="text-center justify-center text-black text-base font-semibold leading-snug">
              카카오톡으로 시작하기
            </div>
          </div>
        </div>
        <div className="self-stretch h-20 relative bg-white/0 overflow-hidden">
          <div className="w-80 h-14 px-6 py-3 left-[28px] top-[10px] absolute bg-white rounded-lg inline-flex justify-center items-center gap-2.5">
            <div className="text-center justify-center text-indigo-400 text-base font-semibold leading-snug">
              이메일로 시작하기
            </div>
          </div>
        </div>
      </div>
      <div className="w-80 left-[27px] top-[755px] absolute text-center justify-start">
        <span className="text-blue-50 text-sm font-medium leading-snug">
          계정이 없으신가요?{" "}
        </span>
        <span className="text-white text-sm font-bold leading-snug">
          회원가입하기
        </span>
      </div>
      <Image
        width={64}
        height={208}
        className="w-36 h-52 left-[52px] top-[311.39px] absolute"
        src="https://placehold.co/138x206"
        alt="img"
      />
      <Image
        width={64}
        height={208}
        className="w-36 h-52 left-[200.21px] top-[311.39px] absolute"
        src="https://placehold.co/138x206"
        alt="img"
      />
      <div className="w-96 h-12 left-0 top-0 absolute overflow-hidden">
        <div
          data-dark-mode="False"
          data-type="Default"
          className="w-14 h-5 left-[27px] top-[14px] absolute rounded-3xl"
        >
          <div className="w-14 h-5 left-0 top-[1px] absolute text-center justify-start text-white text-base font-semibold font-['SF_Pro_Text'] leading-snug">
            9:41
          </div>
        </div>
        <div
          data-charge="100%"
          data-charging="False"
          data-dark-mode="False"
          className="w-7 h-3 left-[336px] top-[19px] absolute"
        >
          <div className="w-6 h-3 left-0 top-0 absolute opacity-30 rounded border border-white" />
          <div className="w-[1.40px] h-1 left-[26px] top-[5px] absolute opacity-40 bg-white" />
          <div className="w-5 h-2 left-[2px] top-[2px] absolute bg-white rounded-sm" />
        </div>
        <div className="w-4 h-3 left-[286px] top-[20px] absolute bg-white" />
      </div>
      <div className="w-96 h-8 left-0 top-[810px] absolute">
        <div className="w-32 h-[5px] left-[128px] top-[21px] absolute bg-white rounded-[100px]" />
      </div>
    </div>
  );
}
