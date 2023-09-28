import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-scroll";
import logo from "../assets/logo11.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const openNewTab = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#062419] text-gray-300">
      <div>
        {/* <h1 className=' font-thin text-2xl italic font-serif'>TB</h1> */}
        <img src={logo} alt="profile img" className="mx-auto w-2/3" />
      </div>
      {/* menu */}
      <ul className="hidden md:flex gap-x-8">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-800">
            <button
              className="flex justify-between items-center w-full text-gray-300"
              onClick={() =>
                openNewTab(
                  "https://www.linkedin.com/in/ramadan-cilomba-437109a4"
                )
              }
            >
              Linkedin <FaLinkedin size={30} />
            </button>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <button
              className="flex justify-between items-center w-full text-gray-300"
              onClick={() => openNewTab("https://github.com/rcilomba")}
            >
              Github <FaGithub size={30} />
            </button>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#5dc884]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto: rcilomba@outlook.com"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
