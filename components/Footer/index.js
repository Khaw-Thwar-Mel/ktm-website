import { Box, Typography, Avatar, Input, Button } from "@mui/material";
import { contactChannel } from "../../data";
import CustomIconButton from "../CustomIconButton";

const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "black",
        p: "50px",
      }}
    >
      {/* top */}
      <Box
        sx={{
          width: "100%",
          heigth: "50%",
          display: "flex",
        }}
      >
        {/* left */}
        <Box>Hi </Box>

        {/* right */}
        <Box sx={{}}>
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
            }}
          >
            <Input
              fullWidth
              placeholder="Enter your email here!"
              disableUnderline
              type="email"
              sx={{
                outline: "2px solid white",
                marginRight: "20px",
                borderRadius: "5px",
                width: "437px",
                height: "65px",
              }}
            ></Input>
            <Button>Subscribe</Button>
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
            <Avatar></Avatar>
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
    // <Box>
    //   <Box
    //     display={"flex"}
    //     flexDirection={{ md: "row", xs: "column" }}
    //     justifyContent={{ md: "space-evenly", xs: "center" }}
    //     alignItems={{ md: "flex-start", xs: "center" }}
    //   >
    //     <Box
    //       display={"flex"}
    //       flexDirection={"column"}
    //       justifyContent={{ md: "flex-start", xs: "center" }}
    //       alignItems={{ md: "flex-start", xs: "center" }}
    //       my={{ md: "100px", xs: "50px" }}
    //     >
    //       <Typography
    //         fontSize={{ md: "28px", xs: "24px" }}
    //         fontWeight={700}
    //         mb={"30px"}
    //       >
    //         Follow Us On
    //       </Typography>
    //       <Box
    //         display={"flex"}
    //         flexDirection={"row"}
    //         alignItems={"center"}
    //         gap={2}
    //       >
    //         {socialLinks?.map((item, index) => (
    //           <CustomIconButton key={index} data={item} />
    //         ))}
    //       </Box>
    //     </Box>

    //     <Box
    //       display={"flex"}
    //       flexDirection={"column"}
    //       alignItems={{ md: "flex-start", xs: "center" }}
    //       my={{ md: "100px", xs: "50px" }}
    //     >
    //       <Typography
    //         fontSize={{ md: "28px", xs: "24px" }}
    //         fontWeight={700}
    //         mb={"30px"}
    //       >
    //         Contact Us
    //       </Typography>
    //       <Box
    //         display={"flex"}
    //         flexDirection={"column"}
    //         alignItems={{ md: "flex-start", xs: "center" }}
    //         gap={2}
    //       >
    //         {contactChannel?.map((item, index) => (
    //           <CustomIconButton key={index} data={item} />
    //         ))}
    //       </Box>
    //     </Box>
    //   </Box>
    // </Box>
  );
};

export default Footer;
