import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { Link} from "react-router";

const Project = () => {
  const { mode } = useContext(ThemeContext);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Error fetching projects:", err));
  }, []);

  return (
    <div
      className={`${
        mode === "dark"
          ? "bg-[#0f172a] text-[#e0e7ff]"
          : "bg-[#f7f8fc] text-[#1e293b]"
      }`}
    >
      <h1
        className={`text-center text-5xl font-bold ${
          mode === "dark"
            ? "bg-[#0f172a] text-[#e0e7ff]"
            : "bg-[#f7f8fc] text-[#1e293b]"
        }`}
      >
        Letest project
      </h1>

      <section
        className={`max-w-6xl mx-auto px-4 py-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2`}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className={`rounded-lg p-6 shadow-md ${
              mode === "dark"
                ? "bg-[#1e293b] shadow-black/30"
                : "bg-white shadow-[rgba(0,0,0,0.05)]"
            }`}
          >
            <img
              src={project.image_link}
              alt={project.title}
              className="w-full  object-cover rounded-md mb-4"
            />
            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
            
            
            <div className="flex justify-end pt-5 gap-4">
              <Link
              to={`/render/projects/${project._id}`}
                className={`py-2 px-5 rounded-lg font-semibold shadow-md transition-transform duration-200 hover:scale-105 ${
                  mode === "dark"
                    ? "bg-[#3b82f6] text-[#e0e7ff]"
                    : "bg-[#0ea5e9] text-white"
                }`}
              >
                View More 
              </Link>
             
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Project;
