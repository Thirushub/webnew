import React from "react";
import "./style.scss";
import Contact from "../../assets/videos/Contact.mp4";

const ContactUs = () => {
  return (
    <>
      <section>
        <div class="ai-green-mas">
          <div class="init-ai-sectionmas1">
            <div className="Infras">Contact Us </div>
            <div class="init-red-bg px-5">
              Let's Connect and Transform Your Business
            </div>
          </div>
          <video autoPlay muted loop>
            <source src={Contact} type="video/mp4" />
          </video>
        </div>
      </section>

      <section>
        <div className="p-8 bg-white">
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
                <option value="" disabled selected>
                  Choose a Solution/Service
                </option>
                <option value="service1">Data and AI</option>
                <option value="service2">Infra   </option>
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

export default ContactUs;
