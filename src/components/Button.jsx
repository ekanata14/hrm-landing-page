import React from "react";
import { Link } from "react-router-dom";

const Button = ({ text, link }) => {
  return (
    <Link to={link}>
      <button className="w-30 mt-5 bg-lightBrown px-16 py-3 rounded-md flex justify-center font-poppins font-bold text-black hover:scale-125 transition-all duration-300 hover:shadow-2xl">
        {text}
      </button>
    </Link>
  );
};

export default Button;
