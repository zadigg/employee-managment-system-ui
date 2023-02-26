import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };
  return (
    <div className="bg-gray-800">
      <div onClick={goHome} className="h-16 px-8 flex items-center">
        <p className="text-white font-bold">Employee Managmenet System</p>
        <p className="text-white font-bold"> Hello</p>
      </div>
    </div>
  );
};

export default Navbar;
