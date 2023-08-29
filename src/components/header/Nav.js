import React, { useState } from "react";

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';


const Nav = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="absolute top-0 left-0 right-0 bg-transparent z-10">
      <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4'>
        <a href="/" className="text-white text-2xl font-bold">
          DigIT Solutions
        </a>      
        <ul className='hidden md:flex space-x-6'>
          <a
          href="/about"
          className="text-white hover:text-teal-200 mb-2"
          >About us</a>
          <a
          href="/services"
          className="text-white hover:text-teal-200 mb-2"
          >Services
          </a>
          <a
          href="/projects"
          className="text-white hover:text-teal-200 mb-2"
          >Projects
          </a>
          <a
          href="/contact"
          className="text-white hover:text-teal-200"
          >Contact Us
          </a>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <div/> : <AiOutlineMenu color="white" size={20} />}
      </div>
      
      <ul className={nav ? 'fixed left-0 top-0 w-[100%] h-full border-r border-r-gray-900  ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <div
          className='absolute inset-0 bg-cover bg-no-repeat'
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/Mauve.jpg)`,
            zIndex: -2,
          }}>
          <div className="flex justify-between items-center m-4">
            <h1 className='text-white text-2xl font-bold flex-row'>DigIT Solutions</h1>
            <div onClick={handleNav} className="flex-row">
              <AiOutlineClose color="white" size={20}/>
            </div>
          </div>
          <li className='p-4 border-b border-gray-600'>
            <a
            href="/about"
            className="text-white hover:text-teal-200 mb-2"
            >About us
            </a>
          </li>
          <li className='p-4 border-b border-gray-600'>
            <a
            href="/services"
            className="text-white hover:text-teal-200 mb-2"
            >Services
		 				</a>
          </li>
          <li className='p-4 border-b border-gray-600'>
            <a
            href="/projects"
            className="text-white hover:text-teal-200 mb-2"
            >Projects
            </a>
          </li>
          <li className='p-4 border-b border-gray-600'>
            <a
            href="/contact"
            className="text-white hover:text-teal-200"
            >Contact Us
            </a>
          </li>
        </div>
      </ul>
    </div>
  </div>
  );
};

export default Nav;