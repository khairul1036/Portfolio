import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/image/logo1.png";
import { FaDownload } from "react-icons/fa";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            `text-white ${
              isActive ? "font-semibold text-yellow-400" : "hover:text-yellow-400"
            }`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/about"}
          className={({ isActive }) =>
            `text-white ${
              isActive ? "font-semibold text-yellow-400" : "hover:text-yellow-400"
            }`
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/experience"}
          className={({ isActive }) =>
            `text-white ${
              isActive ? "font-semibold text-yellow-400" : "hover:text-yellow-400"
            }`
          }
        >
          Experience
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/skill"}
          className={({ isActive }) =>
            `text-white ${
              isActive ? "font-semibold text-yellow-400" : "hover:text-yellow-400"
            }`
          }
        >
          Skill
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/project"}
          className={({ isActive }) =>
            `text-white ${
              isActive ? "font-semibold text-yellow-400" : "hover:text-yellow-400"
            }`
          }
        >
          Project
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/contact"}
          className={({ isActive }) =>
            `text-white ${
              isActive ? "font-semibold text-yellow-400" : "hover:text-yellow-400"
            }`
          }
        >
          Contact
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar backdrop-blur-md bg-transparent shadow-md  text-white fixed py-4 md:px-10 lg:px-32 z-50">
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
          <Link to={"/"}>
            <img className="w-10" src={logo} alt="Khairul Islam" />
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="text-base menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <Link className="btn border-none bg-gray-200 textColor hover:text-white text-base">
          Download CV <FaDownload />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
