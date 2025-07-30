import React, { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext';
import { FaCcStripe, FaFacebookSquare, FaHtml5, FaInstagram, FaMailchimp, FaNodeJs, FaReact } from 'react-icons/fa';
import { IoLogoCss3, IoLogoJavascript } from 'react-icons/io';
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiCanva, SiDotenv, SiExpress, SiFirebase, SiGoogleanalytics, SiGooglesearchconsole, SiVite } from 'react-icons/si';
import { DiMongodb } from 'react-icons/di';
import { TbBrandFramerMotion, TbCircleLetterSFilled } from 'react-icons/tb';
import { CiLinkedin } from 'react-icons/ci';
import { FaSquareXTwitter } from 'react-icons/fa6';
const softSkills = [
  "Problem-Solving",
  "Communication Skills",
  "Team Collaboration",
  "Time Management",
  "Creativity & Design Thinking",
  "Adaptability",
  "Critical Thinking",
  "Attention to Detail",
  "Project Management",
  "Client Communication",
  "Self-Learning & Research Ability",
  "Analytical Skills",
  "SEO Strategy & Planning (for marketing)",
  "Campaign Optimization (for marketing)",
  "Content Strategy Understanding (for both dev & marketing)"
];


const About1 = () => {
    const { mode } = useContext(ThemeContext);
    return (
        <div className={` py-20 ${
                mode === "dark"
                  ? "bg-[#1e293b]  text-[#e0e7ff]"
                  : "bg-[#f1f5f9] text-[#1e293b] "
              }`}>
           <div className="flex max-w-5xl  mx-auto gap-10 ">
             <div >
                <div className="relative w-70 h-70">
          <div className="w-full h-full rounded-full bg-[#F8B561]"></div>
          <img
            src="src/assets/Untitled_design-removebg-preview.png"
            alt="MD Yasin profile"
            className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-72 h-72 object-cover rounded-full"
          />
        </div>
            </div>

            <div>
                <h1 className='text-3xl font-bold mb-10 '>About</h1>
                <p>
                    Hey there! I’m MD Yasin, a passionate full-stack web developer and digital marketing enthusiast based in Dhaka, Bangladesh. <br />
                    Over the past year, I’ve been diving deep into the world of web development, working with technologies like HTML, CSS, Tailwind CSS, JavaScript, React.js, Firebase, Node.js, Express.js, and MongoDB. I enjoy turning ideas into real, responsive websites — whether it’s an e-commerce platform, a service-based website, or a clean, effective landing page. <br />
                     But that’s not all. I also wear the hat of a Digital Marketer, helping businesses grow online through strategic efforts in: <br /> 📈 SEO – including On-Page, Off-Page, Keyword Research & Technical SEO <br />🎯 Paid Ads – on Facebook, Instagram, Google, LinkedIn & Twitter <br />📧 Email Marketing – from cold outreach to automation and campaign management <br /> 📱 Social Media Management – keeping brands active and engaging on major platforms <br /> Whether I’m building a full-stack app or running a high-performing ad campaign, my goal is always the same: create meaningful, impactful results. <br /> <br /> Let’s collaborate and build something awesome together!
                </p>
            </div>
           </div>
           {/* tecknology stack */}

           <div>
            <div className='max-w-5xl mx-auto pt-10'>
              <h1 className={`border-b  pb-5 font-bold text-3xl  ${
                mode === "dark"
                  ? " border-white  "
                  : "border-black"
              }`}> Core Technology</h1>

             <ul className='flex flex-wrap  text-4xl pt-5 gap-8'>
  <li className='flex flex-col items-center text-red-600'>
    <FaHtml5 />
    <p className='text-base text-black dark:text-white mt-1'>HTML</p>
  </li>
  <li className='flex flex-col items-center text-blue-700'>
    <IoLogoCss3 />
    <p className='text-base text-black dark:text-white mt-1'>CSS</p>
  </li>
  <li className='flex flex-col items-center text-green-500'>
    <RiTailwindCssFill />
    <p className='text-base text-black dark:text-white mt-1'>Tailwind</p>
  </li>
  <li className='flex flex-col items-center text-yellow-500'>
    <IoLogoJavascript />
    <p className='text-base text-black dark:text-white mt-1'>JavaScript</p>
  </li>
  <li className='flex flex-col items-center text-sky-500'>
    <FaReact />
    <p className='text-base text-black dark:text-white mt-1'>React</p>
  </li>
  <li className='flex flex-col items-center text-red-300'>
    <SiFirebase />
    <p className='text-base text-black dark:text-white mt-1'>Firebase</p>
  </li>
  <li className='flex flex-col items-center text-[#7CB700]'>
    <FaNodeJs />
    <p className='text-base text-black dark:text-white mt-1'>Node.js</p>
  </li>
  <li className='flex flex-col items-center text-[#303030]'>
    <SiExpress />
    <p className='text-base text-black dark:text-white mt-1'>Express.js</p>
  </li>
  <li className='flex flex-col items-center text-[#4DA53F]'>
    <DiMongodb />
    <p className='text-base text-black dark:text-white mt-1'>MongoDB</p>
  </li>
</ul>

             
            </div>
            <div className='max-w-5xl mx-auto pt-10'>

              <h1 className={`border-b  pb-5 font-bold text-3xl  ${
                mode === "dark"
                  ? " border-white  "
                  : "border-black"
              }`}>Support Tools & Packages</h1>

             <ul className='flex flex-wrap justify-center items-center gap-8 pt-5'>
  <li className='flex flex-col items-center text-center text-4xl'>
    <img className='w-15' src="src/assets/vite.png" alt="" />
    <p className='text-sm mt-2'>Vite</p>
  </li>
  <li className='flex text-[#4F39F6] flex-col items-center text-center text-4xl'>
    <TbCircleLetterSFilled />
    <p className='text-sm mt-2 text-black'>Swiper</p>
  </li>
  <li className='flex flex-col items-center text-center'>
    <img className='w-10' src="src/assets/aos.png" alt="AOS" />
    <p className='text-sm mt-2'>AOS</p>
  </li>
  <li className='flex flex-col items-center text-center text-4xl text-red-600'>
    <FaReact />
    <p className='text-sm mt-2 text-black'>React Icons</p>
  </li>
  <li className='flex flex-col items-center text-center'>
    <img className='w-10' src="src/assets/lottie.png" alt="Lottie" />
    <p className='text-sm mt-2'>Lottie Player</p>
  </li>
  <li className='flex flex-col items-center text-center'>
    <img className='w-20' src="src/assets/axios.png" alt="Axios" />
    <p className='text-sm mt-2'>Axios</p>
  </li>
  <li className='flex flex-col items-center text-center'>
    <img className='w-20' src="src/assets/sweetalert.png" alt="SweetAlert2" />
    <p className='text-sm mt-2'>SweetAlert2</p>
  </li>
  <li className='flex flex-col items-center text-center'>
    <img className='w-25' src="src/assets/tost.png" alt="Toastify" />
    <p className='text-sm mt-2'>Toastify</p>
  </li>
  <li className='flex flex-col items-center text-center text-4xl'>
<img className='w-18' src="src/assets/famer.png" alt="" />
    <p className='text-sm mt-2'>Framer Motion</p>
  </li>
  <li className='flex flex-col items-center text-black text-center text-4xl'>
    <SiDotenv />
    <p className='text-sm mt-2'>dotenv</p>
  </li>
  <li className='flex flex-col items-center text-center'>
    <img className='w-14' src="src/assets/cors.png" alt="cors" />
    <p className='text-sm mt-2'>cors</p>
  </li>
  <li className='flex flex-col items-center text-center'>
    <img className='w-10' src="src/assets/cookie.png" alt="cookie-parser" />
    <p className='text-sm mt-2'>cookie-parser</p>
  </li>
  <li className='flex flex-col items-center text-center'>
    <img className='w-11' src="src/assets/jwt.png" alt="JWT" />
    <p className='text-sm mt-2'>JWT</p>
  </li>
  <li className='flex flex-col items-center text-center text-4xl text-indigo-600'>
    <FaCcStripe />
    <p className='text-sm mt-2'>Stripe</p>
  </li>
</ul>

            </div>
            <div className='max-w-5xl mx-auto pt-10'>
               <h1 className={`border-b  pb-5 font-bold text-3xl  ${
                mode === "dark"
                  ? " border-white  "
                  : "border-black"
              }`}> Digital Marketing Technology</h1>

              <ul className="flex flex-wrap justify-center items-center gap-10 pt-5">
  <li className="flex flex-col items-center text-center text-2xl">
    <img className="w-10" src="src/assets/google.png" alt="Google Ads" />
    <p className="text-sm mt-2 text-black ">Google Ads</p>
  </li>
  <li className="flex flex-col items-center text-center text-blue-700 text-2xl">
    <FaFacebookSquare />
    <p className="text-sm mt-2 text-black ">Facebook Ads</p>
  </li>
  <li className="flex flex-col items-center text-center text-red-600 text-2xl">
    <FaInstagram />
    <p className="text-sm mt-2 text-black ">Instagram Ads</p>
  </li>
  <li className="flex flex-col items-center text-center text-blue-700 text-2xl">
    <CiLinkedin />
    <p className="text-sm mt-2 text-black ">LinkedIn Ads</p>
  </li>
  <li className="flex flex-col items-center text-center text-2xl">
    <FaSquareXTwitter />
    <p className="text-sm mt-2 text-black ">Twitter Ads</p>
  </li>
  <li className="flex flex-col items-center text-center text-green-500 text-2xl">
    <SiGoogleanalytics />
    <p className="text-sm mt-2 text-black ">Google Analytics</p>
  </li>
  <li className="flex flex-col items-center text-center text-sky-700 text-2xl">
    <SiGooglesearchconsole />
    <p className="text-sm mt-2 text-black ">Search Console</p>
  </li>
  <li className="flex flex-col items-center text-center text-2xl">
    <FaMailchimp />
    <p className="text-sm mt-2 text-black ">Mailchimp</p>
  </li>
  <li className="flex flex-col items-center text-center text-2xl text-[#07B6C7]">
    <SiCanva />
    <p className="text-sm mt-2 text-black ">Canva</p>
  </li>
</ul>

            </div>
            <div>
               <section
      className={`py-10 px-4 max-w-5xl mx-auto ${
        mode === "dark" ? "bg-[#1e293b] text-[#e0e7ff]" : "bg-[#f1f5f9] text-[#1e293b]"
      }`}
    >
      <h2
        className={`border-b pb-5 font-bold text-3xl mb-6 ${
          mode === "dark" ? "border-white" : "border-black"
        }`}
      >
        Soft Skills
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {softSkills.map((skill, index) => (
          <div
            key={index}
            className={`rounded-xl px-4 py-3 shadow-md transition-all duration-300 ${
              mode === "dark"
                ? "bg-[#334155] text-[#e0e7ff] shadow-black/30"
                : "bg-[#fef9c3] text-[#1e293b] shadow-black/5"
            }`}
          >
             {skill}
          </div>
        ))}
      </div>
    </section>
            </div>
           </div>
        </div>
    );
};

export default About1;