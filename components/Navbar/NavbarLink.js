import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useState } from "react";

const NavbarLink = ({ href, text }) => {
  const [isHovered, setHovered] = useState(false);
  const router = useRouter();
  const isLinkActive = router.pathname === href;

  return (
    <div className="container w-20 h-7 flex justify-center items-center">
      <Link href={href} className="no-underline text-black">
        <span
          className={`relative flex-none ${
            isLinkActive ? "font-extrabold" : "font-medium"
          } hover:font-extrabold`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {text}
          <motion.span
            className="absolute bottom-0 left-0 w-full h-0.5 bg-black"
            initial={isLinkActive ? true : false}
            animate={
              isLinkActive ? { scaleX: 1 } : { scaleX: isHovered ? 1 : 0 }
            }
          ></motion.span>
        </span>
      </Link>
    </div>
  );
};

export default NavbarLink;
