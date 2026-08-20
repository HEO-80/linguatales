import { STORY_LIST } from '../../stories.en';

const GRAMMAR_REFS = {
  'en-a-trip-to-the-beach': ['past-simple', 'adjectives'],
  'en-learning-to-cook': ['past-simple', 'sequencing-words'],
  'en-the-new-job': ['past-simple', 'adjectives']
};

export const STORIES = STORY_LIST.filter((s) => s.level === 'A2').map((s) => ({
  ...s,
  grammarRefs: GRAMMAR_REFS[s.id] || []
}));

export const FEATURED_ID = 'en-a-trip-to-the-beach';
