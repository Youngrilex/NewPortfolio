import Project from "./Project";

const Portfolio = () => {
  return (
    <div id="Portfolio" className="mt-8 bg-[#38acd3] text-white">
      <div className="font-serif text-[24px] sm:text-[40px] font-bold ">
        Recent Projects & Work
      </div>
      <div className="text-[14px] sm:text-[20px]">
        Here are a few past design projects I've worked on.
      </div>
      <div className="grid grid-cols gap-8 sm:grid-cols-3 my-8 text-xs text-[30px] sm:text-[24px] font-semibold font-serif mx-8 sm:mx-16">
      <Project
          link="https://youngrilex.github.io/Basic-Calculator"
          img="../assets/calc.png"
          title="Basic Calculator"
          subTitle="View Source Code"
        />
        <Project
          link="https://youngrilex.github.io/Basic-Calculator"
          img="../assets/calc.png"
          title="Basic Calculator"
          subTitle="niii"
        />
        <Project
          link="https://youngrilex.github.io/Basic-Calculator"
          img="../assets/calc.png"
          title="Basic Calculator"
          subTitle="niii"
        />
      </div>
      <a href="https://github.com/Youngrilex" className="my-8 sm:my-16 font-serif text-[14px] sm:text-[20px] bg-white text-[#4AC7F0] font-bold rounded-full shadow-md py-2 px-4 border-2 border-[#4AC7F0] hover:text-white hover:bg-[#4AC7F0]">
        See more on Github
      </a>
    </div>
  );
};

export default Portfolio;
