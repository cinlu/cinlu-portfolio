import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";
import { routes } from "@/utils/routes";
import { BsArrowRight } from "react-icons/bs";

function Landing() {
  const words = [
    "innovation.",
    "software.",
    "learning.",
    "technology.",
    "data.",
  ];

  return (
    <section
      id="home"
      className="w-full min-h-screen flex lg:flex-row lg:justify-between justify-center flex-col-reverse items-center"
    >
      {/* introduction */}
      <div className="intro flex flex-col lg:text-left text-center">
        <div className="intro-name">
          <h1 className="lg:text-2xl text-lg font-light">Hi, I am</h1>
          <h1 className="lg:text-6xl text-3xl font-bold tracking-widest text-blue">
            Cindy Lu
          </h1>
        </div>

        <div className="intro-bio mt-6">
          <p className="lg:text-lg text-base">
            I am a programmer with <br></br>an interest for{" "}
            <span className="text-blue font-semibold">
              <Typewriter
                words={words}
                loop={true}
                cursor={true}
                cursorBlinking={true}
              />
            </span>
          </p>
        </div>

        {/* nav links */}
        <div className="flex flex-wrap items-center lg:justify-start justify-center mt-20">
          {routes.map((route, index) => (
            <a
              key={index}
              href={route.path}
              className="flex items-center lg:text-base text-xs py-3 px-8 border-2 hover:ease-out hover:duration-200 rounded-xl lg:mr-4 mr-2 my-1"
            >
              <span>{route.name}</span>
              <BsArrowRight className="ml-0.5" />
            </a>
          ))}
        </div>
      </div>

      {/* profile image */}
      <div style={{borderRadius: '5px', overflow: 'hidden'}}>
        <Image
          priority={true}
          src="/profilePic.png"
          alt="profile"
          width={505}
          height={505}
        />
      </div>
    </section>
  );
}

export default Landing;
