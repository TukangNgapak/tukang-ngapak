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
    const handleClickOutside = (event: any) => {
      const target = event.target;
      const navbar = target.closest('nav');
      if (isMobileMenuOpen && !navbar) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('click', handleClickOutside);
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
    const handleEscape = (event: any) => {
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
    { label: "Gallery", link: "#galleryPage" },
    { label: "Contact", link: "#contactPage" },
  ];

  const handleMobileMenuToggle = (e: any) => {
    e.stopPropagation();
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (href: any) => {
    setIsMobileMenuOpen(false);

    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.offsetTop - navHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Fixed Navbar */}
      <nav className={`fixed top-5 left-0 right-0 z-50 mx-4`}>
        <div className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1 rounded-2xl
         ${isScrolled
            ? "bg-white shadow-lg"
            : "bg-transparent"
          }  transition-all duration-300 `}>
          <div className="flex justify-between items-center h-auto">
            {/* Logo */}
            <button
              onClick={() => handleLinkClick('#homePage')}
              className={`text-lg md:text-xl font-bold uppercase tracking-wide transition-all duration-300 hover:scale-105 ${isScrolled ? "text-[#E9A319]" : "text-white"
                }`}
            >
              Tukang Ngapak
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-2">
              <ul className="flex items-center gap-1">
                {navigationItems.map((item, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleLinkClick(item.link)}
                      className={`transition-all duration-300 font-medium px-4 py-2 rounded-lg hover:scale-105 ${isScrolled
                        ? "text-gray-700 hover:text-[#E9A319] hover:bg-[#E9A319]/10"
                        : "text-white hover:text-[#FFB823] hover:bg-white/10"
                        }`}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>

              {/* Logo Badge */}
              <div className={`ml-2 p-1.5 rounded-full transition-all duration-300 ${isScrolled ? "bg-[#E9A319]/10" : "bg-white/10"
                }`}>
                <img
                  src="/TNlogo.png"
                  alt="Logo Tukang Ngapak"
                  className="w-10 h-10 rounded-full object-cover"
                />
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className={`md:hidden z-[60] p-2 rounded-lg transition-all duration-300 hover:scale-110 ${isScrolled
                ? "text-gray-700 hover:bg-gray-100"
                : "text-white hover:bg-white/10"
                }`}
              onClick={handleMobileMenuToggle}
              aria-label="Toggle Menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Sidebar */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/* Mobile Menu Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200 bg-gradient-to-r from-[#E9A319] to-[#FFB823]">
          <div className="flex items-center gap-3">
            <img
              src="/TNlogo.png"
              alt="Logo"
              className="w-10 h-10 rounded-full border-2 border-white"
            />
            <h2 className="text-xl font-bold text-white">Menu</h2>
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-white hover:bg-white/20 p-2 rounded-lg transition-colors"
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
                  className="w-full text-left text-gray-700 hover:text-[#E9A319] hover:bg-[#E9A319]/10 transition-all duration-300 py-3.5 px-4 text-base font-medium rounded-lg group"
                >
                  <span className="flex items-center justify-between">
                    {item.label}
                    <span className="text-[#E9A319] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  </span>
                </button>
              </li>
            ))}
          </ul>

          {/* Contact Info in Mobile Menu */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="bg-gradient-to-br from-[#E9A319]/10 to-[#FFB823]/10 rounded-xl p-5">
              <p className="font-semibold text-gray-800 mb-3 text-center">Hubungi Kami</p>
              <div className="space-y-2">
                <a
                  href="tel:+6285813530803"
                  className="flex items-center justify-center gap-2 text-[#E9A319] hover:text-[#D89410] transition-colors py-2 px-3 rounded-lg hover:bg-white/50"
                >
                  <span className="text-sm">📞</span>
                  <span className="font-medium">+62 858-1353-0803</span>
                </a>
                <a
                  href="mailto:ngapakcivil@gmail.com"
                  className="flex items-center justify-center gap-2 text-[#E9A319] hover:text-[#D89410] transition-colors py-2 px-3 rounded-lg hover:bg-white/50"
                >
                  <span className="text-sm">✉️</span>
                  <span className="font-medium text-sm">ngapakcivil@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}