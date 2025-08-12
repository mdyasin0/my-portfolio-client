import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { 
  FaHtml5, FaReact, FaNodeJs,  
  FaGitAlt, 
  FaSearchDollar,
  FaGoogle,
  FaEnvelope,
  FaFacebook
} from "react-icons/fa";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiFirebase, SiVite } from "react-icons/si";
import { DiMongodb } from "react-icons/di";

const Skills = () => {
  const { mode } = useContext(ThemeContext);

  return (
   <div className={` py-10 px-4 ${
      mode === "dark" ? "bg-[#1e293b] text-[#e0e7ff]" : "bg-[#f1f5f9] text-[#1e293b]"
    }  shadow-lg`}>
     <section className={`max-w-5xl mx-auto   `}>
      <h2 className={`text-3xl font-bold mb-8 border-b pb-3 ${
        mode === "dark" ? "border-white" : "border-black"
      }`}>
      Skills
      </h2>

      {/* Frontend */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Frontend</h3>
        <ul className="flex flex-wrap gap-10">
          <li className="flex flex-col items-center text-orange-600">
            <FaHtml5 className="text-4xl" />
            <p className={`mt-1 text-base ${
        mode === "dark" ? "text-white" : "text-black"
      }`}>HTML</p>
          </li>
          <li className="flex flex-col items-center text-blue-700">
            <IoLogoCss3 className="text-4xl" />
            <p className={`mt-1 text-base ${
        mode === "dark" ? "text-white" : "text-black"
      }`}>CSS</p>
          </li>
          <li className="flex flex-col items-center text-teal-400">
            <RiTailwindCssFill className="text-4xl" />
            <p className={`mt-1 text-base ${
        mode === "dark" ? "text-white" : "text-black"
      }`}>Tailwind CSS</p>
          </li>
          <li className="flex flex-col items-center text-yellow-400">
            <IoLogoJavascript className="text-4xl" />
            <p className={`mt-1 text-base ${
        mode === "dark" ? "text-white" : "text-black"
      }`}>JavaScript</p>
          </li>
          <li className="flex flex-col items-center text-sky-500">
            <FaReact className="text-4xl" />
            <p className={`mt-1 text-base ${
        mode === "dark" ? "text-white" : "text-black"
      }`}>React</p>
          </li>
        </ul>
      </div>

      {/* Backend */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Backend</h3>
        <ul className="flex flex-wrap gap-10">
          <li className="flex flex-col items-center text-green-700">
            <FaNodeJs className="text-4xl" />
            <p className={`mt-1 text-base ${
        mode === "dark" ? "text-white" : "text-black"
      }`}>Node.js</p>
          </li>
          <li className="flex flex-col items-center text-gray-800 dark:text-gray-300">
            <SiExpress className={`text-4xl ${
        mode === "dark" ? "text-white" : "text-black"
      }`} />
            <p className={`mt-1 text-base ${
        mode === "dark" ? "text-white" : "text-black"
      }`}>Express.js</p>
          </li>
        </ul>
      </div>

      {/* Database */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Database</h3>
        <ul className="flex flex-wrap gap-10">
          <li className="flex flex-col items-center text-green-600">
            <DiMongodb className="text-4xl" />
            <p className={`mt-1 text-base ${
        mode === "dark" ? "text-white" : "text-black"
      }`}>MongoDB</p>
          </li>
        </ul>
      </div>

      {/* Tools */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Tools</h3>
        <ul className="flex flex-wrap gap-10">
          <li className="flex flex-col items-center text-yellow-500">
            <SiFirebase  className="text-4xl" />
            <p className={`mt-1 text-base ${
        mode === "dark" ? "text-white" : "text-black"
      }`}>Firebase</p>
          </li>
          <li className="flex flex-col items-center text-gray-600 dark:text-gray-300">
            <FaGitAlt className={`text-4xl ${
        mode === "dark" ? "text-white" : "text-black"
      }`} />
            <p className={`mt-1 text-base ${
        mode === "dark" ? "text-white" : "text-black"
      }`}>Git</p>
          </li>
          <li className="flex flex-col items-center text-purple-700">
            <SiVite className="text-4xl" />
            <p className={`mt-1 text-base ${
        mode === "dark" ? "text-white" : "text-black"
      }`}>Vite</p>
          </li>
        </ul>
      </div>
      
    </section>
   </div>
  );
};

export default Skills;
