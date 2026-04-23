"use client";

import { useState } from "react";

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);

  const toggleDark = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav className="flex justify-between items-center px-12 py-6 border-b border-[var(--border)]">
      
      {/* Logo */}
      <h1 className="text-[var(--gold)] font-bold text-2xl">
        Precious
      </h1>

      {/* Nav Links */}
      <ul className="flex gap-8 list-none">
        {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="text-[var(--text-main)] no-underline font-medium hover:text-[var(--gold)] transition-colors duration-200"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      {/* Dark mode toggle */}
      <button
        onClick={toggleDark}
        className="bg-[var(--gold)] text-[var(--text-main)] px-5 py-2 rounded-full font-bold cursor-pointer hover:opacity-90 transition-opacity duration-200"
      >
        {isDark ? " Light" : " Dark"}
      </button>

    </nav>
  );
}