import React from 'react'
import { Link } from 'react-router-dom'
import { TbShoppingCartBolt } from "react-icons/tb";
import { FaArrowRight } from "react-icons/fa6";



const navigations = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'Products',
        path: '/products'
    },
    {
        name: 'About',
        path: '/about'
    },
]

function Header() {
    return (
      <header className="text-white body-font font-medium shadow-lg bg-purple-400">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <Link to={'/'} className="flex cursor-pointer title-font font-medium items-center text-purple-400 mb-4 md:mb-0">
        <TbShoppingCartBolt className='w-10 h-10 text-white' />
        <span className="ml-3 text-3xl text-white tracking-widest font-semibold">Cartify</span>
      </Link>
      <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      {
        navigations.map((navigation) => {
          return(
            <Link to={navigation.path} className=' mr-5 hover:text-purple-900'>{navigation.name}</Link>
          )
        })
      }
      </nav>
      <Link to={'/cart'} className="inline-flex items-center gap-2 bg-white border-0 py-2 px-4 text-purple-700 focus:outline-none hover:bg-purple-400 hover:text-white rounded text-base mt-4 md:mt-0">Go To Cart  
      <FaArrowRight />
      </Link>
    </div>
  </header>
    )
  }
  
  export default Header