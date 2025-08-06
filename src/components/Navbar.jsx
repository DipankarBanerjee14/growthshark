import { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import logo from "../assets/logo.png";

export default function Navbar({ toggleMode, isStealth }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownRef = useRef(null);

  const navItems = [
    { name: "Home", link: "/" },
    { name: "Services", link: "" },
    { name: "Career", link: "/career" },
    { name: "About", link: "/about" },
    { name: "Portfolio", link: "/portfolio" },
    { name: "Contact", link: "/contact" },
  ];

  const services = [
    { name: "Automation", link: "/services/automation" },
    { name: "B2B", link: "/services/b2b" },
    { name: "Blog", link: "/services/blog" },
    { name: "Community Engagement", link: "/services/communityengagement" },
    { name: "Community Management", link: "/services/communitymanagement" },
    { name: "Content Creation", link: "/services/contentcreation" },
    { name: "Copywriting", link: "/services/copywriting" },
    { name: "Ecommerce", link: "/services/ecommerce" },
    { name: "Email Campaign", link: "/services/emailcampaign" },
    { name: "Email Marketing", link: "/services/emailmarketing" },
    { name: "Facebook Marketing", link: "/services/facebookmarketing" },
    { name: "Feedback", link: "/services/feedback" },
    { name: "Instagram Marketing", link: "/services/instamarketing" },
    { name: "Online Engagement", link: "/services/onlineengagement" },
  ];

  const modeButtonText = isStealth ? "TOGGLE ATTACK MODE" : "TOGGLE STEALTH MODE";

  const handleToggleMode = () => {
    toggleMode();
    if (
      location.pathname === "/career" ||
      location.pathname === "/about" ||
      location.pathname === "/portfolio" ||
      location.pathname === "/contact"
    ) {
      navigate("/");
    }
  };

  // ✅ Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <div className="max-w-6xl mx-auto mt-4 px-6 py-1 rounded-full bg-[#71b5f0] text-black shadow-xl flex items-center justify-between">
        <img src={logo} alt="Logo" className="h-20 w-auto" />

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center font-medium text-lg relative">
          {navItems.map((item) => (
            <div key={item.name} className="relative">
              {item.name === "Services" ? (
                <div ref={dropdownRef}>
                  <button
                    onClick={() => setIsServicesOpen((prev) => !prev)}
                    className="flex items-center gap-1 hover:text-gray-700 transition"
                  >
                    {item.name}
                    <FaChevronDown
                      className={`transition-transform duration-200 ${
                        isServicesOpen ? "rotate-180" : ""
                      }`}
                      size={14}
                    />
                  </button>

                  {/* Dropdown */}
                  <div
                    className={`absolute top-full left-0 mt-3 w-64 bg-sky-400 text-black shadow-lg rounded-lg transform transition-all duration-300 origin-top ${
                      isServicesOpen
                        ? "scale-100 opacity-100"
                        : "scale-95 opacity-0 pointer-events-none"
                    }`}
                  >
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        to={service.link}
                        onClick={() => setIsServicesOpen(false)}
                        className="block px-4 py-3 hover:bg-sky-300 transition"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  to={item.link}
                  className={`transition hover:text-gray-700 ${
                    location.pathname === item.link ? "font-bold text-black" : "text-gray-800"
                  }`}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Toggle Mode Button */}
        <button
          onClick={handleToggleMode}
          className="ml-6 px-5 py-2 rounded-full bg-lime-400 text-black font-bold hover:brightness-110 transition hidden md:flex"
        >
          {modeButtonText}
        </button>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
