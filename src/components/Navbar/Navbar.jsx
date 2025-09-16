import React, { useEffect, useState } from 'react'
import { IoHeart } from "react-icons/io5";
import { HiShoppingBag } from "react-icons/hi2";
import { MdSearch } from "react-icons/md";
import { TbMenu2,TbMenu3} from "react-icons/tb";
import { Link } from 'react-router-dom';





const Navbar = ({handleScroll,  searchTerm, setSearchTerm}) => {

 const[showMenu,setShowMenu]=useState(false);
 const[isScrolled,setIsScrolled]=useState(false);

 const toggleMenu=()=>{
  setShowMenu(!showMenu);
 }


 useEffect(()=>{
  const handleScroll=()=>{
    setIsScrolled(window.scrollY>10)}
    window.addEventListener("scroll",handleScroll);
    return()=> window.removeEventListener("scroll",handleScroll);
  
  
  
  },[])
    



  return (
   
<header className={`bg-white fixed  top-0  right-0 left-0 z-50 ${isScrolled ? `shadow-xl/5`:``}   `}>
    
    <nav className='max-w[1400px] mx-auto px-10 md:h-[14vh] h-[12vh] flex justify-between align-center  m-auto p-4  '>

      {/* logo */}
      <Link to="/" className='text-3xl font-bold '  >
      Gr<span className='text-orange-600 upparcase'>O</span>cify
    </Link>
    {/* desktom */}
      <ul className='md:flex item-center gap-x-15 hidden'>
        <li className='flex'>   
          <a href="#" className='font-semibold tracking-wider text-orange-600 '>Home</a>
        </li>
        <li className='flex'>
          <a href="#"className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>About</a>
        </li>
        <li className='flex'> 
          <a href="#"className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Process</a>
           </li>
        <li className='flex'>
          <a href="#"className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Contact Us</a>
        </li>
      </ul>


      {/* navAction */}
      <div className='flex items-center gap-x-5'>

        {/* input field */}

        <div className='md:flex  p-1 border-2 border-orange-500 hover:border rounded-full hidden '>
          <input type="text" id='text' placeholder='Search...'autoComplete='off'
          className='flex-1 h-[5vh] px-3 focus:outline-none'
          onFocus={handleScroll}
          value={searchTerm}
          onChange={ (e)=> setSearchTerm(e.target.value)}
          />
          <button className='bg-gradient-to-b from-orange-600 to-orange-300 text-white  w-7 h-7 flex justify-center item-center  rounded-full text-xl p-1'
          ><MdSearch /></button>
         
        </div>
        <a href="#" className='text-zinc-800 text-2xl'>
          <IoHeart />
        </a>
         <a href="#" className='text-zinc-800 text-2xl'>
          <HiShoppingBag />

        </a>
        {/* hamberger */}
        <a href="#"className='text-zinc-800 text-3xl md:hidden' onClick={toggleMenu}>

          {showMenu ?<TbMenu3 />: <TbMenu2 />}


        </a>

        {/* MobileMenu */}

        <ul className={` flex  flex-col gap-y-15 bg-orange-500/15 backdrop-blur-2xl shadow-xl p-10 item-center gap-x-15 md:hidden absolute top-30 transform  -translate-x-1/2 rounded-xl    transition-all duration-300  ${showMenu ? "left-1/2" : "-left-1/2"}`}>
        <li className='flex'>   
          <a href="#" className='font-semibold tracking-wider text-orange-900 '>Home</a>
        </li>
        <li className='flex'>
          <a href="#"className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>About</a>
        </li>
        <li className='flex'> 
          <a href="#"className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Process</a>
           </li>
        <li className='flex'>
          <a href="#"className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Contact Us</a>
        </li>
        <li className=' flex p-1 border-2 border-orange-500 hover:border rounded-full md:hidden '>
          <input type="text" id='text' placeholder='Search...'autoComplete='off'
          className='flex-1 h-[5vh] px-3 focus:outline-none'/>
          <button className='bg-gradient-to-b from-orange-900 to-orange-500 text-white  w-7 h-7 flex justify-center item-center  rounded-full text-xl p-1'
          ><MdSearch /></button>
         
        </li>
      </ul>




      </div>


    </nav>


   </header>
  )
}

export default Navbar
