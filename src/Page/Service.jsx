import React, { useContext } from "react";
import {
  Code,
  Search,
  Megaphone,
  Share2,
} from "lucide-react"; // icons from lucide-react
import { ThemeContext } from "../Context/ThemeContext";




const services = [
  {
    key: "web-development",
    title: "Web Development",
    icon: <Code className="w-10 h-10 mb-2 inline-block" />,
    description: (
      <>
        HTML, CSS, Tailwind, JavaScript, React, Node.js, Express.js, MongoDB,
        Firebase — full-stack websites, SPAs, and backend APIs.
      </>
    ),
  },
  {
    key: "seo-optimization",
    title: "SEO Optimization",
    icon: <Search className="w-10 h-10 mb-2 inline-block" />,
    description: (
      <>
        On-Page & Off-Page SEO, Keyword Research, Technical SEO audits and
        fixes to boost organic visibility.
      </>
    ),
  },
  {
    key: "paid-ads",
    title: "Google / Facebook Ads",
    icon: <Megaphone className="w-10 h-10 mb-2 inline-block" />,
    description: (
      <>
        SEM/PPC campaigns across Google (Search, Display, YouTube), Facebook,
        Instagram, LinkedIn, and Twitter: strategy, setup, optimization, and
        tracking.
      </>
    ),
  },
  {
    key: "social-media",
    title: "Social Media Marketing",
    icon: <Share2 className="w-10 h-10 mb-2 inline-block" />,
    description: (
      <>
        Account management for Facebook, Instagram, Twitter, LinkedIn; content
        scheduling, engagement, growth strategy.
      </>
    ),
  },
];

export default function ServicesSection() {
  const { mode } = useContext(ThemeContext);

  const baseBg = mode === "dark" ? "bg-[#0f172a]" : "bg-[#f7f8fc]";
  const baseText = mode === "dark" ? "text-[#e0e7ff]" : "text-[#1e293b]";
  const cardBg = mode === "dark" ? "bg-[#1f2a44]" : "bg-white";
  const cardShadow = "shadow-lg";

  return (
    <section className={`${baseBg} ${baseText} py-16 px-6`} aria-label="Services">
      <div className="max-w-7xl mx-auto">
        <h2
          className={`text-center text-5xl font-bold mb-4`}
          data-testid="services-heading"
        >
          My Services
        </h2>
        <p className="text-center max-w-2xl mx-auto mb-12">
          Web Development, SEO Optimization, Paid Ads (Google/Facebook etc.), and
          Social Media Marketing — tailored to grow your online presence.
        </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.key}
              className={`relative ${cardBg} ${cardShadow} rounded-2xl p-6 flex flex-col h-full transition-transform hover:scale-[1.02]`}
            >
              <div className="mb-3">{s.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{s.title}</h3>
              <p className="flex-1 text-sm leading-relaxed">{s.description}</p>
              <div className="mt-4">
                <button
                  className={`inline-block px-4 py-2 rounded-md font-medium text-sm ${
                    mode === "dark"
                      ? "bg-[#273857] hover:bg-[#324a74]"
                      : "bg-[#eef2f7] hover:bg-[#d7dfe9]"
                  }`}
                  aria-label={`Learn more about ${s.title}`}
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
