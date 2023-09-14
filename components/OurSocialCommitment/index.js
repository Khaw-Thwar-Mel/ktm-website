import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/effect-fade';
import { Pagination } from "swiper";
// Import MUI components
import { Box, Grid, Typography } from "@mui/material";
// import required modules
import { styled } from "styled-components";
import { colors } from "../../data/colors";
import { aboutUsContents, fontSizes } from "../../data/aboutUs";

const ourSocialCommitment = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      if(index!==5){
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      }else{
        return ''
      }
    },
  };
  return (
    <>
     <Box
      sx={{
        width: "100%",
        py: 15,
      }}
    >
      <Grid
        container
        columns={{ lg: 12, md: 6, xs: 6 }}
        rowSpacing={5}
        columnSpacing={5}
        alignItems={{ lg: "flex-start", md: "center" }}
        justifyContent={"center"}
      >
        <Grid item lg={5} md={5} xs={5}>
          <Typography
            sx={{
              fontSize: fontSizes.heading,
              fontWeight: 700,
              textAlign: { lg: "start", md: "center", xs: "center" },
            }}
          >
          Our Social Commitments
          </Typography>
          <Typography
            sx={{
              fontSize: fontSizes.body,
              fontWeight: 700,
              textAlign: { lg: "start", md: "center", xs: "center" },
            }}
          >
             We try to give society a helping hand in the following ways:
          </Typography>
        </Grid>
        <Grid item lg={5} md={5} xs={5}>
          <div className="!relative w-full">
            <div className='rounded-[50px] top-[5.5rem] absolute w-[512px] h-[323px]' style={{backgroundColor:colors.yellow}}/>
        <SwiperContainer className="w-full overflow-hidden h-[450px]">
            <Swiper
              pagination={pagination}
              modules={[Pagination]}
              breakpoints={{
                // when window width is >= 320px
                280: {
                  slidesPerView: 1,
                  spaceBetween: 0,
                },
                400: {
                  slidesPerView: 1,
                  spaceBetween: 0,
                },
                540: {
                  slidesPerView: 1,
                  spaceBetween: 0,
                },
                // when window width is >= 480px
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                // when window width is >= 640px
                880: {
                  slidesPerView: 1.2,
                  spaceBetween: 20,
                },
                1180: {
                  slidesPerView: 1.2,
                  spaceBetween: 30,
                },
                1260: {
                  slidesPerView: 1.2,
                  spaceBetween: 40,
                },
                1440: {
                  slidesPerView: 1.3,
                  spaceBetween: 40,
                },
              }}
              style={{
                "--swiper-pagination-bullet-inactive-opacity": "1",
              }}
            >
              {aboutUsContents.ourSocialCommitments.map((text, i) => (
                <SwiperSlide
                  key={i}
                  className="!max-w-[512px] cursor-grab !max-h-[323px]"
                >
                  <div className="p-4 rounded-3xl w-[512px] h-[323px] text-[28px] px-8 font-bold flex items-center">
                    <p>{text}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </SwiperContainer>
          </div>

        </Grid>
      </Grid>
    </Box>

    </>
  );
};

export default ourSocialCommitment;

const SwiperContainer = styled.div`
  .swiper-slide {
    border-radius: 50px;
  }

`;
