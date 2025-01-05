import React from "react";
import { FaPhone, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import Heading from "./share/Heading";
import { IoMdCall } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

const ContactMe = () => {
  return (
    <div className="pt-10 md:pt-20">
      <Heading
        title={"Get in touch"}
        subTitle={
          "What's next? Feel free to reach to me if you'er looking for a developer, have a query, or simple want to connect."
        }
      />
      <div className="lg:w-10/12 lg:mx-auto lg:flex justify-between mx-5 pt-8 lg:pt-10">
        {/* Left Side - Contact Form */}
        <div className="lg:w-1/2 bg-[#374151] p-5 lg:p-10 rounded-ss-xl rounded-se-xl lg:rounded-se-none lg:rounded-s-xl flex justify-center items-center">
          <form className="w-full max-w-lg">
            {/* Email Field */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-300 text-lg mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-[#030712] p-3 rounded-lg text-gray-200"
                placeholder="Enter your email"
              />
            </div>

            {/* Subject Field */}
            <div className="mb-4">
              <label
                htmlFor="subject"
                className="block text-gray-300 text-lg mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full bg-[#030712] p-3 rounded-lg text-gray-200"
                placeholder="Enter the subject"
              />
            </div>

            {/* Message Field */}
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-300 text-lg mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full bg-[#030712] p-3 rounded-lg text-gray-200"
                placeholder="Your message"
              />
            </div>

            {/* Send Email Button */}
            <button
              type="submit"
              className="btn border-none bg-gray-200 textColor hover:text-white text-base w-full"
            >
              Send Email
            </button>
          </form>
        </div>

        {/* Right Side - Contact Information */}
        <div className="lg:w-1/2 bg-[#1F2937] p-5 flex flex-col justify-center lg:p-10 rounded-es-xl lg:rounded-es-none rounded-ee-xl lg:rounded-e-xl text-white">
          {/* Location */}
          <div className="mb-4">
            <h3 className="text-xl font-medium">Location</h3>
            <div className="flex items-center mt-4">
              <FaLocationDot className="mr-3 text-2xl" />
              <p>Dhaka, Bangladesh</p>
            </div>
          </div>

          {/* Email */}
          <div className="mb-4">
            <h3 className="text-xl font-medium">Email</h3>
            <div className="flex items-center mt-4">
              <MdOutlineEmail className="mr-3 text-2xl" />
              <p>khairul4102.bd@gmail.com</p>
            </div>
          </div>

          {/* Phone Number */}
          <div className="mb-4">
            <h3 className="text-xl font-medium">Phone Number</h3>
            <div className="flex items-center mt-4">
              <IoMdCall className="mr-3 text-2xl" />
              <p>+880 1788758131</p>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="flex items-center mt-4">
            <FaWhatsapp className="mr-3 text-2xl" />
            <p className="text-lg">+880 1788758131 (WhatsApp)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
