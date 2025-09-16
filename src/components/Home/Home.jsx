import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import Category from '../Category/Category' 
import Value from '../Value/Value'
import Products from '../Products/Products'
import Discount from '../Discount/Discount'
import Process from '../Process/Process'
import Testimonial from '../Testimonials/Testimonial'
// import { useState } from 'react'



const Home = () => {

  // const[searchTerm, setSearchTerm] =useState('');



  return (
    <div>
        
      <Hero/>
      <Category/>
      <Value/>
      <Products/>
      <Discount/>
      <Process/>
      <Testimonial/>
      {/* <Footer/> */}

      
    </div>
  )
}

export default Home
