import { useState } from "react";
import { motion } from "motion/react";
import { assetPath } from "../constants";

function Navigation() {
  return (
    <ul className="nav-ul">
      <li className="nav-li">
        <a className="nav-link" href="#home">
          Home
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#about">
          About
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#work">
          Work
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#experience">
          Experience
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#testimonials">
          Reviews
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#contact">
          Contact
        </a>
      </li>
      <li className="nav-li max-sm:w-full">
        <a
          className="inline-flex items-center justify-center px-4 py-1.5 text-sm font-semibold text-white transition-all rounded-full bg-radial from-lavender to-royal hover:brightness-110"
          href={assetPath("resume.pdf")}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View Girijesh Paliwal's Resume (PDF)"
        >
          Resume ↗
        </a>
      </li>
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <a
            href="#home"
            className="flex items-center gap-2 text-xl font-bold transition-colors text-neutral-300 hover:text-white"
            aria-label="Girijesh Paliwal Homepage"
          >
            <img
              src={assetPath("icon.png")}
              alt="Girijesh Paliwal — Mobile App Developer"
              className="w-7 h-7 rounded-md object-contain"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
            <span>Girijesh Paliwal</span>
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
            aria-label="Toggle Navigation Menu"
            aria-expanded={isOpen}
          >
            <img
              src={assetPath(isOpen ? "assets/close.svg" : "assets/menu.svg")}
              className="w-6 h-6"
              alt="Toggle Menu"
            />
          </button>
          <nav className="hidden sm:flex" aria-label="Main Navigation">
            <Navigation />
          </nav>
        </div>
      </div>
      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ maxHeight: "100vh" }}
          transition={{ duration: 0.3 }}
        >
          <nav className="pb-5" aria-label="Mobile Navigation">
            <Navigation />
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
