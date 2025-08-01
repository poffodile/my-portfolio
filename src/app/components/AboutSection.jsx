import React from "react";
import Image from "next/image";
const AboutSection = () => {
  return (
    <section className="text-white ">
      <div className="md:grid md:grid-cols-2 gap-8 items-center mb-4 xl:gap-16 sm:py-16 ">
        <Image
          src="/images/About_me.png"
          alt="About Image"
          width={500}
          height={500}
          className="rounded-lg shadow-lg object-cover w-full h-auto hover:scale-105 transition-transform duration-300 opacity-50 hover:opacity-50"
        />

        <div>
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a passionate developer with experience in building web
            applications using modern technologies. My goal is to create
            user-friendly and efficient solutions that meet the needs of users.
            I am constantly learning and adapting to new challenges in the tech
            industry. My interests include web development, UI/UX design, and
            exploring the latest trends in technology. I enjoy collaborating
            with others and believe in the power of teamwork to achieve great
            results. I am always looking for opportunities to grow and improve
            my skills, and I am excited to take on new challenges in the field
            of web development.
          </p>
          <div className="flex flex-col mt-8">
            <span className="mr-3 hover:text-white text-[#ADB7BE] border-b border-purple-500 text-2xl font-bold text-white mb-2">
              Skills
            </span>
            <ul className="list-disc list-inside">
              <li>Web Development</li>
              <li>UI/UX Design</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Node.js</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;

//   return (
//     <section className="text-white py-8 px-4">
//       <div className="md:grid md:grid-cols-2 gap-8 items-center xl:gap-16 sm:py-16">
//         {/* Image Section */}
//         <div className="mb-8 md:mb-0">
//           <Image
//             src="/images/About_me.png"
//             alt="About Image"
//             width={500}
//             height={500}
//             className="rounded-lg"
//           />
//         </div>

//         {/* Text Section */}
//         <div>
//           <h2 className="text-4xl font-bold mb-4">About Me</h2>
//           <p className="text-base md:text-lg text-[#ADB7BE] leading-relaxed">
//             I am a passionate developer with experience in building web applications
//             using modern technologies. My goal is to create user-friendly and
//             efficient solutions that meet the needs of users. I am constantly
//             learning and adapting to new challenges in the tech industry.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };
