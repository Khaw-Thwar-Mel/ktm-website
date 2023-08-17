import { Typography, Box } from "@mui/material";
import Image from "next/image";

const ValueIcon = ({ icon, text }) => {
  return (
    <Box
      display={"flex"}
      flexDirection={"row"}
      alignItems={"center"}
      justifyContent={"flex-start"}
    >
      <Box mr={"40px"}>
        <Image src={icon} alt={text} width={50} height={48} />
      </Box>
      <Typography fontSize={"28px"} fontWeight={700} color="white">
        {text}
      </Typography>
    </Box>
  );
};

export default ValueIcon;
