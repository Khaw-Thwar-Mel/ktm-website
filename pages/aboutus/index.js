import { Box } from "@mui/material";
import AboutUs from "../../components/AboutUs/AboutUs.js";

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
    </Box>
  );
}
