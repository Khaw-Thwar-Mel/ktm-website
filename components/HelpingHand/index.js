import { Box, Typography } from "@mui/material";
import { homepageContent } from "../../data/homepage";
import Carousel from "../Carousel";

const HelpingHand = () => {
  return (
    <Box
      maxWidth={{ xl: "80%", lg: "1000px", md: "80%", sm: "90%" }}
      py={{ xl: 12, lg: 8, md: 8, sm: 8, xs: 6 }}
      margin="auto"
    >
      <Typography
        px={{ xl: 20, lg: 12, md: 8, sm: 6, xs: 2 }}
        py={{ xl: 6, lg: 6, md: 4, xs: 3 }}
        fontSize={{ xl: 34, lg: 28, md: 20, sm: 18, xs: 14 }}
        fontWeight={500}
        textAlign="center"
      >
        {homepageContent?.helpingHand}
      </Typography>

      <Carousel />
    </Box>
  );
};

export default HelpingHand;
