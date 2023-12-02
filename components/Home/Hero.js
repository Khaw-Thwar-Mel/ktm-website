import { Box, Typography, Stack } from "@mui/material";
import Image from "next/image";
import ktmCover from "../../public/assets/KTM cover.jpg";
import { homepageContent } from "../../data/homepage";

export default function Hero() {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        flexDirection: "column",
      }}
    >
      <Image
        quality={100}
        priority={true}
        src={ktmCover}
        alt="KTM Cover"
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
        }}
      />
      <Stack direction={"column"} gap={4} px={10} py={5}>
        <Typography
          sx={{
            textAlign: "center",
            fontWeight: 700,
            fontSize: "32px",
          }}
        >
          {homepageContent.heroTagLine.header}
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            fontWeight: 600,
            fontSize: "24px",
            lineHeight: 2.5,
          }}
        >
          {homepageContent.heroTagLine.body}
        </Typography>
      </Stack>
    </Box>
  );
}
