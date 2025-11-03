// src/types/navigator.d.ts

// 이미 존재하는 전역(global) 타입을 확장하겠다고 선언합니다.
declare global {
  // `Navigator` 인터페이스를 찾아서...
  interface Navigator {
    // 여기에 'connection' 속성을 추가합니다.
    // 타입은 'NetworkInformation'입니다.
    // (이 타입은 tsconfig의 "lib": ["dom"]에 이미 정의되어 있습니다.)
    readonly connection: NetworkInformation;

    // 'getBattery' 메소드를 추가합니다.
    // 이 메소드는 'Promise<BatteryManager>'를 반환합니다.
    // (BatteryManager 타입도 "lib": ["dom"]에 있습니다.)
    getBattery: () => Promise<BatteryManager>;
  }
}

// 이 파일이 전역 스크립트가 아닌 '모듈'임을 명시합니다.
// 이렇게 해야 'declare global'이 안전하게 동작합니다.
export {};
