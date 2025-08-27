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
        <div className="w-full border-b border-light/20 lg:border-none">
          <div className="mb-4">
            <h1 className="text-2xl font-bold text-secondary">Appuxs LLC</h1>
            <p className="text-sm leading-relaxed text-light">
              Your reliable partner in software development services.
            </p>
            <p className="inline-flex items-center gap-2 leading-relaxed text-green-400">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              150+ Satisfied Customers
            </p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col w-full gap-3 py-3 border-b border-light/20 lg:border-none md:mb-0">
          <header className="flex flex-col gap-2">
            <h1 className="text-lg font-semibold text-light rounded-tr-2xl rounded-bl-2xl">
              Get In Touch
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-transparent to-secondary "></div>
          </header>
          <div className="flex flex-col gap-3">
            <p className="inline-flex items-center gap-2 text-sm text-light ">
              <MapPin className="w-6 h-6 text-secondary " /> 1 MICHAEL DRIVE
              BEVERLY HILLS, FL 34465
            </p>
            <a
              target="_blank"
              href="mailto:info@appuxs.com"
              className="inline-flex items-center gap-2 text-sm text-light "
              rel="noopener noreferrer"
            >
              <Mail className="w-6 h-6 text-secondary " /> info@appuxs.com
            </a>
            <div className="inline-flex items-center gap-2 text-sm text-light">
              <Phone className="w-6 h-6 text-secondary " />
              <div className="flex gap-2">
                <a
                  href="tel: +1 (256) 305-3000"
                  className="transition-colors hover:text-secondary"
                >
                  +1 (256) 305-3000
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col w-full gap-3 py-3 border-b border-light/20 lg:border-none md:mb-0">
          <header className="flex flex-col gap-2">
            <h1 className="text-lg font-semibold text-light rounded-tr-2xl rounded-bl-2xl">
              Quick Links
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-transparent to-secondary "></div>
          </header>
          <div className="flex flex-col gap-3">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm transition-colors duration-300 text-light group hover:text-secondary "
            >
              <ChevronRight className="w-4 h-4 transition-all duration-300 group-hover:translate-x-1 text-secondary" />
              Home
            </Link>
            <Link
              to="/Services"
              className="inline-flex items-center gap-2 text-sm transition-colors duration-300 text-light group hover:text-secondary "
            >
              <ChevronRight className="w-4 h-4 transition-all duration-300 group-hover:translate-x-1 text-secondary" />{" "}
              Services
            </Link>
            <Link
              to="/About"
              className="inline-flex items-center gap-2 text-sm transition-colors duration-300 text-light group hover:text-secondary "
            >
              <ChevronRight className="w-4 h-4 transition-all duration-300 group-hover:translate-x-1 text-secondary" />{" "}
              About
            </Link>
            <Link
              to="/Projects"
              className="inline-flex items-center gap-2 text-sm transition-colors duration-300 text-light group hover:text-secondary "
            >
              <ChevronRight className="w-4 h-4 transition-all duration-300 group-hover:translate-x-1 text-secondary" />{" "}
              Portfolio
            </Link>

            <Link
              to="/Faq"
              className="inline-flex items-center gap-2 text-sm transition-colors duration-300 text-light group hover:text-secondary "
            >
              <ChevronRight className="w-4 h-4 transition-all duration-300 group-hover:translate-x-1 text-secondary" />{" "}
              FAQ
            </Link>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="flex flex-col w-full gap-3 py-3 ">
          <header className="flex flex-col gap-2">
            <h1 className="text-lg font-semibold text-light rounded-tr-2xl rounded-bl-2xl">
              Follow Us
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-transparent to-secondary "></div>
          </header>
          <div className="flex gap-3 md:flex-col">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-light group"
              aria-label="Facebook"
            >
              <div className="p-2 transition-all duration-200 bg-blue-600 rounded-full group-hover:scale-110">
                <FaFacebookF size={16} />
              </div>
              <span className="hidden text-sm md:block ">Facebook</span>
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-light group"
              aria-label="Instagram"
            >
              <div className="p-2 transition-all duration-200 bg-pink-600 rounded-full group-hover:scale-110">
                <FaInstagram size={16} />
              </div>
              <span className="hidden text-sm md:block ">Instagram</span>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-light group"
              aria-label="LinkedIn"
            >
              <div className="p-2 transition-all duration-200 bg-blue-600 rounded-full group-hover:scale-110">
                <FaLinkedinIn size={16} />
              </div>
              <span className="hidden text-sm md:block ">LinkedIn</span>
            </a>

            {/* <a
              href="https://github.com/peter514"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-light group"
              aria-label="GitHub"
            >
              <div className="p-2 transition-all duration-200 bg-gray-600 rounded-full group-hover:scale-110">
                <FaGithub size={16} />
              </div>
              <span className="hidden text-sm md:block ">GitHub</span>
            </a> */}
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="py-5 text-center bg-primary">
        <p className="text-xs text-white">
          Copyright &copy; {new Date().getFullYear()} Appuxs LLC. All rights
          reserved.
        </p>
        <div className="mt-2 space-x-4">
          <a
            href="/privacy-policy"
            className="text-xs text-blue-200 underline transition-colors hover:text-white"
          >
            Privacy Policy
          </a>
          <a
            href="/terms-conditions"
            className="text-xs text-blue-200 underline transition-colors hover:text-white"
          >
            Terms & Conditions
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
