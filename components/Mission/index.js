import { Box } from "@mui/material";
import { colors } from "../../data/colors";
import { homepageContent } from "../../data/homepage";
import Item from "./Item";

const Mission = () => {
  return (
    <Box bgcolor={colors.black}>
      <Box
        maxWidth={{ xl: "80%", lg: "1200px", md: "100%" }}
        py={{ xl: 16, lg: 12, md: 8, sm: 8, xs: 6 }}
        margin="auto"
        display="flex"
        flexDirection="column"
        gap={{ xl: 6, xs: 4 }}
      >
        <Item title="Our Vision" description={homepageContent?.vision} />
        <Item title="Our Mission" description={homepageContent?.mission} />
      </Box>
    </Box>
  );
};

export default Mission;
