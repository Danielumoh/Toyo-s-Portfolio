import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home", isHome: true },
  { to: "/about", label: "About" },
  { to: "/services", label: "What I Do" },
  { to: "/experience", label: "Experience" },
  { to: "/content", label: "Content" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  return (
    <nav
      aria-label="Main navigation"
      className="bg-white border-b border-[#E3E3E3] px-6 md:px-16 py-5"
      onKeyDown={(event) => {
        if (event.key === "Escape" && isMenuOpen) {
          setIsMenuOpen(false);
          menuButtonRef.current?.focus();
        }
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-end lg:hidden">
          <button
            ref={menuButtonRef}
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="navigation-links"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="inline-flex min-h-11 items-center gap-2 rounded-md border border-[#E3E3E3] px-4 py-2 text-sm text-[#111111] transition-colors hover:bg-[var(--color-accent)] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]"
          >
            <span>{isMenuOpen ? "Close menu" : "Menu"}</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d={isMenuOpen ? "M6 6l12 12M6 18L18 6" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
        <div
          id="navigation-links"
          className={`${isMenuOpen ? "flex" : "hidden"} mt-4 flex-col gap-2 lg:mt-0 lg:flex lg:flex-row lg:justify-end lg:items-center`}
        >
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.isHome}
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) =>
              `flex min-h-11 items-center px-4 py-2 text-sm whitespace-nowrap rounded-md transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] ${
                link.isHome
                  ? isActive
                    ? "text-[#111111] font-medium"
                    : "text-[#6B6B6B] hover:text-[#111111]"
                  : `hover:bg-[color:var(--color-accent)] hover:text-white ${
                      isActive
                        ? "text-[#111111] font-medium bg-[#F7F7F7]"
                        : "text-[#6B6B6B]"
                    }`
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
        </div>
      </div>
    </nav>
  );
}
