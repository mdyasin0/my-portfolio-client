import React, { useContext, useState } from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { ThemeContext } from "../Context/ThemeContext";

// Example ThemeContext; replace with your actual one if different.

export default function ContactSection() {
  const { mode } = useContext(ThemeContext);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null); // success / error / null
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
      setStatus({ type: "error", msg: "সব ফিল্ড পূরণ করুন।" });
      return;
    }
    // Basic email pattern
    const emailPattern = /\S+@\S+\.\S+/;
    if (!emailPattern.test(form.email)) {
      setStatus({ type: "error", msg: "বৈধ ইমেইল দিন।" });
      return;
    }

    setSubmitting(true);
    setStatus(null);
    try {
      // TODO: এখানে API কল বা ইমেইল সার্ভিস integrate করো
      await new Promise((r) => setTimeout(r, 1000)); // placeholder delay

      setStatus({ type: "success", msg: "মেসেজ সফলভাবে পাঠানো হয়েছে!" });
      setForm({ name: "", email: "", message: "" });
    } catch  {
      setStatus({ type: "error", msg: "পাঠাতে সমস্যা হয়েছে, পরে আবার চেষ্টা করুন।" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      className={`${baseBg} ${baseText} py-16 px-6`}
      aria-label="Contact"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-center text-4xl font-bold mb-2">Contact Me</h2>
        <p className="text-center mb-8">
          কোনো প্রশ্ন বা প্রজেক্ট আলোচনা করতে ফর্মটি পূরণ করুন।
        </p>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className={`space-y-4 p-6 rounded-2xl ${mode === "dark" ? "bg-[#1f2a44]" : "bg-white"} shadow-md`}
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
                className={`w-full rounded-lg px-4 py-3 border ${inputBorder} ${inputBg} focus:outline-none focus:ring-2 focus:ring-indigo-400`}
                disabled={submitting}
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="email"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className={`w-full rounded-lg px-4 py-3 border ${inputBorder} ${inputBg} focus:outline-none focus:ring-2 focus:ring-indigo-400`}
                disabled={submitting}
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your message..."
                rows="5"
                className={`w-full rounded-lg px-4 py-3 border ${inputBorder} ${inputBg} resize-none focus:outline-none focus:ring-2 focus:ring-indigo-400`}
                disabled={submitting}
              ></textarea>
            </div>
            <div className="pt-2">
              <button
                type="submit"
                disabled={submitting}
                className="w-full inline-block text-center font-semibold rounded-2xl px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white transition disabled:opacity-50"
              >
                {submitting ? "পাঠানো হচ্ছে..." : "Send Message"}
              </button>
            </div>
          </form>

          {/* Social Links */}
          <div className="flex flex-col justify-center items-start p-6 rounded-2xl shadow-md" style={{ background: mode === "dark" ? "#1f2a44" : "#ffffff" }}>
            <h3 className="text-2xl font-semibold mb-4">Connect on</h3>
            <p className="mb-6">
              আপনি নিচের প্ল্যাটফর্মগুলোতে আমাকে ফলো বা মেসেজ করতে পারেন:
            </p>
            <div className="flex gap-6 mb-6">
              <a
                href="https://facebook.com/"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-lg hover:scale-105 transition"
              >
                <FaFacebook className="w-8 h-8 mb-1" />
                <span className="text-sm">Facebook</span>
              </a>
              <a
                href="https://github.com/"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-lg hover:scale-105 transition"
              >
                <FaGithub className="w-8 h-8 mb-1" />
                <span className="text-sm">GitHub</span>
              </a>
              <a
                href="https://linkedin.com/"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-lg hover:scale-105 transition"
              >
                <FaLinkedin className="w-8 h-8 mb-1" />
                <span className="text-sm">LinkedIn</span>
              </a>
              <a
                href="mailto:youremail@example.com"
                aria-label="Email"
                className="flex flex-col items-center text-lg hover:scale-105 transition"
              >
                <MdEmail className="w-8 h-8 mb-1" />
                <span className="text-sm">Email</span>
              </a>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
