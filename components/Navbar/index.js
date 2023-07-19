import Image from "next/image";
import { Link } from "@mui/material";
import NavbarLink from "./navbarLink";

/* eslint-disable react/display-name */
const Navbar = () => {
  return (
    <nav className="fixed bg-[#FFFFFFD9] p-4 h-28 w-full flex">
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
          <NavbarLink href={"/"} text={"Home"} />
          <NavbarLink href={"/aboutus"} text={"About Us"} />
          <NavbarLink href={"/blogs"} text={"Blogs"} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
