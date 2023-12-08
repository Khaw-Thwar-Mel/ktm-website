import { Typography, Box } from "@mui/material";
import Image from "next/image";
import ExplanationTip from "./ExplanationTip";

const ValueIcon = ({ icon, text, tooltip }) => {
  return (
    <ExplanationTip title={tooltip}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          cursor: "help",
        }}
      >
        <Box mr={"40px"}>
          <Image src={icon} alt={text} width={50} height={48} />
        </Box>
        <Typography fontSize={"28px"} fontWeight={700} color="white">
          {text}
        </Typography>
      </Box>
    </ExplanationTip>
  );
};

export default ValueIcon;
