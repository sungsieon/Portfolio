import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useScroll } from "../context/ScrollContext";

export default function Project() {

  const [isMobile, setIsMobile] = useState<boolean>(false);

  const {projectRef} = useScroll();


  useEffect(() => {
    const savedScrollPosition = sessionStorage.getItem("scrollPosition");
    if (savedScrollPosition !== null) {
      window.scrollTo(0, parseInt(savedScrollPosition, 10));
      sessionStorage.removeItem("scrollPosition");
    }

    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth <= 1073);
    }
  }, []);

  const navigate = useNavigate();

  const goToFoodFinder = (): void => {
    navigate("/foodFinder");
    sessionStorage.setItem("scrollPosition", window.scrollY.toString());
    sessionStorage.setItem("cameFromFoodFinder", "true");
  };

  const goToPokedex = (): void => {
    navigate("/pokedex");
    sessionStorage.setItem("scrollPosition", window.scrollY.toString());
    sessionStorage.setItem("cameFromFoodFinder", "true");
  };

  const goToWebPortfolio = (): void => {
    navigate("/webPortfolio");
    sessionStorage.setItem("scrollPosition", window.scrollY.toString());
    sessionStorage.setItem("cameFromFoodFinder", "true");
  };

  return (
    <div
      className="relative w-full min-h-screen bg-cover z-20 overflow-hidden "
      style={{
        backgroundImage: "url('/img/우주.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment:
        isMobile ? "scroll" : "fixed",
        zIndex: 0,
        minHeight: "100vh",
      }}
    >
      <div className="ml-[6rem] mt-[3rem] max-[480px]:ml-[2rem]">
        <h2 className="text-[50px] max-[800px]:text-[40px]">
          <span ref={projectRef} className="mr-[25px] text-[#9EDE52]">03</span> Projects
        </h2>
      </div>

      <div className="flex mt-[4vw] max-[854px]:mt-[15vw] max-[462px]:mt-[25vw] h-full">
        <div
          onClick={(): void => {
            if (isMobile) {
              goToFoodFinder();
            }
          }}
          className="ml-[10vw] w-[40vw] min-w-[20rem] border-8 border-[#9EDE52] rounded-[6px] overflow-hidden  "
        >
          <img
            className="w-full  grayscale hover:grayscale-0 rounded-[1px] outline outline-2 outline-black  "
            src="/img/foodFinder.png"
          />
        </div>

        <div className="ml-[2vw]  w-[30vw] ">
          <h1 className="max-[1070px]:hidden text-[3rem]">FoodFinder</h1>
          <p className="max-[1070px]:hidden text-[1.2rem]">
            2024.12.26 ~ 2025.1.12
          </p>

          <p className="max-[1070px]:hidden mb-12">
            FoodFinder는 카카오지도를 통해 부산 맛집을 쉽고 빠르게 검색할 수
            있는 웹 애플리케이션입니다.
          </p>

          <span
        onClick={goToFoodFinder}
        className="max-[1070px]:hidden text-[#9EDE52] border-2 border-[#9EDE52] p-1 rounded-[15px] "
      >
        상세내용
      </span>
        </div>
      </div>

      

      <div className="flex max-[541px]:ml-0 ml-[24vw] items-center">
        <div className="mr-[2vw]  w-[30vw] ">
          <h1 className="max-[1070px]:hidden text-[3rem]">Pokedex</h1>
          <p className="max-[1070px]:hidden text-[1.2rem]">
            2024.11.24 ~ 2024.11.30
          </p>

          <p className="max-[1070px]:hidden mb-12">
            PokeDex는 사용자가 포켓몬을 검색하고 자세한 정보를 확인할 수 있는 웹
            애플리케이션입니다. 포켓몬의 타입, 설명 등을 확인할 수 있으며,
            사용자 친화적인 UI를 제공합니다.
          </p>

         <div className="w-full flex justify-end">
          <span
        onClick={goToPokedex}
        className="max-[1070px]:hidden text-[#9EDE52] border-2 border-[#9EDE52] p-1 rounded-[15px]  "
      >
        상세내용
      </span>
      </div>
        </div>

        <div
          onClick={(): void => {
            if (isMobile) {
              goToPokedex();
            }
          }}
          className="mt-[11vw] w-[40vw] min-w-[20rem] border-8 border-[#9EDE52] rounded-[6px] overflow-hidden max-[854px]:ml-[10vw]"
        >
          <img
            className="w-full grayscale hover:grayscale-0 rounded-[1px] outline outline-2 outline-black"
            src="/img/pokedex.png"
          />
        </div>
      </div>
     

      <div className="flex mt-[10vw] max-[854px]:mt-[10vw] max-[462px]:mt-[10vw] h-full pb-[3rem]">
        <div
          onClick={(): void => {
            if (isMobile) {
              goToWebPortfolio();
            }
          }}
          className="ml-[10vw] w-[40vw] min-w-[20rem] border-8 border-[#9EDE52] rounded-[6px] overflow-hidden  "
        >
          <img
            className="w-full  grayscale hover:grayscale-0 rounded-[1px] outline outline-2 outline-black  "
            src="/img/PP.png"
          />
        </div>

        <div className="ml-[2vw]  w-[30vw] ">
          <h1 className="max-[1070px]:hidden text-[3rem]">Web Portfolio</h1>
          <p className="max-[1070px]:hidden text-[1.2rem]">
            2025.2.1 ~ 2025.2.25
          </p>

          <p className="max-[1070px]:hidden mb-12">
            Wep Portfolio는 제 소개와 쓸 수 있는 기술,프로젝트 등이 정리되어
            있습니다.
          </p>

        <span
        onClick={goToWebPortfolio}
        className="max-[1070px]:hidden text-[#9EDE52] border-2 border-[#9EDE52] p-1 rounded-[15px] "
      >
        상세내용
      </span> 
        </div>
       <br></br><br></br>
      </div>

      
    </div>
  );
}
