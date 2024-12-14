"use client";
import { lhsItems } from "@/constants";
// import { HomeIcon } from "@/shared/icons";

export default function LeftSideBar() {
  function handleMenuClick(path) {
    console.log("###LeftSideClick", path);
  }
  return (
    <div className="flex flex-col w-14 h-full items-center justify-center ml-5 ">
      <div className="flex flex-col w-full h-[400px] gap-10 items-center justify-center rounded-[100px] bg-[#ccccff]">
        {lhsItems.map(({ label, icon, path }) => (
          <button
            key={label}
            onClick={() => {
              handleMenuClick(path);
            }}
          >
            <img src={icon} alt={label} width={30} />
            {/* <HomeIcon /> */}
          </button>
        ))}
      </div>
    </div>
  );
}
