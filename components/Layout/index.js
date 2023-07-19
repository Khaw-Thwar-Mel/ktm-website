import Navbar from "../Navbar";
import Footer from "../Footer";
import { Box } from "@mui/material";

export default function Layout({ children }) {
  return (
    <Box>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </Box>
  );
}
