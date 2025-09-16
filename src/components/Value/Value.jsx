import React from 'react'
import Heading from '../Heading/Heading'
import { FaHeart, FaSeedling, FaShieldAlt } from 'react-icons/fa'
import { FaLeaf } from 'react-icons/fa'
import Basket from '../../assets/basket-full-vegetables.png'
const Value = () => {

  const LeftValues= value.slice(0,2).map(item =>{
    return(
      <div key={item.id} className='flex md:flex-row-reverse items-center gap-7'>
        <div>
          <span className='flex justify-center items-center text-white bg-gradient-to-b from-orange-400 to-orange-500 w-13 h-13 rounded-full'>{item.icon}</span>
        </div>
        <div className='md:text-right'>
          <h3 className='text-zinc-800 text-3xl font-bold'>{item.title}</h3>
          <p className='text-zinc-600 mt-2'>{item.para}</p>
        </div>
      </div>
    )
  })

    const RightValues= value.slice(2).map(item =>{
    return(
      <div key={item.id} className='flex  items-center gap-7 '>
        <div>
          <span className='flex justify-center items-center text-white bg-gradient-to-b from-orange-400 to-orange-500 w-13 h-13 rounded-full'>{item.icon}</span>
        </div>
        <div className=' '>
          <h3 className='text-zinc-800 text-3xl font-bold'>{item.title}</h3>
          <p className='text-zinc-600 mt-2'>{item.para}</p>
        </div>
      </div>
    )
  })
  return (
    <section>

      <div className='max-w-[1400px] mx-auto  px-10 py-20'>
        <Heading Highlight="Our" Heading=" Values"/>

        <div className='flex md:flex-row flex-col gap-15 md:gap-5 mt-15 '>
          {/* Left Values */}
          <div  className='md:min-h-100 gap-15 flex flex-col  justify-between '>
            {LeftValues}


          </div>
          <div className='md:flex w-1/2 hidden'>
            <img src={Basket} alt="" />
          </div>
          {/* Right Values */}
          <div className='md:min-h-100 gap-15 flex flex-col justify-between '>
            {RightValues}
          </div>

        </div>




      </div>

    </section>
 
  )
}

export default Value


const value = [
  {
    id: 1,
    title: "Trust",  
    para:"It is a long established fact that a reader will be distracted by the readable.",
    icon:<FaHeart/>
  },

  {
    id: 2,
    title: "Always Fresh",  
    para:"It is a long established fact that a reader will be distracted by the readable.",
    icon:<FaLeaf/>
  },

   {
    id: 3,
    title: "Food Safety",  
    para:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    icon:<FaShieldAlt/>
  },

  {
    id: 4,
    title: "100% Organic",  
    para:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    icon:<FaSeedling/>
  },


]