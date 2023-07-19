import { createTheme, ThemeProvider } from "@mui/material";
import "../styles/globals.css";
import Layout from "../components/Layout";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }) {
  const theme = createTheme({
    typography: {
      fontFamily: ["Archivo", "sans-serif"].join(","),
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <AnimatePresence mode="wait">
          <Component {...pageProps} />
        </AnimatePresence>
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
