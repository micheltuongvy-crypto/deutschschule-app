"use client";

import { useParams, useRouter } from "next/navigation";
import { useState, useMemo, useCallback, useEffect } from "react";
import AppShell from "@/components/AppShell";
import { useT } from "@/context/LangContext";

import { a1ExercisesCh1_5 } from "@/data/exercises/a1/exercises_ch1_5";
import { a1ExercisesCh6_10 } from "@/data/exercises/a1/exercises_ch6_10";
import { a2Exercises } from "@/data/exercises/a2/exercises";
import { b1Exercises } from "@/data/exercises/b1/exercises";
import { b2Exercises } from "@/data/exercises/b2/exercises";
import { c1Exercises } from "@/data/exercises/c1/exercises";
import { c2Exercises } from "@/data/exercises/c2/exercises";

/* ─── Unified Exercise type covering all levels ─── */
interface Exercise {
  id: string;
  chapterId: number;
  type: string;
  difficulty: 1 | 2 | 3;
  questionDe: string;
  questionVi: string;
  options?: string[];
  correctAnswer: string;
  explanation: string;
  hint?: string;
  topic: string;
}

/* ─── DATA ─── */
const LEVELS = ["a1", "a2", "b1", "b2", "c1", "c2"] as const;
type Level = (typeof LEVELS)[number];

const exercisesByLevel: Record<Level, Exercise[]> = {
  a1: [...a1ExercisesCh1_5, ...a1ExercisesCh6_10],
  a2: a2Exercises,
  b1: b1Exercises,
  b2: b2Exercises,
  c1: c1Exercises,
  c2: c2Exercises,
};

/* ─── HELPERS ─── */
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function normalizeAnswer(s: string): string {
  return s.trim().toLowerCase().replace(/\s+/g, " ");
}

/* ─── EXERCISE RENDERERS ─── */

interface ExerciseRendererProps {
  exercise: Exercise;
  onAnswer: (correct: boolean, answer?: string) => void;
  answered: boolean;
  selectedAnswer: string | null;
  t: (vi: string, de: string) => string;
}

function MultipleChoiceRenderer({ exercise, onAnswer, answered, selectedAnswer, t }: ExerciseRendererProps) {
  const options = exercise.options ?? [];
  return (
    <div className="space-y-3">
      {options.map((opt) => {
        const isCorrect = normalizeAnswer(opt) === normalizeAnswer(exercise.correctAnswer);
        const isSelected = selectedAnswer === opt;
        let cls =
          "w-full text-left px-5 py-3.5 rounded-xl border-2 font-medium transition-all duration-200 ";
        if (!answered) {
          cls += "border-gray-200 hover:border-blue-400 hover:bg-blue-50 active:scale-[0.98] cursor-pointer";
        } else if (isSelected && isCorrect) {
          cls += "border-emerald-500 bg-emerald-50 text-emerald-800 ring-2 ring-emerald-200";
        } else if (isSelected && !isCorrect) {
          cls += "border-red-400 bg-red-50 text-red-800 ring-2 ring-red-200";
        } else if (isCorrect) {
          cls += "border-emerald-500 bg-emerald-50 text-emerald-700";
        } else {
          cls += "border-gray-100 text-gray-400";
        }
        return (
          <button
            key={opt}
            disabled={answered}
            className={cls}
            onClick={() => onAnswer(isCorrect, opt)}
          >
            {opt}
            {answered && isCorrect && <span className="ml-2">&#10003;</span>}
            {answered && isSelected && !isCorrect && <span className="ml-2">&#10007;</span>}
          </button>
        );
      })}
    </div>
  );
}

function FillBlankRenderer({ exercise, onAnswer, answered, selectedAnswer, t }: ExerciseRendererProps) {
  const [input, setInput] = useState("");
  const hasOptions = exercise.options && exercise.options.length > 0;

  if (hasOptions) {
    return (
      <div className="space-y-3">
        <p className="text-gray-500 text-sm italic mb-2">{t("Chọn từ đúng để điền vào chỗ trống:", "Wähle das richtige Wort:")}</p>
        {exercise.options!.map((opt) => {
          const isCorrect = normalizeAnswer(opt) === normalizeAnswer(exercise.correctAnswer);
          const isSelected = selectedAnswer === opt;
          let cls = "px-5 py-3 rounded-xl border-2 font-medium transition-all duration-200 ";
          if (!answered) {
            cls += "border-gray-200 hover:border-blue-400 hover:bg-blue-50 cursor-pointer";
          } else if (isSelected && isCorrect) {
            cls += "border-emerald-500 bg-emerald-50 text-emerald-800";
          } else if (isSelected && !isCorrect) {
            cls += "border-red-400 bg-red-50 text-red-800";
          } else if (isCorrect) {
            cls += "border-emerald-500 bg-emerald-50 text-emerald-700";
          } else {
            cls += "border-gray-100 text-gray-400";
          }
          return (
            <button key={opt} disabled={answered} className={cls} onClick={() => onAnswer(isCorrect, opt)}>
              {opt}
            </button>
          );
        })}
      </div>
    );
  }

  const correct = normalizeAnswer(input) === normalizeAnswer(exercise.correctAnswer);
  return (
    <div className="space-y-3">
      <input
        type="text"
        value={answered ? (selectedAnswer ?? "") : input}
        onChange={(e) => setInput(e.target.value)}
        disabled={answered}
        placeholder={t("Nhập câu trả lời...", "Antwort eingeben...")}
        className={`w-full px-5 py-3.5 rounded-xl border-2 text-lg outline-none transition-all ${
          answered
            ? correct
              ? "border-emerald-500 bg-emerald-50"
              : "border-red-400 bg-red-50"
            : "border-gray-200 focus:border-blue-400"
        }`}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !answered && input.trim()) onAnswer(correct, input);
        }}
      />
      {!answered && (
        <button
          onClick={() => input.trim() && onAnswer(correct, input)}
          disabled={!input.trim()}
          className="px-6 py-2.5 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 disabled:opacity-40 transition-all"
        >
          {t("Kiểm tra", "Prüfen")}
        </button>
      )}
    </div>
  );
}

