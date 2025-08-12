import React, { useContext} from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { ThemeContext } from "../Context/ThemeContext";

// Example ThemeContext; replace with your real one if different.


export default function Footer() {
  const { mode } = useContext(ThemeContext);
  

  const bg = mode === "dark" ? "bg-[#0f172a]" : "bg-[#1E293B]";
  const text = mode === "dark" ? "text-[#e0e7ff]" : "text-[#e0e7ff]";
  
  

 

  return (
    <footer className={`${bg} ${text}  pt-10 `}>
      <div className="max-w-7xl gap-40  mx-auto px-6 grid  sm:grid-cols-2 lg:grid-cols-4">
        {/* Branding / About */}
        <div className="space-y-3 ">
          <h3 className="text-xl font-bold">YourName</h3>
          <p className="text-sm">
            MERN Stack Developer crafting efficient and scalable web applications to build and enhance your online presence.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="#services" className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
            <li>
              <a href="#portfolio" className="hover:underline">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#about" className="hover:underline">
                About
              </a>
            </li>
          </ul>
        </div>

        
        {/* Social & Contact */}
        <div className="space-y-3">
          <h4 className="text-lg font-semibold mb-2">Connect</h4>
          <div className="flex gap-4 mb-2">
            <a
              href="https://facebook.com/"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-indigo-100"
            >
              <FaFacebook className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-indigo-100"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-indigo-100"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com/"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-indigo-100"
            >
              <FaTwitter className="w-5 h-5" />
            </a>
            <a
              href="mailto:youremail@example.com"
              aria-label="Email"
              className="p-2 rounded-full hover:bg-indigo-100"
            >
              <MdEmail className="w-5 h-5" />
            </a>
          </div>
          
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-10 border-t" style={{ borderColor: mode === "dark" ? "#334166" : "#d1d9ee" }}>
        <div className="    text-center text-sm">
          <p className="py-3">&copy; {new Date().getFullYear()} YourName. All rights reserved.</p>
          
        </div>
      </div>
    </footer>
  );
}
