// import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Header() {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white max-w-7xl mx-auto px-4 pt-3 my-6 rounded-full">
      <div className="relative flex items-center justify-center">
        <img
          className="h-14 w-30 object-contain"
          src="/paint_logo.png"
          alt="paint-logo"
        />

        {/* Mobile Menu Button */}
        {/* <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button> */}
        <button className="absolute flex items-center gap-2 cursor-pointer right-4 top-3">
          <img className="w-5 h-5" src="/uk_flag.svg" alt="" />
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>

      {/* Mobile Navigation
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
      )} */}
    </header>
  );
}
