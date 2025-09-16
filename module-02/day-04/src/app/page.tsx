import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center mt-[70px] ">
      <Image
        className="absolute -z-10 max-h-[300px]"
        src={"/bitmap.png"}
        alt="img"
        fill
      />
      <div className="flex flex-col z-0 font-josefin w-[540px] ">
        <div className="flex justify-between items-center mb-[40px]">
          <span className="text-white font-bold text-[40px] leading-[100%] tracking-[15px]">
            TODO
          </span>
          <div className="relative w-[25.11px] h-[26px]">
            <Image
              className="absolute"
              src={"/moon-shape.png"}
              alt="moon"
              fill
            />
          </div>
        </div>
        <div className="flex items-center bg-white h-[64px] rounded-[5px] p-[20px] gap-[20px] mb-[24px]">
          <div className="w-[24px] h-[24px] rounded-full border border-[#E3E4F1]"></div>
          <input
            className="focus:outline-0 text-[#393A4B] text-[18px] "
            type="text"
            placeholder="Currently typing"
          />
        </div>
        <div className="flex flex-col text-[18px] rounded-[5px] mb-[49px] bg-white text-[#494C6B] shadow-[0px_35px_50px_-15px_rgba(194,195,214,0.5)]">
          <div className="flex gap-[24px] border-b border-[#E3E4F1] align-middle items-center h-[64px]">
            <input className="ml-[20px]" type="checkbox" />
            <span className="line-through text-[#D1D2DA]">
              Complete Online JavaScript course
            </span>
          </div>
          <div className="flex gap-[24px] border-b border-[#E3E4F1] align-middle items-center h-[64px]">
            <input className="ml-[20px]" type="checkbox" />
            <span>Jog around the park 3x</span>
          </div>
          <div className="flex gap-[24px] border-b border-[#E3E4F1] align-middle items-center h-[64px]">
            <input className="ml-[20px]" type="checkbox" />
            <span>10 minutes meditation</span>
          </div>
          <div className="flex gap-[24px] border-b border-[#E3E4F1] align-middle items-center h-[64px]">
            <input className="ml-[20px]" type="checkbox" />
            <span>Read for 1 hour</span>
          </div>
          <div className="flex gap-[24px] border-b border-[#E3E4F1] align-middle items-center h-[64px]">
            <input className="ml-[20px]" type="checkbox" />
            <span>Pick up groceries</span>
          </div>
          <div className="flex gap-[24px] border-b border-[#E3E4F1] align-middle items-center h-[64px]">
            <input className="ml-[20px]" type="checkbox" />
            <span>Complete Todo App</span>
          </div>
          <div className="flex gap-[24px] text-[14px] justify-between h-[64px] p-[24px]">
            <span className="text-[#9495A5]">5 items left</span>
            <div className="flex gap-[19px]">
              <span className="text-[#3A7CFD] hover:cursor-pointer">All</span>
              <span className="text-[#9495A5] hover:text-[#494C6B] hover:cursor-pointer">
                Active
              </span>
              <span className="text-[#9495A5] hover:text-[#494C6B] hover:cursor-pointer">
                Complete
              </span>
            </div>
            <span className="text-[#9495A5] hover:cursor-pointer">
              Clear Completed
            </span>
          </div>
        </div>
        <span className="text-[#9495A5] text-center">
          Drag and drop to reorder list
        </span>
      </div>
    </div>
  );
}
