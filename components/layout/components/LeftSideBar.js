"use client";
import { lhsItems } from "@/constants";

export default function LeftSideBar() {
  function handleMenuClick(path) {
    console.log("###LeftSideClick", path);
  }
  return (
    <div className="w-14 flex flex-col h-[300px] gap-16 items-center justify-center rounded-[100px] bg-white/10 backdrop-blur-sm shadow-2xl">
      {lhsItems.map(({ label, Icon, path }) => (
        <button
          key={label}
          onClick={() => {
            handleMenuClick(path);
          }}
        >
          <Icon />
        </button>
      ))}
    </div>
  );
}
