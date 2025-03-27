
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: offsetTop - 100,
        behavior: "smooth",
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <a href="#" className="text-xl font-display font-semibold">
          Misri Portfolio
        </a>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-8">
          {["work", "about", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-sm font-medium capitalize hover:opacity-70 transition-opacity"
            >
              {item}
            </button>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex items-center"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 bg-background pt-24 px-6 z-40 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex flex-col space-y-6">
          {["work", "about", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-lg font-medium py-2 capitalize"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
