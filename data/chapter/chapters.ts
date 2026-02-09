import { CHAPTER_1_PRACTICE } from "./Chapter1/PracticeChapter1";
import { CHAPTER_1_FINAL_EXAM } from "./Chapter1/ExamChapter1";

import { CHAPTER_2_PRACTICE } from "./Chapter2/PracticeChapter2";
import { CHAPTER_2_FINAL_EXAM } from "./Chapter2/ExamChapter2";

import { CHAPTER_3_PRACTICE } from "./Chapter3/PracticeChapter3";
import { CHAPTER_3_FINAL_EXAM } from "./Chapter3/ExamChapter3";

import { CHAPTER_4_PRACTICE } from "./Chapter4/PracticeChapter4";
import { CHAPTER_4_FINAL_EXAM } from "./Chapter4/ExamChapter4";

import { CHAPTER_5_PRACTICE } from "./Chapter5/PracticeChapter5";
import { CHAPTER_5_FINAL_EXAM } from "./Chapter5/ExamChapter5";
import { FINAL_EXAM } from "./MockExam/finalMockExam";

export const PRACTICE_CHAPTERS = [
  {
    ...CHAPTER_1_PRACTICE,
    exam: CHAPTER_1_FINAL_EXAM,
  },
  {
    ...CHAPTER_2_PRACTICE,
    exam: CHAPTER_2_FINAL_EXAM,
  },
  {
    ...CHAPTER_3_PRACTICE,
    exam: CHAPTER_3_FINAL_EXAM,
  },
  {
    ...CHAPTER_4_PRACTICE,
    exam: CHAPTER_4_FINAL_EXAM,
  },
  {
    ...CHAPTER_5_PRACTICE,
    exam: CHAPTER_5_FINAL_EXAM,
  },
  {
    ...FINAL_EXAM,
    exam: FINAL_EXAM,
  },
];
