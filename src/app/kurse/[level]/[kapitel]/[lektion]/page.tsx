"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import AppShell from "@/components/AppShell";
import SpeakButton from "@/components/SpeakButton";
import { useT, useLang } from "@/context/LangContext";
import { useProgress } from "@/context/ProgressContext";
import { levels } from "@/data/levels";
import { allLessons } from "@/data/allLessons";
import type { ContentBlock } from "@/data/lessons/a1/chapters1_3";

// ---------------------------------------------------------------------------
// Content Block Renderers
// ---------------------------------------------------------------------------

function ExplanationBlock({
  block,
}: {
  block: Extract<ContentBlock, { type: "explanation" }>;
}) {
  const t = useT();
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="px-6 py-4 bg-gray-50 border-b border-gray-100">
        <h3 className="text-lg font-bold text-gray-900">
          {t(block.titleVi, block.titleDe)}
        </h3>
      </div>
      <div className="p-6 space-y-4">
        <div className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50/50 rounded-r-lg">
          <p className="text-sm font-semibold text-blue-700 mb-1 uppercase tracking-wider">
            Deutsch
          </p>
          <p className="text-gray-800 leading-relaxed">{block.textDe}</p>
        </div>
        <div className="border-l-4 border-green-500 pl-4 py-2 bg-green-50/50 rounded-r-lg">
          <p className="text-sm font-semibold text-green-700 mb-1 uppercase tracking-wider">
            Tiếng Việt
          </p>
          <p className="text-gray-700 leading-relaxed">{block.textVi}</p>
        </div>
      </div>
    </div>
  );
}

