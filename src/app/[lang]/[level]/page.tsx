import StoriesCard from "@/components/SectionGrid/StoriesCard";
import FeaturedStoryCard from "@/components/LevelOverview/FeaturedStoryCard";
import LearnThisLevelSection from "@/components/LevelOverview/LearnThisLevelSection";
import GamesSectionHeader from "@/components/Games/GamesSectionHeader";
import RealEnglishTeaser from "@/components/RealEnglish/RealEnglishTeaser";
import WordOrderGame from "@/components/Games/WordOrderGame/WordOrderGame";
import GapFillGame from "@/components/Games/GapFillGame/GapFillGame";
import DictationGame from "@/components/Games/DictationGame/DictationGame";
import GameCatalogue from "@/components/Games/GameCatalogue";
import { getLevelContent } from "@/data";
import { parseLangSlug, parseLevelSlug, DEFAULT_LEVEL } from "@/lib/routes/langLevel";

export default async function LevelPage({ params }: PageProps<"/[lang]/[level]">) {
  const { lang, level } = await params;

  const langCode = parseLangSlug(lang) ?? "EN";
  const levelCode = parseLevelSlug(level) ?? DEFAULT_LEVEL;
  const { featuredStory } = getLevelContent(langCode, levelCode);
  const gameKey = `${lang}-${level}-${featuredStory.id}`;

  return (
    <>
      <section style={{ maxWidth: 1440, margin: "24px auto 0", padding: "0 32px", display: "flex", flexDirection: "column", gap: 16 }}>
        <StoriesCard />
        <FeaturedStoryCard />
      </section>

      <LearnThisLevelSection />

      <RealEnglishTeaser />

      <section id="games" style={{ maxWidth: 1440, margin: "24px auto 0", padding: "0 32px" }}>
        <GamesSectionHeader />
        <div style={{ display: "flex", gap: 16, alignItems: "flex-start", marginTop: 16 }}>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 16 }}>
            <WordOrderGame key={`word-${gameKey}`} />
            <GapFillGame key={`gap-${gameKey}`} />
            <DictationGame key={`dictation-${gameKey}`} />
          </div>
          <GameCatalogue />
        </div>
      </section>
    </>
  );
}
