import { useState, useEffect, useRef } from "react";


export default function Contact() {
  return (
    <div
    className={`relative w-full min-h-screen bg-cover overflow-hidden z-20`}
    style={{
      backgroundImage: "url('/img/우주.png')",
      backgroundSize: "cover", // 배경이 꽉 차게 설정
      backgroundRepeat: "no-repeat", // 중복 방지
      backgroundAttachment: "fixed", 
    }}
  >

<div className="absolute left-[6%] top-[5%] max-[960px]:left-[11.5%]">
        <h2 className="text-[50px] max-[800px]:text-[30px]">
          <span className="mr-[25px] text-[#9EDE52]">04</span> Contact
        </h2>
      </div>

  <div className="flex w-[50rem] max-[777px]:w-full p-[30px] justify-center items-center text-center mt-[15vw] m-auto flex-col">
    <span className="text-[25px]">
    <p className="text-[80px] max-[432px]:text-[60px]">감사합니다.</p>
    <br></br> <br></br>
    프론트엔드 개발자로 성장하기 위해 끊임없이 도전하고 학습하며,<br></br>
    항상 사용자의 관점에서 생각하여 쉽고 편리한 서비스를 만들고 싶습니다.
    </span>
  </div>


    </div>
  );
}
