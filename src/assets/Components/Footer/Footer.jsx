import React from 'react'
import { TbShoppingCartBolt } from "react-icons/tb";
import { FaFacebookF , FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";


function Footer() {
  return (
    <>
        <footer className="text-gray-600 body-font border border-t-2">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-purple-900">
      <TbShoppingCartBolt className='w-10 h-10 text-white bg-purple-400 py-2 rounded-lg' />
      <span className="ml-3 text-xl">Cartify</span>
    </a>
    <p className="text-sm text-purple-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2024 Cartify —
      <a href="#" className="text-purple-600 ml-1" rel="noopener noreferrer" target="_blank">@gokulprasath</a>
    </p>
    <span className="inline-flex text-2xl sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <a className="text-purple-500">
        <FaFacebookF />
      </a>
      <a className="ml-3 text-purple-500">
        <FaTwitter />
      </a>
      <a className="ml-3 text-purple-500">
        <FaInstagram />
      </a>
    </span>
  </div>
</footer>
    </>
  )
}

export default Footer