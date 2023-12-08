import Navbar from "../Navbar";
import Footer from "../Footer";
import { Box } from "@mui/material";

export default function Layout({ children }) {
  return (
    <Box>
      <Navbar />
      <main
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {children}
      </main>
      <Footer />
    </Box>
  );
}
