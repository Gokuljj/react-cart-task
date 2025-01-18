import React from 'react'

import  HeroImg from '../../images/HeroImg.jpg'

function Hero() {
  return (
    <>
    <section className="text-purple-500 body-font">
  <div className="container mx-auto flex px-5 py-[20px] md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-5xl text-3xl mb-4 font-medium text-purple-900">Welcome
        <br className="hidden lg:inline-block" /> To Cartify
      </h1>
      <p className="mb-8 leading-relaxed">Shop Smarter: Genuine Finds, Easy Returns, COD Convenience – Explore Now!</p>
      <div className="flex justify-center">
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded h-[500px] w-[500px]" alt="hero" src={HeroImg} />
    </div>
  </div>
</section>
</>
  )
}

export default Hero