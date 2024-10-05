import React from "react";
import "./style.scss";
import Infrastructure from "../../assets/videos/InfrastructureApplication.mp4";
import { FaLongArrowAltRight } from "react-icons/fa";
import Infra1 from "../../assets/images/Infra1.jpg";
import Infra2 from "../../assets/images/Infra2.jpg";
import Infra3 from "../../assets/images/Infra3.jpg";
import Infra4 from "../../assets/images/Infra4.jpg";
import Infra5 from "../../assets/images/Infra5.jpg";
import Infra6 from "../../assets/images/Infra6.jpg";
import Infra7 from "../../assets/images/Infra7.jpg";
import Infra8 from "../../assets/images/Infra8.jpg";
import Infra9 from "../../assets/images/Infra9.jpg";
import Infra10 from "../../assets/images/Infra10.jpg";
import Infra11 from "../../assets/images/Infra11.jpg";
import Infra12 from "../../assets/images/Infra12.jpg";
import Infra13 from "../../assets/images/Infra13.jpg";
import Infra14 from "../../assets/images/Infra14.jpg";
import Infra15 from "../../assets/images/Infra15.jpg";
import Infra16 from "../../assets/images/Infra16.jpg";
import Infra17 from "../../assets/images/Infra17.jpg";
import Infra18 from "../../assets/images/Infra18.jpg";
import Infra19 from "../../assets/images/Infra19.jpg";

