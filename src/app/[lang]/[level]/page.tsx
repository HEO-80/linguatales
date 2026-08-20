import SectionGrid from "@/components/SectionGrid/SectionGrid";
import RealEnglishTeaser from "@/components/RealEnglish/RealEnglishTeaser";
import WordOrderGame from "@/components/Games/WordOrderGame/WordOrderGame";
import GapFillGame from "@/components/Games/GapFillGame/GapFillGame";
import DictationGame from "@/components/Games/DictationGame/DictationGame";
import GameCatalogue from "@/components/Games/GameCatalogue";

export default async function LevelPage({ params }: PageProps<"/[lang]/[level]">) {
  const { lang } = await params;

  return (
    <>
      <SectionGrid />
      <RealEnglishTeaser />

      <section style={{ maxWidth: 1440, margin: "24px auto 0", padding: "0 32px" }}>
        <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 16 }}>
            <WordOrderGame key={`word-${lang}`} />
            <GapFillGame key={`gap-${lang}`} />
            <DictationGame key={`dictation-${lang}`} />
          </div>
          <GameCatalogue />
        </div>
      </section>
    </>
  );
}
