import { Box, Typography } from "@mui/material";
import { colors } from "../../data/colors";

const CarouselItem = ({ index, data }) => {
  return (
    <Box>
      <Box
        bgcolor="black"
        color="white"
        borderRadius="100%"
        height={{ lg: "400px", md: "350px", sm: "300px", xs: "250px" }}
        width={{ lg: "400px", md: "350px", sm: "300px", xs: "250px" }}
        margin="auto"
        p={{ lg: 8, md: 6, sm: 5, xs: 4 }}
        fontSize={{ xl: 24, lg: 20, md: 20, sm: 18, xs: 14 }}
        fontWeight={500}
        textAlign="center"
      >
        <Box
          margin="auto"
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="40px"
          width="40px"
          color="black"
          borderRadius="100%"
          bgcolor={colors.yellow}
          mb={{ lg: 8, md: 4, sm: 3, xs: 3 }}
        >
          {index + 1}
        </Box>
        <Typography
          fontSize={{ xl: 24, lg: 20, md: 20, sm: 18, xs: 14 }}
          fontWeight={500}
          textAlign="center"
        >
          {data}
        </Typography>
      </Box>
    </Box>
  );
};

export default CarouselItem;
