"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface NavLink {
  label: string;
  href: string;
  color?: string;
}

const chapterLinks: NavLink[] = [
  { label: "Sydney", href: "/chapter/sydney", color: "#1A3A5C" },
  { label: "Tasmania", href: "/chapter/tasmania", color: "#2D6A4F" },
  { label: "Coastal Drive", href: "/chapter/coastal-drive", color: "#C87941" },
  { label: "The Wedding", href: "/chapter/the-wedding", color: "#B8860B" },
];

const utilLinks: NavLink[] = [
  { label: "Map", href: "/map" },
  { label: "Table", href: "/table" },
];

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "100%", opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed inset-0 z-40 bg-[#F9F6F2] flex flex-col"
        >
          {/* Close button */}
          <div className="flex justify-end p-4">
            <button
              onClick={onClose}
              className="w-11 h-11 flex items-center justify-center text-2xl text-[#2C2C2C] hover:text-[#1A3A5C] transition-colors"
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex-1 flex flex-col justify-center px-8 gap-2">
            <p className="text-xs uppercase tracking-widest text-[#2C2C2C]/50 mb-2 font-sans">
              Chapters
            </p>
            {chapterLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="flex items-center gap-3 py-3 text-xl font-heading text-[#2C2C2C] hover:opacity-70 transition-opacity"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                <span
                  className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: link.color }}
                />
                {link.label}
              </Link>
            ))}

            <div className="my-4 border-t border-[#C8B99A]/40" />

            {utilLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="flex items-center py-3 text-lg text-[#2C2C2C]/80 hover:text-[#2C2C2C] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
