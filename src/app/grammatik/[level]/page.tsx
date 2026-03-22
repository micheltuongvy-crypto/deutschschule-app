"use client";

import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import AppShell from "@/components/AppShell";
import { useLang, useT } from "@/context/LangContext";

import { a1GrammarTopics } from "@/data/grammar/a1/grammar";
import { a2Grammar } from "@/data/grammar/a2/grammar";
import { b1Grammar } from "@/data/grammar/b1/grammar";
import { b2GrammarTopics } from "@/data/grammar/b2/grammar";
import { c1GrammarTopics } from "@/data/grammar/c1/grammar";
import { c2GrammarTopics } from "@/data/grammar/c2/grammar";
/* eslint-disable @typescript-eslint/no-explicit-any */

/* ─── DATA MAP ─── */
const grammarByLevel: Record<string, any[]> = {
  a1: a1GrammarTopics,
  a2: a2Grammar,
  b1: b1Grammar,
  b2: b2GrammarTopics,
  c1: c1GrammarTopics,
  c2: c2GrammarTopics,
};

const LEVELS = ["a1", "a2", "b1", "b2", "c1", "c2"] as const;

const levelColors: Record<string, { tab: string; tabActive: string; accent: string; bg: string }> = {
  a1: { tab: "hover:bg-blue-50 text-gray-600", tabActive: "bg-blue-600 text-white shadow-lg", accent: "text-blue-600", bg: "bg-blue-50" },
  a2: { tab: "hover:bg-sky-50 text-gray-600", tabActive: "bg-sky-600 text-white shadow-lg", accent: "text-sky-600", bg: "bg-sky-50" },
  b1: { tab: "hover:bg-indigo-50 text-gray-600", tabActive: "bg-indigo-600 text-white shadow-lg", accent: "text-indigo-600", bg: "bg-indigo-50" },
  b2: { tab: "hover:bg-violet-50 text-gray-600", tabActive: "bg-violet-600 text-white shadow-lg", accent: "text-violet-600", bg: "bg-violet-50" },
  c1: { tab: "hover:bg-purple-50 text-gray-600", tabActive: "bg-purple-600 text-white shadow-lg", accent: "text-purple-600", bg: "bg-purple-50" },
  c2: { tab: "hover:bg-fuchsia-50 text-gray-600", tabActive: "bg-fuchsia-700 text-white shadow-lg", accent: "text-fuchsia-700", bg: "bg-fuchsia-50" },
};

