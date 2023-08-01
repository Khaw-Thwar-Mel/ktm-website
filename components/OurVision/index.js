import { Box, Typography } from "@mui/material";
import { aboutusContents } from "../../data/aboutusContents";

const OurVision = () => {
  return (
    <Box
      width={"100%"}
      bgcolor={"black"}
      color={"white"}
      display={"flex"}
      flexDirection={"row"}
      alignItems={"flex-start"}
      justifyContent={"space-around"}
      py={"100px"}
    >
      <Box>
        <Typography fontSize={"56px"} fontWeight={700}>
          Our Vision
        </Typography>
      </Box>
      <Box width={"700px"}>
        <Typography fontSize={"32px"} fontWeight={700}>
          {aboutusContents.ourVision}
        </Typography>
      </Box>
    </Box>
  );
};

export default OurVision;
