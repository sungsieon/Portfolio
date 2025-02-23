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
    // --------우주 배경---------
    <div
      className="relative w-full min-h-screen bg-cover z-20 "
      style={{
        backgroundImage: "url('/img/우주.png')",
        backgroundSize: "cover", 
        backgroundRepeat: "no-repeat", 
        backgroundAttachment: "fixed", 
      }}
    >

      

      <div className="absolute top-[0%] left-[-34.2%] z-10 w-full h-full ">
        <img
          className="rotate-[40deg] w-[83.5vw] h-[83.5vw] max-w-full max-h-full object-contain animate-move-rotate"
          src="/img/우주2.png"
        />
      </div>
     {/* ------------별 4개------------ */}
      <div className="absolute top-1/2 left-[46.2%] w-full z-40">
      <img className="w-[7vw] z-40" src="/img/star1.png"/>
      </div>

      <div className="absolute top-1/2 left-[46.2%] w-full z-40">
      <img className="w-[7vw] z-40" src="/img/star1.png"/>
      </div>

      <div className="absolute top-1/2 left-[46.2%] w-full z-40">
      <img className="w-[7vw] z-40" src="/img/star2.png"/>
      </div>

      <div className="absolute top-1/2 left-[46.2%] w-full z-40">
      <img className="w-[7vw] z-40" src="/img/star2.png"/>
      </div>

      {/* ------------------------------ */}
      {/* ---------우주 레이저----------- */}
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
