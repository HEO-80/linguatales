import { notFound } from "next/navigation";
import { parseLangSlug, parseLevelSlug, isPilotedLangLevel } from "@/lib/routes/langLevel";
import { getLanguageData } from "@/data";
import StoryReader from "@/components/StoryReader/StoryReader";

export default async function StoryPage({ params }: PageProps<"/[lang]/[level]/story/[id]">) {
  const { lang, level, id } = await params;
  const langCode = parseLangSlug(lang);
  const levelCode = parseLevelSlug(level);

  // Defensivo: ningún link real apunta a un par idioma/nivel no pilotado.
  if (!langCode || !levelCode || !isPilotedLangLevel(langCode, levelCode)) notFound();

  const { storyList } = getLanguageData(langCode);
  const story = storyList.find(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- storyList viene de data/*.js (sin tipos)
    (s: any) => s.id === id && s.level === levelCode && Array.isArray(s.sentences) && s.sentences.length > 0
  );

  if (!story) notFound();

  return <StoryReader key={story.id} story={story} />;
}
