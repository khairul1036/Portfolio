import React from "react";
import Banner from "../components/Banner";
import AboutMe from "../components/AboutMe";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Education from "../components/Education";
import Project from "../components/Project";
import ContactMe from "../components/ContactMe";

const Home = () => {
  return (
    <>
      <Banner />
      <AboutMe />
      <Experience />
      <Skills/>
      <Education/>
      <Project/>
      <ContactMe/>
    </>
  );
};

export default Home;
