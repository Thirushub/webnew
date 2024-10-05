import React, { useState, useEffect, useRef } from "react";
import sbalogo from "../../assets/images/sbalogo.svg";
import "./styles.scss";

const Navbar = ({ isTransparent }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const formRef = useRef(null); // Ref to detect clicks outside the form

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleForm = () => {
    setIsFormVisible(!isFormVisible); // Toggle form visibility
  };

  // Detect clicks outside the form and close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        setIsFormVisible(false); // Close form if clicked outside
      }
    };

    if (isFormVisible) {
      document.addEventListener("mousedown", handleClickOutside); // Listen for outside clicks
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside); // Clean up event listener
    };
  }, [isFormVisible]);

  return (
    <header
      className={`transition-all duration-300 ${isTransparent ? "navbar-transparent" : "navbar-solid"
        }`}
    >
      <nav className="flex flex-col md:flex-row items-center w-[92%] mx-auto py-4">
        {/* Logo section */}
        <div className="flex w-full md:w-auto items-center">
          <a href="/">
            <img className="w-16 cursor-pointer" src={sbalogo} alt="Logo" />
          </a>
          <div className="block md:hidden ml-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 cursor-pointer"
              viewBox="0 0 512 512"
              onClick={toggleMenu}
              fill="black"
              stroke="black"
            >
              <title>Menu</title>
              <path
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="48"
                d="M88 152h336M88 256h336M88 360h336"
                className="ionicon-fill-none"
              />
            </svg>
          </div>
        </div>

        {/* Navigation links */}
        <div
          className={`flex flex-col md:flex-row items-center w-full md:w-auto mt-4 md:mt-0 ${isMenuOpen ? "block" : "hidden"
            } md:flex md:justify-end md:ml-auto md:gap-6`}
        >
          <ul className="flex flex-col md:flex-row md:items-center md:gap-[4vw] gap-8">
            <li>
              <a
                className="hover:text-gray-500 transition duration-500 font-medium"
                href="/ManagedService"
              >
                Services
              </a>
            </li>
            <li>
              <a
                className="hover:text-gray-500 transition duration-500 font-medium"
                href="/Industries"
              >
                Industries
              </a>
            </li>
            <li>
              <a
                className="hover:text-gray-500 transition duration-500 font-medium"

              >
                Client stories
              </a>
            </li>
            <li>
              <a
                className="hover:text-gray-500 transition duration-500 font-medium"
                href="/Resources"
              >
                Resources
              </a>
            </li>
          </ul>
          <button
            className="bg-[#ff0000] text-white px-5 py-2 rounded-full hover:bg-[#c00707] mt-4 md:mt-0"
            onClick={toggleForm} // Call the toggleForm function on click
          >
            Request a demo
          </button>
        </div>
      </nav>

      {/* Conditionally render the form */}
      {isFormVisible && (
        <section className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div
            ref={formRef} // Attach ref to form container
            className="p-4 bg-white max-w-md w-full rounded-lg shadow-lg"
          >
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-semibold text-black"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    placeholder="Your Full Name"
                    className="mt-1 w-full p-2 border border-gray-300 rounded-lg bg-gray-200 text-gray-900"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-black"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Your Work Email Address"
                    className="mt-1 w-full p-2 border border-gray-300 rounded-lg bg-gray-200 text-gray-900"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-black"
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="phone"
                    placeholder="Your Phone Number"
                    className="mt-1 w-full p-2 border border-gray-300 rounded-lg bg-gray-200 text-gray-900"
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-semibold text-black"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    placeholder="Your Company Name"
                    className="mt-1 w-full p-2 border border-gray-300 rounded-lg bg-gray-200 text-gray-900"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="support"
                  className="block text-sm font-semibold text-black"
                >
                  Support Required On
                </label>
                <select
                  id="support"
                  className="mt-1 w-full p-2 border border-gray-300 rounded-lg bg-gray-200 text-gray-900"
                >
                  <option value="" disabled selected>
                    Choose a Solution/Service
                  </option>
                  <option value="service1">Data and AI</option>
                  <option value="service2">Infra</option>
                  <option value="service3">Business support</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="query"
                  className="block text-sm font-semibold text-black"
                >
                  Query
                </label>
                <textarea
                  id="query"
                  placeholder="Describe your Requirement in Detail"
                  className="mt-1 w-full p-2 border border-gray-300 rounded-lg bg-gray-200 text-gray-900"
                  rows="4"
                ></textarea>
              </div>
              <div className="flex justify-start">
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition duration-300"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </section>
      )}
    </header>
  );
};

export default Navbar;
