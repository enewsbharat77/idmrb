'use client';
import Link from 'next/link';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-blue-50 text-black pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {/* Logo & About */}
        <div>
          <Image
          src='/committees/logo1.png'
          alt='logo'
          width={150}
          height={70}
          />
          <p className="text-sm leading-relaxed">
            IDMRB - The Indian Digital Media Regulatory Board (IDMRB) is a self-regulatory body representing digital-first news organizations, working to ensure transparency, integrity, and professionalism across India’s digital media landscape.”
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-blue-800 mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className='hover:text-blue:400'>Home</Link></li>
            <li><Link href="/about" className="hover:text-blue-400">About Us</Link></li>
            <li><Link href="/future-proof" className="hover:text-blue-400">Events</Link></li>
            <li><Link href="/contact" className="hover:text-blue-400">Contact</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold text-blue-800 mb-3">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/photo-gallery" className="hover:text-blue-400">Gallery</Link></li>
            <li><Link href="/faq" className="hover:text-blue-400">FAQ</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-blue-800 mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-blue-400"><Facebook /></Link>
            <Link href="#" className="hover:text-blue-400"><Instagram /></Link>
            <Link href="#" className="hover:text-blue-400"><Twitter /></Link>
            <Link href="#" className="hover:text-blue-400"><Linkedin /></Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}

      <p className="border-t border-gray-700 mt-10 pt-4 text-center text-sm">
        © Indian Digital Media Regulatory Board (IDMRB) <br />
        A Self-Regulatory Body under the IT Rules, 2021 — Empowering
        Responsible Digital Media
      </p>
    </footer>
  );
}
