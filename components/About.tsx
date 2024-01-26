import React from "react";
import Skills from "./Skills";

function About() {

  return (
    <section id="about" className="w-full min-h-screen flex items-center">
      <div className="about-skills w-full flex lg:flex-row flex-col lg:justify-between justify-center lg:pt-0 pt-12">
        <div className="about flex-1 lg:mb-0 mb-12 lg:mr-8 mr-0 lg:w-1/2 w-1/1">
          <h2 className="lg:mb-16 mb-8 font-bold lg:text-5xl text-3xl underline underline-offset-8 text-left">
            About
          </h2>
          <p className="lg:mb-12 md:mb-8 mb-4 lg:text-xl md:text-lg text-base font-light">
            I am a Boston University graduate (2023) with a degree in Computer Science, 
            and an interest in all things technology related.
          </p>
          <p className="lg:mb-12 md:mb-8 mb-4 lg:text-xl md:text-lg text-base font-light">
            My past internships have involved Full Stack roles, so I have experience working in 
            both server-side code bases as well as client side applications. I am also proficient in RESTful API&apos;s, the
            MVC design pattern, and modern UI libraries like React. I have also dabbled in Data Science, contributing
            to research on name-gender classification of patent owners. 
          </p>
          <p className="lg:mb-12 md:mb-8 mb-4 lg:text-xl md:text-lg text-base font-light">
            When I&apos;m not programming, you can find me learning new languages (the human spoken type), 
            exploring the city&apos;s food scene, or snuggling in with a good post-apocalyptic fiction. 
          </p>
          {/* <p className="lg:mb-12 md:mb-8 mb-4 lg:text-xl md:text-lg text-base font-light">
            Feel free to take a closer look at some of my projects below, including this online portfolio. 
          </p> */}
        </div>
        <div className="skills flex-1 lg:ml-8 ml-0 lg:w-1/2 w-1/1">
          <h2 className="lg:mb-16 mb-8 font-bold lg:text-5xl text-3xl underline underline-offset-8 text-left">
            Skills
          </h2>
          <Skills />
        </div>
      </div>
    </section>
  );
}

export default About;
