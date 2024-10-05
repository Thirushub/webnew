import React from "react";
import "./style.scss";
import ManagedServices from "../../assets/videos/ManagedServices.mp4";
import ManagedService1 from "../../assets/images/Manageservice1.jpg";
import ManagedService2 from "../../assets/images/Manageservice2.jpg";
import ManagedService3 from "../../assets/images/Manageservice3.jpg";
import ManagedService4 from "../../assets/images/Manageservice4.jpg";
import ManagedService5 from "../../assets/images/Manageservice5.jpg";
import { FaLongArrowAltRight } from "react-icons/fa";
import ManagedService6 from "../../assets/images/Manageservice6.jpg";
import ManagedService7 from "../../assets/images/Manageservice7.jpg";
import ManagedService8 from "../../assets/images/Manageservice8.jpg";
import ManagedService9 from "../../assets/images/Manageservice9.jpg";
import ManagedService10 from "../../assets/images/Manageservice10.jpg";
import ManagedService11 from "../../assets/images/Manageservice11.jpg";
import ManagedService12 from "../../assets/images/Manageservice12.jpg";

const ManagedService = () => {
  return (
    <>
      <section>
        <div class="ai-green-mas">
          <div class="init-ai-sectionmas1">
            <div className="mas">Managed Services</div>
            <div class="init-red-bg px-5">
              Enhance your IT operations, focus on core business
            </div>
          </div>
          <video autoPlay muted loop>
            <source src={ManagedServices} type="video/mp4" />
          </video>
        </div>
      </section>

      <section>
        <div className="p-6 md:p-10 mb-5 bg-white rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            <div className="md:w-1/2 w-full md:pl-6 mt-4 md:mt-6">
              <h2 className="text-3xl font-bold mb-6 md:mb-9 text-left text-gray-600">
                <b>Managed Security Services</b>
              </h2>
              <ul className="text-2xl pl-5 list-disc space-y-5 text-left">
                <p>
                  SBA Info's Managed Services offer 24/7 proactive IT monitoring
                  and maintenance, including security, cloud management, and
                  communication support
                </p>
                <p>
                  These services enhance efficiency and uptime, allowing
                  businesses to focus on core operations while ensuring
                  compliance with data protection standards{" "}
                </p>
              </ul>
            </div>
            <div className="md:w-1/2 w-full p-1 md:p-4 flex justify-end">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={ManagedService1}
                  className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                  alt="Enterprise ML and Generative AI"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="p-6 md:p-10 mb-5 bg-white rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            <div className="md:w-1/2 w-full p-1 md:p-4 flex justify-end">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={ManagedService2}
                  className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                  alt="Enterprise ML and Generative AI"
                />
              </div>
            </div>
            <div className="md:w-1/2 w-full md:pl-6 mt-4 md:mt-6">
              <h2 className="text-3xl font-bold mb-6 md:mb-9 text-left text-gray-600">
                <b>Mailing</b>
              </h2>
              <ul className="text-2xl pl-5 list-disc space-y-5 text-left">
                <p>
                  Cloud Zimbra Suite meets today's business needs by enabling
                  seamless collaboration, real-time access, and robust security
                </p>
                <p>
                  It enhances productivity with secure, anytime/anywhere access,
                  and advanced data protection, providing a future-proof
                  solution for smarter work
                </p>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="p-6 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            What do you get with the SBA's Cloud Zimbra Suite?
          </h2>
          <p className="text-xl md:text-2xl border-b-4 border-purple-500 inline-block pb-1">
            Powerful mail management and secure file sharing tailored for
            growth-oriented businesses' unique needs
          </p>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <h1 className="text-5xl font-bold text-center mb-12">
          Zimbra Features
        </h1>

        <div className="flex flex-wrap justify-between ">
          {/* Robust Email Management */}
          <div className="relative group w-full md:w-1/3 h-96 overflow-hidden rounded-lg shadow-lg">
            <img
              src={ManagedService5}
              alt="Robust Email Management"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 p-4 flex flex-col justify-end">
              <div className="flex justify-between items-center text-white">
                <p className="text-lg font-semibold">Robust Email Management</p>
                <FaLongArrowAltRight />
              </div>
            </div>
            {/* Hover content */}
            <div className="absolute inset-0 bg-blue-500 bg-opacity-90 p-6 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-lg font-semibold text-white mb-4">
                Robust Email Management
              </p>
              <p className="text-white text-sm">
                Zimbra provides an intuitive interface with powerful email
                management tools, including filtering, organization,
                cross-device access, and robust security.
              </p>
            </div>
          </div>

          {/* Integrated Calendar */}
          <div className="relative group w-full md:w-1/3 h-96 overflow-hidden rounded-lg shadow-lg">
            <img
              src={ManagedService3}
              alt="Integrated Calendar"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 p-4 flex flex-col justify-end">
              <div className="flex justify-between items-center text-white">
                <p className="text-lg font-semibold">Integrated Calendar</p>
                <FaLongArrowAltRight />
              </div>
            </div>
            {/* Hover content */}
            <div className="absolute inset-0 bg-blue-500 bg-opacity-90 p-6 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-lg font-semibold text-white mb-4">
                Integrated Calendar
              </p>
              <p className="text-white text-sm">
                Zimbra's integrated calendar enables efficient scheduling and
                event management with real-time synchronization across email and
                mobile devices for seamless organization.
              </p>
            </div>
          </div>

          {/* Secure File Sharing */}
          <div className="relative group w-full md:w-1/3 h-96 overflow-hidden rounded-lg shadow-lg">
            <img
              src={ManagedService4}
              alt="Secure File Sharing"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 p-4 flex flex-col justify-end">
              <div className="flex justify-between items-center text-white">
                <p className="text-lg font-semibold">Secure File Sharing</p>
                <FaLongArrowAltRight />
              </div>
            </div>
            {/* Hover content */}
            <div className="absolute inset-0 bg-blue-500 bg-opacity-90 p-6 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-lg font-semibold text-white mb-4">
                Secure File Sharing
              </p>
              <p className="text-white text-sm">
                Encrypted storage and file sharing capabilities, enabling secure
                collaboration on documents within teams and with external
                partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="flex flex-wrap justify-between ">
          {/* Robust Email Management */}
          <div className="relative group w-full md:w-1/3 h-96 overflow-hidden rounded-lg shadow-lg">
            <img
              src={ManagedService8}
              alt="Real-Time Collaboration"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 p-4 flex flex-col justify-end">
              <div className="flex justify-between items-center text-white">
                <p className="text-lg font-semibold">Real-Time Collaboration</p>
                <FaLongArrowAltRight />
              </div>
            </div>
            {/* Hover content */}
            <div className="absolute inset-0 bg-blue-500 bg-opacity-90 p-6 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-lg font-semibold text-white mb-4">
                Real-Time Collaboration
              </p>
              <p className="text-white text-sm">
                Collaborate in real-time with Zimbra's instant messaging and
                team chat. Share ideas and work together seamlessly, regardless
                of location
              </p>
            </div>
          </div>

          {/* Integrated Calendar */}
          <div className="relative group w-full md:w-1/3 h-96 overflow-hidden rounded-lg shadow-lg">
            <img
              src={ManagedService6}
              alt="Instant Messaging"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 p-4 flex flex-col justify-end">
              <div className="flex justify-between items-center text-white">
                <p className="text-lg font-semibold">Instant Messaging</p>
                <FaLongArrowAltRight />
              </div>
            </div>
            {/* Hover content */}
            <div className="absolute inset-0 bg-blue-500 bg-opacity-90 p-6 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-lg font-semibold text-white mb-4">
                Instant Messaging
              </p>
              <p className="text-white text-sm">
                Zimbra's instant messaging and team chat features enable
                real-time collaboration and communication, regardless of
                location
              </p>
            </div>
          </div>

          {/* Secure File Sharing */}
          <div className="relative group w-full md:w-1/3 h-96 overflow-hidden rounded-lg shadow-lg">
            <img
              src={ManagedService7}
              alt="Secure File Sharing"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 p-4 flex flex-col justify-end">
              <div className="flex justify-between items-center text-white">
                <p className="text-lg font-semibold">File Sync & Share</p>
                <FaLongArrowAltRight />
              </div>
            </div>
            {/* Hover content */}
            <div className="absolute inset-0 bg-blue-500 bg-opacity-90 p-6 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-lg font-semibold text-white mb-4">
                File Sync & Share
              </p>
              <p className="text-white text-sm">
                Centralize tools, eliminate separate platforms, simplify
                workflows, and seamlessly connect communication and
                collaboration
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 bg-white">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="relative w-full md:w-1/2 h-96 overflow-hidden rounded-lg shadow-lg">
            <img
              src={ManagedService9}
              alt="Audio & Video Conferencing"
              className="w-full h-full object-cover border-4 transition-transform duration-300 ease-in-out hover:scale-110"
              loading="lazy"
            />
            <div className="absolute bottom-4 left-4 text-white font-semibold">
              <p className="text-lg bg-black bg-opacity-60 px-3 py-1 rounded">
                Audio & Video Conferencing
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-xl md:text-2xl font-medium text-gray-700">
              Transform email into a dynamic, interactive tool for efficient
              collaboration and stronger connections among remote teams.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="p-6 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Cloud Services
          </h2>
          <p className="text-xl md:text-2xl  inline-block pb-1">
            At SBA Info, our experienced team leverages cloud services to
            transform organizational IT infrastructure, providing consistent
            solutions that drive competitive advantage
          </p>
          <p className="text-xl md:text-2xl  inline-block pb-1 mt-4">
            We offer a comprehensive suite of cloud services that covers
          </p>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <a href="/HyperCloud">
        <div className="flex flex-wrap justify-between ">
          {/* Robust Email Management */}
          <div className="relative group w-full md:w-1/3 h-96 overflow-hidden rounded-lg shadow-lg">
            <img
              src={ManagedService10}
              alt="Robust Email Management"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 p-4 flex flex-col justify-end">
              <div className="flex justify-between items-center text-white">
                <p className="text-lg font-semibold">Cloud Consulting</p>
                <FaLongArrowAltRight />
              </div>
            </div>
            {/* Hover content */}
            <div className="absolute inset-0 bg-blue-500 bg-opacity-90 p-6 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-lg font-semibold text-white mb-4">
                Cloud Consulting
              </p>
              <p className="text-white text-sm">
                We provide customized cloud solutions tailored to your business
                needs, delivering enhanced productivity, security, and cost
                savings
              </p>
            </div>
          </div>

          {/* Integrated Calendar */}
          <div className="relative group w-full md:w-1/3 h-96 overflow-hidden rounded-lg shadow-lg">
            <img
              src={ManagedService12}
              alt="Integrated Calendar"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 p-4 flex flex-col justify-end">
              <div className="flex justify-between items-center text-white">
                <p className="text-lg font-semibold">Cloud Migrations</p>
                <FaLongArrowAltRight />
              </div>
            </div>
            {/* Hover content */}
            <div className="absolute inset-0 bg-blue-500 bg-opacity-90 p-6 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-lg font-semibold text-white mb-4">
                Cloud Migrations
              </p>
              <p className="text-white text-sm">
                Our cloud migration services optimize business processes,
                ensuring seamless transitions with minimal downtime and ongoing
                support
              </p>
            </div>
          </div>

          {/* Secure File Sharing */}
          <div className="relative group w-full md:w-1/3 h-96 overflow-hidden rounded-lg shadow-lg">
            <img
              src={ManagedService11}
              alt="Secure File Sharing"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 p-4 flex flex-col justify-end">
              <div className="flex justify-between items-center text-white">
                <p className="text-lg font-semibold">Cloud Managed Services</p>
                <FaLongArrowAltRight />
              </div>
            </div>
            {/* Hover content */}
            <div className="absolute inset-0 bg-blue-500 bg-opacity-90 p-6 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-lg font-semibold text-white mb-4">
                Cloud Managed Services
              </p>
              <p className="text-white text-sm">
                Cloud managed services help businesses optimize costs, improve
                efficiency, and focus on core capabilities by outsourcing IT
                infrastructure management to experts
              </p>
            </div>
          </div>
        </div>
        </a>
      </section>

      <section className="flex flex-col items-center justify-center py-16 bg-white">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center">
          Ready To Unlock The Power Of Managed Services?
        </h2>
        <p className="text-lg md:text-xl mb-6 text-center">
          If you're interested in exploring our Managed Services or need more
          information, our experts are ready to assist you
        </p>
        <a className="text-lg md:text-xl font-semibold text-black underline hover:text-gray-700 transition duration-300" href="/ContactUs">
          Get a Call Back
        </a>
      </section>
    </>
  );
};

export default ManagedService;
