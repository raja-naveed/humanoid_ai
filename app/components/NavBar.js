import React from 'react';
import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className='flex justify-between items-center h-[8vh] px-4 lg:px-20 py-2 bg-transparent'>
      <Link href={"/Jhon"} className='flex items-center gap-3 lg:gap-5 text-white text-lg'>
        <img src="tie.svg" alt="Logo" className='h-6 w-6 lg:h-8 lg:w-8' />
        <span className='font-bold text-xl lg:text-2xl'>HUMAOID AI</span>
      </Link>
      <div className='flex items-center gap-3 lg:gap-5 text-white'>
        <div className='flex flex-col text-xs lg:text-base'>
          <h3 className='italic'>Jhon Doe</h3>
          <p className='text-gray-500'>j.do3@email.com</p>
        </div>
        <img src="emailProfile.svg" alt="Profile" className='h-6 w-6 lg:h-8 lg:w-8' />
        <img src="drop.svg" alt="Dropdown" className='h-6 w-6 lg:h-8 lg:w-8' />
      </div>
    </nav>
  );
};

export default NavBar;
