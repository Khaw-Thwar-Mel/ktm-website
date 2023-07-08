import { Box, Typography } from "@mui/material";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import HelpingHand from "../components/HelpingHand";
import HomePageHero from "../components/HomePageHero";
import Mission from "../components/Mission";
import Navbar from "../components/Navbar";
import OurMotto from "../components/OurMotto";
import OurValues from "../components/OurValues";

export default function Home() {
  return (
    <Box>
      <Navbar />

      <HomePageHero />
      <p className="text-green-500">hehe</p>
      <AboutUs />
      <Mission />
      <HelpingHand />
      <OurValues />
      <OurMotto />
      <Footer />
    </Box>
  );
}
