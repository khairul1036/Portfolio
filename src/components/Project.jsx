import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaCss3Alt,
  FaExternalLinkAlt,
  FaGithub,
} from "react-icons/fa"; // React, Node, CSS icons
import { SiTailwindcss } from "react-icons/si"; // Tailwind CSS icon
import Heading from "./share/Heading";
import { Link } from "react-router-dom";
import { IoServer } from "react-icons/io5";

const projects = [
  {
    title: "Cleanify",
    image: "https://i.ibb.co.com/ZxrF4FZ/a11.png", // Replace with actual image URLs
    liveLink: "https://a11service.web.app",
    clientRepoLink:
      "https://github.com/programming-hero-web-course2/b10a11-client-side-khairul1036",
    serverRepoLink:
      "https://github.com/programming-hero-web-course2/b10a11-server-side-khairul1036",
    description:
      "Cleanify is a house cleaning services platform where users can add, update, and delete their own services, browse services shared by others, book specific services, and manage the statuses of booked services. Built with a focus on user-friendliness, the platform enables seamless service management, service booking, and status updates.",
    tools: ["React", "Node.js", "Tailwind CSS", "MongoDB"],
  },
  {
    title: "Eco-Adventure",
    image: "https://i.ibb.co.com/zFzHgGb/a9.png", // Replace with actual image URLs
    liveLink: "https://eco-adventure-experience-6f026.web.app",
    clientRepoLink:
      "https://github.com/programming-hero-web-course1/b10-a9-authentication-khairul1036",
    serverRepoLink:
      "https://github.com/programming-hero-web-course1/b10-a9-authentication-khairul1036",
    description:
      "Eco-Adventure is a platform showcasing eco-friendly travel experiences like mountain treks, ocean dives, and more. It promotes sustainable tourism by providing adventure details and encouraging responsible practices. Users can create profiles, explore adventures, and consult with experts.",
    tools: ["React", "Tailwind CSS", "Node.js"],
  },
  {
    title: "Movie Portal",
    image: "https://i.ibb.co.com/s6ct8hY/a10.png", // Replace with actual image URLs
    liveLink: "https://movie-portal-90500.web.app",
    clientRepoLink: "https://github.com/programming-hero-web-course2/b10-a10-client-side-khairul1036",
    serverRepoLink: "https://github.com/programming-hero-web-course2/b10-a10-server-side-khairul1036",
    description:
      "A user-friendly platform to explore movies, view detailed information, and manage your favorites. Experience a seamless movie browsing experience with dynamic features and robust functionality.",
    tools: ["React", "Node.js", "MongoDB", "Firebase", "Tailwind CSS"],
  },
];

const Project = () => {
  return (
    <div className="pt-10 md:pt-20">
      <Heading
        title={"Projects"}
        subTitle={"Some of the noteworthy projects I have built"}
      />

      {/* Project Cards */}
      <div className="md:w-10/12 md:mx-auto mx-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover hover:opacity-80 transition-opacity duration-300"
            />
            <div className="p-5">
              <h3 className="text-2xl font-semibold text-white mb-3">
                {project.title}
              </h3>

              {/* Project Description */}
              <p className="text-gray-300 mb-4">
                {project.description.substring(0, 70)} ....
              </p>

              {/* Tools Icons */}
              <div className="flex flex-wrap space-x-2 mb-4">
                {project.tools.map((tool) => (
                  <span className="bg-yellow-300 text-black text-xs px-2 py-1 mx-1 my-1 rounded-full">
                    {tool}
                  </span>
                ))}
              </div>

              {/* Project Buttons */}
              <div className="flex items-center text-2xl gap-5 relative">
                {/* Live Link */}
                <div className="relative group">
                  <Link to={project.liveLink}>
                    <FaExternalLinkAlt />
                  </Link>
                  <span className="absolute left-1/2 transform -translate-x-1/2 top-10 text-sm text-black bg-yellow-300 rounded-lg px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Live Link
                  </span>
                </div>

                {/* Client Repo */}
                <div className="relative group">
                  <Link to={project.clientRepoLink }>
                    <FaGithub />
                  </Link>
                  <span className="absolute left-1/2 transform -translate-x-1/2 top-10 text-sm text-black bg-yellow-300 rounded-lg px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Client Repo
                  </span>
                </div>

                {/* Server Repo */}
                <div className="relative group">
                  <Link to={project.serverRepoLink}>
                    <IoServer />
                  </Link>
                  <span className="absolute left-1/2 transform -translate-x-1/2 top-10 text-sm text-black bg-yellow-300 rounded-lg px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Server Repo
                  </span>
                </div>
              </div>

              {/* View Details Button */}
              <div className="mt-4">
                <button className="btn border-none bg-gray-200 textColor hover:text-white text-base w-full">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
