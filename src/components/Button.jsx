import React from "react";
import { Link } from "react-router-dom";

const Button = ({ text, link }) => {
  return (
    <Link to={link}>
      <button className="w-30 mt-5 bg-lightBrown px-16 py-3 rounded-md flex justify-center font-poppins font-bold text-black">
        {text}
      </button>
    </Link>
  );
};

export default Button;
