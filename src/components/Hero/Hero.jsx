import React from 'react'
import Grocery from '../../assets/grocery.png'
import Button from '../Button/Button'
const Hero = () => {
  return (
  <section>
    <div className=' min-h-screen md:max-w-[1400px] mx-auto px-10 md:flex flrx-col items-center md:pt-15 pt-30'>

        {/* hero content */}
        <div className='flex-1  '>
            <span className='bg-orange-100 text-orange-500 md:text-lg text-md px-5 py-2 rounded-full h-4vh'>Export Best Quality...</span>
            <h2 className='text-7xl/20 font-bold mt-4'>
                Tasty Organic <span className='text-orange-800'> Fruits</span> & <span className='text-orange-800'>Veggies</span> <br />In Your City
            </h2>
            <p className=' text-gray-600  md:text-lg  p-2'>
                Bred for a high content of beneficial substances. Our products are all fresh and healthy.

            </p>
            <Button content="Shop Now"/>
        </div>

        {/* hero image */}
        <div className='flex-1'>
            <img src={Grocery} alt="" />
        </div>





    </div>


  </section>
  )
}

export default Hero
