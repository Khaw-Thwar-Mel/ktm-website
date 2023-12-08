import { Box } from "@mui/material";
import OurSocialCommitment from "../components/Home/OurSocialCommitment";
// import OurMission from "../components/Home/OurMission";
// import OurVision from "../components/Home/OurVision";
import Hero from "../components/Home/Hero";
import AboutUs from "../components/Home/AboutUs";
import OurValues from "../components/Home/OurValues";
import Missionvision from "../components/Home/Missionvision";

export default function HomePage() {
  return (
    <Box
      width={"100%"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Hero />
      <AboutUs />
      {/* <OurStory /> */}
      <Missionvision />
      {/* <OurVision />
      <OurMission /> */}
      <OurValues />
      <OurSocialCommitment />
    </Box>
  );
}
