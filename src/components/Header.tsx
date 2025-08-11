import { useState } from "react";
import { Menu, X } from 'lucide-react';


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-amber-50 px-4 py-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold text-black">Font</div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-700 hover:text-black">
            Home
          </a>
          <a href="#" className="text-gray-700 hover:text-black">
            About
          </a>
          <a href="#" className="text-gray-700 hover:text-black">
            Services
          </a>
          <a href="#" className="text-gray-700 hover:text-black">
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden mt-4 pb-4">
          <div className="flex flex-col space-y-4">
            <a href="#" className="text-gray-700 hover:text-black">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-black">
              About
            </a>
            <a href="#" className="text-gray-700 hover:text-black">
              Services
            </a>
            <a href="#" className="text-gray-700 hover:text-black">
              Contact
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
