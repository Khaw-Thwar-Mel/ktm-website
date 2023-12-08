import { Box, Typography, Stack } from "@mui/material";
import { contactChannel, socialLinks } from "../../data";
import CustomIconButton from "../CustomIconButton";
import Image from "next/image";
import FooterLogo from "../../public/assets/FooterLogo.png";
import CustomButton from "../CustomButton";
import Input from "../Input";

const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "black",
        p: 10,
      }}
    >
      {/* top */}
      <Box
        sx={{
          width: "100%",
          heigth: "50%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {/* left */}
        <Box>
          <Image alt="KhawThwarMelLogo" src={FooterLogo} />
        </Box>

        {/* right */}
        <Box
          sx={{
            width: "30%",
            display: "flex",
            flexDirection: "column",
            gap: 5,
          }}
        >
          <Box>
            <Typography
              sx={{
                color: "white",
                fontSize: "32px",
              }}
            >
              Get Notified Of Updated News
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: 5,
            }}
          >
            <Input placeholder={"Enter your email here"} />
            <CustomButton text={"Subscribe"} />
          </Box>
        </Box>
      </Box>

      {/* bottom */}

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          fontSize: "24px",
          color: "white",
        }}
      >
        <Box sx={{}}>
          <Box>
            <Typography
              sx={{
                fontSize: "28px",
                color: "white",
                py: "25px",
                fontWeight: "bold",
              }}
            >
              Follow Us On
            </Typography>
            <Stack direction={"row"} gap={3}>
              {socialLinks?.map((item, index) => (
                <CustomIconButton key={index} data={item} />
              ))}
            </Stack>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          ></Box>
        </Box>
        <Box
          sx={{
            display: "flex",
          }}
        >
          {contactChannel?.map((item, index) => (
            <CustomIconButton key={index} data={item} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
