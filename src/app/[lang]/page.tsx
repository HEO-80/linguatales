import { redirect } from "next/navigation";
import { toLevelSlug, DEFAULT_LEVEL } from "@/lib/routes/langLevel";

export default async function LangPage({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  redirect(`/${lang}/${toLevelSlug(DEFAULT_LEVEL)}`);
}
