import { notFound, redirect } from "next/navigation";
import { parseLangSlug, parseLevelSlug, toLangSlug, toLevelSlug } from "@/lib/routes/langLevel";
import { storiesOf } from "@/data/stories";
import ComingSoonPanel from "@/components/ComingSoon/ComingSoonPanel";

export default async function LevelPage({ params }: PageProps<"/[lang]/[level]">) {
  const { lang, level } = await params;
  const langCode = parseLangSlug(lang);
  const levelCode = parseLevelSlug(level);
  if (!langCode || !levelCode) notFound();

  const stories = storiesOf(langCode, levelCode);
  if (stories.length === 0) {
    return (
      <section style={{ maxWidth: 1440, margin: "24px auto 0", padding: "0 32px" }}>
        <ComingSoonPanel message={`Todavía no hay relatos de ${langCode} en ${levelCode}.`} />
      </section>
    );
  }

  redirect(`/${toLangSlug(langCode)}/${toLevelSlug(levelCode)}/story/${stories[0].num}`);
}
