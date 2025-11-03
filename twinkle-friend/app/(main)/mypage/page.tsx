export default function MyPage() {
  return (
    <div className="w-[390px] h-[844px] relative overflow-hidden bg-[#6d81ff]">
      <div className="flex flex-col justify-start items-start w-[390px] absolute left-0 top-[50px] overflow-hidden gap-2 px-[30px] py-3">
        <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 relative">
          <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-3">
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
              preserveAspectRatio="none"
            >
              <path
                d="M15 18L9 12L15 6"
                stroke="white"
                stroke-width={2}
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p className="flex-grow-0 flex-shrink-0 w-[84px] h-5 text-lg font-semibold text-left text-white">
              마이페이지
            </p>
          </div>
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
            preserveAspectRatio="none"
          >
            <path
              d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
              stroke="white"
              stroke-width={2}
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M18.7273 14.7273C18.6063 15.0015 18.5702 15.3056 18.6236 15.6005C18.6771 15.8954 18.8177 16.1676 19.0273 16.3818L19.0818 16.4364C19.2509 16.6052 19.385 16.8057 19.4765 17.0265C19.568 17.2472 19.6151 17.4838 19.6151 17.7227C19.6151 17.9617 19.568 18.1983 19.4765 18.419C19.385 18.6397 19.2509 18.8402 19.0818 19.0091C18.913 19.1781 18.7124 19.3122 18.4917 19.4037C18.271 19.4952 18.0344 19.5423 17.7955 19.5423C17.5565 19.5423 17.3199 19.4952 17.0992 19.4037C16.8785 19.3122 16.678 19.1781 16.5091 19.0091L16.4545 18.9545C16.2403 18.745 15.9682 18.6044 15.6733 18.5509C15.3784 18.4974 15.0742 18.5335 14.8 18.6545C14.5311 18.7698 14.3018 18.9611 14.1403 19.205C13.9788 19.4489 13.8921 19.7347 13.8909 20.0273V20.1818C13.8909 20.664 13.6994 21.1265 13.3584 21.4675C13.0174 21.8084 12.5549 22 12.0727 22C11.5905 22 11.1281 21.8084 10.7871 21.4675C10.4461 21.1265 10.2545 20.664 10.2545 20.1818V20.1C10.2475 19.7991 10.1501 19.5073 9.97501 19.2625C9.79991 19.0176 9.55521 18.8312 9.27273 18.7273C8.99853 18.6063 8.69437 18.5702 8.39947 18.6236C8.10456 18.6771 7.83244 18.8177 7.61818 19.0273L7.56364 19.0818C7.39478 19.2509 7.19425 19.385 6.97353 19.4765C6.7528 19.568 6.51621 19.6151 6.27727 19.6151C6.03834 19.6151 5.80174 19.568 5.58102 19.4765C5.36029 19.385 5.15977 19.2509 4.99091 19.0818C4.82186 18.913 4.68775 18.7124 4.59626 18.4917C4.50476 18.271 4.45766 18.0344 4.45766 17.7955C4.45766 17.5565 4.50476 17.3199 4.59626 17.0992C4.68775 16.8785 4.82186 16.678 4.99091 16.5091L5.04545 16.4545C5.25503 16.2403 5.39562 15.9682 5.4491 15.6733C5.50257 15.3784 5.46647 15.0742 5.34545 14.8C5.23022 14.5311 5.03887 14.3018 4.79497 14.1403C4.55107 13.9788 4.26526 13.8921 3.97273 13.8909H3.81818C3.33597 13.8909 2.87351 13.6994 2.53253 13.3584C2.19156 13.0174 2 12.5549 2 12.0727C2 11.5905 2.19156 11.1281 2.53253 10.7871C2.87351 10.4461 3.33597 10.2545 3.81818 10.2545H3.9C4.2009 10.2475 4.49273 10.1501 4.73754 9.97501C4.98236 9.79991 5.16883 9.55521 5.27273 9.27273C5.39374 8.99853 5.42984 8.69437 5.37637 8.39947C5.3229 8.10456 5.18231 7.83244 4.97273 7.61818L4.91818 7.56364C4.74913 7.39478 4.61503 7.19425 4.52353 6.97353C4.43203 6.7528 4.38493 6.51621 4.38493 6.27727C4.38493 6.03834 4.43203 5.80174 4.52353 5.58102C4.61503 5.36029 4.74913 5.15977 4.91818 4.99091C5.08704 4.82186 5.28757 4.68775 5.50829 4.59626C5.72901 4.50476 5.96561 4.45766 6.20455 4.45766C6.44348 4.45766 6.68008 4.50476 6.9008 4.59626C7.12152 4.68775 7.32205 4.82186 7.49091 4.99091L7.54545 5.04545C7.75971 5.25503 8.03183 5.39562 8.32674 5.4491C8.62164 5.50257 8.9258 5.46647 9.2 5.34545H9.27273C9.54161 5.23022 9.77093 5.03887 9.93245 4.79497C10.094 4.55107 10.1807 4.26526 10.1818 3.97273V3.81818C10.1818 3.33597 10.3734 2.87351 10.7144 2.53253C11.0553 2.19156 11.5178 2 12 2C12.4822 2 12.9447 2.19156 13.2856 2.53253C13.6266 2.87351 13.8182 3.33597 13.8182 3.81818V3.9C13.8193 4.19253 13.906 4.47834 14.0676 4.72224C14.2291 4.96614 14.4584 5.15749 14.7273 5.27273C15.0015 5.39374 15.3056 5.42984 15.6005 5.37637C15.8954 5.3229 16.1676 5.18231 16.3818 4.97273L16.4364 4.91818C16.6052 4.74913 16.8057 4.61503 17.0265 4.52353C17.2472 4.43203 17.4838 4.38493 17.7227 4.38493C17.9617 4.38493 18.1983 4.43203 18.419 4.52353C18.6397 4.61503 18.8402 4.74913 19.0091 4.91818C19.1781 5.08704 19.3122 5.28757 19.4037 5.50829C19.4952 5.72901 19.5423 5.96561 19.5423 6.20455C19.5423 6.44348 19.4952 6.68008 19.4037 6.9008C19.3122 7.12152 19.1781 7.32205 19.0091 7.49091L18.9545 7.54545C18.745 7.75971 18.6044 8.03183 18.5509 8.32674C18.4974 8.62164 18.5335 8.9258 18.6545 9.2V9.27273C18.7698 9.54161 18.9611 9.77093 19.205 9.93245C19.4489 10.094 19.7347 10.1807 20.0273 10.1818H20.1818C20.664 10.1818 21.1265 10.3734 21.4675 10.7144C21.8084 11.0553 22 11.5178 22 12C22 12.4822 21.8084 12.9447 21.4675 13.2856C21.1265 13.6266 20.664 13.8182 20.1818 13.8182H20.1C19.8075 13.8193 19.5217 13.906 19.2778 14.0676C19.0339 14.2291 18.8425 14.4584 18.7273 14.7273Z"
              stroke="white"
              stroke-width={2}
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className="w-[390px] h-[1294.29px] absolute left-[-1px] top-[306.71px] rounded-tl-[30px] rounded-tr-[30px] bg-white" />
      <div className="w-[108.6px] h-[108.6px]">
        <svg
          width={109}
          height={109}
          viewBox="0 0 109 109"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-[140.2px] top-[120.15px]"
          preserveAspectRatio="none"
        >
          <circle cx="54.3008" cy="54.3008" r="54.3008" fill="white" />
        </svg>
        <div className="w-[108.6px] h-[108.6px]">
          <div className="absolute left-[140.2px] top-[120.15px]" />
          <img
            src="고양이.png"
            className="w-[92.04px] h-[137.79px] absolute left-[148.59px] top-[117.47px] object-cover"
          />
        </div>
      </div>
      <p className="w-[84px] h-5 absolute left-[153px] top-[248.6px] text-lg font-bold text-center text-white">
        닉네임
      </p>
      <div
        className="flex justify-center items-center w-[30px] h-[30px] absolute left-[219.3px] top-[199.25px] gap-2 p-4 rounded-[40px] bg-[#b6c6fd]"
        style={{ boxShadow: "0px 0px 8px 0 rgba(0,0,0,0.25)" }}
      >
        <svg
          width={16}
          height={16}
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
          preserveAspectRatio="none"
        >
          <path
            d="M1.33301 5.58498C1.33301 5.35143 1.33301 5.23466 1.34275 5.1363C1.43674 4.18768 2.18719 3.43723 3.13582 3.34324C3.23417 3.3335 3.35725 3.3335 3.6034 3.3335C3.69824 3.3335 3.74567 3.3335 3.78593 3.33106C4.30008 3.29992 4.75031 2.97541 4.94244 2.4975C4.95748 2.46007 4.97155 2.41788 4.99967 2.3335C5.0278 2.24911 5.04186 2.20692 5.05691 2.1695C5.24904 1.69158 5.69927 1.36707 6.21342 1.33593C6.25368 1.3335 6.29815 1.3335 6.3871 1.3335H9.61225C9.70119 1.3335 9.74567 1.3335 9.78593 1.33593C10.3001 1.36707 10.7503 1.69158 10.9424 2.1695C10.9575 2.20692 10.9715 2.24911 10.9997 2.3335C11.0278 2.41788 11.0419 2.46007 11.0569 2.4975C11.249 2.97541 11.6993 3.29992 12.2134 3.33106C12.2537 3.3335 12.3011 3.3335 12.396 3.3335C12.6421 3.3335 12.7652 3.3335 12.8635 3.34324C13.8122 3.43723 14.5626 4.18768 14.6566 5.1363C14.6663 5.23466 14.6663 5.35143 14.6663 5.58498V10.8002C14.6663 11.9203 14.6663 12.4803 14.4484 12.9081C14.2566 13.2845 13.9506 13.5904 13.5743 13.7822C13.1465 14.0002 12.5864 14.0002 11.4663 14.0002H4.53301C3.4129 14.0002 2.85285 14.0002 2.42503 13.7822C2.0487 13.5904 1.74274 13.2845 1.55099 12.9081C1.33301 12.4803 1.33301 11.9203 1.33301 10.8002V5.58498Z"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.99967 11.0002C9.47243 11.0002 10.6663 9.80626 10.6663 8.3335C10.6663 6.86074 9.47243 5.66683 7.99967 5.66683C6.52691 5.66683 5.33301 6.86074 5.33301 8.3335C5.33301 9.80626 6.52691 11.0002 7.99967 11.0002Z"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div className="flex flex-col justify-start items-start w-[330px] absolute left-[30px] top-[341px]">
        <div className="flex flex-col justify-center items-center self-stretch flex-grow-0 flex-shrink-0 h-16 gap-2 px-2.5 py-[18px] border-t-0 border-r-0 border-b-[1.5px] border-l-0 border-[#e3e3e3]">
          <div className="flex justify-between items-center flex-grow-0 flex-shrink-0 w-[296px] relative">
            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[189.5px] relative gap-2.5">
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                preserveAspectRatio="none"
              >
                <path
                  d="M7.5 7H10.25M7.5 11H10.25M7.5 15H10.25M13.75 7H16.5M13.75 11H16.5M13.75 15H16.5M20 21V6.2C20 5.0799 20 4.51984 19.782 4.09202C19.5903 3.71569 19.2843 3.40973 18.908 3.21799C18.4802 3 17.9201 3 16.8 3H7.2C6.07989 3 5.51984 3 5.09202 3.21799C4.71569 3.40973 4.40973 3.71569 4.21799 4.09202C4 4.51984 4 5.0799 4 6.2V21M22 21H2"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#1c1c1c]">
                최근 클릭한
              </p>
            </div>
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
              preserveAspectRatio="none"
            >
              <path
                d="M9 18L15 12L9 6"
                stroke="#8E8E8E"
                stroke-width={2}
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center self-stretch flex-grow-0 flex-shrink-0 h-[63px] gap-2 px-2.5 py-[18px] border-t-0 border-r-0 border-b-[1.5px] border-l-0 border-[#e3e3e3]">
          <div className="flex justify-between items-center flex-grow-0 flex-shrink-0 w-[296px] relative">
            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[189.5px] relative gap-2.5">
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                preserveAspectRatio="none"
              >
                <path
                  d="M21 10H3M16 2V6M8 2V6M9 16L11 18L15.5 13.5M7.8 22H16.2C17.8802 22 18.7202 22 19.362 21.673C19.9265 21.3854 20.3854 20.9265 20.673 20.362C21 19.7202 21 18.8802 21 17.2V8.8C21 7.11984 21 6.27976 20.673 5.63803C20.3854 5.07354 19.9265 4.6146 19.362 4.32698C18.7202 4 17.8802 4 16.2 4H7.8C6.11984 4 5.27976 4 4.63803 4.32698C4.07354 4.6146 3.6146 5.07354 3.32698 5.63803C3 6.27976 3 7.11984 3 8.8V17.2C3 18.8802 3 19.7202 3.32698 20.362C3.6146 20.9265 4.07354 21.3854 4.63803 21.673C5.27976 22 6.11984 22 7.8 22Z"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#1c1c1c]">
                예약내역
              </p>
            </div>
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
              preserveAspectRatio="none"
            >
              <path
                d="M9 18L15 12L9 6"
                stroke="#8E8E8E"
                stroke-width={2}
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center self-stretch flex-grow-0 flex-shrink-0 h-16 gap-2 px-2.5 py-[18px] border-t-0 border-r-0 border-b-[1.5px] border-l-0 border-[#e3e3e3]">
          <div className="flex justify-between items-center flex-grow-0 flex-shrink-0 w-[296px] relative">
            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[189.5px] relative gap-2.5">
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                preserveAspectRatio="none"
              >
                <path
                  d="M16.1111 3C19.6333 3 22 6.3525 22 9.48C22 15.8138 12.1778 21 12 21C11.8222 21 2 15.8138 2 9.48C2 6.3525 4.36667 3 7.88889 3C9.91111 3 11.2333 4.02375 12 4.92375C12.7667 4.02375 14.0889 3 16.1111 3Z"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#1c1c1c]">
                찜 목록
              </p>
            </div>
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
              preserveAspectRatio="none"
            >
              <path
                d="M9 18L15 12L9 6"
                stroke="#8E8E8E"
                stroke-width={2}
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center self-stretch flex-grow-0 flex-shrink-0 h-16 gap-2 px-2.5 py-[18px] border-t-0 border-r-0 border-b-[1.5px] border-l-0 border-[#e3e3e3]">
          <div className="flex justify-between items-center flex-grow-0 flex-shrink-0 w-[296px] relative">
            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[189.5px] relative gap-2.5">
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                preserveAspectRatio="none"
              >
                <path
                  d="M2.5 21.4998L8.04927 19.3655C8.40421 19.229 8.58168 19.1607 8.74772 19.0716C8.8952 18.9924 9.0358 18.901 9.16804 18.7984C9.31692 18.6829 9.45137 18.5484 9.72028 18.2795L21 6.99982C22.1046 5.89525 22.1046 4.10438 21 2.99981C19.8955 1.89525 18.1046 1.89524 17 2.99981L5.72028 14.2795C5.45138 14.5484 5.31692 14.6829 5.20139 14.8318C5.09877 14.964 5.0074 15.1046 4.92823 15.2521C4.83911 15.4181 4.77085 15.5956 4.63433 15.9506L2.5 21.4998ZM2.5 21.4998L4.55812 16.1488C4.7054 15.7659 4.77903 15.5744 4.90534 15.4867C5.01572 15.4101 5.1523 15.3811 5.2843 15.4063C5.43533 15.4351 5.58038 15.5802 5.87048 15.8703L8.12957 18.1294C8.41967 18.4195 8.56472 18.5645 8.59356 18.7155C8.61877 18.8475 8.58979 18.9841 8.51314 19.0945C8.42545 19.2208 8.23399 19.2944 7.85107 19.4417L2.5 21.4998Z"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-[5px]">
                <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#1c1c1c]">
                  작성한 리뷰
                </p>
                <svg
                  width={4}
                  height={4}
                  viewBox="0 0 4 4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <circle cx={2} cy={2} r={2} fill="black" />
                </svg>
                <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#1c1c1c]">
                  글
                </p>
              </div>
            </div>
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
              preserveAspectRatio="none"
            >
              <path
                d="M9 18L15 12L9 6"
                stroke="#8E8E8E"
                stroke-width={2}
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center self-stretch flex-grow-0 flex-shrink-0 h-16 gap-2 px-2.5 py-[18px] rounded-xl">
          <div className="flex justify-between items-center flex-grow-0 flex-shrink-0 w-[296px] relative">
            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[189.5px] relative gap-2.5">
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                preserveAspectRatio="none"
              >
                <path
                  d="M7.5 10.5H7.51M12 10.5H12.01M16.5 10.5H16.51M7 18V20.3355C7 20.8684 7 21.1348 7.10923 21.2716C7.20422 21.3906 7.34827 21.4599 7.50054 21.4597C7.67563 21.4595 7.88367 21.2931 8.29976 20.9602L10.6852 19.0518C11.1725 18.662 11.4162 18.4671 11.6875 18.3285C11.9282 18.2055 12.1844 18.1156 12.4492 18.0613C12.7477 18 13.0597 18 13.6837 18H16.2C17.8802 18 18.7202 18 19.362 17.673C19.9265 17.3854 20.3854 16.9265 20.673 16.362C21 15.7202 21 14.8802 21 13.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V14C3 14.93 3 15.395 3.10222 15.7765C3.37962 16.8117 4.18827 17.6204 5.22354 17.8978C5.60504 18 6.07003 18 7 18ZM8 10.5C8 10.7761 7.77614 11 7.5 11C7.22386 11 7 10.7761 7 10.5C7 10.2239 7.22386 10 7.5 10C7.77614 10 8 10.2239 8 10.5ZM12.5 10.5C12.5 10.7761 12.2761 11 12 11C11.7239 11 11.5 10.7761 11.5 10.5C11.5 10.2239 11.7239 10 12 10C12.2761 10 12.5 10.2239 12.5 10.5ZM17 10.5C17 10.7761 16.7761 11 16.5 11C16.2239 11 16 10.7761 16 10.5C16 10.2239 16.2239 10 16.5 10C16.7761 10 17 10.2239 17 10.5Z"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-[5px]">
                <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#1c1c1c]">
                  고객센터
                </p>
              </div>
            </div>
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
              preserveAspectRatio="none"
            >
              <path
                d="M9 18L15 12L9 6"
                stroke="#8E8E8E"
                stroke-width={2}
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
