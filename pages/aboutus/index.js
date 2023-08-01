import { Box } from "@mui/material";
import OurValues from "../../components/OurValues";
import OurStory from "../../components/OurStory";
import AboutUs from "../../components/AboutUs";

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
      <OurValues />
    </Box>
  );
}
