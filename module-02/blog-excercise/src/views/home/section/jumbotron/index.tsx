import Image from "next/image";

export default function JumbotronSection() {
  return (
    <div className="relative w-full h-[587px]">
      <Image
        className="absolute top-0 left-0 -z-10"
        src="/static/home/jumbotron.png"
        alt="jumbotron"
        fill
      />

      <div className="flex flex-col items-center justify-center h-full relative z-10">
        <div className="text-center text-6xl font-bold tracking-wider leading-[1.3] text-white">
          LEAVE YOUR MARK ON ALL <br /> OVER THE WORLD
        </div>
        <button className="mt-6 p-3 w-34 border-none font-bold bg-gray-400 rounded-md opacity-80 hover:opacity-90">
          Read More
        </button>
      </div>
    </div>
  );
}
