import React from "react";
import logo from "../assets/logo.png";
import menu from "../assets/menu_logo.svg";

const Header = () => {
  return (
    <div class="header-2">
      <nav class="bg-white py-2 md:py-4">
        <div class="container px-4 mx-auto md:flex items-center">
          <div class="flex justify-between items-center">
            <a href="#" class="font-bold text-l text-indigo-600">
              <img class="h-10" src={logo} alt="Cella" />
            </a>
            <button
              class="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden"
              id="navbar-toggle"
            >
              <i class="fas fa-bars">
                <img class="w-4" src={menu} alt="Cella" />
              </i>
            </button>
          </div>
          <div
            class="hidden md:flex w-1/3 flex-col md:flex-row md:ml-auto mt-3 md:mt-0 justify-between"
            id="navbar-collapse"
          >
            <a
              href="#"
              class="flex items-center p-2 lg:px-4 w-24 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
            >
              Home
            </a>
            <a
              href="#"
              class="flex items-center p-2 lg:px-4 w-24 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
            >
              Brand
              <svg
                class="-mr-1 h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
            <a
              href="#"
              class="p-2 lg:px-4 flex items-center w-24 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
            >
              About
            </a>
            <a
              href="#"
              class="p-2 lg:px-4 flex items-center w-24 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
            >
              Contact
            </a>
            {/* <a
              href="#"
              class="p-2 lg:px-4 w-24 md:mx-2 text-indigo-600 text-center border border-transparent rounded hover:bg-indigo-100 hover:text-indigo-700 transition-colors duration-300"
            >
              Login
            </a>
            <a
              href="#"
              class="p-2 lg:px-4 w-24 md:mx-2 text-indigo-600 text-center border border-solid border-indigo-600 rounded hover:bg-indigo-600 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1"
            >
              Signup
            </a> */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
