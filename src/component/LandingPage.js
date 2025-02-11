import Introduction from "./Introduction";
import { useState, useEffect } from 'react';

export default function LandingPage() {

   const [isTriangle, setIsTriangle] = useState(false);

   useEffect(() => {

      setTimeout(() => {
         setIsTriangle(true);
      }, 100);
   },[]);

  return (
    <div
      className="relative w-full min-h-screen bg-cover z-20"
      style={{
        backgroundImage: "url('/img/우주.png')",
        backgroundSize: "cover", // 배경이 꽉 차게 설정
        backgroundRepeat: "no-repeat", // 중복 방지
        backgroundAttachment: "fixed", // 배경을 고정
      }}
 >
   <div className="absolute top-[-35%] left-[-35%] z-10">
   <img className="rotate-[40deg] w-[100rem] h-[100rem] object-contain animate-move-rotate" src="/img/UFO1.png" />
   </div>
   
   <div className="absolute top-[10%] left-[28.2%] w-0 h-0 border-l-[400px] border-l-transparent border-r-[400px] border-r-transparent border-b-[870px] border-b-[#FFFA72]"/>
      
    </div>
  );
}
