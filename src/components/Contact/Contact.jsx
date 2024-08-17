import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";

function Contact() {
  return (
    <div className="max-w-[1000px] mx-auto my-20 py-20 px-10 text-black glass grid md:grid-cols-2 place-items-center">
      <div className="">
        <ul className="my-auto  pr-6 ">
          <li className="flex gap-10 pb-10">
            <FaXTwitter className="w-[70px]" />
            <div>
              <h3 className="text-lg font-bold text-gray-300">Contact</h3>
              <p className="text-gray-400">Moibile: 0318-7535776</p>
              <p className="text-gray-400">Email: turabalidev004@gmail.com</p>
            </div>
          </li>
          <li className="flex gap-10 ">
            <FaLinkedinIn className="w-[70px]" />
            <div>
              <h3 className="text-lg font-bold text-gray-300">
                Curretly Learning
              </h3>
              <p className="text-gray-400">Data Structure and Algorithm</p>
              <p className="text-gray-400">BloackChain</p>
            </div>
          </li>
        </ul>
      </div>

      <form action="">
        <input
          type="text"
          placeholder="Your Name"
          name="name"
          className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4"
        />

        <input
          type="text"
          placeholder="Your Email ...."
          className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4"
        />
        <textarea
          name=""
          id=""
          cols="30"
          rows="4"
          placeholder="Your Message ..."
          className="mb-w w-full rounded-md border border-gray-400 py-2 pl-2 pr-4"
        ></textarea>
        <button
          type="button"
          className="rounded-md bg-slate-400 px-3 py-2 text-sm font-semibold text-[#fff] shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          View Docs
        </button>
      </form>
    </div>
  );
}

export default Contact;
