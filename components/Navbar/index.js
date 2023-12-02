import Image from "next/image";
import { Link } from "@mui/material";
import NavbarLink from "./NavbarLink";
import { navigationLinks } from "../../data";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { Box, Stack } from "@mui/material";

/* eslint-disable react/display-name */
export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(true);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(false);
    } else {
      latest < 150 && setHidden(true);
    }
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      style={{
        position: "fixed",
        backgroundColor: "#FFFFFFD9",
        height: "10vh",
        width: "100%",
        display: "flex",
      }}
    >
      <Box
        sx={{
          width: "100%",
          mx: "auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: 10,
        }}
      >
        <Link href="/">
          <Image
            alt="KhawThwarMel"
            src="/assets/KhawThwarMelWordmark.svg"
            width={130}
            height={16.92}
          />
        </Link>
        <Stack direction={"row"} gap={5}>
          {navigationLinks.map((item, index) => (
            <NavbarLink key={index} href={item.link} text={item.text} />
          ))}
        </Stack>
      </Box>
    </motion.nav>
  );
}
