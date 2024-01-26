import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { completedProjects } from "@/utils/projectsList";

function Projects() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <section
      id="projects"
      className="w-full min-h-screen flex flex-col items-center pt-12 pb-8"
    >
      {/* projects display */}
      <div className="w-full flex justify-center mb-4">
        <div className="flex-1">
          <div className="mb-8 text-center flex flex-col">
            <h2 className="font-bold lg:text-5xl text-3xl underline underline-offset-8 mb-4">
              Projects
            </h2>
            <span className="tracking-normal font-light">
              Click on an item to learn more!
            </span>
          </div>
          <div className="flex justify-center items-center flex-wrap">
            {completedProjects.map((project, index) => (
              <div key={index}>
                <ProjectCard
                  title={project.title}
                  youtubeID={project.youtubeID}
                  desc={project.desc}
                  technologiesUsed={project.technologiesUsed}
                  image={project.image}
                  projectLink={project.projectLink}
                  gitLink={project.gitLink}
                  alt={project.alt}
                  width={project.width}
                  height={project.height}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <footer className="bottom-0 text-center text-sm flex flex-col w-full">
        <span>Inspired by:{" "}
          <a      
            className="text-blue"
            href="https://youtube.com/@ArpanNeupaneProductions?si=u8CCnriBIHYFQy2b"
            target="__blank"
          > 
            Arpan Neupane 
          </a>
        </span>
      </footer>
    </section>
  );
}

export default Projects;
