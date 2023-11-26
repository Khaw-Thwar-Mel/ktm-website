import Image from "next/image";
import { Link } from "@mui/material";
import NavbarLink from "./navbarLink";
import { navigationLinks } from "../../data";

/* eslint-disable react/display-name */
const Navbar = () => {
  return (
    <nav className="fixed bg-[#FFFFFFD9] p-4 h-[10vh] w-full flex">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <Image
              alt="KhawThwarMel"
              src="/assets/KhawThwarMelWordmark.svg"
              width={130}
              height={16.92}
            />
          </Link>
        </div>
        <div className="flex justify-between basis-1/4">
          {navigationLinks.map((item, index) => (
            <NavbarLink key={index} href={item.link} text={item.text} />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
