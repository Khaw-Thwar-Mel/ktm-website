import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const NavbarLink = ({ href, text }) => {
  const [isHovered, setHovered] = useState(false);
  return (
    <Link href={href} className="no-underline text-black">
      <motion.p
        whileHover={{ fontWeight: "800" }}
        whileFocus={{ fontWeight: "800" }}
        className="relative font-medium flex-none"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {text}
        <motion.span
          className="absolute bottom-0 left-0 w-full h-0.5 bg-black"
          initial={false}
          animate={{ scaleX: isHovered ? 1 : 0 }}
        ></motion.span>
      </motion.p>
    </Link>
  );
};
export default NavbarLink;
