import { useState } from "react";
import img1 from "../../assets/pic1.png"
import img2 from "../../assets/pic2.png";
import img3 from "../../assets/pic3.jpg";
import "./Project.css"; // Import custom CSS

function Project() {
  const dataOfBox = [
    {
      img: img1,
      title: "UI frontend using React",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel urna at risus posuere pulvinar. Nulla facilisi.",
      link: "https://github.com/Turabali004/ReactUiUx"
    },
  ];
  const dataOfBox2 = [
    {
      img: img2,
      title: "Backend using Node.js",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel urna at risus posuere pulvinar. Nulla facilisi.",
      link: "https://github.com/Turabali004/Electronic-Website",
    },
  ];
  const dataOfBox3 = [
    {
      img: img3,
      title: "Full Stack using Node.js",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel urna at risus posuere pulvinar. Nulla facilisi.",
      link: "/fullstack-nodejs",
    },
  ];
  const [data1, setData1] = useState(dataOfBox2);
  const [fade, setFade] = useState(false);

  const changeData1 = () => {
    setFade(true);
    setTimeout(() => {
      setData1(dataOfBox);
      setFade(false);
    }, 500);
  };
  const changeData2 = () => {
    setFade(true);
    setTimeout(() => {
      setData1(dataOfBox2);
      setFade(false);
    }, 500);
  };
  const changeData3 = () => {
    setFade(true);
    setTimeout(() => {
      setData1(dataOfBox3);
      setFade(false);
    }, 500);
  };

  return (
    <>
    <div className="md:max-w-[1400px] mx-auto flex flex-col md:flex-row justify-center gap-9 py-32 px-4 md:px-0">
      <div className={`bg-white w-full md:w-2/4 p-4 rounded-lg bg-gradient-to-r from-teal-900 to-teal-500 ${fade ? 'fade-in' : ''}`}>
        {data1.map((val, index) => (
          <div key={index}>
            <img src={val.img} alt={val.title} className="rounded-lg w-full" />
            <div className="flex flex-col items-start gap-4 py-5">
              <h1 className="text-2xl text-white font-semibold">{val.title}</h1>
              <p className="text-white">{val.description}</p>
              <button className="py-3 bg-gradient-to-r from-teal-900 to-[#190b1f] px-6 text-white rounded-md transition-transform transform hover:scale-105">
                <a href={val.link

                }>
                  Git_Hub
                </a>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center flex-col justify-center gap-5">
        <button
          onClick={changeData1}
          className="py-3 rounded-md bg-gradient-to-r from-teal-900 to-teal-300 px-6 text-white w-full md:w-auto transition-transform transform hover:scale-105"
        >
          Project <span className="text-[#190b1f] font-semibold">1</span>
        </button>
        <button
          onClick={changeData2}
          className="py-3 rounded-md bg-gradient-to-r from-teal-900 to-teal-300 px-6 text-white w-full md:w-auto transition-transform transform hover:scale-105"
        >
          Project <span className="text-[#190b1f] font-semibold">2</span>
        </button>
        <button
          onClick={changeData3}
          className="py-3 rounded-md bg-gradient-to-r from-teal-900 to-teal-300 px-6 text-white w-full md:w-auto transition-transform transform hover:scale-105"
        >
          Project <span className="text-[#190b1f] font-semibold">3</span>
        </button>
      </div>
      
    </div>
    
    <hr className='h-px my-8 border-0 dark:bg-gray-400'/>
    </>
  );
}

export default Project;
