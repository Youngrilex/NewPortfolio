import React from "react";
import { FaTimes } from "react-icons/fa";
import { CgMenuRightAlt } from "react-icons/cg";
import Bigsm from "./bigsm";
import Dialogs from "./Dialog";

const Navbar = () => {
  const [scrolling, setScrolling] = React.useState(false);

  const [menuOpen, setMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // You can adjust the threshold based on your design
      const threshold = 10;

      // Update the state based on the scroll position
      setScrolling(scrollPosition > threshold);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const logoSrc = scrolling
    ? "../assets/akindelew.png"
    : "../assets/akindelelogo.png";

  return (
    <nav
      className={`fixed top-0 w-full z-20 h-24 ${
        scrolling ? "bg-[#4AC7F0]" : "bg-transparent"
      }`}
    >
      <div className="w-full flex items-center justify-around h-24 gap-2 sm:gap-12">
        <div className="flex items-center text-[20px] sm:text-[30px] font-serif font-bold">
          <img className="pr-10 h-[70px]" src={logoSrc} alt="logo" />
          <span className={`text-${scrolling ? "white" : ""}`}>Akindele</span>
        </div>
        <div
          className={`${
            menuOpen ? "hidden" : "hidden"
          } lg:block lg:items-center`}
        >
          <div className={`text-${scrolling ? "white" : ""}`}>
            <Bigsm />
          </div>
        </div>
        <div className="">
          <button
            className="text-[#238eb1]  text-[24px] lg:hidden focus:outline-none"
            onClick={toggleMenu}
          >
            {menuOpen ? (
              <FaTimes className="mt-32 ml-8" />
            ) : (
              <CgMenuRightAlt className="" />
            )}
          </button>
          <div
            className={`${
              menuOpen ? "block" : "hidden"
            } lg:hidden lg:items-center lg:w-auto`}
          >
            <div className={`text-${scrolling ? "white" : ""}`}>
              <div className="flex flex-col items-center justify-around rounded-xl shadow-md bg-[#4AC7F0] p-4 font-bold">
                <a
                  rel="noreferrer"
                  href="/Home"
                  className="hover:text-[#83daf7]"
                >
                  Home
                </a>
                <a
                  rel="noreferrer"
                  href="#Portfolio"
                  className="hover:text-[#83daf7]"
                >
                  Portfolio
                </a>
                <a
                  rel="noreferrer"
                  href="#About"
                  className="hover:text-[#83daf7]"
                >
                  About
                </a>
                <a
                  rel="noreferrer"
                  href="#Contact"
                  className="hover:text-[#83daf7]"
                >
                  Contact
                </a>
                <Dialogs />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
