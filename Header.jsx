import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <div className="py-5 px-5 md:px-12 lg:px-28">
      <div className="flex justify-between items-center">
        <Image 
          src="/assets/restuasmth.png" // Ensure this file exists in the 'public' folder
          width={180} 
          height={100} // Adjust height as necessary
          alt="Header Image"
          className="w-[130px] sm:w-auto" 
        />
        <button className= 'flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-8px_9px_0px_gray]'>
            Get Started
        </button>
      </div>
      <div className = 'text-center my-8'>
        <h1 className = 'text-3xl sm:text-5xl font-medium'>Latest Blog</h1>
        <p className = 'mt-10 max-w-[740px] m-auto text-xs sm:text-base'>Nodal analysis applies KCL to find unknown voltages in a given
                circuit, while mesh analysis applies KVL to find unknown currents.
                Mesh analysis is not quite as general as nodal analysis because it is
                only applicable to a circuit that is planar</p>
        <form className = 'flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-8px_9px_0px_gray]' action = ''>
            <input type = 'email' placeholder = 'Enter your e-mail' className= 'pl-4 outline-none' />
            <button type='submit' className = 'border-l border-gray py-4 px-4 sm:px-8 active:bg-gray-500 active:text-white'>Subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default Header;
