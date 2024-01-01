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
            is an aspiring Junior Frontend Developer, eager to contribute his
            skills and passion to the dynamic field of web development. While
            currently building a foundation, he envisions a future as a
            dedicated professional in the world of technology.
            <br />
            Driven by the excitement of turning code into interactive
            interfaces, Akindele is committed to honing his skills in creating
            visually appealing and user-friendly designs. His journey involves
            mastering the intricacies of the DOM and exploring technologies like
            React and Tailwind CSS to deliver engaging, responsive, and
            pixel-perfect web experiences. <br />
            As a budding Information Technology enthusiast, Akindele is already
            showcasing proficiency in fundamental technologies such as HTML,
            CSS, and JavaScript. With a keen interest in learning, he is
            actively expanding his toolkit to include technologies like
            Typescript, React.js, Bootstrap, Material UI, and more. <br />A
            quick learner with an eagerness to adapt, Akindele is open to
            acquiring new skills on the job, contributing his enthusiasm and
            knowledge to collaborative projects. Connect with him on LinkedIn to
            follow his journey or explore his portfolio for insights into his
            evolving work. Akindele is excited about opportunities to contribute
            to innovative web projects and looks forward to the challenges that
            lie ahead in pushing the boundaries of what's achievable in web
            development.
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
