"use client";
import { lhsItems } from "@/constants";
import { HomeIcon, UserIcon } from "@/shared/icons";

export default function LeftSideBar() {
  function handleMenuClick(path) {
    console.log("###LeftSideClick", path);
  }
  return (
    <div className="w-14 flex flex-col h-[400px] gap-10 items-center justify-center rounded-[100px] bg-white/10 backdrop-blur-sm shadow-2xl">
      {lhsItems.map(({ label, icon, path }) => (
        <button
          key={label}
          onClick={() => {
            handleMenuClick(path);
          }}
        >
          {/* <img src={icon} alt={label} width={30} /> */}
          <UserIcon />
        </button>
      ))}
    </div>
  );
}
