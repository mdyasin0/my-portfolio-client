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
  "Time Management",
  "Critical Thinking",
  "Project Management",
  "Client Communication",
  "Self-Learning & Research Ability",
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
                   Hey there! I’m MD Yasin, a passionate MERN Stack Developer based in Dhaka, Bangladesh.
I have explored and mastered technologies like HTML, CSS, Tailwind CSS, JavaScript, React.js, Firebase, Node.js, Express.js, and MongoDB.
I love turning ideas into fully functional, responsive, and visually appealing web applications — whether it’s an e-commerce platform, a service-based website, or a clean, effective landing page.
My goal is to build scalable, high-performance solutions that not only work seamlessly but also deliver a great user experience.
Let’s collaborate and create something awesome together!
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
    <p className={`mt-1 text-base ${
        mode === "dark" ? "text-white" : "text-black"
      }`}>HTML</p>
  </li>
  <li className='flex flex-col items-center text-blue-700'>
    <IoLogoCss3 />
    <p className={`mt-1 text-base ${
        mode === "dark" ? "text-white" : "text-black"
      }`}>CSS</p>
  </li>
  <li className='flex flex-col items-center text-green-500'>
    <RiTailwindCssFill />
    <p className={`mt-1 text-base ${
        mode === "dark" ? "text-white" : "text-black"
      }`}>Tailwind</p>
  </li>
  <li className='flex flex-col items-center text-yellow-500'>
    <IoLogoJavascript />
    <p className={`mt-1 text-base ${
        mode === "dark" ? "text-white" : "text-black"
      }`}>JavaScript</p>
  </li>
  <li className='flex flex-col items-center text-sky-500'>
    <FaReact />
    <p className={`mt-1 text-base ${
        mode === "dark" ? "text-white" : "text-black"
      }`}>React</p>
  </li>
  <li className='flex flex-col items-center text-red-300'>
    <SiFirebase />
    <p className={`mt-1 text-base ${
        mode === "dark" ? "text-white" : "text-black"
      }`}>Firebase</p>
  </li>
  <li className='flex flex-col items-center text-[#7CB700]'>
    <FaNodeJs />
    <p className={`mt-1 text-base ${
        mode === "dark" ? "text-white" : "text-black"
      }`}>Node.js</p>
  </li>
  <li className='flex flex-col items-center '>
    <SiExpress  className={` ${
        mode === "dark" ? "text-white" : "text-black"
      }`}/>
    <p className={`mt-1 text-base ${
        mode === "dark" ? "text-white" : "text-black"
      }`}>Express.js</p>
  </li>
  <li className='flex flex-col items-center text-[#4DA53F]'>
    <DiMongodb />
    <p className={`mt-1 text-base ${
        mode === "dark" ? "text-white" : "text-black"
      }`}>MongoDB</p>
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
    <p  className={`mt-1 text-base ${
        mode === "dark" ? "text-white" : "text-black"
      }`}>Vite</p>
  </li>
  <li className='flex text-[#4F39F6] flex-col items-center text-center text-4xl'>
    <TbCircleLetterSFilled />
    <p  className={`mt-1 text-base ${
        mode === "dark" ? "text-white" : "text-black"
      }`}>Swiper</p>
  </li>
  <li className='flex flex-col items-center text-center'>
    <img className='w-10' src="src/assets/aos.png" alt="AOS" />
    <p  className={`mt-1 text-base ${
        mode === "dark" ? "text-white" : "text-black"
      }`}>AOS</p>
  </li>
  <li className='flex flex-col items-center text-center text-4xl text-red-600'>
    <FaReact />
    <p className={`mt-1 text-base ${
        mode === "dark" ? "text-white" : "text-black"
      }`}>React Icons</p>
  </li>
  <li className='flex flex-col items-center text-center'>
    <img className='w-10' src="src/assets/lottie.png" alt="Lottie" />
    <p  className={`mt-1 text-base ${
        mode === "dark" ? "text-white" : "text-black"
      }`}>Lottie Player</p>
  </li>
  <li className='flex flex-col items-center text-center'>
    <img className='w-20' src="src/assets/axios.png" alt="Axios" />
    <p  className={`mt-1 text-base ${
        mode === "dark" ? "text-white" : "text-black"
      }`}>Axios</p>
  </li>
  <li className='flex flex-col items-center text-center'>
    <img className='w-20' src="src/assets/sweetalert.png" alt="SweetAlert2" />
    <p  className={`mt-1 text-base ${
        mode === "dark" ? "text-white" : "text-black"
      }`}>SweetAlert2</p>
  </li>
  <li className='flex flex-col items-center text-center'>
    <img className='w-25' src="src/assets/tost.png" alt="Toastify" />
    <p  className={`mt-1 text-base ${
        mode === "dark" ? "text-white" : "text-black"
      }`}>Toastify</p>
  </li>
  <li className='flex flex-col items-center text-center text-4xl'>
<img className='w-18' src="src/assets/famer.png" alt="" />
    <p  className={`mt-1 text-base ${
        mode === "dark" ? "text-white" : "text-black"
      }`}>Framer Motion</p>
  </li>
  <li className='flex flex-col items-center text-black text-center text-4xl'>
    < SiDotenv className={` ${
        mode === "dark" ? "text-white" : "text-black"
      }`}/>
    <p  className={`mt-1 text-base ${
        mode === "dark" ? "text-white" : "text-black"
      }`}>dotenv</p>
  </li>
  <li className='flex flex-col items-center text-center'>
    <img className='w-14' src="src/assets/cors.png" alt="cors" />
    <p  className={`mt-1 text-base ${
        mode === "dark" ? "text-white" : "text-black"
      }`}>cors</p>
  </li>
  <li className='flex flex-col items-center text-center'>
    <img className='w-10' src="src/assets/cookie.png" alt="cookie-parser" />
    <p  className={`mt-1 text-base ${
        mode === "dark" ? "text-white" : "text-black"
      }`}>cookie-parser</p>
  </li>
  <li className='flex flex-col items-center text-center'>
    <img className='w-11' src="src/assets/jwt.png" alt="JWT" />
    <p  className={`mt-1 text-base ${
        mode === "dark" ? "text-white" : "text-black"
      }`}>JWT</p>
  </li>
  <li className='flex flex-col items-center text-center text-4xl text-indigo-600'>
    <FaCcStripe />
    <p  className={`mt-1 text-base ${
        mode === "dark" ? "text-white" : "text-black"
      }`}>Stripe</p>
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