/* ─── EXERCISE CARD ─── */
function ExerciseCard({ exercise, index }: { exercise: any; index: number }) {
  const [revealed, setRevealed] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const t = useT();

  const isMultipleChoice = exercise.options && exercise.options.length > 0;

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      <div className="flex items-start gap-3">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gray-100 text-sm font-bold text-gray-500">
          {index + 1}
        </span>
        <div className="flex-1">
          <p className="font-medium text-gray-800">{exercise.question}</p>
          <p className="mt-0.5 text-sm text-gray-500">{exercise.questionVi}</p>

          {isMultipleChoice ? (
            <div className="mt-3 flex flex-wrap gap-2">
              {exercise.options!.map((opt: string) => {
                const isCorrect = opt === exercise.answer;
                const isSelected = opt === selected;
                let btnClass =
                  "px-4 py-2 rounded-lg text-sm font-medium border transition-all duration-200 ";
                if (!selected) {
                  btnClass += "border-gray-200 bg-gray-50 hover:bg-gray-100 text-gray-700 cursor-pointer";
                } else if (isSelected && isCorrect) {
                  btnClass += "border-emerald-400 bg-emerald-50 text-emerald-700 ring-2 ring-emerald-300";
                } else if (isSelected && !isCorrect) {
                  btnClass += "border-red-400 bg-red-50 text-red-700 ring-2 ring-red-300";
                } else if (isCorrect) {
                  btnClass += "border-emerald-400 bg-emerald-50 text-emerald-700";
                } else {
                  btnClass += "border-gray-200 bg-gray-50 text-gray-400";
                }
                return (
                  <button
                    key={opt}
                    onClick={() => !selected && setSelected(opt)}
                    disabled={!!selected}
                    className={btnClass}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          ) : (
            <button
              onClick={() => setRevealed(!revealed)}
              className="mt-3 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
            >
              {revealed
                ? t("An di dap an", "Antwort verbergen")
                : t("Xem dap an", "Antwort anzeigen")}
            </button>
          )}

          {/* Answer / Explanation */}
          <div
            className={`grid transition-all duration-300 ease-in-out ${
              revealed || selected ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <div className="rounded-lg bg-emerald-50 border border-emerald-200 p-3">
                <p className="text-sm font-semibold text-emerald-800">
                  {t("Dap an", "Antwort")}: {exercise.answer}
                </p>
                <p className="mt-1 text-sm text-emerald-700">{exercise.explanation}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── ACCORDION TOPIC CARD ─── */
function TopicCard({ topic, isOpen, onToggle, level }: {
  topic: any;
  isOpen: boolean;
  onToggle: () => void;
  level: string;
}) {
  const t = useT();
  const colors = levelColors[level] || levelColors.a1;

  return (
    <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden transition-shadow duration-300 hover:shadow-md">
      {/* Header */}
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-gray-50/60"
      >
        <div className="flex items-center gap-4 min-w-0">
          <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${colors.bg} ${colors.accent} font-bold text-sm`}>
            {topic.order}
          </span>
          <div className="min-w-0">
            <h3 className="font-bold text-gray-900 truncate">{topic.title}</h3>
            <p className="text-sm text-gray-500 truncate">{topic.titleVi}</p>
          </div>
        </div>
        <svg
          className={`h-5 w-5 shrink-0 text-gray-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Expandable body */}
      <div
        className={`grid transition-all duration-400 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-gray-100 px-6 py-6 space-y-8">

            {/* ── Vietnamese Explanation ── */}
            <section>
              <h4 className={`text-lg font-bold ${colors.accent} mb-3 flex items-center gap-2`}>
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {t("Giai thich", "Erklarung")}
              </h4>
              <div className="rounded-xl bg-gray-50 p-5 text-gray-700 leading-relaxed whitespace-pre-line text-[15px]">
                {topic.explanation}
              </div>
            </section>

            {/* ── Rules with Examples ── */}
            <section>
              <h4 className={`text-lg font-bold ${colors.accent} mb-3 flex items-center gap-2`}>
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                {t("Quy tac", "Regeln")}
              </h4>
              <div className="space-y-4">
                {topic.rules.map((rule, ri) => (
                  <div key={ri} className="rounded-xl border border-gray-200 overflow-hidden">
                    <div className={`${colors.bg} px-5 py-3`}>
                      <p className="font-semibold text-gray-900 text-sm">{rule.rule}</p>
                      <p className="text-sm text-gray-600 mt-0.5">{rule.ruleVi}</p>
                    </div>
                    <div className="divide-y divide-gray-100">
                      {rule.examples.map((ex, ei) => (
                        <div key={ei} className="grid grid-cols-2 gap-4 px-5 py-3 text-sm">
                          <span className="font-medium text-gray-900">{ex.de}</span>
                          <span className="text-gray-500">{ex.vi}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── Common Mistakes ── */}
            {topic.commonMistakes.length > 0 && (
              <section>
                <h4 className="text-lg font-bold text-red-600 mb-3 flex items-center gap-2">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                  {t("Loi thuong gap", "Haufige Fehler")}
                </h4>
                <div className="space-y-3">
                  {topic.commonMistakes.map((m, mi) => (
                    <div key={mi} className="rounded-xl border border-red-100 bg-red-50/50 p-4">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                        <div className="flex items-center gap-2">
                          <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-red-100">
                            <svg className="h-4 w-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </span>
                          <span className="text-red-700 line-through font-medium text-sm">{m.wrong}</span>
                        </div>
                        <svg className="hidden sm:block h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                        <div className="flex items-center gap-2">
                          <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-emerald-100">
                            <svg className="h-4 w-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                          <span className="text-emerald-700 font-semibold text-sm">{m.correct}</span>
                        </div>
                      </div>
                      <p className="mt-2 text-sm text-gray-600 pl-8">{m.explanation}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* ── Vietnamese Language Comparison ── */}
            {topic.vietnameseComparison && (
              <section>
                <h4 className={`text-lg font-bold ${colors.accent} mb-3 flex items-center gap-2`}>
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                  {t("So sanh voi tieng Viet", "Vergleich mit Vietnamesisch")}
                </h4>
                <div className="rounded-xl bg-amber-50 border border-amber-200 p-5 text-gray-700 leading-relaxed whitespace-pre-line text-[15px]">
                  {topic.vietnameseComparison}
                </div>
              </section>
            )}

            {/* ── Exercises ── */}
            {topic.exercises.length > 0 && (
              <section>
                <h4 className={`text-lg font-bold ${colors.accent} mb-3 flex items-center gap-2`}>
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                  {t("Bai tap nhanh", "Schnellubungen")}
                </h4>
                <div className="space-y-3">
                  {topic.exercises.map((ex, ei) => (
                    <ExerciseCard key={ei} exercise={ex} index={ei} />
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── MAIN PAGE ─── */
export default function GrammatikLevelPage() {
  const params = useParams<{ level: string }>();
  const router = useRouter();
  const t = useT();
  const { lang } = useLang();

  const level = (params.level || "a1").toLowerCase();
  const [openTopic, setOpenTopic] = useState<string | null>(null);

  const topics = grammarByLevel[level] || [];
  const colors = levelColors[level] || levelColors.a1;

  return (
    <AppShell>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* ── Header ── */}
        <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
          <div className="max-w-5xl mx-auto px-6 py-12">
            <p className="text-sm font-medium text-gray-400 uppercase tracking-wider">
              {t("Ngu phap tieng Duc", "Deutsche Grammatik")}
            </p>
            <h1 className="mt-2 text-4xl md:text-5xl font-extrabold tracking-tight">
              {t("Ngu phap", "Grammatik")}{" "}
              <span className="text-yellow-400">{level.toUpperCase()}</span>
            </h1>
            <p className="mt-3 text-gray-300 text-lg">
              {topics.length} {t("chu de", "Themen")}
              {lang === "vi"
                ? " — Giai thich bang tieng Viet, vi du thuc te"
                : " — Erklarung auf Vietnamesisch, praktische Beispiele"}
            </p>
          </div>
        </div>

        {/* ── Level Tabs ── */}
        <div className="sticky top-0 z-30 bg-white/80 backdrop-blur-lg border-b border-gray-200">
          <div className="max-w-5xl mx-auto px-6">
            <div className="flex gap-1 py-3 overflow-x-auto no-scrollbar">
              {LEVELS.map((lvl) => {
                const isActive = lvl === level;
                const c = levelColors[lvl];
                return (
                  <button
                    key={lvl}
                    onClick={() => router.push(`/grammatik/${lvl}`)}
                    className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 whitespace-nowrap ${
                      isActive ? c.tabActive : c.tab
                    }`}
                  >
                    {lvl.toUpperCase()}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── Topic List ── */}
        <div className="max-w-5xl mx-auto px-6 py-8">
          {topics.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">📚</div>
              <h2 className="text-2xl font-bold text-gray-900">
                {t("Chua co noi dung", "Noch keine Inhalte")}
              </h2>
              <p className="mt-2 text-gray-500">
                {t(
                  "Noi dung ngu phap cho cap do nay dang duoc xay dung.",
                  "Grammatikinhalte fur dieses Niveau werden gerade erstellt."
                )}
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {topics
                .sort((a, b) => a.chapter - b.chapter || a.order - b.order)
                .map((topic) => (
                  <TopicCard
                    key={topic.id}
                    topic={topic}
                    level={level}
                    isOpen={openTopic === topic.id}
                    onToggle={() => setOpenTopic(openTopic === topic.id ? null : topic.id)}
                  />
                ))}
            </div>
          )}
        </div>
      </div>
    </AppShell>
  );
}
