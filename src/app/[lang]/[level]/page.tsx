import { notFound, redirect } from "next/navigation";
import { parseLangSlug, parseLevelSlug, toLangSlug, toLevelSlug } from "@/lib/routes/langLevel";
import { storiesOf } from "@/data/stories";
import LevelPreviewPage from "@/components/ComingSoon/LevelPreviewPage";

export default async function LevelPage({ params }: PageProps<"/[lang]/[level]">) {
  const { lang, level } = await params;
  const langCode = parseLangSlug(lang);
  const levelCode = parseLevelSlug(level);
  if (!langCode || !levelCode) notFound();

  const stories = storiesOf(langCode, levelCode);
  if (stories.length === 0) {
    return <LevelPreviewPage lang={langCode} level={levelCode} />;
  }

  redirect(`/${toLangSlug(langCode)}/${toLevelSlug(levelCode)}/story/${stories[0].num}`);
}
