import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useState } from "react";
import { Box } from "@mui/material";
import { colors } from "../../data/colors";

export default function NavbarLink({ href, text }) {
  const [isHovered, setHovered] = useState(false);
  const router = useRouter();
  const isLinkActive = router.pathname === href;

  return (
    <Box
      // className="container w-20 h-7 flex justify-center items-center"
      sx={{}}
    >
      <Link
        href={href}
        style={{
          textDecoration: "none",
          color: colors.purple,
        }}
        // className="no-underline text-black"
      >
        <span
          //   className={`relative flex-none ${
          //     isLinkActive ? "font-extrabold" : "font-medium"
          //   } hover:font-extrabold`
          // }
          style={{ position: "relative" }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {text}
          <motion.span
            className="absolute bottom-0 left-0 w-full h-0.5 bg-black"
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "full",
              height: "2px",
              backgroundColor: colors.purple,
            }}
            initial={isLinkActive ? true : false}
            animate={
              isLinkActive ? { scaleX: 1 } : { scaleX: isHovered ? 1 : 0 }
            }
          ></motion.span>
        </span>
      </Link>
    </Box>
  );
}
