import { Box, Typography } from "@mui/material";
import { homepageContent } from "../../data/homepage";
import Image from "next/image";
import aboutUsImage from "../../public/assets/aboutus.png";

export default function AboutUs() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 5,
        py: 5,
        px: 10,
      }}
    >
      <Image quality={100} priority={true} src={aboutUsImage} alt="About Us" />
      <Typography
        sx={{
          textAlign: "center",
          fontWeight: 600,
          fontSize: "24px",
          lineHeight: 2.5,
        }}
      >
        {homepageContent.aboutUs}
      </Typography>
    </Box>
  );
}
