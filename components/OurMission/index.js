import { Box, Grid, Typography } from "@mui/material";
import { colors } from "../../data/colors";
import { aboutUsContents, fontSizes } from "../../data/aboutUs";

const OurMission = () => {
  return (
    <Box
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
            sx={{
              color: colors.yellow,
              fontSize: fontSizes.heading,
              fontWeight: 700,
              textAlign: { lg: "start", md: "center", xs: "center" },
            }}
          >
            Our Mission
          </Typography>
        </Grid>
        <Grid item lg={5} md={5} xs={5}>
          <Typography
            sx={{
              fontSize: fontSizes.body,
              fontWeight: 700,
              textAlign: { lg: "start", md: "center", xs: "center" },
            }}
          >
            {aboutUsContents.ourMission}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default OurMission;
