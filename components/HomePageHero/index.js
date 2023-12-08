import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { homepageContent } from "../../data/homepage";

const HomePageHero = () => {
  return (
    <Box
      margin="auto"
      maxWidth={{ xl: "90%", lg: "1300px", xs: "100%" }}
      paddingTop={{ md: "80px", xs: "125px" }}
      height={{ md: "100vh", xs: "fit-content" }}
      display="flex"
      alignItems="center"
      gap={{ xl: 12, lg: 6, md: 2, sm: 2, xs: "8px" }}
      px={{ lg: 6, md: 4, sm: 2, xs: "10px" }}
    >
      <Box
        my={{ md: 0, xs: 4 }}
        position="relative"
        height={{
          // xl: "600px",
          lg: "580px",
          md: "500px",
          sm: "330px",
          xs: "175px",
        }}
        width={{
          // xl: "525px",
          lg: "400px",
          md: "375px",
          sm: "250px",
          xs: "130px",
        }}
        minWidth={{
          xl: "525px",
          lg: "450px",
          md: "375px",
          sm: "250px",
          xs: "130px",
        }}
      >
        <Image
          alt="hero-homepage"
          src="/assets/hero-homepage.png"
          layout="fill"
        />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        gap={{ xl: 10, lg: 6, md: 4, sm: 2 }}
      >
        {/* <Typography
          fontSize={{
            xl: "50px",
            lg: "40px",
            md: "30px",
            sm: "24px",
            xs: "18px",
          }}
          fontWeight={800}
        >
          Khaw Thwar Mel
        </Typography> */}
        <Typography
          fontSize={{
            xl: "36px",
            lg: "32px",
            md: "28px",
            sm: "20px",
            xs: "14px",
          }}
          fontWeight={{ md: 800, xs: 600 }}
        >
          {homepageContent?.heroTagLine1}
        </Typography>
      </Box>
    </Box>
  );
};

export default HomePageHero;
