import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

const projects = [
  {
    name: "Event Explorer",
    features: ["Event browsing", "User registration", "Map integration"],
    technologies: ["React", "TailwindCSS", "Firebase"],
    image: "src/assets/event-explorer.png",
    live: "https://event-explorer.live",
    github: "https://github.com/yourname/event-explorer"
  },
  {
    name: "Roommate Finder",
    features: ["Roommate listing", "Filters", "Messaging"],
    technologies: ["React", "Node.js", "MongoDB"],
    image: "src/assets/roommate-finder.png",
    live: "https://roommate-finder.live",
    github: "https://github.com/yourname/roommate-finder"
  },
  {
    name: "Historical Artifacts Tracker",
    features: ["Artifact details", "Admin dashboard", "Image uploads"],
    technologies: ["React", "Express.js", "MongoDB"],
    image: "src/assets/artifacts-tracker.png",
    live: "https://artifacts-tracker.live",
    github: "https://github.com/yourname/artifacts-tracker"
  },
  {
    name: "Coin Crafter",
    features: ["Task marketplace", "Wallet system", "Leaderboard"],
    technologies: ["React", "Tailwind", "Firebase Auth"],
    image: "src/assets/coin-crafter.png",
    live: "https://coin-crafter.live",
    github: "https://github.com/yourname/coin-crafter"
  }
];

const Project = () => {
  const { mode } = useContext(ThemeContext);

  return (
    <section
      className={`max-w-6xl mx-auto px-4 py-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 ${
        mode === "dark"
          ? "bg-[#0f172a] text-[#e0e7ff]"
          : "bg-[#f7f8fc] text-[#1e293b]"
      }`}
    >
      {projects.map((project, index) => (
        <div
          key={index}
          className={`rounded-lg p-6 shadow-md ${
            mode === "dark" ? "bg-[#1e293b] shadow-black/30" : "bg-white shadow-[rgba(0,0,0,0.05)]"
          }`}
        >
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
          <ul className="list-disc list-inside text-sm mb-3">
            {project.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
          <p className="text-sm font-semibold mb-3">
            <span className="underline">Technologies:</span> {project.technologies.join(", ")}
          </p>
          <div className="flex gap-4">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className={`py-2 px-5 rounded-lg font-semibold shadow-md transition-transform duration-200 hover:scale-105 ${
                mode === "dark"
                  ? "bg-[#3b82f6] text-[#e0e7ff]"
                  : "bg-[#0ea5e9] text-white"
              }`}
            >
              Live Site
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`py-2 px-5 rounded-lg font-semibold shadow-md transition-transform duration-200 hover:scale-105 ${
                mode === "dark"
                  ? "bg-[#3b82f6] text-[#e0e7ff]"
                  : "bg-[#0ea5e9] text-white"
              }`}
            >
              GitHub
            </a>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Project;