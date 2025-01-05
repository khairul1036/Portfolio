import React from "react";
import Heading from "./share/Heading";

const Education = () => {
  return (
    <div className="pt-10 md:pt-20">
      <Heading
        title={"Education"}
        subTitle={"Here are my education and qualifications"}
      />

      <div className="lg:w-10/12 mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-5 pt-8 lg:p-8 rounded-lg shadow-lg gap-5">
        {/* Right side: Education Content */}
        <div className="lg:w-1/2 lg:pl-8">
          <p className="text-base text-gray-300 mb-4">
            I am currently pursuing a{" "}
            <span className="font-bold">
              Bachelor of Science (BSc) in Computer Science and Engineering
              (CSE)
            </span>{" "}
            at Daffodil International University. My academic journey began in
             <span className="font-bold"> 2021</span>, and I am set to graduate in <span className="font-bold">2025</span>.
          </p>
          <p className="text-base text-gray-300 mb-4">
            I have maintained a strong academic record, with a <span className="font-bold">CGPA: 3.76 </span>out of 4.00.
            Throughout my studies, I have gained comprehensive knowledge in
            computer science, programming, and technology. My coursework covers
            a wide range of topics, including software development, algorithms,
            data structures, and web development.
          </p>
          <p className="text-base text-gray-300">
            I am passionate about applying what I’ve learned to real-world
            problems and further enhancing my skills.
          </p>
        </div>
        {/* Left side: University Image */}
        <div className="lg:w-1/2">
          <img
            src="https://daffodilvarsity.edu.bd/template/images/social-share/diu-feature.jpg"
            alt="Daffodil International University"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Education;
