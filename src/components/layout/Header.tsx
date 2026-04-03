"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

const chapterLinks = [
  { label: "Sydney", href: "/chapter/sydney", hoverColor: "#1A3A5C" },
  { label: "Tasmania", href: "/chapter/tasmania", hoverColor: "#2D6A4F" },
  {
    label: "Coastal Drive",
    href: "/chapter/coastal-drive",
    hoverColor: "#C87941",
  },
  { label: "The Wedding", href: "/chapter/the-wedding", hoverColor: "#B8860B" },
];

const utilLinks = [
  { label: "Map", href: "/map" },
  { label: "Table", href: "/table" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Skip-to-content link for keyboard and screen reader users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] focus:bg-[#F9F6F2] focus:px-4 focus:py-2 focus:rounded focus:text-[#2C2C2C] focus:text-sm"
      >
        Skip to content
      </a>

      <header
        className={`fixed top-0 w-full z-50 bg-[#F9F6F2]/90 backdrop-blur-md border-b border-[#C8B99A]/30 transition-shadow duration-300 ${
          scrolled ? "shadow-md" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Logo / Site title */}
          <Link
            href="/"
            className="text-lg font-heading text-[#2C2C2C] hover:text-[#1A3A5C] transition-colors"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            The Swishers
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {chapterLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-[#2C2C2C]/80 hover:text-[inherit] transition-colors"
                style={
                  {
                    "--hover-color": link.hoverColor,
                  } as React.CSSProperties
                }
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    link.hoverColor;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "";
                }}
              >
                {link.label}
              </Link>
            ))}

            <span className="text-[#C8B99A]">|</span>

            {utilLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-[#2C2C2C]/80 hover:text-[#2C2C2C] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile hamburger / close toggle */}
          <button
            className="md:hidden relative z-[70] w-11 h-11 flex flex-col items-center justify-center gap-1.5 text-[#2C2C2C]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span className={`block w-6 h-0.5 bg-current transition-transform duration-300 ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block w-6 h-0.5 bg-current transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-current transition-transform duration-300 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </header>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
