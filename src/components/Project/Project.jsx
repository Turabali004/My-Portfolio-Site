import { useState } from "react";
import img1 from "../../assets/pic1.jpg";
import img2 from "../../assets/pic2.jpg";
import img3 from "../../assets/pic3.jpg";

function Project() {
  let dataOfBox = [
    {
      img: img1,
      title: "UI frontend using react",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel urna at risus posuere pulvinar. Nulla facilisi. ",
    },
  ];
  let dataOfBox2 = [
    {
      img: img2,
      title: "backend using nodejs",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel urna at risus posuere pulvinar. Nulla facilisi. ",
      link: "#",
    },
  ];
  let dataOfBox3 = [
    {
      img: img3,
      title: "Full Stack using nodejs",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel urna at risus posuere pulvinar. Nulla facilisi. ",
      link: "#",
    },
  ];
  let [data1, setData1] = useState(dataOfBox2);

  let changeData1 = () => {
    setData1(dataOfBox);
  };
  let changeData2 = () => {
    setData1(dataOfBox2);
  };
  let changeData3 = () => {
    setData1(dataOfBox3);
  };

  return (
    <div className="  md:max-w-[1400px] mx-auto  flex flex-row justify-center gap-9 py-32">
      <div className="bg-white w-2/4 p-4 rounded-lg bg-gradient-to-r from-teal-900 to-teal-500">
        {data1.map((val, index) => {
          return (
            <div key={index}>
              <img src={val.img} alt="" className="rounded-lg" />
              <div className="flex flex-col items-start gap-4 py-5">
                <h1 className="text-2xl text-white font-semibold">
                  {val.title}
                </h1>
                <p>{val.description}</p>
                <p></p>
                  <button className="py-3 bg-gradient-to-r from-teal-900 to-[#190b1f] px-6 text-white">
                    <a href="https://github.com/Turabali004/PortFolio"
                    target="_blank">

                    Project
                    </a>
                  </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className=" flex items-center flex-col justify-center gap-5 ">
        <button
          onClick={changeData1}
          className="py-3 rounded-md bg-gradient-to-r from-teal-900 to-teal-300 px-6 text-white"
        >
          Project <span className="text-[#190b1f] font-semibold">1</span>{" "}
        </button>
        <button
          onClick={changeData2}
          className="py-3 rounded-md bg-gradient-to-r from-teal-900 to-teal-300 px-6 text-white"
        >
          Project <span className="text-[#190b1f] font-semibold">2</span>{" "}
        </button>
        <button
          onClick={changeData3}
          className="py-3 rounded-md bg-gradient-to-r from-teal-900 to-teal-300 px-6 text-white"
        >
          Project <span className="text-[#190b1f] font-semibold">3</span>{" "}
        </button>
      </div>
    </div>
  );
}

export default Project;
