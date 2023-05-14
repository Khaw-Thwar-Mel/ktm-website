import { Alert, Box, Snackbar, Typography } from "@mui/material";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import { contactChannel, socialLinks } from "../../data";
import { colors } from "../../data/colors";
import CustomButton from "../CustomButton";
import CustomIconButton from "../CustomIconButton";
import Input from "../Input";
import Title from "../Title";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [snackbarOpenStatus, setSnackbarOpenStatus] = useState(false);
  const [errorMsg, setErrorMsg] = useState();
  const [successMsg, setSuccessMsg] = useState();
  const isEmail = (email) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

  // const handleClick = () => {
  //   setSnackbarOpenStatus(true);
  // };

  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackbarOpenStatus(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    
    if (isEmail) {
      setSnackbarOpenStatus(true);
      setErrorMsg("Please enter a valid email address!");
    } else {      
      emailjs
        .send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE,
          {
            from_name: email,
          },
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        )
        .then(() => {
          setSnackbarOpenStatus(true);
          setErrorMsg(null);
          setSuccessMsg("Successfully subscribed !");
          setEmail("");
        });
    }
  };
  return (
    <Box>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#dfdfdf"
          fillOpacity="1"
          d="M0,160L80,160C160,160,320,160,480,181.3C640,203,800,245,960,245.3C1120,245,1280,203,1360,181.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>

      <Snackbar
        open={snackbarOpenStatus}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        {errorMsg ? (
          <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
            {errorMsg}
          </Alert>
        ) : (
          <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
            {successMsg}
          </Alert>
        )}
      </Snackbar>
      <Box bgcolor={colors.gray} mt="-5px" px={{ lg: 12, sm: 2, xs: 2 }}>
        <Box maxWidth="1440px" margin="auto" pb={4}>
          <Box display="flex" justifyContent="space-between" gap={2}>
            <Box width={{ lg: "250px", md: "200px", sm: "150px", xs: "120px" }}>
              <Image
                alt="footer-logo"
                src="/assets/hero-homepage.png"
                layout="responsive"
                width={100}
                height={120}
              />
            </Box>
            <Box
              width="fit-content"
              //   alignItems={{ sm: "flex-start", xs: "center" }}
              py={{ md: 6, sm: 4, xs: 1 }}
            >
              <Title text="Get Notified of Updated News" />
              <Box
                display="flex"
                gap={{ md: 4, sm: 2, xs: "10px" }}
                mt={{ sm: 2, xs: "10px" }}
                flexDirection={{ sm: "row", xs: "column" }}
              >
                <Box width={{ md: "295px", sm: "270px", xs: "230px" }}>
                  <Input
                    placeholder="Enter your email here"
                    onChangeHandler={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </Box>
                <CustomButton
                  text="Subscribe"
                  backgroundColor={colors.yellow}
                  onClickHandler={sendEmail}
                />
              </Box>
            </Box>
          </Box>
          <Box px={{ md: 3, sm: 1, xs: 0 }} pt={{ md: 4, xs: 3 }}>
            <Typography fontWeight={600} fontSize={{ md: 24, sm: 20, xs: 18 }}>
              Follow Us on
            </Typography>
            <Box
              display="flex"
              //   flexWrap={{ sm: "nowrap", xs: "wrap" }}
              flexDirection={{ sm: "row", xs: "column" }}
              alignItems="flex-start"
              gap={1}
              mt={2}
            >
              <Box display="flex" gap={{ md: 2, xs: 1 }}>
                {socialLinks?.map((item, index) => (
                  <CustomIconButton key={index} data={item} />
                ))}
              </Box>
              <Box
                width="100%"
                display="flex"
                justifyContent={{ sm: "flex-end", xs: "flex-start" }}
                // flexDirection={{ sm: "row", xs: "column" }}
                gap={1}
              >
                {contactChannel?.map((item, index) => (
                  <CustomIconButton key={index} data={item} />
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;