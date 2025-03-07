import { useState, useEffect, useRef } from "react";





export default function Skill(){
     
    return(
        <>
        <div
      className="relative w-full min-h-screen bg-cover z-20 overflow-hidden "
      style={{
        backgroundImage: "url('/img/우주.png')",
        backgroundSize: "cover", 
        backgroundRepeat: "no-repeat", 
        backgroundAttachment: "fixed", 
      }}
    >

   <div className="absolute left-[6%] top-[5%] max-[960px]:left-[11.5%]">
   <h2 className="text-[50px]"><span className="mr-[25px] text-[#9EDE52]">02</span> Skills</h2>
   </div>

  <div className="w-full absolute left-[23vw] top-[12vw] grid grid-cols-[repeat(2,minmax(0,0.3fr))] gap-40 max-[1090px]:top-[16vw] left-[18vw]  max-[1030px]:grid-cols-[repeat(1,minmax(0,0.1fr))] max-[1030px]:gap-4 max-[490px]:mt-10">

<div className="flex items-center"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" className="w-24 h-24" />
<span className="text-[3rem] m-4">HTML</span></div>
<div className="flex items-center"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" className="w-24 h-24" />
<span className="text-[3rem] m-4">CSS</span></div>
<div className="flex items-center"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-24 h-24" />
<span className="text-[3rem] m-4">JavaScript</span></div>
<div className="flex items-center"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-24 h-24" />
<span className="text-[3rem] m-4">React</span></div>
<div className="flex items-center"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" className="w-24 h-24" />
<span className="text-[3rem] m-4">TypeScript</span></div>
<div className="flex items-center"><img 
  src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" 
  alt="Tailwind CSS" 
  className="w-24 h-24"
/>
<span className="text-[3rem] m-4">TailwindCSS</span></div>

</div>
        
    </div>
        </>
    )
}