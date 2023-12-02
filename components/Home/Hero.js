import { Box } from "@mui/material";
import Image from "next/image";
import ktmCover from "../../public/assets/KTM cover.jpg";

export default function Hero() {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
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
    </Box>
  );
}
