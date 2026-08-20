import { STORY_LIST } from '../../stories.en';

const GRAMMAR_REFS = {
  'en-a-new-morning': ['present-simple', 'time-expressions'],
  'en-the-little-bakery': ['present-simple', 'adjectives']
};

export const STORIES = STORY_LIST.filter((s) => s.level === 'A1').map((s) => ({
  ...s,
  grammarRefs: GRAMMAR_REFS[s.id] || []
}));

export const FEATURED_ID = 'en-a-new-morning';
