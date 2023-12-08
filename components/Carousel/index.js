import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { homepageContent } from "../../data/homepage";
import CarouselItem from "./CarouselItem";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Carousel = () => {
  return (
    <Box margin="auto" width={{ md: "70%", sm: "80%", xs: "90%" }}>
      <Swiper
        spaceBetween={50}
        navigation={true}
        pagination={true}
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        centeredSlides={true}
      >
        {homepageContent?.helpingHandList?.map((data, index) => (
          <SwiperSlide key={index}>
            <CarouselItem {...{ data, index }} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Carousel;
