import {useState, useEffect} from "react";

export default function CustomCursor() {

const [position, setPosition] = useState<{x:number, y:number}>({ x: 0, y: 0 });
const [shadowPosition, setShadowPosition] = useState<{x:number, y:number}>({ x: 0, y: 0 });

useEffect(() => {
    const handleMouseMove = (e:MouseEvent): void => {
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
    top: `${position.y - 10}px`, 
    left: `${position.x - 10}px`,
  }}></div>

<div
          className="fixed w-5 h-5 bg-transparent pointer-events-none z-40 max-[500px]:hidden"
          style={{
            top: `${shadowPosition.y - 10}px`,
            left: `${shadowPosition.x - 10}px`,
            filter: `blur(15px)`,
            boxShadow: `0px 0px 10px 10px #9EDE52`, 
            borderRadius: "20%", 
            transition: "box-shadow 0.4s ease-out", 
          }}
        />
</>
)
}