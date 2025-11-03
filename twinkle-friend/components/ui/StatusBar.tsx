"use client";

import React from "react";
import { useCurrentTime } from "@/lib/hooks/useCurrentTime";
import { useBatteryStatus } from "@/lib/hooks/useBatteryStatus";
import { useNetworkStatus } from "@/lib/hooks/useNetworkStatus";

// --- 2. 프레젠테이셔널(UI) 컴포넌트들 ---
// 이 컴포넌트들은 별도 파일로 분리하는 게 가장 좋습니다.
// 여기서는 예시를 위해 한 파일에 작성했습니다.

interface BatteryIconProps {
  level: number; // 0.0 ~ 1.0
  isCharging: boolean;
}

const BatteryIcon: React.FC<BatteryIconProps> = ({ level, isCharging }) => {
  const batteryLevelPercent = Math.round(level * 100);

  return (
    <div>
      {/* 여기서 SVG나 아이콘 라이브러리를 사용해서
        isCharging, batteryLevelPercent 값에 따라 
        다른 배터리 아이콘 모양을 보여주면 됩니다.
      */}
      <span>
        {isCharging ? "⚡" : ""} {batteryLevelPercent}%
      </span>
    </div>
  );
};

interface NetworkIconProps {
  type: "wifi" | "cellular" | "none" | "unknown";
}

const NetworkIcon: React.FC<NetworkIconProps> = ({ type }) => {
  let icon = "❓"; // unknown

  if (type === "wifi") {
    icon = "📶"; // Wi-Fi 아이콘 (실제로는 SVG 사용)
  } else if (type === "cellular") {
    icon = "5G"; // 또는 LTE (신호 세기는 알 수 없음)
  } else if (type === "none") {
    icon = "❌"; // 연결 없음
  }

  return <div>{icon}</div>;
};

// --- 3. 컨테이너 컴포넌트 (조립) ---

export const StatusBar: React.FC = () => {
  // 1. 훅을 호출해서 '데이터'만 가져옵니다.
  const currentTime = useCurrentTime();
  const battery = useBatteryStatus();
  const network = useNetworkStatus();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px",
        backgroundColor: "black",
        color: "white",
        fontFamily: "sans-serif",
      }}
    >
      {/* 데이터를 props로 '주입'해서 UI 컴포넌트를 렌더링합니다.
        StatusBar 컴포넌트는 '어떻게' 보일지 전혀 신경 쓰지 않죠.
      */}
      <div data-testid="time">{currentTime}</div>

      <div style={{ display: "flex", gap: "8px" }}>
        {network.isSupported && <NetworkIcon type={network.type} />}
        {battery.isSupported && (
          <BatteryIcon level={battery.level} isCharging={battery.isCharging} />
        )}
      </div>
    </div>
  );
};

/* 원래 이미지 입니다. 

파랑색 바탕
    <div className="w-96 h-12 left-0 top-0 absolute overflow-hidden">
        <div
          data-dark-mode="False"
          data-type="Default"
          className="w-14 h-5 left-[27px] top-[14px] absolute rounded-3xl"
        >
          <div className="w-14 h-5 left-0 top-[1px] absolute text-center justify-start  text-base font-semibold font-['SF_Pro_Text'] leading-snug">
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

하얀색 바탕
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
*/
