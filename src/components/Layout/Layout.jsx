import React, { useState } from 'react'

import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

const Layout = () => {

    const [searchTerm, setSearchTerm] =useState(" ");




  const handleScroll=()=>{

    const section = document.getElementById('product-section');
    if(section){
      section.scrollIntoView({behavior:'smooth'});
    }}


  
  return (
    <div>
        <Navbar  
        handleScroll={handleScroll}
        
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm}
        
        />
        <Outlet
        context={{ searchTerm }}/>
        <Footer/>
      
    </div>
  )
}

export default Layout
