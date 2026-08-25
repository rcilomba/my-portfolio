import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import weatherApp from '../assets/weatherApp.png';
import photoDotNet from '../assets/photoDotNet.png';
import hemasblomster from '../assets/hemasblomster.png';
import dankoed from '../assets/dankoed.png';
import allstars from '../assets/allstars.png';
import drawlab from '../assets/drawlab.png';

function Works() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#062419]'>
      <motion.div
        className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'
        initial={shouldReduceMotion ? false : { opacity: 0, y: 26 }}
        whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className='pb-8 w-full flex justify-center items-center flex-col'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-green-500'>
            Work
          </p>
          <p className='py-6 text-2xl'>
            Check out some of my work. Please contact me if you want to see more
          </p>
        </div>
        {/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${drawlab})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div transition-transform duration-300 hover:-translate-y-1'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className=' text-lg font-bold text-white tracking-wider'>
                Drawlab
              </span>
              <p className='text-center'>
                React/Next.js-based website with reusable components, responsive
                layout, and frontend performance setup.
              </p>
              <div className='pt-8 text-center'>
                <a
                  href='http://drawlabdk.netlify.app/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <button
                    className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400'
                    aria-label='Open Dankod admin in new tab'
                  >
                    Demo
                  </button>
                </a>
                <a
                  href='https://github.com/rcilomba/drawlab'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <button
                    className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400'
                    aria-label='Open Dankod admin in new tab'
                  >
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${dankoed})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div transition-transform duration-300 hover:-translate-y-1'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className=' text-lg font-bold text-white tracking-wider'>
                Dankød
              </span>
              <p className='text-center'>
                WordPress-based corporate website with structured content,
                plugin configuration, and hosting setup.
              </p>
              <div className='pt-8 text-center'>
                <a
                  href='http://dankoed.dk/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <button
                    className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400'
                    aria-label='Open Dankod admin in new tab'
                  >
                    Demo
                  </button>
                </a>
                <a
                  href='http://dankoed.dk/wp-admin'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <button
                    className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400'
                    aria-label='Open Dankod admin in new tab'
                  >
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${hemasblomster})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div transition-transform duration-300 hover:-translate-y-1'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className=' text-lg font-bold text-white tracking-wider'>
                Hema's blomster
              </span>
              <p className='text-center'>
                PrestaShop e-commerce solution with payment integration, SEO
                setup, and hosting configuration.
              </p>
              <div className='pt-8 text-center'>
                <a
                  href='https://hemasblomster.dk/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <button
                    className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400'
                    aria-label='Open Hema project code in new tab'
                  >
                    Demo
                  </button>
                </a>
                <a
                  href='https://github.com/hemasblomster/hemasblomster-website'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <button
                    className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400'
                    aria-label='Open Hema project code in new tab'
                  >
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${allstars})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div transition-transform duration-300 hover:-translate-y-1'
          >
            {' '}
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className=' text-lg font-bold text-white tracking-wider'>
                Allstar Training Center
              </span>
              <p className='text-center'>
                Responsive React website built with structured components and
                performance-focused design.
              </p>
              <div className='pt-8 text-center'>
                <a
                  href='https://rcilo-as.netlify.app/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <button
                  disabled
                  aria-disabled='true'
                  title='Code not available'
                  className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg opacity-50 cursor-not-allowed'
                >
                  Code
                </button>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${weatherApp})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div transition-transform duration-300 hover:-translate-y-1'
          >
            {/* Hver Effects */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className=' text-lg font-bold text-white tracking-wider'>
                Weather App
              </span>
              <p className='text-center'>
                React app integrating external weather APIs with dynamic state
                handling and responsive UI.{' '}
              </p>
              <div className='pt-8 text-center'>
                <a
                  href='https://deft-squirrel-728ebd.netlify.app/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400'>
                    Demo
                  </button>
                </a>
                <a
                  href='https://github.com/rcilomba/react-weather-app'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <button
                    className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400'
                    aria-label='Open Weather App code in new tab'
                  >
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${photoDotNet})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div transition-transform duration-300 hover:-translate-y-1'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className=' text-lg font-bold text-white tracking-wider'>
                Photo Gallery
              </span>
              <p className='text-center'>
                ASP.NET Core application with structured routing and scalable
                backend architecture.
              </p>
              <div className='pt-8 text-center'>
                <a
                  href='https://photogallery-asp-net.vercel.app/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <button
                    className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400'
                    aria-label='Open Photo Gallery code in new tab'
                  >
                    Demo
                  </button>
                </a>
                <a
                  href='https://github.com/rcilomba/PhotoGallery-with-ASP.NET'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <button
                    className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400'
                    aria-label='Open Photo Gallery code in new tab'
                  >
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
export default Works;
