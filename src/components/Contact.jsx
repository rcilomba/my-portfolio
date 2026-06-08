import React from "react";

function Contact() {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#062419] flex justify-center items-center p-4"
    >
      <div className="flex flex-col max-w-[600px] w-full">
        <div className="pb-8 flex flex-col justify-center w-full h-full items-center" role='region' aria-labelledby='contact-heading'>
          <p id='contact-heading' className="text-4xl font-bold inline border-b-4 border-green-500 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            <a href='mailto:rcilomba@outlook.com' className='underline hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400' aria-label='Send email to Ramadan'>rcilomba@outlook.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Contact;
