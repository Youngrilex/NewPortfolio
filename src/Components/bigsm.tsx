import Dialogs from './Dialog'

const Bigsm = () => {
  return (
    <div className="flex lg:items-center lg:justify-around lg:gap-10 font-bold">
    <a rel="noreferrer" href="/Home" className="hover:text-[#83daf7]">
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
  )
}

export default Bigsm