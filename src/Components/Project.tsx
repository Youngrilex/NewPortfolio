type Props = {
  link: string;
  img: string;
  title: string;
  subTitle: string;
};

const Project = ({ link, img, title, subTitle }: Props) => {
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
          <button className="bg-[#4AC7F0] text-[12px] px-4 py-2 rounded-md">
            {subTitle}
          </button>
        </div>
      </a>
    </div>
  );
};

export default Project;
