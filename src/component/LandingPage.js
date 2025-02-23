import Introduction from "./Introduction";
import { useState, useEffect } from "react";

export default function LandingPage() {
  const [isTriangle, setIsTriangle] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTriangle(true);
    }, 2800);

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsTriangle(false);
      }
    };

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="relative w-full min-h-screen bg-cover z-20 "
      style={{
        backgroundImage: "url('/img/우주.png')",
        backgroundSize: "cover", // 배경이 꽉 차게 설정
        backgroundRepeat: "no-repeat", // 중복 방지
        backgroundAttachment: "fixed", // 배경을 고정
      }}
    >
      <div className="absolute top-[0%] left-[-34.2%] z-10 w-full h-full ">
        <img
          className="rotate-[40deg] w-[83.5vw] h-[83.5vw] max-w-full max-h-full object-contain animate-move-rotate"
          src="/img/우주2.png"
        />
      </div>

      <div className="absolute top-[10%] left-[35%] max-[1750px]:left-[34.6%] w-full h-full">
        <div
          className={
            isTriangle
              ? "w-0 h-0 border-l-[15vw] border-l-transparent border-r-[15vw] border-r-transparent max-[2000px]:border-b-[105vh]  max-[1750px]:border-b-[85vh]  max-[640px]:border-b-[85vh]  border-b-[#FFFA72] absolute bottom-0 transition-opacity duration-[2000ms] opacity-100"
              : "opacity-0"
          }
        />
      </div>
    </div>
  );
}
