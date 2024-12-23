import { TopBar, LeftSideBar } from "./index";
export default function Layout({ children }) {
  return (
    <div className=" w-screen h-screen sm:h-dvh bg-slate-100 overflow-hidden">
      <div className="w-full h-24 bg-[#ff5733] ">
        <TopBar />
      </div>
      <div className="flex w-full h-full">
        <div className="w-20 bg-[#d1cf27] ">
          <LeftSideBar />
        </div>
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
}
