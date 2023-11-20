import React from "react";
import logo from "../assets/logo.png";
import menu from "../assets/menu_logo.svg";
import "./Header.css";

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
            <button class="relative flex flex-col items-center group focus:outline-none">
              <div class="flex items-center p-2 lg:px-4 w-24 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">
                Brand
                <svg
                  class="w-4 h-4 mt-px ml-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div
                class="absolute top-0 hidden w-screen max-w-lg mt-16 bg-white border border-black shadow-lg group-focus:visible"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.50)" }}
              >
                <div class="grid grid-cols-3 gap-8 p-5">
                  <a class="flex" href="#">
                    <div class="flex flex-col">
                      <span class="text-left font-medium leading-none">
                        IPhone
                      </span>
                    </div>
                  </a>
                  <a class="flex" href="#">
                    <div class="flex flex-col">
                      <span class="text-left font-medium leading-none">MI</span>
                    </div>
                  </a>
                  <a class="flex" href="#">
                    <div class="flex flex-col">
                      <span class="text-left font-medium leading-none">
                        Lava
                      </span>
                    </div>
                  </a>
                  <a class="flex" href="#">
                    <div class="flex flex-col">
                      <span class="text-left font-medium leading-none">
                        Techno
                      </span>
                    </div>
                  </a>
                  <a class="flex" href="#">
                    <div class="flex flex-col">
                      <span class="text-left font-medium leading-none">LG</span>
                    </div>
                  </a>
                  <a class="flex" href="#">
                    <div class="flex flex-col">
                      <span class="text-left font-medium leading-none">
                        Mobistar
                      </span>
                    </div>
                  </a>
                  <a class="flex" href="#">
                    <div class="flex flex-col">
                      <span class="text-left font-medium leading-none">
                        Lenovo
                      </span>
                    </div>
                  </a>
                  <a class="flex" href="#">
                    <div class="flex flex-col">
                      <span class="text-left font-medium leading-none">
                        Motorola
                      </span>
                    </div>
                  </a>
                  <a class="flex" href="#">
                    <div class="flex flex-col">
                      <span class="text-left font-medium leading-none">
                        Itel
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </button>
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
