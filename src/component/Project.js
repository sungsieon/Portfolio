import { useState, useEffect, useRef } from "react";



export default function Project(){



    return(
        <div className="relative w-full min-h-full bg-cover z-20 overflow-x-hidden "
        style={{
          backgroundImage: "url('/img/우주.png')",
          backgroundSize: "cover", 
          backgroundRepeat: "no-repeat", 
          backgroundAttachment: "fixed", 
        }}>

<div className="absolute left-[6%] top-[5%] max-[960px]:left-[11.5%]">
   <h2 className="text-[50px] max-[800px]:text-[30px]"><span className="mr-[25px] text-[#9EDE52]">03</span> Projects</h2>
   </div>
    
    <div className="flex mt-[13vw] max-[854px]:mt-[15vw] max-[462px]:mt-[25vw] h-full">
   <div className="ml-[10vw] w-[40vw] min-w-[20rem] border-8 border-[#9EDE52] rounded-[6px] overflow-hidden  ">
   <img className="w-full  grayscale rounded-[1px] outline outline-2 outline-black  " src="/img/foodFinder.png" />
    </div>

   <div className="ml-[2vw]  w-[25vw] ">
    <h1 className="max-[1070px]:hidden text-[3rem]">foodFinder</h1>
    <p className="max-[1070px]:hidden text-[1.2rem]">2024.12.26 ~ 2025.1.12</p>
   
   <p className="max-[1070px]:hidden mb-12">카카오지도를 통해 부산 맛집을 쉽고 빠르게 검색할 수 있는 웹 애플리케이션입니다.</p>
   <div className="cursor-pointer">
   
   </div>
   </div>
   </div>

 <span className="absolute top-[31vw] left-[51.6vw] max-[1070px]:hidden text-[#9EDE52] border-2 border-[#9EDE52] p-1 rounded-[15px]  ">상세내용</span>

    <div className="ml-[53vw] mt-[11vw] w-[40vw] min-w-[20rem] border-8 border-[#9EDE52] rounded-[6px] overflow-hidden max-[854px]:ml-[10vw]">
   <img className="w-full grayscale rounded-[1px] outline outline-2 outline-black" src="/img/pokedex.png" />
    </div>


       
        </div>

    )
} 