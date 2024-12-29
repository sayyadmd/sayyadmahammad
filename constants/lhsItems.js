import { HomeIcon, UserIcon, MailIcon } from "@/shared/icons";

export const lhsItems = [
  {
    path: "",
    label: "Home",
    Icon: () => <HomeIcon />,
  },
  {
    path: "icons/github.png",
    label: "about",
    Icon: () => <UserIcon />,
  },
  {
    path: "icons/github.png",
    label: "Contact",
    Icon: () => <MailIcon />,
  },
  // {
  //   path: "icons/github.png",
  //   label: "Contact",
  //   Icon: () => <HomeIcon />,
  // },
];
