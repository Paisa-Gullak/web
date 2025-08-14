"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconHelpCircle, IconX, IconMenu } from "@tabler/icons-react";
import Image from "next/image";
import SignIn from "@/components/sign-in";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/mutual-funds", label: "Mutual Funds" },
    { path: "/insurance", label: "Insurance" },
    { path: "/about", label: "About Us" },
    { path: "/contact", label: "Contact Us" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/pg-logo.svg"
              alt="Paisa Gullak Logo"
              width={200}
              height={60}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`font-medium transition-colors duration-200 ${
                  isActive(link.path)
                    ? "text-paisa-gold"
                    : "text-gray-700 hover:text-paisa-gold"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="flex items-center space-x-2 text-paisa-blue hover:text-paisa-gold transition-colors duration-200">
              <IconHelpCircle size={20} />
              <span className="font-medium">Talk to Expert</span>
            </button>
            {/* <button className="btn-primary">Start Investing</button> */}
            <SignIn />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <IconX size={24} /> : <IconMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`font-medium transition-colors duration-200 ${
                    isActive(link.path)
                      ? "text-paisa-gold"
                      : "text-gray-700 hover:text-paisa-gold"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200">
                <button className="flex items-center space-x-2 text-paisa-blue hover:text-paisa-gold transition-colors duration-200">
                  <IconHelpCircle size={20} />
                  <span className="font-medium">Talk to Expert</span>
                </button>
                <button className="btn-primary w-full">Start Investing</button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
