"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import AppShell from "@/components/AppShell";
import { useT } from "@/context/LangContext";
import { useProgress } from "@/context/ProgressContext";
import { levels } from "@/data/levels";
import { allLessons } from "@/data/allLessons";

export default function LevelPage() {
  const params = useParams();
  const t = useT();
  const levelId = params.level as string;

  const { isLessonComplete, hydrated } = useProgress();

  const level = levels.find((l) => l.id === levelId);

  if (!level) {
    return (
      <AppShell>
        <div className="min-h-screen flex flex-col items-center justify-center px-6">
          <div className="text-6xl font-extrabold text-gray-200">404</div>
          <h1 className="mt-4 text-2xl font-bold text-gray-900">
            {t("Không tìm thấy khóa học", "Kurs nicht gefunden")}
          </h1>
          <p className="mt-2 text-gray-500">
            {t(
              `Cấp độ "${levelId}" không tồn tại.`,
              `Das Niveau "${levelId}" existiert nicht.`
            )}
          </p>
          <Link
            href="/kurse"
            className="mt-6 inline-flex items-center gap-2 text-blue-700 hover:text-blue-900 font-medium transition-colors"
          >
            <span>&larr;</span>
            {t("Quay lại khóa học", "Zurück zu Kurse")}
          </Link>
        </div>
      </AppShell>
    );
  }

  return (
    <AppShell>
      {/* Header */}
      <section className={`relative bg-gradient-to-br ${level.color} text-white`}>
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-white/70 mb-6">
            <Link href="/kurse" className="hover:text-white transition-colors">
              {t("Khóa học", "Kurse")}
            </Link>
            <span>/</span>
            <span className="text-white font-medium">{level.name}</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            {level.name}
          </h1>
          <p className="mt-3 text-xl md:text-2xl text-white/90 font-medium">
            {t(level.titleVi, level.titleDe)}
          </p>
          <p className="mt-2 text-white/70 max-w-2xl">
            {t(level.descVi, level.descDe)}
          </p>
          <div className="mt-4 flex items-center gap-4 text-sm text-white/80">
            <span className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur rounded-full px-3 py-1">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              {t("10 chương", "10 Kapitel")}
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur rounded-full px-3 py-1">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              {t("40 bài học", "40 Lektionen")}
            </span>
          </div>
        </div>
      </section>

      {/* Chapter list */}
      <section className="bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="space-y-4">
            {level.chapters.map((chapter, i) => {
              const num = i + 1;
              return (
                <Link
                  key={num}
                  href={`/kurse/${level.id}/${num}`}
                  className="group block"
                >
                  <div className="relative flex items-center gap-5 bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all">
                    {/* Numbered circle */}
                    <div
                      className={`shrink-0 w-12 h-12 rounded-full bg-gradient-to-br ${level.color} flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:scale-110 transition-transform`}
                    >
                      {num}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                        Kapitel {num}
                      </div>
                      <h3 className="mt-0.5 text-lg font-bold text-gray-900 group-hover:text-blue-800 transition-colors truncate">
                        {chapter}
                      </h3>
                    </div>

                    {/* Badge */}
                    <span className="shrink-0 text-xs font-medium bg-blue-50 text-blue-700 px-3 py-1 rounded-full">
                      {hydrated ? (
                        <>
                          {allLessons.filter(l => l.level === levelId && l.chapterId === num && isLessonComplete(l.id)).length}/4 {t("hoàn thành", "abgeschlossen")}
                        </>
                      ) : (
                        <>4 {t("bài học", "Lektionen")}</>
                      )}
                    </span>

                    {/* Arrow */}
                    <svg
                      className="shrink-0 w-5 h-5 text-gray-300 group-hover:text-gray-500 group-hover:translate-x-1 transition-all"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>

                    {/* Progress line connector */}
                    {num < 10 && (
                      <div className="absolute left-[2.85rem] top-full w-0.5 h-4 bg-gray-200 -translate-x-1/2" />
                    )}
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Back link */}
          <div className="mt-12 text-center">
            <Link
              href="/kurse"
              className="inline-flex items-center gap-2 text-gray-500 hover:text-blue-700 font-medium transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              {t("Quay lại khóa học", "Zurück zu Kurse")}
            </Link>
          </div>
        </div>
      </section>
    </AppShell>
  );
}
