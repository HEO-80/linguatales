import { notFound } from "next/navigation";
import { parseLangSlug } from "@/lib/routes/langLevel";
import AppHeader from "@/components/AppHeader/AppHeader";
import LanguageShelf from "@/components/LanguageShelf/LanguageShelf";
import AppFooter from "@/components/AppFooter/AppFooter";

export default async function LangLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!parseLangSlug(lang)) notFound();

  return (
    <>
      <AppHeader />
      <main>
        <LanguageShelf />
        {children}
      </main>
      <AppFooter />
    </>
  );
}
