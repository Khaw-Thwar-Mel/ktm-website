import React from "react";
import { colors } from "../../data/colors";
const Story = () => {
  return (
    <section
      id="story"
      className="flex flex-col md:flex-row justify-between items-stretch mx-28"
    >
      <p
        style={{ color: colors.yellow }}
        className="text-[56px] font-bold md:w-[50%]"
      >
        Our Story
      </p>
      <p className="text-[32px] font-bold md:w-[50%] leading-[2.875rem]">
        Khaw Thwar Mel was founded by a group of individuals driven by a shared
        passion to make a meaningful difference.After receiving significant
        support for our project, we were inspired to launch our socially
        responsible enterprise. Our current efforts are dedicated to serving the
        deaf community, and we aim to create more impactful initiatives for the
        disabled community in the future.
      </p>
    </section>
  );
};

export default Story;
