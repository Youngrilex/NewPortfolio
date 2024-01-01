function About() {
  return (
    <div id="About" className="mt-8">
      <div className="flex flex-col sm:flex-row gap-11 mx-8 sm:mx-28">
        <div className="w-full sm:w-[30%] flex items-center justify-center">
          <img
            src="../assets/ndp.jpg"
            className="rounded-full h-[300px] sm:h-[70vh] border-4 border-[#4AC7F0] shadow-2xl"
            alt=""
          />
        </div>
        <div className="flex flex-col items-center w-full sm:w-[70%]">
          <div className="font-serif text-[24px] sm:text-[40px] font-bold ">
            About
          </div>
          <span className="text-justify">
            <em>
              <b>Akindele</b>
            </em>
            is a skilled, consistent and professional Frontend Software Engineer
            with professional knowledge of maintaining, organizing, implementing
            and developing information systems and software for human resource,
            and financial operations.
            <br /> Ever since I discovered the magic of turning code into
            interactive screens, I've been hooked. My passion lies in crafting
            beautiful, user-friendly interfaces that seamlessly bridge design
            and functionality.From mastering the DOM to wielding the power of
            React and Tailwind CSS, I'm constantly honing my skills to build
            performant, responsive, and pixel-perfect web experiences.
            <br /> I am an experienced Information Technology Specialist with a
            demonstrated working history as a front-end web developer with
            skills in HTML, CSS, JavaScript,TailwindCSS, Typescript, React.js,
            bootstrap, material UI and lots more.
            <br /> I am a very fast learner that loves learning on the job. I am
            always open to new skills to add to my knowledge and be of benefit
            for those I work for.
            <br />
            Let's talk pixels! Connect with me on LinkedIn or check out my
            portfolio for more examples of my work. I'm always eager to
            collaborate on projects that push the boundaries of what's possible
            on the web.
          </span>
          <a
            href="./assets/Akindele cv.pdf"
            className="max-w-[200px] my-8 font-serif text-[14px] bg-white text-[#4AC7F0] font-bold rounded-full shadow-md py-2 px-4 border-2 border-[#4AC7F0] hover:text-white hover:bg-[#4AC7F0]"
          >
            View Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