function TrueFalseRenderer({ exercise, onAnswer, answered, selectedAnswer, t }: ExerciseRendererProps) {
  const options = [
    { label: "Richtig", labelVi: "Đúng" },
    { label: "Falsch", labelVi: "Sai" },
  ];
  return (
    <div className="flex gap-4">
      {options.map(({ label, labelVi }) => {
        const isCorrect = normalizeAnswer(label) === normalizeAnswer(exercise.correctAnswer);
        const isSelected = selectedAnswer === label;
        let cls =
          "flex-1 py-4 rounded-xl border-2 font-bold text-lg transition-all duration-200 ";
        if (!answered) {
          cls += "border-gray-200 hover:border-blue-400 hover:bg-blue-50 cursor-pointer";
        } else if (isSelected && isCorrect) {
          cls += "border-emerald-500 bg-emerald-50 text-emerald-800";
        } else if (isSelected && !isCorrect) {
          cls += "border-red-400 bg-red-50 text-red-800";
        } else if (isCorrect) {
          cls += "border-emerald-500 bg-emerald-50 text-emerald-700";
        } else {
          cls += "border-gray-100 text-gray-400";
        }
        return (
          <button
            key={label}
            disabled={answered}
            className={cls}
            onClick={() => onAnswer(isCorrect, label)}
          >
            {t(labelVi, label)}
          </button>
        );
      })}
    </div>
  );
}

