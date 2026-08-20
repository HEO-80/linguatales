import { notFound } from "next/navigation";
import { parseLangSlug, parseLevelSlug } from "@/lib/routes/langLevel";
import { has, storiesOf } from "@/data/stories";
import StoryReaderPage from "@/components/StoryReader/StoryReaderPage";

export default async function StoryPage({ params }: PageProps<"/[lang]/[level]/story/[num]">) {
  const { lang, level, num } = await params;
  const langCode = parseLangSlug(lang);
  const levelCode = parseLevelSlug(level);
  if (!langCode || !levelCode || !has(langCode, levelCode)) notFound();

  const story = storiesOf(langCode, levelCode).find((s: { num: string }) => s.num === num);
  if (!story) notFound();

  return (
    <StoryReaderPage
      key={`${langCode}-${levelCode}-${num}`}
      story={story}
      lang={langCode}
      level={levelCode}
    />
  );
}
