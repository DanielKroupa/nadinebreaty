"use client";

import React, { useState } from "react";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* DESKTOP NAVBAR */}
      <nav className="hidden md:flex py-8 justify-between items-center w-full sticky top-0 z-50 md:px-8 lg:px-20 bg-[#ead0d9] 2xl:px-40">
        <div>
          <Link href="/" className="text-primary font-bold text-lg scroll-auto">
            NADINEBREATY.COM
          </Link>
        </div>

        <ul className="flex justify-center md:space-x-12 space-x-0 text-primary text-lg font-medium font-roboto-mono">
          <li className="hover:font-bold">
            <Link href="#aboutme">About me</Link>
          </li>
          <li className="hover:font-bold">
            <Link href="#content">Content</Link>
          </li>
          <li className="hover:font-bold">
            <Link href="#book">My book</Link>
          </li>
          <li className="hover:font-bold">
            <Link href="#contact">Contact</Link>
          </li>
        </ul>

        <Link
          href="https://www.amazon.de/Only-Kind-Broken-Mutmachbuch-Seiten/dp/396096952X"
          className="bg-primary text-white px-8 py-4 rounded-2xl flex shadow-md shadow-primary/25 group"
        >
          <div className="flex gap-2 items-center">
            <p className="font-roboto-mono">Get a book</p>
            <GoArrowRight
              size={24}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </div>
        </Link>
      </nav>

      {/* MOBILE NAVBAR */}
      <nav className="md:hidden flex justify-between items-center px-6 py-4 bg-[#ead0d9] sticky top-0 z-40">
        <Link href="/" className="text-primary font-bold text-lg">
          NADINEBREATY.COM
        </Link>

        {/* Hamburger button */}
        <button
          onClick={() => setMenuOpen(true)}
          className="text-primary cursor-pointer"
        >
          <FaBars size={26} />
        </button>
      </nav>

      {/* OVERLAY */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* SLIDE-IN MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white z-50 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h2 className="text-primary font-semibold text-lg">Menu</h2>
          <button
            onClick={() => setMenuOpen(false)}
            className="text-primary cursor-pointer"
          >
            <FaTimes size={22} />
          </button>
        </div>

        <ul className="flex flex-col gap-6 p-6 text-primary font-roboto-mono text-lg font-medium">
          <li>
            <Link href="#aboutme" onClick={() => setMenuOpen(false)}>
              About me
            </Link>
          </li>
          <li>
            <Link href="#content" onClick={() => setMenuOpen(false)}>
              Content
            </Link>
          </li>
          <li>
            <Link href="#book" onClick={() => setMenuOpen(false)}>
              My book
            </Link>
          </li>
          <li>
            <Link href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>

        <div className="p-6">
          <Link
            href="https://www.amazon.de/Only-Kind-Broken-Mutmachbuch-Seiten/dp/396096952X"
            onClick={() => setMenuOpen(false)}
            className="bg-primary text-white px-6 py-3 rounded-2xl flex items-center justify-center gap-2 shadow-md shadow-primary/25 group"
          >
            <p className="font-roboto-mono">Get a book</p>
            <GoArrowRight
              size={22}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
