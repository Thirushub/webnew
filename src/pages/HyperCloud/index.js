import React from 'react';
import "./style.scss";
import HyperClouds from "../../assets/videos/HybridCloud.mp4";
import hyper1 from "../../assets/images/hyper1.jpg";
import hyper2 from "../../assets/images/hyper2.jpg";
import hyper3 from "../../assets/images/hyper3.jpg";

const HyperCloud = () => {
  return (
    <>
      <section>
        <div class="ai-green-v1">
          <div class="init-ai-section1">
            <div className="abspage16">Open Hybrid Cloud</div>
            <div class="init-red-bg16 ">
              Integrated Cloud Services
            </div>
          </div>
          <video autoPlay muted loop>
            <source src={HyperClouds} type="video/mp4" />
          </video>
        </div>
      </section>

      <section>
  <div className="p-4 space-y-6">
    {/* Red Hat OpenShift Section */}
    <div className="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-6 md:w-2/3">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-left">Red Hat OpenShift</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600 text-left text-base font-normal">
          <li><strong>Kubernetes Orchestration:</strong> Scale applications seamlessly with robust orchestration capabilities.</li>
          <li><strong>Development Streamlining:</strong> Use integrated tools and CI/CD pipelines for efficient development.</li>
          <li><strong>Enterprise Security:</strong> Secure applications with built-in enterprise-grade security features.</li>
          <li><strong>Hybrid Cloud Operations:</strong> Operate across on-premises, public, and hybrid clouds.</li>
          <li><strong>Container Management:</strong> Deploy and manage applications in containers at scale.</li>
        </ul>
      </div>
      <div className="flex md:w-1/2">
        <img
          src={hyper1}
          alt="Cloud illustration"
          className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
        />
      </div>
    </div>

    {/* Red Hat Ansible Section */}
    <div className="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden">
      <div className="flex md:w-1/2">
        <img
          src={hyper2}
          alt="Data center illustration"
          className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-6 md:w-2/3">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-left">Red Hat Ansible</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600 text-left text-base font-normal">
          <li><strong>Tool Integration:</strong> Seamlessly integrates with a wide range of tools and systems.</li>
          <li><strong>Uniform Configurations:</strong> Ensure consistent configurations and deployments across environments.</li>
          <li><strong>Automation at Scale:</strong> Automate thousands of servers both on-premises and in the cloud.</li>
          <li><strong>Agentless Management:</strong> Simplify deployment and management without agents.</li>
          <li><strong>IT Process Automation:</strong> Streamline IT processes across environments.</li>
        </ul>
      </div>
    </div>

    {/* Red Hat Enterprise Linux (RHEL) Section */}
    <div className="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-6 md:w-2/3">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-left">Red Hat Enterprise Linux (RHEL)</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600 text-left text-base font-normal">
          <li><strong>Consistent Environments:</strong> Deliver reliable operating environments across all platforms with robust features.</li>
          <li><strong>Security and Compliance:</strong> Enhance security with advanced controls.</li>
          <li><strong>Scalability and Flexibility:</strong> Adapt to changing business needs with ease.</li>
        </ul>
      </div>
      <div className="flex md:w-1/2">
        <img
          src={hyper3}
          alt="Security and technology illustration"
          className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
        />
      </div>
    </div>
  </div>
</section>


    </>
  )
}

export default HyperCloud;
