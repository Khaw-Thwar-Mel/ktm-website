import { Box, Typography } from "@mui/material";
import { aboutusContents } from "../../data/aboutusContents";
import { colors } from "../../data/colors";

const OurStory = () => {
  return (
    <Box
      width={"100%"}
      display={"flex"}
      flexDirection={"row"}
      alignItems={"flex-start"}
      justifyContent={"space-around"}
      my={"100px"}
    >
      <Box>
        <Typography fontSize={"56px"} fontWeight={700} color={colors.yellow}>
          Our Story
        </Typography>
      </Box>
      <Box width={"700px"}>
        <Typography fontSize={"32px"} fontWeight={700}>
          {aboutusContents.ourStory}
        </Typography>
      </Box>
    </Box>
  );
};

export default OurStory;
