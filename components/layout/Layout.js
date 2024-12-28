import { TopBar, LeftSideBar } from "./index";
export default function Layout({ children }) {
  return (
    <div className=" w-screen h-screen sm:h-dvh bg-slate-100 overflow-hidden">
      <div className="w-full h-24 sticky top-0 z-100 flex items-center justify-center shadow-md ">
        <TopBar />
      </div>
      <div className="relative flex w-full h-full">
        <div className="t-0 l-0 w-20 h-full flex items-center justify-center ">
          <LeftSideBar />
        </div>
        <div className="w-full h-full">{children}</div>
      </div>
    </div>
  );
}
