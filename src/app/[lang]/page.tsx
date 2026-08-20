import { redirect } from "next/navigation";
import { toLevelSlug, DEFAULT_LEVEL } from "@/lib/routes/langLevel";
import { resolveLevel } from "@/data/stories";
import { LEVELS } from "@/theme/languages";

export default async function LangPage({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  const levelCode = resolveLevel(lang.toUpperCase(), DEFAULT_LEVEL, LEVELS);
  redirect(`/${lang}/${toLevelSlug(levelCode)}`);
}
