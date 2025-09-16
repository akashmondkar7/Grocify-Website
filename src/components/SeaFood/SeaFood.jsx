import React from 'react'
import Banner from '../Banner/Banner'
import Category from '../Category/Category'
import CategoryPage from '../CategoryPage/CategoryPage'
import BgSeeFood from '../../assets/seafood-banner.jpg'

const SeaFood = () => {
  return (
    <div>
      
        <CategoryPage title='Meat & SeaFood ' bgImage={BgSeeFood} categories={['Meat','SeaFood']}/>
      
    </div>
  )
}

export default SeaFood