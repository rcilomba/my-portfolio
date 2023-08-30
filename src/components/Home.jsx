import React from "react";
import { HiArrowNarrowRight } from 'react-icons/hi';
import me from 'react-scroll';
import { Link } from "react-scroll";
import profileImg from '../assets/me.jpg';

function Home() {
    return(
         <div
    name="home"
    className="h-screen w-full bg-[#062419]"
  >
    <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
      <div className="flex flex-col justify-center h-full">
        <h2 className="text-4xl sm:text-7xl font-bold text-white">
          I'm a Frontend Developer
        </h2>
        <p className="text-gray-500 py-4 max-w-md">
           Based in Copenhagen, but originally from Stockholm, I'm passionate about crafting web applications. My toolkit includes React, Tailwind, Next.js, and [MongoDB], which I leverage to create engaging digital experiences. During my free hours, I also enjoy delving into C# coding. 
        </p>
        <div>
          <Link
            to="about"
            smooth
            duration={500}
            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
          >
            About Me
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight size={25} className="ml-3" />
            </span>
          </Link>
        </div>
      </div>
      <div>
        <img
          src={profileImg}  
          alt="my profile"
          className="rounded-full mx-auto w-2/3 md:w-full"
        />
      </div>
    </div>
  </div>
    );
};
export default Home;