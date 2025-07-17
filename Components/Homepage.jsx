import React from "react";
import Navbar from "./Navbar";
import image1 from "../assets/Hoodies.jpeg";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      {/* <Slider/> */}
      <div className="Content">
        <h2>BEST PRODUCTS</h2>
        <div className="Features">
          <div className="Clothing">
            <img src={image1} className="Img_1" alt="" />
            <img src={image1} className="Img_1" alt="" />
            <div className="Clothing2">
              <img src={image1} className="Img_1" alt="" />
              <img src={image1} className="Img_1" alt="" />
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
