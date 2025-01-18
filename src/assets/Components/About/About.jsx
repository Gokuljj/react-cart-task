import React from 'react'
import AboutImg from '../../images/AboutImg.jpg'

function About() {
  return (
    <div className="py-16 bg-purple-50">
            <div className="container m-auto px-6 text-purple-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-3/12">
                        <img
                            src={AboutImg}
                            alt="Aboutimage"
                            className='w-full rounded-lg'
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-purple-900 font-bold md:text-4xl">
                            Cartify
                        </h2>
                        <p className="mt-6 text-pruple-600">
                        Shopping Cart is a top digital shopping platform in India, offering innovative tech for an easy, seamless, and customer-first online experience. Discover quality products made for you!
                        </p>
                        <p className="mt-4 text-purple-600">
                        The future of e-commerce is green, fair, and for everyone. We're committed to making a positive impact on the planet and communities as we innovate and evolve.
                        </p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default About