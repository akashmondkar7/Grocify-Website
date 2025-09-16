import React from "react";

const Banner = ({ title, bgImage }) => {
  return (
    <div
      className="h-[300px] md:h-[400px] flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      
   

      {/* Title */}
      <h1 className="text-5xl text-zinc-800 bg-white p-4 z-10 font-bold z-10  rounded-xl">
        {title}
      </h1>

         <div className="absolute inset-0 bg-black/40"></div>

    </div>
  );
};

export default Banner;
