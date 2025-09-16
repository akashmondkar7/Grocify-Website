import React from 'react'
import Banner from '../Banner/Banner'
import ProductsList from '../ProductList/ProductList'
import Cards from '../Cards/Cards'

const CategoryPage = ({ title, bgImage ,categories=[] }) => {

    let filteredItems =categories.includes('All')
    ? ProductsList
    : ProductsList.filter(item=> categories.includes(item.category));

  const renderProduct = filteredItems.map((product) => {
    return (
      <Cards 
        key={product.id} 
        image={product.image} 
        name={product.name} 
        price={product.price} 
      />
    )
  })

  return (
    <div>
      <Banner title={title} bgImage={bgImage} />

      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-9 py-20 max-w-[1400px] mx-auto px-10'>
        {renderProduct}
      </div>
    </div>
  )
}

export default CategoryPage
