import Introduction from "./Introduction";
import { useState, useEffect, useRef } from "react";

export default function LandingPage() {
  const [isTriangle, setIsTriangle] = useState(false);
  const [starTimer, setStarTimer] = useState(true);
  const [mainText, setMainText] = useState(false);
  const [mainLight, setMainLight] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTriangle(true);
    }, 2200);

    const portfolioText = setTimeout(() => {
      setMainText(true);
    }, 3200);

    const timer2 = setTimeout(() => {
      setStarTimer(false);
    }, 3400);

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsTriangle(false);
      }
    };

    const handleScroll2 = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      setMainLight(scrollPercent);

      console.log("현재 스크롤 위치:", scrollPercent);
    };

    window.addEventListener("scroll", handleScroll2);

    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
      clearTimeout(portfolioText);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    // --------우주 배경---------
    <div
      className="relative  min-h-screen overflow-hidden bg-cover z-20  "
      style={{
        backgroundImage: "url('/img/우주.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: window.innerWidth <= 430 ? "scroll" : "fixed",
        minHeight: "100vh",
        
      }}
    >
      <div className="fixed top-[5%] right-[2%]">
        <div className="flex gap-[10px]">
          <div className="flex gap-[20.7px] items-end flex-col">
            <span
              className={
                mainLight >= 0 && mainLight < 10 ? "text-[#9EDE52]" : ""
              }
            >
              Main
            </span>
            <span
              className={
                mainLight >= 10 && mainLight < 30 ? "text-[#9EDE52]" : ""
              }
            >
              About
            </span>
            <span
              className={`
        ${
          window.innerWidth <= 430
            ? mainLight >= 30 && mainLight < 60
              ? "text-[#9EDE52]"
              : ""
            : mainLight >= 30 && mainLight < 50
            ? "text-[#9EDE52]"
            : ""
        }
      `}
            >
              Skill
            </span>
            <span
              className={`
        ${
          window.innerWidth <= 430
            ? mainLight >= 60 && mainLight < 88
              ? "text-[#9EDE52]"
              : ""
            : mainLight >= 50 && mainLight < 88
            ? "text-[#9EDE52]"
            : ""
        }
      `}
            >
              Project
            </span>
            <span
              className={
                mainLight >= 88 && mainLight < 110 ? "text-[#9EDE52]" : ""
              }
            >
              Contact
            </span>
          </div>
          <div className="flex gap-[3px] flex-col items-center">
            <span
              className={
                mainLight >= 0 && mainLight < 10 ? "text-[#9EDE52]" : ""
              }
            >
              01
            </span>
            <span className="flex flex-col  w-[2px] h-[15px] bg-white"></span>
            <span
              className={
                mainLight >= 10 && mainLight < 30 ? "text-[#9EDE52]" : ""
              }
            >
              02
            </span>
            <span className="flex flex-col  w-[2px] h-[15px] bg-white"></span>
            <span
              className={`
        ${
          window.innerWidth <= 430
            ? mainLight >= 30 && mainLight < 60
              ? "text-[#9EDE52]"
              : ""
            : mainLight >= 30 && mainLight < 50
            ? "text-[#9EDE52]"
            : ""
        }
      `}
            >
              03
            </span>
            <span className="flex flex-col  w-[2px] h-[15px] bg-white"></span>
            <span
              className={`
        ${
          window.innerWidth <= 430
            ? mainLight >= 60 && mainLight < 88
              ? "text-[#9EDE52]"
              : ""
            : mainLight >= 50 && mainLight < 88
            ? "text-[#9EDE52]"
            : ""
        }
      `}
            >
              04
            </span>
            <span className="flex flex-col  w-[2px] h-[15px] bg-white"></span>
            <span
              className={
                mainLight >= 88 && mainLight < 110 ? "text-[#9EDE52]" : ""
              }
            >
              05
            </span>
          </div>
        </div>
      </div>

      <div
        className={`
    absolute w-full top-[42vh] flex justify-center flex-wrap z-20 
    ${
      mainText
        ? "opacity-100 transition-opacity duration-1000"
        : "opacity-0 transition-opacity duration-3000"
    }
  `}
      >
        <img className="w-[8vw] object-contain" src="/img/P.png" />
        <img className="w-[10vw] object-contain" src="/img/O.png" />
        <img className="w-[8vw] object-contain" src="/img/R.png" />
        <img className="w-[8vw] object-contain" src="/img/T.png" />
        <div className="w-full" />
        <img className="w-[8vw] object-contain" src="/img/F.png" />
        <img className="w-[10vw] object-contain" src="/img/O.png" />
        <img className="w-[7vw] object-contain" src="/img/L.png" />
        <img className="w-[6vw] object-contain" src="/img/I.png" />
        <img className="w-[10vw] object-contain" src="/img/O.png" />
      </div>

      <div className="absolute top-[0%] left-[-34.2%] z-20 w-full h-full ">
        <img
          className="rotate-[40deg] w-[83.5vw] h-[83.5vw] max-w-full max-h-full object-contain animate-move-rotate"
          src="/img/우주2.png"
        />
      </div>
      {/* ------------별 4개------------ */}
      <div
        className={
          starTimer
            ? "absolute top-1/2 left-[46.3%] w-full hidden"
            : "absolute top-1/2 left-[46.3%] w-full animate-star1-rotate"
        }
      >
        <img className="w-[7vw] " src="/img/star1.png" />
      </div>

      <div
        className={
          starTimer
            ? "absolute top-1/2 left-[46.3%] w-full hidden"
            : "absolute top-1/2 left-[46.3%] w-full animate-star2-rotate"
        }
      >
        <img className="w-[7vw] " src="/img/star1.png" />
      </div>

      <div
        className={
          starTimer
            ? "absolute top-1/2 left-[46.3%] w-full hidden"
            : "absolute top-1/2 left-[46.3%] w-full animate-star3-rotate"
        }
      >
        <img className="w-[7vw] " src="/img/star2.png" />
      </div>

      <div
        className={
          starTimer
            ? "absolute top-1/2 left-[46.3%] w-full hidden"
            : "absolute top-1/2 left-[46.3%] w-full animate-star4-rotate"
        }
      >
        <img className="w-[7vw] " src="/img/star2.png" />
      </div>

      {/* ------------------------------ */}
      {/* ---------우주 레이저----------- */}
      <div className="absolute top-[10%] left-[35%] max-[1750px]:left-[34.6%] w-full h-full">
        <div
          className={
            isTriangle
              ? "w-0 h-0 border-l-[15vw] border-l-transparent border-r-[15vw] border-r-transparent max-[2000px]:border-b-[105vh]  max-[1750px]:border-b-[85vh]  max-[640px]:border-b-[85vh]  border-b-[#FFFA72] absolute bottom-0 transition-opacity duration-[1500ms] opacity-100 z-10"
              : "opacity-0"
          }
        />
      </div>
    </div>
  );
}
