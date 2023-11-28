import React from "react";
import "./Feature.css";

const Features = () => {
  return (
    <div class="feature container px-4 mx-auto md:flex justify-center bg-black">
      <div className="md:flex w-screen md:pb-20 items-center md:flex-wrap md:mt-4">
        <div className="md:flex w-screen flex-col">
          <div className=" md:flex md:m-3 justify-center  ">
            <h4 className="text-xl md:text-2xl mb-2 font-bold text-white text-left">
              FEATURES
            </h4>
          </div>

          <div className=" md:flex justify-center  ">
            <h1 className="text-4xl md:text-5xl mb-2 font-bold text-white text-left">
              This is how we stand apart from the crowd
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
