import "./App.css";
import About from "./Components/About";
import Layout from "./Components/Layout";
import Portfolio from "./Components/Portfolio";
import 'animate.css';

function App() {
  return (
    <Layout>
      <div className="z-10  mt-32 sm:mt-24 flex  flex-col sm:flex-row items-center justify-center px-4 sm:px-8 gap-6">
        <div className="font-serif w-full sm:w-1/2 ">
          <h1 className="text-[24px] sm:text-[40px] font-bold animate__animated animate__backInUp animate__slow"> Front-end Developement</h1>
          <h1 className="text-[12px] sm:text-[20px] font-semibold">Bridging the gap between design and functionality, pixel by perfect pixel.</h1>
        </div>
        <div className="flex w-full sm:w-1/2 items-center justify-center">
          <img src="./assets/IMG_1415.jpg" alt="" className="h-[40vh] sm:h-[90vh] " />
        </div>
      </div>
  <Portfolio/>
      
      <About/>
      <div className="w-full h-[1px] bg-[#4AC7F0] mt-8"/>
    </Layout>
  );
}

export default App;
