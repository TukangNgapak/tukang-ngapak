import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function NavbarComponent() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const navbar = target.closest('nav');
      if (isMobileMenuOpen && !navbar) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('click', handleClickOutside);
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMobileMenuOpen]);

  const navigationItems = [
    { label: "Home", link: "#homePage" },
    { label: "About", link: "#aboutPage" },
    { label: "Project", link: "#projectPage" },
    { label: "Contact", link: "#contactPage" },
  ];

  const handleMobileMenuToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (href: string) => {
    setIsMobileMenuOpen(false);

    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      const navHeight = 80; // Approximate navbar height
      const elementPosition = (element as HTMLElement).offsetTop - navHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <nav
        className={`w-full px-4 sm:px-6 py-4 z-50 transition-all duration-300 ${isScrolled
          ? "fixed top-0 bg-gray-800 shadow-lg text-[#FFB823]"
          : "fixed top-0 bg-transparent text-white"
          }`}
      >
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          {/* Logo */}
          <button
            onClick={() => handleLinkClick('#homePage')}
            className="text-xl font-bold uppercase tracking-wide hover:opacity-80 transition-opacity"
          >
            Tukang Ngapak
          </button>

          {/* Desktop Menu */}
          <ul className="hidden md:flex flex-row gap-4 items-center">
            {navigationItems.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => handleLinkClick(item.link)}
                  className={`transition-all duration-300 font-semibold px-3 py-2 rounded hover:scale-105 ${isScrolled
                    ? "text-white hover:text-[#E9A319] hover:bg-[#E9A319]/10"
                    : "text-white hover:text-[#FFB823] hover:bg-white/10"
                    }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
            <li>
              <img src="/TNlogo.png" alt="Logo Tukang Ngapak" className="w-10 h-auto rounded-full" />
            </li>
          </ul>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden z-[60] relative p-2"
            onClick={handleMobileMenuToggle}
            aria-label="Toggle Menu"
            aria-expanded={isMobileMenuOpen}
          >
            <div className="w-6 h-6 flex items-center justify-center">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transform transition-transform duration-300 z-50 ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/* Mobile Menu Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-800">Menu</h2>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-gray-600 hover:text-gray-800 p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Close Menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Mobile Menu Items */}
        <div className="p-6">
          <ul className="space-y-2">
            {navigationItems.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => handleLinkClick(item.link)}
                  className="w-full text-left text-gray-800 hover:text-[#E9A319] hover:bg-[#E9A319]/10 transition-all duration-300 py-4 px-4 text-lg font-medium rounded-lg"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Contact Info in Mobile Menu */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="text-center text-gray-600">
              <p className="font-semibold mb-2">Hubungi Kami</p>
              <a
                href="tel:+6285813530803"
                className="block text-[#E9A319] hover:underline mb-2"
              >
                +62 858-1353-0803
              </a>
              <a
                href="mailto:ngapakcivil@gmail.com"
                className="block text-[#E9A319] hover:underline"
              >
                ngapakcivil@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}