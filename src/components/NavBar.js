import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [click, setClick] = useState(true);
  const handleClick = () => setClick(!click);

  return (
    <div className="absolute top-0 left-0 right-0 bg-transparent z-10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* left part of the nav bar logo */}
          <a href="/home" className="text-white text-2xl font-bold">
            DigIT Solutions
          </a>

          {/* right part of the nav bar */}
          <div className="md:hidden">
            {/* Hamburger menu */}
            <div onClick={handleClick}>
              {click ? (
                <FaBars className="text-white text-2xl" />
              ) : (
				<div>
	                <FaTimes className="text-white text-2xl" />

					<div className="mt-4 flex flex-col">
						<a
						href="Home"
						className="text-white hover:text-teal-200 mb-2"
						>
							About us
						</a>
						<a
						href="Services"
						className="text-white hover:text-teal-200 mb-2"
						>
							Services
						</a>
						<a
						href="Jobs"
						className="text-white hover:text-teal-200 mb-2"
						>
							Jobs
						</a>
						<a
						href="Contact Us"
						className="text-white hover:text-teal-200"
						>
							Contact Us
						</a>
					</div>
				</div>
              )}
            </div>
          </div>

          {/* Navigation links for larger screens */}
          <div className="hidden md:block">
            <div className="flex gap-10">
              <a href="Home" className="text-white hover:text-teal-200">
                About us
              </a>
              <a href="Services" className="text-white hover:text-teal-200">
                Services
              </a>
              <a href="Jobs" className="text-white hover:text-teal-200">
                Jobs
              </a>
              <a href="Contact Us" className="text-white hover:text-teal-200">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;