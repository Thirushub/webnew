import React from 'react';
import "./style.scss";
import Blog from "../../assets/videos/Blogs.mp4";
import { motion } from 'framer-motion';

const Blogs = () => {
  const blogPosts = [
    {
      title: "Here's why a generative model alone is never good enough",
      author: "Venkatesh A",
      date: "17-02-2024",
      description: "Artificial intelligence has made progress in recent years, and one of the most important advancements is generative AI. Generative AI offers immense potential for innovation and efficiency, spanning diverse fields.",
      link: "https://ww1.sbainfo.in/blog/heres-why-a-generative-model-alone-is-never-good-enough" // Add a link for navigation
    },
    {
      title: "How to pick the right Generative AI Studio for your Enterprise?",
      author: "Venkatesh A",
      date: "04-02-2024",
      description: "The advent of Gemini marks Google DeepMind's foray into the realm of next-generation AI models, aiming to surpass the capabilities of OpenAI's ChatGPT.",
      link: "https://ww1.sbainfo.in/blog/how-to-pick-the-right-generative-ai-for-your-enterprise" // Add a link for navigation
    },
    {
      title: "How can Large Language Models grow your productivity by 5X",
      author: "Venkatesh A",
      date: "16-01-2024",
      description: "Unlocking the secrets of Large Language Models (LLMs) could hold the key in ensuring Elon Musk-like productivity in 2024.",
      link: "https://ww1.sbainfo.in/blog/how-can-large-language-models-grow-your-productivity-by-5x" // Add a link for navigation
    },
    {
      title: "Truths About Generative AI Every IT Leader Must Know",
      author: "Venkatesh A",
      date: "19-10-2023",
      description: "As with any subset of artificial intelligence, Generative AI has rapidly evolved in recent years, offering incredible potential and applications across various industries.",
      link: "https://ww1.sbainfo.in/blog/truths-about-generative-ai-every-it-leader-must-know" // Add a link for navigation
    },
    {
      title: "8 Secrets to Choosing the Perfect Email Service Provider: A Certified Guide",
      author: "Venkatesh A",
      date: "12-06-2023",
      description: "In today's digital era, selecting the perfect email service provider is crucial for businesses of all sizes. A reliable and efficient email service plays a vital role in communication, collaboration, and maintaining a professional image.",
      link: "https://ww1.sbainfo.in/blog/8-secrets-to-choosing-the-perfect-email-service-provider-a-certified-guide" // Add a link for navigation
    },
    {
      title: "Recover from cyber-attacks in hours, not days, with IBM FlashSystem",
      author: "Venkatesh A",
      date: "16-04-2023",
      description: "Businesses of all sizes are facing pressure to optimize IT and address digital transformation.",
      link: "https://ww1.sbainfo.in/blog/recover-from-cyber-attacks-in-hours-notdays-with-ibm-flashsystem" // Add a link for navigation
    },
    {
      title: "Choosing the Best IT Infrastructure for SAP HANA: Power10",
      author: "Venkatesh A",
      date: "10-04-2023",
      description: "A mighty challenge is looming and it's time organizations plan for their future. 2025 is fast approaching and migration to SAP HANA will be a top priority.",
      link: "https://ww1.sbainfo.in/blog/choosing-the-best-it-infrastructure-for-sap-hanapower10" // Add a link for navigation
    },
    {
      title: "5 Signs it’s time for datacenter modernization",
      author: "Venkatesh A",
      date: "08-12-2022",
      description: "Having worked with industries of varying demands for the last 3 decades, we’ve compiled indicators of performance used to signal outdated infrastructure.",
      link: "https://ww1.sbainfo.in/blog/5-signs-its-time-for-datacenter-modernization" // Add a link for navigation
    },
    {
      title: "Zero Trust Network and Key Benefits it Brings to Table",
      author: "Kanthanathan S",
      date: "01-10-2022",
      description: "As the cybercrime environment evolves, it puts pressure on security experts. Zero Trust enables security teams to work more smartly.",
      link: "https://ww1.sbainfo.in/blog/zero-trust-network-and-key-benefits-it-brings-to-table" // Add a link for navigation
    },
    {
      title: "Driving innovation for SAP HANA workloads through IBM Power Systems Virtual Server",
      author: "Viswanathan",
      date: "15-05-2022",
      description: "If your business is running mission-critical SAP workloads, it’s time to make some important decisions!",
      link: "https://ww1.sbainfo.in/blog/driving-innovation-for-sap-hana-workloads-through-ibm-power-systems-virtual-server" 
      },
  ];

  return (
    <>
      <section>
        <div className="ai-green-v1">
          <div className="init-ai-section1">
            <div className="abspage12">Blogs</div>
            <div className="init-red-bg12 ">
              Illuminating Ideas, Inspiring Minds            
            </div>
          </div>
          <video autoPlay muted loop>
            <source src={Blog} type="video/mp4" />
          </video>
        </div>
      </section>
      <section>
        <div className="flex justify-center items-center h-screen py-1">
          <p className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl px-1">
            Stay ahead in the business landscape with our comprehensive blog, featuring practical tips, industry trends, and in-depth guides tailored for small business owners and aspiring entrepreneurs.
          </p>
        </div>
      </section>

      <section>
        <div className="min-h-screen bg-gray-100 py-10 px-5">
          <div className="container mx-auto">
            <h1 className="text-4xl font-bold text-center mb-10 text-blue-600">Blog Posts</h1>

            {/* Flexbox for two boxes in one line */}
            <div className="flex flex-wrap justify-between gap-10">
              {blogPosts.map((post, index) => (
                <motion.div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:scale-105 w-full sm:w-[48%]"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h2>
                  <p className="text-gray-500 mb-2">{`By ${post.author} on ${post.date}`}</p>
                  <p className="text-gray-700 mb-4">{post.description}</p>
                  <a
                    href={post.link} // Use the link from the blog post
                    className="inline-block bg-blue-600 text-white py-2 px-4 rounded-full font-semibold shadow-md transition-transform duration-200 hover:bg-blue-700 hover:shadow-lg"
                  >
                    Read More
                  </a>
                </motion.div>
              ))}
            </div>

            <footer className="mt-10 text-center">
              <p className="text-gray-500">SBA Info Solutions Pvt. Ltd. - Empowering businesses with innovative IT solutions.</p>
            </footer>
          </div>
        </div>
      </section>
    </>
  );
}

export default Blogs;
