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
  return (
    <nav className="bg-white border-b border-[#E3E3E3] px-6 md:px-16 py-5">
      <div className="max-w-6xl mx-auto flex justify-end items-center gap-2">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.isHome}
            className={({ isActive }) =>
              `px-4 py-2 text-sm rounded-md transition-all duration-300 ${
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
    </nav>
  );
}
