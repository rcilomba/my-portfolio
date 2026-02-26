import React from 'react';

const About = () => {
  return (
    <div
      name='about'
      id='about'
      className='w-full h-screen bg-[#062419] text-gray-300'
    >
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className=' py-16 rounded-md bg-[#048333] flex flex-col justify-center items-center w-4/6'>
          <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4'>
            <div className='sm:text-right pb-8 pl-4'>
              <p className='text-4xl font-bold inline border-b-4 border-green-900'>
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
              <p>
                I work at the intersection of systems, workflows, and web
                technologies. I enjoy understanding how digital tools are used
                in practice and improving them to be more structured, reliable,
                and scalable. Whether I am working with frontend architecture or
                operational systems, I am motivated by creating clarity,
                stability, and continuous improvement in digital environments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
