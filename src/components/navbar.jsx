'use client';
import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setDropdown((prev) => (prev === name ? null : name));
  };

  const closeMenus = () => {
    setMenuOpen(false);
    setDropdown(null);
  };

  // ✅ Universal handler: closes dropdown and menu on any link click (works for both desktop + mobile)
  const handleLinkClick = () => {
    closeMenus();
  };

  return (
    <nav className="bg-white border-b shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3 md:py-4">
        {/* Logo */}
        <Link href="/" onClick={handleLinkClick} className="text-xl font-bold text-blue-900">
          <Image
          src='/committees/idmrb-high-resolution-logo-transparent.png'
          alt='IDMRB Logo'
          width={160}
          height={40}
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
          <li>
            <Link
              href="/"
              onClick={handleLinkClick}
              className="hover:text-blue-600"
            >
              Home
            </Link>
          </li>


          {/* About Dropdown */}
          <li className="relative">
            <button
              onClick={() => toggleDropdown('about')}
              className="flex items-center hover:text-blue-600"
            >
              About <ChevronDown className="ml-1 w-4 h-4" />
            </button>
            {dropdown === 'about' && (
              <ul className="absolute bg-white shadow-md mt-2 rounded-md w-52">
                {[
                  ['About Us', '/about'],
                  // ['Member', '/member'],
                  // ['Founding Members', '/founder'],
                  // ['Executive Committee', '/Executive'],
                  ['Committee', '/icommite'],
                  ['Chairman', '/chairman-message'],
                  ['Secretariat', '/secretariat'],
                  // ['Media Center', '/about/media-center'],
                  ['Code of Ethics', '/code-of-ethics'],
                ].map(([label, href]) => (
                  <li key={href}>
                    <Link
                      href={href}
                      onClick={handleLinkClick}
                      className="block px-4 py-2 hover:bg-blue-50"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* Events Dropdown */}
          <li className="relative">
            <button
              onClick={() => toggleDropdown('events')}
              className="flex items-center hover:text-blue-600"
            >
              Events <ChevronDown className="ml-1 w-4 h-4" />
            </button>
            {dropdown === 'events' && (
              <ul className="absolute bg-white shadow-md mt-2 rounded-md w-40">
                {[
                  // ['Dialogues', '/events/dialogues'],
                  ['Future Proof', '/future-proof'],
                ].map(([label, href]) => (
                  <li key={href}>
                    <Link
                      href={href}
                      onClick={handleLinkClick}
                      className="block px-4 py-2 hover:bg-blue-50"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* Resources Dropdown */}
          <li className="relative">
            <button
              onClick={() => toggleDropdown('resources')}
              className="flex items-center hover:text-blue-600"
            >
              Resources <ChevronDown className="ml-1 w-4 h-4" />
            </button>
            {dropdown === 'resources' && (
              <ul className="absolute bg-white shadow-md mt-2 rounded-md w-52">
                {[
                  // ['Newsletters', '/resources/newsletters'],
                  ['Photo Gallery', '/photo-gallery'],
                  // ['Video Gallery', '/resources/video-gallery'],
                  // ['Annual Return', '/resources/annual-return'],
                  // ['Documents Archive', '/resources/documents-archive'],
                  // ['Press Release', '/resources/press-release'],
                  ['FAQ', '/faq'],
                ].map(([label, href]) => (
                  <li key={href}>
                    <Link
                      href={href}
                      onClick={handleLinkClick}
                      className="block px-4 py-2 hover:bg-blue-50"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* Contact */}
          <li>
            <Link
              href="/contact"
              onClick={handleLinkClick}
              className="hover:text-blue-600"
            >
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t">
          <ul className="flex flex-col text-gray-700 font-medium">

            <li>
              <Link
                href="/"
                onClick={handleLinkClick}
                className="block px-4 py-3 hover:bg-blue-50"
              >
                Home
              </Link>
            </li>
            {/* About */}
            <li>
              <button
                onClick={() => toggleDropdown('about')}
                className="w-full text-left px-4 py-3 flex justify-between items-center hover:bg-blue-50"
              >
                About <ChevronDown className="w-4 h-4" />
              </button>
              {dropdown === 'about' && (
                <ul className="bg-gray-50">
                  {[
                    ['About Us', '/about'],
                    // ['Member', '/member'],
                    // ['Founding Members', '/founder'],
                    // ['Executive Committee', '/Executive'],
                    ['Committee', '/icommite'],
                    ['Chairman', '/chairman-message'],
                    ['Secretariat', '/secretariat'],
                    ['Code of Ethics', '/code-of-ethics'],
                  ].map(([label, href]) => (
                    <li key={href}>
                      <Link
                        href={href}
                        onClick={handleLinkClick}
                        className="block px-6 py-2 hover:bg-blue-100"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Events */}
            <li>
              <button
                onClick={() => toggleDropdown('events')}
                className="w-full text-left px-4 py-3 flex justify-between items-center hover:bg-blue-50"
              >
                Events <ChevronDown className="w-4 h-4" />
              </button>
              {dropdown === 'events' && (
                <ul className="bg-gray-50">
                  {[
                    // ['Dialogues', '/events/dialogues'],
                    ['Future Proof', '/future-proof'],
                  ].map(([label, href]) => (
                    <li key={href}>
                      <Link
                        href={href}
                        onClick={handleLinkClick}
                        className="block px-6 py-2 hover:bg-blue-100"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Resources */}
            <li>
              <button
                onClick={() => toggleDropdown('resources')}
                className="w-full text-left px-4 py-3 flex justify-between items-center hover:bg-blue-50"
              >
                Resources <ChevronDown className="w-4 h-4" />
              </button>
              {dropdown === 'resources' && (
                <ul className="bg-gray-50">
                  {[
                    // ['Newsletters', '/resources/newsletters'],
                    ['Photo Gallery', '/photo-gallery'],
                    // ['Video Gallery', '/resources/video-gallery'],
                    // ['Annual Return', '/resources/annual-return'],
                    // ['Documents Archive', '/resources/documents-archive'],
                    // ['Press Release', '/resources/press-release'],
                    ['FAQ', '/faq'],
                  ].map(([label, href]) => (
                    <li key={href}>
                      <Link
                        href={href}
                        onClick={handleLinkClick}
                        className="block px-6 py-2 hover:bg-blue-100"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Contact */}
            <li>
              <Link
                href="/contact"
                onClick={handleLinkClick}
                className="block px-4 py-3 hover:bg-blue-50"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
