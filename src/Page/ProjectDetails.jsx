import React, { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router";
import { ThemeContext } from "../Context/ThemeContext";

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

  if (!project) return <p>Loading...</p>;

  return (
    <div
      className={`${
        mode === "dark" ? "bg-[#0f172a] text-white" : "bg-yellow-50 text-black"
      } p-6`}
    >
      <div className="flex  gap-10">
        <img
          src={project.image_link}
          alt={project.title}
          className="w-full max-w-2xl my-4"
        />
        <div>
          <p className="font-bold text-3xl ">{project.title}</p>
          <div className="flex gap-10 mt-5">
            <Link
            to={project.live_link}
            className={`py-2 px-5 rounded-lg font-semibold shadow-md transition-transform duration-200 hover:scale-105 ${
              mode === "dark"
                ? "bg-[#3b82f6] text-[#e0e7ff]"
                : "bg-[#0ea5e9] text-white"
            }`}
          >
            Visit site
          </Link>
          <Link
          to={project.github_link}
            className={`py-2 px-5 rounded-lg font-semibold shadow-md transition-transform duration-200 hover:scale-105 ${
              mode === "dark"
                ? "bg-[#3b82f6] text-[#e0e7ff]"
                : "bg-[#0ea5e9] text-white"
            }`}
          >
            github
          </Link>
          </div>
          <div className="mt-6">
  <h2 className="text-2xl font-bold mb-2">Technology used</h2>

  {/* Frontend */}
  <div className="mb-4">
    <h3 className="text-xl font-semibold">Frontend</h3>
    <ul className=" flex flex-wrap gap-2  text-center items-center">
      {project.technology_stack?.frontend?.map((tech, index) => (
        <li className={`py-1 mt-5 px-2 rounded-lg font-semibold shadow-md transition-transform duration-200 hover:scale-105 ${
                  mode === "dark"
                    ? "bg-[#3b82f6] text-[#e0e7ff]"
                    : "bg-[#0ea5e9] text-white"
                }`} key={index}>{tech}</li>
      ))}
    </ul>
  </div>

  {/* Backend */}
  <div>
    <h3 className="text-xl font-semibold">Backend</h3>
    <ul className="flex flex-wrap gap-5 ">
      {project.technology_stack?.backend?.map((tech, index) => (
        <li className={`py-1 mt-5 px-2 rounded-lg font-semibold shadow-md transition-transform duration-200 hover:scale-105 ${
                  mode === "dark"
                    ? "bg-[#3b82f6] text-[#e0e7ff]"
                    : "bg-[#0ea5e9] text-white"
                }`} key={index}>{tech}</li>
      ))}
    </ul>
  </div>
</div>

        </div>
      </div>
      <div className="mt-10 ">
        <p className="font-bold text-2xl">Project Purpose / Description</p>
        <p>
            {project.description}
        </p>
      </div>
      <div className="mt-6">
  <h2 className="text-2xl font-bold mb-2">Features</h2>
  <ul className="list-disc list-inside">
    {project.features.map((feature, index) => (
      <li key={index}>{feature}</li>
    ))}
  </ul>
</div>
<div className="mt-6">
  <h2 className="text-2xl font-bold mb-2">Challenges Faced</h2>
  <ul className="list-disc list-inside">
    {project.challenges.map((challenge, index) => (
      <li key={index}>{challenge}</li>
    ))}
  </ul>
</div>

    </div>
  );
};

export default ProjectDetails;
