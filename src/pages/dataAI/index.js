import { useState, useEffect, React } from "react";
import datapage from "../../assets/videos/datapage.mp4";
import "./style.scss";
import aili from "../../assets/images/ai-li.svg";
import aiOrnamentImage from "../../assets/images/image.png";
import aiSectionImage from "../../assets/images/ai-section.svg";
import s1 from "../../assets/images/s1.svg";
import s3 from "../../assets/images/s3.svg";
import s4 from "../../assets/images/s4.svg";
import s2 from "../../assets/images/s2.svg";
import ind1 from "../../assets/images/ind_1.png";
import ind2 from "../../assets/images/ind_2.png";
import ind3 from "../../assets/images/ind_3.png";
import ind4 from "../../assets/images/ind_4.png";
import ind5 from "../../assets/images/ind_5.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import sliderleft from "../../assets/images/slider-left.svg";
import sliderright from "../../assets/images/slider-right.svg";
import certification1 from "../../assets/images/certification 1.png";
import certification2 from "../../assets/images/certification 2.png";
import certification3 from "../../assets/images/certification 3.png";
import certification4 from "../../assets/images/certification 4.png";
import certification5 from "../../assets/images/certification 5.png";
import certification6 from "../../assets/images/certification 6.png";
import certification7 from "../../assets/images/certification 7.png";
import certification8 from "../../assets/images/certification 8.png";
import certification9 from "../../assets/images/certification 9.png";
import certification10 from "../../assets/images/cetification 10.png";
import certification11 from "../../assets/images/certification 11.png";
import certification12 from "../../assets/images/certification 12.png";
import certification13 from "../../assets/images/certification 13.png";
import certification14 from "../../assets/images/certification 14.png";
import certification15 from "../../assets/images/certification 15.jpg";
import certification16 from "../../assets/images/certification 16.jpg";
import certification17 from "../../assets/images/certification 17.jpg";
import certification18 from "../../assets/images/certification 18.jpg";
import certification19 from "../../assets/images/certification 19.jpg";
import certification20 from "../../assets/images/certification 20.jpg";
import certification21 from "../../assets/images/certification 21.png";
import certification22 from "../../assets/images/certification 22.png";
import certification23 from "../../assets/images/certification 23.png";
import certification24 from "../../assets/images/certification 24.png";
import certification25 from "../../assets/images/certification 25.png";
import certification26 from "../../assets/images/certification 26.jpg";
import certification27 from "../../assets/images/certification 27.png";
import certification28 from "../../assets/images/certification 28.png";
import certification29 from "../../assets/images/certification 29.png";
import wat1 from "../../assets/images/wat_1.svg";
import wat2 from "../../assets/images/wat_2.svg";
import wat3 from "../../assets/images/wat_3.svg";
import wat4 from "../../assets/images/wat_4.svg";
import wat5 from "../../assets/images/wat_5.svg";
import rt_arrow from "../../assets/images/rt_arrow_bl.svg";
import red_hat from "../../assets/images/red_hat.svg";
import bg from "../../assets/images/powred_bfimg.png";
import Group from "../../assets/images/Group.svg";