const InfrastructureApplication = () => {
  return (
    <>
      <section>
        <div class="ai-green-mas">
          <div class="init-ai-sectionmas1">
            <div className="Infras">
              Infrastructure & Application Modernization
            </div>
            <div class="init-red-bg px-5">
              Eliminate siloes and complexities in IT
            </div>
          </div>
          <video autoPlay muted loop>
            <source src={Infrastructure} type="video/mp4" />
          </video>
        </div>
      </section>

      <section>
        <div className="p-6 md:p-10 mb-5 bg-white rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            <div className="md:w-1/2 w-full md:pl-6 mt-4 md:mt-6">
              <h2 className="text-3xl font-bold mb-6 md:mb-9 text-left text-gray-600">
                <b>Data Center Modernization</b>
              </h2>
              <ul className="text-2xl pl-5 list-disc space-y-5 text-left">
                <p>
                  We at SBA Info Solutions offer a extensive suite of modern
                  data center infrastructure solutions, with a combination of
                  advanced technologies & tools to support any applications and
                  infrastructure while covering the stringent security policies
                </p>
              </ul>
            </div>
            <div className="md:w-1/2 w-full p-1 md:p-4 flex justify-end">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={Infra1}
                  className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                  alt="Enterprise ML and Generative AI"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="flex flex-wrap justify-between ">
          <div className="relative group w-full md:w-1/3 h-96 overflow-hidden rounded-lg shadow-lg">
            <img
              src={Infra2}
              alt="Robust Email Management"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 p-4 flex flex-col justify-end">
              <div className="flex justify-between items-center text-white">
                <p className="text-lg font-semibold">Power Servers</p>
                <FaLongArrowAltRight />
              </div>
            </div>
            <div className="absolute inset-0 bg-blue-500 bg-opacity-90 p-6 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-lg font-semibold text-white mb-4">
                Power Servers
              </p>
              <p className="text-white text-sm">
                We deliver flexible solutions that support multiple operating
                systems such as AIX, IBM i, and Linux. These solutions provide
                robust performance and scalability, catering to diverse business
                needs. This enables clients to leverage advanced technology for
                mission-critical workloads and digital transformation
                initiatives
              </p>
            </div>
          </div>

          <div className="relative group w-full md:w-1/3 h-96 overflow-hidden rounded-lg shadow-lg">
            <img
              src={Infra3}
              alt="Integrated Calendar"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 p-4 flex flex-col justify-end">
              <div className="flex justify-between items-center text-white">
                <p className="text-lg font-semibold">LinuxONE</p>
                <FaLongArrowAltRight />
              </div>
            </div>
            <div className="absolute inset-0 bg-blue-500 bg-opacity-90 p-6 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-lg font-semibold text-white mb-4">LinuxONE</p>
              <p className="text-white text-sm">
                Enterprise Linux servers built on mainframe tech. These
                platforms provide top-tier security, scalability, and
                performance. They support cloud-native and open-source workloads
                across various Linux distributions
              </p>
            </div>
          </div>

          <div className="relative group w-full md:w-1/3 h-96 overflow-hidden rounded-lg shadow-lg">
            <img
              src={Infra4}
              alt="Secure File Sharing"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 p-4 flex flex-col justify-end">
              <div className="flex justify-between items-center text-white">
                <p className="text-lg font-semibold">Storage Fusion</p>
                <FaLongArrowAltRight />
              </div>
            </div>
            <div className="absolute inset-0 bg-blue-500 bg-opacity-90 p-6 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-lg font-semibold text-white mb-4">
                Storage Fusion
              </p>
              <p className="text-white text-sm">
                A container-native data services platform for Red Hat OpenShift,
                simplifying data management across hybrid clouds with features
                like resilience, security, mobility, and discovery
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="p-6 md:p-10 mb-5 bg-white rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            <div className="md:w-1/2 w-full md:pl-6 mt-4 md:mt-6">
              <h2 className="text-3xl font-bold mb-6 md:mb-9 text-left text-gray-600">
                <b>Data Center Infrastructure</b>
              </h2>
              <ul className="text-2xl pl-5 list-disc space-y-5 text-left">
                <p>
                  Eliminate silos in IT infrastructure & transform to capitalize
                  on scalability, resilience, and high performance of private
                  and hybrid clouds by managing a single entity while achieving
                  cloud-like capabilities from a data center
                </p>
              </ul>
            </div>
            <div className="md:w-1/2 w-full p-1 md:p-4 flex justify-end">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={Infra5}
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
                  src={Infra6}
                  className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                  alt="Enterprise ML and Generative AI"
                />
              </div>
            </div>
            <div className="md:w-1/2 w-full md:pl-6 mt-4 md:mt-6">
              <h2 className="text-3xl font-bold mb-6 md:mb-9 text-left text-gray-600">
                <b> Hyperconverged Infrastructure (HCI)</b>
              </h2>
              <ul className="text-2xl pl-5 list-disc space-y-5 text-left">
                <p>
                  Get the agility of public cloud infrastructure and security
                  benefits of in-house hosting with Hyper-Converged
                  Infrastructure. It incorporates a software-defined approach
                  for compute, storage, and virtualized networking with
                  simplified management, linear scalability, and agility of
                  cloud
                </p>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="p-6 md:p-10 mb-5 bg-white rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            <div className="md:w-1/2 w-full md:pl-6 mt-4 md:mt-6">
              <h2 className="text-3xl font-bold mb-6 md:mb-9 text-left text-gray-600">
                <b>Red Hat OpenShift</b>
              </h2>
              <ul className="text-2xl pl-5 list-disc space-y-5 text-left">
                <p>
                  Increase productivity and agility by modernizing monolithic
                  legacy applications with Red Hat OpenShift. We help accelerate
                  the process of moving legacy applications into cloud-native
                  architecture and enable organizations to take full advantage
                  of OpenShift
                </p>
              </ul>
            </div>
            <div className="md:w-1/2 w-full p-1 md:p-4 flex justify-end">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={Infra7}
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
                  src={Infra8}
                  className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                  alt="Enterprise ML and Generative AI"
                />
              </div>
            </div>
            <div className="md:w-1/2 w-full md:pl-6 mt-4 md:mt-6">
              <h2 className="text-3xl font-bold mb-6 md:mb-9 text-left text-gray-600">
                <b> Cloud Platforms</b>
              </h2>
              <ul className="text-2xl pl-5 list-disc space-y-5 text-left">
                <p>
                  We help you extend enterprise backup to the Cloud without
                  increasing the management burden on your IT team. As a leader
                  in backup and disaster recovery solutions, SBA Info advices
                  cloud-based backup for public/multi/hybrid environments and
                  help you to achieve operational efficiency and resiliency
                </p>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="flex flex-wrap justify-between ">
          <div className="relative group w-full md:w-1/4 h-96 overflow-hidden rounded-lg shadow-lg">
            <img
              src={Infra9}
              alt="Robust Email Management"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 p-4 flex flex-col justify-end">
              <div className="flex justify-between items-center text-white">
                <p className="text-lg font-semibold">
                  Amazon Web Services (AWS)
                </p>
                <FaLongArrowAltRight />
              </div>
            </div>
            <div className="absolute inset-0 bg-blue-500 bg-opacity-90 p-6 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-lg font-semibold text-white mb-4">
                Amazon Web Services (AWS)
              </p>
              <p className="text-white text-sm">
                We provide diverse cloud services, including compute, storage,
                and databases, through a pay-as-you-go model utilizing global
                infrastructure
              </p>
            </div>
          </div>

          <div className="relative group w-full md:w-1/4 h-96 overflow-hidden rounded-lg shadow-lg">
            <img
              src={Infra10}
              alt="Integrated Calendar"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 p-4 flex flex-col justify-end">
              <div className="flex justify-between items-center text-white">
                <p className="text-lg font-semibold">Microsoft Azure</p>
                <FaLongArrowAltRight />
              </div>
            </div>
            <div className="absolute inset-0 bg-blue-500 bg-opacity-90 p-6 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-lg font-semibold text-white mb-4">
                Microsoft Azure
              </p>
              <p className="text-white text-sm">
                A flexible platform for building, managing, and deploying
                applications globally which include virtual machines, databases,
                AI, and IoT solutions
              </p>
            </div>
          </div>

          <div className="relative group w-full md:w-1/4 h-96 overflow-hidden rounded-lg shadow-lg">
            <img
              src={Infra11}
              alt="Secure File Sharing"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 p-4 flex flex-col justify-end">
              <div className="flex justify-between items-center text-white">
                <p className="text-lg font-semibold">
                  Google Cloud Platform (GCP)
                </p>
                <FaLongArrowAltRight />
              </div>
            </div>
            <div className="absolute inset-0 bg-blue-500 bg-opacity-90 p-6 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-lg font-semibold text-white mb-4">
                Google Cloud Platform (GCP)
              </p>
              <p className="text-white text-sm">
                We offer an extensive suite of cloud services for computing,
                storage, data analytics, and machine learning, leveraging
                Google's infrastructure
              </p>
            </div>
          </div>

          <div className="relative group w-full md:w-1/4 h-96 overflow-hidden rounded-lg shadow-lg">
            <img
              src={Infra12}
              alt="Secure File Sharing"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 p-4 flex flex-col justify-end">
              <div className="flex justify-between items-center text-white">
                <p className="text-lg font-semibold">Oracle Cloud</p>
                <FaLongArrowAltRight />
              </div>
            </div>
            <div className="absolute inset-0 bg-blue-500 bg-opacity-90 p-6 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-lg font-semibold text-white mb-4">
                Oracle Cloud
              </p>
              <p className="text-white text-sm">
                PaaS and IaaS solutions for building, deploying, and extending
                applications, supporting various programming languages and
                databases
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="p-6 md:p-10 mb-5 bg-white rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            <div className="md:w-1/2 w-full md:pl-6 mt-4 md:mt-6">
              <h2 className="text-3xl font-bold mb-6 md:mb-9 text-left text-gray-600">
                <b>Application Technologies</b>
              </h2>
              <ul className="text-2xl pl-5 list-disc space-y-5 text-left">
                <p>
                  We provide services across the pillars of app modernization to
                  achieve unparalleled time to market, resilience,
                  responsiveness, and operational efficiency
                </p>
              </ul>
            </div>
            <div className="md:w-1/2 w-full p-1 md:p-4 flex justify-end">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={Infra9}
                  className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                  alt="Enterprise ML and Generative AI"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="flex flex-wrap justify-between ">
          <div className="relative group w-full md:w-1/3 h-96 overflow-hidden rounded-lg shadow-lg">
            <img
              src={Infra14}
              alt="Robust Email Management"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 p-4 flex flex-col justify-end">
              <div className="flex justify-between items-center text-white">
                <p className="text-lg font-semibold">Nginx</p>
                <FaLongArrowAltRight />
              </div>
            </div>
            <div className="absolute inset-0 bg-blue-500 bg-opacity-90 p-6 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-lg font-semibold text-white mb-4">Nginx</p>
              <p className="text-white text-sm">
                We reduce infrastructure complexity and boost web performance
                through our comprehensive solutions. Our services include
                reverse proxy, load balancing, and HTTP caching to optimize
                content delivery and handle high traffic
              </p>
            </div>
          </div>

          <div className="relative group w-full md:w-1/3 h-96 overflow-hidden rounded-lg shadow-lg">
            <img
              src={Infra15}
              alt="Integrated Calendar"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 p-4 flex flex-col justify-end">
              <div className="flex justify-between items-center text-white">
                <p className="text-lg font-semibold">Docker</p>
                <FaLongArrowAltRight />
              </div>
            </div>
            <div className="absolute inset-0 bg-blue-500 bg-opacity-90 p-6 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-lg font-semibold text-white mb-4">Docker</p>
              <p className="text-white text-sm">
                We offer containerization services, including Docker
                implementation, to streamline development, improve scalability,
                and enhance application portability through efficient deployment
                and management of applications
              </p>
            </div>
          </div>

          <div className="relative group w-full md:w-1/3 h-96 overflow-hidden rounded-lg shadow-lg">
            <img
              src={Infra16}
              alt="Secure File Sharing"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 p-4 flex flex-col justify-end">
              <div className="flex justify-between items-center text-white">
                <p className="text-lg font-semibold">Kubernetes</p>
                <FaLongArrowAltRight />
              </div>
            </div>
            <div className="absolute inset-0 bg-blue-500 bg-opacity-90 p-6 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-lg font-semibold text-white mb-4">
                Kubernetes
              </p>
              <p className="text-white text-sm">
                Modernization of legacy applications into microservices,
                eliminating dependencies for faster deployment across
                Kubernetes-based cloud environments. This enhances scalability
                and agility in cloud-native infrastructure
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="flex flex-wrap justify-between ">
          <div className="relative group w-full md:w-1/3 h-96 overflow-hidden rounded-lg shadow-lg">
            <img
              src={Infra17}
              alt="Robust Email Management"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 p-4 flex flex-col justify-end">
              <div className="flex justify-between items-center text-white">
                <p className="text-lg font-semibold">Jenkins</p>
                <FaLongArrowAltRight />
              </div>
            </div>
            <div className="absolute inset-0 bg-blue-500 bg-opacity-90 p-6 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-lg font-semibold text-white mb-4">Jenkins</p>
              <p className="text-white text-sm">
                Automation of software development processes such as building,
                testing, and deploying code with Jenkins. It supports Continuous
                Integration and Continuous Delivery (CI/CD), enabling developers
                to detect issues early and deliver software faster
              </p>
            </div>
          </div>

          <div className="relative group w-full md:w-1/3 h-96 overflow-hidden rounded-lg shadow-lg">
            <img
              src={Infra18}
              alt="Integrated Calendar"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 p-4 flex flex-col justify-end">
              <div className="flex justify-between items-center text-white">
                <p className="text-lg font-semibold">Terraform</p>
                <FaLongArrowAltRight />
              </div>
            </div>
            <div className="absolute inset-0 bg-blue-500 bg-opacity-90 p-6 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-lg font-semibold text-white mb-4">Terraform</p>
              <p className="text-white text-sm">
                We leverage Terraform, an open-source Infrastructure as Code
                tool, to define and manage data center infrastructure across
                multiple cloud providers. This ensures consistent, repeatable,
                and automated infrastructure provisioning
              </p>
            </div>
          </div>

          <div className="relative group w-full md:w-1/3 h-96 overflow-hidden rounded-lg shadow-lg">
            <img
              src={Infra19}
              alt="Secure File Sharing"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 p-4 flex flex-col justify-end">
              <div className="flex justify-between items-center text-white">
                <p className="text-lg font-semibold">Ansible</p>
                <FaLongArrowAltRight />
              </div>
            </div>
            <div className="absolute inset-0 bg-blue-500 bg-opacity-90 p-6 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-lg font-semibold text-white mb-4">Ansible</p>
              <p className="text-white text-sm">
                Ansible is a powerful open-source automation tool for
                configuration management and application deployment using YAML
                playbooks. watsonx Code Assistant for Ansible enhances this
                process with AI-driven recommendations, streamlining playbook
                creation and maintenance for increased efficiency and
                productivity
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center py-16 bg-white">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center">
        Is Your Infrastructure Ready for a Modern Makeover?
        </h2>
        <p className="text-lg md:text-xl mb-6 text-center">
        If you're interested in exploring our Infrastructure & Application Modernization solutions or need more information, our experts are ready to assist you
        </p>
        <a className="text-lg md:text-xl font-semibold text-black underline hover:text-gray-700 transition duration-300" href="/ContactUs">
          Get a Call Back
        </a>
      </section>
    </>
  );
};

export default InfrastructureApplication; 
