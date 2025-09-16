import React from 'react'

const Button = (props) => {
  return (
    <button className='bg-gradient-to-b from-orange-400 to-orange-600 md:text-xl text-md text-white px-8 py-3 text-white rounded-full hover:scale-105 hover:to-orange-700 transition-all duration-300 cursor-pointer mt-5'>

        {props.content}
    </button>
  )
}

export default Button
