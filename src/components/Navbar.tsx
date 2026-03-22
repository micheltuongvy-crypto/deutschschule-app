"use client";

import { useState } from "react";
import Link from "next/link";
import { useT } from "@/context/LangContext";
import LangSwitcher from "./LangSwitcher";

export default function Navbar() {
  const t = useT();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: "/dashboard", label: t("Tổng quan", "Dashboard") },
    { href: "/kurse", label: t("Khóa học", "Kurse") },
    { href: "/vokabeln/a1", label: t("Từ vựng", "Vokabeln") },
    { href: "/grammatik/a1", label: t("Ngữ pháp", "Grammatik") },
    { href: "/uebungen/a1", label: t("Bài tập", "Übungen") },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-blue-800">
          <span className="text-2xl">🇩🇪</span>
          <span className="hidden sm:inline">Deutschschule</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden sm:flex items-center gap-4 text-sm font-medium">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="px-3 py-2 rounded-lg hover:bg-gray-100 text-gray-700 transition-colors">
              {link.label}
            </Link>
          ))}
          <LangSwitcher />
        </div>

        {/* Mobile hamburger button */}
        <button
          className="sm:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`sm:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-80 border-t border-gray-200" : "max-h-0"
        }`}
      >
        <div className="px-4 py-4 space-y-1 bg-white/95 backdrop-blur">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-3 rounded-lg hover:bg-gray-100 text-gray-700 font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 pb-1">
            <LangSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
}
