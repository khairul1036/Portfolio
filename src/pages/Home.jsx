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
      <section id="home">
        <Banner />
      </section>
      <section id="about">
        <AboutMe />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="skill">
        <Skills />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="project">
        <Project />
      </section>
      <section id="contact">
        <ContactMe />
      </section>
    </>
  );
};

export default Home;
