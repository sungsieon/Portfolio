



export default function LandingPage(){

   return(
    <div className="relative w-full h-screen bg-cover" style={{backgroundImage: "url('/img/우주.png')"}}>

    <div>
    <span className="absolute left-[5%] top-[5%] text-[50px]"><span className="mr-[25px] text-[#9EDE52]">01</span>About me</span>
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

    <div className="absolute top-[12%] right-[8%]">
    <img className="rotate-[10deg] w-[40rem] h-[40rem] object-contain" src="/img/사진 넣을 자리.png"/>
    </div>
    </div>
   )

}