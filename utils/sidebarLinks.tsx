import { HiOutlineAtSymbol } from "react-icons/hi";
import { FaLinkedin } from "react-icons/fa";
import { VscGithubInverted } from "react-icons/vsc";

export interface SidebarLink {
  path: string;
  icon: React.ReactNode;
}

export const sidebarLinks: SidebarLink[] = [
  {
    path: "https://github.com/cinlu",
    icon: <VscGithubInverted />,
  },
  {
    path: "mailto:19cindyl@gmail.com",
    icon: <HiOutlineAtSymbol />,
  },
  {
    path: "https://www.linkedin.com/in/cinlu/",
    icon: <FaLinkedin />,
  },
];
