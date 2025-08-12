import React, { useEffect, useState, useContext } from "react";

import { ThemeContext } from "../Context/ThemeContext";
import { useParams } from "react-router";

const ProjectDetails = () => {
  const { id } = useParams();
  const { mode } = useContext(ThemeContext);
  const [project, setProject] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/projects/${id}`)
      .then((res) => res.json())
      .then((data) => setProject(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!project) return <div className="h-screen flex items-center justify-center"><span className="loading loading-dots loading-xl"></span></div>;

  return (
    <div
      className={`${
        mode === "dark" ? "bg-[#0f172a] text-white" : "bg-yellow-50 text-black"
      } p-6 min-h-screen`}
    >
      {/* Container with responsive flex */}
      <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
        {/* Image */}
        <img
          src={project.image_link}
          alt={project.title}
          className="w-full md:w-1/2 rounded-lg shadow-lg object-cover"
        />
        {/* Content */}
        <div className="md:w-1/2 flex flex-col">
          <p className="font-bold text-3xl">{project.title}</p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-6">
            <a
              href={project.live_link}
              target="_blank"
              rel="noopener noreferrer"
              className={`py-2 px-6 rounded-lg font-semibold shadow-md transition-transform duration-200 hover:scale-105 ${
                mode === "dark"
                  ? "bg-[#3b82f6] text-[#e0e7ff]"
                  : "bg-[#0ea5e9] text-white"
              }`}
            >
              Visit site
            </a>
            <a
              href={project.github_link}
              target="_blank"
              rel="noopener noreferrer"
              className={`py-2 px-6 rounded-lg font-semibold shadow-md transition-transform duration-200 hover:scale-105 ${
                mode === "dark"
                  ? "bg-[#3b82f6] text-[#e0e7ff]"
                  : "bg-[#0ea5e9] text-white"
              }`}
            >
              GitHub
            </a>
          </div>

          {/* Technology Stack */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Technology Used</h2>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Frontend</h3>
              <ul className="flex flex-wrap gap-3">
                {project.technology_stack?.frontend?.map((tech, i) => (
                  <li
                    key={i}
                    className={`py-1 px-3 rounded-lg font-semibold shadow-md transition-transform duration-200 hover:scale-105 ${
                      mode === "dark"
                        ? "bg-[#3b82f6] text-[#e0e7ff]"
                        : "bg-[#0ea5e9] text-white"
                    }`}
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Backend</h3>
              <ul className="flex flex-wrap gap-3">
                {project.technology_stack?.backend?.map((tech, i) => (
                  <li
                    key={i}
                    className={`py-1 px-3 rounded-lg font-semibold shadow-md transition-transform duration-200 hover:scale-105 ${
                      mode === "dark"
                        ? "bg-[#3b82f6] text-[#e0e7ff]"
                        : "bg-[#0ea5e9] text-white"
                    }`}
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="max-w-6xl mx-auto mt-12">
        <h2 className="font-bold text-2xl mb-4">Project Purpose / Description</h2>
        <p className="text-lg leading-relaxed">{project.description}</p>
      </div>

      {/* Features */}
      <div className="max-w-6xl mx-auto mt-12">
        <h2 className="text-2xl font-bold mb-4">Features</h2>
        <ul className="list-disc list-inside space-y-2">
          {project.features.map((feature, i) => (
            <li key={i} className="text-lg">
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Challenges */}
      <div className="max-w-6xl mx-auto mt-12 mb-10">
        <h2 className="text-2xl font-bold mb-4">Challenges Faced</h2>
        <ul className="list-disc list-inside space-y-2">
          {project.challenges.map((challenge, i) => (
            <li key={i} className="text-lg">
              {challenge}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectDetails;
