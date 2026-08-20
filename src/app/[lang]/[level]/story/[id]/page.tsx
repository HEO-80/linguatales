import { notFound } from "next/navigation";
import { parseLangSlug, parseLevelSlug, isPilotedLangLevel } from "@/lib/routes/langLevel";
import { getStory } from "@/data";
import StoryReader from "@/components/StoryReader/StoryReader";

export default async function StoryPage({ params }: PageProps<"/[lang]/[level]/story/[id]">) {
  const { lang, level, id } = await params;
  const langCode = parseLangSlug(lang);
  const levelCode = parseLevelSlug(level);

  // Defensivo: ningún link real apunta a un par idioma/nivel no pilotado.
  if (!langCode || !levelCode || !isPilotedLangLevel(langCode, levelCode)) notFound();

  const story = getStory(langCode, id);
  const isValid = story && story.level === levelCode && Array.isArray(story.sentences) && story.sentences.length > 0;

  if (!isValid) notFound();

  return <StoryReader key={story.id} story={story} />;
}
