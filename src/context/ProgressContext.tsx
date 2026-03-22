"use client";

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from "react";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface ActivityEntry {
  date: string;
  action: string;
  detail: string;
}

interface ProgressData {
  completedLessons: string[];
  knownWords: string[];
  exerciseScores: Record<string, number>;
  streak: number;
  lastActiveDate: string | null;
  activityLog: ActivityEntry[];
}

interface ProgressContextType {
  progress: ProgressData;
  hydrated: boolean;
  completeLesson: (lessonId: string) => void;
  markWordKnown: (wordId: string) => void;
  saveExerciseScore: (key: string, score: number) => void;
  isLessonComplete: (lessonId: string) => boolean;
  isWordKnown: (wordId: string) => boolean;
  getBestScore: (key: string) => number | null;
  getLevelProgress: (level: string, totalLessons: number) => number;
}

// ---------------------------------------------------------------------------
// Defaults
// ---------------------------------------------------------------------------

const STORAGE_KEY = "ds-progress";

const defaultProgress: ProgressData = {
  completedLessons: [],
  knownWords: [],
  exerciseScores: {},
  streak: 0,
  lastActiveDate: null,
  activityLog: [],
};

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function todayISO(): string {
  return new Date().toISOString().slice(0, 10);
}

function yesterdayISO(): string {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return d.toISOString().slice(0, 10);
}

function loadProgress(): ProgressData {
  if (typeof window === "undefined") return defaultProgress;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultProgress;
    const parsed = JSON.parse(raw);
    return { ...defaultProgress, ...parsed };
  } catch {
    return defaultProgress;
  }
}

function saveProgress(data: ProgressData) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // localStorage full or unavailable
  }
}

function updateStreak(data: ProgressData): ProgressData {
  const today = todayISO();
  const yesterday = yesterdayISO();

  if (data.lastActiveDate === today) return data;
  if (data.lastActiveDate === yesterday) {
    return { ...data, streak: data.streak + 1, lastActiveDate: today };
  }
  // Gap of more than 1 day — reset streak
  return { ...data, streak: 1, lastActiveDate: today };
}

function addActivity(data: ProgressData, action: string, detail: string): ProgressData {
  const entry: ActivityEntry = { date: todayISO(), action, detail };
  const log = [entry, ...data.activityLog].slice(0, 20);
  return { ...data, activityLog: log };
}

// ---------------------------------------------------------------------------
// Context
// ---------------------------------------------------------------------------

const ProgressContext = createContext<ProgressContextType>({
  progress: defaultProgress,
  hydrated: false,
  completeLesson: () => {},
  markWordKnown: () => {},
  saveExerciseScore: () => {},
  isLessonComplete: () => false,
  isWordKnown: () => false,
  getBestScore: () => null,
  getLevelProgress: () => 0,
});

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState<ProgressData>(defaultProgress);
  const [hydrated, setHydrated] = useState(false);

  // Hydrate from localStorage on mount
  useEffect(() => {
    const loaded = loadProgress();
    const withStreak = updateStreak(loaded);
    setProgress(withStreak);
    saveProgress(withStreak);
    setHydrated(true);
  }, []);

  const persist = useCallback((updater: (prev: ProgressData) => ProgressData) => {
    setProgress((prev) => {
      const next = updater(prev);
      saveProgress(next);
      return next;
    });
  }, []);

  const completeLesson = useCallback((lessonId: string) => {
    persist((prev) => {
      if (prev.completedLessons.includes(lessonId)) return prev;
      const updated = {
        ...prev,
        completedLessons: [...prev.completedLessons, lessonId],
      };
      return addActivity(updateStreak(updated), "lesson", lessonId);
    });
  }, [persist]);

  const markWordKnown = useCallback((wordId: string) => {
    persist((prev) => {
      if (prev.knownWords.includes(wordId)) return prev;
      const updated = {
        ...prev,
        knownWords: [...prev.knownWords, wordId],
      };
      return updateStreak(updated);
    });
  }, [persist]);

  const saveExerciseScore = useCallback((key: string, score: number) => {
    persist((prev) => {
      const existing = prev.exerciseScores[key];
      if (existing !== undefined && existing >= score) return prev;
      const updated = {
        ...prev,
        exerciseScores: { ...prev.exerciseScores, [key]: score },
      };
      return addActivity(updateStreak(updated), "exercise", `${key}: ${score}%`);
    });
  }, [persist]);

  const isLessonComplete = useCallback(
    (lessonId: string) => progress.completedLessons.includes(lessonId),
    [progress.completedLessons]
  );

  const isWordKnown = useCallback(
    (wordId: string) => progress.knownWords.includes(wordId),
    [progress.knownWords]
  );

  const getBestScore = useCallback(
    (key: string) => progress.exerciseScores[key] ?? null,
    [progress.exerciseScores]
  );

  const getLevelProgress = useCallback(
    (level: string, totalLessons: number) => {
      if (totalLessons === 0) return 0;
      const completed = progress.completedLessons.filter((id) =>
        id.startsWith(`${level}-`)
      ).length;
      return Math.round((completed / totalLessons) * 100);
    },
    [progress.completedLessons]
  );

  return (
    <ProgressContext.Provider
      value={{
        progress,
        hydrated,
        completeLesson,
        markWordKnown,
        saveExerciseScore,
        isLessonComplete,
        isWordKnown,
        getBestScore,
        getLevelProgress,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  return useContext(ProgressContext);
}
