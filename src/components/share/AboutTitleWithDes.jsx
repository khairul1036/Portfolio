import React from "react";

const AboutTitleWithDes = ({ title, description }) => {
  return (
    <div class="pt-5 text-[#9A9FA8]">
      <h2 class="font-bold text-lg lg:text-xl py-2">{title}</h2>
      <p class="leading-6 lg:leading-7 text-sm lg:text-base">{description}</p>
    </div>
  );
};

export default AboutTitleWithDes;
