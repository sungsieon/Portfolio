import { useState, useEffect, useRef } from "react";

export default function Pokedex() {
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
              className="w-[3rem] fill-[#9EDE52] cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
              </svg>
            </div>
            <a href="https://github.com/sungsieon">
              <div className="border-2 rounded-[20px] border-[#9EDE52] p-2 cursor-pointer  hover:bg-white">
                <span className="text-[#9EDE52]">GitHub</span>
              </div>
            </a>
          </div>
          <h1 className="mt-[2.5rem] text-[40px] text-[#9EDE52]">Pokedex</h1>
          <div className="mt-[3rem] w-full h-auto bg-black  shadow-xl shadow-[#6a942e]">
            <div className="p-8 text-[1.4rem] max-[1173px]:text-[1.3rem] max-[973px]:text-[1.1rem] leading-[3rem]">
              <p>
                <span className="text-[#9EDE52]">Pokedex</span>는 사용자가
                포켓몬을 검색하고 자세한 정보를 확인할 수 있는 웹
                애플리케이션입니다.{" "}
              </p>
              <p>
                Pokedex에 들어오게 되면 검색, 한/영, 밝은 모드/어두운 모드가
                있고
              </p>
              <p>
                스크롤을 내리게 되면 30마리씩 총 150마리의 포켓몬이 보이게
                됩니다.
              </p>
              <p>
                검색 시, 검색한 포켓몬 이름과 일치하는 포켓몬만 화면에 필터링
                됩니다.
              </p>
              <p>
                한/영 버튼을 누를 시, 포켓몬들의 이름이 한글이면 영어로 영어면
                한글로 변환되고
              </p>
              <p>
                어두운 모드를 누를 시, 배경색과 포켓몬 카드 배경색이
                어두운색으로 변합니다.
              </p>
              <p>
                포켓몬 카드를 클릭하면 포켓몬에 대한 자세한 정보를 볼 수
                있습니다.
              </p>
            </div>
          </div>
          <h1 className="mt-[5rem] text-[40px] text-[#9EDE52]">
            프로젝트 세부 정보
          </h1>
          <div className="mt-[2rem] w-full h-auto bg-black  shadow-xl shadow-[#6a942e]">
            <div className="p-8 text-[1.4rem] max-[1173px]:text-[1.3rem] max-[973px]:text-[1.1rem] leading-[3rem]">
              <p>
                기간 :{" "}
                <span className="ml-[4.6rem]">2024.11.24 ~ 2024.11.30</span>{" "}
              </p>
              <p>
                주요 기능 :{" "}
                <span className="ml-8">검색, 한/영 버튼, 다크 모드 </span>
              </p>
              <p>
                주요 기술 :{" "}
                <span className="ml-8">React, Styled-components, Axios</span>
              </p>
              <p>
                깃허브 :{" "}
                <span className="ml-[3.3rem]">
                  <a href="https://github.com/sungsieon/PokeDex">
                    <span className="text-[1rem] border-1 p-[5px] rounded-[6px] bg-green-700 cursor-pointer">
                      깃허브 URL
                    </span>
                  </a>
                </span>
              </p>
              <p>
                URL :{" "}
                <span className="ml-[4.4rem]">
                  <a href="https://pokedex-nine-dusky-97.vercel.app/">
                    <span className="text-[1rem] border-1 p-[5px] rounded-[6px] bg-green-700 cursor-pointer">
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
              <p>
                웹페이지에 접속 시 150마리의 포켓몬 데이터를 불러오다 보니
                렌더링 속도가 너무{" "}
              </p>
              <p>
                느려지는 문제가 있었습니다. 이 문제를 해결하기 위해
                Promise.all() 을 사용하여
              </p>
              <p>
                비동기 요청을 병렬 처리함으로써 데이터를 더욱 빠르게 불러오도록
                개선했습니다.{" "}
              </p>
              <p>
                이를 통해 대기 시간이 줄어들어 렌더링 속도가 크게
                향상되었습니다.
              </p>
              <p>
                그리고 아직 불러오지 않은 포켓몬은 검색 결과에 나타나지 않는
                문제가 있었는데,
              </p>
              <p>
                전체 포켓몬 데이터를 한 번에 변수에 저장하여 검색은 전체
                데이터를 대상으로 수행
              </p>
              <p>하도록 변경해서 이 문제를 해결했습니다.</p>
            </div>
          </div>
          <br></br> <br></br>
        </div>
      </div>
    </>
  );
}
