import {useState, useEffect} from "react";

export default function CustomCursor() {

const [position, setPosition] = useState({ x: 0, y: 0 });
const [shadowPosition, setShadowPosition] = useState({ x: 0, y: 0 });

useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setShadowPosition({ x: e.clientX + 15, y: e.clientY + 15 });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
        document.removeEventListener("mousemove", handleMouseMove);
      };
},[]);
    
return(


<>
<div className="fixed w-[40px] h-[40px] bg-[#F3FB15] border-[2px] border-[#6a942e] rounded-full pointer-events-none transition-transform duration-100 z-50 max-[500px]:hidden"
style={{
    top: `${position.y - 10}px`, // 마우스 위치에서 10px씩 빼기 (커서 크기)
    left: `${position.x - 10}px`, // 마우스 위치에서 10px씩 빼기
  }}></div>

<div
          className="fixed w-5 h-5 bg-transparent pointer-events-none z-40 max-[500px]:hidden"
          style={{
            top: `${shadowPosition.y - 10}px`,
            left: `${shadowPosition.x - 10}px`,
            filter: `blur(15px)`,
            boxShadow: `0px 0px 10px 10px #9EDE52`, // 흐릿한, 넓게 퍼지는 쉐도우
            borderRadius: "20%", // 쉐도우가 원형으로 퍼지도록 설정
            transition: "box-shadow 0.4s ease-out", // 부드럽게 변화
          }}
        />
</>
)
}