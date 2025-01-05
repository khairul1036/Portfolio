import React from "react";
import Heading from "./share/Heading";
import myPic from "../assets/image/photo.jpg";
import AboutTitleWithDes from "./share/AboutTitleWithDes";

const AboutMe = () => {
  return (
    <div class="bg-[#111827] py-5">
      <h1 class="text-center pb-8 lg:pb-16">
        <span class="bg-[#374151] text-gray-100 px-5 py-1 rounded-full">
          About me
        </span>
      </h1>

      <div class="max-w-screen-xl mx-auto lg:flex items-center gap-10 pb-5 md:pb-10">
        {/* <!-- image --> */}
        <div class="lg:border-l-[30px] lg:border-b-[30px] border-[#374151]">
          <img
            class="w-1/2 mx-auto lg:w-full lg:relative -right-3 -top-3 rounded-lg"
            src={myPic}
            alt="my photo"
          />
        </div>
        {/* <!-- content --> */}
        <div class="px-5 lg:w-2/3 pt-5 lg:pt-0">
          <AboutTitleWithDes
            title={"Expertise in Web Development:"}
            description={
              "I am skilled in web development, creating websites and applications that are both functional and user-friendly."
            }
          />
          <AboutTitleWithDes
            title={"Hobby - Traveling & Adventures:"}
            description={
              "Traveling and exploring new places is my hobby. I enjoy adventures, especially in nature, whether it's by the sea or in the forest"
            }
          />
          <AboutTitleWithDes
            title={"Love for Sports:"}
            description={
              "I enjoy playing various sports, with football being my favorite. I also play badminton, cricket, and other games to stay active and have fun."
            }
          />
          <AboutTitleWithDes
            title={"Passion for Game Development:"}
            description={
              "Game development is my true passion. I love creating and designing games, learning new things, and improving my skills in this field."
            }
          />
          <AboutTitleWithDes
            title={"Why I Switched from Game Development to Web Development:"}
            description={
              "While my passion for game development is strong, I switched to web development because it offers more opportunities to apply my creativity in different ways and build projects that impact users on a broader scale. It also allows me to learn new technologies and improve my skill set in both fields."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
