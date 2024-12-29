"use client";
import { summary } from "@/constants";
export default function Page() {
  return (
    <main className="w-full h-full p-10 ">
      <div className="h-full flex flex-col ">
        <h1 className="font-mono w-[40%] ml-[5%] mt-[5%] ">{summary[0]}</h1>
        {/* <h1 className="font-mono w-[40%] ml-[60%] ">{summary[1]}</h1> */}
      </div>
    </main>
  );
}
