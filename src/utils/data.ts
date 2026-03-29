import type { Certificate, Chapter } from "#/types";

import certificatesData from "#/data/certificates.json";
import genAiChapters from "#/data/chapters/gen-ai.json";

const chaptersMap: Record<string, Array<Chapter>> = {
  "gen-ai": genAiChapters,
};

export function getCertificates(): Array<Certificate> {
  return certificatesData;
}

export function getCertificateById(certId: string): Certificate | undefined {
  return certificatesData.find((cert) => cert.id === certId);
}

export function getChapters(certId: string): Array<Chapter> {
  return chaptersMap[certId] ?? [];
}

export function getChapterById(
  certId: string,
  chapterId: string,
): Chapter | undefined {
  const chapters = getChapters(certId);
  return chapters.find((ch) => ch.id === chapterId);
}
