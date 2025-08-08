import React from "react";
import Link from "next/link";
import {
  IconBrandFacebook,
  IconBrandX,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconMail,
  IconPhone,
  IconMapPin,
} from "@tabler/icons-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-paisa-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="/pg-logo-white.svg"
                alt="Paisa Gullak Logo"
                width={200}
                height={50}
              />
            </div>
            <p className="text-gray-300 mb-4">
              Making investing simple and accessible for the new generation of
              investors.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/profile.php?id=61577822617184"
                className="text-gray-300 hover:text-paisa-gold transition-colors duration-200"
              >
                <IconBrandFacebook size={20} />
              </Link>
              <Link
                href="https://x.com/paisagullak"
                className="text-gray-300 hover:text-paisa-gold transition-colors duration-200"
              >
                <IconBrandX size={20} />
              </Link>
              <Link
                href="https://www.instagram.com/paisagullak/"
                className="text-gray-300 hover:text-paisa-gold transition-colors duration-200"
              >
                <IconBrandInstagram size={22} />
              </Link>
              <Link
                href="https://www.linkedin.com/company/paisa-gullak/"
                className="text-gray-300 mt-[1.2px] hover:text-paisa-gold transition-colors duration-200"
              >
                <IconBrandLinkedin size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-paisa-gold transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/mutual-funds"
                  className="text-gray-300 hover:text-paisa-gold transition-colors duration-200"
                >
                  Mutual Funds
                </Link>
              </li>
              <li>
                <Link
                  href="/insurance"
                  className="text-gray-300 hover:text-paisa-gold transition-colors duration-200"
                >
                  Insurance
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-paisa-gold transition-colors duration-200"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-paisa-gold transition-colors duration-200"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-paisa-gold transition-colors duration-200"
                >
                  Investment Guide
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-paisa-gold transition-colors duration-200"
                >
                  Risk Calculator
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-paisa-gold transition-colors duration-200"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/faqs"
                  className="text-gray-300 hover:text-paisa-gold transition-colors duration-200"
                >
                  FAQ's
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <IconMail size={16} className="text-paisa-gold" />
                <span className="text-gray-300">info@paisagullak.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <IconPhone size={16} className="text-paisa-gold" />
                <span className="text-gray-300">+91 600-541-1368</span>
              </div>
              <div className="flex items-center space-x-3">
                <IconMapPin size={16} className="text-paisa-gold" />
                <span className="text-gray-300">Jammu, J&K, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-paisa-light-blue mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2025 Paisa Gullak. All rights reserved. |
            <a
              href="#"
              className="hover:text-paisa-gold transition-colors duration-200 ml-1"
            >
              Privacy Policy
            </a>{" "}
            |
            <a
              href="#"
              className="hover:text-paisa-gold transition-colors duration-200 ml-1"
            >
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
