import { FaFacebook, FaGithub, FaHome, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { IoLogoWhatsapp, IoMdMail } from "react-icons/io";
import { FaSquareXTwitter } from "react-icons/fa6";

function Contact() {
    return (
      <div id="Contact" className="grid grid-cols gap-8 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-4 my-8 text-xs md:text-[14px] font-semibold text-[#4AC7F0]">
        <div className="mt-4 flex flex-col gap-4 items-center">
        <FaHome />
          <h2>1,Ayegbami CDA ,Obada-oko, Abeokuta, Ogun state</h2>
          <h2>10 Adebayo Hassan Street, Irawo Lagos</h2>
        </div>
        <div className="mt-4 flex flex-col gap-4 items-center">
        <FaPhoneAlt />
          <h2>08161769551</h2>
          <h2>07017163895</h2>
        </div>
        <div className="mt-4 flex flex-col gap-4 items-center">
        <IoMdMail />
          <h2>ridwanakindele6@gmail.com</h2>
          <h2>akindeleridwan02@gmail.com</h2>
        </div>
        <div className="mx-20 mt-4 flex flex-row sm:flex-col gap-4 items-center">
        <a href="https://wa.link/wt0mii" target="_blank"><IoLogoWhatsapp /></a>
        <a href="https://web.facebook.com/harkindeyley.harkinpelu" target="_blank"><FaFacebook /></a>
        <a href="https://twitter.com/Youngrilex" target="_blank"><FaSquareXTwitter /></a>
        <a href="https://github.com/Youngrilex" target="_blank"><FaGithub /></a>
        <FaLinkedin />
        </div>
      </div>
    );
  }
  
  export default Contact;
  