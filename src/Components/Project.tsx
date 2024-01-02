type Props = {
  link: string;
  img: string;
  title: string;
  subTitle: string;
  code: string;
};

const Project = ({ link, img, title, subTitle, code }: Props) => {
  return (
    <div className="relative h-[250px]">
      <img
        src={img}
        alt="Photo"
        className="absolute inset-0 w-full h-full opacity-100 hover:opacity-0 transition-opacity duration-300"
      />
      <a href={link}>
        <div className="absolute inset-0 w-full h-full flex flex-col gap-4 items-center justify-center text-white opacity-0 hover:opacity-85 bg-black bg-opacity-0 hover:bg-opacity-100 transition-opacity duration-300">
          {title}
          <a href={subTitle}>
            <button className="bg-[#4AC7F0] hover:scale-110 hover:transform hover:duration-300 transform text-[12px] px-4 py-2 rounded-md">
             View Live
            </button>
          </a>
          <a href={code}>
            <button className="bg-[#4AC7F0] hover:scale-110 hover:transform hover:duration-300 text-[12px] px-4 py-2 rounded-md">
              View Source Code
            </button>
          </a>
        </div>
      </a>
    </div>
  );
};

export default Project;
