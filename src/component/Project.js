import { useState, useEffect, useRef } from "react";



export default function Project(){



    return(
        <div className="relative w-full min-h-screen bg-cover z-20 overflow-hidden "
        style={{
          backgroundImage: "url('/img/우주.png')",
          backgroundSize: "cover", 
          backgroundRepeat: "no-repeat", 
          backgroundAttachment: "fixed", 
        }}>

<div className="absolute left-[6%] top-[5%] max-[960px]:left-[11.5%]">
   <h2 className="text-[50px]"><span className="mr-[25px] text-[#9EDE52]">03</span> Projects</h2>
   </div>
    
   <div className="ml-[10vw] mt-[13vw] w-[50rem] border-8 border-[#9EDE52] rounded-[6px] overflow-hidden">
   <img className="w-full grayscale rounded-[1px] outline outline-2 outline-black" src="/img/foodFinder.png" />
    </div>
        </div>

    )
} 