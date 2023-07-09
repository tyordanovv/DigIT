import {
    FaDesktop,
    FaPhone,
    FaLinkedin,
    FaInstagram,
  } from "react-icons/fa";
  
  import React from "react";
  
  const Footer = () => {
    return (
      <footer className="realtive text-white w-full inset-0 bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/Mauve.jpg)`,
        zIndex: -2,
        }}>
          <div className="flex flex-col p-4 md:flex-row space-between md:p-8 gap-4" >
            <div className="flex-1">
              {/* List of contacts */}
              <div className="flex flex-row gap-2 py-2">
                <FaPhone className="pt-1"/>
                <h3>Contact:</h3>
              </div>
              <div className="text-slate-400">
                <p>Phone: +359 88 8888888</p>
                <p>Email: info@digit-solutions.com</p>
              </div>
            </div>
            <div className="flex-1">
              {/* List of our services */}
              <div className="flex flex-row gap-2 py-2">
                <FaDesktop className="pt-1"/> 
                <h3>Services:</h3>
              </div>
              <div className="text-slate-400">
                <p>Software Development</p>
                <p>Mobile Development</p>
                <p>UX/UI Design</p>
                <p>Marketing</p>
                <p>Process automation</p>
              </div>
            </div>
            {/* List of social media */}
            <div className="flex-1">
              <h3 className="py-2">Follow us:</h3>
              <ul className="text-slate-400">
                <li className="flex flex-row gap-2">
                  <FaLinkedin className="pt-1"/>
                  <a href="https://www.linkedin.com/your-profile">LinkedIn</a>
                </li>
                <li className="flex flex-row gap-2">
                  <FaInstagram className="pt-1"/>
                  <a href="https://www.instagram.com/your-profile">Instagram</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="p-6">
            <p className="text-slate-400 justify-center items-center text-center px-4 sm:px-6 lg:px-12">
              &copy; {new Date().getFullYear()} DigIT Solutions. All rights
              reserved.
            </p>
          </div>
        {/* </div> */}
      </footer>
    );
  };
  
  export default Footer;