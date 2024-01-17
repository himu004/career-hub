import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Banner from "../Navbar/Banner/Banner";

const Root = () => {
  return (
    <div>
        <div className="bg-gradient-to-r from-cyan-100 to-blue-100">
        <div className="max-w-6xl mx-auto ">
        <Navbar></Navbar>
        <Banner></Banner>
      </div>
        </div>
      
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
