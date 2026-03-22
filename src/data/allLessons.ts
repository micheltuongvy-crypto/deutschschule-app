// Central import of all lesson data across all levels
// Each lesson gets a `level` field so consumers can filter by level

import type { Lesson } from "./lessons/a1/chapters1_3";

// A1
import { a1Chapters1_3 } from "./lessons/a1/chapters1_3";
import { a1Chapters4_6 } from "./lessons/a1/chapters4_6";
import { a1Chapters7_8 } from "./lessons/a1/chapters7_8";
import { a1Chapters9_10 } from "./lessons/a1/chapters9_10";

// A2
import { a2LessonsCh1_3 } from "./lessons/a2/chapters1_3";
import { a2LessonsCh4_6 } from "./lessons/a2/chapters4_6";
import { a2LessonsCh7_8 } from "./lessons/a2/chapters7_8";
import { a2LessonsCh9_10 } from "./lessons/a2/chapters9_10";

// B1
import { b1LessonsCh1 } from "./lessons/b1/chapter1";
import { b1LessonsCh2 } from "./lessons/b1/chapter2";
import { b1LessonsCh3 } from "./lessons/b1/chapter3";
import { b1LessonsCh4_6 } from "./lessons/b1/chapters4_6";
import { b1LessonsCh7_8 } from "./lessons/b1/chapters7_8";
import { b1LessonsCh9_10 } from "./lessons/b1/chapters9_10";

// B2
import { b2LessonsCh1_3 } from "./lessons/b2/chapters1_3";
import { b2LessonsCh4_6 } from "./lessons/b2/chapters4_6";
import { b2LessonsCh7_8 } from "./lessons/b2/chapters7_8";
import { b2LessonsCh9_10 } from "./lessons/b2/chapters9_10";

// C1
import { c1LessonsCh1_3 } from "./lessons/c1/chapters1_3";
import { c1LessonsCh4_6 } from "./lessons/c1/chapters4_6";
import { c1LessonsCh7_8 } from "./lessons/c1/chapters7_8";
import { c1LessonsCh9_10 } from "./lessons/c1/chapters9_10";

// C2
import { c2LessonsCh1_3 } from "./lessons/c2/chapters1_3";
import { c2LessonsCh4_5 } from "./lessons/c2/chapters4_5";
import { c2LessonsCh6_8 } from "./lessons/c2/chapters6_8";
import { c2LessonsCh9_10 } from "./lessons/c2/chapters9_10";

export type LessonWithLevel = Lesson & { level: string };

function addLevel(lessons: Lesson[], level: string): LessonWithLevel[] {
  return lessons.map((l) => ({ ...l, level }));
}

export const allLessons: LessonWithLevel[] = [
  // A1
  ...addLevel(a1Chapters1_3, "a1"),
  ...addLevel(a1Chapters4_6, "a1"),
  ...addLevel(a1Chapters7_8, "a1"),
  ...addLevel(a1Chapters9_10, "a1"),
  // A2
  ...addLevel(a2LessonsCh1_3, "a2"),
  ...addLevel(a2LessonsCh4_6, "a2"),
  ...addLevel(a2LessonsCh7_8, "a2"),
  ...addLevel(a2LessonsCh9_10, "a2"),
  // B1
  ...addLevel(b1LessonsCh1, "b1"),
  ...addLevel(b1LessonsCh2, "b1"),
  ...addLevel(b1LessonsCh3, "b1"),
  ...addLevel(b1LessonsCh4_6, "b1"),
  ...addLevel(b1LessonsCh7_8, "b1"),
  ...addLevel(b1LessonsCh9_10, "b1"),
  // B2
  ...addLevel(b2LessonsCh1_3, "b2"),
  ...addLevel(b2LessonsCh4_6, "b2"),
  ...addLevel(b2LessonsCh7_8, "b2"),
  ...addLevel(b2LessonsCh9_10, "b2"),
  // C1
  ...addLevel(c1LessonsCh1_3, "c1"),
  ...addLevel(c1LessonsCh4_6, "c1"),
  ...addLevel(c1LessonsCh7_8, "c1"),
  ...addLevel(c1LessonsCh9_10, "c1"),
  // C2
  ...addLevel(c2LessonsCh1_3, "c2"),
  ...addLevel(c2LessonsCh4_5, "c2"),
  ...addLevel(c2LessonsCh6_8, "c2"),
  ...addLevel(c2LessonsCh9_10, "c2"),
];
