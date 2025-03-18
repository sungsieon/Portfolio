import { useState, useEffect, useRef } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Project() {

  const navigate = useNavigate();

  const goToFoodFinder = () => {
    navigate('/foodFinder')
  }

  const goToPokedex = () => {
    navigate('/pokedex')
  }

  const goToWebPortfolio = () => {
    navigate('/webPortfolio')
  }


  return (
    <div
      className="relative w-full min-h-full bg-cover z-20 overflow-x-hidden "
      style={{
        backgroundImage: "url('/img/우주.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="ml-[6rem] mt-[3rem] max-[480px]:ml-[2rem]">
        <h2 className="text-[50px] max-[800px]:text-[40px]">
          <span className="mr-[25px] text-[#9EDE52]">03</span> Projects
        </h2>
      </div>

      <div className="flex mt-[5vw] max-[854px]:mt-[15vw] max-[462px]:mt-[25vw] h-full">
        <div className="ml-[10vw] w-[40vw] min-w-[20rem] border-8 border-[#9EDE52] rounded-[6px] overflow-hidden  ">
          <img
            className="w-full  grayscale rounded-[1px] outline outline-2 outline-black  "
            src="/img/foodFinder.png"
          />
        </div>

        <div className="ml-[2vw]  w-[25vw] ">
          <h1 className="max-[1070px]:hidden text-[3rem]">FoodFinder</h1>
          <p className="max-[1070px]:hidden text-[1.2rem]">
            2024.12.26 ~ 2025.1.12
          </p>

          <p className="max-[1070px]:hidden mb-12">
            FoodFinder는 카카오지도를 통해 부산 맛집을 쉽고 빠르게 검색할 수 있는 웹
            애플리케이션입니다.
          </p>
        </div>
      </div>

      <span onClick={goToFoodFinder} className="absolute top-[31vw] left-[51.6vw] max-[1070px]:hidden text-[#9EDE52] border-2 border-[#9EDE52] p-1 rounded-[15px] cursor-pointer ">
        상세내용
      </span>
     
     <div className="flex max-[541px]:ml-0 ml-[24vw] items-center">
      <div className="mr-[2vw]  w-[25vw] ">
          <h1 className="max-[1070px]:hidden text-[3rem]">Pokedex</h1>
          <p className="max-[1070px]:hidden text-[1.2rem]">
          2024.11.24 ~ 2024.11.30
          </p>

          <p className="max-[1070px]:hidden mb-12">
          PokeDex는 사용자가 포켓몬을 검색하고 자세한 정보를 확인할 수 있는 웹 애플리케이션입니다.
          포켓몬의 타입, 설명 등을 확인할 수 있으며, 사용자 친화적인 UI를 제공합니다.
          </p>
        </div>


        <div className="mt-[11vw] w-[40vw] min-w-[20rem] border-8 border-[#9EDE52] rounded-[6px] overflow-hidden max-[854px]:ml-[10vw]">
          <img
            className="w-full grayscale rounded-[1px] outline outline-2 outline-black"
            src="/img/pokedex.png"
          />
        </div>



      </div>
      <span onClick={goToPokedex} className="absolute top-[65vw] left-[45.3vw] max-[1070px]:hidden text-[#9EDE52] border-2 border-[#9EDE52] p-1 rounded-[15px] cursor-pointer ">
        상세내용
      </span>


      <div className="flex mt-[10vw] max-[854px]:mt-[10vw] max-[462px]:mt-[10vw] h-full">
        <div className="ml-[10vw] w-[40vw] min-w-[20rem] border-8 border-[#9EDE52] rounded-[6px] overflow-hidden  ">
          <img
            className="w-full  grayscale rounded-[1px] outline outline-2 outline-black  "
            src="/img/PP.png"
          />
        </div>

        <div className="ml-[2vw]  w-[25vw] ">
          <h1 className="max-[1070px]:hidden text-[3rem]">Web Portfolio</h1>
          <p className="max-[1070px]:hidden text-[1.2rem]">
            2025.2.1 ~ 2025.2.25
          </p>

          <p className="max-[1070px]:hidden mb-12">
            Wep Portfolio는 제 소개와 쓸 수 있는 기술,프로젝트 등이 정리되어 있습니다.
          </p>
        </div>
      </div>

      <span onClick={goToWebPortfolio} className="absolute top-[95.7vw] left-[51.6vw] max-[1070px]:hidden text-[#9EDE52] border-2 border-[#9EDE52] p-1 rounded-[15px] cursor-pointer ">
        상세내용
      </span>

      
    </div>
  );
}
