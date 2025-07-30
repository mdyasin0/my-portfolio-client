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
        web development Skills
      </h2>

      {/* Frontend */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Frontend</h3>
        <ul className="flex flex-wrap gap-10">
          <li className="flex flex-col items-center text-orange-600">
            <FaHtml5 className="text-4xl" />
            <p className="mt-1 text-base">HTML</p>
          </li>
          <li className="flex flex-col items-center text-blue-700">
            <IoLogoCss3 className="text-4xl" />
            <p className="mt-1 text-base">CSS</p>
          </li>
          <li className="flex flex-col items-center text-teal-400">
            <RiTailwindCssFill className="text-4xl" />
            <p className="mt-1 text-base">Tailwind CSS</p>
          </li>
          <li className="flex flex-col items-center text-yellow-400">
            <IoLogoJavascript className="text-4xl" />
            <p className="mt-1 text-base">JavaScript</p>
          </li>
          <li className="flex flex-col items-center text-sky-500">
            <FaReact className="text-4xl" />
            <p className="mt-1 text-base">React</p>
          </li>
        </ul>
      </div>

      {/* Backend */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Backend</h3>
        <ul className="flex flex-wrap gap-10">
          <li className="flex flex-col items-center text-green-700">
            <FaNodeJs className="text-4xl" />
            <p className="mt-1 text-base">Node.js</p>
          </li>
          <li className="flex flex-col items-center text-gray-800 dark:text-gray-300">
            <SiExpress className="text-4xl" />
            <p className="mt-1 text-base">Express.js</p>
          </li>
        </ul>
      </div>

      {/* Database */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Database</h3>
        <ul className="flex flex-wrap gap-10">
          <li className="flex flex-col items-center text-green-600">
            <DiMongodb className="text-4xl" />
            <p className="mt-1 text-base">MongoDB</p>
          </li>
        </ul>
      </div>

      {/* Tools */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Tools</h3>
        <ul className="flex flex-wrap gap-10">
          <li className="flex flex-col items-center text-yellow-500">
            <SiFirebase  className="text-4xl" />
            <p className="mt-1 text-base">Firebase</p>
          </li>
          <li className="flex flex-col items-center text-gray-600 dark:text-gray-300">
            <FaGitAlt className="text-4xl" />
            <p className="mt-1 text-base">Git</p>
          </li>
          <li className="flex flex-col items-center text-purple-700">
            <SiVite className="text-4xl" />
            <p className="mt-1 text-base">Vite</p>
          </li>
        </ul>
      </div>
      <section className={`max-w-5xl mx-auto py-10 px-4 ${
      mode === "dark" ? "bg-[#1e293b] text-[#e0e7ff]" : "bg-[#f1f5f9] text-[#1e293b]"
    }`}>
      <h2 className={`text-3xl font-bold mb-8 border-b pb-3 ${
        mode === "dark" ? "border-white" : "border-black"
      }`}>
        Digital Marketing Skill
      </h2>

      {/* All Services Summary */}
      <div className="mb-8">
    
        <ul className="list-disc ml-6 space-y-1 text-base">
          <li>SEO</li>
          <li>Social Media Management</li>
          <li>SEM (Search Engine Marketing)</li>
          <li>Email Marketing</li>
          <li>Paid Social Media Campaigns</li>
        </ul>
      </div>

      {/* SEO */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
          <FaSearchDollar className="text-green-400" /> SEO
        </h3>
        <ul className="list-disc ml-6 space-y-1 text-base">
          <li>On-Page SEO</li>
          <li>Off-Page SEO</li>
          <li>Keyword Research</li>
          <li>Technical SEO</li>
        </ul>
      </div>

      {/* Paid Marketing (SEM/PPC) */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
          <FaGoogle className="text-blue-500" /> Paid Marketing (SEM / PPC)
        </h3>
        <ul className="list-disc ml-6 space-y-1 text-base">
          <li>Facebook Ads</li>
          <li>Instagram Ads</li>
          <li>Google Ads (Search, Display, YouTube)</li>
          <li>LinkedIn Ads</li>
          <li>Twitter Ads</li>
        </ul>
      </div>

      {/* Email Marketing */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
          <FaEnvelope className="text-red-400" /> Email Marketing
        </h3>
        <ul className="list-disc ml-6 space-y-1 text-base">
          <li>Email Automations</li>
          <li>Email Platform Support</li>
          <li>Campaign Management</li>
          <li>Audience Development</li>
          <li>Cold Emails</li>
        </ul>
      </div>

      {/* Social Media Management */}
      <div>
        <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
          <FaFacebook className="text-blue-600" /> Social Media Management
        </h3>
        <ul className="list-disc ml-6 space-y-1 text-base">
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Twitter</li>
          <li>LinkedIn</li>
        </ul>
      </div>
    </section>
    </section>
   </div>
  );
};

export default Skills;
