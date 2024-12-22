import { socialAssets } from "@/constants";
export default function TopBar() {
  return (
    <div className="w-full h-10 mt-10 flex items-center justify-between  px-[10%]   ">
      {/* <h1 className="font-['lobster'] text-3xl ">SAYYAD MAHAMMAD</h1> */}
      <h1 className="font-['lobster'] text-3xl ">SAYYAD MAHAMMAD</h1>
      <div className="flex items-center gap-3 ">
        {socialAssets.map(({ name, link, icon }) => (
          <a key={name} href={link}>
            <img src={icon} alt={name} width="20" />
          </a>
        ))}
      </div>
    </div>
  );
}
