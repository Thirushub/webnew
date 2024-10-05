import React from "react";
import "./style.scss";
import solutions from "../../assets/videos/Solutions.mp4";
import solutions1 from "../../assets/images/solution1.jpg";
import solutions2 from "../../assets/images/solution2.jpg";
import solutions3 from "../../assets/images/solution3.jpg";
import solutions4 from "../../assets/images/solution4.jpg";
import solutions5 from "../../assets/images/solution5.jpg";
import { FaLongArrowAltRight } from "react-icons/fa";

const SolutionsPage = () => {
  return (
    <>
      <section>
        <div class="ai-green-v3">
          <div class="init-ai-section3">
            <div className="abusss3">Our Industry Expertise & Solutions</div>
            <div class="init-red-bg ">
              Customized solutions for every industry
            </div>
          </div>
          <video autoPlay muted loop>
            <source src={solutions} type="video/mp4" />
          </video>
        </div>
      </section>

      <section>
        <div className="p-6 md:p-10 mb-5 bg-white rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            <div className="md:w-1/2 w-full md:pl-6 mt-6 md:mt-6">
              <h2 className="text-3xl font-bold mb-6 md:mb-16 text-left text-gray-600 font-sans">
                <b>Solutions</b>
              </h2>

              <ul className="text-2xl pl-5 list-disc space-y-5 text-left font-sans">
                <p>
                  SBA Info Solutions prides itself on being brand-neutral,
                  tailoring solutions to each client's specific needs and use
                  cases
                </p>
                <p>
                  With a focus on innovation and expertise in emerging
                  technologies such as Data and AI, IT Automation, Security and
                  Sustainability, and Open Hybrid Cloud, we help businesses
                  transform their enterprise into agile, efficient, and secure
                  operations, ensuring scalability and resilience in a rapidly
                  changing digital landscape
                </p>
              </ul>
            </div>
            <div className="md:w-1/2 w-full p-1 md:p-4 flex justify-end">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={solutions1}
                  className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                  alt="Enterprise ML and Generative AI"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-200">
        <div className="flex flex-wrap justify-between gap-0 px-5">
          <div className="relative group w-full md:w-1/5 h-96 overflow-hidden rounded-lg shadow-lg">
          <a href="/InfrastructureApplication">
            <img
              src={solutions2}
              alt="Manufacturing"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 p-4 flex flex-col justify-end">
              <div className="flex justify-between items-center text-white">
                <p className="text-lg font-semibold">
                  Infrastructure & application modernization
                </p>
                <FaLongArrowAltRight />
              </div>
            </div>
            </a>
          </div>

          <div className="relative group w-full md:w-1/5 h-96 overflow-hidden rounded-lg shadow-lg">
          <a href="/CyberResiliency">
            <img
              src={solutions3}
              alt="BFSI"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 p-4 flex flex-col justify-end">
              <div className="flex justify-between items-center text-white">
                <p className="text-lg font-semibold">Cyber Resiliency</p>
                <FaLongArrowAltRight />
              </div>
            </div>
            </a>
          </div>

          <div className="relative group w-full md:w-1/5 h-96 overflow-hidden rounded-lg shadow-lg">
          <a href="/DataAI">
            <img
              src={solutions4}
              alt="Call Center Upgrade"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 p-4 flex flex-col justify-end">
              <div className="flex justify-between items-center text-white">
                <p className="text-lg font-semibold">Data, Automation & AI</p>
                <FaLongArrowAltRight />
              </div>
            </div>
            </a>
          </div>

          <div className="relative group w-full md:w-1/5 h-96 overflow-hidden rounded-lg shadow-lg">
          <a href="/ManagedService">
            <img
              src={solutions5}
              alt="Media"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 p-4 flex flex-col justify-end">
              <div className="flex justify-between items-center text-white">
                <p className="text-lg font-semibold">Managed Services</p>
                <FaLongArrowAltRight />
              </div>
            </div>
            </a>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center py-16 bg-white">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center">
          Ready to Unlock the Power of Industry Solutions?
        </h2>
        <p className="text-lg md:text-xl mb-6 text-center">
          If you're interested in exploring our expert Industry solutions or
          need more information, our experts are ready to assist you.
        </p>
        <a className="text-lg md:text-xl font-semibold text-black underline hover:text-gray-700 transition duration-300" href="/ContactUs">
          Get a Call Back
        </a>
      </section>
    </>
  );
};

export default SolutionsPage;
