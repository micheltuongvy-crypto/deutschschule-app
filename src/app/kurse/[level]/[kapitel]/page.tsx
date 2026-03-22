"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import AppShell from "@/components/AppShell";
import { useT } from "@/context/LangContext";
import { levels } from "@/data/levels";
import type { Lesson } from "@/data/lessons/a1/chapters1_3";

// A1
import { a1Chapters1_3 } from "@/data/lessons/a1/chapters1_3";
import { a1Chapters4_6 } from "@/data/lessons/a1/chapters4_6";
import { a1Chapters7_8 } from "@/data/lessons/a1/chapters7_8";
import { a1Chapters9_10 } from "@/data/lessons/a1/chapters9_10";

// A2
import { a2LessonsCh1_3 } from "@/data/lessons/a2/chapters1_3";
import { a2LessonsCh4_6 } from "@/data/lessons/a2/chapters4_6";
import { a2LessonsCh7_8 } from "@/data/lessons/a2/chapters7_8";
import { a2LessonsCh9_10 } from "@/data/lessons/a2/chapters9_10";

// B1
import { b1LessonsCh1 } from "@/data/lessons/b1/chapter1";
import { b1LessonsCh2 } from "@/data/lessons/b1/chapter2";
import { b1LessonsCh3 } from "@/data/lessons/b1/chapter3";
import { b1LessonsCh4_6 } from "@/data/lessons/b1/chapters4_6";
import { b1LessonsCh7_8 } from "@/data/lessons/b1/chapters7_8";
import { b1LessonsCh9_10 } from "@/data/lessons/b1/chapters9_10";

// B2
import { b2LessonsCh1_3 } from "@/data/lessons/b2/chapters1_3";
import { b2LessonsCh4_6 } from "@/data/lessons/b2/chapters4_6";
import { b2LessonsCh7_8 } from "@/data/lessons/b2/chapters7_8";
import { b2LessonsCh9_10 } from "@/data/lessons/b2/chapters9_10";

// C1
import { c1LessonsCh1_3 } from "@/data/lessons/c1/chapters1_3";
import { c1LessonsCh4_6 } from "@/data/lessons/c1/chapters4_6";
import { c1LessonsCh7_8 } from "@/data/lessons/c1/chapters7_8";
import { c1LessonsCh9_10 } from "@/data/lessons/c1/chapters9_10";

// C2
import { c2LessonsCh1_3 } from "@/data/lessons/c2/chapters1_3";
import { c2LessonsCh4_5 } from "@/data/lessons/c2/chapters4_5";
import { c2LessonsCh6_8 } from "@/data/lessons/c2/chapters6_8";
import { c2LessonsCh9_10 } from "@/data/lessons/c2/chapters9_10";

function getAllLessons(): Record<string, Lesson[]> {
  return {
    a1: [
      ...a1Chapters1_3,
      ...a1Chapters4_6,
      ...a1Chapters7_8,
      ...a1Chapters9_10,
    ],
    a2: [
      ...a2LessonsCh1_3,
      ...a2LessonsCh4_6,
      ...a2LessonsCh7_8,
      ...a2LessonsCh9_10,
    ],
    b1: [
      ...b1LessonsCh1,
      ...b1LessonsCh2,
      ...b1LessonsCh3,
      ...b1LessonsCh4_6,
      ...b1LessonsCh7_8,
      ...b1LessonsCh9_10,
    ],
    b2: [
      ...b2LessonsCh1_3,
      ...b2LessonsCh4_6,
      ...b2LessonsCh7_8,
      ...b2LessonsCh9_10,
    ],
    c1: [
      ...c1LessonsCh1_3,
      ...c1LessonsCh4_6,
      ...c1LessonsCh7_8,
      ...c1LessonsCh9_10,
    ],
    c2: [
      ...c2LessonsCh1_3,
      ...c2LessonsCh4_5,
      ...c2LessonsCh6_8,
      ...c2LessonsCh9_10,
    ],
  };
}

const typeBadge: Record<
  string,
  { bg: string; text: string }
> = {
  Einführung: { bg: "bg-green-100", text: "text-green-700" },
  Grammatik: { bg: "bg-blue-100", text: "text-blue-700" },
  Fertigkeit: { bg: "bg-yellow-100", text: "text-yellow-700" },
  Integration: { bg: "bg-purple-100", text: "text-purple-700" },
};

