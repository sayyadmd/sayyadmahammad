"use client";
import { summary } from "@/constants";
export default function Page() {
  return (
    <main className="w-full h-full p-10 ">
      <div className="h-full flex items-center justify-center ">
        <h1>{summary}</h1>
      </div>
    </main>
  );
}
