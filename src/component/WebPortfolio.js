import { useState, useEffect, useRef } from "react";

export default function WebPortfolio() {
  const goHome = () => {
    window.history.back();
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div
        className={`relative w-full min-h-screen bg-cover overflow-hidden z-20`}
        style={{
          backgroundImage: "url('/img/우주.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="px-16 pt-12">
          {/* header */}
          <div className="w-full flex justify-between items-center ">
            <div
              onClick={goHome}
              className="w-[3rem] fill-[#9EDE52] "
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
              </svg>
            </div>
            <a style={{cursor:"none"}} href="https://github.com/sungsieon">
              <div className="border-2 rounded-[20px] border-[#9EDE52] p-2   hover:bg-white">
                <span className="text-[#9EDE52]">GitHub</span>
              </div>
            </a>
          </div>
          <h1 className="mt-[2.5rem] text-[40px] text-[#9EDE52]">
            Web Portfolio
          </h1>
          <div className="mt-[3rem] w-full h-auto bg-black  shadow-xl shadow-[#6a942e]">
            <div className="p-8 text-[1.4rem] max-[1173px]:text-[1.3rem] max-[973px]:text-[1.1rem] leading-[3rem]">
              <p>
                <span className="text-[#9EDE52]">Web Portfolio</span>는 제
                소개를 하기 위해 만든 웹 사이트입니다.{" "}
              </p>
              <p>Wep Portfolio에 들어오게 되면 여러 animation으로 만든 </p>
              <p>Landing Page가 먼저 보이게 되고, 그다음으로는</p>
              <p>
                제 소개와 더불어 저의 방향성과 목표를 담은 component를
                넣었습니다.
              </p>
              <p>
                그리고 제가 현재 할 수 있는 기술들과 제가 한 프로젝트들을
                넣었습니다.
              </p>
              <p></p>
            </div>
          </div>
          <h1 className="mt-[5rem] text-[40px] text-[#9EDE52]">
            프로젝트 세부 정보
          </h1>
          <div className="mt-[2rem] w-full h-auto bg-black  shadow-xl shadow-[#6a942e]">
            <div className="p-8 text-[1.4rem] max-[1173px]:text-[1.3rem] max-[973px]:text-[1.1rem] leading-[3rem]">
              <p>
                기간 : <span className="ml-[4.6rem]">2025.2.1 ~ 2025.2.25</span>{" "}
              </p>
              <p>
                주요 기능 :{" "}
                <span className="ml-8">
                  Router, animation, Responsive Design
                </span>
              </p>
              <p>
                주요 기술 : <span className="ml-8">React, TailwindCSS</span>
              </p>
              <p>
                깃허브 :{" "}
                <span className="ml-[3.3rem]">
                  <a href="https://github.com/sungsieon/PokeDex">
                    <span style={{cursor:"none"}} className="text-[1rem] border-1 p-[5px] rounded-[6px] bg-green-700 cursor-pointer">
                      깃허브 URL
                    </span>
                  </a>
                </span>
              </p>
              <p>
                URL :{" "}
                <span className="ml-[4.4rem]">
                  <a href="https://pokedex-nine-dusky-97.vercel.app/">
                    <span style={{cursor:"none"}} className="text-[1rem] border-1 p-[5px] rounded-[6px] bg-green-700 cursor-pointer">
                      배포 URL
                    </span>
                  </a>
                </span>
              </p>
            </div>
          </div>
          <h1 className="mt-[5rem] text-[40px] text-[#9EDE52]">트러블슈팅</h1>
          <div className="mt-[2rem] w-full h-auto bg-black  shadow-xl shadow-[#6a942e]">
            <div className="p-8 text-[1.4rem] max-[1173px]:text-[1.3rem] max-[973px]:text-[1.1rem] leading-[3rem]">
              <p>프로젝트의 상세 내용을 눌렀을 때, 스크롤이 내려온 상태로</p>
              <p>
                들어가지는 문제가 있었습니다. 이 문제를 해결하기 위해
                useEffect로
              </p>
              <p>
                window.scrollTo(0,0)로 들어오자마자 위로 와지게끔 하여
                해결했습니다.
              </p>
            </div>
          </div>
          <br></br> <br></br>
        </div>
      </div>
    </>
  );
}
