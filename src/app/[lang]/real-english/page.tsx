import { parseLangSlug } from "@/lib/routes/langLevel";
import { getRealEnglishDialogues } from "@/data";
import RealEnglishReader from "@/components/RealEnglish/RealEnglishReader";
import ComingSoonPanel from "@/components/ComingSoon/ComingSoonPanel";

export default async function RealEnglishPage({ params }: PageProps<"/[lang]/real-english">) {
  const { lang } = await params;
  // El layout de [lang] ya validó el slug; 'EN' es un fallback defensivo.
  const langCode = parseLangSlug(lang) ?? "EN";
  const dialogues = getRealEnglishDialogues(langCode);

  if (dialogues.length === 0) {
    return (
      <section style={{ maxWidth: 1440, margin: "24px auto 0", padding: "0 32px" }}>
        <ComingSoonPanel message="Todavía no hay contenido de argot para este idioma." />
      </section>
    );
  }

  return <RealEnglishReader />;
}
