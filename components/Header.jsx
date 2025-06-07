import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-gray-900 dark:bg-black text-gray-400 mb-6 shadow-md shadow-gray-700 fixed w-full">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo / Nom */}
        <Link href="/" className="text-2xl font-bold text-white">
          Youssouf
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 font-bold">
          <Link href="/" className="hover:text-white duration-500 hover:scale-110 ">ACCUEIL</Link>
          <Link href="/projects" className="hover:text-white duration-500 hover:scale-110">PROJECTS</Link>
          <Link href="/contact" className="hover:text-white duration-500 hover:scale-110">COMPETENCES</Link>
          <Link href="/contact" className="hover:text-white duration-500 hover:scale-110">MON CV</Link>
        </nav>

        {/* Menu mobile toggle */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <div className=" md:hidden px-4 pb-4 space-y-2 font-bold">
          <Link href="/" className="block text-gray-400 hover:text-white duration-500 hover:translate-x-0 ">ACCUEIL</Link>
          <Link href="/projects" className="block text-gray-400 hover:text-white duration-500 hover:translate-x-0 ">PROJECTS</Link>
          <Link href="/contact" className="block text-gray-400 hover:text-white duration-500 hover:translate-x-0 ">COMPETENCES</Link>
          <Link href="/contact" className="block text-gray-400 hover:text-white duration-500 hover:translate-x-0 ">MON CV</Link>
        </div>
      )}
    </header>
  );
}
