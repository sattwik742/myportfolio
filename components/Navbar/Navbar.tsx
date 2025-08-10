import React from "react";
import { FaHome, FaUser, FaGraduationCap, FaCode, FaProjectDiagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-black text-white px-6 py-4 relative flex items-center justify-between">
      {/* Left: Logo */}
      <div className="text-xl font-bold">sattwik.</div>
 
      {/* Center: Navigation Links */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <ul className="flex space-x-6">
          <li>
            <a href="#Home" className="flex items-center space-x-2 hover:underline">
              <FaHome />
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="#About" className="flex items-center space-x-2 hover:underline">
              <FaUser />
              <span>About</span>
            </a>
          </li>
          <li>
            <a href="#Education" className="flex items-center space-x-2 hover:underline">
              <FaGraduationCap />
              <span>Education</span>
            </a>
          </li>
          <li>
            <a href="#Skills" className="flex items-center space-x-2 hover:underline">
              <FaCode />
              <span>Skills</span>
            </a>
          </li>
          <li>
            <a href="#Projects" className="flex items-center space-x-2 hover:underline">
              <FaProjectDiagram />
              <span>Projects</span>
            </a>
          </li>
        </ul>
      </div>

      {/* Right: Placeholder for symmetry or future elements */}
      <div className="w-24"></div>
    </nav>
  );
};

export default Navbar;
