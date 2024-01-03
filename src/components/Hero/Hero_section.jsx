import React from "react";
import myImage from "../../../public/pngtree-yellow-gourmet-shading-cartoon-chef-restaurant-recruitment-background-material-image_133951.jpg";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div
      className="bg-primary flex justify-center items-center text-white border-orange-100 border-spacing-1"
      style={{
        backgroundImage: `url(${myImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "650px",
      }}
    >
      <div className="flex gap-4 m-5 p-4 flex-col">
        <p className="text-center font-light">Quick Order and Quick Service</p>
        <Link to="/order">
          <button className="outline w-full outline-red-700 animate-pulse m-3 p-3">
            Order Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
