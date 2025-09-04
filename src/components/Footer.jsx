// Footer.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      footerRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
    );
  }, []);

  return (
    <footer
      ref={footerRef}
      className="w-full bg-black text-gray-300 py-12 px-6 border-t border-gray-800"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 text-center md:text-left">
        {/* Brand / Project */}
        <div>
          <h2 className="text-3xl font-bold text-white tracking-widest">
            ⚡ ASTRA
          </h2>
          <p className="mt-3 text-sm text-gray-400 leading-relaxed">
            ASTRA (Automated SIGINT Threat Recognition & Analysis) is an 
            advanced, ML-powered platform designed for professional and 
            industrial applications in **defense, aerospace, and homeland 
            security**. It transforms raw electromagnetic spectrum data 
            into actionable intelligence in real time.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Explore
          </h3>
          <ul className="space-y-2">
            <li><a href="#overview" className="hover:text-[#37FF8B]">Overview</a></li>
            <li><a href="#solutions" className="hover:text-[#37FF8B]">Solutions</a></li>
            <li><a href="#technology" className="hover:text-[#37FF8B]">Technology</a></li>
            <li><a href="#contact" className="hover:text-[#37FF8B]">Contact</a></li>
          </ul>
        </div>

        {/* Author / Socials */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Author
          </h3>
          <p className="text-sm text-gray-400 mb-4">
            Developed with passion & precision by <span className="text-white font-semibold">DevHustlers</span>
          </p>
          <div className="flex justify-center md:justify-start gap-5 text-2xl">
            <a href="#" className="hover:text-[#37FF8B]"><FaGithub /></a>
            <a href="#" className="hover:text-[#37FF8B]"><FaLinkedin /></a>
            <a href="#" className="hover:text-[#37FF8B]"><FaTwitter /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-gray-800 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} ASTRA | Built by DevHustlers | 
        Professional & Industrial Intelligence Platform
      </div>
    </footer>
  );
}
