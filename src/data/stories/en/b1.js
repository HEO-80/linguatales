import { STORY_LIST } from '../../stories.en';

const GRAMMAR_REFS = {
  'en-a-letter-to-a-friend': ['present-perfect', 'time-markers', 'time-expressions']
};

export const STORIES = STORY_LIST.filter((s) => s.level === 'B1').map((s) => ({
  ...s,
  grammarRefs: GRAMMAR_REFS[s.id] || []
}));

export const FEATURED_ID = 'en-a-letter-to-a-friend';
