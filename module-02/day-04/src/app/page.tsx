"use client";
import { useState, useRef } from "react";
import Image from "next/image";

interface ITask {
  isChecked: boolean;
  desc: string;
}

export default function Home() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const submitTask = () => {
    if (inputRef.current?.value) {
      setTasks([...tasks, { isChecked: false, desc: inputRef.current.value }]);
      inputRef.current.value = "";
    }
  };

  const onChecked = (t: ITask) => {
    const newTask = tasks.map((task) =>
      task.desc === t.desc ? { ...task, isChecked: !task.isChecked } : task
    );

    setTasks(newTask);
  };

  const onDelete = (t: ITask) => {
    const newTask = tasks.filter((task) => task.desc !== t.desc);

    setTasks(newTask);
  };

  return (
    <div className="flex  justify-center mt-[70px] ">
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
            className="focus:outline-0 text-[#393A4B] text-[18px] w-[350px]"
            type="text"
            placeholder="Currently typing"
            ref={inputRef}
          />
          <button onClick={submitTask}>Submit</button>
        </div>
        <div className="flex flex-col text-[18px] rounded-[5px] mb-[49px] bg-white text-[#494C6B] shadow-[0px_35px_50px_-15px_rgba(194,195,214,0.5)]">
          {tasks.length > 0 &&
            tasks.map((task, idx) => (
              <div
                key={idx}
                className="flex gap-[24px] border-b border-[#E3E4F1] align-middle items-center h-[64px]"
              >
                <button
                  onClick={() => onChecked(task)}
                  className={`ml-[20px] w-[24px] h-[24px] rounded-full flex items-center justify-center transition-colors duration-300 ${
                    task.isChecked
                      ? "bg-gradient-to-br from-sky-400 to-purple-500"
                      : "border-2 border-gray-300 bg-white"
                  }`}
                >
                  {task.isChecked && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={3}
                      stroke="white"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </button>
                <span
                  className={`w-[350px] ${
                    task.isChecked ? "line-through text-[#D1D2DA]" : ""
                  }`}
                >
                  {task.desc}
                </span>
                <button onClick={() => onDelete(task)}>Delete</button>
              </div>
            ))}

          {/* <div className="flex gap-[24px] border-b border-[#E3E4F1] align-middle items-center h-[64px]">
            <button className="ml-[20px] w-[24px] h-[24px] rounded-full flex items-center justify-center transition-colors duration-300 border-2 border-gray-300 bg-white"></button>
            <span>Jog around the park 3x</span>
          </div>
          <div className="flex gap-[24px] border-b border-[#E3E4F1] align-middle items-center h-[64px]">
            <button className="ml-[20px] w-[24px] h-[24px] rounded-full flex items-center justify-center transition-colors duration-300 border-2 border-gray-300 bg-white"></button>
            <span>10 minutes meditation</span>
          </div>
          <div className="flex gap-[24px] border-b border-[#E3E4F1] align-middle items-center h-[64px]">
            <button className="ml-[20px] w-[24px] h-[24px] rounded-full flex items-center justify-center transition-colors duration-300 border-2 border-gray-300 bg-white"></button>
            <span>Read for 1 hour</span>
          </div>
          <div className="flex gap-[24px] border-b border-[#E3E4F1] align-middle items-center h-[64px]">
            <button className="ml-[20px] w-[24px] h-[24px] rounded-full flex items-center justify-center transition-colors duration-300 border-2 border-gray-300 bg-white"></button>
            <span>Pick up groceries</span>
          </div>
          <div className="flex gap-[24px] border-b border-[#E3E4F1] align-middle items-center h-[64px]">
            <button className="ml-[20px] w-[24px] h-[24px] rounded-full flex items-center justify-center transition-colors duration-300 border-2 border-gray-300 bg-white"></button>
            <span>Complete Todo App</span>
          </div> */}
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
