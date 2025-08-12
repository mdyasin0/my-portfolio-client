import React, { useContext, useState } from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { ThemeContext } from "../Context/ThemeContext";

export default function ContactSection() {
  const { mode } = useContext(ThemeContext);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const baseBg = mode === "dark" ? "bg-[#0f172a]" : "bg-[#f7f8fc]";
  const baseText = mode === "dark" ? "text-[#e0e7ff]" : "text-[#1e293b]";
  const inputBg = mode === "dark" ? "bg-[#1f2a44]" : "bg-white";
  const inputBorder = mode === "dark" ? "border-[#334166]" : "border-[#d1d9ee]";

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!form.name || !form.email || !form.message) {
    setStatus({ type: "error", msg: "fill all input field" });
    return;
  }

  const emailPattern = /\S+@\S+\.\S+/;
  if (!emailPattern.test(form.email)) {
    setStatus({ type: "error", msg: "give valid email" });
    return;
  }

  setSubmitting(true);
  setStatus(null);

  try {
    const res = await fetch("http://localhost:5000/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (res.ok) {
      setStatus({ type: "success", msg: "succes" });
      setForm({ name: "", email: "", message: "" });
    } else {
      setStatus({ type: "error", msg: data.message || "somthing went wrong" });
    }
  } catch {
    setStatus({ type: "error", msg: "please try letter" });
  } finally {
    setSubmitting(false);
  }
};

  return (
    <section
      className={`${baseBg} ${baseText} py-16 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32`}
      aria-label="Contact"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center text-4xl font-bold mb-4 sm:mb-6">Contact Me</h2>
        <p className="text-center mb-10 max-w-xl mx-auto text-base sm:text-lg">
          Please fill out the form to ask any questions or discuss projects.
        </p>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className={`space-y-6 p-6 rounded-3xl shadow-lg ${
              mode === "dark" ? "bg-[#1f2a44]" : "bg-white"
            }`}
          >
            {status && (
              <div
                className={`text-sm px-4 py-2 rounded ${
                  status.type === "success"
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
                role="alert"
              >
                {status.msg}
              </div>
            )}

            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className={`w-full rounded-lg px-4 py-3 border ${inputBorder} ${inputBg} focus:outline-none focus:ring-2 focus:ring-indigo-400 transition`}
                disabled={submitting}
                autoComplete="name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className={`w-full rounded-lg px-4 py-3 border ${inputBorder} ${inputBg} focus:outline-none focus:ring-2 focus:ring-indigo-400 transition`}
                disabled={submitting}
                autoComplete="email"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your message..."
                rows="5"
                className={`w-full rounded-lg px-4 py-3 border ${inputBorder} ${inputBg} resize-none focus:outline-none focus:ring-2 focus:ring-indigo-400 transition`}
                disabled={submitting}
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full text-center font-semibold rounded-3xl px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white transition disabled:opacity-50"
            >
              {submitting ? "Sending..." : "Send Message"}
            </button>
          </form>

          {/* Social Links */}
          <div
            className={`flex flex-col justify-center items-start p-6 rounded-3xl shadow-lg ${
              mode === "dark" ? "bg-[#1f2a44]" : "bg-white"
            }`}
          >
            <h3 className="text-2xl font-semibold mb-5">Connect on</h3>
            <p className="mb-8 text-base sm:text-lg max-w-md">
              You can follow or message me on the following platforms
            </p>
            <div className="flex flex-wrap gap-8">
              <a
                href="https://facebook.com/"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-lg hover:scale-110 transform transition"
              >
                <FaFacebook className="w-10 h-10 mb-1" />
                <span className="text-sm">Facebook</span>
              </a>
              <a
                href="https://github.com/"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-lg hover:scale-110 transform transition"
              >
                <FaGithub className="w-10 h-10 mb-1" />
                <span className="text-sm">GitHub</span>
              </a>
              <a
                href="https://linkedin.com/"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-lg hover:scale-110 transform transition"
              >
                <FaLinkedin className="w-10 h-10 mb-1" />
                <span className="text-sm">LinkedIn</span>
              </a>
              <a
                href="mailto:youremail@example.com"
                aria-label="Email"
                className="flex flex-col items-center text-lg hover:scale-110 transform transition"
              >
                <MdEmail className="w-10 h-10 mb-1" />
                <span className="text-sm">Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
