import React from "react";
import "./style.scss";
import aboutUs from "../../assets/videos/aboutUs.mp4";
import about1 from "../../assets/images/about1.svg";
import about2 from "../../assets/images/about2.svg";

const AboutUs = () => {
  return (
    <>
      <section>
        <div class="ai-green-v1">
          <div class="init-ai-section1">
            <div className="abspage">About Us</div>
            <div class="init-red-bg ">
              Intelligent Solutions, Limitless Potential
            </div>
          </div>
          <video autoPlay muted loop>
            <source src={aboutUs} type="video/mp4" />
          </video>
        </div>
      </section>

      <section>
        <div className="p-0 md:p-10 mb-5 bg-white rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row-reverse gap-6 md:gap-10 justify-center items-center">
            <div className="md:w-1/3 w-full p-5 md:p-0">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={about1}
                  className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                  alt="Data Orchestration"
                />
              </div>
            </div>
            <div className="md:w-1/2 w-full md:px-0 text-center">
              <h2 className="text-5xl font-bold mb-9">Why Choose Us?</h2>
              <p className="text-lg mb-9">
                SBA has 60+ partnerships with top OEMs, specializing in Next-Gen
                Information Security, Cloud Services, and Data Center
                Modernization.
              </p>
              <p className="text-lg">
                Our expertise spans BFSI, manufacturing, IT/ITES, with solutions
                architecture and consulting capabilities enhancing our AI
                Innovation Center and Managed security services.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="p-6 md:p-10 mb-5 bg-white rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            <div className="md:w-1/2 w-full p-1 md:p-4">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={about2}
                  className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                  alt="Intelligent IT Automation"
                />
              </div>
            </div>
            <div className="md:w-1/2 w-full md:pl-6 mt-6 md:mt-6">
              <h3 className="text-3xl font-bold mb-6 md:mb-16 text-left">
                <b>Integrated Solutions</b>
              </h3>
              <ul className="text-xl pl-5 list-disc space-y-4 text-left">
                <li>
                  Observability, data management, analytics, and AI in one
                  platform
                </li>
                <li>
                  Industry-specific solutions for BFSI, media, manufacturing,
                  and IT
                </li>
              </ul>
              <br />
              <br />
              <h3 className="text-3xl font-bold mb-6 md:mb-16 text-left">
                <b>Commitment to Excellence</b>
              </h3>
              <ul className="text-xl pl-5 list-disc space-y-4 text-left">
                <li>Data governance, security, and compliance ensured</li>
                <li>Responsible AI practices implemented</li>
              </ul>
            </div>
          </div>
        </div>
      </section>


    </>
  );
};

export default AboutUs;
