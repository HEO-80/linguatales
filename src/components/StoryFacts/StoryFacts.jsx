import GrammarCard from './GrammarCard';
import IdiomCard from './IdiomCard';

export default function StoryFacts() {
  return (
    <section style={{ maxWidth: 1440, margin: '20px auto 0', padding: '0 32px', display: 'flex', gap: 16 }}>
      <div style={{ flex: 1 }}>
        <GrammarCard />
      </div>
      <div style={{ flex: 1 }}>
        <IdiomCard />
      </div>
    </section>
  );
}
