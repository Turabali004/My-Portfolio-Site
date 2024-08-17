// import { useState } from "react";
// import { animate, motion, AnimatePresence } from "framer-motion";

// function Navbar() {
//   //   const [nav, setNav] = useState(false);
//   //   const closeNav = () => {
//   //     setNav(!nav);
//   //   };
//   //   const open = () => {
//   //     setNav(!nav);
//   //   };

//   const [show, setShow] = useState(false)
//   return (
//     <div>
//         <AnimatePresence>

//             {show && <motion.div
//             className="w-[200px] h-[200px] bg-orange-600"
//             initial={{opactiy : 0, x: 50}}
//             animate={{opacity: 1, x: 100}}
//             exit={{opacity: 0, x: -150}}
//             transition={{
//                 duration: "1"
//             }}
//             >
//                 </motion.div>}
//         </AnimatePresence>

//         <button className="bg-red-400 px-6 py-2  font-bold my-8" onClick={() => setShow(!show)}>Click Me</button>

//     </div>
// );
// }

// export default Navbar;

//     // <div className="">
//     //   <div className=" w-[1280px] bg-slate-500 text-white">
//     //     {/* <div className='w-[1280px] bg-slate-400 flex justify-between items-center px-20 py-8'> */}
//     //     <h1 className="font-bold text-2xl">Turab_Ali</h1>

//     //     <div>
//     //       <ul className="">
//     //         <li>
//     //           <a href="">Home</a>
//     //         </li>
//     //         <li>
//     //           <a href="">About us</a>
//     //         </li>
//     //         <li>
//     //           <a href="">Contact us</a>
//     //         </li>
//     //         <li>
//     //           <a href="">Services</a>
//     //         </li>
//     //       </ul>
//     //       <div>
//     //         <span>HIDE</span>
//     //         <span>Show</span>
//     //       </div>
//     //     </div>
//     //   </div>
//     //   {/* </div> */}
//     // </div>

// import { useState } from "react";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="bg-blue-600 p-4">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="text-white text-2xl">MyLogo</div>
//         <div className="block lg:hidden">
//           <button
//             onClick={toggleMenu}
//             className="text-white focus:outline-none"
//           >
//             <svg
//               className="h-6 w-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
//               ></path>
//             </svg>
//           </button>
//         </div>
//         <div
//           className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
//             isOpen ? "block" : "hidden"
//           } lg:block`}
//         >
//           <div className="text-sm lg:flex-grow">
//             <a
//               href="#home"
//               className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4"
//             >
//               Home
//             </a>
//             <a
//               href="#about"
//               className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4"
//             >
//               About
//             </a>
//             <a
//               href="#services"
//               className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200"
//             >
//               Services
//             </a>
//           </div>
//           <div>
//             <a
//               href="#contact"
//               className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-600 hover:bg-white mt-4 lg:mt-0"
//             >
//               Contact
//             </a>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import { useState } from "react";

// function Navbar() {
//   const [toggleMenu, settoggleMenu] = useState(false);
//   const menuToggle = () => {
//     settoggleMenu(!toggleMenu);
//   };

//   return (
//     <>
//       <div className="w-full h-12 bg-black text-white flex justify-between px-8 items-center">
//         <h1 className=" text-2xl font-semibold ">Turab</h1>

//         <div onClick={menuToggle}>
//           {toggleMenu ? <h1 className="z-20">Close</h1> : <h1>Open</h1>}
//         </div>
//         {toggleMenu && (
//           <div className="w-full h-1/3 bg-gray-400 flex justify-center items-center absolute top-12 left-0">
//             <ul className="flex flex-col gap-8 justify-center items-center font-bold ">
//               <li>Home</li>
//               <li>About</li>
//               <li>Contact</li>
//               <li>Services</li>
//             </ul>
//           </div>
//         )}

//         <div className="hidden">
//           <ul className="sm:flex font-bold gap-2 ">
//             <li>Home</li>
//             <li>About</li>
//             <li>Contact</li>
//             <li>Services</li>
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Navbar;

import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { GiCrossedSabres } from "react-icons/gi";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";









function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const menuToggle = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <nav className="w-full fixed top-0 left-0 bg-opacity-70 backdrop-blur-md z-50">
      <div className="max-w-[1300px] mx-auto text-white px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="">
            <div className="text-2xl font-semibold">Turab.Ali</div>
          </div>
          <div className="hidden sm:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#" className="hover:bg-gray-700 transition ease-in-out hover:-translate-y-1 delay-15 px-3 py-2 hover:scale-110 rounded-md text-sm font-medium">Home</a>
              <a href="#" className="hover:bg-gray-700 transition ease-in-out hover:-translate-y-1 delay-15 px-3 py-2 rounded-md text-sm font-medium">About</a>
              <a href="#" className="hover:bg-gray-700 transition ease-in-out hover:-translate-y-1 delay-15 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
              <a href="#" className="hover:bg-gray-700 transition ease-in-out hover:-translate-y-1 delay-15 px-3 py-2 rounded-md text-sm font-medium">Services</a>
            </div>
          </div>
          <div className="-mr-2 flex sm:hidden">
            <button
              onClick={menuToggle}
              type="button"
              className="items-center justify-center p-2 rounded-md text-gray-400 hover:text-white  focus:outline-none 
              focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              {/* <span className="">Open main menu</span> */}
              {toggleMenu ? <div><GiCrossedSabres/></div> : <div className=""><CiMenuBurger/> </div>}
            </button>
          </div>
        </div>
      </div>

      {toggleMenu && (
        <div className="h-[600px] text-white text-center flex flex-col items-center gap-6">
          <div className="px-2 pt-2 pb-3 space-y-1 flex flex-col gap-4">
            <a href="home" className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium hover:underline-offset-1">Home</a>
            <a href="about" className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">About</a>
            <a href="contact" className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Contact</a>
            <a href="services" className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Services</a>
          </div>
          <div className="flex gap-4">
            <FaXTwitter className="text-3xl animate-pulse hover:translate-x-2"/>
            <FaLinkedinIn className="text-3xl animate-pulse hover:translate-x-2"/>
            <FaGithub className="text-3xl animate-pulse hover:translate-x-2"/>
          </div>
          
        </div>
      )}
    </nav>
  );
}

export default Navbar;
