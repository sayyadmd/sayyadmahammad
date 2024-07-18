import { redirect } from "next/navigation";

export default function HomePage() {
  function handleProjectClick() {
    redirect("/projects");
  }
  return (
    <div>
      <h1> This is my portfolio</h1>
    </div>
  );
}
