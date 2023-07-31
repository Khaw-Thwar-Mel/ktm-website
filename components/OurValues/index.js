import { Box, Typography } from "@mui/material";
import { colors } from "../../data/colors";
import { aboutusContents } from "../../data/aboutusContents";
import ValueIcon from "./ValueIcon";
import Title from "../Title";

const OurValues = () => {
  return (
    <Box
      sx={{
        bgcolor: colors.black,
        width: "100%",
        height: "600px",
        display: "flex",
      }}
    >
      <Box
        sx={{
          width: "1300px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          color: "white",
          mx: "auto",
        }}
      >
        <Box
          width={"500px"}
          height={"350px"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"flex-start"}
          justifyContent={"flex-start"}
          mr={"100px"}
        >
          <Title textColor={"white"} text={"Our Values"} />
          <Typography fontSize={"32px"} fontWeight={700} mt={"20px"}>
            Our social enterprise&apos;s values include:
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "space-between",
            height: "350px",
          }}
        >
          {aboutusContents.ourValues.map((item, index) => (
            <ValueIcon key={index} icon={item.icon} text={item.text} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default OurValues;
