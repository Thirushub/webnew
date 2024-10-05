import React from 'react';
import "./style.scss";
import CaseStudys from "../../assets/videos/CaseStudy.mp4";
import { motion } from 'framer-motion';

const CaseStudy = () => {
  const caseStudies = [
    {
      title: "Leading Healthcare Services Provider Trusts SBA Info for their Security and Compliance Requirements",
      description: "With multi-location and multi-device access requirements to support business need, our customer is driven by security needs of their highly regulated healthcare industry.",
      link: "https://ww1.sbainfo.in/case-study/1/leading-healthcare-services-provider-trusts-sba-info-for-their-security-and-compliance-requirements", // Replace with actual link
    },
    {
      title: "A Leading Non-Banking Financial Company Trusts SBA Info to Protect and Manage their End Point",
      description: "Our client's headquarters and branches are positioned across different states of India to meet their business objective. As the demand for remote workforce capabilities increased day by day, our customer wanted to protect employees' devices.",
      link: "https://ww1.sbainfo.in/case-study/2/a-leading-non-banking-financial-company-trustssba-info-to-protect-and-manage-their-end-point", // Replace with actual link
    },
    {
      title: "Multinational BPO eases data portability and compliance adherence with cost effective Mailing solution",
      description: "By having multiple domains, managing their AD and LDAP was the client’s raising issue. Hence, our client wanted an extended team to tackle the concern.",
      link: "https://ww1.sbainfo.in/case-study/3/multinational-bpo-eases-data-portability-and-compliance-adherence-with-cost-effective-mailing-solution", // Replace with actual link
    },
    {
      title: "SBA Info Supports Leading Global Analytics Provider with ARCON’s Privileged Access Management (PAM) Solution",
      description: "Our customer deals with a huge amount of structured/unstructured data, they need to adhere to regulations and guidelines of various industries.",
      link: "https://ww1.sbainfo.in/case-study/4/sba-info-supports-leading-global-analytics-provider-with-arcons-privileged-access-management-pam-solution", // Replace with actual link
    },
    {
      title: "Leading Multinational Infrastructure Organization Trusts SBA Info for Fast and Reliable Data Recovery & Backup",
      description: "Our client wanted to improve data management and protection while accessing high-priority and frequently needed data sets.",
      link: "https://ww1.sbainfo.in/case-study/5/leading-multinational-infrastructure-organization-trusts-sba-info-for-fast-and-reliable-data-recovery-backup", // Replace with actual link
    },
    {
      title: "SBA Info Supports a Leading Higher Education & Research Institute with the Implementation of High-Performing Supercomputers",
      description: "Our customer’s existing high-performance cluster was not supporting their growing demands, and they wanted to deploy a supercomputer of 700TF.",
      link: "https://ww1.sbainfo.in/case-study/6/sba-info-supports-a-leading-higher-education-research-institute-with-the-implementation-of-high-performing-supercomputers", // Replace with actual link
    },
    {
      title: "SBA Info Supports a Leading Healthcare Revenue Cycle Management Services Provider with HCI Solution",
      description: "Our customer wished to have an infrastructure that is completely manageable through an agile dashboard console like managing a hyperscale cloud solution.",
      link: "https://ww1.sbainfo.in/case-study/7/sba-info-supports-a-leading-healthcare-revenue-cycle-management-services-provider-with-hci-solution", // Replace with actual link
    },
    {
      title: "Securing Medical Data and Improving Incident Response: SBA Helps Leading Health tech company implement IBM Qradar",
      description: "Specialized in handling complex medical billing and coding tasks, our client leverages technology to help healthcare providers to focus on delivering high-quality patient care.",
      link: "https://ww1.sbainfo.in/case-study/8/securing-medical-data-and-improving-incident-response-sba-helps-leading-health-tech-company-implement-ibm-qradar", // Replace with actual link
    },
    {
      title: "SBA Powers SAP HANA Migration for a leading automotive manufacturer",
      description: "Our customer headquartered in Chennai is one of the leading automotive manufacturers in India.",
      link: "https://ww1.sbainfo.in/case-study/9/sba-powers-sap-hana-migration-for-a-leading-automotive-manufacturer", // Replace with actual link
    },
    {
      title: "Efficient Data Management and Enhanced Security: Leading TN Bank",
      description: "In operation for more than 100 years, the bank has a strong presence in southern India and is known for its customer-centric approach and innovative solutions.",
      link: "https://ww1.sbainfo.in/case-study/10/efficient-data-management-and-enhanced-security-leading-tn-banks-success-with-sba-ibm-fs7300", // Replace with actual link
    },
  ];

  return (
    <>
      <section>
        <div className="ai-green-v1">
          <div className="init-ai-section1">
            <div className="abspage14">Case Studies</div>
            <div className="init-red-bg14 ">
              Real Results, Remarkable Journeys
            </div>
          </div>
          <video autoPlay muted loop>
            <source src={CaseStudys} type="video/mp4" />
          </video>
        </div>
      </section>

      <section>
        <div className="px-6 py-8 space-y-6">
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">
            Curious about how similar businesses have achieved success with our solutions?
          </p>
          <p className="text-base sm:text-lg md:text-xl">
            Our case studies at <strong>SBA Info Solutions</strong> share compelling stories of how our clients have overcome obstacles and reached their goals.
          </p>
          <p className="text-base sm:text-lg md:text-xl">
            These detailed accounts provide actionable insights into how our solutions can benefit your business, helping you make informed decisions and drive your own success.
          </p>
        </div>
      </section>

      <section>
        <div className="min-h-screen bg-gray-100 py-10 px-5">
          <div className="container mx-auto">
            <h1 className="text-4xl font-bold text-center mb-10 text-blue-600">Case Studies</h1>

            {/* Flexbox for two boxes in one line */}
            <div className="flex flex-wrap justify-between gap-10">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:scale-105 w-full sm:w-[48%]"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">{study.title}</h2>
                  <p className="text-gray-700 mb-4">{study.description}</p>
                  <a
                    href={study.link} // Link to individual case study
                    target="_blank" // Open link in a new tab
                    rel="noopener noreferrer" // Security measure
                    className="inline-block bg-blue-600 text-white py-2 px-4 rounded-full font-semibold shadow-md transition-transform duration-200 hover:bg-blue-700 hover:shadow-lg"
                  >
                    Read More
                  </a>
                </motion.div>
              ))}
            </div>

            <footer className="mt-10 text-center">
              <p className="text-gray-500">SBA Info Solutions Pvt. Ltd. - Elevating your IT services with comprehensive solutions.</p>
            </footer>
          </div>
        </div>
      </section>
    </>
  );
}

export default CaseStudy;
