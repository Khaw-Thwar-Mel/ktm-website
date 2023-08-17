import React from "react";
import { colors } from "../../data/colors";

const VisionMission = () => {
  return (
    <section className="h-screen flex flex-col border-b border-b-slate-600">
      <div className="bg-black text-white px-28 h-[50%] flex justify-center items-center">
        <div className="flex flex-col md:flex-row justify-between items-start ">
          <p className="text-[56px] font-bold md:w-[50%]">Our Vision</p>
          <p className="text-[32px] font-bold md:w-[50%] leading-[2.875rem]">
            Khaw Thwar Mel&apos;s vision is to foster a more inclusive society
            in which equal access to technology , education and and employment
            opportunities.
          </p>
        </div>
      </div>
      <div className=" flex  justify-between items-center px-28 h-[50%]">
        <div className="flex flex-col md:flex-row justify-between items-start ">
          <p
            style={{ color: colors.yellow }}
            className="text-[56px] font-bold md:w-[50%]"
          >
            Our Mission
          </p>
          <p className="text-[32px] font-bold md:w-[50%] leading-[2.875rem]">
            Our mission is to accomplish that by leveraging technology and
            bringing the disabled community not to be left behind in terms of
            lifestyles and trends.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
