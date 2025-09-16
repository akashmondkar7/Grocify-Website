import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import Heading from "../Heading/Heading";
import ProductsList from "../ProductList/ProductList";
import Cards from "../Cards/Cards";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const Products = () => {
  const categories = ["All", "Fruits", "Vegetables", "Dairy", "SeaFood","Meat"];

  const [activeTab, setActiveTab] = useState("All");

  const { searchTerm } = useOutletContext()

  let filteredItems =ProductsList.filter(item=>{
    const matchesCategory = activeTab === "All"?
    ProductsList:activeTab === item.category

      const matchesSearch = item.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());


    return matchesCategory && matchesSearch;
  })
   
      
      

  const renderCards = filteredItems.slice(0, 8).map((product) => {
    return (
      <Cards
        key={product.id}
        image={product.image}
        name={product.name}
        price={product.price}
      />


    );
  });

  return (
    <section id='product-section'>
      <div className="max-w-[1400px] mx-auto px-10 py-20">
        <Heading Highlight="Our" Heading=" Products" />

        {/* Tabs */}
        <div className="flex flex-wrap gap-3 justify-center mt-10 ">
          {categories.map((category) => {
            return (
              <button
                key={category}
                className={`px-5 py-2 text-lg rounded-lg cursor-pointer 
                     ${
                       activeTab === category
                         ? "bg-gradient-to-b from-orange-400 to-orange-500 text-white"
                         : "bg-zinc-100"
                     } `}
                onClick={() => setActiveTab(category)}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Products Listing */}
        <div className="grid grids-col-1 md:grid-cols-4 gap-9 mt-20">
          {
            filteredItems.length===0 ?
            <p className="text-center col-span-4 text-zinc-800 text-lg">No Product Found</p>
            : renderCards
          }
        </div>

        <div className="mt-15 mx-auto w-fit">
          {/* <Button content="View All"/> */}
          <Link
            to="/AllProducts"
            className="bg-gradient-to-b from-orange-400 to-orange-600 md:text-xl text-md text-white px-8 py-3 text-white rounded-full hover:scale-105 hover:to-orange-700 transition-all duration-300 cursor-pointer mt-5"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;
