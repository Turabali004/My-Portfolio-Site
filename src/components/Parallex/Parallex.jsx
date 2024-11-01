import React, { useRef } from 'react'
import img1 from "/public/mountains.png"
import img2 from "/public/planets.png"
import img3 from "/public/stars.png"

import {motion, useScroll, useTransform} from "framer-motion"


function Parallex({type}) {
  const ref = useRef()

  const {scrollYProgress} = useScroll({
    target: ref,
    offset:["start start", "end start"]
  })

  const yText = useTransform(scrollYProgress, [0,1],["0%", "600%"])
  const yBg = useTransform(scrollYProgress, [0,1],["0%", "100%"])

  return (
    <div ref={ref} className='w-screen h-screen  relative flex justify-center items-center ' style={{background: type==="services" ? "linear-gradient(180deg, #111132, #0c0c1d)" :
        "linear-gradient(180deg, #111132, #0c0c1d)"
     }}>
        <motion.h1 style={{y: yText}} className='text-7xl font-semibold'>{type === "services" ? "My-projects" : "My-Expertise"}</motion.h1>
        <motion.div  className="absolute inset-0 z-30" style={{ backgroundImage: `url(${img1})`, backgroundSize: 'cover', backgroundPosition: 'center'}} />
        <motion.div  className="absolute inset-0 z-20" style={{ backgroundImage: `url(${img2})`, backgroundSize: 'cover', backgroundPosition: 'center'}} />
        <motion.div  className="absolute inset-0 z-10" style={{x: yBg, backgroundImage: `url(${img3})`, backgroundSize: 'cover', backgroundPosition: 'center'}} />
    </div>
  )
}

export default Parallex