import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const About = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      name='about'
      id='about'
      className='w-full h-screen bg-[#062419] text-gray-300'
      role='region'
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
              <p
                id='about-heading'
                className='text-4xl font-bold inline border-b-4 border-green-900'
              >
                About me
              </p>
            </div>
            <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Ramadan Cilomba, nice to meet you.</p>
            </div>
            <div>
              <p className='text-white'>
                I’m a developer who values structure, consistency, and
                continuous improvement, both in work and in life. Outside tech,
                I train BJJ and judo, enjoy reading, music, and baking, and I’m
                currently improving my chess skills. These interests strengthen
                the same discipline and strategic thinking I bring to building
                reliable digital solutions.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
export default About;
