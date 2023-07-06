import {
    FaMapMarkerAlt,
    FaPhone,
    FaLinkedin,
    FaInstagram,
  } from "react-icons/fa";
  
  import React from "react";
  
  const Footer = () => {
    return (
      <footer className="w-full flex-col">
        <div className="flex space-between p-6">
          <div className="flex-1">
            <h3>
              <FaMapMarkerAlt /> Services:
            </h3>
            <p>Software Development</p>
            <p>Mobile Development</p>
            <p>UX/UI Design</p>
            <p>Marketing</p>
            <p>Process automation</p>
          </div>
          <div className="flex-1">
            <h3>
              <FaPhone /> Contact:
            </h3>
            <p>Phone: +359 88 8888888</p>
            <p>Email: info@digit-solutions.com</p>
          </div>
          <div className="flex-1">
            <h3>Follow us:</h3>
            <ul>
              <li>
                <a href="https://www.linkedin.com/your-profile">
                  <FaLinkedin /> LinkedIn
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/your-profile">
                  <FaInstagram /> Instagram
                </a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <p className="justify-center items-center text-center px-4 sm:px-6 lg:px-12">
            &copy; {new Date().getFullYear()} DigIT Solutions. All rights
            reserved.
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;