function DialogueBlock({
  block,
}: {
  block: Extract<ContentBlock, { type: "dialogue" }>;
}) {
  const t = useT();
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="px-6 py-4 bg-gray-50 border-b border-gray-100">
        <h3 className="text-lg font-bold text-gray-900">
          {t(block.titleVi, block.titleDe)}
        </h3>
      </div>
      <div className="p-6 space-y-3">
        {block.lines.map((line, i) => {
          const isEven = i % 2 === 0;
          return (
            <div
              key={i}
              className={`flex ${isEven ? "justify-start" : "justify-end"}`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-5 py-3 ${
                  isEven
                    ? "bg-blue-50 rounded-tl-sm"
                    : "bg-emerald-50 rounded-tr-sm"
                }`}
              >
                <p
                  className={`text-xs font-bold uppercase tracking-wider mb-1 ${
                    isEven ? "text-blue-600" : "text-emerald-600"
                  }`}
                >
                  {line.speaker}
                </p>
                <div className="flex items-center gap-1">
                  <p className="text-gray-900 font-medium leading-relaxed">
                    {line.de}
                  </p>
                  <SpeakButton text={line.de} />
                </div>
                <p className="text-gray-500 text-sm mt-1 italic">{line.vi}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function GrammarBlock({
  block,
}: {
  block: Extract<ContentBlock, { type: "grammar" }>;
}) {
  const t = useT();
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="px-6 py-4 bg-amber-50 border-b border-amber-100">
        <h3 className="text-lg font-bold text-amber-900">
          {t(block.titleVi, block.titleDe)}
        </h3>
      </div>
      <div className="p-6 space-y-5">
        {/* Rule box */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
          <p className="text-sm font-semibold text-amber-700 mb-1 uppercase tracking-wider">
            Regel
          </p>
          <p className="text-gray-900 font-medium leading-relaxed">
            {block.rule}
          </p>
          <p className="text-gray-600 text-sm mt-2 leading-relaxed">
            {block.ruleVi}
          </p>
        </div>

        {/* Examples table */}
        {block.examples.length > 0 && (
          <div className="overflow-hidden rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">
                    Deutsch
                  </th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">
                    Tiếng Việt
                  </th>
                </tr>
              </thead>
              <tbody>
                {block.examples.map((ex, i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}
                  >
                    <td className="px-4 py-3 text-gray-900 font-medium border-b border-gray-100">
                      {ex.de}
                    </td>
                    <td className="px-4 py-3 text-gray-600 border-b border-gray-100">
                      {ex.vi}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

function VocabularyBlock({
  block,
}: {
  block: Extract<ContentBlock, { type: "vocabulary" }>;
}) {
  const t = useT();

  function articleColor(article?: string) {
    switch (article) {
      case "der":
        return "bg-blue-100 text-blue-800 border-blue-300";
      case "die":
        return "bg-red-100 text-red-800 border-red-300";
      case "das":
        return "bg-green-100 text-green-800 border-green-300";
      default:
        return "";
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="px-6 py-4 bg-violet-50 border-b border-violet-100">
        <h3 className="text-lg font-bold text-violet-900">
          {t(block.titleVi, block.titleDe)}
        </h3>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {block.words.map((word, i) => (
            <div
              key={i}
              className="relative flex flex-col bg-gray-50 rounded-xl p-4 border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all"
            >
              {word.article && (
                <span
                  className={`absolute top-2 right-2 text-[10px] font-bold uppercase px-2 py-0.5 rounded-full border ${articleColor(
                    word.article
                  )}`}
                >
                  {word.article}
                </span>
              )}
              <div className="flex items-center gap-1">
                <span className="text-gray-900 font-semibold">{word.de}</span>
                <SpeakButton text={word.article ? `${word.article} ${word.de}` : word.de} />
              </div>
              <span className="text-gray-500 text-sm mt-1">{word.vi}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PracticeBlock({
  block,
}: {
  block: Extract<ContentBlock, { type: "practice" }>;
}) {
  const t = useT();
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="px-6 py-4 bg-teal-50 border-b border-teal-100">
        <h3 className="text-lg font-bold text-teal-900">
          {t(block.titleVi, block.titleDe)}
        </h3>
      </div>
      <div className="p-6 space-y-4">
        <div className="border-l-4 border-teal-500 pl-4 py-2 bg-teal-50/50 rounded-r-lg">
          <p className="text-sm font-semibold text-teal-700 mb-1 uppercase tracking-wider">
            Aufgabe
          </p>
          <p className="text-gray-800 leading-relaxed">{block.instruction}</p>
        </div>
        <div className="border-l-4 border-green-400 pl-4 py-2 bg-green-50/40 rounded-r-lg">
          <p className="text-sm font-semibold text-green-700 mb-1 uppercase tracking-wider">
            Hướng dẫn
          </p>
          <p className="text-gray-700 leading-relaxed">
            {block.instructionVi}
          </p>
        </div>
      </div>
    </div>
  );
}

function ContentBlockRenderer({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "explanation":
      return <ExplanationBlock block={block} />;
    case "dialogue":
      return <DialogueBlock block={block} />;
    case "grammar":
      return <GrammarBlock block={block} />;
    case "vocabulary":
      return <VocabularyBlock block={block} />;
    case "practice":
      return <PracticeBlock block={block} />;
    default:
      return null;
  }
}

// ---------------------------------------------------------------------------
// Lesson type badges
// ---------------------------------------------------------------------------

const lessonTypeBadge: Record<string, { bg: string; text: string }> = {
  Einführung: { bg: "bg-blue-100", text: "text-blue-800" },
  Grammatik: { bg: "bg-amber-100", text: "text-amber-800" },
  Fertigkeit: { bg: "bg-emerald-100", text: "text-emerald-800" },
  Integration: { bg: "bg-purple-100", text: "text-purple-800" },
};

// ---------------------------------------------------------------------------
// Page component
// ---------------------------------------------------------------------------

export default function LektionPage() {
  const params = useParams<{
    level: string;
    kapitel: string;
    lektion: string;
  }>();
  const t = useT();
  const { lang } = useLang();

  const levelId = params.level;
  const chapterId = Number(params.kapitel);
  const lektionNum = Number(params.lektion);

  const level = levels.find((l) => l.id === levelId);

  // Find the lesson
  const lesson = allLessons.find(
    (l) =>
      l.level === levelId &&
      l.chapterId === chapterId &&
      l.lessonNumber === lektionNum
  );

  // Find all lessons in same chapter for navigation
  const chapterLessons = allLessons
    .filter((l) => l.level === levelId && l.chapterId === chapterId)
    .sort((a, b) => a.lessonNumber - b.lessonNumber);

  const currentIndex = chapterLessons.findIndex(
    (l) => l.lessonNumber === lektionNum
  );
  const prevLesson = currentIndex > 0 ? chapterLessons[currentIndex - 1] : null;
  const nextLesson =
    currentIndex < chapterLessons.length - 1
      ? chapterLessons[currentIndex + 1]
      : null;

  // 404 states
  if (!level || !lesson) {
    return (
      <AppShell>
        <div className="min-h-screen flex flex-col items-center justify-center px-6">
          <div className="text-6xl font-extrabold text-gray-200">404</div>
          <h1 className="mt-4 text-2xl font-bold text-gray-900">
            {t("Không tìm thấy bài học", "Lektion nicht gefunden")}
          </h1>
          <p className="mt-2 text-gray-500">
            {t(
              `Bài học ${levelId?.toUpperCase()} > Kapitel ${chapterId} > Lektion ${lektionNum} không tồn tại.`,
              `Die Lektion ${levelId?.toUpperCase()} > Kapitel ${chapterId} > Lektion ${lektionNum} existiert nicht.`
            )}
          </p>
          <Link
            href={`/kurse/${levelId}`}
            className="mt-6 inline-flex items-center gap-2 text-blue-700 hover:text-blue-900 font-medium transition-colors"
          >
            <span>&larr;</span>
            {t("Quay lại khóa học", "Zurück zum Kurs")}
          </Link>
        </div>
      </AppShell>
    );
  }

  const { completeLesson, isLessonComplete, hydrated } = useProgress();
  const lessonDone = hydrated && isLessonComplete(lesson?.id ?? "");

  const badge = lessonTypeBadge[lesson.type] ?? {
    bg: "bg-gray-100",
    text: "text-gray-800",
  };
  const chapterTitle = level.chapters[chapterId - 1] ?? `Kapitel ${chapterId}`;

  return (
    <AppShell>
      {/* Header */}
      <section
        className={`relative bg-gradient-to-br ${level.color} text-white`}
      >
        <div className="max-w-5xl mx-auto px-6 py-12 md:py-16">
          {/* Breadcrumb */}
          <nav className="flex flex-wrap items-center gap-2 text-sm text-white/70 mb-6">
            <Link
              href="/kurse"
              className="hover:text-white transition-colors"
            >
              {t("Khóa học", "Kurse")}
            </Link>
            <span>/</span>
            <Link
              href={`/kurse/${levelId}`}
              className="hover:text-white transition-colors"
            >
              {level.name}
            </Link>
            <span>/</span>
            <Link
              href={`/kurse/${levelId}/${chapterId}`}
              className="hover:text-white transition-colors"
            >
              Kapitel {chapterId}
            </Link>
            <span>/</span>
            <span className="text-white font-medium">
              Lektion {lektionNum}
            </span>
          </nav>

          {/* Title area */}
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span
              className={`inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${badge.bg} ${badge.text}`}
            >
              {lesson.type}
            </span>
            <span className="text-white/60 text-sm">
              Lektion {lektionNum} / {chapterLessons.length}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            {t(lesson.titleVi, lesson.title)}
          </h1>
          <p className="mt-2 text-lg text-white/80">
            {t(lesson.title, lesson.titleVi)}
          </p>

          {/* Objectives */}
          {lesson.objectives.length > 0 && (
            <div className="mt-6 bg-white/10 backdrop-blur rounded-xl px-5 py-4">
              <p className="text-sm font-semibold text-white/90 uppercase tracking-wider mb-2">
                {t("Mục tiêu bài học", "Lernziele")}
              </p>
              <ul className="space-y-1">
                {lesson.objectives.map((obj, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-white/80"
                  >
                    <svg
                      className="w-4 h-4 mt-0.5 shrink-0 text-white/60"
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
            </div>
          )}
        </div>
      </section>

      {/* Content blocks */}
      <section className="bg-gray-50 min-h-[50vh]">
        <div className="max-w-4xl mx-auto px-6 py-10 space-y-6">
          {lesson.content.map((block, i) => (
            <ContentBlockRenderer key={i} block={block} />
          ))}
        </div>
      </section>

      {/* Mark complete */}
      <section className="bg-gray-50 pb-2">
        <div className="max-w-4xl mx-auto px-6">
          <button
            onClick={() => lesson && completeLesson(lesson.id)}
            disabled={lessonDone}
            className={`w-full py-4 rounded-2xl font-bold text-lg transition-all ${
              lessonDone
                ? "bg-emerald-100 text-emerald-700 cursor-default"
                : "bg-blue-600 text-white hover:bg-blue-700 active:scale-[0.98] shadow-md"
            }`}
          >
            {lessonDone
              ? t("✓ Bài học đã hoàn thành", "✓ Lektion abgeschlossen")
              : t("Đánh dấu hoàn thành", "Als abgeschlossen markieren")}
          </button>
        </div>
      </section>

      {/* Navigation */}
      <section className="bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between gap-4">
            {/* Previous */}
            {prevLesson ? (
              <Link
                href={`/kurse/${levelId}/${chapterId}/${prevLesson.lessonNumber}`}
                className="group flex items-center gap-3 text-left"
              >
                <svg
                  className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:-translate-x-1 transition-all shrink-0"
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
                <div>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">
                    {t("Bài trước", "Vorherige Lektion")}
                  </p>
                  <p className="text-sm font-semibold text-gray-700 group-hover:text-blue-700 transition-colors">
                    {t(prevLesson.titleVi, prevLesson.title)}
                  </p>
                </div>
              </Link>
            ) : (
              <Link
                href={`/kurse/${levelId}/${chapterId}`}
                className="group flex items-center gap-3 text-left"
              >
                <svg
                  className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:-translate-x-1 transition-all shrink-0"
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
                <div>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">
                    {t("Quay lại", "Zurück")}
                  </p>
                  <p className="text-sm font-semibold text-gray-700 group-hover:text-blue-700 transition-colors">
                    {chapterTitle}
                  </p>
                </div>
              </Link>
            )}

            {/* Chapter overview link */}
            <Link
              href={`/kurse/${levelId}/${chapterId}`}
              className="hidden md:flex items-center gap-2 text-sm text-gray-400 hover:text-blue-600 transition-colors"
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
                  d="M4 6h16M4 10h16M4 14h16M4 18h16"
                />
              </svg>
              {t("Tổng quan chương", "Kapitelübersicht")}
            </Link>

            {/* Next */}
            {nextLesson ? (
              <Link
                href={`/kurse/${levelId}/${chapterId}/${nextLesson.lessonNumber}`}
                className="group flex items-center gap-3 text-right"
              >
                <div>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">
                    {t("Bài tiếp", "Nächste Lektion")}
                  </p>
                  <p className="text-sm font-semibold text-gray-700 group-hover:text-blue-700 transition-colors">
                    {t(nextLesson.titleVi, nextLesson.title)}
                  </p>
                </div>
                <svg
                  className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all shrink-0"
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
              </Link>
            ) : (
              <Link
                href={`/kurse/${levelId}/${chapterId}`}
                className="group flex items-center gap-3 text-right"
              >
                <div>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">
                    {t("Hoàn thành", "Abgeschlossen")}
                  </p>
                  <p className="text-sm font-semibold text-gray-700 group-hover:text-blue-700 transition-colors">
                    {t("Quay lại chương", "Zurück zum Kapitel")}
                  </p>
                </div>
                <svg
                  className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all shrink-0"
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
              </Link>
            )}
          </div>
        </div>
      </section>
    </AppShell>
  );
}
