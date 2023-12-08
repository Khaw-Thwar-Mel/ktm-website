import { Box, Typography } from "@mui/material";
import Title from "../Title";
import { colors } from "../../data/colors";

const Item = ({ title, description }) => {
  return (
    <Box>
      <Title
        text={title}
        color={colors.yellow}
        textColor="black"
        style="contain"
      />
      <Typography
        px={{ xl: 20, lg: 12, md: 8, sm: 6, xs: 2 }}
        py={{ xl: 6, lg: 6, md: 4, xs: 3 }}
        color="white"
        fontSize={{ xl: 28, lg: 24, md: 20, sm: 18, xs: 14 }}
        fontWeight={500}
        textAlign="center"
      >
        {description}
      </Typography>
    </Box>
  );
};

export default Item;
