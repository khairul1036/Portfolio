import { Link } from "react-router-dom";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa"; // React, Node, CSS icons
import { IoServer } from "react-icons/io5";

const ProjectModal = ({ project, isOpen, closeModal }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 z-50">
      <div className="bg-[#1c1c1c] p-6 rounded-lg w-full max-w-lg max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-white">
            {project?.title}
          </h2>
          <button
            onClick={closeModal}
            className="text-white text-2xl font-bold"
          >
            &times;
          </button>
        </div>

        {/* Modal Body */}
        <div className="mb-4">
          <div className="pb-4 rounded-xl">
            <img
              className="rounded-xl border-2 border-yellow-500"
              src={project?.image}
              alt="picture"
            />
          </div>

          {/* Project Buttons */}
          <div className="flex items-center text-2xl gap-5 relative py-5">
            <p className="text-lg">Click: </p>
            {/* Live Link */}
            <div className="relative group">
              <Link target="_blank" to={project.liveLink}>
                <FaExternalLinkAlt className="hover:text-yellow-500"/>
              </Link>
              <span className="absolute left-1/2 transform -translate-x-1/2 top-10 text-sm text-black bg-yellow-300 rounded-lg px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Live Link
              </span>
            </div>

            {/* Client Repo */}
            <div className="relative group">
              <Link target="_blank" to={project.clientRepoLink}>
                <FaGithub className="hover:text-yellow-500"/>
              </Link>
              <span className="absolute left-1/2 transform -translate-x-1/2 top-10 text-sm text-black bg-yellow-300 rounded-lg px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Client Repo
              </span>
            </div>

            {/* Server Repo */}
            <div className="relative group">
              <Link target="_blank" to={project.serverRepoLink}>
                <IoServer className="hover:text-yellow-500"/>
              </Link>
              <span className="absolute left-1/2 transform -translate-x-1/2 top-10 text-sm text-black bg-yellow-300 rounded-lg px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Server Repo
              </span>
            </div>
          </div>

          <p className="text-lg text-gray-300 mb-2">
            <strong>Description:</strong> {project?.description}
          </p>

          <div className="mb-4">
            <p className="text-lg text-gray-300 mb-2">
              <strong>Features:</strong>
            </p>
            <ul className="list-disc list-inside text-gray-300">
              {project?.features?.map((feature, index) => (
                <li key={index} className="text-sm">
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <p className="text-lg text-gray-300 mb-2">
            <strong>Technologies Used:</strong>
          </p>
          <ul className="list-disc list-inside text-gray-300">
            {project?.technologiesUsed?.npmPackages?.length > 0 ? (
              project?.technologiesUsed?.npmPackages?.map((tech, index) => (
                <li key={index} className="text-sm">
                  {tech}
                </li>
              ))
            ) : (
              <li className="text-sm">No npm packages available</li>
            )}
          </ul>
        </div>

        {/* Modal Footer */}
        <div className="flex justify-end mt-4">
          <button
            onClick={closeModal}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
