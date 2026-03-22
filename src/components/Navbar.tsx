"use client";

import Link from "next/link";
import { useT } from "@/context/LangContext";
import LangSwitcher from "./LangSwitcher";

export default function Navbar() {
  const t = useT();
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-blue-800">
          <span className="text-2xl">🇩🇪</span>
          <span className="hidden sm:inline">Deutschschule</span>
        </Link>

        <div className="flex items-center gap-1 sm:gap-4 text-sm font-medium">
          <Link href="/kurse" className="px-3 py-2 rounded-lg hover:bg-gray-100 text-gray-700 transition-colors">
            {t("Khóa học", "Kurse")}
          </Link>
          <Link href="/vokabeln/a1" className="px-3 py-2 rounded-lg hover:bg-gray-100 text-gray-700 transition-colors hidden sm:block">
            {t("Từ vựng", "Vokabeln")}
          </Link>
          <Link href="/grammatik/a1" className="px-3 py-2 rounded-lg hover:bg-gray-100 text-gray-700 transition-colors hidden sm:block">
            {t("Ngữ pháp", "Grammatik")}
          </Link>
          <Link href="/uebungen/a1" className="px-3 py-2 rounded-lg hover:bg-gray-100 text-gray-700 transition-colors hidden sm:block">
            {t("Bài tập", "Übungen")}
          </Link>
          <LangSwitcher />
        </div>
      </div>
    </nav>
  );
}
