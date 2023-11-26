import { Box, Grid, Typography } from "@mui/material";
import { colors } from "../../data/colors";
import { motion, useInView } from "framer-motion";
import { aboutUsContents, fontSizes } from "../../data/aboutUs";
import { useRef } from "react";

export default function OurStory() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.35, once: true });

  return (
    <Box
      ref={sectionRef}
      sx={{
        width: "100%",
        py: 15,
      }}
    >
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
            animate={{ x: isInView ? 0 : -100 }}
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
            animate={{
              x: isInView ? 0 : 100,
              lineHeight: isInView ? 1.5 : 4,
            }}
            transition={{ duration: 0.8 }}
            sx={{
              fontSize: fontSizes.body,
              fontWeight: 700,
              textAlign: { lg: "start", md: "center", xs: "center" },
            }}
          >
            {aboutUsContents.ourStory}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