export default function KapitelPage() {
  const params = useParams<{ level: string; kapitel: string }>();
  const t = useT();

  const levelId = params.level;
  const kapitelNum = parseInt(params.kapitel, 10);

  const level = levels.find((l) => l.id === levelId);

  if (!level || isNaN(kapitelNum) || kapitelNum < 1 || kapitelNum > 10) {
    return (
      <AppShell>
        <div className="min-h-screen flex flex-col items-center justify-center px-6">
          <div className="text-6xl font-extrabold text-gray-200">404</div>
          <h1 className="mt-4 text-2xl font-bold text-gray-900">
            {t("Không tìm thấy chương", "Kapitel nicht gefunden")}
          </h1>
          <p className="mt-2 text-gray-500">
            {t(
              `Chương "${params.kapitel}" trong cấp độ "${levelId}" không tồn tại.`,
              `Kapitel "${params.kapitel}" im Niveau "${levelId}" existiert nicht.`
            )}
          </p>
          <Link
            href={level ? `/kurse/${level.id}` : "/kurse"}
            className="mt-6 inline-flex items-center gap-2 text-blue-700 hover:text-blue-900 font-medium transition-colors"
          >
            <span>&larr;</span>
            {t("Quay lại", "Zurück")}
          </Link>
        </div>
      </AppShell>
    );
  }

  const chapterName = level.chapters[kapitelNum - 1];
  const allLessons = getAllLessons();
  const levelLessons = allLessons[levelId] || [];
  const chapterLessons = levelLessons.filter(
    (l) => l.chapterId === kapitelNum
  );

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
            <Link
              href={`/kurse/${level.id}`}
              className="hover:text-white transition-colors"
            >
              {level.name}
            </Link>
            <span>/</span>
            <span className="text-white font-medium">
              Kapitel {kapitelNum}
            </span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Kapitel {kapitelNum}
          </h1>
          <p className="mt-3 text-xl md:text-2xl text-white/90 font-medium">
            {chapterName}
          </p>
          <div className="mt-4 flex items-center gap-4 text-sm text-white/80">
            <span className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur rounded-full px-3 py-1">
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
              4 {t("bài học", "Lektionen")}
            </span>
          </div>
        </div>
      </section>

      {/* Lesson cards */}
      <section className="bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-6 py-12">
          {chapterLessons.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-5xl mb-4 text-gray-300">
                <svg
                  className="w-16 h-16 mx-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                  />
                </svg>
              </div>
              <p className="text-gray-500 text-lg">
                {t(
                  "Nội dung bài học đang được chuẩn bị...",
                  "Lektionen werden vorbereitet..."
                )}
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {chapterLessons.map((lesson) => {
                const badge = typeBadge[lesson.type] || {
                  bg: "bg-gray-100",
                  text: "text-gray-700",
                };

                return (
                  <Link
                    key={lesson.id}
                    href={`/kurse/${level.id}/${kapitelNum}/${lesson.lessonNumber}`}
                    className="group block"
                  >
                    <div className="relative bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all">
                      <div className="flex items-start gap-5">
                        {/* Lesson number circle */}
                        <div
                          className={`shrink-0 w-12 h-12 rounded-full bg-gradient-to-br ${level.color} flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:scale-110 transition-transform`}
                        >
                          {lesson.lessonNumber}
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-3 mb-1">
                            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                              {t("Bài", "Lektion")} {lesson.lessonNumber}
                            </span>
                            <span
                              className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${badge.bg} ${badge.text}`}
                            >
                              {lesson.type}
                            </span>
                          </div>

                          <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-800 transition-colors">
                            {t(lesson.titleVi, lesson.title)}
                          </h3>
                          <p className="mt-0.5 text-sm text-gray-500">
                            {t(lesson.title, lesson.titleVi)}
                          </p>

                          {/* Objectives */}
                          {lesson.objectives.length > 0 && (
                            <ul className="mt-3 space-y-1">
                              {lesson.objectives.map((obj, i) => (
                                <li
                                  key={i}
                                  className="flex items-start gap-2 text-sm text-gray-600"
                                >
                                  <svg
                                    className="w-4 h-4 text-green-500 shrink-0 mt-0.5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M5 13l4 4L19 7"
                                    />
                                  </svg>
                                  {obj}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>

                        {/* Arrow */}
                        <svg
                          className="shrink-0 w-5 h-5 text-gray-300 group-hover:text-gray-500 group-hover:translate-x-1 transition-all mt-3"
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
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}

          {/* Back link */}
          <div className="mt-12 text-center">
            <Link
              href={`/kurse/${level.id}`}
              className="inline-flex items-center gap-2 text-gray-500 hover:text-blue-700 font-medium transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              {t("Quay lại", "Zurück")}
            </Link>
          </div>
        </div>
      </section>
    </AppShell>
  );
}
