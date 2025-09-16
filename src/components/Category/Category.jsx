import React from 'react'
import Heading from '../Heading/Heading'
import FruitCat from '../../assets/fruits-and-veggies.png'
import DairyCat from '../../assets/dairy-and-eggs.png'
import MeatCat from '../../assets/meat-and-seafood.png'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'


const Category = () => {

    const renderCard= Categories.map(Cards=>{
        return(
            <div className='flex-1 basis-[300px]'key={Cards.id}>

                {/* card image */}
                <div className='w-full min-h-[35vh] relative -mb-8'>
                    <img src={Cards.image} alt="" className='absolute bottom-0' />
                </div>

                    {/* card content */}

                <div className='bg-zinc-100 pt-17 p-8 rounded-xl'>
                    <h3 className='text-zinc-800 text-3xl font-bold'>{Cards.title}</h3>
                    <p className='text-zinc-600 mt-3 mb-9'>{Cards.discription}</p>
                    {/* <Button content="See All"/> */}
                    <Link to={Cards.path} className='bg-gradient-to-b from-orange-400 to-orange-600 md:text-xl text-md text-white px-8 py-3 text-white rounded-full hover:scale-105 hover:to-orange-700 transition-all duration-300 cursor-pointer mt-5'>See Alls

                    </Link>
                </div>


            </div>




        )})


  return (
   <section>

        <div className='max-w-[1400px] mx-auto px-10 py-20 '>
            <Heading Highlight="Shop" Heading=" by Category"/>

            {/* Category Cards */}
            <div className='flex flex-wrap gap-10 md:mt-15 '>
                {renderCard}
                
            </div>

            
            




        </div>


   </section>
  )
}

export default Category


const Categories = [
    {
        id:1,
        title:"Fruits & Veggies",
        discription:" Fresh, organic produce sourced daily from local farms. Explore a wide range of seasonal fruits and crisp vegetables.",
        image:FruitCat,
        path:"/Fruits"
     },
      {
        id:2,
        title:"Dairy & Eggs",
        discription:"Wholesome dairy products and free-range eggs. From creamy milk and yogurt to artisanal cheeses.",
        image:DairyCat,
        path:"/Dairy"
     },
      {
        id:3,
        title:"Meat & SeaFood",
        discription:"High-quality, responsibly sourced meat and seafood. Choose from fresh cuts, marinated options, and more.",
        image:MeatCat,
        path:"/SeaFood"
     },



    ]