"use client";
import { lhsItems } from "@/constants";

export default function LeftSideBar() {
  return (
    <div className="flex flex-col w-14 h-full items-center justify-center ml-5 ">
      <div className="flex flex-col w-full h-[400px] gap-10 items-center justify-center rounded-[100px] bg-[#ccccff]">
        {lhsItems.map(({ label, icon, path }) => (
          <button onClick={() => {}}>
            <img src={icon} alt={label} width={30} />
          </button>
        ))}
      </div>
    </div>
  );
}
