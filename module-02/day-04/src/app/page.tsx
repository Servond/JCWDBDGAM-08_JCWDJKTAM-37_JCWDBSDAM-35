"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";

interface ITask {
  isChecked: boolean;
  desc: string;
  createdAt: Date;
  isEdit: boolean;
}
export default function Home() {
  const [task, setTask] = useState<ITask[]>([]);
  const [filter, setFilter] = useState<string>("all");
  const [inputFilter, setInputFilter] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<"desc" | "asc">("desc");
  const inputRef = useRef<HTMLInputElement | null>(null);

  const submitTask = () => {
    if (inputRef.current?.value) {
      const dup = task.find(
        (f) => f.desc.toLowerCase() === inputRef.current?.value.toLowerCase()
      );

      if (!dup) {
        setTask([
          ...task,
          {
            isChecked: false,
            desc: inputRef.current.value,
            createdAt: new Date(),
            isEdit: false,
          },
        ]);
        inputRef.current.value = "";
      } else {
        alert("Duplicate task");
      }
    }
  };

  const filteredTasks = () => {
    const newTask = task.filter((f) => {
      if (filter === "active") return !f.isChecked;
      if (filter === "complete") return f.isChecked;

      if (inputFilter) {
        if (f.desc.toLowerCase().includes(inputFilter.toLowerCase())) {
          return true;
        } else {
          return false;
        }
      }

      return true;
    });

    return newTask.sort((a, b) =>
      sortOrder === "desc"
        ? b.createdAt.getTime() - a.createdAt.getTime()
        : a.createdAt.getTime() - b.createdAt.getTime()
    );
  };

  const onChecked = (t: ITask) => {
    setTask((prev) =>
      prev.map((f) =>
        f.desc === t.desc ? { ...f, isChecked: !f.isChecked } : f
      )
    );
  };

  const onEdit = (t: ITask) => {
    setTask((prev) =>
      prev.map((f) => (f.desc === t.desc ? { ...f, isEdit: !f.isEdit } : f))
    );
  };

  const onSaveEdit = (t: ITask, desc: string) => {
    setTask((prev) =>
      prev.map((f) =>
        f.desc === t.desc
          ? { ...f, isEdit: !f.isEdit, desc: desc.toLowerCase() }
          : f
      )
    );
  };

  const onDelete = (t: ITask) => {
    setTask((prev) => prev.filter((f) => f.desc !== t.desc));
  };

  const clearCompleted = () => {
    setTask((prev) => prev.filter((t) => !t.isChecked));
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
            className="focus:outline-0 text-[#393A4B] text-[18px] w-[450px]"
            type="text"
            placeholder="Currently typing"
            ref={inputRef}
          />
          <button onClick={submitTask}>Submit</button>
        </div>
        <div className="flex flex-col text-[18px] rounded-[5px] mb-[49px] bg-white text-[#494C6B] shadow-[0px_35px_50px_-15px_rgba(194,195,214,0.5)]">
          <div className="p-5 border-b-2 border-[#E3E4F1] ">
            <h2>Filter :</h2>
            <div className="flex gap-[50px] ">
              <input
                className="border border-gray-400 p-2 rounded-sm w-[300px]"
                type="text"
                onChange={(e) => setInputFilter(e.target.value)}
              />
              <select
                className="border border-gray-400 p-2 rounded-sm w-[150px]"
                onChange={(e) => setSortOrder(e.target.value as "desc" | "asc")}
                defaultValue={"desc"}
              >
                <option value={"desc"}>Desc</option>
                <option value={"asc"}>Asc</option>
              </select>
            </div>
          </div>
          {filteredTasks().length > 0 &&
            filteredTasks().map((t, idx) => (
              <div
                key={idx}
                className="group flex gap-[24px] border-b border-[#E3E4F1] align-middle items-center h-[64px]"
              >
                <button
                  className={`ml-[20px] w-[24px] h-[24px] rounded-full flex items-center justify-center transition-colors duration-300 ${
                    t.isChecked
                      ? "bg-gradient-to-br from-sky-400 to-purple-500"
                      : "border-2 border-gray-300 bg-white"
                  }`}
                  onClick={() => onChecked(t)}
                >
                  {t.isChecked && (
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
                {t.isEdit ? (
                  <input
                    className="focus:outline-0 w-[400px] p-2 border border-gray-400"
                    type="text"
                    defaultValue={t.desc}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        onSaveEdit(t, e.currentTarget.value);
                      }
                    }}
                  />
                ) : (
                  <span
                    className={`w-[400px] ${
                      t.isChecked ? "line-through text-[#D1D2DA]" : ""
                    }`}
                    onDoubleClick={() => onEdit(t)}
                  >
                    {t.desc}
                  </span>
                )}

                <button
                  onClick={() => onDelete(t)}
                  className="hidden group-hover:block text-gray-400 hover:text-red-500 transition-colors duration-200 mr-[20px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            ))}
          <div className="flex gap-[24px] text-[14px] justify-between h-[64px] p-[24px]">
            <span className="text-[#9495A5]">
              {task.filter((f) => !f.isChecked).length} items left
            </span>
            <div className="flex gap-[19px]">
              <span
                onClick={() => setFilter("all")}
                className={`hover:cursor-pointer ${
                  filter === "all"
                    ? "text-[#3A7CFD]"
                    : "text-[#9495A5] hover:text-[#494C6B]"
                }`}
              >
                All
              </span>
              <span
                onClick={() => setFilter("active")}
                className={`hover:cursor-pointer ${
                  filter === "active"
                    ? "text-[#3A7CFD]"
                    : "text-[#9495A5] hover:text-[#494C6B]"
                }`}
              >
                Active
              </span>
              <span
                onClick={() => setFilter("complete")}
                className={`hover:cursor-pointer ${
                  filter === "complete"
                    ? "text-[#3A7CFD]"
                    : "text-[#9495A5] hover:text-[#494C6B]"
                }`}
              >
                Complete
              </span>
            </div>
            <span
              onClick={clearCompleted}
              className="text-[#9495A5] hover:cursor-pointer"
            >
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
