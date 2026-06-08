import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { Link } from 'react-scroll';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import logo from '../assets/logo11.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const handleClick = () => setNav(!nav);

  const openNewTab = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#062419] text-gray-300'>
      <div>
        <img src={logo} alt='Ramadan Cilomba logo' className='mx-auto w-2/3' />
      </div>
      {/* menu */}
      <ul className='hidden md:flex gap-x-8'>
        <li>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      {/* Hamburger */}
      <button
        onClick={handleClick}
        className='md:hidden z-10 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400'
        aria-label='Toggle menu'
        aria-expanded={nav}
      >
        {!nav ? <FaBars /> : <FaTimes />}
      </button>
      {/* Mobile menu */}
      <AnimatePresence>
        {nav && (
          <motion.ul
            className='absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
            initial={shouldReduceMotion ? false : { opacity: 0, x: 30 }}
            animate={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
            exit={shouldReduceMotion ? {} : { opacity: 0, x: 30 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <li className='py-6 text-4xl'>
              <Link
                onClick={handleClick}
                to='home'
                smooth={true}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li className='py-6 text-4xl'>
              {' '}
              <Link
                onClick={handleClick}
                to='about'
                smooth={true}
                duration={500}
              >
                About
              </Link>
            </li>
            <li className='py-6 text-4xl'>
              {' '}
              <Link
                onClick={handleClick}
                to='work'
                smooth={true}
                duration={500}
              >
                Work
              </Link>
            </li>
            <li className='py-6 text-4xl'>
              {' '}
              <Link
                onClick={handleClick}
                to='contact'
                smooth={true}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-800'>
            <button
              className='flex justify-between items-center w-full text-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400'
              onClick={() =>
                openNewTab('https://www.linkedin.com/in/ramadan-cilomba/')
              }
              aria-label='Open LinkedIn profile in new tab'
            >
              Linkedin <FaLinkedin size={30} />
            </button>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <button
              className='flex justify-between items-center w-full text-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400'
              onClick={() => openNewTab('https://github.com/rcilomba')}
              aria-label='Open GitHub profile in new tab'
            >
              Github <FaGithub size={30} />
            </button>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#1d8844]'>
            <a
              className='flex justify-between items-center w-full text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400'
              href='mailto:rcilomba@outlook.com'
              aria-label='Send email to Ramadan Cilomba'
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
