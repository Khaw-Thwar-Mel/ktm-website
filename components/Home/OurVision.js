import { Box, Grid, Typography } from "@mui/material";
import { motion, useInView } from "framer-motion";
import { aboutUsContents, fontSizes } from "../../data/aboutUs";
import { useRef } from "react";

export default function OurVision() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 1 });

  return (
    <Box
      ref={sectionRef}
      sx={{
        width: "100%",
        bgcolor: "black",
        color: "white",
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
            sx={{
              fontSize: fontSizes.heading,
              fontWeight: 700,
              textAlign: { lg: "start", md: "center", xs: "center" },
            }}
          >
            Our Vision
          </Typography>
        </Grid>
        <Grid item lg={5} md={5} xs={5}>
          <Typography
            component={motion.p}
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ duration: 2 }}
            sx={{
              fontSize: fontSizes.body,
              fontWeight: 700,
              textAlign: { lg: "start", md: "center", xs: "center" },
            }}
          >
            {aboutUsContents.ourVision}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
