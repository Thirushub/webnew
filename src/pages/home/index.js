import React, { useState, useEffect } from "react";
import Home1 from "../../assets/videos/Home1.mp4";
import Home4 from "../../assets/videos/Home4.mp4";
import Home5 from "../../assets/videos/Home5.mp4";
import Home6 from "../../assets/videos/Home6.mp4";
import Home7 from "../../assets/images/Home7.jpg";
import Home9 from "../../assets/videos/Home9.mp4";
import Home11 from "../../assets/videos/Home11.mp4";
import Home13 from "../../assets/videos/Home13.mp4";
import Homeg3 from "../../assets/images/Homeg3.png";
import Homeg4 from "../../assets/images/Homeg4.png";
import Homeg5 from "../../assets/images/Homeg5.png";
import Homeg6 from "../../assets/images/Homeg6.png";
import Homeg7 from "../../assets/images/Homeg7.png";
import Homeg8 from "../../assets/images/Homeg8.png";
import Homeg9 from "../../assets/images/Homeg9.png";
import Homeg11 from "../../assets/images/Homeg11.png";
import Home15 from "../../assets/videos/Home15.mp4";
import com1 from "../../assets/images/company1.png";
import com2 from "../../assets/images/company2.png";
import com3 from "../../assets/images/company3.png";
import com4 from "../../assets/images/company4.png";
import com5 from "../../assets/images/company5.png";
import com6 from "../../assets/images/company6.png";
import com7 from "../../assets/images/company7.png";
import com8 from "../../assets/images/company8.png";
import com9 from "../../assets/images/company9.png";
import com10 from "../../assets/images/company10.jpeg";
import com11 from "../../assets/images/company11.png";
import com12 from "../../assets/images/company12.png";
import com13 from "../../assets/images/company13.png";
import com14 from "../../assets/images/company14.png";
import com15 from "../../assets/images/company15.png";
import com16 from "../../assets/images/company16.png";
import com17 from "../../assets/images/company17.jpeg";
import com18 from "../../assets/images/company18.png";
import com19 from "../../assets/images/company19.png";
import com20 from "../../assets/images/company20.jpeg";
import com21 from "../../assets/images/company21.png";
import com22 from "../../assets/images/company22.jpeg";
import com23 from "../../assets/images/company23.png";
import com24 from "../../assets/images/company24.png";
import com25 from "../../assets/images/company25.png";
import com26 from "../../assets/images/company26.png";
import com27 from "../../assets/images/company27.png";
import com28 from "../../assets/images/company28.jpg";
import com29 from "../../assets/images/company29.jpg";
import com30 from "../../assets/images/company30.jpeg";
import com31 from "../../assets/images/company31.jpeg";
import com32 from "../../assets/images/company32.png";
import com33 from "../../assets/images/company33.png";
import com34 from "../../assets/images/company34.png";
import com35 from "../../assets/images/company35.png";
import com36 from "../../assets/images/company36.png";
import com37 from "../../assets/images/company37.jpg";
import com38 from "../../assets/images/company38.png";
import com39 from "../../assets/images/company39.png";
import com40 from "../../assets/images/company40.jpg";
import com41 from "../../assets/images/company41.png";
import com42 from "../../assets/images/company42.png";

import "./style.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Checkmark } from "react-checkmark";

