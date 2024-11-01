import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const skills = [
  { name: 'Design', level: 85 },
  { name: 'HTML5', level: 90 },
  { name: 'CSS3', level: 88 },
  { name: 'WordPress', level: 82 },
  { name: 'Bootstrap', level: 85 },
]

const BioSection = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const skillBarVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: { duration: 1, ease: 'easeOut' },
    }),
  }

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="py-16 px-4 md:px-8 max-w-7xl mx-auto bg-gray-100"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div variants={itemVariants} className="relative">
          <div className="aspect-w-4 aspect-h-5 rounded-lg overflow-hidden shadow-xl">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-sDMDx7xStG6F4lIwN7nHEgSFivE55e.png"
              alt="Professional working on laptop"
              className="object-cover w-full h-full"
            />
          </div>
        </motion.div>

        <div className="space-y-8">
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl font-bold mb-6 text-gray-800">My Bio</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
                blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language
                ocean.
              </p>
              <p>
                A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a
                paradisematic country, in which roasted parts of sentences fly into your mouth.
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Skills</h3>
            {skills.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium text-gray-700">{skill.name}</span>
                  <span className="text-gray-500">{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-green-500 rounded-full"
                    variants={skillBarVariants}
                    custom={skill.level}
                  />
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-6">
            <button className="px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors">
              HIRE ME
            </button>
            <button className="px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors">
              DOWNLOAD CV
            </button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default BioSection