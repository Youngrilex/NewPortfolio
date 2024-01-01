import Contact from './Contact'

const Footer = () => {
  return (
    <div className="flex flex-col pb-6 text-white bottom-0 items-center justify-center bg-black/85 border-[#4AC7F0] border-t-8">
      <Contact/>
      <div>   <span>
    {"Copyright © "}
    <a  href="/page2">
     Akindele
    </a>{" "}
    {new Date().getFullYear()}
    {"."}
  </span></div>
    </div>
  )
}

export default Footer