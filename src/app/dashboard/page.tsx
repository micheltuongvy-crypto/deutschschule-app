"use client";

import Link from "next/link";
import AppShell from "@/components/AppShell";
import { useT } from "@/context/LangContext";
import { useProgress } from "@/context/ProgressContext";
import { levels } from "@/data/levels";
import { allLessons } from "@/data/allLessons";
import { useMemo } from "react";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function lessonsForLevel(level: string) {
  return allLessons.filter((l) => l.level === level).length;
}

function completedForLevel(level: string, completedLessons: string[]) {
  return completedLessons.filter((id) => id.startsWith(`${level}-`)).length;
}

function averageScore(scores: Record<string, number>): number | null {
  const vals = Object.values(scores);
  if (vals.length === 0) return null;
  return Math.round(vals.reduce((a, b) => a + b, 0) / vals.length);
}

// ---------------------------------------------------------------------------
// Skeleton loader
// ---------------------------------------------------------------------------

function Skeleton() {
  return (
    <div className="animate-pulse space-y-10 max-w-6xl mx-auto px-6 py-12">
      {/* Stats bar skeleton */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-28 bg-gray-200 rounded-2xl" />
        ))}
      </div>
      {/* Level cards skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-52 bg-gray-200 rounded-2xl" />
        ))}
      </div>
      {/* Activity skeleton */}
      <div className="space-y-3">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-12 bg-gray-200 rounded-xl" />
        ))}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Icon components
// ---------------------------------------------------------------------------

function FlameIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
    </svg>
  );
}

function BookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  );
}

function PencilIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
    </svg>
  );
}

function CardsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>
  );
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
  );
}

function TrophyIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}

function WarningIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
  );
}

function ChevronRightIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Action icon for activity log
// ---------------------------------------------------------------------------

function ActivityIcon({ action }: { action: string }) {
  if (action === "lesson") return <BookIcon className="w-4 h-4 text-blue-500" />;
  if (action === "exercise") return <PencilIcon className="w-4 h-4 text-amber-500" />;
  if (action === "vocab") return <CardsIcon className="w-4 h-4 text-emerald-500" />;
  return <StarIcon className="w-4 h-4 text-gray-400" />;
}

// ---------------------------------------------------------------------------
// Main Component
// ---------------------------------------------------------------------------

