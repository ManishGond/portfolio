import { motion } from "motion/react";
import { useState } from "react";

type NavigationUtilsProps = {
  onClick?: () => void;
};

function NavigationUtils({ onClick }: NavigationUtilsProps) {
  const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <ul className="nav-ul">
      {links.map(({ label, href }) => (
        <li key={label} className="nav-li">
          <a
            href={href}
            className="nav-link"
            onClick={onClick}
          >
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
}

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close mobile menu when a link is clicked
  };

  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Brand / Logo */}
          <a
            href="/"
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
          >
            Manish Gond
          </a>

          {/* Mobile Menu Button */}
          <button
            className="sm:hidden flex items-center text-neutral-400 hover:text-white focus:outline-none"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
          >
            <img
              src={isMenuOpen ? "assets/close.svg" : "assets/menu.svg"}
              alt="menu toggle"
              className="w-6 h-6"
            />
          </button>

          {/* Desktop Nav */}
          <nav className="hidden sm:flex">
            <NavigationUtils />
          </nav>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -10 }}
          transition={{ duration: 0.3 }}
          className="sm:hidden overflow-hidden text-center"
        >
          <nav className="pb-5">
            <NavigationUtils onClick={handleLinkClick} />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
