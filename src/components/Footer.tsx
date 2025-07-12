"use client"
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Logo and About */}
        <div>
          <h2 className="text-2xl font-bold">MyWebsite</h2>
          <p className="mt-2 text-gray-400">Creating amazing experiences for the web.</p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li><Link href="/" className="text-gray-400 hover:text-cyan-600">Home</Link></li>
            <li><Link href="#about" className="text-gray-400 hover:text-cyan-600">About Us</Link></li>
            <li><Link href="#skills" className="text-gray-400 hover:text-cyan-600">Skills</Link></li>
            <li><Link href="#projects" className="text-gray-400 hover:text-cyan-600">Projects</Link></li>
            <li><Link href="#contact" className="text-gray-400 hover:text-cyan-600">Contact</Link></li>
            
           
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold">Follow Us</h3>
          <div className="mt-2 flex justify-center md:justify-start space-x-4">
            
            <Link href="https://www.linkedin.com/in/nida-khurram/" className="text-gray-400 hover:text-cyan-600 text-2xl"><FaLinkedin /></Link>
            
            <Link href="https://github.com/nida1khurram" className="text-gray-400 hover:text-cyan-600 text-2xl"><FaGithub /></Link>

            
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm mt-8 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} MyWebsite. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
