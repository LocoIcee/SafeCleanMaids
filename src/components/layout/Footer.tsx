'use client';
import Link from 'next/link';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative h-10 w-10 overflow-hidden rounded-full bg-white p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#2563eb"
                  className="h-full w-full"
                >
                  <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
                </svg>
              </div>
              <span className="text-xl font-bold">Safe Clean Maids</span>
            </Link>
            <p className="text-blue-100">
              Professional cleaning services with guaranteed satisfaction. We bring sparkle to your spaces and peace to your mind.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-blue-200">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-blue-200">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-blue-200">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-blue-100 hover:text-white">Home</Link>
              </li>
              <li>
                <Link href="/services" className="text-blue-100 hover:text-white">Services</Link>
              </li>
              <li>
                <Link href="/about" className="text-blue-100 hover:text-white">About Us</Link>
              </li>
              <li>
                <Link href="/contact" className="text-blue-100 hover:text-white">Contact</Link>
              </li>
              <li>
                <Link href="/services" className="text-blue-100 hover:text-white">Pricing</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-blue-100 hover:text-white">Residential Cleaning</Link>
              </li>
              <li>
                <Link href="/services" className="text-blue-100 hover:text-white">Commercial Cleaning</Link>
              </li>
              <li>
                <Link href="/services" className="text-blue-100 hover:text-white">Deep Cleaning</Link>
              </li>
              <li>
                <Link href="/services" className="text-blue-100 hover:text-white">Move-In/Out Cleaning</Link>
              </li>
              <li>
                <Link href="/services" className="text-blue-100 hover:text-white">Post-Construction</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="shrink-0 mt-1" />
                <span>123 Cleaning Ave, Sparkle City, SC 12345</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="shrink-0" />
                <span>info@safecleanmaids.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-500 mt-12 pt-6 text-center text-sm text-blue-200">
          <p>&copy; {new Date().getFullYear()} Safe Clean Maids. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;