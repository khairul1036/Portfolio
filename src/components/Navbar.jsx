import React, { useState } from "react";
import { Link } from "react-scroll"; // Import Link from react-scroll
import logo from "../assets/image/logo1.png";
import { FaDownload } from "react-icons/fa";

const Navbar = () => {
  const links = (
    <>
      <li>
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="text-white hover:text-yellow-400 cursor-pointer"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="text-white hover:text-yellow-400 cursor-pointer"
        >
          About
        </Link>
      </li>
      <li>
        <Link
          to="experience"
          smooth={true}
          duration={500}
          className="text-white hover:text-yellow-400 cursor-pointer"
        >
          Experience
        </Link>
      </li>
      <li>
        <Link
          to="skill"
          smooth={true}
          duration={500}
          className="text-white hover:text-yellow-400 cursor-pointer"
        >
          Skill
        </Link>
      </li>
      <li>
        <Link
          to="project"
          smooth={true}
          duration={500}
          className="text-white hover:text-yellow-400 cursor-pointer"
        >
          Project
        </Link>
      </li>
      <li>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="text-white hover:text-yellow-400 cursor-pointer"
        >
          Contact
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar backdrop-blur-md bg-transparent shadow-md text-white fixed py-4 md:px-10 lg:px-32 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="text-base menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div>
          <a href="/">
            <img className="w-10" src={logo} alt="Khairul Islam" />
          </a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="text-base menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <a
          href="https://drive.google.com/file/d/1zxdua-uf-zxmEQQcYhZqF6yxKKwJIiBD/view?usp=sharing"
          className="btn border-none bg-gray-200 textColor hover:text-white text-base"
          target="_blank"
        >
          Download CV <FaDownload />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