function TranslateRenderer({ exercise, onAnswer, answered, selectedAnswer, t }: ExerciseRendererProps) {
  const [input, setInput] = useState("");
  const correct = normalizeAnswer(input) === normalizeAnswer(exercise.correctAnswer);
  return (
    <div className="space-y-3">
      <p className="text-sm text-gray-500 italic">{t("Dịch sang tiếng Đức:", "Übersetze ins Deutsche:")}</p>
      <input
        type="text"
        value={answered ? (selectedAnswer ?? "") : input}
        onChange={(e) => setInput(e.target.value)}
        disabled={answered}
        placeholder={t("Nhập bản dịch...", "Übersetzung eingeben...")}
        className={`w-full px-5 py-3.5 rounded-xl border-2 text-lg outline-none transition-all ${
          answered
            ? correct
              ? "border-emerald-500 bg-emerald-50"
              : "border-red-400 bg-red-50"
            : "border-gray-200 focus:border-blue-400"
        }`}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !answered && input.trim()) onAnswer(correct, input);
        }}
      />
      {!answered && (
        <button
          onClick={() => input.trim() && onAnswer(correct, input)}
          disabled={!input.trim()}
          className="px-6 py-2.5 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 disabled:opacity-40 transition-all"
        >
          {t("Kiểm tra", "Prüfen")}
        </button>
      )}
      {answered && !correct && (
        <p className="text-sm text-gray-600">
          {t("Đáp án đúng:", "Richtige Antwort:")} <span className="font-semibold text-emerald-700">{exercise.correctAnswer}</span>
        </p>
      )}
    </div>
  );
}

function MatchingRenderer({ exercise, onAnswer, answered, selectedAnswer, t }: ExerciseRendererProps) {
  // Matching exercises: options are potential matches, correctAnswer is the right one
  const options = exercise.options ?? [];
  return (
    <div className="space-y-3">
      <p className="text-sm text-gray-500 italic mb-2">{t("Chọn câu trả lời phù hợp:", "Wähle die passende Antwort:")}</p>
      {options.map((opt) => {
        const isCorrect = normalizeAnswer(opt) === normalizeAnswer(exercise.correctAnswer);
        const isSelected = selectedAnswer === opt;
        let cls = "w-full text-left px-5 py-3 rounded-xl border-2 font-medium transition-all duration-200 ";
        if (!answered) {
          cls += "border-gray-200 hover:border-purple-400 hover:bg-purple-50 cursor-pointer";
        } else if (isSelected && isCorrect) {
          cls += "border-emerald-500 bg-emerald-50 text-emerald-800";
        } else if (isSelected && !isCorrect) {
          cls += "border-red-400 bg-red-50 text-red-800";
        } else if (isCorrect) {
          cls += "border-emerald-500 bg-emerald-50 text-emerald-700";
        } else {
          cls += "border-gray-100 text-gray-400";
        }
        return (
          <button key={opt} disabled={answered} className={cls} onClick={() => onAnswer(isCorrect, opt)}>
            {opt}
          </button>
        );
      })}
    </div>
  );
}

function ReorderRenderer({ exercise, onAnswer, answered, selectedAnswer, t }: ExerciseRendererProps) {
  const words = useMemo(() => shuffle((exercise.options ?? exercise.correctAnswer.split(" "))), [exercise]);
  const [selected, setSelected] = useState<string[]>([]);
  const [remaining, setRemaining] = useState<string[]>(words);

  const addWord = (word: string, idx: number) => {
    if (answered) return;
    setSelected((prev) => [...prev, word]);
    setRemaining((prev) => prev.filter((_, i) => i !== idx));
  };

  const removeWord = (word: string, idx: number) => {
    if (answered) return;
    setRemaining((prev) => [...prev, word]);
    setSelected((prev) => prev.filter((_, i) => i !== idx));
  };

  const sentence = selected.join(" ");
  const correct = normalizeAnswer(sentence) === normalizeAnswer(exercise.correctAnswer);

  return (
    <div className="space-y-4">
      <p className="text-sm text-gray-500 italic">{t("Sắp xếp các từ thành câu đúng:", "Ordne die Wörter zum richtigen Satz:")}</p>
      {/* Answer area */}
      <div
        className={`min-h-[56px] p-3 rounded-xl border-2 flex flex-wrap gap-2 transition-all ${
          answered
            ? correct
              ? "border-emerald-500 bg-emerald-50"
              : "border-red-400 bg-red-50"
            : "border-blue-200 bg-blue-50/30"
        }`}
      >
        {selected.length === 0 && (
          <span className="text-gray-400 text-sm italic">{t("Nhấn vào từ bên dưới...", "Klicke auf die Wörter unten...")}</span>
        )}
        {selected.map((w, i) => (
          <button
            key={`${w}-${i}`}
            onClick={() => removeWord(w, i)}
            disabled={answered}
            className="px-3 py-1.5 rounded-lg bg-blue-600 text-white font-medium text-sm hover:bg-blue-700 transition-all"
          >
            {w}
          </button>
        ))}
      </div>
      {/* Word chips */}
      <div className="flex flex-wrap gap-2">
        {remaining.map((w, i) => (
          <button
            key={`${w}-${i}`}
            onClick={() => addWord(w, i)}
            disabled={answered}
            className="px-3 py-1.5 rounded-lg border-2 border-gray-200 bg-white font-medium text-sm hover:border-blue-400 hover:bg-blue-50 transition-all cursor-pointer"
          >
            {w}
          </button>
        ))}
      </div>
      {!answered && selected.length > 0 && (
        <button
          onClick={() => onAnswer(correct, sentence)}
          className="px-6 py-2.5 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all"
        >
          {t("Kiểm tra", "Prüfen")}
        </button>
      )}
      {answered && !correct && (
        <p className="text-sm text-gray-600">
          {t("Đáp án đúng:", "Richtige Antwort:")} <span className="font-semibold text-emerald-700">{exercise.correctAnswer}</span>
        </p>
      )}
    </div>
  );
}

