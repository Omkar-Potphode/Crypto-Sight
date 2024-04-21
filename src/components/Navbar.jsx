import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Logo, NavIcon } from '../assets'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollingDown, setScrollingDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop > 0 && !scrollingDown){
        setScrollingDown(true);
      } else if (scrollTop === 0 && scrollingDown){
        setScrollingDown(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollingDown]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`block bg-primary text-white py-1 px-8 md:px-16 w-full transition-all duration-300 sticky top-0 z-10
    ${scrollingDown ? "-translate-y-full absolute" : ""}`}>

      <div className={`flex flex-wrap items-center justify-between px-9 md:py-4 backdrop-blur-sm transition-shadow duration-300
      ${scrollingDown ? "shadow-lg" : ""}`}>

        <img src={Logo} alt='FutureSwap' className='w-32 md:w-40'/>
        <div className="md:hidden">
        <button onClick={toggleMenu} className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 transition-all duration-500 xl:hidden motion-reduce:transition-none opacity-1 blur-0">
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

        <div className='items-center hidden w-full xl:block xl:w-auto'>
          <ul className='flex flex-col p-4 mt-4 font-bold font-OpenSans xl:p-0 xl:flex-row xl:space-x-8 xl:mt-0'>
            <li className='flex group'>
              <img src={NavIcon} loading='lazy' className='opacity-0 group-hover:opacity-100 transition-all duration-400'/>
              <a href='#tracker' className='text-[18px] ml-2 mr-6 group-hover:text-teal-500 transition-all duration-400'>Tracker</a>
            </li>

            <li className='flex group'>
              <img src={NavIcon} loading='lazy' className='opacity-0 group-hover:opacity-100 transition-all duration-400'/>
              <a href='#docs' className='text-[18px] ml-2 mr-6 group-hover:text-teal-500 transition-all duration-400'>Docs</a>
            </li>

            <li className='flex group'>
              <img src={NavIcon} loading='lazy' className='opacity-0 group-hover:opacity-100 transition-all duration-400'/>
              <a href='#gold' className='text-[18px] ml-2 mr-6 group-hover:text-teal-500 transition-all duration-400'>Gold</a>
            </li>

            <li className='flex group'>
              <img src={NavIcon} loading='lazy' className='opacity-0 group-hover:opacity-100 transition-all duration-400'/>
              <a href='#news' className='text-[18px] ml-2 mr-6 group-hover:text-teal-500 transition-all duration-400'>News</a>
            </li>
          </ul> 
        </div>

      </div>


      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute top-12 right-0 md:hidden bg-primary w-full"
        >
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li>
              <a href="#tracker" className="text-white">Tracker</a>
            </li>
            <li>
              <a href="#gold" className="text-white">Docs</a>
            </li>
            <li>
              <a href="#news" className="text-white">Gold</a>
            </li>
            <li>
              <a href="#news" className="text-white">News</a>
            </li>
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
