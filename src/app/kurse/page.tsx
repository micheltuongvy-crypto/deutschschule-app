"use client";

import Link from "next/link";
import AppShell from "@/components/AppShell";
import { useT } from "@/context/LangContext";
import { levels } from "@/data/levels";

export default function KursePage() {
  const t = useT();

  return (
    <AppShell>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-800 via-blue-700 to-blue-900 text-white py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            {t("Kh\u00f3a h\u1ecdc", "Kurse")}
          </h1>
          <p className="mt-4 text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
            {t(
              "6 c\u1ea5p \u0111\u1ed9 t\u1eeb A1 \u0111\u1ebfn C2 \u2014 t\u1eeb ng\u01b0\u1eddi m\u1edbi b\u1eaft \u0111\u1ea7u \u0111\u1ebfn tr\u00ecnh \u0111\u1ed9 g\u1ea7n nh\u01b0 ng\u01b0\u1eddi b\u1ea3n ng\u1eef. Ch\u1ecdn c\u1ea5p \u0111\u1ed9 ph\u00f9 h\u1ee3p v\u00e0 b\u1eaft \u0111\u1ea7u h\u1ecdc ngay!",
              "6 Stufen von A1 bis C2 \u2014 vom Anf\u00e4nger bis zum nahezu muttersprachlichen Niveau. W\u00e4hle dein Level und starte sofort!"
            )}
          </p>
        </div>
      </section>

      {/* Level Cards Grid */}
      <section className="bg-slate-50 py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {levels.map((level) => (
              <Link
                key={level.id}
                href={`/kurse/${level.id}`}
                className="group block"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  {/* Gradient Header */}
                  <div
                    className={`bg-gradient-to-r ${level.color} px-6 py-8 text-white`}
                  >
                    <div className="text-5xl font-extrabold tracking-tight opacity-90 group-hover:opacity-100 transition-opacity">
                      {level.name}
                    </div>
                    <div className="mt-2 text-lg font-semibold text-white/90">
                      {level.titleDe}
                    </div>
                    <div className="text-sm text-white/75">
                      {level.titleVi}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="bg-white px-6 py-5">
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {t(level.descVi, level.descDe)}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-500 bg-gray-100 rounded-full px-3 py-1">
                        <svg
                          className="w-3.5 h-3.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                          />
                        </svg>
                        10 Kapitel
                      </span>
                      <span className="text-sm font-semibold text-blue-700 group-hover:text-blue-900 transition-colors flex items-center gap-1">
                        {t("B\u1eaft \u0111\u1ea7u", "Starten")}
                        <svg
                          className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </AppShell>
  );
}
