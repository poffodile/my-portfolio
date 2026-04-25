"use client";
import Link from "next/link";
import { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

interface NavLinkType {
  title: string;
  path: string;
}

const navLinks: NavLinkType[] = [
  { title: "About", path: "#about" },
  { title: "Skills", path: "#skills" },
  { title: "Projects", path: "#projects" },
  { title: "Contact", path: "#contact" },
];

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const toggleDark = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[var(--background)] border-b border-[var(--border)]">
      <div className="flex items-center justify-between mx-auto px-6 py-4">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl"></span>
          <span className="text-[var(--text-main)] font-bold text-xl">
            Precious <span className="text-[var(--gold)]">O.</span>
          </span>
        </Link>

        {/* Mobile menu button */}
        <div className="block md:hidden">
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="flex items-center px-3 py-2 border rounded border-[var(--gold)] text-[var(--gold)] hover:opacity-80">
            {navbarOpen
              ? <XMarkIcon className="h-5 w-5" />
              : <Bars3Icon className="h-5 w-5" />
            }
          </button>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8 list-none">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>

          {/* Dark mode toggle */}
          <button
            onClick={toggleDark}
            className="bg-[var(--gold)] text-white px-4 py-2 rounded-full font-bold hover:opacity-90 transition-opacity duration-200">
            {isDark ? "Light" : "Dark"}
          </button>
        </div>

      </div>

      {/* Mobile overlay */}
      {navbarOpen && <MenuOverlay links={navLinks} />}
    </nav>
  );
}