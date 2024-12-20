import {
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiHtml5,
  DiCss3,
} from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { RiTailwindCssLine } from "react-icons/ri";
import { motion } from "framer-motion"

import img1 from "../../assets/pic1.png"
import img2 from "../../assets/pic2.png"
import img3 from "../../assets/pic3.jpg";

function About() {
  const variants = {
    visible: { opacity: 1, transition: { duration: 1, staggerChildren: .2 } },
    hidden: { opacity: 0 },
    buttonEffect: {
      opacity: .1,
      y: 5,
      transition: { duration: 1, repeat: Infinity, repeatType: "reverse" }
    },
    htmlEffect: {
      opacity: 0.2,
      y: 0,
      transition: { duration: 3, repeat: Infinity, }
    },
    otherIconsEffect: {
      opacity: 0.3,
      y: 5,
      transition: { duration: 1, repeat: Infinity, repeatType: "reverse" }
    },
    jsEffect: {
      opacity: 0.4,
      y: 4,
      transition: { duration: 1, repeat: Infinity, repeatType: "reverse" }
    },
    reactEffect: {
      opacity: 0.5,
      y: 6,
      transition: { duration: 1, repeat: Infinity, repeatType: "reverse" }
    },
    nodeEffect: {
      opacity: 0.6,
      y: 8,
      transition: { duration: 1, repeat: Infinity, repeatType: "reverse" }
    },
    cssEffect: {
      opacity: 0.7,
      y: 10,
      transition: { duration: 1, repeat: Infinity, repeatType: "reverse" }
    },
    imgEffect:{
      opacity: 1,
      y: 5,
      transition: { duration: 1, repeat: Infinity, repeatType: "reverse" }
    }
  }
  return (
    <>
      <div className="max-w-[1400px] mx-auto py-80 px-6 grid md:grid-cols-2 gap-24  ">
        <div className="">
          <div className="w-full h-full bg-gradient-to-r from-teal-900 to-[#190b1f] rounded-lg group-hover:opacity-100 transition duration-300">
            <div
              className=" w-full  p-4 bg-white 
          bg-opacity-10
          backdrop-blur-lg
            rounded-lg"
            >
              <img src={img1} className="object-cover  " />
            </div>
          </div>
        </div>
        <div className=" max-w-[1300px] mx-auto p-6 md:grid-cols-2 gap-8 place-items-center ">
          <h1 className="text-white font-bold text-4xl py-3">Experts</h1>
          <div className="text-white font-semibold py-3 px-2">
            I specialize in creating dynamic and user-friendly web applications
            using a versatile skill set that includes React, Redux, JavaScript
            (including TypeScript), and MySQL. With a keen eye for design, I
            leverage Tailwind CSS alongside HTML and CSS to craft responsive and
            visually appealing interfaces. My expertise in these technologies
            allows me to efficiently build scalable solutions that meet both
            functional requirements and aesthetic standards, ensuring a seamless
            user experience across various platforms.
          </div>
          <motion.div variants={variants} initial="hidden" animate="visible" className="hidden   p-6 sm:flex flex-wrap gap-8 justify-center text-4xl">
            <motion.div variants={variants} animate="htmlEffect" ><DiHtml5 className="text-orange-600"></DiHtml5></motion.div>
            <motion.div variants={variants} animate="otherIconsEffect"><DiCss3 className="text-blue-500 cursor-pointer"></DiCss3></motion.div>
            <motion.div variants={variants} animate="otherIconsEffect"><DiJavascript1 className="text-yellow-600 cursor-pointer"></DiJavascript1></motion.div>
            <motion.div variants={variants} animate="otherIconsEffect"><SiTypescript className="text-blue-400 cursor-pointer" /></motion.div>
            <motion.div variants={variants} animate="otherIconsEffect"><DiReact className="text-blue-600 cursor-pointer"></DiReact></motion.div>
            <motion.div variants={variants} animate="otherIconsEffect"><DiNodejsSmall className="text-green-600 cursor-pointer"></DiNodejsSmall></motion.div>
            <motion.div variants={variants} animate="otherIconsEffect"><SiMysql className="text-blue-800 cursor-pointer" /></motion.div>
          </motion.div>
          <div className=" bg-white bg-opacity-10 backdrop-blue-lg rounded-lg p-6 sm:hidden my-8 flex flex-wrap gap-4 justify-center text-4xl">
            <DiHtml5 className="text-orange-600"></DiHtml5>
            <DiJavascript1 className="text-yellow-600"></DiJavascript1>
            <DiReact className="text-blue-600"></DiReact>
            <DiNodejsSmall className="text-green-600"></DiNodejsSmall>
            <DiCss3 className="text-blue-500"></DiCss3>
          </div>
        </div>


        <div className=" max-w-[1300px] mx-auto md:grid-cols-2 gap-8 place-items-center ">
          <h1 className="text-white font-bold text-4xl py-3">Frontend</h1>
          <div className="text-white font-semibold py-3 px-2">
            Specializing in frontend development with expertise in React, Redux,
            TypeScript, and Tailwind CSS. Proficient in crafting responsive
            layouts and intuitive user interfaces using HTML and CSS to deliver
            seamless web experiences. Experienced in optimizing frontend
            performance and usability to ensure high-quality applications that
            meet both user needs and business goals.
          </div>
          <div className="hidden   p-6 sm:flex flex-wrap gap-8 justify-center text-4xl">
            <DiHtml5 className="text-orange-600"></DiHtml5>
            <DiCss3 className="text-blue-500"></DiCss3>
            <DiJavascript1 className="text-yellow-600"></DiJavascript1>
            <SiTypescript className="text-blue-400" />
            <DiReact className="text-blue-600"></DiReact>
          </div>

          <div className=" bg-white bg-opacity-10 backdrop-blue-lg rounded-lg p-6 sm:hidden my-8 flex flex-wrap gap-4 justify-center text-4xl">
            <DiHtml5 className="text-orange-600"></DiHtml5>
            <DiJavascript1 className="text-yellow-600"></DiJavascript1>
            <SiTypescript className="text-blue-400" />
            <DiReact className="text-blue-600"></DiReact>
            <RiTailwindCssLine className="text-blue-600" />
            <DiCss3 className="text-blue-500"></DiCss3>
          </div>
        </div>
        <div className="relative">
          <div className="w-full h-96 p-4 bg-gradient-to-r from-teal-900 to-[#190b1f] rounded-lg group-hover:opacity-100 transition duration-300">
            <div
              className=" w-full h-full bg-white 
          bg-opacity-10
          backdrop-blur-lg
            rounded-lg"
            >
              <motion.img className="absolute bottom-0" src={img2} variants={variants} animate="imgEffect" />
            </div>
          </div>
        </div>


        <div className="">
          <div className="w-full h-full bg-gradient-to-r from-teal-900 to-[#190b1f] rounded-lg group-hover:opacity-100 transition duration-300">
            <div
              className=" w-full p-4 bg-white 
          bg-opacity-10
          backdrop-blur-lg
            rounded-lg"
            >
              <img src={img3} />
            </div>
          </div>
        </div>
        <div className=" max-w-[1300px] mx-auto md:grid-cols-2 gap-8 place-items-center ">
          <h1 className="text-white font-bold text-4xl py-3">Full Stack</h1>
          <div className="text-white font-semibold py-3 px-2">
            "I specialize in backend development with MySQL, Node.js, and
            Express.js, adept at designing and optimizing relational databases,
            crafting efficient API endpoints, and ensuring seamless data
            management. My expertise includes schema design, query optimization,
            and building RESTful APIs that facilitate robust communication between
            frontend and backend systems, delivering scalable and secure web
            applications."
          </div>
          <div className="hidden   p-6 sm:flex flex-wrap gap-8 justify-center text-4xl">
            <motion.div variants={variants} animate="htmlEffect" >  <DiHtml5 className="text-orange-600"></DiHtml5></motion.div>
            <motion.div variants={variants} animate="otherIconsEffect" >  <DiCss3 className="text-blue-500"></DiCss3></motion.div>
            <motion.div variants={variants} animate="otherIconsEffect" >  <DiJavascript1 className="text-yellow-600"></DiJavascript1></motion.div>
            <motion.div variants={variants} animate="otherIconsEffect" >  <SiTypescript className="text-blue-400" /></motion.div>          
            <motion.div variants={variants} animate="otherIconsEffect" >  <DiReact className="text-blue-600"></DiReact></motion.div>
          </div>

          <div className=" bg-white bg-opacity-10 backdrop-blue-lg rounded-lg p-6 sm:hidden my-8 flex flex-wrap gap-4 justify-center text-4xl">
            <DiHtml5 className="text-orange-600"></DiHtml5>
            <DiJavascript1 className="text-yellow-600"></DiJavascript1>
            <SiTypescript className="text-blue-400" />
            <DiReact className="text-blue-600"></DiReact>
            <RiTailwindCssLine className="text-blue-600" />
            <DiCss3 className="text-blue-500"></DiCss3>
          </div>
        </div>



      </div>
      <hr className='h-px my-8 border-0 dark:bg-gray-400' />


    </>
  );
}

export default About;
