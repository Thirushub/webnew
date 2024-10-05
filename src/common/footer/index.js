import React from "react";
import "./styles.scss";
import Home19 from "../../assets/images/Home19.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer
      className="relative text-black py-12 w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${Home19})` }}
    >
      <div className="relative z-10 mx-9 grid grid-cols-2 md:grid-cols-6 lg:grid-cols-5 gap-8 px-2 sm:px-4 text-black">
        <div>
          <h6 className="font-bold mb-2">About Us</h6>
          <ul className="space-y-2">
            <li><a href="/AboutUs" className="footer-link">SBA Info Solution</a></li>
            <li><a href="/Carriers" className="footer-link">Careers</a></li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold mb-2">Industries</h6>
          <ul className="space-y-2">
            <li><a href="/Industries" className="footer-link">BFSI</a></li>
            <li><a href="/Industries" className="footer-link">Manufacturing</a></li>
            <li><a href="/Industries" className="footer-link">Media</a></li>
            <li><a href="/Industries" className="footer-link">IT/ITES</a></li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold mb-2">Resources</h6>
          <ul className="space-y-2">
            <li><a href="/CaseStudy" className="footer-link">Case Studies</a></li>
            <li><a href="/Blogs" className="footer-link">Blog</a></li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold mb-2">Solution</h6>
          <ul className="space-y-2">
            <li><a href="/SolutionsPage" className="footer-link">Data and Analytics</a></li>
            <li><a href="/SolutionsPage" className="footer-link">IT Modernization</a></li>
            <li><a href="/SolutionsPage" className="footer-link">ML and Generation AI</a></li>
            <li><a href="/SolutionsPage" className="footer-link">Managed Services</a></li>
            <li><a href="/SolutionsPage" className="footer-link">Business Consulting</a></li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold mb-2">Services</h6>
          <ul className="space-y-2">
            <li><a href="/ManagedService" className="footer-link">Mailing and Collaboration</a></li>
            <li><a href="/ManagedService" className="footer-link">Managed Services</a></li>
            <li><a href="/ManagedService" className="footer-link">Cloud Services</a></li>
          </ul>
        </div>
        <div className="px-16">
          <ul className="space-y-4">
            <li>
              <a href="https://in.linkedin.com/company/sba-info-solutions" className="footer-link text-blue-500">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  style={{ fontSize: "2rem" }} // Set fontSize here
                />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/@venkatesh_watsonx" className="footer-link text-red-500">
                <FontAwesomeIcon
                  icon={faYoutube}
                  style={{ fontSize: "2rem" }} // Set fontSize here
                />
              </a>
            </li>
            <li>
              <a href="tel:+919500262708" className="footer-link text-black">
                <FontAwesomeIcon
                  icon={faPhone}
                  style={{ fontSize: "2rem" }} // Set fontSize here
                />
              </a>
            </li>
            <li>
              <a href="mailto:marketing@sbainfo.in" className="footer-link text-blue-500">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  style={{ fontSize: "2rem" }} // Set fontSize here
                />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Contact Information (Phone and Email) */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center mt-8 px-2 sm:px-4 text-black">
        <div className="text-center md:text-left">
          <p className="text-sm">
            Phone: <a href="tel:+919500262708" className="footer-link text-black">+91 9500262708</a>
          </p>
          <p className="text-sm">
            Email: <a href="mailto:marketing@sbainfo.in" className="footer-link text-black">marketing@sbainfo.in</a>
          </p>
        </div>
      </div>

      <div className="relative z-10 text-center mt-8 text-sm text-black px-2 sm:px-4">
        <p>&copy; 1996 - 2024, SBA Info Solutions.</p>
      </div>
    </footer>
  );
};

export default Footer;
