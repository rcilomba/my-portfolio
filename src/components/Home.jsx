import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import { motion, useReducedMotion } from 'framer-motion';
import profileImg2 from '../assets/linkedin-photo.jpeg';

function Home() {
  const shouldReduceMotion = useReducedMotion();

  const textTransition = {
    duration: 0.5,
    ease: [0.22, 1, 0.36, 1],
  };

  return (
    <div name='home' className='h-screen w-full bg-[#062419]'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <motion.div
          className='flex flex-col justify-center h-full'
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          transition={textTransition}
        >
          <motion.h2
            className='text-4xl sm:text-5xl font-bold text-white'
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ ...textTransition, delay: 0.1 }}
          >
            Building Reliable Web Solutions{' '}
          </motion.h2>
          <motion.p
            className='text-white py-4 max-w-md'
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ ...textTransition, delay: 0.2 }}
          >
            I design and build scalable web solutions that make digital
            operations faster, clearer, and more reliable. With a focus on
            frontend architecture and automation, I turn complex workflows into
            practical, maintainable systems.
          </motion.p>
          <motion.div
            className='flex gap-4 items-center'
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
            animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ ...textTransition, delay: 0.3 }}
          >
            {/* Primary CTA: scrolls to Work */}
            <Link
              to='work'
              smooth
              duration={500}
              className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-green-500 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400'
              aria-label='See my work'
            >
              See My Work
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight size={20} className='ml-3' />
              </span>
            </Link>

            {/* Secondary CTA: scrolls to Contact */}
            <Link
              to='contact'
              smooth
              duration={500}
              className='text-white w-fit px-6 py-3 my-2 flex items-center rounded-md border-2 border-gray-500 hover:bg-gray-700/30 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400'
              aria-label='Get in touch'
            >
              Get in Touch
            </Link>
          </motion.div>
        </motion.div>
        <div>
          <motion.img
            src={profileImg2}
            alt='my profile'
            className='rounded-full mx-auto w-1/3 md:w-1/2 lg:w-2/3'
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.95 }}
            animate={shouldReduceMotion ? {} : { opacity: 1, scale: 1 }}
            transition={{ ...textTransition, delay: 0.25 }}
          />
        </div>
      </div>
    </div>
  );
}
export default Home;
