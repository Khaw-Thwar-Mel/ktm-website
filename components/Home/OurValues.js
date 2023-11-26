import { Box, Grid, Typography } from "@mui/material";
import ValueIcon from "./ValueIcon";
import { aboutUsContents, fontSizes } from "../../data/aboutUs";

export default function OurValues() {
  return (
    <Box
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
            }}
          >
            Our Values
          </Typography>
          <Typography
            sx={{
              fontSize: fontSizes.body,
              fontWeight: 700,
              mt: "20px",
            }}
          >
            Our social enterprise&apos;s values include:
          </Typography>
        </Grid>
        <Grid item lg={5} md={5} xs={5}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: 3,
            }}
          >
            {aboutUsContents.ourValues.map((item, index) => (
              <ValueIcon
                key={index}
                icon={item.icon}
                text={item.text}
                tooltip={item.tooltip}
              />
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
