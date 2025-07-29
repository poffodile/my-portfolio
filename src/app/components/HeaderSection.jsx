import React from "react";

const HeaderSection = () => {
  return (
    <section>
      <div className="grid  grid-cols-1 lg:grid-cols-12">
        <div className=" col-span-7 place-self-center">
          <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
            Hello, I am Precious, I love building and creating stuff
          </h1>
          <p className="text-[#ADB7BE] text-lg lg:text-xl">
            This is going to be a bunch of text describing my projects and
            skills.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeaderSection;
