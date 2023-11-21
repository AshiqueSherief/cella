import React from "react";

const Products = () => {
  return (
    <div>
      <div>
        <div className="product md:flex justify-evenly bg-white py-6 md:py-12">
          <div className="md:flex md:w-1/3 md:flex-wrap mt-6 md:mt-12 items-start"></div>
          <div className="md:flex md:w-1/3 md:pb-20 items-center md:flex-wrap mt-6 md:mt-12">
            <div>
              <h1 className="text-4xl md:text-5xl mb-2 font-bold text-black-600 text-left">
                Our Products
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
