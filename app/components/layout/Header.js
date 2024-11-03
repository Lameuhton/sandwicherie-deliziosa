"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSectionClick = (section) => {
    setActiveSection(section);
    setIsOpen(false); // Close the menu after clicking a link
  };

  return (
    <header
      className={`sides-page-margin fixed w-full ${
        hasScrolled
          ? "bg-[#303436] shadow-lg py-4"
          : "bg-transparent py-4 md:py-12"
      } text-white flex justify-between items-center z-50 transition-all duration-300`}
    >
      {/* Logo */}
      <div className="flex items-center">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={70}
          height={70}
          className="mr-2"
        />
        <p className="text-2xl font-light font-title">Deliziosa</p>
      </div>

      {/* Menu Burger Button */}
      <button onClick={toggleMenu} className="md:hidden z-50">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
          />
        </svg>
      </button>

      {/* Navigation Menu */}
      <nav
        className={`fixed top-0 right-0 h-full w-[85%] sm:w-2/3 bg-[#E9C261] md:bg-transparent transform transition-transform duration-300 ease-in-out z-40 md:relative md:transform-none md:translate-x-0 md:w-auto md:flex md:gap-20 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col md:flex-row items-center justify-center gap-16 p-8 md:p-0 h-full text-[22px] md:text-[16px] font-text">
          <li onClick={() => handleSectionClick("#home")}>
            <Link
              href="#home"
              className={`hover:text-gray-300 ${
                activeSection === "#home"
                  ? "border-b-2 border-white md:border-secondary"
                  : ""
              }`}
            >
              Accueil
            </Link>
          </li>
          <li onClick={() => handleSectionClick("#about")}>
            <Link
              href="#about"
              className={`hover:text-gray-300 ${
                activeSection === "#about"
                  ? "border-b-2 border-white md:border-secondary"
                  : ""
              }`}
            >
              Menu
            </Link>
          </li>
          <li onClick={() => handleSectionClick("#contact")}>
            <Link
              href="#contact"
              className={`hover:text-gray-300 ${
                activeSection === "#contact"
                  ? "border-b-2 border-white md:border-secondary"
                  : ""
              }`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
