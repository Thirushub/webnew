import React from 'react';
import "./style.scss";
import Resorces from "../../assets/videos/Resources.mp4";
import Resorce1 from "../../assets/images/resource1.jpg";
import Resorce2 from "../../assets/images/resource2.jpg";
import Resorce3 from "../../assets/images/resource3.jpg";

const Resources = () => {
  return (
    <>
      <section>
        <div class="ai-green-v1">
          <div class="init-ai-section1">
            <div className="abspage16">Resources</div>
            <div class="init-red-bg16 ">
              Breakthrough Thinking, Real Results
            </div>
          </div>
          <video autoPlay muted loop>
            <source src={Resorces} type="video/mp4" />
          </video>
        </div>
      </section>

      <section>
        <div className="p-8 bg-gray-50">

          {/* First Section */}
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold text-gray-800 hover:text-black transition-colors duration-300">
                Are you ready to revolutionize your business operations and achieve unparalleled success?
              </h2>
              <p className="mt-4 text-gray-600 hover:text-black transition-colors duration-300">
                At SBA Info Solutions, we've helped numerous organizations like yours overcome challenges and thrive in today's competitive landscape.
              </p>
              <p className="mt-2 text-gray-600 hover:text-black transition-colors duration-300">
                Dive into our collection of blogs and case studies to discover how our innovative solutions can transform your business.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src={Resorce1}
                alt="Team meeting"
                className="rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Second Section */}
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8 mt-8">
            <div className="md:w-1/2">
              <img
                src={Resorce2}
                alt="Team meeting"
                className="rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="md:w-2/3">
              <p className="mt-8 text-gray-600 text-2xl hover:text-black transition-colors duration-300">
                <b>Blogs:</b> Dive into our expert insights on the latest trends, best practices, and industry-specific solutions designed to keep you ahead of the curve.
              </p>
              <p className="mt-8 text-gray-600 text-2xl hover:text-black transition-colors duration-300">
                <b>Case Studies:</b> Explore real-world examples of how our solutions have helped businesses achieve remarkable results, from efficiency improvements to significant cost savings.
              </p>
            </div>
          </div>

          {/* Third Section */}
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8 mt-8">
            <div className="md:w-2/3">
              <p className="mt-8 text-gray-600 text-2xl hover:text-black transition-colors duration-300">
                <b>Learn from Success Stories:</b> Our case studies offer a glimpse into the challenges faced by businesses and how our solutions provided tangible benefits. Explore Our Case Studies
              </p>
              <p className="mt-8 text-gray-600 text-2xl hover:text-black transition-colors duration-300">
                <b>Stay Informed:</b> Our blogs are packed with actionable advice and industry insights to help you make informed decisions.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src={Resorce3}
                alt="Team meeting"
                className="rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default Resources;