export default function DashboardPage() {
  const t = useT();
  const { progress, hydrated, getLevelProgress } = useProgress();

  const totalLessons = allLessons.length;

  const avgScore = useMemo(
    () => averageScore(progress.exerciseScores),
    [progress.exerciseScores],
  );

  const weakAreas = useMemo(() => {
    return Object.entries(progress.exerciseScores)
      .filter(([, score]) => score < 70)
      .sort((a, b) => a[1] - b[1]);
  }, [progress.exerciseScores]);

  const recentActivity = progress.activityLog.slice(0, 10);

  // ----- Loading state -----
  if (!hydrated) {
    return (
      <AppShell>
        <Skeleton />
      </AppShell>
    );
  }

  return (
    <AppShell>
      {/* ----------------------------------------------------------------- */}
      {/* Hero Stats Bar                                                     */}
      {/* ----------------------------------------------------------------- */}
      <section className="bg-gradient-to-br from-indigo-800 via-indigo-700 to-indigo-900 text-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-8">
            {t("Trang t\u1ed5ng quan", "Dashboard")}
          </h1>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Streak */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 flex flex-col items-center text-center">
              <FlameIcon className="w-8 h-8 text-orange-400 mb-2" />
              <span className="text-3xl font-bold">{progress.streak}</span>
              <span className="text-sm text-white/70 mt-1">
                {t("Ng\u00e0y li\u00ean ti\u1ebfp", "Tage-Streak")}
              </span>
            </div>

            {/* Lessons completed */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 flex flex-col items-center text-center">
              <BookIcon className="w-8 h-8 text-blue-300 mb-2" />
              <span className="text-3xl font-bold">
                {progress.completedLessons.length}
                <span className="text-lg font-normal text-white/60">/{totalLessons}</span>
              </span>
              <span className="text-sm text-white/70 mt-1">
                {t("B\u00e0i h\u1ecdc", "Lektionen")}
              </span>
            </div>

            {/* Words mastered */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 flex flex-col items-center text-center">
              <CardsIcon className="w-8 h-8 text-emerald-300 mb-2" />
              <span className="text-3xl font-bold">{progress.knownWords.length}</span>
              <span className="text-sm text-white/70 mt-1">
                {t("T\u1eeb v\u1ef1ng", "W\u00f6rter")}
              </span>
            </div>

            {/* Average exercise score */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 flex flex-col items-center text-center">
              <TrophyIcon className="w-8 h-8 text-yellow-300 mb-2" />
              <span className="text-3xl font-bold">
                {avgScore !== null ? `${avgScore}%` : "\u2013"}
              </span>
              <span className="text-sm text-white/70 mt-1">
                {t("\u0110i\u1ec3m TB", "\u00d8 Punkte")}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------- */}
      {/* Level Progress                                                     */}
      {/* ----------------------------------------------------------------- */}
      <section className="bg-slate-50 py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {t("Ti\u1ebfn \u0111\u1ed9 theo c\u1ea5p \u0111\u1ed9", "Fortschritt nach Level")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {levels.map((level) => {
              const total = lessonsForLevel(level.id);
              const completed = completedForLevel(level.id, progress.completedLessons);
              const pct = getLevelProgress(level.id, total);

              return (
                <Link
                  key={level.id}
                  href={`/kurse/${level.id}`}
                  className="group block"
                >
                  <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                    {/* Gradient accent bar */}
                    <div className={`h-2 bg-gradient-to-r ${level.color}`} />

                    <div className="p-5">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <span className={`text-2xl font-extrabold bg-gradient-to-r ${level.color} bg-clip-text text-transparent`}>
                            {level.name}
                          </span>
                          <span className="ml-2 text-sm text-gray-500">
                            {level.titleDe}
                          </span>
                        </div>
                        <ChevronRightIcon className="w-5 h-5 text-gray-300 group-hover:text-gray-500 group-hover:translate-x-0.5 transition-all" />
                      </div>

                      <p className="text-xs text-gray-400 mb-4">
                        {t(level.titleVi, level.titleDe)}
                      </p>

                      {/* Progress bar */}
                      <div className="w-full bg-gray-100 rounded-full h-2.5 mb-2">
                        <div
                          className={`bg-gradient-to-r ${level.color} h-2.5 rounded-full transition-all duration-500`}
                          style={{ width: `${pct}%` }}
                        />
                      </div>

                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">
                          {completed}/{total} {t("B\u00e0i h\u1ecdc", "Lektionen")}
                        </span>
                        <span className="font-semibold text-gray-700">
                          {pct}%
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------- */}
      {/* Recent Activity + Weak Areas — 2 column layout                     */}
      {/* ----------------------------------------------------------------- */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Activity */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {t("Ho\u1ea1t \u0111\u1ed9ng g\u1ea7n \u0111\u00e2y", "Letzte Aktivit\u00e4ten")}
            </h2>

            {recentActivity.length === 0 ? (
              <div className="bg-slate-50 rounded-2xl p-8 text-center">
                <BookIcon className="w-12 h-12 text-indigo-300 mx-auto mb-3" />
                <p className="text-gray-500 font-medium">
                  {t(
                    "Ch\u01b0a c\u00f3 ho\u1ea1t \u0111\u1ed9ng n\u00e0o. H\u00e3y b\u1eaft \u0111\u1ea7u h\u1ecdc ngay!",
                    "Noch keine Aktivit\u00e4ten. Fang jetzt an zu lernen!",
                  )}
                </p>
                <Link
                  href="/kurse"
                  className="inline-block mt-4 text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors"
                >
                  {t("B\u1eaft \u0111\u1ea7u h\u1ecdc", "Jetzt starten")} &rarr;
                </Link>
              </div>
            ) : (
              <ul className="space-y-2">
                {recentActivity.map((entry, i) => (
                  <li
                    key={`${entry.date}-${i}`}
                    className="flex items-center gap-3 bg-slate-50 rounded-xl px-4 py-3"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center">
                      <ActivityIcon action={entry.action} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-700 truncate">{entry.detail}</p>
                    </div>
                    <span className="text-xs text-gray-400 flex-shrink-0">{entry.date}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Weak Areas */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {t("\u0110i\u1ec3m y\u1ebfu c\u1ea7n c\u1ea3i thi\u1ec7n", "Verbesserungsbereiche")}
            </h2>

            {weakAreas.length === 0 ? (
              <div className="bg-emerald-50 rounded-2xl p-8 text-center">
                <TrophyIcon className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
                <p className="text-emerald-700 font-medium">
                  {t(
                    "Tuy\u1ec7t v\u1eddi! Kh\u00f4ng c\u00f3 \u0111i\u1ec3m y\u1ebfu n\u00e0o d\u01b0\u1edbi 70%.",
                    "Gro\u00dfartig! Keine Schwachstellen unter 70%.",
                  )}
                </p>
              </div>
            ) : (
              <ul className="space-y-3">
                {weakAreas.map(([key, score]) => {
                  // Try to extract level from exercise key (e.g. "a1-ch1-ex1" -> "a1")
                  const levelMatch = key.match(/^([abc]\d)/);
                  const levelId = levelMatch ? levelMatch[1] : null;

                  return (
                    <li key={key}>
                      <Link
                        href={levelId ? `/uebungen/${levelId}` : "/kurse"}
                        className="flex items-center gap-4 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 hover:bg-amber-100 transition-colors group"
                      >
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
                          <WarningIcon className="w-4 h-4 text-amber-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-700 truncate">{key}</p>
                        </div>
                        <span className="text-sm font-bold text-amber-700">{score}%</span>
                        <ChevronRightIcon className="w-4 h-4 text-amber-400 group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
      </section>
    </AppShell>
  );
}
