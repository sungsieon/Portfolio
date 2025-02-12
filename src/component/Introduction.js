import { useState, useEffect } from 'react';



export default function Introduction(){
    const [scrollTranslate,setScrollTranslate] = useState(false)

    return(
        <div
        className="relative w-full min-h-screen bg-cover"
        style={{
          backgroundImage: "url('/img/우주.png')",
          backgroundSize: "cover", // 배경이 꽉 차게 설정
          backgroundRepeat: "no-repeat", // 중복 방지
          backgroundAttachment: "fixed", // 배경을 고정
        }}
      >

        <div className="absolute left-[6%] top-[5%] max-[960px]:left-[11.5%]">
        <span className="text-[50px]"><span className="mr-[25px] text-[#9EDE52]">01</span>About me</span>
        </div>
        
        <div className="absolute left-[12%] top-[24%]">
        <span className="text-[25px]">끊임없이 성장하는 프론트-엔드 개발자,</span><br></br>
        <span className="leading-[1.2] ml-[5px] text-[70px]"><span className="text-[#9EDE52]">성시언</span>입니다.</span>
        </div>
    
        <div className="flex items-center absolute left-[12%] top-[44%]">
        <div className=" bg-[#9EDE52] rounded-3xl w-8 h-8"/>
        <div className=" bg-white ml-[8px] rounded-3xl w-[25px] h-[25px]"/> 
        </div>
    
        <div className="flex items-center absolute left-[11.5%] top-[50%]">
        <img className="w-14 h-14 object-contain " src="/img/rocket.png"/>
        <p className="ml-[10px] text-[42px]">끊임없는 도전과 학습</p>
        </div>
    
        <div className="absolute left-[15.2%] top-[59%]">
        <p className="regular-font text-[25px]">진로를 방황하던 중 웹 개발을 접하게 되었습니다.<br></br>
        생각한 대로 웹을 구현할 수 있다는 점에 큰 흥미를 느꼈습니다.<br></br><br></br>
        이 길에 확신을 느끼고 개인 프로젝트와 공부를 시작했습니다.<br></br>
        낯선 기술에도 두려워하지 않고 적극적으로 도전하고 있습니다.<br></br><br></br>
        현재는 Tailwind CSS와 TypeScript를 공부하며 최신 기술 트렌드에 빠르게 적응하고자 노력하고 있습니다.<br></br><br></br>
        경험과 열정을 바탕으로 끊임없이 발전하는 것이 제 목표입니다.
        </p>
        </div>

        <div className="flex items-center absolute left-[80.5%] top-[50%]">
        <img className="w-14 h-14 object-contain " src="/img/rocket.png"/>
        <p className="ml-[10px] text-[42px]">세심하고 효율적인 코드</p>
        </div>

        <div className="absolute left-[80.5%] top-[20%]">
          <p className="regular-font text-[25px]">
          웹 개발에 있어 무엇보다 중요한 점은 사용자의 편의라고 생각합니다. <br></br>
          저는 사용자의 편의를 위해 인터페이스 디자인과 디테일을 중요시 여기고 있습니다. <br></br><br></br>
          코드를 간결하고 효율적으로 작성하며 사용에 있어 불편한 요소를 최소화 하기 위해 항상 노력하고 있습니다.<br></br><br></br>
          노력을 바탕으로 언제나 사용자의 입장에서 생각하며 최적의 결과물을 만들어내고자 합니다.
          </p>
        </div>
    
        <div className="absolute top-[10%] right-[-55%] w-full  max-[960px]:hidden">
        <img className="rotate-[8deg] w-[35vw] h-[35vw] object-contain" src="/img/사진 넣을 자리.png"/>
        </div>
        </div>
    )

 }