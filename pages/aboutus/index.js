import { Box } from "@mui/material";
import AboutUs from "../../components/AboutUs";
import OurValues from "../../components/OurValues";

export default function AboutUsPage() {
  return (
    <Box
      width={"100%"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <OurValues />
    </Box>
  );
}
