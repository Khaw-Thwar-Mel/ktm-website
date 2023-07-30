import { Box, Typography } from "@mui/material";
import { contactChannel, socialLinks } from "../../data";
import CustomIconButton from "../CustomIconButton";

const Footer = () => {
  return (
    <Box>
      <Box
        display={"flex"}
        flexDirection={{ md: "row", xs: "column" }}
        justifyContent={{ md: "space-evenly", xs: "center" }}
        alignItems={{ md: "flex-start", xs: "center" }}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={{ md: "flex-start", xs: "center" }}
          alignItems={{ md: "flex-start", xs: "center" }}
          my={{ md: "100px", xs: "50px" }}
        >
          <Typography
            fontSize={{ md: "28px", xs: "24px" }}
            fontWeight={700}
            mb={"30px"}
          >
            Follow Us On
          </Typography>
          <Box
            display={"flex"}
            flexDirection={"row"}
            alignItems={"center"}
            gap={2}
          >
            {socialLinks?.map((item, index) => (
              <CustomIconButton key={index} data={item} />
            ))}
          </Box>
        </Box>

        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={{ md: "flex-start", xs: "center" }}
          my={{ md: "100px", xs: "50px" }}
        >
          <Typography
            fontSize={{ md: "28px", xs: "24px" }}
            fontWeight={700}
            mb={"30px"}
          >
            Contact Us
          </Typography>
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={{ md: "flex-start", xs: "center" }}
            gap={2}
          >
            {contactChannel?.map((item, index) => (
              <CustomIconButton key={index} data={item} />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