function ArticleChoiceRenderer({ exercise, onAnswer, answered, selectedAnswer, t }: ExerciseRendererProps) {
  const articles = exercise.options ?? ["der", "die", "das"];
  return (
    <div className="space-y-3">
      <p className="text-sm text-gray-500 italic mb-2">{t("Chọn mạo từ đúng:", "Wähle den richtigen Artikel:")}</p>
      <div className="flex gap-3">
        {articles.map((art) => {
          const isCorrect = normalizeAnswer(art) === normalizeAnswer(exercise.correctAnswer);
          const isSelected = selectedAnswer === art;
          let cls = "flex-1 py-4 rounded-xl border-2 font-bold text-lg transition-all duration-200 ";
          if (!answered) {
            cls += "border-gray-200 hover:border-amber-400 hover:bg-amber-50 cursor-pointer";
          } else if (isSelected && isCorrect) {
            cls += "border-emerald-500 bg-emerald-50 text-emerald-800";
          } else if (isSelected && !isCorrect) {
            cls += "border-red-400 bg-red-50 text-red-800";
          } else if (isCorrect) {
            cls += "border-emerald-500 bg-emerald-50 text-emerald-700";
          } else {
            cls += "border-gray-100 text-gray-400";
          }
          return (
            <button key={art} disabled={answered} className={cls} onClick={() => onAnswer(isCorrect, art)}>
              {art}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function ConjugationRenderer({ exercise, onAnswer, answered, selectedAnswer, t }: ExerciseRendererProps) {
  // Similar to fillBlank but with conjugation context
  const hasOptions = exercise.options && exercise.options.length > 0;
  const [input, setInput] = useState("");

  if (hasOptions) {
    return (
      <div className="space-y-3">
        <p className="text-sm text-gray-500 italic mb-2">{t("Chọn dạng chia động từ đúng:", "Wähle die richtige Konjugation:")}</p>
        {exercise.options!.map((opt) => {
          const isCorrect = normalizeAnswer(opt) === normalizeAnswer(exercise.correctAnswer);
          const isSelected = selectedAnswer === opt;
          let cls = "w-full text-left px-5 py-3 rounded-xl border-2 font-medium transition-all duration-200 ";
          if (!answered) {
            cls += "border-gray-200 hover:border-indigo-400 hover:bg-indigo-50 cursor-pointer";
          } else if (isSelected && isCorrect) {
            cls += "border-emerald-500 bg-emerald-50 text-emerald-800";
          } else if (isSelected && !isCorrect) {
            cls += "border-red-400 bg-red-50 text-red-800";
          } else if (isCorrect) {
            cls += "border-emerald-500 bg-emerald-50 text-emerald-700";
          } else {
            cls += "border-gray-100 text-gray-400";
          }
          return (
            <button key={opt} disabled={answered} className={cls} onClick={() => onAnswer(isCorrect, opt)}>
              {opt}
            </button>
          );
        })}
      </div>
    );
  }

  const correct = normalizeAnswer(input) === normalizeAnswer(exercise.correctAnswer);
  return (
    <div className="space-y-3">
      <input
        type="text"
        value={answered ? (selectedAnswer ?? "") : input}
        onChange={(e) => setInput(e.target.value)}
        disabled={answered}
        placeholder={t("Nhập dạng chia động từ...", "Konjugation eingeben...")}
        className={`w-full px-5 py-3.5 rounded-xl border-2 text-lg outline-none transition-all ${
          answered ? (correct ? "border-emerald-500 bg-emerald-50" : "border-red-400 bg-red-50") : "border-gray-200 focus:border-blue-400"
        }`}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !answered && input.trim()) onAnswer(correct, input);
        }}
      />
      {!answered && (
        <button
          onClick={() => input.trim() && onAnswer(correct, input)}
          disabled={!input.trim()}
          className="px-6 py-2.5 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 disabled:opacity-40 transition-all"
        >
          {t("Kiểm tra", "Prüfen")}
        </button>
      )}
    </div>
  );
}

/* Generic fallback for unknown types (transform, errorCorrection, etc.) */
function GenericRenderer({ exercise, onAnswer, answered, selectedAnswer, t }: ExerciseRendererProps) {
  const [input, setInput] = useState("");
  const hasOptions = exercise.options && exercise.options.length > 0;

  if (hasOptions) {
    return (
      <div className="space-y-3">
        {exercise.options!.map((opt) => {
          const isCorrect = normalizeAnswer(opt) === normalizeAnswer(exercise.correctAnswer);
          const isSelected = selectedAnswer === opt;
          let cls = "w-full text-left px-5 py-3 rounded-xl border-2 font-medium transition-all duration-200 ";
          if (!answered) {
            cls += "border-gray-200 hover:border-blue-400 hover:bg-blue-50 cursor-pointer";
          } else if (isSelected && isCorrect) {
            cls += "border-emerald-500 bg-emerald-50 text-emerald-800";
          } else if (isSelected && !isCorrect) {
            cls += "border-red-400 bg-red-50 text-red-800";
          } else if (isCorrect) {
            cls += "border-emerald-500 bg-emerald-50 text-emerald-700";
          } else {
            cls += "border-gray-100 text-gray-400";
          }
          return (
            <button key={opt} disabled={answered} className={cls} onClick={() => onAnswer(isCorrect, opt)}>
              {opt}
            </button>
          );
        })}
      </div>
    );
  }

  const correct = normalizeAnswer(input) === normalizeAnswer(exercise.correctAnswer);
  return (
    <div className="space-y-3">
      <input
        type="text"
        value={answered ? (selectedAnswer ?? "") : input}
        onChange={(e) => setInput(e.target.value)}
        disabled={answered}
        placeholder={t("Nhập câu trả lời...", "Antwort eingeben...")}
        className={`w-full px-5 py-3.5 rounded-xl border-2 text-lg outline-none transition-all ${
          answered ? (correct ? "border-emerald-500 bg-emerald-50" : "border-red-400 bg-red-50") : "border-gray-200 focus:border-blue-400"
        }`}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !answered && input.trim()) onAnswer(correct, input);
        }}
      />
      {!answered && (
        <button
          onClick={() => input.trim() && onAnswer(correct, input)}
          disabled={!input.trim()}
          className="px-6 py-2.5 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 disabled:opacity-40 transition-all"
        >
          {t("Kiểm tra", "Prüfen")}
        </button>
      )}
      {answered && !correct && (
        <p className="text-sm text-gray-600">
          {t("Đáp án đúng:", "Richtige Antwort:")} <span className="font-semibold text-emerald-700">{exercise.correctAnswer}</span>
        </p>
      )}
    </div>
  );
}

