import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-black p-3 flex items-center justify-between">
      {/* Logo */}
      <a href="/">
        <img
          src="https://www.codehelp.in/_next/image?url=%2Fassets%2FCommon%2FWhitelogoGIF.gif&w=640&q=75"
          className="h-12 sm:h-16 w-auto"
          alt="CodeHelpLogo"
        />
      </a>

      {/* Hamburger Menu for Mobile */}
      <button
        className="block md:hidden text-white focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>

      {/* Navbar Links */}
      <ul
        className={`${
          isMenuOpen ? "block" : "hidden"
        } absolute md:static top-16 left-0 w-full md:w-auto bg-black md:bg-transparent md:flex gap-4 items-center text-white text-center z-10 p-4 md:p-0`}
      >
        <li>
          <a
            href="/"
            className="font-bold hover:border-b-2 border-indigo-500 p-2"
            style={{ color: "rgb(102, 116, 204)" }}
          >
            Home
          </a>
        </li>
        <li>
          <a href="/courses" className="hover:border-b-2 border-indigo-500 p-2">
            Courses
          </a>
        </li>
        <li>
          <a href="/explore" className="hover:border-b-2 border-indigo-500 p-2">
            Explore
          </a>
        </li>
        <li>
          <a href="/contact" className="hover:border-b-2 border-indigo-500 p-2">
            Contact
          </a>
        </li>
        <li>
          <a
            href="/articles"
            className="hover:border-b-2 border-indigo-500 p-2"
          >
            Articles
          </a>
        </li>
        <li>
          <a
            href="/tutorials"
            className="hover:border-b-2 border-indigo-500 p-2"
          >
            Tutorials
          </a>
        </li>
      </ul>

      {/* Login Button */}
      <button
        type="button"
        className="hidden md:block text-white px-6 py-2 rounded-md"
        style={{ backgroundColor: "rgb(102, 116, 204)" }}
      >
        Login
      </button>
    </nav>
  );
};
