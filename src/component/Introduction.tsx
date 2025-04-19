import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useScroll } from "../context/ScrollContext";


export default function Introduction() {
  const [scrollTranslate, setScrollTranslate] = useState<boolean>(true);
  const [changeScroll, setChangeScroll] = useState<boolean>(true);
  const [changeCount, setChangeCount] = useState<number>(0);
  const prevScrollY = useRef<number>(
    typeof window !== 'undefined' ? window.scrollY : 0
  );
  const hasPaused = useRef<boolean>(false);
  const targetRef = useRef<HTMLDivElement>(null);
  const {introRef} = useScroll(); 


  useEffect(() => {
  

    const handleScroll = (): void => {
      if (sessionStorage.getItem("cameFromFoodFinder")) return;

      if (!targetRef.current) return;

      if (targetRef.current) {
        const rect = targetRef.current.getBoundingClientRect();
        const currentScrollY = window.scrollY;
        if (rect.top < window.innerHeight * 0.3 && !hasPaused.current) {
          setChangeScroll(false);
          setChangeCount(1);

          document.body.style.overflow = "hidden";


          window.scrollTo({ top: currentScrollY, behavior: "instant" });

          hasPaused.current = true;

          setTimeout(() => {
            document.body.style.overflow = "auto";
          }, 1500);
        }
        if (
          rect.top > window.innerHeight * 0.3 &&
          currentScrollY <= prevScrollY.current &&
          hasPaused.current
        ) {
          setChangeScroll(true);
          document.body.style.overflow = "hidden";

          window.scrollTo({ top: currentScrollY, behavior: "instant" });

          setTimeout(() => {
            document.body.style.overflow = "auto";
          }, 1500);
          hasPaused.current = false;
        }
        prevScrollY.current = currentScrollY;
      }
    };




    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [changeScroll]);

 
    
  

  return (
    <div
      className={`relative w-full bg-cover overflow-hidden z-20`}
      style={{
        backgroundImage: "url('/img/우주.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: 
        typeof window !== "undefined" && window.innerWidth <= 430 ? "scroll" : "fixed",
        zIndex: 0,
        minHeight: "100vh",
      }}
    >
      <div className="ml-[6rem] mt-[7rem] max-[480px]:ml-[2rem] max-[430px]:mt-[1rem] ">
        <span className="text-[50px] max-[800px]:text-[40px]">
          <span ref={introRef} className="mr-[25px] text-[#9EDE52]">01</span>About me
        </span>
      </div>

      <div className="mt-[5rem] ml-[11rem] max-[605px]:ml-[1rem] max-[430px]:mt-[2rem]">
        <span className="text-[25px] max-[394px]:text-[20px]">
          끊임없이 성장하는 프론트-엔드 개발자,
        </span>
        <br></br>
        <span className="leading-[1.2] ml-[5px] text-[70px] max-[465px]:text-[50px] max-[394px]:text-[35px] max-[394px]:ml-0">
          <span className="text-[#9EDE52] ">성시언</span>입니다.
        </span>
      </div>

      <div className="flex items-center ml-[11rem] mt-[5rem] max-[1117px]:ml-[5rem] max-[620px]:ml-[2rem] max-[700px]:mt-[2rem] ">
        <div
          className={
            changeScroll
              ? "bg-[#9EDE52] rounded-3xl w-8 h-8"
              : "bg-[#9EDE52] rounded-3xl w-[25px] h-[25px]"
          }
        />
        <div
          className={
            changeScroll
              ? "bg-white ml-[8px] rounded-3xl w-[25px] h-[25px]"
              : "bg-white ml-[8px] rounded-3xl w-8 h-8"
          }
        />
      </div>

      <div 
        ref={targetRef}
        className="flex z-20  mt-[1.5rem] ml-[11rem] max-[1117px]:ml-[5rem] max-[620px]:ml-[1.5rem] "
      >
        <div
          className={`${changeScroll ? "" : "animate-move-left-opacity"}
          ${changeCount && changeScroll ? "animate-move-right-opacity" : ""}`}
        >
          <div className="flex items-center">
            <img
              className="w-14 h-14 object-contain  max-[469px]:hidden"
              src="/img/rocket.png"
              alt="rocket"
            />
            <p className="text-[35px] ml-[1.4rem] z-20 max-[440px]:text-[30px] max-[430px]:ml-[0rem]   ">
              끊임없는 도전과 학습
            </p>
          </div>
          <div>
            <p
              className={
                "regular-font text-[20px] z-20 ml-[5rem] mt-[1rem] w-[74vw] max-[469px]:ml-[1.5rem]  max-[469px]:text-[19px]  max-[430px]:ml-0"
              }
            >
              진로를 방황하던 중 웹 개발을 접하게 되었습니다.<br></br>
              생각한 대로 웹을 구현할 수 있다는 점에 큰 흥미를 느꼈습니다.
              <br></br>
              <br></br>이 길에 확신을 느끼고 개인 프로젝트와 공부를
              시작했습니다.
              <br></br>
              낯선 기술에도 두려워하지 않고 적극적으로 도전하고 있습니다.
              <br></br>
              
              
              <br></br>
              경험과 열정을 바탕으로 끊임없이 발전하는 것이 제 목표입니다.
            </p>
          </div>
        </div>

        <div
          className={`w-full  z-20 max-[1117px]:ml-[-3rem] max-[620px]:ml-[-3rem] max-[485px]:absolute max-[485px]:left-[23rem] max-[440px]:left-[23rem] max-[367px]:left-[20rem] opacity-0
        ${changeScroll ? "" : "animate-move-left"}
        ${changeScroll && changeCount ? "animate-move-right-opacity2" : ""} `}
        >
          <div className={`flex items-center`}>
            <img
              className="w-14 h-14 object-contain max-[469px]:hidden"
              src="/img/rocket.png"
              alt="rocket"
            />
            <p className="text-[42px] ml-[1.4rem] z-10 max-[1125px]:text-[35px] max-[440px]:text-[30px] max-[460px]:text-[30px] max-[400px]:ml-[3rem] max-[469px]:ml-[5rem]">
              세심하고 효율적인 코드
            </p>
          </div>

          <div>
            <p className="regular-font text-[22px]  ml-[5rem] mt-[1rem] w-[70vw] max-[1125px]:text-[22px]  max-[860px]:text-[17px] max-[477px]:text-[16px] max-[400px]:ml-[3rem] ">
              웹 개발에 있어 무엇보다 중요한 점은 사용자의 편의라고 생각합니다.{" "}
              <br></br>
              저는 사용자의 편의를 위해 인터페이스 디자인과 디테일을 중요시
              <br  />
              여기고 있습니다. <br></br>
              <br></br>
              코드를 간결하고 효율적으로 작성하며 사용에 있어 불편한 요소를
              <br />
              최소화 하기 위해 항상 노력하고 있습니다.
              <br></br>
              <br></br>
              노력을 바탕으로 언제나 사용자의 입장에서 생각하며 최적의
              <br /> 결과물을 만들어내고자
              합니다.
            </p>
          </div>
        </div>
      </div>

      <div className="absolute top-[25%] right-[-62%] w-full max-[1402px]:hidden">
        <img
          className="rotate-[8deg] w-[20rem] max-[] h-[35rem] object-contain"
          src="/img/사진 넣을 자리.png"
          alt="human"
        />
      </div>
    </div>
  );
}
