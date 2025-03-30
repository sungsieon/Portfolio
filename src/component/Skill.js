import { useState, useEffect, useRef } from "react";

export default function Skill() {
  return (
    <>
      <div
        className="relative w-full min-h-screen bg-cover z-20 overflow-hidden"
        style={{
          backgroundImage: "url('/img/우주.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: window.innerWidth <= 430 ? "scroll" : "fixed",
          zIndex: 0,
          minHeight: "100vh",
        }}
      >
        <div className="ml-[6rem] mt-[3rem] max-[480px]:ml-[2rem] max-[430px]:mt-[0]">
          <h2 className="text-[50px] max-[800px]:text-[40px]">
            <span className="mr-[25px] text-[#9EDE52]">02</span> Skills
          </h2>
        </div>

        <div className="w-full ml-[20rem] mt-[5rem] grid grid-cols-[repeat(2,minmax(0,0.3fr))]  gap-40 max-[1197px]:ml-[8rem] max-[800px]:ml-[3rem] max-[800px]:gap-20  max-[600px]:grid-cols-[repeat(1,minmax(0,0.3fr))] max-[600px]:gap-2 max-[600px]:mt-[6rem] max-[430px]:mt-[1rem]">
          <div className="flex items-center">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
              alt="HTML5"
              className="w-24 h-24 max-[763px]:w-[3rem]"
            />
            <span className="text-[3rem] max-[934px]:text-[2rem] m-4">
              HTML
            </span>
          </div>
          <div className="flex items-center">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
              alt="CSS3"
              className="w-24 h-24 max-[763px]:w-[3rem]"
            />
            <span className="text-[3rem] max-[934px]:text-[2rem] m-4">CSS</span>
          </div>
          <div className="flex items-center">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              alt="JavaScript"
              className="w-24 h-24 max-[763px]:w-[3rem]"
            />
            <span className="text-[3rem] max-[934px]:text-[2rem] m-4">
              JavaScript
            </span>
          </div>
          <div className="flex items-center">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              alt="React"
              className="w-24 h-24 max-[763px]:w-[3rem]"
            />
            <span className="text-[3rem] max-[934px]:text-[2rem] m-4">
              React
            </span>
          </div>
          <div className="flex items-center">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
              alt="TypeScript"
              className="w-24 h-24 max-[763px]:w-[3rem]"
            />
            <span className="text-[3rem] max-[934px]:text-[2rem] m-4">
              TypeScript<br></br><span className="text-[2rem] max-[934px]:text-[1rem]">(기본 개념 이해, 학습 중)</span>
            </span>
          </div>
          <div className="flex items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
              alt="Tailwind CSS"
              className="w-24 h-24 max-[763px]:w-[3rem]"
            />
            <span className="text-[3rem] max-[934px]:text-[2rem] m-4">
              TailwindCSS
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
