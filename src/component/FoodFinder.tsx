import { useState, useEffect, useRef } from "react";

export default function FoodFinder() {
  const goHome = () => {
    window.history.back();
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className={`relative w-full min-h-screen bg-cover overflow-hidden z-20`}
      style={{
        backgroundImage: "url('/img/우주.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="px-16 pt-12 max-[430px]:px-6">
        <div className="w-full flex justify-between items-center ">
          <div
            onClick={goHome}
            className="w-[3rem] fill-[#9EDE52]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
            </svg>
          </div>
          <a style={{cursor:"none"}} href="https://github.com/sungsieon">
            <div className="border-2 rounded-[20px] border-[#9EDE52] p-2 hover:bg-white">
              <span className="text-[#9EDE52]">GitHub</span>
            </div>
          </a>
        </div>
        <p className="mt-[2.5rem] text-[40px] text-[#9EDE52]">FoodFinder</p>
        <div className="mt-[3rem] w-full h-auto bg-black  shadow-xl shadow-[#6a942e]">
          <div className="p-8 text-[1.4rem] max-[1173px]:text-[1.3rem] max-[973px]:text-[1.1rem] leading-[3rem]">
            <p>
              <span className="text-[#9EDE52]">FoodFinder</span>는 부산 맛집을
              쉽고 빠르게 검색할 수 있는 웹 애플리케이션입니다.{" "}
            </p>
            <p>회원가입 시, 정보를 로컬 스토리지에 저장합니다.</p>
            <p>로그인 시, 저장된 정보와 일치하면 메인 화면으로 이동합니다.</p>
            <p>
              메인 페이지는 kakao API 기반으로 만들어졌고 kakao 지도에 부산
              맛집들이 마커 표시로 뜨며
            </p>
            <p>
              왼쪽 사이드바에는 부산 맛집들 정보와 검색, 예약 기능이 있습니다.
            </p>
            <p>검색 시, kakao 지도에서 검색한 가게의 좌표로 이동됩니다. </p>
            <p>
              예약 버튼을 누르게 되면 날짜, 시간이 뜨게 되고 원하는 날짜로
              예약할 수 있고
            </p>
            <p>
              만약 같은 날짜로 예약 시, 예약이 안되고 알림문구가 뜨게됩니다.
            </p>
            <p>
              "오늘 뭐 먹을까?" 라는 버튼을 누를 시, 모달 창과 함께 부산 맛집중
              랜덤으로 이름이 뜨게됩니다.{" "}
            </p>
          </div>
        </div>
        <p className="mt-[5rem] text-[40px] text-[#9EDE52]">
          프로젝트 세부 정보
        </p>
        <div className="mt-[2rem] w-full h-auto bg-black  shadow-xl shadow-[#6a942e]">
          <div className="p-8 text-[1.4rem] max-[1173px]:text-[1.3rem] max-[973px]:text-[1.1rem] leading-[3rem]">
            <p>
              기간 : <span className="ml-[4.6rem]">2024.12.26 ~ 2025.1.12</span>{" "}
            </p>
            <p>
              주요 기능 :{" "}
              <span className="ml-8">
                로그인, 회원가입, 검색, 즐겨찾기, 음식 랜덤 추천
              </span>
            </p>
            <p>
              주요 기술 :{" "}
              <span className="ml-8">React, Styled-components, Json</span>
            </p>
            <p>
              깃허브 :{" "}
              <span className="ml-[3.3rem]">
                <a href="https://github.com/sungsieon/FoodFinder">
                  <span style={{cursor:"none"}} className="text-[1rem] border-1 p-[5px] rounded-[6px] bg-green-700 cursor-pointer">
                    깃허브 URL
                  </span>
                </a>
              </span>
            </p>
            <p>
              URL :{" "}
              <span className="ml-[4.4rem]">
                <a href="https://sungsieon.github.io/FoodFinder/">
                  <span style={{cursor:"none"}} className="text-[1rem] border-1 p-[5px] rounded-[6px] bg-green-700 cursor-pointer">
                    배포 URL
                  </span>
                </a>
              </span>
            </p>
          </div>
        </div>
        <p className="mt-[5rem] text-[40px] text-[#9EDE52]">트러블슈팅</p>
        <div className="mt-[2rem] w-full h-auto bg-black  shadow-xl shadow-[#6a942e]">
          <div className="p-8 text-[1.4rem] max-[1173px]:text-[1.3rem] max-[973px]:text-[1.1rem] leading-[3rem]">
            <p>가게별로 예약일을 저장해야 했는데, 처음에는 모든 예약일을 </p>
            <p>
              {" "}
              하나의 상태에서 관리하려다 보니 가게별로 따로 저장하기가 어려웠다.
            </p>
            <p> 이 문제를 해결하기 위해 데이터를 객체 형태로 정리하고, </p>
            <p> 가게 ID를 키로 삼아 예약일을 저장하는 방식으로 변경했다. </p>
            <p>
              {" "}
              이렇게 하니 각 가게의 예약 정보를 쉽게 불러오고 수정할 수 있었다.
            </p>
          </div>
        </div>
        <br></br> <br></br>
      </div>
    </div>
  );
}
