import Introduction from "./Introduction";
import { useState, useEffect } from "react";

export default function LandingPage() {
  const [isTriangle, setIsTriangle] = useState(false);
  const [starTimer, setStarTimer] = useState(true);
  const [mainText, setMainText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTriangle(true);
    }, 2800);

    const portfolioText = setTimeout(() => {
      setMainText(true);
    }, 3600);

    const timer2 = setTimeout(() => {
      setStarTimer(false);
    }, 3800);

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsTriangle(false);
      }
    };

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
      className="relative w-full min-h-screen bg-cover z-20 overflow-hidden "
      style={{
        backgroundImage: "url('/img/우주.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
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
