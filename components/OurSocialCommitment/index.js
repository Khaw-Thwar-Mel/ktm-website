import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
import { colors } from "../../data/colors";
import { styled } from "styled-components";

const ourSocialCommitment = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  const swiperText = [
    "Enabling the deaf community to learn Myanmar Sign Language at  their convenience and from any location.",
    "Facilitating the fluent reading and writing of both Myanmar and English for the deaf community.",
    "Offering tailor-made technological courses suited to the needs of deaf individuals.",
    "Ensuring the disabled community possesses the necessary skills to meet job requirements.",
    'Providing job opportunities at "Khaw Thwar Mel" for the disabled community.',
  ];
  return (
    <section className="max-w-full ">
      <div className=" flex  justify-between items-center pl-28 h-[70%]">
        <div className="flex max-w-full flex-col md:flex-row justify-between items-start ">
          <div className="flex flex-col space-y-6 text-black w-1/2 pr-16">
            <p className="text-[56px] font-bold  leading-[4rem]">
              Our Social Commitments
            </p>
            <p className="text-[32px] font-bold ">
              We try to give society a helping hand in the following ways:
            </p>
          </div>
          <SwiperContainer className="w-1/2 overflow-hidden h-[450px]">
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
              {swiperText.map((text, i) => (
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
      </div>
    </section>
  );
};

export default ourSocialCommitment;

const SwiperContainer = styled.div`
  .swiper-slide {
    background-color: ${colors.yellow};
    border-radius: 50px;
  }
  .swiper-slide-next {
    background-color: white !important;
  }
`;
