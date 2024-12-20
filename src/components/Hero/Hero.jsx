"use client";

import React from "react";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiHtml5,
  DiCss3,
} from "react-icons/di";
const menuItems = [
  {
    name: "Home",
    href: "#",
  },
  {
    name: "About",
    href: "#",
  },
  {
    name: "Contact",
    href: "#",
  },
];

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
}
const itemVariants = {
  visible: { opacity: 1, transition: { duration: 3 } },
  hidden: { opacity: 0 },

};
const sliderVariants = {
  initial: { x: 0 },
  animate: { x: "-320%", transition: { duration: 25, repeat: Infinity, repeatType: "mirror" } },

}

export function HeroThree() {
  return (
    <div className="w-screen h-auto relative  rounded-lg shadow  dark:border-gray-700 z-50">
      <div className="  px-6 pt-24 lg:px-8 flex justify-center">
        <div className="relative mx-auto max-w-2xl py-24">
          
          {/* Main Text Effect */}
          <motion.div className="relative text-left pt-24" initial="hidden" animate="visible" variants={variants}>
            <motion.h1 variants={variants} className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              <motion.div className="leading-tight" variants={variants}>
                <motion.span>Hey <motion.span >!</motion.span> </motion.span>
                <br></br>
                <motion.span className="cursor-pointer" variants={itemVariants}  >I'm Turab_<motion.span variants={variants} animate="otherIconsEffect">Ali</motion.span></motion.span>
              </motion.div>
            </motion.h1>

            <TypeAnimation
              className="text-[#e1e0e0] font-bold"
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "My Expertise is",
                2000, // wait 1s before replacing "Mice" with "Hamsters"
                "Frontend",
                1000,
                "React+Tailwindcss",
                1000,
                "Typescript+Javascript",
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "2em", display: "inline-block" }}
              repeat={Infinity}
            />

            <p className="mt-6 text-lg leading-8 text-white">
              "Transforming ideas into seamless user experiences through
              innovative frontend development. Empowering digital solutions with
              creativity and precision."
            </p>

            <div className="w-full absolute mt-10 flex items-start justify-start gap-x-2">
              <button
                type="button"
                className="rounded-md bg-[#190b1f] px-3 py-2 text-sm font-semibold text-[#fff] shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                <a href="https://github.com/Turabali004">GitHub_Repo</a>
              </button>
              <motion.button
                variants={variants}
                animate="buttonEffect"
                type="button"
                className="rounded-md border border-white px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                <a href="https://github.com/Turabali004">Linkedin_Prof</a>

              </motion.button>
            </div>
          </motion.div>
        </div>
        <div className="md:hidden max-w-[1300px] mx-auto p-6 md:grid-cols-2 gap-8 place-items-center ">
          <div className=" bg-white bg-opacity-10 backdrop-blue-lg rounded-lg p-6 flex flex-wrap gap-4 justify-center text-4xl">
            <motion.div className="flex">
              <motion.div variants={variants} animate="" className="div">
                <DiHtml5 className="text-orange-600" ></DiHtml5>
              </motion.div>
              <motion.div variants={variants} animate="otherIconsEffect" className="div">
                <DiJavascript1 className="text-yellow-600" variants={variants}></DiJavascript1>
              </motion.div>
              <motion.div variants={variants} animate="otherIconsEffect" className="div">
                <DiReact className="text-blue-600" variants={variants}></DiReact>
              </motion.div>
              <motion.div variants={variants} animate="otherIconsEffect" className="div">
                <DiNodejsSmall className="text-green-600" variants={variants}></DiNodejsSmall>
              </motion.div>
              <motion.div variants={variants} animate="otherIconsEffect" className="div">
                <DiCss3 className="text-blue-500" variants={variants}></DiCss3>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* hero-image */}
        <motion.div className="div h-screen">
        <img src="/public/hero.png" className="h-full" alt="" />
        </motion.div>

        

      </div>
      {/* background-text */}
      <motion.div className="w-full h-[40%] hidden md:flex absolute bottom-[-120px] overflow-hidden cursor-pointer">
          <motion.h1 className="w-1/2 h-full py-24 font-bold text-4xl  tracking-tight sm:text-[300px] whitespace-nowrap text-[#ffffff09]" variants={sliderVariants} initial="initial" animate="animate" >
            Frontend designer & Shopify Expert
          </motion.h1>
        </motion.div>

      <hr className='h-px my-8 border-0 absolute dark:bg-gray-600' />
    </div>
  );
}
