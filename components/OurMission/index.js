import { Box, Typography } from "@mui/material";
import { contents as aboutusContents } from "../../data/aboutUs";
import { colors } from "../../data/colors";

const OurMission = () => {
  return (
    <Box
      width={"100%"}
      display={"flex"}
      flexDirection={"row"}
      alignItems={"flex-start"}
      justifyContent={"space-around"}
      py={"100px"}
    >
      <Box>
        <Typography fontSize={"56px"} fontWeight={700} color={colors.yellow}>
          Our Mission
        </Typography>
      </Box>
      <Box width={"700px"}>
        <Typography fontSize={"32px"} fontWeight={700}>
          {aboutusContents.ourMission}
        </Typography>
      </Box>
    </Box>
  );
};

export default OurMission;
