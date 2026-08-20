import { notFound } from "next/navigation";
import { parseLevelSlug } from "@/lib/routes/langLevel";

export default async function LevelLayout({ children, params }: LayoutProps<"/[lang]/[level]">) {
  const { level } = await params;
  if (!parseLevelSlug(level)) notFound();

  return <>{children}</>;
}
