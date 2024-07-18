import { redirect } from "next/navigation";

export default function Home() {
  function handleProjectClick() {
    redirect("/projects");
  }
  return (
    <main className="flex items-center justify-between ">
      <h1>Hello guys , I am sayyad mahammad</h1>
      {/* <button onClick={handleProjectClick}>projects</button> */}
    </main>
  );
}
