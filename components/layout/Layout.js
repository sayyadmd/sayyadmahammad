import { TopBar } from "./index";
export default function Layout({ children }) {
  return (
    <div className=" w-screen h-screen sm:h-dvh bg-slate-100 overflow-hidden">
      <TopBar />
      {children}
    </div>
  );
}