const DataAI = () => {
  const features = [
    "Easy to adopt",
    "Trusted, governed, secure and ethical",
    "Focused on augmenting human intelligence, not replace it",
    "Trained on your quality enterprise data",
    "Transformative",
    "By helping you gain a truly competitive edge over the market",
  ];

  const slides = [
    [
      certification1,
      certification2,
      certification3,
      certification4,
      certification5,
      certification6,
    ],
    [
      certification7,
      certification8,
      certification9,
      certification10,
      certification11,
      certification12,
    ],
    [
      certification13,
      certification14,
      certification15,
      certification16,
      certification17,
      certification18,
    ],
    [
      certification19,
      certification20,
      certification21,
      certification22,
      certification23,
      certification24,
    ],
    [
      certification25,
      certification26,
      certification27,
      certification28,
      certification29,
    ],
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to move the slide manually
  const moveSlide = (direction) => {
    const newSlide = (currentSlide + direction + slides.length) % slides.length;
    setCurrentSlide(newSlide);
  };

  // Handle bullet click for current slide
  const currentSlideHandler = (index) => {
    setCurrentSlide(index);
  };

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 10000); // Change slide every 10 seconds

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, [slides.length]);

  const fetchUsers = () => {
    // Your logic here, e.g., API call, state update, etc.
    console.log("Fetching users...");
    // You can replace this with an actual API call or any other action.
  };

  const [activeIndex, setActiveIndex] = useState(null);

  // Function to toggle the active accordion item
  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Collapse if the same item is clicked
    } else {
      setActiveIndex(index); // Set active if a different item is clicked
    }
  };

  const accordionData = [
    {
      title: "What is Generative AI?",
      content:
        "Generative AI is a type of artificial intelligence that can create new content, such as text, images, or audio, based on patterns in data. It is used for tasks like content generation, language modeling, and image synthesis.",
    },
    {
      title: "What is watson Assistant?",
      content:
        "Watson assistant is an AI-powered virtual agent that can engage in natural conversations to help users with a variety of tasks, such as answering questions, providing recommendations, and automating workflows.",
    },
    {
      title: "What is Conversational AI?",
      content:
        "Conversational AI refers to the use of artificial intelligence to enable human-like interactions between machines and humans through natural language processing and generation. It is used in chatbots, virtual assistants, and other interactive systems.",
    },
    {
      title: "What is the watsonX Platform?",
      content:
        "The watsonX Platform is an open-source, cloud-native platform that provides a comprehensive set of tools and services for building, deploying, and managing AI and data applications. It includes components for data management, machine learning, and model deployment.",
    },
    {
      title: "What is watsonX.ai?",
      content:
        "watsonX.ai is a set of AI services and tools within the WatsonX Platform that enables the development and deployment of AI applications. It includes capabilities for natural language processing, computer vision, and predictive analytics.",
    },
    {
      title: "What is watsonX.data?",
      content:
        "watsonX.data is a set of data management services within the WatsonX Platform that provides a unified view of data across multiple sources and enables secure data sharing and collaboration. It includes capabilities for data cataloging, data virtualization, and data governance.",
    },
    {
      title: "What is watsonX.governance?",
      content:
        "watsonX.governance is a set of governance and compliance services within the WatsonX Platform that ensures the responsible and ethical use of AI and data. It includes capabilities for model risk management, bias detection, and explainability.",
    },
    {
      title: "How can Generative AI be used in business?",
      content:
        "Generative AI can be used in business for tasks such as content creation, product design, and customer service. For example, it can be used to generate personalized marketing content, create product mockups, or provide automated customer support.",
    },
    {
      title: "What are the benefits of using watson assistant?",
      content:
        "The benefits of using watson assistant include improved customer satisfaction, reduced support costs, and increased efficiency. It can handle a large volume of customer inquiries, provide consistent and accurate responses, and free up human agents to focus on more complex tasks.",
    },
    {
      title: "How can Conversational AI improve customer experience?",
      content:
        "Conversational AI can improve customer experience by providing 24/7 support, personalized recommendations, and seamless interactions across multiple channels. It can also gather valuable customer insights and feedback to help businesses improve their products and services.",
    },
  ];

  return (
    <>
      <section>
        <div class="ai-green-vi">
          <div class="init-ai-section">
            <div>Empower Your Business with</div>
            <div class="init-red-bg px-5">Trusted AI Solutions</div>
          </div>
          <video autoPlay muted loop>
            <source src={datapage} type="video/mp4" />
          </video>
        </div>
      </section>
      <section className="relative my-20">
        <div className="container mx-auto max-w-[1600px] px-16">
          <div className="flex flex-wrap">
            <div className="w-full md:w-8/12">
              <p className="text-[41px] font-light md:w-10/12 w-full">
                For data driven enterprises looking to create exceptional
                customer and employee experience,
              </p>
              <p className="text-[41px] font-light mt-4 md:mt-20 md:w-9/12 w-full">
                SBA provides{" "}
                <span className="text-red-600 font-semibold">
                  modular and sustainable AI solutions
                </span>{" "}
                that are
              </p>
            </div>
            <div className="w-full md:w-4/12">
              <img
                src={aiSectionImage}
                loading="lazy"
                alt="AI"
                className="h-[28rem] w-[22rem] object-contain"
              />
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 hidden md:block z-[-1]">
          <img src={aiOrnamentImage} loading="lazy" alt="Ornament" />
        </div>
      </section>
      <section className="custom-container ai-section">
        <div className="relative px-12 md:px-25">
          <div className="flex flex-wrap justify-between mt-10">
            {features.map((text, index) => (
              <div
                key={index}
                className="w-full md:w-4/12 mb-4 flex items-center gap-6"
              >
                <div>
                  <img
                    className="ai-m"
                    src={aili}
                    loading="lazy"
                    alt="ornament"
                  />
                </div>
                <div className="ai-li-text">{text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="relative bg-white py-20">
          <div className="hidden md:block absolute top-0 left-0 w-1/2 h-full overflow-hidden">
            <img
              src={aiOrnamentImage}
              loading="lazy"
              alt="ornament"
              className="h-full object-cover transform scale-x-[-1]"
            />
          </div>
          <div className="relative px-5 max-w-screen-xl mx-auto">
            <h1 className="text-center text-3xl md:text-5xl font-bold">
              Solutions & Services
            </h1>
          </div>
        </div>
      </section>
      <section>
        <div className="p-6 md:p-10 mb-5 bg-white rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            <div className="md:w-1/2 w-full p-1  md:p-4">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={s1}
                  className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                  alt="Data Orchestration"
                />
              </div>
            </div>
            <div className="md:w-1/2 w-full md:pl-6 mt-6 md:mt-6">
              <h2 className="text-3xl font-bold mb-6 md:mb-16 text-left">
                Data Orchestration and Management
              </h2>
              <ul className="text-base pl-5 list-disc space-y-3 text-left">
                <li>Database Consulting and Management</li>
                <li>Data Fabric Architecture for Self-Service</li>
                <li>Data Warehousing, Data Lakes, and Lakehouses</li>
                <li>
                  Partner Ecosystem Services - Migration, Administration,
                  Performance Tuning, Security, and Compliance Services
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="p-6 md:p-10 mb-5 bg-white rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            <div className="md:w-1/2 w-full md:pl-6 mt-6 md:mt-6">
              <h2 className="text-3xl font-bold mb-6 md:mb-16 text-left">
                Business Intelligence & Analytics 
              </h2>
              <ul className="text-base pl-5 list-disc space-y-3 text-left">
                <li>
                  Cognos Analytics for enterprise BI, reporting, and augmented
                  analytics with inbuilt AI
                </li>
                <li>
                  Integration with SAP Analytics Cloud, other BI tools, data
                  sources, and applications
                </li>
                <li>Custom report development and dashboard creation</li>
                <li>Data modeling and ETL/ELT services</li>
                <li>Training and enablement services</li>
              </ul>
            </div>
            <div className="md:w-1/2 w-full p-1 md:p-4 d-flex justify-end">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={s2}
                  className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                  alt="Business Intelligence & Analytics"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 md:p-10 mb-5 bg-white rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            <div className="md:w-1/2 w-full p-1 md:p-4">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={s3}
                  className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                  alt="Intelligent IT Automation"
                />
              </div>
            </div>
            <div className="md:w-1/2 w-full md:pl-6 mt-6 md:mt-6">
              <h2 className="text-3xl font-bold mb-6 md:mb-16 text-left">
                <b>Intelligent IT Automation</b>
              </h2>
              <ul className="text-base pl-5 list-disc space-y-3 text-left">
                <li>
                  Enterprise Observability for application performance and
                  Infrastructure quality management
                </li>
                <li>AI powered Cloud and Finops</li>
                <li>Incident management & sustainable IT</li>
                <li>
                  ML services and ChatOps for streamlined IT service management
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="p-6 md:p-10 mb-5 bg-white rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            <div className="md:w-1/2 w-full md:pl-6 mt-6 md:mt-6">
              <h2 className="text-3xl font-bold mb-6 md:mb-16 text-left">
                <b>Enterprise ML and Generative AI</b>
              </h2>
              <ul className="text-base pl-5 list-disc space-y-3 text-left">
                <li>Customer care and call center modernization</li>
                <li>
                  Retrieval Augmented generation for knowledge self-service
                </li>
                <li>Conversational AI and virtual assistant development</li>
                <li>Development and deployment of ML models</li>
                <li>Responsible AI and model governance consulting</li>
                <li>Integration with enterprise systems and applications</li>
                <li>Data preparation and feature engineering services</li>
              </ul>
            </div>
            <div className="md:w-1/2 w-full p-1 md:p-4 flex justify-end">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={s4}
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
        <h1 className="text-5xl font-bold text-center mb-12">Industries</h1>

        <div className="flex flex-wrap justify-between gap-0">
          {/* Manufacturing Card */}
          <div className="relative group w-full md:w-1/5 h-96 overflow-hidden rounded-lg shadow-lg">
            <img
              src={ind1}
              alt="Manufacturing"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 p-4 flex flex-col justify-end">
              <div className="flex justify-between items-center text-white">
                <p className="text-lg font-semibold">Manufacturing</p>
                <FaLongArrowAltRight />
              </div>
            </div>
            {/* Hover content */}
            <div className="absolute inset-0 bg-blue-500 bg-opacity-90 p-6 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-lg font-semibold text-white mb-4">
                Manufacturing
              </p>
              <ul className="text-white space-y-2 text-sm">
                <li>Predictive maintenance</li>
                <li>Supply chain optimization</li>
                <li>Cloudera workload optimization</li>
                <li>SAP observability</li>
                <li>High performance Analytics</li>
                <li>AI assistants</li>
              </ul>
            </div>
          </div>

          {/* BFSI Card */}
          <div className="relative group w-full md:w-1/5 h-96 overflow-hidden rounded-lg shadow-lg">
            <img
              src={ind2}
              alt="BFSI"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 p-4 flex flex-col justify-end">
              <div className="flex justify-between items-center text-white">
                <p className="text-lg font-semibold">BFSI</p>
                <FaLongArrowAltRight />
              </div>
            </div>
            {/* Hover content */}
            <div className="absolute inset-0 bg-blue-500 bg-opacity-90 p-6 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-lg font-semibold text-white mb-4">BFSI</p>
              <ul className="text-white space-y-2 text-sm">
                <li>Customer Care</li>
                <li>Virtual Agent, conversational search</li>
                <li>App Modernisation</li>
                <li>Code, AIops, Finops</li>
                <li>Digital Labor</li>
                <li>Fraud, Risk, Wealth management</li>
              </ul>
            </div>
          </div>

          {/* Call Center Upgrade Card */}
          <div className="relative group w-full md:w-1/5 h-96 overflow-hidden rounded-lg shadow-lg">
            <img
              src={ind3}
              alt="Call Center Upgrade"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 p-4 flex flex-col justify-end">
              <div className="flex justify-between items-center text-white">
                <p className="text-lg font-semibold">Call Center Upgrade</p>
                <FaLongArrowAltRight />
              </div>
            </div>
            {/* Hover content */}
            <div className="absolute inset-0 bg-blue-500 bg-opacity-90 p-6 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-lg font-semibold text-white mb-4">
                Call Center Upgrade
              </p>
              <ul className="text-white space-y-2 text-sm">
                <li>Speech transcription</li>
                <li>Voice agent - speech synthesis</li>
                <li>Agent assist - productivity</li>
                <li>Sentiment analytics</li>
              </ul>
            </div>
          </div>

          {/* Media Card */}
          <div className="relative group w-full md:w-1/5 h-96 overflow-hidden rounded-lg shadow-lg">
            <img
              src={ind4}
              alt="Media"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 p-4 flex flex-col justify-end">
              <div className="flex justify-between items-center text-white">
                <p className="text-lg font-semibold">Media</p>
                <FaLongArrowAltRight />
              </div>
            </div>
            {/* Hover content */}
            <div className="absolute inset-0 bg-blue-500 bg-opacity-90 p-6 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-lg font-semibold text-white mb-4">Media</p>
              <ul className="text-white space-y-2 text-sm">
                <li>Generative AI language tasks</li>
                <li>Content creation</li>
                <li>Summarization</li>
                <li>Entity Extraction</li>
                <li>Productivity & Efficiency gains</li>
              </ul>
            </div>
          </div>

          {/* IT/ITES Card */}
          <div className="relative group w-full md:w-1/5 h-96 overflow-hidden rounded-lg shadow-lg">
            <img
              src={ind5}
              alt="IT/ITES"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 p-4 flex flex-col justify-end">
              <div className="flex justify-between items-center text-white">
                <p className="text-lg font-semibold">IT/ITES</p>
                <FaLongArrowAltRight />
              </div>
            </div>
            {/* Hover content */}
            <div className="absolute inset-0 bg-blue-500 bg-opacity-90 p-6 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-lg font-semibold text-white mb-4">IT/ITES</p>
              <ul className="text-white space-y-2 text-sm">
                <li>Managed Security services</li>
                <li>Data center and Cloud Solutions</li>
                <li>Vendor Management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="py-8">
        <div className="flex justify-between items-center mx-auto md:w-9/12">
          <button
            className="bg-transparent p-2 cursor-pointer focus:outline-none"
            onClick={() => moveSlide(-1)}
          >
            <img src={sliderleft} alt="Previous" />
          </button>
          <h1 className="text-center text-xl md:text-5xl font-bold">
            Our Proficiency and{" "}
            <span className="text-red-600">Certifications</span>
          </h1>
          <button
            className="bg-transparent p-2 cursor-pointer focus:outline-none"
            onClick={() => moveSlide(1)}
          >
            <img src={sliderright} alt="Next" />
          </button>
        </div>

        <div className="mx-auto overflow-hidden mt-6">
          {/* Slides */}
          {slides.map((slideImages, index) => (
            <div
              key={index}
              className={`${
                index === currentSlide ? "block" : "hidden"
              } w-full transition-transform duration-500 ease-in-out`}
            >
              <div className="flex flex-wrap">
                {slideImages.map((image, idx) => (
                  <div key={idx} className="w-1/6 px-1">
                    <img
                      src={image}
                      alt={`Certification ${idx + 1}`}
                      className="w-full"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Bullets */}
          <div className="flex justify-center mt-4">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`h-4 w-4 rounded-full mx-1 cursor-pointer ${
                  index === currentSlide ? "bg-red-600" : "bg-gray-400"
                }`}
                onClick={() => currentSlideHandler(index)}
              ></span>
            ))}
          </div>
        </div>
      </section>
      <section className="py-8">
        <div className="container mx-auto max-w-7xl px-4">
          <h1 className="text-5xl font-bold text-center mb-12">
            Powered by <span className="text-red-600">watsonX</span>
          </h1>

          {/* Watson Assistant */}
          <div className="mb-10 flex flex-wrap md:flex-nowrap items-center justify-between">
            <div className="md:w-1/2 w-full md:pr-10">
              <h2 className="text-3xl font-bold mb-4">watson Assistant</h2>
              <p className="text-lg">
                IBM Watson Assistant is a conversation AI platform that helps
                you provide customers fast, straightforward, and accurate
                answers to their questions, across any application, device, or
                channel.
              </p>
            </div>
            <div className="md:w-1/2 w-full flex justify-center">
              <img
                src={wat1}
                alt="Watson Assistant"
                className="rounded-lg h-auto w-full max-w-xs object-cover"
              />
            </div>
          </div>

          {/* Watson Discovery */}
          <div className="mb-10 flex flex-wrap md:flex-nowrap items-center justify-between">
            <div className="md:w-1/2 w-full flex justify-center">
              <img
                src={wat2}
                alt="Watson Discovery"
                className="rounded-lg h-auto w-full max-w-xs object-cover"
              />
            </div>
            <div className="md:w-1/2 w-full md:pl-10">
              <h2 className="text-3xl font-bold mb-4">watson Discovery</h2>
              <p className="text-lg">
                IBM Watson Discovery is an award-winning enterprise search and
                AI search technology that breaks open data silos and retrieves
                specific answers to your questions while analyzing trends and
                relationships buried in enterprise data.
              </p>
            </div>
          </div>

          {/* Instana */}
          <div className="mb-10 flex flex-wrap md:flex-nowrap items-center justify-between">
            <div className="md:w-1/2 w-full md:pr-10">
              <h2 className="text-3xl font-bold mb-4">Instana</h2>
              <p className="text-lg">
                Instana Observability is a fully-automated application
                performance management solution designed for the challenges of
                managing microservice and cloud-native applications. It makes
                your applications visible and enables intelligent actions based
                on observed information.
              </p>
            </div>
            <div className="md:w-1/2 w-full flex justify-center">
              <img
                src={wat3}
                alt="Instana"
                className="rounded-lg h-auto w-full max-w-xs object-cover"
              />
            </div>
          </div>

          {/* Cognos */}
          <div className="mb-10 flex flex-wrap md:flex-nowrap items-center justify-between">
            <div className="md:w-1/2 w-full flex justify-center">
              <img
                src={wat4}
                alt="Cognos"
                className="rounded-lg h-auto w-full max-w-xs object-cover"
              />
            </div>
            <div className="md:w-1/2 w-full md:pl-10">
              <h2 className="text-3xl font-bold mb-4">Cognos</h2>
              <p className="text-lg">
                Unleash the power of your data through AI-driven automation and
                insights in Cognos Analytics. Simply pose a question or
                hypothesis, and let AI provide the insights you require.
              </p>
            </div>
          </div>

          {/* Turbonomic */}
          <div className="mb-10 flex flex-wrap md:flex-nowrap items-center justify-between">
            <div className="md:w-1/2 w-full md:pr-10">
              <h2 className="text-3xl font-bold mb-4">Turbonomic</h2>
              <p className="text-lg">
                Turbonomic is a software platform that helps organizations
                optimize the performance and cost of their IT infrastructure,
                including public, private, and hybrid cloud environments, by
                automating optimization actions in real-time.
              </p>
            </div>
            <div className="md:w-1/2 w-full flex justify-center">
              <img
                src={wat5}
                alt="Turbonomic"
                className="rounded-lg h-auto w-full max-w-xs object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="pt-0 md:pt-5 w-full">
        <div className="w-full mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <a href="https://www.ibm.com/products/watsonx-ai">
              <div
                className="h-60 bg-no-repeat bg-cover"
                style={{ backgroundImage: `url(${bg})` }}
              >
                <p className="flex items-end justify-center h-3/5 text-2xl font-black">
                  watson<span className="text-blue-600">x</span>.ai
                </p>
                <div className="flex justify-end px-3 mt-5">
                  <img src={rt_arrow} loading="lazy" alt="arrow" />
                </div>
              </div>
            </a>

            <a href="https://www.ibm.com/products/watsonx-data">
              <div
                className="h-60 bg-no-repeat bg-cover"
                style={{ backgroundImage: `url(${bg})` }} 
              >
                <p className="flex items-end justify-center h-3/5 text-2xl font-black">
                  watson<span className="text-blue-600">x</span>.data
                </p>
                <div className="flex justify-end px-3 mt-5">
                  <img src={rt_arrow} loading="lazy" alt="arrow" />
                </div>
              </div>
            </a>

            <a href="https://www.ibm.com/products/watsonx-governance">
              <div
                className="h-60 bg-no-repeat bg-cover"
                style={{ backgroundImage: `url(${bg})` }} 
              >
                <p className="flex items-end justify-center h-3/5 text-2xl font-black">
                  watson<span className="text-blue-600">x</span>.governance
                </p>
                <div className="flex justify-end px-3 mt-5">
                  <img src={rt_arrow} loading="lazy" alt="arrow" />
                </div>
              </div>
            </a>

            <a href="https://www.redhat.com/en/technologies/all-products">
              <div className="h-60 bg-gray-100 rounded-lg">
                <p className="flex items-end justify-center h-3/5 text-2xl font-black">
                  <img src={red_hat} alt="Red Hat" />
                </p>
                <div className="flex justify-end px-3 mt-5">
                  <img src={rt_arrow} loading="lazy" alt="arrow" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>



      <section className="my-5 py-5">
        <div className="relative pb-[37.25%] h-0 overflow-hidden">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/2qhssWueRUI"
            allowFullScreen
            title="YouTube Video"
          ></iframe>
        </div>
      </section>
      <section className="my-5 py-5 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="md:w-1/2 w-full text-center md:text-left">
            <p className="text-5xl font-bold text-gray-900 leading-tight">
              Ready To <span className="text-red-600">Unlock</span> The Power Of{" "}
              <span className="text-red-600">Data and AI?</span>
            </p>

            <p className="text-lg text-gray-700 mt-5">
              If you're interested in exploring our Data and AI solutions or
              need more information, our experts are ready to assist you.
            </p>

            <div className="flex gap-3 mt-5 justify-center md:justify-start flex-col md:flex-row items-center">
              {/* Call Back Button */}
              <button
                onClick={fetchUsers}
                className="bg-red-600 text-white py-2 px-5 rounded-full hover:bg-red-700 transition duration-300"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <a href="/ContactUs"> Get a Call Back</a>
              </button>

              {/* Brochure Download Button */}
              <a
                href="https://www.sbainfo.in/data-ai-brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="border-2 border-red-600 text-red-600 py-2 px-5 rounded-full hover:bg-red-600 hover:text-white transition duration-300">
                  Download Brochure
                </button>
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 w-full mt-5 md:mt-0 flex justify-center md:justify-end">
            <img
              src={Group}
              className="w-full max-w-md"
              loading="lazy"
              alt="AI"
            />
          </div>
        </div>
      </section>
      <section className="bg-[#F5F9FD] flex items-center justify-center min-h-screen">
        <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-8">
            Frequently Asked Questions
          </h1>
          <div className="space-y-4">
            {accordionData.map((item, index) => (
              <div key={index} className="border-b border-gray-200">
                <h2>
                  <button
                    className={`w-full text-left py-4 px-6 text-black font-semibold focus:outline-none flex justify-between items-center ${
                      activeIndex === index ? "border border-blue-200" : ""
                    }`}
                    onClick={() => toggleAccordion(index)}
                  >
                    {item.title}
                    <span className="text-blue-600">
                      {activeIndex === index ? (
                        <svg
                          className="w-4 h-4 transform rotate-180"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          ></path>
                        </svg>
                      ) : (
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          ></path>
                        </svg>
                      )}
                    </span>
                  </button>
                </h2>
                {activeIndex === index && (
                  <div className="px-6 py-4 text-gray-700">{item.content}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default DataAI;
