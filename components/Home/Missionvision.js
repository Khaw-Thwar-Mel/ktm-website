import React from "react";
import { Typography, Box } from "@mui/material";
import { aboutUsContents, fontSizes } from "../../data/aboutUs";
import Avatar from "@mui/material/Avatar";

export default function Missionvision() {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          py: "20px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "50%",
          }}
        >
          <Box sx={{ width: "216px", height: "216px" }}>
            <Avatar
              sx={{
                width: "100%",
                height: "100%",
              }}
            ></Avatar>
          </Box>
          <Typography
            sx={{
              fontWeight: "bold",
              color: "purple",
              fontSize: "32px",
              p: "30px",
            }}
          >
            Our Mission
          </Typography>
          <Typography
            sx={{
              color: "purple",
              width: "70%",
              fontSize: "28px",
              lineSpacing: "4px",
              p: "10px",
            }}
            align="center"
          >
            {aboutUsContents.ourMission}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "50%",
          }}
        >
          <Box sx={{ width: "216px", height: "216px" }}>
            <Avatar
              sx={{
                width: "100%",
                height: "100%",
              }}
            ></Avatar>
          </Box>
          <Typography
            sx={{
              fontWeight: "bold",
              color: "purple",
              fontSize: "32px",
              p: "30px",
            }}
          >
            Our Vision
          </Typography>
          <Typography
            sx={{
              color: "purple",
              width: "70%",
              fontSize: "28px",
              lineSpacing: "4px",
              p: "10px",
            }}
            align="center"
          >
            {aboutUsContents.ourVision}
          </Typography>
        </Box>
      </Box>
    </div>
  );
}
