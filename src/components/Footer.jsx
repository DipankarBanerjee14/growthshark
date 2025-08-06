import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import FooterBg from '../assets/Footer.png';
import logo from '../assets/logo.png';

export default function Footer() {
  return (
    <footer className="relative text-white overflow-hidden bg-black py-5">
      {/* Always show background image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={FooterBg}
          alt="Footer Background"
          className="w-full h-full object-cover brightness-50 contrast-125"
        />
      </div>

      {/* Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 md:px-16 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 ">
        {/* Logo & Tagline */}
        <div className="flex flex-col items-center text-center">
          <img src={logo} alt="GrowthShark" className="w-24 mb-4" />
          <p className="text-base sm:text-lg font-semibold leading-relaxed">
            It's Time To Pull In A <br />
            <span className="text-sky-400">Professional</span>
          </p>
        </div>

        {/* Menu */}
        <div className="flex flex-col items-center text-center">
          <h3 className="text-xl font-bold mb-3">Menu</h3>
          <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
            <li className="hover:text-white transition">Services</li>
            <li className="hover:text-white transition">Case Studies</li>
            <li className="hover:text-white transition">About Us</li>
            <li className="hover:text-white transition">Blog</li>
          </ul>
        </div>

        {/* Useful Links */}
        <div className="flex flex-col items-center text-center">
          <h3 className="text-xl font-bold mb-3">Useful Links</h3>
          <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
            <li className="hover:text-white transition">Terms</li>
            <li className="hover:text-white transition">Career</li>
            <li className="hover:text-white transition">Privacy Policy</li>
            <li className="hover:text-white transition">Contact</li>
          </ul>
        </div>

        {/* Contact + Social */}
        <div className="flex flex-col items-center text-center">
          <h3 className="text-xl font-bold mb-3">Connect Us</h3>
          <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
            <li>
              <a
                href="mailto:Marketing@Proriterz.Com"
                className="underline hover:text-white transition"
              >
                Marketing@Proriterz.Com
              </a>
            </li>
            <li>
              <a
                href="mailto:Diptesh@Proriterz.Com"
                className="underline hover:text-white transition"
              >
                Diptesh@Proriterz.Com
              </a>
            </li>
            <li className="text-gray-300 font-medium mt-1">+91 83482 96083</li>
          </ul>
          <div className="flex gap-4 mt-4 text-sky-300 text-xl">
            <a href="#" className="hover:text-white transition">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-white transition">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-white transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="relative z-10 text-center text-sm text-gray-400 pb-6 px-4">
        © 2025 Proriterz. All Rights Reserved.
      </div>
    </footer>
  );
}
