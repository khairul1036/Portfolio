import React from "react";
import myPic from "../assets/image/photo.jpg";
import {
  FaBehanceSquare,
  FaDownload,
  FaGithubSquare,
  FaLinkedin,
  FaRegDotCircle,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="max-w-screen-xl mx-auto px-5 py-10 lg:py-20">
      <div className="flex flex-col md:flex-row justify-between items-center md:px-5 lg:px-20">
        {/* Hero text content */}
        <div className="lg:text-left">
          <h1 className="text-3xl lg:text-6xl text-gray-100 font-bold">
            Hi, I'm Khairul👋
          </h1>
          <p className="md:w-3/4 lg:w-full text-gray-300 py-4 leading-6">
            I building smooth and beautiful websites with the latest web tools.
          </p>
          <div className="text-base text-gray-300 pb-5">
            {/* <div className="pb-2 flex items-center lg:justify-start">
              <FaLocationDot className="text-lg" />
              <span className="ml-4">Dhaka, Bangladesh</span>
            </div> */}
            <div className="flex items-center lg:justify-start">
              <FaRegDotCircle className="text-green-400" />
              <span className="ml-3">Available for new projects</span>
            </div>
          </div>
          <div className="text-3xl text-gray-300 flex items-center gap-5">
            <a
              href="https://www.linkedin.com/in/khairul-islam1/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/khairul1036/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithubSquare />
            </a>
            <a
              href="https://www.behance.net/khairul7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaBehanceSquare />
            </a>
          </div>
          <div className="my-8">
            <Link className="btn border-none bg-gray-200 textColor hover:text-white text-base">
              Download CV <FaDownload />
            </Link>
          </div>
        </div>

        {/* Image Placeholder */}
        <div className="border-r-[30px] border-b-[30px] border-[#374151] hidden md:block">
          <img
            className="w-72 relative -left-3 -top-3"
            src={myPic}
            alt="Khairul Islam"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
