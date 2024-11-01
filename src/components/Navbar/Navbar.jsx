import { useState } from "react";
import { Link } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import { GiCrossedSabres, GiDuffelBag } from "react-icons/gi";
import { FaXTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa6";
import { animate, motion, useScroll  } from "framer-motion";
function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { scrollYProgress } = useScroll();
  // navbar items
  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
    { name: "Services", link: "/services" },
  ]

  const menuToggle = () => {
    setToggleMenu(!toggleMenu);
  };
  const variants = {
    visible: { opacity: 1, transition: { duration: 1,staggerChildren: .2 } },
    hidden: { opacity: 0 },
  }
  const items = {
    visible: {
      opacity: 1, x: 0, transition: {
        duration: 1, when: "beforeChildren",
        staggerChildren: 0.3,
      }
    },
    hidden: {
      opacity: 0, x: -100, transition: {
        when: "afterChildren",
      },
    },
  }



  return (
    <nav className="w-full fixed top-0 left-0 bg-opacity-70 backdrop-blur-md z-[1000]">
      <div className="max-w-[1300px] mx-auto text-white px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="">
            <motion.div className="text-2xl font-semibold cursor-pointer" initial="hidden" animate="visible" whileHover={{scale:1.1}} variants={variants}>Turab.Ali</motion.div>
          </div>


          <motion.ul className="hidden sm:flex flex-wrap flex-row gap-4"
            // initial={{opacity:0, x:-100}} animate={{opacity:1, x:0}} transition={{duration:1,}}
            initial="hidden"
            animate="visible"
            variants={variants}
          >
            {/* <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="hover:bg-gray-700 transition ease-in-out hover:-translate-y-1 duration-200 px-3 py-2 hover:scale-110 rounded-md text-sm font-medium">
                Home
              </Link>
              <Link to="/about" className="hover:bg-gray-700 transition ease-in-out hover:-translate-y-1 duration-200 px-3 py-2 rounded-md text-sm font-medium">
                About
              </Link>
              <Link to="/contact" className="hover:bg-gray-700 transition ease-in-out hover:-translate-y-1 duration-200 px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </Link>
              <Link to="/services" className="hover:bg-gray-700 transition ease-in-out hover:-translate-y-1 duration-200 px-3 py-2 rounded-md text-sm font-medium">
                Services
              </Link>
            </div> */}
            {navItems.map((item, index) => (
              <motion.li to={item.link} key={index} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.5 }} variants={variants} className="hover:bg-gray-700 transition ease-in-out hover:-translate-y-1 duration-200 px-3 py-2 rounded-md text-sm font-medium cursor-pointer">
                {item.name}
              </motion.li>
            ))}
          </motion.ul>


          <div className="-mr-2 flex sm:hidden">
            <button
              onClick={menuToggle}
              type="button"
              className="items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none 
              focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              {toggleMenu ? <GiCrossedSabres className="text-2xl" /> : <CiMenuBurger className="text-2xl" />}
            </button>
          </div>
        </div>
      </div>

      {toggleMenu && (
        <div className="h-[600px] text-white text-center flex flex-col items-center gap-6 transition-opacity duration-500">
          <div className="px-2 pt-2 pb-3 space-y-1 flex flex-col gap-4">
            <Link to="/" className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium transition duration-200 ease-in-out hover:underline">
              Home
            </Link>
            <Link to="/about" className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium transition duration-200 ease-in-out hover:underline">
              About
            </Link>
            <Link to="/contact" className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium transition duration-200 ease-in-out hover:underline">
              Contact
            </Link>
            <Link to="/services" className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium transition duration-200 ease-in-out hover:underline">
              Services
            </Link>
          </div>
          <div className="flex gap-4">
            <FaXTwitter className="text-3xl animate-pulse hover:translate-x-2 transition-transform duration-200" />
            <FaLinkedinIn className="text-3xl animate-pulse hover:translate-x-2 transition-transform duration-200" />
            <FaGithub className="text-3xl animate-pulse hover:translate-x-2 transition-transform duration-200" />
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
