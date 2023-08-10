import { Box, Grid, Typography } from "@mui/material";
import { colors } from "../../data/colors";
import { motion } from "framer-motion";
import { contents, fontSizes } from "../../data/aboutUs";

const OurStory = () => {
  return (
    <Box py={15}>
      <Grid
        container
        columns={{ lg: 12, md: 6, xs: 6 }}
        rowSpacing={5}
        alignItems={{ lg: "flex-start", md: "center" }}
        justifyContent={"center"}
      >
        <Grid item lg={5} md={5} xs={5}>
          <Typography
            component={motion.p}
            initial={{ x: -100 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            sx={{
              fontSize: fontSizes.heading,
              fontWeight: 700,
              color: colors.yellow,
              textAlign: { lg: "start", md: "center", xs: "center" },
            }}
          >
            Our Story
          </Typography>
        </Grid>
        <Grid item lg={5} md={5} xs={5}>
          <Typography
            component={motion.p}
            initial={{ x: 100, lineHeight: 4 }}
            whileInView={{
              x: 0,
              lineHeight: 1.5,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            sx={{
              py: 0,
              fontSize: fontSizes.body,
              fontWeight: 700,
              textAlign: { lg: "start", md: "center", xs: "center" },
            }}
          >
            {contents.ourStory}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default OurStory;
