
import { FaCopyright } from "react-icons/fa";
import { TfiLayoutMediaLeftAlt } from "react-icons/tfi";
import { BsTwitterX } from "react-icons/bs";
import { ImWhatsapp } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa";

const Footer = () => {


  return (
    <main>
      <div
        className="h-[30rem] bg-cyan-300  w-full flex flex-row gap-20 p-14 shadow-xl justify-center mx-3"
        id="contact"
      >
        <div className="w-[50rem] shadow-lg p-10 bg-white hover:bg-black hover:text-white transition flex justify-center flex-col hover:scale-110">
          <h2 className="uppercase font-bold text-3xl flex gap-2 justify-center">
            Asido Alexandar Socials
            <TfiLayoutMediaLeftAlt className="text-cyan-500" />
          </h2>
          <div className="text-6xl flex justify-center gap-8 mt-2 p-5">
            <FaInstagram className="text-pink-600" />
            <FaPhoneVolume />
            <ImWhatsapp className="text-green-500" />
            <BsTwitterX className="text-" />
          </div>
        </div>

        <div className="w-[55rem] h-[23rem] border p-7 bg-black text-white shadow-white shadow-2xl hover:scale-110 transition flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-4">Let's Design Together</h1>
          <p className="mb-5">
            I’d love to hear about your project ideas or any opportunities to
            collaborate! Whether you're looking to build a custom website,
            mobile app, or just want to chat about your next big idea, feel free
            to reach out.
          </p>
        
            <a
            
            href="mailto:alexandaras2015@gmail.com"
              className="p-3 w-[10rem] flex items-center gap-2 bg-yellow-500 rounded-lg font-bold uppercase"
            >
              Send Mail<MdOutlineEmail className="text-black text-2xl" />
            </a>
          {/* </form> */}
        </div>
      </div>
      <div className="h-[2rem] uppercase flex justify-center">
        <h3 className="flex items-center gap-2 font-bold">
          <FaCopyright />
          Personal portfolio designed by Asido Alexandar
        </h3>
      </div>
    </main>
  );
};

export default Footer;
