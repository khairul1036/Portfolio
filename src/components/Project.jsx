import React, { useEffect, useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa"; // React, Node, CSS icons
import Heading from "./share/Heading";
import { Link } from "react-router-dom";
import { IoServer } from "react-icons/io5";
import ProjectModal from "./ProjectModal";

const Project = () => {
  // State to store projects data
  const [projects, setProjects] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // UseEffect to simulate fetching data when the component mounts
  useEffect(() => {
    fetch("projectShortDetails.js")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };


  return (
    <div className="pt-10 md:pt-20">
      <Heading
        title={"Projects"}
        subTitle={"Some of the noteworthy projects I have built"}
      />

      {/* Project Cards */}
      <div className="md:w-10/12 md:mx-auto mx-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {projects.map((project) => (
          <div
            key={project.id}
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
                  <Link target="_blank" to={project.liveLink}>
                    <FaExternalLinkAlt className="hover:text-yellow-500"/>
                  </Link>
                  {/* <span className="absolute left-1/2 transform -translate-x-1/2 top-10 text-sm text-black bg-yellow-300 rounded-lg px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Live Link
                  </span> */}
                </div>

                {/* Client Repo */}
                <div className="relative group">
                  <Link target="_blank" to={project.clientRepoLink}>
                    <FaGithub className="hover:text-yellow-500"/>
                  </Link>
                  {/* <span className="absolute left-1/2 transform -translate-x-1/2 top-10 text-sm text-black bg-yellow-300 rounded-lg px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Client Repo
                  </span> */}
                </div>

                {/* Server Repo */}
                <div className="relative group">
                  <Link target="_blank" to={project.serverRepoLink}>
                    <IoServer className="hover:text-yellow-500"/>
                  </Link>
                  {/* <span className="absolute left-1/2 transform -translate-x-1/2 top-10 text-sm text-black bg-yellow-300 rounded-lg px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Server Repo
                  </span> */}
                </div>
              </div>

              {/* View Details Button */}
              <div className="mt-4">
                <button
                  onClick={() => openModal(project)}
                  className="btn border-none bg-gray-200 textColor hover:text-white text-base w-full"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        closeModal={closeModal}
      />
    </div>
  );
};

export default Project;
