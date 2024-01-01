import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
// import Navbar2 from "./Navbar2";


type Props = {
  children: React.ReactNode;
};

const Layout = (props: Props) => {
  return (
    <div className="-m-8">
      <Navbar />
      {props.children}
      <Footer/>
    </div>
  );
};

export default Layout;