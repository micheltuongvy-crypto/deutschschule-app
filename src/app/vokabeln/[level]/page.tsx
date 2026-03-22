"use client";

import { useState, useMemo } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import AppShell from "@/components/AppShell";
import { useT } from "@/context/LangContext";
import { levels } from "@/data/levels";
import type { VocabWord } from "@/data/vocabulary/a1_ch1_3";

// A1: ch1_3 + ch4_5 + ch6_7 + ch8_10
import { a1VocabCh1_3 } from "@/data/vocabulary/a1_ch1_3";
import { a1VocabCh4_5 } from "@/data/vocabulary/a1_ch4_5";
import { a1VocabCh6_7 } from "@/data/vocabulary/a1_ch6_7";
import { a1VocabCh8_10 } from "@/data/vocabulary/a1_ch8_10";

// A2: ch1_5 + ch6_10 (clean coverage)
import { a2VocabularyCh1_5 } from "@/data/vocabulary/a2_ch1_5";
import { a2VocabularyCh6_10 } from "@/data/vocabulary/a2_ch6_10";

// B1: ch1_5 + ch6_10
import { b1VocabularyCh1_5 } from "@/data/vocabulary/b1_ch1_5";
import { b1VocabularyCh6_10 } from "@/data/vocabulary/b1_ch6_10";

// B2: ch1_5 + ch6_10
import { b2VocabularyCh1_5 } from "@/data/vocabulary/b2_ch1_5";
import { b2VocabularyCh6_10 } from "@/data/vocabulary/b2_ch6_10";

// C1: ch1_3 + ch4_5 + ch6_10
import { c1VocabularyCh1_3 } from "@/data/vocabulary/c1_ch1_3";
import { c1VocabularyCh4_5 } from "@/data/vocabulary/c1_ch4_5";
import { c1VocabularyCh6_10 } from "@/data/vocabulary/c1_ch6_10";

// C2: ch1_3 + ch4_5 + ch6_8 + ch9_10
import { c2VocabularyCh1_3 } from "@/data/vocabulary/c2_ch1_3";
import { c2VocabularyCh4_5 } from "@/data/vocabulary/c2_ch4_5";
import { c2VocabularyCh6_8 } from "@/data/vocabulary/c2_ch6_8";
import { c2VocabularyCh9_10 } from "@/data/vocabulary/c2_ch9_10";

// Combined vocabulary per level
const vocabByLevel: Record<string, VocabWord[]> = {
  a1: [
    ...a1VocabCh1_3,
    ...a1VocabCh4_5,
    ...a1VocabCh6_7,
    ...a1VocabCh8_10,
  ],
  a2: [
    ...(a2VocabularyCh1_5 as unknown as VocabWord[]),
    ...(a2VocabularyCh6_10 as unknown as VocabWord[]),
  ],
  b1: [
    ...(b1VocabularyCh1_5 as unknown as VocabWord[]),
    ...(b1VocabularyCh6_10 as unknown as VocabWord[]),
  ],
  b2: [
    ...(b2VocabularyCh1_5 as unknown as VocabWord[]),
    ...(b2VocabularyCh6_10 as unknown as VocabWord[]),
  ],
  c1: [
    ...(c1VocabularyCh1_3 as unknown as VocabWord[]),
    ...(c1VocabularyCh4_5 as unknown as VocabWord[]),
    ...(c1VocabularyCh6_10 as unknown as VocabWord[]),
  ],
  c2: [
    ...(c2VocabularyCh1_3 as unknown as VocabWord[]),
    ...(c2VocabularyCh4_5 as unknown as VocabWord[]),
    ...(c2VocabularyCh6_8 as unknown as VocabWord[]),
    ...(c2VocabularyCh9_10 as unknown as VocabWord[]),
  ],
};

const articleColor: Record<string, string> = {
  der: "text-blue-600",
  die: "text-red-500",
  das: "text-green-600",
};

const levelTabColors: Record<string, string> = {
  a1: "bg-green-500",
  a2: "bg-blue-500",
  b1: "bg-yellow-500",
  b2: "bg-purple-500",
  c1: "bg-red-500",
  c2: "bg-gray-700",
};

