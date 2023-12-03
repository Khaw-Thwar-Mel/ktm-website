import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { Autoplay } from "swiper";

// Import MUI components
import { Box, Typography, Stack } from "@mui/material";
import { colors } from "../../data/colors";
import { homepageContent } from "../../data/homepage";

export default function OurSocialCommitment() {
  const pagination = ["1", "2", "3", "4", "5"];
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState(null);

  return (
    <>
      <Box
        sx={{
          width: "100%",
          py: 10,
          px: 20,
          display: "flex",
          flexDirection: "row",
          color: colors.purple,
          justifyContent: "space-between",
        }}
      >
        <Stack width={"60%"}>
          <Typography
            sx={{
              fontSize: "56px",
              fontWeight: 700,
            }}
          >
            Our Social <br />
            Commitments
          </Typography>
          <Typography
            sx={{
              fontSize: "32px",
              fontWeight: 400,
            }}
          >
            We try to give society a helping hand <br /> in the following ways:
          </Typography>
        </Stack>
        <Stack direction={"column"} width={"40%"} gap={5}>
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            onSwiper={(swiper) => setSwiperInstance(swiper)}
            style={{
              width: "100%",
            }}
            modules={[Autoplay]}
            autoplay={{
              delay: 3000,
              pauseOnMouseEnter: true,
              disableOnInteraction: false,
            }}
          >
            {homepageContent.ourSocialCommitments.map((item, index) => (
              <SwiperSlide key={index} style={{}}>
                <Box
                  sx={{
                    bgcolor: colors.yellow,
                    fontSize: "28px",
                    fontWeight: 700,
                    px: 5,
                    py: 10,
                    borderRadius: 15,
                    lineHeight: 1.75,
                    mx: 15,
                    width: "80%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    cursor: "grab",
                  }}
                >
                  {item}
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
          <Stack direction={"row"} gap={1} ml={15}>
            {pagination.map((item, index) => (
              <Box
                key={index}
                sx={{
                  border: 1,
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontWeight: 700,
                  fontSize: "24px",
                  color: index === activeIndex ? colors.white : colors.purple,
                  bgcolor: index === activeIndex ? colors.purple : colors.white,
                  cursor: "pointer",
                }}
                onClick={() =>
                  swiperInstance.slideTo(index, 500, () =>
                    setActiveIndex(index)
                  )
                }
              >
                {item}
              </Box>
            ))}
          </Stack>
        </Stack>
      </Box>
    </>
  );
}
