import React from "react";

const Footer = () => {
  return (
    <div>
      <div class="md:flex md:flex-wrap md:-mx-4 mt-6 md:mt-12">
        <div class="md:w-1/3 md:px-4 xl:px-6 mt-8 md:mt-0 text-left">
          <span class="w-20 border-t-2 border-solid border-indigo-200 inline-block mb-3"></span>
          <h5 class="text-xl font-medium uppercase mb-4">Cella</h5>
          <p class="text-gray-600">
            We are India’s best lithium-ion mobile battery brand. We got a
            battery for all your needs.
          </p>
        </div>

        <div class="md:w-1/3 md:px-4 xl:px-6 mt-8 md:mt-0 text-left">
          <span class="w-20 border-t-2 border-solid border-indigo-200 inline-block mb-3"></span>
          <h5 class="text-xl font-medium uppercase mb-4">Useful Links</h5>
          <div
            class="hidden md:flex flex-col md:flex-column md:ml-auto mt-3 md:mt-0"
            id="navbar-collapse"
          >
            <a href="#" class="text-gray-600">
              Home
            </a>
            <a href="#" class="text-gray-600">
              Brand
            </a>
            <a href="#" class="text-gray-600">
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
