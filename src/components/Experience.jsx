import React from "react";
import Heading from "./share/Heading";

const Experience = () => {
    const experiences = [
        {
          title: "Instructor at Qbit Learning (2023 - Present)",
          description:
            "As an instructor at Qbit Learning, I teach various tech subjects like C, Python, Java, and more. My primary focus is C programming, where I help students develop strong coding skills and prepare them for a successful career in tech.",
        },
        {
          title: "Part-Time Web Team Member at Empower NextGen (2024 - Present)",
          description:
            "I work part-time with the web team at Empower Nextgen, where I contribute to the development and enhancement of web projects. This role allows me to gain valuable experience and deepen my skills in web development.",
        },
        {
          title: "Salesman at a Clothing Shop (2022 - 2023)",
          description:
            "I worked as a salesman in a clothing shop, gaining experience in customer service, sales, and communication. I helped customers find the perfect products, ensuring they had a great shopping experience.",
        },
      ];
      
  return (
    <div className="py-10 md:py-20">
      <Heading
        title={"Experience"}
        subTitle={"Here is a quick summary of my most recent experiences"}
      />

      <div className="lg:w-10/12 mx-auto flex flex-col items-center px-4 md:p-8 mt-5 space-y-8">
        
        {experiences.map((experience, index) => (
          <div key={index} className="relative flex items-start">
            {/* Circle */}
            <div className="absolute -left-1 top-0 h-6 w-6 rounded-full border-2 border-yellow-400 text-white flex items-center justify-center">
              <span className="text-xs">{index + 1}</span>
            </div>
            {/* Line */}
            <div className="w-0.5 h-full bg-yellow-400 absolute left-2 top-[126px] md:top-[80px] lg:top-[68px] transform -translate-y-1/2"></div>
            {/* Experience Content */}
            <div className="ml-10 space-y-4">
              <h3 className="md:text-xl text-gray-300 font-semibold">
                {experience.title}
              </h3>
              <p className="text-gray-400 text-sm md:text-base">{experience.description}</p>
            </div>
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default Experience;
