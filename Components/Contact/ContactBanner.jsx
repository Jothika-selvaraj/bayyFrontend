import React from 'react';
import Link from 'next/link'; // Import Link from Next.js

const ContactBanner = () => {
  return (
    <div
      className="relative bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/Courses/other.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 flex flex-col justify-center py-32">
        <h1 className="text-5xl font-bold text-white">Contact</h1>
        <nav className="text-white mt-2">
          <ul className="flex space-x-2 text-md">
            <li>
              <Link href="/" className="hover:text-gray-300 transition-colors">
                Home
              </Link>
            </li>
            <li className="text-pink-500">›</li>
            <li>
              <Link href="/contact" className="hover:text-gray-300 transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default ContactBanner;
