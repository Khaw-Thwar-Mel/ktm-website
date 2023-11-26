import { Box } from "@mui/material";
import Blog from "../../components/Blogs/Blog";

const Blogs = () => {
  return (
    <Box
      width={"100%"}
      height={"500px"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Blog />
    </Box>
  );
};

export default Blogs;
