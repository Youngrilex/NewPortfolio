import Dialogs from "./Dialog";

const Bigsm = () => {
  return (
    <div className="flex lg:items-center lg:justify-around lg:gap-10 font-bold">
      <a rel="noreferrer" href="#home" className="hover:text-[#83daf7]">
        Home
      </a>
      <a rel="noreferrer" href="#Portfolio" className="hover:text-[#83daf7]">
        Portfolio
      </a>
      <a rel="noreferrer" href="#About" className="hover:text-[#83daf7]">
        About
      </a>
      <a rel="noreferrer" href="#Contact" className="hover:text-[#83daf7]">
        Contact
      </a>
      <Dialogs styling="bg-[#2c95b7] hover:bg-[#2a6d82] rounded-sm shadow-md text-white px-5 py-2 font-bold"/>
    </div>
  );
};

export default Bigsm;
