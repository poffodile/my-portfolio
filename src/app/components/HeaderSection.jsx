"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeaderSection = () => {
  return (
    <section>
      <div className="grid  grid-cols-1 sm:grid-cols-12 ">
        <div className=" col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6A00] via-[#EE0979] to-[#6D00FF]">
              Hello, I am{" "}
            </span>
            <br />
            <span className="text-white">
              <TypeAnimation
                sequence={[
                  " Precious,",
                  1000,
                  "an aspiring software engineer",
                  1000,
                  "passionate about building and creating stuff ",
                  1000,
                  "a creative problem solver ",
                  1000,
                ]}
                wrapper="span"
                speed={30}
                // style={{ fontSize: "2em sm:text-xl", display: "inline-block" }}
                repeat={Infinity}
              />
            </span>
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            This is going to be a bunch of text describing my projects and
            skills.
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-[#EB1E39] via-[#E48511] to-[#57BC2F] hover:bg-slate-200 text-white ">
              Hire Me
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-[#EB1E39] via-[#E48511] to-[#57BC2F]  hover:bg-slate-800 text-white  mt-3  ">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 ">
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div
          className="col-span-5 place-self-center mt-4 lg:mt-0 
 ">
          <div className="rounded-full overflow-hidden bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] flex items-center justify-center ring-4 ring-[#EE8044] shadow-lg hover:shadow-green-400 transition-shadow duration-300">
            <Image
              src="/images/headerimage.jpg"
              alt="Profile Picture"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300 rounded-full"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderSection;
