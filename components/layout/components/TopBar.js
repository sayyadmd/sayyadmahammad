import { socialAssets } from "@/constants";

export default function TopBar() {
  return (
    <div className="w-full h-10 my-auto flex items-center justify-between  px-[10%]">
      {/* <h1 className="font-['lobster'] text-3xl ">SAYYAD MAHAMMAD</h1> */}
      <h1 className="font-mono text-3xl ">SAYYAD MAHAMMAD</h1>
      <div className="flex items-center gap-3 ">
        {socialAssets.map(({ name, link, Icon }) => (
          <a key={name} href={link}>
            <Icon />
          </a>
        ))}
      </div>
    </div>
  );
}
