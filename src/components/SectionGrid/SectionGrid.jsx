import StoriesCard from './StoriesCard';
import GrammarCard from './GrammarCard';
import IdiomCard from './IdiomCard';
import GamesCard from './GamesCard';

export default function SectionGrid() {
  return (
    <section style={{ maxWidth: 1440, margin: '0 auto', padding: '24px 32px 0' }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.55fr 1fr 1fr',
          gridTemplateRows: 'auto auto',
          gap: 16
        }}
      >
        <StoriesCard />
        <GrammarCard />
        <IdiomCard />
        <GamesCard />
      </div>
    </section>
  );
}
