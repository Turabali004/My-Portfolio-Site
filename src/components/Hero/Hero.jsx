"use client";

import React from "react";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
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

export function HeroThree() {
  return (
    <div className="w-full rounded-lg shadow  dark:border-gray-700">
      <div className="  px-6 pt-14 lg:px-8 ">
        <div className="relative mx-auto max-w-2xl py-24">
          <div className="absolute inset-x-0 -top-[4rem] -z-10 transform-gpu overflow-hidden blur-3xl md:-top-[10rem]">
            <svg
              className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
              viewBox="0 0 1155 678"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
                fillOpacity=".3"
                d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
              />
              <defs>
                <linearGradient
                  id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                  x1="1155.49"
                  x2="-78.208"
                  y1=".177"
                  y2="474.645"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#9089FC" />
                  <stop offset={1} stopColor="#FF80B5" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              <div>
                <span>Hey!</span>
                <br></br>
                I'm Turab_Ali
              </div>
            </h1>

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
            <div className="mt-10 flex items-center justify-center gap-x-2">
              <button
                type="button"
                className="rounded-md bg-[#190b1f] px-3 py-2 text-sm font-semibold text-[#fff] shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                <a href="https://github.com/Turabali004">GitHub_Repo</a>
              </button>
              <button
                type="button"
                className="rounded-md border border-white px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Linkedin_Pro
              </button>
            </div>
          </div>
        </div>
        <div className="md:hidden max-w-[1300px] mx-auto p-6 md:grid-cols-2 gap-8 place-items-center ">
          <div className=" bg-white bg-opacity-10 backdrop-blue-lg rounded-lg p-6 flex flex-wrap gap-4 justify-center text-4xl">
            <DiHtml5  className="text-orange-600"></DiHtml5>
            <DiJavascript1 className="text-yellow-600"></DiJavascript1>
            <DiReact className="text-blue-600"></DiReact>
            <DiNodejsSmall className="text-green-600"></DiNodejsSmall>
            <DiCss3 className="text-blue-500"></DiCss3>
          </div>
        </div>
      </div>
      
      <hr className='h-px my-8 border-0 dark:bg-gray-600'/>
    </div>
  );
}
