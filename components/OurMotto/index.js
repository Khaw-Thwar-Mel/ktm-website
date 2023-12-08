import { Box, Typography } from "@mui/material";
import { colors } from "../../data/colors";
import { homepageContent } from "../../data/homepage";

const OurMotto = () => {
  return (
    <Box
      pt={{ xl: 10, lg: 10, md: 8, sm: 6, xs: 3 }}
      width="100%"
      px={{ md: 0, xs: 2 }}
    >
      <Box
        margin="auto"
        maxWidth={{ xl: "1200px", lg: "1000px", md: "750px", sm: "85%" }}
        bgcolor={colors.yellow}
        border="2px solid #000000"
        borderRadius="20px"
        boxShadow={{
          md: "10px 10px 0px 5px #E1AC00",
          sm: "8px 8px 0px 5px #E1AC00",
          xs: "4px 4px 0px 5px #E1AC00",
        }}
      >
        <Typography
          px={{ xl: 28, lg: 14, md: 10, sm: 8, xs: 4 }}
          py={{ xl: 14, lg: 10, md: 8, sm: 6, xs: 4 }}
          fontSize={{ xl: 28, lg: 24, md: 20, sm: 18, xs: 16 }}
          fontWeight={500}
          textAlign="center"
        >
          {homepageContent?.motto}
        </Typography>
      </Box>
    </Box>
  );
};

export default OurMotto;
