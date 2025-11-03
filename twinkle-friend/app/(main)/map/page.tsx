export default function Map() {
  return (
    <div className="w-[390px] h-[844px] relative overflow-hidden bg-white">
      <div className="flex flex-col justify-start items-start w-[390px] absolute left-0 top-[50px] overflow-hidden gap-2 px-[30px] py-3 bg-white">
        <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0">
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
                stroke="black"
                stroke-width={2}
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p className="flex-grow-0 flex-shrink-0 w-[84px] h-5 text-lg font-semibold text-left text-black">
              지도
            </p>
          </div>
        </div>
      </div>
      <img
        src="🌎-map-maker:-공릉로-nowon-gu,-seoul,-south-korea-(standard).png"
        className="w-[733px] h-[733px] absolute left-[-217px] top-[97px] object-cover"
      />
      <svg
        width={45}
        height={53}
        viewBox="0 0 45 53"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[30.51px] h-[38.13px]"
        style={{ filter: "drop-shadow(0px 0px 6px rgba(0,0,0,0.25))" }}
        preserveAspectRatio="none"
      >
        <g filter="url(#filter0_d_6_500)">
          <path
            d="M22.2526 27.9723C25.4115 27.9723 27.9723 25.4115 27.9723 22.2526C27.9723 19.0937 25.4115 16.5329 22.2526 16.5329C19.0937 16.5329 16.5329 19.0937 16.5329 22.2526C16.5329 25.4115 19.0937 27.9723 22.2526 27.9723Z"
            fill="white"
          />
          <path
            d="M22.2526 45.1315C29.8789 37.5052 37.5052 30.6764 37.5052 22.2526C37.5052 13.8288 30.6764 7 22.2526 7C13.8288 7 7 13.8288 7 22.2526C7 30.6764 14.6263 37.5052 22.2526 45.1315Z"
            fill="white"
          />
          <path
            d="M22.2526 27.9723C25.4115 27.9723 27.9723 25.4115 27.9723 22.2526C27.9723 19.0937 25.4115 16.5329 22.2526 16.5329C19.0937 16.5329 16.5329 19.0937 16.5329 22.2526C16.5329 25.4115 19.0937 27.9723 22.2526 27.9723Z"
            stroke="white"
            stroke-width={2}
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M22.2526 45.1315C29.8789 37.5052 37.5052 30.6764 37.5052 22.2526C37.5052 13.8288 30.6764 7 22.2526 7C13.8288 7 7 13.8288 7 22.2526C7 30.6764 14.6263 37.5052 22.2526 45.1315Z"
            stroke="white"
            stroke-width={2}
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M22.2529 34.5C28.8803 34.5 34.2529 29.1274 34.2529 22.5C34.2529 15.8726 28.8803 10.5 22.2529 10.5C15.6255 10.5 10.2529 15.8726 10.2529 22.5C10.2529 29.1274 15.6255 34.5 22.2529 34.5Z"
            fill="#6D81FF"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20.8228 17.4951C20.6254 17.4951 20.4653 17.6552 20.4653 17.8526V20.7124H17.6055C17.4081 20.7124 17.248 20.8724 17.248 21.0699V23.9297C17.248 24.1271 17.4081 24.2871 17.6055 24.2871H20.4653V27.1469C20.4653 27.3443 20.6254 27.5044 20.8228 27.5044H23.6826C23.88 27.5044 24.0401 27.3443 24.0401 27.1469V24.2871H26.8998C27.0972 24.2871 27.2573 24.1271 27.2573 23.9297V21.0699C27.2573 20.8724 27.0972 20.7124 26.8998 20.7124H24.0401V17.8526C24.0401 17.6552 23.88 17.4951 23.6826 17.4951H20.8228Z"
            fill="white"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_6_500"
            x={0}
            y={0}
            width="44.5049"
            height="52.1313"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feflood flood-opacity={0} result="BackgroundImageFix" />
            <fecolormatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feoffset />
            <fegaussianblur stdDeviation={3} />
            <fecomposite in2="hardAlpha" operator="out" />
            <fecolormatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feblend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_6_500"
            />
            <feblend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_6_500"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
      <svg
        width={45}
        height={53}
        viewBox="0 0 45 53"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[30.51px] h-[38.13px]"
        style={{ filter: "drop-shadow(0px 0px 6px rgba(0,0,0,0.25))" }}
        preserveAspectRatio="none"
      >
        <g filter="url(#filter0_d_6_506)">
          <path
            d="M22.2526 27.9723C25.4115 27.9723 27.9723 25.4115 27.9723 22.2526C27.9723 19.0937 25.4115 16.5329 22.2526 16.5329C19.0937 16.5329 16.5329 19.0937 16.5329 22.2526C16.5329 25.4115 19.0937 27.9723 22.2526 27.9723Z"
            fill="white"
          />
          <path
            d="M22.2526 45.1315C29.8789 37.5052 37.5052 30.6764 37.5052 22.2526C37.5052 13.8288 30.6764 7 22.2526 7C13.8288 7 7 13.8288 7 22.2526C7 30.6764 14.6263 37.5052 22.2526 45.1315Z"
            fill="white"
          />
          <path
            d="M22.2526 27.9723C25.4115 27.9723 27.9723 25.4115 27.9723 22.2526C27.9723 19.0937 25.4115 16.5329 22.2526 16.5329C19.0937 16.5329 16.5329 19.0937 16.5329 22.2526C16.5329 25.4115 19.0937 27.9723 22.2526 27.9723Z"
            stroke="white"
            stroke-width={2}
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M22.2526 45.1315C29.8789 37.5052 37.5052 30.6764 37.5052 22.2526C37.5052 13.8288 30.6764 7 22.2526 7C13.8288 7 7 13.8288 7 22.2526C7 30.6764 14.6263 37.5052 22.2526 45.1315Z"
            stroke="white"
            stroke-width={2}
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M22.2529 34.5C28.8803 34.5 34.2529 29.1274 34.2529 22.5C34.2529 15.8726 28.8803 10.5 22.2529 10.5C15.6255 10.5 10.2529 15.8726 10.2529 22.5C10.2529 29.1274 15.6255 34.5 22.2529 34.5Z"
            fill="#6D81FF"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20.8228 17.4951C20.6254 17.4951 20.4653 17.6552 20.4653 17.8526V20.7124H17.6055C17.4081 20.7124 17.248 20.8724 17.248 21.0699V23.9297C17.248 24.1271 17.4081 24.2871 17.6055 24.2871H20.4653V27.1469C20.4653 27.3443 20.6254 27.5044 20.8228 27.5044H23.6826C23.88 27.5044 24.0401 27.3443 24.0401 27.1469V24.2871H26.8998C27.0972 24.2871 27.2573 24.1271 27.2573 23.9297V21.0699C27.2573 20.8724 27.0972 20.7124 26.8998 20.7124H24.0401V17.8526C24.0401 17.6552 23.88 17.4951 23.6826 17.4951H20.8228Z"
            fill="white"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_6_506"
            x={0}
            y={0}
            width="44.5049"
            height="52.1313"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feflood flood-opacity={0} result="BackgroundImageFix" />
            <fecolormatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feoffset />
            <fegaussianblur stdDeviation={3} />
            <fecomposite in2="hardAlpha" operator="out" />
            <fecolormatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feblend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_6_506"
            />
            <feblend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_6_506"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
      <svg
        width={45}
        height={53}
        viewBox="0 0 45 53"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[30.51px] h-[38.13px]"
        style={{ filter: "drop-shadow(0px 0px 6px rgba(0,0,0,0.25))" }}
        preserveAspectRatio="none"
      >
        <g filter="url(#filter0_d_6_512)">
          <path
            d="M22.2526 27.9723C25.4115 27.9723 27.9723 25.4115 27.9723 22.2526C27.9723 19.0937 25.4115 16.5329 22.2526 16.5329C19.0937 16.5329 16.5329 19.0937 16.5329 22.2526C16.5329 25.4115 19.0937 27.9723 22.2526 27.9723Z"
            fill="white"
          />
          <path
            d="M22.2526 45.1315C29.8789 37.5052 37.5052 30.6764 37.5052 22.2526C37.5052 13.8288 30.6764 7 22.2526 7C13.8288 7 7 13.8288 7 22.2526C7 30.6764 14.6263 37.5052 22.2526 45.1315Z"
            fill="white"
          />
          <path
            d="M22.2526 27.9723C25.4115 27.9723 27.9723 25.4115 27.9723 22.2526C27.9723 19.0937 25.4115 16.5329 22.2526 16.5329C19.0937 16.5329 16.5329 19.0937 16.5329 22.2526C16.5329 25.4115 19.0937 27.9723 22.2526 27.9723Z"
            stroke="white"
            stroke-width={2}
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M22.2526 45.1315C29.8789 37.5052 37.5052 30.6764 37.5052 22.2526C37.5052 13.8288 30.6764 7 22.2526 7C13.8288 7 7 13.8288 7 22.2526C7 30.6764 14.6263 37.5052 22.2526 45.1315Z"
            stroke="white"
            stroke-width={2}
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M22.2529 34.5C28.8803 34.5 34.2529 29.1274 34.2529 22.5C34.2529 15.8726 28.8803 10.5 22.2529 10.5C15.6255 10.5 10.2529 15.8726 10.2529 22.5C10.2529 29.1274 15.6255 34.5 22.2529 34.5Z"
            fill="#6D81FF"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20.8228 17.4951C20.6254 17.4951 20.4653 17.6552 20.4653 17.8526V20.7124H17.6055C17.4081 20.7124 17.248 20.8724 17.248 21.0699V23.9297C17.248 24.1271 17.4081 24.2871 17.6055 24.2871H20.4653V27.1469C20.4653 27.3443 20.6254 27.5044 20.8228 27.5044H23.6826C23.88 27.5044 24.0401 27.3443 24.0401 27.1469V24.2871H26.8998C27.0972 24.2871 27.2573 24.1271 27.2573 23.9297V21.0699C27.2573 20.8724 27.0972 20.7124 26.8998 20.7124H24.0401V17.8526C24.0401 17.6552 23.88 17.4951 23.6826 17.4951H20.8228Z"
            fill="white"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_6_512"
            x={0}
            y={0}
            width="44.5049"
            height="52.1313"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feflood flood-opacity={0} result="BackgroundImageFix" />
            <fecolormatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feoffset />
            <fegaussianblur stdDeviation={3} />
            <fecomposite in2="hardAlpha" operator="out" />
            <fecolormatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feblend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_6_512"
            />
            <feblend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_6_512"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
      <svg
        width={45}
        height={53}
        viewBox="0 0 45 53"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[30.51px] h-[38.13px]"
        style={{ filter: "drop-shadow(0px 0px 6px rgba(0,0,0,0.25))" }}
        preserveAspectRatio="none"
      >
        <g filter="url(#filter0_d_6_518)">
          <path
            d="M22.2526 27.9723C25.4115 27.9723 27.9723 25.4115 27.9723 22.2526C27.9723 19.0937 25.4115 16.5329 22.2526 16.5329C19.0937 16.5329 16.5329 19.0937 16.5329 22.2526C16.5329 25.4115 19.0937 27.9723 22.2526 27.9723Z"
            fill="white"
          />
          <path
            d="M22.2526 45.1315C29.8789 37.5052 37.5052 30.6764 37.5052 22.2526C37.5052 13.8288 30.6764 7 22.2526 7C13.8288 7 7 13.8288 7 22.2526C7 30.6764 14.6263 37.5052 22.2526 45.1315Z"
            fill="white"
          />
          <path
            d="M22.2526 27.9723C25.4115 27.9723 27.9723 25.4115 27.9723 22.2526C27.9723 19.0937 25.4115 16.5329 22.2526 16.5329C19.0937 16.5329 16.5329 19.0937 16.5329 22.2526C16.5329 25.4115 19.0937 27.9723 22.2526 27.9723Z"
            stroke="white"
            stroke-width={2}
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M22.2526 45.1315C29.8789 37.5052 37.5052 30.6764 37.5052 22.2526C37.5052 13.8288 30.6764 7 22.2526 7C13.8288 7 7 13.8288 7 22.2526C7 30.6764 14.6263 37.5052 22.2526 45.1315Z"
            stroke="white"
            stroke-width={2}
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M22.2529 34.5C28.8803 34.5 34.2529 29.1274 34.2529 22.5C34.2529 15.8726 28.8803 10.5 22.2529 10.5C15.6255 10.5 10.2529 15.8726 10.2529 22.5C10.2529 29.1274 15.6255 34.5 22.2529 34.5Z"
            fill="#6D81FF"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20.8228 17.4956C20.6254 17.4956 20.4653 17.6557 20.4653 17.8531V20.7129H17.6055C17.4081 20.7129 17.248 20.8729 17.248 21.0703V23.9301C17.248 24.1276 17.4081 24.2876 17.6055 24.2876H20.4653V27.1474C20.4653 27.3448 20.6254 27.5049 20.8228 27.5049H23.6826C23.88 27.5049 24.0401 27.3448 24.0401 27.1474V24.2876H26.8998C27.0972 24.2876 27.2573 24.1276 27.2573 23.9301V21.0703C27.2573 20.8729 27.0972 20.7129 26.8998 20.7129H24.0401V17.8531C24.0401 17.6557 23.88 17.4956 23.6826 17.4956H20.8228Z"
            fill="white"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_6_518"
            x={0}
            y={0}
            width="44.5049"
            height="52.1313"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feflood flood-opacity={0} result="BackgroundImageFix" />
            <fecolormatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feoffset />
            <fegaussianblur stdDeviation={3} />
            <fecomposite in2="hardAlpha" operator="out" />
            <fecolormatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feblend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_6_518"
            />
            <feblend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_6_518"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
      <div
        className="flex flex-col justify-center items-center w-[390px] h-[49px] absolute left-0 top-[98px] gap-2 px-[18px] py-px bg-white"
        style={{ boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.1)" }}
      >
        <div className="flex justify-between items-center flex-grow-0 flex-shrink-0 w-[330px] relative">
          <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-3">
            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
              <svg
                width={18}
                height={22}
                viewBox="0 0 18 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-[15.33px] h-[19.17px]"
                preserveAspectRatio="none"
              >
                <path
                  d="M8.66667 11.5417C10.2545 11.5417 11.5417 10.2545 11.5417 8.66667C11.5417 7.07885 10.2545 5.79167 8.66667 5.79167C7.07885 5.79167 5.79167 7.07885 5.79167 8.66667C5.79167 10.2545 7.07885 11.5417 8.66667 11.5417Z"
                  fill="#555555"
                />
                <path
                  d="M8.66667 20.1667C12.5 16.3333 16.3333 12.9009 16.3333 8.66667C16.3333 4.43248 12.9008 1 8.66667 1C4.43248 1 1 4.43248 1 8.66667C1 12.9009 4.83333 16.3333 8.66667 20.1667Z"
                  fill="#555555"
                />
                <path
                  d="M8.66667 11.5417C10.2545 11.5417 11.5417 10.2545 11.5417 8.66667C11.5417 7.07885 10.2545 5.79167 8.66667 5.79167C7.07885 5.79167 5.79167 7.07885 5.79167 8.66667C5.79167 10.2545 7.07885 11.5417 8.66667 11.5417Z"
                  stroke="#555555"
                  stroke-width={2}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.66667 20.1667C12.5 16.3333 16.3333 12.9009 16.3333 8.66667C16.3333 4.43248 12.9008 1 8.66667 1C4.43248 1 1 4.43248 1 8.66667C1 12.9009 4.83333 16.3333 8.66667 20.1667Z"
                  stroke="#555555"
                  stroke-width={2}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.66699 11.5417C10.2548 11.5417 11.542 10.2546 11.542 8.66675C11.542 7.07893 10.2548 5.79175 8.66699 5.79175C7.07917 5.79175 5.79199 7.07893 5.79199 8.66675C5.79199 10.2546 7.07917 11.5417 8.66699 11.5417Z"
                  fill="white"
                />
              </svg>
            </div>
            <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#555]">
              서울 노원구
            </p>
          </div>
          <svg
            width={22}
            height={22}
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-[22px] h-[22px] relative"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              d="M2.75 7.33325L13.75 7.33325M13.75 7.33325C13.75 8.85204 14.9812 10.0833 16.5 10.0833C18.0188 10.0833 19.25 8.85203 19.25 7.33325C19.25 5.81447 18.0188 4.58325 16.5 4.58325C14.9812 4.58325 13.75 5.81447 13.75 7.33325ZM8.25 14.6666L19.25 14.6666M8.25 14.6666C8.25 16.1854 7.01878 17.4166 5.5 17.4166C3.98122 17.4166 2.75 16.1854 2.75 14.6666C2.75 13.1478 3.98122 11.9166 5.5 11.9166C7.01878 11.9166 8.25 13.1478 8.25 14.6666Z"
              stroke="#555555"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className="flex justify-start items-center absolute left-[21px] top-[573px] gap-3.5">
        <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 gap-3">
          <div
            className="flex flex-col justify-end items-end flex-grow-0 flex-shrink-0 h-[130px] w-[262px] relative gap-2 px-3 py-[13px]"
            style={{ filter: "drop-shadow(0px 0px 10px rgba(0,0,0,0.25))" }}
          >
            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[262px] h-[130px] absolute left-0 top-0 gap-2 rounded-2xl bg-white">
              <img
                className="flex-grow-0 flex-shrink-0 w-[84px] h-[130px] rounded-tl-2xl rounded-bl-2xl"
                src="rectangle-6.png"
              />
            </div>
            <div className="flex flex-col justify-end items-end flex-grow-0 flex-shrink-0 w-[152px] gap-3 pr-1">
              <div className="flex flex-col justify-start items-end self-stretch flex-grow-0 flex-shrink-0 relative gap-1.5">
                <p className="self-stretch flex-grow-0 flex-shrink-0 w-[148px] h-5 text-sm font-semibold text-left text-black">
                  수피아동물병원
                </p>
                <div className="flex flex-col justify-center items-center self-stretch flex-grow-0 flex-shrink-0 gap-1">
                  <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-[17px] relative gap-2">
                    <p className="flex-grow-0 flex-shrink-0 text-xs font-semibold text-left text-[#1c1c1c]">
                      영업중
                    </p>
                    <p className="flex-grow-0 flex-shrink-0 text-xs font-medium text-left text-[#aaa]">
                      09:30에 영업 시작
                    </p>
                  </div>
                  <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-[17px] relative gap-[7px]">
                    <p className="flex-grow-0 flex-shrink-0 text-xs font-semibold text-left text-[#1c1c1c]">
                      290m
                    </p>
                    <p className="flex-grow-0 flex-shrink-0 text-xs font-medium text-left text-[#aaa]">
                      서울 노원구
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[68px] h-7 gap-2 px-[23px] rounded-md bg-[#6d81ff]">
                <div className="flex justify-end items-center flex-grow-0 flex-shrink-0 relative gap-1">
                  <svg
                    width={12}
                    height={12}
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0 w-3 h-3 relative"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <path
                      d="M4.19014 4.42668C4.53814 5.15149 5.01253 5.83081 5.61332 6.4316C6.21411 7.03238 6.89343 7.50678 7.61824 7.85478C7.68059 7.88471 7.71176 7.89968 7.7512 7.91118C7.89138 7.95204 8.06351 7.92269 8.18222 7.83768C8.21563 7.81376 8.24421 7.78518 8.30136 7.72803C8.47617 7.55322 8.56357 7.46582 8.65146 7.40868C8.9829 7.19318 9.41019 7.19318 9.74164 7.40868C9.82953 7.46582 9.91693 7.55322 10.0917 7.72803L10.1892 7.82546C10.4549 8.09118 10.5877 8.22404 10.6599 8.36673C10.8035 8.65051 10.8035 8.98565 10.6599 9.26943C10.5877 9.41212 10.4549 9.54498 10.1892 9.8107L10.1103 9.88952C9.84554 10.1543 9.71313 10.2867 9.53312 10.3879C9.33336 10.5001 9.02312 10.5808 8.79401 10.5801C8.58753 10.5795 8.44642 10.5394 8.1642 10.4593C6.6475 10.0288 5.21632 9.21658 4.02233 8.02259C2.82834 6.8286 2.0161 5.39742 1.58562 3.88072C1.50551 3.59849 1.46546 3.45738 1.46485 3.25091C1.46417 3.0218 1.54485 2.71155 1.65706 2.5118C1.75818 2.33178 1.89059 2.19938 2.1554 1.93457L2.23422 1.85575C2.49994 1.59003 2.6328 1.45717 2.77549 1.385C3.05927 1.24146 3.3944 1.24146 3.67818 1.38499C3.82087 1.45717 3.95373 1.59003 4.21945 1.85575L4.31689 1.95318C4.49169 2.12799 4.57909 2.21539 4.63624 2.30328C4.85173 2.63472 4.85173 3.06201 4.63624 3.39346C4.57909 3.48135 4.49169 3.56875 4.31689 3.74355C4.25973 3.80071 4.23115 3.82929 4.20723 3.86269C4.12223 3.98141 4.09288 4.15354 4.13374 4.29371C4.14524 4.33316 4.1602 4.36433 4.19014 4.42668Z"
                      fill="white"
                      stroke="white"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="flex-grow-0 flex-shrink-0 w-[21px] text-xs font-semibold text-left text-white">
                    전화
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 gap-3">
          <div
            className="flex flex-col justify-end items-end flex-grow-0 flex-shrink-0 h-[130px] w-[262px] relative gap-2 px-3 py-[13px]"
            style={{ filter: "drop-shadow(0px 0px 10px rgba(0,0,0,0.25))" }}
          >
            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[262px] h-[130px] absolute left-0 top-0 gap-2 rounded-2xl bg-white">
              <img
                className="flex-grow-0 flex-shrink-0 w-[84px] h-[130px] rounded-tl-2xl rounded-bl-2xl"
                src="rectangle-6-2.png"
              />
            </div>
            <div className="flex flex-col justify-end items-end flex-grow-0 flex-shrink-0 w-[152px] gap-3 pr-1">
              <div className="flex flex-col justify-start items-end self-stretch flex-grow-0 flex-shrink-0 relative gap-1.5">
                <p className="self-stretch flex-grow-0 flex-shrink-0 w-[148px] h-5 text-sm font-semibold text-left text-black">
                  골드퍼피동물병원 공릉점
                </p>
                <div className="flex flex-col justify-center items-center self-stretch flex-grow-0 flex-shrink-0 gap-1">
                  <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-[17px] relative gap-2">
                    <p className="flex-grow-0 flex-shrink-0 text-xs font-semibold text-left text-[#1c1c1c]">
                      영업중
                    </p>
                    <p className="flex-grow-0 flex-shrink-0 text-xs font-medium text-left text-[#aaa]">
                      09:30에 영업 시작
                    </p>
                  </div>
                  <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-[17px] relative gap-[7px]">
                    <p className="flex-grow-0 flex-shrink-0 text-xs font-semibold text-left text-[#1c1c1c]">
                      290m
                    </p>
                    <p className="flex-grow-0 flex-shrink-0 text-xs font-medium text-left text-[#aaa]">
                      서울 노원구{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[68px] h-7 gap-2 px-[23px] rounded-md bg-[#6d81ff]">
                <div className="flex justify-end items-center flex-grow-0 flex-shrink-0 relative gap-1">
                  <div className="flex-grow-0 flex-shrink-0 w-3 h-3 relative" />
                  <p className="flex-grow-0 flex-shrink-0 w-[21px] text-xs font-semibold text-left text-white">
                    전화
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 gap-3">
          <div
            className="flex flex-col justify-end items-end flex-grow-0 flex-shrink-0 h-[130px] w-[262px] relative gap-2 px-3 py-[13px]"
            style={{ filter: "drop-shadow(0px 0px 10px rgba(0,0,0,0.25))" }}
          >
            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[262px] h-[130px] absolute left-0 top-0 gap-2 rounded-2xl bg-white">
              <img
                className="flex-grow-0 flex-shrink-0 w-[84px] h-[130px] rounded-tl-2xl rounded-bl-2xl"
                src="rectangle-6-3.png"
              />
            </div>
            <div className="flex flex-col justify-end items-end flex-grow-0 flex-shrink-0 w-[152px] gap-3 pr-1">
              <div className="flex flex-col justify-start items-end self-stretch flex-grow-0 flex-shrink-0 relative gap-1.5">
                <p className="self-stretch flex-grow-0 flex-shrink-0 w-[148px] h-5 text-sm font-semibold text-left text-black">
                  메인동물병원
                </p>
                <div className="flex flex-col justify-center items-center self-stretch flex-grow-0 flex-shrink-0 gap-1">
                  <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-[17px] relative gap-2">
                    <p className="flex-grow-0 flex-shrink-0 text-xs font-semibold text-left text-[#1c1c1c]">
                      영업중
                    </p>
                    <p className="flex-grow-0 flex-shrink-0 w-[91px] text-xs font-medium text-left text-[#aaa]">
                      09:30에 영업 시작
                    </p>
                  </div>
                  <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-[17px] relative gap-[7px]">
                    <p className="flex-grow-0 flex-shrink-0 text-xs font-semibold text-left text-[#1c1c1c]">
                      290m
                    </p>
                    <p className="flex-grow-0 flex-shrink-0 text-xs font-medium text-left text-[#aaa]">
                      서울 노원구
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[68px] h-7 gap-2 px-[23px] rounded-md bg-[#6d81ff]">
                <div className="flex justify-end items-center flex-grow-0 flex-shrink-0 relative gap-1">
                  <div className="flex-grow-0 flex-shrink-0 w-3 h-3 relative" />
                  <p className="flex-grow-0 flex-shrink-0 w-[21px] text-xs font-semibold text-left text-white">
                    전화
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center absolute left-[315px] top-[170px] gap-2.5">
        <div
          className="flex-grow-0 flex-shrink-0 w-14 h-14"
          style={{ filter: "drop-shadow(0px 0px 8px rgba(0,0,0,0.25))" }}
        >
          <div className="w-14 h-14 absolute left-[-0.5px] top-[-0.5px] rounded-lg bg-white" />
          <p className="w-8 h-3 absolute left-3 top-9 text-[10px] font-medium text-center text-[#555]">
            24시간
          </p>
          <svg
            width={22}
            height={22}
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[22px] h-[22px] absolute left-[17px] top-2.5"
            preserveAspectRatio="none"
          >
            <path
              d="M13.2913 17.4168L15.1247 19.2502L19.2497 15.1252M20.1527 11.5042C20.1618 11.3373 20.1663 11.1693 20.1663 11.0002C20.1663 5.93755 16.0623 1.8335 10.9997 1.8335C5.93706 1.8335 1.83301 5.93755 1.83301 11.0002C1.83301 15.9826 5.80814 20.0366 10.76 20.1638M10.9997 5.50016V11.0002L14.4265 12.7136"
              stroke="#555555"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
