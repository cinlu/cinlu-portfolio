import React from "react";
import { IoMdPlay } from "react-icons/io";

function Skills() {
  return (
    <div className="flex flex-col">
      
      <div className="flex flex-col lg:text-xl md:text-lg text-base mb-10">
        <div className="flex items-center mb-2">
          <IoMdPlay className="mr-2" />
          <p className="font-semibold">Languages</p>
        </div>

        
        <div className="proficient-row flex flex-wrap ml-6">
          <div className="py-1 px-3 bg-proficientBg border-2 border-proficientBorder rounded-xl m-1 flex items-center h-8">
            <p className="text-sm font-semibold">Java</p>
          </div>
          <div className="py-1 px-3 bg-proficientBg border-2 border-proficientBorder rounded-xl m-1 flex items-center h-8">
            <p className="text-sm font-semibold">JavaScript</p>
          </div>
          <div className="py-1 px-3 bg-proficientBg border-2 border-proficientBorder rounded-xl m-1 flex items-center h-8">
            <p className="text-sm font-semibold">HTML/CSS</p>
          </div>
        </div>

        
        <div className="intermediate-row flex flex-wrap ml-6">
          <div className="py-1 px-3 bg-intermediateBg border-2 border-intermediateBorder rounded-xl m-1 flex items-center h-8">
            <p className="text-sm font-semibold">TypeScript</p>
          </div>
          <div className="py-1 px-3 bg-intermediateBg border-2 border-intermediateBorder rounded-xl m-1 flex items-center h-8">
            <p className="text-sm font-semibold">Python</p>
          </div>
        </div>
      </div>


      
      <div className="flex flex-col lg:text-xl md:text-lg text-base mb-10">
        <div className="flex items-center font-semibold mb-2">
          <IoMdPlay className="mr-2" />
          <p className="font-semibold">Frameworks/Libraries</p>
        </div>

        
        <div className="proficient-row flex flex-wrap ml-6">
          <div className="p-2 bg-proficientBg border-2 border-proficientBorder rounded-xl m-1 flex items-center h-8">
            <p className="text-sm font-semibold">React</p>
          </div>
          <div className="p-2 bg-proficientBg border-2 border-proficientBorder rounded-xl m-1 flex items-center h-8">
            <p className="text-sm font-semibold">Node.js</p>
          </div>
          <div className="p-2 bg-proficientBg border-2 border-proficientBorder rounded-xl m-1 flex items-center h-8">
            <p className="text-sm font-semibold">Java Spring Boot</p>
          </div>
        </div>

        
        <div className="intermediate-row flex flex-wrap ml-6">
          <div className="p-2 bg-intermediateBg border-2 border-intermediateBorder rounded-xl m-1 flex items-center h-8">
            <p className="text-sm font-semibold">React Bootstrap</p>
          </div>
          <div className="p-2 bg-intermediateBg border-2 border-intermediateBorder rounded-xl m-1 flex items-center h-8">
            <p className="text-sm font-semibold">Next.js</p>
          </div>
          <div className="p-2 bg-intermediateBg border-2 border-intermediateBorder rounded-xl m-1 flex items-center h-8">
            <p className="text-sm font-semibold">JUnit</p>
          </div>
          <div className="p-2 bg-intermediateBg border-2 border-intermediateBorder rounded-xl m-1 flex items-center h-8">
            <p className="text-sm font-semibold">Pandas</p>
          </div>
        </div>

        
        <div className="beginner-row flex flex-wrap ml-6">
        <div className="p-2 bg-beginnerBg border-2 border-beginnerBorder rounded-xl m-1 flex items-center h-8">
            <p className="text-sm font-semibold">Tailwind CSS</p>
          </div>
          <div className="p-2 bg-beginnerBg border-2 border-beginnerBorder rounded-xl m-1 flex items-center h-8">
            <p className="text-sm font-semibold">Scikit-Learn</p>
          </div>
          <div className="p-2 bg-beginnerBg border-2 border-beginnerBorder rounded-xl m-1 flex items-center h-8">
            <p className="text-sm font-semibold">NumPy</p>
          </div>
        </div>
      </div>

      
      <div className="flex flex-col lg:text-xl md:text-lg text-base">
        <div className="flex items-center font-semibold mb-2">
          <IoMdPlay className="mr-2" />
          <p className="font-semibold">Tools</p>
        </div>

        
        <div className="proficient-row flex flex-wrap ml-6">
          <div className="p-2 bg-proficientBg border-2 border-proficientBorder rounded-xl m-1 flex items-center h-8">
            <p className="text-sm font-semibold">Visual Studio Code</p>
          </div>
          <div className="p-2 bg-proficientBg border-2 border-proficientBorder rounded-xl m-1 flex items-center h-8">
            <p className="text-sm font-semibold">Git</p>
          </div>
        </div>

        
        <div className="intermediate-row flex flex-wrap ml-6">
          <div className="p-2 bg-intermediateBg border-2 border-intermediateBorder rounded-xl m-1 flex items-center h-8">
            <p className="text-sm font-semibold">PostgreSQL</p>
          </div>
          <div className="p-2 bg-intermediateBg border-2 border-intermediateBorder rounded-xl m-1 flex items-center h-8">
            <p className="text-sm font-semibold">AWS S3</p>
          </div>
          <div className="p-2 bg-intermediateBg border-2 border-intermediateBorder rounded-xl m-1 flex items-center h-8">
            <p className="text-sm font-semibold">Google Cloud Platform</p>
          </div>
          <div className="p-2 bg-intermediateBg border-2 border-intermediateBorder rounded-xl m-1 flex items-center h-8">
            <p className="text-sm font-semibold">JSON Web Tokens</p>
          </div>
          <div className="p-2 bg-intermediateBg border-2 border-intermediateBorder rounded-xl m-1 flex items-center h-8">
            <p className="text-sm font-semibold">OAuth 2.0</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
