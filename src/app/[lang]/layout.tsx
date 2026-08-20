import { notFound } from "next/navigation";
import { parseLangSlug } from "@/lib/routes/langLevel";
import AppShell from "@/components/AppShell/AppShell";

export default async function LangLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!parseLangSlug(lang)) notFound();

  return <AppShell>{children}</AppShell>;
}
