import { useState, useEffect, useRef } from "react";


export default function Pokedex(){

  const goHome = () => {
    window.history.back();
  }

    return(
        <>
        <div
    className={`relative w-full min-h-screen bg-cover overflow-hidden z-20`}
    style={{
      backgroundImage: "url('/img/우주.png')",
      backgroundSize: "cover", // 배경이 꽉 차게 설정
      backgroundRepeat: "no-repeat", // 중복 방지
      backgroundAttachment: "fixed", 
    }}
  >

<div className="pl-16 pr-16 pt-12">


<div className="w-full flex justify-between items-center ">
<div onClick={goHome} className="w-[3rem] fill-[#9EDE52]"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg></div>
<a><div className="border-2 rounded-[20px] border-[#9EDE52] p-2 cursor-pointer"><span className="text-[#9EDE52]">GitHub</span></div></a>
</div>


</div>

    </div>
        </>
    )
}