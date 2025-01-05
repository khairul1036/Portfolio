import React from "react";

const Heading = ({ title, subTitle }) => {
  return (
    <>
      <h1 class="text-center pb-5">
        <span class="bg-[#374151] text-gray-100 px-5 py-1 rounded-full">{title}</span>
      </h1>
      <p class="font-semibold px-5 lg:px-0 text-base text-center text-[#9A9FA8]">
        {subTitle}
      </p>
    </>
  );
};

export default Heading;