/* ─── TYPE BADGE ─── */
const typeBadgeColors: Record<string, string> = {
  multipleChoice: "bg-blue-100 text-blue-800",
  fillBlank: "bg-amber-100 text-amber-800",
  trueFalse: "bg-purple-100 text-purple-800",
  translate: "bg-teal-100 text-teal-800",
  matching: "bg-pink-100 text-pink-800",
  reorder: "bg-orange-100 text-orange-800",
  articleChoice: "bg-yellow-100 text-yellow-800",
  conjugation: "bg-indigo-100 text-indigo-800",
  transform: "bg-cyan-100 text-cyan-800",
  errorCorrection: "bg-rose-100 text-rose-800",
};

const typeLabels: Record<string, string> = {
  multipleChoice: "Trắc nghiệm",
  fillBlank: "Điền từ",
  trueFalse: "Đúng/Sai",
  translate: "Dịch",
  matching: "Nối",
  reorder: "Sắp xếp",
  articleChoice: "Mạo từ",
  conjugation: "Chia động từ",
  transform: "Biến đổi",
  errorCorrection: "Sửa lỗi",
};

/* ─── MAIN PAGE ─── */
export default function UebungenPage() {
  const params = useParams();
  const router = useRouter();
  const t = useT();
  const levelId = (params.level as string)?.toLowerCase() as Level;

  const [selectedChapter, setSelectedChapter] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [completed, setCompleted] = useState(false);
  const [animClass, setAnimClass] = useState("");

  const allExercises = exercisesByLevel[levelId] ?? [];
  const chapters = useMemo(() => {
    const ids = [...new Set(allExercises.map((e) => e.chapterId))].sort((a, b) => a - b);
    return ids;
  }, [allExercises]);

  const exercises = useMemo(() => {
    if (selectedChapter === null) return allExercises;
    return allExercises.filter((e) => e.chapterId === selectedChapter);
  }, [allExercises, selectedChapter]);

  const currentExercise = exercises[currentIndex] ?? null;

  const handleAnswerWithSelection = useCallback(
    (correct: boolean, answer?: string) => {
      if (answered) return;
      setSelectedAnswer(answer ?? null);
      setAnswered(true);
      setIsCorrect(correct);
      if (correct) {
        setScore((s) => s + 1);
        setAnimClass("animate-correct");
      } else {
        setAnimClass("animate-wrong");
      }
    },
    [answered]
  );

  const handleNext = () => {
    if (currentIndex + 1 >= exercises.length) {
      setCompleted(true);
    } else {
      setCurrentIndex((i) => i + 1);
      setAnswered(false);
      setIsCorrect(false);
      setSelectedAnswer(null);
      setAnimClass("");
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setScore(0);
    setAnswered(false);
    setIsCorrect(false);
    setSelectedAnswer(null);
    setCompleted(false);
    setAnimClass("");
  };

  const handleChapterChange = (ch: number | null) => {
    setSelectedChapter(ch);
    setCurrentIndex(0);
    setScore(0);
    setAnswered(false);
    setIsCorrect(false);
    setSelectedAnswer(null);
    setCompleted(false);
    setAnimClass("");
  };

  // Reset when level changes
  useEffect(() => {
    setSelectedChapter(null);
    setCurrentIndex(0);
    setScore(0);
    setAnswered(false);
    setIsCorrect(false);
    setSelectedAnswer(null);
    setCompleted(false);
    setAnimClass("");
  }, [levelId]);

  if (!LEVELS.includes(levelId)) {
    return (
      <AppShell>
        <div className="min-h-screen flex flex-col items-center justify-center px-6">
          <div className="text-6xl font-extrabold text-gray-200">404</div>
          <h1 className="mt-4 text-2xl font-bold text-gray-900">
            {t("Khong tim thay bai tap", "Ubungen nicht gefunden")}
          </h1>
          <p className="mt-2 text-gray-500">
            {t(`Cap do "${levelId}" khong ton tai.`, `Das Niveau "${levelId}" existiert nicht.`)}
          </p>
        </div>
      </AppShell>
    );
  }

  const progress = exercises.length > 0 ? ((currentIndex + (answered ? 1 : 0)) / exercises.length) * 100 : 0;

  function renderExercise(ex: Exercise) {
    const props: ExerciseRendererProps = {
      exercise: ex,
      onAnswer: handleAnswerWithSelection,
      answered,
      selectedAnswer,
      t,
    };

    switch (ex.type) {
      case "multipleChoice":
        return <MultipleChoiceRenderer {...props} />;
      case "fillBlank":
        return <FillBlankRenderer {...props} />;
      case "trueFalse":
        return <TrueFalseRenderer {...props} />;
      case "translate":
        return <TranslateRenderer {...props} />;
      case "matching":
        return <MatchingRenderer {...props} />;
      case "reorder":
        return <ReorderRenderer key={ex.id} {...props} />;
      case "articleChoice":
        return <ArticleChoiceRenderer {...props} />;
      case "conjugation":
        return <ConjugationRenderer {...props} />;
      default:
        return <GenericRenderer {...props} />;
    }
  }

  return (
    <AppShell>
      {/* Inline keyframe styles */}
      {/* eslint-disable-next-line react/no-unknown-property */}
      <style>{`
        @keyframes correctPulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.02); }
          100% { transform: scale(1); }
        }
        @keyframes wrongShake {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-8px); }
          40% { transform: translateX(8px); }
          60% { transform: translateX(-4px); }
          80% { transform: translateX(4px); }
        }
        .animate-correct { animation: correctPulse 0.4s ease-in-out; }
        .animate-wrong { animation: wrongShake 0.4s ease-in-out; }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fadeInUp 0.3s ease-out; }
        @keyframes progressGrow {
          from { width: 0%; }
        }
        .animate-progress { animation: progressGrow 0.5s ease-out; }
        @keyframes confetti {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(-60px) rotate(720deg); opacity: 0; }
        }
        .animate-confetti { animation: confetti 0.8s ease-out forwards; }
      `}
      </style>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* ─── HEADER ─── */}
        <div className="bg-white border-b border-gray-100 sticky top-16 z-10">
          <div className="max-w-4xl mx-auto px-4 py-4">
            {/* Level tabs */}
            <div className="flex gap-2 mb-4 overflow-x-auto pb-1">
              {LEVELS.map((lv) => (
                <button
                  key={lv}
                  onClick={() => router.push(`/uebungen/${lv}`)}
                  className={`px-4 py-2 rounded-lg font-bold text-sm uppercase tracking-wide transition-all whitespace-nowrap ${
                    lv === levelId
                      ? "bg-blue-600 text-white shadow-md shadow-blue-200"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {lv.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Chapter filter */}
            <div className="flex gap-2 overflow-x-auto pb-1">
              <button
                onClick={() => handleChapterChange(null)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                  selectedChapter === null
                    ? "bg-gray-800 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {t("Tat ca", "Alle")}
              </button>
              {chapters.map((ch) => (
                <button
                  key={ch}
                  onClick={() => handleChapterChange(ch)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                    selectedChapter === ch
                      ? "bg-gray-800 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  Kap. {ch}
                </button>
              ))}
            </div>

            {/* Progress bar */}
            {exercises.length > 0 && !completed && (
              <div className="mt-3">
                <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                  <span>
                    {t("Bai", "Aufgabe")} {currentIndex + 1} / {exercises.length}
                  </span>
                  <span>
                    {score} {t("dung", "richtig")}
                  </span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ─── CONTENT ─── */}
        <div className="max-w-2xl mx-auto px-4 py-8">
          {exercises.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-5xl mb-4 opacity-30">&#128218;</div>
              <h2 className="text-xl font-bold text-gray-400">
                {t("Chua co bai tap cho cap do nay", "Noch keine Ubungen fur dieses Niveau")}
              </h2>
              <p className="mt-2 text-gray-400 text-sm">
                {t("Bai tap se duoc cap nhat som.", "Ubungen werden bald hinzugefugt.")}
              </p>
            </div>
          ) : completed ? (
            /* ─── RESULTS ─── */
            <div className="animate-fade-in-up text-center py-12">
              <div className="relative inline-block mb-6">
                <div className="text-7xl font-black bg-gradient-to-br from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {Math.round((score / exercises.length) * 100)}%
                </div>
                {score / exercises.length >= 0.8 && (
                  <div className="absolute -top-4 -right-4 text-3xl animate-confetti">&#9733;</div>
                )}
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {score / exercises.length >= 0.8
                  ? t("Tuyet voi!", "Ausgezeichnet!")
                  : score / exercises.length >= 0.5
                  ? t("Kha tot!", "Gut gemacht!")
                  : t("Hay luyen tap them!", "Weiter uben!")}
              </h2>
              <p className="text-gray-500 mb-2">
                {t(
                  `Ban tra loi dung ${score} / ${exercises.length} cau hoi`,
                  `Du hast ${score} von ${exercises.length} Aufgaben richtig beantwortet`
                )}
              </p>
              <div className="mt-4 flex flex-col sm:flex-row gap-3 justify-center">
                {/* Score breakdown */}
                <div className="flex gap-6 justify-center mb-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-emerald-600">{score}</div>
                    <div className="text-xs text-gray-500">{t("Dung", "Richtig")}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-500">{exercises.length - score}</div>
                    <div className="text-xs text-gray-500">{t("Sai", "Falsch")}</div>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex gap-3 justify-center">
                <button
                  onClick={handleRestart}
                  className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all shadow-md shadow-blue-200"
                >
                  {t("Lam lai", "Nochmal")}
                </button>
                {selectedChapter !== null && selectedChapter < Math.max(...chapters) && (
                  <button
                    onClick={() => handleChapterChange(selectedChapter + 1)}
                    className="px-6 py-3 rounded-xl bg-gray-800 text-white font-semibold hover:bg-gray-900 transition-all"
                  >
                    {t("Chuong tiep theo", "Nachstes Kapitel")} &rarr;
                  </button>
                )}
              </div>
            </div>
          ) : currentExercise ? (
            /* ─── EXERCISE CARD ─── */
            <div className={`${animClass}`}>
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden animate-fade-in-up">
                {/* Exercise header */}
                <div className="px-6 pt-5 pb-3 flex items-center justify-between">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                      typeBadgeColors[currentExercise.type] ?? "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {typeLabels[currentExercise.type] ?? currentExercise.type}
                  </span>
                  <span className="text-xs text-gray-400">
                    Kap. {currentExercise.chapterId}
                    {currentExercise.difficulty && (
                      <span className="ml-2">
                        {"\u2605".repeat(currentExercise.difficulty)}
                      </span>
                    )}
                  </span>
                </div>

                {/* Question */}
                <div className="px-6 pb-4">
                  <h2 className="text-xl font-bold text-gray-900 leading-relaxed mb-1">
                    {currentExercise.questionDe}
                  </h2>
                  <p className="text-sm text-gray-500">{currentExercise.questionVi}</p>
                  {currentExercise.hint && !answered && (
                    <p className="mt-2 text-xs text-blue-600 bg-blue-50 rounded-lg px-3 py-2">
                      &#128161; {currentExercise.hint}
                    </p>
                  )}
                </div>

                {/* Exercise body */}
                <div className="px-6 pb-6">{renderExercise(currentExercise)}</div>

                {/* Explanation & Next */}
                {answered && (
                  <div
                    className={`px-6 py-4 border-t animate-fade-in-up ${
                      isCorrect ? "bg-emerald-50 border-emerald-100" : "bg-red-50 border-red-100"
                    }`}
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <span className="text-2xl">{isCorrect ? "\u2705" : "\u274C"}</span>
                      <div>
                        <p className="font-semibold text-sm mb-1">
                          {isCorrect
                            ? t("Chinh xac!", "Richtig!")
                            : t("Chua dung.", "Leider falsch.")}
                        </p>
                        <p className="text-sm text-gray-700 leading-relaxed">
                          {currentExercise.explanation}
                        </p>
                        {!isCorrect && (
                          <p className="text-sm mt-1">
                            <span className="text-gray-500">{t("Dap an:", "Antwort:")}</span>{" "}
                            <span className="font-semibold text-emerald-700">{currentExercise.correctAnswer}</span>
                          </p>
                        )}
                      </div>
                    </div>
                    <button
                      onClick={handleNext}
                      className="w-full py-3 rounded-xl bg-gray-900 text-white font-semibold hover:bg-gray-800 transition-all"
                    >
                      {currentIndex + 1 >= exercises.length
                        ? t("Xem ket qua", "Ergebnis anzeigen")
                        : t("Bai tiep theo", "Nachste Ubung")}{" "}
                      &rarr;
                    </button>
                  </div>
                )}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </AppShell>
  );
}
