import { Box } from "@mui/material";
import OurSocialCommitment from "../components/Home/OurSocialCommitment";
import OurMission from "../components/Home/OurMission";
import OurStory from "../components/Home/OurStory";
import OurVision from "../components/Home/OurVision";
import OurValues from "../components/Home/OurValues";

export default function HomePage() {
  return (
    <Box
      width={"100%"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <OurStory />
      <OurVision />
      <OurMission />
      <OurSocialCommitment />
      <OurValues />
    </Box>
  );
}
