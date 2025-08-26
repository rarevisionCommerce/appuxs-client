import Logo from "../../assets/Logo.png";
import { Link, useLocation } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";
import { ChevronRight, Mail, MapPin, Phone } from "lucide-react";

function Footer() {
  const location = useLocation();
  const { pathname } = location;
  

  return (
    <div className=" bg-slate-900">
      <div
        className={`md:grid-cols-2 container mx-auto lg:grid-cols-4 grid  gap-2 sm:gap-8 p-4 ${
          (pathname.includes("admin-dashboard") ||
            pathname.includes("login")) &&
          "hidden"
        }`}
      >
        {/* Logo and Description */}
        <div className=" w-full border-light/20 border-b lg:border-none ">
          <div className="mb-4">
          <h1 className="text-secondary font-bold text-2xl">Appuxs LLC</h1>
            <p className="text-light text-sm leading-relaxed">
              Your reliable partner in software development services.
            </p>
            <p className="text-green-400 inline-flex items-center gap-2 leading-relaxed">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              150+ Satisfied Customers
            </p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-3  w-full py-3 border-light/20 border-b lg:border-none  md:mb-0">
          <header className="flex flex-col gap-2">
            <h1 className=" text-light  text-lg font-semibold rounded-tr-2xl rounded-bl-2xl ">
              Get In Touch
            </h1>
            <div className="h-1 w-20 bg-gradient-to-r from-transparent to-secondary  "></div>
          </header>
          <div className="flex flex-col gap-3">
            <p className="text-light text-sm inline-flex gap-2 items-center  ">
              <MapPin className="h-6 w-6 text-secondary " /> 1 MICHAEL DRIVE BEVERLY HILLS,
              FL 34465
            </p>
            <a
              target="_blank"
              href="mailto:info@appuxs.com"
              className="text-light text-sm inline-flex items-center gap-2 "
              rel="noopener noreferrer"
            >
              <Mail className="h-6 w-6 text-secondary " /> info@appuxs.com
            </a>
            <div className="text-light text-sm inline-flex gap-2 items-center">
              <Phone className="h-6 w-6 text-secondary " />
              <div className="flex gap-2">
                <a
                  href="tel: +1 (256) 305-3000"
                  className="hover:text-secondary transition-colors"
                >
                 +1 (256) 305-3000
                </a>
                
              </div>
            </div>
          </div>
          
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-3 py-3 border-light/20 border-b lg:border-none w-full  md:mb-0">
          <header className="flex flex-col gap-2">
            <h1 className=" text-light  text-lg font-semibold rounded-tr-2xl rounded-bl-2xl ">
              Quick Links
            </h1>
            <div className="h-1 w-20 bg-gradient-to-r from-transparent to-secondary  "></div>
          </header>
          <div className="flex flex-col gap-3">
            <Link
              to="/"
              className="text-light group inline-flex gap-2 items-center hover:text-secondary text-sm transition-colors duration-300 "
            >
              <ChevronRight className="group-hover:translate-x-1 h-4 w-4 text-secondary transition-all duration-300" />
              Home
            </Link>
            <Link
              to="/Services"
              className="text-light group inline-flex gap-2 items-center hover:text-secondary text-sm transition-colors duration-300 "
            >
              <ChevronRight className="group-hover:translate-x-1 h-4 w-4 text-secondary transition-all duration-300" />{" "}
              Services
            </Link>
            <Link
              to="/About"
              className="text-light group inline-flex gap-2 items-center hover:text-secondary text-sm transition-colors duration-300 "
            >
              <ChevronRight className="group-hover:translate-x-1 h-4 w-4 text-secondary transition-all duration-300" />{" "}
              About
            </Link>
            <Link
              to="/Projects"
              className="text-light group inline-flex gap-2 items-center hover:text-secondary text-sm transition-colors duration-300 "
            >
              <ChevronRight className="group-hover:translate-x-1 h-4 w-4 text-secondary transition-all duration-300" />{" "}
              Portfolio
            </Link>

            <Link
              to="/Faq"
              className="text-light group inline-flex gap-2 items-center hover:text-secondary text-sm transition-colors duration-300 "
            >
              <ChevronRight className="group-hover:translate-x-1 h-4 w-4 text-secondary transition-all duration-300" />{" "}
              FAQ
            </Link>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="flex flex-col gap-3 py-3  w-full ">
          <header className="flex flex-col gap-2">
            <h1 className=" text-light  text-lg font-semibold rounded-tr-2xl rounded-bl-2xl ">
              Follow Us
            </h1>
            <div className="h-1 w-20 bg-gradient-to-r from-transparent to-secondary  "></div>
          </header>
          <div className="flex md:flex-col  gap-3">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-light group"
              aria-label="Facebook"
            >
              <div className="bg-blue-600 p-2 rounded-full group-hover:scale-110 transition-all duration-200">
                <FaFacebookF size={16} />
              </div>
              <span className="text-sm hidden md:block ">Facebook</span>
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-light group"
              aria-label="Instagram"
            >
              <div className="bg-pink-600 p-2 rounded-full group-hover:scale-110 transition-all duration-200">
                <FaInstagram size={16} />
              </div>
              <span className="text-sm hidden md:block ">Instagram</span>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-light group"
              aria-label="LinkedIn"
            >
              <div className="bg-blue-600 p-2 rounded-full group-hover:scale-110 transition-all duration-200">
                <FaLinkedinIn size={16} />
              </div>
              <span className="text-sm hidden md:block ">LinkedIn</span>
            </a>

            {/* <a
              href="https://github.com/peter514"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-light group"
              aria-label="GitHub"
            >
              <div className="bg-gray-600 p-2 rounded-full group-hover:scale-110 transition-all duration-200">
                <FaGithub size={16} />
              </div>
              <span className="text-sm hidden md:block ">GitHub</span>
            </a> */}
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-primary text-center py-5">
        <p className="text-white text-xs">
          Copyright &copy; {new Date().getFullYear()} Isosoft. All rights
          reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
