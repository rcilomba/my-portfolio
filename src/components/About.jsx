import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const About = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      name='about'
      id='about'
      className='w-full h-screen bg-[#062419] text-gray-300'
      aria-labelledby='about-heading'
    >
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <motion.div
          className=' py-16 rounded-md bg-[#048333] flex flex-col justify-center items-center w-4/6'
          initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4'>
            <div className='sm:text-right pb-8 pl-4'>
              <h2
                id='about-heading'
                className='text-4xl font-bold inline border-b-4 border-green-900'
              >
                About me
              </h2>
            </div>
            <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Ramadan Cilomba, nice to meet you.</p>
            </div>
            <div>
              <p className='text-white'>
                I’m a technical professional who enjoys understanding how
                systems work together and finding the root cause of problems.
                With a background in web development, I bring structured
                thinking, hands-on problem-solving, and clear communication. I’m
                interested in opportunities across IT where I can troubleshoot,
                improve systems and workflows, and keep developing my technical
                skills.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default About;
