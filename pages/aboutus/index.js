
import { Box } from "@mui/material";
import OurValues from "../../components/OurValues";
import OurStory from "../../components/OurStory";
import AboutUs from "../../components/AboutUs";
import OurVision from "../../components/OurVision";
import OurMission from "../../components/OurMission/index.js";
import Commitment from "../../components/AboutUs/Commitment";

export default function AboutUsPage() {
  return (
    <Box
      width={"100%"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <AboutUs />
      <OurStory />
      <OurVision />
      <OurMission />
      <Commitment/>
      <OurValues />
    </Box>
  );
}