const Home = () => {

  const Discover = [
    com13,
    com14,
    com15,
    com16,
    com17,
    com18,
    com19,
    com20,
    com21,
    com22,
    com23,
    com24,
    com25,
    com26,
    com27,
    com28,
    com29,
    com30,
    com31,
    com32,
    com33,
    com34,
    com35,
    com36,
    com37,
    com38,
    com39,
    com40,
    com41,
    com42,
  ];

  const Ecosys = [
    com1,
    com2,
    com3,
    com4,
    com5,
    com6,
    com7,
    com8,
    com9,
    com10,
    com11,
    com12,
  ];

  return (
    <>
      <section>
        <div className="ai-green-Home">
          <div className="init-ai-Home">
            <div className="  md:hidden">
              <div className="init-red-bg px-5">Eliminate the Mundane</div>
            </div>

            <div className="hidden md:block ">
              <div className="">Eliminate the</div>
              <div className="init-red-bg px-5">Mundane</div>
            </div>
          </div>
          <video autoPlay muted loop>
            <source src={Home1} type="video/mp4" />
          </video>
        </div>
      </section>

      <section className="responsive-video-section">
        <div className="relative w-full min-h-screen">
          <video className="absolute " autoPlay muted loop playsInline>
            <source src={Home13} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div
            className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full h-full px-4 py-8 sm:px-6 sm:py-12 md:px-10 md:py-16"
            style={{ paddingTop: "10%" }}
          >
            <div className="w-full md:w-[50%] mb-6 md:mb-0 text-center md:text-left">
              <h2 className="text-black font-bold text-3xl sm:text-4xl md:text-5xl mb-6 md:mb-36 leading-snug md:leading-tight">
                Enable people and organizations to achieve extraordinary
                outcomes, effortlessly.
              </h2>
            </div>
            <div className="w-full md:w-[40%] bg-white bg-opacity-80 p-4 sm:p-6 rounded-md shadow-md">
              <h3 className="text-red-600 font-semibold text-lg sm:text-xl mb-4">
                For data-driven enterprises looking to create exceptional
                customer and employee experience,
              </h3>
              <p className="text-gray-700 font-bold text-sm sm:text-md mb-4">
                SBA provides modular and sustainable AI solutions that are:
              </p>

              <ul className="list-none space-y-2">
                <li className="flex items-start">
                  <span className="text-red-500 text-xl mr-2">
                    <Checkmark size="25px" color="red" />
                  </span>
                  <span>Easy to adopt</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 text-xl mr-2">
                    <Checkmark size="25px" color="red" />
                  </span>
                  <span>Trusted, governed, secure, and ethical</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 text-xl mr-2">
                    <Checkmark size="25px" color="red" />
                  </span>
                  <span>
                    Focused on augmenting human intelligence, not replacing it
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 text-xl mr-2">
                    <Checkmark size="25px" color="red" />
                  </span>
                  <span>Trained on your quality enterprise data</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 text-xl mr-2">
                    <Checkmark size="25px" color="red" />
                  </span>
                  <span>
                    Transformative – Helping you gain a truly competitive edge
                    over the market
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="relative w-full h-screen">
          <video
            className="absolute inset-0 object-cover w-full h-full"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={Home15} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black bg-opacity-50">
            <h2 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 text-center px-4">
              Intelligent Solutions
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6 md:px-10 w-full max-w-screen-xl">
              <div className="bg-white p-4 md:p-6 rounded-md shadow-md flex flex-col items-center hover:shadow-lg transition-shadow duration-300">
                <img
                  src={Homeg7}
                  alt="Infrastructure & Application Modernization"
                  className="h-12 md:h-16 mb-4"
                />
                <h3 className="text-center text-black font-semibold text-base md:text-lg">
                  Infrastructure & Application Modernization
                </h3>
                <div className="border-t-4 border-red-600 w-full mt-4"></div>
              </div>

              <div className="bg-white p-4 md:p-6 rounded-md shadow-md flex flex-col items-center hover:shadow-lg transition-shadow duration-300">
                <img
                  src={Homeg8}
                  alt="Cyber Resiliency"
                  className="h-12 md:h-16 mb-4"
                />
                <h3 className="text-center text-black font-semibold text-base md:text-lg">
                  Cyber Resiliency
                </h3>
                <div className="border-t-4 border-red-600 w-full mt-4"></div>
              </div>

              <div className="bg-white p-4 md:p-6 rounded-md shadow-md flex flex-col items-center hover:shadow-lg transition-shadow duration-300">
                <img
                  src={Homeg9}
                  alt="Data, Automation & AI"
                  className="h-12 md:h-16 mb-4"
                />
                <h3 className="text-center text-black font-semibold text-base md:text-lg">
                  Data, Automation & AI
                </h3>
                <div className="border-t-4 border-red-600 w-full mt-4"></div>
              </div>

              <div className="bg-white p-4 md:p-6 rounded-md shadow-md flex flex-col items-center hover:shadow-lg transition-shadow duration-300">
                <img
                  src={Homeg11}
                  alt="Managed Services"
                  className="h-12 md:h-16 mb-4"
                />
                <h3 className="text-center text-black font-semibold text-base md:text-lg">
                  Managed Services
                </h3>
                <div className="border-t-4 border-red-600 w-full mt-4"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="relative w-full h-screen">
          <video autoPlay muted loop playsInline className="absolute ">
            <source src={Home11} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="relative z-10 py-16 w-full md:ml-[22%] md:w-[78%] px-4 sm:px-6 sm:py-10">
            <h2 className="text-red-600 font-semibold text-xl sm:text-2xl md:text-2xl mb-6 sm:mb-12 text-center md:text-left">
              For core applications and domains of banking, insurance, and
              institutions
            </h2>

            <p className="text-black text-lg sm:text-xl md:text-2xl mb-6 sm:mb-12 text-center md:text-left">
              We drastically simplify business and IT operations by building{" "}
              <span className="font-bold">
                digital systems powered by AI, automation, and hybrid cloud
                infrastructure
              </span>
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 px-4 md:px-0">
              <div className="bg-red-500 text-white p-4 rounded-lg shadow-md text-center">
                <h3 className="font-semibold text-lg sm:text-xl mb-4">BFSI</h3>
                <img src={Homeg3} alt="BFSI" className="mx-auto" />
              </div>

              <div className="bg-red-500 text-white p-4 rounded-lg shadow-md text-center">
                <h3 className="font-semibold text-lg sm:text-xl mb-4">
                  Manufacture
                </h3>
                <img src={Homeg4} alt="Manufacturing" className="mx-auto" />
              </div>

              <div className="bg-red-500 text-white p-4 rounded-lg shadow-md text-center">
                <h3 className="font-semibold text-lg sm:text-xl mb-4">Media</h3>
                <img src={Homeg5} alt="Media" className="mx-auto" />
              </div>

              <div className="bg-red-500 text-white p-4 rounded-lg shadow-md text-center">
                <h3 className="font-semibold text-lg sm:text-xl mb-4">
                  IT/ITES
                </h3>
                <img src={Homeg6} alt="IT/ITES" className="mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="relative w-full h-screen overflow-hidden">
          <video autoPlay muted loop className="absolute ">
            <source src={Home9} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="relative z-10 flex items-center justify-between w-full h-full px-1">
            <div className=" bg-white bg-opacity-70 p-8 rounded-lg shadow-lg">
              <p className="text-lg md:text-2xl font-bold text-black leading-relaxed">
                In the modern workplace,{" "}
                <span className="text-red-500">
                  repetitive tasks like data entry and information retrieval
                </span>{" "}
              </p>
              <p className="text-lg md:text-2xl font-bold text-black leading-relaxed">
                hinder employees from engaging in strategic and creative aspects
                of their roles
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative h-screen">
        <div className="absolute inset-0 flex justify-center items-center z-10 text-center">
          <div className="text-white px-4">
            <h1 className="text-white text-3xl md:text-5xl font-bold">
              Our mission
            </h1>
            <p className="mt-4 text-xl md:text-2xl init-red-bg1">
              At our core, we believe in empowering human potential through the
              responsible use of artificial intelligence and data-driven
              technologies.
            </p>
            <p className="mt-2 text-base md:text-lg text-gray-300">
              Ethically developed technologies can enhance human creativity,
              decision-making, and product experiences.
            </p>
          </div>
        </div>
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src={Home6} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black opacity-50 z-5"></div>
      </section>

      <section className="relative w-full h-screen overflow-hidden">
        <div className="absolute inset-0 flex justify-center items-center z-10 text-center px-4">
          <p className="text-base sm:text-lg md:text-2xl lg:text-4xl xl:text-4xl leading-relaxed">
            <span className="text-black">
              The problem is not that computers will begin to think like men,
            </span>
            <span className="text-red-500">
              {" "}
              It’s that men will begin to think like computers
            </span>
          </p>
        </div>

        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover z-0 hidden md:block"
        >
          <source src={Home5} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      <section className="w-full bg-gray-50">
        <div className="py-10">
          <div className="mx-auto px-4 mb-10 max-w-screen-xl">
            <div className="flex justify-between items-start">
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl font-bold mb-4">
                  Discover how businesses become more intelligent with SBA
                </h2>
              </div>
              <div className="w-full md:w-1/2 text-right">
                <p className="text-lg text-gray-600 mb-6">
                  IT teams and business functions of all sizes are leveraging
                  our expertise to create value for themselves and their
                  customers.
                </p>
                <a className="text-lg">View customer stories →</a>
              </div>
            </div>
          </div>

          <div className="mx-auto px-8 max-w-screen-xl">
            <h3 className="text-lg font-semibold text-center mb-4 init-red-bg1">
              Trusted by talented leaders at:
            </h3>

            <Slider
              dots={false}
              infinite={true}
              speed={500}
              slidesToShow={5}
              slidesToScroll={1}
              autoplay={true}
              autoplaySpeed={2000}
              nextArrow={
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              }
              prevArrow={
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 5l-7 7 7 7"
                    />
                  </svg>
                </div>
              }
            >
              {Discover.map((logo, index) => (
                <div key={index} className="px-2">
                  <img
                    src={logo}
                    alt={`Company logo ${index + 1}`}
                    className="mx-auto h-16"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      <section
        className="relative bg-cover bg-center py-36"
        style={{ backgroundImage: `url(${Home7})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        <div className="relative z-10 text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            Why work with us?
          </h2>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4">
          <div className="bg-white shadow-lg p-6 rounded-lg text-center border-t-4 border-red-500">
            <h3 className="text-4xl font-bold mb-2">300+</h3>
            <p className="text-lg font-medium">Customers</p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg text-center border-t-4 border-blue-500">
            <h3 className="text-4xl font-bold mb-2">30+</h3>
            <p className="text-lg font-medium">Years in Market</p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg text-center border-t-4 border-red-500">
            <h3 className="text-4xl font-bold mb-2">Best</h3>
            <p className="text-lg font-medium">Predictive support</p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg text-center border-t-4 border-blue-500">
            <h3 className="text-4xl font-bold mb-2">ISO</h3>
            <p className="text-lg font-medium">
              Process Rigor & Certifications
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-gray-50">
        <div className="py-10">
          <div className="mx-auto px-4 mb-10 max-w-screen-xl">
            <div className="flex flex-col items-center text-center">
              <h2 className="text-3xl font-bold mb-4">Our partner ecosystem</h2>
              <p className="text-lg text-gray-600 mb-6">
                Empowering our success through the collective strength and
                expertise of our partner network
              </p>
            </div>
          </div>

          <div className="mx-auto px-6 max-w-screen-xl text-center">
            <h3 className="text-lg font-semibold mb-4 init-red-bg1">
              Trusted by talented leaders at:
            </h3>

            <Slider
              dots={false}
              infinite={true}
              speed={500}
              slidesToShow={5}
              slidesToScroll={1}
              autoplay={true}
              autoplaySpeed={2000}
              nextArrow={
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              }
              prevArrow={
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 5l-7 7 7 7"
                    />
                  </svg>
                </div>
              }
            >
              {Ecosys.map((logo, index) => (
                <div key={index} className="px-2">
                  <img
                    src={logo}
                    alt={`Company logo ${index + 1}`}
                    className="mx-auto h-16"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      <section>
      <a href="/Resources" >
        <div class="ai-green-vi">
          <div class="init-ai-section">
            <div >Resources</div>
            
          </div>
          <video autoPlay muted loop>
            <source src={Home4} type="video/mp4" />
          </video>
        </div>
        </a>
      </section>

      <section className="w-full bg-gray-800 py-8">
        <div className="px-4 sm:px-6 lg:px-8 max-w-screen-lg mx-auto bg-slate-800 p-8">
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-lg font-semibold text-black"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  placeholder="Your Full Name"
                  className="mt-2 w-full p-3 border border-gray-300 rounded-lg bg-gray-200 text-gray-900"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-lg font-semibold text-black"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your Work Email Address"
                  className="mt-2 w-full p-3 border border-gray-300 rounded-lg bg-gray-200 text-gray-900"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="phone"
                  className="block text-lg font-semibold text-black"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phone"
                  placeholder="Your Phone Number"
                  className="mt-2 w-full p-3 border border-gray-300 rounded-lg bg-gray-200 text-gray-900"
                />
              </div>
              <div>
                <label
                  htmlFor="company"
                  className="block text-lg font-semibold text-black"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  placeholder="Your Company Name"
                  className="mt-2 w-full p-3 border border-gray-300 rounded-lg bg-gray-200 text-gray-900"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="support"
                className="block text-lg font-semibold text-black"
              >
                Support Required On
              </label>
              <select
                id="support"
                className="mt-2 w-full p-3 border border-gray-300 rounded-lg bg-gray-200 text-gray-900"
              >
                <option value="" disabled>
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
                className="block text-lg font-semibold text-black"
              >
                Query
              </label>
              <textarea
                id="query"
                placeholder="Describe your Requirement in Detail"
                className="mt-2 w-full p-3 border border-gray-300 rounded-lg bg-gray-200 text-gray-900"
                rows="5"
              ></textarea>
            </div>
            <div className="flex justify-start">
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Submit Request
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Home;