export default function VokabelnLevelPage() {
  const params = useParams();
  const t = useT();
  const levelId = (params.level as string)?.toLowerCase();

  const level = levels.find((l) => l.id === levelId);

  const [search, setSearch] = useState("");
  const [chapterFilter, setChapterFilter] = useState<number | "all">("all");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const allWords = useMemo(() => vocabByLevel[levelId] ?? [], [levelId]);

  const chapters = useMemo(() => {
    const set = new Set(allWords.map((w) => w.chapter));
    return Array.from(set).sort((a, b) => a - b);
  }, [allWords]);

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    return allWords.filter((w) => {
      if (chapterFilter !== "all" && w.chapter !== chapterFilter) return false;
      if (q) {
        return (
          w.word.toLowerCase().includes(q) ||
          w.translation.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [allWords, search, chapterFilter]);

  if (!level) {
    return (
      <AppShell>
        <div className="min-h-screen flex flex-col items-center justify-center px-6">
          <div className="text-6xl font-extrabold text-gray-200">404</div>
          <h1 className="mt-4 text-2xl font-bold text-gray-900">
            {t("Khong tim thay cap do", "Niveau nicht gefunden")}
          </h1>
          <p className="mt-2 text-gray-500">
            {t(
              `Cap do "${levelId}" khong ton tai.`,
              `Das Niveau "${levelId}" existiert nicht.`
            )}
          </p>
          <Link
            href="/kurse"
            className="mt-6 inline-flex items-center gap-2 text-blue-700 hover:text-blue-900 font-medium transition-colors"
          >
            <span>&larr;</span>
            {t("Quay lai", "Zuruck")}
          </Link>
        </div>
      </AppShell>
    );
  }

  return (
    <AppShell>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
            {/* Level tabs */}
            <div className="flex gap-2 mb-4 overflow-x-auto pb-1">
              {levels.map((l) => (
                <Link
                  key={l.id}
                  href={`/vokabeln/${l.id}`}
                  className={`px-4 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
                    l.id === levelId
                      ? `${levelTabColors[l.id]} text-white shadow-md scale-105`
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {l.name}
                </Link>
              ))}
            </div>

            {/* Title + count */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  {t(`Tu vung ${level.name}`, `Vokabeln ${level.name}`)}
                </h1>
                <p className="text-sm text-gray-500">
                  {t(level.titleVi, level.titleDe)}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${levelTabColors[levelId]} text-white`}>
                  {filtered.length} {t("tu", "Worter")}
                </span>
                {chapterFilter !== "all" || search ? (
                  <span className="text-xs text-gray-400">
                    / {allWords.length} {t("tong cong", "gesamt")}
                  </span>
                ) : null}
              </div>
            </div>

            {/* Search + filter */}
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <svg
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder={t(
                    "Tim kiem tu vung (tieng Duc hoac tieng Viet)...",
                    "Vokabeln suchen (Deutsch oder Vietnamesisch)..."
                  )}
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm"
                />
                {search && (
                  <button
                    onClick={() => setSearch("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>

              <select
                value={chapterFilter === "all" ? "all" : chapterFilter}
                onChange={(e) =>
                  setChapterFilter(
                    e.target.value === "all" ? "all" : Number(e.target.value)
                  )
                }
                className="px-4 py-2.5 border border-gray-300 rounded-xl bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm min-w-[180px]"
              >
                <option value="all">
                  {t("Tat ca chuong", "Alle Kapitel")}
                </option>
                {chapters.map((ch) => (
                  <option key={ch} value={ch}>
                    {t(`Chuong ${ch}`, `Kapitel ${ch}`)}
                    {level.chapters[ch - 1]
                      ? ` - ${level.chapters[ch - 1]}`
                      : ""}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Word grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-5xl mb-4 opacity-30">?</div>
              <p className="text-gray-500 text-lg">
                {t(
                  "Khong tim thay tu vung nao.",
                  "Keine Vokabeln gefunden."
                )}
              </p>
              <button
                onClick={() => {
                  setSearch("");
                  setChapterFilter("all");
                }}
                className="mt-4 text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors"
              >
                {t("Xoa bo loc", "Filter zurucksetzen")}
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filtered.map((word) => {
                const isExpanded = expandedId === word.id;
                return (
                  <div
                    key={word.id}
                    onClick={() =>
                      setExpandedId(isExpanded ? null : word.id)
                    }
                    className={`group relative bg-white rounded-2xl border transition-all duration-200 cursor-pointer select-none ${
                      isExpanded
                        ? "border-blue-300 shadow-lg shadow-blue-100 ring-1 ring-blue-200"
                        : "border-gray-200 hover:border-gray-300 hover:shadow-md"
                    }`}
                  >
                    <div className="p-4">
                      {/* Word + article */}
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="text-lg font-bold text-gray-900 leading-tight">
                          {word.article ? (
                            <span
                              className={`${
                                articleColor[word.article] ?? "text-gray-400"
                              } font-semibold mr-1`}
                            >
                              {word.article}
                            </span>
                          ) : null}
                          {word.word}
                        </h3>

                        {/* Word type badge */}
                        <span className="shrink-0 inline-flex items-center px-2 py-0.5 rounded-md bg-gray-100 text-[11px] font-medium text-gray-500 uppercase tracking-wide">
                          {word.wordType}
                        </span>
                      </div>

                      {/* Plural */}
                      {word.plural && (
                        <p className="text-xs text-gray-400 -mt-1 mb-1.5">
                          Pl. {word.plural}
                        </p>
                      )}

                      {/* Translation */}
                      <p className="text-sm text-gray-600 leading-snug">
                        {word.translation}
                      </p>

                      {/* Chapter + topic */}
                      <div className="flex items-center gap-2 mt-3">
                        <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-gray-50 text-gray-400 border border-gray-100">
                          Kap. {word.chapter}
                        </span>
                        <span className="text-[10px] text-gray-400 truncate">
                          {word.topic}
                        </span>
                      </div>

                      {/* Expandable example */}
                      {isExpanded && (
                        <div className="mt-3 pt-3 border-t border-gray-100 space-y-1.5 animate-in fade-in slide-in-from-top-1 duration-200">
                          <p className="text-sm text-gray-800 italic leading-snug">
                            &ldquo;{word.example}&rdquo;
                          </p>
                          <p className="text-xs text-gray-500 leading-snug">
                            {word.exampleTranslation}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Expand indicator */}
                    <div
                      className={`absolute bottom-2 right-3 transition-transform duration-200 ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                    >
                      <svg
                        className="w-3.5 h-3.5 text-gray-300 group-hover:text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </AppShell>
  );
}
