export default function Signup() {
  return (
    <div className="w-96 h-[844px] relative bg-white overflow-hidden">
      <div className="w-28 h-10 left-[26px] top-[149px] absolute justify-center text-black text-3xl font-semibold  leading-none">
        회원가입
      </div>
      <div className="w-80 left-[26px] top-[231px] absolute inline-flex flex-col justify-start items-start gap-1.5">
        <div className="py-1.5 inline-flex justify-center items-center">
          <div className="justify-start text-black text-base font-semibold  leading-normal">
            이메일 아이디
          </div>
        </div>
        <div className="self-stretch h-14 px-4 py-5 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-stone-300 inline-flex justify-start items-center gap-2">
          <div className="justify-start text-neutral-400 text-base font-medium  leading-normal">
            아이디를 입력해주세요.
          </div>
        </div>
      </div>
      <div className="w-80 left-[26px] top-[357px] absolute inline-flex flex-col justify-start items-start gap-1.5">
        <div className="py-1.5 inline-flex justify-center items-center">
          <div className="justify-start text-black text-base font-semibold  leading-normal">
            비밀번호
          </div>
        </div>
        <div className="self-stretch h-14 px-4 py-5 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-stone-300 inline-flex justify-start items-center gap-2">
          <div className="justify-start text-neutral-400 text-base font-medium  leading-normal">
            영문/숫자/특수문자를 2개 이상 포함한 8~20자
          </div>
        </div>
      </div>
      <div className="w-80 left-[26px] top-[483px] absolute inline-flex flex-col justify-start items-start gap-1.5">
        <div className="py-1.5 inline-flex justify-center items-center">
          <div className="justify-start text-black text-base font-semibold  leading-normal">
            비밀번호 확인
          </div>
        </div>
        <div className="self-stretch h-14 px-4 py-5 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-stone-300 inline-flex justify-start items-center gap-2">
          <div className="justify-start text-neutral-400 text-base font-medium  leading-normal">
            비밀번호를 한 번 더 입력해주세요.
          </div>
        </div>
      </div>
      <div className="w-96 h-20 left-0 top-[726px] absolute bg-white/0 overflow-hidden">
        <div className="w-80 h-14 px-6 py-3 left-[28px] top-[10px] absolute bg-stone-300 rounded-lg inline-flex justify-center items-center gap-2.5">
          <div className="text-center justify-center text-white text-base font-semibold  leading-snug">
            다음
          </div>
        </div>
      </div>
      <div className="w-80 left-[27px] top-[691px] absolute text-center justify-start">
        <span className="text-neutral-400 text-sm font-medium  leading-snug">
          이미 계정이 있으신가요?
        </span>
        <span className="text-gray-800 text-sm font-medium  leading-snug">
          {" "}
        </span>
        <span className="text-neutral-600 text-sm font-bold  leading-snug">
          로그인하기
        </span>
      </div>
      <div className="w-96 px-7 py-3 left-0 top-[50px] absolute inline-flex flex-col justify-start items-start gap-2 overflow-hidden">
        <div className="self-stretch inline-flex justify-between items-center">
          <div className="w-6 h-6 relative overflow-hidden">
            <div className="w-1.5 h-3 left-[9px] top-[6px] absolute outline outline-2 outline-offset-[-1px] outline-black" />
          </div>
          <div className="w-6 h-6 relative" />
        </div>
      </div>
      <div
        data-mode="Light"
        data-value="30%"
        className="w-96 h-11 left-0 top-[91px] absolute bg-White"
      >
        <div className="w-96 h-1 left-[16px] top-[20px] absolute bg-Gray-100 rounded-[10px]">
          <div className="w-28 h-1 left-0 top-0 absolute bg-indigo-400 rounded-[100px]" />
        </div>
      </div>
      <div className="w-96 h-12 left-0 top-0 absolute overflow-hidden">
        <div
          data-dark-mode="False"
          data-type="Default"
          className="w-14 h-5 left-[27px] top-[14px] absolute rounded-3xl"
        >
          <div className="w-14 h-5 left-0 top-[1px] absolute text-center justify-start text-black text-base font-semibold font-['SF_Pro_Text'] leading-snug">
            9:41
          </div>
        </div>
        <div
          data-charge="100%"
          data-charging="False"
          data-dark-mode="False"
          className="w-7 h-3 left-[336px] top-[19px] absolute"
        >
          <div className="w-6 h-3 left-0 top-0 absolute opacity-30 rounded border border-black" />
          <div className="w-[1.40px] h-1 left-[26px] top-[5px] absolute opacity-40 bg-black" />
          <div className="w-5 h-2 left-[2px] top-[2px] absolute bg-black rounded-sm" />
        </div>
        <div className="w-4 h-3 left-[286px] top-[20px] absolute bg-black" />
      </div>
      <div className="w-96 h-8 left-0 top-[810px] absolute">
        <div className="w-32 h-[5px] left-[128px] top-[21px] absolute bg-black rounded-[100px]" />
      </div>
    </div>
  );
}
