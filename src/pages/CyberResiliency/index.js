import React from "react";
import "./style.scss";
import Cyber from "../../assets/videos/Cyber.mp4";
import cyber1 from "../../assets/images/cyber3.jpg";
import cyber2 from "../../assets/images/cyber1.jpg";
import cyber3 from "../../assets/images/cyber4.jpg";
import cyber4 from "../../assets/images/cyber5.jpg";
import cyber5 from "../../assets/images/cyber2.jpg";
import cyber6 from "../../assets/images/cyber6.jpg";

const CyberResiliency = () => {
  return (
    <>
      <section>
        <div class="ai-green-mas">
          <div class="init-ai-sectionmas1">
            <div className="Infras">Cyber Resiliency </div>
            <div class="init-red-bg px-5">
              Prevent, detect and effectively recover from cyberthreats{" "}
            </div>
          </div>
          <video autoPlay muted loop>
            <source src={Cyber} type="video/mp4" />
          </video>
        </div>
      </section>

      <section>
        <div className="p-6 md:p-10 mb-5 bg-white rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            <div className="md:w-1/2 w-full md:pl-6 mt-4 md:mt-6">
              <h2 className="text-3xl font-bold mb-6 md:mb-9 text-left text-gray-600">
                <b>
                  In today's hybrid enterprise, protecting your data from cyber
                  threats is crucial
                </b>
              </h2>
              <ul className="text-2xl pl-5 list-disc space-y-5 text-left">
                <p>
                  Elevate your defense against cyber threats with our
                  Information Security Solutions. Implement proactive measures,
                  robust encryption, and innovative technologies to safeguard
                  sensitive data
                </p>
              </ul>
            </div>
            <div className="md:w-1/2 w-full p-1 md:p-4 flex justify-end">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={cyber1}
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
                  src={cyber2}
                  className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                  alt="Enterprise ML and Generative AI"
                />
              </div>
            </div>
            <div className="md:w-1/2 w-full md:pl-6 mt-4 md:mt-6">
              <h2 className="text-3xl font-bold mb-6 md:mb-9 text-left text-gray-600">
                <b> Backup & Recovery </b>
              </h2>
              <ul className="text-2xl pl-5 list-disc space-y-5 text-left">
                <p>
                  We deliver expert advisory and implementation services for
                  resilient, cost-effective backup and disaster recovery
                  solutions. Our consulting and implementation protect critical
                  data and IT infrastructure, ensuring faster recovery and
                  scalable solutions tailored to business needs
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
                <b>Advanced Cyber Resilience Features</b>
              </h2>
              <ul className="text-2xl pl-5 list-disc space-y-5 text-left">
                <ul>
                  <li>
                    <b>Auto Recovery: </b> Restore systems/data after failures
                  </li>
                </ul>
                <ul>
                  <li>
                    <b>Threat Scan: </b>Continuous malware/threat scans
                  </li>
                </ul>
                <ul>
                  <li>
                    <b>ThreatWise: </b> Proactive threat intelligence
                  </li>
                </ul>
                <ul>
                  <li>
                    <b>Security IQ:</b> Restore systems/data after failures
                  </li>
                </ul>
                <ul>
                  <li>
                    <b>Risk Analysis: </b> Identify/prioritize IT risks
                  </li>
                </ul>
                <ul>
                  <li>
                    <b>Cleanroom Recovery: </b> Secure data restoration
                  </li>
                </ul>
                <ul>
                  <li>
                    <b>Air Gap: </b> Isolate critical systems
                  </li>
                </ul>
              </ul>
            </div>
            <div className="md:w-1/2 w-full p-1 md:p-4 flex justify-end">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={cyber3}
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
                  src={cyber4}
                  className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                  alt="Enterprise ML and Generative AI"
                />
              </div>
            </div>
            <div className="md:w-1/2 w-full md:pl-6 mt-4 md:mt-6">
              <h2 className="text-3xl font-bold mb-6 md:mb-9 text-left text-gray-600">
                <b> Backup & Recovery </b>
              </h2>
              <ul className="text-2xl pl-5 list-disc space-y-5 text-left">
                <p>
                  We provide a resilient enterprise backup solution for complex
                  IT environments, partnering with Commvault for advanced data
                  security and cyber-recovery
                </p>
                <ul>
                  <li>
                    <b>Lower OPEX Costs: </b> Reduce IT footprint, testing, and
                    increase efficiency
                  </li>
                </ul>
                <ul>
                  <li>
                    <b>Enhanced Cyber Resilience: </b> Cleanroom Recovery and
                    Threat Scan to protect against ransomware and cyber threats
                  </li>
                </ul>
                <ul>
                  <li>
                    <b>Unified Management: </b> Centralized data consolidation,
                    control, and analysis
                  </li>
                </ul>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="p-6 md:p-10 mb-5 bg-white rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            <div className="md:w-1/2 w-full md:pl-6 mt-4 md:mt-6">
              <ul className="text-2xl pl-5 list-disc space-y-5 text-left">
                <p>
                  SBA partners with Palo Alto Networks to offer robust network
                  security solutions. Key offerings
                </p>
                <ul>
                  <li>
                    <b>Next-Generation Firewalls: </b> Advanced threat
                    protection
                  </li>
                </ul>
                <ul>
                  <li>
                    <b>Prisma: </b> Cloud security suite (Access, Cloud, SaaS)
                  </li>
                </ul>
                <ul>
                  <li>
                    <b>Cortex: </b> AI-driven security operations platform (XDR,
                    XSOAR)
                  </li>
                </ul>
              </ul>
            </div>
            <div className="md:w-1/2 w-full p-1 md:p-4 flex justify-end">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={cyber5}
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
                  src={cyber6}
                  className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                  alt="Enterprise ML and Generative AI"
                />
              </div>
            </div>
            <div className="md:w-1/2 w-full md:pl-6 mt-4 md:mt-6">
              <h2 className="text-3xl font-bold mb-6 md:mb-9 text-left text-gray-600">
                <b> Additional capabilities </b>
              </h2>
              <ul className="text-2xl pl-5 list-disc space-y-5 text-left">
                <ul>
                  <li>
                    <b>Panorama: </b> Centralized security management
                  </li>
                </ul>
                <ul>
                  <li>
                    <b>Strata: </b> Cloud-native security platform
                  </li>
                </ul>
                <ul>
                  <li>
                    <b>Unit 42: </b> Threat intelligence services
                  </li>
                </ul>
                <p>
                  These solutions help businesses protect against cyber threats
                  and strengthen IT infrastructure
                </p>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center py-16 bg-white">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center">
          Ready to Strengthen Your Cyber Resiliency?
        </h2>
        <p className="text-lg md:text-xl mb-6 text-center">
          If you're interested in exploring our Cyber Resiliency solutions or
          need more information, our experts are ready to assist you{" "}
        </p>
        <a className="text-lg md:text-xl font-semibold text-black underline hover:text-gray-700 transition duration-300" href="/ContactUs">
          Get a Call Back
        </a>
      </section>
    </>
  );
};

export default CyberResiliency;
