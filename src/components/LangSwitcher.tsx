"use client";

import { useLang } from "@/context/LangContext";

export default function LangSwitcher() {
  const { lang, setLang } = useLang();
  return (
    <div className="flex bg-white/90 backdrop-blur rounded-full shadow-lg border border-gray-200 p-1">
      <button
        onClick={() => setLang("vi")}
        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
          lang === "vi" ? "bg-blue-800 text-white" : "text-gray-600 hover:text-gray-900"
        }`}
      >
        VN
      </button>
      <button
        onClick={() => setLang("de")}
        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
          lang === "de" ? "bg-blue-800 text-white" : "text-gray-600 hover:text-gray-900"
        }`}
      >
        DE
      </button>
    </div>
  );
}
